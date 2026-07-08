/**
 * One-off image pipeline: converts raw project screenshots into optimized
 * WebP covers, and generates the favicon/manifest icon set from the brand
 * mark SVG. Re-run manually whenever source images change.
 *
 * Usage: node scripts/optimize-images.js
 */
const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

const RAW_DIR = process.env.RAW_SHOTS_DIR
const STATIC_DIR = path.join(__dirname, "..", "static")
const PROJECTS_OUT = path.join(STATIC_DIR, "images", "projects")

const PROJECT_SLUGS = [
  "arms-of-eve",
  "aussie-chef",
  "sardes",
  "buro-koorts",
  "werken-bij-hubo",
  "swati-procon",
]

async function buildProjectCovers() {
  if (!RAW_DIR || !fs.existsSync(RAW_DIR)) {
    console.log("Skipping project covers (RAW_SHOTS_DIR not set/found).")
    return
  }
  fs.mkdirSync(PROJECTS_OUT, { recursive: true })

  for (const slug of PROJECT_SLUGS) {
    const rawPath = path.join(RAW_DIR, `${slug}.raw`)
    if (!fs.existsSync(rawPath)) {
      console.warn(`  ! missing raw file for ${slug}`)
      continue
    }
    const input = sharp(rawPath).rotate()

    await input
      .clone()
      .resize({ width: 1600, height: 1000, fit: "cover", position: "top" })
      .webp({ quality: 72 })
      .toFile(path.join(PROJECTS_OUT, `${slug}-cover-1600.webp`))

    await input
      .clone()
      .resize({ width: 800, height: 500, fit: "cover", position: "top" })
      .webp({ quality: 70 })
      .toFile(path.join(PROJECTS_OUT, `${slug}-cover-800.webp`))

    console.log(`  ✓ ${slug} covers written`)
  }
}

async function buildFavicons() {
  const svgPath = path.join(STATIC_DIR, "favicon.svg")
  if (!fs.existsSync(svgPath)) {
    console.warn("  ! static/favicon.svg not found, skipping favicon set")
    return
  }
  const svgBuffer = fs.readFileSync(svgPath)
  const iconsDir = path.join(STATIC_DIR, "icons")
  fs.mkdirSync(iconsDir, { recursive: true })

  await sharp(svgBuffer, { density: 384 })
    .resize(180, 180)
    .png()
    .toFile(path.join(STATIC_DIR, "apple-touch-icon.png"))

  await sharp(svgBuffer, { density: 384 })
    .resize(192, 192)
    .png()
    .toFile(path.join(iconsDir, "android-chrome-192x192.png"))

  await sharp(svgBuffer, { density: 384 })
    .resize(512, 512)
    .png()
    .toFile(path.join(iconsDir, "android-chrome-512x512.png"))

  // favicon.ico built from a 32x32 + 16x16 PNG set via sharp's PNG output;
  // browsers accept a PNG-in-.ico fine for modern rendering needs, but to
  // keep a true multi-res ICO we write raw PNG buffers into an ICO container.
  const sizes = [16, 32, 48]
  const pngBuffers = await Promise.all(
    sizes.map((s) => sharp(svgBuffer, { density: 384 }).resize(s, s).png().toBuffer())
  )
  fs.writeFileSync(path.join(STATIC_DIR, "favicon.ico"), buildIco(pngBuffers, sizes))

  console.log("  ✓ favicon set written (apple-touch-icon, android icons, favicon.ico)")
}

async function buildOgImage() {
  const ogDir = path.join(STATIC_DIR, "images")
  fs.mkdirSync(ogDir, { recursive: true })

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#141416"/>
          <stop offset="1" stop-color="#0b0b0c"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <rect x="0" y="0" width="1200" height="630" fill="none" stroke="#26262b" stroke-width="2"/>
      <circle cx="1080" cy="90" r="140" fill="#c6f135" opacity="0.08"/>
      <text x="90" y="300" font-family="'Space Grotesk', Arial, sans-serif" font-size="88" font-weight="700" fill="#f4f4ef">Rahul Tailor</text>
      <rect x="92" y="330" width="64" height="6" rx="3" fill="#c6f135"/>
      <text x="90" y="400" font-family="'Inter', Arial, sans-serif" font-size="34" fill="#9a9a94">Senior Frontend Developer</text>
      <text x="90" y="450" font-family="'Inter', Arial, sans-serif" font-size="26" fill="#6c6c68">Frontend engineering, UI/UX &amp; motion design</text>
      <text x="90" y="560" font-family="'Space Mono', monospace" font-size="22" fill="#c6f135">rahultailor.dev</text>
    </svg>
  `

  await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(path.join(ogDir, "og-default.jpg"))

  console.log("  ✓ og-default.jpg written")
}

// Minimal ICO container: header + directory entries + raw PNG payloads (PNG-in-ICO is
// supported by all modern browsers/OSes since Windows Vista / any modern browser).
function buildIco(pngBuffers, sizes) {
  const count = pngBuffers.length
  const headerSize = 6
  const dirEntrySize = 16
  let offset = headerSize + dirEntrySize * count

  const header = Buffer.alloc(headerSize)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(count, 4)

  const dirEntries = []
  for (let i = 0; i < count; i++) {
    const size = sizes[i]
    const buf = pngBuffers[i]
    const entry = Buffer.alloc(dirEntrySize)
    entry.writeUInt8(size === 256 ? 0 : size, 0)
    entry.writeUInt8(size === 256 ? 0 : size, 1)
    entry.writeUInt8(0, 2)
    entry.writeUInt8(0, 3)
    entry.writeUInt16LE(1, 4)
    entry.writeUInt16LE(32, 6)
    entry.writeUInt32LE(buf.length, 8)
    entry.writeUInt32LE(offset, 12)
    offset += buf.length
    dirEntries.push(entry)
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers])
}

async function main() {
  console.log("Building project covers...")
  await buildProjectCovers()
  console.log("Building favicon set...")
  await buildFavicons()
  console.log("Building OG share image...")
  await buildOgImage()
  console.log("Done.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
