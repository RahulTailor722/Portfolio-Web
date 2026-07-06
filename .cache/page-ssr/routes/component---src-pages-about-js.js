"use strict";
exports.id = "component---src-pages-about-js";
exports.ids = ["component---src-pages-about-js"];
exports.modules = {

/***/ "./src/components/page-header.js":
/*!***************************************!*\
  !*** ./src/components/page-header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/.pnpm/framer-motion@11.18.2_react_cce3d889a93a74b971da0f2788960b34/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _page_header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header.module.css */ "./src/components/page-header.module.css");



const PageHeader = ({
  eyebrow,
  title,
  subtitle
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: _page_header_module_css__WEBPACK_IMPORTED_MODULE_1__.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _page_header_module_css__WEBPACK_IMPORTED_MODULE_1__.blob,
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, eyebrow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
    className: _page_header_module_css__WEBPACK_IMPORTED_MODULE_1__.eyebrow,
    initial: {
      opacity: 0,
      y: 16
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _page_header_module_css__WEBPACK_IMPORTED_MODULE_1__.dot
  }), eyebrow), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {
    className: _page_header_module_css__WEBPACK_IMPORTED_MODULE_1__.title,
    initial: {
      opacity: 0,
      y: 40
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: [0.16, 1, 0.3, 1]
    }
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
    className: _page_header_module_css__WEBPACK_IMPORTED_MODULE_1__.subtitle,
    initial: {
      opacity: 0,
      y: 24
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.7,
      delay: 0.25
    }
  }, subtitle)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ }),

/***/ "./src/components/page-header.module.css":
/*!***********************************************!*\
  !*** ./src/components/page-header.module.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blob: () => (/* binding */ blob),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   eyebrow: () => (/* binding */ eyebrow),
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   subtitle: () => (/* binding */ subtitle),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
// Exports
var header = "page-header-module--header--94ce5";
var blob = "page-header-module--blob--971fc";
var eyebrow = "page-header-module--eyebrow--83b0a";
var dot = "page-header-module--dot--10a20";
var title = "page-header-module--title--dbc85";
var subtitle = "page-header-module--subtitle--72f25";


/***/ }),

