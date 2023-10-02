"use strict";var b=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var g=b(function(B,p){
var m=require('@stdlib/math-base-special-abs/dist');function h(v,u,q,c,o,n){var t,f,a,i,r,e,s;if(v<=0)return o;for(c<0?t=(1-v)*c:t=0,n<0?f=(1-v)*n:f=0,a=u,e=0,s=0;s<v;s++)i=q[t],r=a+i,m(a)>=m(i)?e+=a-r+i:e+=i-r+a,a=r,o[f]=a+e,t+=c,f+=n;return o}p.exports=h
});var O=b(function(C,y){
var k=require('@stdlib/math-base-special-abs/dist');function j(v,u,q,c,o,n,t,f){var a,i,r,e,s,l,x;if(v<=0)return n;for(a=o,i=f,r=u,l=0,x=0;x<v;x++)e=q[a],s=r+e,k(r)>=k(e)?l+=r-s+e:l+=e-s+r,r=s,n[i]=r+l,a+=c,i+=t;return n}y.exports=j
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=g(),z=O();w(R,"ndarray",z);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
