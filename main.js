/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bts.js":
/*!********************!*\
  !*** ./src/bts.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node),
/* harmony export */   Tree: () => (/* binding */ Tree),
/* harmony export */   convertToCoord: () => (/* binding */ convertToCoord),
/* harmony export */   convertToMatrix: () => (/* binding */ convertToMatrix)
/* harmony export */ });


class Node {
    constructor(coord) {
        this.coord = coord;
        this.matrix = matrix;
        this.lt = null;
        this.tl = null;
        this.tr = null;
        this.rt = null;
        this.rb = null;
        this.br = null;
        this.bl = null;
        this.lb = null;
    }

    // lt = [-2, +1]
    // tl = [-1. +2]
    // tr = [+1, +2]
    // rt = [+2, +1]
    // rb = [+2, -1]
    // br = [+1, -2]
    // bl = [-1, -2]
    // lb = [-2, -1]

    createNode(coord) {

        let xminus1 = coord[0]-1;
        let xminus2 = coord[0]-2;
        let xplus1 = coord[0]+1;
        let xplus2 = coord[0]+2;
        let yminus1 = coord[1]-1;
        let yminus2 = coord[1]-2;
        let yplus1 = coord[1]+1;
        let yplus2 = coord[1]+2;
        
        this.lt = [xminus2, yplus1];
        this.tl = [xminus1, yplus2];
        this.tl = [xplus1, yplus2];
        this.rt = [xplus2, yplus1];
        this.rb = [xplus2, yminus1];
        this.br = [xplus1, yminus2];
        this.bl = [xminus1, yminus2];
        this.lb = [xminus2, yminus1];

    }
}

// CREATING TREE... if coord[0] or coord[1] >7 or <0 == null

// HOW TO STOP IF SINGLE PATH ALREADY HAS COORD ?!?!?!?! 
// YET ALLOW OTHER PATHS TO HAVE SAME COORD 

class Tree {
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(array, 0, array.length-1); 
    }

    buildTree(array, start, end) {
        
        //if (start > end) {
        //    return null;
        //}
        
        //let mid = Math.floor((start + end)/2);

        //let node = new Node(array[mid]);

        // node.left = this.buildTree(array, start, mid-1);
        // node.right = this.buildTree(array, mid+1, end);

        // TAKES IN ORIGINATING COORDINATE.
        // 

        return node;
    }

}


// adjacency list w 64 spots
// function to convert coord to graph/index number

// Y=0 = X COORD
// Y=1 = X COORD + 8
// y=2 = X COORD + 16

// +8-2 , +16-1, +16+1, +8+2, -8+2, -16+1, -16-1, -8-2
//   +6,    +15,   +17,  +10,  -6,   -15.   -17,   -10

// MATRIX# == X + Y*8

function createAdjList() {
    let adjList = [];

    for (let i=0; i<64; i++) {
        let lt = i+6;
        let tl = i+15;
        let tr = i+17;
        let rt = i+10;
        let rb = i-6;
        let br = i-15;
        let bl = i-17;
        let lb = i-10;



    }
}

// FROM 0 to 63, take that number +/- the 8. if between 0 63 push to arr[i]



// FUNCTION TO CONVERT COORD TO MATRIX#
// FUNCTION TO CONVERT MATRIX# TO COORD

// FUNCTIONS TO CREATE LT TL TR RT RB BR BL LB CONNECTIONS

// SEARCH ARR[MATRIX#] FOR TARGET
// IF EXISTS, BREAK
// IF NULL, RETURN
// PUSH MATRIX# TO STEP ARRAY
// RECURSE FOR ALL IN ARR[MATRIX#] ARRAY



function convertToMatrix(coord) {

    let matrixNum = coord[0] + 8*coord[1];

    return matrixNum;

}

function convertToCoord(matrix) {

    let coord = [];

    let x = matrix%8;
    let y = Math.floor(matrix/8);

    coord.push(x);
    coord.push(y);

    return coord;

}






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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bts */ "./src/bts.js");



// how so i create a binary search tree with 2 digit coords. 



console.log((0,_bts__WEBPACK_IMPORTED_MODULE_0__.convertToMatrix)([2,6]));




