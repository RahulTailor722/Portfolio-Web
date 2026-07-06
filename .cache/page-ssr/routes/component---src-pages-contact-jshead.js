"use strict";
exports.id = "component---src-pages-contact-jshead";
exports.ids = ["component---src-pages-contact-jshead"];
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

/***/ "./src/pages/contact.js?export=head":
/*!******************************************!*\
  !*** ./src/pages/contact.js?export=head ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/.pnpm/framer-motion@11.18.2_react_cce3d889a93a74b971da0f2788960b34/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/.pnpm/lucide-react@0.446.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js");
/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/page-header */ "./src/components/page-header.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/contact.module.css */ "./src/styles/contact.module.css");






const ContactPage = () => {
  const {
    0: formState,
    1: setFormState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const {
    0: submitted,
    1: setSubmitted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    // Simulated form submission
    setSubmitted(true);
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.contactPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_page_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    eyebrow: "Get in touch",
    title: "Let's build something",
    subtitle: "Feel free to reach out for new projects, inquiries, or just to say hello."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.grid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.formCard,
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }, submitted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "2rem",
      marginBottom: "16px",
      color: "var(--accent)"
    }
  }, "Message Sent!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      color: "var(--muted)"
    }
  }, "Thank you for reaching out. I'll get back to you as soon as possible."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setSubmitted(false),
    className: "btn btn-ghost",
    style: {
      marginTop: "24px"
    }
  }, "Send another message")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "name",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.label
  }, "Your Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    required: true,
    value: formState.name,
    onChange: handleChange,
    placeholder: "John Doe",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.input
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.label
  }, "Your Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    required: true,
    value: formState.email,
    onChange: handleChange,
    placeholder: "john@example.com",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.input
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "subject",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.label
  }, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "subject",
    name: "subject",
    required: true,
    value: formState.subject,
    onChange: handleChange,
    placeholder: "Project Inquiries / Full-time Role",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.input
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "message",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.label
  }, "Your Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "message",
    name: "message",
    required: true,
    value: formState.message,
    onChange: handleChange,
    placeholder: "Hi Rahul, I'd love to chat about...",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.textarea
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: `btn btn-primary ${_styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.submitBtn}`
  }, "Send Message ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 18
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.infoSidebar,
    initial: {
      opacity: 0,
      x: 30
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      duration: 0.8,
      delay: 0.1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.infoBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Email Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:rahultailor722@gmail.com",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.infoLink
  }, "rahultailor722@gmail.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.infoBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Find Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.address
  }, "Ahmedabad, Gujarat,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "India")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.infoBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Socials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.socialsList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://linkedin.com",
    target: "_blank",
    rel: "noreferrer",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.socialItem
  }, "LinkedIn ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 14
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com",
    target: "_blank",
    rel: "noreferrer",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.socialItem
  }, "GitHub ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 14
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://dribbble.com",
    target: "_blank",
    rel: "noreferrer",
    className: _styles_contact_module_css__WEBPACK_IMPORTED_MODULE_3__.socialItem
  }, "Dribbble ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 14
  }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Contact Rahul Tailor \u2014 Senior Frontend Developer"
});

/***/ }),

/***/ "./src/styles/contact.module.css":
/*!***************************************!*\
  !*** ./src/styles/contact.module.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   address: () => (/* binding */ address),
/* harmony export */   contactPage: () => (/* binding */ contactPage),
/* harmony export */   formCard: () => (/* binding */ formCard),
/* harmony export */   formGroup: () => (/* binding */ formGroup),
/* harmony export */   grid: () => (/* binding */ grid),
/* harmony export */   infoBlock: () => (/* binding */ infoBlock),
/* harmony export */   infoLink: () => (/* binding */ infoLink),
/* harmony export */   infoSidebar: () => (/* binding */ infoSidebar),
/* harmony export */   input: () => (/* binding */ input),
/* harmony export */   label: () => (/* binding */ label),
/* harmony export */   socialItem: () => (/* binding */ socialItem),
/* harmony export */   socialsList: () => (/* binding */ socialsList),
/* harmony export */   submitBtn: () => (/* binding */ submitBtn),
/* harmony export */   textarea: () => (/* binding */ textarea)
/* harmony export */ });
// Exports
var contactPage = "contact-module--contactPage--7e358";
var grid = "contact-module--grid--7590b";
var formCard = "contact-module--formCard--9a97b";
var formGroup = "contact-module--formGroup--82cd8";
var label = "contact-module--label--ca024";
var input = "contact-module--input--764c5";
var textarea = "contact-module--textarea--729ed";
var submitBtn = "contact-module--submitBtn--c404d";
var infoSidebar = "contact-module--infoSidebar--d8f33";
var infoBlock = "contact-module--infoBlock--5442a";
var infoLink = "contact-module--infoLink--4d5a8";
var address = "contact-module--address--89de1";
var socialsList = "contact-module--socialsList--d52f0";
var socialItem = "contact-module--socialItem--9e20e";


/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-jshead.js.map