// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function c(e){return Math.abs(e)}function f(e,t,r,n,o,a){var i,u,l,f,_,p,d;if(e<=0)return o;for(i=n<0?(1-e)*n:0,u=a<0?(1-e)*a:0,l=t,p=0,d=0;d<e;d++)_=l+(f=r[i]),c(l)>=c(f)?p+=l-_+f:p+=f-_+l,l=_,o[u]=l+p,i+=n,u+=a;return o}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e},e(f,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n,o,a,i,u){var l,f,_,p,d,b,s;if(e<=0)return a;for(l=o,f=u,_=t,b=0,s=0;s<e;s++)d=_+(p=r[l]),c(_)>=c(p)?b+=_-d+p:b+=p-d+_,_=d,a[f]=_+b,l+=n,f+=i;return a}}),f},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).gcusumkbn=t();
//# sourceMappingURL=index.js.map