function knightMoves(coord1, coord2) {
    
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLE1BQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTzs7QUFFUDs7QUFFQTs7QUFFQTs7QUFFTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O1VDcEpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7QUFDQzs7QUFFeEM7Ozs7QUFJQSxZQUFZLHFEQUFlOzs7OztBQUszQjtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHN0cmV2YWlscy8uL3NyYy9idHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyZXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHN0cmV2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyZXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyZXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyZXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoY29vcmQpIHtcbiAgICAgICAgdGhpcy5jb29yZCA9IGNvb3JkO1xuICAgICAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgICAgICAgdGhpcy5sdCA9IG51bGw7XG4gICAgICAgIHRoaXMudGwgPSBudWxsO1xuICAgICAgICB0aGlzLnRyID0gbnVsbDtcbiAgICAgICAgdGhpcy5ydCA9IG51bGw7XG4gICAgICAgIHRoaXMucmIgPSBudWxsO1xuICAgICAgICB0aGlzLmJyID0gbnVsbDtcbiAgICAgICAgdGhpcy5ibCA9IG51bGw7XG4gICAgICAgIHRoaXMubGIgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGx0ID0gWy0yLCArMV1cbiAgICAvLyB0bCA9IFstMS4gKzJdXG4gICAgLy8gdHIgPSBbKzEsICsyXVxuICAgIC8vIHJ0ID0gWysyLCArMV1cbiAgICAvLyByYiA9IFsrMiwgLTFdXG4gICAgLy8gYnIgPSBbKzEsIC0yXVxuICAgIC8vIGJsID0gWy0xLCAtMl1cbiAgICAvLyBsYiA9IFstMiwgLTFdXG5cbiAgICBjcmVhdGVOb2RlKGNvb3JkKSB7XG5cbiAgICAgICAgbGV0IHhtaW51czEgPSBjb29yZFswXS0xO1xuICAgICAgICBsZXQgeG1pbnVzMiA9IGNvb3JkWzBdLTI7XG4gICAgICAgIGxldCB4cGx1czEgPSBjb29yZFswXSsxO1xuICAgICAgICBsZXQgeHBsdXMyID0gY29vcmRbMF0rMjtcbiAgICAgICAgbGV0IHltaW51czEgPSBjb29yZFsxXS0xO1xuICAgICAgICBsZXQgeW1pbnVzMiA9IGNvb3JkWzFdLTI7XG4gICAgICAgIGxldCB5cGx1czEgPSBjb29yZFsxXSsxO1xuICAgICAgICBsZXQgeXBsdXMyID0gY29vcmRbMV0rMjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubHQgPSBbeG1pbnVzMiwgeXBsdXMxXTtcbiAgICAgICAgdGhpcy50bCA9IFt4bWludXMxLCB5cGx1czJdO1xuICAgICAgICB0aGlzLnRsID0gW3hwbHVzMSwgeXBsdXMyXTtcbiAgICAgICAgdGhpcy5ydCA9IFt4cGx1czIsIHlwbHVzMV07XG4gICAgICAgIHRoaXMucmIgPSBbeHBsdXMyLCB5bWludXMxXTtcbiAgICAgICAgdGhpcy5iciA9IFt4cGx1czEsIHltaW51czJdO1xuICAgICAgICB0aGlzLmJsID0gW3htaW51czEsIHltaW51czJdO1xuICAgICAgICB0aGlzLmxiID0gW3htaW51czIsIHltaW51czFdO1xuXG4gICAgfVxufVxuXG4vLyBDUkVBVElORyBUUkVFLi4uIGlmIGNvb3JkWzBdIG9yIGNvb3JkWzFdID43IG9yIDwwID09IG51bGxcblxuLy8gSE9XIFRPIFNUT1AgSUYgU0lOR0xFIFBBVEggQUxSRUFEWSBIQVMgQ09PUkQgPyE/IT8hPyEgXG4vLyBZRVQgQUxMT1cgT1RIRVIgUEFUSFMgVE8gSEFWRSBTQU1FIENPT1JEIFxuXG5leHBvcnQgY2xhc3MgVHJlZSB7XG4gICAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLmJ1aWxkVHJlZShhcnJheSwgMCwgYXJyYXkubGVuZ3RoLTEpOyBcbiAgICB9XG5cbiAgICBidWlsZFRyZWUoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgXG4gICAgICAgIC8vaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgIC8vICAgIHJldHVybiBudWxsO1xuICAgICAgICAvL31cbiAgICAgICAgXG4gICAgICAgIC8vbGV0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKS8yKTtcblxuICAgICAgICAvL2xldCBub2RlID0gbmV3IE5vZGUoYXJyYXlbbWlkXSk7XG5cbiAgICAgICAgLy8gbm9kZS5sZWZ0ID0gdGhpcy5idWlsZFRyZWUoYXJyYXksIHN0YXJ0LCBtaWQtMSk7XG4gICAgICAgIC8vIG5vZGUucmlnaHQgPSB0aGlzLmJ1aWxkVHJlZShhcnJheSwgbWlkKzEsIGVuZCk7XG5cbiAgICAgICAgLy8gVEFLRVMgSU4gT1JJR0lOQVRJTkcgQ09PUkRJTkFURS5cbiAgICAgICAgLy8gXG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG59XG5cblxuLy8gYWRqYWNlbmN5IGxpc3QgdyA2NCBzcG90c1xuLy8gZnVuY3Rpb24gdG8gY29udmVydCBjb29yZCB0byBncmFwaC9pbmRleCBudW1iZXJcblxuLy8gWT0wID0gWCBDT09SRFxuLy8gWT0xID0gWCBDT09SRCArIDhcbi8vIHk9MiA9IFggQ09PUkQgKyAxNlxuXG4vLyArOC0yICwgKzE2LTEsICsxNisxLCArOCsyLCAtOCsyLCAtMTYrMSwgLTE2LTEsIC04LTJcbi8vICAgKzYsICAgICsxNSwgICArMTcsICArMTAsICAtNiwgICAtMTUuICAgLTE3LCAgIC0xMFxuXG4vLyBNQVRSSVgjID09IFggKyBZKjhcblxuZnVuY3Rpb24gY3JlYXRlQWRqTGlzdCgpIHtcbiAgICBsZXQgYWRqTGlzdCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPDY0OyBpKyspIHtcbiAgICAgICAgbGV0IGx0ID0gaSs2O1xuICAgICAgICBsZXQgdGwgPSBpKzE1O1xuICAgICAgICBsZXQgdHIgPSBpKzE3O1xuICAgICAgICBsZXQgcnQgPSBpKzEwO1xuICAgICAgICBsZXQgcmIgPSBpLTY7XG4gICAgICAgIGxldCBiciA9IGktMTU7XG4gICAgICAgIGxldCBibCA9IGktMTc7XG4gICAgICAgIGxldCBsYiA9IGktMTA7XG5cblxuXG4gICAgfVxufVxuXG4vLyBGUk9NIDAgdG8gNjMsIHRha2UgdGhhdCBudW1iZXIgKy8tIHRoZSA4LiBpZiBiZXR3ZWVuIDAgNjMgcHVzaCB0byBhcnJbaV1cblxuXG5cbi8vIEZVTkNUSU9OIFRPIENPTlZFUlQgQ09PUkQgVE8gTUFUUklYI1xuLy8gRlVOQ1RJT04gVE8gQ09OVkVSVCBNQVRSSVgjIFRPIENPT1JEXG5cbi8vIEZVTkNUSU9OUyBUTyBDUkVBVEUgTFQgVEwgVFIgUlQgUkIgQlIgQkwgTEIgQ09OTkVDVElPTlNcblxuLy8gU0VBUkNIIEFSUltNQVRSSVgjXSBGT1IgVEFSR0VUXG4vLyBJRiBFWElTVFMsIEJSRUFLXG4vLyBJRiBOVUxMLCBSRVRVUk5cbi8vIFBVU0ggTUFUUklYIyBUTyBTVEVQIEFSUkFZXG4vLyBSRUNVUlNFIEZPUiBBTEwgSU4gQVJSW01BVFJJWCNdIEFSUkFZXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvTWF0cml4KGNvb3JkKSB7XG5cbiAgICBsZXQgbWF0cml4TnVtID0gY29vcmRbMF0gKyA4KmNvb3JkWzFdO1xuXG4gICAgcmV0dXJuIG1hdHJpeE51bTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvQ29vcmQobWF0cml4KSB7XG5cbiAgICBsZXQgY29vcmQgPSBbXTtcblxuICAgIGxldCB4ID0gbWF0cml4JTg7XG4gICAgbGV0IHkgPSBNYXRoLmZsb29yKG1hdHJpeC84KTtcblxuICAgIGNvb3JkLnB1c2goeCk7XG4gICAgY29vcmQucHVzaCh5KTtcblxuICAgIHJldHVybiBjb29yZDtcblxufVxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNvbnZlcnRUb0Nvb3JkIH0gZnJvbSBcIi4vYnRzXCI7XG5pbXBvcnQgeyBjb252ZXJ0VG9NYXRyaXggfSBmcm9tIFwiLi9idHNcIjtcblxuLy8gaG93IHNvIGkgY3JlYXRlIGEgYmluYXJ5IHNlYXJjaCB0cmVlIHdpdGggMiBkaWdpdCBjb29yZHMuIFxuXG5cblxuY29uc29sZS5sb2coY29udmVydFRvTWF0cml4KFsyLDZdKSk7XG5cblxuXG5cbmZ1bmN0aW9uIGtuaWdodE1vdmVzKGNvb3JkMSwgY29vcmQyKSB7XG4gICAgXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==