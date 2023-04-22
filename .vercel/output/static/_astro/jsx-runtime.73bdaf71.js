import{r as e}from"./index.45a47ed6.js";var _={},l={get exports(){return _},set exports(t){_=t}},n={},m=e,x=Symbol.for("react.element"),y=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function i(e,r,o){var s,f={},p=null,u=null;for(s in void 0!==o&&(p=""+o),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(u=r.ref),r)a.call(r,s)&&!v.hasOwnProperty(s)&&(f[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===f[s]&&(f[s]=r[s]);return{$$typeof:x,type:e,key:p,ref:u,props:f,_owner:c.current}}n.Fragment=y,n.jsx=i,n.jsxs=i,l.exports=n;export{_ as j};