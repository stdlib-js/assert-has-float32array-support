// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float32array@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var n="function"==typeof Float32Array?Float32Array:null,s=t,e=r,a=n;var o=function(){var t,r;if("function"!=typeof a)return!1;try{r=new a([1,3.14,-3.14,5e40]),t=s(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===e}catch(r){t=!1}return t};export{o as default};
//# sourceMappingURL=index.mjs.map