/***/ "./src/components/reveal.js":
/*!**********************************!*\
  !*** ./src/components/reveal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Reveal: () => (/* binding */ Reveal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Reveal = ({
  children,
  delay = 0,
  y = 32,
  className,
  as: Tag = "div"
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag, {
    className: `reveal ${className || ""}`,
    style: {
      opacity: 1,
      transform: "none"
    }
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reveal);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Seo: () => (/* binding */ Seo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Seo = ({
  title,
  description
}) => {
  const fullTitle = title ? `${title} — Rahul Tailor` : "Rahul Tailor — Senior Frontend Developer";
  const desc = description || "Rahul Tailor is a Senior Frontend Developer with 6+ years of experience crafting fast, accessible, and delightful digital products.";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, fullTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: desc
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "theme-color",
    content: "#0b0b0c"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:title",
    content: fullTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:description",
    content: desc
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:type",
    content: "website"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/data/site.js":
/*!**************************!*\
  !*** ./src/data/site.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   experience: () => (/* binding */ experience),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   services: () => (/* binding */ services),
/* harmony export */   skills: () => (/* binding */ skills),
/* harmony export */   stats: () => (/* binding */ stats),
/* harmony export */   techStack: () => (/* binding */ techStack),
/* harmony export */   testimonials: () => (/* binding */ testimonials)
/* harmony export */ });
const skills = [{
  name: "HTML5",
  level: 100
}, {
  name: "CSS3",
  level: 100
}, {
  name: "JavaScript",
  level: 90
}, {
  name: "React JS",
  level: 85
}, {
  name: "Tailwind CSS",
  level: 100
}, {
  name: "Figma",
  level: 100
}, {
  name: "Git",
  level: 85
}, {
  name: "GSAP",
  level: 80
}, {
  name: "HubSpot",
  level: 85
}];
const techStack = ["HTML5", "CSS3", "JavaScript", "React JS", "Tailwind CSS", "Figma", "Git", "GSAP", "HubSpot", "Next.js", "TypeScript", "Framer Motion"];
const services = [{
  id: "01",
  title: "User Research",
  desc: "I analyze user behavior and needs to uncover insights that shape impactful experiences and guide design decisions.",
  tags: ["UX Research", "User Interviews", "Usability Testing"]
}, {
  id: "02",
  title: "UI/UX Design",
  desc: "I craft clean and intuitive interfaces that blend aesthetics with usability, ensuring seamless journeys across web and mobile.",
  tags: ["Wireframing", "Prototyping", "Interaction Design"]
}, {
  id: "03",
  title: "Frontend Development",
  desc: "I transform designs into fast, responsive, and accessible digital products using modern frontend frameworks and best practices.",
  tags: ["React JS", "Next JS", "Tailwind"]
}, {
  id: "04",
  title: "Deployment",
  desc: "I ensure smooth deployment of applications with optimized performance, scalability, and seamless integration across environments.",
  tags: ["Vercel", "Netlify", "CI/CD"]
}];
const projects = [{
  slug: "nova-fintech",
  title: "Nova Finance",
  category: "Fintech Dashboard",
  year: "2025",
  image: "/images/project-1.svg",
  desc: "A real-time analytics dashboard for a modern banking platform with fluid data visualisations.",
  tags: ["Next.js", "TypeScript", "D3", "Tailwind"]
}, {
  slug: "lumen-studio",
  title: "Lumen Studio",
  category: "Creative Agency",
  year: "2024",
  image: "/images/project-2.svg",
  desc: "An award-style agency site driven by GSAP scroll animations and immersive transitions.",
  tags: ["React", "GSAP", "WebGL", "Sass"]
}, {
  slug: "arc-commerce",
  title: "Arc Commerce",
  category: "E-commerce",
  year: "2024",
  image: "/images/project-3.svg",
  desc: "A headless commerce experience with instant search, cart animations and 99+ Lighthouse scores.",
  tags: ["Next.js", "Shopify", "Framer Motion"]
}, {
  slug: "pulse-health",
  title: "Pulse Health",
  category: "SaaS Product",
  year: "2023",
  image: "/images/project-4.svg",
  desc: "A HubSpot-powered marketing site and product UI for a fast-growing health-tech startup.",
  tags: ["HubSpot", "React", "Design System"]
}];
const experience = [{
  role: "Senior Frontend Developer",
  company: "Pixelforge Studio",
  period: "2022 — Present",
  desc: "Leading frontend for flagship client products, building design systems and mentoring a team of 5 developers."
}, {
  role: "Frontend Developer",
  company: "Brightwave Digital",
  period: "2020 — 2022",
  desc: "Delivered high-performance marketing sites and web apps with React, Next.js and HubSpot CMS."
}, {
  role: "UI Developer",
  company: "Nimbus Labs",
  period: "2019 — 2020",
  desc: "Translated Figma designs into responsive, accessible interfaces and reusable component libraries."
}, {
  role: "Junior Web Developer",
  company: "Freelance",
  period: "2018 — 2019",
  desc: "Built websites for local businesses and startups while sharpening core web fundamentals."
}];
const testimonials = [{
  quote: "Rahul turned our messy ideas into a beautifully polished product. The attention to motion and detail is unreal.",
  name: "Sara Mehta",
  title: "Product Lead, Nova Finance"
}, {
  quote: "One of the most reliable frontend engineers I've worked with. Ships fast without ever sacrificing quality.",
  name: "James Carter",
  title: "CTO, Lumen Studio"
}, {
  quote: "Our HubSpot site finally feels premium. Rahul understood both the code and the marketing side perfectly.",
  name: "Aisha Khan",
  title: "Head of Growth, Pulse Health"
}, {
  quote: "Incredible eye for design and a deep understanding of performance. Our Lighthouse scores have never been higher.",
  name: "Diego Torres",
  title: "Founder, Arc Commerce"
}];
const stats = [{
  value: 6,
  suffix: "+",
  label: "Years of experience"
}, {
  value: 60,
  suffix: "+",
  label: "Projects delivered"
}, {
  value: 30,
  suffix: "+",
  label: "Happy clients"
}, {
  value: 14,
  suffix: "",
  label: "Technologies mastered"
}];

/***/ }),

/***/ "./src/pages/about.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/about.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/page-header */ "./src/components/page-header.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/reveal */ "./src/components/reveal.js");
/* harmony import */ var _data_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/site */ "./src/data/site.js");
/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/about.module.css */ "./src/styles/about.module.css");






