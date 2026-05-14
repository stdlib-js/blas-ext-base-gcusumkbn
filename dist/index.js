"use strict";var y=function(v,o){return function(){return o||v((o={exports:{}}).exports,o),o.exports}};var O=y(function(L,j){
var P=require('@stdlib/math-base-special-abs/dist');function D(v,o,f,i,x,s,b,k){var t,n,q,l,r,e,a,u,c,p,g;if(t=f.data,n=s.data,q=f.accessors[0],l=s.accessors[1],r=x,e=k,a=o,a===0)for(g=0;g<v&&(u=q(t,r),u===0);g++)a+=u,l(n,e,a),r+=i,e+=b;else g=0;for(p=0;g<v;g++)u=q(t,r),c=a+u,P(a)>=P(u)?p+=a-c+u:p+=u-c+a,a=c,l(n,e,a+p),r+=i,e+=b;return s}j.exports=D
});var m=y(function(M,w){
var R=require('@stdlib/array-base-arraylike2object/dist'),h=require('@stdlib/math-base-special-abs/dist'),E=O();function F(v,o,f,i,x,s,b,k){var t,n,q,l,r,e,a,u,c;if(v<=0)return s;if(q=R(f),l=R(s),q.accessorProtocol||l.accessorProtocol)return E(v,o,q,i,x,l,b,k),s;if(t=x,n=k,r=o,r===0)for(c=0;c<v&&(e=f[t],e===0);c++)r+=e,s[n]=r,t+=i,n+=b;else c=0;for(u=0;c<v;c++)e=f[t],a=r+e,h(r)>=h(e)?u+=r-a+e:u+=e-a+r,r=a,s[n]=r+u,t+=i,n+=b;return s}w.exports=F
});var B=y(function(Q,A){
var z=require('@stdlib/strided-base-stride2offset/dist'),G=m();function H(v,o,f,i,x,s){var b=z(v,i),k=z(v,s);return G(v,o,f,i,b,x,s,k)}A.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),J=m();I(C,"ndarray",J);module.exports=C;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
