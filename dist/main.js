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
/* harmony export */   convertToCoord: () => (/* binding */ convertToCoord),
/* harmony export */   convertToMatrix: () => (/* binding */ convertToMatrix),
/* harmony export */   createAdjList: () => (/* binding */ createAdjList),
/* harmony export */   knightMoves: () => (/* binding */ knightMoves)
/* harmony export */ });


// CREATE ADJACENCY LIST USING MATRIX GRID NUMBERS

function createAdjList() {
    let adjList = [];

    for (let i=0; i<64; i++) {

        let node = adjList[i] = [];

        let lt = i+6;
        if (lt < 64 && i%8 !=0 && i%8 != 1) {
            node.push(lt);
        }
        let tl = i+15;
        if (tl < 64 && i%8 != 0) {
            node.push(tl);
        }
        let tr = i+17;
        if (tr < 64 && i%8 !=7) {
            node.push(tr);
        }
        let rt = i+10;
        if (rt < 64 && i%8 !=7 && i%8 != 6) {
            node.push(rt);
        }
        let rb = i-6;
        if (rb > 0 && i%8 !=7 && i%8 != 6) {
            node.push(rb);
        }
        let br = i-15;
        if (br > 0 && i%8 != 7) {
            node.push(br);
        }
        let bl = i-17;
        if (bl > 0 && i%8 != 0) {
            node.push(bl);
        }
        let lb = i-10;
        if (lb > 0 && i%8 !=0 && i%8 != 1) {
            node.push(lb);
        }
    }
    return adjList
}



// FUNCTION TO CONVERT COORD TO MATRIX#

function convertToMatrix(coord) {
    let matrixNum = coord[0] + 8*coord[1];
    return matrixNum;
}

// FUNCTION TO CONVERT MATRIX# TO COORD

function convertToCoord(matrix) {
    let coord = [];
    let x = matrix%8;
    let y = Math.floor(matrix/8);
    coord.push(x,y);
    return coord;
}

let adjList = createAdjList();


function knightMoves(coord1, coord2) {

    let path = [];
    path.push(coord1);

    let queue = [];

    let startPath = convertToMatrix(coord1);
    let endPath = convertToMatrix(coord2);

    function findPath(start) {

        for (i=0; i<start.length; i++) {
            if (adjList[start][i] == endPath) {
                path.push(coord2);
                return path;
            }
            else {
                newStart = adjList[start[i]];
                path.push(adjList(start[i]))
                findPath(newStart);
            }
        }
    }
    findPath(startPath);
    return path;
}

// SEARCH ARR[MATRIX#] FOR TARGET
// IF EXISTS, BREAK
// PUSH MATRIX# TO STEP ARRAY
// RECURSE FOR ALL IN ARR[MATRIX#] ARRAY


// BREADTHFIRST ????  FIND FIRST TIME END APPEARS THEN TRACE BACK
// GOING TO NEED TO STORE THINGS IN QUEUES











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





console.log((0,_bts__WEBPACK_IMPORTED_MODULE_0__.createAdjList)());



