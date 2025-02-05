"use strict";var p=function(e,v){return function(){return v||e((v={exports:{}}).exports,v),v.exports}};var j=p(function(K,P){
var m=require('@stdlib/math-base-special-abs/dist');function C(e,v,i,o,n,r,f,q){var b,x,l,y,s,t,a,u,c,g,k;for(b=i.data,x=r.data,l=i.accessors[0],y=r.accessors[1],s=n,t=q,a=v,g=0,k=0;k<e;k++)u=l(b,s),c=a+u,m(a)>=m(u)?g+=a-c+u:g+=u-c+a,a=c,y(x,t,a+g),s+=o,t+=f;return r}P.exports=C
});var d=p(function(L,h){
var O=require('@stdlib/array-base-arraylike2object/dist'),R=require('@stdlib/math-base-special-abs/dist'),D=j();function E(e,v,i,o,n,r,f,q){var b,x,l,y,s,t,a,u,c;if(e<=0)return r;if(l=O(i),y=O(r),l.accessorProtocol||y.accessorProtocol)return D(e,v,l,o,n,y,f,q),r;for(b=n,x=q,s=v,u=0,c=0;c<e;c++)t=i[b],a=s+t,R(s)>=R(t)?u+=s-a+t:u+=t-a+s,s=a,r[x]=s+u,b+=o,x+=f;return r}h.exports=E
});var A=p(function(M,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),F=d();function G(e,v,i,o,n,r){var f=w(e,o),q=w(e,r);return F(e,v,i,o,f,n,r,q)}z.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),I=d();H(B,"ndarray",I);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
