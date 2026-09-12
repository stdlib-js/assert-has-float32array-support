"use strict";var e=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var u=e(function(F,o){
var n=typeof Float32Array=="function"?Float32Array:null;o.exports=n
});var l=e(function(A,i){
var p=require('@stdlib/assert-is-float32array/dist'),y=require('@stdlib/constants-float64-pinf/dist'),s=u();function c(){var a,r;if(typeof s!="function")return!1;try{r=new s([1,3.14,-3.14,5e40]),a=p(r)&&r[0]===1&&r[1]===3.140000104904175&&r[2]===-3.140000104904175&&r[3]===y}catch(t){a=!1}return a}i.exports=c
});var f=l();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
