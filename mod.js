// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,_=function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},f=r()?c:_;var p=function(e){return Math.abs(e)},b=p;var v=p;var y=function(e,r,t,n,o,a){var u,i,l,c,_,f,p;if(e<=0)return o;for(u=n<0?(1-e)*n:0,i=a<0?(1-e)*a:0,l=r,f=0,p=0;p<e;p++)_=l+(c=t[u]),b(l)>=b(c)?f+=l-_+c:f+=c-_+l,l=_,o[i]=l+f,u+=n,i+=a;return o},d=function(e,r,t,n,o,a,u,i){var l,c,_,f,p,b,y;if(e<=0)return a;for(l=o,c=i,_=r,b=0,y=0;y<e;y++)p=_+(f=t[l]),v(_)>=v(f)?b+=_-p+f:b+=f-p+_,_=p,a[c]=_+b,l+=n,c+=u;return a};(function(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})})(y,"ndarray",d);var s=y;export{s as default,d as ndarray};
//# sourceMappingURL=mod.js.map