function knightMoves(coord1, coord2) {
    
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRU87QUFDUDs7QUFFQSxrQkFBa0IsTUFBTTs7QUFFeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051QztBQUNDO0FBQ0Y7OztBQUd0QyxZQUFZLG1EQUFhOzs7O0FBSXpCO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0c3RyZXZhaWxzLy4vc3JjL2J0cy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJldmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0c3RyZXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzdHJldmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzdHJldmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzdHJldmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIENSRUFURSBBREpBQ0VOQ1kgTElTVCBVU0lORyBNQVRSSVggR1JJRCBOVU1CRVJTXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBZGpMaXN0KCkge1xuICAgIGxldCBhZGpMaXN0ID0gW107XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8NjQ7IGkrKykge1xuXG4gICAgICAgIGxldCBub2RlID0gYWRqTGlzdFtpXSA9IFtdO1xuXG4gICAgICAgIGxldCBsdCA9IGkrNjtcbiAgICAgICAgaWYgKGx0IDwgNjQgJiYgaSU4ICE9MCAmJiBpJTggIT0gMSkge1xuICAgICAgICAgICAgbm9kZS5wdXNoKGx0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGwgPSBpKzE1O1xuICAgICAgICBpZiAodGwgPCA2NCAmJiBpJTggIT0gMCkge1xuICAgICAgICAgICAgbm9kZS5wdXNoKHRsKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdHIgPSBpKzE3O1xuICAgICAgICBpZiAodHIgPCA2NCAmJiBpJTggIT03KSB7XG4gICAgICAgICAgICBub2RlLnB1c2godHIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBydCA9IGkrMTA7XG4gICAgICAgIGlmIChydCA8IDY0ICYmIGklOCAhPTcgJiYgaSU4ICE9IDYpIHtcbiAgICAgICAgICAgIG5vZGUucHVzaChydCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJiID0gaS02O1xuICAgICAgICBpZiAocmIgPiAwICYmIGklOCAhPTcgJiYgaSU4ICE9IDYpIHtcbiAgICAgICAgICAgIG5vZGUucHVzaChyYik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJyID0gaS0xNTtcbiAgICAgICAgaWYgKGJyID4gMCAmJiBpJTggIT0gNykge1xuICAgICAgICAgICAgbm9kZS5wdXNoKGJyKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYmwgPSBpLTE3O1xuICAgICAgICBpZiAoYmwgPiAwICYmIGklOCAhPSAwKSB7XG4gICAgICAgICAgICBub2RlLnB1c2goYmwpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsYiA9IGktMTA7XG4gICAgICAgIGlmIChsYiA+IDAgJiYgaSU4ICE9MCAmJiBpJTggIT0gMSkge1xuICAgICAgICAgICAgbm9kZS5wdXNoKGxiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWRqTGlzdFxufVxuXG5cblxuLy8gRlVOQ1RJT04gVE8gQ09OVkVSVCBDT09SRCBUTyBNQVRSSVgjXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9NYXRyaXgoY29vcmQpIHtcbiAgICBsZXQgbWF0cml4TnVtID0gY29vcmRbMF0gKyA4KmNvb3JkWzFdO1xuICAgIHJldHVybiBtYXRyaXhOdW07XG59XG5cbi8vIEZVTkNUSU9OIFRPIENPTlZFUlQgTUFUUklYIyBUTyBDT09SRFxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvQ29vcmQobWF0cml4KSB7XG4gICAgbGV0IGNvb3JkID0gW107XG4gICAgbGV0IHggPSBtYXRyaXglODtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IobWF0cml4LzgpO1xuICAgIGNvb3JkLnB1c2goeCx5KTtcbiAgICByZXR1cm4gY29vcmQ7XG59XG5cbmxldCBhZGpMaXN0ID0gY3JlYXRlQWRqTGlzdCgpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBrbmlnaHRNb3Zlcyhjb29yZDEsIGNvb3JkMikge1xuXG4gICAgbGV0IHBhdGggPSBbXTtcbiAgICBwYXRoLnB1c2goY29vcmQxKTtcblxuICAgIGxldCBzdGFydFBhdGggPSBjb252ZXJ0VG9NYXRyaXgoY29vcmQxKTtcbiAgICBsZXQgZW5kUGF0aCA9IGNvbnZlcnRUb01hdHJpeChjb29yZDIpO1xuXG4gICAgZnVuY3Rpb24gZmluZFBhdGgoc3RhcnQpIHtcblxuICAgICAgICBmb3IgKGk9MDsgaTxzdGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFkakxpc3Rbc3RhcnRdW2ldID09IGVuZCkge1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChjb29yZDIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhcnQgPSBhZGpMaXN0W3N0YXJ0W2ldXTtcbiAgICAgICAgICAgICAgICBmaW5kUGF0aChuZXdTdGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG4vLyBTRUFSQ0ggQVJSW01BVFJJWCNdIEZPUiBUQVJHRVRcbi8vIElGIEVYSVNUUywgQlJFQUtcbi8vIFBVU0ggTUFUUklYIyBUTyBTVEVQIEFSUkFZXG4vLyBSRUNVUlNFIEZPUiBBTEwgSU4gQVJSW01BVFJJWCNdIEFSUkFZXG5cblxuXG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNvbnZlcnRUb0Nvb3JkIH0gZnJvbSBcIi4vYnRzXCI7XG5pbXBvcnQgeyBjb252ZXJ0VG9NYXRyaXggfSBmcm9tIFwiLi9idHNcIjtcbmltcG9ydCB7IGNyZWF0ZUFkakxpc3QgfSBmcm9tIFwiLi9idHNcIjtcblxuXG5jb25zb2xlLmxvZyhjcmVhdGVBZGpMaXN0KCkpO1xuXG5cblxuZnVuY3Rpb24ga25pZ2h0TW92ZXMoY29vcmQxLCBjb29yZDIpIHtcbiAgICBcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9