const TiltCard = ({
  title,
  index,
  desc
}) => {
  const cardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onMouseMove = e => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const degX = y / (rect.height / 2) * -10;
    const degY = x / (rect.width / 2) * 10;
    card.style.transform = `perspective(1000px) rotateX(${degX}deg) rotateY(${degY}deg)`;
  };
  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: cardRef,
    onMouseMove: onMouseMove,
    onMouseLeave: onMouseLeave,
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.tiltCard,
    style: {
      transition: "transform 0.1s ease",
      transformStyle: "preserve-3d"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      transform: "translateZ(25px)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.cardIndex
  }, "0", index), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.cardTitle
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.cardDesc
  }, desc)));
};
const AboutPage = () => {
  const processItems = [{
    title: "User-First Empathy",
    desc: "Designing layouts and interactions with a deep understanding of user behaviors and accessibility requirements."
  }, {
    title: "Precision Engineering",
    desc: "Writing clean, componentized, and semantic code that scales easily and runs efficiently across all browsers."
  }, {
    title: "Immersive Motion",
    desc: "Crafting smooth, high-fidelity micro-interactions and transitions using GSAP and Framer Motion that breathe life into the UI."
  }, {
    title: "Constant Innovation",
    desc: "Continuously learning and integrating the latest technologies like AI, modern CMS tooling (HubSpot), and next-generation frameworks."
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.aboutPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_page_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    eyebrow: "Who I Am",
    title: "About Me",
    subtitle: "Merging design thinking, technical expertise, and custom motion to build premium digital products."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.bioSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.bioGrid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_reveal__WEBPACK_IMPORTED_MODULE_3__.Reveal, {
    y: -30
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.bioText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Crafting experiences that drive engagement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "I am a Senior Frontend Developer with 6+ years of experience. I specialize in translating complex user flows and brand visions into beautifully responsive, fast, and interactive front-end web applications."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Whether it is designing modular components from a Figma workspace, setting up custom animations with GSAP, or implementing highly scalable HubSpot CMS templates, I strive to make sure every line of code is written for durability and performance."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_reveal__WEBPACK_IMPORTED_MODULE_3__.Reveal, {
    y: -30,
    delay: 0.1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.statsGrid
  }, _data_site__WEBPACK_IMPORTED_MODULE_4__.stats.map((s, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: idx,
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.statItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.statVal
  }, s.value, s.suffix), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.statLabel
  }, s.label)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.skillsSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_reveal__WEBPACK_IMPORTED_MODULE_3__.Reveal, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.skillsHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "Technical Expertise"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "lead"
  }, "My tech stack and proficiency across various tools and technologies."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_reveal__WEBPACK_IMPORTED_MODULE_3__.Reveal, {
    delay: 0.05
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.chipGrid
  }, _data_site__WEBPACK_IMPORTED_MODULE_4__.techStack.map(tech => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: tech,
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.chip
  }, tech)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.skillsGrid
  }, _data_site__WEBPACK_IMPORTED_MODULE_4__.skills.map((skill, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_reveal__WEBPACK_IMPORTED_MODULE_3__.Reveal, {
    key: idx,
    delay: idx * 0.04
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.skillCard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.ring
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    viewBox: "0 0 36 36",
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.ringSvg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.ringBg,
    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.ringFill,
    strokeDasharray: `${skill.level}, 100`,
    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.ringPct
  }, skill.level, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.skillName
  }, skill.name))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.processSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_reveal__WEBPACK_IMPORTED_MODULE_3__.Reveal, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.processHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "My Creative Approach"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "lead"
  }, "How I bridge the gap between design and production to create state-of-the-art products."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.processGrid
  }, processItems.map((item, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_reveal__WEBPACK_IMPORTED_MODULE_3__.Reveal, {
    key: idx,
    delay: idx * 0.08,
    y: 30
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TiltCard, {
    index: idx + 1,
    title: item.title,
    desc: item.desc
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.experienceSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_reveal__WEBPACK_IMPORTED_MODULE_3__.Reveal, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "Work Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "lead"
  }, "A brief timeline of my professional journey in web engineering.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.timeline
  }, _data_site__WEBPACK_IMPORTED_MODULE_4__.experience.map((exp, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_reveal__WEBPACK_IMPORTED_MODULE_3__.Reveal, {
    key: idx,
    delay: idx * 0.08,
    y: 30
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.timelineItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.timelineDot
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.timelineContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.timeHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, exp.role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.company
  }, exp.company)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.period
  }, exp.period)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_5__.timeDesc
  }, exp.desc)))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "About Rahul Tailor \u2014 Senior Frontend Developer"
});

/***/ }),

/***/ "./src/styles/about.module.css":
/*!*************************************!*\
  !*** ./src/styles/about.module.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPage: () => (/* binding */ aboutPage),
