(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ee=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,ie=te(e=>e.replace(re,`-$1`).toLowerCase()),E=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),ae=te(e=>e?`on${E(e)}`:``),D=(e,t)=>!Object.is(e,t),oe=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},O=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},se=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ce,le=()=>ce||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function k(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?pe(r):k(r);if(i)for(let e in i)t[e]=i[e]}return t}if(g(e)||v(e))return e}var ue=/;(?![^(]*\))/g,de=/:([^]+)/,fe=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function pe(e){let t={};return e.replace(fe,e=>e.startsWith(`/*`)?``:e).split(ue).forEach(e=>{if(e){let n=e.split(de);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function A(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=A(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var me=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,he=e(me);me+``;function ge(e){return!!e||e===``}function _e(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=xe(e[i],t[i],n);return r}function ve(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&xe(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function ye(e,t,n){let r=f(e),i=f(t);if(r||i||(r=p(e),i=p(t),r||i))return r&&i?ve(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!xe(e[r],t[r],n))return!1}return String(e)===String(t)}function be(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function xe(e,t,n){if(e===t)return!0;let r=m(e),i=m(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=_(e),i=_(t),r||i?e===t:(r=d(e),i=d(t),r||i?r&&i?be(e,t,n,_e):!1:(r=v(e),i=v(t),r||i?!r||!i?!1:be(e,t,n,ye):String(e)===String(t))))}function Se(e,t){return e.findIndex(e=>xe(e,t))}var Ce=e=>!!(e&&e.__v_isRef===!0),j=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?Ce(e)?j(e.value):JSON.stringify(e,we,2):String(e),we=(e,t)=>Ce(t)?we(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Te(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Te(e))}:_(t)?Te(t):v(t)&&!d(t)&&!C(t)?String(t):t,Te=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,Ee,De=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ee&&(Ee.active?(this.parent=Ee,this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=Ee;try{return Ee=this,e()}finally{Ee=t}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){if(this._on>0&&--this._on===0){if(Ee===this)Ee=this.prevScope;else{let e=Ee;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Oe(){return Ee}var M,ke=new WeakSet,Ae=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&(Ee.active?Ee.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ke.has(this)&&(ke.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qe(this),Le(this);let e=M,t=Ue;M=this,Ue=!0;try{return this.fn()}finally{Re(this),M=e,Ue=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ve(e);this.deps=this.depsTail=void 0,qe(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ke.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ze(this)&&this.run()}get dirty(){return ze(this)}},je=0,Me,Ne;function Pe(e,t=!1){e.flags|=8,t?(e.next=Ne,Ne=e):(e.next=Me,Me=e)}function Fe(){je++}function Ie(){if(--je>0)return;if(Ne){let e=Ne;for(Ne=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Me;){let t=Me;for(Me=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Le(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Re(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ve(r),He(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function ze(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Be(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Be(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Je)||(e.globalVersion=Je,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ze(e))))return;e.flags|=2;let t=e.dep,n=M,r=Ue;M=e,Ue=!0;try{Le(e);let n=e.fn(e._value);(t.version===0||D(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{M=n,Ue=r,Re(e),e.flags&=-3}}function Ve(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ve(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function He(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ue=!0,We=[];function Ge(){We.push(Ue),Ue=!1}function Ke(){let e=We.pop();Ue=e===void 0||e}function qe(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=M;M=void 0;try{t()}finally{M=e}}}var Je=0,Ye=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Xe=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!M||!Ue||M===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==M)t=this.activeLink=new Ye(M,this),M.deps?(t.prevDep=M.depsTail,M.depsTail.nextDep=t,M.depsTail=t):M.deps=M.depsTail=t,Ze(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=M.depsTail,t.nextDep=void 0,M.depsTail.nextDep=t,M.depsTail=t,M.deps===t&&(M.deps=e)}return t}trigger(e){this.version++,Je++,this.notify(e)}notify(e){Fe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ie()}}};function Ze(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ze(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Qe=new WeakMap,$e=Symbol(``),et=Symbol(``),tt=Symbol(``);function nt(e,t,n){if(Ue&&M){let t=Qe.get(e);t||Qe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Xe),r.map=t,r.key=n),r.track()}}function rt(e,t,n,r,i,a){let o=Qe.get(e);if(!o){Je++;return}let s=e=>{e&&e.trigger()};if(Fe(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===tt||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(tt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get($e)),f(e)&&s(o.get(et)));break;case`delete`:i||(s(o.get($e)),f(e)&&s(o.get(et)));break;case`set`:f(e)&&s(o.get($e))}}Ie()}function it(e){let t=N(e);return t===e||(nt(t,`iterate`,tt),Ut(e))?t:Ht(e)?Vt(e)?t.map(e=>qt(Kt(e))):t.map(qt):t.map(Kt)}function at(e){return nt(e=N(e),`iterate`,tt),e}function ot(e,t){return Ht(e)?qt(Vt(e)?Kt(t):t):Kt(t)}var st={__proto__:null,[Symbol.iterator](){return ct(this,Symbol.iterator,e=>ot(this,e))},concat(...e){return it(this).concat(...e.map(e=>d(e)?it(e):e))},entries(){return ct(this,`entries`,e=>(e[1]=ot(this,e[1]),e))},every(e,t){return ut(this,`every`,e,t,void 0,arguments)},filter(e,t){return ut(this,`filter`,e,t,e=>e.map(e=>ot(this,e)),arguments)},find(e,t){return ut(this,`find`,e,t,e=>ot(this,e),arguments)},findIndex(e,t){return ut(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return ut(this,`findLast`,e,t,e=>ot(this,e),arguments)},findLastIndex(e,t){return ut(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return ut(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ft(this,`includes`,e)},indexOf(...e){return ft(this,`indexOf`,e)},join(e){return it(this).join(e)},lastIndexOf(...e){return ft(this,`lastIndexOf`,e)},map(e,t){return ut(this,`map`,e,t,void 0,arguments)},pop(){return pt(this,`pop`)},push(...e){return pt(this,`push`,e)},reduce(e,...t){return dt(this,`reduce`,e,t)},reduceRight(e,...t){return dt(this,`reduceRight`,e,t)},shift(){return pt(this,`shift`)},some(e,t){return ut(this,`some`,e,t,void 0,arguments)},splice(...e){return pt(this,`splice`,e)},toReversed(){return it(this).toReversed()},toSorted(e){return it(this).toSorted(e)},toSpliced(...e){return it(this).toSpliced(...e)},unshift(...e){return pt(this,`unshift`,e)},values(){return ct(this,`values`,e=>ot(this,e))}};function ct(e,t,n){let r=at(e),i=r[t]();return r!==e&&!Ut(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var lt=Array.prototype;function ut(e,t,n,r,i,a){let o=at(e),s=o!==e&&!Ut(e),c=o[t];if(c!==lt[t]){let t=c.apply(e,a);return s?Kt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,ot(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function dt(e,t,n,r){let i=at(e),a=i!==e&&!Ut(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=ot(e,t)),n.call(this,t,ot(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?ot(e,c):c}function ft(e,t,n){let r=N(e);nt(r,`iterate`,tt);let i=r[t](...n);return(i===-1||i===!1)&&Wt(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function pt(e,t,n=[]){Ge(),Fe();let r=N(e)[t].apply(e,n);return Ie(),Ke(),r}var mt=e(`__proto__,__v_isRef,__isVue`),ht=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function gt(e){_(e)||(e=String(e));let t=N(this);return nt(t,`has`,e),t.hasOwnProperty(e)}var _t=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Ft:Pt:i?Nt:Mt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=st[t]))return e;if(t===`hasOwnProperty`)return gt}let o=Reflect.get(e,t,Jt(e)?e:n);if((_(t)?ht.has(t):mt(t))||(r||nt(e,`get`,t),i))return o;if(Jt(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?zt(e):e}return v(o)?r?zt(o):Lt(o):o}},vt=class extends _t{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Ht(i);if(!Ut(n)&&!Ht(n)&&(i=N(i),n=N(n)),!a&&Jt(i)&&!Jt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,Jt(e)?e:r);return e===N(r)&&s&&(o?D(n,i)&&rt(e,`set`,t,n,i):rt(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&rt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!ht.has(t))&&nt(e,`has`,t),n}ownKeys(e){return nt(e,`iterate`,d(e)?`length`:$e),Reflect.ownKeys(e)}},yt=class extends _t{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},bt=new vt,xt=new yt,St=new vt(!0),Ct=e=>e,wt=e=>Reflect.getPrototypeOf(e);function Tt(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?Ct:t?qt:Kt;return!t&&nt(a,`iterate`,l?et:$e),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Et(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Dt(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(D(n,a)&&nt(i,`get`,n),nt(i,`get`,a));let{has:o}=wt(i),s=t?Ct:e?qt:Kt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&nt(N(t),`iterate`,$e),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(D(t,i)&&nt(r,`has`,t),nt(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?Ct:e?qt:Kt;return!e&&nt(o,`iterate`,$e),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Et(`add`),set:Et(`set`),delete:Et(`delete`),clear:Et(`clear`)}:{add(e){let n=N(this),r=wt(n),i=N(e),a=!t&&!Ut(e)&&!Ht(e)?i:e;return r.has.call(n,a)||D(e,a)&&r.has.call(n,e)||D(i,a)&&r.has.call(n,i)||(n.add(a),rt(n,`add`,a,a)),this},set(e,n){!t&&!Ut(n)&&!Ht(n)&&(n=N(n));let r=N(this),{has:i,get:a}=wt(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?D(n,s)&&rt(r,`set`,e,n,s):rt(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=wt(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&rt(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&rt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Tt(r,e,t)}),n}function Ot(e,t){let n=Dt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var kt={get:Ot(!1,!1)},At={get:Ot(!1,!0)},jt={get:Ot(!0,!1)},Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap,Ft=new WeakMap;function It(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Lt(e){return Ht(e)?e:Bt(e,!1,bt,kt,Mt)}function Rt(e){return Bt(e,!1,St,At,Nt)}function zt(e){return Bt(e,!0,xt,jt,Pt)}function Bt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=It(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Vt(e){return Ht(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function Ut(e){return!!(e&&e.__v_isShallow)}function Wt(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function Gt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&O(e,`__v_skip`,!0),e}var Kt=e=>v(e)?Lt(e):e,qt=e=>v(e)?zt(e):e;function Jt(e){return e?e.__v_isRef===!0:!1}function P(e){return Xt(e,!1)}function Yt(e){return Xt(e,!0)}function Xt(e,t){return Jt(e)?e:new Zt(e,t)}var Zt=class{constructor(e,t){this.dep=new Xe,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:N(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Ut(e)||Ht(e);e=n?e:N(e),D(e,t)&&(this._rawValue=e,this._value=n?e:Kt(e),this.dep.trigger())}};function F(e){return Jt(e)?e.value:e}var Qt={get:(e,t,n)=>t===`__v_raw`?e:F(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Jt(i)&&!Jt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function $t(e){return Vt(e)?e:new Proxy(e,Qt)}var en=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Xe(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Je-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&M!==this)return Pe(this,!0),!0}get value(){let e=this.dep.track();return Be(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function tn(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new en(r,i,n)}var nn={},rn=new WeakMap,an=void 0;function on(e,t=!1,n=an){if(n){let t=rn.get(n);t||rn.set(n,t=[]),t.push(e)}}function sn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Ut(e)||o===!1||o===0?cn(e,1):cn(e),m,g,_,v,y=!1,b=!1;if(Jt(e)?(g=()=>e.value,y=Ut(e)):Vt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Vt(e)||Ut(e)),g=()=>e.map(e=>{if(Jt(e))return e.value;if(Vt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ge();try{_()}finally{Ke()}}let t=an;an=m;try{return f?f(e,3,[v]):e(v)}finally{an=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>cn(e(),t)}let x=Oe(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(nn):nn,w=e=>{if(m.flags&1&&(m.dirty||e)){if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>D(e,C[t])):D(t,C))){_&&_();let e=an;an=m;try{let e=[t,C===nn?void 0:b&&C[0]===nn?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{an=e}}}else m.run()}};return u&&u(w),m=new Ae(g),m.scheduler=l?()=>l(w,!1):w,v=e=>on(e,!1,m),_=m.onStop=()=>{let e=rn.get(m);if(e){if(f)f(e,4);else for(let t of e)t();rn.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function cn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Jt(e))cn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)cn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{cn(e,t,n)});else if(C(e)){for(let r in e)cn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&cn(e[r],t,n)}return e}function ln(e,t,n,r){try{return r?e(...r):e()}catch(e){dn(e,t,n)}}function un(e,t,n,r){if(h(e)){let i=ln(e,t,n,r);return i&&y(i)&&i.catch(e=>{dn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(un(e[a],t,n,r));return i}}function dn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ge(),ln(o,null,10,[e,i,a]),Ke();return}}fn(e,r,a,i,s)}function fn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var pn=[],mn=-1,hn=[],gn=null,_n=0,vn=Promise.resolve(),yn=null;function bn(e){let t=yn||vn;return e?t.then(this?e.bind(this):e):t}function xn(e){let t=mn+1,n=pn.length;for(;t<n;){let r=t+n>>>1,i=pn[r],a=Dn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Sn(e){if(!(e.flags&1)){let t=Dn(e),n=pn[pn.length-1];!n||!(e.flags&2)&&t>=Dn(n)?pn.push(e):pn.splice(xn(t),0,e),e.flags|=1,Cn()}}function Cn(){yn||=vn.then(On)}function wn(e){if(!d(e))gn&&e.id===-1?gn.splice(_n+1,0,e):e.flags&1||(hn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)hn.push(e[t]);Cn()}function Tn(e,t,n=mn+1){for(;n<pn.length;n++){let t=pn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;pn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function En(e){if(hn.length){let e=[...new Set(hn)].sort((e,t)=>Dn(e)-Dn(t));if(hn.length=0,gn){for(let t=0;t<e.length;t++)gn.push(e[t]);return}for(gn=e,_n=0;_n<gn.length;_n++){let e=gn[_n];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}gn=null,_n=0}}var Dn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function On(e){try{for(mn=0;mn<pn.length;mn++){let e=pn[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ln(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<pn.length;mn++){let e=pn[mn];e&&(e.flags&=-2)}mn=-1,pn.length=0,En(e),yn=null,(pn.length||hn.length)&&On(e)}}var kn=null,An=null;function jn(e){let t=kn;return kn=e,An=e&&e.type.__scopeId||null,t}function I(e,t=kn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Hi(-1);let i=jn(t),a=Ri.length,o;try{o=e(...n)}finally{for(let e=Ri.length;e>a;e--)Bi();jn(i),r._d&&Hi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function L(e,n){if(kn===null)return e;let r=ya(kn),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&cn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Mn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ge(),un(c,n,8,[e.el,s,e,t]),Ke())}}function Nn(e,t){if(aa){let n=aa.provides,r=aa.parent&&aa.parent.provides;r===n&&(n=aa.provides=Object.create(r)),n[e]=t}}function Pn(e,t,n=!1){let r=oa();if(r||Gr){let i=Gr?Gr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Fn=Symbol.for(`v-scx`),In=()=>Pn(Fn);function R(e,t,n){return Ln(e,t,n)}function Ln(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(fa){if(c===`sync`){let e=In();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=aa;u.call=(e,t,n)=>un(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{Si(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():Sn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=sn(e,n,u);return fa&&(f?f.push(h):d&&h()),h}function Rn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?zn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=la(this),s=Ln(i,a.bind(r),n);return o(),s}function zn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Bn=Symbol(`_vte`),Vn=e=>e.__isTeleport,Hn=Symbol(`_leaveCb`);function Un(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==Ii){t=n;break}}return t}function Wn(e){if(!$n(e))return Vn(e.type)&&e.children?Un(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function Gn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;Gn(Vn(n.type)&&Wn(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Kn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function qn(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Jn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Yn=new WeakMap;function Xn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Xn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Qn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Xn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?ya(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=N(v),b=v===t?i:e=>!Jn(_,e)&&u(y,e),x=(e,t)=>!(t&&Jn(_,t));if(m!=null&&m!==p){if(Zn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(Jt(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))ln(p,f,12,[l,_]);else{let t=g(p),n=Jt(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Yn.delete(e)};t.id=-1,Yn.set(e,t),Si(t,r)}else Zn(e),i()}}}function Zn(e){let t=Yn.get(e);t&&(t.flags|=8,Yn.delete(e))}le().requestIdleCallback,le().cancelIdleCallback;var Qn=e=>!!e.type.__asyncLoader,$n=e=>e.type.__isKeepAlive;function er(e,t){nr(e,`a`,t)}function tr(e,t){nr(e,`da`,t)}function nr(e,t,n=aa){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(ir(t,r,n),n){let e=n.parent;for(;e&&e.parent;)$n(e.parent.vnode)&&rr(r,t,n,e),e=e.parent}}function rr(e,t,n,r){let i=ir(t,e,r,!0);dr(()=>{c(r[t],i)},n)}function ir(e,t,n=aa,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ge();let i=la(n),a=un(t,n,e,r);return i(),Ke(),a};return r?i.unshift(a):i.push(a),a}}var ar=e=>(t,n=aa)=>{(!fa||e===`sp`)&&ir(e,(...e)=>t(...e),n)},or=ar(`bm`),sr=ar(`m`),cr=ar(`bu`),lr=ar(`u`),ur=ar(`bum`),dr=ar(`um`),fr=ar(`sp`),pr=ar(`rtg`),mr=ar(`rtc`);function hr(e,t=aa){ir(`ec`,e,t)}var gr=`components`;function _r(e,t){return br(gr,e,!0,t)||e}var vr=Symbol.for(`v-ndc`);function yr(e){return g(e)?br(gr,e,!1)||e:e||vr}function br(e,t,n=!0,r=!1){let i=kn||aa;if(i){let n=i.type;if(e===gr){let e=ba(n,!1);if(e&&(e===t||e===T(t)||e===E(T(t))))return n}let a=xr(i[e]||n[e],t)||xr(i.appContext[e],t);return!a&&r?n:a}}function xr(e,t){return e&&(e[t]||e[T(t)]||e[E(T(t))])}function z(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Vt(e),r=!1,s=!1;n&&(r=!Ut(e),s=Ht(e),e=at(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?qt(Kt(e[n])):Kt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}var Sr=e=>e?da(e)?ya(e):Sr(e.parent):null,Cr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Sr(e.parent),$root:e=>Sr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Mr(e),$forceUpdate:e=>e.f||=()=>{Sn(e.update)},$nextTick:e=>e.n||=bn.bind(e.proxy),$watch:e=>Rn.bind(e)}),wr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Tr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(wr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Dr&&(s[n]=0)}let d=Cr[n],f,p;if(d)return n===`$attrs`&&nt(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return wr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||wr(n,c)||u(o,c)||u(i,c)||u(Cr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Er(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Dr=!0;function Or(e){let t=Mr(e),n=e.proxy,i=e.ctx;Dr=!1,t.beforeCreate&&Ar(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:ie,inheritAttrs:E,components:ae,directives:D,filters:oe}=t;if(u&&kr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Lt(t))}if(Dr=!0,o)for(let e in o){let t=o[e],a=J({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)jr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Nn(t,e[t])})}f&&Ar(f,e,`c`);function O(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(O(or,p),O(sr,m),O(cr,g),O(lr,_),O(er,y),O(tr,b),O(hr,T),O(mr,te),O(pr,ne),O(ur,S),O(dr,w),O(fr,re),d(ie)){if(ie.length){let t=e.exposed||={};ie.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}ee&&e.render===r&&(e.render=ee),E!=null&&(e.inheritAttrs=E),ae&&(e.components=ae),D&&(e.directives=D),re&&qn(e)}function kr(e,t,n=r){d(e)&&(e=Lr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?Pn(r.from||n,r.default,!0):Pn(r.from||n):Pn(r),Jt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Ar(e,t,n){un(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function jr(e,t,n,r){let i=r.includes(`.`)?zn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&R(i,n)}else if(h(e))R(i,e.bind(n));else if(v(e)){if(d(e))e.forEach(e=>jr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&R(i,r,e)}}}function Mr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Nr(c,e,o,!0)),Nr(c,t,o)),v(t)&&a.set(t,c),c}function Nr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Nr(e,a,n,!0),i&&i.forEach(t=>Nr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Pr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Pr={data:Fr,props:Br,emits:Br,methods:zr,computed:zr,beforeCreate:Rr,created:Rr,beforeMount:Rr,mounted:Rr,beforeUpdate:Rr,updated:Rr,beforeDestroy:Rr,beforeUnmount:Rr,destroyed:Rr,unmounted:Rr,activated:Rr,deactivated:Rr,errorCaptured:Rr,serverPrefetch:Rr,components:zr,directives:zr,watch:Vr,provide:Fr,inject:Ir};function Fr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Ir(e,t){return zr(Lr(e),Lr(t))}function Lr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Rr(e,t){return e?[...new Set([].concat(e,t))]:t}function zr(e,t){return e?s(Object.create(null),e,t):t}function Br(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Er(e),Er(t??{})):t}function Vr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=Rr(e[r],t[r]);return n}function Hr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Ur=0;function Wr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Hr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Ur++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ca,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||G(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,ya(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(un(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Gr;Gr=l;try{return e()}finally{Gr=t}}};return l}}var Gr=null,Kr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${ie(t)}Modifiers`];function qr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Kr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=a.map(se)));let c,l=i[c=ae(n)]||i[c=ae(T(n))];!l&&o&&(l=i[c=ae(ie(n))]),l&&un(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,un(u,e,6,a)}}var Jr=new WeakMap;function Yr(e,t,n=!1){let r=n?Jr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Yr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Xr(e,t){return!e||!a(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,ie(t))||u(e,t))}function Zr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=jn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Zi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Zi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Qr(c)}}catch(t){Ri.length=0,dn(t,e,1),v=G(Ii)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=$r(y,a)),b=Xi(b,y,!1,!0))}return n.dirs&&(b=Xi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Gn(Vn(b.type)&&Wn(b)||b,n.transition),v=b,jn(_),v}var Qr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},$r=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ei(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ti(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(ni(o,r,n)&&!Xr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||ti(r,o,l):!!o;return!1}function ti(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(ni(t,e,a)&&!Xr(n,a))return!0}return!1}function ni(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!xe(r,i):r!==i}function ri({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var ii={},ai=()=>Object.create(ii),oi=e=>Object.getPrototypeOf(e)===ii;function si(e,t,n,r=!1){let i={},a=ai();e.propsDefaults=Object.create(null),li(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Rt(i):e.type.props?i:a,e.attrs=a}function ci(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Xr(e.emitsOptions,o))continue;let d=t[o];if(c){if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=ui(c,s,t,d,e,!1)}}else d!==a[o]&&(a[o]=d,l=!0)}}}else{li(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=ie(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ui(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&rt(e.attrs,`set`,``)}function li(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ee(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Xr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=N(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ui(a,n,s,i[s],e,!u(i,s))}}return s}function ui(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=la(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===ie(n))&&(r=!0))}return r}var di=new WeakMap;function fi(e,r,i=!1){let a=i?di:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=fi(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);pi(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(pi(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function pi(e){return e[0]!==`$`&&!ee(e)}var mi=e=>e===`_`||e===`_ctx`||e===`$stable`,hi=e=>d(e)?e.map(Zi):[Zi(e)],gi=(e,t,n)=>{if(t._n)return t;let r=I((...e)=>hi(t(...e)),n);return r._c=!1,r},_i=(e,t,n)=>{let r=e._ctx;for(let n in e){if(mi(n))continue;let i=e[n];if(h(i))t[n]=gi(n,i,r);else if(i!=null){let e=hi(i);t[n]=()=>e}}},vi=(e,t)=>{let n=hi(t);e.slots.default=()=>n},yi=(e,t,n)=>{for(let r in t)(n||!mi(r))&&(e[r]=t[r])},bi=(e,t,n)=>{let r=e.slots=ai();if(e.vnode.shapeFlag&32){let e=t._;e?(yi(r,t,n),n&&O(r,`_`,e,!0)):_i(t,r)}else t&&vi(e,t)},xi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:yi(a,n,r):(o=!n.$stable,_i(n,a)),s=n}else n&&(vi(e,n),s={default:1});if(o)for(let e in a)!mi(e)&&s[e]==null&&delete a[e]},Si=Pi;function Ci(e){return wi(e)}function wi(e,i){let a=le();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,r,i=null,a=null,o=null,s=void 0,c=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Gi(e,t)&&(i=ve(e),A(e,a,o,!0),e=null),t.patchFlag===-2&&(l=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===n&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:u,ref:d,shapeFlag:f}=t;switch(u){case Fi:y(e,t,r,i);break;case Ii:b(e,t,r,i);break;case Li:e??x(t,r,i,s);break;case B:ae(e,t,r,i,a,o,s,c,l);break;default:f&1?w(e,t,r,i,a,o,s,c,l):f&6?D(e,t,r,i,a,o,s,c,l):(f&64||f&128)&&u.process(e,t,r,i,a,o,s,c,l,xe)}d!=null&&a?Xn(d,e&&e.ref,o,t||e,!t):d==null&&e&&e.ref!=null&&Xn(e.ref,null,o,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,Ti(e,a),s,u),_&&Mn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ee(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ta(f,r,e)}_&&Mn(e,null,r,`beforeMount`);let v=Di(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&Si(()=>{try{f&&ta(f,r,e),v&&g.enter(d),_&&Mn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ni(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Qi(e[l]):Zi(e[l]);v(null,c,t,n,r,i,a,o,s)}},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Ei(r,!1),(g=h.onVnodeBeforeUpdate)&&ta(g,r,n,e),f&&Mn(n,e,r,`beforeUpdate`),r&&Ei(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?ie(e.dynamicChildren,d,l,r,i,Ti(n,a),o):s||ue(e,n,l,null,r,i,Ti(n,a),o,!1),u>0){if(u&16)E(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&E(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&Si(()=>{g&&ta(g,r,n,e),f&&Mn(n,e,r,`updated`)},i)},ie=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===B||!Gi(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},E=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ee(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ee(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ae=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(ie(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Oi(e,t,!0)):ue(e,t,n,f,i,a,s,c,l)},D=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):O(t,n,r,i,a,o,c):se(e,t,c)},O=(e,t,n,r,i,a,o)=>{let s=e.component=ia(e,r,i);if($n(e)&&(s.ctx.renderer=xe),pa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ce,o),!e.el){let r=s.subTree=G(Ii);b(null,r,t,n),e.placeholder=r.el}}else ce(s,e,t,n,i,a,o)},se=(e,t,n)=>{let r=t.component=e.component;if(ei(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,k(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},ce=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Ai(e);if(n){t&&(t.el=c.el,k(e,t,o)),n.asyncDep.then(()=>{Si(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Ei(e,!1),t?(t.el=c.el,k(e,t,o)):t=c,n&&oe(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ta(d,s,t,c),Ei(e,!0);let f=Zr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ve(p),e,i,a),t.el=f.el,u===null&&ri(e,f.el),r&&Si(r,i),(d=t.props&&t.props.onVnodeUpdated)&&Si(()=>ta(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Qn(t);if(Ei(e,!1),l&&oe(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ta(o,d,t),Ei(e,!0),s&&Ce){let t=()=>{e.subTree=Zr(e),Ce(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Zr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Si(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Si(()=>ta(o,d,e),i)}(t.shapeFlag&256||d&&Qn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Si(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ae(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Sn(u),Ei(e,!0),l()},k=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ci(e,t.props,r,n),xi(e,t.children,n),Ge(),Tn(e),Ke()},ue=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){fe(l,d,n,r,i,a,o,s,c);return}if(f&256){de(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&_e(l,i,a),d!==l&&p(n,d)):u&16?m&16?fe(l,d,n,r,i,a,o,s,c):_e(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},de=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let n=t[p]=l?Qi(t[p]):Zi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?_e(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},fe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Qi(t[u]):Zi(t[u]);if(Gi(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Qi(t[p]):Zi(t[p]);if(Gi(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Qi(t[u]):Zi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)A(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Qi(t[u]):Zi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){A(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Gi(n,t[_])){i=_;break}i===void 0?A(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?ki(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Mi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?pe(n,r,p,2):_--)}}},pe=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6)pe(e.component.subTree,t,n,r);else if(d&128)e.suspense.move(t,n,r);else if(d&64)c.move(e,t,n,xe);else if(c===B){o(a,t,n);for(let e=0;e<u.length;e++)pe(u[e],t,n,r);o(e.anchor,t,n)}else if(c===Li)S(e,t,n);else if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[Hn]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),Si(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[Hn];a._isLeaving&&a[Hn](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},A=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(Ge(),Xn(s,null,n,e,!0),Ke()),p!=null&&(!e.ctx||e.ctx===t)&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Qn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&ta(_,t,e),u&6)ge(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Mn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,xe,r):l&&!l.hasOnce&&(a!==B||d>0&&d&64)?_e(l,t,n,!1,!0):(a===B&&d&384||!i&&u&16)&&_e(c,t,n),r&&me(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Si(()=>{_&&ta(_,t,e),h&&Mn(e,null,t,`unmounted`),v&&(e.el=null)},n)},me=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===B){he(n,r);return}if(t===Li){C(e),i&&!i.persisted&&i.afterLeave&&i.afterLeave();return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},he=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ge=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;ji(c),ji(l),r&&oe(r),i.stop(),a?(a.flags|=8,A(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,A(o,e,t,n)),s&&Si(s,t),Si(()=>{e.isUnmounted=!0},t)},_e=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)A(e[o],t,n,r,i)},ve=e=>{if(e.shapeFlag&6)return ve(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Bn];return n?h(n):t},ye=!1,be=(e,t,n)=>{let r;e==null?t._vnode&&(A(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ye||=(ye=!0,Tn(r),En(),!1)},xe={p:v,um:A,m:pe,r:me,mt:O,mc:T,pc:ue,pbc:ie,n:ve,o:e},Se,Ce;return i&&([Se,Ce]=i(xe)),{render:be,hydrate:Se,createApp:Wr(be,Se)}}function Ti({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ei({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Di(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Oi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Qi(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Oi(t,a)),a.type===Fi&&(a.patchFlag===-1&&(a=i[e]=Qi(a)),a.el=t.el),a.type===Ii&&!a.el&&(a.el=t.el)}}function ki(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Ai(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ai(t)}function ji(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Mi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Mi(t.subTree):null}var Ni=e=>e.__isSuspense;function Pi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):wn(e)}var B=Symbol.for(`v-fgt`),Fi=Symbol.for(`v-txt`),Ii=Symbol.for(`v-cmt`),Li=Symbol.for(`v-stc`),Ri=[],zi=null;function V(e=!1){Ri.push(zi=e?null:[])}function Bi(){Ri.pop(),zi=Ri[Ri.length-1]||null}var Vi=1;function Hi(e,t=!1){Vi+=e,e<0&&zi&&t&&(zi.hasOnce=!0)}function Ui(e){return e.dynamicChildren=Vi>0?zi||n:null,Bi(),Vi>0&&zi&&zi.push(e),e}function H(e,t,n,r,i,a){return Ui(W(e,t,n,r,i,a,!0))}function U(e,t,n,r,i){return Ui(G(e,t,n,r,i,!0))}function Wi(e){return e?e.__v_isVNode===!0:!1}function Gi(e,t){return e.type===t.type&&e.key===t.key}var Ki=({key:e})=>e??null,qi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||Jt(e)||h(e)?{i:kn,r:e,k:t,f:!!n}:e);function W(e,t=null,n=null,r=0,i=null,a=e===B?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ki(t),ref:t&&qi(t),scopeId:An,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:kn};return s?($i(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Vi>0&&!o&&zi&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&zi.push(c),c}var G=Ji;function Ji(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===vr)&&(e=Ii),Wi(e)){let r=Xi(e,t,!0);return n&&$i(r,n),Vi>0&&!a&&zi&&(r.shapeFlag&6?zi[zi.indexOf(e)]=r:zi.push(r)),r.patchFlag=-2,r}if(xa(e)&&(e=e.__vccOpts),t){t=Yi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=A(e)),v(n)&&(Wt(n)&&!d(n)&&(n=s({},n)),t.style=k(n))}let o=g(e)?1:Ni(e)?128:Vn(e)?64:v(e)?4:h(e)?2:0;return W(e,t,n,r,i,o,a,!0)}function Yi(e){return e?Wt(e)||oi(e)?s({},e):e:null}function Xi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ea(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ki(l),ref:t&&t.ref?n&&a?d(a)?a.concat(qi(t)):[a,qi(t)]:qi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==B?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xi(e.ssContent),ssFallback:e.ssFallback&&Xi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&Gn(u,c.clone(u)),u}function K(e=` `,t=0){return G(Fi,null,e,t)}function q(e=``,t=!1){return t?(V(),U(Ii,null,e)):G(Ii,null,e)}function Zi(e){return e==null||typeof e==`boolean`?G(Ii):d(e)?G(B,null,e.slice()):Wi(e)?Qi(e):G(Fi,null,String(e))}function Qi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xi(e)}function $i(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),$i(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!oi(t)?t._ctx=kn:r===3&&kn&&(kn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(h(t)){if(r&65){$i(e,{default:t});return}t={default:t,_ctx:kn},n=32}else t=String(t),r&64?(n=16,t=[K(t)]):n=8;e.children=t,e.shapeFlag|=n}function ea(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=A([t.class,r.class]));else if(e===`style`)t.style=k([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ta(e,t,n,r=null){un(e,t,7,[n,r])}var na=Hr(),ra=0;function ia(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||na,o={uid:ra++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new De(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fi(i,a),emitsOptions:Yr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=qr.bind(null,o),e.ce&&e.ce(o),o}var aa=null,oa=()=>aa||kn,sa,ca;{let e=le(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};sa=t(`__VUE_INSTANCE_SETTERS__`,e=>aa=e),ca=t(`__VUE_SSR_SETTERS__`,e=>fa=e)}var la=e=>{let t=aa;return sa(e),e.scope.on(),()=>{e.scope.off(),sa(t)}},ua=()=>{aa&&aa.scope.off(),sa(null)};function da(e){return e.vnode.shapeFlag&4}var fa=!1;function pa(e,t=!1,n=!1){t&&ca(t);let{props:r,children:i}=e.vnode,a=da(e);si(e,r,a,t),bi(e,i,n||t);let o=a?ma(e,t):void 0;return t&&ca(!1),o}function ma(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Tr);let{setup:r}=n;if(r){Ge();let n=e.setupContext=r.length>1?va(e):null,i=la(e),a=ln(r,e,0,[e.props,n]),o=y(a);if(Ke(),i(),(o||e.sp)&&!Qn(e)&&qn(e),o){if(a.then(ua,ua),t)return a.then(n=>{ca(!0);try{ha(e,n,t)}finally{ca(!1)}}).catch(t=>{dn(t,e,0)});e.asyncDep=a}else ha(e,a,t)}else ga(e,t)}function ha(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=$t(t)),ga(e,n)}function ga(e,t,n){let i=e.type;e.render||=i.render||r;{let t=la(e);Ge();try{Or(e)}finally{Ke(),t()}}}var _a={get(e,t){return nt(e,`get`,``),e[t]}};function va(e){return{attrs:new Proxy(e.attrs,_a),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function ya(e){return e.exposed?e.exposeProxy||=new Proxy($t(Gt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Cr)return Cr[n](e)},has(e,t){return t in e||t in Cr}}):e.proxy}function ba(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function xa(e){return h(e)&&`__vccOpts`in e}var J=(e,t)=>tn(e,t,fa);function Sa(e,t,n){try{Hi(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Wi(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wi(n)&&(n=[n]),G(e,t,n))}finally{Hi(1)}}var Ca=`3.5.43`,wa=void 0,Ta=typeof window<`u`&&window.trustedTypes;if(Ta)try{wa=Ta.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ea=wa?e=>wa.createHTML(e):e=>e,Da=`http://www.w3.org/2000/svg`,Oa=`http://www.w3.org/1998/Math/MathML`,ka=typeof document<`u`?document:null,Aa=ka&&ka.createElement(`template`),ja={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?ka.createElementNS(Da,e):t===`mathml`?ka.createElementNS(Oa,e):n?ka.createElement(e,{is:n}):ka.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>ka.createTextNode(e),createComment:e=>ka.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ka.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Aa.innerHTML=Ea(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Aa.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ma=Symbol(`_vtc`);function Na(e,t,n){let r=e[Ma];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Pa=Symbol(`_vod`),Fa=Symbol(`_vsh`),Ia={name:`show`,beforeMount(e,{value:t},{transition:n}){e[Pa]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):La(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),La(e,!0),r.enter(e)):r.leave(e,()=>{La(e,!1)}):La(e,t))},beforeUnmount(e,{value:t}){La(e,t)}};function La(e,t){e.style.display=t?e[Pa]:`none`,e[Fa]=!t}var Ra=Symbol(``),za=/(?:^|;)\s*display\s*:/;function Ba(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t){if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ha(r,t,``)}else for(let e in t)n[e]??Ha(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Ha(r,i,``):Ka(e,i,!g(t)&&t?t[i]:void 0,o)||Ha(r,i,o)}}else if(i){if(t!==n){let e=r[Ra];e&&(n+=`;`+e),r.cssText=n,a=za.test(n)}}else t&&e.removeAttribute(`style`);Pa in e&&(e[Pa]=a?r.display:``,e[Fa]&&(r.display=`none`))}var Va=/\s*!important$/;function Ha(e,t,n){if(d(n))n.forEach(n=>Ha(e,t,n));else if(n??=``,t.startsWith(`--`))Va.test(n)?e.setProperty(t,n.replace(Va,``),`important`):e.setProperty(t,n);else{let r=Ga(e,t);Va.test(n)?e.setProperty(ie(r),n.replace(Va,``),`important`):e[r]=n}}var Ua=[`Webkit`,`Moz`,`ms`],Wa={};function Ga(e,t){let n=Wa[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return Wa[t]=r;r=E(r);for(let n=0;n<Ua.length;n++){let i=Ua[n]+r;if(i in e)return Wa[t]=i}return t}function Ka(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var qa=`http://www.w3.org/1999/xlink`;function Ja(e,t,n,r,i,a=he(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(qa,t.slice(6,t.length)):e.setAttributeNS(qa,t,n):n==null||a&&!ge(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Ya(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ea(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ge(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Xa(e,t,n,r){e.addEventListener(t,n,r)}function Za(e,t,n,r){e.removeEventListener(t,n,r)}var Qa=Symbol(`_vei`);function $a(e,t,n,r,i=null){let a=e[Qa]||(e[Qa]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=no(t);r?Xa(e,n,a[t]=oo(r,i),s):o&&(Za(e,n,o,s),a[t]=void 0)}}var eo=/(Once|Passive|Capture)$/,to=/^on:?(?:Once|Passive|Capture)$/;function no(e){let t,n;for(;(n=e.match(eo))&&!to.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):ie(e.slice(2)),t]}var ro=0,io=Promise.resolve(),ao=()=>ro||=(io.then(()=>ro=0),Date.now());function oo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&un(e,t,5,a)}}else un(r,t,5,[e])};return n.value=e,n.attached=ao(),n}var so=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,co=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Na(e,r,c):t===`style`?Ba(e,n,r):a(t)?o(t)||$a(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):lo(e,t,r,c))?(Ya(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ja(e,t,r,c,s,t!==`value`)):e._isVueCE&&(uo(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Ya(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ja(e,t,r,c))};function lo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&so(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return so(t)&&g(n)?!1:t in e}function uo(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var fo=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>oe(t,e):t};function po(e){e.target.composing=!0}function mo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var ho=Symbol(`_assign`),go=Symbol(`_initialValue`);function _o(e,t,n){return t&&(e=e.trim()),n&&(e=se(e)),e}var Y={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[go]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[go]=e.defaultValue.replace(/\r\n?/g,`
`))),e[ho]=fo(i);let a=r||i.props&&i.props.type===`number`;Xa(e,t?`change`:`input`,t=>{t.target.composing||e[ho](_o(e.value,n,a))}),(n||a)&&Xa(e,`change`,()=>{e.value=_o(e.value,n,a)}),t||(Xa(e,`compositionstart`,po),Xa(e,`compositionend`,mo),Xa(e,`change`,mo))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[go];delete e[go],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[ho](_o(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[ho]=fo(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?se(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},vo={deep:!0,created(e,t,n){e[ho]=fo(n),Xa(e,`change`,()=>{let t=e._modelValue,n=Co(e),r=e.checked,i=e[ho];if(d(t)){let e=Se(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(p(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(wo(e,r))})},mounted:yo,beforeUpdate(e,t,n){e[ho]=fo(n),yo(e,t,n)}};function yo(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(d(t))i=Se(t,r.props.value)>-1;else if(p(t))i=t.has(r.props.value);else{if(t===n)return;i=xe(t,wo(e,!0))}e.checked!==i&&(e.checked=i)}var bo={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,Xa(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?se(Co(e)):Co(e)),r=e.multiple,i=r?p(e._modelValue)?new Set(t):t:t[0],a=e._pendingValue=[r,r?d(i)?t.slice():t:i];try{e[ho](i)}finally{bn(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[ho]=fo(r)},mounted(e,{value:t}){So(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[ho]=fo(n)},updated(e,{value:t}){let n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!xo(t,n[1],n[0]))&&So(e,t)}};function xo(e,t,n){if(!n||d(e))return xe(e,t);if(p(e)){if(e.size!==t.length)return!1;for(let n of t)if(!e.has(n))return!1;return!0}return!1}function So(e,t){let n=e.multiple,r=d(t);if(!n||r||p(t)){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=Co(a);if(n){if(r){let e=typeof o;a.selected=e===`string`||e===`number`?t.some(e=>String(e)===String(o)):Se(t,o)>-1}else a.selected=t.has(o)}else if(xe(Co(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Co(e){return`_value`in e?e._value:e.value}function wo(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var To=[`ctrl`,`shift`,`alt`,`meta`],Eo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>To.some(n=>e[`${n}Key`]&&!t.includes(n))},Do=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Eo[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Oo={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},ko=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=ie(n.key);if(t.some(e=>e===r||Oo[e]===r))return e(n)}))},Ao=s({patchProp:co},ja),jo;function Mo(){return jo||=Ci(Ao)}var No=((...e)=>{let t=Mo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Fo(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Po(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Po(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Fo(e){return g(e)?document.querySelector(e):e}var Io=typeof document<`u`;function Lo(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Ro(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Lo(e.default)}var X=Object.assign;function zo(e,t){let n={};for(let r in t){let i=t[r];n[r]=Vo(i)?i.map(e):e(i)}return n}var Bo=()=>{},Vo=Array.isArray;function Ho(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Uo=/#/g,Wo=/&/g,Go=/\//g,Ko=/=/g,qo=/\?/g,Jo=/\+/g,Yo=/%5B/g,Xo=/%5D/g,Zo=/%5E/g,Qo=/%60/g,$o=/%7B/g,es=/%7C/g,ts=/%7D/g,ns=/%20/g;function rs(e){return e==null?``:encodeURI(``+e).replace(es,`|`).replace(Yo,`[`).replace(Xo,`]`)}function is(e){return rs(e).replace($o,`{`).replace(ts,`}`).replace(Zo,`^`)}function as(e){return rs(e).replace(Jo,`%2B`).replace(ns,`+`).replace(Uo,`%23`).replace(Wo,`%26`).replace(Qo,"`").replace($o,`{`).replace(ts,`}`).replace(Zo,`^`)}function os(e){return as(e).replace(Ko,`%3D`)}function ss(e){return rs(e).replace(Uo,`%23`).replace(qo,`%3F`)}function cs(e){return ss(e).replace(Go,`%2F`)}function ls(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var us=/\/$/,ds=e=>e.replace(us,``);function fs(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=bs(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:ls(o)}}function ps(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function ms(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function hs(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&gs(t.matched[r],n.matched[i])&&_s(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _s(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!vs(e[n],t[n]))return!1;return!0}function vs(e,t){return Vo(e)?ys(e,t):Vo(t)?ys(t,e):e?.valueOf()===t?.valueOf()}function ys(e,t){return Vo(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function bs(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var xs={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},Ss=function(e){return e.pop=`pop`,e.push=`push`,e}({}),Cs=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function ws(e){if(!e){if(Io){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),ds(e)}var Ts=/^[^#]+#/;function Es(e,t){return e.replace(Ts,`#`)+t}function Ds(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Os=()=>({left:window.scrollX,top:window.scrollY});function ks(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Ds(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function As(e,t){return(history.state?history.state.position-t:-1)+e}var js=new Map;function Ms(e,t){js.set(e,t)}function Ns(e){let t=js.get(e);return js.delete(e),t}function Ps(e){return typeof e==`string`||e&&typeof e==`object`}function Fs(e){return typeof e==`string`||typeof e==`symbol`}var Is=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Ls=Symbol(``);Is.MATCHER_NOT_FOUND,Is.NAVIGATION_GUARD_REDIRECT,Is.NAVIGATION_ABORTED,Is.NAVIGATION_CANCELLED,Is.NAVIGATION_DUPLICATED;function Rs(e,t){return X(Error(),{type:e,[Ls]:!0},t)}function zs(e,t){return e instanceof Error&&Ls in e&&(t==null||!!(e.type&t))}function Bs(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Jo,` `),i=r.indexOf(`=`),a=ls(i<0?r:r.slice(0,i)),o=i<0?null:ls(r.slice(i+1));if(a in t){let e=t[a];Vo(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Vs(e){let t=``;for(let n in e){let r=e[n];n=os(n),r==null?r!==void 0&&(t+=(t.length?`&`:``)+n):(Vo(r)?r.map(e=>e&&as(e)):[r&&as(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Hs(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Vo(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var Us=Symbol(``),Ws=Symbol(``),Gs=Symbol(``),Ks=Symbol(``),qs=Symbol(``);function Js(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ys(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Rs(Is.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Ps(e)?c(Rs(Is.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Xs(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(Lo(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Ys(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Ro(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Ys(c,n,r,o,e,i)()}))}}}return a}function Zs(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>gs(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>gs(e,s))||i.push(s))}return[n,r,i]}var Qs=()=>location.protocol+`//`+location.host;function $s(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),ms(n,``)}return ms(n,e)+r+i}function ec(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=$s(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:Ss.pop,direction:u?u>0?Cs.forward:Cs.back:Cs.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(X({},e.state,{scroll:Os()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function tc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Os():null}}function nc(e){let{history:t,location:n}=window,r={value:$s(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Qs()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,X({},t.state,tc(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=X({},i.value,t.state,{forward:e,scroll:Os()});a(o.current,o,!0),a(e,X({},tc(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function rc(e){e=ws(e);let t=nc(e),n=ec(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=X({location:``,base:e,go:r,createHref:Es.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ic(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),rc(e)}var ac=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),oc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(oc||{}),sc={type:ac.Static,value:``},cc=/[a-zA-Z0-9_]/;function lc(e){if(!e)return[[]];if(e===`/`)return[[sc]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=oc.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===oc.Static?a.push({type:ac.Static,value:l}):n===oc.Param||n===oc.ParamRegExp||n===oc.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:ac.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)if(c=e[s++],c===`\\`&&n!==oc.ParamRegExp)r=n,n=oc.EscapeNext;else switch(n){case oc.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=oc.Param):f();break;case oc.EscapeNext:f(),n=r;break;case oc.Param:c===`(`?n=oc.ParamRegExp:cc.test(c)?f():(d(),n=oc.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case oc.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=oc.ParamRegExpEnd:u+=c;break;case oc.ParamRegExpEnd:d(),n=oc.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===oc.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var uc=`[^/]+?`,dc={sensitive:!1,strict:!1,start:!0,end:!0},fc=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(fc||{}),pc=/[.+*?^${}()[\]/\\]/g;function mc(e,t){let n=X({},dc,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[fc.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=fc.Segment+(n.sensitive?fc.BonusCaseSensitive:0);if(o.type===ac.Static)r||(i+=`/`),i+=o.value.replace(pc,`\\$&`),s+=fc.Static;else if(o.type===ac.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||uc;if(u!==uc){s+=fc.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=fc.Dynamic,c&&(s+=fc.BonusOptional),n&&(s+=fc.BonusRepeatable),u===`.*`&&(s+=fc.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=fc.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===ac.Static)n+=e.value;else if(e.type===ac.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Vo(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Vo(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function hc(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===fc.Static+fc.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===fc.Static+fc.Segment?1:-1:0}function gc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=hc(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(_c(r))return 1;if(_c(i))return-1}return i.length-r.length}function _c(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var vc={strict:!1,end:!0,sensitive:!1};function yc(e,t,n){let r=X(mc(lc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function bc(e,t){let n=[],r=new Map;t=Ho(vc,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Sc(e);s.aliasOf=r&&r.record;let l=Ho(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Sc(X({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=yc(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!wc(d)&&o(e.name)),Oc(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Bo}function o(e){if(Fs(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Ec(e,n);n.splice(t,0,e),e.record.name&&!wc(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Rs(Is.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=X(xc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&xc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Rs(Is.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=X({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Tc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function xc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Sc(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Cc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Cc(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function wc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Tc(e){return e.reduce((e,t)=>X(e,t.meta),{})}function Ec(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;gc(e,t[i])<0?r=i:n=i+1}let i=Dc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Dc(e){let t=e;for(;t=t.parent;)if(Oc(t)&&gc(e,t)===0)return t}function Oc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function kc(e){let t=Pn(Gs),n=Pn(Ks),r=J(()=>{let n=F(e.to);return t.resolve(n)}),i=J(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(gs.bind(null,i));if(o>-1)return o;let s=Pc(e[t-2]);return t>1&&Pc(i)===s&&a[a.length-1].path!==s?a.findIndex(gs.bind(null,e[t-2])):o}),a=J(()=>i.value>-1&&Nc(n.params,r.value.params)),o=J(()=>i.value>-1&&i.value===n.matched.length-1&&_s(n.params,r.value.params));function s(n={}){if(Mc(n)){let n=t[F(e.replace)?`replace`:`push`](F(e.to)).catch(Bo);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:J(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Ac(e){return e.length===1?e[0]:e}var jc=Kn({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:kc,setup(e,{slots:t}){let n=Lt(kc(e)),{options:r}=Pn(Gs),i=J(()=>({[Fc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Fc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Ac(t.default(n));return e.custom?r:Sa(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Mc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Nc(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Vo(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Pc(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Fc=(e,t,n)=>e??t??n,Ic=Kn({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Pn(qs),i=J(()=>e.route||r.value),a=Pn(Ws,0),o=J(()=>{let e=F(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=J(()=>i.value.matched[o.value]);Nn(Ws,J(()=>o.value+1)),Nn(Us,s),Nn(qs,i);let c=P();return R(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!gs(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Lc(n.default,{Component:l,route:r});let u=o.props[a],d=Sa(l,X({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Lc(n.default,{Component:d,route:r})||d}}});function Lc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Rc=Ic;function zc(e){let t=bc(e.routes,e),n=e.parseQuery||Bs,r=e.stringifyQuery||Vs,i=e.history,a=Js(),o=Js(),s=Js(),c=Yt(xs),l=xs;Io&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=zo.bind(null,e=>``+e),d=zo.bind(null,cs),f=zo.bind(null,ls);function p(e,n){let r,i;return Fs(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=X({},a||c.value),typeof e==`string`){let r=fs(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return X(r,o,{params:f(o.params),hash:ls(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=X({},e,{path:fs(n,e.path,a.path).path});else{let t=X({},e.params);for(let e in t)t[e]??delete t[e];o=X({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=ps(r,X({},e,{hash:is(l),path:s.path})),m=i.createHref(p);return X({fullPath:p,hash:l,query:r===Vs?Hs(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?fs(n,e,c.value.path):X({},e)}function y(e,t){if(l!==e)return Rs(Is.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(X(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),X({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(X(v(u),{state:typeof u==`object`?X({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&hs(r,i,n)&&(f=Rs(Is.NAVIGATION_DUPLICATED,{to:d,from:i}),ce(i,i,!0,!1)),(f?Promise.resolve(f):te(d,i)).catch(e=>zs(e)?zs(e,Is.NAVIGATION_GUARD_REDIRECT)?e:se(e):oe(e,d,i)).then(e=>{if(e){if(zs(e,Is.NAVIGATION_GUARD_REDIRECT))return C(X({replace:s},v(e.to),{state:typeof e.to==`object`?X({},a,e.to.state):a,force:o}),t||d)}else e=T(d,i,!0,s,a);return ne(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function ee(e){let t=ue.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function te(e,t){let n,[r,i,s]=Zs(e,t);n=Xs(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Ys(r,e,t))});let c=w.bind(null,e,t);return n.push(c),fe(n).then(()=>{n=[];for(let r of a.list())n.push(Ys(r,e,t));return n.push(c),fe(n)}).then(()=>{n=Xs(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Ys(r,e,t))});return n.push(c),fe(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(Vo(r.beforeEnter))for(let i of r.beforeEnter)n.push(Ys(i,e,t));else n.push(Ys(r.beforeEnter,e,t))}return n.push(c),fe(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Xs(s,`beforeRouteEnter`,e,t,ee),n.push(c),fe(n))).then(()=>{n=[];for(let r of o.list())n.push(Ys(r,e,t));return n.push(c),fe(n)}).catch(e=>zs(e,Is.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function ne(e,t,n){s.list().forEach(r=>ee(()=>r(e,t,n)))}function T(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===xs,l=Io?history.state:{};n&&(r||s?i.replace(e.fullPath,X({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,ce(e,t,n,s),se()}let re;function ie(){re||=i.listen((e,t,n)=>{if(!de.listening)return;let r=_(e),a=S(r,de.currentRoute.value);if(a){C(X(a,{replace:!0,force:!0}),r).catch(Bo);return}l=r;let o=c.value;Io&&Ms(As(o.fullPath,n.delta),Os()),te(r,o).catch(e=>zs(e,Is.NAVIGATION_ABORTED|Is.NAVIGATION_CANCELLED)?e:zs(e,Is.NAVIGATION_GUARD_REDIRECT)?(C(X(v(e.to),{force:!0}),r).then(e=>{zs(e,Is.NAVIGATION_ABORTED|Is.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===Ss.pop&&i.go(-1,!1)}).catch(Bo),Promise.reject()):(n.delta&&i.go(-n.delta,!1),oe(e,r,o))).then(e=>{e||=T(r,o,!1),e&&(n.delta&&!zs(e,Is.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===Ss.pop&&zs(e,Is.NAVIGATION_ABORTED|Is.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ne(r,o,e)}).catch(Bo)})}let E=Js(),ae=Js(),D;function oe(e,t,n){se(e);let r=ae.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function O(){return D&&c.value!==xs?Promise.resolve():new Promise((e,t)=>{E.add([e,t])})}function se(e){return D||(D=!e,ie(),E.list().forEach(([t,n])=>e?n(e):t()),E.reset()),e}function ce(t,n,r,i){let{scrollBehavior:a}=e;if(!Io||!a)return Promise.resolve();let o=!r&&Ns(As(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return bn().then(()=>a(t,n,o)).then(e=>e&&ks(e)).catch(e=>oe(e,t,n))}let le=e=>i.go(e),k,ue=new Set,de={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ae.add,isReady:O,install(e){e.component(`RouterLink`,jc),e.component(`RouterView`,Rc),e.config.globalProperties.$router=de,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>F(c)}),Io&&!k&&c.value===xs&&(k=!0,b(i.location).catch(e=>{}));let t={};for(let e in xs)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Gs,de),e.provide(Ks,Rt(t)),e.provide(qs,c);let n=e.unmount;ue.add(e),e.unmount=function(){ue.delete(e),ue.size<1&&(l=xs,re&&re(),re=null,c.value=xs,k=!1,D=!1),n()}}};function fe(e){return e.reduce((e,t)=>e.then(()=>ee(t)),Promise.resolve())}return de}function Bc(){return Pn(Gs)}function Vc(e){return Pn(Ks)}var Hc=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Uc=e=>e===``,Wc=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Gc=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Kc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),qc=e=>{let t=Kc(e);return t.charAt(0).toUpperCase()+t.slice(1)},Jc={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},Yc=({name:e,iconNode:t,absoluteStrokeWidth:n,"absolute-stroke-width":r,strokeWidth:i,"stroke-width":a,size:o=Jc.width,color:s=Jc.stroke,...c},{slots:l})=>Sa(`svg`,{...Jc,...c,width:o,height:o,stroke:s,"stroke-width":Uc(n)||Uc(r)||n===!0||r===!0?Number(i||a||Jc[`stroke-width`])*24/Number(o):i||a||Jc[`stroke-width`],class:Wc(`lucide`,c.class,...e?[`lucide-${Gc(qc(e))}-icon`,`lucide-${Gc(e)}`]:[`lucide-icon`]),...!l.default&&!Hc(c)&&{"aria-hidden":`true`}},[...t.map(e=>Sa(...e)),...l.default?[l.default()]:[]]),Xc=(e,t)=>(n,{slots:r,attrs:i})=>Sa(Yc,{...i,...n,iconNode:t,name:e},r),Zc=Xc(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Qc=Xc(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),$c=Xc(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),el=Xc(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),tl=Xc(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),nl=Xc(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),rl=Xc(`dices`,[[`rect`,{width:`12`,height:`12`,x:`2`,y:`10`,rx:`2`,ry:`2`,key:`6agr2n`}],[`path`,{d:`m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6`,key:`1o487t`}],[`path`,{d:`M6 18h.01`,key:`uhywen`}],[`path`,{d:`M10 14h.01`,key:`ssrbsk`}],[`path`,{d:`M15 6h.01`,key:`cblpky`}],[`path`,{d:`M18 9h.01`,key:`2061c0`}]]),il=Xc(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),al=Xc(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),ol=Xc(`lightbulb`,[[`path`,{d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,key:`1gvzjb`}],[`path`,{d:`M9 18h6`,key:`x1upvd`}],[`path`,{d:`M10 22h4`,key:`ceow96`}]]),sl=Xc(`link`,[[`path`,{d:`M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71`,key:`1cjeqo`}],[`path`,{d:`M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71`,key:`19qd67`}]]),cl=Xc(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),ll=Xc(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),ul=Xc(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),dl=Xc(`printer`,[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,key:`143wyd`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,key:`1itne7`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`,key:`1ue0tg`}]]),fl=Xc(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),pl=Xc(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),ml=Xc(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),hl=Xc(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),gl=Xc(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),_l=Xc(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),vl=Xc(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]);function yl(e){if(globalThis.crypto?.getRandomValues){let t=new Uint32Array(1),n=Math.floor(4294967296/e)*e,r;do crypto.getRandomValues(t),r=t[0];while(r>=n);return r%e+1}return Math.floor(Math.random()*e)+1}function bl(e){let t=String(e).toLowerCase().replace(/\s+/g,``).replace(/−/g,`-`);if(!t)return null;let n=t.match(/[+-]?[^+-]+/g);if(!n)return null;let r=[];for(let e of n){let t=e.startsWith(`-`)?-1:1,n=e.replace(/^[+-]/,``),i=n.match(/^(\d*)d(\d+)(?:(kh|kl)(\d+))?$/);if(i){let e=Math.min(Number(i[1]||1),100),n=Number(i[2]);if(!n||n>1e3)return null;r.push({type:`dice`,sign:t,n:e,f:n,keep:i[3]?{mode:i[3],k:Number(i[4])}:null})}else if(/^\d+$/.test(n))r.push({type:`num`,sign:t,v:Number(n)});else return null}return r}function xl(e,{adv:t=0}={}){let n=bl(e);if(!n)return null;let r=0,i=[],a=null;for(let e of n){if(e.type===`num`){r+=e.sign*e.v,i.push({label:String(e.v),sign:e.sign});continue}if(e.f===20&&e.n===1&&t!==0&&!e.keep){let n=Math.abs(t)+1,o=Array.from({length:n},()=>yl(20)),s=t>0?Math.max(...o):Math.min(...o);a=s,r+=e.sign*s,i.push({label:`d20`,sign:e.sign,rolls:o,kept:[o.indexOf(s)],adv:t});continue}let n=Array.from({length:e.n},()=>yl(e.f)),o=n.map((e,t)=>t);e.keep&&(o=n.map((e,t)=>[e,t]).sort((t,n)=>e.keep.mode===`kh`?n[0]-t[0]:t[0]-n[0]).slice(0,e.keep.k).map(e=>e[1]));let s=o.reduce((e,t)=>e+n[t],0);e.f===20&&e.n===1&&(a=n[0]),r+=e.sign*s,i.push({label:`${e.n}d${e.f}`,sign:e.sign,rolls:n,kept:o})}return{expr:String(e),total:r,parts:i,natural:a,adv:t,at:Date.now()}}var Sl=e=>(e>=0?`+`:`−`)+Math.abs(e),Cl=e=>Math.floor((e-10)/2),wl=e=>2+Math.floor((Math.max(1,e)-1)/4);function Tl(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function El(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Z=Lt({dice:{open:!1,history:[],adv:0,last:null},search:{open:!1},nav:{open:!1},power:null,activeSection:null,tip:null,favorites:Tl(`vg.favoritos`,[]),theme:Tl(`vg.tema`,`escuro`),cart:Tl(`vg.carrinho`,[]),heroLevel:Tl(`vg.nivel`,{}),lastRead:Tl(`vg.ultimo`,null)});R(()=>Z.favorites,e=>El(`vg.favoritos`,e),{deep:!0}),R(()=>Z.theme,e=>{El(`vg.tema`,e),document.documentElement.dataset.theme=e===`claro`?`light`:`dark`},{immediate:!0}),R(()=>Z.cart,e=>El(`vg.carrinho`,e),{deep:!0}),R(()=>Z.heroLevel,e=>El(`vg.nivel`,e),{deep:!0}),R(()=>Z.lastRead,e=>El(`vg.ultimo`,e));function Dl(e,t={}){let n=xl(e,{adv:t.adv??Z.dice.adv});return n?(n.label=t.label||null,Z.dice.last=n,Z.dice.history.unshift(n),Z.dice.history.length>30&&(Z.dice.history.length=30),Z.dice.open=!0,n):null}function Ol(e){let t=Z.favorites.indexOf(e);t>=0?Z.favorites.splice(t,1):Z.favorites.push(e)}var kl={class:`topbar`},Al={key:0},jl=[`title`],Ml={__name:`TopBar`,setup(e){return(e,t)=>{let n=_r(`RouterLink`);return V(),H(`header`,kl,[W(`button`,{class:`tb-btn tb-menu`,"aria-label":`Abrir navegação`,onClick:t[0]||=e=>F(Z).nav.open=!F(Z).nav.open},[G(F(cl),{size:20})]),G(n,{to:`/`,class:`logo`},{default:I(()=>[...t[4]||=[W(`img`,{class:`logo-mark`,src:`./img/logo-emblema.png`,alt:``,width:`40`,height:`40`},null,-1),W(`span`,{class:`logo-text`},[K(`PROJETO: VANGUARDA`),W(`small`,null,`Livro Básico · Playtest`)],-1)]]),_:1}),t[7]||=W(`div`,{class:`spacer`},null,-1),W(`button`,{class:`tb-btn tb-search`,onClick:t[1]||=e=>F(Z).search.open=!0,"aria-label":`Buscar no livro`},[G(F(fl),{size:18}),t[5]||=W(`span`,null,`Buscar regras, poderes…`,-1),t[6]||=W(`kbd`,null,`Ctrl K`,-1)]),G(n,{class:`tb-btn tb-fav`,to:`/poderes/lista?fav=1`,title:`Meus poderes favoritos`,"aria-label":`Favoritos`},{default:I(()=>[G(F(pl),{size:18}),F(Z).favorites.length?(V(),H(`span`,Al,j(F(Z).favorites.length),1)):q(``,!0)]),_:1}),W(`button`,{class:`tb-btn tb-dice`,onClick:t[2]||=e=>F(Z).dice.open=!F(Z).dice.open,title:`Bandeja de dados (D)`,"aria-label":`Bandeja de dados`},[G(F(rl),{size:18})]),W(`button`,{class:`tb-btn`,onClick:t[3]||=e=>F(Z).theme=F(Z).theme===`claro`?`escuro`:`claro`,title:F(Z).theme===`claro`?`Tema escuro`:`Tema claro`,"aria-label":`Alternar tema`},[F(Z).theme===`claro`?(V(),U(F(ll),{key:0,size:18})):(V(),U(F(ml),{key:1,size:18}))],8,jl)])}}},Nl={id:`regras`,num:1,title:`Regras`,subtitle:`Testes, Parâmetros, perícias, Pausa e Recuperação, Exaustão, combate e condições.`,md:String.raw`
## Como o jogo funciona

Projeto: Vanguarda é um jogo de interpretação de super-heróis. Cada jogador cria e controla um herói; um participante, o **Mestre**, descreve o mundo, interpreta os vilões e todos os outros personagens e decide as consequências do que os heróis fazem. Juntos, vocês contam histórias de equipes que enfrentam ameaças grandes demais para pessoas comuns.

O jogo segue um ciclo simples:

1. **O Mestre descreve a situação.** Onde os heróis estão, o que veem e ouvem, o que está acontecendo.
2. **Os jogadores dizem o que os heróis fazem.** Um interroga o informante, outro sobe no telhado, outro ativa um poder.
3. **O Mestre narra o resultado.** Às vezes o resultado é óbvio. Quando há risco e o desfecho é incerto, o Mestre pede uma rolagem de dados.

### Dados

O jogo usa dados de 4, 6, 8, 10, 12 e 20 faces, escritos como d4, d6, d8, d10, d12 e d20. "3d6" significa rolar três dados de seis faces e somar. "1d8 + 3" significa rolar um d8 e somar 3. Um d100 (ou porcentagem) é rolado com dois d10: um para as dezenas e outro para as unidades, sendo 00 e 0 igual a 100.

:::dica Experimente
Clique em qualquer expressão de dados do livro, como 3d6 ou 1d8 + 3, para rolá-la na bandeja de dados.
:::

### O teste de d20

Quase toda decisão incerta do jogo usa a mesma mecânica:

1. **Role um d20.**
2. **Some os modificadores:** o modificador do Parâmetro envolvido, o Bônus de Proficiência se o herói for proficiente, e qualquer outro bônus ou penalidade.
3. **Compare com o alvo.** Se o total for igual ou maior que o número-alvo, o teste é um sucesso. Num Teste de Parâmetro ou de Integridade, o alvo é a Classe de Dificuldade (CD), definida pelo Mestre ou pelo efeito. Numa Jogada de Ataque, é a Classe de Armadura (CA) do alvo, que mede o quanto ele é difícil de acertar.

Existem três tipos de teste de d20: **Testes de Parâmetro**, **Jogadas de Ataque** e **Testes de Integridade**.

### Vantagem e desvantagem

Quando uma regra concede **Vantagem**, role dois d20 e use o maior. Com **Desvantagem**, role dois e use o menor.

Vantagens e Desvantagens se acumulam: cada Vantagem acrescenta 1d20 à rolagem, e usa-se o maior; cada Desvantagem acrescenta 1d20, e usa-se o menor. Com 2 Vantagens, por exemplo, o herói rola 3d20 e usa o maior.

Antes de rolar, Vantagens e Desvantagens se anulam uma a uma. Um herói com 2 Vantagens e 1 Desvantagem fica com 1 Vantagem: rola 2d20 e usa o maior. Se o número de Vantagens e Desvantagens for igual, ele rola um único d20.

:::widget vantagem
:::

### Cargas Heroicas

As Cargas Heroicas {ch} representam o esforço extra que separa um herói de uma pessoa comum. Cada herói tem uma reserva de **5 + metade do nível** Cargas Heroicas (arredondado para baixo). Um herói de nível 1 tem 5; um de nível 10, 10. A reserva volta toda ao fim de uma Recuperação.

**Concessão do Mestre.** O Mestre pode conceder {ch 1} extra quando o herói faz algo heroico ou age de acordo com sua identidade heroica ou seu código pessoal.

**Características de Carga Heroica.** As características mais poderosas mostram um custo, como "{ch 2}". Para usar uma delas, o herói gasta esse número de Cargas Heroicas da reserva. Essas características não pedem Teste de Sobrecarga, e o custo não aumenta com o uso repetido. Sem Cargas Heroicas suficientes, o herói não pode usá-las.

**Outros usos.** O herói também pode gastar Cargas Heroicas destas formas:

- **Esforço extra.** Logo depois de rolar um d20, antes de saber o resultado, gaste {ch 1} para somar 1d6 à rolagem.
- **Agarrar-se à vida.** Ao falhar num Teste de Estabilização, gaste {ch 1} para transformar a falha em sucesso.

:::widget cargas
:::

### Regras gerais

- **O específico vence o geral.** Quando um poder, característica ou item contradiz uma regra geral, ele vence.
- **Arredonde para baixo.** Sempre que uma divisão gerar fração, arredonde para baixo, a menos que a regra diga o contrário.
- **A última palavra é do Mestre.** O Mestre interpreta as regras para que a mesa se divirta e a história faça sentido.

## Parâmetros

Seis Parâmetros descrevem o herói. Cada um tem um valor, normalmente entre 3 e 20, e um modificador, usado em quase todas as rolagens.

| Parâmetro | Mede | Exemplos de uso |
|---|---|---|
| **Potência** | Força física | Erguer, empurrar, saltar, golpear com armas pesadas |
| **Reflexos** | Agilidade, reflexos e mira | Esquivar, mirar, equilibrar-se, mover-se em silêncio |
| **Resistência** | Resistência e vigor | Aguentar dor, veneno, fadiga e Sobrecarga |
| **Lógica** | Raciocínio e memória | Investigar, deduzir, lembrar, operar tecnologia |
| **Espírito** | Percepção e intuição | Notar detalhes, ler pessoas, sobreviver |
| **Magnetismo** | Presença e força de personalidade | Convencer, enganar, intimidar, liderar |

| Valor | Modificador |
|---|---|
| 1 | −5 |
| 2–3 | −4 |
| 4–5 | −3 |
| 6–7 | −2 |
| 8–9 | −1 |
| 10–11 | +0 |
| 12–13 | +1 |
| 14–15 | +2 |
| 16–17 | +3 |
| 18–19 | +4 |
| 20–21 | +5 |
| 22–23 | +6 |
| 24–25 | +7 |
| 26–27 | +8 |
| 28–29 | +9 |
| 30 | +10 |

O modificador também pode ser calculado: subtraia 10 do valor e divida por 2, arredondando para baixo. Um herói não passa de 20 num Parâmetro, a menos que uma característica diga o contrário.

:::widget modificador
:::

### Bônus de Proficiência

Ter Proficiência em algo (uma perícia, uma ferramenta, um Treinamento de armas, os poderes ou um Teste de Integridade) significa ter treino nisso: o herói é **proficiente**. Quanto mais experiente o herói, melhor ele faz aquilo em que é proficiente, e isso é medido pelo Bônus de Proficiência, que depende do nível. Ele é somado a:

- ataques com armas e poderes em que o herói é proficiente;
- testes de perícias e ferramentas em que é proficiente;
- Testes de Integridade dos Parâmetros em que o Arquétipo dá proficiência;
- CD de Poder.

| Nível | Bônus de Proficiência |
|---|---|
| 1–4 | +2 |
| 5–8 | +3 |
| 9–12 | +4 |
| 13–16 | +5 |
| 17–20 | +6 |

O Bônus de Proficiência nunca é somado mais de uma vez à mesma rolagem. Uma característica pode dobrá-lo (como Especialista) ou reduzi-lo à metade; isso acontece uma vez só, por mais fontes que existam.

## Testes de Parâmetro

Um Teste de Parâmetro mede talento e treino diante de um desafio. O Mestre escolhe o Parâmetro e a CD; o jogador rola d20 + modificador do Parâmetro (+ Bônus de Proficiência, se a perícia ou ferramenta se aplicar).

| Tarefa | CD |
|---|---|
| Muito fácil | 5 |
| Fácil | 10 |
| Média | 15 |
| Difícil | 20 |
| Muito difícil | 25 |
| Quase impossível | 30 |

### Perícias

Cada perícia é uma área de treino ligada a um Parâmetro. Um herói proficiente numa perícia soma o Bônus de Proficiência aos testes dela. O Mestre pode pedir uma perícia com outro Parâmetro quando fizer sentido (Potência com Intimidação para erguer alguém pelo colarinho, por exemplo).

| Parâmetro | Perícias |
|---|---|
| **Potência** | Atletismo |
| **Reflexos** | Acrobacia, Furtividade, Prestidigitação |
| **Lógica** | Ocultismo, Ciências, História, Investigação, Natureza, Religião, Tecnologia |
| **Espírito** | Adestrar Animais, Intuição, Medicina, Percepção, Sobrevivência |
| **Magnetismo** | Atuação, Enganação, Intimidação, Persuasão |

:::grid
- **Acrobacia:** equilibrar-se, fazer manobras acrobáticas, escapar de quedas.
- **Adestrar Animais:** acalmar, controlar ou entender a intenção de um animal.
- **Atletismo:** escalar, saltar, nadar, agarrar e empurrar.
- **Atuação:** entreter, discursar, encenar, tocar um instrumento.
- **Ciências:** física, química, biologia, genética, medicina experimental, astronomia e matemática; analisar amostras, entender fenômenos e prever reações.
- **Enganação:** mentir, blefar, disfarçar intenções.
- **Furtividade:** esconder-se e mover-se sem ser notado.
- **História:** eventos passados, organizações, figuras públicas, heróis e vilões antigos.
- **Intimidação:** influenciar pelo medo e pela ameaça.
- **Intuição:** perceber mentiras, intenções e o estado emocional de alguém.
- **Investigação:** procurar pistas, deduzir, analisar documentos e cenas de crime.
- **Medicina:** estabilizar feridos, diagnosticar doenças e venenos.
- **Natureza:** animais, plantas, clima e fenômenos naturais.
- **Ocultismo:** conhecimento sobre poderes, entidades, dimensões e fenômenos sobrenaturais.
- **Percepção:** notar algo pelos sentidos: uma emboscada, um ruído, um detalhe.
- **Persuasão:** convencer com argumentos, charme ou diplomacia.
- **Prestidigitação:** truques manuais, punga, desarmar mecanismos pequenos.
- **Religião:** crenças, cultos, entidades veneradas e seus símbolos.
- **Sobrevivência:** rastrear, orientar-se, caçar, prever o tempo.
- **Tecnologia:** operar, consertar e invadir computadores, redes, robôs, armaduras, veículos avançados e dispositivos alienígenas.
:::

### Ferramentas

Ferramentas (kits de invasão, de eletrônica, de disfarce, de laboratório, veículos e outras) permitem tarefas que seriam impossíveis sem elas. Um herói proficiente numa ferramenta soma o Bônus de Proficiência aos testes feitos com ela. A lista de ferramentas está no [Capítulo 6](#/equipamento/ferramentas).

### Variações do teste

- **Testes resistidos.** Quando dois personagens disputam algo (cabo de guerra, esconder-se de um guarda), cada um faz o teste adequado; o maior vence. Empate mantém a situação como estava.
- **Testes passivos.** Para tarefas repetidas ou quando o Mestre quer resolver algo em segredo, use 10 + todos os modificadores do teste (+5 com Vantagem, −5 com Desvantagem). A Percepção passiva é usada para notar ameaças escondidas.
- **Trabalho em grupo.** Quando várias pessoas tentam a mesma coisa juntas, cada uma faz o teste; se pelo menos metade passar, o grupo passa.
- **Ajuda.** Um personagem que ajuda outro dá Vantagem no teste dele, desde que possa realmente contribuir.
- **Tentar de novo.** Sem pressa e sem consequência pela falha, o herói pode simplesmente gastar dez vezes o tempo normal e ter sucesso. O Mestre decide quando isso faz sentido.

## Testes de Integridade

Um Teste de Integridade representa a tentativa de resistir a um poder, armadilha, veneno ou perigo. O herói rola d20 + modificador do Parâmetro indicado e soma o Bônus de Proficiência se o Arquétipo der proficiência em Integridade daquele Parâmetro. A CD é dada pelo efeito; para poderes, é a CD de Poder de quem o ativou.

## Movimento e ambiente

### Deslocamento

Todo herói tem **Deslocamento de 9 m** por turno. Algumas Linhagens, poderes e itens dão Deslocamentos especiais:

- **Escalada e natação.** Sem Deslocamento específico, cada metro escalando ou nadando custa 1 m extra (2 m extras em terreno difícil). Superfícies lisas ou água agitada exigem Teste de Potência (Atletismo).
- **Voo.** Uma criatura voadora que fica caída, tem Deslocamento 0 ou é incapacitada cai, a menos que possa pairar.
- **Escavação.** Move-se através de terra e areia, não de rocha sólida, a menos que a característica diga.

**Terreno difícil.** Escombros, mata densa, neve funda, escadas íngremes ou multidões: cada metro custa 1 m extra.

**Saltos.** Salto em distância: com 3 m de corrida, alcança metros iguais a 0,3 × valor de Potência (sem corrida, metade). Salto em altura: com 3 m de corrida, alcança 0,3 × (3 + modificador de Potência) metros (sem corrida, metade).

:::widget salto
:::

**Viagem.** Num ritmo normal, um grupo a pé cobre cerca de 5 km por hora e 40 km num dia de 8 horas. Ritmo rápido: 6,5 km por hora, com −5 na Percepção passiva. Ritmo lento: 3 km por hora, permitindo usar Furtividade. Marchar mais de 8 horas exige um Teste de Integridade (Resistência) (CD 10 + 1 por hora extra) por hora; falha dá 1 nível de Exaustão.

### Quedas

Quem cai sofre 1d6 de Dano de Concussão a cada 3 m de queda, até o máximo de 20d6, e fica caído, a menos que evite todo o dano.

### Sufocamento

Um herói prende a respiração por 1 + modificador de Resistência minutos (mínimo 30 segundos). Depois disso, sobrevive mais rodadas iguais ao modificador de Resistência (mínimo 1); no início do turno seguinte, cai a 0 PV e fica morrendo.

### Visão e luz

- **Luz plena:** vê normalmente.
- **Penumbra** (área levemente obscurecida): Desvantagem em Testes de Espírito (Percepção) pela visão.
- **Escuridão** (área totalmente obscurecida): a criatura fica efetivamente cega ao tentar ver algo ali.

**Visão Noturna** trata penumbra como luz plena e escuridão como penumbra, até a distância indicada. **Percepção às cegas** percebe o que está ao redor sem usar a visão. **Visão verdadeira** vê no escuro comum e de poder, percebe criaturas invisíveis, ilusões e a forma original de metamorfos.

### Carga

Um herói carrega até **valor de Potência × 7,5 kg** sem penalidade, e pode empurrar, arrastar ou erguer o dobro disso. Acima da capacidade de carga, o Deslocamento cai para 1,5 m. Criaturas Grandes dobram esses valores; Miúdas os reduzem à metade.

### Comida e água

Um herói precisa de cerca de 1 kg de comida e 4 litros de água por dia (o dobro em calor intenso). Cada dia inteiro sem comer, após 3 + modificador de Resistência dias, dá 1 nível de Exaustão. Cada dia sem água dá 1 nível de Exaustão (ou exige Teste de Integridade (Resistência) com CD 15 para quem bebeu só metade).

## Pausa e Recuperação

**Pausa.** Pelo menos 1 hora de atividade leve. Ao fim, o herói pode gastar Matrizes de Vitalidade: para cada uma, rola o dado e soma o modificador de Resistência, recuperando esse total em PV.

**Recuperação.** Pelo menos 8 horas, das quais no máximo 2 de atividade leve (vigiar, ler, conversar). Ao fim, o herói recupera todos os PV, recupera Matrizes de Vitalidade gastas até metade do total (mínimo 1) e reduz a Exaustão em 1 nível. Só é possível uma Recuperação a cada 24 horas, e o herói precisa ter pelo menos 1 PV no início. Uma hora de combate ou esforço interrompe a Recuperação.

**Matrizes de Vitalidade.** O herói tem uma Matriz de Vitalidade por nível, do tipo do seu Arquétipo. Elas não são roladas para definir os PV máximos ([Capítulo 3](#/arquetipos)); servem apenas para recuperar PV em Pausas.

:::nota Nada "volta" com o tempo
Poderes e características não têm usos que se gastam e se recuperam numa Pausa ou Recuperação. As características mais poderosas são **Características de Carga Heroica**, marcadas com o seu custo (por exemplo, "{ch 1}"): para usá-las, o herói gasta Cargas Heroicas da sua reserva, sem Teste de Sobrecarga. A reserva de Cargas Heroicas volta toda ao fim de uma Recuperação. Os poderes, por sua vez, podem ser ativados sempre, mas usam a Sobrecarga (Η): cobram testes e podem causar Exaustão Η ([Capítulo 3](#/arquetipos)).
:::

## Exaustão

Esforço extremo, fome, frio e, principalmente, a Sobrecarga ([Capítulo 3](#/arquetipos)) deixam marcas no corpo. A Exaustão causada por forçar poderes é chamada **Eta (Η)**; ela segue as mesmas regras da Exaustão comum e se soma a ela. A Exaustão se acumula em níveis, de 1 a 6.

{tabela acumulativa}
| Nível | Efeito |
|---|---|
| 1 | Desvantagem em Testes de Parâmetro |
| 2 | Deslocamento reduzido à metade |
| 3 | Desvantagem em Jogadas de Ataque e Testes de Integridade |
| 4 | Pontos de Vida máximos reduzidos à metade |
| 5 | Deslocamento reduzido a 0 |
| 6 | O herói morre |

Os efeitos são cumulativos: um herói com Exaustão 3 sofre os efeitos dos níveis 1, 2 e 3. Um efeito que causa Exaustão soma níveis ao que o herói já tem; um que remove Exaustão reduz o nível atual.

Cada Recuperação reduz a Exaustão em 1 nível. Alguns poderes (como Restauração Total) também removem níveis.

## Combate

### A ordem do combate

1. **Surpresa.** O Mestre decide quem foi pego desprevenido. Uma criatura surpresa tem Desvantagem na iniciativa.
2. **Iniciativa.** Todos rolam um Teste de Parâmetro (Reflexos). O Mestre rola pelos adversários (um teste por grupo de criaturas iguais). A ordem vai do maior para o menor resultado; empates são decididos pelo Mestre entre adversários e pelos jogadores entre heróis.
3. **Turnos.** Na sua vez, cada participante se move e age.
4. **Próxima rodada.** Quando todos agiram, começa uma nova rodada. Uma rodada representa cerca de 6 segundos.

:::widget iniciativa
:::

### O seu turno

Em cada turno, o herói pode se mover até o seu Deslocamento e realizar uma **Ação**. Ele também pode ter uma **Ação Rápida**, se uma característica ou poder a conceder, e uma interação livre com um objeto (sacar uma arma, abrir uma porta, pegar algo no chão). Pode falar frases curtas a qualquer momento.

O movimento pode ser dividido antes e depois da Ação. Quem tem mais de um ataque pode se mover entre eles.

**Reação.** Uma resposta instantânea a um gatilho, como um Contra-ataque. Cada criatura tem uma Reação por rodada, recuperada no início do seu turno.

### Ações em combate

:::grid
- **Atacar.** Faz uma Jogada de Ataque Corpo a Corpo ou à distância. Algumas características permitem mais de um ataque com esta Ação.
- **Ativar um Poder.** Ativa um poder com tempo de 1 Ação.
- **Disparar.** Ganha movimento extra igual ao seu Deslocamento neste turno.
- **Recuar.** O movimento deste turno não provoca Contra-ataques.
- **Esquivar.** Até o início do próximo turno, ataques contra o herói têm Desvantagem (se ele vir o atacante) e ele tem Vantagem em Testes de Integridade (Reflexos). Perde o efeito se ficar incapacitado ou com Deslocamento 0.
- **Ajudar.** Dá Vantagem no próximo Teste de Parâmetro de um aliado, ou no próximo ataque de um aliado contra uma criatura a até 1,5 m do herói, até o início do próximo turno do herói.
- **Esconder.** Faz um Teste de Reflexos (Furtividade) para ficar escondido, se não estiver sendo visto claramente.
- **Preparar.** Define um gatilho e uma Ação (ou movimento); quando o gatilho acontecer antes do próximo turno, usa a Reação para executá-la. Um poder preparado exige Concentração até ser disparado.
- **Procurar.** Faz um Teste de Espírito (Percepção) ou Lógica (Investigação) para encontrar algo.
- **Usar um Objeto.** Interage com um segundo objeto ou com um objeto que exija uma Ação (ativar um dispositivo, aplicar um kit).
- **Improvisar.** Qualquer outra coisa que o herói imagine; o Mestre decide se exige teste e qual.
:::

### Fazendo um ataque

1. **Escolha o alvo** dentro do alcance da arma ou poder.
2. **Determine modificadores:** cobertura, Vantagem, Desvantagem.
3. **Role o ataque:** d20 + modificador de Parâmetro + Bônus de Proficiência (se proficiente). Armas corpo a corpo usam Potência; armas à distância usam Reflexos; armas de acuidade usam o melhor dos dois; Jogadas de Ataque de Poder usam o Parâmetro de poder.
4. **Compare com a Classe de Armadura (CA)** do alvo. Se o total for igual ou maior, o ataque acerta; então role o dano.

**20 natural** sempre acerta e é um **acerto crítico**: role duas vezes todos os dados de dano do ataque e some os modificadores uma vez. **1 natural** sempre erra.

:::widget ataque
:::

- **Alvos que não se vê.** Atacar algo que o herói não vê dá Desvantagem. Ser atacado por algo que não se vê dá Vantagem ao atacante. Se o herói erra o espaço do alvo escondido, erra automaticamente.
- **Ataques à distância.** Atacar além do alcance normal da arma (até o alcance longo) tem Desvantagem. Atacar à distância com um inimigo a até 1,5 m que veja o herói e não esteja incapacitado também tem Desvantagem.
- **Ataques corpo a corpo.** O alcance normal é 1,5 m. Golpes desarmados causam 1 + modificador de Potência de Dano de Concussão e contam como armas em que todos são proficientes.
- **Contra-ataque.** Quando uma criatura hostil que o herói vê sai do seu alcance, ele pode usar a Reação para fazer uma Jogada de Ataque Corpo a Corpo contra ela. Teleporte e movimento forçado não provocam.
- **Combate com duas armas.** Ao atacar com uma arma leve numa mão, o herói pode usar a Ação Rápida para atacar com outra arma leve na outra mão, sem somar o modificador de Parâmetro ao dano (a menos que seja negativo).
- **Agarrar.** Usando um ataque, o herói tenta agarrar uma criatura de até um tamanho maior que ele, com uma mão livre: Teste de Potência (Atletismo) contra Potência (Atletismo) ou Reflexos (Acrobacia) do alvo. Se vencer, o alvo fica agarrado. O alvo usa uma Ação para tentar escapar com o mesmo teste resistido.
- **Empurrar.** Usando um ataque, o herói faz o mesmo teste resistido para derrubar o alvo ou empurrá-lo 1,5 m.

### Cobertura

| Cobertura | Efeito |
|---|---|
| **Meia** (mureta, outra criatura, móveis) | +2 na CA e em Testes de Integridade (Reflexos) |
| **Três quartos** (seteira, tronco grosso) | +5 na CA e em Testes de Integridade (Reflexos) |
| **Total** | Não pode ser alvo direto de ataques nem de poderes |

### Dano e cura

Quando um ataque acerta ou um efeito causa dano, role os dados indicados, some os modificadores e subtraia o total dos PV do alvo.

**Somatório (Σ).** O total de todos os dados de dano rolados de uma vez, mais os modificadores, é o Sigma (Σ) do efeito. Um poder de área rola o Σ uma única vez e aplica o mesmo total a todas as criaturas afetadas; cada uma reduz o seu próprio dano conforme a resistência que tiver ou o teste que passar.

**Tipos de dano.** Ácido, concussão, cortante, elétrico, energia, fogo, frio, necrótico, perfurante, psíquico, radiante, trovão e veneno.

- **Resistência:** o dano daquele tipo cai à metade.
- **Vulnerabilidade:** o dano daquele tipo dobra.
- **Imunidade:** nenhum dano daquele tipo.

Resistência e vulnerabilidade são aplicadas depois de todos os outros modificadores, e várias resistências ao mesmo tipo contam como uma.

**Resistência a Poderes (Rô, Ρ).** Algumas criaturas resistem naturalmente a poderes. Quem tem Ρ faz com Vantagem os Testes de Integridade contra poderes e efeitos de poder.

**Cura.** Poderes, kits, Pausas e Recuperações restauram PV, nunca acima do máximo.

**PV temporários.** Um colchão de vida que absorve dano antes dos PV normais. Não se acumulam (fique com o maior), não são curados e somem após uma Recuperação, se nada disser antes.

### Cair a 0 PV

- **Morte instantânea.** Se o dano que levou o herói a 0 PV ainda sobrar num valor igual ou maior que os seus PV máximos, ele morre.
- **Inconsciente.** Do contrário, ele cai inconsciente e começa a morrer.
- **Testes de Estabilização.** No início de cada turno a 0 PV, o herói rola um d20 sem modificadores. 10 ou mais é um sucesso; menos de 10, uma falha. Três sucessos o estabilizam; três falhas o matam. Ao falhar, o herói pode gastar {ch 1} para transformar a falha em sucesso. Um 1 natural conta como duas falhas; um 20 natural devolve 1 PV. Sofrer dano a 0 PV conta como uma falha (duas, se for um crítico); se o dano igualar os PV máximos, ele morre.
- **Estabilizar.** Uma Ação e um Teste de Espírito (Medicina) com CD 10, ou a Técnica Pulso Vital, estabilizam um herói morrendo. Um herói estável recupera 1 PV após 1d4 horas.
- **Nocautear.** Ao reduzir uma criatura a 0 PV com uma Jogada de Ataque Corpo a Corpo, o atacante pode deixá-la inconsciente e estável em vez de matá-la.

:::widget estabilizacao
:::

### Combate montado e em veículos

Uma criatura pelo menos um tamanho maior que o herói, com anatomia adequada, pode servir de montaria. Montar ou desmontar custa metade do Deslocamento. Uma montaria controlada age na iniciativa do herói e só pode Disparar, Recuar ou Esquivar. Veículos seguem as mesmas regras de uma montaria controlada, com os dados do [Capítulo 6](#/equipamento/veiculos).

### Combate subaquático

Sem Deslocamento de natação, Jogadas de Ataque Corpo a Corpo debaixo d'água têm Desvantagem, exceto com adagas, azagaias, espadas curtas, lanças e tridentes. Ataques à distância erram além do alcance normal e têm Desvantagem dentro dele (exceto armas de arremesso de perfuração e arpões). Criaturas submersas têm Resistência a Dano de Fogo.

## Tamanhos

| Tamanho | Espaço | Exemplos |
|---|---|---|
| Miúdo | 0,75 m | Drone de bolso, gato, objeto minúsculo |
| Pequeno | 1,5 m | Criança, cachorro |
| Médio | 1,5 m | Todos os heróis, adultos humanos |
| Grande | 3 m | Cavalo, carro, armadura gigante |
| Enorme | 4,5 m | Elefante, caminhão |
| Imenso | 6 m ou mais | Robô colossal, monstro kaiju |

Uma criatura pode atravessar o espaço de um aliado, ou de um inimigo pelo menos dois tamanhos maior ou menor que ela. Espaço de outra criatura conta como terreno difícil.

## Condições

As condições mudam o que uma criatura pode fazer. Duram até o efeito que as causou terminar ou até a criatura se livrar delas, como o efeito indica.

:::condicoes
- **Agarrado.** Deslocamento 0. Termina se quem agarra ficar incapacitado ou se um efeito afastar os dois.
- **Amedrontado.** Desvantagem em Testes de Parâmetro e ataques enquanto a fonte do medo estiver à vista. Não pode se aproximar voluntariamente dela.
- **Atordoado.** Incapacitado, não se move e só fala com dificuldade. Falha automaticamente em Testes de Integridade (Potência e Reflexos). Ataques contra ele têm Vantagem.
- **Caído.** Só pode rastejar (cada metro custa 1 m extra) ou se levantar, gastando metade do Deslocamento. Desvantagem em ataques. Ataques corpo a corpo a até 1,5 m dele têm Vantagem; Jogadas de Ataque à Distância, Desvantagem.
- **Cego.** Não vê e falha em testes que dependem da visão. Ataques contra ele têm Vantagem; os ataques dele têm Desvantagem.
- **Cristalizado.** Transformado em matéria inerte (pedra, metal, cristal). Incapacitado, não se move nem fala, não percebe o ambiente e não envelhece. Ataques contra ele têm Vantagem. Falha em Testes de Integridade (Potência e Reflexos). Resistência a todo dano e Imune a Dano de Veneno e doença.
- **Dominado.** Não ataca quem o dominou nem o mira com efeitos nocivos. Quem o dominou tem Vantagem em testes sociais contra ele.
- **Envenenado.** Desvantagem em ataques e Testes de Parâmetro.
- **Exausto.** Veja [Exaustão](#/regras/exaustao).
- **Impedido.** Deslocamento 0. Ataques contra ele têm Vantagem; os ataques dele têm Desvantagem. Desvantagem em Testes de Integridade (Reflexos).
- **Incapacitado.** Não pode fazer Ações, Ações Rápidas nem Reações, e perde a Concentração.
- **Inconsciente.** Incapacitado, não se move nem fala, não percebe o ambiente. Larga o que segura e fica caído. Falha automaticamente em Testes de Integridade (Potência e Reflexos). Ataques contra ele têm Vantagem, e qualquer acerto de até 1,5 m é crítico.
- **Invisível.** Não pode ser visto sem meios especiais; para efeito de esconder-se, está sempre encoberto. Ataques contra ele têm Desvantagem; os ataques dele têm Vantagem.
- **Paralisado.** Incapacitado, não se move nem fala. Falha automaticamente em Testes de Integridade (Potência e Reflexos). Ataques contra ele têm Vantagem, e qualquer acerto de até 1,5 m é crítico.
- **Surdo.** Não ouve e falha em testes que dependem da audição.
:::

## Concentração

Alguns poderes exigem Concentração, representada pela letra **Capa (Κ)**, para continuar ativos (marcados com Κ no [Capítulo 4](#/poderes)). O herói mantém um só poder de Concentração por vez e pode encerrá-lo a qualquer momento. A Concentração termina se ele ativar outro poder de Concentração, ficar incapacitado ou morrer. Ao sofrer dano, ele faz um Teste de Integridade (Resistência) com CD 10 ou metade do dano sofrido (o que for maior); se falhar, o poder termina.

:::widget concentracao
:::

## Assinatura de poder

Toda vez que um herói ativa um poder de NP 1 ou maior, há uma explosão de energia. Essa assinatura se espalha pelo ambiente e pode ser rastreada, por exemplo com Detectar Poderes. O poder Assinatura Falsa esconde ou falsifica uma assinatura. Técnicas (Ο) não deixam assinatura perceptível.

**Cor-base.** A natureza do poder define a cor da assinatura:

{tabela assinatura}
| Natureza | Cor-base | Exemplos |
|---|---|---|
| Tecnológica | Amarela | Armaduras, implantes, soros de laboratório |
| Parahumana | Azul | Dons de nascença ou despertados |
| Mutante | Vermelha | DNA alterado |
| Visitante | Verde | Deuses, alienígenas, entidades |

**A cor muda.** A cor-base não é fixa. A cada novo Nível de Poder que o herói desbloqueia, o jogador pode girar a matiz da assinatura no círculo de cores: um azul pode caminhar para o roxo e chegar ao vermelho, e vice-versa. É uma escolha visual do jogador e descreve como o poder se manifesta.

:::widget assinatura
:::

*Exemplo: o Atormentador é um Parahumano, de cor-base azul, mas sua assinatura é púrpura.*

## Dimensões

Alguns poderes falam de outros planos de existência. O **Plano Material** é o mundo dos heróis. O **Plano Etéreo** é uma dimensão enevoada que se sobrepõe a ele, de onde se vê o mundo material como uma névoa cinzenta. O **Plano Astral** é o espaço entre as dimensões, por onde viajam mentes e projeções. Outras dimensões (reinos feéricos, infernos, mundos alienígenas) existem conforme o cenário; o Mestre define como elas se ligam ao mundo da campanha.
`},Pl={id:`origens`,num:2,title:`Origens`,subtitle:`De onde vêm os seus poderes: Humanos, Parahumanos, Mutantes e Visitantes.`,md:String.raw`
# Visão geral {#visao-geral}

## O que é uma Origem

A Origem responde à pergunta **"de onde vêm os seus poderes?"**. Todo herói pertence a uma de quatro Origens: Humanos, Parahumanos, Mutantes ou Visitantes. Dentro dela, o jogador escolhe uma **Linhagem**, que define os traços de jogo do herói: sentidos, Deslocamentos especiais, resistências, proficiências e habilidades especiais.

:::origens
:::

## Como criar a Origem

1. **Escolha a Origem.** Ela define o lugar do herói no mundo: como a sociedade o vê, que perguntas os vilões fazem e que tipo de história de origem ele tem.
2. **Escolha a Linhagem.** Anote todos os traços dela. Se a Linhagem tiver variantes, escolha uma.
3. **Aplique as regras comuns abaixo** (Parâmetros, idiomas e tipo de criatura).
4. **Descreva os traços com suas palavras.** Cada traço pode ser poder, treino, equipamento ou biologia, desde que o efeito de jogo continue o mesmo.

:::nota Regra de ouro
O efeito é fixo; a explicação é livre. A Visão Noturna de um Parahumano pode ser um implante ocular. O Sopro de um Conduíte pode sair das mãos, dos olhos ou do peito.
:::

## Regras comuns a todas as Linhagens

- **Aumento de Parâmetro.** Aumente um Parâmetro em 2 e outro em 1, ou três Parâmetros diferentes em 1. Nenhum valor pode passar de 20 por esse aumento.
- **Idiomas.** O herói fala, lê e escreve o Comum e mais um idioma à escolha (de outro país, de uma comunidade mutante, de um mundo alienígena, um código ou uma língua mística).
- **Tipo de criatura.** O herói é Humanoide, a não ser que a Linhagem diga outro tipo.
- **Tamanho e Deslocamento.** Todo herói é Médio e tem Deslocamento de 9 m. Algumas Linhagens somam Deslocamentos de escalada, voo ou natação.
- **Visão Noturna.** Enxerga na penumbra a até a distância indicada como se fosse luz plena, e no escuro como se fosse penumbra. No escuro só distingue tons de cinza.
- **Poderes de Linhagem.** Alguns traços concedem poderes. O herói pode ativá-los à vontade, sem limite de usos. Uma Técnica (Ômicron, Ο) não pede teste; um poder de Nível de Poder 1 ou maior segue a Sobrecarga normal daquele NP. O Parâmetro de poder é Lógica, Espírito ou Magnetismo, escolhido ao pegar a Linhagem, salvo indicação.
- **Traços de Carga.** Traços marcados com um custo (por exemplo, {ch 1}) são Características de Carga Heroica ([Capítulo 1](#/regras/cargas-heroicas)): para usá-los, o herói gasta esse número de Cargas Heroicas da sua reserva, sem Teste de Sobrecarga. Sem Cargas Heroicas suficientes, não pode usá-los.
- **CD de Linhagem.** Quando um traço pede um Teste de Integridade, a CD é **8 + Bônus de Proficiência + o modificador indicado** (ou Resistência, se nada for indicado).
- **Ataques naturais.** Garras, chifres, mordidas e cascos podem ser usados em ataques desarmados, com o dano indicado + modificador de Potência.
- **Compleição Poderosa.** Conta como um tamanho maior para carga e para empurrar, arrastar ou erguer peso.
- **Vida Anterior.** Linhagens marcadas com este traço surgem de uma transformação. Se o herói tinha outra Linhagem antes, pode manter as proficiências em perícias dela e qualquer Deslocamento de escalada, voo ou natação que ela concedia.

# Humanos {#humanos img=origens/humano.jpg cor=tecnologica}

Humanos são pessoas comuns que escolheram ser heróis. Não têm poderes sobrenaturais: o que os separa da multidão é treino intensivo, força de vontade, inteligência estratégica e uma devoção à justiça que não se dobra. Em um mundo de deuses e mutantes, provam a cada missão que coragem também é um superpoder.

Os traços das Linhagens Humanas devem ser descritos como talento, treino ou equipamento. Nenhuma Linhagem Humana tem Visão Noturna: o que parece extraordinário nelas vem de treino, sorte, intelecto ou pura teimosia.

## Linhagens Humanas

{tabela linhagens}
| Linhagem | Conceito | Movimento extra |
|---|---|---|
| Prodígio | Um talento único, lapidado desde a infância. | — |
| Sortudo | A sorte improvável de quem sempre escapa por um fio. | — |
| Carismático | O negociador nato e rosto público do grupo. | — |
| Implacável | O lutador que se recusa a cair. | — |
| Robusto | O operário ou soldado de resistência lendária. | — |
| Gênio | A mente brilhante que resiste a qualquer manipulação. | — |
| Estrategista | O tático que transforma a equipe em unidade de elite. | — |
| Destemido | O curioso que provoca o vilão e não conhece o medo. | — |

:::cards
### Prodígio
*Um talento único, lapidado desde a infância.*

**Talento Singular.** Em vez da regra comum de Parâmetros, aumenta um Parâmetro em 2. Ganha um talento à escolha.

**Dom Pessoal.** Proficiência em uma perícia e em uma ferramenta à escolha.

### Sortudo
*A sorte improvável de quem sempre escapa por um fio.*

**Sorte.** Quando tira 1 no d20 de um ataque, Teste de Parâmetro ou Teste de Integridade, pode rolar de novo e deve usar o novo resultado.

**Coragem.** Vantagem em Testes de Integridade contra ficar amedrontado.

**Agilidade.** Pode atravessar o espaço de qualquer criatura de tamanho maior que o seu.

**Variante Discreto.** Pode tentar se esconder mesmo quando está encoberto apenas por uma criatura pelo menos um tamanho maior.

**Variante Resiliente.** Vantagem em Testes de Integridade contra veneno e Resistência a Dano de Veneno.

### Carismático
*O negociador nato e rosto público do grupo.*

**Mente Firme.** Vantagem em Testes de Integridade contra ficar dominado, e poderes não podem fazê-lo dormir.

**Versatilidade.** Proficiência em duas perícias à escolha.

### Implacável
*O lutador que se recusa a cair.*

**Ameaçador.** Proficiência em Intimidação.

**Resistência Implacável ({ch 1}).** Quando cai a 0 PV sem morrer na hora, fica com 1 PV.

**Golpes Selvagens.** Ao obter um crítico com uma Jogada de Ataque Corpo a Corpo com arma, rola mais um dado de dano da arma e soma ao dano extra do crítico.

### Robusto
*O operário ou soldado de resistência lendária.*

**Resiliência.** Vantagem em Testes de Integridade contra veneno e Resistência a Dano de Veneno.

**Treino de Combate.** Treinamento em Combate Corpo a Corpo.

**Ofício.** Proficiência com um kit de ofício à escolha (ferreiro, mecânico, pedreiro ou similar).

**Olho para Estruturas.** Ao fazer um Teste de Lógica (História) sobre a origem de uma construção ou estrutura de pedra, metal ou concreto, é considerado proficiente e soma o dobro do Bônus de Proficiência.

**Variante Resistente.** O máximo de PV aumenta em 1, e mais 1 a cada nível.

**Variante Blindado.** Treinamento em Blindagem Leve.

### Gênio
*A mente brilhante que resiste a qualquer manipulação.*

**Astúcia.** Vantagem em Testes de Integridade (Lógica, Espírito e Magnetismo) contra poderes.

**Variante Inventor.** Ao fazer um Teste de Lógica (História) sobre itens especiais, tecnologia ou dispositivos, soma o dobro do Bônus de Proficiência. Com 1 hora e peças no valor de 10 créditos, monta um pequeno aparelho (CA 5, 1 PV): um brinquedo que anda, um isqueiro ou uma caixinha de música. Mantém até três ativos; cada um para de funcionar após 24 horas.

**Variante Ilusionista.** Conhece a Técnica Holograma Menor (Parâmetro de poder: Lógica). Comunica ideias simples a feras Pequenas ou menores por sons e gestos.

### Estrategista
*O tático que transforma a equipe em unidade de elite.*

**Mente Firme.** Vantagem em Testes de Integridade contra ficar dominado.

**Comando Tático ({ch 1}).** Usa a Ação Ajudar como Ação Rápida. A partir do 3º nível, ao fazer isso escolhe um bônus para o aliado ajudado:

- **Apoio:** o herói e o aliado ganham PV temporários iguais a 1d6 + Bônus de Proficiência.
- **Avanço:** o aliado ganha +3 m de Deslocamento até o fim do próximo turno dele.
- **Punição:** até o início do próximo turno do herói, um inimigo a até 1,5 m dele tem Desvantagem no próximo ataque.

**Força do Grupo ({ch 1}).** Quando erra um ataque ou falha num Teste de Parâmetro ou de Integridade, soma +1 por aliado que vê a até 9 m (máximo +3), possivelmente mudando o resultado.

### Destemido
*O curioso que provoca o vilão e não conhece o medo.*

**Sem Medo ({ch 1}).** Vantagem em Testes de Integridade contra ficar amedrontado. Quando falha num desses testes, pode escolher passar; só essa escolha custa a Carga Heroica.

**Aptidão.** Proficiência em uma destas perícias: Intuição, Investigação, Prestidigitação, Furtividade ou Sobrevivência.

**Provocação ({ch 1}).** Como Ação Rápida, uma criatura a até 18 m que possa ouvi-lo faz Teste de Integridade (Espírito) (CD de Linhagem com Lógica, Espírito ou Magnetismo). Se falhar, tem Desvantagem em ataques contra alvos que não sejam o herói até o início do próximo turno dele.
:::

# Parahumanos {#parahumanos img=origens/parahumano.jpg cor=parahumana}

Parahumanos nasceram humanos e ganharam poderes depois. A causa pode ser uma explosão de raios cósmicos, um soro experimental, um implante cibernético, uma maldição ou um acidente de laboratório. Muitos carregam a pergunta "por que eu?" e a respondem assumindo a responsabilidade de usar o dom para o bem.

A história de origem é o coração desta Origem: defina o evento, quem estava por trás dele e se mais alguém foi afetado.

## Linhagens Parahumanas

{tabela linhagens}
| Linhagem | Conceito | Movimento extra |
|---|---|---|
| Conduíte | O corpo virou um canal de energia liberada em rajadas. | — |
| Infundido | Fundido a um elemento num acidente ou experimento. | — |
| Supersoldado | Produto de um programa militar de aprimoramento. | — |
| Cobaia | Recebeu traços animais num laboratório genético. | — |
| Amorfo | O corpo virou uma massa maleável. | — |
| Variável | Controla o próprio tamanho e pode sumir de vista. | — |
| Fantasma | Agente aprimorado para camuflagem e fuga. | — |
| Ciborgue | Mais máquina do que gente, reconstruído após um trauma. | — |
| Androide | Uma mente humana num corpo artificial. | — |
| Psíquico | A mente ligada a uma consciência de outro plano. | — |
| Infectado | Um vírus ou maldição lhe deu fome sobrenatural. | — |
| Amaldiçoado | Um pacto ou feitiço o transformou e marcou. | — |
| Radiante | Exposto a uma força cósmica que brilha dentro dele. | — |

:::cards
### Conduíte
*O corpo virou um canal de energia liberada em rajadas.*

**Tipo de Energia.** Escolha um tipo de dano conforme a variante. Ele define o Sopro e a resistência.

**Sopro ({ch 1}).** Ao usar a Ação Atacar, pode trocar um dos ataques por uma rajada num cone de 4,5 m ou numa linha de 9 m × 1,5 m. Cada criatura na área faz Teste de Integridade (Reflexos) (CD de Linhagem com Resistência): 1d10 do tipo escolhido, metade se passar. O dano sobe para 2d10 no 5º nível, 3d10 no 11º e 4d10 no 17º.

**Resistência de Energia.** Resistência ao tipo escolhido.

**Variante Bruto** (ácido, elétrico, fogo, frio ou veneno). **Blindagem Energética {ch 3}:** a partir do 5º nível, com uma Ação fica imune ao tipo escolhido por 1 minuto.

**Variante Refinado** (ácido, elétrico, fogo, frio ou veneno). **Segundo Sopro {ch 3}:** a partir do 5º nível, ao usar o Sopro pode trocar o dano por um destes efeitos, num cone de 4,5 m:

- **Atordoante:** Teste de Integridade (Resistência) ou fica incapacitado até o início do próximo turno do herói.
- **Repulsor:** Teste de Integridade (Potência) ou é empurrado 6 m e cai.

**Variante Psíquico** (energia, necrótico, psíquico, radiante ou trovão). **Mente Conectada:** fala telepaticamente com qualquer criatura que veja a até 9 m, desde que ela conheça algum idioma. **Levitação Energética {ch 3}:** a partir do 5º nível, com uma Ação Rápida ganha Deslocamento de voo igual ao de caminhada por 1 minuto.

### Infundido
*Fundido a um elemento num acidente ou experimento.*

**Visão Noturna.** 18 m.

**Variante do Ar.** Pode prender a respiração indefinidamente enquanto não estiver incapacitado. Resistência a Dano Elétrico. Conhece Toque de Choque; no 3º nível ganha Amortecer Queda e no 5º, Levitação.

**Variante da Terra.** Atravessa terreno difícil de terra ou pedra sem gasto extra. Conhece Postura Blindada e pode ativá-la à vontade como Ação Rápida. No 5º nível ganha Furtividade Coletiva.

**Variante do Fogo.** Resistência a Dano de Fogo. Conhece Punho em Chamas; no 3º nível ganha Lança-Chamas e no 5º, Lâmina Ígnea.

**Variante da Água.** Resistência a Dano de Ácido. Respira ar e água e tem Deslocamento de natação igual ao de caminhada. Conhece Jato Ácido; no 3º nível ganha Controle de Umidade e no 5º, Andar sobre a Água.

### Supersoldado
*Produto de um programa militar de aprimoramento.*

**Visão Noturna.** 18 m.

**Descarga de Adrenalina ({ch 1}).** Usa Disparada como Ação Rápida e ganha PV temporários iguais ao Bônus de Proficiência.

**Compleição Poderosa.**

**Resistência Implacável ({ch 1}).** Quando cai a 0 PV sem morrer na hora, fica com 1 PV.

### Cobaia
*Recebeu traços animais num laboratório genético.*

**Visão Noturna.** 18 m.

**Enxerto Animal.** No 1º nível escolhe um enxerto:

- **Membranas Planadoras:** ao cair, desliza 60 cm na horizontal para cada 30 cm de queda e não sofre dano de queda se não estiver incapacitado.
- **Escalador:** Deslocamento de escalada igual ao de caminhada.
- **Guelras:** respira na água e tem Deslocamento de natação igual ao de caminhada.

No 5º nível escolhe outro da lista acima ou um destes:

- **Apêndices Agarradores:** dois apêndices que causam 1d6 + Potência de Dano de Concussão; ao acertar, pode agarrar o alvo como Ação Rápida.
- **Carapaça:** +1 na CA sem armadura pesada.
- **Cuspe Ácido {ch 3}:** com uma Ação, um alvo a até 9 m faz Teste de Integridade (Reflexos) ou sofre 2d10 de Dano de Ácido; 3d10 no 11º nível e 4d10 no 17º.

### Amorfo
*O corpo virou uma massa maleável.* Tipo de criatura: Gosma.

**Visão Noturna.** 18 m.

**Corpo Maleável.** Passa por espaços de até 2,5 cm de largura sem se espremer (o equipamento não passa). Vantagem em testes para escapar de agarrões.

**Fôlego.** Prende a respiração por 1 hora.

**Resiliência Natural.** Resistência a Dano de Ácido e veneno; Vantagem em Testes de Integridade contra ficar envenenado.

**Moldar o Corpo.** Com uma Ação, forma ou desfaz cabeça, braços, pernas e mãos. Com uma Ação Rápida, estende um pseudópode de até 3 m que manipula objetos, abre portas e carrega até 5 kg; não ataca nem ativa itens.

### Variável
*Controla o próprio tamanho e pode sumir de vista.*

**Visão Noturna.** 36 m.

**Dom Variável.** No 3º nível ganha Alterar Tamanho (só em si mesmo) e no 5º, Invisibilidade (só em si mesmo).

**Resiliência.** Vantagem em Testes de Integridade contra veneno e Resistência a Dano de Veneno.

**Fortaleza Psíquica.** Vantagem em Testes de Integridade contra ficar dominado ou atordoado.

### Fantasma
*Agente aprimorado para camuflagem e fuga.*

**Visão Noturna.** 36 m.

**Dom do Agente.** No 3º nível ganha Disfarce Holográfico e no 5º, Indetectável (só em si mesmo).

**Resistência Mental.** Vantagem em Testes de Integridade (Lógica, Espírito e Magnetismo) contra poderes.

**Camuflagem ({ch 1}).** Vantagem em um Teste de Reflexos (Furtividade).

### Ciborgue
*Mais máquina do que gente, reconstruído após um trauma.*

**Corpo Artificial.** Vantagem em Testes de Integridade contra veneno, Resistência a Dano de Veneno, imunidade a doenças. Não precisa comer, beber nem respirar. Poderes não podem fazê-lo dormir.

**Modo Vigília.** A Recuperação leva 6 horas em estado inativo, mas consciente: vê e ouve normalmente.

**Blindagem Integrada.** +1 na CA. A armadura que veste é integrada ao corpo: leva 1 hora para vestir ou tirar e não pode ser removida contra a vontade.

**Projeto Especializado.** Proficiência em uma perícia e em uma ferramenta à escolha.

### Androide
*Uma mente humana num corpo artificial.* Tipo de criatura: Constructo.

**Chassi Blindado.** Sem armadura, tem CA 13 + Reflexos.

**Programado para Vencer ({ch 1}).** Soma 1d4 a um ataque, Teste de Parâmetro ou Teste de Integridade.

**Máquina Reparável.** Se Reparo Rápido for usado no herói, ele pode gastar uma Matriz de Vitalidade e recuperar PV. Poderes de Cura funcionam normalmente nele.

**Natureza Mecânica.** Resistência a Dano de Veneno, imunidade a doenças, Vantagem contra ficar paralisado ou envenenado. Não precisa comer, beber nem respirar.

**Modo Vigília.** A Recuperação leva 6 horas inativo, mas consciente.

**Projeto Especializado.** Proficiência com duas ferramentas à escolha.

### Psíquico
*A mente ligada a uma consciência de outro plano.*

**Mente Dupla.** Vantagem em todos os Testes de Integridade (Espírito).

**Disciplina Mental.** Resistência a Dano de Psíquico.

**Elo Mental.** Fala telepaticamente com qualquer criatura que veja a até 3 m × seu nível. Com uma Ação, permite que uma delas responda pelo elo por 1 hora.

**Sem Sonhos.** Dorme sem sonhar; é imune a poderes que dependem de sonhos.

### Infectado
*Um vírus ou maldição lhe deu fome sobrenatural.*

**Visão Noturna.** 18 m.

**Morto em Vida.** Não precisa respirar.

**Escalada Aracnídea.** Deslocamento de escalada igual ao de caminhada. A partir do 3º nível, anda por paredes e tetos com as mãos livres.

**Mordida ({ch 1}).** Ataque natural de 1d4 + Resistência de Dano Perfurante, com Vantagem se o herói estiver com metade dos PV ou menos. O ataque é à vontade; a parte que custa Cargas Heroicas é esta: ao acertar, escolhe recuperar PV iguais ao dano ou somar o dano ao próximo Teste de Parâmetro ou ataque que fizer.

**Vida Anterior.**

### Amaldiçoado
*Um pacto ou feitiço o transformou e marcou.*

**Visão Noturna.** 18 m.

**Símbolo Sinistro ({ch 1}).** Com uma Ação Rápida, arranca uma unha, dente ou mecha de cabelo que vira um símbolo por 24 horas. Enquanto ele estiver no mesmo plano, o herói pode mandar uma mensagem telepática de até 25 palavras a quem o segura, ou, com uma Ação, ver e ouvir pelo símbolo por 1 minuto.

**Dom da Maldição.** Ganha Disfarce Holográfico e Marca Sombria.

**Vida Anterior.**

### Radiante
*Exposto a uma força cósmica que brilha dentro dele.*

**Visão Noturna.** 18 m.

**Resistência Cósmica.** Resistência a Dano Necrótico e radiante.

**Mãos Curativas ({ch 1}).** Com uma Ação, toca uma criatura e ela recupera 1d4 PV por ponto de Bônus de Proficiência.

**Portador da Luz.** Conhece a Técnica Lumen (Parâmetro de poder: Magnetismo).

**Revelação ({ch 2}).** A partir do 3º nível, com uma Ação Rápida assume uma destas formas por 1 minuto:

- **Asas de Luz:** voo igual ao Deslocamento.
- **Brilho Interior:** luz plena de 3 m; no fim de cada turno do herói, cada criatura a até 3 m sofre Dano Radiante igual ao Bônus de Proficiência.
- **Mortalha Sombria:** criaturas a até 3 m fazem Teste de Integridade (Magnetismo) ou ficam amedrontadas até o fim do próximo turno do herói.

Em qualquer forma, uma vez por turno causa dano extra radiante ou necrótico igual ao Bônus de Proficiência.
:::

# Mutantes {#mutantes img=origens/mutante.jpg cor=mutante}

Mutantes nascem com o gene do poder, que costuma despertar na adolescência e quase sempre deixa marcas visíveis: asas, escamas, pelos, chifres, olhos de predador. Por isso são temidos e discriminados. Alguns vivem em comunidades isoladas onde treinam seus dons; outros lutam para ser aceitos por um mundo que os rejeita.

A aparência de um Mutante é parte da sua história. Decida se ele pode se passar por humano e como lida com o preconceito.

## Linhagens Mutantes

{tabela linhagens}
| Linhagem | Conceito | Movimento extra |
|---|---|---|
| Demoníaco | Chifres, cauda e chamas de origem sombria. | — |
| Metamorfo | Muda de rosto e de corpo à vontade. | — |
| Feral | Liberta o animal interior em combate. | — |
| Felino | Garras, agilidade e explosões de velocidade. | escalada 9 m |
| Saltador | Reflexos de coelho e saltos impossíveis. | — |
| Mímico | Imita qualquer voz ou som. | — |
| Alado | Asas de ave e o céu como território. | voo 9 m |
| Asa Silenciosa | Voo silencioso e visão de coruja. | voo 9 m |
| Réptil | Mandíbula poderosa e pele escamosa. | natação 9 m |
| Carapaça | Um casco natural que funciona como armadura. | — |
| Anfíbio | Vive entre a terra e o mar. | natação 9 m |
| Venenoso | Pele tóxica, saltos e escalada. | escalada 7,5 m |
| Gigante Gentil | Corpulento, calmo e ligado a plantas e animais. | — |
| Colosso | Corpo de pedra e força de gigante. | — |
| Chifrudo | Chifres e investidas devastadoras. | — |
| Paquiderme | Pele grossa, tromba e calma inabalável. | — |
| Espreitador | Membros longos e ataques de emboscada. | — |
| Feroz | Ágil e cruel com quem o subestima. | — |
| Escamado | Traços dracônicos e um grito que desorienta. | — |
| Ofídio | Traços de serpente e Resistência a Poderes. | — |
| Instável | Corpo em mutação e empatia telepática. | — |
| Planador | Membranas para planar e pés que agarram. | escalada 9 m |

:::cards
### Demoníaco
*Chifres, cauda e chamas de origem sombria.*

**Visão Noturna.** 18 m.

**Resistência Infernal.** Resistência a Dano de Fogo.

**Legado.** Escolha uma variante. Ela concede uma Técnica no 1º nível, um poder de Nível de Poder 1 no 3º nível e um de Nível de Poder 2 no 5º nível. O herói pode ativá-los à vontade (Sobrecarga normal para os de NP 1 e 2). O Parâmetro de poder é Magnetismo.

| Variante | 1º nível | 3º nível | 5º nível |
|---|---|---|---|
| Legado do Pacto | Aura de Presença | Retaliação Ígnea | Escuridão |
| Legado da Peste | Aura de Presença | Raio Tóxico | Controle Hostil |
| Legado do Espião | Aura de Presença | Disfarce Holográfico | Ler Pensamentos |
| Legado da Sedução | Charme Pessoal | Fascínio | Sugestão |
| Legado da Ilusão | Holograma Menor | Disfarce Holográfico | Invisibilidade |
| Legado do Gelo | Raio Criogênico | Couraça Criogênica | Escuridão |
| Legado da Ganância | Mão Cinética | Plataforma Flutuante | Lacre Energético |
| Legado do Fogo | Mão Cinética | Lança-Chamas | Lâmina Ígnea |
| Legado da Guerra | Aura de Presença | Golpe Incendiário | Golpe Revelador |

### Metamorfo
*Muda de rosto e de corpo à vontade.*

**Instinto Social.** Proficiência em duas destas perícias: Enganação, Intuição, Intimidação, Atuação ou Persuasão.

**Forma Absoluta.** Com uma Ação, muda a aparência e a voz: altura, peso, traços, cabelo e cor de pele. Precisa ser uma forma humanoide com a mesma quantidade de membros. Os traços de jogo não mudam. Dura até usar outra Ação para voltar ou mudar de novo.

### Feral
*Liberta o animal interior em combate.*

**Visão Noturna.** 18 m.

**Instinto Bestial.** Proficiência em uma destas perícias: Acrobacia, Atletismo, Intimidação ou Sobrevivência.

**Transformação ({ch 1}).** Com uma Ação Rápida, assume a forma bestial por 1 minuto e ganha PV temporários iguais ao dobro do Bônus de Proficiência. A variante soma um efeito:

- **Couro-Duro:** mais 1d6 PV temporários e +1 na CA enquanto transformado.
- **Presa-Longa:** com uma Ação Rápida, ataca com as presas: 1d6 + Potência de Dano Perfurante.
- **Passo-Veloz:** +3 m de Deslocamento. Quando um inimigo termina o turno a até 1,5 m, pode usar a Reação para se mover até 3 m sem provocar Contra-ataques.
- **Caçador:** Vantagem em Testes de Parâmetro (Espírito), e nenhuma criatura a até 9 m tem Vantagem em ataques contra o herói, a menos que ele esteja incapacitado.

### Felino
*Garras, agilidade e explosões de velocidade.* Deslocamento de escalada 9 m.

**Visão Noturna.** 18 m.

**Garras.** Ataque natural de 1d6 de Dano Cortante.

**Talento Felino.** Proficiência em Percepção e Furtividade.

**Agilidade Felina.** Ao se mover no seu turno, pode dobrar o Deslocamento até o fim do turno. Só pode repetir depois de um turno em que se mova 0 m.

### Saltador
*Reflexos de coelho e saltos impossíveis.*

**Gatilho Rápido.** Soma o Bônus de Proficiência à Iniciativa.

**Sentidos Aguçados.** Proficiência em Percepção.

**Pés de Sorte.** Ao falhar num Teste de Integridade (Reflexos), pode usar a Reação para somar 1d4 ao resultado.

**Salto do Coelho ({ch 1}).** Com uma Ação Rápida, salta uma distância de até 1,5 m por ponto de Bônus de Proficiência, sem provocar Contra-ataques. Só se o Deslocamento não for 0.

### Mímico
*Imita qualquer voz ou som.*

**Cópia Perfeita.** Vantagem em testes para copiar caligrafia ou trabalhos manuais.

**Memória Total ({ch 1}).** Proficiência em duas perícias à escolha. Ao fazer um teste com uma perícia em que é proficiente, pode ganhar Vantagem; só essa Vantagem custa a Carga Heroica.

**Mimética.** Imita sons e vozes que já ouviu. Quem ouve só percebe a imitação com um Teste de Espírito (Intuição) contra a CD de Linhagem com Magnetismo.

### Alado
*Asas de ave e o céu como território.*

**Voo.** Deslocamento de voo igual ao de caminhada. Não pode voar com armadura média ou pesada.

**Garras.** Ataque natural de 1d6 de Dano Cortante.

**Chamado do Vento.** No 3º nível ganha Rajada de Vento.

### Asa Silenciosa
*Voo silencioso e visão de coruja.*

**Visão Noturna.** 36 m.

**Voo.** Deslocamento de voo igual ao de caminhada. Não pode voar com armadura média ou pesada.

**Penas Silenciosas.** Proficiência em Furtividade.

### Réptil
*Mandíbula poderosa e pele escamosa.* Deslocamento de natação 9 m.

**Mordida.** Ataque natural de 1d6 de Dano Perfurante.

**Fôlego.** Prende a respiração por 15 minutos.

**Instinto de Caçador.** Proficiência em duas destas perícias: Lidar com Animais, Natureza, Percepção, Furtividade ou Sobrevivência.

**Escamas.** Sem armadura, tem CA 13 + Reflexos.

**Mandíbula Faminta ({ch 1}).** Com uma Ação Rápida, faz um ataque de mordida. Se acertar, ganha PV temporários iguais ao Bônus de Proficiência.

### Carapaça
*Um casco natural que funciona como armadura.*

**Garras.** Ataque natural de 1d6 de Dano Cortante.

**Fôlego.** Prende a respiração por 1 hora.

**Casco.** Tem CA 17 base, sem somar Reflexos. Pode usar escudo, mas não armadura.

**Intuição Natural.** Proficiência em uma destas perícias: Lidar com Animais, Medicina, Natureza, Percepção, Furtividade ou Sobrevivência.

**Defesa do Casco.** Com uma Ação, recolhe-se no casco. Enquanto estiver recolhido:

- +4 na CA.
- Vantagem em Testes de Integridade (Potência e Resistência), e Desvantagem em Testes de Integridade (Reflexos).
- Fica caído, com Deslocamento 0 e sem Reações.

Sai do casco com uma Ação Rápida.

### Anfíbio
*Vive entre a terra e o mar.* Deslocamento de natação 9 m.

**Escamas.** Sem armadura, tem CA 12 + Reflexos.

**Atento e Atlético.** Proficiência em Atletismo e Percepção.

**Vontade do Abismo.** Vantagem em Testes de Integridade contra ficar dominado, amedrontado, paralisado, envenenado, atordoado ou adormecido.

**Anfibiedade Limitada.** Respira ar e água, mas precisa ficar submerso pelo menos 1 hora a cada 4 horas. Se não ficar, ganha 1 nível de Exaustão.

### Venenoso
*Pele tóxica, saltos e escalada.* Deslocamento de escalada 7,5 m.

**Alerta.** Proficiência em Percepção.

**Anfíbio.** Respira ar e água.

**Imunidade a Veneno.** Imune a Dano de Veneno e à condição envenenado.

**Pele Venenosa.** Quem agarra o herói ou o toca diretamente faz Teste de Integridade (Resistência), CD 12, ou fica envenenado por 1 minuto, repetindo o teste no fim de cada turno. O herói pode aplicar o veneno numa arma perfurante como parte de um ataque.

**Salto.** Salto em distância de 7,5 m e em altura de 4,5 m, com ou sem corrida.

**Dependência de Água.** Precisa ficar imerso em água pelo menos 1 hora por dia. Se não ficar, ganha 1 nível de Exaustão, que só sai com essa imersão.

### Gigante Gentil
*Corpulento, calmo e ligado a plantas e animais.*

**Dom Natural.** Ganha Detectar Poderes e Disfarce Holográfico. Com o Disfarce Holográfico, pode parecer até 1 m mais baixo ou mais alto.

**Passo Oculto ({ch 1}).** Com uma Ação Rápida, fica invisível até o início do próximo turno ou até atacar, causar dano ou forçar um Teste de Integridade.

**Compleição Poderosa.**

**Voz da Natureza.** Comunica ideias simples a feras e plantas, e tem Vantagem em Testes de Parâmetro (Magnetismo) para influenciá-las.

### Colosso
*Corpo de pedra e força de gigante.*

**Pequeno Gigante.** Proficiência em Atletismo.

**Compleição Poderosa.**

**Nascido nas Alturas.** Resistência a Dano de Frio; aclimatado a grandes altitudes.

**Resistência de Pedra ({ch 1}).** Ao sofrer dano, pode usar a Reação para reduzi-lo em 1d12 + Resistência.

### Chifrudo
*Chifres e investidas devastadoras.*

**Chifres.** Ataque natural de 1d6 de Dano Perfurante.

**Investida.** Depois de usar Disparada e se mover pelo menos 6 m, pode atacar com os chifres como Ação Rápida.

**Chifrada.** Ao acertar uma Jogada de Ataque Corpo a Corpo na Ação Atacar, pode usar uma Ação Rápida para empurrar o alvo com os chifres: Teste de Integridade (Potência) (CD de Linhagem com Potência) ou é empurrado 3 m.

**Senso de Direção.** Sempre sabe onde fica o norte e tem Vantagem em Testes de Espírito (Sobrevivência) para se orientar.

### Paquiderme
*Pele grossa, tromba e calma inabalável.*

**Compleição Poderosa.**

**Serenidade.** Vantagem em Testes de Integridade contra ficar dominado ou amedrontado.

**Couro Grosso.** Sem armadura, tem CA 12 + Resistência.

**Tromba.** Agarra, ergue e manipula objetos de até 2,5 kg a até 1,5 m, e serve de snorkel. Não empunha armas nem escudos.

**Faro.** Vantagem em Testes de Espírito (Percepção), Investigação e Sobrevivência que dependam do olfato.

### Espreitador
*Membros longos e ataques de emboscada.*

**Visão Noturna.** 18 m.

**Mente Firme.** Vantagem em Testes de Integridade contra ficar dominado.

**Braços Longos.** No seu turno, o alcance das Jogadas de Ataque Corpo a Corpo aumenta 1,5 m.

**Compleição Poderosa.**

**Sorrateiro.** Proficiência em Furtividade. Passa por espaços feitos para criaturas Pequenas sem se espremer.

**Ataque Surpresa.** Ao acertar uma criatura que ainda não agiu no combate, causa 2d6 de dano extra. Uma vez por combate.

### Feroz
*Ágil e cruel com quem o subestima.*

**Visão Noturna.** 18 m.

**Mente Firme.** Vantagem em Testes de Integridade contra ficar dominado.

**Fúria dos Subestimados ({ch 1}).** Ao causar dano a uma criatura de tamanho maior ou com mais PV máximos que ele, soma dano extra igual ao Bônus de Proficiência. Uma vez por turno.

**Fuga Ágil.** Usa Recuar ou Esconder como Ação Rápida.

### Escamado
*Traços dracônicos e um grito que desorienta.*

**Visão Noturna.** 18 m.

**Grito Dracônico ({ch 1}).** Com uma Ação Rápida, até o início do próximo turno, aliados têm Vantagem em ataques contra inimigos a até 3 m do herói que possam ouvi-lo.

**Legado.** Escolha um:

- **Astúcia:** proficiência em Ocultismo, Investigação, Medicina, Prestidigitação ou Sobrevivência.
- **Desafio:** Vantagem contra ficar amedrontado.
- **Centelha:** uma Técnica à escolha.

### Ofídio
*Traços de serpente e resistência a poderes.*

**Visão Noturna.** 18 m.

**Resistência a Poderes (Ρ).** Vantagem em Testes de Integridade contra poderes.

**Resiliência a Veneno.** Vantagem contra ficar envenenado e Resistência a Dano de Veneno.

**Dom da Serpente.** Conhece Spray Tóxico. Pode ativar Afinidade Animal à vontade, apenas em serpentes. No 3º nível ganha Sugestão.

### Instável
*Corpo em mutação e empatia telepática.*

**Sangue Regenerador.** Ao rolar uma Matriz de Vitalidade para recuperar PV, rola de novo qualquer 1 ou 2 e fica com o novo resultado.

**Telepatia Limitada.** Fala telepaticamente com uma criatura a até 9 m que conheça algum idioma.

**Persuasivo.** Proficiência em Persuasão.

**Percepção Telepática.** Vantagem em Testes de Integridade (Espírito e Magnetismo).

### Planador
*Membranas para planar e pés que agarram.* Deslocamento de escalada 9 m.

**Pés Habilidosos.** Usa um Objeto como Ação Rápida.

**Planar.** Ao cair pelo menos 3 m, pode usar a Reação para planar: desliza 1,5 m na horizontal para cada 30 cm de queda e não sofre dano de queda.

**Esquiva ({ch 1}).** Ao ser atingido, pode usar a Reação para reduzir o dano em 1d6 + Bônus de Proficiência.
:::

# Visitantes {#visitantes img=origens/visitante.jpg cor=visitante}

Visitantes não são da Terra. Alguns são alienígenas, outros vêm de dimensões paralelas ou reinos míticos, e alguns são heróis lendários de outras eras trazidos de volta para enfrentar ameaças atuais. Chegam para proteger, para se vingar ou para encontrar um novo lar, e trazem consigo mistério e maravilha.

Defina de onde o Visitante veio, por que está aqui e se pode voltar. A cultura natal é uma fonte ótima de aliados, inimigos e ganchos de campanha.

## Linhagens Visitantes

{tabela linhagens}
| Linhagem | Conceito | Movimento extra |
|---|---|---|
| Eterno | Membro de uma raça imortal de outra dimensão. | — |
| Eterno Sazonal | O humor muda com as estações do seu reino. | — |
| Eterno das Marés | Nascido num reino submerso. | natação 9 m |
| Eterno Astral | Viajante entre as estrelas. | — |
| Eterno Sombrio | Vindo de uma dimensão de sombras. | — |
| Feérico | Ser alado de um reino encantado. | voo 9 m |
| Silvestre | Festeiro mítico, resistente a poderes. | — |
| Soberano das Marés | Guardião de um império nas profundezas. | natação 9 m |
| Invasor Astral | Guerreiro de uma civilização conquistadora. | — |
| Asceta Dimensional | Mestre de disciplina mental absoluta. | — |
| Mercenário Espacial | Soldado alienígena apaixonado por armas de fogo. | natação 9 m |
| Insectoide | Alienígena de quatro braços e carapaça camaleônica. | — |
| Analista | Intelecto frio e precisão impecável. | — |
| Leonino | Guerreiro orgulhoso de um mundo de heróis. | — |
| Equino | Metade humano, metade cavalo. | — |
| Retornado | Herói de outra era trazido de volta à vida. | — |

:::nota Traços eternos
Os Eternos compartilham três traços, chamados aqui de **traços eternos**:

- **Sentidos Aguçados:** proficiência em Percepção.
- **Mente Firme:** Vantagem contra ficar dominado; poderes não podem fazê-lo dormir.
- **Transe:** não dorme; medita 4 horas e recebe os benefícios de uma Recuperação de 8 horas.

Todos têm Visão Noturna de 18 m, salvo indicação.
:::

:::cards
### Eterno
*Membro de uma raça imortal de outra dimensão.*

**Traços eternos.**

**Variante Alto Eterno.** Treinamento em Combate Corpo a Corpo e Armas de Fogo. Conhece uma Técnica à escolha (Parâmetro de poder: Lógica). Um idioma extra.

**Variante Eterno Selvagem.** Os mesmos Treinamentos. Pode tentar se esconder quando está levemente encoberto por folhagem, chuva, neve, névoa ou fenômenos naturais.

**Variante Eterno Renegado.** Visão Noturna de 36 m, mas Desvantagem em ataques e em Percepção pela visão sob luz do sol direta. Treinamento em Combate Corpo a Corpo e Armas de Fogo. Conhece Drones de Luz; no 3º nível ganha Marcador de Alvo e no 5º, Escuridão (Parâmetro de poder: Magnetismo).

### Eterno Sazonal
*O humor muda com as estações do seu reino.*

**Traços eternos.** Ao fim de uma Recuperação, pode trocar de estação.

**Passo Feérico ({ch 1}).** Com uma Ação Rápida, teleporta-se até 9 m para um espaço que vê. A partir do 3º nível, soma o efeito da estação (CD de Linhagem com Lógica, Espírito ou Magnetismo):

- **Primavera:** pode teleportar uma criatura disposta a até 1,5 m em vez de si mesmo.
- **Verão:** logo depois, criaturas escolhidas a até 1,5 m sofrem Dano de Fogo igual ao Bônus de Proficiência.
- **Outono:** até duas criaturas a até 3 m fazem Teste de Integridade (Espírito) ou ficam dominadas por 1 minuto, ou até sofrerem dano.
- **Inverno:** antes de sumir, uma criatura a até 1,5 m faz Teste de Integridade (Espírito) ou fica amedrontada até o fim do próximo turno do herói.

### Eterno das Marés
*Nascido num reino submerso.* Deslocamento de natação 9 m.

**Traços eternos.**

**Filho do Mar.** Respira ar e água; Resistência a Dano de Frio.

**Amigo do Mar.** Comunica ideias simples a feras que respiram água.

### Eterno Astral
*Viajante entre as estrelas.*

**Traços eternos**, com **Transe Astral:** ao fim do transe, ganha proficiência em uma perícia e um Treinamento ou ferramenta à escolha até a próxima Recuperação.

**Fogo Astral.** Conhece uma destas Técnicas: Drones de Luz, Lumen ou Feixe Solar.

**Passo Estelar ({ch 1}).** Com uma Ação Rápida, teleporta-se até 9 m para um espaço que vê.

### Eterno Sombrio
*Vindo de uma dimensão de sombras.*

**Traços eternos.**

**Resistência Necrótica.** Resistência a Dano Necrótico.

**Bênção das Sombras ({ch 1}).** Com uma Ação Rápida, teleporta-se até 9 m para um espaço que vê. A partir do 3º nível, depois de teleportar ganha resistência a todo dano até o início do próximo turno.

### Feérico
*Ser alado de um reino encantado.* Tipo de criatura: Fada.

**Voo.** Deslocamento de voo igual ao de caminhada. Não pode voar com armadura média ou pesada.

**Dom Feérico.** Conhece Sintonia Natural; no 3º nível ganha Marcador de Alvo e no 5º, Alterar Tamanho.

### Silvestre
*Festeiro mítico, resistente a poderes.* Tipo de criatura: Fada.

**Cabeçada.** Ataque natural de 1d6 de Dano de Concussão.

**Resistência a Poderes (Ρ).** Vantagem em Testes de Integridade contra poderes.

**Saltos Alegres.** Ao saltar, soma 1d8 × 30 cm à distância, em altura ou em distância.

**Fanfarrão.** Proficiência em Atuação, Persuasão e um instrumento musical.

### Soberano das Marés
*Guardião de um império nas profundezas.* Deslocamento de natação 9 m.

**Visão Noturna.** 18 m.

**Anfíbio.** Respira ar e água.

**Guardião das Profundezas.** Resistência a Dano de Frio.

**Controlar Ar e Água.** Ganha Cortina de Névoa; no 3º nível, Rajada de Vento; no 5º, Andar sobre a Água.

**Emissário do Mar.** Comunica ideias simples a feras, elementais e monstruosidades que respiram água.

### Invasor Astral
*Guerreiro de uma civilização conquistadora.*

**Conhecimento Astral.** Ao fim de uma Recuperação, ganha proficiência em uma perícia e um Treinamento ou ferramenta à escolha até a próxima Recuperação.

**Psiquê Guerreira.** Conhece Mão Cinética, e a mão é invisível. No 3º nível ganha Supersalto e, no 5º, Salto Quântico.

**Resiliência Psíquica.** Resistência a Dano de Psíquico.

### Asceta Dimensional
*Mestre de disciplina mental absoluta.*

**Psiquê Disciplinada.** Conhece Mão Cinética, e a mão é invisível. No 3º nível ganha Escudo Reflexo e no 5º, Ler Pensamentos.

**Disciplina Mental.** Vantagem em Testes de Integridade contra ficar dominado ou amedrontado.

**Resiliência Psíquica.** Resistência a Dano de Psíquico.

### Mercenário Espacial
*Soldado alienígena apaixonado por armas de fogo.* Deslocamento de natação 9 m.

**Centelha Astral ({ch 1}).** Uma vez por turno, ao acertar com uma arma, causa dano extra de energia igual ao Bônus de Proficiência.

**Mestre das Armas de Fogo.** Treinamento em Armas de Fogo. Ignora a propriedade de recarga delas, e atacar a longa distância não dá Desvantagem.

**Porte Avantajado.** Vantagem em Testes de Parâmetro (Potência) e Testes de Integridade (Potência). Compleição Poderosa.

### Insectoide
*Alienígena de quatro braços e carapaça camaleônica.* Tipo de criatura: Monstruosidade.

**Visão Noturna.** 18 m.

**Carapaça Camaleônica.** Sem armadura, tem CA 13 + Reflexos. Com uma Ação, muda de cor para combinar com o ambiente e ganha Vantagem em Furtividade para se esconder.

**Braços Secundários.** Dois braços menores manipulam objetos, empunham armas leves e podem Usar um Objeto.

**Insone.** Não precisa dormir e fica consciente durante a Recuperação, sem atividade extenuante.

**Telepatia.** Fala telepaticamente com uma criatura disposta a até 36 m, que pode responder.

### Analista
*Intelecto frio e precisão impecável.*

**Frieza.** Vantagem em Testes de Integridade (Lógica, Espírito e Magnetismo).

**Mira Incansável.** Proficiência em uma destas perícias: Ocultismo, História, Investigação, Medicina, Atuação ou Prestidigitação, e em uma ferramenta. Soma 1d4 a todo teste com elas.

**Anfibiedade Parcial.** Respira na água por até 1 hora; recupera esse tempo após uma Recuperação.

### Leonino
*Guerreiro orgulhoso de um mundo de heróis.*

**Visão Noturna.** 18 m.

**Garras.** Ataque natural de 1d4 de Dano Cortante.

**Instinto de Caçador.** Proficiência em uma destas perícias: Atletismo, Intimidação, Percepção ou Sobrevivência.

**Rugido ({ch 1}).** Com uma Ação Rápida, criaturas escolhidas a até 3 m fazem Teste de Integridade (Espírito) (CD de Linhagem com Resistência) ou ficam amedrontadas até o fim do próximo turno do herói.

### Equino
*Metade humano, metade cavalo.* Tipo de criatura: Fada.

**Cascos.** Ataque natural de 1d6 de Dano de Concussão.

**Investida.** Depois de se mover pelo menos 9 m em linha reta até um alvo e acertá-lo com uma Jogada de Ataque Corpo a Corpo com arma, pode atacar com os cascos como Ação Rápida.

**Corpo Equino.** Conta como um tamanho maior para carga. Escaladas que exigem mãos e pés custam 1,2 m extras por 30 cm.

**Afinidade Natural.** Proficiência em uma destas perícias: Lidar com Animais, Medicina, Natureza ou Sobrevivência.

### Retornado
*Herói de outra era trazido de volta à vida.*

**Natureza Imortal.** Ganha estes benefícios:

- Vantagem contra doenças e contra ficar envenenado, e Resistência a Dano de Veneno.
- Vantagem em Testes de Estabilização.
- Não precisa comer, beber, respirar nem dormir; poderes não podem fazê-lo dormir.
- A Recuperação leva 4 horas inativo, mas consciente.

**Memória de Outra Vida ({ch 1}).** Ao fazer um teste com uma perícia, pode somar 1d6.

**Vida Anterior.**
:::
`},Fl={id:`arquetipos`,num:3,title:`Arquétipos`,subtitle:`Os 13 caminhos do heroísmo, suas características e Especializações.`,md:String.raw`
# Visão geral {#visao-geral}

:::arquetipos
:::

## Termos do capítulo

Todos os 13 Arquétipos usam o mesmo vocabulário:

| Termo | Significado |
|---|---|
| **Arquétipo** | O caminho de heroísmo do personagem: define Matriz de Vitalidade, Treinamentos e características por nível. |
| **Especialização** | A vertente escolhida dentro do Arquétipo, no nível indicado por ele (em geral o 3º), que concede características próprias em níveis definidos. |
| **Evolução** | O avanço do 4º, 8º, 12º, 16º e 19º níveis: +2 em um Parâmetro, +1 em dois Parâmetros ou um Talento. |
| **Apoteose** | A característica de 20º nível, o auge do Arquétipo. |
| **Treinamento** | O domínio de uma categoria de armas, blindagem ou veículos (veja Treinamentos, abaixo). |
| **Carga Heroica** | O recurso de esforço heroico. O herói tem uma reserva de 5 + metade do nível (arredondado para baixo), que volta toda ao fim de uma Recuperação (veja o [Capítulo 1](#/regras/cargas-heroicas)). |
| **Característica de Carga Heroica** | Uma característica marcada com um custo ("{ch 2}"): para usá-la, o herói gasta esse número de Cargas Heroicas. Não pede Teste de Sobrecarga. |
| **CA** (Classe de Armadura) | O número que uma Jogada de Ataque precisa alcançar para acertar o herói. |
| **CD** (Classe de Dificuldade) | O número que um teste precisa alcançar para ter sucesso. |
| **Bônus de Proficiência** | O bônus que cresce com o nível do herói e entra em testes, Jogadas de Ataque e na CD de Poder. |
| **Poder** | Uma habilidade sobrenatural ou tecnológica com efeito definido no [Capítulo 4](#/poderes). |
| **Técnica (Ο)** | Um poder simples, usado à vontade e sem Teste de Sobrecarga. Também chamada de poder Ômicron. |
| **Nível de Poder (NP)** | A potência de um poder, de 1 a 9. Cada Arquétipo tem um Nível de Poder máximo por nível de personagem. |
| **Ativar** | Usar um poder. Quem usa poderes é chamado de usuário de poderes. |
| **CD de Poder** | 8 + Bônus de Proficiência + modificador do Parâmetro de poder. |
| **Jogada de Ataque de Poder** | Bônus de Proficiência + modificador do Parâmetro de poder. |
| **Foco de Poder** | Um objeto opcional que o herói usa para direcionar poderes (luvas, amuleto, dispositivo, arma). Não é obrigatório para ativar poderes; algumas características dão bônus a quem usa um. |
| **Item especial** | Objeto com propriedades extraordinárias. Alguns exigem Vínculo. |
| **Vínculo** | A ligação entre o herói e um item especial; um herói mantém no máximo três Vínculos ao mesmo tempo. |
| **NA** (Nível de Ameaça) | A medida de perigo de uma criatura, de 0 a 30. Uma criatura de NA igual ao nível de um grupo de quatro heróis é um desafio equilibrado para eles. Formas animais, companheiros e criaturas invocadas usam o NA como limite. |

## Estrutura dos Arquétipos

Todo Arquétipo segue o mesmo esqueleto:

- **Características por nível.** Cada Arquétipo concede características fixas, cada uma no nível indicado na sua tabela. Todo herói do Arquétipo as recebe.
- **Especialização.** O herói escolhe sua Especialização no nível indicado pelo Arquétipo (em geral o 3º). Ela concede características próprias nos níveis indicados na tabela ("Característica de Especialização").
- **Evolução (4º, 8º, 12º, 16º e 19º níveis).** O herói ganha +2 em um Parâmetro, +1 em dois Parâmetros ou um Talento. Alguns Arquétipos têm Evoluções extras, indicadas na sua tabela.
- **Apoteose (20º nível).** A característica final do Arquétipo.
- **Custo em Cargas Heroicas.** Numa característica de Arquétipo, o custo aparece no fim do título ("Surto de Ação (2º nível) {ch 1}"); em Especializações e Linhagens, aparece entre parênteses logo após o nome ("Nome (3º) ({ch 1})").

:::dica Nível do herói
Nas páginas de cada Arquétipo, use o seletor **Nível do herói** para destacar a linha da tabela de progressão e esmaecer as características que o seu herói ainda não alcançou.
:::

### Treinamentos

Os Treinamentos substituem as proficiências em armas e armaduras. Cada Arquétipo indica os seus.

| Treinamento | Cobre |
|---|---|
| **Combate Corpo a Corpo** | Todas as armas corpo a corpo sem a propriedade Pesada (inclui as de arremesso) |
| **Armas de Fogo** | Todas as armas à distância sem a propriedade Pesada: pistolas, revólveres, submetralhadoras, escopetas, fuzis, arcos curtos, bestas leves, fundas, zarabatanas, armas de choque |
| **Armamento Pesado** | Qualquer arma com a propriedade Pesada (corpo a corpo ou à distância) |
| **Blindagem Leve** | Armaduras leves e médias, e escudos |
| **Blindagem Pesada** | Armaduras pesadas (exige Blindagem Leve) |
| **Veículos** | Pilotar veículos terrestres, aquáticos e aéreos |

## Níveis de Poder

Os poderes são graduados em nove Níveis de Poder, numerados de 1 a 9. Cada nível tem uma letra grega e um símbolo, que aparecem na descrição dos poderes e na mesa de jogo ("um poder Iota", "um Γ"). As regras sempre usam o número. Abaixo do 1 ficam as Técnicas (Ômicron, Ο); acima do 9 ficam os poderes proibidos (Fi, Φ), descritos no [Capítulo 4](#/poderes).

| Nível de Poder | Letra | Glifo de Poder | CD de Sobrecarga |
|---|---|---|---|
| 1 | Zeta | Ζ | 12 |
| 2 | Épsilon | Ε | 13 |
| 3 | Iota | Ι | 14 |
| 4 | Delta | Δ | 15 |
| 5 | Gama | Γ | 16 |
| 6 | Beta | Β | 17 |
| 7 | Alfa | Α | 18 |
| 8 | Lambda | Λ | 19 |
| 9 | Ômega | Ω | 20 |

### Lista única de poderes

Não existem listas por Arquétipo. Todo usuário de poderes escolhe Técnicas e poderes conhecidos ou preparados da [lista completa do Capítulo 4](#/poderes), respeitando o Nível de Poder máximo da sua tabela. Poderes dados por uma Especialização, uma Linhagem ou uma característica são concedidos além desse limite, como cada característica indica.

## Regra central: poderes à vontade

No Projeto: Vanguarda, **poderes não gastam recursos**. Um herói pode ativar qualquer poder que conheça ou tenha preparado quantas vezes quiser, sem esperar uma Pausa ou Recuperação.

- **Nível de Poder máximo.** O herói só ativa poderes até o Nível de Poder máximo da tabela do seu Arquétipo.
- **Ativar num Nível de Poder maior.** Um poder pode ser ativado em qualquer Nível de Poder entre o seu nível base e o máximo do herói, aplicando o efeito "Em Níveis de Poder maiores" descrito no Capítulo 4. Quando o efeito maior só acrescenta alvos, ele é marcado com Nu (Ν).
- **Sem componentes.** Poderes não exigem palavras, gestos nem materiais. Basta o herói não estar incapacitado e ter a Ação necessária. Descrever como o poder se manifesta é livre.
- **Limites que continuam.** Tempo de ativação, Concentração (Κ), alcance e o número de poderes conhecidos ou preparados. Num mesmo turno, quem ativa um poder com Ação Rápida só pode ativar, com a Ação, uma Técnica de tempo de 1 Ação.
- **Nenhuma característica tem usos.** Um poder concedido por uma característica é ativado à vontade, com a Sobrecarga normal do seu Nível de Poder. Características limitadas que não são poderes são Características de Carga Heroica (veja abaixo).

## Sobrecarga (Eta, Η)

Poderes à vontade cobram um preço do corpo do herói. Na primeira vez que ele ativa um poder de um determinado Nível de Poder em uma cena, faz um **Teste de Sobrecarga**: um Teste de Integridade (Resistência) com **CD 11 + Nível de Poder** usado (veja a tabela acima). Técnicas nunca exigem o teste.

- **Sucesso:** o poder é ativado e aquele Nível de Poder fica liberado. Até o fim da cena, o herói ativa outros poderes do mesmo Nível de Poder sem novo teste.
- **Falha:** o poder é ativado, mas o herói ganha 1 nível de Exaustão Η ([Capítulo 1](#/regras/exaustao)). O Nível de Poder continua bloqueado, e a próxima ativação nele exige outro teste.

**Cena** é um combate, uma perseguição ou um desafio contínuo; o Mestre decide quando ela termina. Um poder ativado acima do seu nível base conta como o Nível de Poder usado: Toque Regenerador ativado no NP 3 pede o teste do NP 3 (CD 14).

:::widget sobrecarga
:::

### Características de Carga Heroica

Algumas características mostram um custo em Cargas Heroicas (por exemplo, "Surto de Ação {ch 1}"). Elas não têm um número fixo de usos: o herói as usa sempre que quiser, desde que pague o custo. A reserva de Cargas Heroicas, como ela se recupera e seus outros usos estão no [Capítulo 1](#/regras/cargas-heroicas).

- **Custo:** para usar a característica, o herói gasta o número de Cargas Heroicas indicado. Sem Cargas Heroicas suficientes, não pode usá-la.
- **Sem Sobrecarga:** Características de Carga Heroica não pedem Teste de Sobrecarga e não interferem nos Níveis de Poder liberados na cena. O custo é o mesmo em toda ativação; usar a característica de novo na mesma cena não fica mais difícil.
- **Poderes concedidos:** um poder concedido por uma característica não é uma Característica de Carga Heroica; ele segue a Sobrecarga normal do seu Nível de Poder.

# Engenheiro Tecnológico {#engenheiro-tecnologico img=arquetipos/engenheiro-tecnologico.jpg arquetipo}

O Engenheiro Tecnológico transforma inteligência em poder. Onde outros heróis nascem com dons ou os recebem de entidades, ele os constrói: armaduras de combate, armas de energia, drones, implantes, nanotecnologia e inteligências artificiais. Seus poderes não são milagres, são projetos.

No grupo, ele é o especialista em suporte e versatilidade. Melhora o equipamento dos aliados, resolve problemas com a ferramenta certa e, conforme a Especialização, atua na linha de frente, à distância ou como médico de campo.

**Poderes típicos:** armaduras, armas especiais, nanotecnologia, cibernética, drones, IA, gadgets e modificação de equipamentos.

:::ficha
- **Parâmetro principal:** Lógica
- **Testes de Integridade:** Resistência e Lógica
- **Matriz de Vitalidade:** d8
- **Especialização:** 3º nível
:::

**Fonte dos poderes.** Todo poder do Engenheiro é descrito como tecnologia. Um Toque Regenerador vira um spray de nanorrobôs médicos; um Marcador de Alvo vira um marcador de alvos por laser; um Voo vira propulsores nas botas. O efeito mecânico não muda.

## Progressão do Engenheiro Tecnológico

{tabela progressao}
| Nível | Prof. | Características | Aprim. | Itens | Téc. | Nível máx. |
|---|---|---|---|---|---|---|
| 1 | +2 | Bugigangas, Uso de Poderes | — | — | 2 | 1 |
| 2 | +2 | Aprimorar Equipamento | 4 | 2 | 2 | 1 |
| 3 | +2 | Especialização, Ferramenta Certa | 4 | 2 | 2 | 1 |
| 4 | +2 | Evolução | 4 | 2 | 2 | 1 |
| 5 | +3 | Característica de Especialização | 4 | 2 | 2 | 2 |
| 6 | +3 | Especialista em Ferramentas | 6 | 3 | 2 | 2 |
| 7 | +3 | Lampejo de Genialidade | 6 | 3 | 2 | 2 |
| 8 | +3 | Evolução | 6 | 3 | 2 | 2 |
| 9 | +4 | Característica de Especialização | 6 | 3 | 2 | 3 |
| 10 | +4 | Adepto da Tecnologia | 8 | 4 | 3 | 3 |
| 11 | +4 | Dispositivo Programado | 8 | 4 | 3 | 3 |
| 12 | +4 | Evolução | 8 | 4 | 3 | 3 |
| 13 | +5 | — | 8 | 4 | 3 | 4 |
| 14 | +5 | Sábio da Tecnologia | 10 | 5 | 4 | 4 |
| 15 | +5 | Característica de Especialização | 10 | 5 | 4 | 4 |
| 16 | +5 | Evolução | 10 | 5 | 4 | 4 |
| 17 | +6 | — | 10 | 5 | 4 | 5 |
| 18 | +6 | Mestre da Tecnologia | 12 | 6 | 4 | 5 |
| 19 | +6 | Evolução | 12 | 6 | 4 | 5 |
| 20 | +6 | Apoteose: Alma da Máquina | 12 | 6 | 4 | 5 |

## Características do Arquétipo

- **Pontos de Vida:** 24 + modificador de Resistência
- **Níveis seguintes:** 8 + modificador de Resistência
- **Matriz de Vitalidade:** d8

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo, Armas de Fogo e Blindagem Leve
- **Ferramentas:** kit de invasão, kit de eletrônica e um kit de ofício à escolha
- **Integridade:** Resistência e Lógica
- **Perícias:** escolha duas entre Ocultismo, Ciências, História, Investigação, Medicina, Natureza, Percepção, Prestidigitação e Tecnologia

### Uso de Poderes (1º nível)

O Engenheiro ativa poderes por meio de dispositivos: um kit de invasão, um kit de ofício ou um item que ele aprimorou servem de Foco de Poder, se ele quiser usar um.

- **Parâmetro de poder:** Lógica
- **CD de Poder:** 8 + Bônus de Proficiência + modificador de Lógica
- **Jogada de Ataque de Poder:** Bônus de Proficiência + modificador de Lógica
- **Técnicas:** conhece 2 no 1º nível e mais conforme a tabela. Ao subir de nível, pode trocar uma por outra.
- **Poderes preparados:** após uma Recuperação, prepara um número de poderes igual ao modificador de Lógica + metade do nível de Engenheiro (arredondado para baixo, mínimo 1).
- **Rituais:** pode ativar como ritual qualquer poder preparado que tenha a marca Tau (Τ) de ritual.
- **À vontade:** qualquer poder preparado pode ser ativado sem limite de usos, até o Nível de Poder máximo da tabela (veja Poderes à Vontade).

## Características por nível

### Bugigangas (1º nível)

Com um kit de invasão ou de ofício em mãos, o Engenheiro instala um microdispositivo em um objeto Minúsculo comum. O objeto ganha uma propriedade à escolha:

- emite luz plena em 1,5 m e penumbra por mais 1,5 m;
- reproduz uma mensagem gravada de até 6 segundos, audível a 3 m, quando tocado;
- emite continuamente um odor ou um som não verbal, perceptível a 3 m;
- exibe na superfície uma imagem estática, como um símbolo ou até 25 palavras.

A propriedade dura indefinidamente. O número de objetos ativos ao mesmo tempo é igual ao modificador de Lógica (mínimo 1); ao passar do limite, o mais antigo para de funcionar. Uma Ação desliga a propriedade de um objeto.

### Aprimorar Equipamento (2º nível)

O Engenheiro conhece projetos de Aprimoramentos que transformam objetos comuns em itens especiais. Ele aprende 4 Aprimoramentos e mais conforme a tabela; ao subir de nível, pode trocar um deles por outro.

Ao fim de uma Recuperação, ele toca um objeto comum e instala um Aprimoramento, que o torna um item especial. Cada objeto recebe só um Aprimoramento, e cada Aprimoramento só pode estar em um objeto por vez. Se o item exige Vínculo, ele pode ser vinculado assim que fica pronto.

O número máximo de itens aprimorados é o da coluna "Itens". Ao passar do limite, o Aprimoramento mais antigo se desliga. Se o Engenheiro morrer, os Aprimoramentos se desligam após um número de dias igual ao seu modificador de Lógica (mínimo 1). Desligar um Aprimoramento não destrói o objeto. Itens aprimorados também servem como Foco de Poder.

Veja a lista em [Aprimoramentos](#/arquetipos/engenheiro-tecnologico/aprimoramentos).

### Especialização Tecnológica (3º nível)

O Engenheiro escolhe uma Especialização, descrita mais adiante. Ela concede características no 3º, 5º, 9º e 15º níveis.

### Ferramenta Certa (3º nível)

Com um kit de invasão ou de ofício em mãos, o Engenheiro fabrica um kit de ofício comum à escolha em um espaço livre a até 1,5 m. A fabricação leva 1 hora sem interrupção e pode coincidir com uma Pausa ou Recuperação. O kit desaparece se ele usar esta característica de novo.

### Evolução (4º, 8º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois Parâmetros, até o máximo de 20, ou um Talento.

### Especialista em Ferramentas (6º nível)

O Bônus de Proficiência é dobrado em Testes de Parâmetro com ferramentas em que o Engenheiro é proficiente.

### Lampejo de Genialidade (7º nível) {ch 4}

Quando o Engenheiro, ou uma criatura que ele vê a até 9 m, faz um Teste de Parâmetro ou de Integridade, ele pode usar a Reação para somar o seu modificador de Lógica ao resultado. Pode ser um alerta no comunicador, um cálculo da IA ou um gadget lançado na hora certa.

### Adepto da Tecnologia (10º nível)

O Engenheiro pode manter Vínculo com até 4 itens ao mesmo tempo. Fabricar um item especial comum ou incomum leva 1/4 do tempo e custa metade do preço normal.

### Dispositivo Programado (11º nível)

Ao fim de uma Recuperação, o Engenheiro programa uma arma ou um Foco de Poder com um poder de NP 1 ou 2 que se ative com 1 Ação. Não precisa estar preparado. Qualquer criatura que segure o item pode usar uma Ação para ativar o poder à vontade, usando o modificador de Lógica do Engenheiro; quem ativa faz o Teste de Sobrecarga normal daquele NP. O item perde a programação quando o Engenheiro programa outro.

### Sábio da Tecnologia (14º nível)

O limite de Vínculos sobe em 1 (para 5). O Engenheiro ignora todos os requisitos de Arquétipo, Origem, poder e nível para usar ou se vincular a itens especiais.

### Mestre da Tecnologia (18º nível)

O limite de Vínculos sobe em 1 (para 6).

### Apoteose: Alma da Máquina (20º nível)

O Engenheiro ganha +1 em todos os Testes de Integridade para cada item com que tem Vínculo. Além disso, quando cai a 0 pontos de vida sem morrer na hora, pode usar a Reação para desligar um dos seus Aprimoramentos e ficar com 1 ponto de vida.

## Especializações

No 3º nível, o Engenheiro escolhe uma das quatro Especializações. Ela concede características no 3º, 5º, 9º e 15º níveis. Cada uma concede proficiência com uma ferramenta e poderes sempre preparados, que não contam no limite de poderes preparados.

| Especialização | Papel |
|---|---|
| Engenheiro Bioquímico | Suporte e Cura com soros e compostos |
| Engenheiro Blindado | Linha de frente ou infiltração dentro de um traje |
| Engenheiro Atirador | Dano à distância e controle com torretas |
| Engenheiro de Campo | Combate corpo a corpo ao lado de um drone |

:::tabs
### Engenheiro Bioquímico {img=arquetipos/engenheiro-bioquimico.jpg}

*Cientista de laboratório que transforma química e biotecnologia em soros, gases e antídotos.*

**Ferramenta (3º).** Proficiência com kit de laboratório. Se já tiver, escolhe outro kit de ofício.

**Soro Experimental (3º) ({ch 1}).** Ao fim de uma Recuperação, cria um soro em uma ampola vazia (dois no 6º nível e três no 15º). Role 1d6 para o efeito (tabela abaixo). Com o kit de laboratório em mãos, pode criar soros extras, escolhendo o efeito; o custo vale para cada soro extra. Beber ou dar o soro a outra criatura custa 1 Ação. O soro perde o efeito na próxima Recuperação.

**Especialista em Compostos (5º).** Ao ativar um poder usando o kit de laboratório como foco, soma o modificador de Lógica (mínimo +1) a uma rolagem de Cura ou de Dano de Ácido, fogo, necrótico ou veneno.

**Reagentes Restauradores (9º).** Quem bebe um Soro Experimental também ganha 2d6 + mod. de Lógica de PV temporários. Além disso, pode ativar Purificar Condição à vontade (Sobrecarga normal), sem precisar prepará-lo, usando o kit de laboratório como foco.

**Química Absoluta (15º).** Resistência a Dano de Ácido e de veneno e imunidade à condição envenenado. Pode ativar Restauração Total e Cura Completa à vontade (Sobrecarga normal), sem precisar prepará-los, usando o kit de laboratório como foco.

{tabela rolavel}
| d6 | Soro Experimental |
|---|---|
| 1 | **Cura:** recupera 2d4 + mod. de Lógica PV |
| 2 | **Velocidade:** +3 m de Deslocamento por 1 hora |
| 3 | **Resiliência:** +1 na CA por 10 minutos |
| 4 | **Coragem:** +1d4 em ataques e Testes de Integridade por 1 minuto |
| 5 | **Voo:** Deslocamento de voo de 3 m por 10 minutos |
| 6 | **Transformação:** efeito de Mutação Pessoal por 10 minutos |

**Poderes do Engenheiro Bioquímico.**

| Nível | Poderes |
|---|---|
| 3º | Impulso Regenerador, Raio Tóxico |
| 5º | Esfera de Plasma, Projétil Ácido |
| 9º | Forma Gasosa, Impulso Regenerador em Massa |
| 13º | Drenagem Vital, Última Chance |
| 17º | Nuvem Letal, Ressuscitar |

### Engenheiro Blindado {img=arquetipos/engenheiro-blindado.jpg}

*O herói dentro de um traje tecnológico que ele mesmo projetou e aperfeiçoa sem parar.*

**Ferramenta (3º).** Treinamento em Blindagem Pesada e proficiência com kit de fabricação. Se já tiver o kit, escolhe outro kit de ofício.

**Traje Tecnológico (3º).** Com um kit de fabricação, transforma a armadura que veste em um traje tecnológico. Enquanto o usa:

- ignora o requisito de Potência da armadura;
- pode usá-la como Foco de Poder;
- ela se prende ao corpo, substitui membros ausentes e não pode ser removida contra a vontade;
- veste ou remove o traje com 1 Ação.

O traje continua assim até ele vestir outra armadura ou morrer.

**Modelo do Traje (3º).** Escolha um modelo; pode trocar ao fim de uma Pausa ou Recuperação, usando o kit de fabricação. As armas do modelo usam o mod. de Lógica no ataque e no dano e contam como armas para as quais ele tem Treinamento.

- **Guardião.** *Manoplas Sônicas:* arma corpo a corpo, 1d8 de Dano de Trovão; a criatura atingida tem Desvantagem em ataques contra alvos que não sejam o herói até o início do próximo turno dele. *Campo Defensivo ({ch 1}):* com uma Ação Rápida, ganha PV temporários iguais ao nível de Engenheiro.
- **Infiltrador.** *Lançador de Raios:* arma à distância, alcance 27/90 m, 1d6 de Dano Elétrico; uma vez por turno, ao acertar, causa +1d6 de Dano Elétrico. *Propulsores:* +1,5 m de Deslocamento a pé. *Campo de Amortecimento:* Vantagem em Furtividade; se a armadura impuser Desvantagem em Furtividade, Vantagem e Desvantagem se anulam.

**Ataque Extra (5º).** Ataca duas vezes ao usar a Ação Atacar.

**Modificações do Traje (9º).** Para receber Aprimoramentos, o traje conta como quatro itens separados: peitoral, botas, capacete e a arma especial do modelo. O limite de itens aprimorados sobe em 2, mas os 2 extras precisam ser partes do traje.

**Traje Aperfeiçoado (15º).**

- **Guardião ({ch 8}):** quando uma criatura Enorme ou menor termina o turno a até 9 m, ele pode usar a Reação para forçá-la a fazer um Teste de Integridade (Potência) contra a CD de Poder. Se falhar, ela é puxada até 7,5 m na direção dele. Se parar a até 1,5 m, ele pode fazer uma Jogada de Ataque Corpo a Corpo com arma contra ela como parte da Reação.
- **Infiltrador:** a criatura que sofre dano do Lançador de Raios brilha até o início do próximo turno dele. Ela emite penumbra em 1,5 m, tem Desvantagem em ataques contra ele, e o próximo ataque contra ela tem Vantagem e causa +1d6 de Dano Elétrico se acertar.

**Poderes do Engenheiro Blindado.**

| Nível | Poderes |
|---|---|
| 3º | Mísseis de Energia, Onda de Choque |
| 5º | Cópias Holográficas, Pulso Sônico |
| 9º | Padrão Hipnótico, Relâmpago |
| 13º | Escudo Térmico, Invisibilidade Total |
| 17º | Passagem, Muralha de Força |

### Engenheiro Atirador {img=arquetipos/engenheiro-atirador.jpg}

*Especialista em armamento pesado, que monta torretas no meio do combate e dispara rajadas de energia.*

**Ferramenta (3º).** Proficiência com kit de montagem. Se já tiver, escolhe outro kit de ofício.

**Torreta (3º) ({ch 1}).** Com 1 Ação e um kit de montagem ou de fabricação, monta uma torreta Pequena ou Minúscula em um espaço livre a até 1,5 m. Só pode ter uma torreta por vez.

- **Estatísticas:** CA 18; PV iguais a 5 × nível de Engenheiro; Imune a Dano de Veneno e psíquico. Reparo Rápido restaura 2d6 PV.
- **Duração:** 1 hora, até cair a 0 PV ou até ser desmontada com 1 Ação.
- **Comando:** com uma Ação Rápida, estando a até 18 m, ativa a torreta. Se ela tiver pernas, pode andar até 4,5 m antes de agir.

Ao montar, escolha o tipo (tabela abaixo).

| Tipo de Torreta | Efeito ao ser ativada |
|---|---|
| **Lança-chamas** | Cone de 4,5 m; Teste de Integridade (Reflexos); 2d8 de Dano de Fogo (metade se passar) e incendeia objetos inflamáveis soltos |
| **Canhão de Força** | Jogada de Ataque de Poder à Distância contra alvo a até 36 m; 2d8 de Dano de Energia e empurra 1,5 m |
| **Gerador de Escudo** | Ela e cada criatura escolhida a até 3 m ganham 1d8 + mod. de Lógica (mínimo +1) de PV temporários |

**Arma de Energia (5º).** Ao fim de uma Recuperação, transforma um bastão, uma luva ou um emissor portátil em arma de energia, que pode servir de Foco de Poder. Ao ativar um poder por ela, rola 1d8 e soma o resultado a uma rolagem de dano do poder.

**Torreta Explosiva (9º).** As rolagens de dano da torreta aumentam em 1d8. Com 1 Ação, a até 18 m dela, pode detoná-la: cada criatura a até 6 m faz um Teste de Integridade (Reflexos) e sofre 3d8 de Dano de Energia (metade se passar). A torreta é destruída.

**Posição Fortificada (15º).** Pode ter duas torretas ao mesmo tempo, montar as duas com a mesma Ação (pagando o custo da Torreta por cada uma) e ativar ambas com a mesma Ação Rápida. Aliados a até 3 m de uma torreta têm meia cobertura.

**Poderes do Engenheiro Atirador.**

| Nível | Poderes |
|---|---|
| 3º | Escudo Reflexo, Onda de Choque |
| 5º | Raios Térmicos, Pulso Sônico |
| 9º | Bola de Fogo, Muralha de Vento |
| 13º | Nevasca, Muralha de Fogo |
| 17º | Cone Criogênico, Muralha de Força |

### Engenheiro de Campo {img=arquetipos/engenheiro-de-campo.jpg}

*Combatente que luta lado a lado com um drone que ele mesmo construiu e que também faz reparos no meio da batalha.*

**Ferramenta (3º).** Proficiência com o kit de fabricação. Se já tiver, escolhe outro kit de ofício.

**Pronto para a Luta (3º).** Treinamento em Armamento Pesado. Com armas especiais, pode usar o mod. de Lógica em vez de Potência ou Reflexos no ataque e no dano.

**Drone de Combate (3º).** Constrói um drone Médio que o obedece. Ele age no turno do Engenheiro, logo após ele, e só faz a Ação Esquivar se não receber ordem; dar uma ordem custa uma Ação Rápida. Se o Engenheiro estiver incapacitado, o drone age por conta própria.

:::bloco Drone de Combate
**CA** 15 · **PV** 2 + mod. de Lógica + 5 × nível de Engenheiro · **Deslocamento** 12 m

| POT | REF | RES | LOG | ESP | MAG |
|---|---|---|---|---|---|
| 14 | 12 | 14 | 4 | 10 | 6 |

Imune a Dano de Veneno e às condições dominado, exausto e envenenado; visão no escuro de 18 m; não pode ser surpreendido.

- **Golpe de Energia (Ação):** Jogada de Ataque Corpo a Corpo com o bônus de Jogada de Ataque de Poder do Engenheiro; 1d8 + Bônus de Proficiência de Dano de Energia.
- **Reparo (Ação) ({ch 1}):** restaura 2d8 + Bônus de Proficiência de PV a si mesmo ou a um constructo ou objeto a até 1,5 m. As Cargas Heroicas são gastas pelo Engenheiro.
- **Desviar Ataque (Reação):** impõe Desvantagem a um ataque contra outra criatura a até 1,5 m dele.
:::

Reparo Rápido restaura 2d6 PV ao drone. **Religar ({ch 1}):** se o drone foi destruído há menos de 1 hora, o Engenheiro pode, com 1 Ação e o kit de fabricação, religá-lo após 1 minuto, com todos os PV. Ao fim de uma Recuperação, pode construir um drone novo, e o anterior se desliga.

**Ataque Extra (5º).** Ataca duas vezes ao usar a Ação Atacar.

**Descarga (9º) ({ch 5}).** Uma vez por turno, quando ele acerta um alvo com uma arma especial ou o drone acerta com o Golpe de Energia, pode escolher um efeito:

- **Dano:** o alvo sofre +2d6 de Dano de Energia.
- **Reparo:** uma criatura ou objeto a até 9 m do alvo recupera 2d6 PV.

**Drone Aprimorado (15º).** A Descarga passa a 4d6. O drone ganha +2 na CA, e sempre que usa Desviar Ataque o atacante sofre 1d4 + mod. de Lógica de Dano de Energia.

**Poderes do Engenheiro de Campo.**

| Nível | Poderes |
|---|---|
| 3º | Coragem Heroica, Escudo Reflexo |
| 5º | Golpe Revelador, Elo Protetor |
| 9º | Aura Revigorante, Saraivada |
| 13º | Aura de Pureza, Escudo Térmico |
| 17º | Golpe de Exílio, Regeneração em Massa |
:::

## Aprimoramentos

Os 16 Aprimoramentos estão abaixo, em ordem de nível mínimo.

{tabela filtro}
| Aprimoramento | Nível | Item | Vínculo | Efeito |
|---|---|---|---|---|
| Arma Aprimorada | 2º | Qualquer arma | Não | +1 no ataque e no dano (+2 no 10º) |
| Arma Bumerangue | 2º | Arma de arremesso | Não | +1 no ataque e no dano; volta à mão após o arremesso |
| Blindagem Reforçada | 2º | Armadura ou escudo | Não | +1 na CA (+2 no 10º) |
| Estabilizador Neural | 2º | Armadura ou roupa | Não | 4 usos; transforma uma falha de Concentração em sucesso |
| Exoesqueleto de Força | 2º | Armadura | Sim | 6 usos; soma Lógica a Testes de Parâmetro (Potência) ou evita ser derrubado |
| Foco Calibrado | 2º | Bastão, luva ou emissor portátil | Sim | +1 em Jogadas de Ataque de Poder e ignora meia cobertura (+2 no 10º) |
| Microdrone Assistente | 2º | Joia ou cristal de 100 cr | Não | Cria um pequeno constructo que ajuda e entrega poderes de toque |
| Munição Infinita | 2º | Arma com munição | Sim | +1 no ataque e no dano; gera a própria munição e ignora recarga |
| Replicar Item Especial | 2º+ | Varia | Varia | Fabrica um item da tabela de Itens Replicáveis ([Capítulo 6](#/equipamento/itens-especiais)) disponível no nível do Engenheiro |
| Anel de Sobrecarga | 6º | Anel | Sim | 3 usos. Com uma Ação Rápida, gasta 1 uso para liberar na cena um Nível de Poder de até NP 3, sem Teste de Sobrecarga. Recupera 1d3 cargas ao amanhecer |
| Arma de Luz | 6º | Qualquer arma | Sim | +1 no ataque e no dano; emite luz; usos para cegar quem acertar o portador |
| Blindagem Resistente | 6º | Armadura | Sim | Resistência a um tipo de dano escolhido |
| Botas de Teleporte | 6º | Botas | Sim | Ação Rápida: teleporta até 4,5 m de volta para um espaço que ocupou neste turno |
| Escudo de Repulsão | 6º | Escudo | Sim | +1 na CA; usos para empurrar o atacante 4,5 m |
| Capacete Sensor | 10º | Capacete | Sim | Vantagem na Iniciativa; não pode ser surpreendido |
| Armadura de Propulsão | 14º | Armadura | Sim | +1,5 m de Deslocamento; manoplas que disparam energia e retornam; substitui membros |

# Fúria Incontrolável {#furia-incontrolavel img=arquetipos/furia-incontrolavel.jpg arquetipo}

A Fúria Incontrolável é o herói que fica mais forte quanto mais apanha. Quando a raiva toma conta, os músculos crescem, a pele endurece e a dor deixa de importar. Ele pode ser um monstro de laboratório, um mutante indestrutível, um alienígena de força absurda ou só alguém que se recusa a cair.

No grupo, ele é o tanque e o ponto de impacto: entra primeiro, aguenta o castigo e derruba o que estiver na frente.

**Poderes típicos:** superforça, super-resistência, regeneração, crescimento, transformação, fúria e poder físico descomunal.

:::ficha
- **Parâmetro principal:** Potência
- **Testes de Integridade:** Potência e Resistência
- **Matriz de Vitalidade:** d12
- **Especialização:** 3º nível
:::

**Fúria e poderes.** A Fúria é uma Característica de Carga Heroica, não um poder: entrar em Fúria gasta Cargas Heroicas, não pede Teste de Sobrecarga e não libera nem bloqueia Níveis de Poder. Enquanto está em Fúria, porém, o herói não ativa nem mantém Concentração em poderes.

## Progressão da Fúria Incontrolável

{tabela progressao}
| Nível | Prof. | Características | Dano |
|---|---|---|---|
| 1 | +2 | Fúria, Pele Resistente | +2 |
| 2 | +2 | Ataque Descontrolado, Sentido de Perigo | +2 |
| 3 | +2 | Especialização, Instinto Aprendido | +2 |
| 4 | +2 | Evolução | +2 |
| 5 | +3 | Ataque Extra, Passo Acelerado | +2 |
| 6 | +3 | Característica de Especialização | +2 |
| 7 | +3 | Instinto Feroz, Investida Instintiva | +2 |
| 8 | +3 | Evolução | +2 |
| 9 | +4 | Crítico Devastador (1 dado) | +3 |
| 10 | +4 | Característica de Especialização, Instinto Aprendido | +3 |
| 11 | +4 | Fúria Implacável | +3 |
| 12 | +4 | Evolução | +3 |
| 13 | +5 | Crítico Devastador (2 dados) | +3 |
| 14 | +5 | Característica de Especialização | +3 |
| 15 | +5 | Fúria Persistente | +3 |
| 16 | +5 | Evolução | +4 |
| 17 | +6 | Crítico Devastador (3 dados) | +4 |
| 18 | +6 | Potência Indomável | +4 |
| 19 | +6 | Evolução | +4 |
| 20 | +6 | Apoteose: Ápice Físico | +4 |

## Características do Arquétipo

- **Pontos de Vida:** 36 + modificador de Resistência
- **Níveis seguintes:** 12 + modificador de Resistência
- **Matriz de Vitalidade:** d12

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo, Armas de Fogo, Armamento Pesado e Blindagem Leve
- **Ferramentas:** nenhuma
- **Integridade:** Potência e Resistência
- **Perícias:** escolha duas entre Adestrar Animais, Atletismo, Intimidação, Natureza, Percepção e Sobrevivência

## Características por nível

### Fúria (1º nível) {ch 1}

Com uma Ação Rápida, o herói entra em Fúria, desde que não esteja usando armadura pesada. Durante a Fúria:

- tem Vantagem em Testes de Parâmetro (Potência) e Testes de Integridade (Potência);
- soma o bônus de dano da Fúria (coluna "Dano" da tabela) às Jogadas de Ataque Corpo a Corpo que usam Potência;
- tem Resistência a Dano de Concussão, perfurante e cortante;
- não pode ativar poderes nem manter Concentração neles.

A Fúria dura 1 minuto. Termina antes se o herói ficar inconsciente ou se um turno dele acabar sem que tenha atacado uma criatura hostil nem sofrido dano desde o turno anterior. Ele também pode encerrá-la com uma Ação Rápida.

### Pele Resistente (1º nível)

Sem armadura, a CA é 10 + modificador de Reflexos + modificador de Resistência. Pode usar escudo e manter o benefício.

### Ataque Descontrolado (2º nível)

No primeiro ataque do turno, o herói pode atacar sem se proteger. Ele ganha Vantagem nas Jogadas de Ataque Corpo a Corpo com Potência neste turno, mas ataques contra ele têm Vantagem até o seu próximo turno.

### Sentido de Perigo (2º nível)

Vantagem em Testes de Integridade (Reflexos) contra efeitos que consegue ver, como armadilhas, explosões e poderes. Não funciona se estiver cego, surdo ou incapacitado.

### Especialização de Fúria (3º nível)

O herói escolhe uma Especialização, descrita mais adiante, que concede características no 3º, 6º, 10º e 14º níveis.

### Instinto Aprendido (3º e 10º níveis)

Ganha proficiência em uma perícia entre as que o Arquétipo oferece no 1º nível. No 10º nível, ganha outra, diferente da primeira.

### Evolução (4º, 8º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até o máximo de 20. Pode ser trocada por um Talento.

### Ataque Extra (5º nível)

Ataca duas vezes ao usar a Ação Atacar.

### Passo Acelerado (5º nível)

+3 m de Deslocamento quando não está usando armadura pesada.

### Instinto Feroz (7º nível)

Vantagem nas rolagens de Iniciativa. Se for surpreendido e não estiver incapacitado, pode agir normalmente no primeiro turno, desde que entre em Fúria antes de qualquer outra coisa.

### Investida Instintiva (7º nível)

Ao entrar em Fúria, pode se mover até metade do Deslocamento como parte da mesma Ação Rápida.

### Crítico Devastador (9º, 13º e 17º níveis)

Num acerto crítico corpo a corpo, rola 1 dado de dano da arma a mais. Sobe para 2 dados no 13º e 3 dados no 17º.

### Fúria Implacável (11º nível)

Se cair a 0 PV durante a Fúria sem morrer na hora, faz um Teste de Integridade (Resistência) com CD 10. Se passar, fica com 1 PV. Cada uso seguinte aumenta a CD em 5; a CD volta a 10 após uma Pausa ou Recuperação.

### Fúria Persistente (15º nível)

A Fúria só termina antes do tempo se o herói ficar inconsciente ou decidir encerrá-la.

### Potência Indomável (18º nível)

Se o total de um Teste de Parâmetro (Potência) for menor que o valor de Potência do herói, ele usa o valor no lugar do total.

### Apoteose: Ápice Físico (20º nível)

Potência e Resistência aumentam em 4, e o máximo desses Parâmetros passa a ser 24. Além disso, a Fúria deixa de ser uma Característica de Carga Heroica: entrar em Fúria não gasta mais Cargas Heroicas.

## Especializações

No 3º nível, o herói escolhe uma das nove Especializações. Elas definem de onde vem a fúria e o que ela faz com o corpo.

| Especialização | Papel |
|---|---|
| Fúria Frenética | Dano máximo a qualquer custo |
| Fúria Bestial | Tanque ou batedor, conforme o animal |
| Fúria Ancestral | Protetor que pune quem ataca aliados |
| Fúria Tempestuosa | Aura elemental de dano ou proteção |
| Fúria Imortal | Difícil de matar, dano extra radiante ou necrótico |
| Fúria de Espinhos | Luta agarrada com armadura cravejada |
| Fúria Selvagem | Garras, presas e cauda naturais |
| Fúria Instável | Efeitos aleatórios a cada Fúria |
| Fúria Colossal | Cresce de tamanho e arremessa inimigos |

:::tabs
### Fúria Frenética {img=arquetipos/furia-frenetica.jpg}

*A fúria sem freio de quem não se importa com o próprio corpo.*

**Frenesi (3º).** Ao entrar em Fúria, pode entrar em frenesi. Durante essa Fúria, pode fazer uma Jogada de Ataque Corpo a Corpo com arma como Ação Rápida em cada turno. Quando a Fúria termina, ganha 1 nível de Exaustão.

**Fúria Cega (6º).** Imune a ficar dominado ou amedrontado durante a Fúria. Esses efeitos, se já existiam, ficam suspensos até ela acabar.

**Presença Aterradora (10º).** Com 1 Ação, amedronta uma criatura a até 9 m que o veja ou ouça (Teste de Integridade (Espírito), CD 8 + Bônus de Proficiência + Magnetismo) até o fim do próximo turno dela. Pode estender o efeito com uma Ação a cada turno. Quem passa no teste fica imune por 24 horas.

**Retaliação (14º).** Quando sofre dano de uma criatura a até 1,5 m, pode usar a Reação para fazer uma Jogada de Ataque Corpo a Corpo com arma contra ela.

### Fúria Bestial {img=arquetipos/furia-bestial.jpg}

*O herói carrega a essência de um animal, seja por DNA alterado, por um elo místico ou por uma mutação. Em cada nível de escolha, pode pegar o mesmo animal ou outro.*

**Elo Selvagem (3º).** Pode ativar Sentidos Emprestados e Linguagem Animal à vontade, como rituais (Sobrecarga normal).

**Aspecto de Combate (3º).** Durante a Fúria, ganha o efeito do animal escolhido:

- **Urso:** resistência a todo dano, exceto psíquico.
- **Águia:** Contra-ataques contra ele têm Desvantagem, e pode Disparar como Ação Rápida.
- **Alce:** +4,5 m de Deslocamento.
- **Tigre:** +3 m no salto em distância e +90 cm no salto em altura.
- **Lobo:** aliados têm Vantagem em Jogadas de Ataque Corpo a Corpo contra inimigos a até 1,5 m dele.

**Traço da Fera (6º).** Sempre ativo, conforme o animal escolhido:

- **Urso:** capacidade de carga dobrada e Vantagem em Testes de Parâmetro (Potência) para empurrar, puxar, erguer ou quebrar.
- **Águia:** enxerga nítido até 1,6 km, e a penumbra não atrapalha a Percepção.
- **Alce:** ritmo de viagem dobrado para ele e até 10 aliados.
- **Tigre:** proficiência em duas entre Atletismo, Acrobacia, Furtividade e Sobrevivência.
- **Lobo:** rastreia em ritmo rápido e se move furtivamente em ritmo normal.

**Vozes da Natureza (10º).** Pode ativar Leitura Ambiental à vontade, como ritual (Sobrecarga normal); os animais da região entregam a informação.

**Avatar Supremo (14º).** Durante a Fúria, ganha o efeito do animal escolhido:

- **Urso:** inimigos a até 1,5 m têm Desvantagem para atacar outros alvos.
- **Águia:** Deslocamento de voo igual ao Deslocamento, mas cai se terminar o turno no ar.
- **Alce:** com uma Ação Rápida, atravessa criaturas Grandes ou menores; elas fazem Teste de Integridade (Potência) ou caem e sofrem 1d12 + Potência de Dano de Concussão.
- **Tigre:** depois de correr 6 m em linha reta até um alvo, faz um ataque extra como Ação Rápida.
- **Lobo:** ao acertar, derruba uma criatura Grande ou menor como Ação Rápida.

### Fúria Ancestral {img=arquetipos/furia-ancestral.jpg}

*Ecos de heróis do passado, ou de vidas anteriores, lutam ao lado dele.*

**Protetores Ancestrais (3º).** Durante a Fúria, a primeira criatura que ele acerta no turno é cercada por guerreiros espectrais. Até o próximo turno dele, ela tem Desvantagem em ataques contra outros alvos, e quem ela acertar tem resistência a esse dano.

**Escudo Ancestral (6º).** Durante a Fúria, quando um aliado a até 9 m sofre dano, pode usar a Reação para reduzir o dano em 2d6 (3d6 no 10º, 4d6 no 14º).

**Memória Ancestral (10º).** Pode ativar Pressentimento ou Clarividência à vontade (Sobrecarga normal), usando Espírito. Na Clarividência, um eco ancestral invisível substitui o sensor.

**Ancestrais Vingativos (14º).** Quando o Escudo Ancestral reduz um dano, o atacante sofre Dano de Energia igual ao valor reduzido.

### Fúria Tempestuosa {img=arquetipos/furia-tempestuosa.jpg}

*A Fúria desperta uma tempestade ao redor do herói. Escolha um ambiente ao ganhar a Especialização; pode trocá-lo ao subir de nível. A CD dos efeitos é 8 + Bônus de Proficiência + Resistência.*

**Aura da Tempestade (3º).** Durante a Fúria, emana uma aura de 3 m. O efeito acontece ao entrar em Fúria e pode ser repetido com uma Ação Rápida a cada turno:

- **Calor (Deserto):** cada outra criatura na aura sofre 2 de Dano de Fogo (3 no 5º, 4 no 10º, 5 no 15º, 6 no 20º).
- **Raio (Mar):** uma criatura na aura faz Teste de Integridade (Reflexos) ou sofre 1d6 de Dano Elétrico, metade se passar (2d6 no 10º, 3d6 no 15º, 4d6 no 20º).
- **Gelo (Tundra):** o herói e aliados escolhidos na aura ganham 2 PV temporários (3 no 5º, 4 no 10º, 5 no 15º, 6 no 20º).

**Alma da Tempestade (6º).** Conforme o ambiente:

- **Calor:** Resistência a Dano de Fogo, imune a calor extremo e pode incendiar objetos inflamáveis ao toque.
- **Raio:** Resistência a Dano Elétrico, respira na água e nada a 9 m.
- **Gelo:** Resistência a Dano de Frio, imune a frio extremo e congela água ao toque.

**Tempestade Protetora (10º).** Aliados escolhidos na aura ganham a mesma resistência da Alma da Tempestade.

**Tempestade Furiosa (14º).** Conforme o ambiente:

- **Calor:** quando uma criatura na aura o acerta, pode usar a Reação para forçá-la a um Teste de Integridade (Reflexos); se falhar, sofre Dano de Fogo igual à metade do nível do herói.
- **Raio:** ao acertar uma criatura na aura, pode usar a Reação para forçá-la a um Teste de Integridade (Potência); se falhar, cai.
- **Gelo:** ao ativar a aura, uma criatura nela faz Teste de Integridade (Potência); se falhar, fica com Deslocamento 0 até o próximo turno dele.

### Fúria Imortal {img=arquetipos/furia-imortal.jpg}

*Uma força maior não deixa o herói morrer, ou ele simplesmente se recusa.*

**Fúria Transcendente (3º).** Durante a Fúria, a primeira criatura que ele acerta com arma em cada turno sofre 1d6 + metade do nível de Dano Radiante ou necrótico (escolhido ao ganhar a característica).

**Destinado a Voltar (3º).** Quando um poder o traz de volta à vida, ele volta com metade dos PV máximos e sem as penalidades do poder.

**Foco Obstinado (6º) ({ch 3}).** Durante a Fúria, se falhar num Teste de Integridade, pode rolá-lo de novo e usar o novo resultado.

**Presença Inspiradora (10º) ({ch 5}).** Com uma Ação Rápida, até 10 criaturas a até 18 m que o ouçam ganham Vantagem em ataques e Testes de Integridade até o início do próximo turno dele.

**Fúria além da Morte (14º).** Durante a Fúria, chegar a 0 PV não o deixa inconsciente. Ele ainda faz Testes de Estabilização e sofre os efeitos de dano a 0 PV, mas só morre quando a Fúria terminar e se ainda estiver a 0 PV.

### Fúria de Espinhos {img=arquetipos/furia-dos-espinhos.jpg}

*Um brigão coberto de espinhos, de metal ou do próprio corpo. Qualquer Origem pode seguir este caminho.*

**Armadura de Espinhos (3º).** Usa a armadura cravejada (coberta por Blindagem Leve). Durante a Fúria e usando-a, pode fazer um ataque com os espinhos como Ação Rápida contra uma criatura a até 1,5 m (1d4 + Potência de Dano Perfurante). Ao vencer um teste para agarrar, causa 3 de Dano Perfurante.

**Abandono Imprudente (6º).** Ao usar Ataque Descontrolado durante a Fúria, ganha PV temporários iguais ao modificador de Resistência (mínimo 1), que somem quando a Fúria termina.

**Investida Furiosa (10º).** Durante a Fúria, pode Disparar como Ação Rápida.

**Retribuição Espinhosa (14º).** Durante a Fúria e usando a armadura, uma criatura a até 1,5 m que o acerte com Jogada de Ataque Corpo a Corpo sofre 3 de Dano Perfurante.

### Fúria Selvagem {img=arquetipos/furia-selvagem.jpg}

*A Fúria liberta uma mutação animal.*

**Forma da Fera (3º).** Ao entrar em Fúria, escolhe uma arma natural, usada com Potência:

- **Mordida:** 1d8 de Dano Perfurante. Uma vez por turno, se estiver abaixo da metade dos PV, recupera PV iguais ao Bônus de Proficiência ao causar dano.
- **Garras:** 1d6 de Dano Cortante. Ao atacar com elas, pode fazer um ataque extra de garra no mesmo turno.
- **Cauda:** 1d8 de Dano Perfurante, com alcance. Com a Reação, soma 1d8 à CA contra um ataque de criatura a até 3 m.

**Alma Bestial (6º).** As armas naturais contam como especiais para superar resistências. Após uma Pausa ou Recuperação, escolhe uma adaptação:

- **Nadar:** Deslocamento de natação igual ao normal e respira na água.
- **Escalar:** Deslocamento de escalada igual ao normal, inclusive em tetos, sem teste.
- **Saltar:** uma vez por turno, soma o resultado de um Teste de Potência (Atletismo) ao salto.

**Fúria Contagiosa (10º) ({ch 5}).** Ao acertar com arma natural durante a Fúria, força um Teste de Integridade (Espírito) (CD 8 + Bônus de Proficiência + Resistência). Se falhar, o alvo faz um ataque contra outra criatura escolhida ou sofre 2d12 de Dano de Psíquico.

**Líder da Matilha (14º) ({ch 8}).** Ao entrar em Fúria, escolhe até um número de aliados a até 9 m igual ao modificador de Resistência. Ele ganha 5 PV temporários por aliado escolhido, e cada um deles soma 1d6 ao dano uma vez por turno até a Fúria acabar.

### Fúria Instável {img=arquetipos/furia-instavel.jpg}

*O poder do herói é imprevisível: cada explosão de fúria libera um efeito diferente. A CD dos efeitos é 8 + Bônus de Proficiência + Resistência.*

**Percepção de Energia (3º) ({ch 1}).** Com 1 Ação, até o fim do próximo turno, sabe onde está qualquer poder ativo ou item especial a até 18 m.

**Surto de Energia (Cxi, Ξ) (3º).** Ao entrar em Fúria, role 1d8. O efeito dura até a Fúria acabar.

{tabela rolavel}
| d8 | Surto de Energia |
|---|---|
| 1 | Tentáculos de sombra: cada criatura escolhida a até 9 m faz Teste de Integridade (Resistência) ou sofre 1d12 de Dano Necrótico; o herói ganha 1d12 PV temporários |
| 2 | Teleporta até 9 m; pode repetir com uma Ação Rápida a cada turno |
| 3 | Uma esfera de energia surge perto de uma criatura a até 9 m e explode: Teste de Integridade (Reflexos) ou 1d6 de Dano de Energia em 1,5 m; pode repetir com Ação Rápida |
| 4 | A arma causa Dano de Energia, ganha as propriedades leve e arremesso (6/18 m) e volta à mão |
| 5 | Quem o atacar sofre 1d6 de Dano de Energia |
| 6 | Ele e aliados a até 3 m ganham +1 na CA |
| 7 | Área de 4,5 m ao redor vira terreno difícil para inimigos |
| 8 | Uma criatura a até 9 m faz Teste de Integridade (Resistência) ou sofre 1d6 de Dano Radiante e fica cega; pode repetir com Ação Rápida |

**Energia Reforçada (6º) ({ch 3}).** Com 1 Ação, toca uma criatura e escolhe um efeito:

- **Reforço:** por 10 minutos, ela soma 1d3 a ataques e Testes de Parâmetro.
- **Liberação:** rola 1d3; o Nível de Poder igual ao resultado fica liberado para ela na cena, sem Teste de Sobrecarga.

**Reação Instável (10º).** Durante a Fúria, quando sofre dano ou falha num Teste de Integridade, pode usar a Reação para rolar de novo o Surto de Energia, substituindo o efeito atual.

**Surto Controlado (14º).** Ao rolar o Surto, rola duas vezes e escolhe o efeito. Se os dois resultados forem iguais, escolhe qualquer efeito da tabela.

### Fúria Colossal {img=arquetipos/furia-colossal.jpg}

*Na Fúria, o herói cresce até virar um colosso.*

**Herança Colossal (3º).** Aprende um idioma ancestral à escolha e a Técnica Sintonia Natural ou Aura de Presença, usando Espírito.

**Devastação Gigante (3º).** Durante a Fúria: soma o Dano da Fúria a ataques com armas de arremesso que usam Potência; o alcance corpo a corpo aumenta 1,5 m, e se for menor que Grande, fica Grande.

**Golpe Elemental (6º).** Ao entrar em Fúria, escolhe uma arma e um tipo de dano (ácido, frio, fogo, trovão ou elétrico). A arma passa a causar esse tipo, ganha +1d6 de dano e a propriedade arremesso (6/18 m), voltando à mão. Pode trocar o tipo com uma Ação Rápida.

**Arremesso Poderoso (10º).** Durante a Fúria, com uma Ação Rápida, arremessa uma criatura Média ou menor ao alcance para um espaço a até 9 m. Se ela não quiser, faz Teste de Integridade (Potência) (CD 8 + Bônus de Proficiência + Potência); se falhar, é arremessada e cai no chão.

**Colosso (14º).** Durante a Fúria, o alcance aumenta 3 m, pode ficar Grande ou Enorme, o Arremesso Poderoso funciona em criaturas Grandes e o dano extra do Golpe Elemental sobe para 2d6.
:::
`},Il=String.raw`
# Controlador de Mentes {#controlador-de-mentes img=arquetipos/controlador-de-mentes.jpg arquetipo}

O Controlador de Mentes vence pela influência. Telepatia, voz hipnótica, ilusões, carisma absurdo ou um talento musical sobrenatural: o poder dele age sobre pensamentos e emoções. Ele inspira aliados a superar os próprios limites e faz inimigos duvidarem do que veem.

No grupo, ele é o líder e o canivete suíço: apoia, controla o campo, negocia e cobre qualquer perícia que falte.

**Poderes típicos:** controle emocional, manipulação mental, voz sobrenatural, ilusões, inspiração, hipnose, manipulação social e poderes baseados em música.

:::ficha
- **Parâmetro principal:** Magnetismo
- **Testes de Integridade:** Reflexos e Magnetismo
- **Matriz de Vitalidade:** d8
- **Especialização:** 3º nível
:::

**Fonte dos poderes.** Os poderes do Controlador podem vir da mente, da voz ou de uma performance. Um Onda de Choque vira um grito sônico; um Impulso Regenerador vira uma ordem telepática para o corpo do aliado resistir; um Ruído Psíquico vira uma voz que só o alvo escuta.

## Progressão do Controlador de Mentes

{tabela progressao}
| Nível | Prof. | Características | Téc. | Poderes | Nível máx. |
|---|---|---|---|---|---|
| 1 | +2 | Uso de Poderes, Impulso Mental (d6) | 2 | 4 | 1 |
| 2 | +2 | Versátil, Voz Reconfortante (d6), Impulso de Poder | 2 | 5 | 1 |
| 3 | +2 | Especialização, Especialista | 2 | 6 | 2 |
| 4 | +2 | Evolução, Adaptabilidade | 3 | 7 | 2 |
| 5 | +3 | Impulso Mental (d8), Fonte de Influência | 3 | 8 | 3 |
| 6 | +3 | Escudo Mental, Característica de Especialização | 3 | 9 | 3 |
| 7 | +3 | — | 3 | 10 | 4 |
| 8 | +3 | Evolução, Adaptabilidade | 3 | 11 | 4 |
| 9 | +4 | Voz Reconfortante (d8) | 3 | 12 | 5 |
| 10 | +4 | Impulso Mental (d10), Especialista Supremo, Segredos do Poder | 4 | 14 | 5 |
| 11 | +4 | — | 4 | 15 | 6 |
| 12 | +4 | Evolução, Adaptabilidade | 4 | 15 | 6 |
| 13 | +5 | Voz Reconfortante (d10) | 4 | 16 | 7 |
| 14 | +5 | Segredos do Poder, Característica de Especialização | 4 | 18 | 7 |
| 15 | +5 | Impulso Mental (d12) | 4 | 19 | 8 |
| 16 | +5 | Evolução, Adaptabilidade | 4 | 19 | 8 |
| 17 | +6 | Voz Reconfortante (d12) | 4 | 20 | 9 |
| 18 | +6 | Segredos do Poder | 4 | 22 | 9 |
| 19 | +6 | Evolução, Adaptabilidade | 4 | 22 | 9 |
| 20 | +6 | Apoteose: Influência Superior | 4 | 22 | 9 |

## Características do Arquétipo

- **Pontos de Vida:** 24 + modificador de Resistência
- **Níveis seguintes:** 8 + modificador de Resistência
- **Matriz de Vitalidade:** d8

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo, Armas de Fogo e Blindagem Leve
- **Ferramentas:** três instrumentos musicais ou kits de performance à escolha
- **Integridade:** Reflexos e Magnetismo
- **Perícias:** três quaisquer

### Uso de Poderes (1º nível)

O Controlador ativa poderes com a mente, a voz ou uma performance.

- **Parâmetro de poder:** Magnetismo
- **CD de Poder:** 8 + Bônus de Proficiência + modificador de Magnetismo
- **Jogada de Ataque de Poder:** Bônus de Proficiência + modificador de Magnetismo
- **Técnicas:** conhece 2 no 1º nível e mais conforme a tabela.
- **Poderes conhecidos:** conhece 4 poderes de Nível de Poder 1 no 1º nível e aprende mais conforme a tabela, sempre de Níveis de Poder que já pode ativar. Ao subir de nível, pode trocar um poder conhecido por outro.
- **À vontade:** ativa qualquer poder conhecido sem limite de usos, até o Nível de Poder máximo, seguindo a regra de Sobrecarga.
- **Rituais:** pode ativar como ritual qualquer poder conhecido com a marca Tau (Τ) de ritual.
- **Foco de Poder:** um instrumento musical, um microfone, um dispositivo de performance ou outro objeto ligado à sua voz.

## Características por nível

### Impulso Mental (1º nível) {ch 1}

Com uma Ação Rápida, o Controlador dá a uma criatura a até 18 m, que possa ouvi-lo ou receber sua telepatia, um dado de Impulso: d6 até o 4º nível, d8 no 5º, d10 no 10º e d12 no 15º. Nos 10 minutos seguintes, a criatura pode rolar o dado e somar o resultado a um Teste de Parâmetro, ataque ou Teste de Integridade, decidindo depois de ver o d20 e antes de saber o resultado. Uma criatura só pode ter um dado de Impulso por vez.

Quando outra característica manda "ativar Impulso Mental" (por exemplo, para rolar o dado de Impulso em um efeito próprio), essa ativação custa {ch 1}, como qualquer ativação de Impulso Mental.

### Versátil (2º nível)

Soma metade do Bônus de Proficiência, arredondada para baixo, a Testes de Parâmetro que ainda não usam o Bônus de Proficiência.

### Voz Reconfortante (2º nível)

Em uma Pausa, aliados que o ouçam e gastem Matrizes de Vitalidade recuperam 1d6 PV extras (1d8 no 9º, 1d10 no 13º e 1d12 no 17º).

### Impulso de Poder (2º nível)

Uma criatura com um dado de Impulso pode, ao ativar um poder que cura ou causa dano, rolar o dado e somar o resultado à cura ou ao dano de um alvo.

### Especialização Mental (3º nível)

O Controlador escolhe uma Especialização, descrita mais adiante, que concede características no 3º, 6º e 14º níveis.

### Especialista (3º nível)

Escolhe duas perícias em que é proficiente; o Bônus de Proficiência é dobrado nelas.

### Evolução (4º, 8º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até o máximo de 20. Pode ser trocada por um Talento.

### Adaptabilidade (4º, 8º, 12º, 16º e 19º níveis)

Nesses níveis, pode trocar uma perícia de Especialista por outra em que seja proficiente, ou trocar uma Técnica por outra.

### Fonte de Influência (5º nível)

A primeira ativação de Impulso Mental em cada cena não gasta Cargas Heroicas. As ativações seguintes custam {ch 1} normalmente.

### Escudo Mental (6º nível)

Com 1 Ação, cria um campo de proteção mental até o fim do próximo turno. Ele e aliados a até 9 m que possam ouvi-lo têm Vantagem em Testes de Integridade contra ficar amedrontados ou dominados. O efeito termina antes se ele ficar incapacitado ou em silêncio, ou se encerrá-lo.

### Especialista Supremo (10º nível)

Escolhe mais duas perícias em que é proficiente; o Bônus de Proficiência é dobrado nelas.

### Segredos do Poder (10º, 14º e 18º níveis)

Aprende dois poderes ou Técnicas adicionais, de Níveis de Poder que já pode ativar. Eles não contam no total de poderes conhecidos. Repete no 14º e no 18º níveis.

### Apoteose: Influência Superior (20º nível)

Ao rolar Iniciativa, o Controlador pode ativar Impulso Mental uma vez sem gastar Cargas Heroicas.

## Especializações

No 3º nível, o Controlador escolhe uma das oito Especializações.

| Especialização | Papel |
|---|---|
| Controlador Iluminado | Perícias e sabotagem mental dos inimigos |
| Controlador Valente | Líder de linha de frente |
| Controlador Fascinante | Carisma sobrenatural e mobilidade do grupo |
| Controlador das Lâminas | Duelista acrobático |
| Controlador Sussurrante | Espião e assassino psíquico |
| Controlador da Matéria | Materializa objetos e os anima |
| Controlador Eloquente | Negociador infalível e suporte |
| Controlador Médium | Canaliza ecos de outras mentes |

:::tabs
### Controlador Iluminado {img=arquetipos/controlador-iluminado.jpg}

*Uma mente que sabe um pouco de tudo e encontra a falha no raciocínio de qualquer um.*

**Perícias Adicionais (3º).** Proficiência em três perícias à escolha.

**Palavras Cortantes (3º).** Quando uma criatura a até 18 m faz um ataque, Teste de Parâmetro ou rolagem de dano, pode usar a Reação e ativar Impulso Mental para rolar o dado e subtrair o resultado, depois de ver a rolagem e antes do resultado. Não afeta criaturas imunes a ficar dominadas.

**Segredos Adicionais (6º).** Aprende dois poderes adicionais, de Níveis de Poder que já pode ativar. Eles não contam no total de poderes conhecidos.

**Perícia Incomparável (14º).** Ao fazer um Teste de Parâmetro, pode ativar Impulso Mental e somar o dado ao resultado.

### Controlador Valente

*O líder que inspira a equipe lutando na frente.*

**Treinamentos Adicionais (3º).** Armamento Pesado.

**Impulso de Combate (3º).** Quem tem um dado de Impulso pode rolá-lo e somar ao dano de um ataque com arma que acabou de fazer, ou usar a Reação para somá-lo à CA contra um ataque, depois de ver a rolagem.

**Ataque Extra (6º).** Ataca duas vezes ao usar a Ação Atacar.

**Poder de Batalha (14º).** Ao usar a Ação para ativar um poder do Controlador, pode fazer um ataque com arma como Ação Rápida.

### Controlador Fascinante

*Uma presença tão magnética que multidões o idolatram, e inimigos hesitam em atacá-lo.*

**Manto de Inspiração (3º).** Com uma Ação Rápida, ativa Impulso Mental (sem dar dado de Impulso): até um número de criaturas a até 18 m igual ao modificador de Magnetismo ganha PV temporários: 5 no 3º, 8 no 5º, 11 no 10º e 14 no 15º. Cada uma pode usar a Reação para se mover até seu Deslocamento sem provocar Contra-ataques.

**Performance Cativante (3º) ({ch 1}).** Depois de se apresentar por 1 minuto, escolhe até um número de humanoides a até 18 m igual ao modificador de Magnetismo, que assistiram a tudo. Eles fazem um Teste de Integridade (Espírito) ou ficam dominados por 1 hora: idolatram o herói e atrapalham quem se opuser a ele, sem violar sua natureza. Termina se sofrerem dano, se ele os atacar ou se o virem ferir aliados deles.

**Manto de Majestade (6º) ({ch 3}).** Com uma Ação Rápida, ativa Ordem Psíquica e assume uma beleza sobrenatural por 1 minuto (Concentração). Durante esse tempo, pode ativar Ordem Psíquica como Ação Rápida em cada turno, sem Teste de Sobrecarga. Criaturas dominadas por ele falham automaticamente.

**Majestade Inabalável (14º) ({ch 8}).** Com uma Ação Rápida, assume uma presença majestosa por 1 minuto. Na primeira vez em cada turno que uma criatura tenta atacá-lo, ela faz um Teste de Integridade (Magnetismo): se falhar, não pode atacá-lo neste turno e escolhe outro alvo ou perde o ataque; se passar, tem Desvantagem no próximo Teste de Integridade contra os poderes dele.

### Controlador das Lâminas

*Um artista do combate, que transforma cada golpe em espetáculo.*

**Lâmina como Foco (3º).** Armas corpo a corpo cobertas pelos seus Treinamentos servem como Foco de Poder.

**Estilo de Luta (3º).** Escolha um estilo:

- **Duelo:** +2 de dano com uma arma corpo a corpo em uma mão e nada na outra.
- **Combate com Duas Armas:** soma o modificador de Parâmetro ao dano do segundo ataque.

**Floreio de Lâmina (3º).** Ao usar a Ação Atacar, ganha +3 m de Deslocamento até o fim do turno. Uma vez por turno, ao acertar, pode ativar Impulso Mental e escolher um floreio, somando o dado ao dano:

- **Defensivo:** soma o mesmo valor à CA até o próximo turno.
- **Cortante:** outra criatura a até 1,5 m também sofre o dano extra.
- **Móvel:** empurra o alvo 1,5 m mais 30 cm por ponto do dado, e o herói pode usar a Reação para se mover até ficar a 1,5 m do alvo.

**Ataque Extra (6º).** Ataca duas vezes ao usar a Ação Atacar.

**Floreio de Mestre (14º).** Ao usar um Floreio de Lâmina, pode rolar 1d6 no lugar do dado de Impulso, sem ativar Impulso Mental.

### Controlador Sussurrante

*Um espião psíquico que planta medo e rouba identidades.*

**Lâminas Psíquicas (3º).** Ao acertar um ataque com arma, pode ativar Impulso Mental para causar Dano de Psíquico extra: 2d6 no 3º, 3d6 no 5º, 5d6 no 10º e 8d6 no 15º. Uma vez por rodada.

**Palavras de Terror (3º) ({ch 1}).** Depois de conversar a sós por 1 minuto com uma criatura, ela faz um Teste de Integridade (Espírito). Se falhar, fica amedrontada por ele ou por outra criatura escolhida por 1 hora, ou até ser atacada ou ver um aliado ser atacado. Se passar, não percebe a tentativa.

**Manto de Sussurros (6º) ({ch 3}).** Quando um humanoide morre a até 9 m, pode usar a Reação para capturar a sua "sombra" mental. Com 1 Ação, assume a aparência dessa pessoa por 1 hora e acessa conhecimentos gerais dela. Quem desconfiar faz Intuição contra a Enganação do herói, que ganha +5.

**Saber Sombrio (14º) ({ch 8}).** Com 1 Ação, sussurra para uma criatura a até 9 m, que faz um Teste de Integridade (Espírito). Se falhar, fica dominada por 8 horas, convencida de que o herói conhece o seu segredo mais sombrio, e obedece a ordens que não a levem a arriscar a vida nem a lutar.

### Controlador da Matéria

*O poder do Controlador dá forma ao que ele imagina.*

**Fagulha de Potencial (3º).** Cada dado de Impulso vem com uma fagulha, cujo efeito depende de onde o dado é usado:

- **Teste de Parâmetro:** a criatura pode rolar o dado de novo e escolher o resultado.
- **Ataque:** após acertar, o alvo e criaturas a até 1,5 m dele fazem um Teste de Integridade (Resistência) ou sofrem Dano de Trovão igual ao dado.
- **Teste de Integridade:** a criatura ganha PV temporários iguais ao dado + modificador de Magnetismo do Controlador.

**Performance da Criação (3º) ({ch 1}).** Com 1 Ação, materializa um objeto comum a até 3 m, Médio ou menor, com valor até 20 × nível do herói em cr. Dura horas iguais ao Bônus de Proficiência. Pode ser Grande no 6º nível e Enorme no 14º.

**Performance Animada (6º) ({ch 3}).** Com 1 Ação, anima um objeto comum Grande ou menor a até 9 m por 1 hora. Ele age logo após o herói, faz Esquivar sem ordem e obedece a ordens dadas com Ação Rápida. Estatísticas: CA 16; PV 10 + 5 × nível; ataque Golpe Irresistível com o bônus de Jogada de Ataque de Poder, 1d10 + Bônus de Proficiência de Dano de Energia.

**Crescendo Criativo (14º).** A Performance da Criação cria vários objetos de uma vez, até o modificador de Magnetismo (mínimo 2). Só um pode ter o tamanho máximo; os outros são Pequenos ou Minúsculos. Não há mais limite de valor.

### Controlador Eloquente

*Cada palavra dele convence, e cada silêncio pesa.*

**Língua de Prata (3º).** Em Testes de Magnetismo (Persuasão) e Enganação, trata um resultado de 9 ou menos no d20 como 10.

**Palavras Perturbadoras (3º).** Com uma Ação Rápida, ativa Impulso Mental e escolhe uma criatura a até 18 m. Ela subtrai o dado do próximo Teste de Integridade que fizer antes do próximo turno dele.

**Impulso Infalível (6º).** Se uma criatura usa o dado de Impulso e o teste falha, ela mantém o dado.

**Fala Universal (6º) ({ch 5}).** Com 1 Ação, até um número de criaturas a até 18 m igual ao modificador de Magnetismo o entendem por 1 hora, seja qual for o idioma.

**Impulso Contagiante (14º) ({ch 8}).** Quando uma criatura a até 18 m usa um dado de Impulso dele e tem sucesso, pode usar a Reação para dar um dado de Impulso a outra criatura a até 18 m, sem ativar Impulso Mental.

### Controlador Médium

*Um canal para ecos de outras mentes: mortos, vidas paralelas ou memórias de outras realidades.*

**Sussurros Guias (3º).** Aprende Intuição Tática (não conta no limite), com alcance de 18 m. Pode ativá-la à vontade (Sobrecarga normal).

**Foco Psíquico (3º).** Pode usar uma vela, bola de cristal, caveira, tabuleiro ou cartas como Foco de Poder. A partir do 6º nível, ao ativar por ele um poder que cura ou causa dano, rola 1d6 e soma a uma rolagem.

**Histórias do Além (3º).** Com uma Ação Rápida, ativa Impulso Mental, rola o dado de Impulso na tabela abaixo e guarda a história; com 1 Ação, aplica o efeito a uma criatura a até 9 m. Só guarda uma por vez, até usá-la ou fazer uma Pausa ou Recuperação. "Dado" = dado de Impulso; CD = CD de Poder.

{tabela rolavel}
| Rolagem | História | Efeito |
|---|---|---|
| 1 | Animal Esperto | Por 10 min, o alvo soma um dado a Testes de Parâmetro (Lógica, Espírito e Magnetismo) |
| 2 | Duelista Renomado | Jogada de Ataque de Poder Corpo a Corpo: 2 dados + Magnetismo de energia |
| 3 | Amigos Queridos | O alvo e outra criatura ganham 1 dado + Magnetismo de PV temporários |
| 4 | Fugitivo | O alvo teleporta até 9 m; aliados podem usar a Reação para ir junto |
| 5 | Vingador | Por 1 min, quem acertar o alvo corpo a corpo sofre 1 dado de energia |
| 6 | Viajante | 1 dado + nível de PV temporários, +3 m de Deslocamento e +1 na CA |
| 7 | Enganador | Teste de Integridade (Espírito) ou 2 dados psíquicos e incapacitado |
| 8 | Fantasma | Invisível até o próximo turno ou até atacar; o próximo acerto causa Dano Necrótico extra |
| 9 | Brutamontes | Teste de Integridade (Potência) ou 3 dados de trovão e cai (metade se passar) |
| 10 | Monstro Gigante | Cone de 9 m, Teste de Integridade (Reflexos), 4 dados de fogo (metade se passar) |
| 11 | Salvador | Cura 2 dados + Magnetismo e remove uma condição |
| 12 | Dobrador de Mentes | Teste de Integridade (Lógica) ou 3 dados psíquicos e atordoado |

**Sessão Espírita (6º) ({ch 3}).** Em um ritual de 1 hora com até um número de participantes igual ao Bônus de Proficiência, aprende temporariamente um poder de percepção ou entropia, de Nível de Poder até o número de participantes e que ele possa ativar. Dura até a próxima Recuperação.

**Conexão Psíquica (14º).** Ao usar Histórias do Além, rola duas vezes e escolhe. Se os resultados forem iguais, escolhe qualquer história.
:::

# Invocador Interdimensional {#invocador-interdimensional img=arquetipos/invocador-interdimensional.jpg arquetipo}

O Invocador Interdimensional não nasceu com poder: ele o recebeu de algo que vive do outro lado. Um simbionte alienígena, um demônio, uma entidade cósmica, um artefato senciente ou um anel forjado em outra dimensão. O acordo tem cláusulas que ele nem sempre entende, e a Entidade pode cobrar a dívida a qualquer momento.

No grupo, ele é o atirador sobrenatural e o curinga: dano consistente à distância, truques que outros não têm e uma Entidade que vira gancho de história.

**Poderes típicos:** simbiose, elos com entidades, artefatos, poder demoníaco, energia cósmica, maldições e invocações.

:::ficha
- **Parâmetro principal:** Magnetismo
- **Testes de Integridade:** Espírito e Magnetismo
- **Matriz de Vitalidade:** d8
- **Especialização:** 1º nível (Entidade)
:::

**A Entidade.** Defina quem é, o que quer e o que acontece se o herói quebrar o acordo. O Mestre pode usar a Entidade como aliada, vilã ou as duas coisas.

## Progressão do Invocador Interdimensional

{tabela progressao}
| Nível | Prof. | Características | Téc. | Poderes | Nível máx. | Invoc. |
|---|---|---|---|---|---|---|
| 1 | +2 | Especialização (Entidade), Uso de Poderes | 2 | 2 | 1 | — |
| 2 | +2 | Invocações Dimensionais | 2 | 3 | 1 | 2 |
| 3 | +2 | Dádiva do Elo | 2 | 4 | 2 | 2 |
| 4 | +2 | Evolução, Versatilidade Dimensional | 3 | 5 | 2 | 2 |
| 5 | +3 | — | 3 | 6 | 3 | 3 |
| 6 | +3 | Característica de Especialização | 3 | 7 | 3 | 3 |
| 7 | +3 | — | 3 | 8 | 4 | 4 |
| 8 | +3 | Evolução, Versatilidade Dimensional | 3 | 9 | 4 | 4 |
| 9 | +4 | — | 3 | 10 | 5 | 5 |
| 10 | +4 | Característica de Especialização | 4 | 10 | 5 | 5 |
| 11 | +4 | Segredo Supremo (NP 6) | 4 | 11 | 5 | 5 |
| 12 | +4 | Evolução, Versatilidade Dimensional | 4 | 11 | 5 | 6 |
| 13 | +5 | Segredo Supremo (NP 7) | 4 | 12 | 5 | 6 |
| 14 | +5 | Característica de Especialização | 4 | 12 | 5 | 6 |
| 15 | +5 | Segredo Supremo (NP 8) | 4 | 13 | 5 | 7 |
| 16 | +5 | Evolução, Versatilidade Dimensional | 4 | 13 | 5 | 7 |
| 17 | +6 | Segredo Supremo (NP 9) | 4 | 14 | 5 | 7 |
| 18 | +6 | — | 4 | 14 | 5 | 8 |
| 19 | +6 | Evolução, Versatilidade Dimensional | 4 | 15 | 5 | 8 |
| 20 | +6 | Apoteose | 4 | 15 | 5 | 8 |

## Características do Arquétipo

- **Pontos de Vida:** 24 + modificador de Resistência
- **Níveis seguintes:** 8 + modificador de Resistência
- **Matriz de Vitalidade:** d8

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo, Armas de Fogo e Blindagem Leve
- **Ferramentas:** nenhuma
- **Integridade:** Espírito e Magnetismo
- **Perícias:** escolha duas entre Ocultismo, Enganação, História, Intimidação, Investigação, Natureza e Religião

### Uso de Poderes (1º nível)

O poder do Invocador vem da Entidade, canalizado pelo corpo, por um artefato ou pelo próprio Elo.

- **Parâmetro de poder:** Magnetismo
- **CD de Poder:** 8 + Bônus de Proficiência + modificador de Magnetismo
- **Jogada de Ataque de Poder:** Bônus de Proficiência + modificador de Magnetismo
- **Técnicas e conhecidos:** conforme a tabela. Os poderes conhecidos vêm da lista completa do Capítulo 4, até o Nível de Poder máximo. Os poderes da Entidade são conhecidos além desse limite. Ao subir de nível, pode trocar um poder conhecido por outro.
- **À vontade:** ativa qualquer poder conhecido sem limite de usos, seguindo a Sobrecarga.
- **Sempre no Nível de Poder máximo.** Todo poder de Nível de Poder 1 ou maior que o Invocador ativa é ativado no seu Nível de Poder máximo da tabela, com os efeitos de "Em Níveis de Poder maiores". O Teste de Sobrecarga usa esse Nível de Poder.
- **Foco de Poder:** um objeto ligado ao Elo, como um amuleto, uma arma, uma tatuagem ou o próprio simbionte.

## Características por nível

### Entidade (1º nível)

O Invocador escolhe a Entidade, que é a sua Especialização. Ela concede características no 1º, 6º, 10º e 14º níveis, além dos poderes da Entidade.

### Invocações Dimensionais (2º nível)

Fragmentos de conhecimento proibido que a Entidade revela. O Invocador aprende 2 Invocações e mais conforme a tabela. Ao subir de nível, pode trocar uma por outra que possa aprender. A [lista completa](#/arquetipos/invocador-interdimensional/invocacoes-dimensionais) está mais adiante.

### Dádiva do Elo (3º nível)

A Entidade concede um presente. Escolha um:

- **Arma Vinculada.** Com 1 Ação, materializa na mão uma arma corpo a corpo à escolha, na qual tem Treinamento. Ela conta como especial e desaparece se ficar a mais de 1,5 m dele por 1 minuto, se ele a dispensar ou se criar outra. Com um ritual de 1 hora, pode vincular uma arma especial, que passa a ser a Arma Vinculada e pode ser guardada em outra dimensão. Artefatos e armas sencientes não podem ser vinculados.
- **Companheiro Vinculado.** Aprende Companheiro Drone, sem contar nos poderes conhecidos, e pode ativá-lo à vontade (Sobrecarga normal) ou como ritual. O companheiro pode ter formas especiais: pequeno demônio, minidragão, criatura das sombras ou espírito alado. Ao usar a Ação Atacar, pode abrir mão de um ataque para o companheiro atacar com a Reação.
- **Codex Vinculado.** Recebe um Codex, que pode ser um tablet, um arquivo mental ou um códice alienígena. Escolhe 3 Técnicas, que ficam conhecidas sem contar no limite enquanto ele tiver o Codex. Pode substituir um Codex perdido com uma cerimônia de 1 hora durante uma Pausa ou Recuperação.
- **Talismã Vinculado ({ch 2}).** Recebe um amuleto. Quem o usa pode somar 1d4 a um Teste de Parâmetro em que falhou. As Cargas Heroicas são gastas pelo Invocador. Pode ser substituído com uma cerimônia de 1 hora.

### Evolução (4º, 8º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até o máximo de 20. Pode ser trocada por um Talento.

### Versatilidade Dimensional (4º, 8º, 12º, 16º e 19º níveis)

Nesses níveis, pode trocar uma Técnica por outra, trocar a Dádiva do Elo ou, a partir do 12º nível, trocar um Segredo Supremo por outro poder do mesmo Nível de Poder. Se uma troca invalidar uma Invocação, ela é substituída.

### Segredo Supremo (11º, 13º, 15º e 17º níveis)

A Entidade revela um poder de NP 6. No 13º, 15º e 17º níveis, ganha um de NP 7, 8 e 9. Cada Segredo Supremo é ativado à vontade no seu próprio Nível de Poder, seguindo a Sobrecarga, e não pode ser ativado em Nível de Poder maior.

### Apoteose: Mestre Interdimensional (20º nível) {ch 9}

Com 1 minuto de súplica à Entidade, todos os Níveis de Poder até NP 5 ficam liberados para ele na cena, sem Teste de Sobrecarga.

## Especializações: Entidades

A Entidade é escolhida no 1º nível. Cada uma concede poderes da Entidade, conhecidos pelo Invocador sem contar no limite, ao alcançar o Nível de Poder indicado.

| Entidade | Papel |
|---|---|
| Invocador do Sonho | Controle, encanto e fuga |
| Invocador da Fornalha | Dano de Fogo e resistência |
| Invocador Cósmico | Telepatia e controle mental |
| Invocador Estelar | Cura e Dano Radiante |
| Invocador da Lâmina | Combatente amaldiçoado |
| Invocador do Abismo | Tentáculos e controle de campo |
| Invocador Elemental | Versátil, com um refúgio portátil |
| Invocador dos Mortos | Forma aterradora e Dano Necrótico |
| Invocador Eterno | Sobrevivência e regeneração |

:::tabs
### Invocador do Sonho

*A Entidade é o soberano de uma dimensão onírica, caprichoso e belo.*

**Poderes da Entidade.**

| NP | Poderes |
|---|---|
| 1 | Marcador de Alvo, Pulso Sonífero |
| 2 | Calmaria Emocional, Alucinação |
| 3 | Fase Instável, Crescimento Acelerado |
| 4 | Dominar Fera, Invisibilidade Total |
| 5 | Dominação Mental, Disfarce em Massa |

**Presença Onírica (1º) ({ch 1}).** Com 1 Ação, criaturas num cubo de 3 m a partir dele fazem Teste de Integridade (Espírito) ou ficam dominadas ou amedrontadas (à escolha) até o fim do próximo turno dele.

**Fuga Nebulosa (6º) ({ch 3}).** Ao sofrer dano, pode usar a Reação para ficar invisível e se teleportar até 18 m. A invisibilidade dura até o início do próximo turno ou até atacar ou ativar um poder.

**Defesas Hipnóticas (10º).** Imune a ficar dominado. Quando alguém tenta dominá-lo, pode usar a Reação para que o atacante faça Teste de Integridade (Espírito) ou fique dominado por ele por 1 minuto ou até sofrer dano.

**Delírio Sombrio (14º) ({ch 8}).** Com 1 Ação, uma criatura a até 18 m faz Teste de Integridade (Espírito) ou fica dominada ou amedrontada por 1 minuto (Concentração), presa num mundo ilusório. Termina se sofrer dano.

### Invocador da Fornalha

*A Entidade é um demônio, o tirano de uma dimensão em chamas ou uma entidade de fogo e ambição.*

**Poderes da Entidade.**

| NP | Poderes |
|---|---|
| 1 | Lança-Chamas, Ordem Psíquica |
| 2 | Sobrecarga Sensorial, Raios Térmicos |
| 3 | Bola de Fogo, Gás Nauseante |
| 4 | Escudo Térmico, Muralha de Fogo |
| 5 | Coluna de Plasma, Santuário Permanente |

**Fome Sombria (1º).** Ao reduzir uma criatura hostil a 0 PV, ganha PV temporários iguais a Magnetismo + nível (mínimo 1).

**Sorte Sombria (6º) ({ch 3}).** Depois de ver o resultado de um Teste de Parâmetro ou de Integridade, soma 1d10.

**Pele Forjada (10º).** Após uma Pausa ou Recuperação, escolhe um tipo de dano e ganha resistência a ele, exceto contra armas especiais ou de prata.

**Exílio na Fornalha (14º) ({ch 8}).** Ao acertar um ataque, envia o alvo à dimensão em chamas da Entidade. Ele volta no fim do próximo turno do herói e, se não for um demônio, sofre 10d10 de Dano de Psíquico.

### Invocador Cósmico

*A Entidade é uma mente alienígena imensa, cujos objetivos ninguém entende.*

**Poderes da Entidade.**

| NP | Poderes |
|---|---|
| 1 | Ruído Psíquico, Riso Histérico |
| 2 | Ler Pensamentos, Alucinação |
| 3 | Clarividência, Transmissão Mental |
| 4 | Dominar Fera, Tentáculos Sombrios |
| 5 | Dominação Mental, Telecinese |

**Mente Desperta (1º).** Fala telepaticamente com qualquer criatura que veja a até 9 m, desde que ela entenda algum idioma.

**Desvio Entrópico (6º) ({ch 3}).** Quando é atacado, pode usar a Reação para impor Desvantagem. Se o ataque errar, o próximo ataque dele contra essa criatura, antes do fim do próximo turno, tem Vantagem.

**Escudo de Pensamento (10º).** Ninguém lê seus pensamentos sem permissão. Resistência a Dano de Psíquico, e quem causa esse dano a ele sofre o mesmo valor.

**Criar Servo (14º).** Com 1 Ação, toca um humanoide incapacitado, que fica dominado até Quebrar Maldição ou até ele usar a característica de novo. Comunica-se telepaticamente com o servo na mesma dimensão.

### Invocador Estelar

*A Entidade é um ser de luz: guardião cósmico, consciência solar ou uma estrela que pensa.*

**Poderes da Entidade.**

| NP | Poderes |
|---|---|
| 1 | Toque Regenerador, Raio Marcador |
| 2 | Esfera de Plasma, Purificar Condição |
| 3 | Sol Artificial, Desfibrilação |
| 4 | Guardião Radiante, Muralha de Fogo |
| 5 | Coluna de Plasma, Restauração Total |

Técnicas extras: Lumen e Feixe Solar.

**Luz Curativa (1º) ({ch 1}).** Com uma Ação Rápida, cura uma criatura a até 18 m: rola um número de d6 igual a Magnetismo (mínimo 1) por uso.

**Alma Radiante (6º).** Resistência a Dano Radiante. Ao ativar um poder que causa Dano Radiante ou de fogo, soma Magnetismo a uma rolagem de dano contra um alvo.

**Resistência Estelar (10º).** Ao fim de uma Pausa ou Recuperação, ganha PV temporários iguais a nível + Magnetismo, e até cinco aliados ganham metade do nível + Magnetismo.

**Vingança Ardente (14º) ({ch 8}).** Ao fazer um Teste de Estabilização no início do turno, pode se levantar com metade dos PV máximos. Criaturas escolhidas a até 9 m sofrem 2d8 + Magnetismo de Dano Radiante e ficam cegas até o fim do turno.

### Invocador da Lâmina

*A Entidade é uma arma viva, consciente e faminta, vinda de outra dimensão.*

**Poderes da Entidade.**

| NP | Poderes |
|---|---|
| 1 | Escudo Reflexo, Golpe Intimidador |
| 2 | Vulto, Golpe Revelador |
| 3 | Fase Instável, Arma Elemental |
| 4 | Pesadelo Vivo, Golpe Atordoante |
| 5 | Golpe de Exílio, Cone Criogênico |

**Maldição da Lâmina (1º) ({ch 1}).** Com uma Ação Rápida, amaldiçoa uma criatura a até 9 m por 1 minuto. Contra ela, soma o Bônus de Proficiência ao dano e tem crítico com 19 ou 20. Se ela morrer, recupera PV iguais a nível + Magnetismo (mínimo 1).

**Guerreiro Amaldiçoado (1º).** Ganha o Treinamento Armamento Pesado (Blindagem Leve já cobre armaduras médias e escudos). Após uma Recuperação, escolhe uma arma sem a propriedade duas mãos; com ela, usa Magnetismo no ataque e no dano. Se tiver a Arma Vinculada, isso vale para ela também.

**Espectro Amaldiçoado (6º) ({ch 3}).** Ao matar um humanoide, pode prender o espírito dele como um espectro sob seu comando até a próxima Recuperação. O espectro tem PV temporários iguais à metade do nível e soma Magnetismo aos ataques.

**Armadura de Maldições (10º).** Quando o alvo amaldiçoado o acerta, pode usar a Reação para rolar 1d6; com 4 ou mais, o ataque erra.

**Mestre das Maldições (14º).** Quando o alvo amaldiçoado morre, pode passar a maldição para outra criatura a até 9 m, sem recuperar PV.

### Invocador do Abismo

*A Entidade é uma criatura colossal das profundezas, ou o próprio oceano de outro mundo.*

**Poderes da Entidade.**

| NP | Poderes |
|---|---|
| 1 | Controle de Umidade, Onda de Choque |
| 2 | Rajada de Vento, Zona de Silêncio |
| 3 | Relâmpago, Tempestade de Gelo |
| 4 | Hidrocinese, Invocar Elemental (só água) |
| 5 | Mão Colossal (como tentáculo), Cone Criogênico |

**Tentáculo das Profundezas (1º) ({ch 1}).** Com uma Ação Rápida, cria um tentáculo espectral de 3 m num ponto a até 18 m por 1 minuto, e ataca com ele: Jogada de Ataque de Poder Corpo a Corpo, 1d8 de Dano de Frio (2d8 no 10º) e reduz o Deslocamento do alvo em 3 m. Nos turnos seguintes, ataca e move o tentáculo 9 m com uma Ação Rápida.

**Dádiva do Mar (1º).** Nada a 12 m e respira na água.

**Alma Oceânica (6º).** Resistência a Dano de Frio. Submerso, entende e é entendido por qualquer criatura submersa.

**Espiral Guardiã (6º).** Quando ele ou um aliado a até 3 m do tentáculo sofre dano, pode usar a Reação para reduzir o dano em 1d8 (2d8 no 10º).

**Tentáculos Agarradores (10º).** Aprende Tentáculos Sombrios (não conta no limite) e pode ativá-lo à vontade (Sobrecarga normal). Ao ativá-lo, ganha PV temporários iguais ao nível, e dano não quebra a Concentração nele.

**Mergulho Insondável (14º) ({ch 8}).** Com 1 Ação, teleporta a si e até cinco criaturas voluntárias a até 9 m para um corpo d'água a até 1,6 km que já tenha visto.

### Invocador Elemental

*A Entidade é um ser elemental poderoso, preso a um objeto que o herói carrega. Escolha o tipo: Terra, Ar, Fogo ou Água.*

**Poderes da Entidade.** A coluna Poderes vale para todos os tipos; as demais, só para o tipo escolhido.

| NP | Poderes | Terra | Ar | Fogo | Água |
|---|---|---|---|---|---|
| 1 | Sentir Entidades | Aura de Trégua | Onda de Choque | Lança-Chamas | Cortina de Névoa |
| 2 | Alucinação | Campo de Espinhos | Rajada de Vento | Raios Térmicos | Vulto |
| 3 | Sintetizar Suprimentos | Fusão com a Pedra | Muralha de Vento | Bola de Fogo | Tempestade de Gelo |
| 4 | Pesadelo Vivo | Geocinese | Invisibilidade Total | Escudo Térmico | Hidrocinese |
| 5 | Materialização | Muralha de Pedra | Disfarce em Massa | Coluna de Plasma | Cone Criogênico |
| 9 | Reescrever a Realidade | — | — | — | — |

**Recipiente Elemental (1º).** Um objeto Minúsculo (anel, lâmpada, celular, cristal) que pode servir de Foco de Poder. Ele concede dois efeitos:

- **Refúgio Engarrafado ({ch 1}):** com 1 Ação, entra no recipiente e fica lá por um número de horas igual ao dobro do Bônus de Proficiência.
- **Fúria Elemental:** uma vez por turno, ao acertar um ataque, causa dano extra igual ao Bônus de Proficiência (concussão, trovão, fogo ou frio, conforme o tipo).

**Dádiva Elemental (6º).** Resistência ao tipo de dano do elemental. **Voo Elemental ({ch 3}):** com uma Ação Rápida, ganha voo de 9 m por 10 minutos.

**Recipiente Santuário (10º).** Ao usar o Refúgio Engarrafado, leva até cinco criaturas voluntárias a até 9 m, e pode expulsá-las com uma Ação Rápida. Quem fica 10 minutos lá dentro ganha os benefícios de uma Pausa e soma o Bônus de Proficiência aos PV recuperados com Matrizes de Vitalidade.

**Favor do Prisioneiro (14º) ({ch 8}).** Com 1 Ação, ativa qualquer poder de Nível de Poder 6 ou menor que leve 1 Ação, sem Teste de Sobrecarga do poder.

### Invocador dos Mortos

*A Entidade domina a morte: um rei-cadáver de outra dimensão, uma força da morte ou a própria entropia.*

**Poderes da Entidade.**

| NP | Poderes |
|---|---|
| 1 | Abalo Moral, Vitalidade Reserva |
| 2 | Sobrecarga Sensorial, Alucinação |
| 3 | Montaria Holográfica, Eco dos Mortos |
| 4 | Última Chance, Invisibilidade Total |
| 5 | Barreira Repulsora, Nuvem Letal |

**Forma Aterradora (1º) ({ch 1}).** Com uma Ação Rápida, assume uma forma macabra por 1 minuto. Nessa forma:

- ganha 1d10 + nível de PV temporários;
- fica imune a ficar amedrontado;
- uma vez por turno, ao acertar um ataque, pode forçar um Teste de Integridade (Espírito); se falhar, o alvo fica amedrontado até o fim do próximo turno dele.

**Tocado pela Morte (6º).** Não precisa comer, beber nem respirar. Uma vez por turno, ao acertar um ataque, pode trocar o tipo de dano para necrótico; na Forma Aterradora, rola um dado de dano a mais.

**Casca Necrótica (10º) ({ch 5}).** Resistência a Dano Necrótico (imunidade na Forma Aterradora). Ao cair a 0 PV, pode ficar com 1 PV; cada criatura a até 9 m sofre 2d10 + nível de Dano Necrótico, e ele ganha 1 nível de Exaustão.

**Projeção Espiritual (14º) ({ch 8}).** Com 1 Ação, projeta o espírito para fora do corpo por até 1 hora (Concentração). O espírito tem Resistência a Dano de Concussão, perfurante e cortante, voa, atravessa objetos e pode ativar poderes de convocação e entropia. Na Forma Aterradora, recupera PV iguais à metade do Dano Necrótico que causar.

### Invocador Eterno

*A Entidade é um ser que venceu a morte e partilha esse segredo com o herói.*

**Poderes da Entidade.**

| NP | Poderes |
|---|---|
| 1 | Vitalidade Reserva, Raio Tóxico |
| 2 | Sobrecarga Sensorial, Zona de Silêncio |
| 3 | Morte Aparente, Eco dos Mortos |
| 4 | Aura Vital, Última Chance |
| 5 | Vírus, Arquivo Lendário |

Técnica extra: Pulso Vital.

**Entre os Mortos (1º).** Vantagem em Testes de Integridade contra doenças. Mortos-vivos que o ataquem diretamente fazem Teste de Integridade (Espírito) ou escolhem outro alvo; se passarem, ficam imunes por 24 horas.

**Desafiar a Morte (6º) ({ch 3}).** Ao passar num Teste de Estabilização ou estabilizar alguém com Pulso Vital, recupera 1d8 + Resistência PV.

**Natureza Imortal (10º).** Prende a respiração indefinidamente, não precisa comer, beber nem dormir, envelhece 10 vezes mais devagar e não sofre envelhecimento sobrenatural.

**Vida Indestrutível (14º) ({ch 8}).** Com uma Ação Rápida, recupera 1d8 + nível de PV e recoloca partes do corpo amputadas.
:::

## Invocações Dimensionais

São 54 Invocações. Três regras valem para todas:

- **"À vontade"** significa sem limite e sem Teste de Sobrecarga, porque o poder vem da invocação, não do Nível de Poder.
- **"À vontade (Sobrecarga normal)"** significa sem limite, ativado no Nível de Poder máximo do Invocador e com o Teste de Sobrecarga daquele Nível de Poder.
- **"{ch n}"** marca uma Invocação que é Característica de Carga Heroica: cada uso custa esse número de Cargas Heroicas, sem Teste de Sobrecarga (veja Características de Carga Heroica).

Requisitos como Arma Vinculada, Companheiro, Codex e Talismã indicam a opção de Dádiva do Elo correspondente.

{tabela filtro}
| Invocação | Requisito | Efeito |
|---|---|---|
| Ancestrais da Profundeza | 5º nível | Respira na água, nada no Deslocamento normal e ativa Respiração Aquática à vontade (Sobrecarga normal) |
| Arauto do Mau Agouro | 5º nível | Maldição Profunda à vontade (Sobrecarga normal) |
| Arma Vinculada Aprimorada | Arma Vinculada | Arma Vinculada +1 no ataque e no dano, serve de Foco e pode ser arco ou besta |
| Armadura de Sombras | — | Campo de Força Pessoal em si à vontade |
| Salto do Outro Mundo | 9º nível | Supersalto em si à vontade |
| Ascensão | 9º nível | Levitação em si à vontade |
| Mente Insone | Codex Vinculado | Não precisa dormir; faz Pausa ou Recuperação com atividade leve |
| Correntes Dimensionais | 15º nível, Companheiro | Paralisia Total à vontade (Sobrecarga normal) em celestiais, demônios e elementais |
| Disparo Devastador | Rajada Dimensional | Soma Magnetismo ao dano do Rajada Dimensional |
| Disparo Repulsor | Rajada Dimensional | Cada raio empurra o alvo até 3 m |
| Contato Remoto | 5º nível, Codex | Quem assina o Codex pode receber Transmissão Mental dele sem teste |
| Escrita Universal | — | Lê qualquer escrita |
| Fala Bestial | — | Linguagem Animal à vontade |
| Fuga Escorregadia | 7º nível | Movimento Livre em si à vontade (Sobrecarga normal) |
| Mente Atolada | 5º nível | Campo de Lentidão à vontade (Sobrecarga normal) |
| Golpe Dimensional | 5º nível, Arma Vinculada | {ch 3} Ao acertar com a Arma Vinculada, causa 1d8 + 1d8 por Nível de Poder máximo de Dano de Energia e pode derrubar um alvo Enorme ou menor |
| Guardião do Talismã | 7º nível, Talismã | {ch 4} O portador soma 1d4 a Testes de Integridade falhos |
| Marca Enlouquecedora | 5º nível, Marca Sombria ou maldição | Ação Rápida: Dano de Psíquico igual a Magnetismo no alvo amaldiçoado e em quem estiver a 1,5 m dele |
| Marca Implacável | 7º nível, Marca Sombria ou maldição | Ação Rápida: teleporta até 9 m para perto do alvo amaldiçoado |
| Influência Sedutora | — | Proficiência em Enganação e Persuasão |
| Companheiro Aprimorado | Companheiro | O companheiro ganha voo ou nado de 12 m, ataque como Ação Rápida, ataques especiais, CD de Poder do Invocador e resistência via Reação |
| Raio Letárgico | Rajada Dimensional | Uma vez por turno, um raio reduz o Deslocamento do alvo em 3 m |
| Lança Dimensional | Rajada Dimensional | Alcance do Rajada Dimensional passa a 90 m |
| Lâmina Sedenta | 5º nível, Arma Vinculada | Ataca duas vezes com a Arma Vinculada na Ação Atacar |
| Ceifar a Vida | 12º nível, Arma Vinculada | Arma Vinculada causa Dano Necrótico extra igual a Magnetismo |
| Rosto Mutável | — | Disfarce Holográfico à vontade |
| Mente Dimensional | — | Vantagem em Testes de Integridade (Resistência) para manter Concentração |
| Corpo Mutante | 15º nível | Mutação Pessoal à vontade |
| Enxame Pestilento | 5º nível | {ch 3} Ação Rápida: aura de 1,5 m que causa Dano de Veneno igual a Magnetismo e dá Vantagem em Intimidação |
| Palavra de Ruína | 7º nível | Colapso Mental à vontade (Sobrecarga normal) |
| Casulo de Gelo | 5º nível | {ch 3} Reação ao sofrer dano: vira gelo, ganha 10 PV temporários por nível e fica incapacitado até o fim do próximo turno |
| Puxão Gravitacional | Rajada Dimensional | Uma vez por turno, um raio puxa o alvo 3 m para perto |
| Reação do Talismã | Talismã | Quando o portador é atingido, Reação: Dano de Psíquico igual ao Bônus de Proficiência e empurra 3 m |
| Ladrão de Destinos | — | Abalo Moral à vontade (Sobrecarga normal) |
| Laço do Talismã | 12º nível, Talismã | {ch 6} Teleporta até o portador do talismã, ou ele até o Invocador |
| Codex de Rituais | Codex Vinculado | Copia poderes rituais no Codex e os ativa como ritual |
| Servidão Eterna | 5º nível | Reanimar Cadáveres à vontade (Sobrecarga normal) |
| Servos do Caos | 9º nível | Elemental Colossal à vontade (Sobrecarga normal) |
| Sombra Protetora | 15º nível | Invisibilidade à vontade |
| Sopro Vital | — | Vitalidade Reserva em si à vontade, como Nível de Poder 1 |
| Sussurros da Sepultura | 9º nível | Eco dos Mortos à vontade |
| Sussurros Fascinantes | 7º nível | Compulsão à vontade (Sobrecarga normal) |
| Um com as Sombras | 5º nível | Na penumbra ou escuridão, Ação: fica invisível até se mover ou agir |
| Escultor de Carne | 7º nível | Metamorfose Animal à vontade (Sobrecarga normal) |
| Visão Energética | — | Detectar Poderes à vontade |
| Olhar Desmascarador | 15º nível | Vê a forma verdadeira de metamorfos e ilusões a até 9 m |
| Visão de Duas Mentes | — | Ação Rápida: usa os sentidos de um humanoide voluntário tocado |
| Visão Sombria | — | Enxerga normalmente no escuro, inclusive sobrenatural, a até 36 m |
| Visão Fantasmagórica | 7º nível | {ch 4} Vê através de objetos sólidos a até 9 m por 1 minuto |
| Visões Nebulosas | — | Holograma à vontade |
| Visões de Mundos Distantes | 15º nível | Olho Espião à vontade |
| Elo Sensorial | Companheiro | Comunica-se telepaticamente com o companheiro e usa os sentidos dele a qualquer distância na mesma dimensão |
| Dádiva da Vitalidade | Companheiro | Com o companheiro a até 30 m, toda Cura que recebe é máxima |
| Dádiva dos Protetores | 9º nível, Codex | {ch 5} Quem assina o Codex e cai a 0 PV fica com 1 PV |
`,Ll=String.raw`
# Campeão do Poder {#campeao-do-poder arquetipo}

O Campeão do Poder é o escolhido de uma força superior: um ser mitológico, uma entidade cósmica, um conceito personificado como a Morte ou a Ordem. Ele age como avatar dessa força na Terra e carrega um pouco da personalidade dela. Enquanto honrar o vínculo, o poder flui. Se trair, pode perdê-lo.

No grupo, ele é o pilar: cura, protege, fortalece aliados e, conforme a Especialização, luta na linha de frente com a mesma força.

**Poderes típicos:** vocações, luz radiante, energia pura, exorcismo, ressurreição, proteção, poder contra mortos-vivos e demônios, milagres.

:::ficha
- **Parâmetro principal:** Espírito
- **Testes de Integridade:** Espírito e Magnetismo
- **Matriz de Vitalidade:** d8
- **Especialização:** 1º nível (Vocação)
:::

**Campeão x Invocador.** O Invocador fez um acordo com algo que quer alguma coisa em troca. O Campeão foi escolhido por algo que confia nele. Um empresta o poder; o outro o representa.

## Progressão do Campeão do Poder

{tabela progressao}
| Nível | Prof. | Características | Téc. | Nível máx. |
|---|---|---|---|---|
| 1 | +2 | Uso de Poderes, Especialização | 3 | 1 |
| 2 | +2 | Pulso da Fonte, Poder Concentrado, Característica de Especialização | 3 | 1 |
| 3 | +2 | — | 3 | 2 |
| 4 | +2 | Evolução | 4 | 2 |
| 5 | +3 | Purgar Mortos-Vivos (NA 1/2) | 4 | 3 |
| 6 | +3 | Característica de Especialização | 4 | 3 |
| 7 | +3 | — | 4 | 4 |
| 8 | +3 | Evolução, Purgar Mortos-Vivos (NA 1), Golpes Carregados, Característica de Especialização | 4 | 4 |
| 9 | +4 | — | 4 | 5 |
| 10 | +4 | Milagre | 5 | 5 |
| 11 | +4 | Purgar Mortos-Vivos (NA 2) | 5 | 6 |
| 12 | +4 | Evolução | 5 | 6 |
| 13 | +5 | — | 5 | 7 |
| 14 | +5 | Purgar Mortos-Vivos (NA 3) | 5 | 7 |
| 15 | +5 | — | 5 | 8 |
| 16 | +5 | Evolução | 5 | 8 |
| 17 | +6 | Purgar Mortos-Vivos (NA 4), Característica de Especialização | 5 | 9 |
| 18 | +6 | — | 5 | 9 |
| 19 | +6 | Evolução | 5 | 9 |
| 20 | +6 | Apoteose | 5 | 9 |

## Características do Arquétipo

- **Pontos de Vida:** 24 + modificador de Resistência
- **Níveis seguintes:** 8 + modificador de Resistência
- **Matriz de Vitalidade:** d8

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo, Armas de Fogo e Blindagem Leve
- **Ferramentas:** nenhuma
- **Integridade:** Espírito e Magnetismo
- **Perícias:** escolha duas entre História, Intuição, Medicina, Persuasão e Religião

### Uso de Poderes (1º nível)

O poder flui da entidade para o Campeão. O símbolo dela, que pode ser um emblema, um amuleto, uma arma ou uma marca no corpo, pode servir de Foco de Poder.

- **Parâmetro de poder:** Espírito
- **CD de Poder:** 8 + Bônus de Proficiência + modificador de Espírito
- **Jogada de Ataque de Poder:** Bônus de Proficiência + modificador de Espírito
- **Técnicas:** conhece 3 no 1º nível e mais conforme a tabela.
- **Poderes preparados:** após uma Recuperação, prepara poderes em número igual ao modificador de Espírito + nível (mínimo 1), de Níveis de Poder que pode ativar. Os poderes da Especialização estão sempre preparados e não contam nesse limite.
- **À vontade:** ativa qualquer poder preparado sem limite de usos, até o Nível de Poder máximo, seguindo a Sobrecarga.
- **Rituais:** pode ativar como ritual qualquer poder preparado com a marca Tau (Τ) de ritual.

## Características por nível

### Especialização (1º nível)

O Campeão escolhe a Vocação da força que representa, que é a sua Especialização. Ela concede poderes da Especialização sempre preparados e características no 1º, 2º, 6º, 8º e 17º níveis.

### Pulso da Fonte (2º nível) {ch 1}

O Campeão puxa energia diretamente da entidade. Cada Especialização dá opções próprias de Pulso, e todo Campeão tem esta:

**Repelir Mortos-Vivos.** Com 1 Ação, apresenta o símbolo. Cada morto-vivo a até 9 m que possa vê-lo ou ouvi-lo faz um Teste de Integridade (Espírito). Se falhar, fica repelido por 1 minuto ou até sofrer dano: precisa se afastar o máximo possível, não pode se aproximar a menos de 9 m e não usa Reações.

Todas as opções de Pulso, desta característica e da Especialização, são ativações de Pulso da Fonte.

### Poder Concentrado (2º nível) {ch 1}

Com uma Ação Rápida, libera na cena um Nível de Poder igual ou menor que metade do Bônus de Proficiência (arredondado para cima), sem Teste de Sobrecarga.

### Evolução (4º, 8º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até o máximo de 20. Pode ser trocada por um Talento.

**Versatilidade.** Em cada Evolução, o Campeão também pode trocar uma Técnica por outra.

### Purgar Mortos-Vivos (5º nível)

Quando um morto-vivo falha no Teste de Integridade contra Repelir Mortos-Vivos, é destruído na hora se o seu NA for igual ou menor que: 1/2 no 5º nível, 1 no 8º, 2 no 11º, 3 no 14º e 4 no 17º.

### Golpes Carregados (8º nível)

Quando uma criatura sofre dano de uma Técnica ou ataque com arma do Campeão, ele pode causar +1d8 de Dano Radiante. Uma vez por turno. Não se acumula com o Golpe da Fonte nem com o Poder Potente da Especialização: se tiver um deles, escolha qual usar a cada turno.

### Milagre (10º nível) {ch 5}

Com 1 Ação, o Campeão pede ajuda direta à entidade. Role d100: se o resultado for igual ou menor que o nível dele, a entidade intervém, e o Mestre escolhe o efeito, que pode ser o de qualquer poder.

### Apoteose: Milagre Aprimorado (20º nível)

O pedido de Milagre é atendido automaticamente: não é preciso rolar o d100.

## Especializações: Vocações

A Vocação é a Especialização do Campeão, escolhida no 1º nível. Os poderes da Especialização entram sempre preparados quando o Campeão alcança o Nível de Poder indicado. Duas características do 8º nível se repetem entre as Vocações:

- **Golpe da Fonte (8º):** soma 1d8 de dano a um ataque com arma por turno, 2d8 no 14º.
- **Poder Potente (8º):** soma o modificador de Espírito ao dano das Técnicas.

| Especialização | Papel |
|---|---|
| Campeão da Vida | O melhor curandeiro do jogo |
| Campeão da Luz | Dano de Fogo e radiante, proteção |
| Campeão do Saber | Perícias, leitura de mentes |
| Campeão de Gaia | Animais, plantas e elementos |
| Campeão da Tormenta | Raio e trovão com dano máximo |
| Campeão da Mentira | Ilusões, cópias e invisibilidade |
| Campeão da Batalha | Combatente da Fonte |
| Campeão da Entropia | Dano Necrótico |
| Campeão do Nexo | Poder bruto e banimento |
| Campeão da Bigorna | Armas, armaduras e fogo |
| Campeão da Travessia | Guardião entre a vida e a morte |
| Campeão da Ordem | Comando e controle |
| Campeão da Harmonia | Vínculos entre aliados |
| Campeão da Penumbra | Proteção na escuridão |

:::tabs
### Campeão da Vida

*O poder da vida em si: cura, vigor e regeneração.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Grito de Guerra, Toque Regenerador |
| 2 | Purificar Condição, Arma Fantasma |
| 3 | Farol de Esperança, Desfibrilação |
| 4 | Última Chance, Guardião Radiante |
| 5 | Regeneração em Massa, Ressuscitar |

**Treinamento (1º).** Blindagem Pesada.

**Discípulo da Vida (1º).** Poderes de cura de Nível de Poder 1 ou maior curam 2 + o Nível de Poder usado a mais.

**Pulso: Preservar a Vida (2º).** Com 1 Ação, distribui PV iguais a 5 × nível entre criaturas a até 9 m, sem levar ninguém acima da metade dos PV máximos. Não afeta mortos-vivos nem constructos.

**Curandeiro Empático (6º).** Ao curar outra criatura com um poder de NP 1 ou maior, recupera 2 + o Nível de Poder usado.

**Golpe da Fonte (8º).** Radiante.

**Cura Suprema (17º).** Ao rolar dados de cura de um poder, usa o valor máximo de cada dado.

### Campeão da Luz

*Luz solar, chamas e verdade que expõe as trevas.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Lança-Chamas, Marcador de Alvo |
| 2 | Esfera de Plasma, Raios Térmicos |
| 3 | Sol Artificial, Bola de Fogo |
| 4 | Guardião Radiante, Muralha de Fogo |
| 5 | Coluna de Plasma, Vigilância Remota |

**Técnica Extra (1º).** Lumen, sem contar no limite.

**Clarão Protetor (1º) ({ch 1}).** Quando uma criatura a até 9 m o ataca, pode usar a Reação para impor Desvantagem, com um clarão de luz.

**Pulso: Brilho da Aurora (2º).** Com 1 Ação, dissipa escuridão criada por poderes a até 9 m; cada criatura hostil nessa área faz um Teste de Integridade (Resistência) e sofre 2d10 + nível de Dano Radiante (metade se passar).

**Clarão Aprimorado (6º).** Pode usar o Clarão Protetor quando um aliado a até 9 m é atacado.

**Poder Potente (8º).**

**Coroa de Luz (17º).** Com 1 Ação, emana luz plena de 18 m por 1 minuto. Inimigos na luz plena têm Desvantagem contra poderes que causam fogo ou radiante.

### Campeão do Saber

*A entidade sabe tudo, e o Campeão é o canal desse saber.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Ordem Psíquica, Escaneamento |
| 2 | Pressentimento, Sugestão |
| 3 | Indetectável, Eco dos Mortos |
| 4 | Olho Espião, Colapso Mental |
| 5 | Arquivo Lendário, Vigilância Remota |

**Mente Enciclopédica (1º).** Dois idiomas e proficiência em duas entre Ocultismo, História, Natureza e Religião, com o Bônus de Proficiência dobrado nelas.

**Pulso: Saber das Eras (2º).** Com 1 Ação, ganha proficiência em uma perícia ou ferramenta por 10 minutos.

**Pulso: Ler Pensamentos (6º).** Com 1 Ação, uma criatura a até 18 m faz um Teste de Integridade (Espírito). Se falhar, ele lê os pensamentos superficiais dela por 1 minuto e pode, com uma Ação, encerrar o efeito e ativar Sugestão nela sem Teste de Sobrecarga.

**Poder Potente (8º).**

**Visões do Passado (17º) ({ch 8}).** Medita por um número de minutos até o modificador de Espírito (Concentração) e recebe visões: o histórico de quem possuiu um objeto, ou os eventos marcantes que aconteceram num cubo de 15 m.

### Campeão de Gaia

*A Terra viva, com seus animais, plantas e forças.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Afinidade Animal, Linguagem Animal |
| 2 | Pele Blindada, Campo de Espinhos |
| 3 | Crescimento Acelerado, Muralha de Vento |
| 4 | Dominar Fera, Vinha Agarradora |
| 5 | Praga de Insetos, Trânsito Arbóreo |

**Elo com Gaia (1º).** Uma Técnica à escolha e proficiência em Adestrar Animais, Natureza ou Sobrevivência.

**Treinamento (1º).** Blindagem Pesada.

**Pulso: Comando Selvagem (2º).** Com 1 Ação, cada fera ou planta a até 9 m que o veja faz um Teste de Integridade (Espírito) ou fica dominada e amigável por 1 minuto ou até sofrer dano.

**Amortecer Elementos (6º).** Quando ele ou uma criatura a até 9 m sofre Dano de Ácido, frio, fogo, elétrico ou trovão, pode usar a Reação para dar resistência contra aquele dano.

**Golpe da Fonte (8º).** Frio, fogo ou elétrico, à escolha.

**Mestre da Natureza (17º).** Com uma Ação Rápida, comanda o que as criaturas dominadas pelo Pulso farão no próximo turno delas.

### Campeão da Tormenta

*Raio, trovão e vento: o poder de uma força da tempestade.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Cortina de Névoa, Onda de Choque |
| 2 | Rajada de Vento, Pulso Sônico |
| 3 | Tempestade Elétrica, Tempestade de Gelo |
| 4 | Hidrocinese, Nevasca |
| 5 | Onda de Impacto, Praga de Insetos |

**Treinamentos (1º).** Armamento Pesado e Blindagem Pesada.

**Fúria da Tormenta (1º) ({ch 1}).** Quando uma criatura a até 1,5 m o acerta, pode usar a Reação: ela faz um Teste de Integridade (Reflexos) e sofre 2d8 de Dano Elétrico ou trovão (metade se passar).

**Pulso: Fúria Destrutiva (2º).** Ao rolar Dano Elétrico ou trovão, causa o dano máximo em vez de rolar.

**Golpe Sísmico (6º).** Ao causar Dano Elétrico a uma criatura Grande ou menor, pode empurrá-la até 3 m.

**Golpe da Fonte (8º).** Trovão.

**Nascido da Tormenta (17º).** Voo igual ao Deslocamento, quando não estiver em local fechado ou subterrâneo.

### Campeão da Mentira

*A força das mentiras, das travessuras e das ilusões.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Fascínio Pessoal, Disfarce Holográfico |
| 2 | Cópias Holográficas, Furtividade Coletiva |
| 3 | Fase Instável, Neutralizar Poder |
| 4 | Porta Dimensional, Metamorfose Animal |
| 5 | Dominação Mental, Reescrever Memória |

**Toque do Embusteiro (1º).** Com 1 Ação, dá a uma criatura voluntária (não ele mesmo) Vantagem em Furtividade por 1 hora.

**Pulso: Duplicata (2º).** Com 1 Ação, cria uma cópia ilusória perfeita de si a até 9 m por 1 minuto (Concentração). Move a cópia até 9 m com uma Ação Rápida, mantendo-a a até 36 m. Pode ativar poderes como se estivesse no lugar dela e tem Vantagem em ataques contra criaturas a até 1,5 m dele e da cópia ao mesmo tempo.

**Pulso: Manto de Sombras (6º).** Com 1 Ação, fica invisível até o fim do próximo turno, ou até atacar ou ativar um poder.

**Golpe da Fonte (8º).** Veneno.

**Duplicata Aprimorada (17º).** Cria até quatro cópias e move qualquer número delas com a mesma Ação Rápida.

### Campeão da Batalha

*A força da batalha, da estratégia e do herói guerreiro.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Golpe Inspirado, Escudo de Convicção |
| 2 | Arma Energizada, Arma Fantasma |
| 3 | Aura de Batalha, Guardiões Espectrais |
| 4 | Movimento Livre, Pele de Pedra |
| 5 | Coluna de Plasma, Paralisia Total |

**Treinamentos (1º).** Armamento Pesado e Blindagem Pesada.

**Soldado da Fonte (1º) ({ch 1}).** Ao usar a Ação Atacar, pode fazer um ataque com arma como Ação Rápida.

**Pulso: Golpe Guiado (2º).** Depois de ver a rolagem de um ataque, soma +10.

**Pulso: Bênção do Estrategista (6º).** Com a Reação, dá +10 ao ataque de uma criatura a até 9 m, depois de ver a rolagem.

**Golpe da Fonte (8º).** Mesmo tipo de dano da arma.

**Avatar da Batalha (17º).** Resistência a Dano de Concussão, perfurante e cortante de armas comuns.

### Campeão da Entropia

*A própria Morte, ou uma força que se alimenta do fim das coisas.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Vitalidade Reserva, Raio Tóxico |
| 2 | Sobrecarga Sensorial, Raio Debilitante |
| 3 | Reanimar Cadáveres, Toque Vampírico |
| 4 | Drenagem Vital, Última Chance |
| 5 | Barreira Repulsora, Nuvem Letal |

**Treinamento (1º).** Armamento Pesado.

**Ceifador (1º).** Aprende uma Técnica de entropia. Técnicas de entropia que miram uma criatura podem mirar duas a até 1,5 m uma da outra.

**Pulso: Toque da Morte (2º).** Ao acertar uma Jogada de Ataque Corpo a Corpo, causa Dano Necrótico extra igual a 5 + 2 × nível.

**Destruição Inevitável (6º).** O Dano Necrótico dos seus poderes e do Pulso ignora Resistência a Dano Necrótico.

**Golpe da Fonte (8º).** Necrótico.

**Ceifador Aprimorado (17º).** Poderes de entropia de Nível de Poder 1 a 5 que miram uma criatura podem mirar duas a até 1,5 m uma da outra.

### Campeão do Nexo

*A entidade é a fonte de todo o poder: o Campeão entende como as forças funcionam.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Detectar Poderes, Mísseis de Energia |
| 2 | Arma Energizada, Assinatura Falsa |
| 3 | Neutralizar Poder, Perímetro de Contenção |
| 4 | Olho Espião, Cofre Dimensional |
| 5 | Contrato Dimensional, Portal de Transporte |

**Iniciado do Nexo (1º).** Proficiência em Ocultismo e duas Técnicas à escolha, que contam como do Campeão.

**Pulso: Banimento (2º).** Com 1 Ação, um celestial, elemental, fada ou demônio a até 9 m faz um Teste de Integridade (Espírito) ou fica repelido por 1 minuto ou até sofrer dano. A partir do 5º nível, se o NA dele for igual ou menor que o limite de Purgar Mortos-Vivos, é banido para a sua dimensão de origem por 1 minuto.

**Quebra-Poderes (6º).** Ao curar um aliado com um poder de NP 1 ou maior, pode encerrar um poder ativo nele de Nível de Poder igual ou menor que o usado.

**Poder Potente (8º).**

**Maestria do Nexo (17º).** Escolhe um poder de NP 6, um de NP 7, um de NP 8 e um de NP 9 e os adiciona como poderes da Especialização.

### Campeão da Bigorna

*O ferreiro primordial, criador de armas lendárias e armaduras indestrutíveis.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Escaneamento, Golpe Incendiário |
| 2 | Superaquecer Metal, Arma Energizada |
| 3 | Arma Elemental, Proteção Elemental |
| 4 | Fabricação Instantânea, Muralha de Fogo |
| 5 | Animar Objetos, Materialização |

**Treinamento e ferramenta (1º).** Blindagem Pesada e proficiência em kit de fabricação.

**Toque da Bigorna (1º).** Ao fim de uma Recuperação, toca uma arma ou armadura comum e a torna especial: +1 na CA ou +1 no ataque e no dano, até a próxima Recuperação.

**Pulso: Mãos do Artesão (2º).** Num ritual de 1 hora, cria um objeto de metal comum de até 100 cr, consumindo metal de valor igual.

**Alma de Aço (6º).** Resistência a Dano de Fogo e +1 na CA usando armadura pesada.

**Golpe da Fonte (8º).** Fogo.

**Avatar da Bigorna (17º).** Imunidade a Dano de Fogo e, usando armadura pesada, Resistência a Dano de Concussão, perfurante e cortante de armas comuns.

### Campeão da Travessia

*O guardião da fronteira entre a vida e a morte: ninguém parte antes da hora.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Abalo Moral, Vitalidade Reserva |
| 2 | Estase, Raio Debilitante |
| 3 | Desfibrilação, Toque Vampírico |
| 4 | Drenagem Vital, Última Chance |
| 5 | Barreira Repulsora, Ressuscitar |

**Guarda da Mortalidade (1º).** Ao curar uma criatura que está com 0 PV, usa o valor máximo de cada dado. Aprende Pulso Vital, que para ele tem alcance de 9 m e pode ser ativado como Ação Rápida.

**Radar da Morte (1º) ({ch 1}).** Com 1 Ação, sente mortos-vivos a até 18 m até o fim do próximo turno.

**Pulso: Marca do Fim (2º).** Com 1 Ação, marca uma criatura a até 9 m. O próximo ataque que acertá-la antes do fim do próximo turno dele causa dano dobrado.

**Sentinela da Travessia (6º) ({ch 3}).** Com a Reação, transforma um acerto crítico contra ele ou um aliado a até 9 m em acerto normal.

**Poder Potente (8º).**

**Ceifa Vital (17º).** Quando um inimigo morre a até 9 m, ele ou um aliado a até 9 m recupera PV iguais às Matrizes de Vitalidade do inimigo. Uma vez por turno.

### Campeão da Ordem

*A lei, a hierarquia e a justiça instituída.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Ordem Psíquica, Coragem Heroica |
| 2 | Paralisia Neural, Zona da Verdade |
| 3 | Impulso Regenerador em Massa, Campo de Lentidão |
| 4 | Compulsão, Rastreamento |
| 5 | Consulta à Fonte, Dominação Mental |

**Treinamento e perícia (1º).** Blindagem Pesada e proficiência em Intimidação ou Persuasão.

**Voz da Autoridade (1º).** Ao ativar um poder de NP 1 ou maior que mire um aliado, esse aliado pode usar a Reação logo depois para fazer um ataque com arma contra uma criatura escolhida pelo Campeão.

**Pulso: Ordem Direta (2º).** Com 1 Ação, cada criatura escolhida a até 9 m faz um Teste de Integridade (Espírito) ou fica dominada até o fim do próximo turno dele ou até sofrer dano. Ele pode fazer as dominadas largarem o que seguram.

**Encarnação da Ordem (6º) ({ch 3}).** Ativa poderes de mente de Nível de Poder 1 ou maior com uma Ação Rápida em vez de 1 Ação.

**Golpe da Fonte (8º).** Psíquico.

**Ira da Ordem (17º).** Ao causar o Golpe da Fonte, pode amaldiçoar o alvo: o próximo aliado que acertá-lo causa +2d8 de Dano de Psíquico. Uma vez por turno.

### Campeão da Harmonia

*A força que une as pessoas: o poder de uma equipe vale mais que o de um herói.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Coragem Heroica, Aura de Trégua |
| 2 | Reforço Vital, Elo Protetor |
| 3 | Farol de Esperança, Transmissão Mental |
| 4 | Aura de Pureza, Bolha de Força |
| 5 | Restauração Total, Rede Telepática |

**Mediador (1º).** Proficiência em Intuição, Atuação ou Persuasão.

**Laço Encorajador (1º) ({ch 1}).** Com 1 Ação, liga um número de criaturas voluntárias a até 9 m igual ao Bônus de Proficiência, por 10 minutos. Enquanto estiverem a até 9 m de outra criatura ligada, cada uma pode somar 1d4 a um ataque, Teste de Parâmetro ou Teste de Integridade por turno.

**Pulso: Bálsamo da Harmonia (2º).** Com 1 Ação, move-se até o Deslocamento sem provocar Contra-ataques e cura 2d6 + modificador de Espírito cada criatura a até 1,5 m por onde passar (uma vez cada).

**Laço Protetor (6º).** Quando uma criatura ligada sofre dano, outra criatura ligada a até 9 m pode usar a Reação para se teleportar para perto dela e sofrer o dano no lugar.

**Poder Potente (8º).**

**Laço Expandido (17º).** Os laços passam a funcionar a até 18 m, e quem usar o Laço Protetor ganha Resistência ao dano recebido.

### Campeão da Penumbra

*O guardião da noite: protege quem dorme e afasta o medo do escuro.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Marcador de Alvo, Pulso Sonífero |
| 2 | Feixe Lunar, Ver o Invisível |
| 3 | Aura Revigorante, Domo de Força |
| 4 | Aura Vital, Invisibilidade Total |
| 5 | Campo de Resistência, Duplo Holográfico |

**Treinamentos (1º).** Armamento Pesado e Blindagem Pesada.

**Olhos da Noite (1º).** Visão no escuro de 90 m. **Compartilhar ({ch 1}):** com 1 Ação, compartilha essa visão com um número de criaturas voluntárias a até 3 m igual ao modificador de Espírito, por 1 hora.

**Sinal de Alerta (1º).** Com 1 Ação, dá a uma criatura Vantagem na próxima rolagem de Iniciativa.

**Pulso: Santuário da Penumbra (2º).** Com 1 Ação, cria uma esfera de penumbra de 9 m ao redor de si por 1 minuto. Quando uma criatura escolhida termina o turno nela, ele pode dar 1d6 + nível de PV temporários ou encerrar um efeito de dominado ou amedrontado.

**Passos da Noite (6º) ({ch 3}).** Na penumbra ou escuridão, com uma Ação Rápida, ganha voo igual ao Deslocamento por 1 minuto.

**Golpe da Fonte (8º).** Radiante.

**Mortalha da Penumbra (17º).** Ele e aliados dentro do Santuário da Penumbra têm meia cobertura.
:::
`,Rl=String.raw`
# Guardião da Natureza {#guardiao-da-natureza arquetipo}

O Guardião da Natureza tem um vínculo com as forças vivas do planeta. Pode ter nascido com ele, recebido de um espírito antigo ou ganhado num acidente químico num pântano. Ele fala com animais, faz plantas crescerem, chama tempestades e assume a forma de feras. Defende o mundo natural, às vezes contra a própria humanidade.

No grupo, ele é o mais versátil: cura, controla o terreno, invoca aliados e, com a Forma Bestial, pode virar o tanque ou o batedor.

**Poderes típicos:** manipulação vegetal, animais, elementos, transformação, regeneração, comunicação com a natureza e controle climático.

:::ficha
- **Parâmetro principal:** Espírito
- **Testes de Integridade:** Lógica e Espírito
- **Matriz de Vitalidade:** d8
- **Especialização:** 2º nível (Clã)
:::

## Progressão do Guardião da Natureza

{tabela progressao}
| Nível | Prof. | Características | Téc. | Nível máx. |
|---|---|---|---|---|
| 1 | +2 | Código Verde, Uso de Poderes | 2 | 1 |
| 2 | +2 | Forma Bestial, Parceiro Bestial, Especialização | 2 | 1 |
| 3 | +2 | — | 2 | 2 |
| 4 | +2 | Forma Bestial aprimorada, Evolução, Versatilidade Básica | 3 | 2 |
| 5 | +3 | — | 3 | 3 |
| 6 | +3 | Característica de Especialização | 3 | 3 |
| 7 | +3 | — | 3 | 4 |
| 8 | +3 | Forma Bestial aprimorada, Evolução, Versatilidade Básica | 3 | 4 |
| 9 | +4 | — | 3 | 5 |
| 10 | +4 | Característica de Especialização | 4 | 5 |
| 11 | +4 | — | 4 | 6 |
| 12 | +4 | Evolução, Versatilidade Básica | 4 | 6 |
| 13 | +5 | — | 4 | 7 |
| 14 | +5 | Característica de Especialização | 4 | 7 |
| 15 | +5 | — | 4 | 8 |
| 16 | +5 | Evolução, Versatilidade Básica | 4 | 8 |
| 17 | +6 | — | 4 | 9 |
| 18 | +6 | Corpo Atemporal, Poderes da Fera | 4 | 9 |
| 19 | +6 | Evolução, Versatilidade Básica | 4 | 9 |
| 20 | +6 | Apoteose | 4 | 9 |

## Características do Arquétipo

- **Pontos de Vida:** 24 + modificador de Resistência
- **Níveis seguintes:** 8 + modificador de Resistência
- **Matriz de Vitalidade:** d8

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo, Armas de Fogo e Blindagem Leve. Muitos Guardiões evitam armaduras de metal por tabu pessoal, mas isso é escolha do jogador.
- **Ferramentas:** kit de herbalismo
- **Integridade:** Lógica e Espírito
- **Perícias:** escolha duas entre Ocultismo, Adestrar Animais, Intuição, Medicina, Natureza, Percepção, Religião e Sobrevivência

### Uso de Poderes (1º nível)

O poder vem da ligação com a natureza. Um cajado, um galho vivo, uma pedra ou o próprio corpo coberto de plantas pode servir de Foco de Poder.

- **Parâmetro de poder:** Espírito
- **CD de Poder:** 8 + Bônus de Proficiência + modificador de Espírito
- **Jogada de Ataque de Poder:** Bônus de Proficiência + modificador de Espírito
- **Técnicas:** conhece 2 no 1º nível e mais conforme a tabela.
- **Poderes preparados:** após uma Recuperação, prepara poderes em número igual a Espírito + nível (mínimo 1), de Níveis de Poder que pode ativar.
- **À vontade:** ativa qualquer poder preparado sem limite de usos, até o Nível de Poder máximo, seguindo a Sobrecarga.
- **Rituais:** pode ativar como ritual qualquer poder preparado com a marca Tau (Τ) de ritual.

## Características por nível

### Código Verde (1º nível)

Conhece uma língua secreta dos guardiões. Pode deixar mensagens ocultas na natureza: quem conhece a língua as nota automaticamente; outros precisam de Percepção CD 15 para notar, mas não conseguem ler.

### Forma Bestial (2º nível) {ch 1}

Com 1 Ação, assume a forma de uma fera que já viu. A forma dura até metade do nível em horas; volta ao normal com uma Ação Rápida, ou automaticamente se cair inconsciente, chegar a 0 PV ou morrer.

| Nível | NA máximo | Limitação |
|---|---|---|
| 2º | 1/4 | Sem voo nem nado |
| 4º | 1/2 | Sem voo |
| 8º | 1 | — |

Na forma de fera:

- usa as estatísticas da fera, mas mantém Lógica, Espírito, Magnetismo, personalidade, proficiências em perícias e em Integridade (usa o maior bônus entre os dois);
- ganha os PV e as Matrizes de Vitalidade da fera;
- ao voltar, retorna aos PV que tinha, e o dano excedente passa para a forma normal;
- não ativa poderes, mas mantém Concentração e pode usar características que a forma permita;
- o equipamento cai, se funde à forma ou continua vestido, a critério do Mestre.

### Parceiro Bestial (2º nível)

Pode ativar Companheiro Drone à vontade (Sobrecarga normal), com 1 Ação. O companheiro é um espírito da natureza (conta como fada) e dura metade do nível em horas.

### Especialização: Clã (2º nível)

O Guardião escolhe um Clã, que concede características no 2º, 6º, 10º e 14º níveis.

### Evolução (4º, 8º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até o máximo de 20. Pode ser trocada por um Talento.

### Versatilidade Básica (4º, 8º, 12º, 16º e 19º níveis)

Pode trocar uma Técnica por outra.

### Corpo Atemporal (18º nível)

Envelhece um ano a cada dez.

### Poderes da Fera (18º nível)

Pode ativar poderes na Forma Bestial.

### Apoteose: Avatar Primordial (20º nível)

Forma Bestial deixa de ser Característica de Carga Heroica: o Guardião a usa sem gastar Cargas Heroicas.

**Poder Primordial {ch 9}.** Ativa um poder de qualquer Nível de Poder que possa ativar sem o Teste de Sobrecarga do poder.

## Especializações: Clãs

O Clã é escolhido no 2º nível e concede características no 2º, 6º, 10º e 14º níveis.

| Clã | Papel |
|---|---|
| Guardião do Território | Usuário de poderes puro, ligado a um bioma |
| Guardião Metamorfo | Metamorfo de combate |
| Guardião dos Sonhos | Cura e teletransporte |
| Guardião da Matilha | Invocador de feras e espíritos |
| Guardião do Micélio | Decomposição, fungos e necrótico |
| Guardião das Estrelas | Poder cósmico das constelações |
| Guardião da Fênix | Fogo que destrói e renova, com um espírito aliado |

:::tabs
### Guardião do Território

*O Guardião está ligado a um bioma específico e tira poder dele.*

**Técnica Extra (2º).** Uma Técnica a mais.

**Fôlego da Terra (2º) ({ch 1}).** Ao fim de uma Pausa, escolhe Níveis de Poder cuja soma seja até metade do nível (arredondado para cima), nenhum de 6º ou maior. Na próxima cena, esses Níveis de Poder já começam liberados, sem Teste de Sobrecarga.

**Poderes do Território (3º, 5º, 7º e 9º).** Escolha um bioma; os poderes dele ficam sempre preparados, sem contar no limite.

| Bioma | Nível de Poder 2 | Nível de Poder 3 | Nível de Poder 4 | Nível de Poder 5 |
|---|---|---|---|---|
| Ártico | Paralisia Neural, Campo de Espinhos | Tempestade de Gelo, Campo de Lentidão | Movimento Livre, Nevasca | Leitura Ambiental, Cone Criogênico |
| Costa | Cópias Holográficas, Salto Quântico | Respiração Aquática, Andar sobre a Água | Hidrocinese, Movimento Livre | Elemental Colossal, Vigilância Remota |
| Deserto | Vulto, Zona de Silêncio | Sintetizar Suprimentos, Proteção Elemental | Drenagem Vital, Terreno Holográfico | Praga de Insetos, Muralha de Pedra |
| Floresta | Pele Blindada, Aderência | Tempestade Elétrica, Crescimento Acelerado | Precognição, Movimento Livre | Leitura Ambiental, Trânsito Arbóreo |
| Campos | Invisibilidade, Furtividade Coletiva | Sol Artificial, Supervelocidade | Precognição, Movimento Livre | Invasão Onírica, Praga de Insetos |
| Montanha | Aderência, Campo de Espinhos | Relâmpago, Fusão com a Pedra | Geocinese, Pele de Pedra | Passagem, Muralha de Pedra |
| Pântano | Escuridão, Projétil Ácido | Andar sobre a Água, Gás Nauseante | Movimento Livre, Rastreamento | Praga de Insetos, Vigilância Remota |
| Subterrâneo | Aderência, Teia | Forma Gasosa, Gás Nauseante | Invisibilidade Total, Geocinese | Nuvem Letal, Praga de Insetos |

**Bioma urbano** (opcional do cenário): o Mestre pode permitir a cidade como bioma, usando os poderes de Subterrâneo ou Montanha.

**Passo do Território (6º).** Terreno difícil comum não o atrasa, e plantas comuns não o ferem. Vantagem em Testes de Integridade contra plantas criadas por poderes.

**Proteção da Natureza (10º).** Imune a ficar dominado ou amedrontado por elementais e fadas, e imune a Dano de Veneno e doença.

**Santuário da Natureza (14º).** Feras e plantas que tentem atacá-lo fazem um Teste de Integridade (Espírito) ou escolhem outro alvo.

### Guardião Metamorfo

*O poder do Guardião está na transformação: ele é mais fera do que gente.*

**Forma Bestial de Combate (2º) ({ch 1}).** Usa a Forma Bestial como Ação Rápida. Na forma, com uma Ação Rápida, recupera 1d8 PV por Nível de Poder (até o Nível de Poder máximo).

**Formas do Clã (2º).** Pode virar feras de NA 1 com a Forma Bestial (mantendo as outras limitações). A partir do 6º nível, NA até o nível dividido por 3.

**Golpe Primordial (6º).** Ataques na forma de fera contam como especiais para superar resistência e imunidade.

**Forma Elemental (10º) ({ch 5}).** Ao usar a Forma Bestial, pode virar um elemental do ar, da terra, do fogo ou da água, pagando esse custo em vez do da Forma Bestial.

**Mil Formas (14º).** Mutação Pessoal à vontade, sem Teste de Sobrecarga.

### Guardião dos Sonhos

*Ligado a um reino onírico, ele cura feridas e abre caminhos secretos.*

**Orvalho Curativo (2º) ({ch 1}).** Com uma Ação Rápida, cura uma criatura a até 36 m em até metade do nível (mínimo 1) em d6 por uso. Ela também ganha 1 PV temporário por dado.

**Refúgio Oculto (6º).** Numa Pausa ou Recuperação, cria uma esfera invisível de 9 m: aliados dentro ganham +5 em Furtividade e Percepção, e a luz de chamas não escapa dela.

**Caminhos Ocultos (10º) ({ch 5}).** Com uma Ação Rápida, teleporta até 18 m; ou, com 1 Ação, teleporta uma criatura voluntária tocada até 9 m.

**Andarilho dos Sonhos (14º) ({ch 8}).** Ao fim de uma Pausa, ativa Invasão Onírica, Vigilância Remota ou Portal de Transporte (para o local da última Recuperação), sem o Teste de Sobrecarga do poder.

### Guardião da Matilha

*Protetor de todas as criaturas, que luta ao lado delas.*

**Voz Selvagem (2º).** Aprende a língua das fadas e conversa com feras.

**Totem Animal (2º) ({ch 1}).** Com uma Ação Rápida, invoca um espírito a até 18 m que cria uma aura de 9 m por 1 minuto; pode movê-lo 18 m com uma Ação Rápida. Escolha o espírito:

- **Urso:** aliados na aura ganham 5 + nível de PV temporários e Vantagem em Testes de Parâmetro (Potência).
- **Falcão:** com a Reação, dá Vantagem a um ataque contra um alvo na aura; aliados têm Vantagem em Percepção.
- **Cervo:** Vantagem para detectar criaturas na aura, e poderes de cura dele curam +nível em cada criatura na aura.

**Alfa da Matilha (6º).** Feras e fadas que ele invoca ganham +2 PV por Matriz de Vitalidade e ataques naturais especiais.

**Espírito Guardião (10º).** Feras e fadas invocadas que terminam o turno na aura recuperam metade do nível em PV.

**Matilha Fiel (14º) ({ch 8}).** Ao cair a 0 PV ou ficar incapacitado, ativa Matilha Espiritual no Nível de Poder 9: quatro feras de NA 2 ou menor o protegem por 1 hora, sem Concentração.

### Guardião do Micélio

*O ciclo de decomposição: fungos, vida que nasce da morte.*

**Poderes do Clã** (sempre preparados).

| NP | Poderes |
|---|---|
| Técnica | Toque Necrótico |
| 2 | Sobrecarga Sensorial, Estase |
| 3 | Reanimar Cadáveres, Forma Gasosa |
| 4 | Drenagem Vital, Colapso Mental |
| 5 | Nuvem Letal, Vírus |

**Halo de Esporos (2º).** Quando uma criatura se move a até 3 m dele ou começa o turno ali, pode usar a Reação: ela faz um Teste de Integridade (Resistência) ou sofre 1d4 de Dano Necrótico (1d6 no 6º, 1d8 no 10º, 1d10 no 14º).

**Entidade Simbiótica (2º) ({ch 1}).** Com 1 Ação, ganha 4 PV temporários por nível por 10 minutos. Enquanto durarem, o Halo rola o dano duas vezes e as Jogadas de Ataque Corpo a Corpo causam +1d6 de Dano Necrótico.

**Infestação Fúngica (6º) ({ch 3}).** Quando uma fera ou humanoide Pequeno ou Médio morre a até 3 m, pode reanimá-lo como zumbi com 1 PV por 1 hora.

**Esporos Espalhados (10º).** Com a Entidade Simbiótica ativa, lança esporos num cubo de 3 m a até 9 m, que causa o dano do Halo a quem entra ou começa o turno nele.

**Corpo Fúngico (14º).** Imune a ficar cego, surdo, amedrontado e envenenado. Críticos contra ele viram acertos normais, a menos que esteja incapacitado.

### Guardião das Estrelas

*O poder das constelações, ou de uma consciência cósmica.*

**Mapa Estelar (2º).** Um objeto Minúsculo (um tablet, um mapa ou uma tatuagem) que é Foco de Poder. Conhece Intuição Tática e tem Raio Marcador sempre preparado; pode ativar Raio Marcador à vontade (Sobrecarga normal).

**Forma Estelar (2º) ({ch 1}).** Com uma Ação Rápida, assume uma forma luminosa por 10 minutos. Escolha a constelação:

- **Arqueiro:** ao ativar, e como Ação Rápida nos turnos seguintes, faz uma Jogada de Ataque de Poder à Distância a até 18 m: 1d8 + Espírito de Dano Radiante.
- **Cálice:** ao curar com um poder, ele ou uma criatura a até 9 m recupera mais 1d8 + Espírito.
- **Dragão:** resultados de 9 ou menos no d20 contam como 10 em Testes de Parâmetro (Lógica), Espírito e Concentração.

**Presságio Cósmico (6º) ({ch 3}).** Após uma Recuperação, rola um dado. Par: com a Reação, soma 1d6 à rolagem de um aliado a até 9 m. Ímpar: subtrai 1d6 da rolagem de um inimigo.

**Constelações Cintilantes (10º).** Arqueiro e Cálice passam a 2d8; Dragão dá voo de 6 m com pairar. Pode trocar de constelação no início de cada turno.

**Repleto de Estrelas (14º).** Na Forma Estelar, Resistência a Dano de Concussão, perfurante e cortante.

### Guardião da Fênix

*O fogo que destrói para que algo novo cresça, com um espírito de chamas ao lado.*

**Poderes do Clã** (sempre preparados).

| NP | Poderes |
|---|---|
| 1 | Lança-Chamas, Toque Regenerador |
| 2 | Esfera de Plasma, Raios Térmicos |
| 3 | Crescimento Acelerado, Desfibrilação |
| 4 | Aura Vital, Escudo Térmico |
| 5 | Coluna de Plasma, Regeneração em Massa |

**Espírito da Fênix (2º) ({ch 1}).** Com 1 Ação, invoca um espírito a até 9 m por 1 hora; criaturas a até 3 m dele fazem um Teste de Integridade (Reflexos) ou sofrem 2d6 de Dano de Fogo. O espírito age logo após ele e só faz Esquivar sem ordem (ordem custa uma Ação Rápida). Ele tem:

- **Estatísticas:** CA 13; PV 5 + 5 × nível; Deslocamento e voo 9 m; imune a Dano de Fogo e a várias condições.
- **Semente de Chamas:** Jogada de Ataque de Poder à Distância, 18 m, causando Dano de Fogo igual a 1d6 + Bônus de Proficiência.
- **Teletransporte Ígneo:** teleporta-se com aliados voluntários até 4,5 m; inimigos a até 1,5 m do ponto de partida fazem um Teste de Integridade (Reflexos) ou sofrem Dano de Fogo igual a 1d6 + Bônus de Proficiência.

**Vínculo Aprimorado (6º).** Com o espírito presente, poderes que causam fogo ou curam somam 1d8 a uma rolagem e podem sair do espaço do espírito.

**Chamas Cauterizantes (10º) ({ch 5}).** Quando uma criatura morre a até 9 m dele ou do espírito, surge uma chama no lugar por 1 minuto. Com a Reação, quando uma criatura entra nesse espaço, cura ou causa 2d10 + Espírito de Dano de Fogo a ela.

**Renascimento Ardente (14º) ({ch 8}).** Ao cair a 0 PV com o espírito a até 36 m, sacrifica o espírito e volta com metade dos PV máximos.
:::

# Controlador de Energia {#controlador-de-energia arquetipo}

O Controlador de Energia nasceu com o poder. Uma mutação, uma linhagem alienígena, uma centelha cósmica no DNA: a energia vive dentro dele e responde à sua vontade. Fogo, gelo, eletricidade, telecinese, telepatia ou algo que ainda não tem nome. Ele não estudou para isso. Ele aprendeu a não explodir.

No grupo, ele é o canhão de vidro: o maior dano de poder, com a flexibilidade de moldar cada poder com o Metapoder, mas frágil de perto.

**Poderes típicos:** energia, elementos, telepatia, telecinese, mutação, voo, manipulação de matéria e poderes psíquicos.

:::ficha
- **Parâmetro principal:** Magnetismo
- **Testes de Integridade:** Resistência e Magnetismo
- **Matriz de Vitalidade:** d6
- **Especialização:** 1º nível (Origem)
:::

**Vantagem natural.** Com proficiência em Testes de Integridade (Resistência), o Controlador é o Arquétipo que melhor resiste à Sobrecarga. Seu corpo foi feito para conduzir energia.

## Progressão do Controlador de Energia

{tabela progressao}
| Nível | Prof. | Características | Téc. | Poderes | Nível máx. |
|---|---|---|---|---|---|
| 1 | +2 | Uso de Poderes, Especialização | 4 | 2 | 1 |
| 2 | +2 | Fonte de Energia | 4 | 3 | 1 |
| 3 | +2 | Metapoder | 4 | 4 | 2 |
| 4 | +2 | Evolução, Versatilidade Inata | 5 | 5 | 2 |
| 5 | +3 | Orientação Inata | 5 | 6 | 3 |
| 6 | +3 | Característica de Especialização | 5 | 7 | 3 |
| 7 | +3 | — | 5 | 8 | 4 |
| 8 | +3 | Evolução, Versatilidade Inata | 5 | 9 | 4 |
| 9 | +4 | — | 5 | 10 | 5 |
| 10 | +4 | Metapoder | 6 | 11 | 5 |
| 11 | +4 | — | 6 | 12 | 6 |
| 12 | +4 | Evolução, Versatilidade Inata | 6 | 12 | 6 |
| 13 | +5 | — | 6 | 13 | 7 |
| 14 | +5 | Característica de Especialização | 6 | 13 | 7 |
| 15 | +5 | — | 6 | 14 | 8 |
| 16 | +5 | Evolução, Versatilidade Inata | 6 | 14 | 8 |
| 17 | +6 | Metapoder | 6 | 15 | 9 |
| 18 | +6 | Característica de Especialização | 6 | 15 | 9 |
| 19 | +6 | Evolução, Versatilidade Inata | 6 | 15 | 9 |
| 20 | +6 | Apoteose | 6 | 15 | 9 |

## Características do Arquétipo

- **Pontos de Vida:** 18 + modificador de Resistência
- **Níveis seguintes:** 6 + modificador de Resistência
- **Matriz de Vitalidade:** d6

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo e Armas de Fogo
- **Ferramentas:** nenhuma
- **Integridade:** Resistência e Magnetismo
- **Perícias:** escolha duas entre Ocultismo, Enganação, Intuição, Intimidação, Persuasão e Religião

### Uso de Poderes (1º nível)

O poder vem de dentro. O Controlador não precisa de foco, mas pode usar um objeto para direcionar a energia, como luvas, um bastão ou um cristal.

- **Parâmetro de poder:** Magnetismo
- **CD de Poder:** 8 + Bônus de Proficiência + modificador de Magnetismo
- **Jogada de Ataque de Poder:** Bônus de Proficiência + modificador de Magnetismo
- **Técnicas e conhecidos:** conforme a tabela, sempre de Níveis de Poder que já pode ativar. Ao subir de nível, pode trocar um poder conhecido por outro.
- **À vontade:** ativa qualquer poder conhecido sem limite de usos, até o Nível de Poder máximo, seguindo a Sobrecarga.

## Características por nível

### Especialização: Origem (1º nível)

O Controlador escolhe a origem do seu poder, que é a sua Especialização. Ela concede características no 1º, 6º, 14º e 18º níveis.

### Fonte de Energia (2º nível) {ch 2–7}

A energia do Controlador obedece antes de queimar. Ele pode forçar o próprio corpo a abrir um Nível de Poder de uma vez.

**Sobrecarga Controlada.** Com uma Ação Rápida, o Controlador libera um Nível de Poder na cena, sem o Teste de Sobrecarga daquele Nível de Poder. Em vez dele, gasta as Cargas Heroicas indicadas na tabela.

| Nível liberado | Cargas Heroicas |
|---|---|
| 1 | 2 |
| 2 | 3 |
| 3 | 5 |
| 4 | 6 |
| 5 | 7 |

Níveis de Poder 6 ou maiores não podem ser liberados assim.

### Metapoder (3º, 10º e 17º níveis) {ch 1–9}

O Controlador molda os próprios poderes. Aprende 2 opções no 3º nível e mais 1 no 10º e no 17º. Só pode usar uma opção por poder, salvo indicação.

Cada opção é uma Característica de Carga Heroica, com o custo indicado na tabela.

{tabela filtro}
| Metapoder | Cargas Heroicas | Efeito |
|---|---|---|
| Poder Cuidadoso | 1 | Até um número de criaturas igual ao modificador de Magnetismo passam automaticamente no Teste de Integridade contra o poder |
| Poder Distante | 1 | Dobra o alcance; toque vira 9 m |
| Poder Potencializado | 1 | Rola de novo até um número de dados de dano igual ao modificador de Magnetismo. Pode combinar com outro Metapoder |
| Poder Estendido | 1 | Dobra a duração (1 minuto ou mais), até 24 horas |
| Poder Intensificado | 3 | Um alvo tem Desvantagem no primeiro Teste de Integridade contra o poder |
| Poder Acelerado | 2 | Tempo de ativação de 1 Ação vira Ação Rápida |
| Poder Teleguiado | 2 | Rola de novo uma Jogada de Ataque de Poder que errou. Pode combinar com outro Metapoder |
| Poder Sutil | 1 | O poder se manifesta sem nenhum sinal visível ou audível: quem não for afetado não percebe que algo foi ativado |
| Poder Convertido | 1 | Troca o tipo de dano entre ácido, frio, fogo, elétrico, veneno e trovão |
| Poder Duplicado | = Nível de Poder (mínimo 1) | Um poder de alvo único atinge um segundo alvo |

### Evolução (4º, 8º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até o máximo de 20. Pode ser trocada por um Talento.

### Versatilidade Inata (4º, 8º, 12º, 16º e 19º níveis)

Pode trocar uma opção de Metapoder por outra, ou uma Técnica por outra.

### Orientação Inata (5º nível) {ch 1}

Ao falhar num Teste de Parâmetro, rola o d20 de novo e usa o novo resultado.

### Apoteose: Restauração Inata (20º nível)

A energia do Controlador se recompõe sozinha. Ao fim de uma Pausa, ele remove 1 nível de Exaustão Η. Além disso, a primeira ativação em cada cena de Sobrecarga Controlada ou de uma opção de Metapoder que custe 4 ou menos não gasta Cargas Heroicas.

## Especializações: Origens

A Origem é escolhida no 1º nível e explica de onde vem o poder inato.

| Origem | Papel |
|---|---|
| Energia Elemental | Resistente, elemental e com voo |
| Energia Caótica | Poder imprevisível e sorte |
| Energia Mental | Telepatia e poderes psíquicos |
| Energia Algorítmica | Ordem, proteção e equilíbrio |
| Energia Cósmica | Afinidade cósmica; cura |
| Energia Sombria | Trevas, teletransporte e um cão de sombras |
| Energia da Tempestade | Voo, raio e trovão |
| Energia Lunar | Poder que muda com as fases da lua |

:::tabs
### Energia Elemental

*O corpo dele canaliza um elemento puro. A energia corre sob a pele e explode para fora quando ele quer.*

**Núcleo Elemental (1º).** Escolhe um tipo de energia: ácido, elétrico, fogo, veneno ou frio. Tem Vantagem em Testes de Magnetismo (Intimidação) ao exibir o seu elemento.

**Couraça Elemental (1º).** A pele fica recoberta de energia. +1 PV máximo por nível. Sem armadura, CA 13 + Reflexos.

**Afinidade Elemental (6º).** Ao ativar um poder que causa o seu tipo de dano, soma Magnetismo a uma rolagem de dano. Pode também ganhar resistência a esse tipo por 1 hora ({ch 1}).

**Voo Elemental (14º).** Com uma Ação Rápida, libera uma propulsão de energia e ganha voo igual ao Deslocamento.

**Presença Elemental (18º) ({ch 5}).** Com 1 Ação, emana uma aura de 18 m por 1 minuto (Concentração): criaturas hostis que começam o turno nela fazem Teste de Integridade (Espírito) ou ficam dominadas ou amedrontadas (à escolha).

### Energia Caótica

*O poder dele é instável, e às vezes faz coisas que ninguém esperava.*

**Surto de Energia (1º).** Depois de ativar um poder de NP 1 ou maior, o Mestre pode pedir 1d20. Num 1, role na tabela de Surto de Energia (d20, abaixo), que pode gerar de efeitos úteis a absurdos.

**Maré de Sorte (1º) ({ch 1}).** Ganha Vantagem em um ataque, Teste de Parâmetro ou de Integridade. Se o Mestre provocar um Surto em troca, esta ativação não gasta Cargas Heroicas.

**Distorcer Probabilidade (6º) ({ch 2}).** Com a Reação, quando outra criatura faz um ataque, Teste de Parâmetro ou de Integridade, rola 1d4 e soma ou subtrai o resultado.

**Caos Controlado (14º).** Ao rolar na tabela de Surto, rola duas vezes e escolhe.

**Reação em Cadeia (18º).** Quando um dado de dano de um poder tira o valor máximo, rola mais um desse dado e soma. Uma vez por turno.

**Tabela de Surto de Energia.** Os efeitos acontecem logo após o poder. CD = CD de Poder do herói.

{tabela rolavel}
| d20 | Efeito |
|---|---|
| 1 | Uma explosão centrada no herói: cada criatura a até 3 m, inclusive ele, faz Teste de Integridade (Reflexos) ou sofre 2d6 de Dano de Energia. |
| 2 | O herói fica invisível até o fim do próximo turno ou até atacar. |
| 3 | O herói se teleporta para um espaço aleatório a até 9 m que consiga ver. |
| 4 | A pele brilha: luz plena de 9 m por 1 minuto; ataques contra o herói têm Vantagem enquanto brilhar. |
| 5 | Recupera 2d10 PV. |
| 6 | Por 1 minuto, ganha resistência a um tipo de dano aleatório (role 1d4: fogo, frio, elétrico, trovão). |
| 7 | O próximo poder que ativar nesta cena não exige Teste de Sobrecarga. |
| 8 | Uma criatura aleatória a até 9 m (aliada ou inimiga) faz Teste de Integridade (Espírito) ou fica amedrontada do herói até o fim do próximo turno dela. |
| 9 | O herói levita 1,5 m acima do chão por 1 minuto, deslocando-se normalmente. |
| 10 | Fala apenas com uma voz distorcida e ecoante por 1 minuto; tem Vantagem em Intimidação nesse tempo. |
| 11 | Ganha 1d10 + nível PV temporários. |
| 12 | Uma onda de força empurra 3 m cada criatura a até 3 m dele (Teste de Integridade (Potência) evita). |
| 13 | Até o fim do próximo turno, o Deslocamento do herói dobra. |
| 14 | O cabelo, os olhos ou a roupa mudam de cor até a próxima Recuperação. |
| 15 | Até o fim do próximo turno, o herói tem Desvantagem em ataques e Testes de Integridade. |
| 16 | Raios saltam do corpo: uma criatura aleatória a até 9 m sofre 3d6 de Dano Elétrico (Teste de Integridade (Reflexos) reduz à metade). |
| 17 | O herói e todas as criaturas a até 9 m recuperam 1d8 PV. |
| 18 | Ganha 1 nível de Exaustão. |
| 19 | O tempo pisca: o herói ganha uma Ação extra no próximo turno, só para Atacar, Disparar ou Usar um Objeto. |
| 20 | Escolha qualquer efeito desta tabela. |

*Nota: com Poderes à Vontade, o Controlador ativa poderes com mais frequência, então os Surtos também ficam mais comuns. É um efeito desejado para esta Origem.*

### Energia Mental

*Uma mente tocada por algo de fora, ou simplesmente um cérebro que evoluiu demais.*

**Poderes Psíquicos.** Sempre conhecidos, sem contar no limite.

| NP | Poderes |
|---|---|
| Técnica | Farpa Psíquica |
| 1 | Tentáculos do Vazio, Ruído Psíquico |
| 2 | Calmaria Emocional, Ler Pensamentos |
| 3 | Fome do Vazio, Transmissão Mental |
| 4 | Tentáculos Sombrios, Invocar Aberração |
| 5 | Rede Telepática, Telecinese |

**Fala Telepática (1º).** Com uma Ação Rápida, cria um elo telepático com uma criatura a até 9 m por minutos iguais ao nível, com alcance em quilômetros igual ao modificador de Magnetismo (mínimo 1).

**Poder Psíquico (6º)** (Cargas Heroicas iguais ao NP). Ao ativar um Poder Psíquico, pode ativá-lo sem nenhum sinal visível ou audível e sem o Teste de Sobrecarga do poder.

**Defesas Psíquicas (6º).** Resistência a Dano de Psíquico e Vantagem contra ficar dominado ou amedrontado.

**Mutação Adaptativa (14º) ({ch 1–4}).** Com uma Ação Rápida, escolhe um ou mais benefícios por 10 minutos, {ch 1} por benefício:

- Ver criaturas invisíveis a 18 m.
- Voo igual ao Deslocamento, com pairar.
- Nado igual ao dobro do Deslocamento e respirar na água.
- Passar por espaços de 2,5 cm e gastar 1,5 m para escapar de amarras.

**Colapso Gravitacional (18º) ({ch 5}).** Com 1 Ação, teleporta até 36 m. Cada criatura a até 9 m do ponto de partida faz Teste de Integridade (Potência) ou sofre 3d10 de Dano de Energia e é puxada até lá (metade e sem puxar se passar).

### Energia Algorítmica

*O poder vem de uma força de ordem absoluta: uma IA cósmica, uma dimensão mecânica, as leis da física personificadas.*

**Poderes Mecânicos.** Sempre conhecidos, sem contar no limite.

| NP | Poderes |
|---|---|
| 1 | Perímetro de Alerta, Guarda contra Entidades |
| 2 | Reforço Vital, Purificar Condição |
| 3 | Neutralizar Poder, Proteção Elemental |
| 4 | Movimento Livre, Construir Golem |
| 5 | Restauração Total, Muralha de Força |

**Equalizar Probabilidades (1º) ({ch 1}).** Quando uma criatura a até 18 m vai rolar um d20 com Vantagem ou Desvantagem, pode usar a Reação para anular ambas.

**Escudo Algorítmico (6º) ({ch 1–5}).** Com 1 Ação, protege uma criatura a até 9 m com 1 a 5 d8, {ch 1} por dado. Quando ela sofre dano, pode gastar esses dados, rolar e reduzir o dano pelo total. Dura até a próxima Recuperação ou até ele criar outro.

**Modo de Mira (14º) ({ch 5}).** Com uma Ação Rápida, por 1 minuto: ataques contra ele não têm Vantagem, e nos seus ataques, Testes de Parâmetro e de Integridade, um resultado de 9 ou menos no d20 conta como 10.

**Protocolo de Restauração (18º) ({ch 7}).** Com 1 Ação, num cubo de 9 m: restaura até 100 PV divididos entre criaturas, conserta objetos danificados e encerra poderes de Nível de Poder 6 ou menor nas criaturas e objetos escolhidos.

### Energia Cósmica

*O poder inato vem de uma fonte cósmica de luz, sem Elo nem escolha.*

**Polaridade Cósmica (1º).** Escolhe uma afinidade e ganha o poder extra ligado a ela, que pode ativar à vontade (Sobrecarga normal):

- **Bem:** Toque Regenerador.
- **Mal:** Toque Devastador.
- **Ordem:** Grito de Guerra.
- **Caos:** Abalo Moral.
- **Neutralidade:** Guarda contra Entidades.

**Favorecido pelo Cosmos (1º) ({ch 1}).** Ao falhar num Teste de Integridade ou errar um ataque, soma 2d4.

**Cura Potencializada (6º) ({ch 1}).** Quando ele ou um aliado a até 1,5 m rola dados de cura, rola de novo qualquer número deles. Uma vez por turno.

**Forma Radiante (14º).** Com uma Ação Rápida, manifesta asas de luz e ganha voo de 9 m.

**Regeneração Cósmica (18º) ({ch 8}).** Com uma Ação Rápida, estando abaixo da metade dos PV, recupera metade dos PV máximos.

### Energia Sombria

*O poder vem de uma dimensão de trevas, ou de algo que voltou com ele de uma experiência de quase morte.*

**Visão Umbral (1º).** Visão no escuro de 36 m. A partir do 3º nível, conhece Escuridão (sem contar no limite) e pode ativá-lo à vontade (Sobrecarga normal). Se quiser enxergar dentro da escuridão, ativa-o como Característica de Carga Heroica, por {ch 2}, sem o Teste de Sobrecarga do poder.

**Recusa da Morte (1º) ({ch 1}).** Ao cair a 0 PV sem morrer, faz Teste de Integridade (Magnetismo) (CD 5 + dano sofrido); se passar, fica com 1 PV. Não funciona contra radiante ou acerto crítico.

**Cão de Sombras (6º) ({ch 3}).** Com uma Ação Rápida, invoca um cão de sombras (estatísticas de lobo atroz) que persegue uma criatura a até 36 m por 5 minutos. Ele tem PV temporários iguais à metade do nível, atravessa objetos e sempre sabe onde o alvo está. Enquanto estiver a 1,5 m do alvo, o alvo tem Desvantagem contra os poderes do Controlador.

**Salto Sombrio (14º).** Na penumbra ou escuridão, com uma Ação Rápida, teleporta até 36 m para outro ponto escuro que ele veja.

**Corpo de Sombra (18º) ({ch 6}).** Com uma Ação Rápida, vira sombra por 1 minuto: resistência a todo dano exceto energia e radiante, e atravessa criaturas e objetos como terreno difícil.

### Energia da Tempestade

*A tempestade vive dentro dele.*

**Voz dos Ventos (1º).** Fala, lê e escreve o idioma elemental e seus dialetos, a língua das forças da natureza.

**Impulso Tempestuoso (1º).** Após ativar um poder de NP 1 ou maior, pode usar uma Ação Rápida para voar até 3 m sem provocar Contra-ataques.

**Núcleo da Tempestade (6º).** Resistência a Dano Elétrico e trovão. Ao ativar um poder de NP 1 ou maior que cause esses danos, criaturas escolhidas a até 3 m sofrem elétrico ou trovão igual à metade do nível.

**Controle do Clima (6º).** Controla o clima ao redor: com 1 Ação, para a chuva num raio de 6 m; com uma Ação Rápida, muda a direção do vento num raio de 30 m.

**Descarga Reativa (14º).** Ao ser atingido por uma Jogada de Ataque Corpo a Corpo, pode usar a Reação: o atacante sofre elétrico igual ao nível e faz Teste de Integridade (Potência) ou é empurrado até 6 m.

**Senhor dos Céus (18º).** Imune a Dano Elétrico e trovão e voa a 18 m. Com 1 Ação, reduz o próprio voo a 9 m por 1 hora para dar voo de 9 m a até 3 + Magnetismo aliados a até 9 m ({ch 8}).

### Energia Lunar

*O poder dele muda com o ciclo da lua, ou de um satélite alienígena.*

**Poderes Lunares.** Todos são conhecidos e não contam no limite.

| NP | Lua Cheia | Lua Nova | Lua Crescente |
|---|---|---|---|
| 1 | Escudo Reflexo | Raio Tóxico | Clarão Ofuscante |
| 2 | Purificar Condição | Sobrecarga Sensorial | Mutação Pessoal |
| 3 | Neutralizar Poder | Toque Vampírico | Montaria Holográfica |
| 4 | Última Chance | Colapso Mental | Terreno Holográfico |
| 5 | Rede Telepática | Paralisia Total | Duplo Holográfico |

**Raio Lunar (1º).** Aprende Feixe Solar, que pode mirar duas criaturas a até 1,5 m uma da outra.

**Fase Ativa (1º) ({ch 1}).** Após uma Recuperação, escolhe a fase ativa. Ativa o poder de Nível de Poder 1 dessa fase sem o Teste de Sobrecarga do poder.

**Afinidade de Fase (6º).** Ao usar Metapoder num poder da categoria ligada à fase (Cheia: proteção e percepção; Nova: mente e entropia; Crescente: ilusão e transformação), o custo da opção de Metapoder cai em {ch 1}. Se chegar a 0, a opção não gasta Cargas Heroicas.

**Ciclo Lunar (6º) ({ch 1}).** Com uma Ação Rápida, troca de fase. A partir deste nível, Fase Ativa vale para o poder de Nível de Poder 1 de qualquer fase.

**Ressonância Lunar (14º).** Ganha um bônus permanente, conforme a fase ativa:

- **Cheia:** emite luz e tem Vantagem em Investigação e Percepção.
- **Nova:** Vantagem em Furtividade e, na escuridão, ataques contra ele têm Desvantagem.
- **Crescente:** Resistência a Dano Necrótico e radiante.

**Eclipse (18º) ({ch 5}).** Com uma Ação Rápida, libera o efeito da fase ativa:

- **Cheia:** criaturas escolhidas a até 9 m fazem Teste de Integridade (Resistência) ou ficam cegas, e uma criatura recupera 3d8 PV.
- **Nova:** criaturas escolhidas fazem Teste de Integridade (Reflexos) ou sofrem 3d10 de Dano Necrótico e têm Deslocamento 0, e ele fica invisível.
- **Crescente:** teleporta a si e um aliado até 18 m, e ambos ganham resistência a todo dano.
:::
`,zl=String.raw`
# Especialista em Combate {#especialista-em-combate arquetipo}

O Especialista em Combate é o melhor lutador da sala. Soldado de elite, mercenário, supersoldado, atirador ou duelista, ele domina todas as armas e armaduras e transforma treinamento em vitória. Pode não ter superpoderes, mas ninguém quer enfrentá-lo.

No grupo, ele é a constante: dano alto e confiável, resistência e, conforme a Especialização, tática, liderança ou poderes próprios.

**Poderes típicos:** maestria com armas, combate corpo a corpo, tática, reflexos, equipamentos, precisão e técnicas especiais.

:::ficha
- **Parâmetro principal:** Potência ou Reflexos
- **Testes de Integridade:** Potência e Resistência
- **Matriz de Vitalidade:** d10
- **Especialização:** 3º nível
:::

**Armas de fogo.** Pistolas, fuzis, escopetas e rifles têm estatísticas próprias no [Capítulo 6](#/equipamento/armas).

## Progressão do Especialista em Combate

{tabela progressao}
| Nível | Prof. | Características |
|---|---|---|
| 1 | +2 | Estilo de Luta, Fôlego Renovado |
| 2 | +2 | Surto de Ação |
| 3 | +2 | Especialização |
| 4 | +2 | Evolução, Versatilidade Marcial |
| 5 | +3 | Ataque Extra |
| 6 | +3 | Evolução, Versatilidade Marcial |
| 7 | +3 | Característica de Especialização |
| 8 | +3 | Evolução, Versatilidade Marcial |
| 9 | +4 | Indomável |
| 10 | +4 | Característica de Especialização |
| 11 | +4 | Ataque Extra (2) |
| 12 | +4 | Evolução, Versatilidade Marcial |
| 13 | +5 | — |
| 14 | +5 | Evolução, Versatilidade Marcial |
| 15 | +5 | Característica de Especialização |
| 16 | +5 | Evolução, Versatilidade Marcial |
| 17 | +6 | — |
| 18 | +6 | Característica de Especialização |
| 19 | +6 | Evolução, Versatilidade Marcial |
| 20 | +6 | Apoteose |

## Características do Arquétipo

- **Pontos de Vida:** 30 + modificador de Resistência
- **Níveis seguintes:** 10 + modificador de Resistência
- **Matriz de Vitalidade:** d10

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo, Armas de Fogo, Armamento Pesado, Blindagem Leve e Blindagem Pesada
- **Ferramentas:** nenhuma
- **Integridade:** Potência e Resistência
- **Perícias:** escolha duas entre Acrobacia, Adestrar Animais, Atletismo, História, Intuição, Intimidação, Percepção e Sobrevivência

## Características por nível

### Estilo de Luta (1º nível)

Escolha um estilo. Não pode escolher o mesmo duas vezes.

| Estilo | Efeito |
|---|---|
| **Atirador** | +2 em Jogadas de Ataque à Distância com armas |
| **Combate às Cegas** | Percepção às cegas de 3 m: vê criaturas invisíveis e em escuridão nessa distância, se não estiverem escondidas |
| **Defesa** | +1 na CA usando armadura |
| **Duelo** | +2 no dano com uma arma corpo a corpo em uma mão e nenhuma outra arma |
| **Armas Pesadas** | Rola de novo 1 e 2 nos dados de dano de armas de duas mãos ou versáteis em duas mãos |
| **Interceptação** | Reação: reduz em 1d10 + Bônus de Proficiência o dano de um ataque a uma criatura a até 1,5 m (precisa de escudo ou arma) |
| **Proteção** | Reação: impõe Desvantagem num ataque contra uma criatura a até 1,5 m (precisa de escudo) |
| **Técnica Superior** | Aprende uma Manobra e a usa com um dado de superioridade d6 {ch 1} |
| **Arremesso** | Saca armas de arremesso como parte do ataque e causa +2 de dano com elas |
| **Duas Armas** | Soma o modificador de Parâmetro ao dano do segundo ataque |
| **Luta Desarmada** | Golpe desarmado causa 1d6 + Potência (1d8 com as mãos livres); no início do turno, causa 1d4 numa criatura que estiver agarrando |

### Fôlego Renovado (1º nível) {ch 1}

Com uma Ação Rápida, recupera 1d10 + nível em PV.

### Surto de Ação (2º nível) {ch 1}

No seu turno, ganha uma Ação adicional. No máximo uma vez por turno.

### Especialização (3º nível)

O Especialista escolhe uma Especialização, que concede características no 3º, 7º, 10º, 15º e 18º níveis.

### Evolução (4º, 6º, 8º, 12º, 14º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até o máximo de 20, ou um Talento. O Especialista tem duas Evoluções extras (6º e 14º níveis), mais que qualquer outro Arquétipo.

### Versatilidade Marcial (4º, 6º, 8º, 12º, 14º, 16º e 19º níveis)

Em cada Evolução, pode trocar um Estilo de Luta por outro, ou uma Manobra por outra.

### Ataque Extra (5º e 11º níveis)

Ao usar a Ação Atacar, ataca duas vezes; três no 11º nível.

### Indomável (9º nível) {ch 5}

Ao falhar num Teste de Integridade, rola de novo e usa o novo resultado.

### Apoteose: Máquina de Guerra (20º nível)

Ataque Extra (3): ao usar a Ação Atacar, ataca quatro vezes.

## Especializações

No 3º nível, o Especialista escolhe uma das dez Especializações, que concede características no 3º, 7º, 10º, 15º e 18º níveis.

| Especialização | Papel |
|---|---|
| Especialista Atlético | Simples e letal: críticos e resistência |
| Especialista Tático | Manobras que controlam o combate |
| Especialista Energizado | Combatente com poderes de proteção e destruição |
| Especialista Atirador | Disparos com efeitos especiais |
| Especialista Comandante | Comandante que fortalece a equipe |
| Especialista Protetor | Protetor montado e guarda-costas |
| Especialista Temporal | Luta ao lado de um duplo de si mesmo |
| Especialista Telecinético | Telecinese aplicada ao combate |
| Especialista Titânico | Cresce de tamanho e usa glifos de poder |
| Especialista Honrado | Espírito de luta inquebrável |

:::tabs
### Especialista Atlético

*O auge da forma física humana, ou um pouco além.*

**Crítico Aprimorado (3º).** Acerto crítico com 19 ou 20 em ataques com arma.

**Atleta Notável (7º).** Soma metade do Bônus de Proficiência (arredondada para cima) a Testes de Parâmetro (Potência, Reflexos e Resistência) sem proficiência. Salto em distância com corrida aumenta 30 cm por ponto de modificador de Potência.

**Estilo de Luta Adicional (10º).** Escolhe um segundo Estilo de Luta.

**Crítico Superior (15º).** Acerto crítico com 18 a 20.

**Sobrevivente (18º).** No início de cada turno, se estiver abaixo da metade dos PV e acima de 0, recupera 5 + Resistência PV.

### Especialista Tático

*O estrategista que lê o combate como um tabuleiro.*

**Superioridade em Combate (3º) ({ch 1}).** Usa Manobras com um dado de superioridade d8. Aprende 3 Manobras ([lista mais adiante](#/arquetipos/especialista-em-combate/manobras)) e mais 2 no 7º, 10º e 15º níveis. Usa uma Manobra por ataque. CD das Manobras: 8 + Bônus de Proficiência + Potência ou Reflexos.

**Formação Técnica (3º).** Proficiência com um kit de ofício.

**Leitura de Ameaça (7º).** Observando uma criatura por 1 minuto, descobre se ela é igual, superior ou inferior a ele em duas características: Potência, Reflexos, Resistência, CA, PV atuais, nível total ou nível de Especialista.

**Superioridade Aprimorada (10º e 18º).** O dado de superioridade vira d10 no 10º nível e d12 no 18º.

**Implacável (15º).** Ao rolar Iniciativa, a primeira Manobra que ele usa em cada cena não gasta Cargas Heroicas.

### Especialista Energizado

*Um combatente que aprendeu a usar poderes de energia como parte da luta.*

**Uso de Poderes (3º).** Usa Lógica como Parâmetro de poder. Os poderes conhecidos devem ser de proteção ou energia, exceto os ganhos no 3º, 8º, 14º e 20º níveis, que podem ser de qualquer categoria. Segue Poderes à Vontade e Sobrecarga.

| Nível | Téc. | Poderes | Nível máx. |
|---|---|---|---|
| 3–6 | 2 | 3–4 | 1 |
| 7–9 | 2 | 5–6 | 2 |
| 10–12 | 3 | 7–8 | 2 |
| 13–18 | 3 | 9–11 | 3 |
| 19–20 | 3 | 12–13 | 4 |

**Arma Sincronizada (3º).** Num processo de 1 hora, sincroniza até duas armas com a própria energia. Não pode ser desarmado delas e as chama para a mão com uma Ação Rápida.

**Combate Energizado (7º).** Ao usar a Ação para ativar uma Técnica, faz um ataque com arma como Ação Rápida.

**Golpe Desestabilizador (10º).** Ao acertar uma criatura com arma, ela tem Desvantagem no próximo Teste de Integridade contra um poder dele até o fim do próximo turno.

**Salto de Fase (15º).** Ao usar Surto de Ação, pode se teleportar até 9 m antes ou depois da Ação extra.

**Combate Energizado Aprimorado (18º).** Ao usar a Ação para ativar qualquer poder, faz um ataque com arma como Ação Rápida.

### Especialista Atirador

*Um atirador que carrega cada disparo com energia. As regras pedem arco curto ou longo; o herói pode descrever como arma de fogo, desde que use essas estatísticas.*

**Formação Especial (3º).** Proficiência em Ocultismo ou Natureza e a Técnica Truque Cinético ou Sintonia Natural.

**Disparo Especial (3º) ({ch 1}).** Ao acertar um disparo, aplica um efeito. Conhece 2 opções e mais 1 no 7º, 10º, 15º e 18º níveis. CD 8 + Bônus de Proficiência + Lógica. O dano extra sobe de 2d6 para 4d6 no 18º nível.

| Disparo | Efeito |
|---|---|
| **Exílio Dimensional** | Teste de Integridade (Magnetismo) ou o alvo some para outra dimensão até o fim do próximo turno; a partir do 18º, +2d6 de Dano de Energia |
| **Hipnose** | +2d6 de Dano de Psíquico; Teste de Integridade (Espírito) ou fica dominado por um aliado |
| **Explosão** | +2d6 de Dano de Energia no alvo e em criaturas a até 3 m |
| **Enfraquecimento** | +2d6 de Dano Necrótico; Teste de Integridade (Resistência) ou causa metade do dano com armas |
| **Agarrador** | +2d6 de Dano de Veneno; −3 m de Deslocamento e 2d6 de Dano Cortante ao se mover |
| **Perfuração** | Linha de 9 m; Teste de Integridade (Reflexos) em vez de ataque |
| **Perseguição** | Mira uma criatura que já viu, ignorando cobertura; +2d6 de Dano de Energia e revela a posição |
| **Sombra** | +2d6 de Dano de Psíquico; Teste de Integridade (Espírito) ou só enxerga a 1,5 m |

**Disparo Energizado (7º).** Disparos comuns podem contar como especiais.

**Disparo Curvo (7º).** Ao errar com um disparo energizado, com uma Ação Rápida, rola de novo contra outro alvo a até 18 m.

**Sempre Pronto (15º).** Ao rolar Iniciativa, o primeiro Disparo Especial em cada cena não gasta Cargas Heroicas.

### Especialista Comandante

*O comandante de campo que faz a equipe render mais.*

**Voz de Comando (3º).** Ao usar Fôlego Renovado, até três aliados a até 18 m recuperam PV iguais ao nível dele.

**Negociador (7º).** Proficiência em Persuasão (ou outra perícia) e dobra o Bônus de Proficiência em Persuasão.

**Surto Inspirador (10º).** Ao usar Surto de Ação, um aliado a até 18 m pode usar a Reação para fazer um ataque com arma. Dois aliados no 18º.

**Baluarte (15º).** Ao usar Indomável num Teste de Parâmetro (Lógica, Espírito ou Magnetismo), um aliado a até 18 m que falhou o mesmo teste também rola de novo.

### Especialista Protetor

*O guarda-costas inabalável, a cavalo, de moto ou a pé. O Mestre pode permitir que um veículo funcione como montaria nas regras.*

**Proficiência (3º).** Uma perícia entre Adestrar Animais, História, Intuição, Atuação e Persuasão, ou um idioma.

**Piloto Nato (3º).** Vantagem para não cair da montaria; cai de até 3 m de pé; montar e desmontar custa 1,5 m de movimento.

**Marcar Alvo (3º) ({ch 1}).** Ao acertar uma criatura corpo a corpo, marca-a até o fim do próximo turno: ela tem Desvantagem em ataques contra outros alvos a até 1,5 m dele. Se ela causar dano a outro, ele pode, pagando o custo, fazer uma Jogada de Ataque Corpo a Corpo com Vantagem como Ação Rápida, com dano extra igual à metade do nível.

**Manobra de Proteção (7º) ({ch 3}).** Quando ele ou uma criatura a até 1,5 m é atacada, com a Reação, soma 1d8 à CA do alvo; se ainda acertar, o alvo tem Resistência ao dano.

**Segurar a Linha (10º).** Criaturas que se movem 1,5 m ou mais dentro do seu alcance provocam Contra-ataque; se acertar, o Deslocamento delas cai a 0.

**Investida Feroz (15º).** Depois de se mover 3 m em linha reta, ao acertar uma criatura, ela faz Teste de Integridade (Potência) ou cai. Uma vez por turno.

**Defensor Vigilante (18º).** Ganha uma Reação extra em cada turno alheio, só para Contra-ataques.

### Especialista Temporal

*Ele chama um duplo de si mesmo, vindo de uma linha temporal paralela, e luta pelos dois.*

**Manifestar Eco (3º).** Com uma Ação Rápida, cria um eco a até 4,5 m: CA 14 + Bônus de Proficiência, 1 PV, imune a condições. Pode atacar a partir do espaço do eco, trocar de lugar com ele gastando 4,5 m de movimento e fazer Contra-ataques a partir dele. Dura até ser destruído, ficar a mais de 9 m ou ser dispensado.

**Ataque Sincronizado (3º) ({ch 1}).** Ao usar a Ação Atacar, faz uma Jogada de Ataque Corpo a Corpo extra a partir do eco.

**Projeção Sensorial (7º).** Com 1 Ação, transfere os sentidos para o eco por até 10 minutos (fica cego e surdo); o eco pode se afastar até 300 m.

**Sacrifício do Eco (10º) ({ch 5}).** Com a Reação, teleporta o eco para perto de uma criatura e ele vira o alvo de um ataque contra ela.

**Energia Residual (15º) ({ch 8}).** Quando o eco é destruído por dano, ganha 2d6 + Resistência PV temporários.

**Exército de Um (18º).** Pode manter dois ecos ao mesmo tempo. Ao rolar Iniciativa, o primeiro Ataque Sincronizado em cada cena não gasta Cargas Heroicas.

### Especialista Telecinético

*Um combatente com telecinese, que bate com a mente e com as mãos.*

**Energia Psiônica (3º).** O dado psiônico é d6, d8 no 5º nível, d10 no 11º e d12 no 17º. Usa o dado nestas opções:

- **Campo Protetor ({ch 1}):** com a Reação, reduz o dano sofrido por uma criatura a até 9 m em dado + Lógica.
- **Golpe Psiônico ({ch 1}):** uma vez por turno, ao acertar uma criatura a até 9 m com arma, causa dado + Lógica de energia.
- **Movimento Telecinético ({ch 1}):** com 1 Ação, move um objeto ou criatura voluntária Grande ou menor até 9 m.

**Adepto Telecinético (7º).** Ganha dois efeitos:

- **Salto Psiônico ({ch 3}):** com uma Ação Rápida, ganha voo igual ao dobro do Deslocamento até o fim do turno.
- **Impulso Telecinético:** ao causar dano com Golpe Psiônico, o alvo faz Teste de Integridade (Potência) ou cai ou é empurrado 3 m.

**Mente Protegida (10º) ({ch 5}).** Resistência a Dano de Psíquico. No início do turno, pode, pagando o custo, encerrar efeitos de dominado e amedrontado nele.

**Barreira Cinética (15º) ({ch 8}).** Com uma Ação Rápida, dá meia cobertura a até Lógica criaturas a até 9 m por 1 minuto.

**Mestre Telecinético (18º).** Pode ativar Telecinese à vontade (Sobrecarga normal), usando Lógica. Enquanto se concentra nele, pode fazer um ataque com arma como Ação Rápida.

### Especialista Titânico

*Ele grava glifos de uma antiga civilização de gigantes no equipamento e cresce até virar um colosso.*

**Proficiências (3º).** Kit de fabricação e um idioma ancestral.

**Gravador de Glifos (3º) ({ch 1}).** Conhece 2 glifos e mais 1 no 7º, 10º e 15º. Após uma Recuperação, grava cada glifo num objeto que veste ou segura. Cada glifo dá um efeito passivo e um efeito ativo; o custo vale para cada uso do efeito ativo. CD 8 + Bônus de Proficiência + Resistência.

| Glifo | Nível | Passivo | Ativo |
|---|---|---|---|
| **Névoa** | 3º | Vantagem em Prestidigitação e Enganação | Reação: redireciona um ataque que acertou alguém a até 9 m para outra criatura |
| **Fogo** | 3º | Dobra o Bônus de Proficiência em testes com ferramentas | Ao acertar: +2d6 de Dano de Fogo e Teste de Integridade (Potência) ou fica impedido por 1 minuto, sofrendo 2d6 de Dano de Fogo por turno |
| **Gelo** | 3º | Vantagem em Adestrar Animais e Intimidação | Ação Rápida: +2 em Testes de Parâmetro (Potência e Resistência) por 10 minutos |
| **Pedra** | 3º | Vantagem em Intuição e visão no escuro de 36 m | Reação: criatura a até 9 m faz Teste de Integridade (Espírito) ou fica dominada e imóvel por 1 minuto |
| **Montanha** | 7º | Vantagem e resistência contra veneno | Ação Rápida: Resistência a Dano de Concussão, perfurante e cortante por 1 minuto |
| **Tempestade** | 7º | Vantagem em Ocultismo e não pode ser surpreendido | Ação Rápida: por 1 minuto, Reação para dar Vantagem ou Desvantagem a rolagens a até 18 m |

**Crescimento Titânico (3º) ({ch 1}).** Com uma Ação Rápida, fica Grande por 1 minuto, com Vantagem em Testes de Parâmetro (Potência) e +1d6 de dano num ataque com arma por turno.

**Escudo de Glifos (7º) ({ch 3}).** Quando um aliado a até 18 m é atingido, com a Reação, obriga o atacante a rolar de novo.

**Grande Estatura (10º).** Cresce 3d4 polegadas (cerca de 7 a 30 cm) permanentemente. O dano extra do Crescimento Titânico vira 1d8.

**Mestre dos Glifos (15º).** A primeira ativação do efeito ativo de cada glifo em cada cena não gasta Cargas Heroicas.

**Colosso (18º).** O dano extra vira 1d10, e no Crescimento Titânico pode ficar Enorme, com +1,5 m de alcance.

### Especialista Honrado

*Um espírito de luta que nada quebra, guiado por um código de honra.*

**Proficiência (3º).** História, Intuição, Atuação ou Persuasão, ou um idioma.

**Espírito de Luta (3º) ({ch 1}).** Com uma Ação Rápida, ganha Vantagem nos ataques com arma até o fim do turno e 5 PV temporários (10 no 10º, 15 no 15º).

**Porte Impecável (7º).** Soma Espírito aos Testes de Magnetismo (Persuasão). Ganha proficiência em Testes de Integridade (Espírito) (ou Lógica ou Magnetismo, se já tiver).

**Espírito Incansável (10º).** Ao rolar Iniciativa, a primeira ativação de Espírito de Luta em cada cena não gasta Cargas Heroicas.

**Golpe Rápido (15º).** Ao atacar com Vantagem, pode abrir mão dela para fazer um ataque extra contra o mesmo alvo. Uma vez por turno.

**Último Fôlego (18º) ({ch 8}).** Ao cair a 0 PV, com a Reação, faz um turno extra na hora, sem cair inconsciente.
:::

## Manobras

Usadas pelo Especialista Tático e pelo Estilo de Luta Técnica Superior. Cada Manobra é uma ativação de Superioridade em Combate ou de Técnica Superior ({ch 1}) e rola o dado de superioridade. São 23 manobras.

{tabela filtro}
| Manobra | Efeito |
|---|---|
| Ataque Ameaçador | Soma o dado ao dano; Teste de Integridade (Espírito) ou o alvo fica amedrontado até o fim do próximo turno dele |
| Ataque com Alcance | +1,5 m de alcance no ataque e soma o dado ao dano |
| Ataque Desarmante | Soma o dado ao dano; Teste de Integridade (Potência) ou o alvo larga um objeto |
| Ataque de Finta | Ação Rápida: Vantagem no próximo ataque contra uma criatura a 1,5 m; soma o dado ao dano se acertar |
| Ataque de Manobra | Soma o dado ao dano; um aliado usa a Reação para se mover metade do Deslocamento sem provocar Contra-ataques do alvo |
| Ataque Calculado | Soma o dado à rolagem de ataque |
| Ataque Derrubador | Soma o dado ao dano; Teste de Integridade (Potência) ou o alvo Grande ou menor cai |
| Ataque Distrativo | Soma o dado ao dano; o próximo ataque de outro aliado contra o alvo tem Vantagem |
| Ataque Provocador | Soma o dado ao dano; Teste de Integridade (Espírito) ou o alvo tem Desvantagem contra outros alvos |
| Ataque Empurrador | Soma o dado ao dano; Teste de Integridade (Potência) ou o alvo Grande ou menor é empurrado até 4,5 m |
| Ataque Varredor | Se o dado superar a CA de outra criatura ao alcance, ela sofre o valor do dado em dano |
| Comando de Ataque | Abre mão de um ataque; um aliado usa a Reação para atacar e soma o dado ao dano |
| Revide | Reação quando erram uma Jogada de Ataque Corpo a Corpo contra ele: ataca e soma o dado ao dano |
| Aparar | Reação ao sofrer dano corpo a corpo: reduz o dano em dado + Reflexos |
| Reunir | Ação Rápida: um aliado ganha PV temporários iguais ao dado + metade do nível |
| Passo Evasivo | Ao se mover, soma o dado à CA até parar |
| Emboscada | Soma o dado a um Teste de Reflexos (Furtividade) ou à Iniciativa |
| Troca de Posição | Troca de lugar com um aliado a 1,5 m; um dos dois soma o dado à CA até o próximo turno |
| Firmeza | Reação quando uma criatura entra no alcance: ataca e soma o dado ao dano |
| Presença de Comando | Soma o dado a um Teste de Magnetismo (Intimidação), Atuação ou Persuasão |
| Golpe Agarrador | Depois de acertar, Ação Rápida para agarrar, somando o dado ao Teste de Potência (Atletismo) |
| Arremesso Rápido | Ação Rápida: saca e arremessa uma arma, somando o dado ao dano |
| Avaliação Tática | Soma o dado a um Teste de Lógica (Investigação), História ou Intuição |
`,Bl=String.raw`
# Sombra da Noite {#sombra-da-noite arquetipo}

A Sombra da Noite age onde ninguém vê. Espiã, ladra, detetive, vigilante ou assassina, ela acha a brecha na defesa, o segredo no arquivo e o ponto fraco no inimigo. Não precisa de força bruta: precisa do momento certo.

No grupo, ela é a especialista: a melhor em perícias, a que abre portas e desarma armadilhas e, no combate, a que causa um golpe devastador por turno com o Golpe Preciso.

**Poderes típicos:** invisibilidade, furtividade, disfarces, veneno, ataques surpresa, mobilidade, acrobacia, roubo e espionagem.

:::ficha
- **Parâmetro principal:** Reflexos
- **Testes de Integridade:** Reflexos e Lógica
- **Matriz de Vitalidade:** d8
- **Especialização:** 3º nível
:::

## Progressão da Sombra da Noite

{tabela progressao}
| Nível | Prof. | Golpe Preciso | Características |
|---|---|---|---|
| 1 | +2 | 1d6 | Especialista, Golpe Preciso, Gíria das Ruas |
| 2 | +2 | 1d6 | Ação Ágil |
| 3 | +2 | 2d6 | Especialização, Mira Firme |
| 4 | +2 | 2d6 | Evolução |
| 5 | +3 | 3d6 | Esquiva Instintiva |
| 6 | +3 | 3d6 | Especialista |
| 7 | +3 | 4d6 | Evasão |
| 8 | +3 | 4d6 | Evolução |
| 9 | +4 | 5d6 | Característica de Especialização |
| 10 | +4 | 5d6 | Evolução |
| 11 | +4 | 6d6 | Prática Infalível |
| 12 | +4 | 6d6 | Evolução |
| 13 | +5 | 7d6 | Característica de Especialização |
| 14 | +5 | 7d6 | Sentido Aguçado |
| 15 | +5 | 8d6 | Mente Escorregadia |
| 16 | +5 | 8d6 | Evolução |
| 17 | +6 | 9d6 | Característica de Especialização |
| 18 | +6 | 9d6 | Esquivo |
| 19 | +6 | 10d6 | Evolução |
| 20 | +6 | 10d6 | Apoteose |

## Características do Arquétipo

- **Pontos de Vida:** 24 + modificador de Resistência
- **Níveis seguintes:** 8 + modificador de Resistência
- **Matriz de Vitalidade:** d8

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo, Armas de Fogo e Blindagem Leve
- **Ferramentas:** kit de invasão
- **Integridade:** Reflexos e Lógica
- **Perícias:** escolha quatro entre Acrobacia, Atletismo, Enganação, Intuição, Intimidação, Investigação, Percepção, Atuação, Persuasão, Prestidigitação e Furtividade

## Características por nível

### Especialista (1º e 6º níveis)

Escolhe duas perícias em que é proficiente, ou uma perícia e o kit de invasão: dobra o Bônus de Proficiência nelas. Escolhe mais duas no 6º nível.

### Golpe Preciso (1º nível)

Uma vez por turno, ao acertar um ataque com arma de acuidade ou à distância, causa dano extra conforme a tabela, se tiver Vantagem no ataque. Não precisa de Vantagem se outro inimigo do alvo, não incapacitado, estiver a até 1,5 m dele e ela não tiver Desvantagem.

### Gíria das Ruas (1º nível)

Um código secreto de sinais, gírias e símbolos que permite esconder mensagens numa conversa comum (leva quatro vezes mais tempo) e marcar perigos, territórios, esconderijos e rotas de fuga.

### Ação Ágil (2º nível)

Pode usar uma Ação Rápida em cada turno para Disparar, Recuar ou Esconder.

### Especialização (3º nível)

Escolhe uma das Especializações abaixo. Ela concede características no 3º, 9º, 13º e 17º níveis.

### Mira Firme (3º nível)

Se não se moveu no turno, com uma Ação Rápida, ganha Vantagem no próximo ataque do turno; o Deslocamento fica 0 até o fim do turno.

### Evolução (4º, 8º, 10º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até o máximo de 20. Pode ser trocada por um Talento. A Sombra da Noite tem uma Evolução extra no 10º nível.

### Esquiva Instintiva (5º nível)

Quando um atacante que ela vê a acerta, pode usar a Reação para reduzir o dano pela metade.

### Evasão (7º nível)

Em efeitos com Teste de Integridade (Reflexos) para metade do dano, não sofre dano se passar e sofre metade se falhar.

### Prática Infalível (11º nível)

Em Testes de Parâmetro com perícias ou ferramentas em que é proficiente, um resultado de 9 ou menos no d20 conta como 10.

### Sentido Aguçado (14º nível)

Se puder ouvir, sabe onde está qualquer criatura escondida ou invisível a até 3 m.

### Mente Escorregadia (15º nível)

Proficiência em Testes de Integridade (Espírito).

### Esquivo (18º nível)

Nenhum ataque contra ela tem Vantagem, a menos que esteja incapacitada.

### Apoteose: Golpe de Sorte (20º nível) {ch 9}

Transforma um ataque que errou em acerto, ou um Teste de Parâmetro falho num 20 natural.

## Especializações

No 3º nível, a Sombra da Noite escolhe uma das nove Especializações. A Especialização concede características no 3º, 9º, 13º e 17º níveis.

| Especialização | Papel |
|---|---|
| Sombra Ladra | Mãos rápidas, escalada e uso de qualquer item |
| Sombra Letal | Golpes letais em alvos surpresos; identidades falsas |
| Sombra Ilusória | Ilusões e controle mental com uma mão invisível |
| Sombra Detetive | Investigação e leitura de pessoas |
| Sombra Estrategista | Manipulação, disfarces e apoio tático |
| Sombra Espectral | Ecos dos mortos e Dano Necrótico |
| Sombra Batedora | Mobilidade e sobrevivência |
| Sombra Psíquica | Lâminas mentais e telepatia |
| Sombra Duelista | Duelista carismático |

:::tabs
### Sombra Ladra

**Mãos Rápidas (3º).** A Ação Ágil também serve para Prestidigitação, usar o kit de invasão ou Usar um Objeto.

**Trabalho nas Alturas (3º).** Escalar não custa movimento extra; salto com corrida ganha 30 cm por ponto do modificador de Reflexos.

**Furtividade Suprema (9º).** Vantagem em Furtividade se mover no máximo metade do Deslocamento no turno.

**Usar Dispositivo (13º).** Ignora requisitos de Arquétipo, Origem e nível para usar itens especiais.

**Reflexos de Ladra (17º).** Na primeira rodada de combate, age duas vezes: na sua Iniciativa e na Iniciativa menos 10. Não funciona se estiver surpreendida.

### Sombra Letal

**Proficiências (3º).** Kit de disfarce e kit de venenos.

**Assassinar (3º).** Vantagem em ataques contra criaturas que ainda não agiram no combate. Todo acerto contra uma criatura surpresa é crítico.

**Especialista em Infiltração (9º).** Com 7 dias e 25 cr, cria uma identidade falsa completa, com histórico e documentos.

**Impostor (13º).** Depois de estudar alguém por 3 horas, imita fala, escrita e comportamento; tem Vantagem em Enganação contra quem desconfiar.

**Golpe Mortal (17º).** Ao acertar uma criatura surpresa, ela faz um Teste de Integridade (Resistência) (CD 8 + Bônus de Proficiência + modificador de Reflexos) ou sofre o dobro do dano.

### Sombra Ilusória

*Usa poderes de ilusão e de mente para enganar e roubar.*

**Uso de Poderes (3º).** Usa Lógica como Parâmetro de poder. Conhece Mão Cinética e mais 2 Técnicas (3 no 10º). Os poderes conhecidos devem ser de ilusão ou mente, exceto os ganhos no 3º, 8º, 14º e 20º níveis. Segue Poderes à Vontade e Sobrecarga. Nível de Poder máximo: 1 no 3º nível, 2 no 7º, 3 no 13º, 4 no 19º.

**Mão Invisível (3º).** A Mão Cinética fica invisível e pode guardar ou pegar objetos de outras criaturas, abrir fechaduras e desarmar armadilhas à distância. Pode controlá-la com a Ação Ágil.

**Emboscada Mental (9º).** Se estiver escondida ao ativar um poder, o alvo tem Desvantagem no Teste de Integridade.

**Trapaceira Versátil (13º).** Com uma Ação Rápida, usa a mão para distrair uma criatura a até 1,5 m dela e ganha Vantagem nos ataques contra essa criatura no turno.

**Ladra de Poderes (17º) ({ch 8}).** Quando uma criatura ativa um poder que a mira ou a inclui, pode usar a Reação: a criatura faz um Teste de Integridade com o Parâmetro de poder dela contra a CD de Poder da Sombra. Se falhar, o poder não tem efeito e, se for de Nível de Poder 1 ou maior e de um Nível de Poder que a Sombra pode ativar, ela o conhece por 8 horas e a criatura não pode usá-lo nesse período.

### Sombra Detetive

**Ouvido para Mentiras (3º).** Em Intuição para detectar mentiras, um 7 ou menos no d20 conta como 8.

**Olho para Detalhes (3º).** Com uma Ação Rápida, faz Percepção para notar algo escondido ou Investigação para achar pistas.

**Combate Perspicaz (3º).** Com uma Ação Rápida, faz Intuição contra a Enganação de uma criatura. Se vencer, pode usar Golpe Preciso contra ela sem Vantagem por 1 minuto.

**Olhar Atento (9º).** Vantagem em Percepção e Investigação se mover no máximo metade do Deslocamento.

**Olho Infalível (13º) ({ch 5}).** Com 1 Ação, percebe ilusões, metamorfos e disfarces criados por poderes a até 9 m.

**Olho para Fraquezas (17º).** Contra o alvo do Combate Perspicaz, o Golpe Preciso causa +3d6.

### Sombra Estrategista

**Mestre da Intriga (3º).** Kit de disfarce, kit de falsificação e um jogo; dois idiomas. Imita a fala de quem ouviu por 1 minuto.

**Mestre das Táticas (3º).** Usa Ajudar como Ação Rápida, e ao ajudar um ataque o alvo pode estar a até 9 m dela.

**Manipulador Perspicaz (9º).** Observando alguém por 1 minuto fora de combate, descobre se é igual, superior ou inferior a ela em dois entre Lógica, Espírito, Magnetismo e nível.

**Desvio (13º).** Quando é atacada e outra criatura lhe dá cobertura, pode usar a Reação para que o ataque mire essa criatura.

**Alma da Ilusão (17º).** Seus pensamentos não podem ser lidos sem permissão; pode mostrar pensamentos falsos. Nenhum poder a obriga a dizer a verdade, e efeitos que detectam mentira sempre a mostram falando a verdade, se quiser.

### Sombra Espectral

**Sussurros dos Mortos (3º).** Após uma Pausa ou Recuperação, ganha proficiência em uma perícia ou ferramenta à escolha, até trocar na próxima Pausa ou Recuperação.

**Lamentos do Túmulo (3º) ({ch 1}).** Depois de causar Golpe Preciso, pode causar Dano Necrótico igual à metade dos dados de Golpe Preciso a outra criatura a até 9 m.

**Lembranças dos Mortos (9º).** Quando uma criatura morre a até 9 m, pode criar uma relíquia da alma dela (máximo igual ao Bônus de Proficiência). Com relíquias, tem Vantagem em Testes de Estabilização e em Testes de Integridade (Resistência). Pode destruir uma para usar Lamentos do Túmulo sem gastar Cargas Heroicas, ou para fazer uma pergunta ao espírito.

**Caminhar Fantasma (13º) ({ch 5}).** Com uma Ação Rápida, vira espectro por 10 minutos: voo de 3 m com pairar, ataques contra ela têm Desvantagem, atravessa criaturas e objetos (1d10 de Dano de Energia se terminar o turno dentro). Destruindo uma relíquia, a ativação não gasta Cargas Heroicas.

**Amiga da Morte (17º).** Lamentos do Túmulo causa o Dano Necrótico também no primeiro alvo. Se não tiver relíquias ao fim de uma Recuperação, ganha uma.

### Sombra Batedora

**Escaramuça (3º).** Quando um inimigo termina o turno a até 1,5 m dela, pode usar a Reação para se mover metade do Deslocamento sem provocar Contra-ataques.

**Sobrevivente (3º).** Proficiência em Natureza e Sobrevivência, com o Bônus de Proficiência dobrado.

**Mobilidade Superior (9º).** +3 m de Deslocamento (também de escalada e nado, se tiver).

**Mestre da Emboscada (13º).** Vantagem na Iniciativa. Na primeira rodada, a primeira criatura que ela acertar sofre ataques com Vantagem de todos até o próximo turno dela.

**Ataque Súbito (17º).** Ao usar a Ação Atacar, faz um ataque extra como Ação Rápida, que pode ter Golpe Preciso mesmo que ela já tenha usado no turno, mas não contra o mesmo alvo.

### Sombra Psíquica

**Poder Psiônico (3º).** Tem um dado psiônico: d6 no 3º nível, d8 no 5º, d10 no 11º e d12 no 17º. Usa o dado nestas opções:

- **Talento Reforçado ({ch 1}):** ao falhar num Teste de Parâmetro com uma perícia ou ferramenta em que é proficiente, rola o dado psiônico e soma ao resultado; as Cargas Heroicas só são gastas se isso transformar a falha em sucesso.
- **Sussurros Psíquicos ({ch 1}):** com 1 Ação, liga-se telepaticamente a um número de criaturas igual ao Bônus de Proficiência, por um número de horas igual a uma rolagem do dado psiônico.

**Lâminas Psíquicas (3º).** Ao atacar, cria uma lâmina mental (acuidade, arremesso 18 m): 1d6 + modificador de Parâmetro de Dano de Psíquico. Com a outra mão livre, faz um segundo ataque como Ação Rápida, de 1d4 + modificador de Parâmetro.

**Lâminas da Alma (9º).** Ganha duas opções novas:

- **Golpes Teleguiados ({ch 3}):** ao errar com uma lâmina, rola o dado psiônico e soma ao ataque; as Cargas Heroicas só são gastas se o ataque passar a acertar.
- **Teletransporte Psíquico ({ch 3}):** com uma Ação Rápida, rola o dado psiônico e se teleporta até o resultado × 3 m.

**Véu Psíquico (13º) ({ch 5}).** Com 1 Ação, fica invisível por 1 hora ou até causar dano ou forçar um Teste de Integridade.

**Rasgar a Mente (17º) ({ch 8}).** Depois de causar Golpe Preciso com uma lâmina psíquica, o alvo faz um Teste de Integridade (Espírito) ou fica atordoado por 1 minuto (repete no fim de cada turno).

### Sombra Duelista

**Jogo de Pernas (3º).** Ao atacar uma criatura corpo a corpo, ela não pode fazer Contra-ataques contra a Sombra até o fim do turno.

**Audácia (3º).** Soma Magnetismo à Iniciativa. Pode usar Golpe Preciso sem Vantagem contra uma criatura a até 1,5 m, se não houver outras criaturas a até 1,5 m dela e não tiver Desvantagem.

**Charme (9º).** Com 1 Ação, faz Persuasão contra a Intuição de uma criatura. Se for hostil e perder, tem Desvantagem contra outros alvos e não faz Contra-ataques contra eles por 1 minuto. Se não for hostil, fica dominada por 1 minuto.

**Manobra Elegante (13º).** Com uma Ação Rápida, Vantagem no próximo Teste de Reflexos (Acrobacia) ou Atletismo no turno.

**Duelista Mestre (17º) ({ch 8}).** Ao errar um ataque, rola de novo com Vantagem.
:::

# Mestre do Poder {#mestre-do-poder arquetipo}

O Mestre do Poder entende como o poder funciona. Mestre das artes místicas, cientista do impossível ou estudioso de física dimensional, ele chegou aonde está por estudo, disciplina e anos de prática. Onde outros têm um dom, ele tem um arquivo: centenas de fórmulas, rituais e equações que explicam a realidade e a dobram.

No grupo, ele é o maior repertório de poderes do jogo: controle, dano, utilidade e soluções para qualquer problema, desde que tenha estudado a fórmula certa.

**Poderes típicos:** artes místicas, portais, dimensões, manipulação temporal, manipulação espacial, transformação da matéria, convocação, selamentos e alteração da realidade.

:::ficha
- **Parâmetro principal:** Lógica
- **Testes de Integridade:** Lógica e Espírito
- **Matriz de Vitalidade:** d6
- **Especialização:** 2º nível (Disciplina)
:::

## Progressão do Mestre do Poder

{tabela progressao}
| Nível | Prof. | Características | Téc. | Nível máx. |
|---|---|---|---|---|
| 1 | +2 | Arquivo de Poderes, Uso de Poderes, Recarga Mental | 3 | 1 |
| 2 | +2 | Especialização | 3 | 1 |
| 3 | +2 | Fórmulas Básicas | 3 | 2 |
| 4 | +2 | Evolução | 4 | 2 |
| 5 | +3 | — | 4 | 3 |
| 6 | +3 | Característica de Especialização | 4 | 3 |
| 7 | +3 | — | 4 | 4 |
| 8 | +3 | Evolução | 4 | 4 |
| 9 | +4 | — | 4 | 5 |
| 10 | +4 | Característica de Especialização | 5 | 5 |
| 11 | +4 | — | 5 | 6 |
| 12 | +4 | Evolução | 5 | 6 |
| 13 | +5 | — | 5 | 7 |
| 14 | +5 | Característica de Especialização | 5 | 7 |
| 15 | +5 | — | 5 | 8 |
| 16 | +5 | Evolução | 5 | 8 |
| 17 | +6 | — | 5 | 9 |
| 18 | +6 | Maestria de Poder | 5 | 9 |
| 19 | +6 | Evolução | 5 | 9 |
| 20 | +6 | Apoteose | 5 | 9 |

## Características do Arquétipo

- **Pontos de Vida:** 18 + modificador de Resistência
- **Níveis seguintes:** 6 + modificador de Resistência
- **Matriz de Vitalidade:** d6

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo e Armas de Fogo
- **Ferramentas:** nenhuma
- **Integridade:** Lógica e Espírito
- **Perícias:** escolha duas entre Ocultismo, História, Intuição, Investigação, Medicina e Religião

### Arquivo de Poderes (1º nível)

O Mestre guarda suas fórmulas num arquivo: um livro antigo, um tablet, um banco de dados criptografado ou a própria memória eidética.

- **Início:** 6 poderes de Nível de Poder 1. A cada nível, adiciona 2 poderes de Níveis de Poder que pode ativar.
- **Copiar fórmulas encontradas:** um poder achado em outro arquivo pode ser copiado gastando 2 horas e 50 cr por Nível de Poder. Fazer uma cópia de segurança do próprio arquivo custa 1 hora e 10 cr por Nível de Poder.

### Uso de Poderes (1º nível)

- **Parâmetro de poder:** Lógica
- **CD de Poder:** 8 + Bônus de Proficiência + modificador de Lógica
- **Jogada de Ataque de Poder:** Bônus de Proficiência + modificador de Lógica
- **Técnicas:** conhece 3 no 1º nível e mais conforme a tabela.
- **Poderes preparados:** após uma Recuperação, prepara do Arquivo um número de poderes igual a Lógica + nível (mínimo 1), gastando 1 minuto por Nível de Poder de cada um.
- **À vontade:** ativa qualquer poder preparado sem limite de usos, até o Nível de Poder máximo, seguindo a Sobrecarga.
- **Rituais:** pode ativar como ritual qualquer poder ritual do Arquivo, mesmo sem prepará-lo.
- **Foco de Poder:** opcional; um cajado, um anel, um amuleto ou o próprio Arquivo.

## Características por nível

### Recarga Mental (1º nível) {ch 1}

Ao fim de uma Pausa, escolhe Níveis de Poder cuja soma seja até metade do nível (arredondado para cima), nenhum de NP 6 ou maior. Na próxima cena, esses Níveis de Poder já começam liberados, sem Teste de Sobrecarga.

### Especialização (2º nível)

O Mestre escolhe uma disciplina de estudo, que concede características no 2º, 6º, 10º e 14º níveis.

### Fórmulas Básicas (3º nível)

Ao fim de uma Recuperação, pode trocar uma Técnica por outra.

### Evolução (4º, 8º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até o máximo de 20. Pode ser trocada por um Talento.

### Maestria de Poder (18º nível)

Escolhe um poder de NP 1 e um de NP 2 do Arquivo. Quando preparados, ele os ativa no Nível de Poder base sem Teste de Sobrecarga. Pode trocar a escolha com 8 horas de estudo.

### Apoteose: Poderes de Assinatura (20º nível)

Escolhe dois poderes de Nível de Poder 3 do Arquivo. Eles estão sempre preparados, não contam no limite e, no Nível de Poder 3, nunca exigem Teste de Sobrecarga.

## Especializações: Disciplinas

No 2º nível, o Mestre escolhe uma disciplina. As oito disciplinas clássicas, uma para cada categoria de poder (as oito primeiras da tabela), têm a característica **Erudito (2º):** copiar poderes da própria categoria para o Arquivo custa metade do tempo e do dinheiro.

| Disciplina | Papel |
|---|---|
| Mestre da Proteção | Escudos e anulação de poderes |
| Mestre da Criação | Criar objetos, teleportar, convocar |
| Mestre da Precognição | Ver o futuro e mudar resultados |
| Mestre da Mente | Controle mental |
| Mestre da Energia | Dano máximo sem ferir aliados |
| Mestre da Ilusão | Ilusões que viram realidade |
| Mestre da Entropia | Vida, morte e mortos-vivos |
| Mestre da Transformação | Alterar a matéria |
| Mestre das Lâminas | Combate corpo a corpo com poderes |
| Mestre do Tempo | Manipulação do tempo |
| Mestre da Gravidade | Manipulação da gravidade |
| Mestre Arquivista | Um Arquivo de Poderes consciente |
| Mestre Estrategista | Defesa e contra-ataque |

:::tabs
### Mestre da Proteção

**Escudo de Energia (2º).** Ao ativar um poder de proteção de Nível de Poder 1 ou maior, cria um escudo em si com PV iguais a 2 × nível + Lógica, que absorve dano antes dele. Dura até uma Recuperação. Novos poderes de proteção restauram 2 × o Nível de Poder em PV do escudo.

**Escudo Projetado (6º).** Quando uma criatura a até 9 m sofre dano, pode usar a Reação para que o Escudo de Energia absorva o dano.

**Proteção Aprimorada (10º).** Soma o Bônus de Proficiência aos Testes de Parâmetro exigidos por poderes de proteção, como Contrapoder e Neutralizar Poder.

**Resistência a Poderes (14º).** Vantagem em Testes de Integridade contra poderes e Resistência ao dano deles.

### Mestre da Criação

**Criação Menor (2º).** Com 1 Ação, cria um objeto comum de até 90 cm e 4,5 kg a até 3 m, que dura 1 hora ou até sofrer dano.

**Salto Dimensional (6º) ({ch 3}).** Com 1 Ação, teleporta até 9 m ou troca de lugar com uma criatura voluntária Pequena ou Média. Depois de ativar um poder de convocação de Nível de Poder 1 ou maior na cena, a próxima ativação do Salto não gasta Cargas Heroicas.

**Criação Focada (10º).** Dano não quebra sua Concentração em poderes de convocação.

**Convocações Duráveis (14º).** Criaturas convocadas por seus poderes de convocação ganham 30 PV temporários.

### Mestre da Precognição

**Presságio (2º) ({ch 1}).** Após uma Pausa ou Recuperação, rola 2d20 e anota. Pode substituir qualquer ataque, Teste de Parâmetro ou de Integridade dele ou de uma criatura que veja por um desses resultados, antes da rolagem. Uma vez por turno. Depois de usar um resultado, rola um novo d20 e anota no lugar dele.

**Percepção Especialista (6º).** Ao ativar um poder de percepção de Nível de Poder 2 ou maior, um Nível de Poder menor que o usado (até NP 5) fica liberado na cena, sem Teste de Sobrecarga.

**Terceiro Olho (10º) ({ch 5}).** Com 1 Ação, ganha um destes benefícios até a próxima Pausa ou Recuperação:

- visão no escuro de 18 m;
- ver a dimensão etérea a 18 m;
- ler qualquer idioma;
- ver criaturas invisíveis a 3 m.

**Presságio Maior (14º).** Rola e mantém 3d20 no Presságio.

### Mestre da Mente

**Olhar Hipnótico (2º) ({ch 1}).** Com 1 Ação, uma criatura a até 1,5 m faz um Teste de Integridade (Espírito) ou fica dominada, incapacitada e com Deslocamento 0 até o fim do próximo turno dele. Pode manter com uma Ação por turno, até 1 minuto. Termina se ele se afastar ou o alvo sofrer dano.

**Charme Instintivo (6º) ({ch 3}).** Quando uma criatura o ataca, pode usar a Reação: ela faz um Teste de Integridade (Espírito) ou ataca a criatura mais próxima.

**Controle Dividido (10º).** Poderes de mente de Nível de Poder 1 ou maior que miram uma criatura podem mirar duas.

**Alterar Memórias (14º).** Uma criatura dominada por ele pode não saber que foi dominada. Antes do fim do efeito, pode fazer a criatura esquecer até 1 + Magnetismo horas (Teste de Integridade (Lógica)).

### Mestre da Energia

**Moldar Energia (2º).** Ao ativar um poder de energia que afeta outras criaturas, escolhe até 1 + Nível de Poder delas: elas passam automaticamente e não sofrem dano.

**Técnica Potente (6º).** Criaturas que passam no Teste de Integridade contra suas Técnicas sofrem metade do dano.

**Energia Fortalecida (10º).** Soma Lógica a uma rolagem de dano de cada poder de energia.

**Descarga Total (14º) ({ch 8}).** Ao ativar um poder de NP 1 a 5 que causa dano, causa o dano máximo. A primeira ativação na cena não fere o Mestre; cada ativação seguinte na mesma cena também causa a ele 2d12 de Dano Necrótico por Nível de Poder (3d12, 4d12...), que ignora resistência e imunidade.

### Mestre da Ilusão

**Holograma Aprimorado (2º).** Aprende Holograma Menor (ou outra Técnica, se já conhecer) e pode criar som e imagem ao mesmo tempo.

**Ilusões Maleáveis (6º).** Ilusões com 1 minuto ou mais de duração podem ser alteradas com 1 Ação.

**Eu Ilusório (10º) ({ch 5}).** Quando é atacado, com a Reação, um duplo ilusório faz o ataque errar.

**Realidade Ilusória (14º).** Ao ativar uma ilusão de Nível de Poder 1 ou maior, com uma Ação Rápida, torna real um objeto inanimado dela por 1 minuto. Ele não pode causar dano diretamente.

### Mestre da Entropia

**Colheita Entrópica (2º).** Uma vez por turno, ao matar uma criatura com um poder de NP 1 ou maior, recupera 2 × Nível de Poder em PV (3 × se for de entropia). Não funciona com constructos e mortos-vivos.

**Servos Mortos-Vivos (6º).** Aprende Reanimar Cadáveres, que anima um cadáver a mais. Mortos-vivos que ele cria ganham PV extras iguais ao nível e somam o Bônus de Proficiência ao dano.

**Imune à Morte (10º).** Resistência a Dano Necrótico; o PV máximo não pode ser reduzido.

**Comandar Mortos-Vivos (14º).** Com 1 Ação, um morto-vivo a até 18 m faz um Teste de Integridade (Magnetismo) ou passa a obedecê-lo indefinidamente. Os inteligentes têm Vantagem e podem repetir o teste a cada hora.

### Mestre da Transformação

**Reconfigurar Matéria (2º).** Transforma temporariamente o material de um objeto comum (madeira, pedra, ferro, cobre, prata), 30 cm³ a cada 10 minutos, por 1 hora.

**Catalisador (6º).** Com 8 horas, cria um catalisador que dá a quem o carrega um benefício à escolha. Muda o benefício ao ativar um poder de transformação de Nível de Poder 1 ou maior. Benefícios:

- visão no escuro de 18 m;
- +3 m de Deslocamento;
- proficiência em Testes de Integridade (Resistência);
- Resistência a Dano de Ácido, frio, fogo, elétrico ou trovão.

**Metamorfo (10º) ({ch 5}).** Aprende Metamorfose Animal e pode ativá-lo em si, sem Teste de Sobrecarga do poder, virando uma fera de NA 1 ou menor.

**Transformação Suprema (14º).** Destrói o catalisador para um efeito:

- transformar um objeto comum de até 1,5 m;
- curar todos os PV e remover maldições, doenças e venenos de uma criatura;
- ativar Ressuscitar sem Teste de Sobrecarga;
- rejuvenescer uma criatura em 3d10 anos.

### Mestre das Lâminas

**Treino de Combate e Dança (2º).** Treinamento Blindagem Leve e proficiência em Atuação.

**Ritmo de Combate (2º) ({ch 1}).** Com uma Ação Rápida, por 1 minuto: soma Lógica à CA (mínimo +1), +3 m de Deslocamento, Vantagem em Acrobacia e soma Lógica aos testes de Concentração. Termina se usar armadura média ou pesada, escudo ou arma de duas mãos, ou ficar incapacitado.

**Ataque Extra (6º).** Ataca duas vezes na Ação Atacar; pode trocar um ataque por uma Técnica.

**Ritmo Defensivo (10º) ({ch 5}).** Durante o Ritmo de Combate, ao sofrer dano, com a Reação, reduz o dano em 5 × um Nível de Poder à escolha (até o máximo).

**Ritmo da Vitória (14º).** Durante o Ritmo de Combate, soma Lógica ao dano corpo a corpo com armas.

### Mestre do Tempo

*O Mestre manipula o fluxo do tempo.*

**Desvio Cronal (2º) ({ch 1}).** Com a Reação, depois de ver o resultado, obriga uma criatura a até 9 m a rolar de novo um ataque, Teste de Parâmetro ou de Integridade.

**Consciência Temporal (2º).** Soma Lógica à Iniciativa.

**Estase Momentânea (6º) ({ch 3}).** Com 1 Ação, uma criatura Grande ou menor a até 18 m faz um Teste de Integridade (Resistência) ou fica incapacitada e com Deslocamento 0 até o fim do próximo turno dele ou até sofrer dano.

**Suspensão Temporal (10º) ({ch 5}).** Ao ativar um poder de NP 4 ou menor, pode condensá-lo numa esfera por 1 hora. Qualquer criatura pode liberá-lo com 1 Ação, usando a CD e o ataque do Mestre.

**Futuro Convergente (14º).** Com a Reação, quando uma criatura a até 18 m faz um ataque, Teste de Parâmetro ou de Integridade, define que o resultado é o mínimo para passar ou um a menos. Cada uso causa 1 nível de Exaustão, que só sai com uma Recuperação.

### Mestre da Gravidade

*O Mestre dobra a gravidade.*

**Ajustar Massa (2º).** Com 1 Ação, por 1 minuto (Concentração), dobra ou reduz pela metade o peso de um objeto ou criatura Grande ou menor a até 9 m. A partir do 10º nível, afeta criaturas Enormes.

- **Mais leve:** +3 m de Deslocamento, salto dobrado, Desvantagem em Testes de Parâmetro (Potência).
- **Mais pesado:** −3 m de Deslocamento, Vantagem em Testes de Parâmetro (Potência).

**Poço Gravitacional (6º).** Quando ativa um poder numa criatura, pode movê-la 1,5 m se ela aceitar, se a Jogada de Ataque de Poder acertar ou se ela falhar no Teste de Integridade.

**Atração Violenta (10º) ({ch 5}).** Com a Reação, soma 1d10 ao dano de um ataque com arma de uma criatura a até 18 m, ou 2d10 ao dano de queda.

**Horizonte de Eventos (14º) ({ch 8}).** Com 1 Ação, por 1 minuto (Concentração), criaturas hostis que começam o turno a até 9 m fazem um Teste de Integridade (Potência): se falharem, sofrem 2d10 de Dano de Energia e ficam com Deslocamento 0; se passarem, sofrem metade e cada metro custa 3 m.

### Mestre Arquivista

*O Arquivo de Poderes ganha consciência própria: uma IA, um livro vivo ou uma mente digital.*

**Caneta do Arquivista (2º).** Uma caneta ou ferramenta especial que escreve sem tinta. Copiar poderes leva 2 minutos por Nível de Poder, e ele pode apagar textos que escreveu com uma Ação Rápida.

**Arquivo Desperto (2º).** O Arquivo pode servir de Foco de Poder. Ao ativar um poder que causa dano, pode trocar o tipo de dano pelo de outro poder do mesmo Nível de Poder no Arquivo. Também pode ativar um ritual no tempo normal, sem os 10 minutos extras ({ch 1}).

**Mente Manifesta (6º).** Com uma Ação Rápida, projeta a consciência do Arquivo a até 18 m. Ela vê e ouve (visão no escuro de 18 m) e pode ser movida 9 m com uma Ação Rápida. Pode ativar poderes como se estivesse no lugar dela; cada ativação assim custa {ch 3}, além da Sobrecarga normal do poder.

**Copista Mestre (10º) ({ch 5}).** Cria um pergaminho de um poder de NP 1 ou 2 do Arquivo, que funciona um Nível de Poder acima. Criar pergaminhos comuns custa metade do tempo e do dinheiro.

**Um com o Código (14º) ({ch 8}).** Vantagem em Ocultismo segurando o Arquivo. Quando sofre dano com a Mente Manifesta ativa, pode anular o dano dissipando-a; rola 3d6 e perde do Arquivo poderes cuja soma de Níveis de Poder seja no mínimo esse valor, por 1d6 Recuperações.

### Mestre Estrategista

**Deflexão de Energia (2º).** Quando é atingido ou falha num Teste de Integridade, com a Reação, ganha +2 na CA contra o ataque ou +4 no teste. Até o fim do próximo turno, só pode ativar Técnicas.

**Perspicácia Tática (2º).** Soma Lógica à Iniciativa.

**Surto de Poder (6º) ({ch 3}).** Uma vez por turno, causa Dano de Energia extra igual à metade do nível com um poder. Ao encerrar um poder com Neutralizar Poder ou Contrapoder, a próxima ativação do Surto na cena não gasta Cargas Heroicas.

**Poder Durável (10º).** Enquanto mantém Concentração, ganha +2 na CA e em todos os Testes de Integridade.

**Mortalha Defletora (14º).** Ao usar Deflexão de Energia, até três criaturas a até 18 m sofrem Dano de Energia igual à metade do nível.
:::
`,Vl=String.raw`
# Artista Marcial {#artista-marcial arquetipo}

O Artista Marcial levou corpo e mente além do limite humano. Velocista, lutador de rua, mestre de um estilo antigo ou atleta com reflexos sobrenaturais, ele luta de mãos vazias e concentra uma energia interior, o Foco, para feitos impossíveis: correr pelas paredes, desviar balas, atordoar com um toque.

No grupo, ele é o atacante móvel: chega primeiro, golpeia várias vezes por turno, neutraliza alvos importantes e sai antes da resposta.

**Poderes típicos:** artes marciais, velocidade, reflexos sobrenaturais, sentidos aprimorados, energia interna, ataques desarmados e mobilidade extrema.

:::ficha
- **Parâmetro principal:** Reflexos e Espírito
- **Testes de Integridade:** Potência e Reflexos
- **Matriz de Vitalidade:** d8
- **Especialização:** 3º nível
:::

**Foco e Cargas Heroicas.** O Foco não é uma reserva de pontos. As técnicas que dependem dele são Características de Carga Heroica: o Artista as paga com as Cargas Heroicas indicadas ao lado do nome, sem Teste de Sobrecarga. Poderes ativados por técnicas de Foco (como os do Artista Elemental e do Artista das Sombras) custam só as Cargas Heroicas da característica, sem a Sobrecarga do poder.

**CD de Foco:** 8 + Bônus de Proficiência + modificador de Espírito. É a CD dos Testes de Integridade pedidos pelas características deste Arquétipo e das suas Especializações.

## Progressão do Artista Marcial

{tabela progressao}
| Nível | Prof. | Artes Marciais | Deslocamento | Características |
|---|---|---|---|---|
| 1 | +2 | 1d4 | — | Defesa sem Armadura, Artes Marciais |
| 2 | +2 | 1d4 | +3 m | Técnicas de Foco, Arma Dedicada, Velocidade Sobre-humana |
| 3 | +2 | 1d4 | +3 m | Especialização, Desviar Projéteis, Ataque Energizado |
| 4 | +2 | 1d4 | +3 m | Evolução, Aterrissagem Controlada, Cura Acelerada |
| 5 | +3 | 1d6 | +3 m | Ataque Extra, Golpe Atordoante, Mira Focada |
| 6 | +3 | 1d6 | +4,5 m | Golpes Energizados, Característica de Especialização |
| 7 | +3 | 1d6 | +4,5 m | Evasão, Mente Tranquila |
| 8 | +3 | 1d6 | +4,5 m | Evolução |
| 9 | +4 | 1d6 | +4,5 m | Velocidade Sobre-humana aprimorada |
| 10 | +4 | 1d6 | +6 m | Metabolismo Blindado |
| 11 | +4 | 1d8 | +6 m | Característica de Especialização |
| 12 | +4 | 1d8 | +6 m | Evolução |
| 13 | +5 | 1d8 | +6 m | Língua Universal |
| 14 | +5 | 1d8 | +7,5 m | Vontade Inquebrável |
| 15 | +5 | 1d8 | +7,5 m | Corpo Atemporal |
| 16 | +5 | 1d8 | +7,5 m | Evolução |
| 17 | +6 | 1d10 | +7,5 m | Característica de Especialização |
| 18 | +6 | 1d10 | +9 m | Corpo Fantasma |
| 19 | +6 | 1d10 | +9 m | Evolução |
| 20 | +6 | 1d10 | +9 m | Apoteose: Auge Absoluto |

## Características do Arquétipo

- **Pontos de Vida:** 24 + modificador de Resistência
- **Níveis seguintes:** 8 + modificador de Resistência
- **Matriz de Vitalidade:** d8

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo e Armas de Fogo
- **Ferramentas:** um kit de ofício ou um instrumento musical
- **Integridade:** Potência e Reflexos
- **Perícias:** escolha duas entre Acrobacia, Atletismo, História, Intuição, Religião e Furtividade

## Características por nível

### Defesa sem Armadura (1º nível)

Sem armadura e sem escudo, a CA é 10 + Reflexos + Espírito.

### Artes Marciais (1º nível)

Sem armadura e sem escudo, usando golpes desarmados ou armas de artista marcial (espada curta e armas simples corpo a corpo sem as propriedades duas mãos ou Pesada):

- usa Reflexos em vez de Potência no ataque e no dano;
- pode rolar o dado de Artes Marciais no lugar do dano normal;
- ao usar a Ação Atacar com essas armas ou desarmado, faz um golpe desarmado como Ação Rápida.

### Técnicas de Foco (2º nível)

O Artista domina três técnicas de Foco. Cada uma é uma Característica de Carga Heroica separada.

- **Rajada de Golpes ({ch 1}).** Depois da Ação Atacar, faz dois golpes desarmados como Ação Rápida.
- **Guarda Fechada ({ch 1}).** Esquiva como Ação Rápida.
- **Arrancada ({ch 1}).** Recua ou Dispara como Ação Rápida; o salto dobra neste turno.

### Arma Dedicada (2º nível)

Após uma Pausa ou Recuperação, escolhe uma arma simples ou marcial (sem Pesada nem especial) coberta por um dos seus Treinamentos; ela conta como arma de artista marcial.

### Velocidade Sobre-humana (2º nível)

Sem armadura e sem escudo, o Deslocamento aumenta conforme a tabela. No 9º nível, corre por paredes verticais e sobre líquidos durante o próprio turno, sem cair.

### Especialização (3º nível)

O Artista Marcial escolhe uma Especialização no 3º nível. Ela concede características no 3º, 6º, 11º e 17º níveis.

### Desviar Projéteis (3º nível) {ch 1}

Quando uma Jogada de Ataque à Distância com arma o atinge, com a Reação, reduz o dano em 1d10 + Reflexos + nível. Se reduzir a 0 e o projétil couber na mão, pode pegá-lo e, gastando a Carga Heroica, devolvê-lo como Jogada de Ataque à Distância (6/18 m). No cenário, isso inclui desviar balas com as mãos.

### Ataque Energizado (3º nível)

Se ativar uma Característica de Carga Heroica como parte da Ação, pode fazer um ataque desarmado ou com arma de artista marcial como Ação Rápida.

### Evolução (4º, 8º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até o máximo de 20. Pode ser trocada por um Talento.

### Aterrissagem Controlada (4º nível)

Com a Reação, reduz o dano de queda em 5 × nível.

### Cura Acelerada (4º nível) {ch 2}

Com 1 Ação, recupera PV iguais a um dado de Artes Marciais + Bônus de Proficiência.

### Ataque Extra (5º nível)

Ataca duas vezes ao usar a Ação Atacar.

### Golpe Atordoante (5º nível) {ch 1}

Ao acertar uma Jogada de Ataque Corpo a Corpo com arma, o alvo faz Teste de Integridade (Resistência) contra a CD de Foco ou fica atordoado até o fim do próximo turno do Artista.

### Mira Focada (5º nível) {ch 1–3}

Ao errar um ataque, soma +2 ao resultado por Carga Heroica gasta.

### Golpes Energizados (6º nível)

Golpes desarmados contam como especiais para superar resistência e imunidade.

### Evasão (7º nível)

Em efeitos com Teste de Integridade (Reflexos) para metade do dano, não sofre dano se passar e sofre metade se falhar.

### Mente Tranquila (7º nível)

Com 1 Ação, encerra em si um efeito de dominado ou amedrontado.

### Metabolismo Blindado (10º nível)

Imune a doenças e a veneno.

### Língua Universal (13º nível)

Entende qualquer idioma falado, e qualquer criatura que entenda um idioma o entende.

### Vontade Inquebrável (14º nível) {ch 1}

Proficiência em todos os Testes de Integridade. Ao falhar num deles, pode gastar a Carga Heroica para rolar de novo.

### Corpo Atemporal (15º nível)

Não sofre envelhecimento por poderes e não precisa comer nem beber.

### Corpo Fantasma (18º nível) {ch 4 ou 8}

- **Forma Fantasma ({ch 4}).** Com 1 Ação, fica invisível por 1 minuto, com resistência a todo dano exceto energia.
- **Projeção Fantasma ({ch 8}).** Ativa Projeção Astral em si (custa só as Cargas Heroicas da característica, sem a Sobrecarga do poder).

### Apoteose: Auge Absoluto (20º nível)

Ao rolar Iniciativa, o corpo do Artista entra no auge. Até o fim daquela cena, a primeira ativação de cada Característica de Carga Heroica deste Arquétipo ou da sua Especialização que custe 4 ou menos não gasta Cargas Heroicas.

## Especializações

No 3º nível, o Artista Marcial escolhe uma das dez Especializações.

| Especialização | Papel |
|---|---|
| Artista Disciplinado | Controle com golpes e cura própria |
| Artista das Sombras | Ninja: escuridão e teletransporte |
| Artista Elemental | Dobra fogo, água, terra e ar |
| Artista Psíquico | Braços e armadura de energia psíquica |
| Artista do Dragão | Estilo do dragão do kung fu: sopro elemental e asas |
| Artista Embriagado | Imprevisível e esquivo |
| Artista das Armas | Artista marcial armado |
| Artista Ceifador | Estudioso da morte |
| Artista Curandeiro | Médico que cura e fere com as mãos |
| Artista Solar | Rajadas de luz à distância |

:::tabs
### Artista Disciplinado

**Técnica de Controle (3º).** Ao acertar com a Rajada de Golpes, escolhe um efeito:

- Teste de Integridade (Reflexos) ou cai;
- Teste de Integridade (Potência) ou é empurrado 4,5 m;
- não pode usar Reações até o fim do próximo turno dele.

**Regeneração Interna (6º) ({ch 3}).** Com 1 Ação, recupera PV iguais a 3 × nível.

**Tranquilidade (11º).** Ao fim de uma Recuperação, ganha o efeito de Aura de Trégua até a próxima Recuperação (termina se atacar ou ativar um poder contra alguém).

**Toque Ressonante (17º) ({ch 3}).** Ao acertar um golpe desarmado, implanta vibrações que duram nível dias. Com 1 Ação, a qualquer distância na mesma dimensão, encerra: o alvo faz Teste de Integridade (Resistência) e cai a 0 PV se falhar, ou sofre 10d10 de Dano Necrótico se passar.

### Artista das Sombras

**Técnicas Ninja (3º) ({ch 2}).** Ativa Escuridão, Visão Noturna, Furtividade Coletiva ou Zona de Silêncio (custa só as Cargas Heroicas da característica, sem a Sobrecarga do poder). Aprende Holograma Menor.

**Salto entre Sombras (6º).** Na penumbra ou escuridão, com uma Ação Rápida, teleporta até 18 m para outro ponto escuro que veja. A primeira Jogada de Ataque Corpo a Corpo depois tem Vantagem.

**Sumir no Escuro (11º).** Na penumbra ou escuridão, com 1 Ação, fica invisível até atacar, ativar um poder ou entrar em luz plena.

**Oportunista (17º).** Quando outra criatura acerta um ataque numa criatura a até 1,5 m dele, pode usar a Reação para atacá-la corpo a corpo.

### Artista Elemental

*O Artista dobra os elementos com o Foco.* Aprende Sintonia Elemental e mais uma disciplina no 3º nível, e mais uma no 6º, 11º e 17º (podendo trocar uma por outra nesses níveis). Cada disciplina é uma Característica de Carga Heroica com o custo da tabela (Sintonia Elemental é à vontade) e custa só essas Cargas Heroicas, sem a Sobrecarga do poder. A partir do 5º nível, pode aumentar o Nível de Poder dos poderes das disciplinas gastando +{ch 1} por Nível de Poder a mais. O custo de uma disciplina pode chegar a {ch 3} no 5º nível, {ch 4} no 9º, {ch 5} no 13º e {ch 6} no 17º.

| Disciplina | Nível | Cargas Heroicas | Efeito |
|---|---|---|---|
| Sintonia Elemental | 3º | — | Pequenos efeitos elementais: acender, apagar, esfriar, esquentar, mover poeira ou água |
| Chicote Flamejante | 3º | 1 | Alcance de 3 m nos golpes desarmados e Dano de Fogo; +{ch 1} para +1d10 de Dano de Fogo |
| Punho Trovejante | 3º | 2 | Onda de Choque |
| Soco de Ar Comprimido | 3º | 2 | A 9 m, Teste de Integridade (Potência) ou 3d10 de Dano de Concussão (+1d10 por Carga Heroica a mais), empurra 6 m e derruba |
| Lâmina de Vento | 3º | 2 | Rajada de Vento |
| Moldar a Água | 3º | 1 | Molda água e gelo num cubo de 9 m |
| Golpe de Brasa | 3º | 2 | Lança-Chamas |
| Chicote d'Água | 3º | 2 | A 9 m, Teste de Integridade (Reflexos) ou 3d10 de Dano de Concussão (+1d10 por Carga Heroica a mais) e puxa 7,5 m ou derruba |
| Toque Congelante | 6º | 3 | Paralisia Neural |
| Grito Sônico | 6º | 3 | Pulso Sônico |
| Chamas da Fênix | 11º | 4 | Bola de Fogo |
| Forma de Névoa | 11º | 4 | Forma Gasosa em si |
| Surfar no Vento | 11º | 4 | Voo em si |
| Sopro Glacial | 17º | 6 | Cone Criogênico |
| Postura da Montanha | 17º | 5 | Pele de Pedra em si |
| Rio de Chamas | 17º | 5 | Muralha de Fogo |
| Onda de Terra | 17º | 6 | Muralha de Pedra |

### Artista Psíquico

**Braços Psíquicos (3º) ({ch 1}).** Com uma Ação Rápida, projeta braços de energia psíquica por 10 minutos; criaturas escolhidas a até 3 m fazem Teste de Integridade (Reflexos) ou sofrem dois dados de Artes Marciais de energia. Com os braços: usa Espírito em Testes de Parâmetro (Potência); golpes desarmados têm +1,5 m de alcance e podem usar Espírito no ataque e no dano, causando energia.

**Máscara Psíquica (6º) ({ch 1}).** Com uma Ação Rápida, projeta uma máscara por 10 minutos: visão no escuro de 36 m, Vantagem em Intuição e Intimidação, e pode falar só para uma criatura ou ser ouvido a 180 m.

**Corpo Psíquico (11º).** Com braços e máscara ativos: ao sofrer Dano de Ácido, frio, fogo, energia, elétrico ou trovão, com a Reação, reduz em 1d10 + Espírito; e uma vez por turno, ao acertar com os braços, causa um dado de Artes Marciais extra.

**Avatar Completo (17º) ({ch 5}).** Com uma Ação Rápida, projeta braços, máscara e corpo por 10 minutos: +2 na CA e três ataques no Ataque Extra se todos forem com os braços.

### Artista do Dragão

*O Artista do Dragão segue o estilo do dragão do kung fu: canaliza o Foco em golpes elementais, sopro e asas de energia.*

**Sangue de Dragão (3º) ({ch 1}).** Golpes desarmados podem causar ácido, frio, fogo, elétrico ou veneno. Ao falhar em Intimidação ou Persuasão, pode gastar a Carga Heroica para rolar de novo. Aprende um idioma à escolha.

**Sopro do Dragão (3º) ({ch 2}).** Ao usar a Ação Atacar, troca um ataque por um sopro (cone de 6 m ou linha de 9 m): Teste de Integridade (Reflexos) ou dois dados de Artes Marciais do tipo escolhido (três no 11º).

**Asas de Energia (6º) ({ch 3}).** Ao usar Arrancada, ganha voo igual ao Deslocamento até o fim do turno.

**Presença do Dragão (11º) ({ch 5}).** Com uma Ação Rápida, aura de 3 m por 1 minuto, com um destes efeitos:

- **Presença:** uma criatura faz Teste de Integridade (Espírito) ou fica amedrontada.
- **Determinação:** ele e aliados têm resistência a um tipo elemental.

**Dragão Desperto (17º).** Ganha:

- sentido cego de 3 m;
- o Sopro pode ser cone de 18 m ou linha de 27 m (nesse caso, o Sopro é {ch 3});
- ao ativar a Presença do Dragão, uma criatura na aura sofre 3d10 do tipo escolhido.

### Artista Embriagado

**Proficiências (3º).** Atuação e suprimentos de cervejeiro.

**Técnica Bêbada (3º).** Ao usar a Rajada de Golpes, ganha o efeito de Recuar e +3 m de Deslocamento até o fim do turno.

**Balanço Embriagado (6º) ({ch 1}).** Levantar do chão custa 1,5 m. Quando uma Jogada de Ataque Corpo a Corpo erra, pode gastar a Carga Heroica e usar a Reação para redirecioná-la a outra criatura a 1,5 m.

**Sorte de Bêbado (11º) ({ch 2}).** Anula a Desvantagem num teste.

**Frenesi Embriagado (17º).** A Rajada de Golpes pode ter até cinco ataques, desde que cada um mire uma criatura diferente.

### Artista das Armas

**Caminho do Mestre (3º).** Escolhe uma arma corpo a corpo e uma à distância (sem Pesada nem especial) como armas do mestre (mais uma no 6º, 11º e 17º). Ganha:

- **Defesa Ágil:** ao fazer um golpe desarmado segurando uma arma do mestre corpo a corpo, +2 na CA até o próximo turno.
- **Tiro do Mestre:** Ação Rápida, +1d4 no dano à distância com armas do mestre neste turno.
- **Caminho do Pincel:** proficiência com suprimentos de caligrafia ou pintura.

**Uma com a Lâmina (6º).** Armas do mestre contam como especiais. **Golpe Hábil ({ch 1}):** uma vez por turno, ao acertar com uma, causa um dado de Artes Marciais extra.

**Afiar a Lâmina (11º) ({ch 1–3}).** Com uma Ação Rápida, dá +1 ao ataque e ao dano de uma arma do mestre por Carga Heroica gasta, por 1 minuto.

**Mira Infalível (17º).** Uma vez por turno, ao errar com uma arma de artista marcial, rola de novo.

### Artista Ceifador

**Último Suspiro (3º).** Ao reduzir uma criatura a 0 PV a até 1,5 m, ganha PV temporários iguais a Espírito + nível.

**Presença Sinistra (6º).** Com 1 Ação, criaturas a até 9 m que o vejam fazem Teste de Integridade (Espírito) ou ficam amedrontadas até o fim do próximo turno dele.

**Recusar a Morte (11º) ({ch 1}).** Ao cair a 0 PV, fica com 1 PV.

**Toque Final (17º) ({ch 1–9}).** Com 1 Ação, toca uma criatura: Teste de Integridade (Resistência) ou 2d10 de Dano Necrótico por Carga Heroica gasta (metade se passar). Com {ch 9}, o dano é 20d10.

### Artista Curandeiro

**Kit de Campo (3º).** Intuição, Medicina e kit de herbalismo, e uma máscara característica.

**Mãos da Cura (3º) ({ch 1}).** Com 1 Ação, cura um dado de Artes Marciais + Espírito. Pode trocar um golpe da Rajada por essa cura, sem gastar Cargas Heroicas.

**Mãos do Dano (3º) ({ch 1}).** Uma vez por turno, ao acertar um golpe desarmado, causa um dado de Artes Marciais + Espírito de necrótico.

**Toque do Médico (6º).** Mãos da Cura também encerram uma doença ou as condições cego, surdo, paralisado, envenenado ou atordoado. Mãos do Dano também deixam o alvo envenenado até o fim do próximo turno.

**Rajada de Cura e Dano (11º).** Pode trocar cada golpe da Rajada por Mãos da Cura, e usar Mãos do Dano na Rajada (uma vez por turno), sem gastar Cargas Heroicas com elas.

**Reanimação Suprema (17º) ({ch 8}).** Com 1 Ação, revive uma criatura morta há até 24 horas, com 4d10 + Espírito PV.

### Artista Solar

**Raio Solar (3º) ({ch 1}).** Jogada de Ataque de Poder à Distância (9 m) com Reflexos: dado de Artes Marciais de radiante. Ao usar a Ação Atacar, pode trocar ataques por raios; gastando a Carga Heroica, faz dois raios como Ação Rápida.

**Arco Ardente (6º) ({ch 2}).** Depois da Ação Atacar, ativa Lança-Chamas como Ação Rápida (custa só as Cargas Heroicas da característica, sem a Sobrecarga do poder); cada Carga Heroica a mais aumenta o Nível de Poder em 1, com custo total de até metade do nível.

**Explosão Solar (11º) ({ch 1–3}).** Com 1 Ação, lança uma esfera a até 45 m que explode num raio de 6 m: Teste de Integridade (Resistência) ou 2d6 de Dano Radiante. Soma 2d6 por Carga Heroica gasta.

**Escudo Solar (17º).** Emite luz plena de 9 m. Quando atingido por uma Jogada de Ataque Corpo a Corpo, com a Reação, causa 5 + Espírito de radiante ao atacante.
:::

# Símbolo da Justiça {#simbolo-da-justica arquetipo}

O Símbolo da Justiça é o herói que as pessoas imaginam quando ouvem a palavra. Fez um juramento, a uma causa, a um ideal ou a si mesmo, e esse juramento lhe dá poder. Enquanto o cumprir, ele protege, cura e julga; se o quebrar, o poder muda de natureza.

No grupo, ele é o protetor e o finalizador: aguenta golpes, fortalece aliados com auras e descarrega golpes devastadores quando o momento pede.

**Poderes típicos:** aura, superforça, energia sagrada, proteção, cura, julgamento, armas lendárias e voo.

:::ficha
- **Parâmetro principal:** Potência e Magnetismo
- **Testes de Integridade:** Espírito e Magnetismo
- **Matriz de Vitalidade:** d10
- **Especialização:** 3º nível
:::

**O juramento.** Defina em poucas frases o que o herói jurou. O Mestre pode usar o juramento como fonte de dilemas: o que acontece quando dois princípios entram em conflito?

## Progressão do Símbolo da Justiça

{tabela progressao}
| Nível | Prof. | Características | NP máximo |
|---|---|---|---|
| 1 | +2 | Sentido Sobrenatural, Toque Restaurador | — |
| 2 | +2 | Estilo de Luta, Uso de Poderes, Golpe Justiceiro | 1 |
| 3 | +2 | Saúde Inabalável, Especialização, Poder Concentrado | 1 |
| 4 | +2 | Evolução | 1 |
| 5 | +3 | Ataque Extra | 2 |
| 6 | +3 | Aura de Proteção | 2 |
| 7 | +3 | Característica de Especialização | 2 |
| 8 | +3 | Evolução | 2 |
| 9 | +4 | — | 3 |
| 10 | +4 | Aura de Coragem | 3 |
| 11 | +4 | Golpe Justiceiro Aprimorado | 3 |
| 12 | +4 | Evolução | 3 |
| 13 | +5 | — | 4 |
| 14 | +5 | Toque Purificador | 4 |
| 15 | +5 | Característica de Especialização | 4 |
| 16 | +5 | Evolução | 4 |
| 17 | +6 | — | 5 |
| 18 | +6 | Auras Ampliadas (9 m) | 5 |
| 19 | +6 | Evolução | 5 |
| 20 | +6 | Característica de Especialização, Apoteose | 5 |

## Características do Arquétipo

- **Pontos de Vida:** 30 + modificador de Resistência
- **Níveis seguintes:** 10 + modificador de Resistência
- **Matriz de Vitalidade:** d10

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo, Armas de Fogo, Armamento Pesado, Blindagem Leve e Blindagem Pesada
- **Ferramentas:** nenhuma
- **Integridade:** Espírito e Magnetismo
- **Perícias:** escolha duas entre Atletismo, Intuição, Intimidação, Medicina, Persuasão e Religião

### Uso de Poderes (2º nível)

O poder nasce do juramento. O símbolo dele (um emblema no peito, um escudo, uma arma) pode servir de Foco de Poder.

- **Parâmetro de poder:** Magnetismo
- **CD de Poder:** 8 + Bônus de Proficiência + modificador de Magnetismo
- **Jogada de Ataque de Poder:** Bônus de Proficiência + modificador de Magnetismo
- **Poderes preparados:** após uma Recuperação, prepara poderes em número igual a Magnetismo + metade do nível (mínimo 1). Os poderes da Especialização estão sempre preparados e não contam no limite.
- **À vontade:** ativa qualquer poder preparado sem limite de usos, até o Nível de Poder máximo da tabela, seguindo a Sobrecarga. Esse máximo também limita o Golpe Justiceiro.

O Símbolo não tem Técnicas, a menos que escolha o Estilo de Luta Guerreiro Técnico.

## Características por nível

### Sentido Sobrenatural (1º nível) {ch 1}

Com 1 Ação, até o fim do próximo turno, sabe onde estão celestiais, demônios e mortos-vivos a até 18 m (sem cobertura total), e lugares consagrados ou profanados.

### Toque Restaurador (1º nível) {ch 1}

Com 1 Ação, toca uma criatura e restaura até 5 × nível PV por uso, ou, no lugar da cura, cura uma doença ou neutraliza um veneno. Não funciona em mortos-vivos nem constructos.

### Estilo de Luta (2º nível)

Escolhe um: Combate às Cegas, Defesa, Duelo, Armas Pesadas, Interceptação ou Proteção (veja o [Especialista em Combate](#/arquetipos/especialista-em-combate/estilo-de-luta-1-nivel)), ou:

- **Guerreiro Técnico.** Aprende duas Técnicas, usando Magnetismo. Pode trocar uma delas ao subir de nível.

### Golpe Justiceiro (2º nível)

Ao acertar uma Jogada de Ataque Corpo a Corpo com arma, o Símbolo pode descarregar poder no golpe. Escolhe um Nível de Poder até o seu máximo: o alvo sofre 2d8 de Dano Radiante no Nível de Poder 1, +1d8 por Nível de Poder acima, até 5d8. Contra mortos-vivos e demônios, +1d8 (máximo 6d8).

**Golpe e Sobrecarga.** O Golpe Justiceiro conta como ativar um poder do Nível de Poder escolhido para a Sobrecarga: se o Nível de Poder ainda não foi liberado na cena, o Símbolo faz o teste (CD 11 + Nível de Poder); se já foi, o Golpe sai sem teste.

### Saúde Inabalável (3º nível)

Imune a doenças.

### Poder Concentrado (3º nível) {ch 2}

Com uma Ação Rápida, libera na cena, sem Teste de Sobrecarga, um Nível de Poder até metade do Bônus de Proficiência (arredondado para cima).

### Evolução (4º, 8º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até o máximo de 20. Pode ser trocada por um Talento.

### Ataque Extra (5º nível)

Ataca duas vezes ao usar a Ação Atacar.

### Aura de Proteção (6º nível)

Ele e aliados a até 3 m somam o Magnetismo dele (mínimo +1) aos Testes de Integridade, enquanto ele estiver consciente.

### Aura de Coragem (10º nível)

Ele e aliados a até 3 m não podem ficar amedrontados enquanto ele estiver consciente.

### Golpe Justiceiro Aprimorado (11º nível)

Todo acerto corpo a corpo com arma causa +1d8 de Dano Radiante. Soma-se ao Golpe Justiceiro.

### Toque Purificador (14º nível) {ch 7}

Com 1 Ação, encerra um poder ativo em si ou numa criatura voluntária que tocar.

### Auras Ampliadas (18º nível)

Todas as auras do Símbolo (a Aura de Proteção, a Aura de Coragem e a aura da Especialização) passam de 3 m para 9 m.

### Apoteose: Símbolo Eterno (20º nível)

O juramento se torna a própria natureza do herói. A característica de 20º nível da sua Especialização pode ser ativada com uma Ação Rápida, e a primeira ativação dela em cada cena não gasta Cargas Heroicas (as ativações seguintes na cena pagam o custo normal). A duração dela dobra. Se essa característica não tem ativação (Emissário da Redenção), o Símbolo recupera 10 PV no início de cada turno enquanto tiver ao menos 1 PV.

## Especializações: Símbolos

No 3º nível, o Símbolo escolhe a sua Especialização. Ela concede poderes da Especialização, duas opções de **Juramento Ativo** e características no 3º, 7º, 15º e 20º níveis. Cada Juramento Ativo é uma Característica de Carga Heroica que custa {ch 1}. CD do Juramento Ativo = CD de Poder.

Os poderes da Especialização entram sempre preparados ao alcançar o Nível de Poder indicado. As auras do 7º nível têm 3 m, e 9 m a partir do 18º.

| Especialização | Papel |
|---|---|
| Símbolo do Defensor | O herói clássico: honra e luz |
| Símbolo da Esperança | Guardião da vida e da esperança |
| Símbolo do Justiceiro | Justiceiro implacável |
| Símbolo do Conquistador | Ordem pela força e pelo medo |
| Símbolo da Lei | Defensor da lei e da sociedade |
| Símbolo da Glória | Atleta lendário em busca de feitos |
| Símbolo da Redenção | Pacifista que só luta em último caso |
| Símbolo da Sentinela | Sentinela contra ameaças de outras dimensões |
| Símbolo Quebrado | Quem quebrou o juramento e encontrou outro poder |

:::tabs
### Símbolo do Defensor

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Guarda contra Entidades, Aura de Trégua |
| 2 | Purificar Condição, Zona da Verdade |
| 3 | Farol de Esperança, Neutralizar Poder |
| 4 | Movimento Livre, Guardião Radiante |
| 5 | Consulta à Fonte, Coluna de Plasma |

**Juramento Ativo: Arma Radiante (3º) ({ch 1}).** Com 1 Ação, por 1 minuto, soma Magnetismo aos ataques com uma arma, que emite luz e conta como especial.

**Juramento Ativo: Repelir as Trevas (3º) ({ch 1}).** Demônios e mortos-vivos a até 9 m fazem Teste de Integridade (Espírito) ou ficam repelidos por 1 minuto ou até sofrer dano.

**Aura do Defensor (7º).** Ele e aliados na aura não podem ser dominados.

**Pureza de Espírito (15º).** Está sempre sob o efeito de Guarda contra Entidades.

**Halo de Luz (20º) ({ch 8}).** Com 1 Ação, por 1 minuto:

- emite luz plena de 9 m;
- inimigos que começam o turno nela sofrem 10 de radiante;
- ele tem Vantagem contra poderes de demônios e mortos-vivos.

### Símbolo da Esperança

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Golpe Enredante, Linguagem Animal |
| 2 | Feixe Lunar, Salto Quântico |
| 3 | Crescimento Acelerado, Proteção Elemental |
| 4 | Nevasca, Pele de Pedra |
| 5 | Leitura Ambiental, Trânsito Arbóreo |

**Juramento Ativo: Vinhas Vivas (3º) ({ch 1}).** Vinhas de energia prendem uma criatura a até 3 m: Teste de Integridade (Potência ou Reflexos) ou fica impedida (repete o teste a cada turno).

**Juramento Ativo: Repelir Invasores (3º) ({ch 1}).** Fadas e demônios a até 9 m fazem Teste de Integridade (Espírito) ou ficam repelidos por 1 minuto ou até sofrer dano.

**Aura Antipoder (7º).** Ele e aliados na aura têm Resistência ao dano de poderes.

**Sentinela Imortal (15º) ({ch 5}).** Ao cair a 0 PV sem morrer, fica com 1 PV. Não sofre os efeitos da velhice nem envelhecimento por poderes.

**Campeão da Vida (20º) ({ch 8}).** Com 1 Ação, por 1 minuto:

- recupera 10 PV no início de cada turno;
- ativa poderes de 1 Ação como Ação Rápida;
- inimigos a até 3 m têm Desvantagem contra seus poderes e Juramento Ativo.

### Símbolo do Justiceiro

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Abalo Moral, Alvo Marcado |
| 2 | Paralisia Neural, Salto Quântico |
| 3 | Supervelocidade, Proteção Elemental |
| 4 | Exílio Dimensional, Porta Dimensional |
| 5 | Paralisia Total, Vigilância Remota |

**Juramento Ativo: Condenar Inimigo (3º) ({ch 1}).** Uma criatura a até 18 m faz Teste de Integridade (Espírito) ou fica amedrontada com Deslocamento 0 por 1 minuto ou até sofrer dano; se passar, o Deslocamento cai pela metade.

**Juramento Ativo: Caçada Pessoal (3º) ({ch 1}).** Com uma Ação Rápida, ganha Vantagem em ataques contra uma criatura a até 3 m por 1 minuto.

**Vingador Implacável (7º).** Ao acertar um Contra-ataque, pode se mover metade do Deslocamento como parte da Reação, sem provocar Contra-ataques.

**Alma da Vingança (15º).** Quando o alvo da Caçada Pessoal ataca, pode usar a Reação para atacá-lo corpo a corpo.

**Vingador Alado (20º) ({ch 8}).** Com 1 Ação, por 1 hora: asas com voo de 18 m e uma aura de 9 m; inimigos que entram ou começam o turno nela fazem Teste de Integridade (Espírito) ou ficam amedrontados por 1 minuto, e ataques contra eles têm Vantagem.

### Símbolo do Conquistador

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Couraça Criogênica, Ordem Psíquica |
| 2 | Paralisia Neural, Arma Fantasma |
| 3 | Maldição Profunda, Onda de Terror |
| 4 | Dominar Fera, Pele de Pedra |
| 5 | Nuvem Letal, Dominação Mental |

**Juramento Ativo: Presença Conquistadora (3º) ({ch 1}).** Criaturas escolhidas a até 9 m fazem Teste de Integridade (Espírito) ou ficam amedrontadas por 1 minuto (repetem o teste a cada turno).

**Juramento Ativo: Golpe Guiado (3º) ({ch 1}).** Soma +10 a um ataque depois de ver a rolagem.

**Aura de Conquista (7º).** Criaturas amedrontadas por ele na aura têm Deslocamento 0 e sofrem Dano de Psíquico igual à metade do nível no início do turno.

**Repreensão Desdenhosa (15º).** Quem o acertar sofre Dano de Psíquico igual ao Magnetismo (mínimo 1).

**Conquistador Invencível (20º) ({ch 8}).** Com 1 Ação, por 1 minuto:

- resistência a todo dano;
- um ataque extra na Ação Atacar;
- crítico com 19 ou 20.

### Símbolo da Lei

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Ordem Psíquica, Desafio Pessoal |
| 2 | Elo Protetor, Zona da Verdade |
| 3 | Aura Revigorante, Guardiões Espectrais |
| 4 | Exílio Dimensional, Guardião Radiante |
| 5 | Campo de Resistência, Diretriz |

**Juramento Ativo: Desafio do Campeão (3º) ({ch 1}).** Com uma Ação Rápida, criaturas escolhidas a até 9 m fazem Teste de Integridade (Espírito) ou não podem se afastar mais de 9 m dele.

**Juramento Ativo: Virar a Maré (3º) ({ch 1}).** Com uma Ação Rápida, aliados a até 9 m com metade dos PV ou menos recuperam 1d6 + Magnetismo.

**Lealdade Absoluta (7º).** Quando um aliado a até 1,5 m sofre dano, pode usar a Reação para sofrer o dano no lugar dele.

**Pilar Inabalável (15º).** Vantagem contra ficar paralisado ou atordoado.

**Campeão do Povo (20º) ({ch 8}).** Com 1 Ação, por 1 hora:

- Resistência a Dano de armas comuns;
- aliados a até 9 m têm Vantagem em Testes de Estabilização;
- ele e aliados têm Vantagem em Testes de Integridade (Espírito).

### Símbolo da Glória

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Raio Marcador, Coragem Heroica |
| 2 | Potencial Ampliado, Arma Energizada |
| 3 | Supervelocidade, Proteção Elemental |
| 4 | Compulsão, Movimento Livre |
| 5 | Consulta à Fonte, Coluna de Plasma |

**Juramento Ativo: Atleta Incomparável (3º) ({ch 1}).** Com uma Ação Rápida, por 10 minutos: Vantagem em Atletismo e Acrobacia, carga dobrada e +3 m nos saltos.

**Juramento Ativo: Golpe Inspirador (3º) ({ch 1}).** Depois de um Golpe Justiceiro, com uma Ação Rápida, distribui 2d8 + nível de PV temporários entre aliados a até 9 m.

**Aura de Prontidão (7º).** +3 m de Deslocamento; aliados que começam o turno a até 1,5 m dele ganham +3 m até o fim do turno (3 m de alcance no 18º).

**Defesa Gloriosa (15º) ({ch 5}).** Quando ele ou um aliado a até 3 m é atingido, com a Reação, soma Magnetismo à CA do alvo; se o ataque errar, ele pode atacar o atacante.

**Lenda Viva (20º) ({ch 8}).** Com uma Ação Rápida, por 1 minuto:

- Vantagem em Testes de Parâmetro (Magnetismo);
- uma vez por turno, transforma um ataque com arma que errou em acerto;
- ao falhar num Teste de Integridade, pode rolar de novo com a Reação.

### Símbolo da Redenção

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Aura de Trégua, Pulso Sonífero |
| 2 | Calmaria Emocional, Paralisia Neural |
| 3 | Contrapoder, Padrão Hipnótico |
| 4 | Bolha de Força, Pele de Pedra |
| 5 | Paralisia Total, Muralha de Força |

**Juramento Ativo: Emissário da Paz (3º) ({ch 1}).** Com uma Ação Rápida, +5 em Persuasão por 10 minutos.

**Juramento Ativo: Repreender o Violento (3º) ({ch 1}).** Quando um atacante a até 9 m causa dano a outra criatura, com a Reação, ele faz Teste de Integridade (Espírito) e sofre radiante igual ao dano que causou (metade se passar).

**Aura do Guardião (7º).** Quando um aliado na aura sofre dano, com a Reação, ele sofre o dano no lugar; esse dano não pode ser reduzido.

**Espírito Protetor (15º).** No fim de cada turno, se estiver abaixo da metade dos PV e acima de 0, recupera 1d6 + metade do nível.

**Emissário da Redenção (20º).** Resistência a todo dano causado por criaturas; quem o fere sofre radiante igual à metade do dano. Perde esses benefícios contra uma criatura que ele atacou ou feriu até a próxima Recuperação.

### Símbolo da Sentinela

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Perímetro de Alerta, Detectar Poderes |
| 2 | Feixe Lunar, Ver o Invisível |
| 3 | Contrapoder, Indetectável |
| 4 | Aura de Pureza, Exílio Dimensional |
| 5 | Paralisia Total, Vigilância Remota |

**Juramento Ativo: Vontade da Sentinela (3º) ({ch 1}).** Com 1 Ação, ele e até Magnetismo criaturas a até 9 m têm Vantagem em Testes de Integridade (Lógica, Espírito e Magnetismo) por 1 minuto.

**Juramento Ativo: Repelir Invasores Dimensionais (3º) ({ch 1}).** Aberrações, celestiais, elementais, fadas e demônios a até 9 m fazem Teste de Integridade (Espírito) ou ficam repelidos por 1 minuto ou até sofrer dano.

**Aura da Sentinela (7º).** Ele e aliados na aura somam o Bônus de Proficiência dele à Iniciativa.

**Contragolpe Mental (15º).** Quando ele ou um aliado a até 9 m passa num Teste de Integridade (Lógica, Espírito ou Magnetismo), com a Reação, causa 2d8 + Magnetismo de Dano de Energia a quem forçou o teste.

**Última Muralha (20º) ({ch 8}).** Com uma Ação Rápida, por 1 minuto:

- visão verdadeira de 36 m;
- Vantagem em ataques contra aberrações, celestiais, elementais, fadas e demônios;
- ao acertar uma delas, pode forçar um Teste de Integridade (Magnetismo) para bani-la à dimensão de origem.

### Símbolo Quebrado

*Pensado para vilões ou para heróis caídos em busca de redenção.*

**Poderes da Especialização.**

| NP | Poderes |
|---|---|
| 1 | Retaliação Ígnea, Toque Devastador |
| 2 | Controle Hostil, Escuridão |
| 3 | Reanimar Cadáveres, Maldição Profunda |
| 4 | Drenagem Vital, Colapso Mental |
| 5 | Vírus, Dominação Mental |

**Juramento Ativo: Controlar Mortos-Vivos (3º) ({ch 1}).** Um morto-vivo a até 9 m faz Teste de Integridade (Espírito) ou obedece por 24 horas. Imunes se o NA for igual ou maior que o nível do Símbolo.

**Juramento Ativo: Aspecto Terrível (3º) ({ch 1}).** Criaturas escolhidas a até 9 m fazem Teste de Integridade (Espírito) ou ficam amedrontadas por 1 minuto.

**Aura de Ódio (7º).** Ele e demônios e mortos-vivos na aura somam Magnetismo ao dano corpo a corpo.

**Resistência Sobrenatural (15º).** Resistência a Dano de Concussão, perfurante e cortante de armas comuns.

**Senhor do Medo (20º) ({ch 8}).** Com 1 Ação, por 1 minuto, uma aura de 9 m escurece a luz:

- inimigos amedrontados que começam o turno nela sofrem 4d10 de Dano de Psíquico;
- ataques contra ele de quem depende da visão têm Desvantagem;
- com uma Ação Rápida, ele ataca com sombras (3d10 + Magnetismo de Dano Necrótico).
:::

# Rastreador Vigilante {#rastreador-vigilante arquetipo}

O Rastreador Vigilante é o caçador do mundo moderno. Investiga, rastreia e elimina ameaças antes que cheguem à cidade. Muitos têm implantes tecnológicos que aguçam os sentidos, como visão infravermelha e audição ampliada; outros têm um vínculo com a natureza ou só décadas de experiência em campo.

No grupo, ele é o atirador e o batedor: dano consistente à distância, rastreamento, sobrevivência e poderes de apoio.

**Poderes típicos:** arco, armas de fogo, rastreamento, furtividade, sobrevivência, sentidos aguçados e caça a alvos específicos.

:::ficha
- **Parâmetro principal:** Reflexos e Espírito
- **Testes de Integridade:** Potência e Reflexos
- **Matriz de Vitalidade:** d10
- **Especialização:** 3º nível
:::

**Fonte dos poderes.** Os poderes do Rastreador podem ser tecnologia (Alvo Marcado como um rastreador por satélite, Toque Regenerador como um kit médico avançado) ou um vínculo natural, conforme o conceito do herói.

## Progressão do Rastreador Vigilante

{tabela progressao}
| Nível | Prof. | Características | Poderes | Nível máx. |
|---|---|---|---|---|
| 1 | +2 | Alvo Prioritário (ou Marca de Caça), Especialista em Terreno (ou Explorador Hábil) | — | — |
| 2 | +2 | Estilo de Luta, Uso de Poderes | 2 | 1 |
| 3 | +2 | Especialização, Percepção Ampliada | 3 | 1 |
| 4 | +2 | Evolução | 3 | 1 |
| 5 | +3 | Ataque Extra | 4 | 2 |
| 6 | +3 | Melhorias de Alvo Prioritário e Especialista em Terreno | 4 | 2 |
| 7 | +3 | Característica de Especialização | 5 | 2 |
| 8 | +3 | Evolução, Passo Livre | 5 | 2 |
| 9 | +4 | — | 6 | 3 |
| 10 | +4 | Especialista em Terreno aprimorado, Camuflagem (ou Camuflagem Ativa) | 6 | 3 |
| 11 | +4 | Característica de Especialização | 7 | 3 |
| 12 | +4 | Evolução | 7 | 3 |
| 13 | +5 | — | 8 | 4 |
| 14 | +5 | Alvo Prioritário aprimorado, Sumir | 8 | 4 |
| 15 | +5 | Característica de Especialização | 9 | 4 |
| 16 | +5 | Evolução | 9 | 4 |
| 17 | +6 | — | 10 | 5 |
| 18 | +6 | Sentidos Predatórios | 10 | 5 |
| 19 | +6 | Evolução | 11 | 5 |
| 20 | +6 | Apoteose: Caçada Final | 11 | 5 |

## Características do Arquétipo

- **Pontos de Vida:** 30 + modificador de Resistência
- **Níveis seguintes:** 10 + modificador de Resistência
- **Matriz de Vitalidade:** d10

**Proficiências.**

- **Treinamentos:** Combate Corpo a Corpo, Armas de Fogo, Armamento Pesado e Blindagem Leve
- **Ferramentas:** nenhuma
- **Integridade:** Potência e Reflexos
- **Perícias:** escolha três entre Adestrar Animais, Atletismo, Intuição, Investigação, Natureza, Percepção, Furtividade e Sobrevivência

### Uso de Poderes (2º nível)

- **Parâmetro de poder:** Espírito
- **CD de Poder:** 8 + Bônus de Proficiência + modificador de Espírito
- **Jogada de Ataque de Poder:** Bônus de Proficiência + modificador de Espírito
- **Poderes conhecidos:** conforme a tabela, de Níveis de Poder que já pode ativar. Ao subir de nível, pode trocar um.
- **À vontade:** ativa qualquer poder conhecido sem limite de usos, até o Nível de Poder máximo, seguindo a Sobrecarga.
- **Foco de Poder:** opcional; um dispositivo, um amuleto natural ou o próprio implante.

## Características por nível

### Alvo Prioritário (1º nível)

Escolhe um tipo de inimigo (aberrações, feras, celestiais, constructos, dragões, elementais, fadas, demônios, gigantes, monstruosidades, limos, plantas ou mortos-vivos) ou dois tipos de humanoide. Opção do cenário: com aprovação do Mestre, pode escolher uma organização ou uma Origem, como "Mutantes" ou "agentes da Corporação X". Tem Vantagem em Sobrevivência para rastreá-los e em Testes de Parâmetro (Lógica) para lembrar informações sobre eles, e aprende um idioma deles. Escolhe mais um no 6º e no 14º nível.

### Marca de Caça (1º nível, alternativa)

Substitui o Alvo Prioritário. Ao acertar uma criatura, pode marcá-la por 1 minuto (Concentração). Na primeira vez em cada turno que a acerta, causa +1d4 de dano (1d6 no 6º, 1d8 no 14º). Pode marcar à vontade.

### Especialista em Terreno (1º nível)

Escolhe um terreno favorito (ártico, costa, deserto, floresta, campos, montanha, pântano, subterrâneo ou, como opção do cenário, urbano). Nele, dobra o Bônus de Proficiência em Testes de Parâmetro (Lógica e Espírito) em que é proficiente. Ao viajar por 1 hora ou mais, o grupo não é atrasado por terreno difícil nem se perde; ele fica alerta, anda furtivamente em ritmo normal, acha o dobro de comida e sabe o número, o tamanho e quando passaram as criaturas que rastreia. Escolhe mais um terreno no 6º e no 10º nível.

### Explorador Hábil (1º nível, alternativa)

Substitui o Especialista em Terreno. Concede:

- **Astuto (1º):** dobra o Bônus de Proficiência numa perícia em que é proficiente e aprende dois idiomas.
- **Andarilho (6º):** +1,5 m de Deslocamento e escalada e nado iguais ao Deslocamento.
- **Incansável (10º) ({ch 5}):** com 1 Ação, ganha 1d8 + Espírito de PV temporários; além disso, cada Pausa reduz a Exaustão em 1.

### Estilo de Luta (2º nível)

Escolhe um: Atirador, Combate às Cegas, Defesa, Duelo, Arremesso ou Duas Armas (veja o [Especialista em Combate](#/arquetipos/especialista-em-combate/estilo-de-luta-1-nivel)), ou:

- **Combatente Instintivo.** Aprende duas Técnicas, usando Espírito.

Em cada Evolução, pode trocar o estilo escolhido por outro.

### Especialização (3º nível)

Escolhe uma Especialização, que concede características no 3º, 7º, 11º e 15º níveis.

### Percepção Ampliada (3º nível)

Conhece estes poderes, sem contar no limite:

- Linguagem Animal (3º);
- Sentidos Emprestados (5º);
- Linguagem Vegetal (9º);
- Rastreamento (13º);
- Leitura Ambiental (17º).

Pode ativá-los à vontade (Sobrecarga normal). **Opção A ({ch 2}):** com 1 Ação, por 1 minuto por Nível de Poder escolhido (até o máximo), sente a presença de aberrações, celestiais, dragões, elementais, fadas, demônios e mortos-vivos a até 1,6 km (10 km no terreno favorito).

### Evolução (4º, 8º, 12º, 16º e 19º níveis)

+2 em um Parâmetro ou +1 em dois, até 20, ou um Talento.

### Ataque Extra (5º nível)

Ataca duas vezes ao usar a Ação Atacar.

### Passo Livre (8º nível)

Terreno difícil comum não o atrasa; plantas comuns não o ferem. Vantagem em Testes de Integridade contra plantas criadas por poderes.

### Camuflagem (10º nível)

Com 1 minuto, cria uma camuflagem com o ambiente: +10 em Furtividade enquanto ficar parado.

### Camuflagem Ativa (10º nível, alternativa) {ch 5}

Substitui a Camuflagem. Com uma Ação Rápida, fica invisível até o início do próximo turno.

### Sumir (14º nível)

Usa Esconder como Ação Rápida e não pode ser rastreado por meios comuns, a menos que queira.

### Sentidos Predatórios (18º nível)

Não tem Desvantagem ao atacar criaturas que não vê, e sabe onde está qualquer criatura invisível a até 9 m (se não estiver escondida e ele não estiver cego ou surdo).

### Apoteose: Caçada Final (20º nível)

Uma vez por turno, soma Espírito ao ataque ou ao dano contra um Alvo Prioritário (ou alvo da Marca de Caça).

## Especializações

No 3º nível, o Rastreador escolhe uma das oito Especializações. As que têm poderes próprios os conhecem sem contar no limite, ao alcançar o Nível de Poder indicado.

| Especialização | Papel |
|---|---|
| Rastreador Caçador | Dano versátil contra qualquer ameaça |
| Rastreador das Feras | Luta ao lado de um companheiro animal |
| Rastreador Noturno | Emboscador invisível no escuro |
| Rastreador Dimensional | Guarda das fronteiras entre dimensões |
| Rastreador de Anomalias | Especialista em ameaças sobrenaturais |
| Rastreador Onírico | Magnetismo sobrenatural e Dano de Psíquico |
| Rastreador do Enxame | Controla um enxame (insetos, pássaros ou nanorrobôs) |
| Rastreador Biomecânico | Constrói e cavalga uma fera-robô |

:::tabs
### Rastreador Caçador

**Especialidade do Caçador (3º).** Escolha uma:

- **Matador de Colossos:** uma vez por turno, +1d8 contra criatura abaixo dos PV máximos.
- **Matador de Gigantes:** Reação: ataca uma criatura Grande ou maior a até 1,5 m que o atacou.
- **Quebra-Hordas:** uma vez por turno, ataque extra contra outra criatura a até 1,5 m do alvo.

**Táticas Defensivas (7º).** Escolha uma:

- **Escapar da Horda:** Contra-ataques contra ele têm Desvantagem.
- **Defesa contra Multiataque:** +4 na CA contra ataques seguintes da mesma criatura no turno.
- **Vontade de Aço:** Vantagem contra ficar amedrontado.

**Multiataque (11º).** Escolha um:

- **Rajada:** Jogadas de Ataque à Distância contra todas as criaturas a até 3 m de um ponto.
- **Ataque Giratório:** Jogadas de Ataque Corpo a Corpo contra todas as criaturas a até 1,5 m.

**Defesa Superior (15º).** Escolha uma:

- **Evasão.**
- **Resistir à Maré:** Reação: quando uma Jogada de Ataque Corpo a Corpo erra, o atacante repete contra outra criatura.
- **Esquiva Sobrenatural:** Reação: reduz o dano de um ataque pela metade.

### Rastreador das Feras

**Companheiro (3º).** Ganha um companheiro. **Retorno ({ch 1}):** se o companheiro morreu há menos de 1 hora, pode trazê-lo de volta com 1 Ação. Escolha uma opção:

- **Opção A:** uma fera Média ou menor de NA 1/4 ou menos, que soma o Bônus de Proficiência dele à sua CA, ataques, dano e Testes de Integridade, com PV iguais ao maior entre os normais e 4 × nível; age quando ele usa a Ação para comandar.
- **Opção B (Companheiro de Energia):** uma criatura de energia em forma animal, com CA 13 + Bônus de Proficiência; faz Esquivar sem ordem, ordens custam uma Ação Rápida, e ele pode trocar um ataque pelo ataque do companheiro. Escolha a forma:
  - **Terra:** PV 5 + 5 × nível, 12 m, Golpe 1d8 + 2 + Bônus de Proficiência.
  - **Mar:** PV 5 + 5 × nível, nado 18 m, anfíbio, Agarrão 1d6 + 2 + Bônus de Proficiência.
  - **Céu:** PV 4 + 4 × nível, voo 18 m, Rasante 1d4 + 3 + Bônus de Proficiência.

**Treino Excepcional (7º).** O companheiro pode Disparar, Recuar ou Ajudar com uma Ação Rápida, e seus ataques contam como especiais.

**Fúria Bestial (11º).** O companheiro faz dois ataques (ou usa o Multiataque) quando atacar.

**Compartilhar Poderes (15º).** Poderes que ele ativa em si também afetam o companheiro a até 9 m.

### Rastreador Noturno

**Poderes do Rastreador Noturno.**

| NP | Poderes |
|---|---|
| 1 | Disfarce Holográfico |
| 2 | Bolsão Dimensional |
| 3 | Onda de Terror |
| 4 | Invisibilidade Total |
| 5 | Disfarce em Massa |

**Ataque de Abertura (3º).** Soma Espírito à Iniciativa. No primeiro turno de cada combate, +3 m de Deslocamento e, ao usar a Ação Atacar, um ataque extra que causa +1d8 se acertar.

**Visão Noturna Tática (3º).** Visão no escuro de 18 m (ou +9 m). Na escuridão, fica invisível para quem depende de visão no escuro.

**Mente de Ferro (7º).** Proficiência em Testes de Integridade (Espírito) (ou de Lógica ou Magnetismo, se já tiver).

**Rajada Persistente (11º).** Uma vez por turno, ao errar um ataque com arma, faz outro ataque.

**Esquiva na Penumbra (15º).** Quando é atacado sem Vantagem, com a Reação, impõe Desvantagem.

### Rastreador Dimensional

**Poderes do Rastreador Dimensional.**

| NP | Poderes |
|---|---|
| 1 | Guarda contra Entidades |
| 2 | Salto Quântico |
| 3 | Supervelocidade |
| 4 | Exílio Dimensional |
| 5 | Portal de Transporte |

**Detectar Portal (3º) ({ch 1}).** Com 1 Ação, sente a direção e a distância do portal dimensional mais próximo a até 1,6 km.

**Guerreiro Interdimensional (3º).** Com uma Ação Rápida, escolhe uma criatura a até 9 m; o próximo acerto contra ela neste turno causa Dano de Energia e +1d8 de Dano de Energia (2d8 no 11º).

**Passo de Fase (7º).** Pode ativar Forma Etérea à vontade (Sobrecarga normal) com uma Ação Rápida; ativada assim, dura até o fim do turno.

**Golpe Distante (11º).** Ao usar a Ação Atacar, pode se teleportar 3 m antes de cada ataque. Se atacar duas criaturas diferentes, faz um ataque extra contra uma terceira.

**Defesa de Fase (15º).** Ao ser atingido, com a Reação, ganha resistência a todo o dano daquele ataque.

### Rastreador de Anomalias

**Poderes do Rastreador de Anomalias.**

| NP | Poderes |
|---|---|
| 1 | Guarda contra Entidades |
| 2 | Zona da Verdade |
| 3 | Perímetro de Contenção |
| 4 | Exílio Dimensional |
| 5 | Paralisia Total |

**Análise de Ameaça (3º) ({ch 1}).** Com 1 Ação, descobre imunidades, resistências e vulnerabilidades de uma criatura a até 18 m.

**Presa Designada (3º).** Com uma Ação Rápida, marca uma criatura a até 18 m; o primeiro acerto contra ela em cada turno causa +1d6. Dura até uma Pausa ou Recuperação, ou até marcar outra.

**Defesa Sobrenatural (7º).** Soma 1d6 aos Testes de Integridade e aos testes para escapar de agarrão forçados pela presa.

**Nêmesis dos Poderosos (11º) ({ch 5}).** Quando uma criatura a até 18 m ativa um poder ou se teleporta, com a Reação, ela faz um Teste de Integridade (Espírito); se falhar, o poder ou teleporte falha e se perde.

**Golpe Preventivo (15º).** Quando a presa força um Teste de Integridade, com a Reação, ele ataca primeiro; se acertar, passa automaticamente.

### Rastreador Onírico

**Poderes do Rastreador Onírico.**

| NP | Poderes |
|---|---|
| 1 | Fascínio Pessoal |
| 2 | Salto Quântico |
| 3 | Neutralizar Poder |
| 4 | Porta Dimensional |
| 5 | Duplo Holográfico |

**Golpes Temerosos (3º).** Ao acertar com arma, causa +1d4 de Dano de Psíquico (1d6 no 11º), uma vez por turno por criatura.

**Magnetismo Sobrenatural (3º).** Soma Espírito (mínimo +1) aos Testes de Parâmetro (Magnetismo) e ganha proficiência em Enganação, Atuação ou Persuasão. Tem um sinal sobrenatural visível (brilho nos olhos, aura colorida, marcas na pele etc.).

**Reviravolta Hipnótica (7º).** Vantagem contra ficar dominado ou amedrontado. Quando ele ou um aliado a até 36 m passa nesse Teste de Integridade, com a Reação, outra criatura faz um Teste de Integridade (Espírito) ou fica dominada ou amedrontada por 1 minuto.

**Reforços Oníricos (11º).** Conhece Invocar Espírito Feérico e pode ativá-lo à vontade (Sobrecarga normal). Ao ativá-lo, pode dispensar a Concentração (duração de 1 minuto).

**Salto na Névoa (15º).** Pode ativar Salto Quântico à vontade (Sobrecarga normal) e, ao fazê-lo, pode levar uma criatura voluntária a até 1,5 m.

### Rastreador do Enxame

**Poderes do Rastreador do Enxame.**

| NP | Poderes |
|---|---|
| Técnica | Mão Cinética |
| 1 | Marcador de Alvo |
| 2 | Teia |
| 3 | Forma Gasosa |
| 4 | Olho Espião |
| 5 | Praga de Insetos |

**Enxame Reunido (3º).** Um enxame de insetos, pássaros ou nanorrobôs vive com ele. Uma vez por turno, após acertar, escolhe um efeito:

- +1d6 de Dano Perfurante;
- o alvo faz um Teste de Integridade (Potência) ou é movido 4,5 m;
- ele mesmo se move 1,5 m.

**Nuvem Ascendente (7º) ({ch 3}).** Com uma Ação Rápida, voo de 3 m com pairar por 1 minuto.

**Enxame Poderoso (11º).** O dano vira 1d8; o alvo movido também pode cair; quando ele mesmo é movido, ganha meia cobertura.

**Dispersão do Enxame (15º) ({ch 8}).** Ao sofrer dano, com a Reação, ganha resistência e se teleporta até 9 m.

### Rastreador Biomecânico

**Oficina de Campo (3º).** Aprende Aura de Presença e ganha proficiência em uma ferramenta à escolha.

**Fera-Máquina Pequena (3º) ({ch 1}).** Com 1 Ação, ativa uma fera-robô Pequena que ele mesmo construiu, com a forma de um animal à escolha: CA 14 + Bônus de Proficiência, PV 5 + 5 × nível, 12 m. Seu núcleo de energia é de um tipo à escolha (ácido, frio, fogo, elétrico ou veneno): ela é imune a esse tipo, e sua mordida (ou garra) causa dano desse tipo. Age logo após ele e faz Esquivar sem ordem.

**Upgrade: Propulsores (7º).** A fera-máquina fica Média, ganha propulsores (voo igual ao Deslocamento), pode ser montada e causa +1d6 na mordida. Ele ganha resistência ao tipo de dano do núcleo.

**Canhão de Energia (11º) ({ch 5}).** Com 1 Ação, ele (pelo controle no pulso) ou a fera-máquina dispara uma descarga do núcleo num cone de 9 m: Teste de Integridade (Reflexos) ou 8d6 (10d6 no 15º), metade se passar.

**Protótipo Final (15º).** A fera-máquina fica Grande, pode voar montada e causa +2d6 na mordida. **Blindagem Compartilhada ({ch 8}):** com a Reação, ao sofrer dano a até 9 m da fera-máquina, ele ganha resistência.
:::
`,Hl={id:`poderes`,num:4,title:`Poderes`,subtitle:`A lista completa de poderes, das Técnicas ao Nível 9, com fichas completas.`,md:String.raw`
# Lista de poderes {#lista}

:::poderes
:::

# Como ler este capítulo {#como-ler}

## Como ler este capítulo

Todo poder do jogo está aqui, numa única lista aberta a qualquer usuário de poderes: não há listas por Arquétipo. Os poderes estão organizados por Nível de Poder, das Técnicas ao Nível 9, e em ordem alfabética dentro de cada nível. Cada poder tem uma ficha completa.

### A ficha de poder

- **Linha de identificação.** Nível de Poder (número, letra e símbolo), categoria e marcadores.
- **Tempo.** Ação, Ação Rápida, Reação ou minutos. Τ indica que o poder pode ser ativado como ritual.
- **Alcance.** Distância até o alvo ou ponto de origem. "Pessoal" afeta só o herói ou parte dele.
- **Duração.** Κ indica Concentração.
- **Área (Θ).** Forma e tamanho da área afetada, quando houver.
- **Integridade ou ataque.** O Teste de Integridade que o alvo faz contra a CD de Poder, com o Parâmetro indicado, ou o tipo de Jogada de Ataque de Poder.
- **Dano.** O dano básico. Em poderes de área, o total rolado é o Σ do poder (veja abaixo).
- **Efeito.** A regra completa.
- **Em Níveis de Poder maiores.** O que melhora para cada Nível de Poder acima do base em que o poder for ativado. Ν indica que a melhora acrescenta alvos.

## O alfabeto do poder

As letras gregas são o vocabulário do Projeto: Vanguarda. Elas não substituem os termos das regras: compõem a descrição, aparecem nas fichas e dão nome ao jargão dos heróis. As maiúsculas nomeiam poderes e mecânicas; as minúsculas são números do herói, como CA.

**Níveis de Poder.** Cada nível tem um número, que é o que as regras usam, e uma letra com seu símbolo.

| Nível de Poder | Letra | Símbolo | CD de Sobrecarga |
|---|---|---|---|
| Técnica (0) | Ômicron | Ο | — |
| 1 | Zeta | Ζ | 12 |
| 2 | Épsilon | Ε | 13 |
| 3 | Iota | Ι | 14 |
| 4 | Delta | Δ | 15 |
| 5 | Gama | Γ | 16 |
| 6 | Beta | Β | 17 |
| 7 | Alfa | Α | 18 |
| 8 | Lambda | Λ | 19 |
| 9 | Ômega | Ω | 20 |
| 10 a 12 | Fi | Φ | Proibidos |

**Mecânicas básicas.**

| Símbolo | Letra | Termo | O que representa |
|---|---|---|---|
| Ο | Ômicron | Técnicas | Poderes menores, à vontade e sem Sobrecarga. Os mais simples que existem. |
| Σ | Sigma | Somatório | O total de dano de um poder: a soma de todos os dados rolados mais os modificadores. Um poder de área rola o Σ uma vez e aplica o mesmo total a todos os alvos. Também nomeia bônus que combinam Parâmetros. |
| Κ | Capa | Concentração | A estabilidade do herói para manter um poder ativo enquanto sofre dano ([Capítulo 1](#/regras/concentracao)). |

**Alvos e modificadores.**

| Símbolo | Letra | Termo | O que representa |
|---|---|---|---|
| Θ | Teta | Área | Poderes de área: cones, esferas, cubos, linhas, cilindros, muralhas e auras. |
| Μ | Mu | Metapoder | Modificações na estrutura de um poder, como dobrar o alcance ou estender a duração ([Controlador de Energia](#/arquetipos/controlador-de-energia), Capítulo 3). |
| Ν | Nu | Alvos múltiplos | Poderes que, ativados num Nível de Poder maior, afetam mais criaturas. |

**Natureza do poder.**

| Símbolo | Letra | Termo | O que representa |
|---|---|---|---|
| Χ | Qui | Custo | Materiais consumidos ao ativar um poder. Nenhum poder deste livro usa Χ, porque poderes não têm componentes; o termo fica reservado para rituais e artefatos que o Mestre criar. |
| Ψ | Psi | Psíquico | Poderes puramente mentais: Dano de Psíquico, telepatia, leitura e controle de mentes. |
| Ρ | Rô | Resistência a Poderes | Propriedade de criaturas que resistem naturalmente a poderes: Vantagem nos Testes de Integridade contra eles. |

**Restrições e riscos.**

| Símbolo | Letra | Termo | O que representa |
|---|---|---|---|
| Ξ | Cxi | Surto | O índice de caos de um poder descontrolado, que gera efeitos aleatórios (Energia Caótica, Capítulo 3). |
| Η | Eta | Exaustão de poder | O desgaste da Sobrecarga: a Exaustão ganha ao forçar poderes acima do que o corpo aguenta. |
| Τ | Tau | Ritual | Poderes que podem ser ativados com 10 minutos a mais, sem Teste de Sobrecarga, se o herói os tiver preparados ou conhecidos. |
| Υ | Úpsilon | Zona antipoder | Áreas onde os poderes deixam de funcionar e nenhum nível da escala se sustenta. |

**Além do Ômega.**

| Símbolo | Letra | Termo | O que representa |
|---|---|---|---|
| Φ | Fi | Poderes proibidos | Níveis de Poder 10 a 12. Veja a seção [Além do Ômega](#/poderes/como-ler/alem-do-omega-fi). |

## Categorias

Cada poder pertence a uma de oito categorias. Elas não restringem quem pode usar o poder; servem para características de Arquétipo e Especialização que se referem a um tipo de poder.

| Categoria | O que reúne |
|---|---|
| **Proteção** | Proteções, barreiras, anulação e banimento |
| **Percepção** | Detecção, informação, sentidos e previsão |
| **Criação** | Invocação de criaturas e objetos, teleporte e portais |
| **Mente** | Influência sobre mentes e emoções |
| **Energia** | Energia bruta: dano elemental, luz, força e cura direta |
| **Ilusão** | Imagens, sons e percepções falsas |
| **Entropia** | Vida, morte, drenagem e mortos-vivos |
| **Transformação** | Mudança de corpo, matéria, movimento e tempo |

## Regras gerais

- Todo poder de Nível 1 ou maior segue [Poderes à Vontade e Sobrecarga (Η)](#/arquetipos/visao-geral/sobrecarga-eta) (Capítulo 3). Técnicas nunca exigem teste.
- **Sem componentes.** Nenhum poder exige palavras, gestos, materiais ou foco. Basta ter a Ação necessária e não estar incapacitado. Um poder que leva minutos ou horas exige atenção contínua durante esse tempo.
- **Integridade e ataque.** Quando a ficha pede um Teste de Integridade, a CD é a CD de Poder do herói. "Jogada de Ataque de Poder" usa o bônus de Jogada de Ataque de Poder. "Metade no sucesso" significa que quem passa no teste sofre metade do dano.
- **Parâmetro.** "+ Parâmetro" significa somar o modificador do Parâmetro de poder do herói.
- **Nível de Poder em fórmulas.** Quando uma fórmula usa o "Nível de Poder" como número (por exemplo, "CA 11 + Nível de Poder"), use o número do nível em que o poder foi ativado.
- **Técnicas que crescem.** Quando o Efeito diz "cresce", o dano ganha um dado a mais no 5º, no 11º e no 17º nível do herói.
- **Descrição livre.** Um mesmo poder pode ser energia, tecnologia, mutação ou magia, conforme o herói. O efeito de jogo não muda.

## Além do Ômega · Fi (Φ)

Acima do Nível de Poder 9 existem os poderes proibidos, de Nível 10 a 12, chamados de poderes Fi (Φ). São forças capazes de reescrever cidades, apagar épocas ou dobrar a realidade inteira. Nenhum Arquétipo alcança esses níveis, e nenhum herói os aprende do jeito comum.

- **Onde aparecem.** Poderes Φ existem como artefatos, rituais esquecidos, entidades cósmicas e planos de vilões. Eles são ganchos de campanha, não opções de personagem.
- **Ativar um poder Φ.** Exige uma condição narrativa definida pelo Mestre (um artefato, um alinhamento de dimensões, o sacrifício de algo valioso) e, em geral, mais de um usuário de poderes.
- **Sobrecarga Φ.** Cada participante faz um Teste de Integridade (Resistência) com CD 21 (Nível 10), 22 (Nível 11) ou 23 (Nível 12). Falha dá 2 níveis de Exaustão (Η); sucesso dá 1. Não existe liberação na cena.
- **Consequências.** Todo poder Φ deixa uma marca no mundo: um Surto (Ξ) permanente, uma Zona Antipoder (Υ), uma fenda dimensional ou a atenção de algo que deveria continuar dormindo. O Mestre escolhe ou cria a consequência.
`},Ul=[{lv:0,nome:`Técnicas`,letra:`Ômicron`,g:`Ο`,cd:null,nota:`Técnicas são à vontade e nunca exigem Teste de Sobrecarga. Os valores são do 1º nível do herói; quando o Efeito diz "cresce", o dano ganha um dado a mais no 5º, no 11º e no 17º nível.`},{lv:1,nome:`Nível de Poder 1`,letra:`Zeta`,g:`Ζ`,cd:12,nota:`Teste de Sobrecarga (Η): Resistência, CD 12. Quando o Efeito traz "Em Níveis de Poder maiores", o poder melhora se for ativado num Nível de Poder acima do seu.`},{lv:2,nome:`Nível de Poder 2`,letra:`Épsilon`,g:`Ε`,cd:13,nota:`Teste de Sobrecarga: Resistência, CD 13.`},{lv:3,nome:`Nível de Poder 3`,letra:`Iota`,g:`Ι`,cd:14,nota:`Teste de Sobrecarga: Resistência, CD 14. Contrapoder e Neutralizar Poder comparam o Nível de Poder do efeito-alvo com o Nível de Poder em que o herói os ativou.`},{lv:4,nome:`Nível de Poder 4`,letra:`Delta`,g:`Δ`,cd:15,nota:`Teste de Sobrecarga: Resistência, CD 15.`},{lv:5,nome:`Nível de Poder 5`,letra:`Gama`,g:`Γ`,cd:16,nota:`Teste de Sobrecarga: Resistência, CD 16. Restauração Total remove um nível de Exaustão, inclusive os causados por Sobrecarga, mas ativá-la também exige o teste se o Nível de Poder ainda não foi liberado na cena.`},{lv:6,nome:`Nível de Poder 6`,letra:`Beta`,g:`Β`,cd:17,nota:`Teste de Sobrecarga: Resistência, CD 17. Um poder guardado em Protocolo de Contingência exige o teste do seu Nível de Poder quando é preparado, não quando dispara.`},{lv:7,nome:`Nível de Poder 7`,letra:`Alfa`,g:`Α`,cd:18,nota:`Teste de Sobrecarga: Resistência, CD 18.`},{lv:8,nome:`Nível de Poder 8`,letra:`Lambda`,g:`Λ`,cd:19,nota:`Teste de Sobrecarga: Resistência, CD 19.`},{lv:9,nome:`Nível de Poder 9`,letra:`Ômega`,g:`Ω`,cd:20,nota:`Teste de Sobrecarga: Resistência, CD 20. Reescrever a Realidade usado para reproduzir outro poder conta como ativação de Nível de Poder 9, não do Nível de Poder do poder copiado.`}],Wl={id:`criacao`,num:5,title:`Criação, Antecedentes e Talentos`,short:`Criação`,subtitle:`Do conceito à ficha pronta.`,md:String.raw`
## Criando um herói

Siga os passos na ordem. Tenha à mão os Capítulos 2 ([Origens](#/origens)), 3 ([Arquétipos](#/arquetipos)), 4 ([Poderes](#/poderes)) e 6 ([Equipamento](#/equipamento)).

:::passos
1. **Conceito.** Em uma frase: quem é o herói e por que ele luta? "Uma engenheira que transformou a armadura do pai num traje de combate." "Um mutante com fúria incontrolável que protege o bairro onde cresceu."
2. **Origem e Linhagem.** Escolha de onde vêm os poderes (Humanos, Parahumanos, Mutantes ou Visitantes) e a Linhagem. Anote os traços.
3. **Arquétipo e Especialização.** Escolha o caminho de heroísmo. Anote os Treinamentos do Arquétipo, as demais proficiências, os Pontos de Vida e as características de 1º nível. A Especialização é escolhida no nível indicado pelo Arquétipo (em geral, o 3º).
4. **Parâmetros.** Gere os seis valores (veja abaixo), distribua-os e aplique o aumento da Linhagem.
5. **Antecedente.** Escolha o que o herói fazia antes de vestir a máscara.
6. **Poderes.** Se o Arquétipo usa poderes, escolha Técnicas e poderes de Nível de Poder 1 da lista completa do Capítulo 4.
7. **Valores derivados.** Calcule PV, Classe de Armadura (CA), Iniciativa, CD de Poder e ataques. Anote também as Cargas Heroicas: 5 + metade do nível (5 no 1º nível).
8. **Créditos e equipamento.** Gaste os 300 cr iniciais no Capítulo 6.
9. **Identidade.** Nome heroico, identidade civil (secreta ou pública), aparência, uniforme, motivação e um código pessoal.
:::

### Gerando Parâmetros

Escolha um método com o Mestre. Todos os jogadores da mesa usam o mesmo.

- **Arranjo padrão.** Distribua 15, 14, 13, 12, 10 e 8 entre os seis Parâmetros.
- **Compra de pontos.** Todos os Parâmetros começam em 8. Gaste 27 pontos conforme a tabela; nenhum valor passa de 15 antes do aumento da Linhagem.
- **Rolagem.** Role 4d6 seis vezes, descarte o menor dado de cada rolagem e distribua os totais.

| Valor | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|
| Custo | 0 | 1 | 2 | 3 | 4 | 5 | 7 | 9 |

:::widget parametros
:::

### Valores derivados

| Valor | Cálculo no 1º nível |
|---|---|
| **Pontos de Vida** | 3 × o máximo da Matriz de Vitalidade do Arquétipo + modificador de Resistência |
| **PV por nível seguinte** | máximo da Matriz de Vitalidade + modificador de Resistência |
| **Matrizes de Vitalidade** | 1 por nível, do tipo do Arquétipo (gastas nas Pausas) |
| **Classe de Armadura (CA)** | 10 + modificador de Reflexos, ou o valor da armadura (Capítulo 6) |
| **Iniciativa** | modificador de Reflexos |
| **Deslocamento** | 9 m (mais Deslocamentos especiais da Linhagem) |
| **Bônus de Proficiência** | +2 |
| **CD de Poder** | 8 + Bônus de Proficiência + modificador do Parâmetro de poder |
| **Jogada de Ataque de Poder** | Bônus de Proficiência + modificador do Parâmetro de poder |
| **Percepção passiva** | 10 + modificador de Espírito (+ Bônus de Proficiência, se for proficiente em Percepção) |

*Exemplo. Um herói com Matriz de Vitalidade d10 e Resistência 14 (+2) começa com 3 × 10 + 2 = 32 PV e ganha 10 + 2 = 12 PV a cada nível.*

:::widget pv
:::

### Avanço

O herói sobe de nível por marcos (o Mestre avisa ao fim de um arco importante) ou por experiência (XP dado por desafios vencidos). Ao subir de nível, ele ganha os PV e as características do novo nível do Arquétipo e da Especialização, incluindo as Evoluções.

| Nível | XP | Nível | XP |
|---|---|---|---|
| 1 | 0 | 11 | 85.000 |
| 2 | 300 | 12 | 100.000 |
| 3 | 900 | 13 | 120.000 |
| 4 | 2.700 | 14 | 140.000 |
| 5 | 6.500 | 15 | 165.000 |
| 6 | 14.000 | 16 | 195.000 |
| 7 | 23.000 | 17 | 225.000 |
| 8 | 34.000 | 18 | 265.000 |
| 9 | 48.000 | 19 | 305.000 |
| 10 | 64.000 | 20 | 355.000 |

:::widget xp
:::

**Níveis de jogo.** Do 1º ao 4º nível, os heróis protegem o bairro. Do 5º ao 10º, a cidade. Do 11º ao 16º, o país e o mundo. Do 17º ao 20º, a realidade.

### Identidade heroica

- **Nome heroico.** O nome que a imprensa e os vilões usam.
- **Identidade civil.** Secreta (com tudo que isso protege e arrisca) ou pública (com a fama e o alvo nas costas).
- **Motivação.** Por que arriscar a vida? Vingança, dever, culpa, fé, curiosidade, redenção.
- **Código.** A linha que o herói não cruza. Nunca matar, nunca mentir para a equipe, nunca abandonar um civil.
- **Vínculos.** Duas pessoas importantes fora do uniforme: um parente, um mentor, um rival, um amor.

## Antecedentes

O Antecedente é a vida antes dos poderes ou da máscara. Cada um dá duas perícias, uma ferramenta, um idioma ou o Treinamento Veículos e uma característica narrativa que abre portas na história. Se nenhum servir, monte o seu com o Mestre: duas perícias, uma ferramenta, idioma ou o Treinamento Veículos e uma característica equivalente.

{tabela filtro}
| Antecedente | Perícias | Ferramenta, idioma ou Treinamento | Característica |
|---|---|---|---|
| Agente do Governo | Intuição, Investigação | Kit de disfarce | Credencial |
| Atleta | Atletismo, Acrobacia | Treinamento Veículos | Ídolo do Esporte |
| Celebridade | Atuação, Persuasão | Instrumento musical | Rosto Conhecido |
| Cientista | Ciências, Investigação | Kit de laboratório | Acesso a Laboratório |
| Criminoso Regenerado | Enganação, Furtividade | Kit de invasão | Contatos no Submundo |
| Detetive Particular | Investigação, Percepção | Kit de falsificação | Rede de Informantes |
| Estudante | História, Ciências | Um idioma | Biblioteca e Campus |
| Fiel | Religião, Intuição | Um idioma | Abrigo da Comunidade |
| Hacker | Tecnologia, Investigação | Kit de eletrônica | Porta dos Fundos |
| Herdeiro | História, Persuasão | Treinamento Veículos | Fortuna da Família |
| Jornalista | Investigação, Persuasão | Kit de falsificação | Credencial de Imprensa |
| Médico | Medicina, Intuição | Kit de primeiros socorros | Juramento Médico |
| Militar | Atletismo, Intimidação | Treinamento Veículos | Patente |
| Policial | Intuição, Percepção | Kit de investigação forense | Distintivo |
| Sobrevivente das Ruas | Furtividade, Sobrevivência | Kit de disfarce | Conhece a Cidade |
| Trabalhador | Atletismo, Tecnologia | Kit de ofício | Mãos à Obra |

### Características dos Antecedentes

:::grid
- **Credencial ({ch 1}).** O herói ainda tem um contato dentro da agência. Consegue uma informação classificada ou acesso a um local restrito, desde que não comprometa o contato.
- **Ídolo do Esporte.** Fãs o reconhecem e ajudam: hospedagem, carona, um favor pequeno. Academias e clubes abrem as portas.
- **Rosto Conhecido.** Consegue reuniões com gente importante e espaço na mídia. Esconder-se em público é mais difícil.
- **Acesso a Laboratório.** Tem acesso a uma universidade, empresa ou instituto com equipamento e colegas que analisam amostras e dados em 1d4 dias.
- **Contatos no Submundo.** Sabe onde vender, comprar e ouvir boatos. Encontra um receptador, informante ou fornecedor ilegal em qualquer cidade grande.
- **Rede de Informantes.** Em cada bairro que conhece, tem alguém que vê e ouve tudo. Descobre onde alguém mora ou trabalha em 1 dia.
- **Biblioteca e Campus.** Encontra quem saiba sobre quase qualquer assunto acadêmico, ou sabe onde procurar a resposta.
- **Abrigo da Comunidade.** A comunidade de fé dá abrigo, comida e cuidado ao herói e aos aliados, e guarda segredos.
- **Porta dos Fundos.** Com 1 hora e uma conexão, entra em sistemas comuns (câmeras, cadastros, redes de empresas pequenas). Sistemas protegidos exigem testes com kit de eletrônica.
- **Fortuna da Família.** Recebe +200 cr na criação e mantém um estilo de vida confortável sem custo. Portas da alta sociedade se abrem, e ela cobra o seu preço.
- **Credencial de Imprensa.** Entra em entrevistas coletivas e cenas isoladas como jornalista. Pessoas comuns falam com ele com mais facilidade.
- **Juramento Médico.** Hospitais e clínicas o atendem como colega. Consegue remédios, leitos e prontuários com facilidade.
- **Patente.** Militares em serviço reconhecem a patente dele. Consegue apoio logístico simples e acesso a instalações militares.
- **Distintivo.** Ainda tem amigos na polícia: acessa boletins de ocorrência, cenas de crime e fichas criminais, desde que não pise em calos.
- **Conhece a Cidade.** Encontra comida, abrigo e esconderijos sem custo, e se move pela cidade com o dobro da velocidade de quem não conhece os atalhos.
- **Mãos à Obra.** Trabalhadores do mesmo ofício o ajudam com ferramentas, transporte e abrigo simples. Consegue consertar e improvisar sem oficina.
:::

## Talentos

Talentos são treinos e dons especiais. O herói ganha um talento quando uma regra diz (como algumas Linhagens) e pode escolher um talento no lugar de uma Evolução do Arquétipo. Cada talento só pode ser escolhido uma vez, salvo indicação. Alguns têm pré-requisito. Talentos marcados com um custo (por exemplo, {ch 1}) são Características de Carga Heroica ([Capítulo 1](#/regras/cargas-heroicas)): para usá-los, o herói gasta esse número de Cargas Heroicas, sem Teste de Sobrecarga.

:::grid
- **Agarrador Nato.** Vantagem em ataques contra uma criatura que o herói esteja agarrando. Pode usar uma Ação Rápida para tentar agarrar ou empurrar.
- **Alerta.** +5 na Iniciativa. Não pode ser surpreendido enquanto estiver consciente. Criaturas escondidas não ganham Vantagem em ataques contra ele.
- **Aprendiz de Poderes.** Aprende duas Técnicas e um poder de Nível de Poder 1 à escolha. Escolhe o Parâmetro de poder (Lógica, Espírito ou Magnetismo). Pode ativar esse poder à vontade (Sobrecarga normal).
- **Armadura Treinada.** Ganha o Treinamento Blindagem Leve ou, se já o tiver, Blindagem Pesada. +1 em Potência ou Reflexos.
- **Atirador de Elite.** Ataques à distância com armas ignoram meia cobertura e três quartos de cobertura, e atacar no alcance longo não dá Desvantagem. Antes de atacar com uma arma à distância cujo Treinamento tenha, pode aceitar −5 no ataque para causar +10 de dano.
- **Brigão de Rua.** +1 em Potência ou Resistência. Golpes desarmados causam 1d4 + Potência. Usa armas improvisadas como se tivesse o Treinamento delas. Ao acertar um golpe desarmado ou com arma improvisada, pode usar a Ação Rápida para tentar agarrar o alvo.
- **Combatente Montado.** Vantagem em Jogadas de Ataque Corpo a Corpo contra criaturas a pé menores que a montaria. Pode fazer com que ataques contra a montaria mirem o herói. A montaria não sofre dano quando passa num Teste de Integridade (Reflexos) que reduziria o dano à metade.
- **Conjurador de Guerra.** *Pré-requisito: usar poderes.* Vantagem em testes de Concentração. Pode ativar poderes mesmo com as mãos ocupadas. Quando puder fazer um Contra-ataque, pode ativar um poder de 1 Ação que mire só a criatura, em vez de atacar.
- **Defensor.** +1 na CA quando estiver usando um escudo. Com a Reação, dá Desvantagem a um ataque contra um aliado a até 1,5 m.
- **Duro de Matar.** O máximo de PV aumenta em 2 por nível (e em 2 a cada nível que ganhar). Ao recuperar PV com Matrizes de Vitalidade, o mínimo por dado é o dobro do modificador de Resistência (mínimo 2).
- **Especialista em Perícias.** +1 em um Parâmetro. Proficiência em três perícias ou ferramentas. Escolhe uma perícia em que é proficiente e dobra o Bônus de Proficiência nela.
- **Esquiva Ágil.** +1 em Reflexos. Quando uma Jogada de Ataque Corpo a Corpo erra o herói, ele pode se mover 1,5 m sem provocar Contra-ataques, como Reação.
- **Investigador.** +1 em Lógica ou Espírito. +5 na Percepção passiva e na Investigação passiva. Lê lábios de quem entenda a mesma língua.
- **Líder Nato ({ch 1}).** *Pré-requisito: Magnetismo 13.* Com 10 minutos de discurso, até seis aliados (inclusive o herói) ganham PV temporários iguais ao nível do herói + modificador de Magnetismo.
- **Mestre em Armas.** +1 em Potência ou Reflexos. Ganha um Treinamento de armas à escolha (Combate Corpo a Corpo, Armas de Fogo ou Armamento Pesado). Com uma arma de propriedade Pesada, ao fazer um acerto crítico ou reduzir uma criatura a 0 PV, pode fazer uma Jogada de Ataque Corpo a Corpo como Ação Rápida.
- **Mobilidade.** +3 m de Deslocamento. O Disparar ignora terreno difícil. Quem o herói atacar corpo a corpo não pode fazer Contra-ataques contra ele neste turno.
- **Observador de Poderes.** *Pré-requisito: usar poderes.* Com a Reação, identifica o poder que alguém a até 18 m está ativando. Vantagem em Testes de Integridade contra poderes que o herói conheça.
- **Poliglota.** +1 em Lógica. Aprende três idiomas. Pode criar códigos escritos que só quem ele ensina consegue ler.
- **Resiliente.** +1 num Parâmetro. Ganha proficiência em Integridade desse Parâmetro.
- **Sentinela.** Quando acerta um Contra-ataque, o Deslocamento do alvo cai a 0 até o fim do turno. Pode fazer Contra-ataques mesmo contra quem usou Recuar. Quando uma criatura a até 1,5 m ataca um aliado, o herói pode usar a Reação para atacá-la.
- **Sortudo ({ch 1}).** Escolha um efeito: rola um d20 extra num ataque, Teste de Parâmetro ou Teste de Integridade (antes de o resultado ser anunciado) e escolhe qual usar; ou força um atacante a rolar de novo.
- **Treino Atlético.** +1 em Potência ou Reflexos. Levantar-se custa só 1,5 m. Escalar não custa Deslocamento extra. Salta com só 1,5 m de corrida.
- **Velocista ({ch 1}).** +3 m de Deslocamento (sempre ativo). Pode usar Disparar como Ação Rápida; só isso custa a Carga Heroica.
- **Vigor ({ch 1}).** +1 em Resistência. Vantagem em Testes de Integridade contra Exaustão causada por esforço, fome e sede (sempre ativo). Ao fim de uma Pausa, reduz a Exaustão em 1 nível; só isso custa a Carga Heroica.
:::
`},Gl={id:`equipamento`,num:6,title:`Equipamento`,subtitle:`Créditos, armas, armaduras, ferramentas, veículos e itens especiais.`,md:String.raw`
## Créditos

A moeda do jogo é o **crédito (cr)**. Ele representa dinheiro, favores e recursos que o herói consegue mobilizar. Os preços deste capítulo são valores de referência; o Mestre ajusta conforme o cenário.

### Créditos iniciais

Não existe kit inicial fixo. Todo herói, de qualquer Arquétipo, começa com **300 cr** e compra o que quiser deste capítulo. O que sobrar fica guardado. Um herói só usa com eficiência armas e armaduras cujo Treinamento tenha.

**Começando em nível alto.** Para heróis criados acima do 1º nível, some 100 cr por nível acima do 1º (até o 4º), 500 cr por nível (5º a 10º) e 2.500 cr por nível (11º em diante). O Mestre pode trocar parte desse valor por itens especiais.

:::widget creditos
:::

**Vender.** Equipamento usado em bom estado é vendido pela metade do preço. Itens especiais dependem de encontrar comprador.

:::widget carrinho
:::

## Armaduras

Armaduras leves, armaduras médias e escudos exigem o Treinamento Blindagem Leve. Armaduras pesadas exigem Blindagem Pesada (que pede Blindagem Leve). A coluna Tipo mostra a categoria e, entre parênteses, o Treinamento.

Vestir uma armadura sem o Treinamento dá Desvantagem em Testes de Parâmetro, Testes de Integridade e ataques que usem Potência ou Reflexos, e impede ativar poderes. A CA com armadura substitui a CA sem armadura; um escudo soma ao valor.

{tabela loja}
| Armadura | Tipo | CA | Potência | Furtividade | Peso | Preço |
|---|---|---|---|---|---|---|
| Uniforme acolchoado | Leve (Blindagem Leve) | 11 + Ref | — | Desvantagem | 4 kg | 5 cr |
| Jaqueta de couro | Leve (Blindagem Leve) | 11 + Ref | — | — | 5 kg | 10 cr |
| Jaqueta reforçada | Leve (Blindagem Leve) | 12 + Ref | — | — | 6,5 kg | 45 cr |
| Gibão de couro grosso | Média (Blindagem Leve) | 12 + Ref (máx. 2) | — | — | 6 kg | 10 cr |
| Colete tático | Média (Blindagem Leve) | 13 + Ref (máx. 2) | — | — | 10 kg | 50 cr |
| Colete de escamas | Média (Blindagem Leve) | 14 + Ref (máx. 2) | — | Desvantagem | 22 kg | 50 cr |
| Colete balístico | Média (Blindagem Leve) | 14 + Ref (máx. 2) | — | — | 10 kg | 400 cr |
| Placas cerâmicas | Média (Blindagem Leve) | 15 + Ref (máx. 2) | — | Desvantagem | 20 kg | 750 cr |
| Equipamento antimotim | Pesada (Blindagem Pesada) | 14 | — | Desvantagem | 20 kg | 30 cr |
| Armadura de combate | Pesada (Blindagem Pesada) | 16 | 13 | Desvantagem | 27 kg | 75 cr |
| Exoarmadura segmentada | Pesada (Blindagem Pesada) | 17 | 15 | Desvantagem | 30 kg | 200 cr |
| Armadura de assalto | Pesada (Blindagem Pesada) | 18 | 15 | Desvantagem | 32 kg | 1.500 cr |
| Escudo | Escudo (Blindagem Leve) | +2 | — | — | 3 kg | 10 cr |
| Escudo balístico | Escudo (Blindagem Leve) | +2 | — | — | 6 kg | 75 cr |

- **Potência.** Sem o valor indicado, o Deslocamento cai 3 m.
- **Escudo balístico.** Além do +2, dá meia cobertura contra Jogadas de Ataque à Distância vindas da frente.
- **Vestir e tirar.** Leve: 1 minuto. Média: 5 minutos. Pesada: 10 minutos para vestir e 5 para tirar. Escudo: 1 Ação.

## Armas

### Propriedades

:::grid
- **Acuidade.** Usa Potência ou Reflexos (à escolha) para ataque e dano.
- **Alcance.** Ataca a até 3 m em vez de 1,5 m.
- **Arremesso.** Pode ser arremessada, usando o mesmo Parâmetro da Jogada de Ataque Corpo a Corpo.
- **Carregador (N).** Dispara N vezes antes de precisar recarregar. Recarregar custa uma Ação (ou a interação livre do turno, se o herói tiver o Treinamento da arma).
- **Dispersão.** Contra um alvo a até 3 m, o dano ganha um dado extra.
- **Duas mãos.** Exige as duas mãos para atacar.
- **Leve.** Pode ser usada no combate com duas armas.
- **Munição.** Precisa de munição; disparar gasta uma. Recuperar metade das flechas e virotes após o combate leva 1 minuto. Balas não são recuperadas.
- **Pesada.** Exige o Treinamento Armamento Pesado. Criaturas Pequenas ou menores têm Desvantagem com ela.
- **Rajada.** Com uma Ação, gasta 10 disparos para cobrir um cubo de 3 m: cada criatura nele faz um Teste de Integridade (Reflexos) (CD 15) ou sofre o dano normal da arma.
- **Recarga.** Só dispara uma vez por Ação, Ação Rápida ou Reação, independentemente de ataques extras.
- **Versátil.** Pode ser usada com uma ou duas mãos; o dado entre parênteses é o dano com duas mãos.
- **Distância (x/y).** Alcance normal e longo em metros. Além do normal, Desvantagem; além do longo, impossível.
:::

### Treinamentos de armas

Cada tabela abaixo corresponde a um Treinamento ([Capítulo 3](#/arquetipos/visao-geral/treinamentos)):

| Treinamento | Cobre |
|---|---|
| **Combate Corpo a Corpo** | todas as armas corpo a corpo sem a propriedade Pesada, inclusive as de arremesso |
| **Armas de Fogo** | todas as armas à distância sem a propriedade Pesada: pistolas, revólveres, submetralhadoras, escopetas, fuzis, arcos curtos, bestas leves, fundas, zarabatanas, armas de choque |
| **Armamento Pesado** | qualquer arma com a propriedade Pesada, corpo a corpo ou à distância |

### Combate Corpo a Corpo

{tabela loja}
| Arma | Dano | Propriedades | Peso | Preço |
|---|---|---|---|---|
| Adaga | 1d4 de Dano Perfurante | Acuidade, leve, arremesso (6/18) | 0,5 kg | 2 cr |
| Azagaia | 1d6 de Dano Perfurante | Arremesso (9/36) | 1 kg | 1 cr |
| Bordão (bastão) | 1d6 de Dano de Concussão | Versátil (1d8) | 2 kg | 1 cr |
| Clava | 1d4 de Dano de Concussão | Leve | 1 kg | 1 cr |
| Foice curta | 1d4 de Dano Cortante | Leve | 1 kg | 1 cr |
| Lança | 1d6 de Dano Perfurante | Arremesso (6/18), versátil (1d8) | 1,5 kg | 1 cr |
| Maça | 1d6 de Dano de Concussão | — | 2 kg | 5 cr |
| Machadinha | 1d6 de Dano Cortante | Leve, arremesso (6/18) | 1 kg | 5 cr |
| Martelo leve | 1d4 de Dano de Concussão | Leve, arremesso (6/18) | 1 kg | 2 cr |
| Porrete pesado | 1d8 de Dano de Concussão | Duas mãos | 5 kg | 1 cr |
| Dardo | 1d4 de Dano Perfurante | Acuidade, arremesso (6/18) | 0,1 kg | 1 cr |
| Chicote | 1d4 de Dano Cortante | Acuidade, alcance | 1,5 kg | 2 cr |
| Cimitarra | 1d6 de Dano Cortante | Acuidade, leve | 1,5 kg | 25 cr |
| Espada curta | 1d6 de Dano Perfurante | Acuidade, leve | 1 kg | 10 cr |
| Espada longa | 1d8 de Dano Cortante | Versátil (1d10) | 1,5 kg | 15 cr |
| Lança de montaria | 1d12 de Dano Perfurante | Alcance; Desvantagem contra alvos a até 1,5 m; exige duas mãos fora de montaria | 3 kg | 10 cr |
| Maça-estrela | 1d8 de Dano Perfurante | — | 2 kg | 15 cr |
| Machado de batalha | 1d8 de Dano Cortante | Versátil (1d10) | 2 kg | 10 cr |
| Mangual | 1d8 de Dano de Concussão | — | 1 kg | 10 cr |
| Martelo de guerra | 1d8 de Dano de Concussão | Versátil (1d10) | 1 kg | 15 cr |
| Picareta de guerra | 1d8 de Dano Perfurante | — | 1 kg | 5 cr |
| Rapieira | 1d8 de Dano Perfurante | Acuidade | 1 kg | 25 cr |
| Tridente | 1d6 de Dano Perfurante | Arremesso (6/18), versátil (1d8) | 2 kg | 5 cr |
| Rede | — | Arremesso (1,5/4,5). Uma criatura Grande ou menor atingida fica impedida até se soltar (Teste de Parâmetro (Potência), CD 10, ou 5 de Dano Cortante na rede, CA 10) | 1,5 kg | 1 cr |

### Armas de Fogo

{tabela loja}
| Arma | Dano | Propriedades | Peso | Preço |
|---|---|---|---|---|
| Funda | 1d4 de Dano de Concussão | Munição (9/36) | — | 1 cr |
| Arco curto | 1d6 de Dano Perfurante | Munição (24/96), duas mãos | 1 kg | 25 cr |
| Lançador leve (besta leve) | 1d8 de Dano Perfurante | Munição (24/96), recarga, duas mãos | 2,5 kg | 25 cr |
| Pistola leve (besta de mão) | 1d6 de Dano Perfurante | Munição (9/36), leve, recarga | 1,5 kg | 75 cr |
| Zarabatana | 1 perfurante | Munição (7,5/30), recarga | 0,5 kg | 10 cr |
| Pistola | 1d8 de Dano Perfurante | Munição (15/45), carregador (12) | 1 kg | 150 cr |
| Revólver pesado | 2d4 de Dano Perfurante | Munição (15/45), carregador (6) | 1,5 kg | 250 cr |
| Submetralhadora | 1d8 de Dano Perfurante | Munição (24/72), carregador (30), rajada | 2 kg | 400 cr |
| Escopeta | 2d6 de Dano Perfurante | Munição (9/27), carregador (6), dispersão, duas mãos | 3,5 kg | 300 cr |
| Fuzil de assalto | 1d10 de Dano Perfurante | Munição (30/90), carregador (30), rajada, duas mãos | 4 kg | 500 cr |
| Arma de choque | 1d4 de Dano Elétrico | Munição (4,5/9), carregador (2). Um alvo atingido faz um Teste de Integridade (Resistência) (CD 12) ou não pode fazer Reações até o próximo turno dele | 0,5 kg | 50 cr |

### Armamento Pesado

{tabela loja}
| Arma | Dano | Propriedades | Peso | Preço |
|---|---|---|---|---|
| Alabarda | 1d10 de Dano Cortante | Pesada, alcance, duas mãos | 3 kg | 20 cr |
| Espada grande | 2d6 de Dano Cortante | Pesada, duas mãos | 3 kg | 50 cr |
| Glaive | 1d10 de Dano Cortante | Pesada, alcance, duas mãos | 3 kg | 20 cr |
| Machado grande | 1d12 de Dano Cortante | Pesada, duas mãos | 3,5 kg | 30 cr |
| Malho | 2d6 de Dano de Concussão | Pesada, duas mãos | 5 kg | 10 cr |
| Arco longo | 1d8 de Dano Perfurante | Munição (45/180), pesada, duas mãos | 1 kg | 50 cr |
| Besta pesada | 1d10 de Dano Perfurante | Munição (30/120), pesada, recarga, duas mãos | 9 kg | 50 cr |
| Rifle de precisão | 2d8 de Dano Perfurante | Munição (60/240), carregador (5), pesada, recarga, duas mãos | 6 kg | 800 cr |

**Munição.** 20 flechas ou 20 virotes: 1 cr. 20 balas de funda: 1 cr. 10 dardos de zarabatana: 1 cr. 30 balas de pistola, revólver ou submetralhadora: 5 cr. 30 balas de fuzil ou 10 de rifle de precisão: 10 cr. 12 cartuchos de escopeta: 5 cr. Carga de arma de choque: 5 cr.

**Armas improvisadas.** Uma cadeira, uma garrafa, um cano: 1d4 do tipo que fizer sentido. Se lembrar uma arma da tabela, use as estatísticas dela.

## Ferramentas

Proficiência numa ferramenta soma o Bônus de Proficiência aos testes feitos com ela.

{tabela loja}
| Ferramenta | Uso | Peso | Preço |
|---|---|---|---|
| Instrumento musical | Tocar, compor, entreter | 1–5 kg | 30 cr |
| Kit de disfarce | Maquiagem, perucas, próteses e roupas para mudar a aparência | 1,5 kg | 25 cr |
| Kit de eletrônica | Consertar, montar e invadir aparelhos, câmeras e redes | 2 kg | 50 cr |
| Kit de fabricação | Construir e modificar armas, armaduras e dispositivos | 7 kg | 50 cr |
| Kit de falsificação | Documentos, crachás e assinaturas falsos | 2,5 kg | 15 cr |
| Kit de herbalismo | Identificar plantas, preparar remédios naturais e antídotos | 1,5 kg | 5 cr |
| Kit de investigação forense | Coletar e analisar digitais, fibras, sangue e balística | 2 kg | 40 cr |
| Kit de invasão | Abrir fechaduras, desativar alarmes e armadilhas | 0,5 kg | 25 cr |
| Kit de laboratório | Química, soros, explosivos simples e análises | 4 kg | 50 cr |
| Kit de montagem | Montar e desmontar estruturas, drones e veículos leves | 5 kg | 30 cr |
| Kit de ofício | Uma profissão manual: mecânica, ferraria, carpintaria, alvenaria e outras | 3–8 kg | 20 cr |
| Kit de primeiros socorros | 10 usos. Com uma Ação e um uso, estabiliza uma criatura com 0 PV sem teste | 1,5 kg | 5 cr |
| Kit de venenos | Preparar, identificar e aplicar venenos com segurança | 1 kg | 50 cr |

**Veículos.** Pilotar veículos terrestres, aquáticos e aéreos e fazer manobras arriscadas com eles não é uma ferramenta: exige o Treinamento Veículos ([Capítulo 3](#/arquetipos/visao-geral/treinamentos)).

## Equipamento geral

{tabela loja}
| Item | Preço |
|---|---|
| Algemas (CD 20 para escapar) | 2 cr |
| Binóculos | 20 cr |
| Celular | 50 cr |
| Corda de náilon (15 m) | 1 cr |
| Fones comunicadores (rádio, 3 km) | 40 cr |
| Ganchos e lançador de corda (30 m) | 50 cr |
| Kit de acampamento | 10 cr |
| Kit de exploração (mochila, corda, lanterna, rações para 5 dias, cantil) | 20 cr |
| Kit de escalada (Vantagem em Atletismo para escalar) | 25 cr |
| Foco de Poder (luvas, amuleto, bastão, dispositivo) | 10 cr |
| Granada de luz (Teste de Integridade (Resistência), CD 13, ou cego até o próximo turno, a até 3 m) | 30 cr |
| Lanterna tática (luz plena 9 m) | 5 cr |
| Máscara de gás (Vantagem contra gases) | 25 cr |
| Mochila | 2 cr |
| Notebook | 300 cr |
| Óculos de visão noturna (Visão Noturna 18 m) | 500 cr |
| Pé de cabra (Vantagem para forçar) | 2 cr |
| Ração para um dia | 1 cr |
| Roupas comuns | 2 cr |
| Uniforme heroico personalizado | 50 cr |
| Granada de fumaça (névoa de 6 m por 1 minuto) | 20 cr |
| Granada de fragmentação (esfera de 6 m, Teste de Integridade (Reflexos), CD 13, 3d6 de Dano Perfurante, metade no sucesso) | 100 cr |

## Veículos

| Veículo | CA | PV | Deslocamento | Passageiros | Preço |
|---|---|---|---|---|---|
| Moto | 14 | 30 | 30 m (até 160 km/h) | 1 + 1 | 2.000 cr |
| Carro | 13 | 50 | 30 m (até 180 km/h) | 1 + 4 | 8.000 cr |
| Van blindada | 15 | 90 | 24 m (até 140 km/h) | 2 + 8 | 40.000 cr |
| Lancha | 12 | 60 | 24 m (até 80 km/h) | 1 + 6 | 25.000 cr |
| Helicóptero | 13 | 80 | Voo 60 m (até 250 km/h) | 2 + 6 | 600.000 cr |

Em combate, um veículo age na iniciativa do piloto. Manobras arriscadas pedem Teste de Parâmetro (Reflexos); quem tem o Treinamento Veículos soma o Bônus de Proficiência. Um veículo a 0 PV para de funcionar; batidas causam 1d6 de Dano de Concussão a cada 15 km/h a quem estiver dentro (Teste de Integridade (Reflexos), CD 15, para metade).

## Estilo de vida e serviços

| Estilo de vida (por mês) | Preço |
|---|---|
| Precário | 6 cr |
| Modesto | 30 cr |
| Confortável | 60 cr |
| Rico | 120 cr |
| Luxuoso | 300 cr ou mais |

| Serviço | Preço |
|---|---|
| Táxi ou aplicativo (por trajeto) | 1 cr |
| Passagem aérea nacional | 50 cr |
| Passagem aérea internacional | 200 cr |
| Advogado (por dia) | 50 cr |
| Informante (por informação) | 10 a 100 cr |

## Itens especiais

Itens especiais têm propriedades extraordinárias: tecnologia de ponta, artefatos místicos, protótipos alienígenas. O herói os encontra em missões, recebe como recompensa ou os fabrica (como o Engenheiro Tecnológico).

- **Raridade e preço.** Comum: 50 a 100 cr. Incomum: 101 a 500 cr. Raro: 501 a 5.000 cr. Muito raro: 5.001 a 50.000 cr. Lendário: acima de 50.000 cr.
- **Vínculo.** Alguns itens exigem Vínculo para funcionar. Criar um Vínculo leva uma Pausa em contato com o item. Um herói mantém no máximo três Vínculos; romper um é uma decisão livre, ou acontece se o item ficar 24 horas a mais de 30 m dele.
- **Usos.** Itens com usos recuperam os usos indicados a cada amanhecer, salvo indicação. Itens consumíveis, como soros e granadas, acabam ao ser usados.

### Soros de cura

{tabela loja}
| Soro | Raridade | Cura | Preço |
|---|---|---|---|
| Soro de Cura | Comum | 2d4 + 2 PV | 50 cr |
| Soro de Cura maior | Incomum | 4d4 + 4 PV | 150 cr |
| Soro de Cura superior | Raro | 8d4 + 8 PV | 500 cr |
| Soro de Cura supremo | Muito raro | 10d4 + 20 PV | 1.350 cr |

Beber ou aplicar um soro custa uma Ação (ou uma Ação Rápida, para quem bebe o próprio).

### Itens Replicáveis

O Engenheiro Tecnológico pode fabricar estes itens com o Aprimoramento Replicar Item Especial, a partir do nível indicado. Outros heróis os encontram ou compram.

{tabela filtro}
| Item | Nível do Engenheiro | Vínculo | Efeito |
|---|---|---|---|
| Bolsa Dimensional | 2º | Não | Guarda até 250 kg (2 m³) num espaço extradimensional; pesa sempre 7 kg |
| Comunicador Tradutor | 2º | Não | Traduz em tempo real qualquer idioma falado ouvido pelo portador |
| Corda Inteligente | 2º | Não | 18 m; com uma Ação, amarra, desamarra ou se prende a um ponto a até 18 m |
| Garrafa Infinita | 2º | Não | Produz até 8 litros por dia de água, café, óleo ou outro líquido comum |
| Lanterna Reveladora | 2º | Não | Ilumina 9 m e torna visíveis criaturas e objetos invisíveis dentro do feixe |
| Óculos Noturnos | 2º | Não | Visão Noturna de 18 m |
| Escudo Refletor | 2º | Sim | +1 na CA além do bônus do escudo |
| Bracelete Defensor | 6º | Sim | +2 na CA para quem não usa armadura nem escudo |
| Botas Saltadoras | 6º | Sim | Salto triplicado e +3 m de Deslocamento |
| Capa Camaleônica | 6º | Sim | Vantagem em Furtividade; quem procura o portador tem Desvantagem em Percepção pela visão |
| Luvas Aderentes | 6º | Sim | Deslocamento de escalada igual ao Deslocamento |
| Máscara Respiratória | 6º | Não | Respira debaixo d'água e no vácuo; imune a gases inalados |
| Botas Aceleradoras | 10º | Sim | Com uma Ação Rápida, dobra o Deslocamento e Contra-ataques contra o portador têm Desvantagem, até 10 minutos por dia |
| Capacete Telepático | 10º | Sim | Ativa Ler Pensamentos (CD 13) à vontade, sem Teste de Sobrecarga |
| Cinto de Potência | 10º | Sim | Potência passa a 19 enquanto usado, se já não for maior |
| Anel de Amortecer Queda | 10º | Sim | O portador cai devagar (18 m por rodada) e não sofre dano de queda |
| Asas Mecânicas | 14º | Sim | Deslocamento de voo de 18 m, 1 hora por dia |
| Manto de Deslocamento | 14º | Sim | Ataques contra o portador têm Desvantagem, até ele sofrer dano; volta no início do próximo turno |
| Anel de Resistência | 14º | Sim | Resistência a um tipo de dano escolhido ao fabricar |
| Cinto de Potência Superior | 14º | Sim | Potência passa a 21 enquanto usado, se já não for maior |

### Outros itens especiais

| Item | Raridade | Vínculo | Efeito |
|---|---|---|---|
| Arma Aprimorada +1, +2 ou +3 | Incomum, raro, muito raro | Não | Bônus no ataque e no dano |
| Armadura Aprimorada +1, +2 ou +3 | Raro, muito raro, lendário | Não | Bônus na CA |
| Anel de Sobrecarga | Raro | Sim | Veja [Aprimoramentos do Engenheiro](#/arquetipos/engenheiro-tecnologico/aprimoramentos) (Capítulo 3) |
| Amuleto de Proteção | Raro | Sim | +1 na CA e em todos os Testes de Integridade |
| Bastão Amplificador +1, +2 ou +3 | Incomum, raro, muito raro | Sim | Bônus em Jogadas de Ataque de Poder e na CD de Poder |
| Traje de Voo | Muito raro | Sim | Deslocamento de voo de 18 m |
| Manto Escudo | Lendário | Sim | Resistência a Dano de ataques com armas e +2 em Testes de Integridade |
`},Kl=[{alc:`18 m`,cat:`Entropia`,dano:`1d8 de Dano Necrótico`,dur:`Instantâneo`,e:`Uma criatura que o herói vê faz Teste de Integridade (Espírito) ou sofre 1d8 de Dano Necrótico (1d12 se já tiver perdido PV). Cresce.`,lv:0,n:`Eco da Morte`,t:[],tempo:`Ação`,teste:`Espírito`},{alc:`Toque`,cat:`Transformação`,dur:`1 minuto`,e:`Um bastão ou clava que o herói segura passa a usar o Parâmetro de poder em ataque e dano, causa 1d8 e conta como especial. Termina se o herói soltá-lo ou ativar o poder de novo.`,lv:0,n:`Bastão Carregado`,t:[],tempo:`Ação Rápida`},{alc:`Pessoal`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dano:`1d8 de Dano de Fogo`,dur:`10 minutos`,e:`Uma chama na mão emite luz plena de 3 m e penumbra por mais 3 m, sem queimar. Ao ativar, ou depois com uma Ação, pode arremessá-la: Jogada de Ataque de Poder contra alvo a até 9 m, 1d8 de Dano de Fogo; o poder termina. Cresce.`,lv:0,n:`Punho em Chamas`,t:[],tempo:`Ação`},{alc:`18 m`,cat:`Energia`,dano:`1d8 de Dano Radiante`,dur:`Instantâneo`,e:`Uma criatura que o herói vê faz Teste de Integridade (Reflexos) ou sofre 1d8 de Dano Radiante. A cobertura não ajuda nesse teste. Cresce.`,lv:0,n:`Feixe Solar`,t:[],tempo:`Ação`,teste:`Reflexos`},{alc:`9 m`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Transformação`,dano:`1d6 de Dano Perfurante`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder Corpo a Corpo com alcance de 9 m: 1d6 de Dano Perfurante, e um alvo Grande ou menor é puxado até 3 m na direção do herói. Cresce.`,lv:0,n:`Chicote de Vinhas`,t:[],tempo:`Ação`},{alc:`18 m`,cat:`Energia`,dano:`1d6 de Dano de Frio`,dur:`Instantâneo`,e:`Uma criatura faz Teste de Integridade (Resistência) ou sofre 1d6 de Dano de Frio e tem Desvantagem no próximo ataque com arma até o fim do próximo turno dela. Cresce.`,lv:0,n:`Toque Criogênico`,t:[],tempo:`Ação`,teste:`Resistência`},{alc:`18 m`,area:`Cubo de 1,5 m`,cat:`Transformação`,dur:`Instantâneo ou 1 hora`,e:`Afeta fogo comum num cubo de 1,5 m. Escolha um efeito:

- Expande o fogo 1,5 m numa direção.
- Apaga o fogo.
- Dobra ou reduz à metade a luz e muda a cor (1 hora).
- Cria formas simples nas chamas (1 hora).
- Até três efeitos de 1 hora ao mesmo tempo.`,lv:0,n:`Domínio do Fogo`,t:[`Θ`],tempo:`Ação`},{alc:`36 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dano:`1d10 de Dano de Fogo`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder à Distância: 1d10 de Dano de Fogo. Um objeto inflamável que ninguém segura pega fogo. Cresce.`,lv:0,n:`Rajada de Plasma`,t:[],tempo:`Ação`},{alc:`Toque`,cat:`Entropia`,dur:`Instantâneo`,e:`Uma criatura viva com 0 PV fica estável. Não funciona em mortos-vivos nem constructos.`,lv:0,n:`Pulso Vital`,t:[],tempo:`Ação`},{alc:`18 m`,cat:`Mente`,dano:`1d6 de Dano de Psíquico`,dur:`1 rodada`,e:`Uma criatura faz Teste de Integridade (Lógica) ou sofre 1d6 de Dano de Psíquico e subtrai 1d4 do próximo Teste de Integridade que fizer até o fim do próximo turno do herói. Cresce.`,lv:0,n:`Farpa Psíquica`,t:[`Ψ`],tempo:`Ação`,teste:`Lógica`},{alc:`Pessoal (1,5 m)`,cat:`Energia`,dano:`1d6 de Dano de Trovão`,dur:`Instantâneo`,e:`Cada criatura a até 1,5 m, exceto o herói, faz Teste de Integridade (Resistência) ou sofre 1d6 de Dano de Trovão. O som é ouvido a 30 m. Cresce.`,lv:0,n:`Estampido Sônico`,t:[],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal (1,5 m)`,cat:`Criação`,dano:`1d6 de Dano de Energia`,dur:`Instantâneo`,e:`Cada criatura a até 1,5 m, exceto o herói, faz Teste de Integridade (Reflexos) ou sofre 1d6 de Dano de Energia. Cresce.`,lv:0,n:`Rodopio Cortante`,t:[],tempo:`Ação`,teste:`Reflexos`},{alc:`9 m`,cat:`Entropia`,dano:`1d4 de Dano Necrótico`,dur:`Instantâneo`,e:`Uma criatura faz Teste de Integridade (Resistência) ou sofre 1d4 de Dano Necrótico e fica caída. Cresce.`,lv:0,n:`Ferrão Entrópico`,t:[],tempo:`Ação`,teste:`Resistência`},{alc:`18 m`,area:`Quadrado de 1,5 m`,cat:`Criação`,dur:`1 minuto`,e:`Fogo num quadrado de 1,5 m. Quem estiver nele ao surgir, ou entrar ou terminar o turno nele, faz Teste de Integridade (Reflexos) ou sofre 1d8 de Dano de Fogo. Incendeia objetos inflamáveis. Cresce.`,lv:0,n:`Foco de Incêndio`,sigma:`1d8 de Dano de Fogo`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`Pessoal`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Transformação`,dano:`1d10 de Dano de Ácido`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder Corpo a Corpo contra criatura a até 1,5 m: 1d10 de Dano de Ácido. Cresce.`,lv:0,n:`Garras Corrosivas`,t:[],tempo:`Ação`},{alc:`9 m`,cat:`Percepção`,dur:`1 rodada`,e:`O herói estuda um alvo. No próximo turno, tem Vantagem no primeiro ataque contra ele, se o poder ainda estiver ativo.`,lv:0,n:`Análise de Combate`,t:[`Κ`],tempo:`Ação`},{alc:`Pessoal`,cat:`Proteção`,dur:`1 rodada`,e:`Até o fim do próximo turno, Resistência a Dano de Concussão, perfurante e cortante causado por ataques com arma.`,lv:0,n:`Postura Blindada`,t:[],tempo:`Ação`},{alc:`9 m`,area:`Cubo de 1,5 m`,cat:`Ilusão`,dur:`1 minuto`,e:`Cria um som (de sussurro a grito) ou a imagem de um objeto que cabe num cubo de 1,5 m. Tocar a imagem revela a ilusão; um Teste de Lógica (Investigação) contra a CD de Poder também.`,lv:0,n:`Holograma Menor`,t:[`Θ`],tempo:`Ação`},{alc:`9 m`,cat:`Criação`,dano:`1d6 de Dano de Veneno`,dur:`Instantâneo`,e:`Uma criatura faz Teste de Integridade (Resistência) ou sofre 1d6 de Dano de Veneno e se move 1,5 m numa direção aleatória (1d4), sem provocar Contra-ataques. Cresce.`,lv:0,n:`Enxame Nanítico`,t:[],tempo:`Ação`,teste:`Resistência`},{alc:`18 m`,cat:`Mente`,dano:`1d4 de Dano de Psíquico`,dur:`Instantâneo`,e:`Uma criatura que ouça o herói faz Teste de Integridade (Espírito) ou sofre 1d4 de Dano de Psíquico e tem Desvantagem no próximo ataque até o fim do próximo turno dela. Cresce.`,lv:0,n:`Provocação Psíquica`,t:[`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`3 m`,cat:`Criação`,dano:`1d12 de Dano de Veneno`,dur:`Instantâneo`,e:`Uma criatura faz Teste de Integridade (Resistência) ou sofre 1d12 de Dano de Veneno. Cresce.`,lv:0,n:`Spray Tóxico`,t:[],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal (4,5 m)`,cat:`Energia`,dano:`1d8 de Dano Elétrico`,dur:`Instantâneo`,e:`Uma criatura a até 4,5 m faz Teste de Integridade (Potência) ou é puxada até 3 m em linha reta na direção do herói; se terminar a até 1,5 m dele, sofre 1d8 de Dano Elétrico. Cresce.`,lv:0,n:`Arpão Elétrico`,t:[],tempo:`Ação`,teste:`Potência`},{alc:`Pessoal (1,5 m)`,cat:`Energia`,dano:`1d8 de Dano de Fogo`,dur:`Instantâneo`,e:`Jogada de Ataque Corpo a Corpo com arma contra criatura a até 1,5 m. Se acertar, chamas saltam para outra criatura a até 1,5 m do alvo, que sofre fogo igual ao Parâmetro de poder. No 5º nível: +1d8 de Dano de Fogo no alvo e 1d8 + Parâmetro no segundo; 2d8 no 11º e 3d8 no 17º.`,lv:0,n:`Lâmina de Plasma`,t:[],tempo:`Ação`},{alc:`Pessoal (1,5 m)`,cat:`Energia`,dano:`1d8 de Dano de Trovão`,dur:`1 rodada`,e:`Jogada de Ataque Corpo a Corpo com arma contra criatura a até 1,5 m. Se acertar, até o início do próximo turno do herói, o alvo sofre 1d8 de Dano de Trovão se se mover por vontade própria 1,5 m ou mais. No 5º nível: +1d8 de Dano de Trovão no acerto e 2d8 ao se mover; 2d8/3d8 no 11º; 3d8/4d8 no 17º.`,lv:0,n:`Lâmina Sônica`,t:[],tempo:`Ação`},{alc:`9 m`,cat:`Transformação`,dur:`Instantâneo`,e:`Escolha um efeito:

- Uma criatura Média ou menor faz Teste de Integridade (Potência) ou é empurrada 1,5 m.
- Um objeto de até 2,5 kg que ninguém segura é empurrado até 3 m.
- Um efeito sensorial inofensivo com o ar.`,lv:0,n:`Rajada de Ar`,t:[],tempo:`Ação`,teste:`Potência`},{alc:`Toque`,cat:`Energia`,dur:`1 hora`,e:`Um objeto de até 3 m emite luz plena de 6 m e penumbra por mais 6 m. Cobri-lo com algo opaco bloqueia a luz. Um objeto segurado por um inimigo permite Teste de Integridade (Reflexos) para evitar.`,lv:0,n:`Lumen`,t:[],tempo:`Ação`,teste:`Reflexos`},{alc:`36 m`,cat:`Energia`,dur:`1 minuto`,e:`Até quatro luzes (ou uma forma humanoide brilhante) com penumbra de 3 m. Com uma Ação Rápida, movem-se até 18 m; ficam a até 6 m umas das outras e somem a mais de 36 m do herói.`,lv:0,n:`Drones de Luz`,t:[`Κ`],tempo:`Ação`},{alc:`36 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Entropia`,dano:`1d8 de Dano Necrótico`,dur:`1 rodada`,e:`Jogada de Ataque de Poder à Distância: 1d8 de Dano Necrótico. Até o início do próximo turno do herói, o alvo não Recupera PV; se for morto-vivo, também tem Desvantagem em ataques contra o herói. Cresce.`,lv:0,n:`Toque Necrótico`,t:[],tempo:`Ação`},{alc:`9 m`,cat:`Criação`,dur:`1 minuto`,e:`Uma mão flutuante manipula objetos, abre portas e recipientes e guarda ou pega itens de até 5 kg. Com uma Ação, move-se até 9 m. Não ataca nem ativa itens especiais. Some se ficar a mais de 9 m.`,lv:0,n:`Mão Cinética`,t:[],tempo:`Ação`},{alc:`36 m`,cat:`Transformação`,dur:`1 rodada`,e:`O herói sussurra uma mensagem que só o alvo ouve, e ele pode responder do mesmo modo. Contorna obstáculos, mas é bloqueada por 30 cm de pedra, 2,5 cm de metal ou 90 cm de madeira.`,lv:0,n:`Canal Privado`,t:[],tempo:`Ação`},{alc:`9 m`,area:`Cubo de 1,5 m`,cat:`Transformação`,dur:`Instantâneo ou 1 hora`,e:`Afeta água num cubo de 1,5 m. Escolha um efeito:

- Move a água até 1,5 m.
- Cria formas simples.
- Muda a cor ou a opacidade.
- Congela a água, se não houver criatura dentro (1 hora).
- Até dois efeitos de 1 hora ao mesmo tempo.`,lv:0,n:`Hidrocinese Menor`,t:[`Θ`],tempo:`Ação`},{alc:`9 m`,area:`Cubo de 1,5 m`,cat:`Transformação`,dur:`Instantâneo ou 1 hora`,e:`Afeta terra solta num cubo de 1,5 m. Escolha um efeito:

- Escava e move a terra até 1,5 m.
- Cria formas e cores (1 hora).
- Torna o terreno difícil ou normal (1 hora).
- Até dois efeitos de 1 hora ao mesmo tempo.`,lv:0,n:`Geocinese Menor`,t:[`Θ`],tempo:`Ação`},{alc:`Toque`,cat:`Percepção`,dur:`1 minuto`,e:`Uma vez antes do fim do poder, a criatura tocada soma 1d4 a um Teste de Parâmetro.`,lv:0,n:`Intuição Tática`,t:[`Κ`],tempo:`Ação`},{alc:`1,5 m`,cat:`Energia`,dano:`1d6 de Dano Radiante`,dur:`Instantâneo`,e:`Criaturas escolhidas a até 1,5 m fazem Teste de Integridade (Resistência) ou sofrem 1d6 de Dano Radiante. Cresce.`,lv:0,n:`Pulso Radiante`,t:[],tempo:`Ação`,teste:`Resistência`},{alc:`Toque`,atq:`Jogada de Ataque de Poder`,cat:`Transformação`,dano:`1d6 + Parâmetro de Dano de Concussão`,dur:`1 minuto`,e:`Até três pedras ou pequenos projéteis ficam energizados. Qualquer pessoa pode arremessá-los (alcance 18 m) usando a Jogada de Ataque de Poder do herói: 1d6 + Parâmetro de Dano de Concussão.`,lv:0,n:`Projéteis Carregados`,t:[],tempo:`Ação Rápida`},{alc:`9 m`,cat:`Transformação`,dur:`Até 1 minuto`,e:`Um pequeno prodígio, à escolha:

- Voz três vezes mais alta.
- Chamas que tremem ou mudam de cor.
- Tremores inofensivos.
- Um som instantâneo.
- Uma porta ou janela que bate.
- Olhos que mudam.
- Até três efeitos de 1 minuto ao mesmo tempo.`,lv:0,n:`Aura de Presença`,t:[],tempo:`Ação`},{alc:`18 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dano:`1d8 de Dano de Frio`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder à Distância: 1d8 de Dano de Frio, e o Deslocamento do alvo cai 3 m até o início do próximo turno do herói. Cresce.`,lv:0,n:`Raio Criogênico`,t:[],tempo:`Ação`},{alc:`36 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dano:`1d10 de Dano de Energia`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder à Distância: 1d10 de Dano de Energia. Em vez de mais dados, ganha raios extras: 2 no 5º nível, 3 no 11º e 4 no 17º, com ataques separados contra o mesmo alvo ou alvos diferentes.`,lv:0,n:`Rajada Dimensional`,t:[],tempo:`Ação`},{alc:`Toque`,cat:`Transformação`,dur:`Instantâneo`,e:`Conserta uma única quebra ou rasgo de até 30 cm num objeto. Não restaura propriedades perdidas de itens especiais.`,lv:0,n:`Reparo Rápido`,t:[],tempo:`1 minuto`},{alc:`Toque`,cat:`Proteção`,dur:`1 minuto`,e:`Uma vez antes do fim do poder, a criatura tocada soma 1d4 a um Teste de Integridade.`,lv:0,n:`Determinação`,t:[`Κ`],tempo:`Ação`},{alc:`18 m`,cat:`Criação`,dano:`1d6 de Dano de Ácido`,dur:`Instantâneo`,e:`Uma criatura, ou duas a até 1,5 m uma da outra, fazem Teste de Integridade (Reflexos) ou sofrem 1d6 de Dano de Ácido. Cresce.`,lv:0,n:`Jato Ácido`,t:[],tempo:`Ação`,teste:`Reflexos`},{alc:`Pessoal`,cat:`Mente`,dur:`1 minuto`,e:`Vantagem em Testes de Parâmetro (Magnetismo) contra uma criatura que não seja hostil. Quando o poder termina, ela percebe a influência e fica hostil.`,lv:0,n:`Charme`,t:[`Κ`,`Ψ`],tempo:`Ação`},{alc:`Toque`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Energia`,dano:`1d8 de Dano Elétrico`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder Corpo a Corpo, com Vantagem se o alvo usar armadura de metal: 1d8 de Dano Elétrico, e o alvo não faz Reações até o início do próximo turno dele. Cresce.`,lv:0,n:`Toque de Choque`,t:[],tempo:`Ação`},{alc:`3 m`,cat:`Transformação`,dur:`Até 1 hora`,e:`Pequenos efeitos, à escolha:

- Faíscas ou cheiros inofensivos.
- Acender ou apagar uma chama pequena.
- Limpar ou sujar um objeto pequeno.
- Esquentar ou esfriar algo (1 hora).
- Uma marca ou cor (1 hora).
- Um objeto ilusório que cabe na mão.
- Até três efeitos duradouros.`,lv:0,n:`Truque Cinético`,t:[],tempo:`Ação`},{alc:`9 m`,area:`Cubo de 1,5 m`,cat:`Transformação`,dur:`Instantâneo`,e:`Escolha um efeito:

- Prevê o clima das próximas 24 horas.
- Faz uma flor brotar.
- Cria um efeito sensorial natural num cubo de 1,5 m.
- Acende ou apaga uma chama pequena.`,lv:0,n:`Sintonia Natural`,t:[`Θ`],tempo:`Ação`},{alc:`Pessoal`,cat:`Proteção`,dur:`1 rodada`,e:`Reação ao sofrer Dano de Ácido, elétrico, fogo, frio ou trovão: resistência a esse tipo até o início do próximo turno, inclusive contra o golpe que disparou o poder. A primeira Jogada de Ataque Corpo a Corpo que o herói acertar no próximo turno causa +1d6 desse tipo.`,lv:1,n:`Absorção Elemental`,t:[],tempo:`Reação`,up:`+1d6 por Nível de Poder acima de 1.`},{alc:`9 m`,area:`Cubo de 6 m`,cat:`Proteção`,dur:`8 horas`,e:`Protege uma porta, janela ou área de até um cubo de 6 m. Quando uma criatura não autorizada toca ou entra nela, o herói recebe um aviso mental (que o acorda) ou um alarme audível a 18 m, à escolha ao ativar.`,lv:1,n:`Perímetro de Alerta`,t:[`Θ`,`Τ`],tempo:`1 minuto · Τ ritual`},{alc:`9 m`,cat:`Mente`,dur:`24 horas`,e:`Uma fera com Lógica 3 ou menos que veja o herói faz Teste de Integridade (Espírito) ou fica dominada por ele. Termina se o herói ou aliados a ferirem.`,lv:1,n:`Afinidade Animal`,t:[`Ν`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`+1 fera por Nível de Poder acima de 1.`,upN:1},{alc:`18 m`,area:`Esfera de 3 m de raio`,cat:`Transformação`,dur:`1 rodada`,e:`Esfera de 3 m de raio. Cada criatura nela faz Teste de Integridade (Resistência): falha, 2d8 de Dano de Energia e Deslocamento à metade até o fim do próximo turno dela; sucesso, metade do dano. Objetos soltos na área ficam presos ao chão.`,lv:1,n:`Pico Gravitacional`,sigma:`2d8 de Dano de Energia`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 1.`},{alc:`Toque`,cat:`Proteção`,dur:`8 horas`,e:`Leva 1 minuto. Cria uma armadilha mágica num círculo de 1,5 m, que dura 8 horas e exige um Teste de Lógica (Investigação) contra a CD de Poder para ser notada. Quem entra nela faz Teste de Integridade (Reflexos) ou fica impedido e suspenso no ar; pode repetir com Potência a cada turno.`,lv:1,n:`Armadilha Cinética`,t:[],tempo:`1 minuto`,teste:`Reflexos`,up:`A CD do Teste de Integridade para escapar sobe 1 por Nível de Poder acima de 1.`},{alc:`Toque`,cat:`Proteção`,dur:`8 horas`,e:`Uma criatura sem armadura passa a ter CA 13 + modificador de Reflexos por 8 horas. Termina se ela vestir armadura.`,lv:1,n:`Campo de Força Pessoal`,t:[],tempo:`Ação`},{alc:`Pessoal`,cat:`Proteção`,dur:`1 hora`,e:`O herói ganha 5 PV temporários por 1 hora. Enquanto durarem, quem o acertar com Jogada de Ataque Corpo a Corpo sofre 5 de frio.`,lv:1,n:`Couraça Criogênica`,t:[],tempo:`Ação`,up:`+5 PV temporários e +5 de frio por Nível de Poder acima de 1.`},{alc:`18 m`,cat:`Transformação`,dano:`3d8 de Dano de Concussão`,dur:`Instantâneo`,e:`Lança um objeto solto de até 2,5 kg contra uma criatura a até 9 m: Teste de Integridade (Reflexos) ou 3d8 de Dano de Concussão.`,lv:1,n:`Arremesso Telecinético`,t:[],tempo:`Ação`,teste:`Reflexos`,up:`O objeto pode pesar mais 2,5 kg e causa +1d8 por Nível de Poder acima de 1.`},{alc:`9 m`,cat:`Mente`,dur:`1 minuto`,e:`Até três criaturas somam 1d4 a Jogadas de Ataque e Testes de Integridade enquanto o poder durar.`,lv:1,n:`Grito de Guerra`,t:[`Κ`,`Ν`,`Ψ`],tempo:`Ação`,up:`+1 criatura por Nível de Poder acima de 1.`,upN:1},{alc:`Toque`,cat:`Proteção`,dur:`Instantâneo`,e:`Leva 1 hora. Escolha um rito:

- **Bênção da água:** cria um frasco de água benta.
- **Ritual de passagem:** +1d4 em Testes de Parâmetro por 24 h.
- **Consagração:** +1 na CA por 24 h.
- **Vigília pelos mortos:** o cadáver não volta como morto-vivo por 7 dias.
- **União:** o casal soma +2 na CA quando a até 9 m um do outro, por 7 dias.`,lv:1,n:`Juramento Solene`,t:[`Τ`],tempo:`1 hora · Τ ritual`},{alc:`Pessoal`,area:`Raio de 1,5 m ao redor do alvo`,cat:`Criação`,dur:`1 minuto`,e:`No próximo acerto com Jogada de Ataque à Distância, o projétil se divide: o alvo e cada criatura a até 1,5 m dele fazem Teste de Integridade (Reflexos) ou sofrem 1d10 de Dano Perfurante (metade se passar).`,lv:1,n:`Disparo Fragmentado`,sigma:`1d10 de Dano Perfurante`,t:[`Θ`,`Κ`],tempo:`Ação Rápida`,teste:`Reflexos`,up:`+1d10 por Nível de Poder acima de 1.`},{alc:`18 m`,cat:`Mente`,dur:`1 rodada`,e:`Uma criatura que entenda o idioma do herói faz Teste de Integridade (Espírito) ou obedece no próximo turno a uma ordem de uma palavra (aproxime-se, largue, fuja, deite-se, pare). Não funciona em mortos-vivos nem se a ordem for diretamente danosa a ela.`,lv:1,n:`Ordem Psíquica`,t:[`Ν`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`+1 criatura por Nível de Poder acima de 1.`,upN:1},{alc:`3 m`,cat:`Criação`,dur:`Instantâneo`,e:`Leva 1 hora. Um espírito em forma de animal pequeno serve o herói até ser destruído. O herói pode ver e ouvir pelos sentidos dele (Ação) e usá-lo para entregar poderes de toque. Ele não ataca. Com uma Ação, o herói o dispensa ou o chama de volta.`,lv:1,n:`Companheiro Drone`,t:[`Τ`],tempo:`1 hora · Τ ritual`},{alc:`Pessoal`,cat:`Percepção`,dur:`1 hora`,e:`Por 1 hora, o herói entende qualquer idioma falado que ouça e qualquer texto que toque (1 minuto por página). Não decifra códigos nem mensagens ocultas por poderes.`,lv:1,n:`Tradutor Universal`,t:[`Τ`],tempo:`Ação · Τ ritual`},{alc:`9 m`,area:`Cubo de 9 m`,cat:`Transformação`,dur:`Instantâneo`,e:`Escolha um efeito:

- **Criar:** até 40 litros de água limpa num recipiente ou como chuva num cubo de 9 m (apaga chamas expostas).
- **Destruir:** até 40 litros de água ou a névoa num cubo de 9 m.`,lv:1,n:`Controle de Umidade`,t:[`Θ`],tempo:`Ação`,up:`+40 litros e +1,5 m de cubo por Nível de Poder acima de 1.`},{alc:`Pessoal (cone 4,5 m)`,area:`Cone 4,5 m`,cat:`Energia`,dur:`Instantâneo`,e:`Cone de 4,5 m. Cada criatura faz Teste de Integridade (Resistência): 2d8 de Dano de Frio na falha, metade no sucesso. Água rasa na área congela por 1 minuto.`,lv:1,n:`Leque Criogênico`,sigma:`2d8 de Dano de Frio`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 1.`},{alc:`Pessoal`,cat:`Percepção`,dur:`10 minutos`,e:`O herói sente a localização e o tipo de aberrações, celestiais, elementais, fadas, infernais e mortos-vivos a até 9 m, e de lugares consagrados ou profanados. Bloqueado por 30 cm de pedra, 2,5 cm de metal ou 90 cm de madeira.`,lv:1,n:`Sentir Entidades`,t:[`Κ`],tempo:`Ação`},{alc:`Pessoal`,cat:`Percepção`,dur:`10 minutos`,e:`O herói sente poderes ativos e itens especiais a até 9 m; com uma Ação, vê uma aura em volta deles e descobre o tipo de efeito. Mesmas barreiras de Sentir Entidades.`,lv:1,n:`Detectar Poderes`,t:[`Κ`,`Τ`],tempo:`Ação · Τ ritual`},{alc:`Pessoal`,cat:`Percepção`,dur:`10 minutos`,e:`O herói sente venenos, criaturas venenosas e doenças a até 9 m e identifica o tipo. Mesmas barreiras de Sentir Entidades.`,lv:1,n:`Varredura Biológica`,t:[`Κ`,`Τ`],tempo:`Ação · Τ ritual`},{alc:`9 m`,cat:`Criação`,dur:`1 hora`,e:`Um disco de força de 90 cm flutua a 1 m do chão por 1 hora e carrega até 250 kg. Segue o herói a 6 m. Se a distância passar de 30 m, ou o peso exceder o limite, o disco some e a carga cai.`,lv:1,n:`Plataforma Flutuante`,t:[`Τ`],tempo:`Ação · Τ ritual`},{alc:`Pessoal`,cat:`Ilusão`,dur:`1 hora`,e:`Por 1 hora, o herói muda a aparência do corpo, das roupas e do equipamento: até 30 cm a mais ou a menos de altura, outra compleição, outro rosto. É ilusão: ao toque, as diferenças se revelam. Uma criatura que examine o herói faz um Teste de Lógica (Investigação) contra a CD de Poder para perceber.`,lv:1,n:`Disfarce Holográfico`,t:[],tempo:`Ação`},{alc:`Toque`,cat:`Ilusão`,dur:`8 horas`,e:`Leva 1 minuto. Por 1 hora, um objeto de até 30 cm parece valer o dobro ou a metade do preço a quem o examinar. Teste de Lógica (Investigação) contra a CD de Poder revela a ilusão.`,lv:1,n:`Falsificação Perceptiva`,t:[],tempo:`1 minuto`,up:`Duração maior (8 h em NP 2, 24 h em NP 3, 10 dias em NP 4, permanente em NP 5).`},{alc:`Toque`,cat:`Percepção`,dur:`8 horas`,e:`Por 8 horas, uma criatura soma 1d8 à iniciativa e não pode ser surpreendida.`,lv:1,n:`Reflexos Aguçados`,t:[],tempo:`1 minuto`},{alc:`9 m`,cat:`Mente`,dur:`1 minuto`,e:`Uma criatura a até 9 m faz Teste de Integridade (Espírito) ou, por até 1 minuto (Concentração), tem Desvantagem em ataques contra outros que não o herói e precisa de novo Teste de Integridade para se afastar mais de 9 m dele. Termina se o herói atacar outra criatura ou um aliado atacar o alvo.`,lv:1,n:`Desafio Pessoal`,t:[`Κ`,`Ψ`],tempo:`Ação Rápida`,teste:`Espírito`},{alc:`9 m`,cat:`Mente`,dur:`1 hora`,e:`Um humanoide faz Teste de Integridade (Espírito) (com Vantagem se estiver em combate com o herói) ou fica dominado e o trata como amigo por 1 hora. Quando o efeito acaba, ele sabe que foi dominado.`,lv:1,n:`Fascínio Pessoal`,t:[`Ν`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`+1 alvo por Nível de Poder acima de 1.`,upN:1},{alc:`9 m`,cat:`Mente`,dur:`1 minuto`,e:`Até três criaturas fazem Teste de Integridade (Magnetismo) ou subtraem 1d4 de Jogadas de Ataque e Testes de Integridade enquanto o poder durar.`,lv:1,n:`Abalo Moral`,t:[`Κ`,`Ν`,`Ψ`],tempo:`Ação`,teste:`Magnetismo`,up:`+1 criatura por Nível de Poder acima de 1.`,upN:1},{alc:`27 m`,area:`Quadrado de 6 m`,cat:`Criação`,dur:`1 minuto`,e:`Plantas tomam um quadrado de 6 m, que vira terreno difícil. Cada criatura na área ao surgirem faz Teste de Integridade (Potência) ou fica impedida. Com uma Ação, ela repete o Teste de Parâmetro (Potência) contra a CD de Poder para se soltar.`,lv:1,n:`Vinhas Constritoras`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Potência`},{alc:`Toque`,cat:`Ilusão`,dur:`10 dias`,e:`Ritual de 1 minuto sobre papel ou similar. Por 10 dias, só criaturas escolhidas leem a mensagem real; as demais veem outro texto ou nada. Visão da verdade revela a mensagem.`,lv:1,n:`Mensagem Criptografada`,t:[`Τ`],tempo:`1 minuto · Τ ritual`},{alc:`18 m`,cat:`Proteção`,dur:`10 minutos`,e:`Uma criatura ganha +2 na CA enquanto o poder durar.`,lv:1,n:`Escudo de Convicção`,t:[`Κ`],tempo:`Ação Rápida`},{alc:`Pessoal`,cat:`Proteção`,dur:`1 rodada`,e:`Reação ao ser atingido ou alvo de Mísseis de Energia: +5 na CA até o início do próximo turno do herói, inclusive contra o ataque que disparou o poder, e nenhum dano de Mísseis de Energia.`,lv:1,n:`Escudo Reflexo`,t:[],tempo:`Reação`},{alc:`18 m`,area:`Raio de 1,5 m ao redor do alvo`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Criação`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder à Distância: 1d10 de Dano Perfurante. Acertando ou errando, o gelo explode: o alvo e cada criatura a até 1,5 m dele fazem Teste de Integridade (Reflexos) ou sofrem 2d6 de Dano de Frio.`,lv:1,n:`Estilhaço de Gelo`,sigma:`1d10 de Dano Perfurante + 2d6 de Dano de Frio`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d6 de Dano de Frio por Nível de Poder acima de 1.`},{alc:`Pessoal`,cat:`Percepção`,dur:`10 minutos`,e:`Por 10 minutos, o herói entende e é entendido por feras. A maioria só fala do que viu e sentiu recentemente.`,lv:1,n:`Linguagem Animal`,t:[`Τ`,`Ψ`],tempo:`Ação · Τ ritual`},{alc:`18 m`,cat:`Mente`,dur:`Instantâneo`,e:`Reação quando uma criatura a até 18 m acerta um ataque, passa num Teste de Parâmetro ou num Teste de Integridade: ela rola de novo o d20 e fica com o menor. O herói pode dar Vantagem num próximo ataque, Teste de Parâmetro ou Teste de Integridade a outra criatura dentro do alcance.`,lv:1,n:`Distorção de Probabilidade`,t:[`Ψ`],tempo:`Reação`},{alc:`Pessoal`,cat:`Energia`,dano:`1d4 de Dano Radiante`,dur:`1 minuto`,e:`Os ataques com arma do herói causam +1d4 de Dano Radiante enquanto o poder durar.`,lv:1,n:`Golpe Inspirado`,t:[`Κ`],tempo:`Ação Rápida`},{alc:`Toque`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Entropia`,dano:`3d10 de Dano Necrótico`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder Corpo a Corpo: 3d10 de Dano Necrótico.`,lv:1,n:`Toque Devastador`,t:[],tempo:`Ação`,up:`+1d10 por Nível de Poder acima de 1.`},{alc:`Toque`,cat:`Transformação`,dur:`Instantâneo`,e:`Até 10 frutos ou cápsulas surgem na mão do herói e duram 24 horas. Comer um (Ação) Cura 1 PV e alimenta uma criatura por um dia.`,lv:1,n:`Cápsulas Nutritivas`,t:[],tempo:`Ação`},{alc:`Pessoal`,cat:`Energia`,dano:`1d6 de Dano de Fogo`,dur:`1 minuto`,e:`O próximo acerto com arma causa +1d6 de Dano de Fogo e o alvo pega fogo: no início de cada turno, faz Teste de Integridade (Resistência) ou sofre 1d6 de Dano de Fogo; o efeito termina ao passar, ou se ela usar uma Ação para apagar as chamas.`,lv:1,n:`Golpe Incendiário`,t:[`Κ`],tempo:`Ação Rápida`,teste:`Resistência`,up:`+1d6 no dano inicial por Nível de Poder acima de 1.`},{alc:`Pessoal`,cat:`Energia`,dano:`1d6 de Dano de Psíquico`,dur:`1 minuto`,e:`O próximo acerto com arma causa +1d6 de Dano de Psíquico e o alvo faz Teste de Integridade (Espírito) ou fica amedrontado pelo herói enquanto o poder durar; repete o teste ao fim de cada turno.`,lv:1,n:`Golpe Intimidador`,t:[`Κ`,`Ψ`],tempo:`Ação Rápida`,teste:`Espírito`},{alc:`Pessoal`,cat:`Criação`,dano:`1d6 de Dano Perfurante`,dur:`1 minuto`,e:`No próximo acerto com arma, vinhas envolvem o alvo:

- Teste de Integridade (Potência) ou fica impedido e sofre 1d6 de Dano Perfurante no início de cada turno. Com uma Ação, pode testar Potência contra a CD de Poder para se soltar.
- Criaturas Grandes ou maiores têm Vantagem.`,lv:1,n:`Golpe Enredante`,t:[`Κ`],tempo:`Ação Rápida`,teste:`Potência`,up:`+1d6 por Nível de Poder acima de 1.`},{alc:`Pessoal`,cat:`Transformação`,dano:`1d8 de Dano de Energia`,dur:`1 minuto`,e:`Por 1 minuto (Concentração), o movimento do herói não provoca Contra-ataques. Uma vez, ao atacar, ele pode encerrar o poder para ter Vantagem no ataque, causar +1d8 de Dano de Energia se acertar e ganhar +9 m de Deslocamento até o fim do turno.`,lv:1,n:`Investida Relâmpago`,t:[`Κ`],tempo:`Ação Rápida`},{alc:`Pessoal`,cat:`Energia`,dano:`2d6 de Dano de Trovão`,dur:`1 minuto`,e:`O próximo acerto com arma causa +2d6 de Dano de Trovão e o alvo faz Teste de Integridade (Potência) ou é empurrado 3 m e fica caído. O estrondo é ouvido a 90 m.`,lv:1,n:`Golpe Sísmico`,t:[`Κ`],tempo:`Ação Rápida`,teste:`Potência`},{alc:`18 m`,area:`Quadrado de 3 m`,cat:`Criação`,dur:`1 minuto`,e:`Quadrado de 3 m vira terreno difícil por 1 minuto. Quem estiver nele ao surgir, ou entrar ou terminar o turno nele, faz Teste de Integridade (Reflexos) ou fica caído.`,lv:1,n:`Superfície Escorregadia`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`},{alc:`Toque`,cat:`Mente`,dur:`1 minuto`,e:`Uma criatura fica imune a medo e ganha PV temporários iguais ao Parâmetro de poder no início de cada turno dela. Ao terminar, perde os PV temporários restantes.`,lv:1,n:`Coragem Heroica`,t:[`Κ`,`Ν`,`Ψ`],tempo:`Ação`,up:`+1 alvo por Nível de Poder acima de 1.`,upN:1},{alc:`Toque`,cat:`Percepção`,dur:`Instantâneo`,e:`Leva 1 minuto. O herói aprende as propriedades de um item especial e como usá-las, ou quais poderes estão afetando uma criatura ou objeto tocado.`,lv:1,n:`Escaneamento`,t:[`Τ`],tempo:`1 minuto · Τ ritual`},{alc:`18 m`,area:`Cubo de 4,5 m`,cat:`Ilusão`,dur:`10 minutos`,e:`Imagem visual de um objeto, criatura ou fenômeno que cabe num cubo de 4,5 m, sem som, cheiro ou temperatura. Com uma Ação, o herói a move. Interação física revela a ilusão; um Teste de Lógica (Investigação) contra a CD de Poder também.`,lv:1,n:`Holograma`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`Pessoal (linha 9 m)`,area:`Linha 9 m`,cat:`Energia`,dur:`1 minuto`,e:`Linha de 9 m. Cada criatura nela faz Teste de Integridade (Reflexos) ou fica coberta de ácido: sofre 2d4 de Dano de Ácido no início de cada turno até usar uma Ação para se limpar ou o poder terminar.`,lv:1,n:`Jato Corrosivo`,sigma:`2d4 de Dano de Ácido`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d4 por Nível de Poder acima de 1.`},{alc:`Pessoal (cone 4,5 m)`,area:`Cone 4,5 m`,cat:`Energia`,dur:`Instantâneo`,e:`Cone de 4,5 m. Cada criatura faz Teste de Integridade (Reflexos): 3d6 de Dano de Fogo na falha, metade no sucesso. Incendeia objetos inflamáveis soltos.`,lv:1,n:`Lança-Chamas`,sigma:`3d6 de Dano de Fogo`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d6 por Nível de Poder acima de 1.`},{alc:`Pessoal (cone 4,5 m)`,area:`Cone 4,5 m`,cat:`Ilusão`,dur:`1 rodada`,e:`Cone de 4,5 m. Role 6d10: esse total de PV é afetado, começando pela criatura com menos PV atuais. Cada criatura afetada fica cega até o fim do próximo turno do herói. Criaturas inconscientes ou que não veem não contam.`,lv:1,n:`Clarão Ofuscante`,t:[`Θ`],tempo:`Ação`,up:`+2d10 por Nível de Poder acima de 1.`},{alc:`27 m`,cat:`Mente`,dano:`1d6 de Dano Necrótico`,dur:`1 hora`,e:`Sempre que o herói acerta o alvo, causa +1d6 de Dano Necrótico. Escolha um Parâmetro: o alvo tem Desvantagem em testes com ele. Se o alvo cair a 0 PV, o herói pode transferir a maldição para outra criatura com uma Ação Rápida.`,lv:1,n:`Marca Sombria`,t:[`Κ`,`Ψ`],tempo:`Ação Rápida`,up:`Concentração até 8 h (NP 3–4) ou 24 h (NP 5+).`},{alc:`27 m`,cat:`Percepção`,dur:`1 hora`,e:`O herói causa +1d6 de dano com ataques com arma contra o alvo e tem Vantagem em Espírito (Percepção ou Sobrevivência) para encontrá-lo. Se o alvo cair a 0 PV, pode marcar outro com Ação Rápida.`,lv:1,n:`Alvo Marcado`,t:[`Κ`],tempo:`Ação Rápida`,up:`Concentração até 8 h (NP 3–4) ou 24 h (NP 5+).`},{alc:`18 m`,area:`Cubo de 6 m`,cat:`Energia`,dur:`1 minuto`,e:`Cubo de 6 m. Cada criatura e objeto nele faz Teste de Integridade (Reflexos) ou fica contornado de luz por 1 minuto (Concentração): emite penumbra de 3 m, não pode ficar invisível e ataques contra ela têm Vantagem se o atacante a vir.`,lv:1,n:`Marcador de Alvo`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`36 m`,cat:`Energia`,dano:`1d4 + 1 de Dano de Energia`,dur:`Instantâneo`,e:`Três dardos de energia acertam automaticamente criaturas que o herói vê a até 36 m: 1d4 + 1 de Dano de Energia cada. Os dardos podem ir para um ou vários alvos.`,lv:1,n:`Mísseis de Energia`,t:[`Ψ`],tempo:`Ação`,up:`+1 dardo por Nível de Poder acima de 1.`},{alc:`36 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dano:`2d4 de Dano de Energia + 1d4 de Dano de Energia`,dur:`Instantâneo`,e:`Três dardos, cada um com Jogada de Ataque de Poder à Distância: 2d4 de Dano de Energia por acerto. Se algum d20 tirar 1 natural, todos os mísseis explodem no herói, que sofre 1d4 de Dano de Energia por míssil.`,lv:1,n:`Mísseis Instáveis`,t:[`Ξ`],tempo:`Ação`,up:`+1 dardo por Nível de Poder acima de 1.`},{alc:`36 m`,area:`Esfera de 6 m de raio`,cat:`Criação`,dur:`1 hora`,e:`Esfera de 6 m de raio de névoa densa, área de visão totalmente bloqueada, por até 1 hora (Concentração). Vento moderado a dispersa.`,lv:1,n:`Cortina de Névoa`,t:[`Θ`,`Κ`,`Ψ`],tempo:`Ação`,up:`+6 m de raio por Nível de Poder acima de 1.`},{alc:`Pessoal (cubo 4,5 m)`,area:`Cubo 4,5 m`,cat:`Energia`,dur:`Instantâneo`,e:`Cubo de 4,5 m a partir do herói. Cada criatura faz Teste de Integridade (Resistência): falha, 2d8 de Dano de Trovão e é empurrada 3 m; sucesso, metade e não é empurrada. Objetos soltos também são empurrados. O estrondo é ouvido a 90 m.`,lv:1,n:`Onda de Choque`,sigma:`2d8 de Dano de Trovão`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 1.`},{alc:`27 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder à Distância: 3d8 do tipo escolhido entre ácido, elétrico, fogo, frio, trovão e veneno.`,lv:1,n:`Esfera Elemental`,t:[],tempo:`Ação`,up:`+1d8 por Nível de Poder acima de 1.`},{alc:`18 m`,cat:`Energia`,dur:`Instantâneo`,e:`Uma criatura que o herói vê Recupera 1d4 + Parâmetro de poder em PV. Não afeta mortos-vivos nem constructos.`,lv:1,n:`Impulso Regenerador`,t:[],tempo:`Ação Rápida`,up:`+1d4 por Nível de Poder acima de 1.`},{alc:`Toque`,cat:`Transformação`,dur:`1 hora`,e:`Por 1 hora, uma criatura ganha +3 m de Deslocamento.`,lv:1,n:`Passo Acelerado`,t:[`Ν`],tempo:`Ação`,up:`+1 alvo por Nível de Poder acima de 1.`,upN:1},{alc:`18 m`,cat:`Entropia`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Espírito) ou fica amedrontada pelo herói enquanto o poder durar; repete o teste ao fim de cada turno em que não o veja.`,lv:1,n:`Pavor`,t:[`Κ`,`Ν`],tempo:`Ação`,teste:`Espírito`,up:`+1 alvo por Nível de Poder acima de 1.`,upN:1},{alc:`Toque`,cat:`Proteção`,dur:`10 minutos`,e:`Aberrações, celestiais, elementais, fadas, infernais e mortos-vivos têm Desvantagem em ataques contra o alvo, que não pode ser dominado, amedrontado nem possuído por elas.`,lv:1,n:`Guarda contra Entidades`,t:[`Κ`],tempo:`Ação`},{alc:`3 m`,area:`Esfera de 1,5 m`,cat:`Transformação`,dur:`Instantâneo`,e:`Toda comida e bebida numa esfera de 1,5 m a até 3 m fica livre de venenos e doenças.`,lv:1,n:`Purificação`,t:[`Θ`,`Τ`],tempo:`Ação · Τ ritual`},{alc:`18 m`,cat:`Transformação`,dur:`1 minuto`,e:`Reação quando criaturas caem: até cinco criaturas a até 18 m descem 18 m por rodada por 1 minuto e não sofrem dano de queda.`,lv:1,n:`Amortecer Queda`,t:[],tempo:`Reação`},{alc:`36 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder à Distância: 2d8 + 1d6. O tipo depende de um dos d8 (1 ácido, 2 frio, 3 fogo, 4 energia, 5 elétrico, 6 veneno, 7 psíquico, 8 trovão). Se os dois d8 empatarem, o raio salta para outra criatura a até 9 m, com novo ataque, até uma vez por d8 empatado.`,lv:1,n:`Raio Caótico`,t:[`Ψ`,`Ξ`],tempo:`Ação`,up:`+1d6 por Nível de Poder acima de 1.`},{alc:`9 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dano:`1d12 de Dano Elétrico`,dur:`1 minuto`,e:`Jogada de Ataque de Poder à Distância: 1d12 de Dano Elétrico. Por até 1 minuto (Concentração), em cada turno o herói pode usar uma Ação para causar 1d12 de Dano Elétrico automático ao alvo. Termina se o alvo sair do alcance ou ficar sob cobertura total.`,lv:1,n:`Feixe Contínuo`,t:[`Κ`],tempo:`Ação`,up:`+1d12 no dano inicial por Nível de Poder acima de 1.`},{alc:`36 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dano:`4d6 de Dano Radiante`,dur:`1 rodada`,e:`Jogada de Ataque de Poder à Distância: 4d6 de Dano Radiante. O próximo ataque contra o alvo antes do fim do próximo turno do herói tem Vantagem.`,lv:1,n:`Raio Marcador`,t:[],tempo:`Ação`,up:`+1d6 por Nível de Poder acima de 1.`},{alc:`18 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Entropia`,dano:`2d8 de Dano de Veneno`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder à Distância: 2d8 de Dano de Veneno, e o alvo faz Teste de Integridade (Resistência) ou fica envenenado até o fim do próximo turno do herói.`,lv:1,n:`Raio Tóxico`,t:[],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 1.`},{alc:`18 m`,cat:`Energia`,dano:`2d10 de Dano de Fogo`,dur:`Instantâneo`,e:`Reação ao sofrer dano de uma criatura a até 18 m: ela faz Teste de Integridade (Reflexos), 2d10 de Dano de Fogo na falha, metade no sucesso.`,lv:1,n:`Retaliação Ígnea`,t:[],tempo:`Reação`,teste:`Reflexos`,up:`+1d10 por Nível de Poder acima de 1.`},{alc:`Toque`,cat:`Energia`,dur:`Instantâneo`,e:`Uma criatura tocada Recupera 1d8 + Parâmetro de poder em PV. Não afeta mortos-vivos nem constructos.`,lv:1,n:`Toque Regenerador`,t:[],tempo:`Ação`,up:`+1d8 por Nível de Poder acima de 1.`},{alc:`9 m`,cat:`Mente`,dur:`1 minuto`,e:`Uma criatura com Lógica 5 ou mais faz Teste de Integridade (Espírito) ou cai, incapacitada de tanto rir, por até 1 minuto (Concentração). Repete o teste ao fim de cada turno e quando sofre dano (com Vantagem nesse caso).`,lv:1,n:`Riso Histérico`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`Toque`,cat:`Transformação`,dur:`1 minuto`,e:`Por 1 minuto, a distância de salto de uma criatura tocada é triplicada.`,lv:1,n:`Supersalto`,t:[],tempo:`Ação`},{alc:`9 m`,cat:`Proteção`,dur:`1 minuto`,e:`Por 1 minuto, quem tentar atacar ou usar um poder nocivo contra o alvo faz Teste de Integridade (Espírito) ou escolhe outro alvo (ou perde o ataque). Termina se o alvo atacar ou usar um poder nocivo.`,lv:1,n:`Aura de Trégua`,t:[],tempo:`Ação Rápida`,teste:`Espírito`},{alc:`18 m`,cat:`Criação`,dur:`1 hora`,e:`Ritual possível. Por 1 hora, uma força invisível e sem mente (CA 10, 1 PV, Potência 2) faz tarefas simples: buscar, limpar, servir, carregar. Com uma Ação Rápida, o herói dá ordens; ela se move 4,5 m por turno e não ataca.`,lv:1,n:`Assistente Cinético`,t:[`Τ`,`Ψ`],tempo:`Ação · Τ ritual`},{alc:`27 m`,area:`Esfera de 6 m`,cat:`Mente`,dur:`1 minuto`,e:`Role 5d8: esse total de PV adormece numa esfera de 6 m a até 27 m, começando pela criatura com menos PV atuais. Dormem por 1 minuto ou até sofrerem dano ou alguém usar uma Ação para acordá-las. Mortos-vivos e quem não dorme não são afetados.`,lv:1,n:`Pulso Sonífero`,t:[`Θ`,`Ψ`],tempo:`Ação`,up:`+2d8 por Nível de Poder acima de 1.`},{alc:`18 m`,cat:`Mente`,dano:`3d6 de Dano de Psíquico`,dur:`Instantâneo`,e:`Uma criatura que ouça faz Teste de Integridade (Espírito): falha, 3d6 de Dano de Psíquico e usa a Reação para se afastar o máximo possível do herói; sucesso, metade do dano.`,lv:1,n:`Ruído Psíquico`,t:[`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`+1d6 por Nível de Poder acima de 1.`},{alc:`Pessoal (3 m)`,area:`Raio de 3 m ao redor do herói`,cat:`Criação`,dur:`Instantâneo`,e:`Cada criatura a até 3 m do herói faz Teste de Integridade (Potência): falha, 2d6 de Dano Necrótico e não pode fazer Reações até o próximo turno dela; sucesso, metade e nenhum outro efeito.`,lv:1,n:`Tentáculos do Vazio`,sigma:`2d6 de Dano Necrótico`,t:[`Θ`],tempo:`Ação`,teste:`Potência`,up:`+1d6 por Nível de Poder acima de 1.`},{alc:`Pessoal (3 m)`,area:`Raio de 3 m ao redor do herói`,cat:`Energia`,dur:`Instantâneo`,e:`Cada criatura a até 3 m do herói, exceto ele, faz Teste de Integridade (Reflexos) ou sofre 1d6 de Dano de Concussão e fica caída. Terra ou pedra solta na área vira terreno difícil.`,lv:1,n:`Tremor`,sigma:`1d6 de Dano de Concussão`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d6 por Nível de Poder acima de 1.`},{alc:`Pessoal`,cat:`Transformação`,dur:`10 minutos`,e:`O herói pode usar Disparar como Ação Rápida em cada um dos seus turnos.`,lv:1,n:`Explosão de Velocidade`,t:[`Κ`],tempo:`Ação Rápida`},{alc:`Pessoal`,cat:`Entropia`,dur:`1 hora`,e:`O herói ganha 1d4 + 4 PV temporários por 1 hora.`,lv:1,n:`Vitalidade Reserva`,t:[],tempo:`Ação`,up:`+5 PV temporários por Nível de Poder acima de 1.`},{alc:`Toque`,cat:`Percepção`,dur:`10 minutos`,e:`Uma fera aliada ganha elo telepático com o herói e tem Vantagem em ataques contra criaturas a até 1,5 m dele.`,lv:1,n:`Elo Animal`,t:[`Κ`],tempo:`Ação`},{alc:`18 m`,area:`Esfera de 6 m de raio`,cat:`Mente`,dur:`1 minuto`,e:`Esfera de 6 m de raio. Cada humanoide nela faz Teste de Integridade (Magnetismo) (pode escolher falhar). Em quem falhar, o herói escolhe um efeito:

- Suprimir os efeitos de dominado e amedrontado enquanto o poder durar.
- Tornar indiferente quem era hostil (termina se for atacado ou ferido).`,lv:2,n:`Calmaria Emocional`,t:[`Θ`,`Κ`,`Ψ`],tempo:`Ação`,teste:`Magnetismo`},{alc:`90 m`,cat:`Transformação`,dur:`1 minuto`,e:`Uma criatura que voa faz Teste de Integridade (Potência) ou seu Deslocamento de voo cai a 0 e ela desce 18 m por rodada até o chão, sem sofrer dano, enquanto o poder durar. Repete o teste ao fim de cada turno.`,lv:2,n:`Âncora Gravitacional`,t:[`Κ`],tempo:`Ação`,teste:`Potência`},{alc:`Toque`,cat:`Transformação`,dur:`1 hora`,e:`A criatura tocada tem Vantagem nos testes de um Parâmetro à escolha, com um benefício extra conforme o Parâmetro:

- **Potência:** dobra a capacidade de carga.
- **Reflexos:** não sofre dano de quedas de até 6 m.
- **Resistência:** ganha 2d6 PV temporários.
- **Lógica, Espírito ou Magnetismo:** só a Vantagem.`,lv:2,n:`Potencial Ampliado`,t:[`Κ`,`Ν`],tempo:`Ação`,up:`+1 alvo por Nível de Poder acima de 2.`,upN:1},{alc:`18 m`,cat:`Transformação`,dano:`2d8 de Dano de Fogo`,dur:`1 minuto`,e:`Um objeto de metal que o herói vê fica em brasa. Quem estiver em contato sofre 2d8 de Dano de Fogo ao ativar o poder e sempre que o herói usar uma Ação Rápida para repetir. Quem segura ou veste o objeto faz Teste de Integridade (Resistência) ou o larga; se não puder largar, tem Desvantagem em ataques e testes até o início do próximo turno do herói.`,lv:2,n:`Superaquecer Metal`,t:[`Κ`],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 2.`},{alc:`Toque`,cat:`Transformação`,dur:`1 hora`,e:`Uma arma comum tocada vira especial e ganha +1 em Jogadas de Ataque e dano.`,lv:2,n:`Arma Energizada`,t:[`Κ`],tempo:`Ação Rápida`,up:`+2 em NP 4 e +3 em NP 6.`},{alc:`18 m`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Energia`,dano:`1d8 + Parâmetro de poder energia`,dur:`1 minuto`,e:`Uma arma de energia flutuante surge a até 18 m e dura 1 minuto. Ao ativar e com Ação Rápida nos turnos seguintes, o herói a move 6 m e faz uma Jogada de Ataque de Poder Corpo a Corpo contra criatura a até 1,5 m dela: 1d8 + Parâmetro de poder energia.`,lv:2,n:`Arma Fantasma`,t:[],tempo:`Ação Rápida`,up:`+1d8 a cada dois Níveis de Poder acima de 2.`},{alc:`9 m`,cat:`Transformação`,dur:`1 minuto`,e:`Uma criatura ou objeto (Teste de Integridade (Resistência) se não quiser) muda de tamanho. O herói escolhe:

- **Aumentar:** dobra de tamanho em cada dimensão, sobe uma categoria, tem Vantagem em Testes de Parâmetro (Potência) e seus ataques com arma causam +1d4.
- **Reduzir:** fica com metade do tamanho, desce uma categoria, tem Desvantagem em Testes de Parâmetro (Potência) e seus ataques com arma causam −1d4 (mínimo 1).`,lv:2,n:`Alterar Tamanho`,t:[`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`Toque`,cat:`Ilusão`,dur:`24 horas`,e:`Por 24 horas, um objeto ou criatura tocado parece não ter poderes para detecção, ou exibe uma aura falsa escolhida pelo herói.`,lv:2,n:`Assinatura Falsa`,t:[],tempo:`Ação`},{alc:`3 m`,cat:`Criação`,dur:`1 hora`,e:`Requer um Companheiro Drone. Por até 1 hora (Concentração), mais três companheiros familiares temporários surgem a até 3 m. Todos obedecem ao herói e podem entregar poderes de toque; ele usa os sentidos de um de cada vez.`,lv:2,n:`Enxame de Drones`,t:[`Κ`,`Ν`],tempo:`1 minuto`,up:`+1 familiar por Nível de Poder acima de 2.`,upN:1},{alc:`9 m`,cat:`Ilusão`,dur:`Até ser dissipado`,e:`Ritual de 1 minuto. Grava uma mensagem de até 25 palavras num objeto; quando a condição definida pelo herói acontecer a até 9 m, uma boca surge e a fala. A condição pode ser visual ou sonora. Dura até disparar ou ser dissipada.`,lv:2,n:`Gravação Holográfica`,t:[`Τ`],tempo:`1 minuto · Τ ritual`},{alc:`18 m`,cat:`Criação`,dur:`24 horas`,e:`Por 24 horas, uma criatura respira normalmente em qualquer ambiente: debaixo d'água, em fumaça, gás ou no vácuo.`,lv:2,n:`Bolha de Oxigênio`,t:[`Ν`,`Ψ`],tempo:`Ação`,up:`+1 alvo por Nível de Poder acima de 2.`,upN:1},{alc:`Pessoal`,cat:`Criação`,dur:`1 hora`,e:`O herói guarda um objeto de até 2,5 kg num espaço extradimensional e o Recupera com Ação Rápida. Quando o poder termina, o objeto reaparece no espaço do herói.`,lv:2,n:`Bolso Dimensional`,t:[`Κ`],tempo:`Ação`},{alc:`Pessoal`,cat:`Ilusão`,dur:`1 minuto`,e:`Enquanto o poder durar, ataques contra o herói têm Desvantagem. Atacantes que não dependem de visão (sentido sísmico, visão da verdade) ignoram o efeito.`,lv:2,n:`Vulto`,t:[`Κ`],tempo:`Ação`},{alc:`9 m`,cat:`Entropia`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Resistência) ou fica cega ou surda (à escolha do herói) por 1 minuto. Repete o teste ao fim de cada turno.`,lv:2,n:`Sobrecarga Sensorial`,t:[`Ν`],tempo:`Ação`,teste:`Resistência`,up:`+1 alvo por Nível de Poder acima de 2.`,upN:1},{alc:`27 m`,cat:`Mente`,dano:`3d6 de Dano de Psíquico`,dur:`1 rodada`,e:`Uma criatura faz Teste de Integridade (Lógica). Falha: 3d6 de Dano de Psíquico, não pode fazer Reações até o fim do próximo turno dela e, nesse turno, faz só uma entre Ação, Ação Rápida ou movimento. Sucesso: metade do dano e nenhum outro efeito.`,lv:2,n:`Chicote Mental`,t:[`Ν`,`Ψ`],tempo:`Ação`,teste:`Lógica`,up:`+1 alvo por Nível de Poder acima de 2.`,upN:1},{alc:`Pessoal`,cat:`Percepção`,dur:`1 hora`,e:`Por 1 hora, o herói ganha proficiência numa perícia à escolha. Termina se ativar de novo.`,lv:2,n:`Download de Perícia`,t:[],tempo:`Ação`},{alc:`27 m`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Criação`,dano:`1d8 + 4 + Nível de Poder de Dano Perfurante`,dur:`1 hora`,e:`Um espírito de fera (terrestre, aéreo ou aquático) surge a até 27 m. CA 11 + Nível de Poder, 20 PV, Deslocamento 9 m (voo 18 m se aéreo; nado 9 m se aquático). Age no turno do herói e obedece ordens. Ataque: Jogada de Ataque de Poder Corpo a Corpo, 1d8 + 4 + Nível de Poder de Dano Perfurante. Terrestre e aquático têm Vantagem quando um aliado está a até 1,5 m do alvo; aéreo não provoca Contra-ataques ao voar.`,lv:2,n:`Invocar Fera Espiritual`,t:[`Κ`],tempo:`Ação`,up:`+5 PV por Nível de Poder acima de 2; o dano cresce com o Nível de Poder.`},{alc:`1,5 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Transformação`,dano:`1d6 de Dano Perfurante`,dur:`8 horas`,e:`Quatro munições fincadas no chão por 8 horas. Quando uma criatura que o herói não escolheu entra a até 9 m delas, uma munição a ataca (Jogada de Ataque de Poder à Distância): 1d6 de Dano Perfurante. Para quando acabam as munições.`,lv:2,n:`Torretas de Perímetro`,t:[],tempo:`Ação`,up:`+2 munições por Nível de Poder acima de 2.`},{alc:`36 m`,cat:`Mente`,dur:`1 minuto`,e:`Um humanoide faz Teste de Integridade (Espírito) ou fica dominado. No início de cada turno dele, o herói escolhe uma criatura (que não seja ele mesmo) para o alvo atacar corpo a corpo antes de se mover. O herói precisa usar uma Ação em cada turno para manter o controle. Repete o teste ao fim de cada turno.`,lv:2,n:`Controle Hostil`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`45 m`,cat:`Transformação`,dano:`2d4 de Dano Perfurante`,dur:`10 minutos`,e:`Raio de 6 m vira terreno difícil camuflado por espinhos. Quem se move dentro dele sofre 2d4 de Dano Perfurante a cada 1,5 m percorrido. Notar a área exige um Teste de Espírito (Percepção) contra a CD de Poder.`,lv:2,n:`Campo de Espinhos`,t:[`Κ`],tempo:`Ação`},{alc:`18 m`,cat:`Transformação`,dur:`Instantâneo`,e:`Uma fechadura, tranca, corrente ou trava comum se abre. Se estiver protegida por Lacre Energético, o lacre fica suprimido por 10 minutos. Faz um barulho alto ouvido a 90 m.`,lv:2,n:`Abrir Trancas`,t:[],tempo:`Ação`},{alc:`36 m`,cat:`Percepção`,dur:`Instantâneo`,e:`O herói sente qualquer armadilha a até 36 m que esteja à vista, sabe que há perigo mas não onde exatamente nem qual é.`,lv:2,n:`Detectar Armadilhas`,t:[`Ψ`],tempo:`Ação`},{alc:`27 m`,cat:`Criação`,dur:`Instantâneo`,e:`Uma criatura (Teste de Integridade (Resistência) se não quiser) ou objeto solto é teleportado para um espaço livre que o herói vê a até 27 m. Alternativamente, o herói troca de lugar com uma criatura voluntária.`,lv:2,n:`Deslocamento Forçado`,t:[`Ψ`],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal`,cat:`Ilusão`,dur:`1 minuto`,e:`Três cópias ilusórias do herói por 1 minuto. Quando ele é alvo de um ataque, role um d20 para ver se uma cópia é atingida: 6+ com três cópias, 8+ com duas, 11+ com uma. A cópia tem CA 10 + Reflexos e some ao ser atingida. Criaturas com visão cega ou visão da verdade ignoram.`,lv:2,n:`Cópias Holográficas`,t:[],tempo:`Ação`},{alc:`Toque`,cat:`Proteção`,dur:`1 hora`,e:`Por 1 hora, a criatura tocada ganha +1 na CA e nos Testes de Integridade, e resistência a todo dano. Sempre que ela sofre dano, o herói sofre a mesma quantidade. Termina se o herói cair a 0 PV ou se afastarem mais de 18 m.`,lv:2,n:`Elo Protetor`,t:[],tempo:`Ação`},{alc:`27 m`,area:`Esfera de 1,5 m de raio`,cat:`Energia`,dur:`Instantâneo`,e:`Esfera de 1,5 m de raio. Cada criatura faz Teste de Integridade (Reflexos): 3d6 de Dano de Frio na falha, metade no sucesso.`,lv:2,n:`Rajada de Granizo`,sigma:`3d6 de Dano de Frio`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d6 por Nível de Poder acima de 2.`},{alc:`Toque`,cat:`Transformação`,dur:`1 hora`,e:`A criatura tocada escala paredes e tetos com as mãos livres e ganha Deslocamento de escalada igual ao Deslocamento.`,lv:2,n:`Aderência`,t:[`Κ`,`Ν`],tempo:`Ação`,up:`+1 alvo por Nível de Poder acima de 2.`,upN:1},{alc:`Toque`,cat:`Transformação`,dur:`1 hora`,e:`Uma corda sobe até uma passagem invisível para um espaço extradimensional que cabe até oito criaturas Médias por 1 hora. A corda pode ser recolhida para dentro. Ao terminar, tudo dentro cai.`,lv:2,n:`Bolsão Dimensional`,t:[],tempo:`Ação`},{alc:`Visão`,cat:`Transformação`,dur:`1 hora`,e:`Até 10 palavras se formam em nuvens visíveis a até 80 km, por 1 hora (Concentração). Só funciona onde há céu e nuvens possíveis.`,lv:2,n:`Sinal no Céu`,t:[`Κ`],tempo:`Ação`},{alc:`18 m`,area:`Esfera de 4,5 m`,cat:`Energia`,dur:`10 minutos`,e:`Esfera de 4,5 m de escuridão mágica centrada num ponto ou objeto. Nem visão no escuro enxerga dentro dela, e luz comum não a ilumina. Luz de poder de Nível de Poder 2 ou menor é dissipada.`,lv:2,n:`Escuridão`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`18 m`,cat:`Criação`,dano:`2d6 de Dano de Fogo`,dur:`1 minuto`,e:`Esfera de fogo de 1,5 m num espaço livre. Quem terminar o turno a até 1,5 m dela faz Teste de Integridade (Reflexos): 2d6 de Dano de Fogo na falha, metade no sucesso. Com Ação Rápida, o herói a move 9 m; se colidir com uma criatura, ela faz o Teste de Integridade.`,lv:2,n:`Esfera de Plasma`,t:[`Κ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d6 por Nível de Poder acima de 2.`},{alc:`18 m`,cat:`Percepção`,dano:`3d8 de Dano de Psíquico`,dur:`1 hora`,e:`Uma criatura faz Teste de Integridade (Espírito): 3d8 de Dano de Psíquico na falha, metade no sucesso. Se falhar, o herói sabe onde ela está enquanto o poder durar, e ela não pode se esconder dele.`,lv:2,n:`Espinho Mental`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`+1d8 por Nível de Poder acima de 2.`},{alc:`18 m`,area:`Esfera de 3 m de raio`,cat:`Energia`,dur:`Instantâneo`,e:`Esfera de 3 m de raio. Cada criatura faz Teste de Integridade (Resistência): 3d8 de Dano de Trovão na falha, metade no sucesso. Criaturas de pedra, cristal ou metal têm Desvantagem. Objetos soltos sofrem o dano.`,lv:2,n:`Pulso Sônico`,sigma:`3d8 de Dano de Trovão`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 2.`},{alc:`18 m`,cat:`Mente`,dur:`1 minuto`,e:`Ao ativar e como Ação nos turnos seguintes, criaturas escolhidas a até 18 m fazem Teste de Integridade (Espírito) ou ficam com Desvantagem em Percepção para notar outros que não o herói até o fim do poder. Termina para ela se ficar fora de vista ou sofrer dano.`,lv:2,n:`Hipnose`,t:[`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`18 m`,cat:`Percepção`,dur:`1 hora`,e:`Leva 1 minuto. Por 1 hora, uma vez, o alvo pode rolar um d20 extra num ataque, Teste de Parâmetro ou Teste de Integridade e escolher qual usar.`,lv:2,n:`Sorte Forçada`,t:[],tempo:`1 minuto`},{alc:`27 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dano:`4d4 de Dano de Ácido + 2d4 de Dano de Ácido`,dur:`Instantâneo`,e:`Jogada de Ataque de Poder à Distância. Acerto: 4d4 de Dano de Ácido imediato e 2d4 de Dano de Ácido no fim do próximo turno do alvo. Erro: metade do dano inicial e nenhum dano posterior.`,lv:2,n:`Projétil Ácido`,t:[],tempo:`Ação`,up:`+1d4 em ambos por Nível de Poder acima de 2.`},{alc:`18 m`,area:`Cubo de 1,5 m`,cat:`Criação`,dur:`1 minuto`,e:`Cubo de 1,5 m de energia curativa. Quando uma criatura escolhida entra ou começa o turno nele, Recupera 1d6 PV. O cubo tem usos iguais a 1 + Parâmetro de poder; o herói pode movê-lo 9 m com Ação Rápida.`,lv:2,n:`Campo Regenerador`,t:[`Θ`,`Κ`],tempo:`Ação Rápida`,up:`+1d6 por Nível de Poder acima de 2.`},{alc:`18 m`,area:`Cubo de 3 m`,cat:`Ilusão`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Lógica) ou vê uma ilusão (objeto, criatura ou fenômeno num cubo de 3 m) que acredita ser real. A ilusão pode causar 1d6 de Dano de Psíquico por turno a quem estiver nela ou a até 1,5 m. Com uma Ação, o alvo pode testar Investigação contra a CD de Poder para perceber a farsa.`,lv:2,n:`Alucinação`,sigma:`1d6 de Dano de Psíquico`,t:[`Θ`,`Κ`,`Ψ`],tempo:`Ação`,teste:`Lógica`},{alc:`Pessoal`,cat:`Energia`,dano:`2d6 de Dano Radiante`,dur:`1 minuto`,e:`O próximo acerto com arma causa +2d6 de Dano Radiante e o alvo emite penumbra de 1,5 m, não pode ficar invisível e ataques contra ele têm Vantagem até o poder terminar.`,lv:2,n:`Golpe Revelador`,t:[`Κ`],tempo:`Ação Rápida`,up:`+1d6 por Nível de Poder acima de 2.`},{alc:`Toque`,cat:`Ilusão`,dur:`1 hora`,e:`A criatura tocada fica invisível, junto com o que veste e carrega, até o poder terminar. Termina para ela se atacar ou ativar um poder.`,lv:2,n:`Invisibilidade`,t:[`Κ`,`Ν`],tempo:`Ação`,up:`+1 alvo por Nível de Poder acima de 2.`,upN:1},{alc:`Pessoal`,cat:`Mente`,dur:`Instantâneo`,e:`Reação após falar: até cinco criaturas que ouviram os últimos 6 segundos da fala do herói fazem Teste de Integridade (Espírito) ou esquecem o que foi dito, lembrando de uma frase inofensiva qualquer.`,lv:2,n:`Apagar Fala`,t:[`Ψ`],tempo:`Reação`,teste:`Espírito`},{alc:`Pessoal`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Energia`,dano:`3d6 de Dano de Fogo`,dur:`10 minutos`,e:`Uma lâmina de fogo surge na mão do herói. Jogada de Ataque de Poder Corpo a Corpo: 3d6 de Dano de Fogo. Emite luz plena de 3 m e penumbra de mais 3 m. Pode dispensá-la e invocá-la de novo com Ação Rápida enquanto durar.`,lv:2,n:`Lâmina Ígnea`,t:[`Κ`],tempo:`Ação Rápida`,up:`+1d6 a cada dois Níveis de Poder acima de 2.`},{alc:`Pessoal`,cat:`Ilusão`,dano:`2d8 de Dano de Psíquico`,dur:`1 minuto`,e:`Uma lâmina de sombras surge na mão do herói; conta como arma leve e de acuidade em que ele é proficiente: 2d8 de Dano de Psíquico. Vantagem nos ataques contra alvo em penumbra ou escuridão.`,lv:2,n:`Lâmina de Sombras`,t:[`Κ`,`Ψ`],tempo:`Ação Rápida`,up:`3d8 em NP 3–4, 4d8 em NP 5–6, 5d8 em NP 7+.`},{alc:`Pessoal (cone 4,5 m)`,area:`Cone 4,5 m`,cat:`Criação`,dur:`Instantâneo`,e:`Cone de 4,5 m. Cada criatura faz Teste de Integridade (Reflexos): falha, 2d10 de Dano de Energia e cega até o fim do próximo turno do herói; sucesso, metade do dano.`,lv:2,n:`Leque de Projéteis`,sigma:`2d10 de Dano de Energia`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d10 por Nível de Poder acima de 2.`},{alc:`Pessoal`,cat:`Percepção`,dur:`1 minuto`,e:`Por até 1 minuto, com uma Ação o herói lê os pensamentos superficiais de uma criatura a até 9 m (Lógica 4+). Pode sondar mais fundo: o alvo faz Teste de Integridade (Espírito); se falhar, o herói acessa raciocínio, emoções e algo que pesa na mente dele. O alvo percebe a sondagem.`,lv:2,n:`Ler Pensamentos`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`18 m`,cat:`Transformação`,dur:`10 minutos`,e:`Uma criatura (Teste de Integridade (Resistência) se não quiser) ou objeto de até 250 kg flutua. Com Ação, o herói a move até 6 m para cima ou para baixo; o alvo só se desloca puxando-se por superfícies.`,lv:2,n:`Levitação`,t:[`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal`,cat:`Percepção`,dur:`Instantâneo`,e:`O herói nomeia um tipo de fera ou planta e sente a direção e distância do exemplar mais próximo a até 8 km.`,lv:2,n:`Rastrear Vida`,t:[`Τ`],tempo:`Ação · Τ ritual`},{alc:`Pessoal`,cat:`Percepção`,dur:`10 minutos`,e:`Por até 10 minutos, o herói sente a direção de um objeto que conhece a até 300 m. Pode buscar um objeto específico que já viu ou o mais próximo de um tipo. Uma camada de chumbo bloqueia.`,lv:2,n:`Localizar Objeto`,t:[`Κ`],tempo:`Ação`},{alc:`Toque`,cat:`Energia`,dur:`Até ser dissipado`,e:`Um objeto tocado emite luz equivalente a uma tocha (luz plena 18 m, penumbra mais 18 m) que não esquenta nem consome oxigênio, até ser dissipada. Pode ser coberta.`,lv:2,n:`Luz Perpétua`,t:[],tempo:`Ação`},{alc:`9 m`,area:`Quadrado de 1,5 m`,cat:`Transformação`,dur:`1 minuto`,e:`Uma mão de terra surge num quadrado de 1,5 m. Ao ativar e com Ação nos turnos seguintes, uma criatura a até 1,5 m dela faz Teste de Integridade (Potência): falha, 2d6 de Dano de Concussão e fica impedida; com Ação, ela pode testar Potência contra a CD de Poder para se soltar. A mão pode ser movida 9 m.`,lv:2,n:`Punho de Terra`,sigma:`2d6 de Dano de Concussão`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Potência`},{alc:`9 m`,cat:`Mente`,dur:`24 horas`,e:`Uma fera Miúda leva uma mensagem de até 25 palavras a um local que o herói conheça, viajando por até 24 horas (75 km voando ou 40 km por terra). Ao chegar, entrega a mensagem a quem o herói descreveu.`,lv:2,n:`Mensageiro Animal`,t:[`Τ`,`Ψ`],tempo:`Ação · Τ ritual`,up:`+48 horas por Nível de Poder acima de 2.`},{alc:`Pessoal`,cat:`Transformação`,dur:`1 hora`,e:`Por até 1 hora, o herói assume uma das formas abaixo e pode trocar de forma com uma Ação:

- **Adaptação aquática:** respira água e ganha Deslocamento de nado igual ao Deslocamento.
- **Mudança de aparência:** altera rosto, altura e cor, sem trocar de tamanho.
- **Armas naturais:** garras ou chifres de 1d6, especiais, com +1 no ataque e no dano.`,lv:2,n:`Mutação Pessoal`,t:[`Κ`],tempo:`Ação`},{alc:`18 m`,cat:`Mente`,dur:`1 minuto`,e:`O herói arremessa uma moeda que brilha a até 18 m. Criaturas a até 9 m dela que a vejam fazem Teste de Integridade (Espírito) ou ficam distraídas por 1 minuto: Desvantagem em Percepção e em iniciativa.`,lv:2,n:`Distração Luminosa`,t:[`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`9 m`,cat:`Criação`,dur:`Instantâneo`,e:`Leva 10 minutos. Um espírito em forma de montaria surge (cavalo, camelo, lobo grande, etc.), com Lógica 6, elo telepático e capacidade de receber poderes que o herói usa em si mesmo enquanto a até 1,5 m. Dura até cair a 0 PV ou ser dispensada; o herói pode invocá-la de novo.`,lv:2,n:`Montaria Leal`,t:[],tempo:`10 minutos`},{alc:`18 m`,area:`Esfera de 3 m`,cat:`Entropia`,dur:`Instantâneo`,e:`Esfera de 3 m. Cada criatura escolhida faz Teste de Integridade (Resistência): 2d6 de Dano Necrótico na falha, metade no sucesso. Plantas não mágicas na área murcham. Uma criatura escolhida na área pode gastar uma Matriz de Vitalidade para recuperar PV.`,lv:2,n:`Ciclo Vital`,sigma:`2d6 de Dano Necrótico`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d6 por Nível de Poder acima de 2.`},{alc:`18 m`,area:`Cubo de 1,5 m`,cat:`Criação`,dur:`1 minuto`,e:`Cubo de 1,5 m de lâminas giratórias. Quem entra pela primeira vez no turno ou começa o turno nele faz Teste de Integridade (Reflexos) ou sofre 4d4 de Dano Cortante.`,lv:2,n:`Nuvem de Lâminas`,sigma:`4d4 de Dano Cortante`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`,up:`+2d4 por Nível de Poder acima de 2.`},{alc:`Toque`,cat:`Transformação`,dur:`1 hora`,e:`Um objeto de até 5 kg fica fixo no lugar por 1 hora, sustentando até 2 toneladas. Uma senha ou criatura escolhida pode movê-lo. Teste de Parâmetro (Potência) contra a CD de Poder move o objeto 3 m.`,lv:2,n:`Trava Cinética`,t:[],tempo:`Ação`},{alc:`9 m`,cat:`Energia`,dur:`Instantâneo`,e:`Leva 10 minutos. Até seis criaturas Recuperam 2d8 + Parâmetro de poder em PV.`,lv:2,n:`Regeneração em Grupo`,t:[],tempo:`10 minutos`,up:`+1d8 por Nível de Poder acima de 2.`},{alc:`18 m`,cat:`Mente`,dur:`1 minuto`,e:`Um humanoide faz Teste de Integridade (Espírito) ou fica paralisado. Repete o teste ao fim de cada turno.`,lv:2,n:`Paralisia Neural`,t:[`Κ`,`Ν`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`+1 alvo por Nível de Poder acima de 2.`,upN:1},{alc:`Pessoal`,cat:`Criação`,dur:`Instantâneo`,e:`O herói se teleporta até 9 m para um espaço livre que vê.`,lv:2,n:`Salto Quântico`,t:[],tempo:`Ação Rápida`},{alc:`Pessoal`,cat:`Proteção`,dur:`1 hora`,e:`Por até 1 hora, o herói e aliados escolhidos a até 9 m dele ganham +10 em Teste de Reflexos (Furtividade) e não deixam rastros, exceto por meios de poder.`,lv:2,n:`Furtividade Coletiva`,t:[`Κ`],tempo:`Ação`},{alc:`Toque`,cat:`Transformação`,dur:`1 hora`,e:`A pele da criatura tocada fica como casca: a CA dela não pode ser menor que 16, independentemente da armadura.`,lv:2,n:`Pele Blindada`,t:[`Κ`,`Ψ`],tempo:`Ação`},{alc:`18 m`,area:`Cubo de 1,5 m`,cat:`Transformação`,dur:`Instantâneo`,e:`Afeta uma chama visível num cubo de 1,5 m, que se apaga. O herói escolhe um efeito:

- **Fogos de artifício:** criaturas a até 3 m fazem Teste de Integridade (Resistência) ou ficam cegas até o fim do próximo turno do herói.
- **Fumaça:** nuvem de 6 m de raio que bloqueia visão por 1 minuto.`,lv:2,n:`Pirotecnia`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`},{alc:`Toque`,cat:`Entropia`,dur:`10 dias`,e:`Ritual. Um cadáver tocado não apodrece nem pode virar morto-vivo por 10 dias. Esse tempo não conta no prazo de poderes de ressurreição.`,lv:2,n:`Estase`,t:[`Τ`],tempo:`Ação · Τ ritual`},{alc:`Pessoal`,cat:`Percepção`,dur:`Instantâneo`,e:`Ritual. O herói pergunta sobre uma Ação que fará nos próximos 30 minutos e recebe um sinal: bem, mal, bem e mal, ou nada. Cada uso extra antes de uma Recuperação tem 25% de chance cumulativa de resposta aleatória.`,lv:2,n:`Pressentimento`,t:[`Τ`],tempo:`1 minuto · Τ ritual`},{alc:`Pessoal (cone 9 m)`,area:`Cone 9 m`,cat:`Criação`,dur:`Instantâneo`,e:`Cone de 9 m. Cada criatura faz Teste de Integridade (Resistência). Falha: 3d8 de Dano de Frio e Deslocamento 0 por 1 minuto; repete o teste ao fim de cada turno. Sucesso: metade do dano e Deslocamento à metade até o próximo turno.`,lv:2,n:`Prisão Criogênica`,sigma:`3d8 de Dano de Frio`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 2.`},{alc:`Toque`,cat:`Proteção`,dur:`1 hora`,e:`Neutraliza um veneno que afete a criatura tocada. Por 1 hora, ela tem Vantagem em Testes de Integridade contra ficar envenenada e Resistência a Dano de Veneno.`,lv:2,n:`Antitoxina`,t:[],tempo:`Ação`},{alc:`36 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dano:`2d6 de Dano de Fogo`,dur:`Instantâneo`,e:`Três raios de fogo, cada um com Jogada de Ataque de Poder à Distância: 2d6 de Dano de Fogo por acerto. Podem mirar um ou vários alvos.`,lv:2,n:`Raios Térmicos`,t:[],tempo:`Ação`,up:`+1 raio por Nível de Poder acima de 2.`},{alc:`18 m`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Entropia`,dur:`1 minuto`,e:`Jogada de Ataque de Poder à Distância. Acerto: o alvo causa só metade do dano com ataques que usam Potência até o poder terminar. Repete Teste de Integridade (Resistência) ao fim de cada turno para encerrar.`,lv:2,n:`Raio Debilitante`,t:[`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`36 m`,area:`Cilindro de 1,5 m de raio e 12 m de altura`,cat:`Energia`,dur:`1 minuto`,e:`Cilindro de 1,5 m de raio e 12 m de altura. Quem entra nele pela primeira vez no turno ou começa o turno nele faz Teste de Integridade (Resistência): 2d10 de Dano Radiante na falha, metade no sucesso. Metamorfos têm Desvantagem e voltam à forma original se falharem. Com Ação, o herói move o raio 18 m.`,lv:2,n:`Feixe Lunar`,sigma:`2d10 de Dano Radiante`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Resistência`,up:`+1d10 por Nível de Poder acima de 2.`},{alc:`Pessoal (linha 18 m)`,area:`Linha 18 m`,cat:`Energia`,dur:`1 minuto`,e:`Linha de 18 m por 3 m de largura. Cada criatura que começa o turno nela faz Teste de Integridade (Potência) ou é empurrada 4,5 m para longe do herói. Mover-se contra o vento custa o dobro. Dispersa gás e apaga chamas expostas. Com Ação Rápida, muda a direção.`,lv:2,n:`Rajada de Vento`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Potência`},{alc:`9 m`,area:`Linha de 9 m`,cat:`Energia`,dur:`Instantâneo`,e:`Linha de 9 m. Cada criatura faz Teste de Integridade (Reflexos): 3d8 de Dano de Fogo na falha, metade no sucesso.`,lv:2,n:`Rajada Escaldante`,sigma:`3d8 de Dano de Fogo`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d8 por Nível de Poder acima de 2.`},{alc:`18 m`,area:`Cilindro de 1,5 m de raio e 9 m de altura`,cat:`Criação`,dur:`1 minuto`,e:`Cilindro de 1,5 m de raio e 9 m de altura. Quem entra ou começa o turno nele faz Teste de Integridade (Potência): falha, 1d8 de Dano de Concussão e é empurrado 3 m; criaturas Médias ou menores podem ficar presas dentro (impedidas). Com Ação Rápida, o herói o move 9 m.`,lv:2,n:`Redemoinho`,sigma:`1d8 de Dano de Concussão`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Potência`,up:`+1d8 por Nível de Poder acima de 2.`},{alc:`9 m`,cat:`Proteção`,dur:`8 horas`,e:`Por 8 horas, até três criaturas ganham +5 PV máximos e atuais.`,lv:2,n:`Reforço Vital`,t:[],tempo:`Ação`,up:`+5 por Nível de Poder acima de 2.`},{alc:`Toque`,cat:`Proteção`,dur:`Instantâneo`,e:`Encerra uma doença ou uma condição na criatura tocada: cego, surdo, paralisado ou envenenado.`,lv:2,n:`Purificar Condição`,t:[],tempo:`Ação`},{alc:`Pessoal`,cat:`Transformação`,dur:`1 minuto`,e:`Enquanto durar, +3 m de Deslocamento, o movimento não provoca Contra-ataques e o herói atravessa o espaço de criaturas hostis como terreno difícil.`,lv:2,n:`Corrida Cinética`,t:[`Κ`],tempo:`Ação Rápida`},{alc:`Pessoal`,cat:`Percepção`,dur:`1 minuto`,e:`Por até 1 minuto, o herói sente portais, fendas dimensionais e distorções de poder a até 9 m e a direção deles.`,lv:2,n:`Sentir Anomalias`,t:[`Κ`],tempo:`Ação`},{alc:`Toque`,cat:`Percepção`,dur:`1 hora`,e:`Ritual. Por até 1 hora, o herói usa a visão e audição de uma fera voluntária tocada, ficando cego e surdo aos próprios sentidos enquanto o faz (troca com Ação).`,lv:2,n:`Sentidos Emprestados`,t:[`Κ`,`Τ`],tempo:`Ação · Τ ritual`},{alc:`36 m`,area:`Esfera de 6 m de raio`,cat:`Ilusão`,dur:`10 minutos`,e:`Esfera de 6 m de raio sem som. Quem está dentro fica surdo, é Imune a Dano de Trovão e não pode ativar poderes que exigem palavras.`,lv:2,n:`Zona de Silêncio`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`Toque`,area:`Cone de 4,5 m`,cat:`Transformação`,dur:`1 minuto`,e:`A criatura tocada pode, com Ação, soprar um cone de 4,5 m: cada criatura faz Teste de Integridade (Reflexos), 3d6 do tipo escolhido (ácido, elétrico, fogo, frio ou veneno) na falha, metade no sucesso.`,lv:2,n:`Sopro Elemental`,t:[`Θ`,`Κ`],tempo:`Ação Rápida`,teste:`Reflexos`,up:`+1d6 por Nível de Poder acima de 2.`},{alc:`9 m`,cat:`Mente`,dur:`8 horas`,e:`Uma criatura que entenda o herói faz Teste de Integridade (Espírito) ou segue uma sugestão razoável de até duas frases enquanto o poder durar (até 8 horas). Sugestões claramente danosas a ela falham. Termina se o herói ou aliados a ferirem.`,lv:2,n:`Sugestão`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`18 m`,area:`Cubo de 6 m`,cat:`Criação`,dur:`1 hora`,e:`Cubo de 6 m de teia, terreno difícil e área de visão parcialmente bloqueada. Quem começa o turno nela ou entra nela faz Teste de Integridade (Reflexos) ou fica impedido. Com Ação, testa Potência contra a CD de Poder para se soltar. A teia queima: cubos de 1,5 m expostos ao fogo somem em 1 rodada, causando 2d4 de Dano de Fogo.`,lv:2,n:`Teia`,sigma:`2d4 de Dano de Fogo`,t:[`Θ`,`Κ`,`Ψ`],tempo:`Ação`,teste:`Reflexos`},{alc:`Toque`,cat:`Proteção`,dur:`Até ser dissipado`,e:`Uma porta, janela, baú ou passagem fica trancada até ser dissipada. Criaturas escolhidas abrem normalmente. A CD para arrombar sobe 10. Abrir Trancas suprime o lacre por 10 minutos.`,lv:2,n:`Lacre Energético`,t:[`Ψ`],tempo:`Ação`},{alc:`18 m`,area:`Cubo de 3 m`,cat:`Mente`,dur:`1 minuto`,e:`Cubo de 3 m. Cada criatura nele faz Teste de Integridade (Espírito); role 1d4 para quem falhar:

- **1:** dominada.
- **2:** cega.
- **3:** terreno difícil e Desvantagem em Reflexos.
- **4:** incapacitada de rir.

Repete o teste ao fim de cada turno.`,lv:2,n:`Caos Travesso`,t:[`Θ`,`Κ`,`Ψ`,`Ξ`],tempo:`Ação`,teste:`Espírito`},{alc:`Pessoal`,cat:`Energia`,dur:`10 minutos`,e:`Vento forte de 3 m ao redor do herói, com estes efeitos:

- Ensurdece quem está dentro.
- Apaga chamas pequenas e dispersa gás.
- Torna a área terreno difícil para outros.
- Dá Desvantagem a Jogadas de Ataque à Distância que passem por ele.`,lv:2,n:`Muralha de Ar`,t:[`Κ`],tempo:`Ação`},{alc:`Pessoal`,cat:`Percepção`,dur:`1 hora`,e:`Por 1 hora, o herói vê criaturas e objetos invisíveis como se fossem visíveis, e enxerga o Plano Etéreo.`,lv:2,n:`Ver o Invisível`,t:[],tempo:`Ação`},{alc:`Toque`,cat:`Transformação`,dur:`8 horas`,e:`Por 8 horas, a criatura tocada enxerga no escuro até 18 m.`,lv:2,n:`Visão Noturna`,t:[],tempo:`Ação`},{alc:`18 m`,area:`Esfera de 4,5 m`,cat:`Mente`,dur:`10 minutos`,e:`Esfera de 4,5 m por 10 minutos. Quem entra ou começa o turno nela faz Teste de Integridade (Magnetismo) ou não consegue mentir deliberadamente. O herói sabe quem passou ou falhou. Quem está afetado pode se recusar a responder ou ser evasivo.`,lv:2,n:`Zona da Verdade`,t:[`Θ`,`Ψ`],tempo:`Ação`,teste:`Magnetismo`},{alc:`Pessoal (3 m)`,cat:`Energia`,dur:`8 horas`,e:`Ritual. Domo de força de 3 m de raio ao redor do herói por 8 horas, que abriga até nove criaturas Médias. Criaturas e objetos de fora não atravessam; quem está dentro sai e entra livremente. Mantém o interior a temperatura confortável e pode ser opaco por dentro. Termina se o herói sair.`,lv:3,n:`Domo de Força`,t:[`Τ`,`Ψ`],tempo:`1 minuto · Τ ritual`},{alc:`9 m`,cat:`Transformação`,dur:`1 minuto`,e:`Uma criatura voluntária dobra o Deslocamento, ganha +2 na CA, Vantagem em Testes de Integridade (Reflexos) e uma Ação extra por turno (só para um ataque com arma, Disparar, Recuar, Esconder ou Usar Objeto). Quando o poder termina, ela não pode se mover nem agir até depois do próximo turno.`,lv:3,n:`Supervelocidade`,t:[`Κ`],tempo:`Ação`},{alc:`9 m`,cat:`Mente`,dur:`1 hora`,e:`Um humanoide faz Teste de Integridade (Espírito) ou fica dominado e faz, com boa vontade, tarefas pedidas pelo herói enquanto durar. Se o herói ou aliados o ferirem, ou pedirem algo suicida, o efeito termina.`,lv:3,n:`Influência Imediata`,t:[`Κ`,`Ν`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`+1 alvo por Nível de Poder acima de 3.`,upN:1},{alc:`9 m`,cat:`Transformação`,dur:`1 hora`,e:`Ritual. Por 1 hora, até dez criaturas andam sobre qualquer líquido (inclusive ácido e lava, mas ainda sofrem o calor) como se fosse chão firme.`,lv:3,n:`Andar sobre a Água`,t:[`Τ`],tempo:`Ação · Τ ritual`},{alc:`Toque`,cat:`Transformação`,dur:`1 hora`,e:`Uma arma tocada ganha +1 em ataque e causa +1d4 de Dano de Ácido, elétrico, fogo, frio ou trovão (à escolha).`,lv:3,n:`Arma Elemental`,t:[`Κ`],tempo:`Ação`,up:`+2 e +2d4 em NP 5–6, +3 e +3d4 em NP 7+.`},{alc:`Pessoal (9 m)`,area:`Aura de 9 m`,cat:`Energia`,dur:`1 minuto`,e:`Aura de 9 m. Em cada turno, com Ação Rápida, uma criatura na aura recupera 2d6 PV.`,lv:3,n:`Aura Revigorante`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`45 m`,area:`Esfera de 6 m de raio`,cat:`Energia`,dur:`Instantâneo`,e:`Esfera de 6 m de raio num ponto a até 45 m. Cada criatura faz Teste de Integridade (Reflexos): 8d6 de Dano de Fogo na falha, metade no sucesso. Incendeia objetos inflamáveis soltos e contorna esquinas.`,lv:3,n:`Bola de Fogo`,sigma:`8d6 de Dano de Fogo`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d6 por Nível de Poder acima de 3.`},{alc:`3 m`,area:`Cilindro de 3 m de raio e 6 m de altura`,cat:`Proteção`,dur:`1 hora`,e:`Leva 1 minuto. Cilindro de 3 m de raio e 6 m de altura por 1 hora, contra aberrações, celestiais, elementais, fadas, infernais ou mortos-vivos (à escolha). O herói escolhe a orientação:

- **Para fora:** essas criaturas não entram nem afetam quem está dentro.
- **Para dentro:** prende quem estiver nele; Teste de Integridade (Magnetismo) para sair.`,lv:3,n:`Perímetro de Contenção`,t:[`Θ`],tempo:`1 minuto`,teste:`Magnetismo`,up:`+1 hora por Nível de Poder acima de 3.`},{alc:`1,5 km`,cat:`Percepção`,dur:`10 minutos`,e:`Leva 10 minutos. Cria um sensor invisível num local conhecido a até 1,5 km. O herói vê ou ouve (escolha; troca com Ação) através dele por até 10 minutos.`,lv:3,n:`Clarividência`,t:[`Κ`],tempo:`10 minutos`},{alc:`12 m`,cat:`Mente`,dur:`10 minutos`,e:`Até três criaturas voluntárias caem num sono mágico por 10 minutos e, ao acordar, recebem os benefícios de uma Pausa. Dano ou uma Ação de outra criatura as acorda antes.`,lv:3,n:`Recarga Rápida`,t:[`Ν`,`Ψ`],tempo:`Ação`,up:`+1 alvo por Nível de Poder acima de 3.`,upN:1},{alc:`18 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dano:`1d10 + Parâmetro de poder perfurante`,dur:`1 hora`,e:`Espíritos animais surgem em espaços livres: um grupo de feras ferozes. Bloco do espírito: CA 11 + Nível de Poder, PV 30 + 10 por Nível de Poder acima de 3, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Ataque: 1d10 + Parâmetro de poder perfurante ou cortante. Têm Vantagem quando um aliado está a até 1,5 m do alvo.`,lv:3,n:`Matilha Espiritual`,t:[`Κ`],tempo:`Ação`,up:`O bloco cresce como indicado.`},{alc:`18 m`,cat:`Proteção`,dur:`Instantâneo`,e:`Reação ao ver uma criatura a até 18 m ativar um poder. Se for de Nível de Poder 3 ou menor, ele falha. Se for maior, faça um teste do Parâmetro de poder contra CD 10 + valor do Nível de Poder do alvo; sucesso, ele falha.`,lv:3,n:`Contrapoder`,t:[],tempo:`Reação`,up:`Anula automaticamente poderes de Nível de Poder igual ou menor ao usado.`},{alc:`36 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dano:`1d12 + 3 + Nível de Poder de Dano de Frio`,dur:`1 hora`,e:`Um espírito de sombra surge, ligado a uma emoção (fúria, desespero ou medo). Bloco do espírito: CA 11 + Nível de Poder, PV 30 + 10 por Nível de Poder acima de 3, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Ataque: 1d12 + 3 + Nível de Poder de Dano de Frio. Cada emoção dá um efeito:

- **Fúria:** Vantagem contra amedrontados.
- **Desespero:** reduz o Deslocamento do alvo em 6 m.
- **Medo:** pode se teleportar 4,5 m e se esconder na penumbra.`,lv:3,n:`Invocar Sombra Viva`,t:[`Κ`],tempo:`Ação`},{alc:`18 m`,cat:`Criação`,dano:`1d8 + 2 de Dano Cortante`,dur:`1 hora`,e:`Role 1d6 para quantos demônios menores surgem (2 a cada resultado par, 1 a cada ímpar). Bloco: CA 12, 13 PV, Deslocamento 9 m, ataque +4, 1d8 + 2 de Dano Cortante. São hostis a todos e agem como grupo no fim do turno do herói. Se o herói consumir sangue num círculo, eles não o atravessam.`,lv:3,n:`Abrir Fenda Infernal`,t:[`Κ`],tempo:`Ação`,up:`Dobra o número em NP 6 e triplica em NP 8.`},{alc:`27 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dano:`2d6 + 3 + Nível de Poder de Dano de Energia`,dur:`1 hora`,e:`Um espírito feérico surge (furioso, alegre ou traiçoeiro). Bloco do espírito: CA 11 + Nível de Poder, PV 30 + 10 por Nível de Poder acima de 3, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Ataque: 2d6 + 3 + Nível de Poder de Dano de Energia. Pode se teleportar 9 m com Ação Rápida e, ao fazê-lo, ganha um efeito conforme o tipo:

- **Furioso:** Vantagem no próximo ataque.
- **Alegre:** domina (Espírito) por 1 rodada.
- **Traiçoeiro:** cria escuridão de 1,5 m.`,lv:3,n:`Invocar Espírito Feérico`,t:[`Κ`],tempo:`Ação`},{alc:`27 m`,area:`Aura de 1,5 m`,atq:`Jogada de Ataque de Poder`,cat:`Entropia`,dur:`1 hora`,e:`Um espírito morto-vivo surge (fantasma, pútrido ou esquelético). Bloco do espírito: CA 11 + Nível de Poder, PV 30 + 10 por Nível de Poder acima de 3, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Cada forma tem seus traços:

- **Fantasma:** atravessa objetos; 1d8 + 3 + Nível de Poder de Dano Necrótico e amedronta (Espírito).
- **Pútrido:** aura de 1,5 m que envenena (Resistência); 1d6 + 3 + Nível de Poder de Dano Cortante, paralisa alvos envenenados.
- **Esquelético:** Jogada de Ataque à Distância de 2d4 + 3 + Nível de Poder de Dano Necrótico.`,lv:3,n:`Invocar Espectro`,sigma:`1d8 + 3 + Nível de Poder de Dano Necrótico + 1d6 + 3 + Nível de Poder de Dano Cortante`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`45 m`,cat:`Transformação`,dur:`Instantâneo`,e:`O efeito depende do tempo de ativação:

- **Com uma Ação:** plantas num raio de 30 m ficam densas, e cada 1,5 m percorrido custa 6 m.
- **Com 8 horas:** plantas num raio de 800 m ficam viçosas e rendem o dobro na próxima colheita.`,lv:3,n:`Crescimento Acelerado`,t:[],tempo:`Ação ou 8 horas`},{alc:`9 m`,cat:`Criação`,dur:`Instantâneo`,e:`Cria comida simples e 120 litros de água limpa, o bastante para 15 humanoides ou 5 montarias por 24 horas. A comida estraga em 24 horas.`,lv:3,n:`Sintetizar Suprimentos`,t:[],tempo:`Ação`},{alc:`18 m`,cat:`Mente`,dur:`1 hora`,e:`Leva 1 minuto. Por 1 hora, até cinco criaturas que ouviram ganham 5 PV temporários e Vantagem em Testes de Integridade (Espírito). Ao recuperarem PV, recebem o máximo da rolagem.`,lv:3,n:`Discurso Inspirador`,t:[`Ψ`],tempo:`1 minuto`,up:`+5 PV temporários por Nível de Poder acima de 3.`},{alc:`36 m`,cat:`Proteção`,dur:`Instantâneo`,e:`Encerra um poder ativo numa criatura, objeto ou área a até 36 m. Se for de Nível de Poder 3 ou menor, termina automaticamente. Se for maior, faça um teste do Parâmetro de poder contra CD 10 + valor do Nível de Poder do alvo.`,lv:3,n:`Neutralizar Poder`,t:[`Ψ`],tempo:`Ação`,up:`Dissipa automaticamente poderes de Nível de Poder igual ou menor ao usado.`},{alc:`36 m`,area:`Cubo de 6 m`,cat:`Transformação`,dur:`Instantâneo`,e:`Cubo de 6 m no chão. Cada criatura nele faz Teste de Integridade (Reflexos): 3d12 de Dano de Concussão na falha, metade no sucesso. A área vira terreno difícil até ser limpa.`,lv:3,n:`Erupção Sísmica`,sigma:`3d12 de Dano de Concussão`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d12 por Nível de Poder acima de 3.`},{alc:`3 m`,cat:`Entropia`,dur:`10 minutos`,e:`Um cadáver que ainda tem boca responde até cinco perguntas em 10 minutos, com o que sabia em vida. Respostas curtas e às vezes enigmáticas. Não funciona no mesmo corpo de novo por 10 dias.`,lv:3,n:`Eco dos Mortos`,t:[],tempo:`Ação`},{alc:`Pessoal`,cat:`Transformação`,dur:`10 minutos`,e:`Por 10 minutos, o herói conversa com plantas, que relatam o que viram no último dia, e pode pedir que abram caminho (terreno difícil vira normal, ou o contrário).`,lv:3,n:`Linguagem Vegetal`,t:[],tempo:`Ação`},{alc:`9 m`,cat:`Proteção`,dur:`1 minuto`,e:`Criaturas escolhidas a até 9 m têm Vantagem em Testes de Integridade (Espírito) e Testes de Estabilização, e Recuperam o máximo possível de PV quando Curadas.`,lv:3,n:`Farol de Esperança`,t:[`Κ`],tempo:`Ação`},{alc:`Toque`,cat:`Entropia`,dur:`1 hora`,e:`Ritual. Uma criatura voluntária parece morta a qualquer exame por 1 hora. Fica cega e incapacitada, com Deslocamento 0, resistência a todo dano exceto psíquico, e doenças e venenos ficam suspensos. Pode encerrar com uma Ação.`,lv:3,n:`Morte Aparente`,t:[`Τ`,`Ψ`],tempo:`Ação · Τ ritual`},{alc:`Pessoal`,area:`Raio de 3 m ao redor do alvo`,cat:`Transformação`,dur:`1 minuto`,e:`A próxima Jogada de Ataque à Distância com arma vira um raio: faça o ataque; acerto, 4d8 de Dano Elétrico; erro, metade. Depois, cada criatura a até 3 m do alvo faz Teste de Integridade (Reflexos): 2d8 de Dano Elétrico na falha, metade no sucesso.`,lv:3,n:`Disparo Elétrico`,sigma:`4d8 de Dano Elétrico + 2d8 de Dano Elétrico`,t:[`Θ`,`Κ`],tempo:`Ação Rápida`,teste:`Reflexos`,up:`+1d8 em ambos por Nível de Poder acima de 3.`},{alc:`Toque`,cat:`Transformação`,dano:`1d6 de Dano de Fogo`,dur:`1 hora`,e:`Até 12 munições tocadas causam +1d6 de Dano de Fogo ao acertar, até serem usadas ou o poder terminar.`,lv:3,n:`Munição Incendiária`,t:[`Κ`],tempo:`Ação`,up:`+2 munições por Nível de Poder acima de 3.`},{alc:`45 m`,area:`Esfera de 6 m`,cat:`Criação`,dur:`1 minuto`,e:`Esfera de 6 m de vazio escuro e gelado: área escura que nem visão no escuro atravessa, terreno difícil. Quem começa o turno nela sofre 2d6 de Dano de Frio. Quem termina o turno nela faz Teste de Integridade (Reflexos) ou sofre 2d6 de Dano de Ácido.`,lv:3,n:`Fome do Vazio`,sigma:`2d6 de Dano de Frio + 2d6 de Dano de Ácido`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`Toque`,cat:`Transformação`,dur:`1 hora`,e:`Uma criatura voluntária vira névoa com o que carrega: voo de 3 m, Resistência a Dano não especial, Vantagem em Testes de Integridade (Potência, Reflexos e Resistência) e passa por frestas. Não fala, não ataca nem ativa poderes.`,lv:3,n:`Forma Gasosa`,t:[`Κ`],tempo:`Ação`},{alc:`9 m`,cat:`Proteção`,dur:`1 hora`,e:`Uma criatura voluntária ganha Resistência a Dano de Psíquico e Vantagem em Testes de Integridade (Lógica, Espírito e Magnetismo).`,lv:3,n:`Fortaleza Mental`,t:[`Κ`,`Ν`,`Ψ`],tempo:`Ação`,up:`+1 alvo por Nível de Poder acima de 3.`,upN:1},{alc:`Toque`,cat:`Transformação`,dano:`6d6 de Dano de Concussão`,dur:`8 horas`,e:`Ritual. O herói entra numa pedra grande o bastante com o equipamento, por até 8 horas. Ouve o que acontece fora, mas não vê. Sai com o movimento. Danos menores à pedra não o afetam; destruí-la o expulsa com 6d6 de Dano de Concussão.`,lv:3,n:`Fusão com a Pedra`,t:[`Τ`],tempo:`Ação · Τ ritual`},{alc:`Toque`,cat:`Proteção`,dur:`Até ser dissipado`,e:`Leva 1 hora. Inscreve um glifo quase invisível (Investigação contra a CD de Poder) numa superfície ou objeto. Ao inscrevê-lo, o herói escolhe o que acontece quando a condição definida o dispara:

- **Explosão:** esfera de 6 m; Teste de Integridade (Reflexos), 5d8 de Dano de Ácido, elétrico, fogo, frio ou trovão, metade no sucesso.
- **Poder guardado:** um poder de até Nível de Poder 3 guardado no glifo.`,lv:3,n:`Mina de Energia`,t:[],tempo:`1 hora`,teste:`Reflexos`,up:`+1d8 por Nível de Poder acima de 3, e o poder guardado pode ser de Nível de Poder igual ao usado.`},{alc:`Pessoal`,cat:`Energia`,dano:`3d8 de Dano Radiante`,dur:`1 minuto`,e:`O próximo acerto com arma causa +3d8 de Dano Radiante e o alvo faz Teste de Integridade (Resistência) ou fica cego enquanto durar; repete o teste ao fim de cada turno.`,lv:3,n:`Golpe Ofuscante`,t:[`Κ`],tempo:`Ação Rápida`,teste:`Resistência`},{alc:`Pessoal (4,5 m)`,area:`Aura de 4,5 m`,cat:`Criação`,dur:`10 minutos`,e:`Aura de 4,5 m. Inimigos têm o Deslocamento reduzido à metade na aura; quando entram nela pela primeira vez no turno ou começam o turno nela, fazem Teste de Integridade (Espírito): 3d8 de Dano Radiante (ou necrótico, à escolha do herói) na falha, metade no sucesso.`,lv:3,n:`Guardiões Espectrais`,sigma:`3d8 de Dano Radiante`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Espírito`,up:`+1d8 por Nível de Poder acima de 3.`},{alc:`Toque`,cat:`Percepção`,dur:`1 hora`,e:`Por 1 hora, a criatura tocada entende qualquer idioma falado que ouça e, ao falar, é entendida por quem conhece ao menos um idioma.`,lv:3,n:`Poliglota`,t:[],tempo:`Ação`},{alc:`36 m`,area:`Cubo de 6 m`,cat:`Ilusão`,dur:`10 minutos`,e:`Ilusão de um objeto, criatura ou fenômeno num cubo de 6 m, com som, cheiro e temperatura. Com uma Ação, o herói a move e muda. Teste de Lógica (Investigação) contra a CD de Poder revela a farsa.`,lv:3,n:`Holograma Total`,t:[`Θ`,`Κ`],tempo:`Ação`,up:`Em NP 6, dura até ser dissipada, sem Concentração.`},{alc:`9 m`,cat:`Mente`,dur:`1 minuto`,e:`Uma ilusão de riquezas num ponto a até 9 m. Criaturas escolhidas a até 9 m dela fazem Teste de Integridade (Espírito) ou ficam fascinadas: no turno delas, movem-se em direção ao tesouro e não fazem mais nada. Repetem o teste quando sofrem dano.`,lv:3,n:`Isca Irresistível`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`Toque`,cat:`Proteção`,dur:`8 horas`,e:`Por 8 horas, uma criatura ou objeto não pode ser alvo de poderes de adivinhação nem visto por sensores mágicos.`,lv:3,n:`Indetectável`,t:[],tempo:`Ação`},{alc:`36 m`,cat:`Mente`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Lógica) ou passa a ver todos como inimigos: ao atacar, escolhe alvos aleatórios entre os que vê, e faz Contra-ataques contra qualquer um. Repete o teste ao fim de cada turno.`,lv:3,n:`Paranoia`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Lógica`},{alc:`36 m`,area:`Raio de 1,5 m ao redor do herói`,cat:`Criação`,dur:`10 minutos`,e:`Nuvem de tempestade num cilindro a 30 m de altura. Ao ativar e com Ação nos turnos seguintes, um raio cai num ponto abaixo: cada criatura a até 1,5 m faz Teste de Integridade (Reflexos), 3d10 de Dano Elétrico na falha, metade no sucesso. Em tempestade natural, +1d10.`,lv:3,n:`Tempestade Elétrica`,sigma:`3d10 de Dano Elétrico`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d10 por Nível de Poder acima de 3.`},{alc:`36 m`,area:`Cubo de 12 m`,cat:`Transformação`,dur:`1 minuto`,e:`Até seis criaturas num cubo de 12 m fazem Teste de Integridade (Espírito). Quem falhar sofre:

- Deslocamento à metade.
- −2 na CA e em Testes de Integridade (Reflexos).
- Nenhuma Reação.
- Só uma Ação ou Ação Rápida por turno (e no máximo um ataque).
- Poderes que ative têm 50% de chance de só sair no turno seguinte.
- Repete o teste ao fim de cada turno.`,lv:3,n:`Campo de Lentidão`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Espírito`},{alc:`18 m`,area:`Esfera de 18 m`,cat:`Energia`,dur:`1 hora`,e:`Esfera de 18 m de luz plena e mais 18 m de penumbra, por 1 hora, num ponto ou objeto. Dissipa escuridão de poder de Nível de Poder 3 ou menor que a toque.`,lv:3,n:`Sol Artificial`,t:[`Θ`],tempo:`Ação`},{alc:`Pessoal (9 m)`,area:`Aura de 9 m`,cat:`Energia`,dur:`1 minuto`,e:`Aura de 9 m. Aliados na aura, inclusive o herói, causam +1d4 de Dano Radiante com ataques com arma.`,lv:3,n:`Aura de Batalha`,sigma:`1d4 de Dano Radiante`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`Pessoal (cone 9 m)`,area:`Cone 9 m`,cat:`Ilusão`,dur:`1 minuto`,e:`Cone de 9 m. Cada criatura faz Teste de Integridade (Espírito) ou larga o que segura, fica amedrontada e, em cada turno, usa o Disparar para se afastar do herói pelo caminho mais seguro. Repete o teste ao fim de cada turno em que não veja o herói.`,lv:3,n:`Onda de Terror`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Espírito`},{alc:`Ilimitado`,cat:`Energia`,dur:`Instantâneo`,e:`Envia até 25 palavras a uma criatura que o herói conheça, em qualquer lugar do mesmo plano. Ela reconhece o herói e pode responder do mesmo modo. Há 5% de chance de falhar se o alvo estiver em outro plano.`,lv:3,n:`Transmissão Mental`,t:[],tempo:`Ação`},{alc:`Pessoal`,area:`Raio de 1,5 m ao redor do ponto`,cat:`Energia`,dur:`10 minutos`,e:`Seis meteoros orbitam o herói. Ao ativar e com Ação Rápida nos turnos seguintes, ele lança até dois contra pontos a até 36 m: cada criatura a até 1,5 m do ponto faz Teste de Integridade (Reflexos), 2d6 de Dano de Fogo na falha, metade no sucesso.`,lv:3,n:`Micrometeoros`,sigma:`2d6 de Dano de Fogo`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`,up:`+2 meteoros por Nível de Poder acima de 3.`},{alc:`9 m`,cat:`Ilusão`,dur:`1 hora`,e:`Ritual de 1 minuto. Uma montaria quase real, com Deslocamento 30 m, surge por 1 hora para uma criatura escolhida. Some se sofrer qualquer dano.`,lv:3,n:`Montaria Holográfica`,t:[`Τ`],tempo:`1 minuto · Τ ritual`},{alc:`Pessoal`,cat:`Entropia`,dano:`1d8 de Dano Radiante`,dur:`1 minuto`,e:`Os ataques do herói contra criaturas a até 3 m causam +1d8 de Dano Radiante, necrótico ou frio, e o alvo não Recupera PV até o início do próximo turno do herói. Inimigos que começam o turno a até 3 m dele perdem 3 m de Deslocamento.`,lv:3,n:`Aura Espectral`,t:[`Κ`],tempo:`Ação Rápida`,up:`+1d8 a cada dois Níveis de Poder acima de 3.`},{alc:`18 m`,area:`Muralha de 9 m de comprimento, 3 m de altura e 30 cm de espessura`,cat:`Energia`,dur:`10 minutos`,e:`Muralha de 9 m de comprimento, 3 m de altura e 30 cm de espessura (ou anel de 6 m de diâmetro), com estes efeitos:

- É terreno difícil.
- Ataques à distância através dela têm Desvantagem.
- Dano de Fogo através dela cai à metade.
- Frio a congela em pedaços.`,lv:3,n:`Muralha de Água`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`27 m`,area:`Muralha de 9 m de comprimento, 3 m de altura e 3 m de espessura`,cat:`Energia`,dur:`10 minutos`,e:`Muralha de 9 m de comprimento, 3 m de altura e 3 m de espessura. Bloqueia a visão, e mover-se dentro dela custa três vezes o normal.`,lv:3,n:`Muralha de Areia`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`36 m`,area:`Muralha de 15 m de comprimento, 4,5 m de altura e 30 cm de espessura`,cat:`Energia`,dur:`1 minuto`,e:`Muralha de 15 m de comprimento, 4,5 m de altura e 30 cm de espessura. Ao surgir, cada criatura nela faz Teste de Integridade (Potência): 3d8 de Dano de Concussão na falha, metade no sucesso. Bloqueia gases, névoa e criaturas voadoras Pequenas; projéteis comuns que a atravessam erram automaticamente.`,lv:3,n:`Muralha de Vento`,sigma:`3d8 de Dano de Concussão`,t:[`Θ`,`Κ`,`Ψ`],tempo:`Ação`,teste:`Potência`},{alc:`27 m`,area:`Esfera de 6 m`,cat:`Criação`,dur:`1 minuto`,e:`Esfera de 6 m de gás fétido, área de visão bloqueada. Quem começa o turno nela faz Teste de Integridade (Resistência) ou perde a Ação nesse turno, nauseado. Vento moderado a dispersa em 4 rodadas.`,lv:3,n:`Gás Nauseante`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal (cone 9 m)`,area:`Cone 9 m`,cat:`Energia`,dur:`Instantâneo`,e:`Cone de 9 m. Cada criatura faz Teste de Integridade (Resistência). Falha: 6d6 de Dano de Energia e é puxada ou empurrada até 4,5 m (escolha do herói). Sucesso: metade, sem movimento.`,lv:3,n:`Onda Gravitacional`,sigma:`6d6 de Dano de Energia`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d6 por Nível de Poder acima de 3.`},{alc:`36 m`,cat:`Criação`,dano:`4d8 de Dano de Concussão`,dur:`Instantâneo`,e:`Onda de 9 m de comprimento, 3 m de largura e 3 m de altura. Cada criatura nela faz Teste de Integridade (Reflexos): falha, 4d8 de Dano de Concussão e fica caída; sucesso, metade. Apaga chamas expostas.`,lv:3,n:`Onda Gigante`,t:[],tempo:`Ação`,teste:`Reflexos`},{alc:`36 m`,area:`Cubo de 9 m`,cat:`Ilusão`,dur:`1 minuto`,e:`Cubo de 9 m. Cada criatura que o veja faz Teste de Integridade (Espírito) ou fica dominada e incapacitada, com Deslocamento 0. Termina para ela se sofrer dano ou alguém usar uma Ação para sacudi-la.`,lv:3,n:`Padrão Hipnótico`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Espírito`},{alc:`18 m`,cat:`Energia`,dur:`Instantâneo`,e:`Até seis criaturas que o herói vê Recuperam 1d4 + Parâmetro de poder em PV.`,lv:3,n:`Impulso Regenerador em Massa`,t:[],tempo:`Ação Rápida`,up:`+1d4 por Nível de Poder acima de 3.`},{alc:`Pessoal`,cat:`Transformação`,dano:`3d6 de Dano de Fogo`,dur:`1 minuto`,e:`+6 m de Deslocamento, e o herói deixa um rastro de fogo. Quem estiver a até 1,5 m dele quando ele passa, ou entra no rastro, faz Teste de Integridade (Reflexos) ou sofre 3d6 de Dano de Fogo (metade no sucesso).`,lv:3,n:`Rastro de Fogo`,t:[`Κ`],tempo:`Ação Rápida`,teste:`Reflexos`,up:`+1d6 por Nível de Poder acima de 3.`},{alc:`27 m`,area:`Raio de 3 m ao redor do herói`,cat:`Criação`,dur:`Instantâneo`,e:`O herói se teleporta até 27 m, levando junto uma criatura voluntária a até 1,5 m. No ponto de saída, cada criatura a até 3 m faz Teste de Integridade (Resistência): 3d10 de Dano de Trovão na falha, metade no sucesso.`,lv:3,n:`Teleporte Sônico`,sigma:`3d10 de Dano de Trovão`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d10 por Nível de Poder acima de 3.`},{alc:`Pessoal`,cat:`Transformação`,dur:`1 minuto`,e:`Por 1 minuto, no fim de cada turno, role 1d20: 11 ou mais, o herói some para o Plano Etéreo e volta no início do próximo turno num espaço livre a até 3 m. Lá, só interage com o etéreo.`,lv:3,n:`Fase Instável`,t:[],tempo:`Ação`},{alc:`Toque`,cat:`Proteção`,dur:`1 hora`,e:`Uma criatura ganha resistência a um tipo à escolha: ácido, elétrico, fogo, frio ou trovão.`,lv:3,n:`Proteção Elemental`,t:[`Κ`],tempo:`Ação`},{alc:`9 m`,cat:`Mente`,dano:`4d4 de Dano de Psíquico`,dur:`Instantâneo`,e:`Uma criatura faz Teste de Integridade (Espírito): falha, 4d4 de Dano de Psíquico e ela usa a Reação para fazer uma Jogada de Ataque Corpo a Corpo contra uma criatura escolhida pelo herói a seu alcance; sucesso, metade do dano.`,lv:3,n:`Ataque Forçado`,t:[`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`+1d4 por Nível de Poder acima de 3.`},{alc:`3 m`,cat:`Entropia`,dur:`Instantâneo`,e:`Leva 1 minuto. Um cadáver ou ossada vira um zumbi ou esqueleto sob comando por 24 horas:

- **Esqueleto:** CA 13, 13 PV, ataque +4, 1d6 + 2.
- **Zumbi:** CA 8, 22 PV, ataque +3, 1d6 + 1; ao cair a 0 PV, faz Teste de Resistência (CD 5 + dano) para ficar com 1 PV.

O herói pode reativar para manter até quatro.`,lv:3,n:`Reanimar Cadáveres`,t:[],tempo:`1 minuto`,up:`+2 servos por Nível de Poder acima de 3.`},{alc:`Pessoal (linha 30 m)`,area:`Linha 30 m`,cat:`Energia`,dur:`Instantâneo`,e:`Linha de 30 m por 1,5 m. Cada criatura faz Teste de Integridade (Reflexos): 8d6 de Dano Elétrico na falha, metade no sucesso.`,lv:3,n:`Relâmpago`,sigma:`8d6 de Dano Elétrico`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d6 por Nível de Poder acima de 3.`},{alc:`Toque`,cat:`Proteção`,dur:`Instantâneo`,e:`Encerra todas as maldições que afetem uma criatura ou objeto tocado. Um item amaldiçoado continua amaldiçoado, mas o vínculo com o portador é rompido.`,lv:3,n:`Quebrar Maldição`,t:[],tempo:`Ação`},{alc:`9 m`,cat:`Transformação`,dur:`24 horas`,e:`Ritual. Por 24 horas, até dez criaturas respiram debaixo d'água e continuam respirando normalmente.`,lv:3,n:`Respiração Aquática`,t:[`Τ`,`Ψ`],tempo:`Ação · Τ ritual`},{alc:`Toque`,cat:`Entropia`,dur:`Instantâneo`,e:`Uma criatura que morreu no último minuto volta à vida com 1 PV. Não funciona em morte por velhice nem repõe partes do corpo.`,lv:3,n:`Desfibrilação`,t:[],tempo:`Ação`},{alc:`Toque`,cat:`Entropia`,dano:`1d8 de Dano Necrótico`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Espírito) ou fica amaldiçoada. O herói escolhe um efeito:

- Desvantagem em Testes de Parâmetro e de Integridade de um Parâmetro.
- Desvantagem em ataques contra o herói.
- +1d8 de Dano Necrótico sempre que o herói a acerta.
- Teste de Integridade (Espírito) em cada turno para não perder a Ação.`,lv:3,n:`Maldição Profunda`,t:[`Κ`],tempo:`Ação`,teste:`Espírito`,up:`Em NP 4, Concentração até 10 minutos; em NP 5, 8 horas; em NP 7, 24 horas; em NP 9, permanente e sem Concentração.`},{alc:`Pessoal (cone 18 m)`,area:`Cone 18 m`,cat:`Criação`,dur:`Instantâneo`,e:`Cone de 18 m. Um projétil se multiplica: cada criatura na área faz Teste de Integridade (Reflexos), 3d8 do tipo da arma na falha, metade no sucesso. Gasta uma munição.`,lv:3,n:`Saraivada`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`},{alc:`Toque`,cat:`Transformação`,dano:`1d4 + 2 de Dano de Concussão`,dur:`8 horas`,e:`Leva 1 minuto. Um objeto Miúdo vira um servo por 8 horas: CA 15, 10 PV, Deslocamento 9 m, ataque +4, 1d4 + 2 de Dano de Concussão. Obedece a comandos dados com Ação Rápida.`,lv:3,n:`Microdrone Servo`,t:[],tempo:`1 minuto`,up:`+2 objetos por Nível de Poder acima de 3.`},{alc:`45 m`,area:`Cilindro de 12 m de raio e 6 m de altura`,cat:`Criação`,dur:`1 minuto`,e:`Cilindro de 12 m de raio e 6 m de altura. Área parcialmente bloqueada e terreno difícil. Quem começa o turno nela faz Teste de Integridade (Reflexos) ou fica caído. Chamas expostas se apagam e quem ativa poderes nela faz Teste de Integridade (Resistência) contra a CD de Poder ou perde a Concentração.`,lv:3,n:`Tempestade de Gelo`,t:[`Θ`,`Κ`,`Ψ`],tempo:`Ação`,teste:`Reflexos / Resistência`},{alc:`Pessoal`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Entropia`,dano:`3d6 de Dano Necrótico`,dur:`1 minuto`,e:`Ao ativar e com Ação nos turnos seguintes, Jogada de Ataque de Poder Corpo a Corpo: 3d6 de Dano Necrótico, e o herói Recupera metade do dano causado.`,lv:3,n:`Toque Vampírico`,t:[`Κ`],tempo:`Ação`,up:`+1d6 por Nível de Poder acima de 3.`},{alc:`9 m`,cat:`Criação`,dur:`24 horas`,e:`Leva 10 minutos. Uma torre de energia sólida de dois andares, cada um 6 por 6 m, com portas, janelas e escada, surge por 24 horas. Paredes com CA 15 e 30 PV por seção de 3 m.`,lv:3,n:`Torre de Força`,t:[],tempo:`10 minutos`},{alc:`9 m`,cat:`Entropia`,dano:`4d8 de Dano Necrótico`,dur:`Instantâneo`,e:`O herói sofre 4d8 de Dano Necrótico, que não pode ser reduzido, e uma criatura a até 9 m Recupera o dobro do dano sofrido.`,lv:3,n:`Transferência Vital`,t:[],tempo:`Ação`,up:`+1d8 por Nível de Poder acima de 3.`},{alc:`Toque`,cat:`Transformação`,dur:`10 minutos`,e:`Uma criatura voluntária ganha Deslocamento de voo de 18 m. Se o poder terminar em pleno ar, ela cai.`,lv:3,n:`Voo`,t:[`Κ`,`Ν`],tempo:`Ação`,up:`+1 alvo por Nível de Poder acima de 3.`,upN:1},{alc:`Pessoal`,cat:`Percepção`,dur:`Instantâneo`,e:`Ritual. Uma pergunta sobre um objetivo, evento ou atividade dos próximos 7 dias recebe resposta verdadeira, curta ou enigmática. Cada uso extra antes de uma Recuperação tem 25% de chance cumulativa de não responder.`,lv:4,n:`Precognição`,t:[`Τ`],tempo:`Ação · Τ ritual`},{alc:`36 m`,cat:`Ilusão`,dano:`4d10 de Dano de Psíquico`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Espírito) ou fica amedrontada por uma ilusão do seu maior medo. Ao fim de cada turno dela, repete o teste: falha, 4d10 de Dano de Psíquico; sucesso, o poder termina.`,lv:4,n:`Pesadelo Vivo`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`+1d10 por Nível de Poder acima de 4.`},{alc:`Pessoal (9 m)`,area:`Aura de 9 m`,cat:`Proteção`,dur:`10 minutos`,e:`Aura de 9 m. Aliados nela não podem contrair doenças, têm Resistência a Dano de Veneno e Vantagem em Testes de Integridade contra ficar cegos, dominados, surdos, amedrontados, paralisados, envenenados ou atordoados.`,lv:4,n:`Aura de Pureza`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`Pessoal (9 m)`,area:`Aura de 9 m`,cat:`Proteção`,dur:`10 minutos`,e:`Aura de 9 m. Aliados nela têm Resistência a Dano Necrótico e seu máximo de PV não pode ser reduzido. Um aliado com 0 PV que começa o turno na aura Recupera 1 PV.`,lv:4,n:`Aura Vital`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`18 m`,cat:`Proteção`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Magnetismo) ou é enviada a um semiplano inofensivo, onde fica incapacitada. Se for de outro plano e o poder durar o tempo todo, não volta. Do contrário, retorna ao espaço de onde saiu quando o poder termina.`,lv:4,n:`Exílio Dimensional`,t:[`Κ`,`Ν`],tempo:`Ação`,teste:`Magnetismo`,up:`+1 alvo por Nível de Poder acima de 4.`,upN:1},{alc:`Toque`,cat:`Criação`,dur:`Instantâneo`,e:`Exige um baú e uma réplica miniatura dele. Envia o baú (com até 3 m³ de conteúdo) para um espaço extradimensional; com uma Ação, tocando a réplica, o herói o traz de volta. Depois de 60 dias, há 5% de chance cumulativa por dia de o baú se perder.`,lv:4,n:`Cofre Dimensional`,t:[],tempo:`Ação`},{alc:`9 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dano:`4d8 de Dano Perfurante`,dur:`8 horas`,e:`Um cão espectral invisível guarda um ponto por 8 horas. Late para intrusos que chegam a até 9 m e enxerga o invisível. Quando um inimigo começa o turno a até 1,5 m, morde: ataque com a Jogada de Ataque de Poder do herói, 4d8 de Dano Perfurante.`,lv:4,n:`Sentinela Espectral`,t:[],tempo:`Ação`},{alc:`9 m`,cat:`Mente`,dur:`1 minuto`,e:`Criaturas escolhidas fazem Teste de Integridade (Espírito). Enquanto durar, com Ação Rápida o herói escolhe uma direção, e cada alvo que falhou usa todo o movimento seguindo-a, sem ir para perigo óbvio. Repete o teste depois de se mover.`,lv:4,n:`Compulsão`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`27 m`,area:`Esfera de 3 m`,cat:`Mente`,dur:`1 minuto`,e:`Esfera de 3 m. Cada criatura faz Teste de Integridade (Espírito) ou age aleatoriamente. Repete o teste ao fim de cada turno. No início de cada turno dela, role 1d10:

- **1:** se move numa direção aleatória.
- **2–6:** não faz nada.
- **7–8:** ataca uma criatura aleatória ao alcance.
- **9–10:** age normalmente.`,lv:4,n:`Colapso Mental`,t:[`Θ`,`Κ`,`Ψ`,`Ξ`],tempo:`Ação`,teste:`Espírito`,up:`+1,5 m de raio por Nível de Poder acima de 4.`},{alc:`27 m`,area:`Aura de 4,5 m`,cat:`Criação`,dur:`1 hora`,e:`Leva 1 minuto. Espíritos elementais (ar, terra, fogo ou água) envolvem o herói numa aura de 4,5 m. Inimigos na aura têm Deslocamento reduzido em 4,5 m; quando o herói acerta um ataque contra criatura na aura, causa +2d8 do tipo correspondente (concussão, concussão, fogo ou frio).`,lv:4,n:`Aura Elemental`,t:[`Θ`,`Κ`],tempo:`1 minuto`,up:`+1d8 por Nível de Poder acima de 4.`},{alc:`18 m`,area:`Aura de 3 m`,cat:`Criação`,dur:`1 hora`,e:`Espíritos feéricos surgem como aura de 3 m ao redor do herói. Ele pode, com Ação Rápida, se teleportar 3 m. Inimigos que entram na aura ou começam o turno nela fazem Teste de Integridade (Espírito): 5d8 de Dano de Energia na falha, metade no sucesso.`,lv:4,n:`Aura Feérica`,sigma:`5d8 de Dano de Energia`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Espírito`,up:`+1d8 por Nível de Poder acima de 4.`},{alc:`90 m`,area:`Cubo de 30 m`,cat:`Transformação`,dur:`10 minutos`,e:`Controla água num cubo de 30 m. Com Ação, escolha:

- **Inundar:** o nível sobe 6 m.
- **Dividir:** abre uma passagem.
- **Redirecionar:** muda o fluxo.
- **Redemoinho:** cria um vórtice de 15 m que prende e causa 2d8 de Dano de Concussão por turno (Teste de Integridade (Potência) para escapar).`,lv:4,n:`Hidrocinese`,sigma:`2d8 de Dano de Concussão`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Potência`},{alc:`27 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dano:`1d10 + 3 + Nível de Poder de Dano de Psíquico + 1d10 + 3 + Nível de Poder de Dano Cortante`,dur:`1 hora`,e:`Um espírito aberrante surge (olho flutuante, sugador de mentes ou cria estelar). Bloco do espírito: CA 11 + Nível de Poder, PV 40 + 10 por Nível de Poder acima de 4, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Conforme a forma:

- **Olho flutuante:** raio psíquico de 1d8 + 3 + Nível de Poder a 45 m, voo 6 m.
- **Sugador de mentes:** tentáculos de 1d10 + 3 + Nível de Poder de Dano de Psíquico e o alvo não faz Reações.
- **Cria estelar:** garras de 1d10 + 3 + Nível de Poder de Dano Cortante, e criaturas que começam o turno a até 1,5 m sofrem 1d6 de Dano de Psíquico.`,lv:4,n:`Invocar Aberração`,t:[`Κ`,`Ψ`],tempo:`Ação`},{alc:`27 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dano:`1d8 + 4 + Nível de Poder de Dano de Concussão + 1d10 de Dano de Fogo`,dur:`1 hora`,e:`Um constructo surge (argila, metal ou pedra). Bloco do espírito: CA 11 + Nível de Poder, PV 40 + 10 por Nível de Poder acima de 4, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Golpe: 1d8 + 4 + Nível de Poder de Dano de Concussão. Resistência a Dano de Veneno e imune a dominado e amedrontado. Conforme o material:

- **Argila:** ao sofrer dano, ataca o agressor como Reação.
- **Metal:** quem o acerta corpo a corpo sofre 1d10 de Dano de Fogo.
- **Pedra:** inimigos a até 3 m têm Deslocamento reduzido à metade.`,lv:4,n:`Construir Golem`,t:[`Κ`],tempo:`Ação`},{alc:`18 m`,cat:`Criação`,dano:`2d8 + 4 de Dano Cortante`,dur:`1 hora`,e:`Um demônio poderoso surge: CA 15, 80 PV, Deslocamento 12 m, dois ataques por turno (+7, 2d8 + 4 de Dano Cortante). Obedece ao herói se ele usar o próprio nome do demônio. Ao fim de cada turno do demônio, faz Teste de Integridade (Magnetismo) contra a CD de Poder; falha, liberta-se e age por conta própria, hostil a todos. Um círculo de sangue o contém.`,lv:4,n:`Invocar Demônio`,t:[`Κ`],tempo:`Ação`,teste:`Magnetismo`,up:`+20 PV e +1 no ataque por Nível de Poder acima de 4.`},{alc:`27 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dano:`1d10 de Dano de Fogo`,dur:`1 hora`,e:`Um espírito elemental surge (ar, terra, fogo ou água). Bloco do espírito: CA 11 + Nível de Poder, PV 40 + 10 por Nível de Poder acima de 4, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Golpe: 1d10 + 4 + Nível de Poder do tipo correspondente. Conforme o elemento:

- **Ar:** voo 12 m, sem Contra-ataques.
- **Terra:** escava, Resistência a Dano físico.
- **Fogo:** quem o acerta corpo a corpo sofre 1d10 de Dano de Fogo.
- **Água:** nado 12 m, o golpe derruba (Potência).`,lv:4,n:`Invocar Elemental`,t:[`Κ`],tempo:`Ação`},{alc:`9 m`,cat:`Entropia`,dano:`8d8 de Dano Necrótico`,dur:`Instantâneo`,e:`Uma criatura faz Teste de Integridade (Resistência): 8d8 de Dano Necrótico na falha, metade no sucesso. Plantas e criaturas vegetais têm Desvantagem e sofrem o máximo de dano. Não afeta mortos-vivos nem constructos.`,lv:4,n:`Drenagem Vital`,t:[],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 4.`},{alc:`18 m`,cat:`Mente`,dur:`1 minuto`,e:`Uma fera faz Teste de Integridade (Espírito) (Vantagem se estiver em combate com o herói) ou fica dominada e obedece a comandos telepáticos simples. Com uma Ação, o herói controla diretamente a Ação dela. Sempre que sofre dano, repete o teste.`,lv:4,n:`Dominar Fera`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`Concentração até 10 minutos em NP 5, 1 hora em NP 6, 8 horas em NP 7+.`},{alc:`9 m`,cat:`Mente`,dur:`1 hora`,e:`Uma criatura de qualquer tipo faz Teste de Integridade (Espírito) (Vantagem se estiver em combate com o herói) ou fica dominada e o trata como amigo por 1 hora. Ao terminar, sabe que foi dominada.`,lv:4,n:`Fascínio Total`,t:[`Ν`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`+1 alvo por Nível de Poder acima de 4.`,upN:1},{alc:`Pessoal`,cat:`Energia`,dano:`2d8 de Dano de Fogo`,dur:`10 minutos`,e:`Por 10 minutos, o herói emite luz e tem Resistência a Dano de Frio (escudo quente) ou fogo (escudo frio). Quem o acerta com Jogada de Ataque Corpo a Corpo a até 1,5 m sofre 2d8 de Dano de Fogo (quente) ou frio (frio).`,lv:4,n:`Escudo Térmico`,t:[],tempo:`Ação`},{alc:`27 m`,cat:`Criação`,dur:`1 minuto`,e:`Esfera de água de 3 m de raio. Cada criatura Grande ou menor na área faz Teste de Integridade (Potência) ou fica presa dentro dela: impedida, sem ar e com Desvantagem. Com Ação, testa Potência contra a CD de Poder para sair. Com Ação, o herói move a esfera 9 m. Ao terminar, quem está preso cai.`,lv:4,n:`Esfera Aquática`,t:[`Κ`],tempo:`Ação`,teste:`Potência`},{alc:`45 m`,area:`Esfera de 6 m`,cat:`Energia`,dur:`Instantâneo`,e:`Esfera de 6 m. Cada criatura faz Teste de Integridade (Reflexos): falha, 10d4 de Dano de Ácido imediato e 5d4 de Dano de Ácido no fim do próximo turno dela; sucesso, metade do imediato e nada depois.`,lv:4,n:`Esfera Corrosiva`,sigma:`10d4 de Dano de Ácido + 5d4 de Dano de Ácido`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+2d4 no imediato por Nível de Poder acima de 4.`},{alc:`45 m`,area:`Esfera de 6 m de raio`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dur:`1 minuto`,e:`Esfera de 6 m de raio. Quem termina o turno nela faz Teste de Integridade (Potência) ou sofre 2d6 de Dano de Concussão. A área é terreno difícil. Com Ação Rápida, o herói dispara um raio de dentro da esfera: Jogada de Ataque de Poder à Distância, 4d6 de Dano Elétrico, com Vantagem se o alvo estiver na esfera.`,lv:4,n:`Esfera de Tempestade`,sigma:`2d6 de Dano de Concussão + 4d6 de Dano Elétrico`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Potência`,up:`+1d6 em ambos por Nível de Poder acima de 4.`},{alc:`9 m`,cat:`Energia`,dur:`1 minuto`,e:`Uma criatura Grande ou menor faz Teste de Integridade (Reflexos) ou fica presa numa esfera de força. Nada entra nem sai, inclusive poderes. Quem está dentro pode rolá-la à metade do Deslocamento. Desintegrar a destrói.`,lv:4,n:`Bolha de Força`,t:[`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`18 m`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Entropia`,dano:`3d8 + 3 + Nível de Poder de Dano Necrótico`,dur:`1 hora`,e:`Um ceifador espectral surge a até 18 m. Ao ativar e com Ação Rápida nos turnos seguintes, move-se 9 m e ataca: Jogada de Ataque de Poder Corpo a Corpo, 3d8 + 3 + Nível de Poder de Dano Necrótico. Quem estiver a até 3 m dele faz Teste de Integridade (Espírito) no início do turno ou fica amedrontado. CA 15, 40 PV + 10 por Nível de Poder acima de 4.`,lv:4,n:`Ceifador Espectral`,t:[`Κ`],tempo:`Ação`,teste:`Espírito`},{alc:`36 m`,cat:`Transformação`,dur:`Instantâneo`,e:`Leva 10 minutos. Transforma matéria-prima num produto da mesma substância: tecido em roupa, madeira em ponte, minério em ferramentas, num cubo de até 3 m (ou 1,5 m de metal ou pedra). Itens que exigem grande perícia requerem proficiência com as ferramentas correspondentes.`,lv:4,n:`Fabricação Instantânea`,t:[],tempo:`10 minutos`},{alc:`Pessoal`,cat:`Energia`,dano:`4d6 de Dano de Psíquico`,dur:`1 minuto`,e:`O próximo acerto com arma causa +4d6 de Dano de Psíquico e o alvo faz Teste de Integridade (Espírito) ou fica desnorteado (Desvantagem em ataques e testes, sem Reações) até o fim do próximo turno dele.`,lv:4,n:`Golpe Atordoante`,t:[`Κ`,`Ψ`],tempo:`Ação Rápida`,teste:`Espírito`},{alc:`9 m`,cat:`Criação`,dur:`8 horas`,e:`Um guardião espectral Grande fica num espaço por 8 horas. Inimigos que entram a até 3 m dele pela primeira vez no turno fazem Teste de Integridade (Reflexos): 20 radiante na falha, metade no sucesso. O guardião some após causar 60 de dano no total.`,lv:4,n:`Guardião Radiante`,t:[],tempo:`Ação`,teste:`Reflexos`},{alc:`Pessoal`,cat:`Transformação`,dano:`1d6 de Dano de Energia`,dur:`1 minuto`,e:`Escolha uma forma:

- **Fera Primal:** +3 m de Deslocamento, visão no escuro de 36 m, Vantagem em Testes de Parâmetro (Potência) e ataques com arma causam +1d6 de Dano de Energia.
- **Grande Árvore:** 10 PV temporários, Vantagem em Testes de Parâmetro (Resistência) e em ataques com Reflexos ou Espírito, e o terreno a até 3 m vira difícil para inimigos.`,lv:4,n:`Avatar Natural`,t:[`Κ`],tempo:`Ação Rápida`},{alc:`9 m`,cat:`Transformação`,dano:`1d8 + 3 de Dano Perfurante + 2d6 de Dano de Veneno`,dur:`10 minutos`,e:`Até dez centopeias, três aranhas, cinco vespas ou um escorpião viram versões gigantes por até 10 minutos e obedecem ao herói. Use o bloco: CA 13, 15 PV, Deslocamento 9 m, ataque +5, 1d8 + 3 de Dano Perfurante e Teste de Integridade (Resistência) contra veneno (2d6 de Dano de Veneno na falha).`,lv:4,n:`Insetos Gigantes`,t:[`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`Toque`,cat:`Ilusão`,dur:`1 minuto`,e:`A criatura tocada fica invisível enquanto durar, mesmo atacando ou ativando poderes.`,lv:4,n:`Invisibilidade Total`,t:[`Κ`],tempo:`Ação`},{alc:`36 m`,cat:`Mente`,dano:`7d6 de Dano de Psíquico`,dur:`Instantâneo`,e:`Uma criatura que o herói vê, ou nomeia e sabe estar no alcance, faz Teste de Integridade (Lógica). Falha: 7d6 de Dano de Psíquico e fica incapacitada até o fim do próximo turno dela. Sucesso: metade do dano.`,lv:4,n:`Lança Psíquica`,t:[`Ψ`],tempo:`Ação`,teste:`Lógica`,up:`+1d6 por Nível de Poder acima de 4.`},{alc:`Toque`,cat:`Proteção`,dur:`1 hora`,e:`Por 1 hora, a criatura tocada ignora terreno difícil, poderes não podem reduzir seu Deslocamento nem paralisá-la ou impedi-la, escapa de agarrões e correntes gastando 1,5 m de movimento e não sofre penalidades debaixo d'água.`,lv:4,n:`Movimento Livre`,t:[],tempo:`Ação`},{alc:`Pessoal`,cat:`Percepção`,dur:`1 hora`,e:`Por até 1 hora, o herói sente a direção de uma criatura que conhece (ou da mais próxima de um tipo) a até 300 m. Água corrente de 3 m de largura bloqueia. Não encontra quem esteja sob outra forma.`,lv:4,n:`Rastreamento`,t:[`Κ`],tempo:`Ação`},{alc:`Pessoal`,cat:`Entropia`,dano:`2d8 de Dano Necrótico`,dur:`1 minuto`,e:`Sombras envolvem o herói. Ele fica em penumbra, tem Resistência a Dano Radiante e, quando uma criatura a até 1,5 m o acerta, ela sofre 2d8 de Dano Necrótico. Também tem Vantagem em Furtividade.`,lv:4,n:`Manto de Sombras`,t:[`Κ`],tempo:`Ação`},{alc:`3 m`,cat:`Criação`,dur:`10 minutos`,e:`Um espírito leva um baú ou pacote de até 50 kg a uma criatura conhecida, em qualquer lugar do mesmo plano. Ela recebe o pacote e pode mandar algo de volta pelo mesmo espírito no prazo de 10 minutos.`,lv:4,n:`Entrega Dimensional`,t:[],tempo:`Ação`},{alc:`18 m`,cat:`Transformação`,dur:`1 hora`,e:`Uma criatura faz Teste de Integridade (Espírito) (voluntários podem falhar) ou vira uma fera de tamanho e poder equivalentes ao nível dela (o Mestre define o bloco). Usa os PV da nova forma; ao chegar a 0, volta ao normal com os PV que tinha. Não fala nem ativa poderes. Metamorfos não são afetados.`,lv:4,n:`Metamorfose Animal`,t:[`Κ`],tempo:`Ação`,teste:`Espírito`},{alc:`Toque`,cat:`Transformação`,dur:`Instantâneo`,e:`Um bloco de pedra de até 1,5 m em cada dimensão ganha qualquer forma: uma arma, uma estátua, uma passagem na parede, uma porta selada. Peças móveis simples (dobradiças) são possíveis.`,lv:4,n:`Geocinese`,t:[],tempo:`Ação`},{alc:`9 m`,cat:`Criação`,dur:`Instantâneo`,e:`Leva 10 minutos. Invoca uma montaria espiritual poderosa (grifo, pégaso, felino gigante ou lobo enorme): CA 14, 60 PV, Deslocamento 12 m (voo 18 m se alada), ataque +6, 2d8 + 4. Elo telepático; poderes que o herói usa em si mesmo também afetam a montaria. Pode ser invocada de novo.`,lv:4,n:`Montaria Suprema`,t:[],tempo:`10 minutos`},{alc:`36 m`,area:`Muralha de 18 m de comprimento, 6 m de altura e 30 cm`,cat:`Energia`,dur:`1 minuto`,e:`Muralha de 18 m de comprimento, 6 m de altura e 30 cm (ou anel de 6 m de diâmetro). Ao surgir, cada criatura nela faz Teste de Integridade (Reflexos): 5d8 de Dano de Fogo na falha, metade no sucesso. Um lado (à escolha) causa 5d8 de Dano de Fogo a quem termina o turno a até 3 m dele ou dentro. Bloqueia a visão.`,lv:4,n:`Muralha de Fogo`,sigma:`5d8 de Dano de Fogo`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d8 por Nível de Poder acima de 4.`},{alc:`9 m`,cat:`Percepção`,dur:`1 hora`,e:`Um olho invisível flutua por até 1 hora, com visão no escuro de 9 m. Com Ação, o herói o move 9 m e vê o que ele vê. Passa por frestas de 2,5 cm.`,lv:4,n:`Olho Espião`,t:[`Κ`],tempo:`Ação`},{alc:`Toque`,cat:`Proteção`,dur:`1 hora`,e:`A criatura tocada tem Resistência a Dano físico (concussão, cortante e perfurante) não especial enquanto durar.`,lv:4,n:`Pele de Pedra`,t:[`Κ`],tempo:`Ação`},{alc:`36 m`,area:`Esfera de 6 m de raio`,cat:`Energia`,dur:`Instantâneo`,e:`Esfera de 6 m de raio. Cada criatura faz Teste de Integridade (Resistência): falha, 5d10 de Dano de Energia e é puxada até o centro; sucesso, metade e não é puxada. Objetos soltos também são puxados.`,lv:4,n:`Poço Gravitacional`,sigma:`5d10 de Dano de Energia`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d10 por Nível de Poder acima de 4.`},{alc:`150 m`,cat:`Criação`,dano:`4d6 de Dano de Energia`,dur:`Instantâneo`,e:`O herói se teleporta até 150 m para um local que vê ou descreve ("200 m para o norte"), levando uma criatura voluntária a até 1,5 m. Se o destino estiver ocupado, ambos sofrem 4d6 de Dano de Energia e o poder falha.`,lv:4,n:`Porta Dimensional`,t:[],tempo:`Ação`},{alc:`Toque`,cat:`Proteção`,dur:`8 horas`,e:`Por 8 horas, na primeira vez que a criatura tocada cairia a 0 PV, ela fica com 1 PV. Se um efeito a matasse instantaneamente sem dano, ele é anulado. O poder então termina.`,lv:4,n:`Última Chance`,t:[`Ψ`],tempo:`Ação`},{alc:`36 m`,area:`Esfera de 9 m`,cat:`Energia`,dur:`10 minutos`,e:`Esfera de 9 m de luz doentia. Quem entra ou começa o turno nela faz Teste de Integridade (Resistência): falha, 4d10 de Dano Radiante, 1 nível de Exaustão e emite luz; sucesso, metade. A Exaustão sai quando o poder termina.`,lv:4,n:`Radiação`,sigma:`4d10 de Dano Radiante`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`36 m`,cat:`Proteção`,dur:`24 horas`,e:`Leva 10 minutos. Protege um cubo de até 30 m por 24 horas. Escolha efeitos:

- Som não atravessa os limites.
- Os limites são escuros e enevoados (não se vê dentro).
- Sensores não entram.
- Não se teleporta para dentro ou para fora.
- Viagem planar bloqueada.`,lv:4,n:`Bunker Blindado`,t:[],tempo:`10 minutos`,up:`+30 m de lado por Nível de Poder acima de 4.`},{alc:`27 m`,cat:`Transformação`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Resistência). Falha: escolha ácido, elétrico, fogo, frio ou trovão; ela perde resistência a esse tipo e, na primeira vez em cada turno que sofrer dano dele, sofre +2d6.`,lv:4,n:`Vulnerabilidade Elemental`,t:[`Κ`,`Ν`],tempo:`Ação`,teste:`Resistência`,up:`+1 alvo por Nível de Poder acima de 4.`,upN:1},{alc:`18 m`,area:`Cubo de 9 m`,cat:`Proteção`,dur:`24 horas`,e:`Por até 24 horas, um portal a até 18 m fica fechado ou não pode ser aberto, e ninguém entra ou sai de um cubo de 9 m por teleporte ou viagem planar.`,lv:4,n:`Selar Fenda`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`90 m`,area:`Cilindro de 6 m de raio e 12 m de altura`,cat:`Energia`,dur:`Instantâneo`,e:`Cilindro de 6 m de raio e 12 m de altura. Cada criatura faz Teste de Integridade (Reflexos): 2d8 de Dano de Concussão e 4d6 de Dano de Frio na falha, metade no sucesso. A área vira terreno difícil até o fim do próximo turno do herói.`,lv:4,n:`Nevasca`,sigma:`2d8 de Dano de Concussão + 4d6 de Dano de Frio`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d8 de Dano de Concussão por Nível de Poder acima de 4.`},{alc:`27 m`,area:`Quadrado de 6 m`,cat:`Criação`,dur:`1 minuto`,e:`Quadrado de 6 m de tentáculos, terreno difícil. Quem entra nele pela primeira vez no turno ou começa o turno nele faz Teste de Integridade (Reflexos): falha, 3d6 de Dano de Concussão e fica impedido. Quem começa o turno impedido sofre 3d6. Com Ação, testa Potência ou Reflexos contra a CD de Poder para se soltar.`,lv:4,n:`Tentáculos Sombrios`,sigma:`3d6 de Dano de Concussão`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`90 m`,cat:`Ilusão`,dur:`24 horas`,e:`Leva 10 minutos. Até 45 m de terreno natural parecem outro tipo (campo vira pântano, estrada vira penhasco), com sons e cheiros. Estruturas e criaturas não mudam. Investigação contra a CD de Poder revela.`,lv:4,n:`Terreno Holográfico`,t:[],tempo:`10 minutos`},{alc:`9 m`,cat:`Criação`,dur:`1 minuto`,e:`Uma vinha surge a até 9 m. Quando ativada e com Ação Rápida nos turnos seguintes, ela mira uma criatura a até 9 m: Teste de Integridade (Reflexos) ou é puxada 6 m em direção à vinha.`,lv:4,n:`Vinha Agarradora`,t:[`Κ`],tempo:`Ação Rápida`,teste:`Reflexos`},{alc:`Toque`,cat:`Transformação`,dur:`1 minuto`,e:`Enquanto durar, a aljava ou carregador tocado fornece munição comum infinita (cada disparo some ao acertar) e, em cada turno, o herói pode fazer dois Jogadas de Ataque à Distância com arma usando uma Ação Rápida.`,lv:5,n:`Munição Infinita`,t:[`Κ`],tempo:`Ação Rápida`},{alc:`36 m`,cat:`Transformação`,dur:`1 minuto`,e:`Até dez objetos soltos Miúdos ganham vida (um Pequeno conta como dois, Médio como quatro, Grande como oito). Com Ação Rápida, o herói comanda quantos quiser. Estatísticas por tamanho:

- **Miúdo:** CA 18, 20 PV, ataque +8, 1d4 + 4.
- **Pequeno:** CA 16, 25 PV, +6, 1d8 + 2.
- **Médio:** CA 13, 40 PV, +5, 2d6 + 1.
- **Grande:** CA 10, 50 PV, +6, 2d10 + 2.`,lv:5,n:`Animar Objetos`,t:[`Κ`],tempo:`Ação`,up:`+2 objetos por Nível de Poder acima de 5.`},{alc:`9 m`,cat:`Ilusão`,dur:`8 horas`,e:`Por 8 horas, qualquer número de criaturas que o herói vê muda de aparência (ilusão): até 30 cm de altura, rosto, roupas. Quem não quiser faz Teste de Integridade (Magnetismo). Tocar ou Investigação contra a CD de Poder revela.`,lv:5,n:`Disfarce em Massa`,t:[],tempo:`Ação`,teste:`Magnetismo`},{alc:`Toque`,cat:`Energia`,dano:`2d8 de Dano Radiante + 4d8 de Dano Radiante`,dur:`1 hora`,e:`Uma arma tocada emite luz plena de 9 m e causa +2d8 de Dano Radiante ao acertar. Com Ação Rápida, o portador pode encerrar o poder numa explosão: criaturas escolhidas a até 9 m fazem Teste de Integridade (Resistência), 4d8 de Dano Radiante e cegas por 1 minuto na falha, metade e sem cegueira no sucesso.`,lv:5,n:`Arma Radiante`,t:[`Κ`],tempo:`Ação Rápida`,teste:`Resistência`},{alc:`9 m`,cat:`Transformação`,dur:`1 hora`,e:`Uma passagem de 1,5 m de largura, 2,5 m de altura e até 6 m de profundidade se abre em madeira, pedra ou gesso por 1 hora. Quem estiver dentro quando o poder terminar é expelido para o espaço livre mais próximo.`,lv:5,n:`Passagem`,t:[],tempo:`Ação`},{alc:`18 m`,area:`Cilindro de 9 m de raio e 12 m de altura`,cat:`Energia`,dur:`1 minuto`,e:`Cilindro de 9 m de raio e 12 m de altura de luz solar. Ao surgir e quando uma criatura termina o turno nele, ela faz Teste de Integridade (Resistência): 4d10 de Dano Radiante na falha, metade no sucesso. Com Ação Rápida, o herói o move 18 m. Dissipa escuridão de Nível de Poder 4 ou menor.`,lv:5,n:`Aurora`,sigma:`4d10 de Dano Radiante`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal (3 m)`,area:`Domo de 3 m`,cat:`Proteção`,dur:`1 hora`,e:`Domo de 3 m ao redor do herói, que se move com ele. Criaturas vivas (exceto mortos-vivos e constructos) não conseguem entrar nem estender partes do corpo para dentro, mas podem atacar à distância e ativar poderes através dele. Se o herói empurrar uma criatura com a barreira, ela termina.`,lv:5,n:`Barreira Repulsora`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`Pessoal`,cat:`Criação`,dur:`1 minuto`,e:`Por até 1 minuto, o herói entra numa árvore viva e sai de outra do mesmo tipo a até 150 m, gastando 1,5 m de movimento. Pode fazer isso uma vez por turno.`,lv:5,n:`Trânsito Arbóreo`,t:[`Κ`],tempo:`Ação`},{alc:`27 m`,cat:`Criação`,dano:`2d8 + 4 de Dano Cortante + 1d8 de Dano de Fogo`,dur:`1 hora`,e:`Leva 1 minuto. Um diabo surge: CA 16, 90 PV, Deslocamento 9 m (voo 12 m), dois ataques por turno (+8, 2d8 + 4 de Dano Cortante e 1d8 de Dano de Fogo). Obedece se o herói tiver o talismã dele; do contrário, age por conta própria e não ataca o herói só se o achar útil.`,lv:5,n:`Pacto Infernal`,t:[`Κ`],tempo:`1 minuto`,up:`+20 PV e +1 no ataque por Nível de Poder acima de 5.`},{alc:`Pessoal (9 m)`,area:`Aura de 9 m`,cat:`Proteção`,dur:`10 minutos`,e:`Aura de 9 m. Aliados nela têm Vantagem em Testes de Integridade contra poderes e, quando passam num Teste de Integridade que reduziria o dano à metade, não sofrem dano nenhum.`,lv:5,n:`Campo de Resistência`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`3 m`,cat:`Criação`,dur:`1 rodada`,e:`Leva 1 minuto. Desenha um círculo de 3 m que se liga a um círculo permanente cuja sequência de símbolos o herói conhece, no mesmo plano. Um portal fica aberto até o fim do próximo turno; qualquer um que entre aparece no destino.`,lv:5,n:`Portal de Transporte`,t:[],tempo:`1 minuto`},{alc:`18 m`,area:`Cilindro de 3 m de raio e 12 m de altura`,cat:`Energia`,dur:`Instantâneo`,e:`Cilindro de 3 m de raio e 12 m de altura. Cada criatura faz Teste de Integridade (Reflexos): 4d6 de Dano de Fogo e 4d6 de Dano Radiante na falha, metade no sucesso.`,lv:5,n:`Coluna de Plasma`,sigma:`4d6 de Dano de Fogo + 4d6 de Dano Radiante`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d6 de Dano de Fogo ou radiante (escolha) por Nível de Poder acima de 5.`},{alc:`Pessoal`,cat:`Percepção`,dur:`1 minuto`,e:`Ritual. Por 1 minuto, o herói faz até três perguntas de sim ou não à fonte do seu poder. As respostas são verdadeiras, mas a fonte pode não saber tudo ("incerto"). Cada uso extra antes de uma Recuperação tem 25% de chance cumulativa de não responder.`,lv:5,n:`Consulta à Fonte`,t:[`Τ`],tempo:`1 minuto · Τ ritual`},{alc:`Pessoal`,cat:`Percepção`,dur:`Instantâneo`,e:`Ritual. O herói conhece até três fatos sobre o terreno a até 5 km (4,5 m no subsolo): água, plantas, minerais, criaturas poderosas, influências estranhas, construções.`,lv:5,n:`Leitura Ambiental`,t:[`Τ`],tempo:`1 minuto · Τ ritual`},{alc:`Pessoal (cone 18 m)`,area:`Cone 18 m`,cat:`Energia`,dur:`Instantâneo`,e:`Cone de 18 m. Cada criatura faz Teste de Integridade (Resistência): 8d8 de Dano de Frio na falha, metade no sucesso. Quem morrer vira estátua de gelo.`,lv:5,n:`Cone Criogênico`,sigma:`8d8 de Dano de Frio`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 5.`},{alc:`Pessoal`,cat:`Percepção`,dur:`Instantâneo`,e:`Leva 10 minutos. O herói aprende lendas e fatos importantes sobre uma pessoa, lugar ou objeto famoso. Quanto mais ele já souber, mais detalhada a informação.`,lv:5,n:`Arquivo Lendário`,t:[],tempo:`10 minutos`},{alc:`27 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dur:`1 hora`,e:`Leva 1 minuto. Um elemental de grande porte surge (ar, terra, fogo ou água). Bloco do espírito: CA 11 + Nível de Poder, PV 50 + 10 por Nível de Poder acima de 5, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Golpe: 2d10 + 4 + Nível de Poder do tipo correspondente. Se o herói perder a Concentração, o elemental fica livre e hostil por 1 hora.`,lv:5,n:`Elemental Colossal`,t:[`Κ`],tempo:`1 minuto`},{alc:`Toque`,cat:`Energia`,dur:`Até ser dissipado`,e:`Leva 24 horas. Consagra (ou profana) uma área de até 18 m de raio, até ser dissipada. Aberrações, celestiais, elementais, fadas, infernais ou mortos-vivos (à escolha) não entram, não dominam nem possuem quem está dentro. Acrescente um efeito:

- Coragem.
- Escuridão.
- Luz do dia.
- Proteção contra energia.
- Vulnerabilidade a Dano de Energia.
- Descanso eterno.
- Língua comum.
- Silêncio.
- Medo.`,lv:5,n:`Santuário Permanente`,t:[],tempo:`24 horas`},{alc:`Toque`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Entropia`,dur:`7 dias`,e:`Jogada de Ataque de Poder Corpo a Corpo. Acerto: o alvo fica envenenado. No fim de cada turno, faz Teste de Integridade (Resistência); com três falhas, contrai a doença escolhida pelo herói por 7 dias (Desvantagem num Parâmetro ou cegueira, à escolha); com três sucessos, se Recupera.`,lv:5,n:`Vírus`,t:[],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal`,cat:`Percepção`,dano:`6d6 de Dano de Psíquico`,dur:`1 minuto`,e:`Ritual. Faz até cinco perguntas a uma entidade de outro plano. Antes, Teste de Integridade (Lógica) (CD 15): falha, 6d6 de Dano de Psíquico e o herói fica incapacitado até uma Recuperação. Sucesso: respostas curtas e verdadeiras (sim, não, talvez, não sei, irrelevante).`,lv:5,n:`Contato Dimensional`,t:[`Τ`,`Ψ`],tempo:`1 minuto · Τ ritual`,teste:`Lógica`},{alc:`90 m`,area:`Cubo de 30 m`,cat:`Transformação`,dur:`1 hora`,e:`Controla o ar num cubo de 30 m. Com Ação, escolha:

- **Rajadas:** Deslocamento contra o vento à metade, Desvantagem em Jogadas de Ataque à Distância.
- **Corrente ascendente:** quedas mais lentas, voo para cima mais rápido.
- **Corrente descendente:** voo para cima custa o dobro, criaturas voadoras caem 3 m por turno.`,lv:5,n:`Aerocinese`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`27 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dur:`1 hora`,e:`Um espírito celestial surge (vingador ou defensor). Bloco do espírito: CA 11 + Nível de Poder, PV 50 + 10 por Nível de Poder acima de 5, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Voo 12 m. Uma vez, com Ação Rápida, Cura 2d8 + Nível de Poder de uma criatura a até 1,5 m. Conforme a forma:

- **Vingador:** arco radiante de 2d6 + 2 + Nível de Poder a 45 m.
- **Defensor:** maça radiante de 1d10 + 3 + Nível de Poder, +2 na CA.`,lv:5,n:`Invocar Celestial`,t:[`Κ`],tempo:`Ação`},{alc:`18 m`,area:`Cone de 9 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dur:`1 hora`,e:`Um espírito dracônico Grande surge, de um tipo de energia escolhido (ácido, elétrico, fogo, frio ou veneno). Bloco do espírito: CA 11 + Nível de Poder, PV 50 + 10 por Nível de Poder acima de 5, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Voo 18 m. Mordida de 1d6 + 4 + Nível de Poder. Uma vez, sopro em cone de 9 m: Teste de Integridade (Reflexos), 2d6 + Nível de Poder do tipo, metade no sucesso. O herói e o espírito ganham resistência ao tipo escolhido.`,lv:5,n:`Invocar Dragão Espiritual`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`9 m`,cat:`Ilusão`,dur:`Especial`,e:`Leva 1 minuto. Cria um objeto de matéria vegetal (madeira, tecido) ou mineral (pedra, cristal, metal) num cubo de até 1,5 m. Não serve como componente de poder. Dura conforme o material:

- **Vegetal:** 1 dia.
- **Pedra:** 12 horas.
- **Metais preciosos:** 1 hora.
- **Gemas:** 10 minutos.
- **Metais raros:** 1 minuto.`,lv:5,n:`Materialização`,t:[],tempo:`1 minuto`,up:`+1,5 m de cubo por Nível de Poder acima de 5.`},{alc:`Toque`,cat:`Transformação`,dur:`Instantâneo`,e:`Leva 1 minuto. Transforma uma cadeira num leme que permite pilotar um veículo aéreo ou espacial ao qual esteja instalado, usando a mente do piloto.`,lv:5,n:`Interface de Pilotagem`,t:[`Ψ`],tempo:`1 minuto`},{alc:`18 m`,cat:`Entropia`,dur:`1 hora`,e:`Até cinco cadáveres Pequenos ou Médios a até 9 m se erguem como zumbis ou esqueletos (veja Reanimar Cadáveres), sob comando por até 1 hora. Com Ação Rápida, o herói dá ordens; ele soma o Parâmetro de poder em ataques e dano deles.`,lv:5,n:`Exército de Cadáveres`,t:[`Κ`],tempo:`Ação`,up:`+2 cadáveres por Nível de Poder acima de 5.`},{alc:`Toque`,cat:`Transformação`,dur:`Instantâneo`,e:`Leva 8 horas. Uma fera ou planta tocada ganha Lógica 10, fala um idioma do herói e, se for planta, se move e sente. Fica dominada e amigável por 30 dias; depois, decide se continua amiga.`,lv:5,n:`Despertar Consciência`,t:[],tempo:`8 horas`},{alc:`Pessoal`,cat:`Ilusão`,dur:`1 hora`,e:`O herói fica invisível e um duplo ilusório dele surge em seu lugar. O duplo se move e fala sob controle do herói (Ação Rápida), mas some ao ser tocado. O herói pode ver e ouvir pelo duplo. Atacar ou ativar poderes não encerra a invisibilidade.`,lv:5,n:`Duplo Holográfico`,t:[`Κ`],tempo:`Ação`},{alc:`36 m`,cat:`Transformação`,dur:`1 rodada`,e:`Reação quando uma criatura a até 36 m começa o turno. Ela faz Teste de Integridade (Espírito) ou desaparece do fluxo do tempo até o início do próximo turno do herói, perdendo o turno. Quando volta, ocupa o mesmo espaço (ou o mais próximo livre).`,lv:5,n:`Desvio Temporal`,t:[],tempo:`Reação`,teste:`Espírito`},{alc:`Pessoal`,cat:`Proteção`,dur:`1 minuto`,e:`Por até 1 minuto, aberrações, celestiais, elementais, fadas, infernais e mortos-vivos têm Desvantagem em ataques contra o herói. Ele pode encerrar o poder para:

- **Libertar:** tocar uma criatura e libertá-la de dominação, medo ou possessão por elas.
- **Banir:** acertar uma dessas criaturas com uma Jogada de Ataque de Poder Corpo a Corpo, que faz Teste de Integridade (Magnetismo) ou é banida para o plano de origem.`,lv:5,n:`Expulsão de Entidades`,t:[`Κ`],tempo:`Ação`,teste:`Magnetismo`},{alc:`18 m`,cat:`Mente`,dur:`1 minuto`,e:`Um humanoide faz Teste de Integridade (Espírito) (Vantagem se estiver em combate com o herói) ou fica dominado e obedece a comandos telepáticos. Com uma Ação, o herói controla cada Ação dele diretamente. Sempre que sofre dano, repete o teste.`,lv:5,n:`Dominação Mental`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`Concentração até 10 minutos em NP 6, 1 hora em NP 7, 8 horas em NP 8+.`},{alc:`18 m`,cat:`Entropia`,dano:`4d8 de Dano Necrótico`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Reflexos): 4d8 de Dano Necrótico na falha, metade no sucesso, e o herói Recupera PV iguais à metade do dano. Ao ativar e com Ação em cada turno seguinte, repete o efeito no mesmo alvo ou em outro.`,lv:5,n:`Drenar Energia`,t:[`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`9 m`,cat:`Percepção`,dur:`1 hora`,e:`Ritual. Por 1 hora, até oito criaturas voluntárias ficam ligadas por telepatia e se comunicam a qualquer distância no mesmo plano, mesmo sem idioma comum.`,lv:5,n:`Rede Telepática`,t:[`Τ`,`Ψ`],tempo:`Ação · Τ ritual`},{alc:`36 m`,area:`Esfera de 6 m`,cat:`Mente`,dur:`Instantâneo`,e:`Esfera de 6 m. Cada criatura faz Teste de Integridade (Lógica): falha, 8d6 de Dano de Psíquico e, por 1 minuto, subtrai 1d6 de ataques, Testes de Parâmetro e testes de Concentração (repete o Teste de Integridade ao fim de cada turno); sucesso, metade.`,lv:5,n:`Estática Sináptica`,sigma:`8d6 de Dano de Psíquico`,t:[`Θ`,`Ψ`],tempo:`Ação`,teste:`Lógica`,up:`+1d6 por Nível de Poder acima de 5.`},{alc:`36 m`,area:`Cubo de 18 m`,cat:`Energia`,dur:`1 minuto`,e:`Cubo de 18 m de terreno natural. Plantas e rochas ganham vida e atacam inimigos escolhidos: no início do turno de cada inimigo na área, ele faz Teste de Integridade (Reflexos) ou sofre 4d6 de Dano de Concussão e fica impedido (Potência contra a CD de Poder para se soltar). A área é terreno difícil.`,lv:5,n:`Fúria da Natureza`,sigma:`4d6 de Dano de Concussão`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`Pessoal`,cat:`Proteção`,dano:`5d10 de Dano de Energia`,dur:`1 minuto`,e:`O próximo acerto com arma causa +5d10 de Dano de Energia. Se o alvo ficar com 50 PV ou menos, é banido: se for de outro plano, volta ao de origem; se não, vai a um semiplano inofensivo até o poder terminar.`,lv:5,n:`Golpe de Exílio`,t:[`Κ`],tempo:`Ação Rápida`},{alc:`27 m`,cat:`Energia`,dano:`8d6 de Dano de Fogo + 4d6 de Dano de Fogo`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Reflexos): 8d6 de Dano de Fogo na falha, metade no sucesso. Se falhar, queima por 1 minuto: no fim de cada turno, novo Teste de Integridade (Reflexos) ou 4d6 de Dano de Fogo; sucesso encerra. Morte por este poder vira cinzas.`,lv:5,n:`Combustão`,t:[`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`36 m`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Energia`,dano:`4d8 de Dano de Energia`,dur:`1 minuto`,e:`Uma mão Grande de força surge e dura até 1 minuto. CA 20, PV iguais aos do herói. Com Ação Rápida, o herói a move 18 m e escolhe:

- **Golpe:** Jogada de Ataque de Poder Corpo a Corpo, 4d8 de Dano de Energia.
- **Empurrão:** empurra uma criatura 1,5 m + 1,5 m × Parâmetro.
- **Agarrão:** impede e causa 2d6 + Parâmetro por turno.
- **Proteção:** meia cobertura.`,lv:5,n:`Mão Colossal`,t:[`Κ`],tempo:`Ação`,up:`+2d8 no golpe e +2d6 no agarrão por Nível de Poder acima de 5.`},{alc:`18 m`,cat:`Mente`,dano:`5d10 de Dano de Psíquico`,dur:`30 dias`,e:`Leva 1 minuto. Uma criatura que entenda o herói faz Teste de Integridade (Espírito) ou fica obrigada a cumprir uma ordem (não suicida) por 30 dias. Sempre que age contra a ordem, sofre 5d10 de Dano de Psíquico (uma vez por dia).`,lv:5,n:`Diretriz`,t:[`Ψ`],tempo:`1 minuto`,teste:`Espírito`,up:`1 ano em NP 7–8, permanente em NP 9.`},{alc:`9 m`,cat:`Mente`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Espírito) (Vantagem se estiver em combate) ou fica dominada. Enquanto durar, o herói apaga, altera ou insere até 10 minutos de memória das últimas 24 horas. Memórias absurdas podem ser descartadas pelo alvo.`,lv:5,n:`Reescrever Memória`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`Pode alterar memórias de até 7 dias (NP 6), 30 dias (NP 7), 1 ano (NP 8) ou qualquer época (NP 9).`},{alc:`36 m`,area:`Domo de 3 m de raio`,cat:`Energia`,dur:`10 minutos`,e:`Uma muralha invisível de até dez painéis de 3 m (ou domo de 3 m de raio), com 6 mm de espessura, por até 10 minutos. Nada passa por ela; é Imune a Dano e só Desintegrar a destrói.`,lv:5,n:`Muralha de Força`,t:[`Θ`,`Κ`],tempo:`Ação`},{alc:`36 m`,area:`Muralha de 18 m de comprimento, 3 m de altura e 1,5 m de espessura`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dur:`10 minutos`,e:`Muralha de 18 m de comprimento, 3 m de altura e 1,5 m de espessura, que bloqueia visão. Ao surgir e quando alguém entra nela, Teste de Integridade (Resistência): 4d8 de Dano Radiante e cego por 1 minuto na falha, metade no sucesso. Com Ação, o herói dispara um raio dela (Jogada de Ataque de Poder à Distância, 4d8 de Dano Radiante) e ela encolhe 3 m.`,lv:5,n:`Muralha de Luz`,sigma:`4d8 de Dano Radiante`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 5.`},{alc:`36 m`,cat:`Energia`,dur:`10 minutos`,e:`Até dez painéis de pedra de 3 m × 3 m e 15 cm de espessura (CA 15, 30 PV por painel). Quem estiver no lugar faz Teste de Integridade (Reflexos) para escolher de que lado fica. Se a Concentração for mantida até o fim (10 minutos), a muralha fica permanente.`,lv:5,n:`Muralha de Pedra`,t:[`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`36 m`,area:`Esfera de 6 m`,cat:`Criação`,dur:`10 minutos`,e:`Esfera de 6 m de névoa venenosa, área de visão bloqueada. Quem entra ou começa o turno nela faz Teste de Integridade (Resistência): 5d8 de Dano de Veneno na falha, metade no sucesso. A nuvem avança 3 m por turno para longe do herói.`,lv:5,n:`Nuvem Letal`,sigma:`5d8 de Dano de Veneno`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 5.`},{alc:`Pessoal`,cat:`Percepção`,dur:`10 minutos`,e:`Leva 10 minutos. O alvo faz Teste de Integridade (Espírito), modificada pelo que o herói sabe dele (−5 se o conhece bem, +5 se só ouviu falar, −2 com um retrato, −10 com uma parte do corpo). Falha: um sensor invisível o segue e o herói vê e ouve por ele por até 10 minutos.`,lv:5,n:`Vigilância Remota`,t:[`Κ`],tempo:`10 minutos`,teste:`Espírito`},{alc:`18 m`,area:`Esfera de 6 m de raio`,cat:`Entropia`,dur:`Instantâneo`,e:`Esfera de 6 m de raio. Cada criatura faz Teste de Integridade (Resistência): 5d12 de Dano Necrótico na falha, metade no sucesso. Humanoides mortos por este poder voltam como zumbis hostis a todos no início do próximo turno do herói. Mortos-vivos na área ganham Vantagem em ataques até o fim do próximo turno.`,lv:5,n:`Onda Entrópica`,sigma:`5d12 de Dano Necrótico`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal (9 m)`,cat:`Energia`,dano:`5d6 de Dano de Trovão + 5d6 de Dano Radiante`,dur:`Instantâneo`,e:`Cada inimigo a até 9 m faz Teste de Integridade (Resistência): falha, 5d6 de Dano de Trovão e 5d6 de Dano Radiante ou necrótico (à escolha) e fica caído; sucesso, metade e não cai.`,lv:5,n:`Onda de Impacto`,t:[],tempo:`Ação`,teste:`Resistência`},{alc:`27 m`,cat:`Mente`,dur:`1 minuto`,e:`Uma criatura de qualquer tipo faz Teste de Integridade (Espírito) ou fica paralisada. Repete o teste ao fim de cada turno.`,lv:5,n:`Paralisia Total`,t:[`Κ`,`Ν`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`+1 alvo por Nível de Poder acima de 5.`,upN:1},{alc:`Pessoal`,cat:`Criação`,dur:`1 minuto`,e:`O herói se teleporta até 18 m para um espaço que vê, e repete com Ação Rápida em cada turno enquanto durar.`,lv:5,n:`Saltos Quânticos`,t:[`Κ`],tempo:`Ação Rápida`},{alc:`Toque`,cat:`Transformação`,dur:`1 hora`,e:`A criatura tocada dobra o Bônus de Proficiência numa perícia em que é proficiente, enquanto durar.`,lv:5,n:`Maestria Instantânea`,t:[`Κ`],tempo:`Ação`},{alc:`90 m`,area:`Esfera de 6 m`,cat:`Criação`,dur:`10 minutos`,e:`Esfera de 6 m de enxames, área parcialmente bloqueada e terreno difícil. Quem entra ou começa o turno nela faz Teste de Integridade (Resistência): 4d10 de Dano Perfurante na falha, metade no sucesso.`,lv:5,n:`Praga de Insetos`,sigma:`4d10 de Dano Perfurante`,t:[`Θ`,`Κ`,`Ψ`],tempo:`Ação`,teste:`Resistência`,up:`+1d10 por Nível de Poder acima de 5.`},{alc:`45 m`,area:`Cilindro de 12 m de raio e 6 m de altura`,cat:`Criação`,dur:`Instantâneo`,e:`Cilindro de 12 m de raio e 6 m de altura. O herói dispara contra cada criatura na área: Teste de Integridade (Reflexos), 8d8 do tipo da munição na falha, metade no sucesso. Gasta uma munição por alvo.`,lv:5,n:`Barragem de Disparos`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`},{alc:`Toque`,cat:`Transformação`,dur:`Instantâneo`,e:`Leva 1 hora. Uma criatura morta há até 10 dias volta num corpo novo, de uma Origem determinada aleatoriamente (o Mestre rola). A mente e as memórias são as mesmas; Parâmetros físicos e traços mudam conforme a nova Origem.`,lv:5,n:`Reconstrução Corporal`,t:[`Ψ`],tempo:`1 hora`},{alc:`Toque`,cat:`Entropia`,dur:`Instantâneo`,e:`Leva 1 hora. Uma criatura morta há até 10 dias volta à vida com 1 PV. Não restaura partes do corpo. Sofre −4 em ataques, Testes de Parâmetro e Testes de Integridade, que diminui em 1 a cada Recuperação.`,lv:5,n:`Ressuscitar`,t:[],tempo:`1 hora`},{alc:`18 m`,area:`Esfera de 9 m`,cat:`Energia`,dur:`Instantâneo`,e:`Até seis criaturas numa esfera de 9 m Recuperam 3d8 + Parâmetro de poder em PV. Não afeta mortos-vivos nem constructos.`,lv:5,n:`Regeneração em Massa`,t:[`Θ`],tempo:`Ação`,up:`+1d8 por Nível de Poder acima de 5.`},{alc:`Toque`,cat:`Proteção`,dur:`Instantâneo`,e:`Remove um dos efeitos:

- Um nível de Exaustão.
- Dominação ou cristalização.
- Uma maldição (inclusive o vínculo com item amaldiçoado).
- Uma redução de Parâmetro ou de PV máximo.`,lv:5,n:`Restauração Total`,t:[],tempo:`Ação`},{alc:`Especial`,cat:`Ilusão`,dano:`3d6 de Dano de Psíquico`,dur:`8 horas`,e:`Leva 1 minuto. O herói ou uma criatura voluntária tocada entra nos sonhos de alguém conhecido no mesmo plano, por até 8 horas. Pode conversar ou criar um pesadelo: o alvo faz Teste de Integridade (Espírito) ou não descansa e sofre 3d6 de Dano de Psíquico ao acordar.`,lv:5,n:`Invasão Onírica`,t:[`Ψ`],tempo:`1 minuto`,teste:`Espírito`},{alc:`18 m`,cat:`Transformação`,dur:`10 minutos`,e:`Por até 10 minutos, com Ação, o herói move uma criatura (teste do Parâmetro de poder contra Potência dela) ou um objeto de até 500 kg, até 9 m em qualquer direção, dentro do alcance. Pode manipular objetos com precisão.`,lv:5,n:`Telecinese`,t:[`Κ`],tempo:`Ação`},{alc:`9 m`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Criação`,dano:`6d10 de Dano de Energia`,dur:`Instantâneo`,e:`O herói ataca até cinco criaturas a até 9 m: uma Jogada de Ataque de Poder Corpo a Corpo contra cada, 6d10 de Dano de Energia por acerto. Depois, pode se teleportar para um espaço livre a até 1,5 m de um dos alvos.`,lv:5,n:`Tempestade de Lâminas`,t:[],tempo:`Ação`},{alc:`36 m`,area:`Cubo de 12 m`,cat:`Transformação`,dur:`Até ser dissipado`,e:`Cubo de 12 m. Rocha vira lama (terreno difícil; quem estiver nela afunda e fica impedido, Potência para sair) ou lama vira rocha (quem estiver dentro faz Teste de Integridade (Reflexos) ou fica impedido até se libertar com Potência). Dura até ser dissipado.`,lv:5,n:`Liquefazer Rocha`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`},{alc:`36 m`,area:`Cilindro de 9 m de raio e 9 m de altura`,cat:`Energia`,dur:`1 minuto`,e:`Cilindro de 9 m de raio e 9 m de altura de vento rodopiante. Quem começa o turno nele faz Teste de Integridade (Potência): falha, 6d6 de Dano de Concussão e é puxado 3 m para o centro; sucesso, metade. A área é terreno difícil e Jogadas de Ataque à Distância nela têm Desvantagem.`,lv:5,n:`Turbilhão`,sigma:`6d6 de Dano de Concussão`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Potência`},{alc:`18 m`,cat:`Proteção`,dur:`24 horas`,e:`Leva 1 hora. Uma criatura de outro plano (celestial, elemental, fada ou infernal) faz Teste de Integridade (Magnetismo) ou serve o herói por 24 horas.`,lv:5,n:`Contrato Dimensional`,t:[],tempo:`1 hora`,teste:`Magnetismo`,up:`10 dias (NP 6), 30 dias (NP 7), 180 dias (NP 8) ou 1 ano e 1 dia (NP 9).`},{alc:`18 m`,cat:`Criação`,dur:`Instantâneo`,e:`Leva 10 minutos. O herói pede ajuda à fonte do seu poder, que envia um aliado extraplanar (o Mestre escolhe). Ele pode recusar tarefas contrárias à sua natureza. O aliado negocia o preço:

- **Tarefas curtas:** cerca de 100 cr por minuto.
- **Tarefas longas:** 1.000 cr por hora.
- **Tarefas muito longas:** 10.000 cr por dia.`,lv:6,n:`Aliado Dimensional`,t:[],tempo:`10 minutos`},{alc:`Pessoal`,cat:`Transformação`,dur:`1 minuto`,e:`O herói assume uma forma de outro plano (celestial, infernal ou feérica): voo de 12 m, +2 na CA, imunidade a dominado e amedrontado (e a um tipo de dano: radiante, fogo ou psíquico, conforme a forma), dois ataques por Ação de Atacar e seus ataques com arma contam como especiais.`,lv:6,n:`Forma Transcendente`,t:[`Κ`,`Ψ`],tempo:`Ação Rápida`},{alc:`9 m`,cat:`Criação`,dur:`Instantâneo`,e:`Leva 10 minutos. Um banquete alimenta até 12 criaturas. Por 24 horas, elas ficam imunes a medo e veneno, têm Vantagem em Testes de Integridade (Espírito) e ganham +2d10 PV máximos e atuais.`,lv:6,n:`Banquete dos Heróis`,t:[],tempo:`10 minutos`},{alc:`27 m`,cat:`Energia`,dano:`6d10 de Dano Cortante`,dur:`10 minutos`,e:`Muralha de lâminas giratórias de até 30 m de comprimento, 6 m de altura e 1,5 m de espessura (ou anel de 18 m de diâmetro), dá cobertura de três quartos e é terreno difícil. Quem entra nela pela primeira vez no turno ou começa o turno nela faz Teste de Integridade (Reflexos): 6d10 de Dano Cortante na falha, metade no sucesso.`,lv:6,n:`Barreira de Lâminas`,t:[`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`Toque`,cat:`Proteção`,dur:`24 horas`,e:`Leva 10 minutos. Protege uma área de até 27 m por 24 horas. Criaturas escolhidas ignoram os efeitos. Usado todo dia no mesmo lugar por um ano, fica permanente. Efeitos possíveis:

- Névoa densa.
- Vinhas que prendem (Potência).
- Portas presas.
- Guardiões arbóreos que atacam intrusos.
- Ventos.
- Outro efeito à escolha do herói.`,lv:6,n:`Bosque Guardião`,t:[],tempo:`10 minutos`},{alc:`9 m`,cat:`Transformação`,dur:`8 horas`,e:`Leva 1 minuto. Por até 8 horas, o herói e até dez criaturas viram nuvens: voo de 90 m, Resistência a Dano físico não especial, sem Ações exceto Disparar ou voltar à forma normal (1 minuto). Quem estiver voando ao voltar desce 18 m por rodada por 1 minuto.`,lv:6,n:`Forma de Nuvem`,t:[],tempo:`1 minuto`},{alc:`18 m`,cat:`Transformação`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Resistência). Falha: fica impedida. No fim de cada turno, repete o teste; três sucessos encerram, três falhas a cristalizam (permanente se o poder durar o tempo todo). Sucesso inicial: Deslocamento reduzido até o próximo turno.`,lv:6,n:`Cristalização`,t:[`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`45 m`,area:`Esfera de 18 m de raio`,cat:`Entropia`,dur:`Instantâneo`,e:`Esfera de 18 m de raio. Cada criatura faz Teste de Integridade (Resistência): 8d6 de Dano Necrótico na falha, metade no sucesso.`,lv:6,n:`Onda de Morte`,sigma:`8d6 de Dano Necrótico`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+2d6 por Nível de Poder acima de 6.`},{alc:`27 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dano:`3d12 de Dano de Energia`,dur:`1 hora`,e:`Leva 1 minuto. Um espírito feérico Médio surge. Bloco do espírito: CA 11 + Nível de Poder, PV 60 + 15 por Nível de Poder acima de 6, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Pode se teleportar 9 m com Ação Rápida e, uma vez por turno, ao acertar, causa +3d12 de Dano de Energia e domina o alvo (Espírito) até o fim do próximo turno.`,lv:6,n:`Invocar Campeão Feérico`,t:[`Κ`],tempo:`1 minuto`,up:`O bloco cresce como indicado.`},{alc:`Pessoal`,cat:`Energia`,dur:`10 dias`,e:`Leva 10 minutos. O herói guarda um poder de até Nível de Poder que possa usar em si mesmo, com uma condição de disparo. Dura 10 dias ou até disparar. Só uma contingência ativa por vez.`,lv:6,n:`Protocolo de Contingência`,t:[],tempo:`10 minutos`},{alc:`Toque`,cat:`Criação`,dur:`Até ser dissipado`,e:`Ritual de 1 minuto. Marca um objeto de até 5 kg. Quebrando a safira, o herói chama o objeto para a mão, de qualquer lugar do mesmo plano. Se alguém o segura, o herói sabe quem e onde, mas o objeto não vem.`,lv:6,n:`Recall Instantâneo`,t:[`Τ`],tempo:`1 minuto · Τ ritual`},{alc:`27 m`,atq:`Jogada de Ataque de Poder`,cat:`Criação`,dano:`3d6 + 3 + Nível de Poder de Dano de Fogo + 2d6 + 3 + Nível de Poder de Dano Cortante`,dur:`1 hora`,e:`Um espírito infernal surge (diabo, demônio ou mercenário infernal). Bloco do espírito: CA 11 + Nível de Poder, PV 60 + 15 por Nível de Poder acima de 6, Deslocamento 9 m, age logo após o herói e obedece a ordens (sem ordem, só se defende). Faz um ataque por cada dois Níveis de Poder (arredonde para baixo) usando a Jogada de Ataque de Poder do herói. Conforme a forma:

- **Diabo:** 3d6 + 3 + Nível de Poder de Dano de Fogo e Resistência a Dano de Fogo.
- **Demônio:** 2d6 + 3 + Nível de Poder de Dano Cortante; ao cair a 0 PV, explode em 2d10 + Nível de Poder de Dano de Fogo a até 3 m (Reflexos).
- **Mercenário:** 2d4 + 3 + Nível de Poder de Dano Cortante e pode se teleportar 9 m após atacar.`,lv:6,n:`Invocar Infernal`,t:[`Κ`],tempo:`Ação`},{alc:`45 m`,cat:`Energia`,dano:`10d8 de Dano Elétrico`,dur:`Instantâneo`,e:`Um raio atinge um alvo a até 45 m e salta para até três outros a até 9 m dele. Cada alvo faz Teste de Integridade (Reflexos): 10d8 de Dano Elétrico na falha, metade no sucesso.`,lv:6,n:`Corrente Elétrica`,t:[],tempo:`Ação`,teste:`Reflexos`,up:`+1 salto por Nível de Poder acima de 6.`},{alc:`Toque`,cat:`Transformação`,dur:`Instantâneo`,e:`Leva 1 hora e custa 2d4 de dano ao herói, que não pode ser reduzido. Cria um pequeno constructo servo: CA 13, 10 PV, voo 12 m, ataque +4, 1 perfurante e veneno (Resistência ou adormece). Elo telepático a 1,5 km; vê e ouve por ele. Permanece até morrer.`,lv:6,n:`Criar Biodrone`,t:[],tempo:`1 hora`},{alc:`3 m`,cat:`Entropia`,dano:`2d4 + 2 de Dano Cortante`,dur:`Instantâneo`,e:`Leva 1 minuto. Até três cadáveres viram carniçais sob comando por 24 horas: CA 12, 22 PV, Deslocamento 9 m, garras +4, 2d4 + 2 de Dano Cortante e paralisia (Resistência). Pode ser usado de novo para manter o controle.`,lv:6,n:`Criar Carniçais`,t:[`Ν`],tempo:`1 minuto`,up:`+1 carniçal por Nível de Poder acima de 6, ou criaturas mais fortes à escolha do Mestre.`,upN:1},{alc:`18 m`,cat:`Energia`,dur:`Instantâneo`,e:`Uma criatura Recupera 70 PV e deixa de estar cega, surda e doente. Não afeta mortos-vivos nem constructos.`,lv:6,n:`Cura Completa`,t:[],tempo:`Ação`,up:`+10 PV por Nível de Poder acima de 6.`},{alc:`9 m`,cat:`Mente`,dur:`1 minuto`,e:`Uma criatura começa a dançar sem controle (sem Teste de Integridade inicial): gasta todo o movimento dançando, tem Desvantagem em Reflexos e ataques, e ataques contra ela têm Vantagem. Com Ação, faz Teste de Integridade (Espírito) para encerrar.`,lv:6,n:`Dança Compulsiva`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`18 m`,area:`Cubo de 3 m`,cat:`Transformação`,dur:`Instantâneo`,e:`Raio contra uma criatura ou objeto: Teste de Integridade (Reflexos) ou 10d6 + 40 de Dano de Energia. Se cair a 0 PV, vira pó, junto com o que carrega (exceto itens especiais). Destrói automaticamente um cubo de 3 m de objetos não mágicos ou criações de força.`,lv:6,n:`Desintegrar`,sigma:`10d6 + 40 de Dano de Energia`,t:[`Θ`,`Ψ`],tempo:`Ação`,teste:`Reflexos`,up:`+3d6 por Nível de Poder acima de 6.`},{alc:`9 m`,cat:`Criação`,dur:`Instantâneo`,e:`Até cinco criaturas a até 9 m (as que não quiserem fazem Teste de Integridade (Espírito)) são teleportadas para espaços livres que o herói vê a até 36 m dele.`,lv:6,n:`Dispersão Quântica`,t:[],tempo:`Ação`,teste:`Espírito`},{alc:`Pessoal`,cat:`Percepção`,dur:`1 dia`,e:`Leva 1 minuto. Por até 1 dia, o herói sabe a rota física mais curta e direta até um local fixo que conhece no mesmo plano.`,lv:6,n:`Navegação Perfeita`,t:[`Κ`],tempo:`1 minuto`},{alc:`18 m`,cat:`Proteção`,dur:`1 minuto`,e:`Por até 1 minuto, uma criatura recebe um escudo cintilante: meia cobertura, Resistência a Dano de Ácido, elétrico, fogo, frio, trovão e veneno, e quando passa num Teste de Integridade (Reflexos) que reduziria o dano à metade, não sofre dano. Com Ação Rápida, o herói passa o escudo para outra criatura.`,lv:6,n:`Escudo Platinado`,t:[`Κ`],tempo:`Ação Rápida`,teste:`Reflexos`},{alc:`90 m`,area:`Esfera de 18 m de raio`,cat:`Energia`,dur:`Instantâneo`,e:`Esfera de 18 m de raio. Cada criatura faz Teste de Integridade (Resistência): 10d6 de Dano de Frio na falha, metade no sucesso. Água na área congela em 15 cm de espessura por 1 minuto. O herói pode, em vez disso, guardar o globo para ser arremessado depois (até 1 minuto).`,lv:6,n:`Esfera Criogênica`,sigma:`10d6 de Dano de Frio`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d6 por Nível de Poder acima de 6.`},{alc:`18 m`,cat:`Entropia`,dano:`14d6 de Dano Necrótico`,dur:`Instantâneo`,e:`Uma criatura faz Teste de Integridade (Resistência): 14d6 de Dano Necrótico na falha, metade no sucesso. Na falha, o PV máximo dela cai pela mesma quantidade até uma Recuperação. Mínimo de 1 PV restante.`,lv:6,n:`Colapso Celular`,t:[],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal (linha 30 m)`,area:`Linha 30 m`,cat:`Energia`,dur:`Instantâneo`,e:`Linha de 30 m por 1,5 m. Cada criatura nela faz Teste de Integridade (Resistência): 8d8 de Dano de Energia na falha, metade no sucesso. Criaturas a até 3 m da linha, mas fora dela, são puxadas até 3 m em direção à linha (Potência evita).`,lv:6,n:`Fissura Gravitacional`,sigma:`8d8 de Dano de Energia`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`,up:`+1d8 por Nível de Poder acima de 6.`},{alc:`18 m`,cat:`Entropia`,dur:`8 horas`,e:`Reação quando um humanoide morre a até 18 m: a alma fica presa numa gaiola por 8 horas. Seis vezes, o herói pode escolher uma opção:

- Recuperar 2d8 PV.
- Fazer uma pergunta que ela responde com sinceridade.
- Ver o que ela viu em vida.
- Ganhar Vantagem num teste.`,lv:6,n:`Prisão de Almas`,t:[],tempo:`Reação`},{alc:`Pessoal (3 m)`,area:`Esfera de 3 m`,cat:`Proteção`,dur:`1 minuto`,e:`Esfera de 3 m imóvel ao redor do herói. Poderes de Nível de Poder 5 ou menor ativados de fora não afetam nada dentro dela.`,lv:6,n:`Globo Antipoder`,t:[`Θ`,`Κ`,`Υ`],tempo:`Ação`,up:`+1 Nível de Poder bloqueado por Nível de Poder acima de 6.`},{alc:`Toque`,cat:`Proteção`,dur:`24 horas`,e:`Leva 10 minutos. Protege até 225 m² por 24 horas. Quem o herói escolher passa livre. Usado diariamente por um ano, fica permanente. A área ganha:

- Corredores com névoa.
- Portas trancadas.
- Escadas com teias.
- Portas falsas ilusórias.
- **Um efeito extra:** luzes, mensagem, nuvem fétida, rajada de vento ou sugestão.`,lv:6,n:`Sistema de Segurança`,t:[`Ψ`],tempo:`10 minutos`},{alc:`36 m`,area:`Cubo de 9 m`,cat:`Ilusão`,dur:`Até ser dissipado`,e:`Cria uma ilusão de até um cubo de 9 m que fica invisível até disparar por uma condição definida. Ao disparar, se move e fala segundo um roteiro por até 5 minutos e depois volta a esperar. Investigação contra a CD de Poder revela.`,lv:6,n:`Holograma Programado`,t:[`Θ`],tempo:`Ação`},{alc:`Pessoal`,area:`Raio de 4,5 m ao redor do herói`,cat:`Transformação`,dur:`10 minutos`,e:`Resistência a Dano físico não especial. O herói se move por terreno difícil de terra ou pedra sem custo extra e pode atravessar terra e pedra. Com Ação, cria um tremor: cada criatura a até 4,5 m faz Teste de Integridade (Reflexos) ou fica caída.`,lv:6,n:`Avatar de Pedra`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`Pessoal`,cat:`Transformação`,dano:`1d10 de Dano de Fogo + 4d8 de Dano de Fogo`,dur:`10 minutos`,e:`Imunidade a Dano de Fogo e Resistência a Dano de Frio. Quem chega a até 1,5 m do herói ou o acerta corpo a corpo sofre 1d10 de Dano de Fogo. Com Ação, ele dispara uma linha de fogo de 4,5 m: Teste de Integridade (Reflexos), 4d8 de Dano de Fogo na falha, metade no sucesso.`,lv:6,n:`Avatar de Fogo`,t:[`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`Pessoal`,area:`Cone de 4,5 m`,cat:`Transformação`,dur:`10 minutos`,e:`Imunidade a Dano de Frio e Resistência a Dano de Fogo. O herói anda sobre terreno difícil de gelo e neve, e o chão a até 3 m dele congela (terreno difícil para outros). Com Ação, dispara um cone de 4,5 m: Teste de Integridade (Resistência), 4d6 de Dano de Frio e Deslocamento à metade na falha, metade do dano no sucesso.`,lv:6,n:`Avatar de Gelo`,sigma:`4d6 de Dano de Frio`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal`,area:`Cubo de 4,5 m`,cat:`Transformação`,dur:`10 minutos`,e:`Voo de 18 m. Ataques à distância com arma contra o herói têm Desvantagem. Com Ação, ele dispara uma rajada num cubo de 4,5 m a até 18 m: Teste de Integridade (Resistência), 2d10 de Dano de Concussão na falha, metade no sucesso; criaturas Grandes ou menores que falham são empurradas 3 m.`,lv:6,n:`Avatar de Vento`,sigma:`2d10 de Dano de Concussão`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`36 m`,cat:`Transformação`,dur:`2 horas`,e:`Por até 2 horas, a cada 10 minutos o herói remodela terra, areia ou argila (não pedra) numa área de até 12 m: eleva, abaixa, cava valas, ergue muros de até a metade da maior dimensão. Estruturas podem ruir. Plantas são deslocadas.`,lv:6,n:`Terraformar`,t:[`Κ`],tempo:`Ação`},{alc:`36 m`,area:`Muralha de 18 m de comprimento, 3 m de altura e 1,5 m de espessura`,cat:`Criação`,dur:`10 minutos`,e:`Muralha de 18 m de comprimento, 3 m de altura e 1,5 m de espessura (ou anel de 6 m), bloqueia visão. Ao surgir, Teste de Integridade (Reflexos): 7d8 de Dano Perfurante na falha, metade no sucesso. Atravessá-la custa 6 m por 1,5 m e exige o mesmo Teste de Integridade, 7d8 de Dano Cortante.`,lv:6,n:`Muralha de Espinhos`,sigma:`7d8 de Dano Perfurante + 7d8 de Dano Cortante`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d8 em ambos por Nível de Poder acima de 6.`},{alc:`36 m`,area:`Domo de 3 m`,cat:`Energia`,dur:`10 minutos`,e:`Muralha de até dez painéis de 3 m (ou domo de 3 m), 30 cm de espessura (CA 12, 30 PV por painel, Vulnerável a Dano de Fogo). Ao surgir, quem estiver no lugar faz Teste de Integridade (Reflexos): 10d6 de Dano de Frio na falha, metade no sucesso. Um painel destruído deixa ar gelado: atravessar exige Resistência ou 5d6 de Dano de Frio.`,lv:6,n:`Muralha de Gelo`,sigma:`10d6 de Dano de Frio + 5d6 de Dano de Frio`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`,up:`+2d6 ao surgir e +1d6 no ar gelado por Nível de Poder acima de 6.`},{alc:`Pessoal`,cat:`Entropia`,dur:`1 minuto`,e:`Por até 1 minuto, com Ação em cada turno, o herói fixa o olhar numa criatura a até 18 m: Teste de Integridade (Espírito) ou sofre um efeito. Quem passa fica imune pelo resto do poder. Efeitos:

- **Adormecido:** cai inconsciente até sofrer dano.
- **Em pânico:** amedrontado e foge.
- **Nauseado:** Desvantagem em ataques e testes.`,lv:6,n:`Olhar Hipnótico`,t:[`Κ`],tempo:`Ação`,teste:`Espírito`},{alc:`36 m`,cat:`Transformação`,dano:`6d6 de Dano de Concussão`,dur:`Instantâneo`,e:`Até seis pilares de pedra (1,5 m de diâmetro, até 9 m de altura) surgem do chão. Criaturas sobre eles fazem Teste de Integridade (Reflexos) ou são erguidas. Se ficarem presas contra o teto, sofrem 6d6 de Dano de Concussão e ficam impedidas.`,lv:6,n:`Pilares de Pedra`,t:[],tempo:`Ação`,teste:`Reflexos`,up:`+2 pilares por Nível de Poder acima de 6.`},{alc:`1,5 m`,cat:`Criação`,dur:`Instantâneo`,e:`O herói e até cinco aliados a até 1,5 m são teleportados para um santuário previamente designado por ele, em qualquer lugar do mesmo plano.`,lv:6,n:`Retorno à Base`,t:[`Ψ`],tempo:`Ação`},{alc:`150 m`,cat:`Criação`,dur:`10 minutos`,e:`Por até 10 minutos, dois portais circulares de 3 m de diâmetro ficam ligados, um a até 150 m do outro. Qualquer criatura ou objeto que entra num sai pelo outro. Com Ação Rápida, o herói pode virar a face ativa.`,lv:6,n:`Portal Dimensional`,t:[`Κ`],tempo:`Ação`},{alc:`18 m`,cat:`Ilusão`,dano:`5d10 de Dano de Psíquico + 10d10 de Dano de Psíquico`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Lógica). Falha: 5d10 de Dano de Psíquico e fica presa numa ilusão de cela de 3 m. Se tentar sair ou atravessar as paredes ilusórias, sofre 10d10 de Dano de Psíquico e o poder termina. Sucesso: metade e nenhum outro efeito.`,lv:6,n:`Prisão Mental`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Lógica`},{alc:`Toque`,cat:`Proteção`,dano:`5d10 de Dano Radiante`,dur:`1 dia`,e:`Ritual de 10 minutos. Protege até 3.700 m² por 1 dia. Ninguém se teleporta para dentro nem entra por portais. Tipos escolhidos (aberrações, celestiais, elementais, fadas, infernais, mortos-vivos) sofrem 5d10 de Dano Radiante ou necrótico ao entrar ou começar o turno ali. Usado diariamente por 30 dias, fica permanente.`,lv:6,n:`Zona Interditada`,t:[`Τ`,`Ψ`],tempo:`10 minutos · Τ ritual`},{alc:`Pessoal`,cat:`Proteção`,dur:`1 minuto`,e:`Por até 1 minuto, o herói tem Resistência a Dano de Ácido, elétrico, fogo, frio e trovão. Quando sofrer dano de um desses tipos, pode trocar por imunidade a ele até o fim do turno (uma vez); depois, perde a resistência a esse tipo.`,lv:6,n:`Proteção Primordial`,t:[`Κ`],tempo:`Ação`},{alc:`Pessoal (linha 18 m)`,area:`Linha 18 m`,cat:`Energia`,dur:`1 minuto`,e:`Ao ativar e com Ação em cada turno, uma linha de 18 m por 1,5 m: cada criatura faz Teste de Integridade (Resistência), 6d8 de Dano Radiante e cego até o próximo turno do herói na falha, metade e sem cegueira no sucesso.`,lv:6,n:`Raio Solar`,sigma:`6d8 de Dano Radiante`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal`,cat:`Entropia`,dur:`Até ser dissipado`,e:`Leva 1 minuto. O corpo do herói fica em catalepsia e a alma vai para a gema. Dela, ele pode tentar possuir um humanoide a até 30 m (Teste de Integridade (Magnetismo)). Possuindo, usa o corpo e as perícias dele, mas mantém a mente. Se o corpo original morrer, a alma fica presa na gema.`,lv:6,n:`Transferência de Consciência`,t:[`Ψ`],tempo:`1 minuto`,teste:`Magnetismo`},{alc:`18 m`,cat:`Mente`,dur:`24 horas`,e:`Até 12 criaturas que entendam o herói fazem Teste de Integridade (Espírito) ou seguem uma sugestão razoável por 24 horas.`,lv:6,n:`Sugestão em Massa`,t:[`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`10 dias em NP 7, 30 dias em NP 8, um ano e um dia em NP 9.`},{alc:`Pessoal`,cat:`Transformação`,dano:`2d12 de Dano de Energia`,dur:`10 minutos`,e:`Quando o poder termina, faz Teste de Integridade (Resistência) (CD 15) ou ganha 1 nível de Exaustão. Por até 10 minutos, o herói ganha:

- Todos os Treinamentos de armas e de Blindagem.
- Ataques com arma causam +2d12 de Dano de Energia.
- Dois ataques por Ação de Atacar.
- 50 PV temporários.`,lv:6,n:`Modo Guerreiro`,t:[`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`3 m`,cat:`Criação`,dur:`1 rodada`,e:`O herói, e qualquer criatura que entre pela mesma planta antes do fim do próximo turno, entra numa planta Grande ou maior e sai de outra do mesmo tipo em qualquer lugar do mesmo plano.`,lv:6,n:`Rede Vegetal`,t:[],tempo:`Ação`},{alc:`Toque`,cat:`Percepção`,dur:`1 hora`,e:`Por 1 hora, a criatura tocada ganha visão verdadeira de 36 m: vê no escuro mágico, vê o invisível, percebe ilusões, a forma real de metamorfos e o Plano Etéreo.`,lv:6,n:`Visão Verdadeira`,t:[],tempo:`Ação`},{alc:`18 m`,cat:`Entropia`,dur:`1 hora`,e:`Duas criaturas a até 18 m uma da outra (quem não quiser faz Teste de Integridade (Resistência)) ficam ligadas. Enquanto durar, sempre que uma sofre dano, a outra sofre o mesmo; sempre que uma é Curada, a outra também. Se uma cai a 0 PV, a outra também cai.`,lv:7,n:`Elo de Destino`,t:[`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`45 m`,area:`Esfera de 6 m`,cat:`Energia`,dur:`1 minuto`,e:`Uma conta de fogo fica num ponto a até 45 m. Quando o poder termina (o herói decide ou perde a Concentração), explode numa esfera de 6 m: Teste de Integridade (Reflexos), 12d6 de Dano de Fogo na falha, metade no sucesso. Para cada turno inteiro em que a explosão foi adiada, +1d6. Se alguém tocar a conta antes, ela explode.`,lv:7,n:`Bomba de Plasma`,sigma:`12d6 de Dano de Fogo`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`,up:`+1d6 por Nível de Poder acima de 7.`},{alc:`27 m`,cat:`Criação`,dano:`2d8 + 5 de Dano Radiante`,dur:`1 hora`,e:`Leva 1 minuto. Um celestial poderoso surge: CA 17, 120 PV, voo 27 m, dois ataques (+9, 2d8 + 5 de Dano Radiante), e uma vez por dia Cura 4d8 + 5 de uma criatura. Obedece ao herói e some ao cair a 0 PV ou ao fim do poder.`,lv:7,n:`Invocar Arauto Celestial`,t:[`Κ`],tempo:`1 minuto`,up:`+20 PV e +1 no ataque por Nível de Poder acima de 7.`},{alc:`Pessoal`,atq:`Jogada de Ataque de Poder à Distância`,cat:`Energia`,dano:`4d12 de Dano Radiante`,dur:`1 hora`,e:`Sete pontos de luz orbitam a cabeça do herói por 1 hora (luz plena de 9 m). Com Ação Rápida, lança um: Jogada de Ataque de Poder à Distância a até 36 m, 4d12 de Dano Radiante. O poder termina ao lançar o último.`,lv:7,n:`Coroa Estelar`,t:[],tempo:`Ação`,up:`+2 pontos por Nível de Poder acima de 7.`},{alc:`Toque`,cat:`Transformação`,dur:`Instantâneo`,e:`Leva 1 hora. Cria um constructo humanoide Médio: CA 16, 60 PV, Deslocamento 9 m, dois ataques (+6, 1d10 + 4). É leal, obedece a ordens do herói e permanece até ser destruído. Só um por vez.`,lv:7,n:`Construir Androide`,t:[],tempo:`1 hora`},{alc:`18 m`,cat:`Entropia`,dano:`7d8 + 30 de Dano Necrótico`,dur:`Instantâneo`,e:`Uma criatura faz Teste de Integridade (Resistência): 7d8 + 30 de Dano Necrótico na falha, metade no sucesso. Um humanoide morto por este poder volta como zumbi no próximo turno do herói, obedecendo-o para sempre.`,lv:7,n:`Toque da Morte`,t:[],tempo:`Ação`,teste:`Resistência`},{alc:`18 m`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Energia`,dano:`3d10 de Dano de Energia`,dur:`1 minuto`,e:`Uma espada de energia flutua. Ao ativar e com Ação Rápida nos turnos seguintes, o herói a move 6 m e faz uma Jogada de Ataque de Poder Corpo a Corpo contra criatura a até 1,5 m dela: 3d10 de Dano de Energia.`,lv:7,n:`Espada de Força`,t:[`Κ`],tempo:`Ação`},{alc:`Pessoal`,cat:`Transformação`,dur:`Até 8 horas`,e:`Por até 8 horas, o herói entra no Plano Etéreo. Vê e ouve o Plano Material até 18 m como uma névoa cinzenta, atravessa objetos e criaturas, e só afeta ou é afetado por criaturas etéreas. Ao terminar, volta para o espaço onde está (ou o mais próximo livre).`,lv:7,n:`Forma Etérea`,t:[`Ν`],tempo:`Ação`,up:`+3 criaturas voluntárias por Nível de Poder acima de 7.`,upN:1},{alc:`30 m`,area:`Cilindro de 15 m de raio e 30 m de altura`,cat:`Transformação`,dur:`1 minuto`,e:`Cilindro de 15 m de raio e 30 m de altura. A gravidade se inverte: criaturas e objetos soltos caem para cima até o topo ou um obstáculo. Quem tiver onde se segurar faz Teste de Integridade (Reflexos) para não cair. Ao terminar, caem de volta.`,lv:7,n:`Inverter Gravidade`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`30 m`,cat:`Energia`,dur:`1 hora`,e:`Por 1 hora, uma jaula (barras com frestas de 1,25 cm) de 6 m ou uma caixa sólida de 3 m prende o que estiver dentro. Quem tentar sair por teleporte faz Teste de Integridade (Magnetismo); nada atravessa a caixa. Imune a Dano e a Neutralizar Poder.`,lv:7,n:`Jaula de Força`,t:[],tempo:`Ação`,teste:`Magnetismo`},{alc:`Pessoal (cone 18 m)`,area:`Cone 18 m`,cat:`Energia`,dur:`Instantâneo`,e:`Cone de 18 m. Cada criatura faz Teste de Integridade (Reflexos) e rola 1d8 para a cor que a atinge:

- **1 vermelho:** 10d6 de Dano de Fogo.
- **2 laranja:** ácido.
- **3 amarelo:** elétrico.
- **4 verde:** veneno.
- **5 azul:** frio.
- **6 anil:** impedida, depois cristalizada (Resistência).
- **7 violeta:** cega, depois banida (Espírito).
- **8:** duas cores.

Nas cores de 1 a 5, o dano cai à metade no sucesso.`,lv:7,n:`Leque Prismático`,sigma:`10d6 de Dano de Fogo`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`},{alc:`90 m`,area:`Cubos de 3 m`,cat:`Criação`,dur:`24 horas`,e:`Leva 1 minuto. Uma porta brilhante leva a uma mansão extradimensional por 24 horas, com até 50 cubos de 3 m, mobília, banquete para 100 pessoas e 100 servos invisíveis. Só quem o herói autoriza entra. Nada pode ser levado para fora.`,lv:7,n:`Base Dimensional`,t:[`Θ`],tempo:`1 minuto`},{alc:`Visão`,cat:`Ilusão`,dur:`10 dias`,e:`Leva 10 minutos. Por 10 dias, um terreno de até 1,5 km parece, soa, cheira e até se sente como outro, incluindo estruturas. Criaturas com visão verdadeira veem através, mas as sensações táteis permanecem.`,lv:7,n:`Miragem Total`,t:[],tempo:`10 minutos`},{alc:`Toque`,atq:`Jogada de Ataque de Poder Corpo a Corpo`,cat:`Criação`,dur:`Instantâneo`,e:`O herói escolhe um uso:

- **Viagem:** leva até nove criaturas de mãos dadas para outro plano, num ponto aproximado.
- **Banimento:** Jogada de Ataque de Poder Corpo a Corpo contra uma criatura, que faz Teste de Integridade (Magnetismo) ou é enviada a um plano aleatório.`,lv:7,n:`Salto Interdimensional`,t:[],tempo:`Ação`,teste:`Magnetismo`},{alc:`Toque`,cat:`Transformação`,dur:`Até ser dissipado`,e:`Uma criatura voluntária ou objeto fica invisível, indetectável por adivinhação e, se criatura, em animação suspensa (sem envelhecer ou precisar comer). Dura até ser dissipado ou até uma condição definida pelo herói.`,lv:7,n:`Ocultação Absoluta`,t:[],tempo:`Ação`},{alc:`18 m`,cat:`Mente`,dur:`Instantâneo`,e:`Uma criatura com 100 PV ou menos é tomada por dor intensa: Deslocamento máximo 3 m, Desvantagem em ataques, Testes de Parâmetro e Testes de Integridade (exceto de Resistência) e, para ativar poderes, precisa passar em Resistência. Repete Teste de Integridade (Resistência) ao fim de cada turno para encerrar.`,lv:7,n:`Comando Absoluto: Dor`,t:[`Ψ`],tempo:`Ação`,teste:`Resistência`},{alc:`9 m`,cat:`Energia`,dur:`Instantâneo`,e:`Criaturas escolhidas a até 9 m que ouvem fazem Teste de Integridade (Magnetismo). Na falha, o efeito depende dos PV atuais:

- **50 ou menos:** surda por 1 minuto.
- **40 ou menos:** surda e cega por 10 minutos.
- **30 ou menos:** cega, surda e atordoada por 1 hora.
- **20 ou menos:** morre.

Extraplanares que falham são banidos para seu plano por 24 horas.`,lv:7,n:`Voz do Julgamento`,t:[],tempo:`Ação Rápida`,teste:`Magnetismo`},{alc:`750 km`,cat:`Ilusão`,dur:`1 dia`,e:`Por até 1 dia, um duplo ilusório do herói surge num local que ele já viu, a até 750 km. Ele vê e ouve pelo duplo e o faz falar e se mover. Tocar revela a ilusão.`,lv:7,n:`Projeção Remota`,t:[`Κ`],tempo:`Ação`},{alc:`90 m`,cat:`Energia`,dano:`10d6 de Dano de Concussão`,dur:`1 minuto`,e:`Um tornado de 3 m de raio e 9 m de altura. Com Ação, o herói o move 9 m. Criaturas que ele toca fazem Teste de Integridade (Reflexos): 10d6 de Dano de Concussão na falha, metade no sucesso. Criaturas Grandes ou menores que falham ficam presas dentro e são arremessadas ao serem soltas (3d6 de queda).`,lv:7,n:`Tornado`,t:[`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`Toque`,cat:`Transformação`,dur:`1 hora`,e:`Leva 1 minuto. A criatura tocada Recupera 4d8 + 15 PV e, por 1 hora, 1 PV no início de cada turno. Membros perdidos voltam após 2 minutos.`,lv:7,n:`Regeneração`,t:[],tempo:`1 minuto`},{alc:`Toque`,cat:`Entropia`,dur:`Instantâneo`,e:`Leva 1 hora. Uma criatura morta há até 100 anos volta à vida com todos os PV, Curada de venenos e doenças, com partes do corpo restauradas. Sofre −4 em ataques, Testes de Parâmetro e Testes de Integridade, que diminui em 1 a cada Recuperação.`,lv:7,n:`Ressurreição`,t:[],tempo:`1 hora`},{alc:`Toque`,area:`Esfera de 18 m`,cat:`Proteção`,dur:`Até ser dissipado`,e:`Leva 1 minuto. Inscreve um símbolo numa superfície até ser dissipado ou disparado. Disparado, cria uma esfera de 18 m por 10 minutos com um efeito: morte (Resistência, 10d10 de Dano Necrótico), discórdia, medo, desespero, insanidade, dor, sono ou atordoamento (Teste de Integridade correspondente).`,lv:7,n:`Glifo de Poder`,sigma:`10d10 de Dano Necrótico`,t:[`Θ`],tempo:`1 minuto`},{alc:`Toque`,cat:`Ilusão`,dur:`Até ser dissipado`,e:`Leva 12 horas. Cria uma cópia ilusória de uma criatura, com metade dos PV, sem equipamento e incapaz de recuperar poderes gastos. Obedece ao herói. Só um por vez.`,lv:7,n:`Clone Holográfico`,t:[],tempo:`12 horas`},{alc:`3 m`,cat:`Criação`,dano:`3d10 de Dano de Energia`,dur:`Instantâneo`,e:`O herói e até oito criaturas voluntárias (ou um objeto de até 3 m) vão para um destino no mesmo plano. A precisão depende da familiaridade:

- **Lugar bem conhecido:** chega quase sempre.
- **Lugar visto de passagem:** pode dar fora do alvo ou num lugar parecido.
- **Descrição vaga:** pode falhar e causar 3d10 de Dano de Energia.`,lv:7,n:`Teleporte`,t:[],tempo:`Ação`},{alc:`45 m`,area:`Cubos de 3 m`,cat:`Energia`,dur:`Instantâneo`,e:`Até dez cubos de 3 m, adjacentes entre si. Cada criatura neles faz Teste de Integridade (Reflexos): 7d10 de Dano de Fogo na falha, metade no sucesso. O herói pode poupar plantas.`,lv:7,n:`Tempestade de Fogo`,sigma:`7d10 de Dano de Fogo`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`},{alc:`36 m`,cat:`Criação`,dur:`24 horas`,e:`Leva 1 hora. Ergue um templo de até 36 m por 24 horas, com uma imagem sagrada. Criaturas de tipos escolhidos fazem Teste de Integridade (Magnetismo) ao entrar ou têm Desvantagem em ataques. Curas dentro do templo recebem +1d10 de bônus por Nível de Poder do poder de Cura.`,lv:7,n:`Fortaleza Sagrada`,t:[],tempo:`1 hora`,teste:`Magnetismo`},{alc:`Pessoal`,area:`Cone de 18 m`,cat:`Transformação`,dur:`1 minuto`,e:`Por até 1 minuto, o herói ganha:

- **Sentidos:** visão cega de 9 m.
- **Sopro:** com Ação Rápida em cada turno, sopro em cone de 18 m (Teste de Integridade (Reflexos), 6d8 de Dano de Energia, metade no sucesso).
- **Asas:** voo de 18 m.`,lv:7,n:`Forma Dracônica`,sigma:`6d8 de Dano de Energia`,t:[`Θ`,`Κ`],tempo:`Ação Rápida`,teste:`Reflexos`},{alc:`6 m`,cat:`Criação`,dur:`6 horas`,e:`Leva 10 minutos. O herói e até oito aliados viajam a outro mundo do Plano Material que conheçam, chegando num ponto aleatório. A passagem fica aberta por 6 horas para voltarem.`,lv:7,n:`Travessia entre Mundos`,t:[],tempo:`10 minutos`},{alc:`18 m`,cat:`Mente`,dur:`10 dias`,e:`Leva 1 hora. Por 10 dias, um objeto ou criatura emana um efeito sobre um tipo de criatura escolhido. O herói escolhe o efeito:

- **Repulsão:** as criaturas fazem Teste de Integridade (Espírito) ou ficam amedrontadas e se afastam.
- **Atração:** as criaturas fazem Teste de Integridade (Espírito) ou se sentem atraídas a se aproximar e ficar perto.

Quem passa fica imune por 1 minuto.`,lv:8,n:`Repulsão/Atração`,t:[`Ψ`],tempo:`1 hora`,teste:`Espírito`},{alc:`Pessoal`,area:`Aura de 9 m`,cat:`Proteção`,dur:`1 minuto`,e:`Aura de 9 m. Aliados nela têm Vantagem em todos os Testes de Integridade, e ataques contra eles têm Desvantagem. Se um infernal ou morto-vivo acertar um aliado corpo a corpo, faz Teste de Integridade (Resistência) ou fica cego até o fim do poder.`,lv:8,n:`Aura de Invencibilidade`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`Pessoal (3 m)`,area:`Esfera de 3 m`,cat:`Proteção`,dur:`1 hora`,e:`Esfera de 3 m que se move com o herói. Dentro dela, nenhum poder funciona, itens especiais viram comuns, criaturas invocadas somem temporariamente e teleporte não entra nem sai. Efeitos de Nível de Poder 9 e entidades poderosas podem ignorá-la.`,lv:8,n:`Campo Antipoder`,t:[`Θ`,`Κ`,`Ψ`,`Υ`],tempo:`Ação`},{alc:`Toque`,cat:`Entropia`,dur:`Instantâneo`,e:`Leva 1 hora. Cria um corpo inerte do herói (ou de outra criatura) que cresce em 120 dias. Se o original morrer depois disso, a alma vai para o clone, que desperta com a mesma mente e memórias.`,lv:8,n:`Clone de Reserva`,t:[`Ψ`],tempo:`1 hora`},{alc:`Pessoal (8 km)`,cat:`Transformação`,dur:`8 horas`,e:`Leva 10 minutos. Por até 8 horas, num raio de 8 km, o herói altera o clima em uma etapa por vez em cada categoria:

- **Precipitação:** claro, nublado, chuva, tempestade.
- **Temperatura:** de calor intenso a frio intenso.
- **Vento:** de calmo a vendaval.

Cada mudança leva 1d4 × 10 minutos.`,lv:8,n:`Controle Climático`,t:[`Κ`],tempo:`10 minutos`},{alc:`45 m`,cat:`Mente`,dano:`4d6 de Dano de Psíquico`,dur:`Instantâneo`,e:`Uma criatura sofre 4d6 de Dano de Psíquico e faz Teste de Integridade (Lógica). Falha: Lógica e Magnetismo caem a 1, não ativa poderes, não usa itens especiais nem se comunica. Repete o teste a cada 30 dias. Restauração Total, Cura Completa ou Reescrever a Realidade encerram.`,lv:8,n:`Apagão Mental`,t:[`Ψ`],tempo:`Ação`,teste:`Lógica`},{alc:`45 m`,area:`Cubo de 9 m`,cat:`Entropia`,dur:`Instantâneo`,e:`Cubo de 9 m. Cada criatura faz Teste de Integridade (Resistência): 12d8 de Dano Necrótico na falha, metade no sucesso. Plantas e criaturas vegetais têm Desvantagem e sofrem o máximo. Mortos-vivos e constructos não são afetados.`,lv:8,n:`Dessecação`,sigma:`12d8 de Dano Necrótico`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`},{alc:`18 m`,cat:`Mente`,dur:`1 hora`,e:`Uma criatura de qualquer tipo faz Teste de Integridade (Espírito) (Vantagem se estiver em combate com o herói) ou fica dominada e obedece a comandos telepáticos. Com uma Ação, o herói controla cada Ação dela. Sempre que sofre dano, repete o teste.`,lv:8,n:`Dominação Total`,t:[`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`,up:`Concentração até 8 horas em NP 9.`},{alc:`36 m`,area:`Cone de 18 m`,cat:`Ilusão`,dur:`1 minuto`,e:`Um dragão de sombras Enorme surge. Criaturas escolhidas que o vejam fazem Teste de Integridade (Espírito) ou ficam amedrontadas por 1 minuto. Com Ação Rápida, ele se move 18 m e sopra num cone de 18 m: Teste de Integridade (Lógica), 7d6 de um tipo escolhido na falha, metade no sucesso.`,lv:8,n:`Dragão Holográfico`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Espírito / Lógica`},{alc:`45 m`,area:`Esfera de 18 m`,cat:`Energia`,dur:`10 minutos`,e:`Esfera de 18 m de escuridão mágica, que nem visão no escuro atravessa. Quem começa o turno nela faz Teste de Integridade (Espírito): 8d8 de Dano de Psíquico na falha, metade no sucesso.`,lv:8,n:`Escuridão Enlouquecedora`,sigma:`8d8 de Dano de Psíquico`,t:[`Θ`,`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`45 m`,area:`Esfera de 12 m`,cat:`Energia`,dur:`1 minuto`,e:`Esfera de 12 m de escuridão e gravidade intensa, terreno difícil. Quem começa o turno nela faz Teste de Integridade (Resistência): 8d10 de Dano de Energia na falha, metade no sucesso. Quem cai a 0 PV nela vira pó. Nem som nem luz saem da área.`,lv:8,n:`Estrela Negra`,sigma:`8d10 de Dano de Energia`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`45 m`,area:`Esfera de 18 m de raio`,cat:`Energia`,dur:`Instantâneo`,e:`Esfera de 18 m de raio. Cada criatura faz Teste de Integridade (Resistência): falha, 12d6 de Dano Radiante e cega por 1 minuto (repete o teste ao fim de cada turno); sucesso, metade e sem cegueira. Dissipa escuridão de poder na área.`,lv:8,n:`Explosão Solar`,sigma:`12d6 de Dano Radiante`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`},{alc:`9 m`,cat:`Transformação`,dur:`24 horas`,e:`Por até 24 horas, qualquer número de criaturas voluntárias viram feras Grandes ou menores à escolha delas (use blocos de feras definidos pelo Mestre, de poder adequado ao nível). Mantêm a mente. Com Ação, trocam de forma ou voltam ao normal.`,lv:8,n:`Metamorfose em Grupo`,t:[`Κ`,`Ψ`],tempo:`Ação`},{alc:`1,5 km`,cat:`Criação`,dur:`Instantâneo`,e:`Leva 1 minuto. Ergue uma fortaleza de pedra de até 36 m de lado, com torres, muralhas, mobília e 100 servos invisíveis, a até 1,5 km. Se usado no mesmo lugar uma vez por semana por um ano, fica permanente.`,lv:8,n:`Cidadela`,t:[],tempo:`1 minuto`},{alc:`Pessoal`,cat:`Transformação`,dur:`1 hora`,e:`Por 1 hora, qualquer Teste de Parâmetro (Magnetismo) do herói vale no mínimo 15 no d20 + bônus, e mentiras que ele conte passam por poderes de detecção de verdade.`,lv:8,n:`Mentira Perfeita`,t:[],tempo:`Ação`},{alc:`18 m`,cat:`Criação`,dur:`10 minutos`,e:`Uma criatura é banida para um labirinto extradimensional. Com Ação, faz um Teste de Lógica (CD 20) para escapar. Ao escapar ou o poder terminar, volta ao espaço de onde saiu.`,lv:8,n:`Labirinto Dimensional`,t:[`Κ`],tempo:`Ação`},{alc:`Toque`,cat:`Proteção`,dur:`24 horas`,e:`Por 24 horas, a criatura tocada fica Imune a Dano de Psíquico, a qualquer efeito que leia emoções ou pensamentos, a adivinhação e a ficar dominada. Nem Reescrever a Realidade afeta a mente dela.`,lv:8,n:`Mente Blindada`,t:[`Ψ`],tempo:`Ação`},{alc:`45 m`,area:`Esfera de 6 m`,cat:`Criação`,dur:`1 minuto`,e:`Esfera de 6 m de brasas e fumaça, área bloqueada. Ao surgir e quando alguém entra ou termina o turno nela, Teste de Integridade (Reflexos): 10d8 de Dano de Fogo na falha, metade no sucesso. No início de cada turno do herói, a nuvem se move 3 m na direção escolhida.`,lv:8,n:`Nuvem Incendiária`,sigma:`10d8 de Dano de Fogo`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Reflexos`},{alc:`18 m`,cat:`Mente`,dur:`Instantâneo`,e:`Uma criatura com 150 PV ou menos fica atordoada. Repete Teste de Integridade (Resistência) ao fim de cada turno para encerrar. Acima de 150 PV, o Deslocamento dela cai a 0 até o próximo turno.`,lv:8,n:`Comando Absoluto: Atordoar`,t:[`Ψ`],tempo:`Ação`,teste:`Resistência`},{alc:`18 m`,cat:`Criação`,dano:`6d12 de Dano de Trovão + 6d12 de Dano de Energia`,dur:`1 minuto`,e:`Uma criatura faz Teste de Integridade (Espírito) ou fica incapacitada pela realidade distorcida. Role 1d10 em cada turno:

- **1–2:** nada.
- **3–5:** 6d12 de Dano de Trovão.
- **6–8:** 6d12 de Dano de Energia e é teleportada.
- **9–10:** 6d12 de Dano de Frio e fica impedida.

Repete o teste ao fim de cada turno.`,lv:8,n:`Ruptura da Realidade`,t:[`Κ`,`Ξ`],tempo:`Ação`,teste:`Espírito`},{alc:`18 m`,cat:`Criação`,dur:`1 hora`,e:`Uma porta surge numa superfície e leva a um espaço extradimensional vazio de 9 m de lado, por 1 hora. Quem está dentro quando o poder termina pode ficar preso ou ser expelido. O herói pode reabrir o mesmo semiplano com novos usos.`,lv:8,n:`Semiplano`,t:[],tempo:`Ação`},{alc:`Ilimitado`,cat:`Energia`,dur:`24 horas`,e:`Por 24 horas, o herói e uma criatura conhecida no mesmo plano ficam ligados por telepatia, compartilhando palavras, imagens e emoções.`,lv:8,n:`Telepatia`,t:[`Ψ`],tempo:`Ação`},{alc:`150 m`,cat:`Energia`,dano:`5d6 de Dano de Concussão`,dur:`1 minuto`,e:`Tremor de 30 m de raio por até 1 minuto. Concentrações no chão exigem Teste de Integridade (Resistência). No fim de cada turno do herói, criaturas no chão fazem Teste de Integridade (Reflexos) ou ficam caídas. Fissuras se abrem (1d6 de 3 m de profundidade, Reflexos para não cair). Construções sofrem 50 de dano por turno e podem desabar (5d6 de Dano de Concussão, Reflexos para metade).`,lv:8,n:`Terremoto`,t:[`Κ`],tempo:`Ação`,teste:`Resistência / Reflexos`},{alc:`Visão`,cat:`Criação`,dano:`6d10 de Dano de Concussão`,dur:`6 rodadas`,e:`Leva 1 minuto. Uma muralha de água de 90 m de comprimento, 90 m de altura e 15 m de espessura surge e avança 15 m por turno. Criaturas atingidas fazem Teste de Integridade (Potência): 6d10 de Dano de Concussão na falha, metade no sucesso, e são arrastadas. A cada turno, a altura cai 15 m e o dano 1d10.`,lv:8,n:`Tsunami`,t:[`Κ`],tempo:`1 minuto`,teste:`Potência`},{alc:`9 m`,cat:`Proteção`,dur:`Até ser dissipado`,e:`Leva 1 minuto. Uma criatura faz Teste de Integridade (Espírito) ou fica presa até ser dissipada, por um método: correntes, cela extradimensional, gema minúscula, sono eterno ou enterro profundo. O herói define uma condição que a liberta.`,lv:9,n:`Prisão Eterna`,t:[],tempo:`1 minuto`,teste:`Espírito`},{alc:`1,5 km`,area:`Esferas de 12 m de raio`,cat:`Energia`,dur:`Instantâneo`,e:`Quatro esferas de 12 m de raio, em pontos a até 1,5 km. Cada criatura numa delas faz Teste de Integridade (Reflexos): 20d6 de Dano de Fogo e 20d6 de Dano de Concussão na falha, metade no sucesso. Quem estiver em mais de uma esfera é afetado só uma vez.`,lv:9,n:`Chuva de Meteoros`,sigma:`20d6 de Dano de Fogo + 20d6 de Dano de Concussão`,t:[`Θ`],tempo:`Ação`,teste:`Reflexos`},{alc:`18 m`,cat:`Energia`,dur:`Instantâneo`,e:`O herói distribui até 700 PV de Cura entre criaturas que vê a até 18 m. Cada uma também deixa de estar cega, surda e doente. Não afeta mortos-vivos nem constructos.`,lv:9,n:`Cura em Massa`,t:[],tempo:`Ação`},{alc:`Pessoal`,cat:`Criação`,dano:`1d10 de Dano Necrótico`,dur:`Instantâneo`,e:`O poder mais poderoso. O herói escolhe um uso:

- **Uso seguro:** reproduz qualquer poder de Nível de Poder 8 ou menor.
- **Uso amplo:** criar um objeto de até 25.000 cr, Curar até 20 criaturas por completo, dar resistência a um tipo de dano, desfazer um evento recente, ou outro desejo à escolha do Mestre, que pode ter consequências inesperadas.

Depois de um desejo amplo, o herói sofre 1d10 de Dano Necrótico por poder ativado até uma Recuperação e tem 33% de chance de nunca mais usar Reescrever a Realidade.`,lv:9,n:`Reescrever a Realidade`,t:[],tempo:`Ação`},{alc:`27 m`,cat:`Transformação`,dano:`10d12 de Dano Necrótico`,dur:`Instantâneo`,e:`Uma criatura faz Teste de Integridade (Resistência): falha, 10d12 de Dano Necrótico e envelhece até quase o fim da vida (Desvantagem em ataques, Testes de Parâmetro e Testes de Integridade até ser Curada por Restauração Total ou similar); sucesso, metade e nada mais.`,lv:9,n:`Envelhecimento Súbito`,t:[],tempo:`Ação`,teste:`Resistência`},{alc:`27 m`,cat:`Mente`,dano:`14d6 de Dano de Psíquico`,dur:`Instantâneo`,e:`Até dez criaturas com Lógica 3 ou mais fazem Teste de Integridade (Lógica): falha, 14d6 de Dano de Psíquico e atordoadas (repetem o teste ao fim de cada turno); sucesso, metade. Quem morrer por este poder tem a cabeça explodida.`,lv:9,n:`Grito Psíquico`,t:[`Ψ`],tempo:`Ação`,teste:`Lógica`},{alc:`Pessoal`,cat:`Proteção`,dur:`10 minutos`,e:`Por até 10 minutos, o herói fica imune a todo dano.`,lv:9,n:`Invulnerabilidade`,t:[`Κ`],tempo:`Ação`},{alc:`18 m`,cat:`Criação`,dano:`4d12 de Dano de Energia`,dur:`1 minuto`,e:`Uma fenda em forma de lâmina surge a até 18 m. Ao ativar e com Ação Rápida nos turnos seguintes, ela se move 9 m e faz dois Jogadas de Ataque de Poder Corpo a Corpo contra criaturas a até 1,5 m: 4d12 de Dano de Energia cada, crítico com 18–20 no d20 (8d12).`,lv:9,n:`Lâmina da Fenda`,t:[`Κ`],tempo:`Ação Rápida`},{alc:`36 m`,cat:`Transformação`,dur:`1 hora`,e:`Até dez criaturas fazem Teste de Integridade (Espírito) (voluntários podem falhar) ou viram feras de poder equivalente ao nível delas. Usam os PV da nova forma; ao chegar a 0, voltam ao normal.`,lv:9,n:`Metamorfose em Massa`,t:[`Κ`],tempo:`Ação`,teste:`Espírito`},{alc:`9 m`,cat:`Transformação`,dur:`1 hora`,e:`Transforma uma criatura em outra criatura, uma criatura em objeto ou um objeto em criatura (Teste de Integridade (Espírito) se não quiser). Se a Concentração for mantida por 1 hora, fica permanente até ser dissipada.`,lv:9,n:`Metamorfose Total`,t:[`Κ`],tempo:`Ação`,teste:`Espírito`},{alc:`Pessoal`,cat:`Transformação`,dur:`1 hora`,e:`Por até 1 hora, o herói assume a forma de qualquer criatura que já viu, de poder até o seu nível. Usa os PV e Parâmetros físicos da forma, mantém a mente e pode ativar poderes. Com Ação, troca de forma. Ao chegar a 0 PV, volta ao normal.`,lv:9,n:`Forma Absoluta`,t:[`Κ`,`Ψ`],tempo:`Ação`},{alc:`18 m`,area:`Muralha de 27 m por 9 m ou esfera de 9 m`,cat:`Proteção`,dur:`10 minutos`,e:`Muralha de 27 m por 9 m ou esfera de 9 m, com sete camadas, por 10 minutos. Quem a atravessa enfrenta cada camada:

- **Vermelho:** 10d6 de Dano de Fogo.
- **Laranja:** 10d6 de Dano de Ácido.
- **Amarelo:** 10d6 de Dano Elétrico.
- **Verde:** 10d6 de Dano de Veneno.
- **Azul:** 10d6 de Dano de Frio.
- **Anil:** cristalização gradual (Resistência).
- **Violeta:** banimento (Espírito).

Nas camadas de vermelho a verde, Teste de Integridade (Reflexos), metade no sucesso. Quem a vê de perto faz Teste de Integridade (Resistência) ou fica cego por 1 minuto.`,lv:9,n:`Muralha Prismática`,sigma:`10d6 de Dano de Fogo + 10d6 de Dano de Ácido`,t:[`Θ`],tempo:`Ação`,teste:`Resistência`},{alc:`Toque`,cat:`Energia`,dur:`Instantâneo`,e:`A criatura tocada Recupera todos os PV e deixa de estar dominada, amedrontada, paralisada e atordoada. Se estava caída, pode se levantar como Reação.`,lv:9,n:`Comando Absoluto: Curar`,t:[],tempo:`Ação`},{alc:`18 m`,cat:`Mente`,dano:`12d12 de Dano de Psíquico`,dur:`Instantâneo`,e:`Uma criatura com 100 PV ou menos morre. Acima disso, sofre 12d12 de Dano de Psíquico.`,lv:9,n:`Comando Absoluto: Matar`,t:[`Ψ`],tempo:`Ação`},{alc:`Pessoal`,cat:`Transformação`,dur:`Instantâneo`,e:`O tempo para para todos, exceto o herói, que faz 1d4 + 1 turnos seguidos. O poder termina se ele afetar outra criatura ou objeto que alguém segure, ou se afastar mais de 300 m do ponto onde ativou.`,lv:9,n:`Parar o Tempo`,t:[],tempo:`Ação`},{alc:`36 m`,area:`Esfera de 9 m`,cat:`Ilusão`,dur:`1 minuto`,e:`Esfera de 9 m. Cada criatura faz Teste de Integridade (Espírito) ou fica amedrontada e, no início de cada turno, sofre 4d10 de Dano de Psíquico. Repete o teste ao fim de cada turno.`,lv:9,n:`Pesadelo Coletivo`,sigma:`4d10 de Dano de Psíquico`,t:[`Θ`,`Κ`,`Ψ`],tempo:`Ação`,teste:`Espírito`},{alc:`18 m`,cat:`Criação`,dur:`1 minuto`,e:`Abre um portal de até 6 m de diâmetro para outro plano por até 1 minuto. Ao abrir, o herói pode nomear uma criatura específica de outro plano: ela é puxada para perto dele.`,lv:9,n:`Portal`,t:[`Κ`],tempo:`Ação`},{alc:`Toque`,cat:`Percepção`,dur:`8 horas`,e:`Leva 1 minuto. Por 8 horas, a criatura tocada não pode ser surpreendida e tem Vantagem em ataques, Testes de Parâmetro e Testes de Integridade; ataques contra ela têm Desvantagem.`,lv:9,n:`Presciência`,t:[],tempo:`1 minuto`},{alc:`3 m`,cat:`Entropia`,dur:`Especial`,e:`Leva 1 hora. O herói e até oito aliados projetam-se no Plano Astral; os corpos ficam em animação suspensa. Um cordão prateado liga cada um ao corpo; se for cortado, a criatura morre.`,lv:9,n:`Projeção Astral`,t:[],tempo:`1 hora`},{alc:`Toque`,cat:`Entropia`,dur:`Instantâneo`,e:`Leva 1 hora. Uma criatura morta há até 200 anos volta à vida com todos os PV, mesmo sem corpo, desde que o herói diga o nome dela. Cura todos os venenos, doenças e maldições.`,lv:9,n:`Ressurreição Absoluta`,t:[],tempo:`1 hora`},{alc:`Visão`,cat:`Criação`,dano:`2d6 de Dano de Trovão + 4d6 de Dano de Ácido`,dur:`1 minuto`,e:`Uma nuvem de tempestade de 105 m de raio por até 1 minuto. A cada turno:

- **Turno 1:** Teste de Integridade (Resistência) ou 2d6 de Dano de Trovão e surdo.
- **Turno 2:** chuva ácida, 4d6 de Dano de Ácido.
- **Turno 3:** seis raios, 10d6 de Dano Elétrico (Reflexos, metade).
- **Turno 4:** granizo, 2d6 de Dano de Concussão.
- **Turnos 5–10:** vento, terreno difícil, Jogadas de Ataque à Distância impossíveis.`,lv:9,n:`Tempestade Apocalíptica`,t:[`Κ`],tempo:`Ação`,teste:`Resistência`},{alc:`300 m`,area:`Esfera de 6 m`,cat:`Energia`,dur:`1 minuto`,e:`Uma esfera de 6 m de vazio surge a até 300 m. Criaturas a até 30 m dela fazem Teste de Integridade (Potência) no início de cada turno ou são puxadas 6 m em direção ao centro. Quem entra ou começa o turno na esfera sofre 5d10 de Dano de Energia. Quem cai a 0 PV nela some. Acima do Nível de Poder existem os poderes proibidos, de Nível 10 a 12, chamados de poderes Fi (Φ). São forças capazes de reescrever cidades, apagar épocas ou dobrar a realidade inteira. Nenhum Arquétipo alcança esses níveis, e nenhum herói os aprende do jeito comum. Onde aparecem. Poderes Φ existem como artefatos, rituais esquecidos, entidades cósmicas e planos de vilões. Eles são ganchos de campanha, não opções de personagem. Ativar um poder Φ. Exige uma condição narrativa definida pelo Mestre (um artefato, um alinhamento de dimensões, o sacrifício de algo valioso) e, em geral, mais de um usuário de poderes. Sobrecarga Φ. Cada participante faz um Teste de Integridade (Resistência) com CD 21 (Nível 10), 22 (Nível 11) ou 23 (Nível 12). Falha dá 2 níveis de Exaustão (Η); sucesso dá 1. Não existe liberação na cena. Consequências. Todo poder Φ deixa uma marca no mundo: um Surto (Ξ) permanente, uma Zona Antipoder (Υ), uma fenda dimensional ou a atenção de algo que deveria continuar dormindo. O Mestre escolhe ou cria a consequência.`,lv:9,n:`Buraco Negro`,sigma:`5d10 de Dano de Energia`,t:[`Θ`,`Κ`],tempo:`Ação`,teste:`Potência`}];function ql(e){return String(e).replace(/\{ch[^}]*\}/g,``).normalize(`NFD`).replace(/[̀-ͯ]/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}function Jl(e){let t={};for(let n of e.trim().split(/\s+/))if(n){if(n.startsWith(`#`))t.id=n.slice(1);else if(n.includes(`=`)){let[e,r]=n.split(`=`);t[e]=r}else t[n]=!0}return t}function Yl(e){let t=String(e).match(/\((\d+)º/);return t?Number(t[1]):null}function Xl(e){let t=e.match(/^(#{1,4})\s+(.*)$/),n=t[2].trim(),r={},i=null,a=n.match(/\s*\{(?!ch\b)([^}]*)\}\s*$/);a&&(r=Jl(a[1]),n=n.slice(0,a.index).trim());let o=n.match(/\s*\{ch\s*([^}]*)\}\s*$/);return o&&(i=o[1].trim()||`·`,n=n.slice(0,o.index).trim()),{t:`h`,level:t[1].length,text:n,id:r.id||ql(n),attrs:r,ch:i,lvl:Yl(n)}}var Zl=e=>/^\s*\|/.test(e),Ql=e=>/^\s*(- |\d+\. )/.test(e);function $l(e){return e.trim().replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim())}function eu(e){let t=Array.isArray(e)?e:String(e).replace(/\r/g,``).split(`
`),n=[],r=0,i=null;for(;r<t.length;){let e=t[r];if(!e.trim()){r++;continue}let a=e.match(/^:::(\w+)\s*(.*)$/);if(a){let e=1,i=[];for(r++;r<t.length;){let n=t[r];if(/^:::\w/.test(n))e++;else if(/^:::\s*$/.test(n)&&(e--,e===0)){r++;break}i.push(n),r++}let o=a[1],s=a[2].trim();o===`widget`?n.push({t:`widget`,name:s}):n.push({t:`box`,name:o,arg:s,children:eu(i)});continue}let o=e.match(/^\{tabela\s+(\w+)\}\s*$/);if(o){i=o[1],r++;continue}if(/^#{1,4}\s/.test(e)){n.push(Xl(e)),r++;continue}if(Zl(e)){let e=[];for(;r<t.length&&Zl(t[r]);)e.push(t[r]),r++;let a=$l(e[0]),o=e.slice(1).filter(e=>!/^\s*\|\s*:?-{2,}/.test(e)).map($l);n.push({t:`table`,kind:i,head:a,rows:o}),i=null;continue}if(Ql(e)){let i=/^\s*\d+\. /.test(e),a=[];for(;r<t.length&&Ql(t[r]);){let e=t[r],n=e.match(/^\s*/)[0].length,i=e.replace(/^\s*(- |\d+\. )/,``);if(n>=2&&a.length){let e=a[a.length-1];(e.sub||=[]).push({md:i})}else a.push({md:i});r++}n.push({t:i?`ol`:`ul`,items:a});continue}let s=[];for(;r<t.length&&t[r].trim()&&!/^(#{1,4}\s|:::|\{tabela)/.test(t[r])&&!Zl(t[r])&&!Ql(t[r]);)s.push(t[r].trim()),r++;n.push({t:`p`,md:s.join(` `),lvl:Yl((s[0]||``).match(/^\*\*([^*]+)\*\*/)?.[1]||``)})}return n}function tu(e){let t=eu(e),n=[],r=null;for(let e of t)e.t===`h`&&e.level===1?(r={id:e.id,title:e.text,attrs:e.attrs,blocks:[]},n.push(r)):(r||(r={id:null,title:null,attrs:{},blocks:[]},n.push(r)),r.blocks.push(e));return n}function nu(e){let t=[];for(let n of e)n.t===`h`&&(n.level===2||n.level===3)&&t.push({id:n.id,text:n.text,level:n.level});return t}function ru(e,t,n={}){for(let r of e)t(r,n),r.t===`box`&&ru(r.children,t,{...n,box:r})}var iu={agarrado:{name:`Agarrado`,def:`Deslocamento 0. Termina se quem agarra ficar incapacitado ou se um efeito afastar os dois.`},amedrontado:{name:`Amedrontado`,def:`Desvantagem em Testes de Parâmetro e ataques enquanto a fonte do medo estiver à vista. Não pode se aproximar voluntariamente dela.`},atordoado:{name:`Atordoado`,def:`Incapacitado, não se move e só fala com dificuldade. Falha automaticamente em Testes de Integridade (Potência e Reflexos). Ataques contra ele têm Vantagem.`},caido:{name:`Caído`,def:`Só pode rastejar ou se levantar (metade do Deslocamento). Desvantagem em ataques. Corpo a corpo a até 1,5 m contra ele tem Vantagem; à distância, Desvantagem.`},cego:{name:`Cego`,def:`Não vê e falha em testes que dependem da visão. Ataques contra ele têm Vantagem; os ataques dele têm Desvantagem.`},cristalizado:{name:`Cristalizado`,def:`Matéria inerte: incapacitado, não se move nem fala, não percebe o ambiente. Ataques contra ele têm Vantagem; falha em Integridade (Potência e Reflexos); resistência a todo dano.`},dominado:{name:`Dominado`,def:`Não ataca quem o dominou nem o mira com efeitos nocivos. Quem o dominou tem Vantagem em testes sociais contra ele.`},envenenado:{name:`Envenenado`,def:`Desvantagem em ataques e Testes de Parâmetro.`},exausto:{name:`Exausto`,def:`Sofre os efeitos do seu nível de Exaustão (1 a 6, cumulativos).`},impedido:{name:`Impedido`,def:`Deslocamento 0. Ataques contra ele têm Vantagem; os dele têm Desvantagem. Desvantagem em Testes de Integridade (Reflexos).`},incapacitado:{name:`Incapacitado`,def:`Não pode fazer Ações, Ações Rápidas nem Reações, e perde a Concentração.`},inconsciente:{name:`Inconsciente`,def:`Incapacitado, caído, larga o que segura. Falha em Integridade (Potência e Reflexos). Ataques contra ele têm Vantagem; acertos a até 1,5 m são críticos.`},invisivel:{name:`Invisível`,def:`Não pode ser visto sem meios especiais. Ataques contra ele têm Desvantagem; os dele têm Vantagem.`},paralisado:{name:`Paralisado`,def:`Incapacitado, não se move nem fala. Falha em Integridade (Potência e Reflexos). Ataques contra ele têm Vantagem; acertos a até 1,5 m são críticos.`},surdo:{name:`Surdo`,def:`Não ouve e falha em testes que dependem da audição.`}},au=[[/^agarrad[oa]s?$/i,`agarrado`],[/^amedrontad[oa]s?$/i,`amedrontado`],[/^atordoad[oa]s?$/i,`atordoado`],[/^caíd[oa]s?$/i,`caido`],[/^ceg[oa]s?$/i,`cego`],[/^cristalizad[oa]s?$/i,`cristalizado`],[/^dominad[oa]s?$/i,`dominado`],[/^envenenad[oa]s?$/i,`envenenado`],[/^exaust[oa]s?$/i,`exausto`],[/^impedid[oa]s?$/i,`impedido`],[/^incapacitad[oa]s?$/i,`incapacitado`],[/^inconscientes?$/i,`inconsciente`],[/^invisíve(?:l|is)$/i,`invisivel`],[/^paralisad[oa]s?$/i,`paralisado`],[/^surd[oa]s?$/i,`surdo`]],ou=/(?<![\p{L}\p{N}])(agarrad[oa]s?|amedrontad[oa]s?|atordoad[oa]s?|caíd[oa]s?|ceg[oa]s?|cristalizad[oa]s?|dominad[oa]s?|envenenad[oa]s?|exaust[oa]s?|impedid[oa]s?|incapacitad[oa]s?|inconscientes?|invisíve(?:l|is)|paralisad[oa]s?|surd[oa]s?)(?![\p{L}\p{N}])/giu;function su(e){for(let[t,n]of au)if(t.test(e))return n;return null}var cu={vantagem:{term:`Vantagem`,def:`Role dois d20 e use o maior. Vantagens e Desvantagens se anulam uma a uma; cada Vantagem extra acrescenta 1d20.`,link:`/regras/vantagem-e-desvantagem`},desvantagem:{term:`Desvantagem`,def:`Role dois d20 e use o menor. Vantagens e Desvantagens se anulam uma a uma.`,link:`/regras/vantagem-e-desvantagem`},carga:{term:`Cargas Heroicas`,def:`Reserva de esforço heroico: 5 + metade do nível. Paga Características de Carga Heroica, soma 1d6 a um d20 ou salva um Teste de Estabilização. Volta toda na Recuperação.`,link:`/regras/cargas-heroicas`},sobrecarga:{term:`Sobrecarga (Η)`,def:`Na primeira ativação de cada Nível de Poder na cena: Teste de Integridade (Resistência), CD 11 + NP. Falha dá 1 nível de Exaustão Η e mantém o NP bloqueado.`,link:`/arquetipos/visao-geral/sobrecarga-eta`},integridade:{term:`Teste de Integridade`,def:`d20 + modificador do Parâmetro (+ Bônus de Proficiência se o Arquétipo der proficiência) contra a CD do efeito. Resiste a poderes, venenos e perigos.`,link:`/regras/testes-de-integridade`},parametro:{term:`Teste de Parâmetro`,def:`d20 + modificador do Parâmetro (+ Bônus de Proficiência se a perícia ou ferramenta se aplicar) contra a CD definida pelo Mestre.`,link:`/regras/testes-de-parametro`},cdpoder:{term:`CD de Poder`,def:`8 + Bônus de Proficiência + modificador do Parâmetro de poder.`,link:`/arquetipos/visao-geral/termos-do-capitulo`},proficiencia:{term:`Bônus de Proficiência`,def:`+2 (nív. 1–4), +3 (5–8), +4 (9–12), +5 (13–16), +6 (17–20). Nunca soma duas vezes na mesma rolagem.`,link:`/regras/bonus-de-proficiencia`},concentracao:{term:`Concentração (Κ)`,def:`Um poder de Concentração por vez. Ao sofrer dano: Integridade (Resistência), CD 10 ou metade do dano (o maior).`,link:`/regras/concentracao`},pausa:{term:`Pausa`,def:`Pelo menos 1 hora de atividade leve. Permite gastar Matrizes de Vitalidade para recuperar PV.`,link:`/regras/pausa-e-recuperacao`},recuperacao:{term:`Recuperação`,def:`8 horas de descanso. Recupera todos os PV, metade das Matrizes de Vitalidade, reduz 1 nível de Exaustão e devolve as Cargas Heroicas.`,link:`/regras/pausa-e-recuperacao`},matriz:{term:`Matriz de Vitalidade`,def:`Uma por nível, do tipo do Arquétipo. Na Pausa, role o dado + Resistência para recuperar PV.`,link:`/regras/pausa-e-recuperacao`},acaorapida:{term:`Ação Rápida`,def:`Ação extra concedida apenas por características ou poderes. No máximo uma por turno.`,link:`/regras/o-seu-turno`},reacao:{term:`Reação`,def:`Resposta instantânea a um gatilho, como um Contra-ataque. Uma por rodada, recuperada no início do seu turno.`,link:`/regras/o-seu-turno`},contraataque:{term:`Contra-ataque`,def:`Reação: ataque corpo a corpo contra uma criatura hostil que sai do seu alcance. Teleporte e movimento forçado não provocam.`,link:`/regras/fazendo-um-ataque`},exaustao:{term:`Exaustão`,def:`Níveis 1 a 6, cumulativos: Desv. em Testes de Parâmetro → Deslocamento ½ → Desv. em ataques e Integridade → PV máx. ½ → Deslocamento 0 → morte.`,link:`/regras/exaustao`},tecnica:{term:`Técnica (Ο)`,def:`Poder simples, usado à vontade e sem Teste de Sobrecarga. Também chamada de poder Ômicron.`,link:`/poderes`},np:{term:`Nível de Poder`,def:`A potência de um poder, de 1 a 9 (Zeta a Ômega). Cada Arquétipo tem um Nível de Poder máximo por nível.`,link:`/arquetipos/visao-geral/niveis-de-poder`},pvtemp:{term:`PV temporários`,def:`Absorvem dano antes dos PV normais. Não se acumulam (fique com o maior) e somem após uma Recuperação.`,link:`/regras/dano-e-cura`},ritual:{term:`Ritual (Τ)`,def:`Poderes com Τ podem ser ativados com 10 minutos a mais, sem Teste de Sobrecarga.`,link:`/poderes/como-ler`}},lu={"access-point":`M4.93,4.93C3.12,6.74 2,9.24 2,12C2,14.76 3.12,17.26 4.93,19.07L6.34,17.66C4.89,16.22 4,14.22 4,12C4,9.79 4.89,7.78 6.34,6.34L4.93,4.93M19.07,4.93L17.66,6.34C19.11,7.78 20,9.79 20,12C20,14.22 19.11,16.22 17.66,17.66L19.07,19.07C20.88,17.26 22,14.76 22,12C22,9.24 20.88,6.74 19.07,4.93M7.76,7.76C6.67,8.85 6,10.35 6,12C6,13.65 6.67,15.15 7.76,16.24L9.17,14.83C8.45,14.11 8,13.11 8,12C8,10.89 8.45,9.89 9.17,9.17L7.76,7.76M16.24,7.76L14.83,9.17C15.55,9.89 16,10.89 16,12C16,13.11 15.55,14.11 14.83,14.83L16.24,16.24C17.33,15.15 18,13.65 18,12C18,10.35 17.33,8.85 16.24,7.76M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z`,account:`M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z`,"account-group":`M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z`,"account-plus":`M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z`,"account-search":`M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M10,4A4,4 0 0,1 14,8C14,8.91 13.69,9.75 13.18,10.43C12.32,10.75 11.55,11.26 10.91,11.9L10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M2,20V18C2,15.88 5.31,14.14 9.5,14C9.18,14.78 9,15.62 9,16.5C9,17.79 9.38,19 10,20H2Z`,"account-star":`M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.87,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z`,"account-switch":`M16 9C22 9 22 13 22 13V15H16V13C16 13 16 11.31 14.85 9.8C14.68 9.57 14.47 9.35 14.25 9.14C14.77 9.06 15.34 9 16 9M2 13C2 13 2 9 8 9S14 13 14 13V15H2V13M9 17V19H15V17L18 20L15 23V21H9V23L6 20L9 17M8 1C6.34 1 5 2.34 5 4S6.34 7 8 7 11 5.66 11 4 9.66 1 8 1M16 1C14.34 1 13 2.34 13 4S14.34 7 16 7 19 5.66 19 4 17.66 1 16 1Z`,"account-voice":`M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z`,"alert-circle":`M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z`,"alert-decagram":`M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z`,"alert-octagon":`M13 13H11V7H13M11 15H13V17H11M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3Z`,"alphabet-greek":`M16 6C14.36 6 13 7.36 13 9V21H15V9C15 8.43 15.43 8 16 8H17C17.57 8 18 8.43 18 9V10C18 10.57 17.57 11 17 11H16V13H17C17.57 13 18 13.43 18 14V15C18 15.57 17.57 16 17 16H16V18H17C18.65 18 20 16.65 20 15V14C20 13.18 19.59 12.46 19 12C19.59 11.54 20 10.82 20 10V9C20 7.36 18.65 6 17 6M7 9C5.36 9 4 10.36 4 12V15C4 16.65 5.36 18 7 18H7.7C8.2 18 8.65 17.81 9 17.5V18H11V9H9V9.5C8.65 9.19 8.2 9 7.7 9M7 11H8C8.57 11 9 11.43 9 12V15C9 15.57 8.57 16 8 16H7C6.43 16 6 15.57 6 15V12C6 11.43 6.43 11 7 11Z`,anchor:`M12 2A3 3 0 0 0 9 5A3 3 0 0 0 11 7.83V9H8V11H11V19.92C10.26 19.79 9.5 19.58 8.79 19.27C8.05 18.95 7.4 18.56 6.82 18.09C6.24 17.62 5.78 17.11 5.44 16.55L7 15L3 12V15C3 15.97 3.27 16.88 3.82 17.72C4.37 18.56 5.09 19.31 6 19.95C6.87 20.59 7.84 21.09 8.88 21.45C9.93 21.81 10.97 22 12 22C13.03 22 14.07 21.8 15.12 21.44C16.16 21.08 17.13 20.58 18 19.95C18.92 19.31 19.63 18.57 20.18 17.72C20.73 16.88 21 15.97 21 15V12L17 15L18.56 16.55C18.22 17.11 17.76 17.62 17.18 18.09C16.6 18.56 15.95 18.95 15.21 19.27C14.5 19.58 13.74 19.79 13 19.92V11H16V9H13V7.82A3 3 0 0 0 15 5A3 3 0 0 0 12 2M12 4A1 1 0 0 1 13 5A1 1 0 0 1 12 6A1 1 0 0 1 11 5A1 1 0 0 1 12 4Z`,anvil:`M9,5V10C13.03,12.47 8.44,14.97 6,16V19H21V16C14.59,13.27 17.47,9 22,8V5H9M2,6C2.81,8.13 4.42,9.5 7,10V6H2Z`,"arm-flex":`M3 18.34C3 18.34 4 7.09 7 3L12 4L11 7.09H9V14.25H10C12 11.18 16.14 10.06 18.64 11.18C21.94 12.71 21.64 17.32 18.64 19.36C16.24 21 9 22.43 3 18.34Z`,"arrow-collapse-down":`M19.92,12.08L12,20L4.08,12.08L5.5,10.67L11,16.17V2H13V16.17L18.5,10.66L19.92,12.08M12,20H2V22H22V20H12Z`,"arrow-down-bold-hexagon-outline":`M12,17L7,12H10V8H14V12H17L12,17M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z`,"arrow-expand-all":`M9.5,13.09L10.91,14.5L6.41,19H10V21H3V14H5V17.59L9.5,13.09M10.91,9.5L9.5,10.91L5,6.41V10H3V3H10V5H6.41L10.91,9.5M14.5,13.09L19,17.59V14H21V21H14V19H17.59L13.09,14.5L14.5,13.09M13.09,9.5L17.59,5H14V3H21V10H19V6.41L14.5,10.91L13.09,9.5Z`,"arrow-projectile":`M22 2L20 7L19.03 6.03L8 17.06V19L5 22L4 20L2 19L5 16H6.94L17.97 4.97L17 4L22 2Z`,"arrow-up-bold-circle":`M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,7L7,12H10V16H14V12H17L12,7Z`,"arrow-up-bold-hexagon-outline":`M12,7L17,12H14V16H10V12H7L12,7M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z`,asterisk:`M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z`,atom:`M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M4.22,4.22C5.65,2.79 8.75,3.43 12,5.56C15.25,3.43 18.35,2.79 19.78,4.22C21.21,5.65 20.57,8.75 18.44,12C20.57,15.25 21.21,18.35 19.78,19.78C18.35,21.21 15.25,20.57 12,18.44C8.75,20.57 5.65,21.21 4.22,19.78C2.79,18.35 3.43,15.25 5.56,12C3.43,8.75 2.79,5.65 4.22,4.22M15.54,8.46C16.15,9.08 16.71,9.71 17.23,10.34C18.61,8.21 19.11,6.38 18.36,5.64C17.62,4.89 15.79,5.39 13.66,6.77C14.29,7.29 14.92,7.85 15.54,8.46M8.46,15.54C7.85,14.92 7.29,14.29 6.77,13.66C5.39,15.79 4.89,17.62 5.64,18.36C6.38,19.11 8.21,18.61 10.34,17.23C9.71,16.71 9.08,16.15 8.46,15.54M5.64,5.64C4.89,6.38 5.39,8.21 6.77,10.34C7.29,9.71 7.85,9.08 8.46,8.46C9.08,7.85 9.71,7.29 10.34,6.77C8.21,5.39 6.38,4.89 5.64,5.64M9.88,14.12C10.58,14.82 11.3,15.46 12,16.03C12.7,15.46 13.42,14.82 14.12,14.12C14.82,13.42 15.46,12.7 16.03,12C15.46,11.3 14.82,10.58 14.12,9.88C13.42,9.18 12.7,8.54 12,7.97C11.3,8.54 10.58,9.18 9.88,9.88C9.18,10.58 8.54,11.3 7.97,12C8.54,12.7 9.18,13.42 9.88,14.12M18.36,18.36C19.11,17.62 18.61,15.79 17.23,13.66C16.71,14.29 16.15,14.92 15.54,15.54C14.92,16.15 14.29,16.71 13.66,17.23C15.79,18.61 17.62,19.11 18.36,18.36Z`,"atom-variant":`M18.36,2.64C20,2.64 21.36,4 21.36,5.64C21.36,7.29 20,8.64 18.36,8.64C16.71,8.64 15.36,7.29 15.36,5.64C15.36,5.34 15.41,5.06 15.5,4.8C14.43,4.29 13.25,4 12,4A8,8 0 0,0 4,12L4.04,12.84L2.05,13.05L2,12A10,10 0 0,1 12,2C13.69,2 15.28,2.42 16.67,3.16C17.16,2.83 17.74,2.64 18.36,2.64M18.36,4.64A1,1 0 0,0 17.36,5.64A1,1 0 0,0 18.36,6.64C18.92,6.64 19.36,6.19 19.36,5.64C19.36,5.08 18.92,4.64 18.36,4.64M5.64,15.36C7.29,15.36 8.64,16.71 8.64,18.36C8.64,18.66 8.59,18.94 8.5,19.2C9.57,19.71 10.75,20 12,20A8,8 0 0,0 20,12L19.96,11.16L21.95,10.95L22,12A10,10 0 0,1 12,22C10.31,22 8.72,21.58 7.33,20.84C6.84,21.17 6.26,21.36 5.64,21.36C4,21.36 2.64,20 2.64,18.36C2.64,16.71 4,15.36 5.64,15.36M5.64,17.36C5.08,17.36 4.64,17.81 4.64,18.36C4.64,18.92 5.08,19.36 5.64,19.36A1,1 0 0,0 6.64,18.36A1,1 0 0,0 5.64,17.36M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z`,"auto-fix":`M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z`,axe:`M12,2L22,8C22,12 20,14 16,15L13,10L9,6L12,2M4.11,19.84L2.12,18.33L9.19,9L11,10.81L4.11,19.84Z`,"badge-account":`M17,3H14V6H10V3H7A2,2 0 0,0 5,5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V5A2,2 0 0,0 17,3M12,8A2,2 0 0,1 14,10A2,2 0 0,1 12,12A2,2 0 0,1 10,10A2,2 0 0,1 12,8M16,16H8V15C8,13.67 10.67,13 12,13C13.33,13 16,13.67 16,15V16M13,5H11V1H13V5M16,19H8V18H16V19M12,21H8V20H12V21Z`,"bag-personal":`M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,16H9V18H8V16H6V15H18V16Z`,bank:`M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z`,"battery-alert-variant-outline":`M14 20H6V6H14M14.67 4H13V2H7V4H5.33C4.6 4 4 4.6 4 5.33V20.67C4 21.4 4.6 22 5.33 22H14.67C15.4 22 16 21.4 16 20.67V5.33C16 4.6 15.4 4 14.67 4M21 7H19V13H21V8M21 15H19V17H21V15Z`,"battery-charging":`M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.66C6,21.4 6.6,22 7.33,22H16.66C17.4,22 18,21.4 18,20.67V5.33C18,4.6 17.4,4 16.67,4M11,20V14.5H9L13,7V12.5H15`,"battery-sync":`M13.54 22H7.33C6.6 22 6 21.4 6 20.67V5.33C6 4.6 6.6 4 7.33 4H9V2H15V4H16.67C17.4 4 18 4.6 18 5.33V12C14.69 12 12 14.69 12 18C12 19.54 12.58 20.94 13.54 22M18 13L20.25 15.25L18 17.5V16C16.15 16 14.94 17.96 15.76 19.62L14.67 20.71C12.91 18.05 14.81 14.5 18 14.5V13M18 24L15.75 21.75L18 19.5V21C19.85 21 21.06 19.04 20.24 17.38L21.33 16.29C23.09 18.95 21.19 22.5 18 22.5V24`,bed:`M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z`,bee:`M17.4 9C17 7.8 16.2 7 15 6.5V5H14V6.4H13.6C12.5 6.4 11.6 6.8 10.8 7.6L10.4 8L9 7.5C8.7 7.4 8.4 7.3 8 7.3C7.4 7.3 6.8 7.5 6.3 7.9C5.7 8.3 5.4 8.8 5.2 9.3C5 10 5 10.6 5.2 11.3C5.5 12 5.8 12.5 6.3 12.8C5.9 14.3 6.2 15.6 7.3 16.7C8.1 17.5 9 17.9 10.1 17.9C10.6 17.9 10.9 17.9 11.2 17.8C11.8 18.6 12.6 19.1 13.6 19.1C13.9 19.1 14.3 19.1 14.6 19C15.2 18.8 15.6 18.4 16 17.9C16.4 17.3 16.6 16.8 16.6 16.2C16.6 15.8 16.6 15.5 16.5 15.2L16 13.6L16.6 13.2C17.4 12.4 17.8 11.3 17.7 10.1H19V9H17.4M7.7 11.3C7.1 11 6.9 10.6 7.1 10C7.3 9.4 7.7 9.2 8.3 9.4L11.5 10.6C9.9 11.4 8.7 11.6 7.7 11.3M14 16.9C13.4 17.1 13 16.9 12.7 16.3C12.4 15.3 12.6 14.1 13.4 12.5L14.6 15.6C14.8 16.3 14.6 16.7 14 16.9M15.2 11.6L14.6 10V9.9L14.3 9.6H14.2L12.6 9C13 8.7 13.4 8.5 13.9 8.5C14.4 8.5 14.9 8.7 15.3 9.1C15.7 9.5 15.9 9.9 15.9 10.4C15.7 10.7 15.5 11.2 15.2 11.6Z`,biohazard:`M23,16.06C23,16.29 23,16.5 22.96,16.7C22.78,14.14 20.64,12.11 18,12.11C17.63,12.11 17.27,12.16 16.92,12.23C16.96,12.5 17,12.73 17,13C17,15.35 15.31,17.32 13.07,17.81C13.42,20.05 15.31,21.79 17.65,21.96C17.43,22 17.22,22 17,22C14.92,22 13.07,20.94 12,19.34C10.93,20.94 9.09,22 7,22C6.78,22 6.57,22 6.35,21.96C8.69,21.79 10.57,20.06 10.93,17.81C8.68,17.32 7,15.35 7,13C7,12.73 7.04,12.5 7.07,12.23C6.73,12.16 6.37,12.11 6,12.11C3.36,12.11 1.22,14.14 1.03,16.7C1,16.5 1,16.29 1,16.06C1,12.85 3.59,10.24 6.81,10.14C6.3,9.27 6,8.25 6,7.17C6,4.94 7.23,3 9.06,2C7.81,2.9 7,4.34 7,6C7,7.35 7.56,8.59 8.47,9.5C9.38,8.59 10.62,8.04 12,8.04C13.37,8.04 14.62,8.59 15.5,9.5C16.43,8.59 17,7.35 17,6C17,4.34 16.18,2.9 14.94,2C16.77,3 18,4.94 18,7.17C18,8.25 17.7,9.27 17.19,10.14C20.42,10.24 23,12.85 23,16.06M9.27,10.11C10.05,10.62 11,10.92 12,10.92C13,10.92 13.95,10.62 14.73,10.11C14,9.45 13.06,9.03 12,9.03C10.94,9.03 10,9.45 9.27,10.11M12,14.47C12.82,14.47 13.5,13.8 13.5,13A1.5,1.5 0 0,0 12,11.5A1.5,1.5 0 0,0 10.5,13C10.5,13.8 11.17,14.47 12,14.47M10.97,16.79C10.87,14.9 9.71,13.29 8.05,12.55C8.03,12.7 8,12.84 8,13C8,14.82 9.27,16.34 10.97,16.79M15.96,12.55C14.29,13.29 13.12,14.9 13,16.79C14.73,16.34 16,14.82 16,13C16,12.84 15.97,12.7 15.96,12.55Z`,bird:`M23 11.5L19.95 10.37C19.69 9.22 19.04 8.56 19.04 8.56C17.4 6.92 14.75 6.92 13.11 8.56L11.63 10.04L5 3C4 7 5 11 7.45 14.22L2 19.5C2 19.5 10.89 21.5 16.07 17.45C18.83 15.29 19.45 14.03 19.84 12.7L23 11.5M17.71 11.72C17.32 12.11 16.68 12.11 16.29 11.72C15.9 11.33 15.9 10.7 16.29 10.31C16.68 9.92 17.32 9.92 17.71 10.31C18.1 10.7 18.1 11.33 17.71 11.72Z`,bomb:`M11.25,6A3.25,3.25 0 0,1 14.5,2.75A3.25,3.25 0 0,1 17.75,6C17.75,6.42 18.08,6.75 18.5,6.75C18.92,6.75 19.25,6.42 19.25,6V5.25H20.75V6A2.25,2.25 0 0,1 18.5,8.25A2.25,2.25 0 0,1 16.25,6A1.75,1.75 0 0,0 14.5,4.25A1.75,1.75 0 0,0 12.75,6H14V7.29C16.89,8.15 19,10.83 19,14A7,7 0 0,1 12,21A7,7 0 0,1 5,14C5,10.83 7.11,8.15 10,7.29V6H11.25M22,6H24V7H22V6M19,4V2H20V4H19M20.91,4.38L22.33,2.96L23.04,3.67L21.62,5.09L20.91,4.38Z`,"book-open-page-variant":`M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z`,"book-open-variant":`M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M12 8V19.5C13.35 18.65 15.8 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8M13 11.5C14.11 10.82 15.6 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C15.73 9 14.23 9.28 13 9.84V11.5M17.5 11.67C15.79 11.67 14.29 11.93 13 12.46V14.15C14.11 13.5 15.6 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67M20 14.57C19.13 14.41 18.29 14.33 17.5 14.33C15.67 14.33 14.17 14.6 13 15.13V16.82C14.11 16.16 15.6 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57Z`,"bottle-tonic-outline":`M13 4H11L10 2H14L13 4M19 13V22H5V13C5 10.24 7.24 8 10 8V6H9V5H15V6H14V8C16.76 8 19 10.24 19 13M17 13C17 11.35 15.65 10 14 10H10C8.35 10 7 11.35 7 13V20H17V13Z`,"bow-arrow":`M19.03 6.03L20 7L22 2L17 4L17.97 4.97L16.15 6.79C10.87 2.16 3.3 3.94 2.97 4L2 4.26L2.5 6.2L3.29 6L10.12 12.82L6.94 16H5L2 19L4 20L5 22L8 19V17.06L11.18 13.88L18 20.71L17.81 21.5L19.74 22L20 21.03C20.06 20.7 21.84 13.13 17.21 7.85L19.03 6.03M4.5 5.78C6.55 5.5 11.28 5.28 14.73 8.21L10.82 12.12L4.5 5.78M18.22 19.5L11.88 13.18L15.79 9.27C18.72 12.72 18.5 17.45 18.22 19.5Z`,"boxing-glove":`M19,16V6H22V16H19M12,4C8,4 7,4 7,4C7,4 2,4 2,8V14C2,15.77 3,16.76 4.07,17.31C4.4,15.43 6.03,14 8,14H11V16H8A2,2 0 0,0 6,18C6,19.11 6.9,20 8,20H13C17,20 17,16 17,16V6C17,6 16,4 12,4Z`,brain:`M21.33,12.91C21.42,14.46 20.71,15.95 19.44,16.86L20.21,18.35C20.44,18.8 20.47,19.33 20.27,19.8C20.08,20.27 19.69,20.64 19.21,20.8L18.42,21.05C18.25,21.11 18.06,21.14 17.88,21.14C17.37,21.14 16.89,20.91 16.56,20.5L14.44,18C13.55,17.85 12.71,17.47 12,16.9C11.5,17.05 11,17.13 10.5,17.13C9.62,17.13 8.74,16.86 8,16.34C7.47,16.5 6.93,16.57 6.38,16.56C5.59,16.57 4.81,16.41 4.08,16.11C2.65,15.47 1.7,14.07 1.65,12.5C1.57,11.78 1.69,11.05 2,10.39C1.71,9.64 1.68,8.82 1.93,8.06C2.3,7.11 3,6.32 3.87,5.82C4.45,4.13 6.08,3 7.87,3.12C9.47,1.62 11.92,1.46 13.7,2.75C14.12,2.64 14.56,2.58 15,2.58C16.36,2.55 17.65,3.15 18.5,4.22C20.54,4.75 22,6.57 22.08,8.69C22.13,9.8 21.83,10.89 21.22,11.82C21.29,12.18 21.33,12.54 21.33,12.91M16.33,11.5C16.9,11.57 17.35,12 17.35,12.57A1,1 0 0,1 16.35,13.57H15.72C15.4,14.47 14.84,15.26 14.1,15.86C14.35,15.95 14.61,16 14.87,16.07C20,16 19.4,12.87 19.4,12.82C19.34,11.39 18.14,10.27 16.71,10.33A1,1 0 0,1 15.71,9.33A1,1 0 0,1 16.71,8.33C17.94,8.36 19.12,8.82 20.04,9.63C20.09,9.34 20.12,9.04 20.12,8.74C20.06,7.5 19.5,6.42 17.25,6.21C16,3.25 12.85,4.89 12.85,5.81V5.81C12.82,6.04 13.06,6.53 13.1,6.56A1,1 0 0,1 14.1,7.56C14.1,8.11 13.65,8.56 13.1,8.56V8.56C12.57,8.54 12.07,8.34 11.67,8C11.19,8.31 10.64,8.5 10.07,8.56V8.56C9.5,8.61 9.03,8.21 9,7.66C8.92,7.1 9.33,6.61 9.88,6.56C10.04,6.54 10.82,6.42 10.82,5.79V5.79C10.82,5.13 11.07,4.5 11.5,4C10.58,3.75 9.59,4.08 8.59,5.29C6.75,5 6,5.25 5.45,7.2C4.5,7.67 4,8 3.78,9C4.86,8.78 5.97,8.87 7,9.25C7.5,9.44 7.78,10 7.59,10.54C7.4,11.06 6.82,11.32 6.3,11.13C5.57,10.81 4.75,10.79 4,11.07C3.68,11.34 3.68,11.9 3.68,12.34C3.68,13.08 4.05,13.77 4.68,14.17C5.21,14.44 5.8,14.58 6.39,14.57C6.24,14.31 6.11,14.04 6,13.76C5.81,13.22 6.1,12.63 6.64,12.44C7.18,12.25 7.77,12.54 7.96,13.08C8.36,14.22 9.38,15 10.58,15.13C11.95,15.06 13.17,14.25 13.77,13C14,11.62 15.11,11.5 16.33,11.5M18.33,18.97L17.71,17.67L17,17.83L18,19.08L18.33,18.97M13.68,10.36C13.7,9.83 13.3,9.38 12.77,9.33C12.06,9.29 11.37,9.53 10.84,10C10.27,10.58 9.97,11.38 10,12.19A1,1 0 0,0 11,13.19C11.57,13.19 12,12.74 12,12.19C12,11.92 12.07,11.65 12.23,11.43C12.35,11.33 12.5,11.28 12.66,11.28C13.21,11.31 13.68,10.9 13.68,10.36Z`,broadcast:`M12 10C10.9 10 10 10.9 10 12S10.9 14 12 14 14 13.1 14 12 13.1 10 12 10M18 12C18 8.7 15.3 6 12 6S6 8.7 6 12C6 14.2 7.2 16.1 9 17.2L10 15.5C8.8 14.8 8 13.5 8 12.1C8 9.9 9.8 8.1 12 8.1S16 9.9 16 12.1C16 13.6 15.2 14.9 14 15.5L15 17.2C16.8 16.2 18 14.2 18 12M12 2C6.5 2 2 6.5 2 12C2 15.7 4 18.9 7 20.6L8 18.9C5.6 17.5 4 14.9 4 12C4 7.6 7.6 4 12 4S20 7.6 20 12C20 15 18.4 17.5 16 18.9L17 20.6C20 18.9 22 15.7 22 12C22 6.5 17.5 2 12 2Z`,bug:`M14,12H10V10H14M14,16H10V14H14M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z`,bullet:`M14,22H10V21H14V22M13,10V7H11V10L10,11.5V20H14V11.5L13,10M12,2C12,2 11,3 11,5V6H13V5C13,5 13,3 12,2Z`,bullhorn:`M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z`,"bullseye-arrow":`M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z`,butterfly:`M13 21H11V6L9.03 3.97L10 3L12 5L14 3L15 4L13 6V21M7 6C4.24 6 2 8.24 2 11C2 12.64 2.79 14.09 4 15H4V17C4 19.21 5.79 21 8 21C8.72 21 9.39 20.81 9.97 20.5L10 20.46V7C9.16 6.37 8.13 6 7 6M6.5 12.5L5 11L6.5 9.5L8 11L6.5 12.5M22 11C22 8.24 19.76 6 17 6C15.88 6 14.85 6.37 14 7L14 7V20.46C14.59 20.81 15.27 21 16 21C18.21 21 20 19.21 20 17V15H20C21.21 14.09 22 12.64 22 11M17.5 12.5L16 11L17.5 9.5L19 11L17.5 12.5Z`,cactus:`M14,16V21H10V18H9A3,3 0 0,1 6,15V12A1,1 0 0,1 7,11A1,1 0 0,1 8,12V15C8,15.56 8.45,16 9,16H10V6A2,2 0 0,1 12,4A2,2 0 0,1 14,6V14H15A1,1 0 0,0 16,13V11A1,1 0 0,1 17,10A1,1 0 0,1 18,11V13A3,3 0 0,1 15,16H14Z`,"calculator-variant":`M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M13 7.1L14.1 6L15.5 7.4L16.9 6L18 7.1L16.6 8.5L18 9.9L16.9 11L15.5 9.6L14.1 11L13 9.9L14.4 8.5L13 7.1M6.2 7.7H11.2V9.2H6.2V7.7M11.5 16H9.5V18H8V16H6V14.5H8V12.5H9.5V14.5H11.5V16M18 17.2H13V15.7H18V17.2M18 14.8H13V13.3H18V14.8Z`,car:`M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z`,"car-sports":`M12,8.5H7L4,11H3C1.89,11 1,11.89 1,13V16H3.17C3.6,17.2 4.73,18 6,18C7.27,18 8.4,17.2 8.82,16H15.17C15.6,17.2 16.73,18 18,18C19.27,18 20.4,17.2 20.82,16H23V15C23,13.89 21.97,13.53 21,13L12,8.5M5.25,12L7.5,10H11.5L15.5,12H5.25M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,1.5 0 0,1 18,13.5Z`,"card-account-details":`M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z`,"card-account-details-outline":`M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14`,"card-account-details-star":`M20 22.09L22.45 23.58L21.8 20.77L24 18.89L21.11 18.64L20 16L18.87 18.64L16 18.89L18.18 20.77L17.5 23.58L20 22.09M14.08 21H2C.95 21 0 20.05 0 19V5C0 3.95 .95 3 2 3H22C23.05 3 24 3.95 24 5V15.53C22.94 14.58 21.54 14 20 14C16.69 14 14 16.69 14 20C14 20.34 14.03 20.68 14.08 21M8 13.91C6 13.91 2 15 2 17V18H14V17C14 15 10 13.91 8 13.91M8 6C6.35 6 5 7.35 5 9C5 10.65 6.35 12 8 12C9.65 12 11 10.65 11 9C11 7.35 9.65 6 8 6M21 10H14V11H21V10M22 8H14V9H22V8M22 6H14V7H22V6Z`,"card-text":`M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M5,13V15H16V13H5M5,9V11H19V9H5Z`,cat:`M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z`,"chart-bubble":`M7.2,11.2C8.97,11.2 10.4,12.63 10.4,14.4C10.4,16.17 8.97,17.6 7.2,17.6C5.43,17.6 4,16.17 4,14.4C4,12.63 5.43,11.2 7.2,11.2M14.8,16A2,2 0 0,1 16.8,18A2,2 0 0,1 14.8,20A2,2 0 0,1 12.8,18A2,2 0 0,1 14.8,16M15.2,4A4.8,4.8 0 0,1 20,8.8C20,11.45 17.85,13.6 15.2,13.6A4.8,4.8 0 0,1 10.4,8.8C10.4,6.15 12.55,4 15.2,4Z`,"chart-timeline-variant":`M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z`,check:`M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z`,"check-decagram":`M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z`,"chess-king":`M19,22H5V20H19V22M17,10C15.58,10 14.26,10.77 13.55,12H13V7H16V5H13V2H11V5H8V7H11V12H10.45C9.35,10.09 6.9,9.43 5,10.54C3.07,11.64 2.42,14.09 3.5,16C4.24,17.24 5.57,18 7,18H17A4,4 0 0,0 21,14A4,4 0 0,0 17,10Z`,"chess-knight":`M19,22H5V20H19V22M13,2V2C11.75,2 10.58,2.62 9.89,3.66L7,8L9,10L11.06,8.63C11.5,8.32 12.14,8.44 12.45,8.9C12.47,8.93 12.5,8.96 12.5,9V9C12.8,9.59 12.69,10.3 12.22,10.77L7.42,15.57C6.87,16.13 6.87,17.03 7.43,17.58C7.69,17.84 8.05,18 8.42,18H17V6A4,4 0 0,0 13,2Z`,"chevron-triple-up":`M16.59,9.42L12,4.83L7.41,9.42L6,8L12,2L18,8L16.59,9.42M16.59,15.42L12,10.83L7.41,15.42L6,14L12,8L18,14L16.59,15.42M16.59,21.42L12,16.83L7.41,21.42L6,20L12,14L18,20L16.59,21.42Z`,chip:`M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z`,circle:`M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z`,"clipboard-list":`M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 8H9V12H8V9H7V8M10 17V18H7V17.08L9 15H7V14H9.25C9.66 14 10 14.34 10 14.75C10 14.95 9.92 15.14 9.79 15.27L8.12 17H10M11 4C11 3.45 11.45 3 12 3S13 3.45 13 4 12.55 5 12 5 11 4.55 11 4M17 17H12V15H17V17M17 11H12V9H17V11Z`,"clock-fast":`M15,4A8,8 0 0,1 23,12A8,8 0 0,1 15,20A8,8 0 0,1 7,12A8,8 0 0,1 15,4M15,6A6,6 0 0,0 9,12A6,6 0 0,0 15,18A6,6 0 0,0 21,12A6,6 0 0,0 15,6M14,8H15.5V11.78L17.83,14.11L16.77,15.17L14,12.4V8M2,18A1,1 0 0,1 1,17A1,1 0 0,1 2,16H5.83C6.14,16.71 6.54,17.38 7,18H2M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H5.05L5,12L5.05,13H3M4,8A1,1 0 0,1 3,7A1,1 0 0,1 4,6H7C6.54,6.62 6.14,7.29 5.83,8H4Z`,"clock-outline":`M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z`,clover:`M12,11.18C15.3,8.18 17,6.64 17,4.69C17,3.19 15.75,2 14.25,2C13.39,2 12.57,2.36 12,3C11.43,2.36 10.61,2 9.69,2C8.19,2 7,3.25 7,4.75C7,6.64 8.7,8.18 12,11.18M11.18,12C8.18,8.7 6.64,7 4.69,7C3.19,7 2,8.25 2,9.75C2,10.61 2.36,11.43 3,12C2.36,12.57 2,13.39 2,14.31C2,15.81 3.25,17 4.75,17C6.64,17 8.18,15.3 11.18,12M12.83,12C15.82,15.3 17.36,17 19.31,17C20.81,17 22,15.75 22,14.25C22,13.39 21.64,12.57 21,12C21.64,11.43 22,10.61 22,9.69C22,8.19 20.75,7 19.25,7C17.36,7 15.82,8.7 12.83,12M12,12.82C8.7,15.82 7,17.36 7,19.31C7,20.81 8.25,22 9.75,22C10.61,22 11.43,21.64 12,21C12.57,21.64 13.39,22 14.31,22C15.81,22 17,20.75 17,19.25C17,17.36 15.3,15.82 12,12.82Z`,cog:`M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z`,"cog-outline":`M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z`,"comment-check-outline":`M9 22C8.45 22 8 21.55 8 21V18H4C2.9 18 2 17.11 2 16V4C2 2.89 2.9 2 4 2H20C21.11 2 22 2.9 22 4V16C22 17.11 21.11 18 20 18H13.9L10.2 21.71C10 21.9 9.75 22 9.5 22H9M10 16V19.08L13.08 16H20V4H4V16H10M15.6 6L17 7.41L10.47 14L7 10.5L8.4 9.09L10.47 11.17L15.6 6`,compass:`M14.19,14.19L6,18L9.81,9.81L18,6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.9A1.1,1.1 0 0,0 10.9,12A1.1,1.1 0 0,0 12,13.1A1.1,1.1 0 0,0 13.1,12A1.1,1.1 0 0,0 12,10.9Z`,"compass-outline":`M7,17L10.2,10.2L17,7L13.8,13.8L7,17M12,11.1A0.9,0.9 0 0,0 11.1,12A0.9,0.9 0 0,0 12,12.9A0.9,0.9 0 0,0 12.9,12A0.9,0.9 0 0,0 12,11.1M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z`,cow:`M10.5,18A0.5,0.5 0 0,1 11,18.5A0.5,0.5 0 0,1 10.5,19A0.5,0.5 0 0,1 10,18.5A0.5,0.5 0 0,1 10.5,18M13.5,18A0.5,0.5 0 0,1 14,18.5A0.5,0.5 0 0,1 13.5,19A0.5,0.5 0 0,1 13,18.5A0.5,0.5 0 0,1 13.5,18M10,11A1,1 0 0,1 11,12A1,1 0 0,1 10,13A1,1 0 0,1 9,12A1,1 0 0,1 10,11M14,11A1,1 0 0,1 15,12A1,1 0 0,1 14,13A1,1 0 0,1 13,12A1,1 0 0,1 14,11M18,18C18,20.21 15.31,22 12,22C8.69,22 6,20.21 6,18C6,17.1 6.45,16.27 7.2,15.6C6.45,14.6 6,13.35 6,12L6.12,10.78C5.58,10.93 4.93,10.93 4.4,10.78C3.38,10.5 1.84,9.35 2.07,8.55C2.3,7.75 4.21,7.6 5.23,7.9C5.82,8.07 6.45,8.5 6.82,8.96L7.39,8.15C6.79,7.05 7,4 10,3L9.91,3.14V3.14C9.63,3.58 8.91,4.97 9.67,6.47C10.39,6.17 11.17,6 12,6C12.83,6 13.61,6.17 14.33,6.47C15.09,4.97 14.37,3.58 14.09,3.14L14,3C17,4 17.21,7.05 16.61,8.15L17.18,8.96C17.55,8.5 18.18,8.07 18.77,7.9C19.79,7.6 21.7,7.75 21.93,8.55C22.16,9.35 20.62,10.5 19.6,10.78C19.07,10.93 18.42,10.93 17.88,10.78L18,12C18,13.35 17.55,14.6 16.8,15.6C17.55,16.27 18,17.1 18,18M12,16C9.79,16 8,16.9 8,18C8,19.1 9.79,20 12,20C14.21,20 16,19.1 16,18C16,16.9 14.21,16 12,16M12,14C13.12,14 14.17,14.21 15.07,14.56C15.65,13.87 16,13 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13 8.35,13.87 8.93,14.56C9.83,14.21 10.88,14 12,14M14.09,3.14V3.14Z`,creation:`M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74`,"creation-outline":`M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z`,"credit-card":`M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 11H4V8H20Z`,crosshairs:`M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z`,"crosshairs-gps":`M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z`,crown:`M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z`,"crown-outline":`M12 8L15 13.2L18 10.5L17.3 14H6.7L6 10.5L9 13.2L12 8M12 4L8.5 10L3 5L5 16H19L21 5L15.5 10L12 4M19 18H5V19C5 19.6 5.4 20 6 20H18C18.6 20 19 19.6 19 19V18Z`,"crystal-ball":`M9.38,8.38L11.5,9.34L13.62,8.38L12.66,10.5L13.62,12.62L11.5,11.66L9.38,12.62L10.34,10.5L9.38,8.38M16.5,2.5L17.59,5.41L20.5,6.5L17.59,7.59L16.5,10.5L15.41,7.59L12.5,6.5L15.41,5.41L16.5,2.5M6,19H7V18A1,1 0 0,1 8,17H8.26C6,15.7 4.5,13.28 4.5,10.5A7.5,7.5 0 0,1 12,3C13.05,3 14.05,3.22 14.96,3.61L14.59,4.59L13.17,5.12C12.79,5.04 12.4,5 12,5A5.5,5.5 0 0,0 6.5,10.5A5.5,5.5 0 0,0 12,16C14.91,16 17.3,13.73 17.5,10.87L18.41,8.41L19.12,8.14C19.37,8.88 19.5,9.68 19.5,10.5C19.5,13.28 18,15.7 15.74,17H16A1,1 0 0,1 17,18V19H18A2,2 0 0,1 20,21V22H4V21A2,2 0 0,1 6,19Z`,"cube-outline":`M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z`,database:`M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z`,"debug-step-over":`M12,14A2,2 0 0,1 14,16A2,2 0 0,1 12,18A2,2 0 0,1 10,16A2,2 0 0,1 12,14M23.46,8.86L21.87,15.75L15,14.16L18.8,11.78C17.39,9.5 14.87,8 12,8C8.05,8 4.77,10.86 4.12,14.63L2.15,14.28C2.96,9.58 7.06,6 12,6C15.58,6 18.73,7.89 20.5,10.72L23.46,8.86Z`,"diamond-stone":`M16,9H19L14,16M10,9H14L12,17M5,9H8L10,16M15,4H17L19,7H16M11,4H13L14,7H10M7,4H9L8,7H5M6,2L2,8L12,22L22,8L18,2H6Z`,"dice-d10":`M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M14.07 8.21C15.5 8.21 16.64 9.36 16.64 10.78V13.42C16.64 14.84 15.5 16 14.07 16C12.64 16 11.5 14.84 11.5 13.42V10.78C11.5 9.36 12.65 8.21 14.07 8.21M10.36 8.41H10.5V16H9V10.21L7.22 10.76V9.53L10.36 8.41M14.06 9.65C13.47 9.65 13 10.13 13 10.71V13.5C13 14.07 13.47 14.54 14.06 14.54C14.64 14.54 15.14 14.06 15.14 13.5V10.71C15.14 10.12 14.64 9.65 14.06 9.65Z`,"dice-d20":`M20.47 6.62L12.57 2.18C12.41 2.06 12.21 2 12 2S11.59 2.06 11.43 2.18L3.53 6.62C3.21 6.79 3 7.12 3 7.5V16.5C3 16.88 3.21 17.21 3.53 17.38L11.43 21.82C11.59 21.94 11.79 22 12 22S12.41 21.94 12.57 21.82L20.47 17.38C20.79 17.21 21 16.88 21 16.5V7.5C21 7.12 20.79 6.79 20.47 6.62M11.45 15.96L6.31 15.93V14.91C6.31 14.91 9.74 11.58 9.75 10.57C9.75 9.33 8.73 9.46 8.73 9.46S7.75 9.5 7.64 10.71L6.14 10.76C6.14 10.76 6.18 8.26 8.83 8.26C11.2 8.26 11.23 10.04 11.23 10.5C11.23 12.18 8.15 14.77 8.15 14.77L11.45 14.76V15.96M17.5 13.5C17.5 14.9 16.35 16.05 14.93 16.05C13.5 16.05 12.36 14.9 12.36 13.5V10.84C12.36 9.42 13.5 8.27 14.93 8.27S17.5 9.42 17.5 10.84V13.5M16 10.77V13.53C16 14.12 15.5 14.6 14.92 14.6C14.34 14.6 13.86 14.12 13.86 13.53V10.77C13.86 10.18 14.34 9.71 14.92 9.71C15.5 9.71 16 10.18 16 10.77Z`,"dice-d20-outline":`M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15M14.93,8.27A2.57,2.57 0 0,1 17.5,10.84V13.5C17.5,14.9 16.35,16.05 14.93,16.05C13.5,16.05 12.36,14.9 12.36,13.5V10.84A2.57,2.57 0 0,1 14.93,8.27M14.92,9.71C14.34,9.71 13.86,10.18 13.86,10.77V13.53C13.86,14.12 14.34,14.6 14.92,14.6C15.5,14.6 16,14.12 16,13.53V10.77C16,10.18 15.5,9.71 14.92,9.71M11.45,14.76V15.96L6.31,15.93V14.91C6.31,14.91 9.74,11.58 9.75,10.57C9.75,9.33 8.73,9.46 8.73,9.46C8.73,9.46 7.75,9.5 7.64,10.71L6.14,10.76C6.14,10.76 6.18,8.26 8.83,8.26C11.2,8.26 11.23,10.04 11.23,10.5C11.23,12.18 8.15,14.77 8.15,14.77L11.45,14.76Z`,"dice-multiple":`M19.78,3H11.22C10.55,3 10,3.55 10,4.22V8H16V14H19.78C20.45,14 21,13.45 21,12.78V4.22C21,3.55 20.45,3 19.78,3M12.44,6.67C11.76,6.67 11.21,6.12 11.21,5.44C11.21,4.76 11.76,4.21 12.44,4.21A1.23,1.23 0 0,1 13.67,5.44C13.67,6.12 13.12,6.67 12.44,6.67M18.56,12.78C17.88,12.79 17.33,12.24 17.32,11.56C17.31,10.88 17.86,10.33 18.54,10.32C19.22,10.31 19.77,10.86 19.78,11.56C19.77,12.23 19.23,12.77 18.56,12.78M18.56,6.67C17.88,6.68 17.33,6.13 17.32,5.45C17.31,4.77 17.86,4.22 18.54,4.21C19.22,4.2 19.77,4.75 19.78,5.44C19.78,6.12 19.24,6.66 18.56,6.67M4.22,10H12.78A1.22,1.22 0 0,1 14,11.22V19.78C14,20.45 13.45,21 12.78,21H4.22C3.55,21 3,20.45 3,19.78V11.22C3,10.55 3.55,10 4.22,10M8.5,14.28C7.83,14.28 7.28,14.83 7.28,15.5C7.28,16.17 7.83,16.72 8.5,16.72C9.17,16.72 9.72,16.17 9.72,15.5A1.22,1.22 0 0,0 8.5,14.28M5.44,11.22C4.77,11.22 4.22,11.77 4.22,12.44A1.22,1.22 0 0,0 5.44,13.66C6.11,13.66 6.66,13.11 6.66,12.44V12.44C6.66,11.77 6.11,11.22 5.44,11.22M11.55,17.33C10.88,17.33 10.33,17.88 10.33,18.55C10.33,19.22 10.88,19.77 11.55,19.77A1.22,1.22 0 0,0 12.77,18.55H12.77C12.77,17.88 12.23,17.34 11.56,17.33H11.55Z`,dna:`M4,2H6V4C6,5.44 6.68,6.61 7.88,7.78C8.74,8.61 9.89,9.41 11.09,10.2L9.26,11.39C8.27,10.72 7.31,10 6.5,9.21C5.07,7.82 4,6.1 4,4V2M18,2H20V4C20,6.1 18.93,7.82 17.5,9.21C16.09,10.59 14.29,11.73 12.54,12.84C10.79,13.96 9.09,15.05 7.88,16.22C6.68,17.39 6,18.56 6,20V22H4V20C4,17.9 5.07,16.18 6.5,14.79C7.91,13.41 9.71,12.27 11.46,11.16C13.21,10.04 14.91,8.95 16.12,7.78C17.32,6.61 18,5.44 18,4V2M14.74,12.61C15.73,13.28 16.69,14 17.5,14.79C18.93,16.18 20,17.9 20,20V22H18V20C18,18.56 17.32,17.39 16.12,16.22C15.26,15.39 14.11,14.59 12.91,13.8L14.74,12.61M7,3H17V4L16.94,4.5H7.06L7,4V3M7.68,6H16.32C16.08,6.34 15.8,6.69 15.42,7.06L14.91,7.5H9.07L8.58,7.06C8.2,6.69 7.92,6.34 7.68,6M9.09,16.5H14.93L15.42,16.94C15.8,17.31 16.08,17.66 16.32,18H7.68C7.92,17.66 8.2,17.31 8.58,16.94L9.09,16.5M7.06,19.5H16.94L17,20V21H7V20L7.06,19.5Z`,"dog-side":`M19,3L15,7L18,10L19,9L20,10L22,8L19,5V3M3,7L2,8L5,11V14L4,15V21H6V18L8,15H15V21H17V11L14,8L13,9H5L3,7Z`,"drama-masks":`M8.11,19.45C5.94,18.65 4.22,16.78 3.71,14.35L2.05,6.54C1.81,5.46 2.5,4.4 3.58,4.17L13.35,2.1L13.38,2.09C14.45,1.88 15.5,2.57 15.72,3.63L16.07,5.3L20.42,6.23H20.45C21.5,6.47 22.18,7.53 21.96,8.59L20.3,16.41C19.5,20.18 15.78,22.6 12,21.79C10.42,21.46 9.08,20.61 8.11,19.45V19.45M20,8.18L10.23,6.1L8.57,13.92V13.95C8,16.63 9.73,19.27 12.42,19.84C15.11,20.41 17.77,18.69 18.34,16L20,8.18M16,16.5C15.37,17.57 14.11,18.16 12.83,17.89C11.56,17.62 10.65,16.57 10.5,15.34L16,16.5M8.47,5.17L4,6.13L5.66,13.94L5.67,13.97C5.82,14.68 6.12,15.32 6.53,15.87C6.43,15.1 6.45,14.3 6.62,13.5L7.05,11.5C6.6,11.42 6.21,11.17 6,10.81C6.06,10.2 6.56,9.66 7.25,9.5C7.33,9.5 7.4,9.5 7.5,9.5L8.28,5.69C8.32,5.5 8.38,5.33 8.47,5.17M15.03,12.23C15.35,11.7 16.03,11.42 16.72,11.57C17.41,11.71 17.91,12.24 18,12.86C17.67,13.38 17,13.66 16.3,13.5C15.61,13.37 15.11,12.84 15.03,12.23M10.15,11.19C10.47,10.66 11.14,10.38 11.83,10.53C12.5,10.67 13.03,11.21 13.11,11.82C12.78,12.34 12.11,12.63 11.42,12.5C10.73,12.33 10.23,11.8 10.15,11.19M11.97,4.43L13.93,4.85L13.77,4.05L11.97,4.43Z`,dumbbell:`M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z`,"ear-hearing":`M17,20C16.71,20 16.44,19.94 16.24,19.85C15.53,19.5 15.03,18.97 14.53,17.47C14,15.91 13.06,15.18 12.14,14.47C11.35,13.86 10.53,13.23 9.82,11.94C9.29,11 9,9.93 9,9C9,6.2 11.2,4 14,4C16.8,4 19,6.2 19,9H21C21,5.07 17.93,2 14,2C10.07,2 7,5.07 7,9C7,10.26 7.38,11.65 8.07,12.9C9,14.55 10.05,15.38 10.92,16.05C11.73,16.67 12.31,17.12 12.63,18.1C13.23,19.92 14,20.94 15.36,21.65C15.87,21.88 16.43,22 17,22A4,4 0 0,0 21,18H19A2,2 0 0,1 17,20M7.64,2.64L6.22,1.22C4.23,3.21 3,5.96 3,9C3,12.04 4.23,14.79 6.22,16.78L7.63,15.37C6,13.74 5,11.5 5,9C5,6.5 6,4.26 7.64,2.64M11.5,9A2.5,2.5 0 0,0 14,11.5A2.5,2.5 0 0,0 16.5,9A2.5,2.5 0 0,0 14,6.5A2.5,2.5 0 0,0 11.5,9Z`,elephant:`M19.5,15.5A0.5,0.5 0 0,1 19,16A0.5,0.5 0 0,1 18.5,15.5V8.5C18.5,6.57 16.43,5 14.5,5H6A4,4 0 0,0 2,9V19H6V15H11V19H15V14.5A0.5,0.5 0 0,1 15.5,14A0.5,0.5 0 0,1 16,14.5V16A3,3 0 0,0 19,19A3,3 0 0,0 22,16V14H19.5V15.5Z`,"emoticon-cool":`M3.22,7.22C4.91,4.11 8.21,2 12,2C15.79,2 19.09,4.11 20.78,7.22L20,8H4L3.22,7.22M21.4,8.6C21.78,9.67 22,10.81 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.81 2.22,9.67 2.6,8.6L4,10H5C5,11.38 7.12,12.5 8.5,12.5C9.88,12.5 11.25,11.38 11.25,10H12.75C12.75,11.38 14.12,12.5 15.5,12.5C16.88,12.5 19,11.38 19,10H20L21.4,8.6M16.19,15.42L14.77,14C14.32,14.72 13.25,15.23 12,15.23C10.75,15.23 9.68,14.72 9.23,14L7.81,15.42C8.71,16.5 10.25,17.23 12,17.23C13.75,17.23 15.29,16.5 16.19,15.42Z`,"emoticon-devil":`M22.5,2.09C21.6,3 20.13,3.73 18.31,4.25C16.59,2.84 14.39,2 12,2C9.61,2 7.41,2.84 5.69,4.25C3.87,3.73 2.4,3 1.5,2.09C1.53,3.72 2.35,5.21 3.72,6.4C2.63,8 2,9.92 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,9.92 21.37,8 20.28,6.4C21.65,5.21 22.47,3.72 22.5,2.09M7.5,8.5L10.5,10C10.5,10.8 9.8,11.5 9,11.5C8.2,11.5 7.5,10.8 7.5,10V8.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23M16.5,10C16.5,10.8 15.8,11.5 15,11.5C14.2,11.5 13.5,10.8 13.5,10L16.5,8.5V10Z`,eye:`M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z`,"eye-circle":`M12,9.5A2.5,2.5 0 0,0 9.5,12A2.5,2.5 0 0,0 12,14.5A2.5,2.5 0 0,0 14.5,12A2.5,2.5 0 0,0 12,9.5M12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13M12,9.5A2.5,2.5 0 0,0 9.5,12A2.5,2.5 0 0,0 12,14.5A2.5,2.5 0 0,0 14.5,12A2.5,2.5 0 0,0 12,9.5M12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,16C9.37,16 7,14.43 6,12C7.38,8.69 11.19,7.12 14.5,8.5C16.08,9.16 17.34,10.42 18,12C17,14.43 14.63,16 12,16M12,9.5A2.5,2.5 0 0,0 9.5,12A2.5,2.5 0 0,0 12,14.5A2.5,2.5 0 0,0 14.5,12A2.5,2.5 0 0,0 12,9.5M12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13Z`,"eye-off":`M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z`,"eye-outline":`M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z`,"eye-settings-outline":`M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C16.86,4.5 21.22,7.5 23,12C20.61,18.08 13.75,21.06 7.67,18.67C4.62,17.47 2.2,15.06 1,12C2.78,7.5 7.14,4.5 12,4.5M3.18,12C5.56,16.87 11.45,18.89 16.32,16.5C18.28,15.54 19.86,13.96 20.82,12C18.44,7.13 12.55,5.11 7.68,7.5C5.72,8.46 4.14,10.04 3.18,12M9,22H7V24H9V22M13,22H11V24H13V22M17,22H15V24H17V22Z`,"fa:dragon":{w:640,h:512,d:{prefix:`fas`,iconName:`dragon`,icon:[640,512,[128009],`f6d5`,`M352 124.5l-51.9-13c-6.5-1.6-11.3-7.1-12-13.8s2.8-13.1 8.7-16.1l40.8-20.4-43.3-32.5c-5.5-4.1-7.8-11.3-5.6-17.9S297.1 0 304 0L464 0c30.2 0 58.7 14.2 76.8 38.4l57.6 76.8c6.2 8.3 9.6 18.4 9.6 28.8 0 26.5-21.5 48-48 48l-21.5 0c-17 0-33.3-6.7-45.3-18.7l-13.3-13.3-32 0 0 21.5c0 24.8 12.8 47.9 33.8 61.1l106.6 66.6c32.1 20.1 51.6 55.2 51.6 93.1 0 60.6-49.1 109.8-109.8 109.8L32.3 512c-3.3 0-6.6-.4-9.6-1.4-9.2-2.8-16.7-9.6-20.4-18.6-1.3-3.3-2.2-6.9-2.3-10.7-.2-3.7 .3-7.3 1.3-10.7 2.8-9.2 9.6-16.7 18.6-20.4 3-1.2 6.2-2 9.5-2.2L433.3 412c8.3-.7 14.7-7.7 14.7-16.1 0-4.3-1.7-8.4-4.7-11.4l-44.4-44.4c-30-30-46.9-70.7-46.9-113.1l0-102.5zM512 72.3c0-.1 0-.2 0-.3s0-.2 0-.3l0 .6zm-1.3 7.4L464.3 68.1c-.2 1.3-.3 2.6-.3 3.9 0 13.3 10.7 24 24 24 10.6 0 19.5-6.8 22.7-16.3zM130.9 116.5c16.3-14.5 40.4-16.2 58.5-4.1l130.6 87 0 27.5c0 32.8 8.4 64.8 24 93l-232 0c-6.7 0-12.7-4.2-15-10.4s-.5-13.3 4.6-17.7L171 232.3 18.4 255.8c-7 1.1-13.9-2.6-16.9-9S.1 232.8 5.4 228L130.9 116.5z`]}.icon[4]},"fa:frog":{w:576,h:512,d:{prefix:`fas`,iconName:`frog`,icon:[576,512,[],`f52e`,`M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9 0 21.8-11.7 41.9-30.7 52.7l-144.5 82.1 92.5 92.5 50.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2 27.9-18.5 65.9-15.4 90.5 9.2 24.7 24.7 27.7 62.9 9 90.9-2.6 3.8-5.6 7.5-9 10.9L261.8 416 352 416c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 480C28.7 480 0 451.3 0 416 0 249.6 127 112.9 289.3 97.5 296.2 60.2 328.8 32 368 32zm0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48z`]}.icon[4]},"fa:teeth-open":{w:512,h:512,d:{prefix:`fas`,iconName:`teeth-open`,icon:[512,512,[],`f62f`,`M64 32C28.7 32 0 60.7 0 96l0 80c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-80c0-35.3-28.7-64-64-64L64 32zm0 272c-35.3 0-64 28.7-64 64l0 48c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-48c0-35.3-28.7-64-64-64L64 304zm80-160c0-26.5 21.5-48 48-48s48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24zm128 0c0-26.5 21.5-48 48-48s48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24zM80 112c17.7 0 32 14.3 32 32l0 24c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-24c0-17.7 14.3-32 32-32zm320 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 24c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-24zM48 384l0-16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 16c0 17.7-14.3 32-32 32s-32-14.3-32-32zm144 48c-26.5 0-48-21.5-48-48l0-16c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 16c0 26.5-21.5 48-48 48zm128 0c-26.5 0-48-21.5-48-48l0-16c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 16c0 26.5-21.5 48-48 48zm112-16c-17.7 0-32-14.3-32-32l0-16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 16c0 17.7-14.3 32-32 32z`]}.icon[4]},feather:`M22,2C22,2 14.36,1.63 8.34,9.88C3.72,16.21 2,22 2,22L3.94,21C5.38,18.5 6.13,17.47 7.54,16C10.07,16.74 12.71,16.65 15,14C13,13.44 11.4,13.57 9.04,13.81C11.69,12 13.5,11.6 16,12L17,10C15.2,9.66 14,9.63 12.22,10.04C14.19,8.65 15.56,7.87 18,8L19.21,6.07C17.65,5.96 16.71,6.13 14.92,6.57C16.53,5.11 18,4.45 20.14,4.32C20.14,4.32 21.19,2.43 22,2Z`,fencing:`M4.5 17.42L5.58 18.5L3.28 20.78C3 21.07 2.5 21.07 2.22 20.78S1.93 20 2.22 19.72L4.5 17.42M18.29 5.42L18.29 4L12 10.29L5.71 4L5.71 5.42L11.29 11L7.5 14.81C6.32 13.97 4.68 14.07 3.63 15.12L7.88 19.37C8.93 18.32 9.03 16.68 8.2 15.5L18.29 5.42M21.78 19.72L19.5 17.42L18.42 18.5L20.72 20.78C21 21.07 21.5 21.07 21.78 20.78S22.07 20 21.78 19.72M16.5 14.81L13.42 11.71L12.71 12.42L15.81 15.5C14.97 16.68 15.07 18.32 16.12 19.37L20.37 15.12C19.32 14.07 17.68 13.97 16.5 14.81Z`,fire:`M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z`,"fire-circle":`M14.66 14.18C14.69 14.29 14.7 14.4 14.7 14.5C14.73 15.15 14.44 15.85 13.97 16.28C13.75 16.47 13.39 16.67 13.11 16.75C12.23 17.06 11.35 16.62 10.83 16.11C11.77 15.89 12.32 15.21 12.5 14.5C12.62 13.89 12.37 13.38 12.27 12.78C12.17 12.2 12.19 11.71 12.4 11.18C12.55 11.47 12.71 11.77 12.9 12C13.5 12.78 14.45 13.12 14.66 14.18M22 12C22 17.5 17.5 22 12 22S2 17.5 2 12 6.5 2 12 2 22 6.5 22 12M17.16 12.56L17.06 12.36C16.9 12 16.45 11.38 16.45 11.38C16.27 11.15 16.05 10.94 15.85 10.74C15.32 10.27 14.73 9.94 14.22 9.45C13.05 8.31 12.79 6.44 13.54 5C12.79 5.18 12.14 5.58 11.58 6.03C9.55 7.65 8.75 10.5 9.71 12.95C9.74 13.03 9.77 13.11 9.77 13.21C9.77 13.38 9.65 13.53 9.5 13.6C9.31 13.67 9.13 13.63 9 13.5C8.93 13.46 8.9 13.42 8.87 13.37C8 12.26 7.84 10.66 8.43 9.39C7.12 10.45 6.41 12.24 6.5 13.92C6.56 14.31 6.6 14.7 6.74 15.09C6.85 15.56 7.06 16 7.3 16.44C8.14 17.78 9.61 18.75 11.19 18.94C12.87 19.15 14.67 18.85 15.96 17.7C17.4 16.4 17.9 14.33 17.16 12.56Z`,fish:`M12,20L12.76,17C9.5,16.79 6.59,15.4 5.75,13.58C5.66,14.06 5.53,14.5 5.33,14.83C4.67,16 3.33,16 2,16C3.1,16 3.5,14.43 3.5,12.5C3.5,10.57 3.1,9 2,9C3.33,9 4.67,9 5.33,10.17C5.53,10.5 5.66,10.94 5.75,11.42C6.4,10 8.32,8.85 10.66,8.32L9,5C11,5 13,5 14.33,5.67C15.46,6.23 16.11,7.27 16.69,8.38C19.61,9.08 22,10.66 22,12.5C22,14.38 19.5,16 16.5,16.66C15.67,17.76 14.86,18.78 14.17,19.33C13.33,20 12.67,20 12,20M17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12A1,1 0 0,0 17,11Z`,"flag-variant":`M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3Z`,flare:`M7,11H1V13H7V11M9.17,7.76L7.05,5.64L5.64,7.05L7.76,9.17L9.17,7.76M13,1H11V7H13V1M18.36,7.05L16.95,5.64L14.83,7.76L16.24,9.17L18.36,7.05M17,11V13H23V11H17M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M14.83,16.24L16.95,18.36L18.36,16.95L16.24,14.83L14.83,16.24M5.64,16.95L7.05,18.36L9.17,16.24L7.76,14.83L5.64,16.95M11,23H13V17H11V23Z`,flash:`M7,2V13H10V22L17,10H13L17,2H7Z`,"flash-alert":`M5,2V13H8V22L15,10H11L15,2M17,15H19V17H17V15M17,7H19V13H17V7Z`,"flash-triangle":`M12 2L1 21H23L12 2M10 15V10H14L12.5 13.5H14.5L11.5 19V15H10Z`,flask:`M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z`,"flask-outline":`M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L13,8.35V4H11V8.35L5.18,18.43C5.07,18.59 5,18.79 5,19M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M13,16L14.34,14.66L16.27,18H7.73L10.39,13.39L13,16M12.5,12A0.5,0.5 0 0,1 13,12.5A0.5,0.5 0 0,1 12.5,13A0.5,0.5 0 0,1 12,12.5A0.5,0.5 0 0,1 12.5,12Z`,"food-apple":`M20,10C22,13 17,22 15,22C13,22 13,21 12,21C11,21 11,22 9,22C7,22 2,13 4,10C6,7 9,7 11,8V5C5.38,8.07 4.11,3.78 4.11,3.78C4.11,3.78 6.77,0.19 11,5V3H13V8C15,7 18,7 20,10Z`,"format-list-bulleted":`M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z`,"format-list-bulleted-type":`M5,9.5L7.5,14H2.5L5,9.5M3,4H7V8H3V4M5,20A2,2 0 0,0 7,18A2,2 0 0,0 5,16A2,2 0 0,0 3,18A2,2 0 0,0 5,20M9,5V7H21V5H9M9,19H21V17H9V19M9,13H21V11H9V13Z`,"format-list-numbered":`M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z`,fountain:`M7.5,2C4.47,2 2,4.46 2,7.5V7.5L2,8H4V7.5A3.5,3.5 0 0,1 7.5,4C9,4 10.26,4.93 10.76,6.24C10.37,6.08 9.95,6 9.5,6C8.11,6 6.9,6.82 6.34,8L8.08,9C8.29,8.42 8.85,8 9.5,8A1.5,1.5 0 0,1 11,9.5V11H13V9.5A1.5,1.5 0 0,1 14.5,8C15.16,8 15.71,8.42 15.92,9L17.66,8C17.1,6.82 15.9,6 14.5,6C14.05,6 13.63,6.08 13.24,6.24C13.74,4.93 15,4 16.5,4A3.5,3.5 0 0,1 20,7.5V8H22V7.5H22A5.5,5.5 0 0,0 16.5,2C14.64,2 13,2.93 12,4.34C11,2.93 9.36,2 7.5,2M6,12V14H7.42C7.92,15.15 8.85,16.07 10,16.57C10,17.38 10,18.19 10,19H2C2,19 2.82,20.23 3.41,21.11C3.78,21.67 4.4,22 5.07,22H18.93C19.6,22 20.22,21.67 20.59,21.11L22,19H14C14,18.19 14,17.38 14,16.57C15.15,16.07 16.08,15.15 16.58,14H18V12H6Z`,"function-variant":`M12.42,5.29C11.32,5.19 10.35,6 10.25,7.11L10,10H12.82V12H9.82L9.38,17.07C9.18,19.27 7.24,20.9 5.04,20.7C3.79,20.59 2.66,19.9 2,18.83L3.5,17.33C3.83,18.38 4.96,18.97 6,18.63C6.78,18.39 7.33,17.7 7.4,16.89L7.82,12H4.82V10H8L8.27,6.93C8.46,4.73 10.39,3.1 12.6,3.28C13.86,3.39 15,4.09 15.66,5.17L14.16,6.67C13.91,5.9 13.23,5.36 12.42,5.29M22,13.65L20.59,12.24L17.76,15.07L14.93,12.24L13.5,13.65L16.35,16.5L13.5,19.31L14.93,20.72L17.76,17.89L20.59,20.72L22,19.31L19.17,16.5L22,13.65Z`,"gamepad-variant":`M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z`,gavel:`M2.3,20.28L11.9,10.68L10.5,9.26L9.78,9.97C9.39,10.36 8.76,10.36 8.37,9.97L7.66,9.26C7.27,8.87 7.27,8.24 7.66,7.85L13.32,2.19C13.71,1.8 14.34,1.8 14.73,2.19L15.44,2.9C15.83,3.29 15.83,3.92 15.44,4.31L14.73,5L16.15,6.43C16.54,6.04 17.17,6.04 17.56,6.43C17.95,6.82 17.95,7.46 17.56,7.85L18.97,9.26L19.68,8.55C20.07,8.16 20.71,8.16 21.1,8.55L21.8,9.26C22.19,9.65 22.19,10.29 21.8,10.68L16.15,16.33C15.76,16.72 15.12,16.72 14.73,16.33L14.03,15.63C13.63,15.24 13.63,14.6 14.03,14.21L14.73,13.5L13.32,12.09L3.71,21.7C3.32,22.09 2.69,22.09 2.3,21.7C1.91,21.31 1.91,20.67 2.3,20.28M20,19A2,2 0 0,1 22,21V22H12V21A2,2 0 0,1 14,19H20Z`,ghost:`M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z`,"ghost-outline":`M12 2C7.03 2 3 6.03 3 11V22L6 19L9 22L12 19L15 22L18 19L21 22V11C21 6.03 16.97 2 12 2M19 17.17L18 16.17L16.59 17.59L15 19.17L13.41 17.59L12 16.17L10.59 17.59L9 19.17L7.41 17.59L6 16.17L5 17.17V11C5 7.14 8.14 4 12 4S19 7.14 19 11V17.17M11 10C11 11.11 10.11 12 9 12S7 11.11 7 10 7.9 8 9 8 11 8.9 11 10M17 10C17 11.11 16.11 12 15 12S13 11.11 13 10 13.9 8 15 8 17 8.9 17 10Z`,gift:`M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3A2,2 0 0,0 1,8V10A1,1 0 0,0 2,11H11V8H13V11H22A1,1 0 0,0 23,10V8A2,2 0 0,0 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5A1,1 0 0,1 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5A1,1 0 0,1 15,4M2,12V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V12H13V20H11V12H2Z`,"glass-mug-variant":`M9.5 3C7.56 3 5.85 4.24 5.23 6.08C3.36 6.44 2 8.09 2 10C2 12.21 3.79 14 6 14V22H17V20H20C20.55 20 21 19.55 21 19V11C21 10.45 20.55 10 20 10H18V8C18 5.79 16.21 4 14 4H12.32C11.5 3.35 10.53 3 9.5 3M9.5 5C10.29 5 11.03 5.37 11.5 6H14C15.11 6 16 6.9 16 8H12C10 8 9.32 9.13 8.5 10.63C7.68 12.13 6 12 6 12C4.89 12 4 11.11 4 10C4 8.9 4.89 8 6 8H7V7.5C7 6.12 8.12 5 9.5 5M17 12H19V18H17Z`,"grave-stone":`M10,2H14C17.31,2 19,4.69 19,8V18.66C16.88,17.63 15.07,17 12,17C8.93,17 7.12,17.63 5,18.66V8C5,4.69 6.69,2 10,2M8,8V9.5H16V8H8M9,12V13.5H15V12H9M3,22V21.31C5.66,19.62 13.23,15.84 21,21.25V22H3Z`,hammer:`M2 19.63L13.43 8.2L12.72 7.5L14.14 6.07L12 3.89C13.2 2.7 15.09 2.7 16.27 3.89L19.87 7.5L18.45 8.91H21.29L22 9.62L18.45 13.21L17.74 12.5V9.62L16.27 11.04L15.56 10.33L4.13 21.76L2 19.63Z`,"hammer-wrench":`M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z`,"hand-back-right":`M13 24C9.74 24 6.81 22 5.6 19L2.57 11.37C2.26 10.58 3 9.79 3.81 10.05L4.6 10.31C5.16 10.5 5.62 10.92 5.84 11.47L7.25 15H8V3.25C8 2.56 8.56 2 9.25 2S10.5 2.56 10.5 3.25V12H11.5V1.25C11.5 .56 12.06 0 12.75 0S14 .56 14 1.25V12H15V2.75C15 2.06 15.56 1.5 16.25 1.5C16.94 1.5 17.5 2.06 17.5 2.75V12H18.5V5.75C18.5 5.06 19.06 4.5 19.75 4.5S21 5.06 21 5.75V16C21 20.42 17.42 24 13 24Z`,"hand-heart":`M20 17Q20.86 17 21.45 17.6T22.03 19L14 22L7 20V11H8.95L16.22 13.69Q17 14 17 14.81 17 15.28 16.66 15.63T15.8 16H13L11.25 15.33L10.92 16.27L13 17H20M16 3.23Q17.06 2 18.7 2 20.06 2 21 3T22 5.3Q22 6.33 21 7.76T19.03 10.15 16 13Q13.92 11.11 12.94 10.15T10.97 7.76 10 5.3Q10 3.94 10.97 3T13.31 2Q14.91 2 16 3.23M.984 11H5V22H.984V11Z`,handshake:`M11 6H14L17.29 2.7A1 1 0 0 1 18.71 2.7L21.29 5.29A1 1 0 0 1 21.29 6.7L19 9H11V11A1 1 0 0 1 10 12A1 1 0 0 1 9 11V8A2 2 0 0 1 11 6M5 11V15L2.71 17.29A1 1 0 0 0 2.71 18.7L5.29 21.29A1 1 0 0 0 6.71 21.29L11 17H15A1 1 0 0 0 16 16V15H17A1 1 0 0 0 18 14V13H19A1 1 0 0 0 20 12V11H13V12A2 2 0 0 1 11 14H9A2 2 0 0 1 7 12V9Z`,"head-cog":`M13 8.58C13.78 8.58 14.44 9.19 14.44 10S13.78 11.44 13 11.44 11.58 10.78 11.58 10 12.19 8.58 13 8.58M13 3C16.88 3 20 6.14 20 10C20 12.8 18.37 15.19 16 16.31V21H9V18H8C6.89 18 6 17.11 6 16V13H4.5C4.08 13 3.84 12.5 4.08 12.19L6 9.66C6.19 5.95 9.23 3 13 3M16 10C16 9.84 16 9.75 15.94 9.61L16.83 8.95C16.88 8.91 16.92 8.77 16.88 8.67L16.08 7.31C16.03 7.22 15.89 7.17 15.8 7.22L14.81 7.64C14.63 7.45 14.39 7.31 14.16 7.22L14 6.19C13.97 6.05 13.92 6 13.78 6H12.19C12.09 6 12 6.05 12 6.19L11.86 7.22C11.63 7.31 11.39 7.45 11.2 7.64L10.17 7.22C10.08 7.17 10 7.22 9.94 7.31L9.14 8.67C9.09 8.81 9.09 8.91 9.19 8.95L10.03 9.61C10.03 9.75 10 9.89 10 10C10 10.13 10.03 10.27 10.03 10.41L9.19 11.06C9.09 11.11 9.09 11.2 9.14 11.3L9.94 12.7C10 12.8 10.08 12.8 10.17 12.8L11.16 12.37C11.39 12.56 11.58 12.66 11.86 12.75L12 13.83C12 13.92 12.09 14 12.19 14H13.78C13.92 14 13.97 13.92 14 13.83L14.16 12.75C14.39 12.66 14.63 12.56 14.81 12.38L15.8 12.8C15.89 12.8 16.03 12.8 16.08 12.7L16.88 11.3C16.92 11.2 16.88 11.11 16.83 11.06L16 10.41V10Z`,"head-lightbulb":`M13 3C9.23 3 6.19 5.95 6 9.66L4.08 12.19C3.84 12.5 4.08 13 4.5 13H6V16C6 17.11 6.89 18 8 18H9V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3M14 14H12V13H14V14M15.6 9.5C15.34 9.94 14.96 10.32 14.5 10.58V12H11.5V10.58C10.07 9.75 9.57 7.92 10.4 6.5S13.07 4.56 14.5 5.38 16.43 8.05 15.6 9.5Z`,"head-lightbulb-outline":`M13 3C16.9 3 20 6.1 20 10C20 12.8 18.4 15.2 16 16.3V21H9V18H8C6.9 18 6 17.1 6 16V13H4.5C4.1 13 3.8 12.5 4.1 12.2L6 9.7C6.2 5.9 9.2 3 13 3M13 1C8.4 1 4.6 4.4 4.1 8.9L2.5 11C1.9 11.8 1.9 12.8 2.3 13.6C2.7 14.3 3.3 14.8 4 14.9V16C4 17.9 5.3 19.4 7 19.9V23H18V17.5C20.5 15.8 22 13.1 22 10C22 5 18 1 13 1M14 14H12V13H14V14M15.6 9.5C15.3 9.9 15 10.3 14.5 10.6V12H11.5V10.6C10.1 9.8 9.6 7.9 10.4 6.5S13.1 4.6 14.5 5.4 16.4 8.1 15.6 9.5Z`,"head-snowflake":`M13 3C9.23 3 6.19 5.95 6 9.66L4.08 12.19C3.84 12.5 4.08 13 4.5 13H6V16C6 17.11 6.89 18 8 18H9V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3M17.06 9.57L15.1 10.09L16.54 11.54C16.89 11.88 16.89 12.46 16.54 12.81C16.19 13.16 15.61 13.16 15.27 12.81L13.81 11.37L13.3 13.33C13.18 13.82 12.68 14.1 12.21 13.97C11.72 13.84 11.44 13.35 11.57 12.87L12.1 10.9L10.13 11.43C9.65 11.56 9.15 11.28 9.03 10.79C8.9 10.32 9.18 9.82 9.67 9.7L11.63 9.19L10.19 7.73C9.84 7.39 9.84 6.82 10.19 6.46C10.54 6.11 11.12 6.11 11.46 6.46L12.91 7.9L13.43 5.94C13.55 5.46 14.04 5.18 14.5 5.3C15 5.43 15.28 5.92 15.16 6.41L14.63 8.37L16.59 7.84C17.08 7.72 17.57 8 17.7 8.5C17.82 8.96 17.54 9.45 17.06 9.57Z`,heart:`M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z`,"heart-pulse":`M7.5,4A5.5,5.5 0 0,0 2,9.5C2,10 2.09,10.5 2.22,11H6.3L7.57,7.63C7.87,6.83 9.05,6.75 9.43,7.63L11.5,13L12.09,11.58C12.22,11.25 12.57,11 13,11H21.78C21.91,10.5 22,10 22,9.5A5.5,5.5 0 0,0 16.5,4C14.64,4 13,4.93 12,6.34C11,4.93 9.36,4 7.5,4V4M3,12.5A1,1 0 0,0 2,13.5A1,1 0 0,0 3,14.5H5.44L11,20C12,20.9 12,20.9 13,20L18.56,14.5H21A1,1 0 0,0 22,13.5A1,1 0 0,0 21,12.5H13.4L12.47,14.8C12.07,15.81 10.92,15.67 10.55,14.83L8.5,9.5L7.54,11.83C7.39,12.21 7.05,12.5 6.6,12.5H3Z`,"hexagon-outline":`M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z`,history:`M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3`,"home-city":`M0,21V10L7.5,5L15,10V21H10V14H5V21H0M24,2V21H17V8.93L16,8.27V6H14V6.93L10,4.27V2H24M21,14H19V16H21V14M21,10H19V12H21V10M21,6H19V8H21V6Z`,horse:`M22 6V9.5L20.5 10L18.96 7.54C18.83 7.33 18.5 7.42 18.5 7.67V11.25C18.5 12.23 18.11 13.11 17.5 13.78V21H15V15C14.92 15 14.84 15 14.75 15C14.54 15 14.33 14.97 14.13 14.94L9.69 14.2L8.57 16.21L9.53 21H7L6 16.25C5.97 15.95 6 15.65 6.16 15.39L7.18 13.58C6.2 13.03 5.53 12 5.5 10.81C5.46 10.96 5.44 11.18 5.47 11.5C5.5 11.94 5.61 12.59 5.54 13.31C5.5 14.03 5.17 14.77 4.75 15.26C4.32 15.75 3.85 16.09 3.35 16.35L2.65 15.65C2.84 15.18 3.03 14.76 3.07 14.37C3.13 14 3.06 13.7 2.95 13.43L2.42 12.3C2.21 11.79 1.95 11.05 2 10.18C2.03 9.33 2.5 8.22 3.39 7.61C4.29 7 5.26 6.92 6.05 7.08C6.55 7.18 7.06 7.42 7.5 7.76C7.87 7.59 8.3 7.5 8.75 7.5H14.5V7C14.5 4.79 16.29 3 18.5 3H22L21.11 4.34C21.65 4.7 22 5.31 22 6Z`,"human-male-height":`M7,2C8.78,2 9.67,4.16 8.42,5.42C7.16,6.67 5,5.78 5,4A2,2 0 0,1 7,2M5.5,7H8.5A2,2 0 0,1 10.5,9V14.5H9V22H5V14.5H3.5V9A2,2 0 0,1 5.5,7M21,8H15V10H21M21,11H18V13H21M21,2H15V4H21M21,5H18V7H21M21,14H15V16H21M21,20H15V22H21M21,17H18V19H21`,incognito:`M17.06 13C15.2 13 13.64 14.33 13.24 16.1C12.29 15.69 11.42 15.8 10.76 16.09C10.35 14.31 8.79 13 6.94 13C4.77 13 3 14.79 3 17C3 19.21 4.77 21 6.94 21C9 21 10.68 19.38 10.84 17.32C11.18 17.08 12.07 16.63 13.16 17.34C13.34 19.39 15 21 17.06 21C19.23 21 21 19.21 21 17C21 14.79 19.23 13 17.06 13M6.94 19.86C5.38 19.86 4.13 18.58 4.13 17S5.39 14.14 6.94 14.14C8.5 14.14 9.75 15.42 9.75 17S8.5 19.86 6.94 19.86M17.06 19.86C15.5 19.86 14.25 18.58 14.25 17S15.5 14.14 17.06 14.14C18.62 14.14 19.88 15.42 19.88 17S18.61 19.86 17.06 19.86M22 10.5H2V12H22V10.5M15.53 2.63C15.31 2.14 14.75 1.88 14.22 2.05L12 2.79L9.77 2.05L9.72 2.04C9.19 1.89 8.63 2.17 8.43 2.68L6 9H18L15.56 2.68L15.53 2.63Z`,infinity:`M18.6,6.62C21.58,6.62 24,9 24,12C24,14.96 21.58,17.37 18.6,17.37C17.15,17.37 15.8,16.81 14.78,15.8L12,13.34L9.17,15.85C8.2,16.82 6.84,17.38 5.4,17.38C2.42,17.38 0,14.96 0,12C0,9.04 2.42,6.62 5.4,6.62C6.84,6.62 8.2,7.18 9.22,8.2L12,10.66L14.83,8.15C15.8,7.18 17.16,6.62 18.6,6.62M7.8,14.39L10.5,12L7.84,9.65C7.16,8.97 6.31,8.62 5.4,8.62C3.53,8.62 2,10.13 2,12C2,13.87 3.53,15.38 5.4,15.38C6.31,15.38 7.16,15.03 7.8,14.39M16.2,9.61L13.5,12L16.16,14.35C16.84,15.03 17.7,15.38 18.6,15.38C20.47,15.38 22,13.87 22,12C22,10.13 20.47,8.62 18.6,8.62C17.69,8.62 16.84,8.97 16.2,9.61Z`,karate:`M19.8 2L11.6 8.7L10.39 7.66L14 5.58L9.41 1L8 2.41L10.74 5.15L5 8.46L3.81 12.75L6.27 17L8 16L5.97 12.5L6.32 11.18L9.5 13L10 22H12L12.5 12L21 3.4L19.8 2M5 3C6.11 3 7 3.9 7 5S6.11 7 5 7 3 6.11 3 5 3.9 3 5 3Z`,knife:`M20.62,2C23.97,7.61 12.47,20.15 12.47,20.15L9.6,17.28L4.91,22L2.77,19.86L20.62,2Z`,"knife-military":`M22,2L17.39,3.75L10.46,10.68L14,14.22L20.92,7.29C22.43,5.78 22,2 22,2M8.33,10L6.92,11.39L8.33,12.8L2.68,18.46L6.21,22L11.87,16.34L13.28,17.76L14.7,16.34L8.33,10Z`,leaf:`M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z`,"leaf-maple":`M21.79,13L16,16L17,18L13,17.25V21H11V17.25L7,18L8,16L2.21,13L3.21,11.27L1.61,8L5.21,7.77L6.21,6L9.63,9.9L8,5H10L12,2L14,5H16L14.37,9.9L17.79,6L18.79,7.73L22.39,7.96L20.79,11.19L21.79,13Z`,"lightbulb-on":`M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z`,"lightbulb-on-outline":`M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z`,"lightning-bolt":`M11 15H6L13 1V9H18L11 23V15Z`,"link-variant":`M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z`,"link-variant-off":`M2,5.27L3.28,4L20,20.72L18.73,22L13.9,17.17L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L12.5,15.76L10.88,14.15C10.87,14.39 10.77,14.64 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C8.12,13.77 7.63,12.37 7.72,11L2,5.27M12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.79,8.97L9.38,7.55L12.71,4.22M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.2,10.54 16.61,12.5 16.06,14.23L14.28,12.46C14.23,11.78 13.94,11.11 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z`,"lock-open-variant":`M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z`,magnet:`M3,7V13A9,9 0 0,0 12,22A9,9 0 0,0 21,13V7H17V13A5,5 0 0,1 12,18A5,5 0 0,1 7,13V7M17,5H21V2H17M3,5H7V2H3`,medal:`M20,2H4V4L9.81,8.36C6.14,9.57 4.14,13.53 5.35,17.2C6.56,20.87 10.5,22.87 14.19,21.66C17.86,20.45 19.86,16.5 18.65,12.82C17.95,10.71 16.3,9.05 14.19,8.36L20,4V2M14.94,19.5L12,17.78L9.06,19.5L9.84,16.17L7.25,13.93L10.66,13.64L12,10.5L13.34,13.64L16.75,13.93L14.16,16.17L14.94,19.5Z`,"medical-bag":`M10,3L8,5V7H5C3.85,7 3.12,8 3,9L2,19C1.88,20 2.54,21 4,21H20C21.46,21 22.12,20 22,19L21,9C20.88,8 20.06,7 19,7H16V5L14,3H10M10,5H14V7H10V5M11,10H13V13H16V15H13V18H11V15H8V13H11V10Z`,meditation:`M12 4C13.11 4 14 4.89 14 6S13.11 8 12 8 10 7.11 10 6 10.9 4 12 4M21 16V14C18.76 14 16.84 13.04 15.4 11.32L14.06 9.72C13.68 9.26 13.12 9 12.53 9H11.5C10.89 9 10.33 9.26 9.95 9.72L8.61 11.32C7.16 13.04 5.24 14 3 14V16C5.77 16 8.19 14.83 10 12.75V15L6.12 16.55C5.45 16.82 5 17.5 5 18.21C5 19.2 5.8 20 6.79 20H9V19.5C9 18.12 10.12 17 11.5 17H14.5C14.78 17 15 17.22 15 17.5S14.78 18 14.5 18H11.5C10.67 18 10 18.67 10 19.5V20H17.21C18.2 20 19 19.2 19 18.21C19 17.5 18.55 16.82 17.88 16.55L14 15V12.75C15.81 14.83 18.23 16 21 16Z`,"message-text-lock":`M20.5 0A2.5 2.5 0 0 0 18 2.5V3A1 1 0 0 0 17 4V8A1 1 0 0 0 18 9H23A1 1 0 0 0 24 8V4A1 1 0 0 0 23 3V2.5A2.5 2.5 0 0 0 20.5 0M20.5 1A1.5 1.5 0 0 1 22 2.5V3H19V2.5A1.5 1.5 0 0 1 20.5 1M4 2A2 2 0 0 0 2 4V22L6 18H20A2 2 0 0 0 22 16V11H17C15.89 11 15 10.11 15 9V2H4M6 6H13V8H6V6M6 9H13V11H6V9M6 12H14V14H6V12Z`,"microphone-variant":`M9,3A4,4 0 0,1 13,7H5A4,4 0 0,1 9,3M11.84,9.82L11,18H10V19A2,2 0 0,0 12,21A2,2 0 0,0 14,19V14A4,4 0 0,1 18,10H20L19,11L20,12H18A2,2 0 0,0 16,14V19A4,4 0 0,1 12,23A4,4 0 0,1 8,19V18H7L6.16,9.82C5.67,9.32 5.31,8.7 5.13,8H12.87C12.69,8.7 12.33,9.32 11.84,9.82M9,11A1,1 0 0,0 8,12A1,1 0 0,0 9,13A1,1 0 0,0 10,12A1,1 0 0,0 9,11Z`,molecule:`M7.27,10L9,7H14.42L15.58,5L15.5,4.5A1.5,1.5 0 0,1 17,3A1.5,1.5 0 0,1 18.5,4.5C18.5,5.21 18,5.81 17.33,5.96L16.37,7.63L17.73,10L18.59,8.5L18.5,8A1.5,1.5 0 0,1 20,6.5A1.5,1.5 0 0,1 21.5,8C21.5,8.71 21,9.3 20.35,9.46L18.89,12L20.62,15C21.39,15.07 22,15.71 22,16.5A1.5,1.5 0 0,1 20.5,18A1.5,1.5 0 0,1 19,16.5V16.24L17.73,14L16.37,16.37L17.33,18.04C18,18.19 18.5,18.79 18.5,19.5A1.5,1.5 0 0,1 17,21A1.5,1.5 0 0,1 15.5,19.5L15.58,19L14.42,17H10.58L9.42,19L9.5,19.5A1.5,1.5 0 0,1 8,21A1.5,1.5 0 0,1 6.5,19.5C6.5,18.79 7,18.19 7.67,18.04L8.63,16.37L4.38,9C3.61,8.93 3,8.29 3,7.5A1.5,1.5 0 0,1 4.5,6A1.5,1.5 0 0,1 6,7.5C6,7.59 6,7.68 6,7.76L7.27,10M10.15,9L8.42,12L10.15,15H14.85L16.58,12L14.85,9H10.15Z`,"moon-waning-crescent":`M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z`,mushroom:`M12,2A10,10 0 0,1 22,12A2,2 0 0,1 20,14H4A2,2 0 0,1 2,12A10,10 0 0,1 12,2M12,8A2,2 0 0,0 14,6A2,2 0 0,0 12,4A2,2 0 0,0 10,6A2,2 0 0,0 12,8M17,12A2,2 0 0,0 19,10A2,2 0 0,0 17,8A2,2 0 0,0 15,10A2,2 0 0,0 17,12M7,12A2,2 0 0,0 9,10A2,2 0 0,0 7,8A2,2 0 0,0 5,10A2,2 0 0,0 7,12M15,15L16.27,19.45L16.35,20C16.35,21.1 15.45,22 14.35,22H9.65A2,2 0 0,1 7.65,20L7.73,19.45L9,15H15Z`,music:`M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z`,needle:`M11.15,15.18L9.73,13.77L11.15,12.35L12.56,13.77L13.97,12.35L12.56,10.94L13.97,9.53L15.39,10.94L16.8,9.53L13.97,6.7L6.9,13.77L9.73,16.6L11.15,15.18M3.08,19L6.2,15.89L4.08,13.77L13.97,3.87L16.1,6L17.5,4.58L16.1,3.16L17.5,1.75L21.75,6L20.34,7.4L18.92,6L17.5,7.4L19.63,9.53L9.73,19.42L7.61,17.3L3.08,21.84V19Z`,ninja:`M7.75,13C7.74,12.65 7.9,12.31 8.17,12.08C8.92,12.24 9.62,12.55 10.25,13C10.25,13.68 9.69,14.24 9,14.24C8.31,14.24 7.76,13.69 7.75,13M13.75,13C14.38,12.56 15.08,12.25 15.83,12.09C16.1,12.32 16.26,12.66 16.25,13C16.25,13.7 15.69,14.26 15,14.26C14.31,14.26 13.75,13.7 13.75,13V13M12,9C9.23,8.96 6.5,9.65 4.07,11L4,12C4,13.23 4.29,14.44 4.84,15.54C7.21,15.18 9.6,15 12,15C14.4,15 16.79,15.18 19.16,15.54C19.71,14.44 20,13.23 20,12L19.93,11C17.5,9.65 14.77,8.96 12,9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z`,"numeric-0-circle":`M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z`,"numeric-1-circle":`M10,7V9H12V17H14V7H10M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z`,"numeric-2-circle":`M9,7V9H13V11H11A2,2 0 0,0 9,13V17H11L15,17V15H11V13H13A2,2 0 0,0 15,11V9A2,2 0 0,0 13,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z`,"numeric-3-circle":`M15,15V13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 15,10.5V9C15,7.89 14.1,7 13,7H9V9H13V11H11V13H13V15H9V17H13A2,2 0 0,0 15,15M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z`,"numeric-4-circle":`M9,7V13H13V17H15V7H13V11H11V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z`,"numeric-5-circle":`M9,7V13H13V15H9V17H13A2,2 0 0,0 15,15V13A2,2 0 0,0 13,11H11V9H15V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z`,"numeric-6-circle":`M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V13A2,2 0 0,0 13,11H11V9H15V7H11M11,13H13V15H11V13M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z`,"numeric-7-circle":`M11,17L15,9V7H9V9H13L9,17H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z`,"numeric-8-circle":`M11,13H13V15H11V13M11,9H13V11H11V9M11,17H13A2,2 0 0,0 15,15V13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 15,10.5V9C15,7.89 14.1,7 13,7H11A2,2 0 0,0 9,9V10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 9,13.5V15C9,16.11 9.9,17 11,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z`,"numeric-9-circle":`M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M13,17A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11A2,2 0 0,0 9,9V11A2,2 0 0,0 11,13H13V15H9V17H13M13,11H11V9H13V11Z`,orbit:`M8.11,1.75C9.3,1.25 10.62,1 12,1C18.08,1 23,5.92 23,12C23,18.08 18.08,23 12,23C5.92,23 1,18.08 1,12C1,10.62 1.25,9.3 1.72,8.08C2.24,8.61 2.83,8.96 3.45,9.18C3.16,10.07 3,11 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3C11,3 10.07,3.16 9.18,3.45C8.96,2.83 8.61,2.24 8.11,1.75M4.93,2.93C6.03,2.93 6.93,3.82 6.93,4.93A2,2 0 0,1 4.93,6.93C3.82,6.93 2.93,6.03 2.93,4.93C2.93,3.82 3.82,2.93 4.93,2.93M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7Z`,owl:`M12,16C12.56,16.84 13.31,17.53 14.2,18L12,20.2L9.8,18C10.69,17.53 11.45,16.84 12,16M17,11.2A2,2 0 0,0 15,13.2A2,2 0 0,0 17,15.2A2,2 0 0,0 19,13.2C19,12.09 18.1,11.2 17,11.2M7,11.2A2,2 0 0,0 5,13.2A2,2 0 0,0 7,15.2A2,2 0 0,0 9,13.2C9,12.09 8.1,11.2 7,11.2M17,8.7A4,4 0 0,1 21,12.7A4,4 0 0,1 17,16.7A4,4 0 0,1 13,12.7A4,4 0 0,1 17,8.7M7,8.7A4,4 0 0,1 11,12.7A4,4 0 0,1 7,16.7A4,4 0 0,1 3,12.7A4,4 0 0,1 7,8.7M2.24,1C4,4.7 2.73,7.46 1.55,10.2C1.19,11 1,11.83 1,12.7A6,6 0 0,0 7,18.7C7.21,18.69 7.42,18.68 7.63,18.65L10.59,21.61L12,23L13.41,21.61L16.37,18.65C16.58,18.68 16.79,18.69 17,18.7A6,6 0 0,0 23,12.7C23,11.83 22.81,11 22.45,10.2C21.27,7.46 20,4.7 21.76,1C19.12,3.06 15.36,4.69 12,4.7C8.64,4.69 4.88,3.06 2.24,1Z`,palette:`M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z`,parachute:`M21.2,10.95L12,23L2.78,10.96L2.87,10.88C3.08,10.67 3.33,10.5 3.58,10.36L10.73,19.69L8.58,13L9.24,11.81L12,20.38L14.73,11.8L15.4,13L13.27,19.69L20.41,10.35C20.66,10.5 20.9,10.64 21.1,10.85L21.2,10.95M5,9C6.5,9 7.81,9.86 8.5,11.1C9.17,9.86 10.47,9 12,9C13.5,9 14.8,9.85 15.5,11.09C16.16,9.84 17.47,9 19,9C20.09,9 21.09,9.42 21.81,10.14C20.94,5.5 16.88,2 12,2C7.09,2 3.03,5.5 2.16,10.17C2.89,9.45 3.89,9 5,9Z`,paw:`M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.5,7.67 10.85,9.25 9.67,9.43C8.5,9.61 7.24,8.32 6.87,6.54C6.5,4.77 7.17,3.19 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3,7.6C4.14,7.11 5.69,8 6.5,9.55C7.26,11.13 7,12.79 5.87,13.28C4.74,13.77 3.2,12.89 2.41,11.32C1.62,9.75 1.9,8.08 3,7.6M21,7.6C22.1,8.08 22.38,9.75 21.59,11.32C20.8,12.89 19.26,13.77 18.13,13.28C17,12.79 16.74,11.13 17.5,9.55C18.31,8 19.86,7.11 21,7.6M19.33,18.38C19.37,19.32 18.65,20.36 17.79,20.75C16,21.57 13.88,19.87 11.89,19.87C9.9,19.87 7.76,21.64 6,20.75C5,20.26 4.31,18.96 4.44,17.88C4.62,16.39 6.41,15.59 7.47,14.5C8.88,13.09 9.88,10.44 11.89,10.44C13.89,10.44 14.95,13.05 16.3,14.5C17.41,15.72 19.26,16.75 19.33,18.38Z`,"paw-outline":`M22.83 8.25C22.56 7.5 22.05 6.96 21.4 6.68C20.23 6.18 18.81 6.6 17.7 7.66C17.81 7.37 17.91 7.06 18 6.73C18.25 5.38 18.03 4.03 17.38 3.12C16.95 2.5 16.33 2.11 15.64 2C14.1 1.78 12.57 3.08 11.93 5C11.29 3.05 9.74 1.76 8.19 2C7.5 2.12 6.88 2.53 6.45 3.16C5.81 4.09 5.61 5.39 5.89 6.74C5.94 7 6 7.24 6.09 7.47C5 6.56 3.7 6.2 2.6 6.68C1.94 6.97 1.44 7.53 1.17 8.27C.794 9.31 .92 10.58 1.5 11.77C2.34 13.4 3.82 14.41 5.21 14.41C5.57 14.41 5.93 14.34 6.27 14.2C6.93 13.91 7.44 13.35 7.71 12.63C8.03 11.79 8 10.77 7.64 9.76C8.19 10.19 8.81 10.45 9.45 10.45C9.57 10.45 9.7 10.44 9.82 10.42C10.5 10.32 11.12 9.92 11.55 9.3C11.7 9.08 11.83 8.84 11.93 8.58C12.03 8.84 12.15 9.08 12.3 9.29C12.73 9.91 13.35 10.31 14.04 10.42C14.16 10.44 14.29 10.45 14.41 10.45C15.13 10.45 15.83 10.12 16.43 9.57C16 10.64 15.96 11.73 16.29 12.63C16.56 13.36 17.07 13.91 17.73 14.2C18.07 14.34 18.43 14.41 18.8 14.41C20.18 14.41 21.66 13.4 22.5 11.77C23.08 10.58 23.21 9.3 22.83 8.25M5.84 11.93C5.72 12.26 5.53 12.34 5.47 12.36C4.92 12.6 3.88 12 3.3 10.87C2.9 10.06 2.91 9.35 3.05 8.94C3.13 8.73 3.25 8.58 3.4 8.5C3.5 8.5 3.58 8.46 3.68 8.46C4.26 8.46 5.1 9.03 5.6 10C5.93 10.68 6.03 11.43 5.84 11.93M9.91 8.16C9.79 8.32 9.66 8.42 9.5 8.44C9 8.5 8.14 7.73 7.85 6.34C7.65 5.38 7.85 4.66 8.1 4.29C8.22 4.12 8.36 4 8.5 4C9 3.91 9.88 4.69 10.16 6.1C10.36 7.07 10.16 7.8 9.91 8.16M16 6.33C15.72 7.73 14.83 8.5 14.34 8.44C14.28 8.43 14.12 8.41 13.94 8.15C13.69 7.79 13.5 7.07 13.7 6.1C13.97 4.76 14.8 4 15.29 4C15.32 4 15.34 4 15.36 4C15.5 4 15.63 4.11 15.75 4.27C16.07 4.73 16.18 5.54 16 6.33M20.7 10.87C20.12 12 19.08 12.6 18.53 12.36C18.47 12.34 18.28 12.26 18.16 11.93C18 11.43 18.07 10.68 18.39 10C18.9 9.04 19.75 8.47 20.33 8.47C20.43 8.47 20.5 8.5 20.6 8.5H20.61C20.76 8.58 20.87 8.72 20.95 8.94C21.1 9.34 21.11 10.06 20.7 10.87M16.3 14.5C14.95 13.05 13.89 10.44 11.89 10.44C9.88 10.44 8.88 13.09 7.47 14.5C6.41 15.59 4.62 16.39 4.44 17.88C4.31 18.96 5 20.26 6 20.75C6.35 20.93 6.72 21 7.1 21C8.61 21 10.3 19.87 11.89 19.87C13.5 19.87 15.18 20.97 16.71 20.97C17.08 20.97 17.44 20.91 17.79 20.75C18.65 20.36 19.37 19.32 19.33 18.38C19.26 16.75 17.41 15.72 16.3 14.5M16.96 18.93C16.92 18.95 16.85 18.97 16.71 18.97C16.29 18.97 15.63 18.75 15 18.54C14.08 18.23 13.03 17.87 11.89 17.87C10.75 17.87 9.7 18.24 8.78 18.56C8.15 18.77 7.5 19 7.1 19C6.97 19 6.92 19 6.88 18.95C6.66 18.84 6.4 18.37 6.43 18.12C6.5 17.89 7.23 17.31 7.59 17C8.03 16.68 8.5 16.33 8.89 15.91C9.44 15.36 9.89 14.73 10.33 14.12C10.78 13.5 11.53 12.44 11.89 12.44C12.29 12.44 13.08 13.56 13.56 14.22C13.95 14.78 14.36 15.35 14.82 15.85C15.21 16.27 15.62 16.64 16 17C16.54 17.45 17.32 18.14 17.33 18.44C17.32 18.58 17.12 18.86 16.96 18.93Z`,"pine-tree":`M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z`,pistol:`M7,5H23V9H22V10H16A1,1 0 0,0 15,11V12A2,2 0 0,1 13,14H9.62C9.24,14 8.89,14.22 8.72,14.56L6.27,19.45C6.1,19.79 5.76,20 5.38,20H2C2,20 -1,20 3,14C3,14 6,10 2,10V5H3L3.5,4H6.5L7,5M14,12V11A1,1 0 0,0 13,10H12C12,10 11,11 12,12A2,2 0 0,1 10,10A1,1 0 0,0 9,11V12A1,1 0 0,0 10,13H13A1,1 0 0,0 14,12Z`,"plus-outline":`M4,9H9V4H15V9H20V15H15V20H9V15H4V9M11,13V18H13V13H18V11H13V6H11V11H6V13H11Z`,"printer-3d":`M19,6A1,1 0 0,0 20,5A1,1 0 0,0 19,4A1,1 0 0,0 18,5A1,1 0 0,0 19,6M19,2A3,3 0 0,1 22,5V11H18V7H6V11H2V5A3,3 0 0,1 5,2H19M18,18.25C18,18.63 17.79,18.96 17.47,19.13L12.57,21.82C12.4,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L6.53,19.13C6.21,18.96 6,18.63 6,18.25V13C6,12.62 6.21,12.29 6.53,12.12L11.43,9.68C11.59,9.56 11.79,9.5 12,9.5C12.21,9.5 12.4,9.56 12.57,9.68L17.47,12.12C17.79,12.29 18,12.62 18,13V18.25M12,11.65L9.04,13L12,14.6L14.96,13L12,11.65M8,17.66L11,19.29V16.33L8,14.71V17.66M16,17.66V14.71L13,16.33V19.29L16,17.66Z`,pulse:`M3,13H5.79L10.1,4.79L11.28,13.75L14.5,9.66L17.83,13H21V15H17L14.67,12.67L9.92,18.73L8.94,11.31L7,15H3V13Z`,quadcopter:`M5.5,1C8,1 10,3 10,5.5C10,6.38 9.75,7.2 9.31,7.9L9.41,8H14.59L14.69,7.9C14.25,7.2 14,6.38 14,5.5C14,3 16,1 18.5,1C21,1 23,3 23,5.5C23,8 21,10 18.5,10C17.62,10 16.8,9.75 16.1,9.31L15,10.41V13.59L16.1,14.69C16.8,14.25 17.62,14 18.5,14C21,14 23,16 23,18.5C23,21 21,23 18.5,23C16,23 14,21 14,18.5C14,17.62 14.25,16.8 14.69,16.1L14.59,16H9.41L9.31,16.1C9.75,16.8 10,17.62 10,18.5C10,21 8,23 5.5,23C3,23 1,21 1,18.5C1,16 3,14 5.5,14C6.38,14 7.2,14.25 7.9,14.69L9,13.59V10.41L7.9,9.31C7.2,9.75 6.38,10 5.5,10C3,10 1,8 1,5.5C1,3 3,1 5.5,1M5.5,3A2.5,2.5 0 0,0 3,5.5A2.5,2.5 0 0,0 5.5,8A2.5,2.5 0 0,0 8,5.5A2.5,2.5 0 0,0 5.5,3M5.5,16A2.5,2.5 0 0,0 3,18.5A2.5,2.5 0 0,0 5.5,21A2.5,2.5 0 0,0 8,18.5A2.5,2.5 0 0,0 5.5,16M18.5,3A2.5,2.5 0 0,0 16,5.5A2.5,2.5 0 0,0 18.5,8A2.5,2.5 0 0,0 21,5.5A2.5,2.5 0 0,0 18.5,3M18.5,16A2.5,2.5 0 0,0 16,18.5A2.5,2.5 0 0,0 18.5,21A2.5,2.5 0 0,0 21,18.5A2.5,2.5 0 0,0 18.5,16M3.91,17.25L5.04,17.91C5.17,17.81 5.33,17.75 5.5,17.75A0.75,0.75 0 0,1 6.25,18.5L6.24,18.6L7.37,19.25L7.09,19.75L5.96,19.09C5.83,19.19 5.67,19.25 5.5,19.25A0.75,0.75 0 0,1 4.75,18.5L4.76,18.4L3.63,17.75L3.91,17.25M3.63,6.25L4.76,5.6L4.75,5.5A0.75,0.75 0 0,1 5.5,4.75C5.67,4.75 5.83,4.81 5.96,4.91L7.09,4.25L7.37,4.75L6.24,5.4L6.25,5.5A0.75,0.75 0 0,1 5.5,6.25C5.33,6.25 5.17,6.19 5.04,6.09L3.91,6.75L3.63,6.25M16.91,4.25L18.04,4.91C18.17,4.81 18.33,4.75 18.5,4.75A0.75,0.75 0 0,1 19.25,5.5L19.24,5.6L20.37,6.25L20.09,6.75L18.96,6.09C18.83,6.19 18.67,6.25 18.5,6.25A0.75,0.75 0 0,1 17.75,5.5L17.76,5.4L16.63,4.75L16.91,4.25M16.63,19.25L17.75,18.5A0.75,0.75 0 0,1 18.5,17.75C18.67,17.75 18.83,17.81 18.96,17.91L20.09,17.25L20.37,17.75L19.25,18.5A0.75,0.75 0 0,1 18.5,19.25C18.33,19.25 18.17,19.19 18.04,19.09L16.91,19.75L16.63,19.25Z`,rabbit:`M18.05,21L15.32,16.26C15.32,14.53 14.25,13.42 12.95,13.42C12.05,13.42 11.27,13.92 10.87,14.66C11.2,14.47 11.59,14.37 12,14.37C13.3,14.37 14.36,15.43 14.36,16.73C14.36,18.04 13.31,19.11 12,19.11H15.3V21H6.79C6.55,21 6.3,20.91 6.12,20.72C5.75,20.35 5.75,19.75 6.12,19.38V19.38L6.62,18.88C6.28,18.73 6,18.5 5.72,18.26C5.5,18.76 5,19.11 4.42,19.11C3.64,19.11 3,18.47 3,17.68C3,16.9 3.64,16.26 4.42,16.26L4.89,16.34V14.37C4.89,11.75 7,9.63 9.63,9.63H9.65C11.77,9.64 13.42,10.47 13.42,9.16C13.42,8.23 13.62,7.86 13.96,7.34C13.23,7 12.4,6.79 11.53,6.79C11,6.79 10.58,6.37 10.58,5.84C10.58,5.41 10.86,5.05 11.25,4.93L10.58,4.89C10.06,4.89 9.63,4.47 9.63,3.95C9.63,3.42 10.06,3 10.58,3H11.53C13.63,3 15.47,4.15 16.46,5.85L16.74,5.84C17.45,5.84 18.11,6.07 18.65,6.45L19.1,6.83C21.27,8.78 21,10.1 21,10.11C21,11.39 19.94,12.44 18.65,12.44L18.16,12.39V12.47C18.16,13.58 17.68,14.57 16.93,15.27L20.24,21H18.05M18.16,7.74C17.63,7.74 17.21,8.16 17.21,8.68C17.21,9.21 17.63,9.63 18.16,9.63C18.68,9.63 19.11,9.21 19.11,8.68C19.11,8.16 18.68,7.74 18.16,7.74Z`,radar:`M19.07,4.93L17.66,6.34C19.1,7.79 20,9.79 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12C4,7.92 7.05,4.56 11,4.07V6.09C8.16,6.57 6,9.03 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12C18,10.34 17.33,8.84 16.24,7.76L14.83,9.17C15.55,9.9 16,10.9 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12C8,10.14 9.28,8.59 11,8.14V10.28C10.4,10.63 10,11.26 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.26 13.6,10.62 13,10.28V2H12A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,9.24 20.88,6.74 19.07,4.93Z`,remote:`M12,0C8.96,0 6.21,1.23 4.22,3.22L5.63,4.63C7.26,3 9.5,2 12,2C14.5,2 16.74,3 18.36,4.64L19.77,3.23C17.79,1.23 15.04,0 12,0M7.05,6.05L8.46,7.46C9.37,6.56 10.62,6 12,6C13.38,6 14.63,6.56 15.54,7.46L16.95,6.05C15.68,4.78 13.93,4 12,4C10.07,4 8.32,4.78 7.05,6.05M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M15,9H9A1,1 0 0,0 8,10V22A1,1 0 0,0 9,23H15A1,1 0 0,0 16,22V10A1,1 0 0,0 15,9Z`,robot:`M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z`,"robot-industrial":`M18.41,4L16,6.41V6.59L18.41,9H22V11H17.59L16,9.41V12H15A2,2 0 0,1 13,10V7.5H9.86C9.77,7.87 9.62,8.22 9.42,8.55L15.18,19H20A2,2 0 0,1 22,21V22H2V21A2,2 0 0,1 4,19H10.61L5.92,10.5C4.12,10.47 2.56,9.24 2.11,7.5C1.56,5.36 2.85,3.18 5,2.63C7.13,2.08 9.31,3.36 9.86,5.5H13V3A2,2 0 0,1 15,1H16V3.59L17.59,2H22V4H18.41M6,4.5A2,2 0 0,0 4,6.5A2,2 0 0,0 6,8.5A2,2 0 0,0 8,6.5A2,2 0 0,0 6,4.5Z`,"rocket-launch":`M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z`,"rotate-3d-variant":`M12,5C16.97,5 21,7.69 21,11C21,12.68 19.96,14.2 18.29,15.29C19.36,14.42 20,13.32 20,12.13C20,9.29 16.42,7 12,7V10L8,6L12,2V5M12,19C7.03,19 3,16.31 3,13C3,11.32 4.04,9.8 5.71,8.71C4.64,9.58 4,10.68 4,11.88C4,14.71 7.58,17 12,17V14L16,18L12,22V19Z`,"rotate-orbit":`M8,14.25L4.75,11H7C7.25,5.39 9.39,1 12,1C14,1 15.77,3.64 16.55,7.45C20.36,8.23 23,10 23,12C23,13.83 20.83,15.43 17.6,16.3L17.89,14.27C19.8,13.72 21,12.91 21,12C21,10.94 19.35,10 16.87,9.5C16.95,10.29 17,11.13 17,12C17,18.08 14.76,23 12,23C10.17,23 8.57,20.83 7.7,17.6L9.73,17.89C10.28,19.8 11.09,21 12,21C13.66,21 15,16.97 15,12C15,11 14.95,10.05 14.85,9.15C13.95,9.05 13,9 12,9L10.14,9.06L10.43,7.05L12,7C12.87,7 13.71,7.05 14.5,7.13C14,4.65 13.06,3 12,3C10.46,3 9.18,6.5 9,11H11.25L8,14.25M14.25,16L11,19.25V17C5.39,16.75 1,14.61 1,12C1,10.17 3.17,8.57 6.4,7.7L6.11,9.73C4.2,10.28 3,11.09 3,12C3,13.54 6.5,14.82 11,15V12.75L14.25,16Z`,ruler:`M1.39,18.36L3.16,16.6L4.58,18L5.64,16.95L4.22,15.54L5.64,14.12L8.11,16.6L9.17,15.54L6.7,13.06L8.11,11.65L9.53,13.06L10.59,12L9.17,10.59L10.59,9.17L13.06,11.65L14.12,10.59L11.65,8.11L13.06,6.7L14.47,8.11L15.54,7.05L14.12,5.64L15.54,4.22L18,6.7L19.07,5.64L16.6,3.16L18.36,1.39L22.61,5.64L5.64,22.61L1.39,18.36Z`,run:`M13.5,5.5C14.59,5.5 15.5,4.58 15.5,3.5C15.5,2.38 14.59,1.5 13.5,1.5C12.39,1.5 11.5,2.38 11.5,3.5C11.5,4.58 12.39,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7C13.29,6.38 12.69,6 12,6C11.69,6 11.5,6.08 11.19,6.08L6,8.28V13H8V9.58L9.79,8.88L8.19,17L3.29,16L2.89,18L9.89,19.38Z`,"run-fast":`M16.5,5.5A2,2 0 0,0 18.5,3.5A2,2 0 0,0 16.5,1.5A2,2 0 0,0 14.5,3.5A2,2 0 0,0 16.5,5.5M12.9,19.4L13.9,15L16,17V23H18V15.5L15.9,13.5L16.5,10.5C17.89,12.09 19.89,13 22,13V11C20.24,11.03 18.6,10.11 17.7,8.6L16.7,7C16.34,6.4 15.7,6 15,6C14.7,6 14.5,6.1 14.2,6.1L9,8.3V13H11V9.6L12.8,8.9L11.2,17L6.3,16L5.9,18L12.9,19.4M4,9A1,1 0 0,1 3,8A1,1 0 0,1 4,7H7V9H4M5,5A1,1 0 0,1 4,4A1,1 0 0,1 5,3H10V5H5M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H7V13H3Z`,"scale-balance":`M12,3C10.73,3 9.6,3.8 9.18,5H3V7H4.95L2,14C1.53,16 3,17 5.5,17C8,17 9.56,16 9,14L6.05,7H9.17C9.5,7.85 10.15,8.5 11,8.83V20H2V22H22V20H13V8.82C13.85,8.5 14.5,7.85 14.82,7H17.95L15,14C14.53,16 16,17 18.5,17C21,17 22.56,16 22,14L19.05,7H21V5H14.83C14.4,3.8 13.27,3 12,3M12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5M5.5,10.25L7,14H4L5.5,10.25M18.5,10.25L20,14H17L18.5,10.25Z`,"scale-unbalanced":`M13 20V8.8C13.5 8.6 14 8.3 14.3 7.9L17.8 9.2L14.9 16C14.4 18 15.9 19 18.4 19S22.5 18 21.9 16L19.3 9.7L20.2 10L20.9 8.1L15 6C15 4.8 14.3 3.6 13 3.1C11.8 2.6 10.5 3.1 9.7 4L3.9 2L3.2 3.8L4.8 4.4L2.1 11C1.6 13 3.1 14 5.6 14S9.7 13 9.1 11L6.6 5.1L9 6C9 7.2 9.7 8.4 11 8.9V20H2V22H22V20H13M19.9 16H16.9L18.4 12.2L19.9 16M7.1 11H4.1L5.6 7.2L7.1 11M11.1 5.7C11.3 5.2 11.9 4.9 12.4 5.1S13.2 5.9 13 6.4 12.2 7.2 11.7 7 10.9 6.2 11.1 5.7Z`,school:`M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z`,"school-outline":`M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z`,"script-text":`M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z`,"seal-variant":`M17.71 6.15C17.46 5.38 16.79 5.21 16.45 4.77C16.14 4.31 16.18 3.62 15.53 3.15S14.23 2.92 13.7 2.77 12.81 2 12 2 10.82 2.58 10.3 2.77 9.13 2.67 8.47 3.15 7.86 4.31 7.55 4.77C7.21 5.21 6.55 5.38 6.29 6.15S6.5 7.45 6.5 8 6 9.08 6.29 9.85 7.21 10.79 7.55 11.23C7.86 11.69 7.82 12.38 8.47 12.85S9.77 13.08 10.3 13.23 11.19 14 12 14 13.18 13.42 13.7 13.23 14.87 13.33 15.53 12.85 16.14 11.69 16.45 11.23C16.79 10.79 17.45 10.62 17.71 9.85S17.5 8.55 17.5 8 18 6.92 17.71 6.15M12 12A4 4 0 1 1 16 8A4 4 0 0 1 12 12M14 8A2 2 0 1 1 12 6A2 2 0 0 1 14 8M13.71 15.56L13.08 19.16L12.35 23.29L9.74 20.8L6.44 22.25L7.77 14.75A4 4 0 0 0 9.66 15.17A4.15 4.15 0 0 0 11 15.85A3.32 3.32 0 0 0 12 16A3.5 3.5 0 0 0 13.71 15.56M17.92 18.78L15.34 17.86L15.85 14.92A3.2 3.2 0 0 0 16.7 14.47L16.82 14.37Z`,security:`M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z`,shape:`M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z`,"shape-outline":`M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z`,shield:`M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z`,"shield-account":`M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z`,"shield-check":`M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z`,"shield-half-full":`M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18V21Z`,"shield-lock":`M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z`,"shield-outline":`M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21Z`,"shield-plus":`M19,20V22.97H17V20H14V18H17V15H19V18H22V20H19M12,1L21,5V11C21,11.9 20.9,12.78 20.71,13.65C19.9,13.23 19,13 18,13A6,6 0 0,0 12,19C12,20.36 12.45,21.62 13.22,22.62L12,23C6.84,21.74 3,16.55 3,11V5L12,1Z`,"shield-star":`M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M15.08 16L12 14.15L8.93 16L9.74 12.5L7.03 10.16L10.61 9.85L12 6.55L13.39 9.84L16.97 10.15L14.26 12.5L15.08 16Z`,"shield-star-outline":`M21 11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5V11M12 21C15.75 20 19 15.54 19 11.22V6.3L12 3.18L5 6.3V11.22C5 15.54 8.25 20 12 21M15.05 16L11.97 14.15L8.9 16L9.71 12.5L7 10.16L10.58 9.85L11.97 6.55L13.37 9.84L16.95 10.15L14.23 12.5L15.05 16`,"shield-sun":`M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 8.89C13.6 8.89 14.89 10.18 14.89 11.78S13.6 14.67 12 14.67 9.11 13.37 9.11 11.78 10.41 8.89 12 8.89M12 6L13.38 8C12.96 7.82 12.5 7.73 12 7.73S11.05 7.82 10.62 8L12 6M7 8.89L9.4 8.69C9.06 9 8.74 9.34 8.5 9.76C8.25 10.18 8.1 10.62 8 11.08L7 8.89M7 14.67L8.03 12.5C8.11 12.93 8.27 13.38 8.5 13.8C8.75 14.23 9.06 14.59 9.4 14.88L7 14.67M17 8.89L16 11.08C15.9 10.62 15.74 10.18 15.5 9.76C15.26 9.34 14.95 9 14.6 8.68L17 8.89M17 14.67L14.6 14.87C14.94 14.58 15.25 14.22 15.5 13.8C15.74 13.38 15.89 12.93 15.97 12.5L17 14.67M12 17.55L10.61 15.57C11.04 15.72 11.5 15.82 12 15.82C12.5 15.82 12.95 15.72 13.37 15.57L12 17.55Z`,"shield-sun-outline":`M21 11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5V11M12 21C15.75 20 19 15.54 19 11.22V6.3L12 3.18L5 6.3V11.22C5 15.54 8.25 20 12 21M12 8.89C13.6 8.89 14.89 10.18 14.89 11.78S13.6 14.67 12 14.67 9.11 13.37 9.11 11.78 10.41 8.89 12 8.89M12 6L13.38 8C12.96 7.82 12.5 7.73 12 7.73S11.05 7.82 10.62 8L12 6M7 8.89L9.4 8.69C9.06 9 8.74 9.34 8.5 9.76C8.25 10.18 8.1 10.62 8 11.08L7 8.89M7 14.67L8.03 12.5C8.11 12.93 8.27 13.38 8.5 13.8C8.75 14.23 9.06 14.59 9.4 14.88L7 14.67M17 8.89L16 11.08C15.9 10.62 15.74 10.18 15.5 9.76C15.26 9.34 14.95 9 14.6 8.68L17 8.89M17 14.67L14.6 14.87C14.94 14.58 15.25 14.22 15.5 13.8C15.74 13.38 15.89 12.93 15.97 12.5L17 14.67M12 17.55L10.61 15.57C11.04 15.72 11.5 15.82 12 15.82C12.5 15.82 12.95 15.72 13.37 15.57L12 17.55Z`,"shield-sword":`M12 1L3 5V11C3 16.5 6.8 21.7 12 23C17.2 21.7 21 16.5 21 11V5L12 1M15 15H13V18H11V15H9V13H11L10 7.1L12 5.5L14 7.1L13 13H15V15Z`,"shoe-print":`M10.74,11.72C11.21,12.95 11.16,14.23 9.75,14.74C6.85,15.81 6.2,13 6.16,12.86L10.74,11.72M5.71,10.91L10.03,9.84C9.84,8.79 10.13,7.74 10.13,6.5C10.13,4.82 8.8,1.53 6.68,2.06C4.26,2.66 3.91,5.35 4,6.65C4.12,7.95 5.64,10.73 5.71,10.91M17.85,19.85C17.82,20 17.16,22.8 14.26,21.74C12.86,21.22 12.8,19.94 13.27,18.71L17.85,19.85M20,13.65C20.1,12.35 19.76,9.65 17.33,9.05C15.22,8.5 13.89,11.81 13.89,13.5C13.89,14.73 14.17,15.78 14,16.83L18.3,17.9C18.38,17.72 19.89,14.94 20,13.65Z`,"shuffle-variant":`M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z`,sigma:`M18,6H8.83L14.83,12L8.83,18H18V20H6V18L12,12L6,6V4H18V6Z`,sitemap:`M9,2V8H11V11H5C3.89,11 3,11.89 3,13V16H1V22H7V16H5V13H11V16H9V22H15V16H13V13H19V16H17V22H23V16H21V13C21,11.89 20.11,11 19,11H13V8H15V2H9Z`,skull:`M12,2A9,9 0 0,0 3,11C3,14.03 4.53,16.82 7,18.47V22H9V19H11V22H13V19H15V22H17V18.46C19.47,16.81 21,14 21,11A9,9 0 0,0 12,2M8,11A2,2 0 0,1 10,13A2,2 0 0,1 8,15A2,2 0 0,1 6,13A2,2 0 0,1 8,11M16,11A2,2 0 0,1 18,13A2,2 0 0,1 16,15A2,2 0 0,1 14,13A2,2 0 0,1 16,11M12,14L13.5,17H10.5L12,14Z`,"skull-crossbones":`M15.8,18.5L21.8,20.1L21.4,22L12,19.5L2.6,22L2.1,20.1L8.1,18.5L2,16.9L2.5,15L11.9,17.5L21.3,15L21.8,16.9L15.8,18.5M18,8C18,9.8 17.2,11.3 16,12.4V15H14V13.7L14,13H13V15H11V13H10V13.7L10,15H8V12.4C6.8,11.3 6,9.8 6,8A6,6 0 0,1 12,2A6,6 0 0,1 18,8M11,7.5C11,6.7 10.3,6 9.5,6C8.7,6 8,6.7 8,7.5C8,8.3 8.7,9 9.5,9C10.3,9 11,8.3 11,7.5M13,11L12,9L11,11H13M16,7.5C16,6.7 15.3,6 14.5,6C13.7,6 13,6.7 13,7.5C13,8.3 13.7,9 14.5,9C15.3,9 16,8.3 16,7.5Z`,"skull-outline":`M8,15A2,2 0 0,1 6,13A2,2 0 0,1 8,11A2,2 0 0,1 10,13A2,2 0 0,1 8,15M10.5,17L12,14L13.5,17H10.5M16,15A2,2 0 0,1 14,13A2,2 0 0,1 16,11A2,2 0 0,1 18,13A2,2 0 0,1 16,15M22,11A10,10 0 0,0 12,1A10,10 0 0,0 2,11C2,13.8 3.2,16.3 5,18.1V22H19V18.1C20.8,16.3 22,13.8 22,11M17,20H15V18H13V20H11V18H9V20H7V17.2C5.2,15.7 4,13.5 4,11A8,8 0 0,1 12,3A8,8 0 0,1 20,11C20,13.5 18.8,15.8 17,17.2V20Z`,snake:`M19.5 17H18C19.1 17 20 16.1 20 15S19.1 13 18 13V9C18 8 18 7 16.92 6.14C16.97 5.93 17 5.72 17 5.5C17 3.57 15 2 12.5 2C10.24 2 8.38 3.31 8.07 5H6L3.71 2.79L3 3.5L5 5.5L3 7.5L3.71 8.21L6 6H8.07C8.38 7.69 10.24 9 12.5 9C13 9 13.5 8.92 13.93 8.8C13.97 8.87 14 8.94 14 9V13H8C6.9 13 6 13.9 6 15S6.9 17 8 17H6.5C5.12 17 4 18.12 4 19.5C4 19.67 4 19.84 4.05 20H4C2.9 20 2 20.9 2 22H19.5C20.88 22 22 20.88 22 19.5S20.88 17 19.5 17M12 5C11.45 5 11 4.55 11 4S11.45 3 12 3 13 3.45 13 4 12.55 5 12 5Z`,snowflake:`M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z`,"source-branch":`M13,14C9.64,14 8.54,15.35 8.18,16.24C9.25,16.7 10,17.76 10,19A3,3 0 0,1 7,22A3,3 0 0,1 4,19C4,17.69 4.83,16.58 6,16.17V7.83C4.83,7.42 4,6.31 4,5A3,3 0 0,1 7,2A3,3 0 0,1 10,5C10,6.31 9.17,7.42 8,7.83V13.12C8.88,12.47 10.16,12 12,12C14.67,12 15.56,10.66 15.85,9.77C14.77,9.32 14,8.25 14,7A3,3 0 0,1 17,4A3,3 0 0,1 20,7C20,8.34 19.12,9.5 17.91,9.86C17.65,11.29 16.68,14 13,14M7,18A1,1 0 0,0 6,19A1,1 0 0,0 7,20A1,1 0 0,0 8,19A1,1 0 0,0 7,18M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M17,6A1,1 0 0,0 16,7A1,1 0 0,0 17,8A1,1 0 0,0 18,7A1,1 0 0,0 17,6Z`,sprout:`M2,22V20C2,20 7,18 12,18C17,18 22,20 22,20V22H2M11.3,9.1C10.1,5.2 4,6.1 4,6.1C4,6.1 4.2,13.9 9.9,12.7C9.5,9.8 8,9 8,9C10.8,9 11,12.4 11,12.4V17C11.3,17 11.7,17 12,17C12.3,17 12.7,17 13,17V12.8C13,12.8 13,8.9 16,7.9C16,7.9 14,10.9 14,12.9C21,13.6 21,4 21,4C21,4 12.1,3 11.3,9.1Z`,"stairs-up":`M15 6H22V9H18V13H14V17H10V21H3V18H7V14H11V10H15V6M10.17 6.66L4.66 12.17L2.83 10.34L8.34 4.83L6.5 3H12V8.5L10.17 6.66Z`,"star-box":`M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M15.58,17L14.63,12.92L17.79,10.19L13.62,9.83L12,6L10.38,9.84L6.21,10.2L9.37,12.93L8.42,17L12,14.84L15.58,17Z`,"star-circle":`M16.23,18L12,15.45L7.77,18L8.89,13.19L5.16,9.96L10.08,9.54L12,5L13.92,9.53L18.84,9.95L15.11,13.18L16.23,18M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z`,"star-four-points":`M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z`,"star-shooting":`M18.09 11.77L19.56 18.1L14 14.74L8.44 18.1L9.9 11.77L5 7.5L11.47 6.96L14 1L16.53 6.96L23 7.5L18.09 11.77M2 12.43C2.19 12.43 2.38 12.37 2.55 12.26L5.75 10.15L4.18 8.79L1.45 10.59C.989 10.89 .861 11.5 1.16 12C1.36 12.27 1.68 12.43 2 12.43M1.16 21.55C1.36 21.84 1.68 22 2 22C2.19 22 2.38 21.95 2.55 21.84L6.66 19.13L7 17.76L7.31 16.31L1.45 20.16C.989 20.47 .861 21.09 1.16 21.55M1.45 15.38C.989 15.68 .861 16.3 1.16 16.76C1.36 17.06 1.68 17.21 2 17.21C2.19 17.21 2.38 17.16 2.55 17.05L7.97 13.5L8.24 12.31L7.32 11.5L1.45 15.38Z`,strategy:`M6.91 5.5L9.21 7.79L7.79 9.21L5.5 6.91L3.21 9.21L1.79 7.79L4.09 5.5L1.79 3.21L3.21 1.79L5.5 4.09L7.79 1.79L9.21 3.21M22.21 16.21L20.79 14.79L18.5 17.09L16.21 14.79L14.79 16.21L17.09 18.5L14.79 20.79L16.21 22.21L18.5 19.91L20.79 22.21L22.21 20.79L19.91 18.5M20.4 6.83L17.18 11L15.6 9.73L16.77 8.23A9.08 9.08 0 0 0 10.11 13.85A4.5 4.5 0 1 1 7.5 13A4 4 0 0 1 8.28 13.08A11.27 11.27 0 0 1 16.43 6.26L15 5.18L16.27 3.6M10 17.5A2.5 2.5 0 1 0 7.5 20A2.5 2.5 0 0 0 10 17.5Z`,"swap-horizontal":`M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z`,sword:`M6.92,5H5L14,14L15,13.06M19.96,19.12L19.12,19.96C18.73,20.35 18.1,20.35 17.71,19.96L14.59,16.84L11.91,19.5L10.5,18.09L11.92,16.67L3,7.75V3H7.75L16.67,11.92L18.09,10.5L19.5,11.91L16.83,14.58L19.95,17.7C20.35,18.1 20.35,18.73 19.96,19.12Z`,"sword-cross":`M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z`,"table-large":`M4,3H20A2,2 0 0,1 22,5V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V5A2,2 0 0,1 4,3M4,7V10H8V7H4M10,7V10H14V7H10M20,10V7H16V10H20M4,12V15H8V12H4M4,20H8V17H4V20M10,12V15H14V12H10M10,20H14V17H10V20M20,20V17H16V20H20M20,12H16V15H20V12Z`,"tag-multiple":`M5.5,9A1.5,1.5 0 0,0 7,7.5A1.5,1.5 0 0,0 5.5,6A1.5,1.5 0 0,0 4,7.5A1.5,1.5 0 0,0 5.5,9M17.41,11.58C17.77,11.94 18,12.44 18,13C18,13.55 17.78,14.05 17.41,14.41L12.41,19.41C12.05,19.77 11.55,20 11,20C10.45,20 9.95,19.78 9.58,19.41L2.59,12.42C2.22,12.05 2,11.55 2,11V6C2,4.89 2.89,4 4,4H9C9.55,4 10.05,4.22 10.41,4.58L17.41,11.58M13.54,5.71L14.54,4.71L21.41,11.58C21.78,11.94 22,12.45 22,13C22,13.55 21.78,14.05 21.42,14.41L16.04,19.79L15.04,18.79L20.75,13L13.54,5.71Z`,target:`M11,2V4.07C7.38,4.53 4.53,7.38 4.07,11H2V13H4.07C4.53,16.62 7.38,19.47 11,19.93V22H13V19.93C16.62,19.47 19.47,16.62 19.93,13H22V11H19.93C19.47,7.38 16.62,4.53 13,4.07V2M11,6.08V8H13V6.09C15.5,6.5 17.5,8.5 17.92,11H16V13H17.91C17.5,15.5 15.5,17.5 13,17.92V16H11V17.91C8.5,17.5 6.5,15.5 6.08,13H8V11H6.09C6.5,8.5 8.5,6.5 11,6.08M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11Z`,"target-account":`M20.95,11H22.5V13H20.95C20.5,17.17 17.17,20.5 13,20.95V22.5H11V20.95C6.83,20.5 3.5,17.17 3.05,13H1.5V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1.5H13V3.05C17.17,3.5 20.5,6.83 20.95,11M5.07,11H6.5V13H5.07C5.5,16.07 7.93,18.5 11,18.93V17.5H13V18.93C16.07,18.5 18.5,16.07 18.93,13H17.5V11H18.93C18.5,7.93 16.07,5.5 13,5.07V6.5H11V5.07C7.93,5.5 5.5,7.93 5.07,11M16,16H8V15C8,13.67 10.67,13 12,13C13.33,13 16,13.67 16,15V16M12,8A2,2 0 0,1 14,10A2,2 0 0,1 12,12A2,2 0 0,1 10,10A2,2 0 0,1 12,8Z`,terrain:`M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z`,"timer-sand":`M6,2H18V8H18V8L14,12L18,16V16H18V22H6V16H6V16L10,12L6,8V8H6V2M16,16.5L12,12.5L8,16.5V20H16V16.5M12,11.5L16,7.5V4H8V7.5L12,11.5M10,6H14V6.75L12,8.75L10,6.75V6Z`,"timer-sand-empty":`M6,2V8H6V8L10,12L6,16V16H6V22H18V16H18V16L14,12L18,8V8H18V2H6M16,16.5V20H8V16.5L12,12.5L16,16.5M12,11.5L8,7.5V4H16V7.5L12,11.5Z`,toolbox:`M18 16H16V15H8V16H6V15H2V20H22V15H18V16M20 8H17V6C17 4.9 16.1 4 15 4H9C7.9 4 7 4.9 7 6V8H4C2.9 8 2 8.9 2 10V14H6V12H8V14H16V12H18V14H22V10C22 8.9 21.1 8 20 8M15 8H9V6H15V8Z`,"toolbox-outline":`M20 8H17V6C17 4.9 16.1 4 15 4H9C7.9 4 7 4.9 7 6V8H4C2.9 8 2 8.9 2 10V20H22V10C22 8.9 21.1 8 20 8M9 6H15V8H9V6M20 18H4V15H6V16H8V15H16V16H18V15H20V18M18 13V12H16V13H8V12H6V13H4V10H20V13H18Z`,tools:`M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M2.29 18.88A1 1 0 0 0 2.29 20.29L3.71 21.71A1 1 0 0 0 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4Z`,translate:`M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z`,"treasure-chest":`M5,4H19A3,3 0 0,1 22,7V11H15V10H9V11H2V7A3,3 0 0,1 5,4M11,11H13V13H11V11M2,12H9V13L11,15H13L15,13V12H22V20H2V12Z`,tree:`M11,21V16.74C10.53,16.91 10.03,17 9.5,17C7,17 5,15 5,12.5C5,11.23 5.5,10.09 6.36,9.27C6.13,8.73 6,8.13 6,7.5C6,5 8,3 10.5,3C12.06,3 13.44,3.8 14.25,5C14.33,5 14.41,5 14.5,5A5.5,5.5 0 0,1 20,10.5A5.5,5.5 0 0,1 14.5,16C14,16 13.5,15.93 13,15.79V21H11Z`,"triangle-down":`M1 3H23L12 22`,trophy:`M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z`,"trophy-award":`M15.2 10.7L16.6 16L12 12.2L7.4 16L8.8 10.8L4.6 7.3L10 7L12 2L14 7L19.4 7.3L15.2 10.7M14 19H13V16L12 15L11 16V19H10C8.9 19 8 19.9 8 21V22H16V21C16 19.9 15.11 19 14 19Z`,"tune-variant":`M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z`,turtle:`M8.47,5.95C8.95,5.67 9.47,5.44 10,5.28V4C10,2.9 10.87,2 11.97,1.97C13.13,2 14,2.9 14,4V5.28C14.53,5.45 15.05,5.67 15.53,5.95L13.93,8.07H10.07L8.47,5.95M19,12C19,12.5 18.95,12.95 18.86,13.4L16.33,12.62L15.14,8.96L16.74,6.85C17.17,7.25 17.55,7.7 17.88,8.2C18.67,8.13 19.43,8.25 20.11,8.59C21.14,9.12 21.84,10.13 22,11.28L19,11.64C19,11.76 19,11.88 19,12M5,12C5,11.88 5,11.76 5,11.65L2,11.28C2.16,10.13 2.86,9.12 3.89,8.59C4.57,8.25 5.34,8.13 6.08,8.26C6.41,7.75 6.79,7.28 7.24,6.87L8.86,8.95L7.67,12.62L5.14,13.4C5.05,12.95 5,12.5 5,12M10.24,9.57H13.76L14.85,12.93L12,15L9.15,12.93L10.24,9.57M8.13,14.05L11.25,16.31V18.96C10.68,18.9 10.13,18.77 9.62,18.58L8.39,21.34C7.33,20.87 6.57,19.9 6.37,18.76C6.23,18 6.35,17.24 6.69,16.56C6.24,16.04 5.87,15.46 5.59,14.82L8.13,14.05M15.87,14.05L18.41,14.82C18.13,15.46 17.76,16.04 17.31,16.56C17.65,17.24 17.77,18 17.64,18.76C17.43,19.9 16.67,20.87 15.61,21.34L14.39,18.58C13.86,18.77 13.33,18.94 12.75,19V16.31L15.87,14.05Z`,"ufo-outline":`M17 10.54C16.78 7.44 14.63 5 12 5S7.22 7.44 7 10.54C4 11.23 2 12.5 2 14C2 16.21 6.5 18 12 18S22 16.21 22 14C22 12.5 20 11.23 17 10.54M14.93 11.84C13.03 12.05 10.97 12.05 9.07 11.84C9.03 11.56 9 11.28 9 11C9 8.8 10.35 7 12 7S15 8.8 15 11C15 11.28 15 11.56 14.93 11.84Z`,"vector-circle":`M9,2V4.06C6.72,4.92 4.92,6.72 4.05,9H2V15H4.06C4.92,17.28 6.72,19.09 9,19.95V22H15V19.94C17.28,19.08 19.09,17.28 19.95,15H22V9H19.94C19.08,6.72 17.28,4.92 15,4.05V2M11,4H13V6H11M9,6.25V8H15V6.25C16.18,6.86 17.14,7.82 17.75,9H16V15H17.75C17.14,16.18 16.18,17.14 15,17.75V16H9V17.75C7.82,17.14 6.86,16.18 6.25,15H8V9H6.25C6.86,7.82 7.82,6.86 9,6.25M4,11H6V13H4M18,11H20V13H18M11,18H13V20H11`,"vector-line":`M15,3V7.59L7.59,15H3V21H9V16.42L16.42,9H21V3M17,5H19V7H17M5,17H7V19H5`,wall:`M3,16H12V21H3V16M2,10H8V15H2V10M9,10H15V15H9V10M16,10H22V15H16V10M13,16H21V21H13V16M3,4H11V9H3V4M12,4H21V9H12V4Z`,wallet:`M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z`,water:`M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z`,waves:`M20,12H22V14H20C18.62,14 17.26,13.65 16,13C13.5,14.3 10.5,14.3 8,13C6.74,13.65 5.37,14 4,14H2V12H4C5.39,12 6.78,11.53 8,10.67C10.44,12.38 13.56,12.38 16,10.67C17.22,11.53 18.61,12 20,12M20,6H22V8H20C18.62,8 17.26,7.65 16,7C13.5,8.3 10.5,8.3 8,7C6.74,7.65 5.37,8 4,8H2V6H4C5.39,6 6.78,5.53 8,4.67C10.44,6.38 13.56,6.38 16,4.67C17.22,5.53 18.61,6 20,6M20,18H22V20H20C18.62,20 17.26,19.65 16,19C13.5,20.3 10.5,20.3 8,19C6.74,19.65 5.37,20 4,20H2V18H4C5.39,18 6.78,17.53 8,16.67C10.44,18.38 13.56,18.38 16,16.67C17.22,17.53 18.61,18 20,18Z`,"weather-fog":`M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z`,"weather-lightning":`M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z`,"weather-night":`M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z`,"weather-sunny":`M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z`,"weather-tornado":`M21,5H3A1,1 0 0,1 2,4A1,1 0 0,1 3,3H21A1,1 0 0,1 22,4A1,1 0 0,1 21,5M20,8A1,1 0 0,0 19,7H5A1,1 0 0,0 4,8A1,1 0 0,0 5,9H19A1,1 0 0,0 20,8M21,12A1,1 0 0,0 20,11H10A1,1 0 0,0 9,12A1,1 0 0,0 10,13H20A1,1 0 0,0 21,12M16,16A1,1 0 0,0 15,15H9A1,1 0 0,0 8,16A1,1 0 0,0 9,17H15A1,1 0 0,0 16,16M13,20A1,1 0 0,0 12,19H10A1,1 0 0,0 9,20A1,1 0 0,0 10,21H12A1,1 0 0,0 13,20Z`,"weather-windy":`M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z`,"weight-kilogram":`M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5M6,11V19H8V16.5L9,17.5V19H11V17L9,15L11,13V11H9V12.5L8,13.5V11H6M15,11C13.89,11 13,11.89 13,13V17C13,18.11 13.89,19 15,19H18V14H16V17H15V13H18V11H15Z`,"white-balance-sunny":`M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13`,wrench:`M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z`,"yin-yang":`M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4M12,6.5A1.5,1.5 0 0,1 13.5,8A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 10.5,8A1.5,1.5 0 0,1 12,6.5M12,14.5A1.5,1.5 0 0,0 10.5,16A1.5,1.5 0 0,0 12,17.5A1.5,1.5 0 0,0 13.5,16A1.5,1.5 0 0,0 12,14.5Z`},uu={Capítulos:{"Capítulo 1":{i:`dice-d20`},"Capítulo 2":{i:`dna`},"Capítulo 3":{i:`account-group`},"Capítulo 4":{i:`lightning-bolt`},"Capítulo 5":{i:`account-plus`},"Capítulo 6":{i:`bag-personal`}},Parâmetros:{Potência:{i:`dumbbell`},Reflexos:{i:`bullseye-arrow`},Resistência:{i:`security`},Lógica:{i:`head-cog`},Espírito:{i:`yin-yang`},Magnetismo:{i:`magnet`},"Parâmetro (termo)":{i:`account-star`}},"Termos de regra":{"Resistência a Poderes":{i:`shield-sun-outline`},"Característica de Carga Heroica":{i:`flash`},"Custo em Cargas Heroicas":{i:`flash`},"Carga Heroica":{i:`flash`},"Teste de Integridade":{i:`shield-star`},"Teste de Estabilização":{i:`heart-pulse`},"Teste de Parâmetro":{i:`hexagon-outline`},"Teste de Perícia":{i:`star-circle`},"Teste (Sobrecarga e outros)":{i:`dice-d20`},"Jogada de Ataque de Poder":{i:`fire`},"Jogada de Ataque Corpo a Corpo":{i:`sword`},"Jogada de Ataque à Distância":{i:`bow-arrow`},"Jogada de Ataque (genérica)":{i:`crosshairs-gps`},"Bônus de Proficiência / Perícias":{i:`star-circle`},Treinamento:{i:`star-box`},"Classe de Dificuldade (CD)":{i:`comment-check-outline`},"Classe de Armadura (CA)":{i:`shield-half-full`},"Pontos de Vida (PV)":{i:`heart`},"Concentração (na Duração)":{i:`eye-settings-outline`},Concentração:{i:`eye-settings-outline`},Desvantagem:{i:`arrow-down-bold-hexagon-outline`},Vantagem:{i:`arrow-up-bold-hexagon-outline`},"Ação Rápida":{i:`triangle-down`},Reação:{i:`star-four-points`},Ação:{i:`circle`},Deslocamento:{i:`run-fast`},Iniciativa:{i:`timer-sand`},"Cura / Recuperar":{i:`plus-outline`,c:`#30bbbb`},"Perícia (cada perícia)":{i:`star-circle`},"Resistência a Dano":{i:`shield-sun`,c:`tipo`},"Vulnerabilidade a Dano":{i:`shield-sun-outline`,c:`tipo`},"Imunidade a Dano":{i:`shield-lock`,c:`tipo`},"Nível de Poder 0 a 9":{i:`numeric-N-circle`}},"Tipos de dano":{Fogo:{i:`fire`,c:`#ee5500`},Frio:{i:`snowflake`,c:`#3399cc`},Elétrico:{i:`lightning-bolt`,c:`#3366cc`},Ácido:{i:`chart-bubble`,c:`#80b000`},Necrótico:{i:`skull`,c:`#40b050`},Veneno:{i:`water`,c:`#44bb00`},Energia:{i:`asterisk`,c:`#cc3333`},Radiante:{i:`flare`,c:`#ccaa00`},Trovão:{i:`access-point`,c:`#8844bb`},Psíquico:{i:`eye`,c:`#cc77aa`},Cortante:{i:`sword`,c:`#8c8c8c`},Concussão:{i:`hammer`,c:`#8c8c8c`},Perfurante:{i:`arrow-projectile`,c:`#8c8c8c`}},"Ficha de poder":{Tempo:{i:`clock-outline`},Alcance:{i:`vector-line`},Duração:{i:`timer-sand-empty`},Área:{i:`arrow-expand-all`},Ataque:{i:`crosshairs-gps`},"Teste de Integridade":{i:`shield-star-outline`},Dano:{i:`sword`}},"Categorias de poder":{Proteção:{i:`shield-outline`},Percepção:{i:`eye-outline`},Mente:{i:`brain`},Energia:{i:`lightning-bolt`},Ilusão:{i:`drama-masks`},Entropia:{i:`skull-outline`},Transformação:{i:`shape-outline`},Criação:{i:`creation-outline`}},"Origens e Linhagens":{Humanos:{i:`account`},Parahumanos:{i:`dna`},Mutantes:{i:`atom-variant`},Visitantes:{i:`ufo-outline`},Prodígio:{i:`star-shooting`},Sortudo:{i:`clover`},Carismático:{i:`microphone-variant`},Implacável:{i:`boxing-glove`},Robusto:{i:`hammer`},Gênio:{i:`lightbulb-on`},Estrategista:{i:`chess-knight`},Destemido:{i:`emoticon-cool`},Conduíte:{i:`fire`},Infundido:{i:`weather-tornado`},Supersoldado:{i:`shield-account`},Cobaia:{i:`flask`},Amorfo:{i:`water`},Variável:{i:`arrow-expand-all`},Fantasma:{i:`ghost`},Ciborgue:{i:`robot-industrial`},Androide:{i:`robot`},Psíquico:{i:`brain`},Infectado:{i:`biohazard`},Amaldiçoado:{i:`eye-circle`},Radiante:{i:`white-balance-sunny`},Demoníaco:{i:`emoticon-devil`},Metamorfo:{i:`drama-masks`},Feral:{i:`paw`},Felino:{i:`cat`},Saltador:{i:`rabbit`},Mímico:{i:`bird`},Alado:{i:`feather`},"Asa Silenciosa":{i:`owl`},Réptil:{i:`fa:teeth-open`},Carapaça:{i:`turtle`},Anfíbio:{i:`fish`},Venenoso:{i:`fa:frog`},"Gigante Gentil":{i:`tree`},Colosso:{i:`wall`},Chifrudo:{i:`cow`},Paquiderme:{i:`elephant`},Espreitador:{i:`eye-outline`},Feroz:{i:`knife`},Escamado:{i:`fa:dragon`},Ofídio:{i:`snake`},Instável:{i:`molecule`},Planador:{i:`parachute`},Eterno:{i:`infinity`},"Eterno Sazonal":{i:`leaf-maple`},"Eterno das Marés":{i:`waves`},"Eterno Astral":{i:`star-four-points`},"Eterno Sombrio":{i:`moon-waning-crescent`},Feérico:{i:`butterfly`},Silvestre:{i:`music`},"Soberano das Marés":{i:`anchor`},"Invasor Astral":{i:`sword-cross`},"Asceta Dimensional":{i:`meditation`},"Mercenário Espacial":{i:`rocket-launch`},Insectoide:{i:`bug`},Analista:{i:`calculator-variant`},Leonino:{i:`crown`},Equino:{i:`horse`},Retornado:{i:`grave-stone`}},Arquétipos:{"Engenheiro Tecnológico":{i:`cog`},"Fúria Incontrolável":{i:`arm-flex`},"Controlador de Mentes":{i:`head-cog`},"Invocador Interdimensional":{i:`vector-circle`},"Campeão do Poder":{i:`shield-sun`},"Guardião da Natureza":{i:`sprout`},"Controlador de Energia":{i:`lightning-bolt`},"Especialista em Combate":{i:`sword`},"Sombra da Noite":{i:`incognito`},"Mestre do Poder":{i:`book-open-variant`},"Artista Marcial":{i:`karate`},"Símbolo da Justiça":{i:`scale-balance`},"Rastreador Vigilante":{i:`crosshairs-gps`}},"Tópicos (Caps. 1, 2, 4, 5, 6)":{"Como o jogo funciona":{i:`gamepad-variant`},Dados:{i:`dice-d20`},"O teste de d20":{i:`dice-d20-outline`},"Vantagem e desvantagem":{i:`scale-unbalanced`},"Regras gerais":{i:`gavel`},Atributos:{i:`account-star`},"Bônus de proficiência":{i:`chevron-triple-up`},"Testes de atributo":{i:`target`},Perícias:{i:`tools`},Ferramentas:{i:`toolbox`},"Variações do teste":{i:`shuffle-variant`},"Testes de resistência":{i:`shield-half-full`},"Movimento e ambiente":{i:`run-fast`},Deslocamento:{i:`shoe-print`},Quedas:{i:`arrow-collapse-down`},Sufocamento:{i:`weather-windy`},"Visão e luz":{i:`eye`},Carga:{i:`weight-kilogram`},"Comida e água":{i:`food-apple`},Descanso:{i:`bed`},Exaustão:{i:`battery-alert-variant-outline`},Combate:{i:`sword-cross`},"A ordem do combate":{i:`format-list-numbered`},"O seu turno":{i:`timer-sand`},"Ações em combate":{i:`lightning-bolt`},"Fazendo um ataque":{i:`target-account`},Cobertura:{i:`wall`},"Dano e cura":{i:`heart-pulse`},"Cair a 0 PV":{i:`skull`},"Combate montado e em veículos":{i:`car-sports`},"Combate subaquático":{i:`waves`},Tamanhos:{i:`ruler`},Condições:{i:`alert-circle`},Concentração:{i:`head-snowflake`},Dimensões:{i:`orbit`},"O que é uma Origem":{i:`dna`},"Como criar a Origem":{i:`account-plus`},"Regras comuns a todas as Linhagens":{i:`book-open-page-variant`},"Como ler este capítulo":{i:`book-open-variant`},"A ficha de poder":{i:`card-text`},"O alfabeto do poder":{i:`alphabet-greek`},Categorias:{i:`shape`},"Além do Ômega · Fi (Φ)":{i:`alert-decagram`},"Criando um herói":{i:`account-plus`},"Gerando atributos":{i:`dice-multiple`},"Valores derivados":{i:`calculator-variant`},Avanço:{i:`stairs-up`},"Identidade heroica":{i:`card-account-details-star`},Antecedentes:{i:`history`},"Características dos Antecedentes":{i:`badge-account`},Talentos:{i:`star-four-points`},Créditos:{i:`credit-card`},"Créditos iniciais":{i:`wallet`},Armaduras:{i:`shield`},Armas:{i:`pistol`},Propriedades:{i:`tag-multiple`},"Armas simples":{i:`knife`},"Armas marciais":{i:`sword`},"Equipamento geral":{i:`bag-personal`},Veículos:{i:`car`},"Estilo de vida e serviços":{i:`home-city`},"Itens especiais":{i:`diamond-stone`},"Soros de cura":{i:`needle`},"Itens Replicáveis":{i:`printer-3d`},"Outros itens especiais":{i:`treasure-chest`},Parâmetros:{i:`account-star`},"Vetor Alfa (α)":{i:`chevron-triple-up`},"Testes de Parâmetro":{i:`target`},"Testes de Integridade":{i:`shield-half-full`},"Pausa e Recuperação":{i:`bed`},"Pontos de Determinação":{i:`star-circle`},"Gerando Parâmetros":{i:`dice-multiple`},"Treinamentos de armas":{i:`school`},"Combate Corpo a Corpo":{i:`sword-cross`},"Armas de Fogo":{i:`pistol`},"Armamento Pesado":{i:`bomb`},"Contra-ataque":{i:`sword-cross`},"Testes de Estabilização":{i:`heart-pulse`}},"Cabeçalhos (ch1.md)":{"Assinatura de poder":{i:`palette`}},"Cabeçalhos do Cap. 3 (características, Especializações etc.)":{"Termos do capítulo":{i:`book-open-variant`},"Estrutura dos Arquétipos":{i:`sitemap`},Treinamentos:{i:`school`},"Níveis de Poder":{i:`sigma`},"Lista única de poderes":{i:`format-list-bulleted-type`},"Regra central: Poderes à Vontade":{i:`infinity`},"Sobrecarga (Eta, Η)":{i:`alert-octagon`},"Características de Carga Heroica":{i:`flash-alert`},"Progressão do Engenheiro Tecnológico":{i:`table-large`},"Características do Arquétipo":{i:`card-account-details-outline`},"Uso de Poderes (1º nível)":{i:`chip`},"Características por nível":{i:`format-list-numbered`},"Bugigangas (1º nível)":{i:`lightbulb-on-outline`},"Aprimorar Equipamento (2º nível)":{i:`wrench`},"Especialização Tecnológica (3º nível)":{i:`source-branch`},"Ferramenta Certa (3º nível)":{i:`toolbox-outline`},"Evolução (4º, 8º, 12º, 16º e 19º níveis)":{i:`arrow-up-bold-circle`},"Especialista em Ferramentas (6º nível)":{i:`hammer-wrench`},"Lampejo de Genialidade (7º nível) · 4 Cargas Heroicas":{i:`head-lightbulb-outline`},"Adepto da Tecnologia (10º nível)":{i:`link-variant`},"Dispositivo Programado (11º nível)":{i:`remote`},"Sábio da Tecnologia (14º nível)":{i:`brain`},"Mestre da Tecnologia (18º nível)":{i:`star-circle`},"Apoteose: Alma da Máquina (20º nível)":{i:`robot`},Especializações:{i:`account-group`},"Engenheiro Bioquímico":{i:`flask-outline`},"Engenheiro Blindado":{i:`robot-industrial`},"Engenheiro Atirador":{i:`crosshairs-gps`},"Engenheiro de Campo":{i:`quadcopter`},Aprimoramentos:{i:`cog`},"Progressão da Fúria Incontrolável":{i:`table-large`},"Fúria (1º nível) · 1 Carga Heroica":{i:`fire`},"Pele Resistente (1º nível)":{i:`shield-half-full`},"Ataque Descontrolado (2º nível)":{i:`sword-cross`},"Sentido de Perigo (2º nível)":{i:`alert-decagram`},"Especialização de Fúria (3º nível)":{i:`source-branch`},"Instinto Aprendido (3º e 10º níveis)":{i:`school-outline`},"Ataque Extra (5º nível)":{i:`sword`},"Passo Acelerado (5º nível)":{i:`run-fast`},"Instinto Feroz (7º nível)":{i:`radar`},"Investida Instintiva (7º nível)":{i:`run`},"Crítico Devastador (9º, 13º e 17º níveis)":{i:`target`},"Fúria Implacável (11º nível)":{i:`heart-pulse`},"Fúria Persistente (15º nível)":{i:`timer-sand`},"Potência Indomável (18º nível)":{i:`arm-flex`},"Apoteose: Ápice Físico (20º nível)":{i:`star-four-points`},"Fúria Frenética":{i:`axe`},"Fúria Bestial":{i:`paw`},"Fúria Ancestral":{i:`ghost-outline`},"Fúria de Espinhos":{i:`cactus`},"Fúria Selvagem":{i:`cat`},"Fúria Tempestuosa":{i:`weather-lightning`},"Fúria Imortal":{i:`infinity`},"Fúria Instável":{i:`atom-variant`},"Fúria Colossal":{i:`human-male-height`},"Progressão do Controlador de Mentes":{i:`table-large`},"Impulso Mental (1º nível) · 1 Carga Heroica":{i:`head-lightbulb`},"Versátil (2º nível)":{i:`tune-variant`},"Voz Reconfortante (2º nível)":{i:`account-voice`},"Impulso de Poder (2º nível)":{i:`flash`},"Especialização Mental (3º nível)":{i:`account-star`},"Especialista (3º nível)":{i:`school`},"Adaptabilidade (4º, 8º, 12º, 16º e 19º níveis)":{i:`swap-horizontal`},"Fonte de Influência (5º nível)":{i:`fountain`},"Escudo Mental (6º nível)":{i:`shield-account`},"Especialista Supremo (10º nível)":{i:`school-outline`},"Segredos do Poder (10º, 14º e 18º níveis)":{i:`book-open-variant`},"Apoteose: Influência Superior (20º nível)":{i:`crown-outline`},"Controlador Iluminado":{i:`head-cog`},"Controlador Valente":{i:`shield-sword`},"Controlador Fascinante":{i:`star-four-points`},"Controlador das Lâminas":{i:`sword-cross`},"Controlador Sussurrante":{i:`incognito`},"Controlador da Matéria":{i:`cube-outline`},"Controlador Eloquente":{i:`bullhorn`},"Controlador Médium":{i:`crystal-ball`},"Progressão do Invocador Interdimensional":{i:`table-large`},"Entidade (1º nível)":{i:`eye-circle`},"Invocações Dimensionais (2º nível)":{i:`script-text`},"Dádiva do Elo (3º nível)":{i:`gift`},"Versatilidade Dimensional (4º, 8º, 12º, 16º e 19º níveis)":{i:`swap-horizontal`},"Segredo Supremo (11º, 13º, 15º e 17º níveis)":{i:`star-circle`},"Apoteose: Mestre Interdimensional (20º nível) · 9 Cargas Heroicas":{i:`star-four-points`},"Especializações: Entidades":{i:`account-group`},"Invocador do Sonho":{i:`weather-night`},"Invocador da Fornalha":{i:`fire`},"Invocador Cósmico":{i:`brain`},"Invocador Estelar":{i:`white-balance-sunny`},"Invocador da Lâmina":{i:`sword`},"Invocador do Abismo":{i:`waves`},"Invocador Elemental":{i:`bottle-tonic-outline`},"Invocador dos Mortos":{i:`skull`},"Invocador Eterno":{i:`heart-pulse`},"Invocações Dimensionais":{i:`format-list-bulleted`},"Progressão do Campeão do Poder":{i:`table-large`},"Especialização (1º nível)":{i:`account-star`},"Pulso da Fonte (2º nível) · 1 Carga Heroica":{i:`pulse`},"Poder Concentrado (2º nível) · 1 Carga Heroica":{i:`target`},"Purgar Mortos-Vivos (5º nível)":{i:`skull-crossbones`},"Golpes Carregados (8º nível)":{i:`sword`},"Milagre (10º nível) · 5 Cargas Heroicas":{i:`creation`},"Apoteose: Milagre Aprimorado (20º nível)":{i:`star-four-points`},"Especializações: Vocações":{i:`account-star`},"Campeão da Vida":{i:`heart-pulse`},"Campeão da Luz":{i:`weather-sunny`},"Campeão do Saber":{i:`brain`},"Campeão de Gaia":{i:`leaf`},"Campeão da Tormenta":{i:`weather-lightning`},"Campeão da Mentira":{i:`drama-masks`},"Campeão da Batalha":{i:`sword-cross`},"Campeão da Entropia":{i:`skull`},"Campeão do Nexo":{i:`atom`},"Campeão da Bigorna":{i:`anvil`},"Campeão da Travessia":{i:`grave-stone`},"Campeão da Ordem":{i:`gavel`},"Campeão da Harmonia":{i:`handshake`},"Campeão da Penumbra":{i:`weather-night`},"Progressão do Guardião da Natureza":{i:`table-large`},"Código Verde (1º nível)":{i:`message-text-lock`},"Forma Bestial (2º nível) · 1 Carga Heroica":{i:`paw`},"Parceiro Bestial (2º nível)":{i:`dog-side`},"Especialização: Clã (2º nível)":{i:`account-group`},"Versatilidade Básica (4º, 8º, 12º, 16º e 19º níveis)":{i:`swap-horizontal`},"Corpo Atemporal (18º nível)":{i:`timer-sand`},"Poderes da Fera (18º nível)":{i:`paw-outline`},"Apoteose: Avatar Primordial (20º nível)":{i:`star-four-points`},"Especializações: Clãs":{i:`account-group`},"Guardião do Território":{i:`terrain`},"Guardião Metamorfo":{i:`rabbit`},"Guardião dos Sonhos":{i:`moon-waning-crescent`},"Guardião da Matilha":{i:`owl`},"Guardião do Micélio":{i:`mushroom`},"Guardião das Estrelas":{i:`star-shooting`},"Guardião da Fênix":{i:`fire`},"Progressão do Controlador de Energia":{i:`chart-timeline-variant`},"Especialização: Origem (1º nível)":{i:`dna`},"Fonte de Energia (2º nível) · 2 a 7 Cargas Heroicas":{i:`battery-charging`},"Metapoder (3º, 10º e 17º níveis) · 1 a 9 Cargas Heroicas":{i:`tune-variant`},"Versatilidade Inata (4º, 8º, 12º, 16º e 19º níveis)":{i:`swap-horizontal`},"Orientação Inata (5º nível) · 1 Carga Heroica":{i:`compass-outline`},"Apoteose: Restauração Inata (20º nível)":{i:`battery-sync`},"Especializações: Origens":{i:`star-shooting`},"Energia Elemental":{i:`atom`},"Energia Caótica":{i:`dice-multiple`},"Energia Mental":{i:`brain`},"Energia Algorítmica":{i:`cog-outline`},"Energia Cósmica":{i:`white-balance-sunny`},"Energia Sombria":{i:`ghost`},"Energia da Tempestade":{i:`weather-lightning`},"Energia Lunar":{i:`moon-waning-crescent`},"Progressão do Especialista em Combate":{i:`table-large`},"Estilo de Luta (1º nível)":{i:`sword-cross`},"Fôlego Renovado (1º nível) · 1 Carga Heroica":{i:`heart-pulse`},"Surto de Ação (2º nível) · 1 Carga Heroica":{i:`run-fast`},"Especialização (3º nível)":{i:`account-star`},"Evolução (4º, 6º, 8º, 12º, 14º, 16º e 19º níveis)":{i:`arrow-up-bold-circle`},"Versatilidade Marcial (4º, 6º, 8º, 12º, 14º, 16º e 19º níveis)":{i:`swap-horizontal`},"Ataque Extra (5º e 11º níveis)":{i:`sword`},"Indomável (9º nível) · 5 Cargas Heroicas":{i:`shield-half-full`},"Apoteose: Máquina de Guerra (20º nível)":{i:`star-four-points`},"Especialista Atlético":{i:`trophy-award`},"Especialista Tático":{i:`strategy`},"Especialista Energizado":{i:`flash-triangle`},"Especialista Atirador":{i:`bow-arrow`},"Especialista Comandante":{i:`flag-variant`},"Especialista Protetor":{i:`shield-account`},"Especialista Temporal":{i:`timer-sand`},"Especialista Telecinético":{i:`rotate-3d-variant`},"Especialista Titânico":{i:`arm-flex`},"Especialista Honrado":{i:`seal-variant`},Manobras:{i:`chess-knight`},"Progressão da Sombra da Noite":{i:`table-large`},"Especialista (1º e 6º níveis)":{i:`star-circle`},"Golpe Preciso (1º nível)":{i:`crosshairs-gps`},"Gíria das Ruas (1º nível)":{i:`message-text-lock`},"Ação Ágil (2º nível)":{i:`run-fast`},"Mira Firme (3º nível)":{i:`target`},"Evolução (4º, 8º, 10º, 12º, 16º e 19º níveis)":{i:`arrow-up-bold-circle`},"Esquiva Instintiva (5º nível)":{i:`shield-half-full`},"Evasão (7º nível)":{i:`debug-step-over`},"Prática Infalível (11º nível)":{i:`check-decagram`},"Sentido Aguçado (14º nível)":{i:`ear-hearing`},"Mente Escorregadia (15º nível)":{i:`brain`},"Esquivo (18º nível)":{i:`eye-off`},"Apoteose: Golpe de Sorte (20º nível) · 9 Cargas Heroicas":{i:`dice-multiple`},"Sombra Ladra":{i:`lock-open-variant`},"Sombra Letal":{i:`knife-military`},"Sombra Ilusória":{i:`hand-back-right`},"Sombra Detetive":{i:`account-search`},"Sombra Estrategista":{i:`head-cog`},"Sombra Espectral":{i:`ghost`},"Sombra Batedora":{i:`compass`},"Sombra Psíquica":{i:`sword`},"Sombra Duelista":{i:`fencing`},"Progressão do Mestre do Poder":{i:`table-large`},"Arquivo de Poderes (1º nível)":{i:`database`},"Recarga Mental (1º nível) · 1 Carga Heroica":{i:`battery-charging`},"Especialização (2º nível)":{i:`account-switch`},"Fórmulas Básicas (3º nível)":{i:`function-variant`},"Maestria de Poder (18º nível)":{i:`trophy-award`},"Apoteose: Poderes de Assinatura (20º nível)":{i:`star-four-points`},"Especializações: Disciplinas":{i:`account-group`},"Mestre da Proteção":{i:`shield`},"Mestre da Criação":{i:`cube-outline`},"Mestre da Precognição":{i:`crystal-ball`},"Mestre da Mente":{i:`brain`},"Mestre da Energia":{i:`lightning-bolt`},"Mestre da Ilusão":{i:`eye-off`},"Mestre da Entropia":{i:`skull`},"Mestre da Transformação":{i:`atom`},"Mestre das Lâminas":{i:`sword-cross`},"Mestre do Tempo":{i:`clock-fast`},"Mestre da Gravidade":{i:`orbit`},"Mestre Arquivista":{i:`robot`},"Mestre Estrategista":{i:`shield-sword`},"Progressão do Artista Marcial":{i:`table-large`},"Defesa sem Armadura (1º nível)":{i:`shield-outline`},"Artes Marciais (1º nível)":{i:`karate`},"Técnicas de Foco (2º nível)":{i:`meditation`},"Arma Dedicada (2º nível)":{i:`sword`},"Velocidade Sobre-humana (2º nível)":{i:`run-fast`},"Desviar Projéteis (3º nível) · 1 Carga Heroica":{i:`bullet`},"Ataque Energizado (3º nível)":{i:`flash`},"Aterrissagem Controlada (4º nível)":{i:`parachute`},"Cura Acelerada (4º nível) · 2 Cargas Heroicas":{i:`heart-pulse`},"Golpe Atordoante (5º nível) · 1 Carga Heroica":{i:`lightning-bolt`},"Mira Focada (5º nível) · 1 a 3 Cargas Heroicas":{i:`target`},"Golpes Energizados (6º nível)":{i:`fire-circle`},"Mente Tranquila (7º nível)":{i:`yin-yang`},"Metabolismo Blindado (10º nível)":{i:`biohazard`},"Língua Universal (13º nível)":{i:`translate`},"Vontade Inquebrável (14º nível) · 1 Carga Heroica":{i:`diamond-stone`},"Corpo Atemporal (15º nível)":{i:`timer-sand`},"Corpo Fantasma (18º nível) · 4 ou 8 Cargas Heroicas":{i:`ghost-outline`},"Apoteose: Auge Absoluto (20º nível)":{i:`infinity`},"Artista Disciplinado":{i:`hand-back-right`},"Artista das Sombras":{i:`ninja`},"Artista Elemental":{i:`fire`},"Artista Psíquico":{i:`brain`},"Artista do Dragão":{i:`snake`},"Artista Embriagado":{i:`glass-mug-variant`},"Artista das Armas":{i:`sword-cross`},"Artista Ceifador":{i:`skull`},"Artista Curandeiro":{i:`medical-bag`},"Artista Solar":{i:`white-balance-sunny`},"Progressão do Símbolo da Justiça":{i:`table-large`},"Uso de Poderes (2º nível)":{i:`auto-fix`},"Sentido Sobrenatural (1º nível) · 1 Carga Heroica":{i:`radar`},"Toque Restaurador (1º nível) · 1 Carga Heroica":{i:`hand-heart`},"Estilo de Luta (2º nível)":{i:`sword-cross`},"Golpe Justiceiro (2º nível)":{i:`gavel`},"Saúde Inabalável (3º nível)":{i:`shield-plus`},"Poder Concentrado (3º nível) · 2 Cargas Heroicas":{i:`flash`},"Aura de Proteção (6º nível)":{i:`shield-half-full`},"Aura de Coragem (10º nível)":{i:`shield-star`},"Golpe Justiceiro Aprimorado (11º nível)":{i:`star-shooting`},"Toque Purificador (14º nível) · 7 Cargas Heroicas":{i:`creation`},"Auras Ampliadas (18º nível)":{i:`broadcast`},"Apoteose: Símbolo Eterno (20º nível)":{i:`star-four-points`},"Especializações: Símbolos":{i:`scale-balance`},"Símbolo do Defensor":{i:`shield-check`},"Símbolo da Esperança":{i:`leaf`},"Símbolo do Justiceiro":{i:`target-account`},"Símbolo do Conquistador":{i:`chess-king`},"Símbolo da Lei":{i:`bank`},"Símbolo da Glória":{i:`trophy`},"Símbolo da Redenção":{i:`bird`},"Símbolo da Sentinela":{i:`eye-outline`},"Símbolo Quebrado":{i:`link-variant-off`},"Progressão do Rastreador Vigilante":{i:`table-large`},"Alvo Prioritário (1º nível)":{i:`target-account`},"Marca de Caça (1º nível, alternativa)":{i:`crosshairs-gps`},"Especialista em Terreno (1º nível)":{i:`terrain`},"Explorador Hábil (1º nível, alternativa)":{i:`compass`},"Percepção Ampliada (3º nível)":{i:`radar`},"Passo Livre (8º nível)":{i:`shoe-print`},"Camuflagem (10º nível)":{i:`pine-tree`},"Camuflagem Ativa (10º nível, alternativa) · 5 Cargas Heroicas":{i:`incognito`},"Sumir (14º nível)":{i:`weather-fog`},"Sentidos Predatórios (18º nível)":{i:`ear-hearing`},"Apoteose: Caçada Final (20º nível)":{i:`star-four-points`},"Rastreador Caçador":{i:`crosshairs`},"Rastreador das Feras":{i:`paw`},"Rastreador Noturno":{i:`weather-night`},"Rastreador Dimensional":{i:`rotate-orbit`},"Rastreador de Anomalias":{i:`sword`},"Rastreador Onírico":{i:`butterfly`},"Rastreador do Enxame":{i:`bee`},"Rastreador Biomecânico":{i:`robot-industrial`}}};function du(e,{cls:t=`mi`,color:n=null,title:r=null}={}){let i=lu[e];if(!i)return``;let a=typeof i==`object`,o=a?`0 0 ${i.w} ${i.h}`:`0 0 24 24`,s=a?i.d:i;return`<svg class="${t}" viewBox="${o}"${n?` style="color:${n}"`:``} aria-hidden="true"${r?` data-t="${r}"`:``}><path fill="currentColor" d="${s}"/></svg>`}var fu=e=>String(e).replace(/\s*·\s*\d.*$/,``).replace(/\s*\{ch[^}]*\}/,``).trim(),pu=Object.fromEntries(Object.entries(uu).map(([e,t])=>[e,Object.fromEntries(Object.entries(t).map(([e,t])=>[fu(e).toLowerCase(),t]))]));function mu(e,t){let n=uu[e];return n&&(n[t]||n[fu(t)]||pu[e][fu(t).toLowerCase()])||null}var hu=[`Cabeçalhos do Cap. 3 (características, Especializações etc.)`,`Tópicos (Caps. 1, 2, 4, 5, 6)`,`Cabeçalhos (ch1.md)`,`Arquétipos`,`Origens e Linhagens`];function gu(e){let t=fu(e);for(let e of hu){let n=mu(e,t);if(n)return n.i}let n={"Gerando Parâmetros":`Gerando atributos`,"Testes de Parâmetro":`Testes de atributo`,"Vantagem e desvantagem":`Vantagem e desvantagem`,"Bônus de Proficiência":`Bônus de proficiência`,"Cargas Heroicas":null,"Treinamentos de armas":`Treinamentos de armas`};if(n[t])for(let e of hu){let r=mu(e,n[t]);if(r)return r.i}return/^Linhagens /.test(t)?`account-group`:/^Progressão d/.test(t)?`table-large`:t===`Cargas Heroicas`?`flash`:t===`Lista de poderes`?`lightning-bolt`:t===`Visão geral`?`book-open-page-variant`:null}var _u=e=>mu(`Capítulos`,`Capítulo ${e}`)?.i||null,vu=e=>mu(`Arquétipos`,e)?.i||null,yu=e=>mu(`Origens e Linhagens`,e)?.i||null,bu=e=>mu(`Cabeçalhos do Cap. 3 (características, Especializações etc.)`,e)?.i||null,xu=e=>mu(`Categorias de poder`,e)?.i||null,Su=e=>mu(`Ficha de poder`,e)?.i||null,Cu=e=>`numeric-${e}-circle`,wu=e=>mu(`Parâmetros`,e)?.i||null,Tu=Object.fromEntries(Object.entries(uu[`Tipos de dano`]||{}).map(([e,t])=>[e,{i:t.i,c:t.c}])),Eu=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),Du=new Set([`Voo`,`Visão Noturna`,`Telepatia`,`Teia`]),Ou=Kl.map(e=>e.n).filter(e=>!Du.has(e)).sort((e,t)=>t.length-e.length),ku=RegExp(`(?<![\\p{L}\\p{N}])(`+Ou.map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`)+`)(?![\\p{L}\\p{N}])`,`gu`),Au=Object.fromEntries(Kl.map(e=>[ql(e.n),e])),ju=/(?<![\p{L}\p{N}])(\d*)d(4|6|8|10|12|20|100)((?:\s*[+−-]\s*\d+(?![\d,]|\s*d\d|\s*×))?)(?![\p{L}\p{N}])/gu;function Mu(e){let t=e==null||e===``||e===`·`?``:e;return`<span class="ch" title="Carga Heroica${t?`: custo `+Eu(t):``}">${du(`flash`,{cls:`mi`})}${t?`<b>${Eu(t)}</b>`:``}</span>`}function Nu(e){let t=Eu(e);return t=t.replace(/\{ch(?:\s+([^}]*))?\}/g,(e,t)=>Mu(t&&t.trim())),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(e,t,n)=>`<a href="${n.startsWith(`#/`),n}"${/^https?:/.test(n)?` target="_blank" rel="noopener"`:``}>${t}</a>`),t=t.replace(/\*\*([^*]+)\*\*/g,`<strong>$1</strong>`),t=t.replace(/(^|[^*])\*([^*]+)\*/g,`$1<em>$2</em>`),t}function Pu(e,t,{skipStrong:n=!0}={}){let r=e.split(/(<[^>]+>)/),i=[],a=0;for(let e=0;e<r.length;e++){let o=r[e];if(o){if(o[0]===`<`){let e=o.match(/^<(\/?)(\w+)/);if(!e||o.endsWith(`/>`))continue;if(e[1]){i.pop()&&a--;continue}let t=e[2].toLowerCase(),r=t===`a`||t===`button`||t===`svg`||n&&t===`strong`||t===`span`&&/class="(ch|cond|gl|ti)/.test(o);i.push(r),r&&a++}else a===0&&(r[e]=t(o))}}return r.join(``)}function Fu(e,t={}){if(!e)return``;let n=Nu(e);return n=Pu(n,e=>e.replace(ju,(e,t,n,r)=>{let i=`${t||1}d${n}${(r||``).replace(/\s+/g,``).replace(`−`,`-`)}`;return`<button type="button" class="dice" data-roll="${i}" title="Rolar ${i}">${e}</button>`}),{skipStrong:!1}),t.plain||(t.noPowers||(n=Pu(n,e=>e.replace(ku,e=>t.selfPower&&e===t.selfPower?e:`<a class="pw" href="#/poderes/lista?p=${ql(e)}" data-pw="${ql(e)}">${e}</a>`))),n=Pu(n,e=>e.replace(ou,e=>{let t=su(e);return t?`<span class="cond" data-c="${t}">${e}</span>`:e})),t.noTerms||(n=Pu(n,Vu))),n}var Iu=Object.keys(Tu).join(`|`),Lu=`Potência|Reflexos|Resistência|Lógica|Espírito|Magnetismo`,Ru=`Acrobacia|Adestrar Animais|Lidar com Animais|Atletismo|Atuação|Ciências|Enganação|Furtividade|(?<!da |do )História|Intimidação|Intuição|Investigação|Medicina|(?<!da |do )Natureza|Ocultismo|(?<!de )Percepção(?! às cegas| passiva)|Persuasão|Prestidigitação|Religião|Sobrevivência|Tecnologia`,zu=[[`(?:Resistência|Resistente|Vulnerabilidade|Vulnerável|Imunidade|Imune) a Dano (?:de )?(?:${Iu})`,e=>{let t=e.match(RegExp(`(${Iu})$`))[1];return{icon:/^Vulner/.test(e)?`shield-sun-outline`:/^Imun|^Imune/.test(e)?`shield-lock`:`shield-sun`,color:Tu[t].c,cls:`dmg`}}],[`Dano (?:de )?(?:${Iu})`,e=>{let t=e.match(RegExp(`(${Iu})$`))[1];return{icon:Tu[t].i,color:Tu[t].c,cls:`dmg`}}],[`Resistência a Poderes`,()=>({icon:`shield-sun-outline`})],[`Testes? de Integridade`,()=>({icon:`shield-star`,g:`integridade`})],[`Testes? de Estabilização`,()=>({icon:`heart-pulse`})],[`Testes? de Parâmetro`,()=>({icon:`hexagon-outline`,g:`parametro`})],[`Testes? de Sobrecarga`,()=>({icon:`dice-d20`,g:`sobrecarga`})],[`Testes? de (?:${Lu}) \\((?:${Ru})\\)`,()=>({icon:`star-circle`})],[`Jogadas? de Ataque de Poder(?: Corpo a Corpo| à Distância)?`,()=>({icon:`fire`})],[`Jogadas? de Ataque Corpo a Corpo`,()=>({icon:`sword`})],[`Jogadas? de Ataque à Distância`,()=>({icon:`bow-arrow`})],[`Jogadas? de Ataque`,()=>({icon:`crosshairs-gps`})],[`Bônus de Proficiência`,()=>({icon:`star-circle`,g:`proficiencia`})],[`Treinamentos?`,()=>({icon:`star-box`})],[`CD de (?:Poder|Sobrecarga|Linhagem|Foco)|CD`,e=>({icon:`comment-check-outline`,g:e===`CD de Poder`?`cdpoder`:null})],[`CA`,()=>({icon:`shield-half-full`})],[`PV temporários`,()=>({icon:`heart`,g:`pvtemp`})],[`PV`,()=>({icon:`heart`})],[`Concentração`,()=>({icon:`eye-settings-outline`,g:`concentracao`})],[`Vantagem`,()=>({icon:`arrow-up-bold-hexagon-outline`,g:`vantagem`})],[`Desvantagem`,()=>({icon:`arrow-down-bold-hexagon-outline`,g:`desvantagem`})],[`Aç(?:ão|ões) Rápidas?`,()=>({icon:`triangle-down`,g:`acaorapida`})],[`Reaç(?:ão|ões)`,()=>({icon:`star-four-points`,g:`reacao`})],[`Contra-ataques?`,()=>({icon:`sword-cross`,g:`contraataque`})],[`Aç(?:ão|ões)`,()=>({icon:`circle`})],[`Deslocamentos?`,()=>({icon:`run-fast`})],[`Iniciativa`,()=>({icon:`timer-sand`})],[`Cura|Curam|Curar|Recupera|Recuperam`,()=>({icon:`plus-outline`,color:`#30bbbb`,cls:`heal`})],[`Cargas? Heroicas?`,()=>({icon:`flash`,g:`carga`,cls:`chg`})],[`Sobrecarga`,()=>({icon:`alert-octagon`,g:`sobrecarga`})],[`Exaustão(?: Η)?`,()=>({icon:`battery-alert-variant-outline`,g:`exaustao`})],[`Pausas?`,()=>({icon:`bed`,g:`pausa`})],[`Recuperação`,()=>({icon:`bed`,g:`recuperacao`})],[`Matriz(?:es)? de Vitalidade`,()=>({icon:`heart-pulse`,g:`matriz`})],[`Técnicas?`,()=>({icon:`numeric-0-circle`,g:`tecnica`})],[`Níveis? de Poder`,()=>({icon:`sigma`,g:`np`})],[Lu,e=>({icon:wu(e)})],[Ru,()=>({icon:`star-circle`})]],Bu=RegExp(`(?<![\\p{L}\\p{N}])(?:`+zu.map(([e])=>`(${e})`).join(`|`)+`)(?![\\p{L}\\p{N}])`,`gu`);function Vu(e){return e.replace(Bu,(e,...t)=>{let n=t.findIndex((e,t)=>t<zu.length&&e!==void 0);if(n<0)return e;let r=zu[n][1](e),i=du(r.icon,{color:r.color}),a=r.color?` style="color:${r.color}"`:``;return`<span class="ti${r.cls?` `+r.cls:``}"${r.g?` data-g="${r.g}"`:``}${a}>${i}${e}</span>`})}function Hu(e){return String(e||``).replace(/\{ch(?:\s+([^}]*))?\}/g,(e,t)=>t?`(Carga Heroica ${t})`:``).replace(/\[([^\]]+)\]\([^)]+\)/g,`$1`).replace(/\*\*?([^*]+)\*\*?/g,`$1`)}var Uu={regras:`amarelo`,origens:`azul`,arquetipos:`vermelho`,poderes:`violeta`,criacao:`verde`,equipamento:`ciano`},Wu={regras:`Dices`,origens:`Dna`,arquetipos:`Shield`,poderes:`Zap`,criacao:`UserPlus`,equipamento:`Package`},Gu=[Nl,Pl,{...Fl,md:[Fl.md,Il,Ll,Rl,zl,Bl,Vl].join(`
`)},Hl,Wl,Gl].map(e=>{let t=tu(e.md).map(e=>({...e,toc:nu(e.blocks)}));return{id:e.id,num:e.num,title:e.title,short:e.short||e.title,subtitle:e.subtitle,accent:Uu[e.id],icon:Wu[e.id],pages:t,single:t.length===1&&!t[0].id}}),Ku=Object.fromEntries(Gu.map(e=>[e.id,e]));function qu(e,t,n){let r=Ku[e];if(!r)return null;if(r.single)return{chapter:r,page:r.pages[0],section:t||null};let i=r.pages.find(e=>e.id===t);if(!i){if(t){for(let e of r.pages)if(Ju(e,t))return{chapter:r,page:e,section:t}}return{chapter:r,page:r.pages[0],section:null}}return{chapter:r,page:i,section:n||null}}function Ju(e,t){let n=!1;return ru(e.blocks,e=>{e.t===`h`&&e.id===t&&(n=!0)}),n}function Yu(e,t,n){let r=`/${e.id}`;return!e.single&&t?.id&&(r+=`/${t.id}`),n&&(r+=`/${n}`),r}var Xu=Ku.arquetipos.pages.filter(e=>e.attrs.arquetipo).map(e=>{let t={};ru(e.blocks,e=>{if(e.t===`box`&&e.name===`ficha`){for(let n of e.children)if(n.t===`ul`)for(let e of n.items){let n=e.md.match(/^\*\*([^*:]+):\*\*\s*(.*)$/);n&&(t[n[1]]=n[2])}}});let n=e.blocks.find(e=>e.t===`p`),r=[];return ru(e.blocks,(e,t)=>{e.t===`h`&&e.level===3&&t.box?.name===`tabs`&&r.push({name:e.text,id:e.id,img:e.attrs.img})}),{id:e.id,name:e.title,img:e.attrs.img,ficha:t,intro:n?Hu(n.md):``,specs:r}}),Zu=Ku.origens.pages.filter(e=>e.attrs.img).map(e=>{let t=e.blocks.find(e=>e.t===`p`),n=[];return ru(e.blocks,(e,t)=>{e.t===`h`&&e.level===3&&t.box?.name===`cards`&&n.push({name:e.text,id:e.id})}),{id:e.id,name:e.title,img:e.attrs.img,cor:e.attrs.cor,intro:t?Hu(t.md):``,lineages:n}}),Qu=(()=>{let e=[];for(let t of Gu)for(let n of t.pages){let r=n.id?{title:n.title,kind:t.short,href:Yu(t,n),text:[]}:null;r&&e.push(r),ru(n.blocks,(i,a)=>{if(i.t===`h`){let o=a.box?.name===`tabs`?`Especialização`:a.box?.name===`cards`?`Linhagem`:t.short;r={title:i.text,kind:o,context:n.title||t.title,href:Yu(t,n,i.id),text:[]},e.push(r)}else if(r){if(i.t===`p`)r.text.push(Hu(i.md));else if(i.t===`ul`||i.t===`ol`)for(let e of i.items)r.text.push(Hu(e.md));else if(i.t===`table`)for(let e of i.rows)r.text.push(e.map(Hu).join(` · `))}})}for(let t of e)t.text=t.text.join(` `).slice(0,1200);for(let t of Kl)e.push({title:t.n,kind:t.lv===0?`Técnica`:`Poder · NP ${t.lv}`,context:t.cat,href:`/poderes/lista?p=${ql(t.n)}`,text:Hu(t.e).slice(0,600),power:!0});return e})(),$u=[`viewBox`,`width`,`height`],ed=[`d`],Q={__name:`MdiIcon`,props:{name:String,size:{type:[Number,String],default:20},color:String},setup(e){let t=e,n=J(()=>lu[t.name]),r=J(()=>typeof n.value==`object`?`0 0 ${n.value.w} ${n.value.h}`:`0 0 24 24`),i=J(()=>typeof n.value==`object`?n.value.d:n.value);return(t,a)=>n.value?(V(),H(`svg`,{key:0,class:`mi`,viewBox:r.value,width:e.size,height:e.size,style:k({width:e.size+`px`,height:e.size+`px`,color:e.color||null}),"aria-hidden":`true`},[W(`path`,{fill:`currentColor`,d:i.value},null,8,ed)],12,$u)):q(``,!0)}},td={class:`sidenav`,"aria-label":`Capítulos`},nd={class:`num`},rd={class:`num`},id={key:0,class:`sn-pages`},ad={__name:`SideNav`,setup(e){let t=Vc(),n=J(()=>t.params.cap?qu(t.params.cap,t.params.a,t.params.b):null),r=e=>vu(e.title)||yu(e.title)||gu(e.title)||`book-open-page-variant`,i=e=>gu(e.text)||`format-list-bulleted`;function a(e,t){return n.value&&n.value.chapter.id===e.id&&n.value.page===t}return(e,o)=>{let s=_r(`RouterLink`);return V(),H(`nav`,td,[G(s,{to:`/ficha`,class:A([`sn-cap sn-ficha`,{active:F(t).path.startsWith(`/ficha`)}])},{default:I(()=>[W(`span`,nd,[G(Q,{name:`card-account-details-star`,size:20})]),o[0]||=K(`Ficha de personagem `,-1)]),_:1},8,[`class`]),(V(!0),H(B,null,z(F(Gu),e=>(V(),H(`div`,{key:e.id,class:A([`sn-chapter`,`ac-`+e.accent])},[G(s,{to:`/`+e.id,class:A([`sn-cap`,{active:n.value?.chapter.id===e.id}])},{default:I(()=>[W(`span`,rd,[G(Q,{name:F(_u)(e.num),size:20},null,8,[`name`])]),K(j(e.num)+`. `+j(e.short),1)]),_:2},1032,[`to`,`class`]),n.value?.chapter.id===e.id?(V(),H(`div`,id,[e.single?(V(!0),H(B,{key:0},z(e.pages[0].toc.filter(e=>e.level===2),t=>(V(),U(s,{key:t.id,to:F(Yu)(e,e.pages[0],t.id),class:A([`sn-page`,{active:F(Z).activeSection===t.id}])},{default:I(()=>[G(Q,{name:i(t),size:15},null,8,[`name`]),K(j(t.text),1)]),_:2},1032,[`to`,`class`]))),128)):(V(!0),H(B,{key:1},z(e.pages,t=>(V(),H(B,{key:t.id},[G(s,{to:F(Yu)(e,t),class:A([`sn-page`,{active:a(e,t)}])},{default:I(()=>[G(Q,{name:r(t),size:15},null,8,[`name`]),K(j(t.title),1)]),_:2},1032,[`to`,`class`]),a(e,t)?(V(!0),H(B,{key:0},z(t.toc.filter(e=>e.level===2),n=>(V(),U(s,{key:n.id,to:F(Yu)(e,t,n.id),class:A([`sn-sec`,{active:F(Z).activeSection===n.id}])},{default:I(()=>[G(Q,{name:i(n),size:13},null,8,[`name`]),K(j(n.text),1)]),_:2},1032,[`to`,`class`]))),128)):q(``,!0)],64))),128))])):q(``,!0)],2))),128)),o[1]||=W(`div`,{class:`sn-foot`},[K(`Rascunho de playtest · Outubro de 2026`),W(`br`),K(`Bruno Azevedo`),W(`br`),W(`br`),K(`Ícones: `),W(`a`,{href:`https://pictogrammers.com/library/mdi/`,target:`_blank`,rel:`noopener`},`Material Design Icons`),K(` (Apache 2.0) e `),W(`a`,{href:`https://fontawesome.com`,target:`_blank`,rel:`noopener`},`Font Awesome Free`),K(` (CC BY 4.0)`)],-1)])}}},od=[`aria-label`],sd={key:0,class:`dice-panel anim-pop`,"aria-label":`Bandeja de dados`},cd={class:`dice-head`},ld={class:`dice-body`},ud={key:0,class:`result`},dd={class:`expr`},fd={class:`breakdown`},pd={key:0},md={key:0,class:`flag crit`},hd={key:1,class:`flag fumble`},gd={class:`dice-quick`},_d=[`onClick`],vd={class:`adv-row`},yd={key:1},bd={class:`w-row`,style:{"justify-content":`space-between`}},xd={class:`history`},Sd={__name:`DiceTray`,setup(e){let t=P(`1d20`),n=[`d4`,`d6`,`d8`,`d10`,`d12`,`d20`,`d100`],r=J(()=>Z.dice.last),i=P(!1);function a(e){i.value=!Dl(e)}let o=J(()=>{let e=r.value;return!e||e.natural==null?null:e.natural===20?`crit`:e.natural===1?`fumble`:null}),s=e=>e<0?`−`:`+`;return(e,c)=>(V(),H(B,null,[W(`button`,{class:`dice-fab`,onClick:c[0]||=e=>F(Z).dice.open=!F(Z).dice.open,"aria-label":F(Z).dice.open?`Fechar dados`:`Abrir dados`,title:`Dados (D)`},[F(Z).dice.open?(V(),U(F(_l),{key:0,size:28})):(V(),U(F(rl),{key:1,size:30}))],8,od),F(Z).dice.open?(V(),H(`section`,sd,[W(`div`,cd,[c[8]||=K(`BANDEJA DE DADOS `,-1),W(`button`,{class:`btn icon sm ghost`,style:{background:`transparent`,border:`0`,color:`#000`},onClick:c[1]||=e=>F(Z).dice.open=!1,"aria-label":`Fechar`},[G(F(_l),{size:18})])]),W(`div`,ld,[r.value?(V(),H(`div`,ud,[(V(),H(`div`,{class:A([`total roll-in`,o.value]),key:r.value.at},j(r.value.total),3)),W(`div`,dd,[K(j(r.value.label?r.value.label+` · `:``)+j(r.value.expr),1),r.value.adv?(V(),H(B,{key:0},[K(` · `+j(r.value.adv>0?`Vantagem`:`Desvantagem`),1)],64)):q(``,!0)]),W(`div`,fd,[(V(!0),H(B,null,z(r.value.parts,(e,t)=>(V(),H(B,{key:t},[t>0||e.sign<0?(V(),H(`span`,pd,j(s(e.sign)),1)):q(``,!0),e.rolls?(V(!0),H(B,{key:1},z(e.rolls,(t,n)=>(V(),H(`span`,{key:n,class:A([`die-face`,{drop:!e.kept.includes(n)}])},j(t),3))),128)):(V(),H(B,{key:2},[K(j(e.label),1)],64))],64))),128))]),o.value===`crit`?(V(),H(`span`,md,`20 natural · acerto crítico!`)):q(``,!0),o.value===`fumble`?(V(),H(`span`,hd,`1 natural · erro automático`)):q(``,!0)])):q(``,!0),W(`div`,gd,[(V(),H(B,null,z(n,e=>W(`button`,{key:e,onClick:t=>a(`1`+e)},j(e),9,_d)),64))]),W(`div`,vd,[W(`button`,{class:A([`chip`,{on:F(Z).dice.adv<0}]),onClick:c[2]||=e=>F(Z).dice.adv=F(Z).dice.adv<0?0:-1},`Desvantagem`,2),W(`button`,{class:A([`chip`,{on:F(Z).dice.adv===0}]),onClick:c[3]||=e=>F(Z).dice.adv=0},`Normal`,2),W(`button`,{class:A([`chip`,{on:F(Z).dice.adv>0}]),onClick:c[4]||=e=>F(Z).dice.adv=F(Z).dice.adv>0?0:1},`Vantagem`,2)]),W(`form`,{class:`dice-form`,onSubmit:c[6]||=Do(e=>a(t.value),[`prevent`])},[L(W(`input`,{"onUpdate:modelValue":c[5]||=e=>t.value=e,type:`text`,placeholder:`ex.: 2d6+3, 4d6kh3`,"aria-label":`Expressão de dados`,style:k(i.value?`border-color: var(--red)`:``)},null,4),[[Y,t.value]]),c[9]||=W(`button`,{class:`btn`,type:`submit`},`Rolar`,-1)],32),c[12]||=W(`p`,{class:`w-note`,style:{margin:`-4px 0 10px`}},`Vantagem e Desvantagem valem para rolagens de 1d20. Clique em qualquer dado do livro para rolar.`,-1),F(Z).dice.history.length>1?(V(),H(`div`,yd,[W(`div`,bd,[c[11]||=W(`b`,{style:{font:`700 13px var(--font-ui)`,"letter-spacing":`1.5px`,color:`var(--ink-3)`}},`HISTÓRICO`,-1),W(`button`,{class:`btn sm ghost`,onClick:c[7]||=e=>F(Z).dice.history.splice(1)},[G(F(hl),{size:14}),c[10]||=K(` Limpar`,-1)])]),W(`ul`,xd,[(V(!0),H(B,null,z(F(Z).dice.history.slice(1),e=>(V(),H(`li`,{key:e.at},[W(`span`,null,j(e.label?e.label+` · `:``)+j(e.expr)+j(e.adv?e.adv>0?` (V)`:` (D)`:``),1),W(`b`,null,j(e.total),1)]))),128))])])):q(``,!0)])])):q(``,!0)],64))}},Cd=[`Ο`,`Ζ`,`Ε`,`Ι`,`Δ`,`Γ`,`Β`,`Α`,`Λ`,`Ω`],wd=[`Ômicron`,`Zeta`,`Épsilon`,`Iota`,`Delta`,`Gama`,`Beta`,`Alfa`,`Lambda`,`Ômega`],Td=[`Proteção`,`Percepção`,`Criação`,`Mente`,`Energia`,`Ilusão`,`Entropia`,`Transformação`],Ed={Θ:{name:`Área`,short:`Área`},Κ:{name:`Concentração`,short:`Conc.`},Ψ:{name:`Psíquico`,short:`Psíq.`},Ν:{name:`Alvos múltiplos`,short:`Alvos`},Τ:{name:`Ritual`,short:`Ritual`},Ξ:{name:`Surto (caos)`,short:`Surto`},Ρ:{name:`Resistência a Poderes`,short:`Rô`},Υ:{name:`Zona antipoder`,short:`Antipoder`}};function Dd(e){return e===0?`Técnica · Ômicron (Ο)`:`Nível de Poder ${e} · ${wd[e]} (${Cd[e]})`}function Od(e){let t=[];return e.tempo&&t.push([`Tempo`,e.tempo]),e.alc&&t.push([`Alcance`,e.alc]),e.dur&&t.push([`Duração`,e.dur]),e.area&&t.push([`Área (Θ)`,e.area]),e.atq&&t.push([`Ataque`,e.atq]),e.teste&&t.push([`Teste de Integridade`,e.teste]),e.dano&&t.push([`Dano`,e.dano]),e.sigma&&t.push([`Dano (Σ)`,e.sigma]),e.cura&&t.push([`Cura`,e.cura]),t}var kd=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);function Ad(e){let t=Od(e).slice(0,5).map(([e,t])=>`<div><span>${e}</span> ${kd(t)}</div>`).join(``),n=Fu(e.e.split(`
`)[0],{plain:!0});return`<div class="tip-k">${kd(Dd(e.lv))} · ${kd(e.cat)}</div><div class="tip-t">${kd(e.n)}</div><div class="tip-f">${t}</div><p>${n.length>320?n.slice(0,320).replace(/<[^>]*$/,``)+`…`:n}</p><div class="tip-h">Clique para ver a ficha completa</div>`}function jd(e){let t=(e.tempo||``).toLowerCase();return t.startsWith(`reação`)?`reacao`:t.startsWith(`ação rápida`)?`rapida`:t.startsWith(`ação`)?`acao`:`longo`}var Md=[`Ácido`,`Concussão`,`Cortante`,`Elétrico`,`Energia`,`Fogo`,`Frio`,`Necrótico`,`Perfurante`,`Psíquico`,`Radiante`,`Trovão`,`Veneno`];function Nd(e){let t=`${e.dano||``} ${e.sigma||``}`;return Md.filter(e=>new RegExp(e,`i`).test(t))}var Pd=[`aria-label`],Fd={class:`drawer-head`},Id={class:`big-g`},Ld={class:`k`},Rd={class:`dr-lv`},zd={key:0,class:`tag-legend`},Bd={class:`drawer-body`},Vd={class:`statblock`},Hd=[`innerHTML`],Ud=[`innerHTML`],Wd={key:0,class:`upcast`},Gd=[`innerHTML`],Kd={key:1,class:`w-note`,style:{"margin-top":`14px`}},qd={class:`drawer-actions`},Jd={__name:`PowerDrawer`,setup(e){let t={"Área (Θ)":`Área`,"Dano (Σ)":`Dano`,Cura:null},n=Vc(),r=Bc(),i=J(()=>Z.power?Au[Z.power]:null),a=J(()=>i.value?eu(i.value.e).map(e=>e.t===`p`?`<p>${Fu(e.md,{selfPower:i.value.n})}</p>`:e.t===`ul`||e.t===`ol`?`<${e.t}>${e.items.map(e=>`<li>${Fu(e.md,{selfPower:i.value.n})}</li>`).join(``)}</${e.t}>`:``).join(``):``),o=J(()=>{let e=(i.value?.dano||i.value?.sigma||``).match(/\d+d\d+(?:\s*[+]\s*\d+)?/);return e?e[0].replace(/\s+/g,``):null});function s(){if(Z.power=null,n.query.p){let e={...n.query};delete e.p,r.replace({query:e})}}function c(){let e=location.href.split(`#`)[0]+`#/poderes/lista?p=`+Z.power;navigator.clipboard?.writeText(e)}return R(i,e=>{e&&(Z.tip=null)}),(e,n)=>(V(),H(B,null,[i.value?(V(),H(`div`,{key:0,class:`backdrop anim-fade`,onClick:s})):q(``,!0),i.value?(V(),H(`aside`,{key:1,class:`drawer anim-drawer`,role:`dialog`,"aria-label":`Poder: `+i.value.n},[W(`button`,{class:`btn icon ghost drawer-close`,onClick:s,"aria-label":`Fechar`},[G(F(_l),{size:18})]),W(`div`,Fd,[W(`span`,Id,j(F(Cd)[i.value.lv]),1),W(`div`,Ld,j(F(Dd)(i.value.lv))+` · `+j(i.value.cat),1),W(`h2`,null,[G(Q,{name:F(xu)(i.value.cat),size:38},null,8,[`name`]),K(` `+j(i.value.n)+` `,1),W(`span`,Rd,[G(Q,{name:F(Cu)(i.value.lv),size:56},null,8,[`name`])])]),i.value.t.length?(V(),H(`div`,zd,[(V(!0),H(B,null,z(i.value.t,e=>(V(),H(`span`,{key:e},j(e)+` `+j(F(Ed)[e]?.name),1))),128))])):q(``,!0)]),W(`div`,Bd,[W(`dl`,Vd,[(V(!0),H(B,null,z(F(Od)(i.value),([e,n])=>(V(),H(B,{key:e},[W(`dt`,null,[G(Q,{name:t[e]===void 0?F(Su)(e):t[e]?F(Su)(t[e]):`plus-outline`,size:15},null,8,[`name`]),K(` `+j(e),1)]),W(`dd`,null,[W(`span`,{innerHTML:F(Fu)(n,{noPowers:!0})},null,8,Hd),e===`Duração`&&i.value.t.includes(`Κ`)?(V(),U(Q,{key:0,name:`eye-settings-outline`,size:16,title:`Concentração`})):q(``,!0)])],64))),128))]),W(`div`,{innerHTML:a.value},null,8,Ud),i.value.up?(V(),H(`div`,Wd,[W(`b`,null,`Em Níveis de Poder maiores`+j(i.value.upN?` (Ν)`:``),1),W(`span`,{innerHTML:F(Fu)(i.value.up,{plain:!0})},null,8,Gd)])):q(``,!0),i.value.lv>0?(V(),H(`p`,Kd,`Teste de Sobrecarga na primeira ativação deste Nível de Poder na cena: Integridade (Resistência), CD `+j(11+i.value.lv)+`.`,1)):q(``,!0),W(`div`,qd,[W(`button`,{class:A([`btn`,{ghost:!F(Z).favorites.includes(F(Z).power)}]),onClick:n[0]||=e=>F(Ol)(F(Z).power)},[G(F(pl),{size:16}),K(j(F(Z).favorites.includes(F(Z).power)?`Favorito`:`Favoritar`),1)],2),o.value?(V(),H(`button`,{key:0,class:`btn ghost`,onClick:n[1]||=e=>F(Dl)(o.value,{label:i.value.n})},[G(F(rl),{size:16}),K(` Rolar `+j(o.value),1)])):q(``,!0),W(`button`,{class:`btn ghost`,onClick:c},[G(F(sl),{size:16}),n[2]||=K(` Copiar link`,-1)])])])],8,Pd)):q(``,!0)],64))}};function Yd(e){return Array.isArray?Array.isArray(e):of(e)===`[object Array]`}function Xd(e){if(typeof e==`string`)return e;if(typeof e==`bigint`)return e.toString();let t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Zd(e){return e==null?``:Xd(e)}function Qd(e){return typeof e==`string`}function $d(e){return typeof e==`number`}function ef(e){return e===!0||e===!1||nf(e)&&of(e)==`[object Boolean]`}function tf(e){return typeof e==`object`}function nf(e){return tf(e)&&e!==null}function rf(e){return e!=null}function af(e){return!e.trim().length}function of(e){return e==null?e===void 0?`[object Undefined]`:`[object Null]`:Object.prototype.toString.call(e)}var sf=`Incorrect 'index' type`,cf=`Invalid doc index: must be a non-negative integer within the bounds of the docs array`,lf=e=>`Invalid value for key ${e}`,uf=e=>`Pattern length exceeds max of ${e}.`,df=e=>`Missing ${e} property in key`,ff=e=>`Property 'weight' in key '${e}' must be a positive integer`,pf=`Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.`,mf=Object.prototype.hasOwnProperty,hf=class{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let n=gf(e);this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight}),this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function gf(e){let t=null,n=null,r=null,i=1,a=null;if(Qd(e)||Yd(e))r=e,t=_f(e),n=vf(e);else{if(!mf.call(e,`name`))throw Error(df(`name`));let o=e.name;if(r=o,mf.call(e,`weight`)&&e.weight!==void 0&&(i=e.weight,i<=0))throw Error(ff(vf(o)));t=_f(o),n=vf(o),a=e.getFn??null}return{path:t,id:n,weight:i,src:r,getFn:a}}function _f(e){return Yd(e)?e:e.split(`.`)}function vf(e){return Yd(e)?e.join(`.`):e}function yf(e,t){let n=[],r=!1,i=(e,t,a,o)=>{if(rf(e)){if(!t[a])n.push(o===void 0?e:{v:e,i:o});else{let s=e[t[a]];if(!rf(s))return;if(a===t.length-1&&(Qd(s)||$d(s)||ef(s)||typeof s==`bigint`))n.push(o===void 0?Zd(s):{v:Zd(s),i:o});else if(Yd(s)){r=!0;for(let e=0,n=s.length;e<n;e+=1)i(s[e],t,a+1,e)}else t.length&&i(s,t,a+1,o)}}};return i(e,Qd(t)?t.split(`.`):t,0),r?n:n[0]}var bf={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},xf={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Sf={location:0,threshold:.6,distance:100},Cf={useExtendedSearch:!1,useTokenSearch:!1,tokenize:void 0,tokenMatch:`any`,getFn:yf,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},$=Object.freeze({...xf,...bf,...Sf,...Cf});function wf(e){return e>=9&&e<=13||e===32||e===160}function Tf(e=1,t=3){let n=new Map,r=10**t;return{get(t){let i=0,a=!1;for(let e=0;e<t.length;e++)wf(t.charCodeAt(e))?a=!1:a||=(i++,!0);if(i===0&&(i=1),n.has(i))return n.get(i);let o=Math.round(r/i**(.5*e))/r;return n.set(i,o),o},clear(){n.clear()}}}var Ef=class{constructor({getFn:e=$.getFn,fieldNormWeight:t=$.fieldNormWeight}={}){this.norm=Tf(t,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){if(this.isCreated||!this.docs.length)return;this.isCreated=!0;let e=this.docs.length;this.records=Array(e);let t=0;if(Qd(this.docs[0]))for(let n=0;n<e;n++){let e=this._createStringRecord(this.docs[n],n);e&&(this.records[t++]=e)}else for(let n=0;n<e;n++)this.records[t++]=this._createObjectRecord(this.docs[n],n);this.records.length=t,this.norm.clear()}add(e,t){if(!Number.isInteger(t)||t<0)throw Error(cf);if(Qd(e)){let n=this._createStringRecord(e,t);return n&&this.records.push(n),n}let n=this._createObjectRecord(e,t);return this.records.push(n),n}removeAt(e){if(!Number.isInteger(e)||e<0)throw Error(cf);for(let t=0,n=this.records.length;t<n;t+=1)if(this.records[t].i===e){this.records.splice(t,1);break}for(let t=0,n=this.records.length;t<n;t+=1)this.records[t].i>e&&--this.records[t].i}removeAll(e){let t=new Set;for(let n of e)Number.isInteger(n)&&n>=0&&t.add(n);if(t.size===0)return;this.records=this.records.filter(e=>!t.has(e.i));let n=Array.from(t).sort((e,t)=>e-t);for(let e of this.records){let t=0,r=n.length;for(;t<r;){let i=t+r>>>1;n[i]<e.i?t=i+1:r=i}e.i-=t}}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_createStringRecord(e,t){return!rf(e)||af(e)?null:{v:e,i:t,n:this.norm.get(e)}}_createObjectRecord(e,t){let n={i:t,$:{}};for(let t=0,r=this.keys.length;t<r;t++){let r=this.keys[t],i=r.getFn?r.getFn(e):this.getFn(e,r.path);if(rf(i)){if(Yd(i)){let e=[];for(let t=0,n=i.length;t<n;t+=1){let n=i[t];if(rf(n)){if(Qd(n)){if(!af(n)){let r={v:n,i:t,n:this.norm.get(n)};e.push(r)}}else if(rf(n.v)){let t=Qd(n.v)?n.v:Zd(n.v);if(!af(t)){let r={v:t,i:n.i,n:this.norm.get(t)};e.push(r)}}}}n.$[t]=e}else if(Qd(i)&&!af(i)){let e={v:i,n:this.norm.get(i)};n.$[t]=e}}}return n}toJSON(){return{keys:this.keys.map(({getFn:e,...t})=>t),records:this.records}}};function Df(e,t,{getFn:n=$.getFn,fieldNormWeight:r=$.fieldNormWeight}={}){let i=new Ef({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(gf)),i.setSources(t),i.create(),i}function Of(e,{getFn:t=$.getFn,fieldNormWeight:n=$.fieldNormWeight}={}){let{keys:r,records:i}=e,a=new Ef({getFn:t,fieldNormWeight:n});return a.setKeys(r),a.setIndexRecords(i),a}function kf(e=[],t=$.minMatchCharLength){let n=[],r=-1,i=-1,a=0;for(let o=e.length;a<o;a+=1){let o=e[a];o&&r===-1?r=a:!o&&r!==-1&&(i=a-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[a-1]&&a-r>=t&&n.push([r,a-1]),n}function Af(e,t,n,{location:r=$.location,distance:i=$.distance,threshold:a=$.threshold,findAllMatches:o=$.findAllMatches,minMatchCharLength:s=$.minMatchCharLength,includeMatches:c=$.includeMatches,ignoreLocation:l=$.ignoreLocation}={}){if(t.length>32)throw Error(uf(32));let u=t.length,d=e.length,f=Math.max(0,Math.min(r,d)),p=a,m=f,h=(e,t)=>{let n=e/u;if(l)return n;let r=Math.abs(f-t);return i?n+r/i:r?1:n},g=s>1||c,_=g?Array(d):[],v;for(;(v=e.indexOf(t,m))>-1;){let e=h(0,v);if(p=Math.min(e,p),m=v+u,g){let e=0;for(;e<u;)_[v+e]=1,e+=1}}m=-1;let y=[],b=1,x=0,S=u+d,C=1<<u-1;for(let t=0;t<u;t+=1){let r=0,i=S;for(;r<i;)h(t,f+i)<=p?r=i:S=i,i=Math.floor((S-r)/2+r);S=i;let a=Math.max(1,f-i+1),s=o?d:Math.min(f+i,d)+u,c=Array(s+2);c[s+1]=(1<<t)-1;for(let r=s;r>=a;--r){let i=r-1,o=n[e[i]];if(c[r]=(c[r+1]<<1|1)&o,t&&(c[r]|=(y[r+1]|y[r])<<1|1|y[r+1]),c[r]&C&&(b=h(t,i),b<=p)){if(p=b,m=i,x=t,m<=f)break;a=Math.max(1,2*f-m)}}if(h(t+1,f)>p)break;y=c}if(g&&m>=0){let t=Math.min(d-1,m+u-1+x);for(let r=m;r<=t;r+=1)n[e[r]]&&(_[r]=1)}let w={isMatch:m>=0,score:Math.max(.001,b)};if(g){let e=kf(_,s);e.length?c&&(w.indices=e):w.isMatch=!1}return w}function jf(e){let t={};for(let n=0,r=e.length;n<r;n+=1){let i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}function Mf(e){if(e.length<=1)return e;e.sort((e,t)=>e[0]-t[0]||e[1]-t[1]);let t=[e[0]];for(let n=1,r=e.length;n<r;n+=1){let r=t[t.length-1],i=e[n];i[0]<=r[1]+1?r[1]=Math.max(r[1],i[1]):t.push(i)}return t}var Nf={ł:`l`,Ł:`L`,đ:`d`,Đ:`D`,ø:`o`,Ø:`O`,ħ:`h`,Ħ:`H`,ŧ:`t`,Ŧ:`T`,ı:`i`,ß:`ss`},Pf=RegExp(`[`+Object.keys(Nf).join(``)+`]`,`g`),Ff=typeof String.prototype.normalize==`function`?e=>e.normalize(`NFD`).replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,``).replace(Pf,e=>Nf[e]):e=>e,If=class{constructor(e,{location:t=$.location,threshold:n=$.threshold,distance:r=$.distance,includeMatches:i=$.includeMatches,findAllMatches:a=$.findAllMatches,minMatchCharLength:o=$.minMatchCharLength,isCaseSensitive:s=$.isCaseSensitive,ignoreDiacritics:c=$.ignoreDiacritics,ignoreLocation:l=$.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:o,isCaseSensitive:s,ignoreDiacritics:c,ignoreLocation:l},e=s?e:e.toLowerCase(),e=c?Ff(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;let u=(e,t)=>{this.chunks.push({pattern:e,alphabet:jf(e),startIndex:t})},d=this.pattern.length;if(d>32){let e=0,t=d%32,n=d-t;for(;e<n;)u(this.pattern.substr(e,32),e),e+=32;if(t){let e=d-32;u(this.pattern.substr(e),e)}}else u(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,ignoreDiacritics:n,includeMatches:r}=this.options;if(e=t?e:e.toLowerCase(),e=n?Ff(e):e,this.pattern===e){if(e.length<this.options.minMatchCharLength)return{isMatch:!1,score:1};let t={isMatch:!0,score:0};return r&&(t.indices=[[0,e.length-1]]),t}let{location:i,distance:a,threshold:o,findAllMatches:s,minMatchCharLength:c,ignoreLocation:l}=this.options,u=[],d=0,f=!1;this.chunks.forEach(({pattern:t,alphabet:n,startIndex:p})=>{let{isMatch:m,score:h,indices:g}=Af(e,t,n,{location:i+p,distance:a,threshold:o,findAllMatches:s,minMatchCharLength:c,includeMatches:r,ignoreLocation:l});m&&(f=!0),d+=h,m&&g&&u.push(...g)});let p={isMatch:f,score:f?d/this.chunks.length:1};return f&&r&&(p.indices=Mf(u)),p}},Lf=new Set([`fuzzy`,`include`]);function Rf(e){return e.startsWith(`inverse`)}var zf=[{type:`exact`,multiRegex:/^="(.*)"$/,singleRegex:/^=(.*)$/,create:e=>({type:`exact`,search(t){let n=t===e;return{isMatch:n,score:+!n,indices:[0,e.length-1]}}})},{type:`include`,multiRegex:/^'"(.*)"$/,singleRegex:/^'(.*)$/,create:e=>({type:`include`,search(t){let n=0,r,i=[],a=e.length;for(;(r=t.indexOf(e,n))>-1;)n=r+a,i.push([r,n-1]);let o=!!i.length;return{isMatch:o,score:+!o,indices:i}}})},{type:`prefix-exact`,multiRegex:/^\^"(.*)"$/,singleRegex:/^\^(.*)$/,create:e=>({type:`prefix-exact`,search(t){let n=t.startsWith(e);return{isMatch:n,score:+!n,indices:[0,e.length-1]}}})},{type:`inverse-prefix-exact`,multiRegex:/^!\^"(.*)"$/,singleRegex:/^!\^(.*)$/,create:e=>({type:`inverse-prefix-exact`,search(t){let n=!t.startsWith(e);return{isMatch:n,score:+!n,indices:[0,t.length-1]}}})},{type:`inverse-suffix-exact`,multiRegex:/^!"(.*)"\$$/,singleRegex:/^!(.*)\$$/,create:e=>({type:`inverse-suffix-exact`,search(t){let n=!t.endsWith(e);return{isMatch:n,score:+!n,indices:[0,t.length-1]}}})},{type:`suffix-exact`,multiRegex:/^"(.*)"\$$/,singleRegex:/^(.*)\$$/,create:e=>({type:`suffix-exact`,search(t){let n=t.endsWith(e);return{isMatch:n,score:+!n,indices:[t.length-e.length,t.length-1]}}})},{type:`inverse-exact`,multiRegex:/^!"(.*)"$/,singleRegex:/^!(.*)$/,create:e=>({type:`inverse-exact`,search(t){let n=t.indexOf(e)===-1;return{isMatch:n,score:+!n,indices:[0,t.length-1]}}})},{type:`fuzzy`,multiRegex:/^"(.*)"$/,singleRegex:/^(.*)$/,create:(e,t={})=>{let n=new If(e,{location:t.location??$.location,threshold:t.threshold??$.threshold,distance:t.distance??$.distance,includeMatches:t.includeMatches??$.includeMatches,findAllMatches:t.findAllMatches??$.findAllMatches,minMatchCharLength:t.minMatchCharLength??$.minMatchCharLength,isCaseSensitive:t.isCaseSensitive??$.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics??$.ignoreDiacritics,ignoreLocation:t.ignoreLocation??$.ignoreLocation});return{type:`fuzzy`,search(e){return n.searchIn(e)}}}}],Bf=zf.length,Vf=`\0`,Hf=`|`;function Uf(e){let t=[],n=e.length,r=0;for(;r<n;){for(;r<n&&e[r]===` `;)r++;if(r>=n)break;let i=r;for(;i<n&&e[i]!==` `&&e[i]!==`"`;)i++;if(i<n&&e[i]===`"`){for(i++;i<n;){if(e[i]===`"`){let t=i+1;if(t>=n||e[t]===` `){i++;break}if(e[t]===`$`&&(t+1>=n||e[t+1]===` `)){i+=2;break}}i++}t.push(e.substring(r,i)),r=i}else{for(;i<n&&e[i]!==` `;)i++;t.push(e.substring(r,i)),r=i}}return t}function Wf(e,t){let n=e.match(t);return n?n[1]:null}function Gf(e,t={}){return e.replace(/\\\|/g,Vf).split(Hf).map(e=>{let n=Uf(e.replace(/\u0000/g,`|`).trim()).filter(e=>e&&!!e.trim()),r=[];for(let e=0,i=n.length;e<i;e+=1){let i=n[e],a=!1,o=-1;for(;!a&&++o<Bf;){let e=zf[o],n=Wf(i,e.multiRegex);n&&(r.push(e.create(n,t)),a=!0)}if(!a)for(o=-1;++o<Bf;){let e=zf[o],n=Wf(i,e.singleRegex);if(n){r.push(e.create(n,t));break}}}return r})}var Kf=class{constructor(e,{isCaseSensitive:t=$.isCaseSensitive,ignoreDiacritics:n=$.ignoreDiacritics,includeMatches:r=$.includeMatches,minMatchCharLength:i=$.minMatchCharLength,ignoreLocation:a=$.ignoreLocation,findAllMatches:o=$.findAllMatches,location:s=$.location,threshold:c=$.threshold,distance:l=$.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:n,includeMatches:r,minMatchCharLength:i,findAllMatches:o,ignoreLocation:a,location:s,threshold:c,distance:l},e=t?e:e.toLowerCase(),e=n?Ff(e):e,this.pattern=e,this.query=Gf(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:n,isCaseSensitive:r,ignoreDiacritics:i}=this.options;e=r?e:e.toLowerCase(),e=i?Ff(e):e;let a=0,o=[],s=0,c=!1;for(let r=0,i=t.length;r<i;r+=1){let i=t[r];o.length=0,a=0,c=!1;for(let t=0,r=i.length;t<r;t+=1){let r=i[t],{isMatch:l,indices:u,score:d}=r.search(e);if(l)a+=1,s+=d,Rf(r.type)&&(c=!0),n&&(Lf.has(r.type)?o.push(...u):o.push(u));else{s=0,a=0,o.length=0,c=!1;break}}if(a){let e={isMatch:!0,score:s/a};return c&&(e.hasInverse=!0),n&&(e.indices=Mf(o)),e}}return{isMatch:!1,score:1}}},qf=[];function Jf(...e){qf.push(...e)}function Yf(e,t){for(let n=0,r=qf.length;n<r;n+=1){let r=qf[n];if(r.condition(e,t))return new r(e,t)}return new If(e,t)}var Xf={AND:`$and`,OR:`$or`},Zf={PATH:`$path`,PATTERN:`$val`},Qf=e=>!!(e[Xf.AND]||e[Xf.OR]),$f=e=>!!e[Zf.PATH],ep=e=>!Yd(e)&&tf(e)&&!Qf(e),tp=e=>({[Xf.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function np(e,t,{auto:n=!0}={}){let r=e=>{if(Qd(e)){let r={keyId:null,pattern:e};return n&&(r.searcher=Yf(e,t)),r}let i=Object.keys(e),a=$f(e);if(!a&&i.length>1&&!Qf(e))return r(tp(e));if(ep(e)){let r=a?e[Zf.PATH]:i[0],o=a?e[Zf.PATTERN]:e[r];if(!Qd(o))throw Error(lf(r));let s={keyId:vf(r),pattern:o};return n&&(s.searcher=Yf(o,t)),s}let o={children:[],operator:i[0]};return i.forEach(t=>{let n=e[t];Yd(n)&&n.forEach(e=>{o.children.push(r(e))})}),o};return Qf(e)||(e=tp(e)),r(e)}function rp(e,{ignoreFieldNorm:t=$.ignoreFieldNorm}){let n=1;return e.forEach(({key:e,norm:r,score:i})=>{let a=e?e.weight:null;n*=(i===0&&a?2**-52:i)**+((a||1)*(t?1:r))}),n}function ip(e,{ignoreFieldNorm:t=$.ignoreFieldNorm}){e.forEach(e=>{e.score=rp(e.matches,{ignoreFieldNorm:t})})}var ap=class{constructor(e,t){this.limit=e,this.heap=[],this.comparator=t}get size(){return this.heap.length}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):this.comparator(e,this.heap[0])<0&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(){return this.heap.sort(this.comparator)}_bubbleUp(e){let t=this.heap;for(;e>0;){let n=e-1>>1;if(this.comparator(t[e],t[n])<=0)break;let r=t[e];t[e]=t[n],t[n]=r,e=n}}_sinkDown(e){let t=this.heap,n=t.length,r=e;do{e=r;let i=2*e+1,a=2*e+2;if(i<n&&this.comparator(t[i],t[r])>0&&(r=i),a<n&&this.comparator(t[a],t[r])>0&&(r=a),r!==e){let n=t[e];t[e]=t[r],t[r]=n}}while(r!==e)}};function op(e){let t=[];return e.matches.forEach(e=>{if(!rf(e.indices)||!e.indices.length)return;let n={indices:e.indices,value:e.value};e.key&&(n.key=e.key.id),e.idx>-1&&(n.refIndex=e.idx),t.push(n)}),t}function sp(e,t,{includeMatches:n=$.includeMatches,includeScore:r=$.includeScore}={}){return e.map(e=>{let{idx:i}=e,a={item:t[i],refIndex:i};return n&&(a.matches=op(e)),r&&(a.score=e.score),a})}var cp=/[\p{L}\p{M}\p{N}_]+/gu,lp=new WeakSet;function up(e){lp.has(e)||(lp.add(e),console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`))}function dp(e){if(typeof e==`function`){let t=!1;return n=>{let r=e(n);if(!t&&(t=!0,!Array.isArray(r)||r.some(e=>typeof e!=`string`)))throw Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(r)?`array containing non-strings`:typeof r}.`);return r}}return e instanceof RegExp?(e.global||up(e),t=>t.match(e)||[]):e=>e.match(cp)||[]}function fp({isCaseSensitive:e=!1,ignoreDiacritics:t=!1,tokenize:n}={}){let r=dp(n);return{tokenize(n){return e||(n=n.toLowerCase()),t&&(n=Ff(n)),r(n)}}}var pp=class{static condition(e,t){return t.useTokenSearch}constructor(e,t){this.options=t,this.analyzer=fp({isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,tokenize:t.tokenize});let n=this.analyzer.tokenize(e),{df:r,fieldCount:i}=t._invertedIndex;this.termSearchers=[],this.idfWeights=[];for(let e of n){this.termSearchers.push(new If(e,{location:t.location,threshold:t.threshold,distance:t.distance,includeMatches:t.includeMatches,findAllMatches:t.findAllMatches,minMatchCharLength:t.minMatchCharLength,isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,ignoreLocation:!0}));let n=r.get(e)||0,a=Math.log(1+(i-n+.5)/(n+.5));this.idfWeights.push(a)}this.combineAll=t.tokenMatch===`all`,this.numTerms=this.termSearchers.length,this.useMask=this.numTerms<=31}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};let t=[],n=0,r=0,i=0,a=0,o=this.combineAll&&!this.useMask?new Set:null;for(let s=0;s<this.termSearchers.length;s++){let c=this.termSearchers[s].searchIn(e),l=this.idfWeights[s];r+=l,c.isMatch&&(i++,n+=l*(1-c.score),c.indices&&t.push(...c.indices),this.combineAll&&(this.useMask?a|=1<<s:o.add(s)))}if(i===0)return{isMatch:!1,score:1};let s=r>0?1-n/r:0,c={isMatch:!0,score:Math.max(.001,s)};return this.options.includeMatches&&t.length&&(c.indices=Mf(t)),this.combineAll&&(this.useMask?c.matchedMask=a:c.matchedTerms=o,c.termCount=this.numTerms),c}};function mp(e,t,n,r){let i=r.tokenize(t);if(!i.length)return;e.fieldCount++,e.docFieldCount.set(n,(e.docFieldCount.get(n)||0)+1);let a=new Set(i),o=e.docTermFieldHits.get(n);o||(o=new Map,e.docTermFieldHits.set(n,o));for(let t of a)o.set(t,(o.get(t)||0)+1),e.df.set(t,(e.df.get(t)||0)+1)}function hp(e,t,n,r){let{i,v:a,$:o}=t;if(a!==void 0)mp(e,a,i,r);else if(o)for(let t=0;t<n;t++){let n=o[t];if(n){if(Array.isArray(n))for(let t of n)mp(e,t.v,i,r);else mp(e,n.v,i,r)}}}function gp(e,t,n){let r={fieldCount:0,df:new Map,docFieldCount:new Map,docTermFieldHits:new Map};for(let i of e)hp(r,i,t,n);return r}function _p(e,t,n,r){hp(e,t,n,r)}function vp(e,t){let n=e.docFieldCount.get(t);if(n===void 0)return;e.fieldCount-=n,e.docFieldCount.delete(t);let r=e.docTermFieldHits.get(t);if(r){for(let[t,n]of r){let r=(e.df.get(t)||0)-n;r<=0?e.df.delete(t):e.df.set(t,r)}e.docTermFieldHits.delete(t)}}function yp(e,t){if(t.length===0)return;let n=Array.from(new Set(t)).sort((e,t)=>e-t);for(let t of n)vp(e,t);let r=e=>{let t=0,r=n.length;for(;t<r;){let i=t+r>>>1;n[i]<e?t=i+1:r=i}return e-t},i=n[0],a=new Map;for(let[t,n]of e.docFieldCount)a.set(t>i?r(t):t,n);e.docFieldCount=a;let o=new Map;for(let[t,n]of e.docTermFieldHits)o.set(t>i?r(t):t,n);e.docTermFieldHits=o}var bp=class{constructor(e,t,n){this.options={...$,...t},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new hf(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,n),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;let t=Yf(e,this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options);return this._lastQuery=e,this._lastSearcher=t,t}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Ef))throw Error(sf);if(this._myIndex=t||Df(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){let e=fp({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});this._invertedIndex=gp(this._myIndex.records,this._myIndex.keys.length,e)}this._invalidateSearcherCache()}add(e){if(!rf(e))return;this._docs.push(e);let t=this._myIndex.add(e,this._docs.length-1);if(this._invertedIndex&&t){let e=fp({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});_p(this._invertedIndex,t,this._myIndex.keys.length,e)}this._invalidateSearcherCache()}remove(e=()=>!1){let t=[],n=[];for(let r=0,i=this._docs.length;r<i;r+=1)e(this._docs[r],r)&&(t.push(this._docs[r]),n.push(r));if(n.length){this._invertedIndex&&yp(this._invertedIndex,n);let e=new Set(n);this._docs=this._docs.filter((t,n)=>!e.has(n)),this._myIndex.removeAll(n),this._invalidateSearcherCache()}return t}removeAt(e){if(!Number.isInteger(e)||e<0||e>=this._docs.length)throw Error(cf);this._invertedIndex&&yp(this._invertedIndex,[e]);let t=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),this._invalidateSearcherCache(),t}_invalidateSearcherCache(){this._lastQuery=null,this._lastSearcher=null}getIndex(){return this._myIndex}_normalizedKeys(){return this._myIndex.keys.map(e=>this._keyStore.get(e.id)||e)}search(e,t){let{limit:n=-1}=t||{},{includeMatches:r,includeScore:i,shouldSort:a,sortFn:o,ignoreFieldNorm:s}=this.options;if(Qd(e)&&!e.trim()){let e=this._docs.map((e,t)=>({item:e,refIndex:t}));return $d(n)&&n>-1&&(e=e.slice(0,n)),e}let c=a&&$d(n)&&n>0&&Qd(e),l=o,u=(e,t)=>l(e,t)||e.idx-t.idx,d;if(c){let t=new ap(n,u);Qd(this._docs[0])?this._searchStringList(e,{heap:t,ignoreFieldNorm:s}):this._searchObjectList(e,{heap:t,ignoreFieldNorm:s}),d=t.extractSorted()}else d=Qd(e)?Qd(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),ip(d,{ignoreFieldNorm:s}),a&&d.sort(Qd(e)?u:l),$d(n)&&n>-1&&(d=d.slice(0,n));return sp(d,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e,{heap:t,ignoreFieldNorm:n}={}){let r=this._getSearcher(e),i=this.options.useTokenSearch&&this.options.tokenMatch===`all`,{records:a}=this._myIndex,o=t?null:[];return a.forEach(({v:e,i:a,n:s})=>{if(!rf(e))return;let c=r.searchIn(e);if(c.isMatch){let r={score:c.score,value:e,norm:s,indices:c.indices};i&&(r.matchedMask=c.matchedMask,r.matchedTerms=c.matchedTerms,r.termCount=c.termCount);let l=[r];if(!i||this._coversAllTokens(l)){let r={item:e,idx:a,matches:l};t?(r.score=rp(r.matches,{ignoreFieldNorm:n}),t.insert(r)):o.push(r)}}}),o}_searchLogical(e){let t=np(e,this.options),n=this._normalizedKeys(),r=(e,t,i)=>{if(!(`children`in e)){let{keyId:r,searcher:a}=e,o;return r===null?(o=[],n.forEach((e,n)=>{o.push(...this._findMatches({key:e,value:t[n],searcher:a}))})):o=this._findMatches({key:this._keyStore.get(r),value:this._myIndex.getValueForItemAtKeyId(t,r),searcher:a}),o&&o.length?[{idx:i,item:t,matches:o}]:[]}let{children:a,operator:o}=e,s=[];for(let e=0,n=a.length;e<n;e+=1){let n=a[e],c=r(n,t,i);if(c.length)s.push(...c);else if(o===Xf.AND)return[]}return s},i=this._myIndex.records,a=new Map,o=[];return i.forEach(({$:e,i:n})=>{if(rf(e)){let i=r(t,e,n);i.length&&(a.has(n)||(a.set(n,{idx:n,item:e,matches:[]}),o.push(a.get(n))),i.forEach(({matches:e})=>{a.get(n).matches.push(...e)}))}}),o}_searchObjectList(e,{heap:t,ignoreFieldNorm:n}={}){let r=this._getSearcher(e),i=this.options.useTokenSearch&&this.options.tokenMatch===`all`,{records:a}=this._myIndex,o=this._normalizedKeys(),s=t?null:[];return a.forEach(({$:e,i:a})=>{if(!rf(e))return;let c=[],l=!1,u=!1;if(o.forEach((t,n)=>{let i=this._findMatches({key:t,value:e[n],searcher:r});i.length?(c.push(...i),i[0].hasInverse&&(u=!0)):l=!0}),!(u&&l)&&c.length&&(!i||this._coversAllTokens(c))){let r={idx:a,item:e,matches:c};t?(r.score=rp(r.matches,{ignoreFieldNorm:n}),t.insert(r)):s.push(r)}}),s}_findMatches({key:e,value:t,searcher:n}){if(!rf(t))return[];let r=[];if(Yd(t))t.forEach(({v:t,i,n:a})=>{if(!rf(t))return;let o=n.searchIn(t);if(o.isMatch){let n={score:o.score,key:e,value:t,idx:i,norm:a,indices:o.indices,hasInverse:o.hasInverse};o.termCount!==void 0&&(n.matchedMask=o.matchedMask,n.matchedTerms=o.matchedTerms,n.termCount=o.termCount),r.push(n)}});else{let{v:i,n:a}=t,o=n.searchIn(i);if(o.isMatch){let t={score:o.score,key:e,value:i,norm:a,indices:o.indices,hasInverse:o.hasInverse};o.termCount!==void 0&&(t.matchedMask=o.matchedMask,t.matchedTerms=o.matchedTerms,t.termCount=o.termCount),r.push(t)}}return r}_coversAllTokens(e){let t=e.length?e[0].termCount:void 0;if(t===void 0)return!0;if(t<=31){let n=0;for(let t=0;t<e.length;t++)n|=e[t].matchedMask||0;return n===2**t-1}let n=new Set;for(let t=0;t<e.length;t++){let r=e[t].matchedTerms;if(r)for(let e of r)n.add(e)}return n.size===t}};bp.version=`7.5.0`,bp.createIndex=Df,bp.parseIndex=Of,bp.config=$,bp.match=function(e,t,n){if(n&&n.useTokenSearch)throw Error(pf);return Yf(e,{...$,...n}).searchIn(t)},bp.parseQuery=np,Jf(Kf),Jf(pp),bp.use=function(...e){e.forEach(e=>Jf(e))};var xp=bp,Sp={class:`palette`,role:`dialog`,"aria-label":`Buscar no livro`},Cp={class:`palette-input`},wp={key:0,class:`palette-foot`,style:{border:`0`,padding:`6px 12px 2px`}},Tp=[`onMouseenter`,`onClick`,`href`],Ep={class:`kind`},Dp={key:0},Op=[`innerHTML`],kp={key:1,class:`palette-empty`},Ap={class:`palette-foot`},jp={style:{"margin-left":`auto`}},Mp={__name:`SearchPalette`,setup(e){let t=Bc(),n=P(``),r=P(0),i=P(null),a=P(null),o=new xp(Qu,{keys:[{name:`title`,weight:3},{name:`text`,weight:1},{name:`context`,weight:.5}],includeMatches:!0,ignoreLocation:!0,threshold:.32,minMatchCharLength:2,ignoreDiacritics:!0}),s=[`Vantagem e desvantagem`,`Cargas Heroicas`,`Condições`,`Sobrecarga (Eta, Η)`,`Fúria Incontrolável`,`Bola de Fogo`,`Criando um herói`,`Armas`],c=J(()=>{let e=n.value.trim();return e?o.search(e,{limit:40}).map(e=>{let t=e.matches?.find(e=>e.key===`text`),n=``;if(t&&t.indices.length){let[r,i]=t.indices.reduce((e,t)=>t[1]-t[0]>e[1]-e[0]?t:e),a=e.item.text,o=Math.max(0,r-50);n=(o?`…`:``)+l(a.slice(o,r))+`<mark>`+l(a.slice(r,i+1))+`</mark>`+l(a.slice(i+1,i+90))+`…`}else n=l((e.item.text||``).slice(0,120));return{item:e.item,snippet:n}}):s.map(e=>Qu.find(t=>t.title===e)).filter(Boolean).map(e=>({item:e,snippet:``}))}),l=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`);R(()=>Z.search.open,async e=>{e&&(n.value=``,r.value=0,await bn(),i.value?.focus())}),R(n,()=>{r.value=0});function u(e){e&&(Z.search.open=!1,t.push(e.item.href))}function d(e){e.key===`ArrowDown`?(e.preventDefault(),r.value=Math.min(r.value+1,c.value.length-1),f()):e.key===`ArrowUp`?(e.preventDefault(),r.value=Math.max(r.value-1,0),f()):e.key===`Enter`&&(e.preventDefault(),u(c.value[r.value]))}function f(){bn(()=>a.value?.querySelector(`.on`)?.scrollIntoView({block:`nearest`}))}return(e,t)=>F(Z).search.open?(V(),H(`div`,{key:0,class:`palette-wrap anim-fade`,onClick:t[1]||=Do(e=>F(Z).search.open=!1,[`self`])},[W(`div`,Sp,[W(`div`,Cp,[G(F(fl),{size:20}),L(W(`input`,{ref_key:`input`,ref:i,"onUpdate:modelValue":t[0]||=e=>n.value=e,onKeydown:d,placeholder:`Buscar regras, poderes, arquétipos, linhagens…`,"aria-label":`Buscar`},null,544),[[Y,n.value]])]),W(`div`,{class:`palette-list`,ref_key:`list`,ref:a},[!n.value&&c.value.length?(V(),H(`div`,wp,`SUGESTÕES`)):q(``,!0),(V(!0),H(B,null,z(c.value,(e,t)=>(V(),H(`a`,{key:e.item.href+t,class:A([`palette-item`,{on:t===r.value}]),onMouseenter:e=>r.value=t,onClick:Do(t=>u(e),[`prevent`]),href:`#`+e.item.href},[W(`span`,Ep,j(e.item.kind),1),W(`span`,null,[W(`b`,null,j(e.item.title),1),e.item.context?(V(),H(`small`,Dp,j(e.item.context),1)):q(``,!0),e.snippet?(V(),H(`small`,{key:1,innerHTML:e.snippet},null,8,Op)):q(``,!0)])],42,Tp))),128)),n.value&&!c.value.length?(V(),H(`div`,kp,`Nada encontrado para “`+j(n.value)+`”.`,1)):q(``,!0)],512),W(`div`,Ap,[t[2]||=W(`span`,null,`↑↓ navegar`,-1),t[3]||=W(`span`,null,`Enter abrir`,-1),t[4]||=W(`span`,null,`Esc fechar`,-1),W(`span`,jp,j(F(Qu).length)+` entradas`,1)])])])):q(``,!0)}},Np=[`innerHTML`],Pp={__name:`TipLayer`,setup(e){let t=J(()=>{let e=Z.tip;if(!e)return{};let t=Math.min(340,window.innerWidth-20),n=Math.max(10,Math.min(e.x-t/2,window.innerWidth-t-10)),r=e.y+10,i={left:n+`px`};return r+220>window.innerHeight&&e.top>240?i.bottom=window.innerHeight-e.top+10+`px`:i.top=r+`px`,i});return(e,n)=>F(Z).tip?(V(),H(`div`,{key:0,class:A([`tip`,F(Z).tip.kind]),style:k(t.value),innerHTML:F(Z).tip.html,role:`tooltip`},null,14,Np)):q(``,!0)}},Fp={class:`shell`},Ip={class:`main`,id:`conteudo`},Lp={__name:`App`,setup(e){let t=Vc(),n=Bc(),r=J(()=>{if(t.path.startsWith(`/ficha`))return`ficha`;if(!t.params.cap)return`home`;let e=qu(t.params.cap,t.params.a,t.params.b);return e?e.chapter.id+`/`+(e.page.id||``):t.fullPath});R(()=>t.fullPath,()=>{Z.nav.open=!1,Z.tip=null}),R(()=>t.path,()=>{t.query.p||(Z.power=null)}),R(()=>t.query.p,e=>{e&&Au[e]&&(Z.power=e)},{immediate:!0}),R(()=>Z.power,e=>{if(!e&&t.query.p){let e={...t.query};delete e.p,n.replace({query:e})}});function i(e){let t=/input|textarea|select/i.test(e.target?.tagName||``);(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`k`?(e.preventDefault(),Z.search.open=!Z.search.open):e.key===`Escape`?(Z.search.open=!1,Z.power=null,Z.tip=null,Z.nav.open=!1):t||(e.key===`/`&&(e.preventDefault(),Z.search.open=!0),e.key.toLowerCase()===`d`&&!e.ctrlKey&&!e.metaKey&&(Z.dice.open=!Z.dice.open))}function a(e){let t=e.target.closest?.(`.dice`);if(t){e.preventDefault(),Dl(t.dataset.roll,{label:t.closest(`[data-label]`)?.dataset.label||null});return}let r=e.target.closest?.(`a.pw`);if(r&&!e.ctrlKey&&!e.metaKey&&e.button===0){e.preventDefault(),Z.power=r.dataset.pw,Z.tip=null;return}let i=e.target.closest?.(`.gl, .ti[data-g]`);i&&cu[i.dataset.g]?.link&&e.detail===2&&n.push(cu[i.dataset.g].link)}let o=null;function s(e){let t=``,n=``;if(e.matches(`.cond`)){let r=iu[e.dataset.c];if(!r)return;t=`<div class="tip-k">Condição</div><div class="tip-t">${r.name}</div><p>${r.def}</p>`,n=`cond`}else if(e.matches(`.gl, .ti[data-g]`)){let r=cu[e.dataset.g];if(!r)return;t=`<div class="tip-k">Regra</div><div class="tip-t">${r.term}</div><p>${r.def}</p><div class="tip-h">Clique duas vezes para abrir a regra</div>`,n=`gl`}else if(e.matches(`a.pw`)){let r=Au[e.dataset.pw];if(!r)return;t=Ad(r),n=`pw`}else return;let r=e.getBoundingClientRect();Z.tip={html:t,kind:n,x:r.left+r.width/2,y:r.bottom,top:r.top}}function c(e){let t=e.target.closest?.(`.cond, .gl, .ti[data-g], a.pw`);clearTimeout(o),o=t?setTimeout(()=>s(t),180):setTimeout(()=>{Z.tip=null},120)}function l(e){let t=e.target.closest?.(`a.pw`);t&&s(t)}return sr(()=>{window.addEventListener(`keydown`,i),document.addEventListener(`click`,a),document.addEventListener(`mouseover`,c),document.addEventListener(`focusin`,l),window.addEventListener(`scroll`,()=>{Z.tip&&=null},{passive:!0})}),ur(()=>{window.removeEventListener(`keydown`,i),document.removeEventListener(`click`,a),document.removeEventListener(`mouseover`,c),document.removeEventListener(`focusin`,l)}),(e,t)=>{let n=_r(`RouterView`);return V(),H(`div`,{class:A([`app`,{"nav-open":F(Z).nav.open}])},[G(Ml),W(`div`,Fp,[G(ad),W(`main`,Ip,[G(n,null,{default:I(({Component:e})=>[(V(),U(yr(e),{key:r.value,class:`page-in`}))]),_:1})])]),F(Z).nav.open?(V(),H(`div`,{key:0,class:`scrim`,onClick:t[0]||=e=>F(Z).nav.open=!1})):q(``,!0),G(Sd),G(Jd),G(Mp),G(Pp)],2)}}},Rp={class:`img-grid`},zp=[`src`,`alt`],Bp={key:1,class:`noimg`},Vp={class:`tag`},Hp={class:`lbl`},Up={class:`card-ic`},Wp={__name:`ArchetypeGrid`,setup(e){let t=[`amarelo`,`vermelho`,`azul`,`violeta`,`verde`,`ciano`];return(e,n)=>{let r=_r(`RouterLink`);return V(),H(`div`,Rp,[(V(!0),H(B,null,z(F(Xu),(e,n)=>(V(),U(r,{key:e.id,to:`/arquetipos/`+e.id,class:A([`img-card`,`ac-`+t[n%t.length]])},{default:I(()=>[e.img?(V(),H(`img`,{key:0,src:`./img/`+e.img,alt:e.name,loading:`lazy`},null,8,zp)):(V(),H(`span`,Bp,[G(Q,{name:F(vu)(e.name),size:96},null,8,[`name`])])),W(`span`,Vp,j(e.ficha[`Matriz de Vitalidade`])+` · `+j(e.specs.length)+` Especializações`,1),W(`span`,Hp,[W(`span`,Up,[G(Q,{name:F(vu)(e.name),size:22},null,8,[`name`])]),W(`b`,null,j(e.name),1),W(`span`,null,j(e.ficha[`Parâmetro principal`]),1)])]),_:2},1032,[`to`,`class`]))),128))])}}},Gp={class:`home`},Kp={class:`hero`},qp={class:`hero-bg`},Jp=[`src`],Yp={class:`hero-inner`},Xp={class:`hero-actions`},Zp={class:`meta`},Qp={class:`chap-grid`},$p={class:`n`},em={class:`ic`},tm={class:`tools-grid`},nm={__name:`HomeView`,setup(e){let t=[[Gu.length,`capítulos`],[Zu.reduce((e,t)=>e+t.lineages.length,0),`linhagens`],[Xu.length,`arquétipos`],[Xu.reduce((e,t)=>e+t.specs.length,0),`especializações`],[Kl.length,`poderes`]];return(e,n)=>{let r=_r(`RouterLink`);return V(),H(`div`,Gp,[W(`section`,Kp,[W(`div`,qp,[(V(!0),H(B,null,z(F(Zu),e=>(V(),H(`img`,{key:e.id,src:`./img/`+e.img,alt:``},null,8,Jp))),128))]),n[13]||=W(`img`,{class:`hero-logo`,src:`./img/logo-vanguard.png`,alt:`Logo VANGUARD`,width:`320`,height:`320`},null,-1),W(`div`,Yp,[n[10]||=W(`span`,{class:`kicker`},`RPG de super-heróis · Livro Básico`,-1),n[11]||=W(`h1`,null,[K(`PROJETO:`),W(`br`),W(`span`,null,`VANGUARDA`)],-1),n[12]||=W(`p`,null,`Equipes de heróis enfrentam ameaças grandes demais para pessoas comuns. Este é o livro interativo: regras navegáveis, dados roláveis, fichas de poder filtráveis e progressão por nível.`,-1),W(`div`,Xp,[G(r,{class:`btn`,to:`/regras`},{default:I(()=>[G(F($c),{size:18}),n[3]||=K(` Começar a ler`,-1)]),_:1}),G(r,{class:`btn ghost`,to:`/criacao`},{default:I(()=>[n[4]||=K(`Criar um herói `,-1),G(F(Qc),{size:16})]),_:1}),W(`button`,{class:`btn ghost`,onClick:n[0]||=e=>F(Z).search.open=!0},[G(F(fl),{size:16}),n[5]||=K(` Buscar`,-1)])]),F(Z).lastRead?(V(),U(r,{key:0,class:`continue`,to:F(Z).lastRead.path},{default:I(()=>[n[6]||=K(`Continuar de onde parou: `,-1),W(`b`,null,j(F(Z).lastRead.title),1),n[7]||=K(),G(F(Qc),{size:16})]),_:1},8,[`to`])):q(``,!0),W(`div`,Zp,[K(j(t.map(([e,t])=>e+` `+t).join(` · `)),1),n[8]||=W(`br`,null,null,-1),n[9]||=K(`Bruno Azevedo · Rascunho de playtest · Outubro de 2026`,-1)])])]),n[19]||=W(`h2`,{class:`sec-title`},`Capítulos`,-1),W(`div`,Qp,[(V(!0),H(B,null,z(F(Gu),e=>(V(),U(r,{key:e.id,to:`/`+e.id,class:A([`chap-card`,`ac-`+e.accent])},{default:I(()=>[W(`span`,$p,j(e.num),1),W(`span`,em,[G(Q,{name:F(_u)(e.num),size:26},null,8,[`name`])]),W(`h3`,null,j(e.title),1),W(`p`,null,j(e.subtitle),1)]),_:2},1032,[`to`,`class`]))),128))]),n[20]||=W(`h2`,{class:`sec-title`},`Ferramentas de mesa`,-1),W(`div`,tm,[G(r,{class:`tool`,to:`/ficha`},{default:I(()=>[G(Q,{name:`card-account-details-star`,size:26}),n[14]||=W(`span`,null,[W(`b`,null,`Ficha de personagem`),W(`span`,null,`Crie e acompanhe heróis com cálculo automático.`)],-1)]),_:1}),W(`button`,{class:`tool`,onClick:n[1]||=e=>F(Z).dice.open=!0},[G(F(rl),{size:26}),n[15]||=W(`span`,null,[W(`b`,null,`Bandeja de dados`),W(`span`,null,`Expressões, Vantagem e Desvantagem, histórico. Atalho: D.`)],-1)]),G(r,{class:`tool`,to:`/poderes`},{default:I(()=>[G(F(vl),{size:26}),W(`span`,null,[n[16]||=W(`b`,null,`Navegador de poderes`,-1),W(`span`,null,j(F(Kl).length)+` fichas com filtros por nível, categoria e marcadores.`,1)])]),_:1}),G(r,{class:`tool`,to:`/poderes/lista?fav=1`},{default:I(()=>[G(F(pl),{size:26}),W(`span`,null,[n[17]||=W(`b`,null,`Meus poderes`,-1),W(`span`,null,`Monte a lista do seu herói com a estrela (`+j(F(Z).favorites.length)+`).`,1)])]),_:1}),W(`button`,{class:`tool`,onClick:n[2]||=e=>F(Z).search.open=!0},[G(F(fl),{size:26}),n[18]||=W(`span`,null,[W(`b`,null,`Busca no livro`),W(`span`,null,`Ctrl + K em qualquer página.`)],-1)])]),n[21]||=W(`h2`,{class:`sec-title`},`Arquétipos`,-1),G(Wp)])}}};function rm(e,t={seen:new Set},n={lvl:null}){let r=[];for(let i of e)if(i.t===`h`){i.level<=2?(t.seen=new Set,n.lvl=null):n.lvl=i.lvl;let e=i.level>=2?gu(i.text):null;r.push({...i,icon:e,iconHtml:e?du(e,{cls:`mi h-ic`}):``,html:Fu(i.text,{plain:!0}),chHtml:i.ch?Fu(`{ch ${i.ch}}`,{plain:!0}):``,lvlEff:i.lvl})}else if(i.t===`p`)i.lvl&&(n.lvl=i.lvl),r.push({...i,html:Fu(i.md,t),lvlEff:i.lvl||n.lvl});else if(i.t===`ul`||i.t===`ol`)r.push({...i,lvlEff:n.lvl,items:i.items.map(e=>({html:Fu(e.md,t),lvl:im(e.md),sub:e.sub?.map(e=>({html:Fu(e.md,t)}))}))});else if(i.t===`table`)r.push({...i,lvlEff:n.lvl,headHtml:i.head.map(e=>Fu(e,{plain:!0})),rowsHtml:i.rows.map(e=>e.map(e=>Fu(e,{...t,seen:null,noPowers:i.kind===`progressao`})))});else if(i.t===`box`){let e={lvl:i.name===`tabs`||i.name===`cards`?null:n.lvl};r.push({...i,lvlEff:n.lvl,children:rm(i.children,t,e)})}else r.push({...i,lvlEff:n.lvl});return r}function im(e){let t=e.match(/^\*\*[^*]*\((\d+)º/);return t?Number(t[1]):null}function am(e){let t=[],n=null;for(let r of e)r.t===`h`&&r.level===3?(n={head:r,blocks:[]},t.push(n)):n?n.blocks.push(r):(n={head:null,blocks:[r]},t.push(n));return t}var om=e=>String(e).replace(/<[^>]+>/g,``),sm={class:`tbl-wrap`},cm={key:0,class:`tbl-tools`},lm={class:`pw-count`},um={key:0,class:`pw-count`},dm={style:{color:`var(--ink)`}},fm={key:2,class:`pw-count`},pm={class:`tbl-scroll`},mm=[`innerHTML`,`onClick`,`aria-sort`],hm={key:0,"aria-label":`Adicionar`},gm=[`onClick`],_m=[`innerHTML`],vm={key:0,style:{width:`40px`}},ym=[`onClick`,`title`],bm={key:0,class:`tbl-empty`},xm={__name:`BlockTable`,props:{node:{type:Object,required:!0}},setup(e){let t=e,n=J(()=>t.node.kind),r=Pn(`heroLevel`,null),i=P(``),a=P(-1),o=P(1),s=P(-1),c=P(0),l=J(()=>t.node.rowsHtml.map(e=>e.map(om))),u=J(()=>t.node.head.findIndex(e=>/preço/i.test(e))),d=J(()=>t.node.head.findIndex(e=>/^nível$/i.test(om(e))));function f(e){let t=e.replace(/\./g,``).replace(`,`,`.`).match(/[+−-]?\d+(\.\d+)?/);return t?Number(t[0].replace(`−`,`-`)):NaN}let p=J(()=>{let e=t.node.rowsHtml.map((e,t)=>t),n=i.value.trim().toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``);if(n&&(e=e.filter(e=>l.value[e].join(` `).toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).includes(n))),a.value>=0){let t=a.value;e=[...e].sort((e,n)=>{let r=l.value[e][t],i=l.value[n][t],a=f(r),s=f(i);return(!isNaN(a)&&!isNaN(s)?a-s:r.localeCompare(i,`pt`))*o.value})}return e}),m=J(()=>n.value===`loja`||n.value===`filtro`),h=J(()=>(n.value===`filtro`||n.value===`loja`)&&t.node.rows.length>6);function g(e){m.value&&(a.value===e?o.value=-o.value:(a.value=e,o.value=1))}let _=J(()=>{if(n.value!==`rolavel`)return 0;let e=0;for(let t of l.value)for(let n of t[0].match(/\d+/g)||[])e=Math.max(e,Number(n));return e});function v(){let e=yl(_.value),t=l.value.findIndex(t=>{let n=(t[0].match(/\d+/g)||[]).map(Number);return n.length===2?e>=n[0]&&e<=n[1]:n[0]===e});s.value=t,y.value=e}let y=P(null);function b(e){let t={};if(n.value===`rolavel`&&e===s.value&&(t[`hl-strong`]=!0),n.value===`acumulativa`&&(t.clickable=!0,e<c.value&&(t.hl=!0),e===c.value-1&&(t[`hl-strong`]=!0)),n.value===`linhagens`&&(t.clickable=!0),n.value===`progressao`&&r?.value&&d.value>=0){let n=f(l.value[e][d.value]);n===r.value?t[`hl-strong`]=!0:n>r.value&&(t.dim=!0)}return t}function x(e){if(n.value===`acumulativa`&&(c.value=c.value===e+1?0:e+1),n.value===`linhagens`){let t=ql(l.value[e][0]),n=document.getElementById(t);if(n){n.scrollIntoView({behavior:`smooth`,block:`start`});let e=n.closest(`.card`);e?.classList.remove(`flash`),e?.offsetWidth,e?.classList.add(`flash`)}}}function S(e){let t=l.value[e][0],n=f(l.value[e][u.value]);isNaN(n)||Z.cart.push({name:t,price:n})}return(t,r)=>(V(),H(`div`,sm,[h.value||n.value===`rolavel`||n.value===`acumulativa`?(V(),H(`div`,cm,[h.value?(V(),H(B,{key:0},[G(F(fl),{size:16}),L(W(`input`,{type:`search`,"onUpdate:modelValue":r[0]||=e=>i.value=e,placeholder:`Filtrar tabela…`,"aria-label":`Filtrar tabela`},null,512),[[Y,i.value]]),W(`span`,lm,j(p.value.length)+` / `+j(e.node.rows.length),1)],64)):q(``,!0),n.value===`rolavel`?(V(),H(B,{key:1},[W(`button`,{class:`btn sm`,onClick:v},[G(F(rl),{size:15}),K(` Rolar 1d`+j(_.value),1)]),y.value==null?q(``,!0):(V(),H(`span`,um,[r[1]||=K(`Resultado: `,-1),W(`b`,dm,j(y.value),1)]))],64)):q(``,!0),n.value===`acumulativa`?(V(),H(`span`,fm,`Clique num nível para ver os efeitos acumulados.`)):q(``,!0)])):q(``,!0),W(`div`,pm,[W(`table`,null,[W(`thead`,null,[W(`tr`,null,[(V(!0),H(B,null,z(e.node.headHtml,(e,t)=>(V(),H(`th`,{key:t,innerHTML:e,class:A({sortable:m.value}),onClick:e=>g(t),"aria-sort":a.value===t?o.value>0?`ascending`:`descending`:void 0},null,10,mm))),128)),n.value===`loja`&&u.value>=0?(V(),H(`th`,hm)):q(``,!0)])]),W(`tbody`,null,[(V(!0),H(B,null,z(p.value,t=>(V(),H(`tr`,{key:t,class:A(b(t)),onClick:e=>x(t)},[(V(!0),H(B,null,z(e.node.rowsHtml[t],(e,t)=>(V(),H(`td`,{key:t,innerHTML:e},null,8,_m))),128)),n.value===`loja`&&u.value>=0?(V(),H(`td`,vm,[W(`button`,{class:`add-btn`,onClick:Do(e=>S(t),[`stop`]),title:`Adicionar ao carrinho: `+l.value[t][0]},`+`,8,ym)])):q(``,!0)],10,gm))),128))])]),p.value.length?q(``,!0):(V(),H(`div`,bm,`Nenhuma linha corresponde ao filtro.`))])]))}},Sm={class:`tabs`},Cm={class:`tab-list`,role:`tablist`},wm=[`aria-selected`,`onClick`],Tm=[`innerHTML`],Em=[`id`],Dm={key:0,class:`spec-hero`},Om=[`src`,`alt`],km=[`id`],Am=[`innerHTML`],jm=[`id`],Mm=[`innerHTML`],Nm={__name:`TabsBox`,props:{node:{type:Object,required:!0}},setup(e){let t=e,n=Vc(),r=J(()=>am(t.node.children).filter(e=>e.head)),i=P(0);function a(){let e=n.params.b||n.params.a,t=r.value.findIndex(t=>t.head.id===e);t>=0&&(i.value=t,bn(()=>document.getElementById(`tab-`+r.value[t].head.id)?.scrollIntoView({block:`start`})))}R(()=>n.fullPath,a,{immediate:!0});let o=e=>e.head.attrs?.img?`./img/`+e.head.attrs.img:null,s=(e,t=``)=>e.head.icon?`<span class="spec-badge ${t}">${du(e.head.icon)}</span>`:``;return(e,t)=>(V(),H(`div`,Sm,[W(`div`,Cm,[(V(!0),H(B,null,z(r.value,(e,t)=>(V(),H(`button`,{key:e.head.id,class:A([`tab-btn`,{on:t===i.value}]),role:`tab`,"aria-selected":t===i.value,onClick:e=>i.value=t},[W(`span`,{innerHTML:s(e)},null,8,Tm),K(j(e.head.text),1)],10,wm))),128))]),(V(!0),H(B,null,z(r.value,(e,t)=>L((V(),H(`div`,{key:e.head.id,class:`tab-panel`,role:`tabpanel`,id:`tab-`+e.head.id},[o(e)?(V(),H(`div`,Dm,[W(`img`,{src:o(e),alt:e.head.text,loading:`lazy`},null,8,Om),W(`h3`,{id:e.head.id},[W(`span`,{innerHTML:s(e,`lg`)},null,8,Am),K(j(e.head.text),1)],8,km)])):(V(),H(`h3`,{key:1,class:`spec-title`,id:e.head.id},[W(`span`,{innerHTML:s(e,`lg`)},null,8,Mm),K(j(e.head.text),1)],8,jm)),G(O_,{nodes:e.blocks},null,8,[`nodes`])],8,Em)),[[Ia,t===i.value]])),128))]))}},Pm={key:0,class:`cards-tools`},Fm={class:`pw-count`},Im={class:`cards`},Lm=[`id`],Rm=[`innerHTML`],zm=[`innerHTML`],Bm={__name:`CardsBox`,props:{node:{type:Object,required:!0}},setup(e){let t=e,n=J(()=>am(t.node.children).filter(e=>e.head)),r=P(``),i=e=>e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``),a=J(()=>n.value.map(e=>i(e.head.text+` `+e.blocks.map(e=>om(e.html||(e.items||[]).map(e=>e.html).join(` `)||(e.rowsHtml||[]).flat().join(` `))).join(` `)))),o=J(()=>n.value.map((e,t)=>!r.value||a.value[t].includes(i(r.value)))),s=J(()=>o.value.filter(Boolean).length);return(e,t)=>(V(),H(`div`,null,[n.value.length>6?(V(),H(`div`,Pm,[G(F(fl),{size:16}),L(W(`input`,{type:`search`,"onUpdate:modelValue":t[0]||=e=>r.value=e,placeholder:`Buscar por nome ou traço (ex.: voo, veneno, Visão Noturna)…`,"aria-label":`Filtrar`},null,512),[[Y,r.value]]),W(`span`,Fm,j(s.value)+` de `+j(n.value.length),1)])):q(``,!0),W(`div`,Im,[(V(!0),H(B,null,z(n.value,(e,t)=>L((V(),H(`article`,{key:e.head.id,class:`card`},[W(`h3`,{id:e.head.id},[e.head.iconHtml?(V(),H(`span`,{key:0,class:`h-icw`,innerHTML:e.head.iconHtml},null,8,Rm)):q(``,!0),W(`span`,{innerHTML:e.head.html},null,8,zm)],8,Lm),G(O_,{nodes:e.blocks},null,8,[`nodes`])])),[[Ia,o.value[t]]])),128))])]))}},Vm={class:`w-note`,style:{"margin-bottom":`0`}},Hm={class:`passos`},Um=[`onClick`,`innerHTML`],Wm={__name:`StepsBox`,props:{node:{type:Object,required:!0}},setup(e){let t=e,n=J(()=>t.node.children.flatMap(e=>e.items||[])),r=[];try{r=JSON.parse(localStorage.getItem(`vg.passos`)||`[]`)}catch{r=[]}let i=P(r);R(i,e=>{try{localStorage.setItem(`vg.passos`,JSON.stringify(e))}catch{}},{deep:!0});function a(e){let t=i.value.indexOf(e);t>=0?i.value.splice(t,1):i.value.push(e)}return(e,t)=>(V(),H(`div`,null,[W(`p`,Vm,[K(`Marque os passos conforme cria o seu herói (`+j(i.value.length)+`/`+j(n.value.length)+`). `,1),i.value.length?(V(),H(`button`,{key:0,class:`btn sm ghost`,style:{"margin-left":`8px`},onClick:t[0]||=e=>i.value=[]},`Recomeçar`)):q(``,!0)]),W(`ol`,Hm,[(V(!0),H(B,null,z(n.value,(e,t)=>(V(),H(`li`,{key:t,class:A({done:i.value.includes(t)}),onClick:e=>a(t),innerHTML:e.html},null,10,Um))),128))])]))}},Gm={class:`w-row`},Km={class:`w-note`},qm={key:0,class:`d20s`},Jm={__name:`WVantagem`,setup(e){let t=P(1),n=P(0),r=P([]),i=J(()=>(t.value||0)-(n.value||0)),a=J(()=>{if(!r.value.length)return-1;let e=i.value>0?Math.max(...r.value):i.value<0?Math.min(...r.value):r.value[0];return r.value.indexOf(e)});function o(){r.value=Array.from({length:Math.abs(i.value)+1},()=>yl(20))}return(e,s)=>(V(),H(B,null,[W(`div`,Gm,[W(`label`,null,[s[2]||=K(`Vantagens `,-1),L(W(`input`,{type:`number`,min:`0`,max:`5`,"onUpdate:modelValue":s[0]||=e=>t.value=e},null,512),[[Y,t.value,void 0,{number:!0}]])]),W(`label`,null,[s[3]||=K(`Desvantagens `,-1),L(W(`input`,{type:`number`,min:`0`,max:`5`,"onUpdate:modelValue":s[1]||=e=>n.value=e},null,512),[[Y,n.value,void 0,{number:!0}]])]),W(`button`,{class:`btn sm`,onClick:o},`Rolar`)]),W(`p`,Km,[s[4]||=K(`Resultado líquido: `,-1),W(`b`,null,j(i.value>0?i.value+` Vantagem(ns)`:i.value<0?-i.value+` Desvantagem(ns)`:`rolagem normal`),1),K(` → rola `+j(Math.abs(i.value)+1)+`d20 e usa o `+j(i.value>0?`maior`:i.value<0?`menor`:`resultado`)+`.`,1)]),r.value.length?(V(),H(`div`,qm,[(V(!0),H(B,null,z(r.value,(e,t)=>(V(),H(`span`,{key:t,class:A([`d20`,{kept:t===a.value}])},j(e),3))),128))])):q(``,!0)],64))}},Ym={class:`w-row`},Xm={class:`w-out`},Zm={class:`pips`},Qm=[`onClick`,`aria-label`],$m={class:`w-row`,style:{"margin-top":`10px`}},eh=[`disabled`],th={__name:`WCargas`,setup(e){let t=P(1),n=J(()=>5+Math.floor((t.value||1)/2)),r=P(0);R(n,e=>{r.value>e&&(r.value=e)});function i(e){let t=n.value-r.value;r.value=e<=t?n.value-e+1:n.value-e}return(e,a)=>(V(),H(B,null,[W(`div`,Ym,[W(`label`,null,[a[4]||=K(`Nível `,-1),L(W(`input`,{type:`number`,min:`1`,max:`20`,"onUpdate:modelValue":a[0]||=e=>t.value=e},null,512),[[Y,t.value,void 0,{number:!0}]])]),W(`span`,Xm,[K(j(n.value-r.value),1),W(`small`,null,`de `+j(n.value)+` disponíveis`,1)])]),W(`div`,Zm,[(V(!0),H(B,null,z(n.value,e=>(V(),H(`button`,{key:e,class:A([`pip`,{off:e>n.value-r.value}]),onClick:t=>i(e),"aria-label":`Carga `+e},[...a[5]||=[W(`svg`,{viewBox:`0 0 24 24`},[W(`path`,{d:`M13 2 4 14h7l-1 8 9-12h-7z`})],-1)]],10,Qm))),128))]),W(`div`,$m,[W(`button`,{class:`btn sm`,disabled:r.value>=n.value,onClick:a[1]||=e=>r.value++},`Gastar 1`,8,eh),W(`button`,{class:`btn sm ghost`,onClick:a[2]||=e=>r.value=Math.max(0,r.value-1)},`Concessão do Mestre (+1)`),W(`button`,{class:`btn sm ghost`,onClick:a[3]||=e=>r.value=0},`Recuperação`)])],64))}},nh={class:`ficha`,style:{margin:`0`,"box-shadow":`none`}},rh={class:`w-row`,style:{margin:`4px 0 0`}},ih=[`onUpdate:modelValue`,`aria-label`],ah={style:{font:`36px/1 var(--font-display)`}},oh={__name:`WModificador`,setup(e){let t=[`Potência`,`Reflexos`,`Resistência`,`Lógica`,`Espírito`,`Magnetismo`],n=P([10,10,10,10,10,10]);return(e,r)=>(V(),H(B,null,[W(`div`,nh,[(V(),H(B,null,z(t,(e,t)=>W(`div`,{key:e},[W(`span`,null,j(e),1),W(`div`,rh,[L(W(`input`,{type:`number`,min:`1`,max:`30`,"onUpdate:modelValue":e=>n.value[t]=e,"aria-label":e},null,8,ih),[[Y,n.value[t],void 0,{number:!0}]]),W(`b`,ah,j(F(Sl)(F(Cl)(n.value[t]||0))),1)])])),64))]),r[0]||=W(`p`,{class:`w-note`},`Modificador = (valor − 10) ÷ 2, arredondado para baixo.`,-1)],64))}},sh={class:`w-row`},ch={class:`w-row`,style:{gap:`30px`}},lh={class:`w-out`},uh={class:`w-out`},dh={__name:`WSalto`,setup(e){let t=P(12),n=P(!0),r=e=>e.toFixed(2).replace(/\.?0+$/,``).replace(`.`,`,`),i=J(()=>.3*(t.value||0)*(n.value?1:.5)),a=J(()=>Math.max(0,.3*(3+Cl(t.value||0)))*(n.value?1:.5));return(e,o)=>(V(),H(B,null,[W(`div`,sh,[W(`label`,null,[o[2]||=K(`Valor de Potência `,-1),L(W(`input`,{type:`number`,min:`1`,max:`30`,"onUpdate:modelValue":o[0]||=e=>t.value=e},null,512),[[Y,t.value,void 0,{number:!0}]])]),W(`label`,null,[L(W(`input`,{type:`checkbox`,"onUpdate:modelValue":o[1]||=e=>n.value=e},null,512),[[vo,n.value]]),o[3]||=K(` Com 3 m de corrida`,-1)])]),W(`div`,ch,[W(`span`,lh,[K(j(r(i.value))+` m`,1),o[4]||=W(`small`,null,`distância`,-1)]),W(`span`,uh,[K(j(r(a.value))+` m`,1),o[5]||=W(`small`,null,`altura`,-1)])])],64))}},fh={key:0,class:`init-list`},ph={style:{"margin-left":`auto`,color:`var(--ink-3)`,"font-size":`13px`}},mh=[`onClick`],hh={key:1,class:`w-row`},gh={class:`w-note`,style:{margin:`0`}},_h={__name:`WIniciativa`,setup(e){let t=P([]),n=P(``),r=P(0),i=P(0),a=P(1),o=J(()=>[...t.value].sort((e,t)=>t.v-e.v));function s(){n.value.trim()&&(t.value.push({n:n.value.trim(),m:Number(r.value)||0,v:yl(20)+(Number(r.value)||0)}),n.value=``,r.value=0)}function c(e){t.value.splice(t.value.indexOf(e),1),i.value>=t.value.length&&(i.value=0)}function l(){i.value++,i.value>=o.value.length&&(i.value=0,a.value++)}function u(){t.value=[],i.value=0,a.value=1}return(e,t)=>(V(),H(B,null,[W(`form`,{class:`w-row`,onSubmit:Do(s,[`prevent`])},[L(W(`input`,{type:`text`,"onUpdate:modelValue":t[0]||=e=>n.value=e,placeholder:`Herói ou grupo de inimigos`,"aria-label":`Nome`},null,512),[[Y,n.value]]),W(`label`,null,[t[2]||=K(`Reflexos `,-1),L(W(`input`,{type:`number`,"onUpdate:modelValue":t[1]||=e=>r.value=e},null,512),[[Y,r.value,void 0,{number:!0}]])]),t[3]||=W(`button`,{class:`btn sm`,type:`submit`},`Rolar e adicionar`,-1)],32),o.value.length?(V(),H(`ul`,fh,[(V(!0),H(B,null,z(o.value,(e,t)=>(V(),H(`li`,{key:e.n+t,class:A({cur:t===i.value})},[W(`b`,null,j(e.v),1),K(j(e.n)+` `,1),W(`span`,ph,`mod `+j(e.m>=0?`+`:``)+j(e.m),1),W(`button`,{class:`btn sm ghost`,type:`button`,onClick:t=>c(e),"aria-label":`Remover`},`×`,8,mh)],2))),128))])):q(``,!0),o.value.length?(V(),H(`div`,hh,[W(`button`,{class:`btn sm`,onClick:l},`Próximo turno`),W(`span`,gh,`Rodada `+j(a.value)+` · cerca de `+j((a.value-1)*6)+` s decorridos`,1),W(`button`,{class:`btn sm ghost`,onClick:u},`Encerrar combate`)])):q(``,!0)],64))}},vh={class:`w-row`},yh={key:0,class:`w-note`,style:{"font-size":`15px`}},bh={__name:`WAtaque`,setup(e){let t=P(5),n=P(15),r=P(`1d8+3`),i=P(null);function a(){let e=Number(t.value)||0,a=Dl(`1d20`+(e>=0?`+`:``)+e,{label:`Ataque`});if(!a)return;let o=a.natural===20,s=a.natural===1,c=o||!s&&a.total>=n.value,l=null;if(c){let e=r.value.replace(/\s/g,``).match(/^(\d*)d(\d+)(.*)$/);l=Dl(o&&e?`${2*(Number(e[1])||1)}d${e[2]}${e[3]}`:r.value,{label:o?`Dano crítico`:`Dano`,adv:0})}i.value={atk:a.total,nat:a.natural,hit:c,crit:o,miss:s,d:l?.total}}return(e,o)=>(V(),H(B,null,[W(`div`,vh,[W(`label`,null,[o[3]||=K(`Bônus de ataque `,-1),L(W(`input`,{type:`number`,"onUpdate:modelValue":o[0]||=e=>t.value=e},null,512),[[Y,t.value,void 0,{number:!0}]])]),W(`label`,null,[o[4]||=K(`CA do alvo `,-1),L(W(`input`,{type:`number`,"onUpdate:modelValue":o[1]||=e=>n.value=e},null,512),[[Y,n.value,void 0,{number:!0}]])]),W(`label`,null,[o[5]||=K(`Dano `,-1),L(W(`input`,{type:`text`,"onUpdate:modelValue":o[2]||=e=>r.value=e,style:{width:`110px`}},null,512),[[Y,r.value]])]),W(`button`,{class:`btn sm`,onClick:a},`Atacar`)]),i.value?(V(),H(`p`,yh,[o[7]||=K(` d20 natural `,-1),W(`b`,null,j(i.value.nat),1),o[8]||=K(` → total `,-1),W(`b`,null,j(i.value.atk),1),K(` contra CA `+j(n.value)+`: `,1),W(`b`,{style:k({color:i.value.hit?`var(--green)`:`var(--red)`})},j(i.value.crit?`ACERTO CRÍTICO`:i.value.miss?`ERRO AUTOMÁTICO`:i.value.hit?`ACERTOU`:`ERROU`),5),i.value.hit?(V(),H(B,{key:0},[o[6]||=K(` · dano `,-1),W(`b`,null,j(i.value.d),1),K(j(i.value.crit?` (dados dobrados)`:``),1)],64)):q(``,!0)])):q(``,!0)],64))}},xh={class:`stab`},Sh={class:`w-row`,style:{"margin-top":`10px`}},Ch=[`disabled`],wh={key:0,class:`w-note`,style:{margin:`0`}},Th={__name:`WEstabilizacao`,setup(e){let t=P(0),n=P(0),r=P([]),i=P(!1),a=J(()=>t.value>=3||n.value>=3||i.value),o=J(()=>i.value?`Recuperou 1 PV!`:t.value>=3?`Estável`:n.value>=3?`Morto`:`Morrendo`),s=P(null);function c(){if(a.value)return;let e=yl(20);s.value=e,e===20?i.value=!0:e===1?n.value=Math.min(3,n.value+2):e>=10?t.value++:n.value++,r.value.unshift(e)}function l(){s.value!=null&&s.value<10&&s.value!==1&&n.value>0&&!a.value&&(n.value--,t.value++,s.value=10)}function u(){t.value=0,n.value=0,r.value=[],i.value=!1,s.value=null}return(e,i)=>(V(),H(B,null,[W(`div`,xh,[W(`div`,null,[i[0]||=K(`Sucessos `,-1),(V(),H(B,null,z(3,e=>W(`i`,{key:`s`+e,class:A({s:e<=t.value})},null,2)),64))]),W(`div`,null,[i[1]||=K(`Falhas `,-1),(V(),H(B,null,z(3,e=>W(`i`,{key:`f`+e,class:A({f:e<=n.value})},null,2)),64))]),W(`div`,null,[W(`b`,{style:k({color:o.value===`Morto`?`var(--red)`:o.value===`Morrendo`?`var(--ink)`:`var(--green)`})},j(o.value),5)])]),W(`div`,Sh,[W(`button`,{class:`btn sm`,onClick:c,disabled:a.value},`Rolar d20`,8,Ch),W(`button`,{class:`btn sm ghost`,onClick:l,title:`Agarrar-se à vida: ao falhar, transforma a falha em sucesso`},`Gastar 1 Carga Heroica`),W(`button`,{class:`btn sm ghost`,onClick:u},`Reiniciar`),r.value.length?(V(),H(`span`,wh,`Rolagens: `+j(r.value.join(`, `)),1)):q(``,!0)])],64))}},Eh={class:`w-row`},Dh={class:`w-out`},Oh={__name:`WConcentracao`,setup(e){let t=P(12),n=P(2),r=J(()=>Math.max(10,Math.floor((t.value||0)/2))),i=P(null);function a(){let e=Number(n.value)||0,t=Dl(`1d20`+(e>=0?`+`:``)+e,{label:`Concentração`});t&&(i.value=t.total>=r.value)}return(e,o)=>(V(),H(`div`,Eh,[W(`label`,null,[o[2]||=K(`Dano sofrido `,-1),L(W(`input`,{type:`number`,min:`0`,"onUpdate:modelValue":o[0]||=e=>t.value=e},null,512),[[Y,t.value,void 0,{number:!0}]])]),W(`label`,null,[o[3]||=K(`Bônus em Resistência `,-1),L(W(`input`,{type:`number`,"onUpdate:modelValue":o[1]||=e=>n.value=e},null,512),[[Y,n.value,void 0,{number:!0}]])]),W(`span`,Dh,[K(`CD `+j(r.value),1),o[4]||=W(`small`,null,`Integridade (Resistência)`,-1)]),W(`button`,{class:`btn sm`,onClick:a},`Testar`),i.value===null?q(``,!0):(V(),H(`b`,{key:0,style:k({color:i.value?`var(--green)`:`var(--red)`})},j(i.value?`Manteve a Concentração`:`O poder termina`),5))]))}},kh={class:`w-row`,style:{gap:`28px`,"align-items":`center`}},Ah={class:`wheel`,"aria-hidden":`true`},jh={style:{flex:`1`,"min-width":`220px`}},Mh={class:`w-row`},Nh={class:`w-row`},Ph={style:{flex:`1`}},Fh={class:`w-row`},Ih={__name:`WAssinatura`,setup(e){let t={Tecnológica:50,Parahumana:220,Mutante:0,Visitante:130},n=P(`Parahumana`),r=P(0),i=J(()=>((t[n.value]+r.value)%360+360)%360),a=J(()=>`hsl(${i.value} 90% 55%)`),o=J(()=>{let e=(i.value-90)*Math.PI/180;return{left:77+60*Math.cos(e)+`px`,top:77+60*Math.sin(e)+`px`,background:a.value}});return(e,i)=>(V(),H(`div`,kh,[W(`div`,Ah,[W(`span`,{class:`dot`,style:k(o.value)},null,4)]),W(`div`,jh,[W(`div`,Mh,[W(`label`,null,[i[3]||=K(`Natureza `,-1),L(W(`select`,{"onUpdate:modelValue":i[0]||=e=>n.value=e,onChange:i[1]||=e=>r.value=0},[(V(),H(B,null,z(t,(e,t)=>W(`option`,{key:t},j(t),1)),64))],544),[[bo,n.value]])])]),W(`div`,Nh,[W(`label`,Ph,[i[4]||=K(`Giro da matiz `,-1),L(W(`input`,{type:`range`,min:`-180`,max:`180`,"onUpdate:modelValue":i[2]||=e=>r.value=e,style:{flex:`1`}},null,512),[[Y,r.value,void 0,{number:!0}]])])]),W(`div`,Fh,[W(`span`,{class:`swatch`,style:k({background:a.value,color:a.value})},null,4),i[5]||=W(`span`,{class:`w-note`},`A cada novo Nível de Poder desbloqueado, o jogador pode girar a matiz da assinatura no círculo de cores.`,-1)])])]))}},Lh={class:`w-row`},Rh=[`value`],zh={class:`w-row`},Bh={class:`w-note`,style:{margin:`0`}},Vh={key:0,class:`history`},Hh={__name:`WSobrecarga`,setup(e){let t=[``,`Ζ`,`Ε`,`Ι`,`Δ`,`Γ`,`Β`,`Α`,`Λ`,`Ω`],n=P(2),r=P(1),i=P([]),a=P(0),o=P([]);function s(){let e=r.value;if(i.value.includes(e)){o.value.unshift(`NP ${e}: já liberado na cena, sem teste.`);return}let t=Number(n.value)||0,s=yl(20),c=s+t,l=11+e;c>=l?(i.value.push(e),o.value.unshift(`NP ${e}: ${s} ${Sl(t)} = ${c} contra CD ${l} → sucesso, NP liberado.`)):(a.value++,o.value.unshift(`NP ${e}: ${s} ${Sl(t)} = ${c} contra CD ${l} → falha, +1 Exaustão Η (o poder é ativado mesmo assim).`))}function c(){i.value=[],o.value.unshift(`— Nova cena: os Níveis de Poder voltam a ficar bloqueados —`)}return(e,l)=>(V(),H(B,null,[W(`div`,Lh,[W(`label`,null,[l[3]||=K(`Bônus em Integridade (Resistência) `,-1),L(W(`input`,{type:`number`,"onUpdate:modelValue":l[0]||=e=>n.value=e},null,512),[[Y,n.value,void 0,{number:!0}]])]),W(`label`,null,[l[4]||=K(`Nível de Poder `,-1),L(W(`select`,{"onUpdate:modelValue":l[1]||=e=>r.value=e},[(V(),H(B,null,z(9,e=>W(`option`,{key:e,value:e},j(e)+` · `+j(t[e])+` (CD `+j(11+e)+`)`,9,Rh)),64))],512),[[bo,r.value,void 0,{number:!0}]])]),W(`button`,{class:`btn sm`,onClick:s},`Ativar poder`),W(`button`,{class:`btn sm ghost`,onClick:c},`Nova cena`)]),W(`div`,zh,[(V(!0),H(B,null,z([...i.value].sort((e,t)=>e-t),e=>(V(),H(`span`,{class:`chip on`,key:e},j(t[e])+` `+j(e)+` liberado`,1))),128)),W(`span`,Bh,[l[5]||=K(`Exaustão Η: `,-1),W(`b`,{style:k({color:a.value?`var(--red)`:`inherit`})},j(a.value),5),a.value?(V(),H(`button`,{key:0,class:`btn sm ghost`,style:{"margin-left":`6px`},onClick:l[2]||=e=>a.value--},`Recuperação (−1)`)):q(``,!0)])]),o.value.length?(V(),H(`ul`,Vh,[(V(!0),H(B,null,z(o.value.slice(0,6),(e,t)=>(V(),H(`li`,{key:t},j(e),1))),128))])):q(``,!0)],64))}},Uh={class:`ficha`,style:{margin:`0 0 10px`,"box-shadow":`none`}},Wh={class:`w-row`,style:{margin:`4px 0 0`}},Gh=[`onClick`,`aria-label`],Kh={style:{font:`30px/1 var(--font-display)`,"min-width":`30px`,"text-align":`center`}},qh=[`onClick`,`aria-label`],Jh={style:{color:`var(--ink-3)`}},Yh={class:`w-row`},Xh={key:0,class:`w-note`},Zh={key:1,class:`w-note`,style:{"font-size":`15px`}},Qh={__name:`WParametros`,setup(e){let t=[`Potência`,`Reflexos`,`Resistência`,`Lógica`,`Espírito`,`Magnetismo`],n={8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9},r=P([8,8,8,8,8,8]),i=J(()=>r.value.reduce((e,t)=>e+(n[t]??0),0)),a=J(()=>r.value.every(e=>e>=8&&e<=15));function o(e){let t=r.value[e];t<15&&i.value-n[t]+n[t+1]<=27&&r.value[e]++}function s(e){r.value[e]>8&&r.value[e]--}let c=P([]);function l(){c.value=Array.from({length:6},()=>{let e=[1,2,3,4].map(()=>yl(6)).sort((e,t)=>t-e);return e[0]+e[1]+e[2]})}return(e,n)=>(V(),H(B,null,[W(`div`,Uh,[(V(),H(B,null,z(t,(e,t)=>W(`div`,{key:e},[W(`span`,null,j(e),1),W(`div`,Wh,[W(`button`,{class:`btn sm icon ghost`,onClick:e=>s(t),"aria-label":`Diminuir `+e},`−`,8,Gh),W(`b`,Kh,j(r.value[t]),1),W(`button`,{class:`btn sm icon ghost`,onClick:e=>o(t),"aria-label":`Aumentar `+e},`+`,8,qh),W(`span`,Jh,j(F(Sl)(F(Cl)(r.value[t]))),1)])])),64))]),W(`div`,Yh,[W(`span`,{class:`w-out`,style:k({color:i.value===27?`var(--green)`:`var(--ink)`})},[K(j(27-i.value),1),n[2]||=W(`small`,null,`pontos restantes de 27`,-1)],4),W(`button`,{class:`btn sm ghost`,onClick:n[0]||=e=>r.value=[15,14,13,12,10,8]},`Arranjo padrão`),W(`button`,{class:`btn sm ghost`,onClick:n[1]||=e=>r.value=[8,8,8,8,8,8]},`Zerar`),W(`button`,{class:`btn sm`,onClick:l},`Rolar 4d6 ×6`)]),a.value?q(``,!0):(V(),H(`p`,Xh,`Valores fora da compra de pontos.`)),c.value.length?(V(),H(`p`,Zh,[n[3]||=K(`Valores rolados (o menor dado de cada rolagem foi descartado): `,-1),W(`b`,null,j(c.value.join(` · `)),1),K(` · total `+j(c.value.reduce((e,t)=>e+t,0)),1)])):q(``,!0)],64))}},$h={class:`w-row`},eg=[`value`],tg={class:`w-row`},ng={class:`w-out`},rg={__name:`WPv`,setup(e){let t=e=>Number(String(e?.ficha[`Matriz de Vitalidade`]||`d8`).replace(/\D/g,``))||8,n=P(Xu[0]?.id),r=P(14),i=P(1),a=J(()=>t(Xu.find(e=>e.id===n.value))),o=J(()=>Cl(r.value||10)),s=J(()=>Math.min(20,Math.max(1,i.value||1))),c=J(()=>3*a.value+o.value+(s.value-1)*(a.value+o.value));return(e,l)=>(V(),H(B,null,[W(`div`,$h,[W(`label`,null,[l[3]||=K(`Arquétipo `,-1),L(W(`select`,{"onUpdate:modelValue":l[0]||=e=>n.value=e},[(V(!0),H(B,null,z(F(Xu),e=>(V(),H(`option`,{key:e.id,value:e.id},j(e.name)+` (d`+j(t(e))+`)`,9,eg))),128))],512),[[bo,n.value]])]),W(`label`,null,[l[4]||=K(`Resistência `,-1),L(W(`input`,{type:`number`,min:`1`,max:`30`,"onUpdate:modelValue":l[1]||=e=>r.value=e},null,512),[[Y,r.value,void 0,{number:!0}]])]),W(`label`,null,[l[5]||=K(`Nível `,-1),L(W(`input`,{type:`number`,min:`1`,max:`20`,"onUpdate:modelValue":l[2]||=e=>i.value=e},null,512),[[Y,i.value,void 0,{number:!0}]])])]),W(`div`,tg,[W(`span`,ng,[K(j(c.value),1),W(`small`,null,`PV máximos · Matrizes `+j(s.value)+`d`+j(a.value)+` · Resistência `+j(F(Sl)(o.value)),1)])])],64))}},ig={class:`w-row`},ag={class:`w-out`},og={class:`budget`},sg={key:0,class:`w-note`},cg={__name:`WXp`,setup(e){let t=[0,300,900,2700,6500,14e3,23e3,34e3,48e3,64e3,85e3,1e5,12e4,14e4,165e3,195e3,225e3,265e3,305e3,355e3],n=P(1e3),r=J(()=>{let e=1;for(let r=0;r<t.length;r++)(n.value||0)>=t[r]&&(e=r+1);return e}),i=J(()=>t[r.value]??null),a=J(()=>i.value?((n.value||0)-t[r.value-1])/(i.value-t[r.value-1])*100:100),o=J(()=>r.value<=4?`protege o bairro`:r.value<=10?`protege a cidade`:r.value<=16?`protege o país e o mundo`:`protege a realidade`);return(e,t)=>(V(),H(B,null,[W(`div`,ig,[W(`label`,null,[t[1]||=K(`XP `,-1),L(W(`input`,{type:`number`,min:`0`,step:`100`,"onUpdate:modelValue":t[0]||=e=>n.value=e,style:{width:`120px`}},null,512),[[Y,n.value,void 0,{number:!0}]])]),W(`span`,ag,[K(`Nível `+j(r.value),1),W(`small`,null,j(o.value),1)])]),W(`div`,og,[W(`div`,{style:k({width:a.value+`%`})},null,4)]),i.value?(V(),H(`p`,sg,`Faltam `+j((i.value-(n.value||0)).toLocaleString(`pt-BR`))+` XP para o nível `+j(r.value+1)+`.`,1)):q(``,!0)],64))}},lg={class:`w-row`},ug={class:`w-out`},dg={__name:`WCreditos`,setup(e){let t=P(1),n=J(()=>{let e=300;for(let n=2;n<=Math.min(20,t.value||1);n++)e+=n<=4?100:n<=10?500:2500;return e});return(e,r)=>(V(),H(`div`,lg,[W(`label`,null,[r[1]||=K(`Nível inicial do herói `,-1),L(W(`input`,{type:`number`,min:`1`,max:`20`,"onUpdate:modelValue":r[0]||=e=>t.value=e},null,512),[[Y,t.value,void 0,{number:!0}]])]),W(`span`,ug,[K(j(n.value.toLocaleString(`pt-BR`))+` cr`,1),r[2]||=W(`small`,null,`para gastar na criação`,-1)])]))}},fg={class:`w-row`},pg={key:0,class:`cart-list`},mg=[`onClick`],hg={key:1,class:`w-row`},gg={__name:`WCarrinho`,setup(e){let t=P(300),n=J(()=>Z.cart.reduce((e,t)=>e+t.price,0)),r=e=>e.toLocaleString(`pt-BR`)+` cr`;return(e,i)=>(V(),H(B,null,[i[4]||=W(`p`,{class:`w-note`,style:{"margin-top":`0`}},[K(`Use o botão `),W(`b`,null,`+`),K(` nas tabelas deste capítulo para montar o equipamento do herói. O carrinho fica salvo neste navegador.`)],-1),W(`div`,fg,[W(`label`,null,[i[2]||=K(`Orçamento `,-1),L(W(`input`,{type:`number`,min:`0`,step:`50`,"onUpdate:modelValue":i[0]||=e=>t.value=e,style:{width:`110px`}},null,512),[[Y,t.value,void 0,{number:!0}]])]),W(`span`,{class:`w-out`,style:k({color:n.value>t.value?`var(--red)`:`var(--ink)`})},[K(j(r(t.value-n.value)),1),i[3]||=W(`small`,null,`restantes`,-1)],4)]),W(`div`,{class:A([`budget`,{over:n.value>t.value}])},[W(`div`,{style:k({width:Math.min(100,n.value/Math.max(1,t.value)*100)+`%`})},null,4)],2),F(Z).cart.length?(V(),H(`ul`,pg,[(V(!0),H(B,null,z(F(Z).cart,(e,t)=>(V(),H(`li`,{key:t},[W(`span`,null,j(e.name),1),W(`span`,null,[K(j(r(e.price))+` `,1),W(`button`,{class:`btn sm ghost`,onClick:e=>F(Z).cart.splice(t,1),"aria-label":`Remover`},`×`,8,mg)])]))),128))])):q(``,!0),F(Z).cart.length?(V(),H(`div`,hg,[W(`b`,null,`Total: `+j(r(n.value)),1),W(`button`,{class:`btn sm ghost`,onClick:i[1]||=e=>F(Z).cart.splice(0)},`Esvaziar`)])):q(``,!0)],64))}},_g=[`data-label`],vg={class:`widget-title`},yg={__name:`WidgetHost`,props:{name:String},setup(e){let t=e,n={vantagem:[Jm,`Simulador de Vantagem`],cargas:[th,`Reserva de Cargas Heroicas`],modificador:[oh,`Calculadora de modificador`],salto:[dh,`Calculadora de salto`],iniciativa:[_h,`Rastreador de iniciativa`],ataque:[bh,`Jogada de ataque`],estabilizacao:[Th,`Testes de Estabilização`],concentracao:[Oh,`CD de Concentração`],assinatura:[Ih,`Assinatura de poder`],sobrecarga:[Hh,`Teste de Sobrecarga`],parametros:[Qh,`Gerador de Parâmetros`],pv:[rg,`Calculadora de PV`],xp:[cg,`Nível por XP`],creditos:[dg,`Créditos iniciais`],carrinho:[gg,`Carrinho de compras`]},r=J(()=>n[t.name]);return(e,t)=>r.value?(V(),H(`section`,{key:0,class:`widget`,"data-label":r.value[1]},[W(`div`,vg,`◆ `+j(r.value[1]),1),(V(),U(yr(r.value[0])))],8,_g)):q(``,!0)}},bg={class:`pw-browser`},xg={class:`pw-filters`},Sg={class:`pw-row`},Cg={class:`pw-count`},wg={class:`pw-row`},Tg=[`onClick`,`title`],Eg={class:`g`},Dg={class:`pw-row`},Og=[`onClick`],kg={class:`pw-row`,style:{display:`block`}},Ag={class:`pw-row`},jg=[`onClick`],Mg={class:`g`},Ng={class:`pw-row`},Pg=[`onClick`],Fg={class:`pw-row`},Ig=[`value`],Lg=[`onClick`],Rg=[`id`],zg={class:`g`},Bg={class:`pw-note`},Vg={class:`pw-grid`},Hg=[`onClick`,`onKeydown`,`aria-label`],Ug={class:`top`},Wg=[`title`],Gg={style:{"min-width":`0`,flex:`1`}},Kg={class:`meta`},qg={class:`pw-tags`},Jg=[`title`],Yg=[`title`],Xg={class:`line`},Zg=[`title`],Qg={class:`desc`},$g={key:0,class:`pw-pickbar`},e_={key:0,class:`pw-granted`},t_=[`onClick`],n_=[`onClick`,`aria-label`],r_={key:0,class:`palette-empty`},i_={__name:`PowerBrowser`,props:{maxLv:{type:Number,default:null},picked:{type:Array,default:null},granted:{type:Array,default:()=>[]}},emits:[`toggle`],setup(e,{emit:t}){let n=e,r=t,i=J(()=>Array.isArray(n.picked)),a=J(()=>n.maxLv==null?Ul:Ul.filter(e=>e.lv<=n.maxLv)),o=Vc(),s=Bc(),c=Kl.map(e=>({...e,slug:ql(e.n),cost:jd(e),dmg:Nd(e),hay:(e.n+` `+Hu(e.e)+` `+(e.dano||``)+` `+(e.sigma||``)).toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``)})),l=Lt({q:``,lv:[],cat:[],tag:[],cost:[],dmg:[],teste:``,fav:!1,sel:!1}),u=e=>e==null?[]:String(e).split(`,`).filter(Boolean);function d(){if(Array.isArray(n.picked))return;let e=o.query;l.q=e.q||``,l.lv=u(e.nv).map(Number),l.cat=u(e.cat),l.tag=u(e.tag),l.cost=u(e.tempo),l.dmg=u(e.dano),l.teste=e.teste||``,l.fav=e.fav===`1`}d(),R(()=>o.query,d),R(l,()=>{if(i.value)return;let e={...o.query},t=(t,n)=>{n&&n.length?e[t]=Array.isArray(n)?n.join(`,`):n:delete e[t]};t(`q`,l.q),t(`nv`,l.lv),t(`cat`,l.cat),t(`tag`,l.tag),t(`tempo`,l.cost),t(`dano`,l.dmg),t(`teste`,l.teste),t(`fav`,l.fav?`1`:``),s.replace({query:e})},{deep:!0});let f=(e,t)=>{let n=e.indexOf(t);n>=0?e.splice(n,1):e.push(t)},p=J(()=>l.sel||l.q||l.lv.length||l.cat.length||l.tag.length||l.cost.length||l.dmg.length||l.teste||l.fav);function m(){Object.assign(l,{q:``,lv:[],cat:[],tag:[],cost:[],dmg:[],teste:``,fav:!1,sel:!1})}let h=J(()=>{let e=l.q.trim().toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``);return c.filter(t=>(n.maxLv==null||t.lv<=n.maxLv)&&(!l.sel||n.picked?.includes(t.n)||n.granted.includes(t.n))&&(!e||t.hay.includes(e))&&(!l.lv.length||l.lv.includes(t.lv))&&(!l.cat.length||l.cat.includes(t.cat))&&(!l.tag.length||l.tag.every(e=>t.t.includes(e)))&&(!l.cost.length||l.cost.includes(t.cost))&&(!l.dmg.length||l.dmg.some(e=>t.dmg.includes(e)))&&(!l.teste||(t.teste||``).includes(l.teste)||l.teste===`ataque`&&t.atq)&&(!l.fav||Z.favorites.includes(t.slug)))}),g=J(()=>n.maxLv==null?c.length:c.filter(e=>e.lv<=n.maxLv).length),_=J(()=>a.value.map(e=>({...e,items:h.value.filter(t=>t.lv===e.lv).sort((e,t)=>e.n.localeCompare(t.n,`pt`))})).filter(e=>e.items.length)),v=[[`acao`,`Ação`],[`rapida`,`Ação Rápida`],[`reacao`,`Reação`],[`longo`,`1 min ou mais`]],y=[`Potência`,`Reflexos`,`Resistência`,`Lógica`,`Espírito`,`Magnetismo`],b={Proteção:`#3b8bff`,Percepção:`#2bd0e6`,Criação:`#ffc72c`,Mente:`#e05cff`,Energia:`#ff7a2f`,Ilusão:`#9b6bff`,Entropia:`#8bd34a`,Transformação:`#ef3b4a`};function x(e){let t=[];return e.tempo&&t.push([`Tempo`,e.tempo]),e.alc&&t.push([`Alcance`,e.alc]),e.dur&&t.push([`Duração`,e.dur]),t}let S=e=>Hu(e.e).slice(0,180);return(t,n)=>(V(),H(`div`,bg,[W(`div`,xg,[W(`div`,Sg,[G(F(fl),{size:18}),L(W(`input`,{type:`search`,"onUpdate:modelValue":n[0]||=e=>l.q=e,placeholder:`Buscar por nome ou efeito (ex.: teleporta, cura, cego)…`,"aria-label":`Buscar poderes`},null,512),[[Y,l.q]]),i.value?(V(),H(`button`,{key:0,class:A([`chip`,{on:l.sel}]),onClick:n[1]||=e=>l.sel=!l.sel},[G(F(el),{size:15}),K(` Escolhidos (`+j(e.picked.length)+`)`,1)],2)):q(``,!0),W(`button`,{class:A([`chip`,{on:l.fav}]),onClick:n[2]||=e=>l.fav=!l.fav},[G(F(pl),{size:15}),K(` Favoritos (`+j(F(Z).favorites.length)+`)`,1)],2),W(`span`,Cg,j(h.value.length)+` de `+j(g.value),1),p.value?(V(),H(`button`,{key:1,class:`btn sm ghost`,onClick:m},[G(F(_l),{size:14}),n[4]||=K(` Limpar`,-1)])):q(``,!0)]),W(`div`,wg,[n[5]||=W(`span`,{class:`lbl`},`Nível`,-1),(V(!0),H(B,null,z(a.value,e=>(V(),H(`button`,{key:e.lv,class:A([`chip`,{on:l.lv.includes(e.lv)}]),onClick:t=>f(l.lv,e.lv),title:e.nome+` · `+e.letra},[G(Q,{name:F(Cu)(e.lv),size:24},null,8,[`name`]),W(`span`,Eg,j(e.g),1),K(j(e.lv===0?`Téc.`:``),1)],10,Tg))),128))]),W(`div`,Dg,[n[6]||=W(`span`,{class:`lbl`},`Categoria`,-1),(V(!0),H(B,null,z(F(Td),e=>(V(),H(`button`,{key:e,class:A([`chip`,{on:l.cat.includes(e)}]),onClick:t=>f(l.cat,e)},[G(Q,{name:F(xu)(e),size:16,color:b[e]},null,8,[`name`,`color`]),K(j(e),1)],10,Og))),128))]),W(`details`,kg,[n[13]||=W(`summary`,{class:`lbl`,style:{cursor:`pointer`,"margin-bottom":`8px`}},`Mais filtros`,-1),W(`div`,Ag,[n[7]||=W(`span`,{class:`lbl`},`Marcador`,-1),(V(!0),H(B,null,z(F(Ed),(e,t)=>(V(),H(`button`,{key:t,class:A([`chip`,{on:l.tag.includes(t)}]),onClick:e=>f(l.tag,t)},[W(`span`,Mg,j(t),1),K(j(e.short),1)],10,jg))),128))]),W(`div`,Ng,[n[8]||=W(`span`,{class:`lbl`},`Tempo`,-1),(V(),H(B,null,z(v,([e,t])=>W(`button`,{key:e,class:A([`chip`,{on:l.cost.includes(e)}]),onClick:t=>f(l.cost,e)},j(t),11,Pg)),64))]),W(`div`,Fg,[n[11]||=W(`span`,{class:`lbl`},`Teste`,-1),L(W(`select`,{"onUpdate:modelValue":n[3]||=e=>l.teste=e,"aria-label":`Teste de Integridade`},[n[9]||=W(`option`,{value:``},`Qualquer`,-1),(V(),H(B,null,z(y,e=>W(`option`,{key:e,value:e},j(e),9,Ig)),64)),n[10]||=W(`option`,{value:`ataque`},`Jogada de Ataque`,-1)],512),[[bo,l.teste]]),n[12]||=W(`span`,{class:`lbl`,style:{"min-width":`auto`,"margin-left":`10px`}},`Dano`,-1),(V(!0),H(B,null,z(F(Md),e=>(V(),H(`button`,{key:e,class:A([`chip`,{on:l.dmg.includes(e)}]),onClick:t=>f(l.dmg,e)},j(e),11,Lg))),128))])])]),(V(!0),H(B,null,z(_.value,t=>(V(),H(`section`,{key:t.lv},[W(`div`,{class:`pw-level`,id:`np-`+t.lv},[G(Q,{name:F(Cu)(t.lv),size:56,class:`lv-big`},null,8,[`name`]),W(`span`,zg,j(t.g),1),W(`h2`,null,j(t.nome),1),W(`span`,null,[K(j(t.letra)+` · `+j(t.items.length)+` `+j(t.items.length===1?`poder`:`poderes`),1),t.cd?(V(),H(B,{key:0},[K(` · CD de Sobrecarga `+j(t.cd),1)],64)):q(``,!0)])],8,Rg),W(`p`,Bg,j(t.nota),1),W(`div`,Vg,[(V(!0),H(B,null,z(t.items,t=>(V(),H(`div`,{key:t.slug,class:A([`pw-card`,{picked:i.value&&e.picked.includes(t.n),granted:i.value&&e.granted.includes(t.n)}]),tabindex:`0`,role:`button`,onClick:e=>F(Z).power=t.slug,onKeydown:ko(e=>F(Z).power=t.slug,[`enter`]),"aria-label":`Abrir `+t.n},[W(`div`,Ug,[W(`span`,{class:`pw-glyph`,style:k({background:b[t.cat]}),title:t.cat},[G(Q,{name:F(xu)(t.cat),size:22},null,8,[`name`])],12,Wg),W(`div`,Gg,[W(`h4`,null,j(t.n),1),W(`div`,Kg,j(t.cat)+` · `+j(F(Cd)[t.lv])+` `+j(t.lv===0?`Técnica`:`NP `+t.lv),1)]),W(`span`,qg,[(V(!0),H(B,null,z(t.t,e=>(V(),H(`span`,{key:e,class:`pw-tag`,title:F(Ed)[e]?.name},j(e),9,Jg))),128)),W(`span`,{class:`pw-lv`,title:`Nível de Poder `+t.lv},[G(Q,{name:F(Cu)(t.lv),size:36},null,8,[`name`])],8,Yg)])]),W(`div`,Xg,[(V(!0),H(B,null,z(x(t),([e,n])=>(V(),H(`span`,{key:e,title:e},[G(Q,{name:F(Su)(e),size:14},null,8,[`name`]),K(` `+j(n),1),e===`Duração`&&t.t.includes(`Κ`)?(V(),U(Q,{key:0,name:`eye-settings-outline`,size:14})):q(``,!0)],8,Zg))),128))]),W(`div`,Qg,j(S(t)),1),i.value?(V(),H(`div`,$g,[e.granted.includes(t.n)?(V(),H(`span`,e_,[G(Q,{name:`gift`,size:15}),n[14]||=K(` Concedido`,-1)])):(V(),H(`button`,{key:1,class:A([`btn sm`,{ghost:!e.picked.includes(t.n)}]),onClick:Do(e=>r(`toggle`,t),[`stop`])},[e.picked.includes(t.n)?(V(),H(B,{key:0},[G(F(el),{size:14}),n[15]||=K(` Escolhido`,-1)],64)):(V(),H(B,{key:1},[G(F(ul),{size:14}),n[16]||=K(` Escolher`,-1)],64))],10,t_))])):q(``,!0),W(`button`,{class:A([`fav btn icon sm ghost`,{on:F(Z).favorites.includes(t.slug)}]),style:{border:`0`,background:`transparent`},onClick:Do(e=>F(Ol)(t.slug),[`stop`]),"aria-label":F(Z).favorites.includes(t.slug)?`Remover dos favoritos`:`Favoritar`},[G(F(pl),{size:16,fill:F(Z).favorites.includes(t.slug)?`currentColor`:`none`},null,8,[`fill`])],10,n_)],42,Hg))),128))])]))),128)),_.value.length?q(``,!0):(V(),H(`div`,r_,[n[17]||=K(`Nenhum poder com esses filtros.`,-1),l.fav&&!F(Z).favorites.length?(V(),H(B,{key:0},[K(` Marque poderes com a estrela para montar a sua lista.`)],64)):q(``,!0)]))]))}},a_={class:`img-grid`},o_=[`src`,`alt`],s_={class:`tag`},c_={class:`lbl`},l_={class:`card-ic`},u_={__name:`OriginGrid`,setup(e){let t={tecnologica:`Amarela`,parahumana:`Azul`,mutante:`Vermelha`,visitante:`Verde`};return(e,n)=>{let r=_r(`RouterLink`);return V(),H(`div`,a_,[(V(!0),H(B,null,z(F(Zu),e=>(V(),U(r,{key:e.id,to:`/origens/`+e.id,class:A([`img-card`,`cor-`+e.cor])},{default:I(()=>[W(`img`,{src:`./img/`+e.img,alt:e.name,loading:`lazy`},null,8,o_),W(`span`,s_,j(e.lineages.length)+` Linhagens`,1),W(`span`,c_,[W(`span`,l_,[G(Q,{name:F(yu)(e.name),size:22},null,8,[`name`])]),W(`b`,null,j(e.name),1),W(`span`,null,`Assinatura `+j(t[e.cor]),1)])]),_:2},1032,[`to`,`class`]))),128))])}}},d_=[`innerHTML`],f_=[`innerHTML`],p_=[`innerHTML`],m_=[`href`],h_=[`innerHTML`],g_=[`innerHTML`],__={key:0},v_=[`innerHTML`],y_=[`innerHTML`],b_={class:`box-title`},x_={key:1,class:`ficha`},S_=[`innerHTML`],C_={key:2,class:`grid-list`},w_=[`innerHTML`],T_={key:3,class:`cond-list`},E_=[`id`],D_=[`innerHTML`],O_={__name:`Blocks`,props:{nodes:{type:Array,required:!0}},setup(e){let t=Pn(`heroLevel`,null),n=Pn(`sectionHref`,e=>``),r=J(()=>t?.value??null),i=e=>r.value!=null&&e.lvlEff!=null&&e.lvlEff>r.value,a=e=>r.value!=null&&e.t===`h`&&e.lvlEff===r.value,o=e=>{let t=[];for(let n of e.children)if(n.t===`ul`)for(let e of n.items){let n=e.html.match(/^<strong>([^<:]+):<\/strong>\s*(.*)$/);n&&t.push([n[1],n[2]])}return t},s=e=>{let t=[];for(let n of e.children)if(n.t===`ul`)for(let e of n.items){let n=e.html.match(/^<strong>([^<]+?)\.<\/strong>\s*(.*)$/);n&&t.push({name:n[1],html:n[2],id:`cond-`+om(n[1]).toLowerCase()})}return t};return(t,c)=>{let l=_r(`Blocks`,!0);return V(!0),H(B,null,z(e.nodes,(e,t)=>(V(),H(B,{key:t},[e.t===`h`?(V(),U(yr(`h`+e.level),{key:0,id:e.id,class:A({locked:i(e),"just-unlocked":a(e)})},{default:I(()=>[e.iconHtml?(V(),H(`span`,{key:0,class:`h-icw`,innerHTML:e.iconHtml},null,8,d_)):q(``,!0),W(`span`,{innerHTML:e.html},null,8,f_),e.chHtml?(V(),H(`span`,{key:1,innerHTML:e.chHtml},null,8,p_)):q(``,!0),W(`a`,{class:`anchor`,href:`#`+F(n)(e.id),"aria-label":`Link para esta seção`},`#`,8,m_)]),_:2},1032,[`id`,`class`])):e.t===`p`?(V(),H(`p`,{key:1,innerHTML:e.html,class:A({locked:i(e)})},null,10,h_)):e.t===`ul`?(V(),H(`ul`,{key:2,class:A({locked:i(e)})},[(V(!0),H(B,null,z(e.items,(e,t)=>(V(),H(`li`,{key:t,class:A({locked:e.lvl&&r.value!=null&&e.lvl>r.value})},[W(`span`,{innerHTML:e.html},null,8,g_),e.sub?(V(),H(`ul`,__,[(V(!0),H(B,null,z(e.sub,(e,t)=>(V(),H(`li`,{key:t,innerHTML:e.html},null,8,v_))),128))])):q(``,!0)],2))),128))],2)):e.t===`ol`?(V(),H(`ol`,{key:3,class:A({locked:i(e)})},[(V(!0),H(B,null,z(e.items,(e,t)=>(V(),H(`li`,{key:t,innerHTML:e.html},null,8,y_))),128))],2)):e.t===`table`?(V(),U(xm,{key:4,node:e,class:A({locked:i(e)})},null,8,[`node`,`class`])):e.t===`widget`?(V(),U(yg,{key:5,name:e.name},null,8,[`name`])):e.t===`box`?(V(),H(B,{key:6},[e.name===`nota`||e.name===`dica`||e.name===`bloco`?(V(),H(`div`,{key:0,class:A([`box-`+e.name,{locked:i(e)}])},[W(`div`,b_,[e.name===`dica`?(V(),U(F(ol),{key:0,size:16})):e.name===`nota`?(V(),U(F(al),{key:1,size:16})):q(``,!0),K(j(e.arg||(e.name===`dica`?`Dica`:`Nota`)),1)]),G(l,{nodes:e.children},null,8,[`nodes`])],2)):e.name===`ficha`?(V(),H(`div`,x_,[(V(!0),H(B,null,z(o(e),([e,t])=>(V(),H(`div`,{key:e},[W(`span`,null,j(e),1),W(`b`,{innerHTML:t},null,8,S_)]))),128))])):e.name===`grid`?(V(),H(`ul`,C_,[(V(!0),H(B,null,z(e.children,e=>(V(),H(B,{key:e},[(V(!0),H(B,null,z(e.items||[],(e,t)=>(V(),H(`li`,{key:t,innerHTML:e.html},null,8,w_))),128))],64))),128))])):e.name===`condicoes`?(V(),H(`div`,T_,[(V(!0),H(B,null,z(s(e),e=>(V(),H(`div`,{key:e.id,class:`cond-card`,id:e.id},[W(`h4`,null,j(e.name),1),W(`p`,{innerHTML:e.html},null,8,D_)],8,E_))),128))])):e.name===`passos`?(V(),U(Wm,{key:4,node:e},null,8,[`node`])):e.name===`tabs`?(V(),U(Nm,{key:5,node:e},null,8,[`node`])):e.name===`cards`?(V(),U(Bm,{key:6,node:e},null,8,[`node`])):e.name===`poderes`?(V(),U(i_,{key:7})):e.name===`origens`?(V(),U(u_,{key:8})):e.name===`arquetipos`?(V(),U(Wp,{key:9})):(V(),U(l,{key:10,nodes:e.children},null,8,[`nodes`]))],64)):q(``,!0)],64))),128)}}},k_={class:`lvlbar`},A_={class:`big`},j_={class:`stats`},M_={title:`Sem o modificador de Resistência`},N_={__name:`LevelBar`,props:{modelValue:Number,ficha:Object},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t,i=J({get:()=>n.modelValue,set:e=>r(`update:modelValue`,Number(e))}),a=J(()=>Number((n.ficha?.[`Matriz de Vitalidade`]||`d8`).replace(/\D/g,``))||8),o=J(()=>5+Math.floor(i.value/2)),s=J(()=>3*a.value+(i.value-1)*a.value);return(e,t)=>(V(),H(`div`,k_,[t[4]||=W(`label`,{for:`lvl`},`Nível do herói`,-1),W(`span`,A_,j(i.value),1),L(W(`input`,{id:`lvl`,type:`range`,min:`1`,max:`20`,"onUpdate:modelValue":t[0]||=e=>i.value=e,"aria-label":`Nível do herói`},null,512),[[Y,i.value]]),W(`div`,j_,[W(`span`,null,[t[1]||=K(`Prof. `,-1),W(`b`,null,`+`+j(F(wl)(i.value)),1)]),W(`span`,null,[t[2]||=K(`Cargas Heroicas `,-1),W(`b`,null,j(o.value),1)]),W(`span`,M_,[t[3]||=K(`PV base `,-1),W(`b`,null,j(s.value),1),K(` + Res × `+j(i.value),1)])])]))}},P_={class:`article`},F_=[`src`,`alt`],I_={class:`kicker`},L_={class:`chap-title`},R_={key:0,class:`title-ic`},z_={key:1,class:`chap-sub`},B_={class:`pager`,"aria-label":`Navegação entre páginas`},V_={key:0,class:`page-toc`,"aria-label":`Nesta página`},H_={key:1,class:`page-wrap`},U_={class:`article`},W_={__name:`ChapterView`,setup(e){let t=Vc(),n=J(()=>qu(t.params.cap,t.params.a,t.params.b)),r=J(()=>n.value?.chapter),i=J(()=>n.value?.page),a=J(()=>i.value?rm(i.value.blocks):[]),o=J(()=>!!i.value?.attrs?.arquetipo),s=J(()=>o.value?Xu.find(e=>e.id===i.value.id):null),c=J(()=>i.value?.id===`lista`),l=J({get:()=>o.value?Z.heroLevel[i.value.id]??1:null,set:e=>{o.value&&(Z.heroLevel[i.value.id]=e)}});Nn(`heroLevel`,l),Nn(`sectionHref`,e=>Yu(r.value,i.value,e));let u=J(()=>i.value?.title?vu(i.value.title)||yu(i.value.title)||gu(i.value.title)||_u(r.value.num):_u(r.value?.num)),d=J(()=>i.value?.attrs?.img?`./img/`+i.value.attrs.img:null),f=J(()=>i.value?.attrs?.cor?`cor-`+i.value.attrs.cor:`ac-`+r.value?.accent),p=J(()=>i.value?.title||r.value?.title),m=J(()=>r.value?o.value?`Capítulo ${r.value.num} · Arquétipo`:i.value?.title&&r.value.pages.length>1?`Capítulo ${r.value.num} · ${r.value.short}`:`Capítulo ${r.value.num}`:``),h=J(()=>s.value?[s.value.ficha[`Parâmetro principal`]&&`Parâmetro principal: `+s.value.ficha[`Parâmetro principal`],s.value.ficha[`Matriz de Vitalidade`]&&`Matriz `+s.value.ficha[`Matriz de Vitalidade`]].filter(Boolean).join(` · `):!i.value?.title||i.value===r.value.pages[0]?r.value?.subtitle:``),g=Gu.flatMap(e=>e.pages.map(t=>({c:e,p:t}))),_=J(()=>g.findIndex(e=>e.p===i.value)),v=J(()=>_.value>0?g[_.value-1]:null),y=J(()=>_.value>=0&&_.value<g.length-1?g[_.value+1]:null),b=e=>e.p.title||e.c.title,x=J(()=>i.value?.toc||[]);function S(){let e=n.value?.section;e&&bn(()=>setTimeout(()=>{let t=document.getElementById(e);t&&t.offsetParent!==null&&t.scrollIntoView({behavior:`auto`,block:`start`})},80))}R(()=>t.fullPath,()=>{S(),Z.lastRead={path:t.path,title:p.value,cap:r.value?.short}},{immediate:!0});let C=null;function w(){C?.disconnect(),C=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top);t[0]&&(Z.activeSection=t[0].target.id)},{rootMargin:`-70px 0px -65% 0px`}),document.querySelectorAll(`.article h2[id], .article h3[id]`).forEach(e=>C.observe(e))}let ee=P(0);function te(){let e=document.documentElement;ee.value=Math.min(100,e.scrollTop/Math.max(1,e.scrollHeight-e.clientHeight)*100)}return sr(()=>{bn(w),window.addEventListener(`scroll`,te,{passive:!0}),te()}),R(i,()=>bn(w)),ur(()=>{C?.disconnect(),window.removeEventListener(`scroll`,te)}),(e,t)=>{let g=_r(`RouterLink`);return n.value?(V(),H(`div`,{key:0,class:A(f.value)},[W(`div`,{class:`progress`,style:k({width:ee.value+`%`})},null,4),W(`div`,{class:A([`page-wrap`,{wide:c.value}])},[W(`article`,P_,[W(`header`,{class:A([`chap-head`,{"has-img":d.value}])},[d.value?(V(),H(`img`,{key:0,class:`hero-img`,src:d.value,alt:p.value},null,8,F_)):q(``,!0),W(`div`,null,[W(`span`,I_,[G(Q,{name:F(_u)(r.value.num),size:15},null,8,[`name`]),K(` `+j(m.value),1)])]),W(`h1`,L_,[u.value?(V(),H(`span`,R_,[G(Q,{name:u.value,size:56},null,8,[`name`])])):q(``,!0),K(j(p.value),1)]),h.value?(V(),H(`p`,z_,j(h.value),1)):q(``,!0)],2),o.value?(V(),U(N_,{key:0,modelValue:l.value,"onUpdate:modelValue":t[0]||=e=>l.value=e,ficha:s.value?.ficha},null,8,[`modelValue`,`ficha`])):q(``,!0),G(O_,{nodes:a.value},null,8,[`nodes`]),W(`nav`,B_,[v.value?(V(),U(g,{key:0,to:F(Yu)(v.value.c,v.value.p),class:`prev`},{default:I(()=>[t[1]||=W(`small`,null,`← Anterior`,-1),W(`b`,null,j(b(v.value)),1)]),_:1},8,[`to`])):q(``,!0),y.value?(V(),U(g,{key:1,to:F(Yu)(y.value.c,y.value.p),class:`next`},{default:I(()=>[t[2]||=W(`small`,null,`Próximo →`,-1),W(`b`,null,j(b(y.value)),1)]),_:1},8,[`to`])):q(``,!0)])]),!c.value&&x.value.length>1?(V(),H(`aside`,V_,[t[3]||=W(`h4`,null,`Nesta página`,-1),(V(!0),H(B,null,z(x.value,e=>(V(),U(g,{key:e.id,to:F(Yu)(r.value,i.value,e.id),class:A([`l`+e.level,{active:F(Z).activeSection===e.id}])},{default:I(()=>[K(j(e.text),1)]),_:2},1032,[`to`,`class`]))),128))])):q(``,!0)],2)],2)):(V(),H(`div`,H_,[W(`article`,U_,[t[5]||=W(`h1`,{class:`chap-title`,style:{"margin-top":`60px`}},`Página não encontrada`,-1),W(`p`,null,[G(g,{to:`/`},{default:I(()=>[...t[4]||=[K(`Voltar ao início`,-1)]]),_:1})])])]))}}},G_=[{id:`pot`,name:`Potência`,abbr:`POT`},{id:`ref`,name:`Reflexos`,abbr:`REF`},{id:`res`,name:`Resistência`,abbr:`RES`},{id:`log`,name:`Lógica`,abbr:`LOG`},{id:`esp`,name:`Espírito`,abbr:`ESP`},{id:`mag`,name:`Magnetismo`,abbr:`MAG`}],K_=Object.fromEntries(G_.map(e=>[e.name,e.id])),q_=[[`Acrobacia`,`ref`],[`Adestrar Animais`,`esp`],[`Atletismo`,`pot`],[`Atuação`,`mag`],[`Ciências`,`log`],[`Enganação`,`mag`],[`Furtividade`,`ref`],[`História`,`log`],[`Intimidação`,`mag`],[`Intuição`,`esp`],[`Investigação`,`log`],[`Medicina`,`esp`],[`Natureza`,`log`],[`Ocultismo`,`log`],[`Percepção`,`esp`],[`Persuasão`,`mag`],[`Prestidigitação`,`ref`],[`Religião`,`log`],[`Sobrevivência`,`esp`],[`Tecnologia`,`log`]].map(([e,t])=>({name:e,param:t})),J_={"Lidar com Animais":`Adestrar Animais`},Y_=e=>J_[e.trim()]||e.trim(),X_={uma:1,um:1,duas:2,dois:2,três:3,quatro:4,cinco:5},Z_=e=>(String(e).match(/(\d+)º/g)||[]).map(e=>parseInt(e)),Q_=e=>e.replace(/\.$/,``).split(/,\s*|\s+e\s+|\s+ou\s+/).map(e=>e.trim()).filter(Boolean),$_=Ku.origens.pages.filter(e=>e.attrs.img).map(e=>{let t=[],n={};ru(e.blocks,e=>{if(e.t===`table`&&e.kind===`linhagens`)for(let t of e.rows)n[t[0]]=t[2]});for(let r of e.blocks)if(r.t===`box`&&r.name===`cards`){let i=null;for(let a of r.children)a.t===`h`&&a.level===3?(i={name:a.text,origin:e.title,blocks:[],movement:n[a.text]||`—`},t.push(i)):i&&i.blocks.push(a)}for(let e of t){let t=e.blocks.find(e=>e.t===`p`);e.concept=t?Hu(t.md).split(`.`)[0]+`.`:``,e.text=e.blocks.map(e=>e.md||(e.items||[]).map(e=>e.md).join(` `)).join(` `);let n=e.text.match(/Visão Noturna\.\*\*\s*(\d+) m/);e.darkvision=n?Number(n[1]):0,e.ac=(e.text.match(/(?:Sem armadura, tem CA|Tem CA) (\d+)(?: base)?(?: \+ (Reflexos|Resistência))?/)||[]).slice(1),e.variants=tv(e.blocks)}return{id:e.id,name:e.title,cor:e.attrs.cor,img:e.attrs.img,lineages:t}}),ev=$_.flatMap(e=>e.lineages);function tv(e){let t=[];return e.forEach((n,r)=>{let i=n.t===`p`&&n.md.match(/^\*\*(Variante [^*]+?)\.?\*\*/);if(i)t.push({id:i[1].trim(),name:i[1].replace(/^Variante /,``).trim(),src:n,blocks:[n]});else if(n.t===`table`&&/^Variante$/i.test(n.head[0]))for(let e of n.rows)t.push({id:e[0],name:e[0],src:n,blocks:[{...n,rows:[e]}],grants:n.head.slice(1).map((t,n)=>({lvl:parseInt(t)||1,name:e[n+1]}))});else if(n.t===`ul`&&r>0&&e[r-1].t===`p`&&/(variante soma um efeito|Escolha um):\s*$/i.test(e[r-1].md))for(let e of n.items){let r=e.md.match(/^\*\*([^*:]+):?\*\*/);r&&t.push({id:r[1].trim(),name:r[1].trim(),src:n,blocks:[{...n,items:[e]}]})}}),t.length>=2?t:[]}function nv(e,t){if(!e)return[];if(!e.variants.length)return e.blocks;let n=new Set(e.variants.map(e=>e.src)),r=e.variants.find(e=>e.id===t);return e.blocks.flatMap(e=>n.has(e)?r&&r.src===e?r.blocks:[]:[e])}function rv(e){let t=[],n=null,r=null;for(let i of e)i.t===`h`&&i.level===2?(n=i.text,r=null):i.t===`h`&&i.level===3?(r={h2:n,name:i.text,ch:i.ch,lvl:i.lvl,levels:Z_(i.text),blocks:[]},t.push(r)):r&&r.blocks.push(i);return t}function iv(e,t){let n=[],r=null,i=[];for(let e of t){if(e.t===`p`){let t=e.md.match(/^\*\*([^*]+?)\.\*\*\s*(.*)$/)||e.md.match(/^\*\*([^*]+?)\*\*\s*(.*)$/),i=t?Yl(t[1]):null;if(t&&i){let e=t[1].replace(/\s*\(\d+º[^)]*\)/,``).replace(/\s*\(\{ch[^}]*\}\)/,``).trim(),a=(t[1].match(/\{ch\s*([^}]*)\}/)||[])[1]||null;r={name:e,lvl:i,levels:Z_(t[1]),ch:a,md:[t[2]]},n.push(r);continue}}if(r?r.md.push(e.md||(e.items||[]).map(e=>`- `+e.md).join(`
`)||(e.t===`table`?`[tabela]`:``)):e.t===`p`&&i.push(e.md),e.t===`table`&&/Poderes|NP/.test(e.head.join(` `))){let t={head:e.head,rows:e.rows};(n.powerTables||=[]).push(t)}}return{name:e.text,id:e.id,img:e.attrs?.img,intro:i.join(` `),features:n,powerTables:n.powerTables||[]}}var av=Ku.arquetipos.pages.filter(e=>e.attrs.arquetipo).map(e=>{let t={id:e.id,name:e.title,img:e.attrs.img,ficha:{},prof:{},power:{},prog:null,features:[],specs:[]};ru(e.blocks,(e,n)=>{if(e.t===`box`&&e.name===`ficha`){for(let n of e.children)if(n.t===`ul`)for(let e of n.items){let n=e.md.match(/^\*\*([^*:]+):\*\*\s*(.*)$/);n&&(t.ficha[n[1]]=n[2])}}if(e.t===`table`&&e.kind===`progressao`&&!t.prog&&(t.prog={head:e.head,rows:e.rows}),e.t===`box`&&e.name===`tabs`){let n=null,r=[],i=()=>{n&&t.specs.push(iv(n,r)),r=[]};for(let t of e.children)t.t===`h`&&t.level===3?(i(),n=t):r.push(t);i()}});for(let n of e.blocks)if(n.t===`ul`)for(let e of n.items){let n=e.md.match(/^\*\*([^*:]+):\*\*\s*(.*)$/);if(!n)continue;let[,r,i]=n;[`Pontos de Vida`,`Níveis seguintes`,`Matriz de Vitalidade`].includes(r)||[`Treinamentos`,`Ferramentas`,`Integridade`,`Perícias`].includes(r)?t.prof[r]=i:[`Parâmetro de poder`,`CD de Poder`,`Jogada de Ataque de Poder`,`Técnicas`,`Poderes preparados`,`Poderes conhecidos`,`Técnicas e conhecidos`].includes(r)&&(t.power[r]=i)}t.die=Number((t.prof[`Matriz de Vitalidade`]||t.ficha[`Matriz de Vitalidade`]||`d8`).replace(/\D/g,``))||8,t.hpBase=Number((t.prof[`Pontos de Vida`]||``).match(/\d+/)?.[0])||3*t.die,t.hpPer=Number((t.prof[`Níveis seguintes`]||``).match(/\d+/)?.[0])||t.die,t.saves=(t.prof.Integridade||t.ficha[`Testes de Integridade`]||``).split(/\s+e\s+|,\s*/).map(e=>K_[e.trim()]).filter(Boolean),t.trainings=(t.prof.Treinamentos||``).split(`.`)[0].split(/,\s*|\s+e\s+/).map(e=>e.trim()).filter(Boolean),t.tools=t.prof.Ferramentas||`nenhuma`;let n=t.prof.Perícias||``,r=n.match(/escolha (\w+) entre (.*)$/i);if(r)t.skillChoice={n:X_[r[1].toLowerCase()]||2,from:Q_(r[2]).map(Y_)};else{let e=n.match(/^(\w+) quaisquer/i);t.skillChoice={n:e?X_[e[1].toLowerCase()]||3:2,from:q_.map(e=>e.name)}}t.powerParam=K_[(t.power[`Parâmetro de poder`]||``).trim()]||null,t.specLevel=Number((t.ficha.Especialização||`3`).match(/\d+/)?.[0])||3,t.features=rv(e.blocks).filter(e=>e.lvl&&e.h2!==`Especializações`&&!/^Especializaç/.test(e.h2||``));let i=t.features.find(e=>/^Evolução/.test(e.name));return t.evoLevels=i?i.levels:[4,8,12,16,19],t}),ov=Object.fromEntries(av.map(e=>[e.id,e]));function sv(e,t,n){if(!e?.prog)return null;let r=e.prog.head.findIndex(e=>n.test(e));if(r<0)return null;let i=e.prog.rows.find(e=>Number(e[0])===t);return i?i[r]:null}var cv=Ku.criacao.pages[0],lv=[],uv={},dv=[];{let e=null,t=null;for(let n of cv.blocks)if(n.t===`h`)n.level===2?(e=n.text,t=null):t=n.text;else{if(n.t===`table`&&e===`Antecedentes`)for(let e of n.rows)lv.push({name:e[0],skills:e[1].split(/,\s*/).map(Y_),tool:e[2],feature:e[3]});if(n.t===`box`&&n.name===`grid`){for(let r of n.children)if(r.t===`ul`)for(let n of r.items){let r=n.md.match(/^\*\*([^*]+?)(?: \(\{ch[^}]*\}\))?\.\*\*\s*(.*)$/);r&&(t===`Características dos Antecedentes`?uv[r[1]]=n.md:e===`Talentos`&&dv.push({name:r[1],md:n.md}))}}}for(let e of lv)e.featureMd=uv[e.feature]||``}var fv=Ku.equipamento.pages[0],pv=[],mv=[];{let e=null;for(let t of fv.blocks)if(t.t===`h`)e=t.text;else if(t.t===`table`){if(t.head[0]===`Armadura`)for(let e of t.rows){let t=e[2].match(/^(\+)?(\d+)(?: \+ Ref)?(?: \(máx\. (\d+)\))?/);pv.push({name:e[0],type:e[1],shield:e[2].startsWith(`+`),base:Number(t?.[2]||10),addRef:/\+ Ref/.test(e[2]),maxRef:t?.[3]?Number(t[3]):null,pot:e[3],stealth:e[4],price:e[6]})}if(t.head[0]===`Arma`){let n=e===`Combate Corpo a Corpo`?`Combate Corpo a Corpo`:e===`Armas de Fogo`?`Armas de Fogo`:`Armamento Pesado`;for(let e of t.rows){let t=e[2],r=/Munição/.test(t);mv.push({name:e[0],dmg:e[1],props:t,training:n,ranged:r,finesse:/Acuidade/i.test(t),price:e[4]})}}}}var hv=`vg.fichas`;function gv(){try{return JSON.parse(localStorage.getItem(hv)||`[]`)}catch{return[]}}var _v=Lt(gv());R(_v,e=>{try{localStorage.setItem(hv,JSON.stringify(e))}catch{}},{deep:!0});var vv=()=>Math.random().toString(36).slice(2,10);function yv(){return{id:vv(),criada:Date.now(),etapa:1,conceito:``,nome:``,civil:``,jogador:``,nivel:1,xp:0,origem:``,linhagem:``,linhagemVariante:``,arquetipo:``,espec:``,antecedente:``,base:{pot:8,ref:8,res:8,log:8,esp:8,mag:8},metodo:`compra`,rolados:[],bonusModo:`2-1`,bonus2:``,bonus1:``,bonus111:[],evolucoes:{},talentosExtra:[],periciasArq:[],periciasExtra:[],especialista:[],integridadeExtra:[],armadura:``,escudo:!1,defesa:`base`,caBonus:0,deslocExtra:0,armas:[],poderes:[],itens:[],notasEquip:``,pvAtual:null,pvTemp:0,cargasGastas:0,exaustao:0,condicoes:[],estab:{s:0,f:0},aparencia:``,motivacao:``,codigo:``,vinculos:``,notas:``}}function bv(){let e=yv();return _v.unshift(e),e}function xv(e){let t=JSON.parse(JSON.stringify(e));return t.id=vv(),t.criada=Date.now(),t.nome=(e.nome||`Herói`)+` (cópia)`,_v.unshift(t),t}function Sv(e){let t=_v.findIndex(t=>t.id===e);t>=0&&_v.splice(t,1)}function Cv(e){let t={...yv(),etapa:99,...e,id:vv()};return _v.unshift(t),t}var wv=[0,300,900,2700,6500,14e3,23e3,34e3,48e3,64e3,85e3,1e5,12e4,14e4,165e3,195e3,225e3,265e3,305e3,355e3],Tv=e=>{let t=1;return wv.forEach((n,r)=>{e>=n&&(t=r+1)}),t};function Ev(e){let t=ov[e.arquetipo]||null,n=ev.find(t=>t.name===e.linhagem)||null,r=n?.variants.find(t=>t.id===e.linhagemVariante)||null,i=nv(n,e.linhagemVariante),a=lv.find(t=>t.name===e.antecedente)||null,o=Math.min(20,Math.max(1,Number(e.nivel)||1)),s=wl(o),c={...e.base},l=Object.fromEntries(G_.map(e=>[e.id,0]));if(e.bonusModo===`2-1`)e.bonus2&&(l[e.bonus2]+=2),e.bonus1&&e.bonus1!==e.bonus2&&(l[e.bonus1]+=1);else if(e.bonusModo===`1-1-1`)for(let t of new Set(e.bonus111))t?l[t]+=1:e.bonusModo===`2`&&e.bonus2&&(l[e.bonus2]+=2);let u=(t?.evoLevels||[4,8,12,16,19]).filter(e=>e<=o),d=Object.fromEntries(G_.map(e=>[e.id,0])),f=[];for(let t of u){let n=e.evolucoes[t];n&&(n.tipo===`+2`&&n.a?d[n.a]+=2:n.tipo===`+1+1`?(n.a&&(d[n.a]+=1),n.b&&(d[n.b]+=1)):n.tipo===`talento`&&n.talento&&f.push(n.talento))}let p={};for(let e of G_)p[e.id]=Math.min(Math.min(20,(Number(c[e.id])||0)+l[e.id])+d[e.id],20);let m=Object.fromEntries(G_.map(e=>[e.id,Cl(p[e.id])])),h=new Set([...t?.saves||[],...e.integridadeExtra]),g=G_.map(e=>({...e,prof:h.has(e.id),total:m[e.id]+(h.has(e.id)?s:0)})),_=new Set(a?.skills||[]),v=new Set([..._,...e.periciasArq,...e.periciasExtra]),y=q_.map(t=>{let n=v.has(t.name),r=n&&e.especialista.includes(t.name);return{...t,prof:n,exp:r,fromBg:_.has(t.name),total:m[t.param]+(n?r?2*s:s:0)}}),b=10+y.find(e=>e.name===`Percepção`).total,x=t?.die||8,S=(/Variante Resistente/.test(e.linhagemVariante||``)?o:0)+(f.includes(`Duro de Matar`)||e.talentosExtra.includes(`Duro de Matar`)?2*o:0),C=3*x+m.res+(o-1)*(x+m.res)+S,w=pv.find(t=>t.name===e.armadura&&!t.shield)||null,ee,te;if(w){let e=w.addRef?w.maxRef==null?m.ref:Math.min(m.ref,w.maxRef):0;ee=w.base+e,te=`${w.name}: ${w.base}${w.addRef?` + REF`+(w.maxRef==null?``:` (máx. ${w.maxRef})`):``}`}else{let r=Dv(e,t,n).find(t=>t.id===e.defesa)||Dv(e,t,n)[0];ee=r.calc(m),te=r.label}let ne=e.escudo&&e.defesa!==`artista`;ne&&(ee+=2),ee+=Number(e.caBonus)||0;let T=Number(sv(t,o,/^(Nível máx\.|NP máximo)$/))||null,re=Number(sv(t,o,/^Téc\.$/))||null,ie=sv(t,o,/^Poderes$/),E=t?.powerParam,ae=E?8+s+m[E]:null,D=E?s+m[E]:null,oe=t?.power[`Poderes preparados`]||``,O=G_.find(e=>oe.includes(e.name)),se=oe&&O?Math.max(1,m[O.id]+(/metade do nível/.test(oe)?Math.floor(o/2):o)):null,ce=re||Number((t?.power.Técnicas||``).match(/conhece (\d+)/)?.[1])||null,le=n?.movement&&n.movement!==`—`?n.movement:``,k=9+(Number(e.deslocExtra)||0),ue=new Set(t?.trainings||[]),de=e.armas.map(e=>{let t=mv.find(t=>t.name===e);if(!t)return null;let n=t.finesse?Math.max(m.pot,m.ref):t.ranged?m.ref:m.pot,r=ue.has(t.training),i=(t.dmg.match(/^\d+d\d+|^\d+/)||[`1`])[0];return{...t,bonus:n+(r?s:0),trained:r,dmgExpr:`${i}${n>=0?`+`:``}${n}`,type:t.dmg.replace(/^[\dd]+ (de )?/,``)}}).filter(Boolean),fe=(t?.features||[]).filter(e=>e.lvl<=o),pe=t?.specs.find(t=>t.name===e.espec)||null,A=(pe?.features||[]).filter(e=>e.lvl<=o);return{arch:t,lin:n,linVariant:r,linBlocks:i,preparados:se,tecnicasN:ce,bg:a,spec:pe,L:o,prof:s,final:p,bonus:l,evoBonus:d,mod:m,saves:g,skills:y,passiva:b,die:x,pvMax:C,ca:ee,caFormula:te,shieldOk:ne,npMax:T,tecnicas:re,poderesN:ie,cdPoder:ae,atqPoder:D,pp:E,desloc:k,extraMov:le,attacks:de,feats:fe,specFeats:A,evoLevels:u,talents:f,cargas:5+Math.floor(o/2),iniciativa:m.ref,specUnlocked:o>=(t?.specLevel||3)}}function Dv(e,t,n){let r=[{id:`base`,label:`Sem armadura: 10 + REF`,calc:e=>10+e.ref}];if(t?.id===`furia-incontrolavel`&&r.push({id:`pele`,label:`Pele Resistente: 10 + REF + RES`,calc:e=>10+e.ref+e.res}),t?.id===`artista-marcial`&&r.push({id:`artista`,label:`Defesa sem Armadura: 10 + REF + ESP`,calc:e=>10+e.ref+e.esp}),e.espec===`Energia Elemental`&&r.push({id:`couraca`,label:`Couraça Elemental: 13 + REF`,calc:e=>13+e.ref}),n?.ac?.length){let[e,t]=n.ac,i=t===`Resistência`?`res`:`ref`;r.push({id:`linhagem`,label:`${n.name}: ${e}${t?` + `+(t===`Resistência`?`RES`:`REF`):``}`,calc:n=>Number(e)+(t?n[i]:0)})}return r}var Ov=new Set(Kl.map(e=>e.n)),kv=RegExp(`(?<![\\p{L}])(`+[...Ov].sort((e,t)=>t.length-e.length).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`)+`)(?![\\p{L}])`,`gu`),Av=new Set([`Voo`,`Visão Noturna`,`Telepatia`,`Teia`,`Escuridão`]);function jv(e,t){let n=[],r=new Set,i=(e,t,i,a)=>{let o=e.replace(/\s*\(.*\)$/,``).trim();if(!Ov.has(o))return;let s=o+`|`+t;r.has(s)||(r.add(s),n.push({name:o,source:t,ok:i,note:a}))};for(let e of t.spec?.powerTables||[]){if(e.head.some(e=>/Téc\./.test(e)))continue;let n=/^NP$/.test(e.head[0]);for(let r of e.rows){let a=r[0],o=a===`Técnica`?0:parseInt(a),s=n?o===0||(t.npMax||0)>=o:t.L>=o,c=n?o===0?`Técnica`:`NP ${o}`:`${o}º nível`;r.slice(1).forEach((n,r)=>{let a=e.head[r+1];for(let e of n.split(/,\s*/))i(e,t.spec.name+(a&&a!==`Poderes`?` (${a})`:``),s,c)})}}let a=(e,t,n=!0,r=``)=>{for(let a of String(e).matchAll(kv))Av.has(a[1])||i(a[1],t,n,r)};if(t.lin){let e=`Linhagem `+t.lin.name+(t.linVariant?` · `+t.linVariant.name:``);if(t.linVariant?.grants)for(let n of t.linVariant.grants)i(n.name,e,t.L>=n.lvl,n.lvl+`º nível`);else for(let n of t.linBlocks){let r=n.md||(n.items||[]).map(e=>e.md).join(` `)||(n.rows||[]).flat().join(` `);for(let n of String(r).matchAll(kv)){if(Av.has(n[1]))continue;let a=r.slice(Math.max(r.lastIndexOf(`.`,n.index),r.lastIndexOf(`;`,n.index))+1,n.index),o=Number(a.match(/(?:no|do) (\d+)º/)?.[1])||1;i(n[1],e,t.L>=o,o+`º nível`)}}}for(let e of t.spec?.features||[])/Aprende|Conhece|ganha|Ganha/.test(e.md.join(` `))&&a(e.md.join(` `),t.spec.name+` · `+e.name,t.L>=e.lvl,`${e.lvl}º nível`);return n}var Mv={class:`params-editor`},Nv={class:`seg no-print`},Pv=[`onClick`],Fv={key:0,class:`w-note no-print`},Iv={key:1,class:`w-note no-print`},Lv={key:2,class:`w-note no-print`},Rv={key:3,class:`w-note no-print`},zv={class:`ptable`},Bv={key:0,class:`num`},Vv={class:`num`},Hv=[`disabled`,`onClick`],Uv=[`disabled`,`onClick`],Wv=[`onUpdate:modelValue`],Gv=[`onClick`],Kv=[`onClick`],qv={class:`num`},Jv={key:0,class:`num`},Yv={class:`num`},Xv={class:`pval`},Zv={class:`num`},Qv=[`onClick`],$v={class:`subbox`},ey={class:`w-row`},ty=[`value`],ny=[`value`,`disabled`],ry=[`onUpdate:modelValue`],iy=[`value`],ay={__name:`ParamsEditor`,props:{sheet:{type:Object,required:!0},d:{type:Object,required:!0},wizard:Boolean},setup(e,{expose:t}){let n=e,r=J(()=>n.sheet),i=[[`compra`,`Compra de pontos`],[`padrao`,`Arranjo padrão`],[`rolagem`,`Rolagem 4d6`],[`manual`,`Manual`]],a={8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9},o=J(()=>Object.values(r.value.base).reduce((e,t)=>e+(a[t]??99),0));t({pointsSpent:o});function s(e){r.value.metodo=e,e===`compra`&&(r.value.base={pot:8,ref:8,res:8,log:8,esp:8,mag:8}),e===`padrao`&&(r.value.base={pot:15,ref:14,res:13,log:12,esp:10,mag:8}),e===`rolagem`&&c()}function c(){let e=Array.from({length:6},()=>{let e=[1,2,3,4].map(()=>yl(6)).sort((e,t)=>t-e);return e[0]+e[1]+e[2]});r.value.rolados=e,G_.forEach((t,n)=>{r.value.base[t.id]=e[n]})}function l(e,t){let n=r.value.base[e]+t;r.value.metodo===`compra`&&(n<8||n>15||o.value-a[r.value.base[e]]+a[n]>27)||n<1||n>20||(r.value.base[e]=n)}function u(e,t){[r.value.base[e],r.value.base[t]]=[r.value.base[t],r.value.base[e]]}let d=(e,t)=>Dl(`1d20`+(t>=0?`+`:``)+t,{label:e}),f=J(()=>n.d.arch?.ficha[`Parâmetro principal`]||``);return(t,n)=>(V(),H(`div`,Mv,[W(`div`,Nv,[(V(),H(B,null,z(i,([e,t])=>W(`button`,{key:e,class:A([`chip`,{on:r.value.metodo===e}]),onClick:t=>s(e)},j(t),11,Pv)),64))]),r.value.metodo===`compra`?(V(),H(`p`,Fv,[n[3]||=K(`Pontos: `,-1),W(`b`,{style:k({color:o.value>27?`var(--red)`:o.value===27?`var(--green)`:`inherit`})},j(27-o.value),5),n[4]||=K(` restantes de 27 (valores de 8 a 15 antes da Linhagem).`,-1)])):q(``,!0),r.value.metodo===`padrao`?(V(),H(`p`,Iv,`Distribua 15, 14, 13, 12, 10 e 8: use as setas para trocar os valores entre Parâmetros.`)):q(``,!0),r.value.metodo===`rolagem`?(V(),H(`p`,Lv,[n[5]||=K(`Rolados: `,-1),W(`b`,null,j(r.value.rolados.join(` · `)),1),n[6]||=K(),W(`button`,{class:`btn sm ghost`,onClick:c},`Rolar de novo`)])):q(``,!0),e.wizard&&f.value?(V(),H(`p`,Rv,[n[7]||=K(`Parâmetro principal do Arquétipo: `,-1),W(`b`,null,j(f.value),1),n[8]||=K(`.`,-1)])):q(``,!0),W(`table`,zv,[W(`thead`,null,[W(`tr`,null,[n[9]||=W(`th`,null,`Parâmetro`,-1),n[10]||=W(`th`,{class:`num`},`Base`,-1),n[11]||=W(`th`,{class:`num`},`Linh.`,-1),e.wizard?q(``,!0):(V(),H(`th`,Bv,`Evol.`)),n[12]||=W(`th`,{class:`num`},`Valor`,-1),n[13]||=W(`th`,{class:`num`},`Mod.`,-1)])]),W(`tbody`,null,[(V(!0),H(B,null,z(F(G_),(t,i)=>(V(),H(`tr`,{key:t.id,class:A({prim:f.value.includes(t.name)})},[W(`td`,null,[G(Q,{name:F(wu)(t.name),size:18},null,8,[`name`]),n[14]||=K(),W(`b`,null,j(t.name),1)]),W(`td`,Vv,[r.value.metodo===`padrao`?(V(),H(B,{key:0},[W(`button`,{class:`mini no-print`,disabled:i===0,onClick:e=>u(t.id,F(G_)[i-1].id)},`▲`,8,Hv),K(j(r.value.base[t.id]),1),W(`button`,{class:`mini no-print`,disabled:i===5,onClick:e=>u(t.id,F(G_)[i+1].id)},`▼`,8,Uv)],64)):r.value.metodo===`manual`||r.value.metodo===`rolagem`?L((V(),H(`input`,{key:1,type:`number`,min:`1`,max:`20`,"onUpdate:modelValue":e=>r.value.base[t.id]=e,class:`tiny`},null,8,Wv)),[[Y,r.value.base[t.id],void 0,{number:!0}]]):(V(),H(B,{key:2},[W(`button`,{class:`mini no-print`,onClick:e=>l(t.id,-1)},`−`,8,Gv),K(j(r.value.base[t.id]),1),W(`button`,{class:`mini no-print`,onClick:e=>l(t.id,1)},`+`,8,Kv)],64))]),W(`td`,qv,j(e.d.bonus[t.id]?`+`+e.d.bonus[t.id]:``),1),e.wizard?q(``,!0):(V(),H(`td`,Jv,j(e.d.evoBonus[t.id]?`+`+e.d.evoBonus[t.id]:``),1)),W(`td`,Yv,[W(`b`,Xv,j(e.d.final[t.id]),1)]),W(`td`,Zv,[W(`button`,{class:`dice`,onClick:n=>d(`Teste de `+t.name,e.d.mod[t.id])},j(F(Sl)(e.d.mod[t.id])),9,Qv)])],2))),128))])]),W(`div`,$v,[n[19]||=W(`b`,null,`Aumento da Linhagem`,-1),W(`div`,ey,[L(W(`select`,{"onUpdate:modelValue":n[0]||=e=>r.value.bonusModo=e},[...n[15]||=[W(`option`,{value:`2-1`},`+2 em um e +1 em outro`,-1),W(`option`,{value:`1-1-1`},`+1 em três`,-1),W(`option`,{value:`2`},`Só +2 (Prodígio)`,-1)]],512),[[bo,r.value.bonusModo]]),r.value.bonusModo===`1-1-1`?(V(),H(B,{key:1},z(3,e=>L(W(`select`,{key:e,"onUpdate:modelValue":t=>r.value.bonus111[e-1]=t},[n[18]||=W(`option`,{value:``},`+1 em…`,-1),(V(!0),H(B,null,z(F(G_),e=>(V(),H(`option`,{key:e.id,value:e.id},j(e.name),9,iy))),128))],8,ry),[[bo,r.value.bonus111[e-1]]])),64)):(V(),H(B,{key:0},[L(W(`select`,{"onUpdate:modelValue":n[1]||=e=>r.value.bonus2=e},[n[16]||=W(`option`,{value:``},`+2 em…`,-1),(V(!0),H(B,null,z(F(G_),e=>(V(),H(`option`,{key:e.id,value:e.id},j(e.name),9,ty))),128))],512),[[bo,r.value.bonus2]]),r.value.bonusModo===`2-1`?L((V(),H(`select`,{key:0,"onUpdate:modelValue":n[2]||=e=>r.value.bonus1=e},[n[17]||=W(`option`,{value:``},`+1 em…`,-1),(V(!0),H(B,null,z(F(G_),e=>(V(),H(`option`,{key:e.id,value:e.id,disabled:e.id===r.value.bonus2},j(e.name),9,ny))),128))],512)),[[bo,r.value.bonus1]]):q(``,!0)],64))])])]))}},oy={class:`wizard`},sy={class:`stepper`},cy=[`onClick`,`title`],ly={class:`st-n`},uy={class:`st-t`},dy={class:`wz-kicker`},fy={key:0,class:`wz-body`},py={class:`sc-title`},my={class:`fld w4`},hy={class:`fgrid`,style:{"margin-top":`10px`}},gy={class:`fld`},_y={class:`lvl-pick`},vy={class:`lvl-row`},yy={class:`big-n`},by=[`value`],xy={class:`xp-out`},Sy={class:`w-note`},Cy={key:1,class:`wz-body`},wy={class:`sc-title`},Ty={class:`pick-grid origins`},Ey=[`onClick`],Dy=[`src`],Oy={class:`pc-lbl`},ky={class:`wz-sub`},Ay={class:`pick-grid`},jy=[`onClick`],My={class:`pc-ic`},Ny={class:`pc-txt`},Py={key:0,class:`var-badge`},Fy={key:0},Iy={class:`wz-sub`},Ly={class:`pick-grid`},Ry=[`onClick`],zy={class:`pc-txt`},By={key:0},Vy=[`innerHTML`],Hy={key:1,class:`wz-preview`},Uy=[`innerHTML`],Wy={key:0,class:`w-note`},Gy={key:2,class:`wz-body`},Ky={class:`sc-title`},qy={class:`pick-grid`},Jy=[`onClick`],Yy={class:`pc-ic`},Xy={class:`pc-txt`},Zy={class:`wz-sub`},Qy={class:`wz-counters`},$y={class:`stat`},eb={class:`stat`},tb={class:`stat`},nb={class:`sm`},rb={class:`w-note`},ib={class:`wz-sub`},ab={class:`w-note`},ob={class:`skill-pick`},sb=[`disabled`,`onClick`],cb={class:`wz-counters`,style:{"margin-top":`12px`}},lb={class:`stat`},ub={class:`sm`},db={class:`stat`},fb={class:`sm`},pb={key:0,class:`w-note`},mb={key:1,class:`pick-grid small`},hb=[`onClick`],gb={class:`spec-badge`},_b=[`innerHTML`],vb={class:`pc-txt`},yb={key:3,class:`wz-body`},bb={class:`sc-title`},xb={key:4,class:`wz-body`},Sb={class:`sc-title`},Cb={class:`pick-grid small`},wb=[`onClick`],Tb={class:`pc-txt`},Eb=[`innerHTML`],Db={key:5,class:`wz-body`},Ob={class:`sc-title`},kb={class:`wz-counters`},Ab={class:`stat`},jb={class:`stat`},Mb={class:`stat`},Nb={class:`w-note`},Pb={key:1,class:`wz-preview inline`},Fb={class:`wz-sub`},Ib={class:`granted-chips`},Lb=[`onClick`,`title`],Rb={class:`wz-sub`},zb={key:6,class:`wz-body`},Bb={class:`sc-title`},Vb={class:`wz-counters derived`},Hb={class:`stat big`},Ub={class:`stat big`},Wb={class:`stat`},Gb={class:`stat`},Kb={class:`stat`},qb={class:`stat`},Jb={key:0,class:`stat`},Yb={key:1,class:`stat`},Xb={class:`stat`},Zb={class:`stat`},Qb={class:`wz-sub`},$b={class:`skill-pick`},ex={class:`wz-sub`},tx={class:`skill-pick`},nx={key:0,class:`w-note`},rx={key:7,class:`wz-body`},ix={class:`sc-title`},ax={class:`wz-counters`},ox={class:`stat`},sx={key:0},cx={class:`stat`},lx={class:`stat`},ux={class:`sm`},dx={class:`wz-sub`},fx={class:`pick-grid small`},px=[`onClick`],mx={class:`pc-txt`},hx={class:`w-row`},gx={key:0,class:`fld`},_x=[`value`],vx={class:`fld chk`},yx={class:`wz-sub`},bx={class:`wz-mini`},xx={key:0,class:`warn`},Sx={class:`pick-grid tiny`},Cx=[`onClick`],wx={class:`pc-txt`},Tx=[`innerHTML`],Ex={class:`wz-sub`},Dx={class:`cart-list`},Ox=[`onClick`],kx={class:`btn sm`,type:`submit`},Ax={key:8,class:`wz-body`},jx={class:`sc-title`},Mx={class:`fgrid`},Nx={class:`fld w2`},Px={class:`fld w2`},Fx={class:`fld w4`},Ix={class:`fld w2`},Lx={class:`fld w2`},Rx={class:`fld w4`},zx={key:9,class:`wz-warn`},Bx={class:`wz-nav`},Vx=[`disabled`],Hx={class:`wz-pos`},Ux=[`disabled`],Wx=[`disabled`],Gx={__name:`SheetWizard`,props:{sheet:{type:Object,required:!0}},emits:[`done`],setup(e,{emit:t}){let n=e,r=t,i=J(()=>n.sheet),a=J(()=>Ev(i.value)),o=[{n:1,t:`Conceito`,i:`lightbulb-on`},{n:2,t:`Origem e Linhagem`,i:`dna`},{n:3,t:`Arquétipo e Especialização`,i:`account-group`},{n:4,t:`Parâmetros`,i:`account-star`},{n:5,t:`Antecedente`,i:`history`},{n:6,t:`Poderes`,i:`lightning-bolt`},{n:7,t:`Valores derivados`,i:`calculator-variant`},{n:8,t:`Créditos e equipamento`,i:`bag-personal`},{n:9,t:`Identidade`,i:`card-account-details-star`}],s=o.length,c=J({get:()=>Math.min(i.value.etapa||1,s),set:e=>{i.value.etapa=e}}),l=J(()=>o[c.value-1]);function u(e){i.value.nivel=Math.min(20,Math.max(1,Number(e)||1)),i.value.xp=wv[i.value.nivel-1]}let d=J(()=>a.value.L<=4?`protegem o bairro`:a.value.L<=10?`protegem a cidade`:a.value.L<=16?`protegem o país e o mundo`:`protegem a realidade`),f=J(()=>$_.find(e=>e.name===i.value.origem)||null);function p(e){i.value.origem!==e.name&&(i.value.origem=e.name,i.value.linhagem=``,i.value.linhagemVariante=``)}function m(e){i.value.linhagem!==e.name&&(i.value.linhagem=e.name,i.value.linhagemVariante=``)}let h=P(``),g=J(()=>{let e=h.value.trim().toLowerCase();return(f.value?.lineages||[]).filter(t=>!e||(t.name+` `+t.text).toLowerCase().includes(e))}),_=e=>{let t=e.blocks[0];return Fu((t.md||t.items?.[0]?.md||``).replace(/^\*\*[^*]+\*\*\s*/,``))},v={Humanos:`Humana`,Parahumanos:`Parahumana`,Mutantes:`Mutante`,Visitantes:`Visitante`};function y(e){i.value.arquetipo!==e.id&&(i.value.arquetipo=e.id,i.value.espec=``,i.value.periciasArq=[])}function b(e){let t=a.value.arch;if(!t||a.value.bg?.skills.includes(e))return;let n=i.value.periciasArq.indexOf(e);n>=0?i.value.periciasArq.splice(n,1):i.value.periciasArq.length<t.skillChoice.n&&i.value.periciasArq.push(e)}let x=e=>a.value.bg?.skills.includes(e)?`bg`:i.value.periciasArq.includes(e)?`on`:``,S=J(()=>a.value.arch?a.value.arch.skillChoice.n-i.value.periciasArq.length:0),C=J(()=>a.value.saves.filter(e=>e.prof).map(e=>e.name).join(` e `)||`—`),w=P(null),ee=J(()=>i.value.bonusModo===`1-1-1`?new Set(i.value.bonus111.filter(Boolean)).size===3:i.value.bonusModo===`2`?!!i.value.bonus2:!!(i.value.bonus2&&i.value.bonus1));function te(e){i.value.antecedente=e.name,i.value.periciasArq=i.value.periciasArq.filter(t=>!e.skills.includes(t))}let ne=J(()=>jv(i.value,a.value)),T=J(()=>ne.value.filter(e=>e.ok).map(e=>e.name)),re=J(()=>i.value.poderes.filter(e=>!T.value.includes(e)).map(e=>Kl.find(t=>t.n===e)).filter(Boolean)),ie=J(()=>re.value.filter(e=>e.lv===0).length),E=J(()=>re.value.filter(e=>e.lv>0).length);function ae(e){let t=i.value.poderes.indexOf(e.n);t>=0?i.value.poderes.splice(t,1):i.value.poderes.push(e.n)}let D=J(()=>a.value.tecnicasN),oe=J(()=>a.value.poderesN?Number(a.value.poderesN):a.value.preparados),O=J(()=>a.value.poderesN?`conhecidos`:a.value.preparados?`preparados`:``),se=J(()=>D.value!=null&&ie.value>D.value),ce=J(()=>oe.value!=null&&E.value>oe.value),le=J(()=>D.value==null?0:D.value-ie.value),k=J(()=>oe.value==null?0:oe.value-E.value),ue=e=>e>0?`faltam `+e:e<0?`remova `+-e:`completo`,de=J(()=>new Set(a.value.arch?.trainings||[])),fe=e=>/Pesada/.test(e.type)?`Blindagem Pesada`:`Blindagem Leve`,pe=J(()=>pv.find(e=>e.shield)),me=J(()=>Dv(i.value,a.value.arch,a.value.lin));function he(e){let t=i.value.armas.indexOf(e.name);t>=0?i.value.armas.splice(t,1):i.value.armas.push(e.name)}let ge=P(``),_e=P({name:``,price:``});function ve(){_e.value.name.trim()&&(i.value.itens.push({name:_e.value.name.trim(),price:Number(_e.value.price)||0}),_e.value={name:``,price:``})}let ye=e=>Number(String(e||``).replace(/\./g,``).match(/\d+/)?.[0]||0),be=J(()=>{let e=300;for(let t=2;t<=a.value.L;t++)e+=t<=4?100:t<=10?500:2500;return e}),xe=J(()=>i.value.armas.reduce((e,t)=>e+ye(mv.find(e=>e.name===t)?.price),0)+ye(pv.find(e=>e.name===i.value.armadura)?.price)+(i.value.escudo?ye(pe.value?.price):0)+i.value.itens.reduce((e,t)=>e+(Number(t.price)||0),0)),Se=J(()=>{let e=Object.fromEntries(o.map(e=>[e.n,[]]));return i.value.conceito?.trim()||e[1].push(`Resuma o conceito do herói em uma frase.`),i.value.linhagem?a.value.lin?.variants.length&&!a.value.linVariant&&e[2].push(`Escolha a variante da Linhagem.`):e[2].push(`Escolha a Origem e a Linhagem.`),i.value.arquetipo||e[3].push(`Escolha um Arquétipo.`),a.value.arch&&a.value.specUnlocked&&!i.value.espec&&e[3].push(`Escolha a Especialização (disponível desde o ${a.value.arch.specLevel}º nível).`),S.value>0&&e[3].push(`Faltam ${S.value} perícia(s) do Arquétipo.`),i.value.metodo===`compra`&&w.value&&w.value.pointsSpent<27&&e[4].push(`Ainda restam ${27-w.value.pointsSpent} pontos de compra.`),ee.value||e[4].push(`Aplique o aumento de Parâmetros da Linhagem.`),i.value.antecedente||e[5].push(`Escolha um Antecedente.`),S.value>0&&i.value.antecedente&&e[5].push(`O Antecedente repetiu perícia(s) do Arquétipo: escolha ${S.value} outra(s) no passo 3.`),se.value&&e[6].push(`Técnicas acima do limite: remova ${-le.value}.`),ce.value&&e[6].push(`Poderes ${O.value} acima do limite: remova ${-k.value}.`),a.value.pp&&le.value>0&&e[6].push(`Faltam ${le.value} Técnica(s).`),a.value.pp&&k.value>0&&e[6].push(`Faltam ${k.value} poder(es) ${O.value}.`),xe.value>be.value&&e[8].push(`Gastos acima dos créditos iniciais.`),i.value.nome.trim()||e[9].push(`Dê um nome heroico.`),e}),Ce=e=>e===2&&(!i.value.linhagem||a.value.lin?.variants.length&&!a.value.linVariant)||e===3&&!i.value.arquetipo||e===9&&!i.value.nome.trim();function we(e){for(let t=1;t<e;t++)if(Ce(t)){e=t;break}c.value=e;let t=document.querySelector(`.wizard`)?.getBoundingClientRect().top;t<0&&window.scrollBy({top:t-70})}function Te(){for(let e=1;e<=s;e++)if(Ce(e)){c.value=e;return}i.value.etapa=99,r(`done`)}let Ee=e=>e.map(e=>e.t===`p`?`<p>${Fu(e.md)}</p>`:e.t===`ul`||e.t===`ol`?`<ul>${e.items.map(e=>`<li>${Fu(e.md)}</li>`).join(``)}</ul>`:e.t===`table`?`<table class="ptable"><tr>${e.head.map(e=>`<th>${e}</th>`).join(``)}</tr>${e.rows.map(e=>`<tr>${e.map(e=>`<td>${Fu(e)}</td>`).join(``)}</tr>`).join(``)}</table>`:``).join(``);return(e,t)=>{let n=_r(`RouterLink`);return V(),H(`section`,oy,[W(`ol`,sy,[(V(),H(B,null,z(o,e=>W(`li`,{key:e.n,class:A({on:c.value===e.n,done:c.value>e.n})},[W(`button`,{onClick:t=>we(e.n),title:e.n+`. `+e.t},[W(`span`,ly,[c.value>e.n?(V(),U(Q,{key:0,name:`check`,size:18})):(V(),H(B,{key:1},[K(j(e.n),1)],64))]),W(`span`,uy,j(e.t),1)],8,cy)],2)),64))]),W(`p`,dy,[G(Q,{name:l.value.i,size:16},null,8,[`name`]),K(` Passo `+j(c.value)+` de `+j(F(s))+` · `,1),G(n,{to:`/criacao/criando-um-heroi`},{default:I(()=>[...t[21]||=[K(`Criando um herói (Cap. 5)`,-1)]]),_:1})]),c.value===1?(V(),H(`div`,fy,[W(`h2`,py,[G(Q,{name:`lightbulb-on`,size:26}),t[22]||=K(` Conceito`,-1)]),t[26]||=W(`p`,{class:`w-note`},`Em uma frase: quem é o herói e por que ele luta?`,-1),W(`label`,my,[t[23]||=K(`Conceito`,-1),L(W(`input`,{type:`text`,"onUpdate:modelValue":t[0]||=e=>i.value.conceito=e,placeholder:`Uma engenheira que transformou a armadura do pai num traje de combate.`,autofocus:``},null,512),[[Y,i.value.conceito]])]),W(`div`,hy,[W(`label`,gy,[t[24]||=K(`Jogador`,-1),L(W(`input`,{type:`text`,"onUpdate:modelValue":t[1]||=e=>i.value.jogador=e},null,512),[[Y,i.value.jogador]])])]),W(`div`,_y,[t[25]||=W(`label`,{class:`fld`},`Nível inicial`,-1),W(`div`,vy,[W(`button`,{class:`mini`,onClick:t[2]||=e=>u(i.value.nivel-1)},`−`),W(`b`,yy,j(i.value.nivel),1),W(`button`,{class:`mini`,onClick:t[3]||=e=>u(i.value.nivel+1)},`+`),W(`input`,{type:`range`,min:`1`,max:`20`,value:i.value.nivel,onInput:t[4]||=e=>u(e.target.value),"aria-label":`Nível`},null,40,by),W(`span`,xy,[G(Q,{name:`stairs-up`,size:18}),K(` `+j((i.value.xp||0).toLocaleString(`pt-BR`))+` XP`,1)])]),W(`p`,Sy,`O XP acompanha o nível automaticamente. No `+j(i.value.nivel)+`º nível, os heróis `+j(d.value)+`. O padrão é começar no 1º; combine com o Mestre.`,1)])])):q(``,!0),c.value===2?(V(),H(`div`,Cy,[W(`h2`,wy,[G(Q,{name:`dna`,size:26}),t[27]||=K(` Origem e Linhagem`,-1)]),t[29]||=W(`p`,{class:`w-note`},`Escolha de onde vêm os poderes e a Linhagem. Os traços ficam anotados na ficha.`,-1),W(`div`,Ty,[(V(!0),H(B,null,z(F($_),e=>(V(),H(`button`,{key:e.id,class:A([`pick-card img`,{on:i.value.origem===e.name}]),onClick:t=>p(e)},[W(`img`,{src:`./img/`+e.img,alt:``,loading:`lazy`},null,8,Dy),W(`span`,Oy,[G(Q,{name:F(yu)(e.name),size:22},null,8,[`name`]),K(` `+j(e.name),1),W(`small`,null,j(e.lineages.length)+` Linhagens`,1)])],10,Ey))),128))]),f.value?(V(),H(B,{key:0},[W(`h3`,ky,`Linhagem `+j(v[f.value.name]||``),1),L(W(`input`,{type:`search`,"onUpdate:modelValue":t[5]||=e=>h.value=e,placeholder:`Filtrar por nome ou traço (voo, veneno, Visão Noturna…)`,class:`wz-search`},null,512),[[Y,h.value]]),W(`div`,Ay,[(V(!0),H(B,null,z(g.value,e=>(V(),H(`button`,{key:e.name,class:A([`pick-card`,{on:i.value.linhagem===e.name}]),onClick:t=>m(e)},[W(`span`,My,[G(Q,{name:F(yu)(e.name)||`account`,size:22},null,8,[`name`])]),W(`span`,Ny,[W(`b`,null,[K(j(e.name),1),e.variants.length?(V(),H(`i`,Py,j(e.variants.length)+` variantes`,1)):q(``,!0)]),W(`small`,null,j(e.concept),1),e.movement!==`—`||e.darkvision?(V(),H(`em`,Fy,j([e.movement===`—`?``:e.movement,e.darkvision?`Visão Noturna `+e.darkvision+` m`:``].filter(Boolean).join(` · `)),1)):q(``,!0)])],10,jy))),128))]),a.value.lin?.variants.length?(V(),H(B,{key:0},[W(`h3`,Iy,[G(Q,{name:`source-branch`,size:20}),K(` Variante de `+j(a.value.lin.name)+` `,1),t[28]||=W(`small`,null,`escolha uma`,-1)]),W(`div`,Ly,[(V(!0),H(B,null,z(a.value.lin.variants,e=>(V(),H(`button`,{key:e.id,class:A([`pick-card variant`,{on:i.value.linhagemVariante===e.id}]),onClick:t=>i.value.linhagemVariante=e.id},[W(`span`,zy,[W(`b`,null,j(e.name),1),e.grants?(V(),H(`small`,By,j(e.grants.map(e=>e.lvl+`º `+e.name).join(` · `)),1)):(V(),H(`small`,{key:1,innerHTML:_(e)},null,8,Vy))])],10,Ry))),128))])],64)):q(``,!0),a.value.lin?(V(),H(`div`,Hy,[W(`h4`,null,[G(Q,{name:F(yu)(a.value.lin.name)||`account`,size:20},null,8,[`name`]),K(` Traços: `+j(a.value.lin.name),1),a.value.linVariant?(V(),H(B,{key:0},[K(` · `+j(a.value.linVariant.name),1)],64)):q(``,!0)]),W(`div`,{innerHTML:Ee(a.value.linBlocks)},null,8,Uy),a.value.lin.variants.length&&!a.value.linVariant?(V(),H(`p`,Wy,`Escolha uma variante acima para ver os traços dela.`)):q(``,!0)])):q(``,!0)],64)):q(``,!0)])):q(``,!0),c.value===3?(V(),H(`div`,Gy,[W(`h2`,Ky,[G(Q,{name:`account-group`,size:26}),t[30]||=K(` Arquétipo e Especialização`,-1)]),W(`div`,qy,[(V(!0),H(B,null,z(F(av),e=>(V(),H(`button`,{key:e.id,class:A([`pick-card`,{on:i.value.arquetipo===e.id}]),onClick:t=>y(e)},[W(`span`,Yy,[G(Q,{name:F(vu)(e.name),size:22},null,8,[`name`])]),W(`span`,Xy,[W(`b`,null,j(e.name),1),W(`small`,null,j(e.ficha[`Parâmetro principal`])+` · d`+j(e.die)+` · `+j(e.powerParam?`usa poderes`:`sem poderes`),1)])],10,Jy))),128))]),a.value.arch?(V(),H(B,{key:0},[W(`h3`,Zy,[G(Q,{name:`clipboard-list`,size:20}),t[31]||=K(` Variáveis`,-1)]),W(`div`,Qy,[W(`span`,$y,[G(Q,{name:`heart`,size:24}),t[32]||=W(`span`,null,`Pontos de Vida (1º)`,-1),W(`b`,null,j(3*a.value.arch.die),1),W(`small`,null,`3 × d`+j(a.value.arch.die)+` + mod. de Resistência`,1)]),W(`span`,eb,[G(Q,{name:`dice-d10`,size:24}),t[33]||=W(`span`,null,`Matriz de Vitalidade`,-1),W(`b`,null,`d`+j(a.value.arch.die),1)]),W(`span`,tb,[G(Q,{name:`shield-check`,size:24}),t[34]||=W(`span`,null,`Integridade`,-1),W(`b`,nb,j(C.value),1)])]),W(`p`,rb,`Características até o `+j(a.value.L)+`º nível: `+j(a.value.feats.map(e=>e.name).join(` · `)||`—`),1),W(`h3`,ib,[t[35]||=K(`Perícias `,-1),W(`small`,null,j(a.value.arch.skillChoice.n-S.value)+`/`+j(a.value.arch.skillChoice.n),1)]),W(`p`,ab,[K(`Escolha `+j(a.value.arch.skillChoice.n)+` entre as perícias do Arquétipo.`,1),a.value.bg?(V(),H(B,{key:0},[K(` As do Antecedente (verde) já contam.`)],64)):q(``,!0)]),W(`div`,ob,[(V(!0),H(B,null,z(F(q_),e=>(V(),H(`button`,{key:e.name,class:A([`chip`,{on:x(e.name)===`on`,bgk:x(e.name)===`bg`,dim:!a.value.arch.skillChoice.from.includes(e.name)&&!x(e.name)}]),disabled:!a.value.arch.skillChoice.from.includes(e.name)&&x(e.name)!==`on`,onClick:t=>b(e.name)},[G(Q,{name:`star-circle`,size:15}),K(j(e.name),1)],10,sb))),128))]),W(`div`,cb,[W(`span`,lb,[G(Q,{name:`star-box`,size:24}),t[36]||=W(`span`,null,`Treinamentos`,-1),W(`b`,ub,j(a.value.arch.trainings.join(`, `)||`—`),1)]),W(`span`,db,[G(Q,{name:`toolbox`,size:24}),t[37]||=W(`span`,null,`Ferramentas`,-1),W(`b`,fb,j(a.value.arch.tools),1)])]),t[38]||=W(`h3`,{class:`wz-sub`},`Especialização`,-1),a.value.specUnlocked?(V(),H(`div`,mb,[(V(!0),H(B,null,z(a.value.arch.specs,e=>(V(),H(`button`,{key:e.name,class:A([`pick-card`,{on:i.value.espec===e.name}]),onClick:t=>i.value.espec=e.name},[W(`span`,gb,[W(`span`,{innerHTML:F(du)(F(bu)(e.name)||`source-branch`)},null,8,_b)]),W(`span`,vb,[W(`b`,null,j(e.name),1),W(`small`,null,j(e.features.filter(e=>e.lvl<=a.value.L).map(e=>e.name).join(` · `)),1)])],10,hb))),128))])):(V(),H(`p`,pb,`A Especialização é escolhida no `+j(a.value.arch.specLevel)+`º nível. Seu herói está no `+j(a.value.L)+`º: ela fica liberada ao subir de nível.`,1))],64)):q(``,!0)])):q(``,!0),c.value===4?(V(),H(`div`,yb,[W(`h2`,bb,[G(Q,{name:`account-star`,size:26}),t[39]||=K(` Parâmetros`,-1)]),t[40]||=W(`p`,{class:`w-note`},`Gere os seis valores, distribua-os e aplique o aumento da Linhagem. Todos os jogadores da mesa usam o mesmo método.`,-1),G(ay,{ref_key:`params`,ref:w,sheet:i.value,d:a.value,wizard:``},null,8,[`sheet`,`d`])])):q(``,!0),c.value===5?(V(),H(`div`,xb,[W(`h2`,Sb,[G(Q,{name:`history`,size:26}),t[41]||=K(` Antecedente`,-1)]),t[42]||=W(`p`,{class:`w-note`},`O que o herói fazia antes de vestir a máscara.`,-1),W(`div`,Cb,[(V(!0),H(B,null,z(F(lv),e=>(V(),H(`button`,{key:e.name,class:A([`pick-card`,{on:i.value.antecedente===e.name}]),onClick:t=>te(e)},[W(`span`,Tb,[W(`b`,null,j(e.name),1),W(`small`,null,j(e.skills.join(`, `))+` · `+j(e.tool),1),W(`em`,null,j(e.feature),1)])],10,wb))),128))]),a.value.bg?(V(),H(`p`,{key:0,class:`wz-preview inline`,innerHTML:F(Fu)(a.value.bg.featureMd)},null,8,Eb)):q(``,!0)])):q(``,!0),c.value===6?(V(),H(`div`,Db,[W(`h2`,Ob,[G(Q,{name:`lightning-bolt`,size:26}),t[43]||=K(` Poderes`,-1)]),a.value.pp?(V(),H(B,{key:0},[W(`div`,kb,[W(`span`,Ab,[G(Q,{name:F(Cu)(a.value.npMax||0),size:24},null,8,[`name`]),t[44]||=W(`span`,null,`NP máximo`,-1),W(`b`,null,j(a.value.npMax??0),1),W(`small`,null,j(a.value.L)+`º nível`,1)]),D.value==null?q(``,!0):(V(),H(`span`,{key:0,class:A([`stat`,{bad:se.value,ok:le.value===0}])},[G(Q,{name:`numeric-0-circle`,size:24}),t[45]||=W(`span`,null,`Técnicas`,-1),W(`b`,null,j(ie.value)+`/`+j(D.value),1),W(`small`,null,j(ue(le.value)),1)],2)),oe.value==null?q(``,!0):(V(),H(`span`,{key:1,class:A([`stat`,{bad:ce.value,ok:k.value===0}])},[G(Q,{name:`sigma`,size:24}),W(`span`,null,`Poderes `+j(O.value),1),W(`b`,null,j(E.value)+`/`+j(oe.value),1),W(`small`,null,j(ue(k.value)),1)],2)),W(`span`,jb,[G(Q,{name:`gift`,size:24}),t[46]||=W(`span`,null,`Concedidos`,-1),W(`b`,null,j(T.value.length),1),t[47]||=W(`small`,null,`fora do limite`,-1)]),W(`span`,Mb,[G(Q,{name:`comment-check-outline`,size:24}),t[48]||=W(`span`,null,`CD de Poder`,-1),W(`b`,null,j(a.value.cdPoder),1)])]),W(`p`,Nb,[D.value==null?q(``,!0):(V(),H(B,{key:0},[t[49]||=K(`Escolha `,-1),W(`b`,null,j(D.value)+` Técnica(s)`,1),t[50]||=K(` (Nível de Poder 0)`,-1)],64)),D.value!=null&&oe.value!=null?(V(),H(B,{key:1},[K(` e `)],64)):q(``,!0),oe.value==null?q(``,!0):(V(),H(B,{key:2},[W(`b`,null,j(oe.value)+` poder(es) `+j(O.value),1),K(` de Nível de Poder 1 a `+j(a.value.npMax),1)],64)),t[51]||=K(`. `,-1),O.value===`preparados`?(V(),H(B,{key:3},[K(` Preparados: `+j(a.value.arch.power[`Poderes preparados`]),1)],64)):q(``,!0)])],64)):(V(),H(`p`,Pb,[t[52]||=K(`O `,-1),W(`b`,null,j(a.value.arch?.name||`Arquétipo`),1),t[53]||=K(` não tem Uso de Poderes: não há poderes a escolher. Os concedidos pela Linhagem ou pela Especialização aparecem abaixo.`,-1)])),ne.value.length?(V(),H(B,{key:2},[W(`h3`,Fb,[G(Q,{name:`gift`,size:20}),t[54]||=K(` Poderes concedidos`,-1)]),W(`div`,Ib,[(V(!0),H(B,null,z(ne.value,e=>(V(),H(`a`,{key:e.name+e.source,href:`#`,class:A([`chip`,{locked:!e.ok}]),onClick:Do(t=>F(Z).power=F(ql)(e.name),[`prevent`]),title:e.source+` · `+e.note},[G(Q,{name:e.ok?F(Cu)(F(Kl).find(t=>t.n===e.name)?.lv??0):`lock`,size:18},null,8,[`name`]),K(j(e.name),1),W(`small`,null,j(e.source)+` · `+j(e.note),1)],10,Lb))),128))])],64)):q(``,!0),a.value.pp?(V(),H(B,{key:3},[W(`h3`,Rb,[G(Q,{name:`book-open-page-variant`,size:20}),t[55]||=K(` Lista de poderes `,-1),W(`small`,null,`até o Nível de Poder `+j(a.value.npMax??0),1)]),G(i_,{"max-lv":a.value.npMax??0,picked:i.value.poderes,granted:T.value,onToggle:ae},null,8,[`max-lv`,`picked`,`granted`])],64)):q(``,!0)])):q(``,!0),c.value===7?(V(),H(`div`,zb,[W(`h2`,Bb,[G(Q,{name:`calculator-variant`,size:26}),t[56]||=K(` Valores derivados`,-1)]),t[71]||=W(`p`,{class:`w-note`},`Calculados automaticamente a partir das escolhas anteriores.`,-1),W(`div`,Vb,[W(`span`,Hb,[G(Q,{name:`heart`,size:28}),t[57]||=W(`span`,null,`Pontos de Vida`,-1),W(`b`,null,j(a.value.pvMax),1),W(`small`,null,[K(`3 × `+j(a.value.die)+` `+j(F(Sl)(a.value.mod.res)),1),a.value.L>1?(V(),H(B,{key:0},[K(` + `+j(a.value.L-1)+` × (`+j(a.value.die)+` `+j(F(Sl)(a.value.mod.res))+`)`,1)],64)):q(``,!0)])]),W(`span`,Ub,[G(Q,{name:`shield-half-full`,size:28}),t[58]||=W(`span`,null,`Classe de Armadura`,-1),W(`b`,null,j(a.value.ca),1),W(`small`,null,j(a.value.caFormula),1)]),W(`span`,Wb,[G(Q,{name:`run-fast`,size:24}),t[59]||=W(`span`,null,`Iniciativa`,-1),W(`b`,null,j(F(Sl)(a.value.iniciativa)),1),t[60]||=W(`small`,null,`mod. de Reflexos`,-1)]),W(`span`,Gb,[G(Q,{name:`shoe-print`,size:24}),t[61]||=W(`span`,null,`Deslocamento`,-1),W(`b`,null,j(a.value.desloc)+` m`,1),W(`small`,null,j(a.value.extraMov||`—`),1)]),W(`span`,Kb,[G(Q,{name:`medal`,size:24}),t[62]||=W(`span`,null,`Proficiência`,-1),W(`b`,null,`+`+j(a.value.prof),1)]),W(`span`,qb,[G(Q,{name:`dice-d10`,size:24}),t[63]||=W(`span`,null,`Matrizes de Vitalidade`,-1),W(`b`,null,j(a.value.L)+`d`+j(a.value.die),1)]),a.value.pp?(V(),H(`span`,Jb,[G(Q,{name:`comment-check-outline`,size:24}),t[64]||=W(`span`,null,`CD de Poder`,-1),W(`b`,null,j(a.value.cdPoder),1),W(`small`,null,`8 + `+j(a.value.prof)+` `+j(F(Sl)(a.value.mod[a.value.pp])),1)])):q(``,!0),a.value.pp?(V(),H(`span`,Yb,[G(Q,{name:`target`,size:24}),t[65]||=W(`span`,null,`Ataque de Poder`,-1),W(`b`,null,j(F(Sl)(a.value.atqPoder)),1)])):q(``,!0),W(`span`,Xb,[G(Q,{name:`eye`,size:24}),t[66]||=W(`span`,null,`Percepção passiva`,-1),W(`b`,null,j(a.value.passiva),1)]),W(`span`,Zb,[G(Q,{name:`flash`,size:24}),t[67]||=W(`span`,null,`Cargas Heroicas`,-1),W(`b`,null,j(a.value.cargas),1),t[68]||=W(`small`,null,`5 + metade do nível`,-1)])]),W(`h3`,Qb,[G(Q,{name:`shield-check`,size:20}),t[69]||=K(` Testes de Integridade`,-1)]),W(`div`,$b,[(V(!0),H(B,null,z(a.value.saves,e=>(V(),H(`span`,{key:e.id,class:A([`chip`,{on:e.prof}])},[G(Q,{name:F(wu)(e.name),size:15},null,8,[`name`]),K(j(e.name)+` `+j(F(Sl)(e.total)),1)],2))),128))]),W(`h3`,ex,[G(Q,{name:`star-circle`,size:20}),t[70]||=K(` Perícias proficientes`,-1)]),W(`div`,tx,[(V(!0),H(B,null,z(a.value.skills.filter(e=>e.prof),e=>(V(),H(`span`,{key:e.name,class:A([`chip`,e.fromBg?`bgk`:`on`])},j(e.name)+` `+j(F(Sl)(e.total)),3))),128)),a.value.skills.some(e=>e.prof)?q(``,!0):(V(),H(`span`,nx,`Nenhuma ainda.`))]),t[72]||=W(`p`,{class:`w-note`},`A CA muda se o herói vestir armadura no próximo passo. Ataques com armas também aparecem depois da escolha do equipamento.`,-1)])):q(``,!0),c.value===8?(V(),H(`div`,rx,[W(`h2`,ix,[G(Q,{name:`bag-personal`,size:26}),t[73]||=K(` Créditos e equipamento`,-1)]),W(`div`,ax,[W(`span`,ox,[G(Q,{name:`wallet`,size:24}),t[74]||=W(`span`,null,`Créditos iniciais`,-1),W(`b`,null,j(be.value.toLocaleString(`pt-BR`)),1),a.value.L>1?(V(),H(`small`,sx,`300 cr + valor por nível acima do 1º`)):q(``,!0)]),W(`span`,{class:A([`stat`,{bad:xe.value>be.value}])},[G(Q,{name:`credit-card`,size:24}),t[75]||=W(`span`,null,`Restantes`,-1),W(`b`,null,j((be.value-xe.value).toLocaleString(`pt-BR`)),1)],2),W(`span`,cx,[G(Q,{name:`shield-half-full`,size:24}),t[76]||=W(`span`,null,`CA`,-1),W(`b`,null,j(a.value.ca),1),W(`small`,null,j(a.value.caFormula),1)]),W(`span`,lx,[G(Q,{name:`star-box`,size:24}),t[77]||=W(`span`,null,`Treinamentos`,-1),W(`b`,ux,j(a.value.arch?.trainings.join(`, `)||`—`),1)])]),W(`h3`,dx,[G(Q,{name:`shield`,size:20}),t[78]||=K(` Armadura`,-1)]),W(`div`,fx,[W(`button`,{class:A([`pick-card`,{on:!i.value.armadura}]),onClick:t[6]||=e=>i.value.armadura=``},[...t[79]||=[W(`span`,{class:`pc-txt`},[W(`b`,null,`Sem armadura`),W(`small`,null,`Defesa sem armadura`)],-1)]],2),(V(!0),H(B,null,z(F(pv).filter(e=>!e.shield),e=>(V(),H(`button`,{key:e.name,class:A([`pick-card`,{on:i.value.armadura===e.name,warnc:!de.value.has(fe(e))}]),onClick:t=>i.value.armadura=e.name},[W(`span`,mx,[W(`b`,null,j(e.name),1),W(`small`,null,`CA `+j(e.base)+j(e.addRef?` + REF`+(e.maxRef?` (máx. `+e.maxRef+`)`:``):``)+` · `+j(e.price),1),W(`em`,null,j(e.type)+j(e.stealth===`Desvantagem`?` · Furtividade com Desvantagem`:``)+j(de.value.has(fe(e))?``:` · sem Treinamento`),1)])],10,px))),128))]),W(`div`,hx,[!i.value.armadura&&me.value.length>1?(V(),H(`label`,gx,[t[80]||=K(`Defesa sem armadura`,-1),L(W(`select`,{"onUpdate:modelValue":t[7]||=e=>i.value.defesa=e},[(V(!0),H(B,null,z(me.value,e=>(V(),H(`option`,{key:e.id,value:e.id},j(e.label),9,_x))),128))],512),[[bo,i.value.defesa]])])):q(``,!0),W(`label`,vx,[L(W(`input`,{type:`checkbox`,"onUpdate:modelValue":t[8]||=e=>i.value.escudo=e},null,512),[[vo,i.value.escudo]]),K(` Escudo (+2 na CA · `+j(pe.value?.price)+`)`,1)])]),W(`h3`,yx,[G(Q,{name:`pistol`,size:20}),t[81]||=K(` Armas`,-1)]),L(W(`input`,{type:`search`,"onUpdate:modelValue":t[9]||=e=>ge.value=e,placeholder:`Filtrar armas…`,class:`wz-search`},null,512),[[Y,ge.value]]),(V(),H(B,null,z([`Combate Corpo a Corpo`,`Armas de Fogo`,`Armamento Pesado`],e=>W(`div`,{key:e},[W(`h4`,bx,[G(Q,{name:e===`Armas de Fogo`?`pistol`:e===`Armamento Pesado`?`bomb`:`sword-cross`,size:16},null,8,[`name`]),K(` `+j(e)+` `,1),de.value.has(e)?q(``,!0):(V(),H(`small`,xx,`sem Treinamento`))]),W(`div`,Sx,[(V(!0),H(B,null,z(F(mv).filter(t=>t.training===e&&(!ge.value||t.name.toLowerCase().includes(ge.value.toLowerCase()))),e=>(V(),H(`button`,{key:e.name,class:A([`pick-card`,{on:i.value.armas.includes(e.name)}]),onClick:t=>he(e)},[W(`span`,wx,[W(`b`,null,j(e.name),1),W(`small`,{innerHTML:F(Fu)(e.dmg,{noPowers:!0})},null,8,Tx),W(`em`,null,j(e.props)+` · `+j(e.price),1)])],10,Cx))),128))])])),64)),W(`h3`,Ex,[G(Q,{name:`toolbox`,size:20}),t[82]||=K(` Equipamento geral e ferramentas`,-1)]),W(`ul`,Dx,[(V(!0),H(B,null,z(i.value.itens,(e,t)=>(V(),H(`li`,{key:t},[W(`span`,null,j(e.name),1),W(`span`,null,[K(j((e.price||0).toLocaleString(`pt-BR`))+` cr `,1),W(`button`,{class:`mini`,onClick:e=>i.value.itens.splice(t,1)},`×`,8,Ox)])]))),128))]),W(`form`,{class:`w-row`,onSubmit:Do(ve,[`prevent`])},[L(W(`input`,{type:`text`,"onUpdate:modelValue":t[10]||=e=>_e.value.name=e,placeholder:`Item (ex.: Kit de invasão)`},null,512),[[Y,_e.value.name]]),L(W(`input`,{type:`number`,"onUpdate:modelValue":t[11]||=e=>_e.value.price=e,placeholder:`cr`,style:{width:`90px`}},null,512),[[Y,_e.value.price]]),W(`button`,kx,[G(F(ul),{size:14}),t[83]||=K(` Adicionar`,-1)]),F(Z).cart.length?(V(),H(`button`,{key:0,type:`button`,class:`btn sm ghost`,onClick:t[12]||=e=>{i.value.itens.push(...F(Z).cart.map(e=>({...e}))),F(Z).cart.splice(0)}},`Trazer carrinho do Cap. 6 (`+j(F(Z).cart.length)+`)`,1)):(V(),U(n,{key:1,to:`/equipamento`,class:`btn sm ghost`},{default:I(()=>[...t[84]||=[K(`Ver tabelas do Cap. 6`,-1)]]),_:1}))],32)])):q(``,!0),c.value===9?(V(),H(`div`,Ax,[W(`h2`,jx,[G(Q,{name:`card-account-details-star`,size:26}),t[85]||=K(` Identidade`,-1)]),W(`div`,Mx,[W(`label`,Nx,[t[86]||=K(`Nome heroico`,-1),L(W(`input`,{type:`text`,"onUpdate:modelValue":t[13]||=e=>i.value.nome=e,placeholder:`O nome que a imprensa e os vilões usam.`,autofocus:``},null,512),[[Y,i.value.nome]])]),W(`label`,Px,[t[87]||=K(`Identidade civil`,-1),L(W(`input`,{type:`text`,"onUpdate:modelValue":t[14]||=e=>i.value.civil=e,placeholder:`Nome civil · secreta ou pública`},null,512),[[Y,i.value.civil]])]),W(`label`,Fx,[t[88]||=K(`Aparência e uniforme`,-1),L(W(`textarea`,{"onUpdate:modelValue":t[15]||=e=>i.value.aparencia=e,rows:`2`},null,512),[[Y,i.value.aparencia]])]),W(`label`,Ix,[t[89]||=K(`Motivação`,-1),L(W(`textarea`,{"onUpdate:modelValue":t[16]||=e=>i.value.motivacao=e,rows:`2`,placeholder:`Vingança, dever, culpa, fé, curiosidade, redenção…`},null,512),[[Y,i.value.motivacao]])]),W(`label`,Lx,[t[90]||=K(`Código pessoal`,-1),L(W(`textarea`,{"onUpdate:modelValue":t[17]||=e=>i.value.codigo=e,rows:`2`,placeholder:`A linha que o herói não cruza.`},null,512),[[Y,i.value.codigo]])]),W(`label`,Rx,[t[91]||=K(`Vínculos`,-1),L(W(`textarea`,{"onUpdate:modelValue":t[18]||=e=>i.value.vinculos=e,rows:`2`,placeholder:`Duas pessoas importantes fora do uniforme.`},null,512),[[Y,i.value.vinculos]])])])])):q(``,!0),Se.value[c.value].length?(V(),H(`ul`,zx,[(V(!0),H(B,null,z(Se.value[c.value],e=>(V(),H(`li`,{key:e},j(e),1))),128))])):q(``,!0),W(`div`,Bx,[W(`button`,{class:`btn ghost`,disabled:c.value===1,onClick:t[19]||=e=>we(c.value-1)},[G(F(Zc),{size:16}),t[92]||=K(` Voltar`,-1)],8,Vx),W(`span`,Hx,j(c.value)+`/`+j(F(s))+` · `+j(l.value.t),1),c.value<F(s)?(V(),H(`button`,{key:0,class:`btn`,onClick:t[20]||=e=>we(c.value+1),disabled:Ce(c.value)},[t[93]||=K(`Próximo `,-1),G(F(Qc),{size:16})],8,Ux)):(V(),H(`button`,{key:1,class:`btn`,onClick:Te,disabled:Ce(c.value)},[G(F(el),{size:16}),t[94]||=K(` Concluir e ver ficha`,-1)],8,Wx))])])}}},Kx={class:`page-wrap wide sheet-page`},qx={class:`article`},Jx={class:`chap-head sheet-head`},Yx={class:`kicker`},Xx={class:`chap-title`},Zx={class:`title-ic`},Qx={class:`chap-sub`},$x={class:`sheet-list no-print`},eS={class:`sheet-list-actions`},tS={key:0,class:`sheet-empty`},nS={key:0},rS={key:1},iS={class:`sheet-actions no-print`},aS={key:1,class:`sheet-full`},oS={class:`sheet-card`},sS={class:`sc-title`},cS={class:`fgrid`},lS={class:`fld w2`},uS={class:`fld w2`},dS={class:`fld`},fS={class:`fld`},pS={class:`fld`},mS={class:`fgrid`},hS={class:`fld`},gS={class:`fld`},_S=[`disabled`],vS={key:0,class:`fld`},yS=[`value`],bS={class:`fld`},xS=[`value`],SS={class:`fld`},CS={key:0},wS=[`disabled`],TS={value:``},ES={class:`fld`},DS={key:0,class:`w-note`},OS={class:`sheet-stats`},kS={class:`stat big`},AS={class:`stat big`},jS={class:`stat`},MS={class:`stat`},NS={key:0},PS={class:`stat`},FS={class:`stat`},IS={class:`stat`},LS={class:`stat`},RS={class:`stat`},zS={class:`stat`},BS={class:`stat`},VS={class:`sheet-cols`},HS={class:`sheet-card`},US={class:`sc-title`},WS={key:0,class:`subbox`},GS={class:`lvtag`},KS=[`value`,`onChange`],qS=[`onUpdate:modelValue`],JS=[`value`],YS=[`onUpdate:modelValue`],XS=[`value`],ZS=[`onUpdate:modelValue`],QS={class:`sheet-card`},$S={class:`sc-title`},eC={class:`checks`},tC=[`disabled`,`onClick`,`title`],nC=[`onClick`],rC={class:`sc-title`},iC={key:0,class:`w-note`},aC={class:`checks`},oC=[`onClick`,`title`],sC=[`onClick`],cC=[`onClick`],lC={class:`sheet-card`},uC={class:`sc-title`},dC={class:`fgrid`},fC={class:`fld w2`},pC={key:0,class:`fld w2`},mC=[`value`],hC={class:`fld chk`},gC={class:`fld`},_C={class:`fld`},vC={class:`w-note`},yC={key:0,class:`ptable`},bC={key:0,class:`warn`},xC={class:`num`},SC=[`onClick`],CC=[`onClick`],wC=[`innerHTML`],TC={class:`small`},EC=[`onClick`],DC={class:`w-row no-print`},OC=[`label`],kC={class:`w-note`,style:{margin:`0`}},AC={key:0,class:`sheet-card`},jC={class:`sc-title`},MC={class:`w-note`},NC={class:`power-list`},PC=[`onClick`],FC=[`onClick`],IC={class:`w-row no-print`},LC={key:0,class:`power-pick no-print`},RC=[`onClick`],zC={key:0,class:`w-note`},BC={key:1,class:`subbox`},VC=[`innerHTML`],HC={class:`sheet-card`},UC={class:`sc-title`},WC={key:0,class:`feat`},GC={key:0,class:`feat-b`},KC={key:1,class:`feat`},qC=[`innerHTML`],JC=[`onClick`],YC={class:`lvtag`},XC=[`innerHTML`],ZC={key:0,class:`feat-b`},QC=[`onClick`],$C={class:`lvtag`},ew=[`innerHTML`],tw=[`innerHTML`],nw=[`onClick`],rw=[`innerHTML`],iw={class:`w-row no-print`},aw={key:2,class:`w-note`},ow={class:`sheet-cols`},sw={class:`sheet-card`},cw={class:`sc-title`},lw={class:`w-note`},uw={class:`cart-list`},dw=[`onClick`],fw={class:`btn sm`,type:`submit`},pw={class:`sheet-card`},mw={class:`sc-title`},hw={class:`fgrid`},gw={class:`fld`},_w={class:`fld`},vw={class:`fld`},yw=[`max`],bw={class:`hpbar`},xw={class:`w-row no-print`},Sw={class:`fld`},Cw={key:0,class:`w-note`},ww={class:`seg wrap`},Tw=[`onClick`,`title`],Ew={key:1,class:`stab`,style:{"margin-top":`10px`}},Dw=[`onClick`],Ow=[`onClick`],kw={class:`sheet-card`},Aw={class:`sc-title`},jw={class:`fgrid`},Mw={class:`fld w4`},Nw={class:`fld w2`},Pw={class:`fld w2`},Fw={class:`fld w2`},Iw={class:`fld w2`},Lw={class:`fld w4`},Rw=zc({history:ic(),routes:[{path:`/`,name:`home`,component:nm},{path:`/ficha/:id?`,name:`ficha`,component:{__name:`SheetView`,setup(e){let t=Vc(),n=Bc(),r=J(()=>_v.find(e=>e.id===t.params.id)||null),i=J(()=>r.value?Ev(r.value):null),a=J(()=>{let e=r.value?.etapa;return e>=1&&e<=9}),o=()=>window.scrollTo({top:0});function s(){r.value.etapa=1,o()}function c(){let e=bv();n.push(`/ficha/`+e.id)}function l(){let e=xv(r.value);n.push(`/ficha/`+e.id)}function u(){confirm(`Excluir a ficha "${r.value.nome||`sem nome`}"? Esta ação não pode ser desfeita.`)&&(Sv(r.value.id),n.push(`/ficha`))}function d(){let e=new Blob([JSON.stringify(r.value,null,2)],{type:`application/json`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=`ficha-${ql(r.value.nome||`heroi`)}.json`,t.click(),URL.revokeObjectURL(t.href)}let f=P(null);function p(e){let t=e.target.files?.[0];t&&(t.text().then(e=>{try{let t=Cv(JSON.parse(e));n.push(`/ficha/`+t.id)}catch{alert(`Arquivo de ficha inválido.`)}}),e.target.value=``)}let m=J(()=>$_.find(e=>e.name===r.value?.origem)?.lineages||[]),h=(e,t)=>t&&e[0]===t[0]&&e[1]!==t[1]&&r.value;R(()=>[r.value?.id,r.value?.origem],(e,t)=>{h(e,t)&&!m.value.find(e=>e.name===r.value.linhagem)&&(r.value.linhagem=``)}),R(()=>[r.value?.id,r.value?.linhagem],(e,t)=>{h(e,t)&&!i.value?.lin?.variants.some(e=>e.id===r.value.linhagemVariante)&&(r.value.linhagemVariante=``)}),R(()=>[r.value?.id,r.value?.arquetipo],(e,t)=>{h(e,t)&&(r.value.espec=``,r.value.periciasArq=[])}),R(()=>r.value?.nivel,e=>{let t=r.value;if(!t||!e)return;let n=Math.min(20,Math.max(1,e));Tv(t.xp||0)!==n&&(t.xp=wv[n-1])}),R(()=>r.value?.xp,e=>{let t=r.value;if(!t||e==null)return;let n=Tv(e);n!==t.nivel&&(t.nivel=n)});function g(e){let t=r.value,n=i.value.arch;if(e.fromBg)return;let a=t.periciasArq.indexOf(e.name),o=t.periciasExtra.indexOf(e.name);a>=0?t.periciasArq.splice(a,1):o>=0?t.periciasExtra.splice(o,1):n&&n.skillChoice.from.includes(e.name)&&t.periciasArq.length<n.skillChoice.n?t.periciasArq.push(e.name):t.periciasExtra.push(e.name)}let _=e=>e.fromBg?`Antecedente`:r.value.periciasArq.includes(e.name)?`Arquétipo`:r.value.periciasExtra.includes(e.name)?`Outra fonte`:``;function v(e,t){let n=e.indexOf(t);n>=0?e.splice(n,1):e.push(t)}let y=P(``),b=J(()=>{if(!i.value?.pp)return[];let e=i.value.npMax??0,t=y.value.trim().toLowerCase();return Kl.filter(n=>n.lv<=e&&!r.value.poderes.includes(n.n)&&(!t||n.n.toLowerCase().includes(t))).slice(0,40)}),x=J(()=>r.value?r.value.poderes.map(e=>Kl.find(t=>t.n===e)).filter(Boolean).sort((e,t)=>e.lv-t.lv||e.n.localeCompare(t.n,`pt`)):[]),S=J(()=>x.value.filter(e=>e.lv===0).length),C=J(()=>x.value.filter(e=>e.lv>0).length),w=P(``);function ee(){w.value&&=(r.value.armas.push(w.value),``)}let te=P({name:``,price:``});function ne(){te.value.name.trim()&&(r.value.itens.push({name:te.value.name.trim(),price:Number(te.value.price)||0}),te.value={name:``,price:``})}function T(){for(let e of Z.cart)r.value.itens.push({...e});Z.cart.splice(0)}let re=J(()=>{let e=300;for(let t=2;t<=(i.value?.L||1);t++)e+=t<=4?100:t<=10?500:2500;return e}),ie=J(()=>r.value?.itens.reduce((e,t)=>e+(Number(t.price)||0),0)||0),E=J({get:()=>r.value.pvAtual??i.value.pvMax,set:e=>{r.value.pvAtual=Math.max(0,Math.min(i.value.pvMax,Number(e)||0))}}),ae=[`—`,`Desvantagem em Testes de Parâmetro`,`Deslocamento reduzido à metade`,`Desvantagem em Jogadas de Ataque e Testes de Integridade`,`PV máximos reduzidos à metade`,`Deslocamento reduzido a 0`,`O herói morre`],D=e=>rm(e.blocks),oe=e=>e.filter(Boolean).map(e=>e.startsWith(`- `)?`<ul>`+e.split(`
`).map(e=>`<li>${Fu(e.replace(/^- /,``))}</li>`).join(``)+`</ul>`:`<p>${Fu(e)}</p>`).join(``),O=J(()=>i.value?.lin?rm(i.value.linBlocks):[]),se=P({}),ce=e=>{se.value[e]=!se.value[e]};function le(e,t){Dl(`1d20`+(t>=0?`+`:``)+t,{label:e})}let ue=e=>e.nome||`Herói sem nome`,de=()=>window.print(),fe=e=>[ov[e.arquetipo]?.name,e.linhagem,`Nível `+e.nivel].filter(Boolean).join(` · `);return(e,t)=>{let n=_r(`RouterLink`);return V(),H(`div`,Kx,[W(`article`,qx,[W(`header`,Jx,[W(`div`,null,[W(`span`,Yx,[G(Q,{name:`card-account-details-star`,size:15}),t[42]||=K(` Ferramenta · Capítulo 5`,-1)])]),W(`h1`,Xx,[W(`span`,Zx,[G(Q,{name:`card-account-details-star`,size:56})]),t[43]||=K(`Ficha de personagem`,-1)]),W(`p`,Qx,[t[45]||=K(`Monte o herói seguindo o `,-1),G(n,{to:`/criacao/criando-um-heroi`},{default:I(()=>[...t[44]||=[K(`passo a passo do Capítulo 5`,-1)]]),_:1}),t[46]||=K(`. Os valores derivados são calculados automaticamente e a ficha fica salva neste navegador.`,-1)])]),W(`div`,$x,[W(`div`,eS,[W(`button`,{class:`btn`,onClick:c},[G(F(ul),{size:16}),t[47]||=K(` Nova ficha`,-1)]),W(`button`,{class:`btn ghost`,onClick:t[0]||=e=>f.value.click()},[G(F(gl),{size:16}),t[48]||=K(` Importar`,-1)]),W(`input`,{ref_key:`fileIn`,ref:f,type:`file`,accept:`application/json`,hidden:``,onChange:p},null,544)]),(V(!0),H(B,null,z(F(_v),e=>(V(),U(n,{key:e.id,to:`/ficha/`+e.id,class:A([`sheet-chip`,{on:r.value?.id===e.id}])},{default:I(()=>[G(Q,{name:F(vu)(F(ov)[e.arquetipo]?.name)||`account`,size:20},null,8,[`name`]),W(`span`,null,[W(`b`,null,j(ue(e)),1),W(`small`,null,j(fe(e)),1)])]),_:2},1032,[`to`,`class`]))),128))]),r.value?(V(),H(B,{key:1},[W(`div`,iS,[W(`button`,{class:`btn sm ghost`,onClick:l},[G(F(nl),{size:14}),t[50]||=K(` Duplicar`,-1)]),W(`button`,{class:`btn sm ghost`,onClick:d},[G(F(il),{size:14}),t[51]||=K(` Exportar`,-1)]),W(`button`,{class:`btn sm ghost`,onClick:de},[G(F(dl),{size:14}),t[52]||=K(` Imprimir`,-1)]),a.value?(V(),H(`button`,{key:1,class:`btn sm ghost`,onClick:t[1]||=e=>r.value.etapa=99},[G(Q,{name:`card-account-details`,size:14}),t[54]||=K(` Pular para a ficha completa`,-1)])):(V(),H(`button`,{key:0,class:`btn sm ghost`,onClick:s},[G(Q,{name:`format-list-numbered`,size:14}),t[53]||=K(` Refazer em etapas`,-1)])),W(`button`,{class:`btn sm ghost danger`,onClick:u},[G(F(hl),{size:14}),t[55]||=K(` Excluir`,-1)])]),a.value?(V(),U(Gx,{key:r.value.id,sheet:r.value,onDone:o},null,8,[`sheet`])):(V(),H(`div`,aS,[W(`section`,oS,[W(`h2`,sS,[G(Q,{name:`account-plus`,size:24}),t[56]||=K(` Herói`,-1)]),W(`div`,cS,[W(`label`,lS,[t[57]||=K(`Nome heroico`,-1),L(W(`input`,{type:`text`,"onUpdate:modelValue":t[2]||=e=>r.value.nome=e,placeholder:`Ex.: Manto Noturno`},null,512),[[Y,r.value.nome]])]),W(`label`,uS,[t[58]||=K(`Identidade civil`,-1),L(W(`input`,{type:`text`,"onUpdate:modelValue":t[3]||=e=>r.value.civil=e,placeholder:`Secreta ou pública`},null,512),[[Y,r.value.civil]])]),W(`label`,dS,[t[59]||=K(`Jogador`,-1),L(W(`input`,{type:`text`,"onUpdate:modelValue":t[4]||=e=>r.value.jogador=e},null,512),[[Y,r.value.jogador]])]),W(`label`,fS,[t[60]||=K(`Nível`,-1),L(W(`input`,{type:`number`,min:`1`,max:`20`,"onUpdate:modelValue":t[5]||=e=>r.value.nivel=e},null,512),[[Y,r.value.nivel,void 0,{number:!0}]])]),W(`label`,pS,[t[61]||=K(`XP`,-1),L(W(`input`,{type:`number`,min:`0`,step:`100`,"onUpdate:modelValue":t[6]||=e=>r.value.xp=e},null,512),[[Y,r.value.xp,void 0,{number:!0}]])])]),W(`div`,mS,[W(`label`,hS,[W(`span`,null,[G(Q,{name:F(yu)(r.value.origem)||`dna`,size:16},null,8,[`name`]),t[62]||=K(` Origem`,-1)]),L(W(`select`,{"onUpdate:modelValue":t[7]||=e=>r.value.origem=e},[t[63]||=W(`option`,{value:``},`Escolha…`,-1),(V(!0),H(B,null,z(F($_),e=>(V(),H(`option`,{key:e.id},j(e.name),1))),128))],512),[[bo,r.value.origem]])]),W(`label`,gS,[W(`span`,null,[G(Q,{name:F(yu)(r.value.linhagem)||`account-group`,size:16},null,8,[`name`]),t[64]||=K(` Linhagem`,-1)]),L(W(`select`,{"onUpdate:modelValue":t[8]||=e=>r.value.linhagem=e,disabled:!m.value.length},[t[65]||=W(`option`,{value:``},`Escolha…`,-1),(V(!0),H(B,null,z(m.value,e=>(V(),H(`option`,{key:e.name},j(e.name),1))),128))],8,_S),[[bo,r.value.linhagem]])]),i.value.lin?.variants.length?(V(),H(`label`,vS,[W(`span`,null,[G(Q,{name:`source-branch`,size:16}),t[66]||=K(` Variante`,-1)]),L(W(`select`,{"onUpdate:modelValue":t[9]||=e=>r.value.linhagemVariante=e},[t[67]||=W(`option`,{value:``},`Escolha…`,-1),(V(!0),H(B,null,z(i.value.lin.variants,e=>(V(),H(`option`,{key:e.id,value:e.id},j(e.name),9,yS))),128))],512),[[bo,r.value.linhagemVariante]])])):q(``,!0),W(`label`,bS,[W(`span`,null,[G(Q,{name:F(vu)(i.value.arch?.name)||`account-group`,size:16},null,8,[`name`]),t[68]||=K(` Arquétipo`,-1)]),L(W(`select`,{"onUpdate:modelValue":t[10]||=e=>r.value.arquetipo=e},[t[69]||=W(`option`,{value:``},`Escolha…`,-1),(V(!0),H(B,null,z(F(av),e=>(V(),H(`option`,{key:e.id,value:e.id},j(e.name),9,xS))),128))],512),[[bo,r.value.arquetipo]])]),W(`label`,SS,[W(`span`,null,[G(Q,{name:`source-branch`,size:16}),t[70]||=K(` Especialização `,-1),i.value.arch?(V(),H(`small`,CS,`(`+j(i.value.arch.specLevel)+`º nível)`,1)):q(``,!0)]),L(W(`select`,{"onUpdate:modelValue":t[11]||=e=>r.value.espec=e,disabled:!i.value.arch||!i.value.specUnlocked},[W(`option`,TS,j(i.value.arch&&!i.value.specUnlocked?`Disponível no ${i.value.arch.specLevel}º nível`:`Escolha…`),1),(V(!0),H(B,null,z(i.value.arch?.specs||[],e=>(V(),H(`option`,{key:e.name},j(e.name),1))),128))],8,wS),[[bo,r.value.espec]])]),W(`label`,ES,[W(`span`,null,[G(Q,{name:`history`,size:16}),t[71]||=K(` Antecedente`,-1)]),L(W(`select`,{"onUpdate:modelValue":t[12]||=e=>r.value.antecedente=e},[t[72]||=W(`option`,{value:``},`Escolha…`,-1),(V(!0),H(B,null,z(F(lv),e=>(V(),H(`option`,{key:e.name},j(e.name),1))),128))],512),[[bo,r.value.antecedente]])])]),i.value.lin?(V(),H(`p`,DS,[K(j(i.value.lin.concept)+` `,1),G(n,{to:`/origens/`+F(ql)(i.value.lin.origin)+`/`+F(ql)(i.value.lin.name)},{default:I(()=>[...t[73]||=[K(`Ver no livro`,-1)]]),_:1},8,[`to`])])):q(``,!0)]),W(`section`,OS,[W(`div`,kS,[G(Q,{name:`heart`,size:22}),t[74]||=W(`span`,null,`PV máx.`,-1),W(`b`,null,j(i.value.pvMax),1)]),W(`div`,AS,[G(Q,{name:`shield-half-full`,size:22}),t[75]||=W(`span`,null,`CA`,-1),W(`b`,null,j(i.value.ca),1)]),W(`div`,jS,[G(Q,{name:`timer-sand`,size:20}),t[76]||=W(`span`,null,`Iniciativa`,-1),W(`b`,null,[W(`button`,{class:`dice`,onClick:t[13]||=e=>le(`Iniciativa`,i.value.iniciativa)},j(F(Sl)(i.value.iniciativa)),1)])]),W(`div`,MS,[G(Q,{name:`run-fast`,size:20}),t[77]||=W(`span`,null,`Deslocamento`,-1),W(`b`,null,j(String(i.value.desloc).replace(`.`,`,`))+` m`,1),i.value.extraMov?(V(),H(`small`,NS,j(i.value.extraMov),1)):q(``,!0)]),W(`div`,PS,[G(Q,{name:`star-circle`,size:20}),t[78]||=W(`span`,null,`Proficiência`,-1),W(`b`,null,`+`+j(i.value.prof),1)]),W(`div`,FS,[G(Q,{name:`flash`,size:20}),t[79]||=W(`span`,null,`Cargas Heroicas`,-1),W(`b`,null,j(i.value.cargas-r.value.cargasGastas)+`/`+j(i.value.cargas),1)]),W(`div`,IS,[G(Q,{name:`heart-pulse`,size:20}),t[80]||=W(`span`,null,`Matrizes`,-1),W(`b`,null,j(i.value.L)+`d`+j(i.value.die),1)]),W(`div`,LS,[G(Q,{name:`eye`,size:20}),t[81]||=W(`span`,null,`Percepção passiva`,-1),W(`b`,null,j(i.value.passiva),1)]),i.value.pp?(V(),H(B,{key:0},[W(`div`,RS,[G(Q,{name:`comment-check-outline`,size:20}),t[82]||=W(`span`,null,`CD de Poder`,-1),W(`b`,null,j(i.value.cdPoder),1)]),W(`div`,zS,[G(Q,{name:`fire`,size:20}),t[83]||=W(`span`,null,`Ataque de Poder`,-1),W(`b`,null,[W(`button`,{class:`dice`,onClick:t[14]||=e=>le(`Ataque de Poder`,i.value.atqPoder)},j(F(Sl)(i.value.atqPoder)),1)])]),W(`div`,BS,[G(Q,{name:F(Cu)(i.value.npMax||0),size:22},null,8,[`name`]),t[84]||=W(`span`,null,`NP máximo`,-1),W(`b`,null,j(i.value.npMax??`—`),1)])],64)):q(``,!0)]),W(`div`,VS,[W(`section`,HS,[W(`h2`,US,[G(Q,{name:`account-star`,size:24}),t[85]||=K(` Parâmetros`,-1)]),G(ay,{sheet:r.value,d:i.value},null,8,[`sheet`,`d`]),i.value.evoLevels.length?(V(),H(`div`,WS,[W(`b`,null,[G(Q,{name:`arrow-up-bold-circle`,size:16}),t[86]||=K(` Evoluções`,-1)]),(V(!0),H(B,null,z(i.value.evoLevels,e=>(V(),H(`div`,{key:e,class:`w-row evo`},[W(`span`,GS,j(e)+`º`,1),W(`select`,{value:r.value.evolucoes[e]?.tipo||``,onChange:t=>r.value.evolucoes[e]={...r.value.evolucoes[e]||{},tipo:t.target.value}},[...t[87]||=[W(`option`,{value:``},`Escolha…`,-1),W(`option`,{value:`+2`},`+2 em um Parâmetro`,-1),W(`option`,{value:`+1+1`},`+1 em dois`,-1),W(`option`,{value:`talento`},`Talento`,-1)]],40,KS),r.value.evolucoes[e]?.tipo===`+2`||r.value.evolucoes[e]?.tipo===`+1+1`?(V(),H(B,{key:0},[L(W(`select`,{"onUpdate:modelValue":t=>r.value.evolucoes[e].a=t},[t[88]||=W(`option`,{value:``},`…`,-1),(V(!0),H(B,null,z(F(G_),e=>(V(),H(`option`,{key:e.id,value:e.id},j(e.name),9,JS))),128))],8,qS),[[bo,r.value.evolucoes[e].a]]),r.value.evolucoes[e].tipo===`+1+1`?L((V(),H(`select`,{key:0,"onUpdate:modelValue":t=>r.value.evolucoes[e].b=t},[t[89]||=W(`option`,{value:``},`…`,-1),(V(!0),H(B,null,z(F(G_),e=>(V(),H(`option`,{key:e.id,value:e.id},j(e.name),9,XS))),128))],8,YS)),[[bo,r.value.evolucoes[e].b]]):q(``,!0)],64)):q(``,!0),r.value.evolucoes[e]?.tipo===`talento`?L((V(),H(`select`,{key:1,"onUpdate:modelValue":t=>r.value.evolucoes[e].talento=t},[t[90]||=W(`option`,{value:``},`Talento…`,-1),(V(!0),H(B,null,z(F(dv),e=>(V(),H(`option`,{key:e.name},j(e.name),1))),128))],8,ZS)),[[bo,r.value.evolucoes[e].talento]]):q(``,!0)]))),128))])):q(``,!0)]),W(`section`,QS,[W(`h2`,$S,[G(Q,{name:`shield-star`,size:24}),t[91]||=K(` Testes de Integridade`,-1)]),W(`div`,eC,[(V(!0),H(B,null,z(i.value.saves,e=>(V(),H(`div`,{key:e.id,class:A([`check-row`,{on:e.prof}])},[W(`button`,{class:A([`pip-btn`,{on:e.prof}]),disabled:i.value.arch?.saves.includes(e.id),onClick:t=>v(r.value.integridadeExtra,e.id),title:i.value.arch?.saves.includes(e.id)?`Proficiência do Arquétipo`:`Marcar proficiência (outra fonte)`},null,10,tC),G(Q,{name:F(wu)(e.name),size:16},null,8,[`name`]),K(` `+j(e.name)+` `,1),W(`button`,{class:`dice right`,onClick:t=>le(`Integridade (`+e.name+`)`,e.total)},j(F(Sl)(e.total)),9,nC)],2))),128))]),W(`h2`,rC,[G(Q,{name:`star-circle`,size:24}),t[92]||=K(` Perícias`,-1)]),i.value.arch?(V(),H(`p`,iC,[K(`Arquétipo: `+j(r.value.periciasArq.length)+`/`+j(i.value.arch.skillChoice.n)+` escolhidas`,1),i.value.bg?(V(),H(B,{key:0},[K(` · Antecedente: `+j(i.value.bg.skills.join(`, `)),1)],64)):q(``,!0),t[93]||=K(`. Clique no círculo para marcar; duplo clique em ★ para Especialista.`,-1)])):q(``,!0),W(`div`,aC,[(V(!0),H(B,null,z(i.value.skills,e=>(V(),H(`div`,{key:e.name,class:A([`check-row`,{on:e.prof,opt:i.value.arch?.skillChoice.from.includes(e.name)&&!e.prof}])},[W(`button`,{class:A([`pip-btn`,{on:e.prof,bg:e.fromBg}]),onClick:t=>g(e),title:_(e)||`Marcar proficiência`},null,10,oC),W(`span`,null,[K(j(e.name)+` `,1),W(`small`,null,j(F(G_).find(t=>t.id===e.param).abbr),1)]),e.prof?(V(),H(`button`,{key:0,class:A([`exp-btn`,{on:e.exp}]),onClick:t=>v(r.value.especialista,e.name),title:`Especialista (dobra o Bônus de Proficiência)`},`★`,10,sC)):q(``,!0),W(`button`,{class:`dice right`,onClick:t=>le(e.name,e.total)},j(F(Sl)(e.total)),9,cC)],2))),128))])])]),W(`section`,lC,[W(`h2`,uC,[G(Q,{name:`sword-cross`,size:24}),t[94]||=K(` Defesa e ataques`,-1)]),W(`div`,dC,[W(`label`,fC,[W(`span`,null,[G(Q,{name:`shield`,size:16}),t[95]||=K(` Armadura`,-1)]),L(W(`select`,{"onUpdate:modelValue":t[15]||=e=>r.value.armadura=e},[t[96]||=W(`option`,{value:``},`Nenhuma`,-1),(V(!0),H(B,null,z(F(pv).filter(e=>!e.shield),e=>(V(),H(`option`,{key:e.name},j(e.name)+` — `+j(e.type),1))),128))],512),[[bo,r.value.armadura]])]),r.value.armadura?q(``,!0):(V(),H(`label`,pC,[t[97]||=W(`span`,null,`Defesa sem armadura`,-1),L(W(`select`,{"onUpdate:modelValue":t[16]||=e=>r.value.defesa=e},[(V(!0),H(B,null,z(F(Dv)(r.value,i.value.arch,i.value.lin),e=>(V(),H(`option`,{key:e.id,value:e.id},j(e.label),9,mC))),128))],512),[[bo,r.value.defesa]])])),W(`label`,hC,[L(W(`input`,{type:`checkbox`,"onUpdate:modelValue":t[17]||=e=>r.value.escudo=e},null,512),[[vo,r.value.escudo]]),t[98]||=K(` Escudo (+2)`,-1)]),W(`label`,gC,[t[99]||=K(`Bônus de CA`,-1),L(W(`input`,{type:`number`,"onUpdate:modelValue":t[18]||=e=>r.value.caBonus=e},null,512),[[Y,r.value.caBonus,void 0,{number:!0}]])]),W(`label`,_C,[t[100]||=K(`Deslocamento extra (m)`,-1),L(W(`input`,{type:`number`,step:`1.5`,"onUpdate:modelValue":t[19]||=e=>r.value.deslocExtra=e},null,512),[[Y,r.value.deslocExtra,void 0,{number:!0}]])])]),W(`p`,vC,`CA `+j(i.value.ca)+` = `+j(i.value.caFormula)+j(i.value.shieldOk?` + escudo`:``)+j(r.value.caBonus?` + `+r.value.caBonus:``)+`. Treinamentos: `+j(i.value.arch?.trainings.join(`, `)||`—`)+`.`,1),i.value.attacks.length?(V(),H(`table`,yC,[t[102]||=W(`thead`,null,[W(`tr`,null,[W(`th`,null,`Arma`),W(`th`,{class:`num`},`Ataque`),W(`th`,null,`Dano`),W(`th`,null,`Propriedades`),W(`th`)])],-1),W(`tbody`,null,[(V(!0),H(B,null,z(i.value.attacks,(e,n)=>(V(),H(`tr`,{key:e.name+n},[W(`td`,null,[W(`b`,null,j(e.name),1),e.trained?q(``,!0):(V(),H(`small`,bC,` sem Treinamento`))]),W(`td`,xC,[W(`button`,{class:`dice`,onClick:t=>le(`Ataque · `+e.name,e.bonus)},j(F(Sl)(e.bonus)),9,SC)]),W(`td`,null,[W(`button`,{class:`dice`,onClick:t=>F(Dl)(e.dmgExpr,{label:`Dano · `+e.name,adv:0})},j(e.dmgExpr),9,CC),t[101]||=K(),W(`span`,{innerHTML:F(Fu)(e.type,{noPowers:!0})},null,8,wC)]),W(`td`,TC,j(e.props),1),W(`td`,null,[W(`button`,{class:`mini no-print`,onClick:e=>r.value.armas.splice(n,1)},`×`,8,EC)])]))),128))])])):q(``,!0),W(`div`,DC,[L(W(`select`,{"onUpdate:modelValue":t[20]||=e=>w.value=e},[t[103]||=W(`option`,{value:``},`Adicionar arma…`,-1),(V(),H(B,null,z([`Combate Corpo a Corpo`,`Armas de Fogo`,`Armamento Pesado`],e=>W(`optgroup`,{key:e,label:e},[(V(!0),H(B,null,z(F(mv).filter(t=>t.training===e),e=>(V(),H(`option`,{key:e.name},j(e.name),1))),128))],8,OC)),64))],512),[[bo,w.value]]),W(`button`,{class:`btn sm`,onClick:ee},[G(F(ul),{size:14}),t[104]||=K(` Adicionar`,-1)]),W(`span`,kC,`Golpe desarmado: 1 + POT (`+j(1+i.value.mod.pot)+`) de Dano de Concussão.`,1)])]),i.value.pp?(V(),H(`section`,AC,[W(`h2`,jC,[G(Q,{name:`lightning-bolt`,size:24}),t[105]||=K(` Poderes`,-1)]),W(`p`,MC,[t[106]||=K(`Parâmetro de poder: `,-1),W(`b`,null,j(F(G_).find(e=>e.id===i.value.pp).name),1),K(` · NP máximo `+j(i.value.npMax)+` `,1),i.value.tecnicas?(V(),H(B,{key:0},[K(` · Técnicas: `+j(S.value)+`/`+j(i.value.tecnicas),1)],64)):q(``,!0),i.value.poderesN?(V(),H(B,{key:1},[K(` · Poderes conhecidos: `+j(C.value)+`/`+j(i.value.poderesN),1)],64)):i.value.arch?.power[`Poderes preparados`]?(V(),H(B,{key:2},[K(` · Poderes preparados: `+j(C.value)+` (`+j(i.value.arch.power[`Poderes preparados`])+`)`,1)],64)):q(``,!0)]),W(`div`,NC,[(V(!0),H(B,null,z(x.value,e=>(V(),H(`div`,{key:e.n,class:`power-row`},[G(Q,{name:F(Cu)(e.lv),size:24,class:`lvi`},null,8,[`name`]),G(Q,{name:F(xu)(e.cat),size:18},null,8,[`name`]),W(`a`,{href:`#`,class:`pw`,onClick:Do(t=>F(Z).power=F(ql)(e.n),[`prevent`])},j(e.n),9,PC),W(`small`,null,[K(j(e.tempo)+` · `+j(e.alc),1),e.lv?(V(),H(B,{key:0},[K(` · Sobrecarga CD `+j(11+e.lv),1)],64)):q(``,!0)]),W(`button`,{class:`mini no-print`,onClick:t=>r.value.poderes.splice(r.value.poderes.indexOf(e.n),1)},`×`,8,FC)]))),128))]),W(`div`,IC,[L(W(`input`,{type:`search`,"onUpdate:modelValue":t[21]||=e=>y.value=e,placeholder:`Buscar poder até o NP máximo…`},null,512),[[Y,y.value]])]),y.value?(V(),H(`div`,LC,[(V(!0),H(B,null,z(b.value,e=>(V(),H(`button`,{key:e.n,class:`chip`,onClick:t=>{r.value.poderes.push(e.n),y.value=``}},[G(Q,{name:F(Cu)(e.lv),size:20},null,8,[`name`]),K(j(e.n),1)],8,RC))),128)),b.value.length?q(``,!0):(V(),H(`span`,zC,`Nenhum poder encontrado até o NP `+j(i.value.npMax)+`.`,1))])):q(``,!0),i.value.spec?.powerTables.length?(V(),H(`div`,BC,[W(`b`,null,`Poderes da Especialização (`+j(i.value.spec.name)+`)`,1),(V(!0),H(B,null,z(i.value.spec.powerTables,(e,t)=>(V(),H(`div`,{key:t,innerHTML:`<table class=ptable><tr>`+e.head.map(e=>`<th>`+e+`</th>`).join(``)+`</tr>`+e.rows.map(e=>`<tr>`+e.map(e=>`<td>`+F(Fu)(e)+`</td>`).join(``)+`</tr>`).join(``)+`</table>`},null,8,VC))),128))])):q(``,!0)])):q(``,!0),W(`section`,HC,[W(`h2`,UC,[G(Q,{name:`format-list-numbered`,size:24}),t[107]||=K(` Características`,-1)]),i.value.lin?(V(),H(`div`,WC,[W(`button`,{class:`feat-h`,onClick:t[22]||=e=>ce(`lin`)},[G(Q,{name:F(yu)(i.value.lin.name)||`dna`,size:18},null,8,[`name`]),t[108]||=K(),W(`b`,null,[K(`Linhagem: `+j(i.value.lin.name),1),i.value.linVariant?(V(),H(B,{key:0},[K(` · `+j(i.value.linVariant.name),1)],64)):q(``,!0)]),W(`small`,null,j(i.value.lin.origin),1),G(F(tl),{size:16,class:A({rot:se.value.lin})},null,8,[`class`])]),se.value.lin?(V(),H(`div`,GC,[G(O_,{nodes:O.value},null,8,[`nodes`])])):q(``,!0)])):q(``,!0),i.value.bg?(V(),H(`div`,KC,[W(`button`,{class:`feat-h`,onClick:t[23]||=e=>ce(`bg`)},[G(Q,{name:`history`,size:18}),t[109]||=K(),W(`b`,null,`Antecedente: `+j(i.value.bg.name),1),W(`small`,null,j(i.value.bg.skills.join(`, `))+` · `+j(i.value.bg.tool),1),G(F(tl),{size:16,class:A({rot:se.value.bg})},null,8,[`class`])]),se.value.bg?(V(),H(`div`,{key:0,class:`feat-b`,innerHTML:oe([i.value.bg.featureMd])},null,8,qC)):q(``,!0)])):q(``,!0),(V(!0),H(B,null,z(i.value.feats,e=>(V(),H(`div`,{key:e.name,class:`feat`},[W(`button`,{class:`feat-h`,onClick:t=>ce(e.name)},[W(`span`,YC,j(e.lvl)+`º`,1),t[110]||=K(),W(`b`,null,j(e.name.replace(/\s*\(.*$/,``)),1),e.ch?(V(),H(`span`,{key:0,innerHTML:F(Fu)(`{ch `+e.ch+`}`)},null,8,XC)):q(``,!0),G(F(tl),{size:16,class:A({rot:se.value[e.name]})},null,8,[`class`])],8,JC),se.value[e.name]?(V(),H(`div`,ZC,[G(O_,{nodes:D(e)},null,8,[`nodes`])])):q(``,!0)]))),128)),(V(!0),H(B,null,z(i.value.specFeats,e=>(V(),H(`div`,{key:`s`+e.name,class:`feat spec`},[W(`button`,{class:`feat-h`,onClick:t=>ce(`s`+e.name)},[W(`span`,$C,j(e.lvl)+`º`,1),t[111]||=K(),W(`b`,null,j(e.name),1),W(`small`,null,j(i.value.spec.name),1),e.ch?(V(),H(`span`,{key:0,innerHTML:F(Fu)(`{ch `+e.ch+`}`)},null,8,ew)):q(``,!0),G(F(tl),{size:16,class:A({rot:se.value[`s`+e.name]})},null,8,[`class`])],8,QC),se.value[`s`+e.name]?(V(),H(`div`,{key:0,class:`feat-b`,innerHTML:oe(e.md)},null,8,tw)):q(``,!0)]))),128)),(V(!0),H(B,null,z([...i.value.talents,...r.value.talentosExtra],e=>(V(),H(`div`,{key:`t`+e,class:`feat`},[W(`button`,{class:`feat-h`,onClick:t=>ce(`t`+e)},[G(Q,{name:`star-four-points`,size:18}),t[112]||=K(),W(`b`,null,`Talento: `+j(e),1),G(F(tl),{size:16,class:A({rot:se.value[`t`+e]})},null,8,[`class`])],8,nw),se.value[`t`+e]?(V(),H(`div`,{key:0,class:`feat-b`,innerHTML:oe([F(dv).find(t=>t.name===e)?.md])},null,8,rw)):q(``,!0)]))),128)),W(`div`,iw,[W(`select`,{onChange:t[24]||=e=>{e.target.value&&r.value.talentosExtra.push(e.target.value),e.target.value=``}},[t[113]||=W(`option`,{value:``},`Adicionar talento de outra fonte (ex.: Linhagem)…`,-1),(V(!0),H(B,null,z(F(dv),e=>(V(),H(`option`,{key:e.name},j(e.name),1))),128))],32),r.value.talentosExtra.length?(V(),H(`button`,{key:0,class:`btn sm ghost`,onClick:t[25]||=e=>r.value.talentosExtra.pop()},`Remover último`)):q(``,!0)]),!i.value.arch&&!i.value.lin?(V(),H(`p`,aw,`Escolha Linhagem e Arquétipo para ver as características.`)):q(``,!0)]),W(`div`,ow,[W(`section`,sw,[W(`h2`,cw,[G(Q,{name:`bag-personal`,size:24}),t[114]||=K(` Equipamento`,-1)]),W(`p`,lw,[t[115]||=K(`Créditos iniciais: `,-1),W(`b`,null,j(re.value.toLocaleString(`pt-BR`))+` cr`,1),K(` · gastos: `+j(ie.value.toLocaleString(`pt-BR`))+` cr · restam `,1),W(`b`,{style:k({color:ie.value>re.value?`var(--red)`:`inherit`})},j((re.value-ie.value).toLocaleString(`pt-BR`))+` cr`,5)]),W(`ul`,uw,[(V(!0),H(B,null,z(r.value.itens,(e,t)=>(V(),H(`li`,{key:t},[W(`span`,null,j(e.name),1),W(`span`,null,[K(j((e.price||0).toLocaleString(`pt-BR`))+` cr `,1),W(`button`,{class:`mini no-print`,onClick:e=>r.value.itens.splice(t,1)},`×`,8,dw)])]))),128))]),W(`form`,{class:`w-row no-print`,onSubmit:Do(ne,[`prevent`])},[L(W(`input`,{type:`text`,"onUpdate:modelValue":t[26]||=e=>te.value.name=e,placeholder:`Item`},null,512),[[Y,te.value.name]]),L(W(`input`,{type:`number`,"onUpdate:modelValue":t[27]||=e=>te.value.price=e,placeholder:`cr`,style:{width:`80px`}},null,512),[[Y,te.value.price]]),W(`button`,fw,[G(F(ul),{size:14})]),F(Z).cart.length?(V(),H(`button`,{key:0,type:`button`,class:`btn sm ghost`,onClick:T},`Trazer carrinho do Cap. 6 (`+j(F(Z).cart.length)+`)`,1)):(V(),U(n,{key:1,to:`/equipamento`,class:`btn sm ghost`},{default:I(()=>[...t[116]||=[K(`Abrir loja (Cap. 6)`,-1)]]),_:1}))],32),L(W(`textarea`,{"onUpdate:modelValue":t[28]||=e=>r.value.notasEquip=e,rows:`3`,placeholder:`Outras posses, itens especiais, Vínculos…`},null,512),[[Y,r.value.notasEquip]])]),W(`section`,pw,[W(`h2`,mw,[G(Q,{name:`heart-pulse`,size:24}),t[117]||=K(` Em jogo`,-1)]),W(`div`,hw,[W(`label`,gw,[t[118]||=K(`PV atuais`,-1),L(W(`input`,{type:`number`,"onUpdate:modelValue":t[29]||=e=>E.value=e},null,512),[[Y,E.value,void 0,{number:!0}]])]),W(`label`,_w,[t[119]||=K(`PV temporários`,-1),L(W(`input`,{type:`number`,min:`0`,"onUpdate:modelValue":t[30]||=e=>r.value.pvTemp=e},null,512),[[Y,r.value.pvTemp,void 0,{number:!0}]])]),W(`label`,vw,[t[120]||=K(`Cargas gastas`,-1),L(W(`input`,{type:`number`,min:`0`,max:i.value.cargas,"onUpdate:modelValue":t[31]||=e=>r.value.cargasGastas=e},null,8,yw),[[Y,r.value.cargasGastas,void 0,{number:!0}]])])]),W(`div`,bw,[W(`div`,{style:k({width:E.value/i.value.pvMax*100+`%`})},null,4)]),W(`div`,xw,[W(`button`,{class:`btn sm ghost`,onClick:t[32]||=e=>--E.value},`−1 PV`),W(`button`,{class:`btn sm ghost`,onClick:t[33]||=e=>E.value+=1},`+1 PV`),W(`button`,{class:`btn sm ghost`,onClick:t[34]||=e=>{r.value.pvAtual=null,r.value.cargasGastas=0,r.value.exaustao=Math.max(0,r.value.exaustao-1),r.value.estab={s:0,f:0}}},`Recuperação`)]),W(`label`,Sw,[K(`Exaustão (`+j(r.value.exaustao)+`) `,1),L(W(`input`,{type:`range`,min:`0`,max:`6`,"onUpdate:modelValue":t[35]||=e=>r.value.exaustao=e},null,512),[[Y,r.value.exaustao,void 0,{number:!0}]])]),r.value.exaustao?(V(),H(`p`,Cw,[(V(!0),H(B,null,z(r.value.exaustao,e=>(V(),H(`span`,{key:e},[K(j(e)+`: `+j(ae[e]),1),t[121]||=W(`br`,null,null,-1)]))),128))])):q(``,!0),t[124]||=W(`b`,{class:`lbl-sm`},`Condições`,-1),W(`div`,ww,[(V(!0),H(B,null,z(F(iu),(e,t)=>(V(),H(`button`,{key:t,class:A([`chip`,{on:r.value.condicoes.includes(t)}]),onClick:e=>v(r.value.condicoes,t),title:e.def},j(e.name),11,Tw))),128))]),E.value===0?(V(),H(`div`,Ew,[W(`div`,null,[t[122]||=K(`Sucessos `,-1),(V(),H(B,null,z(3,e=>W(`i`,{key:`s`+e,class:A({s:e<=r.value.estab.s}),onClick:t=>r.value.estab.s=r.value.estab.s===e?e-1:e},null,10,Dw)),64))]),W(`div`,null,[t[123]||=K(`Falhas `,-1),(V(),H(B,null,z(3,e=>W(`i`,{key:`f`+e,class:A({f:e<=r.value.estab.f}),onClick:t=>r.value.estab.f=r.value.estab.f===e?e-1:e},null,10,Ow)),64))])])):q(``,!0)])]),W(`section`,kw,[W(`h2`,Aw,[G(Q,{name:`card-account-details-star`,size:24}),t[125]||=K(` Identidade heroica`,-1)]),W(`div`,jw,[W(`label`,Mw,[t[126]||=K(`Conceito`,-1),L(W(`input`,{type:`text`,"onUpdate:modelValue":t[36]||=e=>r.value.conceito=e,placeholder:`Quem é o herói e por que ele luta?`},null,512),[[Y,r.value.conceito]])]),W(`label`,Nw,[t[127]||=K(`Motivação`,-1),L(W(`textarea`,{"onUpdate:modelValue":t[37]||=e=>r.value.motivacao=e,rows:`2`,placeholder:`Vingança, dever, culpa, fé, curiosidade, redenção…`},null,512),[[Y,r.value.motivacao]])]),W(`label`,Pw,[t[128]||=K(`Código`,-1),L(W(`textarea`,{"onUpdate:modelValue":t[38]||=e=>r.value.codigo=e,rows:`2`,placeholder:`A linha que o herói não cruza.`},null,512),[[Y,r.value.codigo]])]),W(`label`,Fw,[t[129]||=K(`Vínculos`,-1),L(W(`textarea`,{"onUpdate:modelValue":t[39]||=e=>r.value.vinculos=e,rows:`2`,placeholder:`Duas pessoas importantes fora do uniforme.`},null,512),[[Y,r.value.vinculos]])]),W(`label`,Iw,[t[130]||=K(`Aparência e uniforme`,-1),L(W(`textarea`,{"onUpdate:modelValue":t[40]||=e=>r.value.aparencia=e,rows:`2`},null,512),[[Y,r.value.aparencia]])]),W(`label`,Lw,[t[131]||=K(`Notas`,-1),L(W(`textarea`,{"onUpdate:modelValue":t[41]||=e=>r.value.notas=e,rows:`3`},null,512),[[Y,r.value.notas]])])])])]))],64)):(V(),H(`div`,tS,[G(Q,{name:`card-account-details-star`,size:72}),F(_v).length?(V(),H(`p`,nS,`Escolha uma ficha acima ou crie uma nova.`)):(V(),H(`p`,rS,`Você ainda não tem fichas. Comece um herói novo.`)),W(`button`,{class:`btn`,onClick:c},[G(F(ul),{size:16}),t[49]||=K(` Criar ficha`,-1)])]))])])}}}},{path:`/:cap/:a?/:b?`,name:`cap`,component:W_}],scrollBehavior(e,t,n){return n||(e.params.cap&&e.params.cap===t.params.cap&&e.params.a===t.params.a?!1:{top:0})}});No(Lp).use(Rw).mount(`#app`);