var Q=Object.defineProperty;var u=(t,e)=>Q(t,"name",{value:e,configurable:!0});import{G as q,H as Z,I as tt,J as et,K as rt,L as nt,M as it,w as S,N as at,j as G,O as P,P as H,Q as st,R as ot}from"./iframe.3997bf2f.js";import{M as ut}from"./index.b75c4dd0.js";import"./es.map.constructor.0ed0adb7.js";var lt=q,ft=Z;lt("toPrimitive");ft();var ct=tt,dt=et,vt=TypeError,yt=u(function(t){if(ct(this),t==="string"||t==="default")t="string";else if(t!=="number")throw vt("Incorrect hint");return dt(this,t)},"dateToPrimitive$1"),ht=rt,gt=nt,_t=yt,pt=it,x=pt("toPrimitive"),U=Date.prototype;ht(U,x)||gt(U,x,_t);var I;(function(t){t.DONE="done",t.ERROR="error",t.ACTIVE="active",t.WAITING="waiting"})(I||(I={}));var A;function E(t){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(t)}u(E,"_typeof");function mt(t,e){if(t==null)return{};var r=bt(t,e),n,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(r[n]=t[n]))}return r}u(mt,"_objectWithoutProperties");function bt(t,e){if(t==null)return{};var r={},n=Object.keys(t),a,s;for(s=0;s<n.length;s++)a=n[s],!(e.indexOf(a)>=0)&&(r[a]=t[a]);return r}u(bt,"_objectWithoutPropertiesLoose");function It(t){var e=St(t,"string");return E(e)==="symbol"?e:String(e)}u(It,"_toPropertyKey");function St(t,e){if(E(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(E(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}u(St,"_toPrimitive");function R(t){return wt(t)||Tt(t)||V(t)||Ot()}u(R,"_toConsumableArray");function Ot(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}u(Ot,"_nonIterableSpread");function Tt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}u(Tt,"_iterableToArray");function wt(t){if(Array.isArray(t))return j(t)}u(wt,"_arrayWithoutHoles");function N(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}u(N,"_defineProperty");function Et(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}u(Et,"_classCallCheck");function M(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}u(M,"_defineProperties");function Rt(t,e,r){return e&&M(t.prototype,e),r&&M(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}u(Rt,"_createClass");function F(t,e){return Ct(t)||Nt(t,e)||V(t,e)||At()}u(F,"_slicedToArray$1");function At(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}u(At,"_nonIterableRest$1");function V(t,e){if(!!t){if(typeof t=="string")return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(t,e)}}u(V,"_unsupportedIterableToArray$1");function j(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}u(j,"_arrayLikeToArray$1");function Nt(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[],a=!0,s=!1,d,c;try{for(r=r.call(t);!(a=(d=r.next()).done)&&(n.push(d.value),!(e&&n.length===e));a=!0);}catch(f){s=!0,c=f}finally{try{!a&&r.return!=null&&r.return()}finally{if(s)throw c}}return n}}u(Nt,"_iterableToArrayLimit$1");function Ct(t){if(Array.isArray(t))return t}u(Ct,"_arrayWithHoles$1");var T={CALL:"instrumenter/call",SYNC:"instrumenter/sync",START:"instrumenter/start",BACK:"instrumenter/back",GOTO:"instrumenter/goto",NEXT:"instrumenter/next",END:"instrumenter/end"},z=((A=S.FEATURES)===null||A===void 0?void 0:A.interactionsDebugger)!==!0,B={debugger:!z,start:!1,back:!1,goto:!1,next:!1,end:!1},$=new Error("This function ran after the play function completed. Did you forget to `await` it?"),L=u(function(e){return Object.prototype.toString.call(e)==="[object Object]"},"isObject"),Pt=u(function(e){return Object.prototype.toString.call(e)==="[object Module]"},"isModule"),jt=u(function(e){if(!L(e)&&!Pt(e))return!1;if(e.constructor===void 0)return!0;var r=e.constructor.prototype;return!(!L(r)||Object.prototype.hasOwnProperty.call(r,"isPrototypeOf")===!1)},"isInstrumentable"),Dt=u(function(e){try{return new e.constructor}catch{return{}}},"construct"),C=u(function(){return{renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,parentId:void 0,playUntil:void 0,resolvers:{},syncTimeout:void 0,forwardedException:void 0}},"getInitialState"),K=u(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=(r?e.shadowCalls:e.calls).filter(function(s){return s.retain});if(!!n.length){var a=new Map(Array.from(e.callRefsByResult.entries()).filter(function(s){var d=F(s,2),c=d[1];return c.retain}));return{cursor:n.length,calls:n,callRefsByResult:a}}},"getRetainedState"),kt=function(){function t(){var e=this;Et(this,t),this.channel=void 0,this.initialized=!1,this.state=void 0,this.channel=G.getChannel(),this.state=S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};var r=u(function(l){var i=l.storyId,v=l.isPlaying,g=v===void 0?!0:v,h=l.isDebugging,o=h===void 0?!1:h,y=e.getState(i);e.setState(i,Object.assign({},C(),K(y,o),{shadowCalls:o?y.shadowCalls:[],chainedCallIds:o?y.chainedCallIds:new Set,playUntil:o?y.playUntil:void 0,isPlaying:g,isDebugging:o})),o||e.sync(i)},"resetState");this.channel.on(P,r),this.channel.on(H,function(f){var l=f.storyId,i=f.newPhase,v=e.getState(l),g=v.isDebugging,h=v.forwardedException;if(e.setState(l,{renderPhase:i}),i==="playing"&&r({storyId:l,isDebugging:g}),i==="played"&&(e.setState(l,{isLocked:!1,isPlaying:!1,isDebugging:!1,forwardedException:void 0}),h))throw h}),this.channel.on(st,function(){e.initialized?e.cleanup():e.initialized=!0});var n=u(function(l){var i=l.storyId,v=l.playUntil;e.getState(i).isDebugging||e.setState(i,function(h){var o=h.calls;return{calls:[],shadowCalls:o.map(function(y){return Object.assign({},y,{status:I.WAITING})}),isDebugging:!0}});var g=e.getLog(i);e.setState(i,function(h){var o,y=h.shadowCalls,p=y.findIndex(function(_){return _.id===g[0].callId});return{playUntil:v||((o=y.slice(0,p).filter(function(_){return _.interceptable}).slice(-1)[0])===null||o===void 0?void 0:o.id)}}),e.channel.emit(P,{storyId:i,isDebugging:!0})},"start"),a=u(function(l){var i,v=l.storyId,g=e.getState(v),h=g.isDebugging,o=e.getLog(v),y=h?o.findIndex(function(p){var _=p.status;return _===I.WAITING}):o.length;n({storyId:v,playUntil:(i=o[y-2])===null||i===void 0?void 0:i.callId})},"back"),s=u(function(l){var i=l.storyId,v=l.callId,g=e.getState(i),h=g.calls,o=g.shadowCalls,y=g.resolvers,p=h.find(function(b){var w=b.id;return w===v}),_=o.find(function(b){var w=b.id;return w===v});if(!p&&_&&Object.values(y).length>0){var m,O=(m=e.getLog(i).find(function(b){return b.status===I.WAITING}))===null||m===void 0?void 0:m.callId;_.id!==O&&e.setState(i,{playUntil:_.id}),Object.values(y).forEach(function(b){return b()})}else n({storyId:i,playUntil:v})},"goto"),d=u(function(l){var i=l.storyId,v=e.getState(i),g=v.resolvers;if(Object.values(g).length>0)Object.values(g).forEach(function(y){return y()});else{var h,o=(h=e.getLog(i).find(function(y){return y.status===I.WAITING}))===null||h===void 0?void 0:h.callId;o?n({storyId:i,playUntil:o}):c({storyId:i})}},"next"),c=u(function(l){var i=l.storyId;e.setState(i,{playUntil:void 0,isDebugging:!1}),Object.values(e.getState(i).resolvers).forEach(function(v){return v()})},"end");this.channel.on(T.START,n),this.channel.on(T.BACK,a),this.channel.on(T.GOTO,s),this.channel.on(T.NEXT,d),this.channel.on(T.END,c)}return u(t,"Instrumenter"),Rt(t,[{key:"getState",value:u(function(r){return this.state[r]||C()},"getState")},{key:"setState",value:u(function(r,n){var a=this.getState(r),s=typeof n=="function"?n(a):n;this.state=Object.assign({},this.state,N({},r,Object.assign({},a,s))),S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"setState")},{key:"cleanup",value:u(function(){this.state=Object.entries(this.state).reduce(function(r,n){var a=F(n,2),s=a[0],d=a[1],c=K(d);return c&&(r[s]=Object.assign(C(),c)),r},{}),this.channel.emit(T.SYNC,{controlStates:B,logItems:[]}),S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"cleanup")},{key:"getLog",value:u(function(r){var n=this.getState(r),a=n.calls,s=n.shadowCalls,d=R(s);a.forEach(function(f,l){d[l]=f});var c=new Set;return d.reduceRight(function(f,l){return l.args.forEach(function(i){i!=null&&i.__callId__&&c.add(i.__callId__)}),l.path.forEach(function(i){i.__callId__&&c.add(i.__callId__)}),l.interceptable&&!c.has(l.id)&&(f.unshift({callId:l.id,status:l.status}),c.add(l.id)),f},[])},"getLog")},{key:"instrument",value:u(function(r,n){var a=this;if(!jt(r))return r;var s=n.mutate,d=s===void 0?!1:s,c=n.path,f=c===void 0?[]:c;return Object.keys(r).reduce(function(l,i){var v=r[i];return typeof v!="function"?(l[i]=a.instrument(v,Object.assign({},n,{path:f.concat(i)})),l):typeof v.__originalFn__=="function"?(l[i]=v,l):(l[i]=function(){for(var g=arguments.length,h=new Array(g),o=0;o<g;o++)h[o]=arguments[o];return a.track(i,v,h,n)},l[i].__originalFn__=v,Object.defineProperty(l[i],"name",{value:i,writable:!1}),Object.keys(v).length>0&&Object.assign(l[i],a.instrument(Object.assign({},v),Object.assign({},n,{path:f.concat(i)}))),l)},d?r:Dt(r))},"instrument")},{key:"track",value:u(function(r,n,a,s){var d,c,f,l,i=(a==null||(d=a[0])===null||d===void 0?void 0:d.__storyId__)||((c=S.window.__STORYBOOK_PREVIEW__)===null||c===void 0||(f=c.urlStore)===null||f===void 0||(l=f.selection)===null||l===void 0?void 0:l.storyId),v=this.getState(i),g=v.cursor,h=v.parentId;this.setState(i,{cursor:g+1});var o="".concat(h||i," [").concat(g,"] ").concat(r),y=s.path,p=y===void 0?[]:y,_=s.intercept,m=_===void 0?!1:_,O=s.retain,b=O===void 0?!1:O,w=typeof m=="function"?m(r,p):m,k={id:o,parentId:h,storyId:i,cursor:g,path:p,method:r,args:a,interceptable:w,retain:b},J=(w?this.intercept:this.invoke).call(this,n,k,s);return this.instrument(J,Object.assign({},s,{mutate:!0,path:[{__callId__:k.id}]}))},"track")},{key:"intercept",value:u(function(r,n,a){var s=this,d=this.getState(n.storyId),c=d.chainedCallIds,f=d.isDebugging,l=d.playUntil,i=c.has(n.id);return!f||i||l?(l===n.id&&this.setState(n.storyId,{playUntil:void 0}),this.invoke(r,n,a)):new Promise(function(v){s.setState(n.storyId,function(g){var h=g.resolvers;return{isLocked:!1,resolvers:Object.assign({},h,N({},n.id,v))}})}).then(function(){return s.setState(n.storyId,function(v){var g=v.resolvers,h=n.id;g[h];var o=mt(g,[h].map(It));return{isLocked:!0,resolvers:o}}),s.invoke(r,n,a)})},"intercept")},{key:"invoke",value:u(function(r,n,a){var s=this,d=this.getState(n.storyId),c=d.callRefsByResult,f=d.forwardedException,l=d.renderPhase,i=Object.assign({},n,{args:n.args.map(function(o){if(c.has(o))return c.get(o);if(o instanceof S.window.HTMLElement){var y=o.prefix,p=o.localName,_=o.id,m=o.classList,O=o.innerText,b=Array.from(m);return{__element__:{prefix:y,localName:p,id:_,classNames:b,innerText:O}}}return o})});n.path.forEach(function(o){o!=null&&o.__callId__&&s.setState(n.storyId,function(y){var p=y.chainedCallIds;return{chainedCallIds:new Set(Array.from(p).concat(o.__callId__))}})});var v=u(function(y){if(y instanceof Error){var p=y.name,_=y.message,m=y.stack,O={name:p,message:_,stack:m};if(s.update(Object.assign({},i,{status:I.ERROR,exception:O})),s.setState(n.storyId,function(b){return{callRefsByResult:new Map([].concat(R(Array.from(b.callRefsByResult.entries())),[[y,{__callId__:n.id,retain:n.retain}]]))}}),n.interceptable&&y!==$)throw ot;return s.setState(n.storyId,{forwardedException:y}),y}throw y},"handleException");try{if(f)throw this.setState(n.storyId,{forwardedException:void 0}),f;if(l==="played"&&!n.retain)throw $;var g=a.getArgs?a.getArgs(n,this.getState(n.storyId)):n.args,h=r.apply(void 0,R(g.map(function(o){return typeof o!="function"||Object.keys(o).length?o:function(){var y=s.getState(n.storyId),p=y.cursor,_=y.parentId;s.setState(n.storyId,{cursor:0,parentId:n.id});var m=u(function(){return s.setState(n.storyId,{cursor:p,parentId:_})},"restore"),O=o.apply(void 0,arguments);return O instanceof Promise?O.then(m,m):m(),O}})));return h&&["object","function","symbol"].includes(E(h))&&this.setState(n.storyId,function(o){return{callRefsByResult:new Map([].concat(R(Array.from(o.callRefsByResult.entries())),[[h,{__callId__:n.id,retain:n.retain}]]))}}),this.update(Object.assign({},i,{status:h instanceof Promise?I.ACTIVE:I.DONE})),h instanceof Promise?h.then(function(o){return s.update(Object.assign({},i,{status:I.DONE})),o},v):h}catch(o){return v(o)}},"invoke")},{key:"update",value:u(function(r){var n=this;clearTimeout(this.getState(r.storyId).syncTimeout),this.channel.emit(T.CALL,r),this.setState(r.storyId,function(a){var s=a.calls,d=s.concat(r).reduce(function(c,f){return Object.assign(c,N({},f.id,f))},{});return{calls:Object.values(d).sort(function(c,f){return c.id.localeCompare(f.id,void 0,{numeric:!0})}),syncTimeout:setTimeout(function(){return n.sync(r.storyId)},0)}})},"update")},{key:"sync",value:u(function(r){var n=this.getState(r),a=n.isLocked,s=n.isPlaying,d=this.getLog(r),c=d.some(function(i){return i.status===I.ACTIVE});if(z||a||c||d.length===0){this.channel.emit(T.SYNC,{controlStates:B,logItems:d});return}var f=d.some(function(i){return[I.DONE,I.ERROR].includes(i.status)}),l={debugger:!0,start:f,back:f,goto:!0,next:s,end:s};this.channel.emit(T.SYNC,{controlStates:l,logItems:d})},"sync")}]),t}();function xt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{var r,n,a,s,d=!1,c=!1;if(((r=S.window.location)===null||r===void 0||(n=r.search)===null||n===void 0?void 0:n.indexOf("instrument=true"))!==-1?d=!0:((a=S.window.location)===null||a===void 0||(s=a.search)===null||s===void 0?void 0:s.indexOf("instrument=false"))!==-1&&(c=!0),S.window.parent===S.window&&!d||c)return t;S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new kt);var f=S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;return f.instrument(t,e)}catch(l){return at.warn(l),t}}u(xt,"instrument");function Ut(t,e){return Lt(t)||$t(t,e)||Bt(t,e)||Mt()}u(Ut,"_slicedToArray");function Mt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}u(Mt,"_nonIterableRest");function Bt(t,e){if(!!t){if(typeof t=="string")return Y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(t,e)}}u(Bt,"_unsupportedIterableToArray");function Y(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}u(Y,"_arrayLikeToArray");function $t(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[],a=!0,s=!1,d,c;try{for(r=r.call(t);!(a=(d=r.next()).done)&&(n.push(d.value),!(e&&n.length===e));a=!0);}catch(f){s=!0,c=f}finally{try{!a&&r.return!=null&&r.return()}finally{if(s)throw c}}return n}}u($t,"_iterableToArrayLimit");function Lt(t){if(Array.isArray(t))return t}u(Lt,"_arrayWithHoles");var W=new ut(global),Kt=W.fn.bind(W),Yt=xt({action:Kt},{retain:!0}),Wt=Yt.action,X=G.getChannel(),D=[];X.on(P,function(){return D.forEach(function(t){var e;return t==null||(e=t.mockClear)===null||e===void 0?void 0:e.call(t)})});X.on(H,function(t){var e=t.newPhase;e==="loading"&&D.forEach(function(r){var n;return r==null||(n=r.mockClear)===null||n===void 0?void 0:n.call(r)})});var Gt=u(function(e){var r=e.id,n=e.initialArgs;return Object.entries(n).reduce(function(a,s){var d=Ut(s,2),c=d[0],f=d[1];return typeof f=="function"&&f.name==="actionHandler"?(Object.defineProperty(f,"name",{value:c,writable:!1}),Object.defineProperty(f,"__storyId__",{value:r,writable:!1}),a[c]=Wt(f),D.push(a[c]),a):(a[c]=f,a)},{})},"addActionsFromArgTypes"),Xt=[Gt];export{Xt as argsEnhancers};
//# sourceMappingURL=preview.137c6219.js.map