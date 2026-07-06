"use strict";
exports.id = "component---src-pages-work-js";
exports.ids = ["component---src-pages-work-js"];
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicon.svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "shortcut icon",
    href: "/favicon.svg"
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

/***/ "./src/hooks/use-tilt.js":
/*!*******************************!*\
  !*** ./src/hooks/use-tilt.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useTilt: () => (/* binding */ useTilt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useTilt = (ref, {
  max = 8,
  scale = 1.02,
  speed = 400,
  perspective = 1200
} = {}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    const onMove = e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -max;
      const rotateY = (x - centerX) / centerX * max;
      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    };
    const onLeave = () => {
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      el.style.transition = `transform ${speed}ms ease`;
      setTimeout(() => {
        el.style.transition = "";
      }, speed);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, max, scale, speed, perspective]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTilt);

/***/ }),

/***/ "./src/pages/work.js?export=default":
/*!******************************************!*\
  !*** ./src/pages/work.js?export=default ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/.pnpm/framer-motion@11.18.2_react_cce3d889a93a74b971da0f2788960b34/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/page-header */ "./src/components/page-header.js");
/* harmony import */ var _hooks_use_tilt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-tilt */ "./src/hooks/use-tilt.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _data_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/site */ "./src/data/site.js");
/* harmony import */ var _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/work.module.css */ "./src/styles/work.module.css");







const ProjectCard = ({
  project,
  idx
}) => {
  const cardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_hooks_use_tilt__WEBPACK_IMPORTED_MODULE_2__.useTilt)(cardRef, {
    max: 6
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
    ref: cardRef,
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.projectCard,
    initial: {
      opacity: 0,
      y: 40
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      duration: 0.8,
      delay: idx * 0.1,
      ease: [0.16, 1, 0.3, 1]
    },
    "data-cursor": "View<br/>Demo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.imageWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: project.image,
    alt: project.title,
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.projectImage
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.meta
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.category
  }, project.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.year
  }, project.year)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.title
  }, project.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.desc
  }, project.desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.tags
  }, project.tags.map(tag => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: tag,
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.tag
  }, tag)))));
};
const WorkPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.workPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_page_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    eyebrow: "My Portfolio",
    title: "Selected Work",
    subtitle: "A showcase of web applications, design systems, and custom CMS themes crafted for performance and detail."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_work_module_css__WEBPACK_IMPORTED_MODULE_5__.projectGrid
  }, _data_site__WEBPACK_IMPORTED_MODULE_4__.projects.map((project, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectCard, {
    key: project.slug,
    project: project,
    idx: idx
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Selected Work \u2014 Rahul Tailor"
});

/***/ }),

/***/ "./src/styles/work.module.css":
/*!************************************!*\
  !*** ./src/styles/work.module.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   category: () => (/* binding */ category),
/* harmony export */   desc: () => (/* binding */ desc),
/* harmony export */   imageWrapper: () => (/* binding */ imageWrapper),
/* harmony export */   info: () => (/* binding */ info),
/* harmony export */   meta: () => (/* binding */ meta),
/* harmony export */   projectCard: () => (/* binding */ projectCard),
/* harmony export */   projectGrid: () => (/* binding */ projectGrid),
/* harmony export */   projectImage: () => (/* binding */ projectImage),
/* harmony export */   tag: () => (/* binding */ tag),
/* harmony export */   tags: () => (/* binding */ tags),
/* harmony export */   title: () => (/* binding */ title),
/* harmony export */   workPage: () => (/* binding */ workPage),
/* harmony export */   year: () => (/* binding */ year)
/* harmony export */ });
// Exports
var workPage = "work-module--workPage--ff018";
var projectGrid = "work-module--projectGrid--d1493";
var projectCard = "work-module--projectCard--4f6e2";
var imageWrapper = "work-module--imageWrapper--1d2e3";
var projectImage = "work-module--projectImage--50e73";
var info = "work-module--info--27f71";
var meta = "work-module--meta--62c66";
var category = "work-module--category--afa1b";
var year = "work-module--year--de7c6";
var title = "work-module--title--a6803";
var desc = "work-module--desc--69e74";
var tags = "work-module--tags--f20b9";
var tag = "work-module--tag--6015f";


/***/ })

};
;
//# sourceMappingURL=component---src-pages-work-js.js.map