import{D as s,R as o}from"./lit-element-BIeOw4Bz.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u={CHILD:2},c=i=>(...t)=>({_$litDirective$:i,values:t});class h{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this.t=t,this._$AM=r,this.i=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends h{constructor(t){if(super(t),this.it=s,t.type!==u.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===s||t==null)return this._t=void 0,this.it=t;if(t===o)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const l=c(e);export{l as a};
