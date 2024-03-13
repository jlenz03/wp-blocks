/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/sims-suggestion/components/AddPackForm.js":
/*!**************************************************************!*\
  !*** ./src/blocks/sims-suggestion/components/AddPackForm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPackForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class AddPackForm extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    title: '',
    description: '',
    type_of_pack: '',
    concept_art: ''
  };
  addReview(e) {
    var _this$state$type_of_p, _this$state$concept_a;
    e.preventDefault();
    const newReview = {
      title: this.state.title,
      content: this.state.description,
      acf: {
        type_of_pack: (_this$state$type_of_p = this.state.type_of_pack) !== null && _this$state$type_of_p !== void 0 ? _this$state$type_of_p : 'Expansion',
        concept_art: (_this$state$concept_a = this.state.concept_art) !== null && _this$state$concept_a !== void 0 ? _this$state$concept_a : '/'
      },
      // maybe you should validate better before doing this?
      status: 'publish'
    };

    // we can't assume any props are provided
    // ?. only calls the method if it exists
    this.props.addReview?.(newReview);
  }
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "new-pack-form",
      onSubmit: e => this.addReview(e)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "title-with-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Suggest the Next Sims Pack")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "form-description"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "We appreciate our user's suggestions and always want to develop with YOU guys in mind! Write suggestions below of what you want to see next!")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Title:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.title,
      onInput: e => this.setState({
        title: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Type of Sims Pack:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.type_of_pack,
      onInput: e => this.setState({
        type_of_pack: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Concept Art URL", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.concept_art,
      onInput: e => this.setState({
        concept_art: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Description of Pack", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      value: this.state.description,
      onInput: e => this.setState({
        description: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "submit"
    }, "Add Sims Pack Suggestion"));
  }
}
;

/***/ }),

/***/ "./src/blocks/sims-suggestion/components/BlockApp.js":
/*!***********************************************************!*\
  !*** ./src/blocks/sims-suggestion/components/BlockApp.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddPackForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPackForm */ "./src/blocks/sims-suggestion/components/AddPackForm.js");
/* harmony import */ var _PackList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PackList */ "./src/blocks/sims-suggestion/components/PackList.js");





// Assuming these are the correct imports for the WordPress API

class BlockApp extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    sim: [],
    loggedIn: null
  };
  addReview(newReview) {
    const sim = new wp.api.models.Sim(newReview);
    sim.save().done(data => {
      console.log("saved!", data);
      this.getReviews();
    }).fail(jqXHR => {
      console.error("failed!", jqXHR);
    });
  }
  getReviews() {
    const reviewCollection = new wp.api.collections.Sim();
    reviewCollection.fetch().done(data => {
      console.log("packs!!", data, reviewCollection);
      this.setState({
        sim: reviewCollection.models
      });
    }).fail(jqXHR => {
      this.getReviews();
    });
  }
  getLoggedInUser() {
    const user = new wp.api.models.UsersMe();
    user.fetch().done(user => {
      this.setState({
        loggedIn: true
      });
    }).fail(jqXHR => {
      this.setState({
        loggedIn: false
      });
    });
  }
  componentDidMount() {
    this.getReviews();
    this.getLoggedInUser();
  }
  render() {
    const {
      sim,
      loggedIn
    } = this.state;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Latest Sims Suggestions"), sim.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PackList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      sim: sim
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), loggedIn === true && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddPackForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      addReview: reviewObj => this.addReview(reviewObj)
    }), loggedIn === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddPackForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      addReview: reviewObj => this.addReview(reviewObj)
    }));
  }
}

/***/ }),

/***/ "./src/blocks/sims-suggestion/components/PackCard.js":
/*!***********************************************************!*\
  !*** ./src/blocks/sims-suggestion/components/PackCard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PackCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class PackCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  handleVote = voteType => {
    // Call the handleVote function passed from PackList
    this.props.handleVote(this.props.id, voteType);
  };
  render() {
    const {
      title,
      description,
      type_of_pack,
      concept_art,
      vote_4_pack
    } = this.props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pack-card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pack-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pack-text"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pack-title",
      dangerouslySetInnerHTML: {
        __html: title
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "type-pack",
      dangerouslySetInnerHTML: {
        __html: type_of_pack
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pack-description",
      dangerouslySetInnerHTML: {
        __html: description
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "vote"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => this.handleVote('up')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      role: "img",
      "aria-label": "Vote Up"
    }, "\u2795")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, vote_4_pack), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => this.handleVote('down')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      role: "img",
      "aria-label": "Vote Down"
    }, "\u2796")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "concept-art"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: concept_art,
      alt: "Concept Art"
    }))));
  }
}

/***/ }),

/***/ "./src/blocks/sims-suggestion/components/PackList.js":
/*!***********************************************************!*\
  !*** ./src/blocks/sims-suggestion/components/PackList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PackList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PackCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PackCard */ "./src/blocks/sims-suggestion/components/PackCard.js");



class PackList extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      votes: {}
    };
  }
  handleVote = (id, voteType) => {
    // Update the vote count for the specific suggestion
    // If the vote count is not defined (first vote), default it to 0
    console.log("Voting for suggestion with ID:", id);
    console.log("Vote type:", voteType);
    this.setState(prevState => ({
      votes: {
        ...prevState.votes,
        [id]: voteType === 'up' ? (prevState.votes[id] || 0) + 1 : (prevState.votes[id] || 0) - 1
      }
    }), () => {
      console.log("Votes after update:", this.state.votes);
    });
  };
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pack-list"
    }, this.props.sim.map(sim => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PackCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: sim.id // Assuming sim.id is the unique identifier
      ,
      title: sim.attributes.title.rendered,
      description: sim.attributes.content.rendered,
      type_of_pack: sim.attributes.acf.type_of_pack,
      concept_art: sim.attributes.acf.concept_art,
      vote_4_pack: sim.attributes.acf.vote_4_pack // Default to 0 if vote is undefined
      ,
      handleVote: this.handleVote
    })));
  }
}

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/blocks/sims-suggestion/view.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_BlockApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BlockApp */ "./src/blocks/sims-suggestion/components/BlockApp.js");



const blocks = document.querySelectorAll('.wp-block-jl-sims-suggestion');
blocks.forEach(block => {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(block).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockApp__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map