/* harmony export */   bioGrid: () => (/* binding */ bioGrid),
/* harmony export */   bioSection: () => (/* binding */ bioSection),
/* harmony export */   bioText: () => (/* binding */ bioText),
/* harmony export */   cardDesc: () => (/* binding */ cardDesc),
/* harmony export */   cardIndex: () => (/* binding */ cardIndex),
/* harmony export */   cardTitle: () => (/* binding */ cardTitle),
/* harmony export */   chip: () => (/* binding */ chip),
/* harmony export */   chipGrid: () => (/* binding */ chipGrid),
/* harmony export */   company: () => (/* binding */ company),
/* harmony export */   experienceSection: () => (/* binding */ experienceSection),
/* harmony export */   period: () => (/* binding */ period),
/* harmony export */   processGrid: () => (/* binding */ processGrid),
/* harmony export */   processHeader: () => (/* binding */ processHeader),
/* harmony export */   processSection: () => (/* binding */ processSection),
/* harmony export */   ring: () => (/* binding */ ring),
/* harmony export */   ringBg: () => (/* binding */ ringBg),
/* harmony export */   ringFill: () => (/* binding */ ringFill),
/* harmony export */   ringPct: () => (/* binding */ ringPct),
/* harmony export */   ringSvg: () => (/* binding */ ringSvg),
/* harmony export */   skillCard: () => (/* binding */ skillCard),
/* harmony export */   skillName: () => (/* binding */ skillName),
/* harmony export */   skillsGrid: () => (/* binding */ skillsGrid),
/* harmony export */   skillsHeader: () => (/* binding */ skillsHeader),
/* harmony export */   skillsSection: () => (/* binding */ skillsSection),
/* harmony export */   statItem: () => (/* binding */ statItem),
/* harmony export */   statLabel: () => (/* binding */ statLabel),
/* harmony export */   statVal: () => (/* binding */ statVal),
/* harmony export */   statsGrid: () => (/* binding */ statsGrid),
/* harmony export */   tiltCard: () => (/* binding */ tiltCard),
/* harmony export */   timeDesc: () => (/* binding */ timeDesc),
/* harmony export */   timeHeader: () => (/* binding */ timeHeader),
/* harmony export */   timeline: () => (/* binding */ timeline),
/* harmony export */   timelineContent: () => (/* binding */ timelineContent),
/* harmony export */   timelineDot: () => (/* binding */ timelineDot),
/* harmony export */   timelineItem: () => (/* binding */ timelineItem)
/* harmony export */ });
// Exports
var aboutPage = "about-module--aboutPage--e25b2";
var bioSection = "about-module--bioSection--cc0a9";
var bioGrid = "about-module--bioGrid--ec668";
var bioText = "about-module--bioText--b133a";
var statsGrid = "about-module--statsGrid--dd4cc";
var statItem = "about-module--statItem--d23a3";
var statVal = "about-module--statVal--7b045";
var statLabel = "about-module--statLabel--d3742";
var skillsSection = "about-module--skillsSection--cda44";
var skillsHeader = "about-module--skillsHeader--4ca0c";
var chipGrid = "about-module--chipGrid--091d1";
var chip = "about-module--chip--6b01a";
var skillsGrid = "about-module--skillsGrid--a4608";
var skillCard = "about-module--skillCard--5228f";
var ring = "about-module--ring--5e7cd";
var ringSvg = "about-module--ringSvg--5c045";
var ringBg = "about-module--ringBg--0de29";
var ringFill = "about-module--ringFill--1b611";
var ringPct = "about-module--ringPct--eb301";
var skillName = "about-module--skillName--f903c";
var processSection = "about-module--processSection--1fabc";
var processHeader = "about-module--processHeader--fe96a";
var processGrid = "about-module--processGrid--19f96";
var tiltCard = "about-module--tiltCard--b66b6";
var cardIndex = "about-module--cardIndex--37432";
var cardTitle = "about-module--cardTitle--96f5c";
var cardDesc = "about-module--cardDesc--8a045";
var experienceSection = "about-module--experienceSection--5fcc6";
var timeline = "about-module--timeline--ccb1f";
var timelineItem = "about-module--timelineItem--087f2";
var timelineDot = "about-module--timelineDot--39919";
var timelineContent = "about-module--timelineContent--ac425";
var timeHeader = "about-module--timeHeader--cf4f2";
var company = "about-module--company--ccbc6";
var period = "about-module--period--589fe";
var timeDesc = "about-module--timeDesc--19049";


/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map