"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var b=d(function(B,p){
var m=require('@stdlib/math-base-special-abs/dist');function R(r,e,n,t,o,u,c,f){var q,x,a,i,v,s,y;if(r<=0)return u;for(q=o,x=f,a=e,s=0,y=0;y<r;y++)i=n[q],v=a+i,m(a)>=m(i)?s+=a-v+i:s+=i-v+a,a=v,u[x]=a+s,q+=t,x+=c;return u}p.exports=R
});var l=d(function(C,k){
var g=require('@stdlib/strided-base-stride2offset/dist'),h=b();function j(r,e,n,t,o,u){var c=g(r,t),f=g(r,u);return h(r,e,n,t,c,o,u,f)}k.exports=j
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=l(),z=b();w(O,"ndarray",z);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
