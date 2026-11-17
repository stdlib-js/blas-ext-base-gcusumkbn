"use strict";var y=function(v,o){return function(){try{return o||v((o={exports:{}}).exports,o),o.exports}catch(i){throw (o=0, i)}};};var O=y(function(L,j){
var P=require('@stdlib/math-base-special-abs/dist');function D(v,o,i,t,x,s,b,k){var n,f,q,l,r,e,a,u,c,p,g;if(n=i.data,f=s.data,q=i.accessors[0],l=s.accessors[1],r=x,e=k,a=o,a===0)for(g=0;g<v&&(u=q(n,r),u===0);g++)a+=u,l(f,e,a),r+=t,e+=b;else g=0;for(p=0;g<v;g++)u=q(n,r),c=a+u,P(a)>=P(u)?p+=a-c+u:p+=u-c+a,a=c,l(f,e,a+p),r+=t,e+=b;return s}j.exports=D
});var m=y(function(M,w){
var R=require('@stdlib/array-base-arraylike2object/dist'),h=require('@stdlib/math-base-special-abs/dist'),E=O();function F(v,o,i,t,x,s,b,k){var n,f,q,l,r,e,a,u,c;if(v<=0)return s;if(q=R(i),l=R(s),q.accessorProtocol||l.accessorProtocol)return E(v,o,q,t,x,l,b,k),s;if(n=x,f=k,r=o,r===0)for(c=0;c<v&&(e=i[n],e===0);c++)r+=e,s[f]=r,n+=t,f+=b;else c=0;for(u=0;c<v;c++)e=i[n],a=r+e,h(r)>=h(e)?u+=r-a+e:u+=e-a+r,r=a,s[f]=r+u,n+=t,f+=b;return s}w.exports=F
});var B=y(function(Q,A){
var z=require('@stdlib/strided-base-stride2offset/dist'),G=m();function H(v,o,i,t,x,s){var b=z(v,t),k=z(v,s);return G(v,o,i,t,b,x,s,k)}A.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),J=m();I(C,"ndarray",J);module.exports=C;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
