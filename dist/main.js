/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={"./src/style.scss":(e,t,r)=>{"use strict";r.r(t)},"./src/slider.js":(e,t,r)=>{let a=[{url:r("./src/img/black-friday-sale.png")},{url:r("./src/img/for-entrepreneurs.png")},{url:r("./src/img/check-out.png")}];document.addEventListener("DOMContentLoaded",(()=>{!function(e,t){if(!e||!e.length)return;t=t||{dots:!1,autoplay:!1,autoplayInterval:3e3};const r=document.querySelector(".slider"),a=r.querySelector(".slider__images");function s(e){if(a.querySelector(".active").classList.remove("active"),a.querySelector(`.n${e}`).classList.add("active"),t.dots){let t=document.querySelector(".slider__dots");t.querySelector(".active").classList.remove("active"),t.querySelector(`.n${e}`).classList.add("active")}}e.forEach(((e,t)=>{let r=document.createElement("div");r.className=`image n${t} ${t?"":"active"}`,r.dataset.index=t,r.style.backgroundImage=`url(${e.url})`,a.appendChild(r)})),t.dots&&function(){let t=document.createElement("div");t.className="slider__dots",e.forEach(((e,r)=>{let a=document.createElement("div");a.className=`slider__dots-item n${r} ${r?"":"active"}`,a.dataset.index=r,a.addEventListener("click",(function(){s(this.dataset.index)})),t.appendChild(a)})),r.appendChild(t)}(),t.autoplay&&setInterval((()=>{let t=+a.querySelector(".active").dataset.index;s(t===e.length-1?0:t+1)}),t.autoplayInterval)}(a,{dots:!0,autoplay:!1,autoplayInterval:5e3})}))},"./src/img/black-friday-sale.png":(e,t,r)=>{"use strict";e.exports=r.p+"img/954eb8e0013338d199a8.png"},"./src/img/check-out.png":(e,t,r)=>{"use strict";e.exports=r.p+"img/b244cee97baca03a47ab.png"},"./src/img/for-entrepreneurs.png":(e,t,r)=>{"use strict";e.exports=r.p+"img/5c6392925d06c0cbab9e.png"}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,r),c.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})();var a={};(()=>{"use strict";r.r(a);r("./src/style.scss"),r("./src/slider.js")})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWZDLFdBQXlCLE9BQU9BLFdBQzNDLElBQ0MsT0FBTzFCLE1BQVEsSUFBSTJCLFNBQVMsY0FBYixFQUNoQixDQUFFLE1BQU9DLEdBQ1IsR0FBc0IsaUJBQVhDLE9BQXFCLE9BQU9BLE1BQ3hDLENBQ0EsQ0FQdUIsR0NBeEJ2QixFQUFvQmMsRUFBSSxDQUFDVSxFQUFLQyxJQUFVVixPQUFPVyxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHQ0NsRnpCLEVBQW9CNkIsRUFBS3pCLElBQ0gsb0JBQVgwQixRQUEwQkEsT0FBT0MsYUFDMUNoQixPQUFPQyxlQUFlWixFQUFTMEIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEakIsT0FBT0MsZUFBZVosRUFBUyxhQUFjLENBQUU0QixPQUFPLEdBQU8sUUNMOUQsSUFBSUMsRUFDQWpDLEVBQW9CbUIsRUFBRWUsZ0JBQWVELEVBQVlqQyxFQUFvQm1CLEVBQUVnQixTQUFXLElBQ3RGLElBQUlwRSxFQUFXaUMsRUFBb0JtQixFQUFFcEQsU0FDckMsSUFBS2tFLEdBQWFsRSxJQUNiQSxFQUFTcUUsZ0JBQ1pILEVBQVlsRSxFQUFTcUUsY0FBY0MsTUFDL0JKLEdBQVcsQ0FDZixJQUFJSyxFQUFVdkUsRUFBU3dFLHFCQUFxQixVQUN6Q0QsRUFBUXBFLFNBQVErRCxFQUFZSyxFQUFRQSxFQUFRcEUsT0FBUyxHQUFHbUUsSUFDNUQsQ0FJRCxJQUFLSixFQUFXLE1BQU0sSUFBSU8sTUFBTSx5REFDaENQLEVBQVlBLEVBQVVRLFFBQVEsT0FBUSxJQUFJQSxRQUFRLFFBQVMsSUFBSUEsUUFBUSxZQUFhLEtBQ3BGekMsRUFBb0IwQyxFQUFJVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tzaG9wLy4vc3JjL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9ib29rc2hvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib29rc2hvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ib29rc2hvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9va3Nob3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ib29rc2hvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jvb2tzaG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9va3Nob3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGltYWdlcyA9IFt7XHJcbiAgICB1cmw6IHJlcXVpcmUoXCIuLi9zcmMvaW1nL2JsYWNrLWZyaWRheS1zYWxlLnBuZ1wiKSxcclxuICB9LCB7XHJcbiAgICB1cmw6IHJlcXVpcmUoXCIuLi9zcmMvaW1nL2Zvci1lbnRyZXByZW5ldXJzLnBuZ1wiKSxcclxuICB9LCB7XHJcbiAgICB1cmw6IHJlcXVpcmUoXCIuLi9zcmMvaW1nL2NoZWNrLW91dC5wbmdcIilcclxuICB9XTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTbGlkZXIoaW1hZ2VzLCBvcHRpb25zKSB7XHJcbiAgaWYgKCFpbWFnZXMgfHwgIWltYWdlcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBhdXRvcGxheUludGVydmFsOiAzMDAwXHJcbiAgfVxyXG5cclxuICBjb25zdCBzbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIik7XHJcbiAgY29uc3Qgc2xpZGVySW1hZ2VzID0gc2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9faW1hZ2VzXCIpO1xyXG5cclxuICBpbml0SW1hZ2VzKCk7XHJcblxyXG4gIGlmIChvcHRpb25zLmRvdHMpIHtcclxuICAgIGluaXREb3RzKCk7XHJcbiAgfVxyXG5cclxuICBpZiAob3B0aW9ucy5hdXRvcGxheSkge1xyXG4gICAgaW5pdEF1dG9wbGF5KCk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGluaXRJbWFnZXMoKSB7XHJcbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbWFnZUVsZW1lbnQuY2xhc3NOYW1lID0gYGltYWdlIG4ke2luZGV4fSAke2luZGV4PyBcIlwiIDogXCJhY3RpdmVcIn1gO1xyXG4gICAgICBpbWFnZUVsZW1lbnQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gICAgICBpbWFnZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlLnVybH0pYDtcclxuICAgICAgc2xpZGVySW1hZ2VzLmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVTbGlkZXIobnVtKSB7XHJcbiAgICBzbGlkZXJJbWFnZXMucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIHNsaWRlckltYWdlcy5xdWVyeVNlbGVjdG9yKGAubiR7bnVtfWApLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZG90cykge1xyXG4gICAgICBsZXQgZG90c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fZG90c1wiKTtcclxuICAgICAgZG90c1dyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgZG90c1dyYXBwZXIucXVlcnlTZWxlY3RvcihgLm4ke251bX1gKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBpbml0RG90cygpIHtcclxuICAgIGxldCBkb3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkb3RzV3JhcHBlci5jbGFzc05hbWUgPSBcInNsaWRlcl9fZG90c1wiO1xyXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZG90LmNsYXNzTmFtZSA9IGBzbGlkZXJfX2RvdHMtaXRlbSBuJHtpbmRleH0gJHtpbmRleD8gXCJcIiA6IFwiYWN0aXZlXCJ9YDtcclxuICAgICAgZG90LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBtb3ZlU2xpZGVyKHRoaXMuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkb3RzV3JhcHBlci5hcHBlbmRDaGlsZChkb3QpO1xyXG4gICAgfSk7XHJcbiAgICBzbGlkZXJXcmFwcGVyLmFwcGVuZENoaWxkKGRvdHNXcmFwcGVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBdXRvcGxheSgpIHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgbGV0IGN1cnJlbnROdW1iZXIgPSArc2xpZGVySW1hZ2VzLnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpLmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgIGxldCBuZXh0TnVtYmVyID0gY3VycmVudE51bWJlciA9PT0gaW1hZ2VzLmxlbmd0aCAtIDE/IDAgOiBjdXJyZW50TnVtYmVyICsgMTtcclxuICAgICAgbW92ZVNsaWRlcihuZXh0TnVtYmVyKTtcclxuICAgIH0sIG9wdGlvbnMuYXV0b3BsYXlJbnRlcnZhbCk7XHJcbiAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgbGV0IHNsaWRlck9wdGlvbnMgPSB7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXlJbnRlcnZhbDogNTAwMFxyXG4gIH1cclxuICBpbml0U2xpZGVyKGltYWdlcywgc2xpZGVyT3B0aW9ucyk7XHJcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7Il0sIm5hbWVzIjpbImltYWdlcyIsInVybCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wdGlvbnMiLCJsZW5ndGgiLCJkb3RzIiwiYXV0b3BsYXkiLCJhdXRvcGxheUludGVydmFsIiwic2xpZGVyV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXJJbWFnZXMiLCJtb3ZlU2xpZGVyIiwibnVtIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZG90c1dyYXBwZXIiLCJmb3JFYWNoIiwiaW1hZ2UiLCJpbmRleCIsImltYWdlRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkYXRhc2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhcHBlbmRDaGlsZCIsImRvdCIsInRoaXMiLCJpbml0RG90cyIsInNldEludGVydmFsIiwiY3VycmVudE51bWJlciIsImluaXRTbGlkZXIiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIkVycm9yIiwicmVwbGFjZSIsInAiXSwic291cmNlUm9vdCI6IiJ9