import{ac as ys,ad as ml,g as Y,ae as cd,af as pl,m as oe,ag as Qi,p as z,a4 as mn,b as Xe,D as pn,a7 as yn,h as ne,i as b,ah as _s,ai as Kt,N as ie,e as N,I as it,Q as Xn,_ as ft,c as Ue,E as yl,aj as _l,L as Ge,K as Ee,d as _t,a1 as Zt,r as H,t as ue,G as re,j as ve,F as Te,ak as ud,al as qt,s as ce,H as ws,am as dd,O as _n,an as wn,a2 as bs,ao as wl,ap as bn,M as Zi,f as gt,R as rt,aq as hd,ar as bl,as as Is,J as In,at as fd,au as gd,av as vd,Z as Jn,W as mt,aw as Je,ax as md,$ as Qo,w as er,ay as Il,az as pd,aA as Zo,aB as El,T as Tl,aa as Sl,aC as ns,aD as yd,aE as _d,X as wd,o as ze,q as is,n as ee,x as He,y as rs,l as Ot,z as ct,ab as ea,aF as Es,aG as bd,aH as Id,aI as Ed,S as Td,a as Sd,P as Ad,k as kd,Y as Cd,v as ta}from"./index-EPAeSFCk.js";import{o as Me,z as Al,b as xt,A as Ts,e as Mt,u as Lt,B as Qn,L as Ss,i as Re,q as En,v as Zn,m as ei,s as Pd,p as tr,c as ti,t as As,w as Rd,y as ks,a as nr,C as kl,D as Od,r as Cl,R as Cs,d as ir,E as Pl,F as Nd,x as Rl,G as na,H as Vr,I as Ur,J as ia,K as ra,M as Ol,N as Dd,f as xe,V as Ld,g as Un,O as xd,P as Md,Q as Vd}from"./VRow-CciY8ffl.js";class Gt{constructor(t){let{x:n,y:r,width:s,height:o}=t;this.x=n,this.y=r,this.width=s,this.height=o}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function sa(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function Nl(e){return Array.isArray(e)?new Gt({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Ps(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),r=n.transform;if(r){let s,o,l,c,d;if(r.startsWith("matrix3d("))s=r.slice(9,-1).split(/, /),o=+s[0],l=+s[5],c=+s[12],d=+s[13];else if(r.startsWith("matrix("))s=r.slice(7,-1).split(/, /),o=+s[0],l=+s[3],c=+s[4],d=+s[5];else return new Gt(t);const g=n.transformOrigin,p=t.x-c-(1-o)*parseFloat(g),T=t.y-d-(1-l)*parseFloat(g.slice(g.indexOf(" ")+1)),k=o?t.width/o:e.offsetWidth+1,E=l?t.height/l:e.offsetHeight+1;return new Gt({x:p,y:T,width:k,height:E})}else return new Gt(t)}function cn(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let r;try{r=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof r.finished>"u"&&(r.finished=new Promise(s=>{r.onfinish=()=>{s(r)}})),r}const ki=new WeakMap;function Ud(e,t){Object.keys(t).forEach(n=>{if(ys(n)){const r=ml(n),s=ki.get(e);if(t[n]==null)s==null||s.forEach(o=>{const[l,c]=o;l===r&&(e.removeEventListener(r,c),s.delete(o))});else if(!s||![...s].some(o=>o[0]===r&&o[1]===t[n])){e.addEventListener(r,t[n]);const o=s||new Set;o.add([r,t[n]]),ki.has(e)||ki.set(e,o)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function Fd(e,t){Object.keys(t).forEach(n=>{if(ys(n)){const r=ml(n),s=ki.get(e);s==null||s.forEach(o=>{const[l,c]=o;l===r&&(e.removeEventListener(r,c),s.delete(o))})}else e.removeAttribute(n)})}function Rs(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Y()({name:n??cd(pl(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...oe()},setup(r,s){let{slots:o}=s;return()=>{var l;return Qi(r.tag,{class:[e,r.class],style:r.style},(l=o.default)==null?void 0:l.call(o))}}})}function Dl(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const Li="cubic-bezier(0.4, 0, 0.2, 1)",Bd="cubic-bezier(0.0, 0, 0.2, 1)",$d="cubic-bezier(0.4, 0, 1, 1)";function jd(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?Hd(e):Os(e))return e;e=e.parentElement}return document.scrollingElement}function xi(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(Os(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function Os(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Hd(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function zd(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Wd=z({fluid:{type:Boolean,default:!1},...oe(),...mn(),...Xe()},"VContainer"),qd=Y()({name:"VContainer",props:Wd(),setup(e,t){let{slots:n}=t;const{rtlClasses:r}=pn(),{dimensionStyles:s}=yn(e);return ne(()=>b(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},r.value,e.class],style:[s.value,e.style]},n)),{}}}),Ci=Rs("v-spacer","div","VSpacer"),Gd=z({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function Ne(e,t,n){return Y()({name:e,props:Gd({mode:n,origin:t}),setup(r,s){let{slots:o}=s;const l={onBeforeEnter(c){r.origin&&(c.style.transformOrigin=r.origin)},onLeave(c){if(r.leaveAbsolute){const{offsetTop:d,offsetLeft:g,offsetWidth:p,offsetHeight:T}=c;c._transitionInitialStyles={position:c.style.position,top:c.style.top,left:c.style.left,width:c.style.width,height:c.style.height},c.style.position="absolute",c.style.top=`${d}px`,c.style.left=`${g}px`,c.style.width=`${p}px`,c.style.height=`${T}px`}r.hideOnLeave&&c.style.setProperty("display","none","important")},onAfterLeave(c){if(r.leaveAbsolute&&(c!=null&&c._transitionInitialStyles)){const{position:d,top:g,left:p,width:T,height:k}=c._transitionInitialStyles;delete c._transitionInitialStyles,c.style.position=d||"",c.style.top=g||"",c.style.left=p||"",c.style.width=T||"",c.style.height=k||""}}};return()=>{const c=r.group?_s:Kt;return Qi(c,{name:r.disabled?"":e,css:!r.disabled,...r.group?void 0:{mode:r.mode},...r.disabled?{}:l},o.default)}}})}function Ll(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return Y()({name:e,props:{mode:{type:String,default:n},disabled:Boolean,group:Boolean},setup(r,s){let{slots:o}=s;const l=r.group?_s:Kt;return()=>Qi(l,{name:r.disabled?"":e,css:!r.disabled,...r.disabled?{}:t},o.default)}})}function xl(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",r=pl(`offset-${n}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[n]:l.style[n]}},onEnter(l){const c=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const d=`${l[r]}px`;l.style[n]="0",l.offsetHeight,l.style.transition=c.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[n]=d})},onAfterEnter:o,onEnterCancelled:o,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[n]:l.style[n]},l.style.overflow="hidden",l.style[n]=`${l[r]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[n]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(l){e&&l._parent&&l._parent.classList.remove(e),o(l)}function o(l){const c=l._initialStyle[n];l.style.overflow=l._initialStyle.overflow,c!=null&&(l.style[n]=c),delete l._initialStyle}}const Kd=z({target:[Object,Array]},"v-dialog-transition"),Yd=Y()({name:"VDialogTransition",props:Kd(),setup(e,t){let{slots:n}=t;const r={onBeforeEnter(s){s.style.pointerEvents="none",s.style.visibility="hidden"},async onEnter(s,o){var k;await new Promise(E=>requestAnimationFrame(E)),await new Promise(E=>requestAnimationFrame(E)),s.style.visibility="";const{x:l,y:c,sx:d,sy:g,speed:p}=aa(e.target,s),T=cn(s,[{transform:`translate(${l}px, ${c}px) scale(${d}, ${g})`,opacity:0},{}],{duration:225*p,easing:Bd});(k=oa(s))==null||k.forEach(E=>{cn(E,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*p,easing:Li})}),T.finished.then(()=>o())},onAfterEnter(s){s.style.removeProperty("pointer-events")},onBeforeLeave(s){s.style.pointerEvents="none"},async onLeave(s,o){var k;await new Promise(E=>requestAnimationFrame(E));const{x:l,y:c,sx:d,sy:g,speed:p}=aa(e.target,s);cn(s,[{},{transform:`translate(${l}px, ${c}px) scale(${d}, ${g})`,opacity:0}],{duration:125*p,easing:$d}).finished.then(()=>o()),(k=oa(s))==null||k.forEach(E=>{cn(E,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*p,easing:Li})})},onAfterLeave(s){s.style.removeProperty("pointer-events")}};return()=>e.target?b(Kt,ie({name:"dialog-transition"},r,{css:!1}),n):b(Kt,{name:"dialog-transition"},n)}});function oa(e){var n;const t=(n=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:n.children;return t&&[...t]}function aa(e,t){const n=Nl(e),r=Ps(t),[s,o]=getComputedStyle(t).transformOrigin.split(" ").map(L=>parseFloat(L)),[l,c]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let d=n.left+n.width/2;l==="left"||c==="left"?d-=n.width/2:(l==="right"||c==="right")&&(d+=n.width/2);let g=n.top+n.height/2;l==="top"||c==="top"?g-=n.height/2:(l==="bottom"||c==="bottom")&&(g+=n.height/2);const p=n.width/r.width,T=n.height/r.height,k=Math.max(1,p,T),E=p/k||0,S=T/k||0,P=r.width*r.height/(window.innerWidth*window.innerHeight),O=P>.12?Math.min(1.5,(P-.12)*10+1):1;return{x:d-(s+r.left),y:g-(o+r.top),sx:E,sy:S,speed:O}}Ne("fab-transition","center center","out-in");Ne("dialog-bottom-transition");Ne("dialog-top-transition");const G_=Ne("fade-transition"),Xd=Ne("scale-transition");Ne("scroll-x-transition");Ne("scroll-x-reverse-transition");Ne("scroll-y-transition");Ne("scroll-y-reverse-transition");Ne("slide-x-transition");Ne("slide-x-reverse-transition");const Ml=Ne("slide-y-transition");Ne("slide-y-reverse-transition");const Jd=Ll("expand-transition",xl()),Qd=Ll("expand-x-transition",xl("",!0)),ni=z({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Rt=(e,t)=>{let{slots:n}=t;const{transition:r,disabled:s,group:o,...l}=e,{component:c=o?_s:Kt,...d}=typeof r=="object"?r:{};return Qi(c,ie(typeof r=="string"?{name:s?"":r}:d,typeof r=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:o}).filter(g=>{let[p,T]=g;return T!==void 0})),l),n)},Zd=z({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...oe(),...ni({transition:{component:Ml}})},"VCounter"),eh=Y()({name:"VCounter",functional:!0,props:Zd(),setup(e,t){let{slots:n}=t;const r=N(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return ne(()=>b(Rt,{transition:e.transition},{default:()=>[it(b("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[n.default?n.default({counter:r.value,max:e.max,value:e.value}):r.value]),[[Xn,e.active]])]})),{}}}),th=z({text:String,onClick:ft(),...oe(),...Ue()},"VLabel"),Vl=Y()({name:"VLabel",props:th(),setup(e,t){let{slots:n}=t;return ne(()=>{var r;return b("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,(r=n.default)==null?void 0:r.call(n)])}),{}}}),nh=z({floating:Boolean,...oe()},"VFieldLabel"),Ei=Y()({name:"VFieldLabel",props:nh(),setup(e,t){let{slots:n}=t;return ne(()=>b(Vl,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n)),{}}});function Ul(e){const{t}=yl();function n(r){let{name:s}=r;const o={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[s],l=e[`onClick:${s}`],c=l&&o?t(`$vuetify.input.${o}`,e.label??""):void 0;return b(Me,{icon:e[`${s}Icon`],"aria-label":c,onClick:l},null)}return{InputIcon:n}}const Fl=z({focused:Boolean,"onUpdate:focused":ft()},"focus");function Ns(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_l();const n=Ge(e,"focused"),r=N(()=>({[`${t}--focused`]:n.value}));function s(){n.value=!0}function o(){n.value=!1}return{focusClasses:r,isFocused:n,focus:s,blur:o}}const ih=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Bl=z({appendInnerIcon:Ee,bgColor:String,clearable:Boolean,clearIcon:{type:Ee,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Ee,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>ih.includes(e)},"onClick:clear":ft(),"onClick:appendInner":ft(),"onClick:prependInner":ft(),...oe(),...Al(),...xt(),...Ue()},"VField"),$l=Y()({name:"VField",inheritAttrs:!1,props:{id:String,...Fl(),...Bl()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:r,slots:s}=t;const{themeClasses:o}=_t(e),{loaderClasses:l}=Ts(e),{focusClasses:c,isFocused:d,focus:g,blur:p}=Ns(e),{InputIcon:T}=Ul(e),{roundedClasses:k}=Mt(e),{rtlClasses:E}=pn(),S=N(()=>e.dirty||e.active),P=N(()=>!e.singleLine&&!!(e.label||s.label)),O=Zt(),L=N(()=>e.id||`input-${O}`),M=N(()=>`${L.value}-messages`),D=H(),V=H(),U=H(),R=N(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:y,backgroundColorStyles:h}=Lt(ue(e,"bgColor")),{textColorClasses:m,textColorStyles:I}=Qn(N(()=>e.error||e.disabled?void 0:S.value&&d.value?e.color:e.baseColor));re(S,F=>{if(P.value){const j=D.value.$el,q=V.value.$el;requestAnimationFrame(()=>{const G=Ps(j),W=q.getBoundingClientRect(),ae=W.x-G.x,he=W.y-G.y-(G.height/2-W.height/2),X=W.width/.75,$=Math.abs(X-G.width)>1?{maxWidth:ve(X)}:void 0,Q=getComputedStyle(j),Be=getComputedStyle(q),De=parseFloat(Q.transitionDuration)*1e3||150,Z=parseFloat(Be.getPropertyValue("--v-field-label-scale")),de=Be.getPropertyValue("color");j.style.visibility="visible",q.style.visibility="hidden",cn(j,{transform:`translate(${ae}px, ${he}px) scale(${Z})`,color:de,...$},{duration:De,easing:Li,direction:F?"normal":"reverse"}).finished.then(()=>{j.style.removeProperty("visibility"),q.style.removeProperty("visibility")})})}},{flush:"post"});const _=N(()=>({isActive:S,isFocused:d,controlRef:U,blur:p,focus:g}));function w(F){F.target!==document.activeElement&&F.preventDefault()}function v(F){var j;F.key!=="Enter"&&F.key!==" "||(F.preventDefault(),F.stopPropagation(),(j=e["onClick:clear"])==null||j.call(e,new MouseEvent("click")))}return ne(()=>{var ae,he,X;const F=e.variant==="outlined",j=!!(s["prepend-inner"]||e.prependInnerIcon),q=!!(e.clearable||s.clear),G=!!(s["append-inner"]||e.appendInnerIcon||q),W=()=>s.label?s.label({..._.value,label:e.label,props:{for:L.value}}):e.label;return b("div",ie({class:["v-field",{"v-field--active":S.value,"v-field--appended":G,"v-field--center-affix":e.centerAffix??!R.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":j,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!W(),[`v-field--variant-${e.variant}`]:!0},o.value,y.value,c.value,l.value,k.value,E.value,e.class],style:[h.value,e.style],onClick:w},n),[b("div",{class:"v-field__overlay"},null),b(Ss,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:s.loader}),j&&b("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&b(T,{key:"prepend-icon",name:"prependInner"},null),(ae=s["prepend-inner"])==null?void 0:ae.call(s,_.value)]),b("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&P.value&&b(Ei,{key:"floating-label",ref:V,class:[m.value],floating:!0,for:L.value,style:I.value},{default:()=>[W()]}),b(Ei,{ref:D,for:L.value},{default:()=>[W()]}),(he=s.default)==null?void 0:he.call(s,{..._.value,props:{id:L.value,class:"v-field__input","aria-describedby":M.value},focus:g,blur:p})]),q&&b(Qd,{key:"clear"},{default:()=>[it(b("div",{class:"v-field__clearable",onMousedown:$=>{$.preventDefault(),$.stopPropagation()}},[b(Re,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[s.clear?s.clear({..._.value,props:{onKeydown:v,onFocus:g,onBlur:p,onClick:e["onClick:clear"]}}):b(T,{name:"clear",onKeydown:v,onFocus:g,onBlur:p},null)]})]),[[Xn,e.dirty]])]}),G&&b("div",{key:"append",class:"v-field__append-inner"},[(X=s["append-inner"])==null?void 0:X.call(s,_.value),e.appendInnerIcon&&b(T,{key:"append-icon",name:"appendInner"},null)]),b("div",{class:["v-field__outline",m.value],style:I.value},[F&&b(Te,null,[b("div",{class:"v-field__outline__start"},null),P.value&&b("div",{class:"v-field__outline__notch"},[b(Ei,{ref:V,floating:!0,for:L.value},{default:()=>[W()]})]),b("div",{class:"v-field__outline__end"},null)]),R.value&&P.value&&b(Ei,{ref:V,floating:!0,for:L.value},{default:()=>[W()]})])])}),{controlRef:U}}});function rh(e){const t=Object.keys($l.props).filter(n=>!ys(n)&&n!=="class"&&n!=="style");return ud(e,t)}const sh=z({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...oe(),...ni({transition:{component:Ml,leaveAbsolute:!0,group:!0}})},"VMessages"),oh=Y()({name:"VMessages",props:sh(),setup(e,t){let{slots:n}=t;const r=N(()=>qt(e.messages)),{textColorClasses:s,textColorStyles:o}=Qn(N(()=>e.color));return ne(()=>b(Rt,{transition:e.transition,tag:"div",class:["v-messages",s.value,e.class],style:[o.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&r.value.map((l,c)=>b("div",{class:"v-messages__message",key:`${c}-${r.value}`},[n.message?n.message({message:l}):l]))]})),{}}}),jl=Symbol.for("vuetify:form"),K_=z({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function Y_(e){const t=Ge(e,"modelValue"),n=N(()=>e.disabled),r=N(()=>e.readonly),s=ce(!1),o=H([]),l=H([]);async function c(){const p=[];let T=!0;l.value=[],s.value=!0;for(const k of o.value){const E=await k.validate();if(E.length>0&&(T=!1,p.push({id:k.id,errorMessages:E})),!T&&e.fastFail)break}return l.value=p,s.value=!1,{valid:T,errors:l.value}}function d(){o.value.forEach(p=>p.reset())}function g(){o.value.forEach(p=>p.resetValidation())}return re(o,()=>{let p=0,T=0;const k=[];for(const E of o.value)E.isValid===!1?(T++,k.push({id:E.id,errorMessages:E.errorMessages})):E.isValid===!0&&p++;l.value=k,t.value=T>0?!1:p===o.value.length?!0:null},{deep:!0,flush:"post"}),ws(jl,{register:p=>{let{id:T,vm:k,validate:E,reset:S,resetValidation:P}=p;o.value.some(O=>O.id===T),o.value.push({id:T,validate:E,reset:S,resetValidation:P,vm:dd(k),isValid:null,errorMessages:[]})},unregister:p=>{o.value=o.value.filter(T=>T.id!==p)},update:(p,T,k)=>{const E=o.value.find(S=>S.id===p);E&&(E.isValid=T,E.errorMessages=k)},isDisabled:n,isReadonly:r,isValidating:s,isValid:t,items:o,validateOn:ue(e,"validateOn")}),{errors:l,isDisabled:n,isReadonly:r,isValidating:s,isValid:t,items:o,validate:c,reset:d,resetValidation:g}}function ah(){return _n(jl,null)}const lh=z({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Fl()},"validation");function ch(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_l(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Zt();const r=Ge(e,"modelValue"),s=N(()=>e.validationValue===void 0?r.value:e.validationValue),o=ah(),l=H([]),c=ce(!0),d=N(()=>!!(qt(r.value===""?null:r.value).length||qt(s.value===""?null:s.value).length)),g=N(()=>!!(e.disabled??(o==null?void 0:o.isDisabled.value))),p=N(()=>!!(e.readonly??(o==null?void 0:o.isReadonly.value))),T=N(()=>{var U;return(U=e.errorMessages)!=null&&U.length?qt(e.errorMessages).concat(l.value).slice(0,Math.max(0,+e.maxErrors)):l.value}),k=N(()=>{let U=(e.validateOn??(o==null?void 0:o.validateOn.value))||"input";U==="lazy"&&(U="input lazy"),U==="eager"&&(U="input eager");const R=new Set((U==null?void 0:U.split(" "))??[]);return{input:R.has("input"),blur:R.has("blur")||R.has("input")||R.has("invalid-input"),invalidInput:R.has("invalid-input"),lazy:R.has("lazy"),eager:R.has("eager")}}),E=N(()=>{var U;return e.error||(U=e.errorMessages)!=null&&U.length?!1:e.rules.length?c.value?l.value.length||k.value.lazy?null:!0:!l.value.length:!0}),S=ce(!1),P=N(()=>({[`${t}--error`]:E.value===!1,[`${t}--dirty`]:d.value,[`${t}--disabled`]:g.value,[`${t}--readonly`]:p.value})),O=wn("validation"),L=N(()=>e.name??bs(n));wl(()=>{o==null||o.register({id:L.value,vm:O,validate:V,reset:M,resetValidation:D})}),bn(()=>{o==null||o.unregister(L.value)}),Zi(async()=>{k.value.lazy||await V(!k.value.eager),o==null||o.update(L.value,E.value,T.value)}),gt(()=>k.value.input||k.value.invalidInput&&E.value===!1,()=>{re(s,()=>{if(s.value!=null)V();else if(e.focused){const U=re(()=>e.focused,R=>{R||V(),U()})}})}),gt(()=>k.value.blur,()=>{re(()=>e.focused,U=>{U||V()})}),re([E,T],()=>{o==null||o.update(L.value,E.value,T.value)});async function M(){r.value=null,await rt(),await D()}async function D(){c.value=!0,k.value.lazy?l.value=[]:await V(!k.value.eager)}async function V(){let U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const R=[];S.value=!0;for(const y of e.rules){if(R.length>=+(e.maxErrors??1))break;const m=await(typeof y=="function"?y:()=>y)(s.value);if(m!==!0){if(m!==!1&&typeof m!="string"){console.warn(`${m} is not a valid value. Rule functions must return boolean true or a string.`);continue}R.push(m||"")}}return l.value=R,S.value=!1,c.value=U,l.value}return{errorMessages:T,isDirty:d,isDisabled:g,isReadonly:p,isPristine:c,isValid:E,isValidating:S,reset:M,resetValidation:D,validate:V,validationClasses:P}}const Ds=z({id:String,appendIcon:Ee,centerAffix:{type:Boolean,default:!0},prependIcon:Ee,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":ft(),"onClick:append":ft(),...oe(),...En(),...hd(mn(),["maxWidth","minWidth","width"]),...Ue(),...lh()},"VInput"),Mi=Y()({name:"VInput",props:{...Ds()},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:r,emit:s}=t;const{densityClasses:o}=Zn(e),{dimensionStyles:l}=yn(e),{themeClasses:c}=_t(e),{rtlClasses:d}=pn(),{InputIcon:g}=Ul(e),p=Zt(),T=N(()=>e.id||`input-${p}`),k=N(()=>`${T.value}-messages`),{errorMessages:E,isDirty:S,isDisabled:P,isReadonly:O,isPristine:L,isValid:M,isValidating:D,reset:V,resetValidation:U,validate:R,validationClasses:y}=ch(e,"v-input",T),h=N(()=>({id:T,messagesId:k,isDirty:S,isDisabled:P,isReadonly:O,isPristine:L,isValid:M,isValidating:D,reset:V,resetValidation:U,validate:R})),m=N(()=>{var I;return(I=e.errorMessages)!=null&&I.length||!L.value&&E.value.length?E.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return ne(()=>{var F,j,q,G;const I=!!(r.prepend||e.prependIcon),_=!!(r.append||e.appendIcon),w=m.value.length>0,v=!e.hideDetails||e.hideDetails==="auto"&&(w||!!r.details);return b("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},o.value,c.value,d.value,y.value,e.class],style:[l.value,e.style]},[I&&b("div",{key:"prepend",class:"v-input__prepend"},[(F=r.prepend)==null?void 0:F.call(r,h.value),e.prependIcon&&b(g,{key:"prepend-icon",name:"prepend"},null)]),r.default&&b("div",{class:"v-input__control"},[(j=r.default)==null?void 0:j.call(r,h.value)]),_&&b("div",{key:"append",class:"v-input__append"},[e.appendIcon&&b(g,{key:"append-icon",name:"append"},null),(q=r.append)==null?void 0:q.call(r,h.value)]),v&&b("div",{class:"v-input__details"},[b(oh,{id:k.value,active:w,messages:m.value},{message:r.message}),(G=r.details)==null?void 0:G.call(r,h.value)])])}),{reset:V,resetValidation:U,validate:R,isValid:M,errorMessages:E}}}),Fr=Symbol("Forwarded refs");function Br(e,t){let n=e;for(;n;){const r=Reflect.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Hl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e[Fr]=n,new Proxy(e,{get(s,o){if(Reflect.has(s,o))return Reflect.get(s,o);if(!(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))){for(const l of n)if(l.value&&Reflect.has(l.value,o)){const c=Reflect.get(l.value,o);return typeof c=="function"?c.bind(l.value):c}}},has(s,o){if(Reflect.has(s,o))return!0;if(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))return!1;for(const l of n)if(l.value&&Reflect.has(l.value,o))return!0;return!1},set(s,o,l){if(Reflect.has(s,o))return Reflect.set(s,o,l);if(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))return!1;for(const c of n)if(c.value&&Reflect.has(c.value,o))return Reflect.set(c.value,o,l);return!1},getOwnPropertyDescriptor(s,o){var c;const l=Reflect.getOwnPropertyDescriptor(s,o);if(l)return l;if(!(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))){for(const d of n){if(!d.value)continue;const g=Br(d.value,o)??("_"in d.value?Br((c=d.value._)==null?void 0:c.setupState,o):void 0);if(g)return g}for(const d of n){const g=d.value&&d.value[Fr];if(!g)continue;const p=g.slice();for(;p.length;){const T=p.shift(),k=Br(T.value,o);if(k)return k;const E=T.value&&T.value[Fr];E&&p.push(...E)}}}}})}function uh(e,t){if(!bl)return;const n=t.modifiers||{},r=t.value,{handler:s,options:o}=typeof r=="object"?r:{handler:r,options:{}},l=new IntersectionObserver(function(){var T;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const g=(T=e._observe)==null?void 0:T[t.instance.$.uid];if(!g)return;const p=c.some(k=>k.isIntersecting);s&&(!n.quiet||g.init)&&(!n.once||p||g.init)&&s(p,c,d),p&&n.once?zl(e,t):g.init=!0},o);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:l},l.observe(e)}function zl(e,t){var r;const n=(r=e._observe)==null?void 0:r[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Wl={mounted:uh,unmounted:zl},dh=["color","file","time","date","datetime-local","week","month"],hh=z({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Ds(),...Bl()},"VTextField"),Ht=Y()({name:"VTextField",directives:{Intersect:Wl},inheritAttrs:!1,props:hh(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:r,slots:s}=t;const o=Ge(e,"modelValue"),{isFocused:l,focus:c,blur:d}=Ns(e),g=N(()=>typeof e.counterValue=="function"?e.counterValue(o.value):typeof e.counterValue=="number"?e.counterValue:(o.value??"").toString().length),p=N(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),T=N(()=>["plain","underlined"].includes(e.variant));function k(R,y){var h,m;!e.autofocus||!R||(m=(h=y[0].target)==null?void 0:h.focus)==null||m.call(h)}const E=H(),S=H(),P=H(),O=N(()=>dh.includes(e.type)||e.persistentPlaceholder||l.value||e.active);function L(){var R;P.value!==document.activeElement&&((R=P.value)==null||R.focus()),l.value||c()}function M(R){r("mousedown:control",R),R.target!==P.value&&(L(),R.preventDefault())}function D(R){L(),r("click:control",R)}function V(R){R.stopPropagation(),L(),rt(()=>{o.value=null,gd(e["onClick:clear"],R)})}function U(R){var h;const y=R.target;if(o.value=y.value,(h=e.modelModifiers)!=null&&h.trim&&["text","search","password","tel","url"].includes(e.type)){const m=[y.selectionStart,y.selectionEnd];rt(()=>{y.selectionStart=m[0],y.selectionEnd=m[1]})}}return ne(()=>{const R=!!(s.counter||e.counter!==!1&&e.counter!=null),y=!!(R||s.details),[h,m]=Is(n),{modelValue:I,..._}=Mi.filterProps(e),w=rh(e);return b(Mi,ie({ref:E,modelValue:o.value,"onUpdate:modelValue":v=>o.value=v,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":T.value},e.class],style:e.style},h,_,{centerAffix:!T.value,focused:l.value}),{...s,default:v=>{let{id:F,isDisabled:j,isDirty:q,isReadonly:G,isValid:W}=v;return b($l,ie({ref:S,onMousedown:M,onClick:D,"onClick:clear":V,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},w,{id:F.value,active:O.value||q.value,dirty:q.value||e.dirty,disabled:j.value,focused:l.value,error:W.value===!1}),{...s,default:ae=>{let{props:{class:he,...X}}=ae;const $=it(b("input",ie({ref:P,value:o.value,onInput:U,autofocus:e.autofocus,readonly:G.value,disabled:j.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:L,onBlur:d},X,m),null),[[In("intersect"),{handler:k},null,{once:!0}]]);return b(Te,null,[e.prefix&&b("span",{class:"v-text-field__prefix"},[b("span",{class:"v-text-field__prefix__text"},[e.prefix])]),s.default?b("div",{class:he,"data-no-activator":""},[s.default(),$]):fd($,{class:he}),e.suffix&&b("span",{class:"v-text-field__suffix"},[b("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:y?v=>{var F;return b(Te,null,[(F=s.details)==null?void 0:F.call(s,v),R&&b(Te,null,[b("span",null,null),b(eh,{active:e.persistentCounter||l.value,value:g.value,max:p.value,disabled:e.disabled},s.counter)])])}:void 0})}),Hl({},E,S,P)}}),X_=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n};function fh(e){return{aspectStyles:N(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const ql=z({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...oe(),...mn()},"VResponsive"),la=Y()({name:"VResponsive",props:ql(),setup(e,t){let{slots:n}=t;const{aspectStyles:r}=fh(e),{dimensionStyles:s}=yn(e);return ne(()=>{var o;return b("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[b("div",{class:"v-responsive__sizer",style:r.value},null),(o=n.additional)==null?void 0:o.call(n),n.default&&b("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),gh=z({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ql(),...oe(),...xt(),...ni()},"VImg"),gn=Y()({name:"VImg",directives:{intersect:Wl},props:gh(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:r}=t;const{backgroundColorClasses:s,backgroundColorStyles:o}=Lt(ue(e,"color")),{roundedClasses:l}=Mt(e),c=wn("VImg"),d=ce(""),g=H(),p=ce(e.eager?"loading":"idle"),T=ce(),k=ce(),E=N(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=N(()=>E.value.aspect||T.value/k.value||0);re(()=>e.src,()=>{P(p.value!=="idle")}),re(S,(w,v)=>{!w&&v&&g.value&&V(g.value)}),wl(()=>P());function P(w){if(!(e.eager&&w)&&!(bl&&!w&&!e.eager)){if(p.value="loading",E.value.lazySrc){const v=new Image;v.src=E.value.lazySrc,V(v,null)}E.value.src&&rt(()=>{var v;n("loadstart",((v=g.value)==null?void 0:v.currentSrc)||E.value.src),setTimeout(()=>{var F;if(!c.isUnmounted)if((F=g.value)!=null&&F.complete){if(g.value.naturalWidth||L(),p.value==="error")return;S.value||V(g.value,null),p.value==="loading"&&O()}else S.value||V(g.value),M()})})}}function O(){var w;c.isUnmounted||(M(),V(g.value),p.value="loaded",n("load",((w=g.value)==null?void 0:w.currentSrc)||E.value.src))}function L(){var w;c.isUnmounted||(p.value="error",n("error",((w=g.value)==null?void 0:w.currentSrc)||E.value.src))}function M(){const w=g.value;w&&(d.value=w.currentSrc||w.src)}let D=-1;bn(()=>{clearTimeout(D)});function V(w){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const F=()=>{if(clearTimeout(D),c.isUnmounted)return;const{naturalHeight:j,naturalWidth:q}=w;j||q?(T.value=q,k.value=j):!w.complete&&p.value==="loading"&&v!=null?D=window.setTimeout(F,v):(w.currentSrc.endsWith(".svg")||w.currentSrc.startsWith("data:image/svg+xml"))&&(T.value=1,k.value=1)};F()}const U=N(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),R=()=>{var F;if(!E.value.src||p.value==="idle")return null;const w=b("img",{class:["v-img__img",U.value],style:{objectPosition:e.position},src:E.value.src,srcset:E.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:g,onLoad:O,onError:L},null),v=(F=r.sources)==null?void 0:F.call(r);return b(Rt,{transition:e.transition,appear:!0},{default:()=>[it(v?b("picture",{class:"v-img__picture"},[v,w]):w,[[Xn,p.value==="loaded"]])]})},y=()=>b(Rt,{transition:e.transition},{default:()=>[E.value.lazySrc&&p.value!=="loaded"&&b("img",{class:["v-img__img","v-img__img--preload",U.value],style:{objectPosition:e.position},src:E.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),h=()=>r.placeholder?b(Rt,{transition:e.transition,appear:!0},{default:()=>[(p.value==="loading"||p.value==="error"&&!r.error)&&b("div",{class:"v-img__placeholder"},[r.placeholder()])]}):null,m=()=>r.error?b(Rt,{transition:e.transition,appear:!0},{default:()=>[p.value==="error"&&b("div",{class:"v-img__error"},[r.error()])]}):null,I=()=>e.gradient?b("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,_=ce(!1);{const w=re(S,v=>{v&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{_.value=!0})}),w())})}return ne(()=>{const w=la.filterProps(e);return it(b(la,ie({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!_.value},s.value,l.value,e.class],style:[{width:ve(e.width==="auto"?T.value:e.width)},o.value,e.style]},w,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>b(Te,null,[b(R,null,null),b(y,null,null),b(I,null,null),b(h,null,null),b(m,null,null)]),default:r.default}),[[In("intersect"),{handler:P,options:e.options},null,{once:!0}]])}),{currentSrc:d,image:g,state:p,naturalWidth:T,naturalHeight:k}}});var ca={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},vh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],l=e[n++],c=e[n++],d=((s&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=e[n++],l=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],l=s+1<e.length,c=l?e[s+1]:0,d=s+2<e.length,g=d?e[s+2]:0,p=o>>2,T=(o&3)<<4|c>>4;let k=(c&15)<<2|g>>6,E=g&63;d||(E=64,l||(k=64)),r.push(n[p],n[T],n[k],n[E])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):vh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const g=s<e.length?n[e.charAt(s)]:64;++s;const T=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||c==null||g==null||T==null)throw new mh;const k=o<<2|c>>4;if(r.push(k),g!==64){const E=c<<4&240|g>>2;if(r.push(E),T!==64){const S=g<<6&192|T;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class mh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ph=function(e){const t=Gl(e);return Kl.encodeByteArray(t,!0)},Vi=function(e){return ph(e).replace(/\./g,"")},Yl=function(e){try{return Kl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=()=>yh().__FIREBASE_DEFAULTS__,wh=()=>{if(typeof process>"u"||typeof ca>"u")return;const e=ca.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},bh=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Yl(e[1]);return t&&JSON.parse(t)},Ls=()=>{try{return _h()||wh()||bh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Xl=e=>{var t,n;return(n=(t=Ls())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Jl=e=>{const t=Xl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ql=()=>{var e;return(e=Ls())===null||e===void 0?void 0:e.config},Zl=e=>{var t;return(t=Ls())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Vi(JSON.stringify(n)),Vi(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Th(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tc(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Sh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ah(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function nc(){try{return typeof indexedDB=="object"}catch{return!1}}function ic(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function kh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="FirebaseError";class Fe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ch,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,en.prototype.create)}}class en{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?Ph(o,r):"Error",c=`${this.serviceName}: ${l} (${s}).`;return new Fe(s,c,r)}}function Ph(e,t){return e.replace(Rh,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Rh=/\{\$([^}]+)}/g;function Oh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],l=t[s];if(ua(o)&&ua(l)){if(!qn(o,l))return!1}else if(o!==l)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ua(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Bn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(o)}}),t}function $n(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Nh(e,t){const n=new Dh(e,t);return n.subscribe.bind(n)}class Dh{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lh(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=$r),s.error===void 0&&(s.error=$r),s.complete===void 0&&(s.complete=$r);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lh(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function $r(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=1e3,Mh=2,Vh=4*60*60*1e3,Uh=.5;function da(e,t=xh,n=Mh){const r=t*Math.pow(n,e),s=Math.round(Uh*r*(Math.random()-.5)*2);return Math.min(Vh,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e){return e&&e._delegate?e._delegate:e}class Ve{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ih;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($h(t))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zt){return this.instances.has(t)}getOptions(t=zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zt){return this.component?this.component.multipleInstances?t:zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bh(e){return e===zt?void 0:e}function $h(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(te||(te={}));const Hh={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},zh=te.INFO,Wh={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},qh=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Wh[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class rr{constructor(t){this.name=t,this._logLevel=zh,this._logHandler=qh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in te))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...t),this._logHandler(this,te.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...t),this._logHandler(this,te.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,te.INFO,...t),this._logHandler(this,te.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,te.WARN,...t),this._logHandler(this,te.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...t),this._logHandler(this,te.ERROR,...t)}}const Gh=(e,t)=>t.some(n=>e instanceof n);let ha,fa;function Kh(){return ha||(ha=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yh(){return fa||(fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rc=new WeakMap,ss=new WeakMap,sc=new WeakMap,jr=new WeakMap,xs=new WeakMap;function Xh(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",l)},o=()=>{n(Nt(e.result)),s()},l=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&rc.set(n,e)}).catch(()=>{}),xs.set(t,e),t}function Jh(e){if(ss.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",l),e.removeEventListener("abort",l)},o=()=>{n(),s()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",l),e.addEventListener("abort",l)});ss.set(e,t)}let os={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ss.get(e);if(t==="objectStoreNames")return e.objectStoreNames||sc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Qh(e){os=e(os)}function Zh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Hr(this),t,...n);return sc.set(r,t.sort?t.sort():[t]),Nt(r)}:Yh().includes(e)?function(...t){return e.apply(Hr(this),t),Nt(rc.get(this))}:function(...t){return Nt(e.apply(Hr(this),t))}}function ef(e){return typeof e=="function"?Zh(e):(e instanceof IDBTransaction&&Jh(e),Gh(e,Kh())?new Proxy(e,os):e)}function Nt(e){if(e instanceof IDBRequest)return Xh(e);if(jr.has(e))return jr.get(e);const t=ef(e);return t!==e&&(jr.set(e,t),xs.set(t,e)),t}const Hr=e=>xs.get(e);function oc(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const l=indexedDB.open(e,t),c=Nt(l);return r&&l.addEventListener("upgradeneeded",d=>{r(Nt(l.result),d.oldVersion,d.newVersion,Nt(l.transaction),d)}),n&&l.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),c}const tf=["get","getKey","getAll","getAllKeys","count"],nf=["put","add","delete","clear"],zr=new Map;function ga(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(zr.get(t))return zr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=nf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tf.includes(n)))return;const o=async function(l,...c){const d=this.transaction(l,s?"readwrite":"readonly");let g=d.store;return r&&(g=g.index(c.shift())),(await Promise.all([g[n](...c),s&&d.done]))[0]};return zr.set(t,o),o}Qh(e=>({...e,get:(t,n,r)=>ga(t,n)||e.get(t,n,r),has:(t,n)=>!!ga(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sf(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const as="@firebase/app",va="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new rr("@firebase/app"),of="@firebase/app-compat",af="@firebase/analytics-compat",lf="@firebase/analytics",cf="@firebase/app-check-compat",uf="@firebase/app-check",df="@firebase/auth",hf="@firebase/auth-compat",ff="@firebase/database",gf="@firebase/data-connect",vf="@firebase/database-compat",mf="@firebase/functions",pf="@firebase/functions-compat",yf="@firebase/installations",_f="@firebase/installations-compat",wf="@firebase/messaging",bf="@firebase/messaging-compat",If="@firebase/performance",Ef="@firebase/performance-compat",Tf="@firebase/remote-config",Sf="@firebase/remote-config-compat",Af="@firebase/storage",kf="@firebase/storage-compat",Cf="@firebase/firestore",Pf="@firebase/vertexai",Rf="@firebase/firestore-compat",Of="firebase",Nf="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="[DEFAULT]",Df={[as]:"fire-core",[of]:"fire-core-compat",[lf]:"fire-analytics",[af]:"fire-analytics-compat",[uf]:"fire-app-check",[cf]:"fire-app-check-compat",[df]:"fire-auth",[hf]:"fire-auth-compat",[ff]:"fire-rtdb",[gf]:"fire-data-connect",[vf]:"fire-rtdb-compat",[mf]:"fire-fn",[pf]:"fire-fn-compat",[yf]:"fire-iid",[_f]:"fire-iid-compat",[wf]:"fire-fcm",[bf]:"fire-fcm-compat",[If]:"fire-perf",[Ef]:"fire-perf-compat",[Tf]:"fire-rc",[Sf]:"fire-rc-compat",[Af]:"fire-gcs",[kf]:"fire-gcs-compat",[Cf]:"fire-fst",[Rf]:"fire-fst-compat",[Pf]:"fire-vertex","fire-js":"fire-js",[Of]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Map,Lf=new Map,cs=new Map;function ma(e,t){try{e.container.addComponent(t)}catch(n){pt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ke(e){const t=e.name;if(cs.has(t))return pt.debug(`There were multiple attempts to register component ${t}.`),!1;cs.set(t,e);for(const n of Ui.values())ma(n,e);for(const n of Lf.values())ma(n,e);return!0}function Vt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function et(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dt=new en("app","Firebase",xf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=Nf;function ac(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ls,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(n||(n=Ql()),!n)throw Dt.create("no-options");const o=Ui.get(s);if(o){if(qn(n,o.options)&&qn(r,o.config))return o;throw Dt.create("duplicate-app",{appName:s})}const l=new jh(s);for(const d of cs.values())l.addComponent(d);const c=new Mf(n,r,l);return Ui.set(s,c),c}function sr(e=ls){const t=Ui.get(e);if(!t&&e===ls&&Ql())return ac();if(!t)throw Dt.create("no-app",{appName:e});return t}function Ce(e,t,n){var r;let s=(r=Df[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pt.warn(c.join(" "));return}Ke(new Ve(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="firebase-heartbeat-database",Uf=1,Gn="firebase-heartbeat-store";let Wr=null;function lc(){return Wr||(Wr=oc(Vf,Uf,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Gn)}catch(n){console.warn(n)}}}}).catch(e=>{throw Dt.create("idb-open",{originalErrorMessage:e.message})})),Wr}async function Ff(e){try{const n=(await lc()).transaction(Gn),r=await n.objectStore(Gn).get(cc(e));return await n.done,r}catch(t){if(t instanceof Fe)pt.warn(t.message);else{const n=Dt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pt.warn(n.message)}}}async function pa(e,t){try{const r=(await lc()).transaction(Gn,"readwrite");await r.objectStore(Gn).put(t,cc(e)),await r.done}catch(n){if(n instanceof Fe)pt.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pt.warn(r.message)}}}function cc(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=1024,$f=30*24*60*60*1e3;class jf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ya();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=$f}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ya(),{heartbeatsToSend:r,unsentEntries:s}=Hf(this._heartbeatsCache.heartbeats),o=Vi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return pt.warn(n),""}}}function ya(){return new Date().toISOString().substring(0,10)}function Hf(e,t=Bf){const n=[];let r=e.slice();for(const s of e){const o=n.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),_a(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_a(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nc()?ic().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ff(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function _a(e){return Vi(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(e){Ke(new Ve("platform-logger",t=>new rf(t),"PRIVATE")),Ke(new Ve("heartbeat",t=>new jf(t),"PRIVATE")),Ce(as,va,e),Ce(as,va,"esm2017"),Ce("fire-js","")}Wf("");var qf="firebase",Gf="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce(qf,Gf,"app");function Ms(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function uc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kf=uc,dc=new en("auth","Firebase",uc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new rr("@firebase/auth");function Yf(e,...t){Fi.logLevel<=te.WARN&&Fi.warn(`Auth (${tn}): ${e}`,...t)}function Pi(e,...t){Fi.logLevel<=te.ERROR&&Fi.error(`Auth (${tn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,...t){throw Vs(e,...t)}function tt(e,...t){return Vs(e,...t)}function hc(e,t,n){const r=Object.assign(Object.assign({},Kf()),{[t]:n});return new en("auth","Firebase",r).create(t,{appName:e.name})}function vt(e){return hc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vs(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return dc.create(e,...t)}function B(e,t,...n){if(!e)throw Vs(t,...n)}function ut(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Pi(t),new Error(t)}function yt(e,t){e||ut(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Xf(){return wa()==="http:"||wa()==="https:"}function wa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xf()||tc()||"connection"in navigator)?navigator.onLine:!0}function Qf(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n){this.shortDelay=t,this.longDelay=n,yt(n>t,"Short delay should be less than long delay!"),this.isMobile=Eh()||Sh()}get(){return Jf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(e,t){yt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new ri(3e4,6e4);function wt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function bt(e,t,n,r,s={}){return gc(e,s,async()=>{let o={},l={};r&&(t==="GET"?l=r:o={body:JSON.stringify(r)});const c=ii(Object.assign({key:e.config.apiKey},l)).slice(1),d=await e._getAdditionalHeaders();d["Content-Type"]="application/json",e.languageCode&&(d["X-Firebase-Locale"]=e.languageCode);const g=Object.assign({method:t,headers:d},o);return Th()||(g.referrerPolicy="no-referrer"),fc.fetch()(vc(e,e.config.apiHost,n,c),g)})}async function gc(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Zf),t);try{const s=new ng(e),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw Ti(e,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const c=o.ok?l.errorMessage:l.error.message,[d,g]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ti(e,"credential-already-in-use",l);if(d==="EMAIL_EXISTS")throw Ti(e,"email-already-in-use",l);if(d==="USER_DISABLED")throw Ti(e,"user-disabled",l);const p=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw hc(e,p,g);Ye(e,p)}}catch(s){if(s instanceof Fe)throw s;Ye(e,"network-request-failed",{message:String(s)})}}async function si(e,t,n,r,s={}){const o=await bt(e,t,n,r,s);return"mfaPendingCredential"in o&&Ye(e,"multi-factor-auth-required",{_serverResponse:o}),o}function vc(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Us(e.config,s):`${e.config.apiScheme}://${s}`}function tg(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ng{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),eg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ti(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tt(e,t,r);return s.customData._tokenResponse=n,s}function ba(e){return e!==void 0&&e.enterprise!==void 0}class ig{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return tg(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rg(e,t){return bt(e,"GET","/v2/recaptchaConfig",wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(e,t){return bt(e,"POST","/v1/accounts:delete",t)}async function mc(e,t){return bt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function og(e,t=!1){const n=Qe(e),r=await n.getIdToken(t),s=Fs(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:jn(qr(s.auth_time)),issuedAtTime:jn(qr(s.iat)),expirationTime:jn(qr(s.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function qr(e){return Number(e)*1e3}function Fs(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Pi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yl(n);return s?JSON.parse(s):(Pi("Failed to decode base64 JWT payload"),null)}catch(s){return Pi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ia(e){const t=Fs(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Fe&&ag(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ag({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Kn(e,mc(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];e._notifyReloadListener(o);const l=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?pc(o.providerUserInfo):[],c=ug(e.providerData,l),d=e.isAnonymous,g=!(e.email&&o.passwordHash)&&!(c!=null&&c.length),p=d?g:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ds(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,T)}async function cg(e){const t=Qe(e);await Bi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ug(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function pc(e){return e.map(t=>{var{providerId:n}=t,r=Ms(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dg(e,t){const n=await gc(e,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:o}=e.config,l=vc(e,s,"/v1/token",`key=${o}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",fc.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hg(e,t){return bt(e,"POST","/v2/accounts:revokeToken",wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ia(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){B(t.length!==0,"internal-error");const n=Ia(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await dg(t,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,l=new dn;return r&&(B(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:t}),l.accessToken=s),o&&(B(typeof o=="number","internal-error",{appName:t}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new dn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class dt{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,o=Ms(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ds(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Kn(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return og(this,t)}reload(){return cg(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new dt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(vt(this.auth));const t=await this.getIdToken();return await Kn(this,sg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,o,l,c,d,g,p;const T=(r=n.displayName)!==null&&r!==void 0?r:void 0,k=(s=n.email)!==null&&s!==void 0?s:void 0,E=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,S=(l=n.photoURL)!==null&&l!==void 0?l:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,L=(g=n.createdAt)!==null&&g!==void 0?g:void 0,M=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:D,emailVerified:V,isAnonymous:U,providerData:R,stsTokenManager:y}=n;B(D&&y,t,"internal-error");const h=dn.fromJSON(this.name,y);B(typeof D=="string",t,"internal-error"),St(T,t.name),St(k,t.name),B(typeof V=="boolean",t,"internal-error"),B(typeof U=="boolean",t,"internal-error"),St(E,t.name),St(S,t.name),St(P,t.name),St(O,t.name),St(L,t.name),St(M,t.name);const m=new dt({uid:D,auth:t,email:k,emailVerified:V,displayName:T,isAnonymous:U,photoURL:S,phoneNumber:E,tenantId:P,stsTokenManager:h,createdAt:L,lastLoginAt:M});return R&&Array.isArray(R)&&(m.providerData=R.map(I=>Object.assign({},I))),O&&(m._redirectEventId=O),m}static async _fromIdTokenResponse(t,n,r=!1){const s=new dn;s.updateFromServerResponse(n);const o=new dt({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Bi(o),o}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];B(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?pc(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new dn;c.updateFromIdToken(r);const d=new dt({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:l}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ds(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,g),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Map;function ht(e){yt(e instanceof Function,"Expected a class definition");let t=Ea.get(e);return t?(yt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ea.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}yc.type="NONE";const Ta=yc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e,t,n){return`firebase:${e}:${t}:${n}`}class hn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Ri(this.userKey,s.apiKey,o),this.fullPersistenceKey=Ri("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?dt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new hn(ht(Ta),t,r);const s=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let o=s[0]||ht(Ta);const l=Ri(r,t.config.apiKey,t.name);let c=null;for(const g of n)try{const p=await g._get(l);if(p){const T=dt._fromJSON(t,p);g!==o&&(c=T),o=g;break}}catch{}const d=s.filter(g=>g._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new hn(o,t,r):(o=d[0],c&&await o._set(l,c.toJSON()),await Promise.all(n.map(async g=>{if(g!==o)try{await g._remove(l)}catch{}})),new hn(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ic(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(_c(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Tc(t))return"Blackberry";if(Sc(t))return"Webos";if(wc(t))return"Safari";if((t.includes("chrome/")||bc(t))&&!t.includes("edge/"))return"Chrome";if(Ec(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _c(e=Se()){return/firefox\//i.test(e)}function wc(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function bc(e=Se()){return/crios\//i.test(e)}function Ic(e=Se()){return/iemobile/i.test(e)}function Ec(e=Se()){return/android/i.test(e)}function Tc(e=Se()){return/blackberry/i.test(e)}function Sc(e=Se()){return/webos/i.test(e)}function Bs(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function fg(e=Se()){var t;return Bs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function gg(){return Ah()&&document.documentMode===10}function Ac(e=Se()){return Bs(e)||Ec(e)||Sc(e)||Tc(e)||/windows phone/i.test(e)||Ic(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e,t=[]){let n;switch(e){case"Browser":n=Sa(Se());break;case"Worker":n=`${Sa(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${tn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((l,c)=>{try{const d=t(o);l(d)}catch(d){c(d)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(e,t={}){return bt(e,"GET","/v2/passwordPolicy",wt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=6;class yg{constructor(t){var n,r,s,o;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:pg,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,o,l,c;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,d),this.validatePasswordCharacterOptions(t,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(s=d.containsLowercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(o=d.containsUppercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(l=d.containsNumericCharacter)!==null&&l!==void 0?l:!0),d.isValid&&(d.isValid=(c=d.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),d}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Aa(this),this.idTokenSubscription=new Aa(this),this.beforeStateQueue=new vg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await mc(this,{idToken:t}),r=await dt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(et(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(t);(!l||l===c)&&(d!=null&&d.user)&&(s=d.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Bi(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Qf()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(et(this.app))return Promise.reject(vt(this));const n=t?Qe(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return et(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await mg(this),n=new yg(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new en("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hg(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ht(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const d=t.addObserver(n,r,s);return()=>{l=!0,d()}}else{const d=t.addObserver(n);return()=>{l=!0,d()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Yf(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ut(e){return Qe(e)}class Aa{constructor(t){this.auth=t,this.observer=null,this.addObserver=Nh(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wg(e){or=e}function Cc(e){return or.loadJS(e)}function bg(){return or.recaptchaEnterpriseScript}function Ig(){return or.gapiScript}function Eg(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Tg{constructor(){this.enterprise=new Sg}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Sg{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const Ag="recaptcha-enterprise",Pc="NO_RECAPTCHA";class kg{constructor(t){this.type=Ag,this.auth=Ut(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,c)=>{rg(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const g=new ig(d);return o.tenantId==null?o._agentRecaptchaConfig=g:o._tenantRecaptchaConfigs[o.tenantId]=g,l(g.siteKey)}}).catch(d=>{c(d)})})}function s(o,l,c){const d=window.grecaptcha;ba(d)?d.enterprise.ready(()=>{d.enterprise.execute(o,{action:t}).then(g=>{l(g)}).catch(()=>{l(Pc)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Tg().execute("siteKey",{action:"verify"}):new Promise((o,l)=>{r(this.auth).then(c=>{if(!n&&ba(window.grecaptcha))s(c,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let d=bg();d.length!==0&&(d+=c),Cc(d).then(()=>{s(c,o,l)}).catch(g=>{l(g)})}}).catch(c=>{l(c)})})}}async function ka(e,t,n,r=!1,s=!1){const o=new kg(e);let l;if(s)l=Pc;else try{l=await o.verify(n)}catch{l=await o.verify(n,!0)}const c=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const d=c.phoneEnrollmentInfo.phoneNumber,g=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:g,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const d=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function $i(e,t,n,r,s){var o;if(!((o=e._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await ka(e,t,n,n==="getOobCode");return r(e,l)}else return r(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ka(e,t,n,n==="getOobCode");return r(e,c)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(e,t){const n=Vt(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(qn(o,t??{}))return s;Ye(s,"already-initialized")}return n.initialize({options:t})}function Pg(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Rg(e,t,n){const r=Ut(e);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,o=Rc(t),{host:l,port:c}=Og(t),d=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${l}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ng()}function Rc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Og(e){const t=Rc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Ca(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:Ca(l)}}}function Ca(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ng(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ut("not implemented")}_getIdTokenResponse(t){return ut("not implemented")}_linkToIdToken(t,n){return ut("not implemented")}_getReauthenticationResolver(t){return ut("not implemented")}}async function Dg(e,t){return bt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(e,t){return si(e,"POST","/v1/accounts:signInWithPassword",wt(e,t))}async function xg(e,t){return bt(e,"POST","/v1/accounts:sendOobCode",wt(e,t))}async function Mg(e,t){return xg(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(e,t){return si(e,"POST","/v1/accounts:signInWithEmailLink",wt(e,t))}async function Ug(e,t){return si(e,"POST","/v1/accounts:signInWithEmailLink",wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends $s{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Yn(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Yn(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(t,n,"signInWithPassword",Lg);case"emailLink":return Vg(t,{email:this._email,oobCode:this._password});default:Ye(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(t,r,"signUpPassword",Dg);case"emailLink":return Ug(t,{idToken:n,email:this._email,oobCode:this._password});default:Ye(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(e,t){return si(e,"POST","/v1/accounts:signInWithIdp",wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="http://localhost";class Yt extends $s{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Yt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,o=Ms(n,["providerId","signInMethod"]);if(!r||!s)return null;const l=new Yt(r,s);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return fn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,fn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,fn(t,n)}buildRequest(){const t={requestUri:Fg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ii(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $g(e){const t=Bn($n(e)).link,n=t?Bn($n(t)).deep_link_id:null,r=Bn($n(e)).deep_link_id;return(r?Bn($n(r)).link:null)||r||n||t||e}class js{constructor(t){var n,r,s,o,l,c;const d=Bn($n(t)),g=(n=d.apiKey)!==null&&n!==void 0?n:null,p=(r=d.oobCode)!==null&&r!==void 0?r:null,T=Bg((s=d.mode)!==null&&s!==void 0?s:null);B(g&&p&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=p,this.continueUrl=(o=d.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(l=d.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=d.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=$g(t);try{return new js(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.providerId=Tn.PROVIDER_ID}static credential(t,n){return Yn._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=js.parseLink(n);return B(r,"argument-error"),Yn._fromEmailAndCode(t,r.code,r.tenantId)}}Tn.PROVIDER_ID="password";Tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Oc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends oi{constructor(){super("facebook.com")}static credential(t){return Yt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return At.credential(t.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends oi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Yt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends oi{constructor(){super("github.com")}static credential(t){return Yt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ct.credential(t.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends oi{constructor(){super("twitter.com")}static credential(t,n){return Yt._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(e,t){return si(e,"POST","/v1/accounts:signUp",wt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const o=await dt._fromIdTokenResponse(t,r,s),l=Pa(r);return new Xt({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Pa(r);return new Xt({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Pa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Fe{constructor(t,n,r,s){var o;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ji.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new ji(t,n,r,s)}}function Nc(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ji._fromErrorAndOperation(e,o,t,r):o})}async function Hg(e,t,n=!1){const r=await Kn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Xt._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(e,t,n=!1){const{auth:r}=e;if(et(r.app))return Promise.reject(vt(r));const s="reauthenticate";try{const o=await Kn(e,Nc(r,s,t,e),n);B(o.idToken,r,"internal-error");const l=Fs(o.idToken);B(l,r,"internal-error");const{sub:c}=l;return B(e.uid===c,r,"user-mismatch"),Xt._forOperation(e,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(e,t,n=!1){if(et(e.app))return Promise.reject(vt(e));const r="signIn",s=await Nc(e,r,t),o=await Xt._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(o.user),o}async function Wg(e,t){return Dc(Ut(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(e){const t=Ut(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function qg(e,t,n){const r=Ut(e);await $i(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Mg)}async function Gg(e,t,n){if(et(e.app))return Promise.reject(vt(e));const r=Ut(e),l=await $i(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jg).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Lc(e),d}),c=await Xt._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function Kg(e,t,n){return et(e.app)?Promise.reject(vt(e)):Wg(Qe(e),Tn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lc(e),r})}function Yg(e,t,n,r){return Qe(e).onIdTokenChanged(t,n,r)}function Xg(e,t,n){return Qe(e).beforeAuthStateChanged(t,n)}function Jg(e){return Qe(e).signOut()}const Hi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hi,"1"),this.storage.removeItem(Hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=1e3,Zg=10;class Mc extends xc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ac(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,c,d)=>{this.notifyListeners(l,d)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);gg()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Zg):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Qg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Mc.type="LOCAL";const ev=Mc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends xc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Vc.type="SESSION";const Uc=Vc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ar(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:o}=n.data,l=this.handlersMap[s];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(l).map(async g=>g(n.origin,o)),d=await tv(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:d})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ar.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,l;return new Promise((c,d)=>{const g=Hs("",20);s.port1.start();const p=setTimeout(()=>{d(new Error("unsupported_event"))},r);l={messageChannel:s,onMessage(T){const k=T;if(k.data.eventId===g)switch(k.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(k.data.response);break;default:clearTimeout(p),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:g,data:n},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function iv(e){nt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function rv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sv(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ov(){return Fc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="firebaseLocalStorageDb",av=1,zi="firebaseLocalStorage",$c="fbase_key";class ai{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lr(e,t){return e.transaction([zi],t?"readwrite":"readonly").objectStore(zi)}function lv(){const e=indexedDB.deleteDatabase(Bc);return new ai(e).toPromise()}function hs(){const e=indexedDB.open(Bc,av);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(zi,{keyPath:$c})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(zi)?t(r):(r.close(),await lv(),t(await hs()))})})}async function Ra(e,t,n){const r=lr(e,!0).put({[$c]:t,value:n});return new ai(r).toPromise()}async function cv(e,t){const n=lr(e,!1).get(t),r=await new ai(n).toPromise();return r===void 0?null:r.value}function Oa(e,t){const n=lr(e,!0).delete(t);return new ai(n).toPromise()}const uv=800,dv=3;class jc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hs(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>dv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ar._getInstance(ov()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await rv(),!this.activeServiceWorker)return;this.sender=new nv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||sv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hs();return await Ra(t,Hi,"1"),await Oa(t,Hi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ra(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>cv(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oa(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const o=lr(s,!1).getAll();return new ai(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:o}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jc.type="LOCAL";const hv=jc;new ri(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(e,t){return t?ht(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends $s{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return fn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return fn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function gv(e){return Dc(e.auth,new zs(e),e.bypassAuthState)}function vv(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),zg(n,new zs(e),e.bypassAuthState)}async function mv(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),Hg(n,new zs(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,n,r,s,o=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:l,type:c}=t;if(l){this.reject(l);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return gv;case"linkViaPopup":case"linkViaRedirect":return mv;case"reauthViaPopup":case"reauthViaRedirect":return vv;default:Ye(this.auth,"internal-error")}}resolve(t){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=new ri(2e3,1e4);class un extends Hc{constructor(t,n,r,s,o){super(t,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");const t=Hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,pv.get())};t()}}un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="pendingRedirect",Oi=new Map;class _v extends Hc{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Oi.get(this.auth._key());if(!t){try{const r=await wv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Oi.set(this.auth._key(),t)}return this.bypassAuthState||Oi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wv(e,t){const n=Ev(t),r=Iv(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bv(e,t){Oi.set(e._key(),t)}function Iv(e){return ht(e._redirectPersistence)}function Ev(e){return Ri(yv,e.config.apiKey,e.name)}async function Tv(e,t,n=!1){if(et(e.app))return Promise.reject(vt(e));const r=Ut(e),s=fv(r,t),l=await new _v(r,s,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=10*60*1e3;class Av{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!kv(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!zc(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Sv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Na(t))}saveEventToCache(t){this.cachedEventUids.add(Na(t)),this.lastProcessedEventTime=Date.now()}}function Na(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function zc({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function kv(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zc(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cv(e,t={}){return bt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rv=/^https?/;async function Ov(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Cv(e);for(const n of t)try{if(Nv(n))return}catch{}Ye(e,"unauthorized-domain")}function Nv(e){const t=us(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!Rv.test(n))return!1;if(Pv.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=new ri(3e4,6e4);function Da(){const e=nt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Lv(e){return new Promise((t,n)=>{var r,s,o;function l(){Da(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Da(),n(tt(e,"network-request-failed"))},timeout:Dv.get()})}if(!((s=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((o=nt().gapi)===null||o===void 0)&&o.load)l();else{const c=Eg("iframefcb");return nt()[c]=()=>{gapi.load?l():n(tt(e,"network-request-failed"))},Cc(`${Ig()}?onload=${c}`).catch(d=>n(d))}}).catch(t=>{throw Ni=null,t})}let Ni=null;function xv(e){return Ni=Ni||Lv(e),Ni}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new ri(5e3,15e3),Vv="__/auth/iframe",Uv="emulator/auth/iframe",Fv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $v(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Us(t,Uv):`https://${e.config.authDomain}/${Vv}`,r={apiKey:t.apiKey,appName:e.name,v:tn},s=Bv.get(e.config.apiHost);s&&(r.eid=s);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ii(r).slice(1)}`}async function jv(e){const t=await xv(e),n=nt().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:$v(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fv,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const l=tt(e,"network-request-failed"),c=nt().setTimeout(()=>{o(l)},Mv.get());function d(){nt().clearTimeout(c),s(r)}r.ping(d).then(d,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zv=500,Wv=600,qv="_blank",Gv="http://localhost";class La{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kv(e,t,n,r=zv,s=Wv){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d=Object.assign(Object.assign({},Hv),{width:r.toString(),height:s.toString(),top:o,left:l}),g=Se().toLowerCase();n&&(c=bc(g)?qv:n),_c(g)&&(t=t||Gv,d.scrollbars="yes");const p=Object.entries(d).reduce((k,[E,S])=>`${k}${E}=${S},`,"");if(fg(g)&&c!=="_self")return Yv(t||"",c),new La(null);const T=window.open(t||"",c,p);B(T,e,"popup-blocked");try{T.focus()}catch{}return new La(T)}function Yv(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="__/auth/handler",Jv="emulator/auth/handler",Qv=encodeURIComponent("fac");async function xa(e,t,n,r,s,o){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:tn,eventId:s};if(t instanceof Oc){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",Oh(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,T]of Object.entries({}))l[p]=T}if(t instanceof oi){const p=t.getScopes().filter(T=>T!=="");p.length>0&&(l.scopes=p.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const d=await e._getAppCheckToken(),g=d?`#${Qv}=${encodeURIComponent(d)}`:"";return`${Zv(e)}?${ii(c).slice(1)}${g}`}function Zv({config:e}){return e.emulator?Us(e,Jv):`https://${e.authDomain}/${Xv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="webStorageSupport";class em{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uc,this._completeRedirectFn=Tv,this._overrideRedirectResult=bv}async _openPopup(t,n,r,s){var o;yt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await xa(t,n,r,us(),s);return Kv(t,l,Hs())}async _openRedirect(t,n,r,s){await this._originValidation(t);const o=await xa(t,n,r,us(),s);return iv(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(yt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await jv(t),r=new Av(t);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Gr,{type:Gr},s=>{var o;const l=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Gr];l!==void 0&&n(!!l),Ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ov(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ac()||wc()||Bs()}}const tm=em;var Ma="@firebase/auth",Va="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rm(e){Ke(new Ve("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;B(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:l,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kc(e)},g=new _g(r,s,o,d);return Pg(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ke(new Ve("auth-internal",t=>{const n=Ut(t.getProvider("auth").getImmediate());return(r=>new nm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ce(Ma,Va,im(e)),Ce(Ma,Va,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=5*60,om=Zl("authIdTokenMaxAge")||sm;let Ua=null;const am=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>om)return;const s=n==null?void 0:n.token;Ua!==s&&(Ua=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lm(e=sr()){const t=Vt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Cg(e,{popupRedirectResolver:tm,persistence:[hv,ev,Uc]}),r=Zl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=am(o.toString());Xg(n,l,()=>l(n.currentUser)),Yg(n,c=>l(c))}}const s=Xl("auth");return s&&Rg(n,`http://${s}`),n}function cm(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}wg({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const o=tt("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",cm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rm("Browser");var Fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wc;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,h){function m(){}m.prototype=h.prototype,y.D=h.prototype,y.prototype=new m,y.prototype.constructor=y,y.C=function(I,_,w){for(var v=Array(arguments.length-2),F=2;F<arguments.length;F++)v[F-2]=arguments[F];return h.prototype[_].apply(I,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,h,m){m||(m=0);var I=Array(16);if(typeof h=="string")for(var _=0;16>_;++_)I[_]=h.charCodeAt(m++)|h.charCodeAt(m++)<<8|h.charCodeAt(m++)<<16|h.charCodeAt(m++)<<24;else for(_=0;16>_;++_)I[_]=h[m++]|h[m++]<<8|h[m++]<<16|h[m++]<<24;h=y.g[0],m=y.g[1],_=y.g[2];var w=y.g[3],v=h+(w^m&(_^w))+I[0]+3614090360&4294967295;h=m+(v<<7&4294967295|v>>>25),v=w+(_^h&(m^_))+I[1]+3905402710&4294967295,w=h+(v<<12&4294967295|v>>>20),v=_+(m^w&(h^m))+I[2]+606105819&4294967295,_=w+(v<<17&4294967295|v>>>15),v=m+(h^_&(w^h))+I[3]+3250441966&4294967295,m=_+(v<<22&4294967295|v>>>10),v=h+(w^m&(_^w))+I[4]+4118548399&4294967295,h=m+(v<<7&4294967295|v>>>25),v=w+(_^h&(m^_))+I[5]+1200080426&4294967295,w=h+(v<<12&4294967295|v>>>20),v=_+(m^w&(h^m))+I[6]+2821735955&4294967295,_=w+(v<<17&4294967295|v>>>15),v=m+(h^_&(w^h))+I[7]+4249261313&4294967295,m=_+(v<<22&4294967295|v>>>10),v=h+(w^m&(_^w))+I[8]+1770035416&4294967295,h=m+(v<<7&4294967295|v>>>25),v=w+(_^h&(m^_))+I[9]+2336552879&4294967295,w=h+(v<<12&4294967295|v>>>20),v=_+(m^w&(h^m))+I[10]+4294925233&4294967295,_=w+(v<<17&4294967295|v>>>15),v=m+(h^_&(w^h))+I[11]+2304563134&4294967295,m=_+(v<<22&4294967295|v>>>10),v=h+(w^m&(_^w))+I[12]+1804603682&4294967295,h=m+(v<<7&4294967295|v>>>25),v=w+(_^h&(m^_))+I[13]+4254626195&4294967295,w=h+(v<<12&4294967295|v>>>20),v=_+(m^w&(h^m))+I[14]+2792965006&4294967295,_=w+(v<<17&4294967295|v>>>15),v=m+(h^_&(w^h))+I[15]+1236535329&4294967295,m=_+(v<<22&4294967295|v>>>10),v=h+(_^w&(m^_))+I[1]+4129170786&4294967295,h=m+(v<<5&4294967295|v>>>27),v=w+(m^_&(h^m))+I[6]+3225465664&4294967295,w=h+(v<<9&4294967295|v>>>23),v=_+(h^m&(w^h))+I[11]+643717713&4294967295,_=w+(v<<14&4294967295|v>>>18),v=m+(w^h&(_^w))+I[0]+3921069994&4294967295,m=_+(v<<20&4294967295|v>>>12),v=h+(_^w&(m^_))+I[5]+3593408605&4294967295,h=m+(v<<5&4294967295|v>>>27),v=w+(m^_&(h^m))+I[10]+38016083&4294967295,w=h+(v<<9&4294967295|v>>>23),v=_+(h^m&(w^h))+I[15]+3634488961&4294967295,_=w+(v<<14&4294967295|v>>>18),v=m+(w^h&(_^w))+I[4]+3889429448&4294967295,m=_+(v<<20&4294967295|v>>>12),v=h+(_^w&(m^_))+I[9]+568446438&4294967295,h=m+(v<<5&4294967295|v>>>27),v=w+(m^_&(h^m))+I[14]+3275163606&4294967295,w=h+(v<<9&4294967295|v>>>23),v=_+(h^m&(w^h))+I[3]+4107603335&4294967295,_=w+(v<<14&4294967295|v>>>18),v=m+(w^h&(_^w))+I[8]+1163531501&4294967295,m=_+(v<<20&4294967295|v>>>12),v=h+(_^w&(m^_))+I[13]+2850285829&4294967295,h=m+(v<<5&4294967295|v>>>27),v=w+(m^_&(h^m))+I[2]+4243563512&4294967295,w=h+(v<<9&4294967295|v>>>23),v=_+(h^m&(w^h))+I[7]+1735328473&4294967295,_=w+(v<<14&4294967295|v>>>18),v=m+(w^h&(_^w))+I[12]+2368359562&4294967295,m=_+(v<<20&4294967295|v>>>12),v=h+(m^_^w)+I[5]+4294588738&4294967295,h=m+(v<<4&4294967295|v>>>28),v=w+(h^m^_)+I[8]+2272392833&4294967295,w=h+(v<<11&4294967295|v>>>21),v=_+(w^h^m)+I[11]+1839030562&4294967295,_=w+(v<<16&4294967295|v>>>16),v=m+(_^w^h)+I[14]+4259657740&4294967295,m=_+(v<<23&4294967295|v>>>9),v=h+(m^_^w)+I[1]+2763975236&4294967295,h=m+(v<<4&4294967295|v>>>28),v=w+(h^m^_)+I[4]+1272893353&4294967295,w=h+(v<<11&4294967295|v>>>21),v=_+(w^h^m)+I[7]+4139469664&4294967295,_=w+(v<<16&4294967295|v>>>16),v=m+(_^w^h)+I[10]+3200236656&4294967295,m=_+(v<<23&4294967295|v>>>9),v=h+(m^_^w)+I[13]+681279174&4294967295,h=m+(v<<4&4294967295|v>>>28),v=w+(h^m^_)+I[0]+3936430074&4294967295,w=h+(v<<11&4294967295|v>>>21),v=_+(w^h^m)+I[3]+3572445317&4294967295,_=w+(v<<16&4294967295|v>>>16),v=m+(_^w^h)+I[6]+76029189&4294967295,m=_+(v<<23&4294967295|v>>>9),v=h+(m^_^w)+I[9]+3654602809&4294967295,h=m+(v<<4&4294967295|v>>>28),v=w+(h^m^_)+I[12]+3873151461&4294967295,w=h+(v<<11&4294967295|v>>>21),v=_+(w^h^m)+I[15]+530742520&4294967295,_=w+(v<<16&4294967295|v>>>16),v=m+(_^w^h)+I[2]+3299628645&4294967295,m=_+(v<<23&4294967295|v>>>9),v=h+(_^(m|~w))+I[0]+4096336452&4294967295,h=m+(v<<6&4294967295|v>>>26),v=w+(m^(h|~_))+I[7]+1126891415&4294967295,w=h+(v<<10&4294967295|v>>>22),v=_+(h^(w|~m))+I[14]+2878612391&4294967295,_=w+(v<<15&4294967295|v>>>17),v=m+(w^(_|~h))+I[5]+4237533241&4294967295,m=_+(v<<21&4294967295|v>>>11),v=h+(_^(m|~w))+I[12]+1700485571&4294967295,h=m+(v<<6&4294967295|v>>>26),v=w+(m^(h|~_))+I[3]+2399980690&4294967295,w=h+(v<<10&4294967295|v>>>22),v=_+(h^(w|~m))+I[10]+4293915773&4294967295,_=w+(v<<15&4294967295|v>>>17),v=m+(w^(_|~h))+I[1]+2240044497&4294967295,m=_+(v<<21&4294967295|v>>>11),v=h+(_^(m|~w))+I[8]+1873313359&4294967295,h=m+(v<<6&4294967295|v>>>26),v=w+(m^(h|~_))+I[15]+4264355552&4294967295,w=h+(v<<10&4294967295|v>>>22),v=_+(h^(w|~m))+I[6]+2734768916&4294967295,_=w+(v<<15&4294967295|v>>>17),v=m+(w^(_|~h))+I[13]+1309151649&4294967295,m=_+(v<<21&4294967295|v>>>11),v=h+(_^(m|~w))+I[4]+4149444226&4294967295,h=m+(v<<6&4294967295|v>>>26),v=w+(m^(h|~_))+I[11]+3174756917&4294967295,w=h+(v<<10&4294967295|v>>>22),v=_+(h^(w|~m))+I[2]+718787259&4294967295,_=w+(v<<15&4294967295|v>>>17),v=m+(w^(_|~h))+I[9]+3951481745&4294967295,y.g[0]=y.g[0]+h&4294967295,y.g[1]=y.g[1]+(_+(v<<21&4294967295|v>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+w&4294967295}r.prototype.u=function(y,h){h===void 0&&(h=y.length);for(var m=h-this.blockSize,I=this.B,_=this.h,w=0;w<h;){if(_==0)for(;w<=m;)s(this,y,w),w+=this.blockSize;if(typeof y=="string"){for(;w<h;)if(I[_++]=y.charCodeAt(w++),_==this.blockSize){s(this,I),_=0;break}}else for(;w<h;)if(I[_++]=y[w++],_==this.blockSize){s(this,I),_=0;break}}this.h=_,this.o+=h},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var h=1;h<y.length-8;++h)y[h]=0;var m=8*this.o;for(h=y.length-8;h<y.length;++h)y[h]=m&255,m/=256;for(this.u(y),y=Array(16),h=m=0;4>h;++h)for(var I=0;32>I;I+=8)y[m++]=this.g[h]>>>I&255;return y};function o(y,h){var m=c;return Object.prototype.hasOwnProperty.call(m,y)?m[y]:m[y]=h(y)}function l(y,h){this.h=h;for(var m=[],I=!0,_=y.length-1;0<=_;_--){var w=y[_]|0;I&&w==h||(m[_]=w,I=!1)}this.g=m}var c={};function d(y){return-128<=y&&128>y?o(y,function(h){return new l([h|0],0>h?-1:0)}):new l([y|0],0>y?-1:0)}function g(y){if(isNaN(y)||!isFinite(y))return T;if(0>y)return O(g(-y));for(var h=[],m=1,I=0;y>=m;I++)h[I]=y/m|0,m*=4294967296;return new l(h,0)}function p(y,h){if(y.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(y.charAt(0)=="-")return O(p(y.substring(1),h));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=g(Math.pow(h,8)),I=T,_=0;_<y.length;_+=8){var w=Math.min(8,y.length-_),v=parseInt(y.substring(_,_+w),h);8>w?(w=g(Math.pow(h,w)),I=I.j(w).add(g(v))):(I=I.j(m),I=I.add(g(v)))}return I}var T=d(0),k=d(1),E=d(16777216);e=l.prototype,e.m=function(){if(P(this))return-O(this).m();for(var y=0,h=1,m=0;m<this.g.length;m++){var I=this.i(m);y+=(0<=I?I:4294967296+I)*h,h*=4294967296}return y},e.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S(this))return"0";if(P(this))return"-"+O(this).toString(y);for(var h=g(Math.pow(y,6)),m=this,I="";;){var _=V(m,h).g;m=L(m,_.j(h));var w=((0<m.g.length?m.g[0]:m.h)>>>0).toString(y);if(m=_,S(m))return w+I;for(;6>w.length;)w="0"+w;I=w+I}},e.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function S(y){if(y.h!=0)return!1;for(var h=0;h<y.g.length;h++)if(y.g[h]!=0)return!1;return!0}function P(y){return y.h==-1}e.l=function(y){return y=L(this,y),P(y)?-1:S(y)?0:1};function O(y){for(var h=y.g.length,m=[],I=0;I<h;I++)m[I]=~y.g[I];return new l(m,~y.h).add(k)}e.abs=function(){return P(this)?O(this):this},e.add=function(y){for(var h=Math.max(this.g.length,y.g.length),m=[],I=0,_=0;_<=h;_++){var w=I+(this.i(_)&65535)+(y.i(_)&65535),v=(w>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);I=v>>>16,w&=65535,v&=65535,m[_]=v<<16|w}return new l(m,m[m.length-1]&-2147483648?-1:0)};function L(y,h){return y.add(O(h))}e.j=function(y){if(S(this)||S(y))return T;if(P(this))return P(y)?O(this).j(O(y)):O(O(this).j(y));if(P(y))return O(this.j(O(y)));if(0>this.l(E)&&0>y.l(E))return g(this.m()*y.m());for(var h=this.g.length+y.g.length,m=[],I=0;I<2*h;I++)m[I]=0;for(I=0;I<this.g.length;I++)for(var _=0;_<y.g.length;_++){var w=this.i(I)>>>16,v=this.i(I)&65535,F=y.i(_)>>>16,j=y.i(_)&65535;m[2*I+2*_]+=v*j,M(m,2*I+2*_),m[2*I+2*_+1]+=w*j,M(m,2*I+2*_+1),m[2*I+2*_+1]+=v*F,M(m,2*I+2*_+1),m[2*I+2*_+2]+=w*F,M(m,2*I+2*_+2)}for(I=0;I<h;I++)m[I]=m[2*I+1]<<16|m[2*I];for(I=h;I<2*h;I++)m[I]=0;return new l(m,0)};function M(y,h){for(;(y[h]&65535)!=y[h];)y[h+1]+=y[h]>>>16,y[h]&=65535,h++}function D(y,h){this.g=y,this.h=h}function V(y,h){if(S(h))throw Error("division by zero");if(S(y))return new D(T,T);if(P(y))return h=V(O(y),h),new D(O(h.g),O(h.h));if(P(h))return h=V(y,O(h)),new D(O(h.g),h.h);if(30<y.g.length){if(P(y)||P(h))throw Error("slowDivide_ only works with positive integers.");for(var m=k,I=h;0>=I.l(y);)m=U(m),I=U(I);var _=R(m,1),w=R(I,1);for(I=R(I,2),m=R(m,2);!S(I);){var v=w.add(I);0>=v.l(y)&&(_=_.add(m),w=v),I=R(I,1),m=R(m,1)}return h=L(y,_.j(h)),new D(_,h)}for(_=T;0<=y.l(h);){for(m=Math.max(1,Math.floor(y.m()/h.m())),I=Math.ceil(Math.log(m)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),w=g(m),v=w.j(h);P(v)||0<v.l(y);)m-=I,w=g(m),v=w.j(h);S(w)&&(w=k),_=_.add(w),y=L(y,v)}return new D(_,y)}e.A=function(y){return V(this,y).h},e.and=function(y){for(var h=Math.max(this.g.length,y.g.length),m=[],I=0;I<h;I++)m[I]=this.i(I)&y.i(I);return new l(m,this.h&y.h)},e.or=function(y){for(var h=Math.max(this.g.length,y.g.length),m=[],I=0;I<h;I++)m[I]=this.i(I)|y.i(I);return new l(m,this.h|y.h)},e.xor=function(y){for(var h=Math.max(this.g.length,y.g.length),m=[],I=0;I<h;I++)m[I]=this.i(I)^y.i(I);return new l(m,this.h^y.h)};function U(y){for(var h=y.g.length+1,m=[],I=0;I<h;I++)m[I]=y.i(I)<<1|y.i(I-1)>>>31;return new l(m,y.h)}function R(y,h){var m=h>>5;h%=32;for(var I=y.g.length-m,_=[],w=0;w<I;w++)_[w]=0<h?y.i(w+m)>>>h|y.i(w+m+1)<<32-h:y.i(w+m);return new l(_,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=g,l.fromString=p,Wc=l}).apply(typeof Fa<"u"?Fa:typeof self<"u"?self:typeof window<"u"?window:{});var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,u){return i==Array.prototype||i==Object.prototype||(i[a]=u.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Si=="object"&&Si];for(var a=0;a<i.length;++a){var u=i[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=n(this);function s(i,a){if(a)e:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break e;u=u[A]}i=i[i.length-1],f=u[i],a=a(f),a!=f&&a!=null&&t(u,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var u=0,f=!1,A={next:function(){if(!f&&u<i.length){var C=u++;return{value:a(C,i[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function d(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function g(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function p(i,a,u){return i.call.apply(i.bind,arguments)}function T(i,a,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(a,A)}}return function(){return i.apply(a,arguments)}}function k(i,a,u){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:T,k.apply(null,arguments)}function E(i,a){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function S(i,a){function u(){}u.prototype=a.prototype,i.aa=a.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,A,C){for(var x=Array(arguments.length-2),se=2;se<arguments.length;se++)x[se-2]=arguments[se];return a.prototype[A].apply(f,x)}}function P(i){const a=i.length;if(0<a){const u=Array(a);for(let f=0;f<a;f++)u[f]=i[f];return u}return[]}function O(i,a){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(d(f)){const A=i.length||0,C=f.length||0;i.length=A+C;for(let x=0;x<C;x++)i[A+x]=f[x]}else i.push(f)}}class L{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function M(i){return/^[\s\xa0]*$/.test(i)}function D(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function V(i){return V[" "](i),i}V[" "]=function(){};var U=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function R(i,a,u){for(const f in i)a.call(u,i[f],f,i)}function y(i,a){for(const u in i)a.call(void 0,i[u],u,i)}function h(i){const a={};for(const u in i)a[u]=i[u];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(i,a){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let C=0;C<m.length;C++)u=m[C],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function _(i){var a=1;i=i.split(":");const u=[];for(;0<a&&i.length;)u.push(i.shift()),a--;return i.length&&u.push(i.join(":")),u}function w(i){c.setTimeout(()=>{throw i},0)}function v(){var i=ae;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class F{constructor(){this.h=this.g=null}add(a,u){const f=j.get();f.set(a,u),this.h?this.h.next=f:this.g=f,this.h=f}}var j=new L(()=>new q,i=>i.reset());class q{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let G,W=!1,ae=new F,he=()=>{const i=c.Promise.resolve(void 0);G=()=>{i.then(X)}};var X=()=>{for(var i;i=v();){try{i.h.call(i.g)}catch(u){w(u)}var a=j;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}W=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Q(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var Be=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return i}();function De(i,a){if(Q.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(U){e:{try{V(a.nodeName);var A=!0;break e}catch{}A=!1}A||(a=null)}}else u=="mouseover"?a=i.fromElement:u=="mouseout"&&(a=i.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Z[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&De.aa.h.call(this)}}S(De,Q);var Z={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var de="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Ft(i,a,u,f,A){this.listener=i,this.proxy=null,this.src=a,this.type=u,this.capture=!!f,this.ha=A,this.key=++$e,this.da=this.fa=!1}function ge(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ci(i){this.src=i,this.g={},this.h=0}ci.prototype.add=function(i,a,u,f,A){var C=i.toString();i=this.g[C],i||(i=this.g[C]=[],this.h++);var x=fr(i,a,f,A);return-1<x?(a=i[x],u||(a.fa=!1)):(a=new Ft(a,this.src,C,!!f,A),a.fa=u,i.push(a)),a};function hr(i,a){var u=a.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,a,void 0),C;(C=0<=A)&&Array.prototype.splice.call(f,A,1),C&&(ge(a),i.g[u].length==0&&(delete i.g[u],i.h--))}}function fr(i,a,u,f){for(var A=0;A<i.length;++A){var C=i[A];if(!C.da&&C.listener==a&&C.capture==!!u&&C.ha==f)return A}return-1}var gr="closure_lm_"+(1e6*Math.random()|0),vr={};function eo(i,a,u,f,A){if(Array.isArray(a)){for(var C=0;C<a.length;C++)eo(i,a[C],u,f,A);return null}return u=io(u),i&&i[de]?i.K(a,u,g(f)?!!f.capture:!!f,A):Nu(i,a,u,!1,f,A)}function Nu(i,a,u,f,A,C){if(!a)throw Error("Invalid event type");var x=g(A)?!!A.capture:!!A,se=pr(i);if(se||(i[gr]=se=new ci(i)),u=se.add(a,u,f,x,C),u.proxy)return u;if(f=Du(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)Be||(A=x),A===void 0&&(A=!1),i.addEventListener(a.toString(),f,A);else if(i.attachEvent)i.attachEvent(no(a.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Du(){function i(u){return a.call(i.src,i.listener,u)}const a=Lu;return i}function to(i,a,u,f,A){if(Array.isArray(a))for(var C=0;C<a.length;C++)to(i,a[C],u,f,A);else f=g(f)?!!f.capture:!!f,u=io(u),i&&i[de]?(i=i.i,a=String(a).toString(),a in i.g&&(C=i.g[a],u=fr(C,u,f,A),-1<u&&(ge(C[u]),Array.prototype.splice.call(C,u,1),C.length==0&&(delete i.g[a],i.h--)))):i&&(i=pr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=fr(a,u,f,A)),(u=-1<i?a[i]:null)&&mr(u))}function mr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[de])hr(a.i,i);else{var u=i.type,f=i.proxy;a.removeEventListener?a.removeEventListener(u,f,i.capture):a.detachEvent?a.detachEvent(no(u),f):a.addListener&&a.removeListener&&a.removeListener(f),(u=pr(a))?(hr(u,i),u.h==0&&(u.src=null,a[gr]=null)):ge(i)}}}function no(i){return i in vr?vr[i]:vr[i]="on"+i}function Lu(i,a){if(i.da)i=!0;else{a=new De(a,this);var u=i.listener,f=i.ha||i.src;i.fa&&mr(i),i=u.call(f,a)}return i}function pr(i){return i=i[gr],i instanceof ci?i:null}var yr="__closure_events_fn_"+(1e9*Math.random()>>>0);function io(i){return typeof i=="function"?i:(i[yr]||(i[yr]=function(a){return i.handleEvent(a)}),i[yr])}function pe(){$.call(this),this.i=new ci(this),this.M=this,this.F=null}S(pe,$),pe.prototype[de]=!0,pe.prototype.removeEventListener=function(i,a,u,f){to(this,i,a,u,f)};function we(i,a){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=a.type||a,typeof a=="string")a=new Q(a,i);else if(a instanceof Q)a.target=a.target||i;else{var A=a;a=new Q(f,i),I(a,A)}if(A=!0,u)for(var C=u.length-1;0<=C;C--){var x=a.g=u[C];A=ui(x,f,!0,a)&&A}if(x=a.g=i,A=ui(x,f,!0,a)&&A,A=ui(x,f,!1,a)&&A,u)for(C=0;C<u.length;C++)x=a.g=u[C],A=ui(x,f,!1,a)&&A}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var u=i.g[a],f=0;f<u.length;f++)ge(u[f]);delete i.g[a],i.h--}}this.F=null},pe.prototype.K=function(i,a,u,f){return this.i.add(String(i),a,!1,u,f)},pe.prototype.L=function(i,a,u,f){return this.i.add(String(i),a,!0,u,f)};function ui(i,a,u,f){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var A=!0,C=0;C<a.length;++C){var x=a[C];if(x&&!x.da&&x.capture==u){var se=x.listener,me=x.ha||x.src;x.fa&&hr(i.i,x),A=se.call(me,f)!==!1&&A}}return A&&!f.defaultPrevented}function ro(i,a,u){if(typeof i=="function")u&&(i=k(i,u));else if(i&&typeof i.handleEvent=="function")i=k(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function so(i){i.g=ro(()=>{i.g=null,i.i&&(i.i=!1,so(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class xu extends ${constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:so(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(i){$.call(this),this.h=i,this.g={}}S(Sn,$);var oo=[];function ao(i){R(i.g,function(a,u){this.g.hasOwnProperty(u)&&mr(a)},i),i.g={}}Sn.prototype.N=function(){Sn.aa.N.call(this),ao(this)},Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _r=c.JSON.stringify,Mu=c.JSON.parse,Vu=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function wr(){}wr.prototype.h=null;function lo(i){return i.h||(i.h=i.i())}function Uu(){}var An={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function br(){Q.call(this,"d")}S(br,Q);function Ir(){Q.call(this,"c")}S(Ir,Q);var nn={},co=null;function Er(){return co=co||new pe}nn.La="serverreachability";function uo(i){Q.call(this,nn.La,i)}S(uo,Q);function kn(i){const a=Er();we(a,new uo(a))}nn.STAT_EVENT="statevent";function ho(i,a){Q.call(this,nn.STAT_EVENT,i),this.stat=a}S(ho,Q);function be(i){const a=Er();we(a,new ho(a,i))}nn.Ma="timingevent";function fo(i,a){Q.call(this,nn.Ma,i),this.size=a}S(fo,Q);function Cn(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function Pn(){this.g=!0}Pn.prototype.xa=function(){this.g=!1};function Fu(i,a,u,f,A,C){i.info(function(){if(i.g)if(C)for(var x="",se=C.split("&"),me=0;me<se.length;me++){var J=se[me].split("=");if(1<J.length){var ye=J[0];J=J[1];var _e=ye.split("_");x=2<=_e.length&&_e[1]=="type"?x+(ye+"="+J+"&"):x+(ye+"=redacted&")}}else x=null;else x=C;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+a+`
`+u+`
`+x})}function Bu(i,a,u,f,A,C,x){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+a+`
`+u+`
`+C+" "+x})}function rn(i,a,u,f){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+ju(i,u)+(f?" "+f:"")})}function $u(i,a){i.info(function(){return"TIMEOUT: "+a})}Pn.prototype.info=function(){};function ju(i,a){if(!i.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var x=1;x<A.length;x++)A[x]=""}}}}return _r(u)}catch{return a}}var Tr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sr;function di(){}S(di,wr),di.prototype.g=function(){return new XMLHttpRequest},di.prototype.i=function(){return{}},Sr=new di;function It(i,a,u,f){this.j=i,this.i=a,this.l=u,this.R=f||1,this.U=new Sn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new go}function go(){this.i=null,this.g="",this.h=!1}var vo={},Ar={};function kr(i,a,u){i.L=1,i.v=vi(at(a)),i.m=u,i.P=!0,mo(i,null)}function mo(i,a){i.F=Date.now(),hi(i),i.A=at(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Ro(u.i,"t",f),i.C=0,u=i.j.J,i.h=new go,i.g=Ko(i.j,u?a:null,!i.m),0<i.O&&(i.M=new xu(k(i.Y,i,i.g),i.O)),a=i.U,u=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(oo[0]=A.toString()),A=oo);for(var C=0;C<A.length;C++){var x=eo(u,A[C],f||a.handleEvent,!1,a.h||a);if(!x)break;a.g[x.key]=x}a=i.H?h(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),kn(),Fu(i.i,i.u,i.A,i.l,i.R,i.m)}It.prototype.ca=function(i){i=i.target;const a=this.M;a&&lt(i)==3?a.j():this.Y(i)},It.prototype.Y=function(i){try{if(i==this.g)e:{const _e=lt(this.g);var a=this.g.Ba();const an=this.g.Z();if(!(3>_e)&&(_e!=3||this.g&&(this.h.h||this.g.oa()||Vo(this.g)))){this.J||_e!=4||a==7||(a==8||0>=an?kn(3):kn(2)),Cr(this);var u=this.g.Z();this.X=u;t:if(po(this)){var f=Vo(this.g);i="";var A=f.length,C=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),Rn(this);var x="";break t}this.h.i=new c.TextDecoder}for(a=0;a<A;a++)this.h.h=!0,i+=this.h.i.decode(f[a],{stream:!(C&&a==A-1)});f.length=0,this.h.g+=i,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=u==200,Bu(this.i,this.u,this.A,this.l,this.R,_e,u),this.o){if(this.T&&!this.K){t:{if(this.g){var se,me=this.g;if((se=me.g?me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(se)){var J=se;break t}}J=null}if(u=J)rn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pr(this,u);else{this.o=!1,this.s=3,be(12),Bt(this),Rn(this);break e}}if(this.P){u=!0;let je;for(;!this.J&&this.C<x.length;)if(je=zu(this,x),je==Ar){_e==4&&(this.s=4,be(14),u=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(je==vo){this.s=4,be(15),rn(this.i,this.l,x,"[Invalid Chunk]"),u=!1;break}else rn(this.i,this.l,je,null),Pr(this,je);if(po(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||x.length!=0||this.h.h||(this.s=1,be(16),u=!1),this.o=this.o&&u,!u)rn(this.i,this.l,x,"[Invalid Chunked Response]"),Bt(this),Rn(this);else if(0<x.length&&!this.W){this.W=!0;var ye=this.j;ye.g==this&&ye.ba&&!ye.M&&(ye.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),xr(ye),ye.M=!0,be(11))}}else rn(this.i,this.l,x,null),Pr(this,x);_e==4&&Bt(this),this.o&&!this.J&&(_e==4?zo(this.j,this):(this.o=!1,hi(this)))}else ad(this.g),u==400&&0<x.indexOf("Unknown SID")?(this.s=3,be(12)):(this.s=0,be(13)),Bt(this),Rn(this)}}}catch{}finally{}};function po(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function zu(i,a){var u=i.C,f=a.indexOf(`
`,u);return f==-1?Ar:(u=Number(a.substring(u,f)),isNaN(u)?vo:(f+=1,f+u>a.length?Ar:(a=a.slice(f,f+u),i.C=f+u,a)))}It.prototype.cancel=function(){this.J=!0,Bt(this)};function hi(i){i.S=Date.now()+i.I,yo(i,i.I)}function yo(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Cn(k(i.ba,i),a)}function Cr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}It.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?($u(this.i,this.A),this.L!=2&&(kn(),be(17)),Bt(this),this.s=2,Rn(this)):yo(this,this.S-i)};function Rn(i){i.j.G==0||i.J||zo(i.j,i)}function Bt(i){Cr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,ao(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Pr(i,a){try{var u=i.j;if(u.G!=0&&(u.g==i||Rr(u.h,i))){if(!i.K&&Rr(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)bi(u),_i(u);else break e;Lr(u),be(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=Cn(k(u.Za,u),6e3));if(1>=bo(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else jt(u,11)}else if((i.K||u.g==i)&&bi(u),!M(a))for(A=u.Da.g.parse(a),a=0;a<A.length;a++){let J=A[a];if(u.T=J[0],J=J[1],u.G==2)if(J[0]=="c"){u.K=J[1],u.ia=J[2];const ye=J[3];ye!=null&&(u.la=ye,u.j.info("VER="+u.la));const _e=J[4];_e!=null&&(u.Aa=_e,u.j.info("SVER="+u.Aa));const an=J[5];an!=null&&typeof an=="number"&&0<an&&(f=1.5*an,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const je=i.g;if(je){const Ii=je.g?je.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ii){var C=f.h;C.g||Ii.indexOf("spdy")==-1&&Ii.indexOf("quic")==-1&&Ii.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Or(C,C.h),C.h=null))}if(f.D){const Mr=je.g?je.g.getResponseHeader("X-HTTP-Session-Id"):null;Mr&&(f.ya=Mr,le(f.I,f.D,Mr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var x=i;if(f.qa=Go(f,f.J?f.ia:null,f.W),x.K){Io(f.h,x);var se=x,me=f.L;me&&(se.I=me),se.B&&(Cr(se),hi(se)),f.g=x}else jo(f);0<u.i.length&&wi(u)}else J[0]!="stop"&&J[0]!="close"||jt(u,7);else u.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?jt(u,7):Dr(u):J[0]!="noop"&&u.l&&u.l.ta(J),u.v=0)}}kn(4)}catch{}}var Wu=class{constructor(i,a){this.g=i,this.map=a}};function _o(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function bo(i){return i.h?1:i.g?i.g.size:0}function Rr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Or(i,a){i.g?i.g.add(a):i.h=a}function Io(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}_o.prototype.cancel=function(){if(this.i=Eo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Eo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const u of i.g.values())a=a.concat(u.D);return a}return P(i.i)}function qu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var a=[],u=i.length,f=0;f<u;f++)a.push(i[f]);return a}a=[],u=0;for(f in i)a[u++]=i[f];return a}function Gu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var a=[];i=i.length;for(var u=0;u<i;u++)a.push(u);return a}a=[],u=0;for(const f in i)a[u++]=f;return a}}}function To(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var u=Gu(i),f=qu(i),A=f.length,C=0;C<A;C++)a.call(void 0,f[C],u&&u[C],i)}var So=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ku(i,a){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),A=null;if(0<=f){var C=i[u].substring(0,f);A=i[u].substring(f+1)}else C=i[u];a(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function $t(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof $t){this.h=i.h,fi(this,i.j),this.o=i.o,this.g=i.g,gi(this,i.s),this.l=i.l;var a=i.i,u=new Dn;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),Ao(this,u),this.m=i.m}else i&&(a=String(i).match(So))?(this.h=!1,fi(this,a[1]||"",!0),this.o=On(a[2]||""),this.g=On(a[3]||"",!0),gi(this,a[4]),this.l=On(a[5]||"",!0),Ao(this,a[6]||"",!0),this.m=On(a[7]||"")):(this.h=!1,this.i=new Dn(null,this.h))}$t.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Nn(a,ko,!0),":");var u=this.g;return(u||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Nn(a,ko,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Nn(u,u.charAt(0)=="/"?Ju:Xu,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Nn(u,Zu)),i.join("")};function at(i){return new $t(i)}function fi(i,a,u){i.j=u?On(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function gi(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Ao(i,a,u){a instanceof Dn?(i.i=a,ed(i.i,i.h)):(u||(a=Nn(a,Qu)),i.i=new Dn(a,i.h))}function le(i,a,u){i.i.set(a,u)}function vi(i){return le(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function On(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Nn(i,a,u){return typeof i=="string"?(i=encodeURI(i).replace(a,Yu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Yu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ko=/[#\/\?@]/g,Xu=/[#\?:]/g,Ju=/[#\?]/g,Qu=/[#\?@]/g,Zu=/#/g;function Dn(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Et(i){i.g||(i.g=new Map,i.h=0,i.i&&Ku(i.i,function(a,u){i.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}e=Dn.prototype,e.add=function(i,a){Et(this),this.i=null,i=sn(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(a),this.h+=1,this};function Co(i,a){Et(i),a=sn(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function Po(i,a){return Et(i),a=sn(i,a),i.g.has(a)}e.forEach=function(i,a){Et(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(a,A,f,this)},this)},this)},e.na=function(){Et(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let f=0;f<a.length;f++){const A=i[f];for(let C=0;C<A.length;C++)u.push(a[f])}return u},e.V=function(i){Et(this);let a=[];if(typeof i=="string")Po(this,i)&&(a=a.concat(this.g.get(sn(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)a=a.concat(i[u])}return a},e.set=function(i,a){return Et(this),this.i=null,i=sn(this,i),Po(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},e.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Ro(i,a,u){Co(i,a),0<u.length&&(i.i=null,i.g.set(sn(i,a),P(u)),i.h+=u.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var f=a[u];const C=encodeURIComponent(String(f)),x=this.V(f);for(f=0;f<x.length;f++){var A=C;x[f]!==""&&(A+="="+encodeURIComponent(String(x[f]))),i.push(A)}}return this.i=i.join("&")};function sn(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function ed(i,a){a&&!i.j&&(Et(i),i.i=null,i.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(Co(this,f),Ro(this,A,u))},i)),i.j=a}function td(i,a){const u=new Pn;if(c.Image){const f=new Image;f.onload=E(Tt,u,"TestLoadImage: loaded",!0,a,f),f.onerror=E(Tt,u,"TestLoadImage: error",!1,a,f),f.onabort=E(Tt,u,"TestLoadImage: abort",!1,a,f),f.ontimeout=E(Tt,u,"TestLoadImage: timeout",!1,a,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else a(!1)}function nd(i,a){const u=new Pn,f=new AbortController,A=setTimeout(()=>{f.abort(),Tt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:f.signal}).then(C=>{clearTimeout(A),C.ok?Tt(u,"TestPingServer: ok",!0,a):Tt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(A),Tt(u,"TestPingServer: error",!1,a)})}function Tt(i,a,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function id(){this.g=new Vu}function rd(i,a,u){const f=u||"";try{To(i,function(A,C){let x=A;g(A)&&(x=_r(A)),a.push(f+C+"="+encodeURIComponent(x))})}catch(A){throw a.push(f+"type="+encodeURIComponent("_badmap")),A}}function mi(i){this.l=i.Ub||null,this.j=i.eb||!1}S(mi,wr),mi.prototype.g=function(){return new pi(this.l,this.j)},mi.prototype.i=function(i){return function(){return i}}({});function pi(i,a){pe.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(pi,pe),e=pi.prototype,e.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,xn(this)},e.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ln(this)),this.readyState=0},e.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Oo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Oo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}e.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Ln(this):xn(this),this.readyState==3&&Oo(this)}},e.Ra=function(i){this.g&&(this.response=this.responseText=i,Ln(this))},e.Qa=function(i){this.g&&(this.response=i,Ln(this))},e.ga=function(){this.g&&Ln(this)};function Ln(i){i.readyState=4,i.l=null,i.j=null,i.v=null,xn(i)}e.setRequestHeader=function(i,a){this.u.append(i,a)},e.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=a.next();return i.join(`\r
`)};function xn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function No(i){let a="";return R(i,function(u,f){a+=f,a+=":",a+=u,a+=`\r
`}),a}function Nr(i,a,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=No(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):le(i,a,u))}function fe(i){pe.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(fe,pe);var sd=/^https?$/i,od=["POST","PUT"];e=fe.prototype,e.Ha=function(i){this.J=i},e.ea=function(i,a,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sr.g(),this.v=this.o?lo(this.o):lo(Sr),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(C){Do(this,C);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const C of f.keys())u.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(C=>C.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(od,a,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,x]of u)this.g.setRequestHeader(C,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mo(this),this.u=!0,this.g.send(i),this.u=!1}catch(C){Do(this,C)}};function Do(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Lo(i),yi(i)}function Lo(i){i.A||(i.A=!0,we(i,"complete"),we(i,"error"))}e.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,we(this,"complete"),we(this,"abort"),yi(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),fe.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?xo(this):this.bb())},e.bb=function(){xo(this)};function xo(i){if(i.h&&typeof l<"u"&&(!i.v[1]||lt(i)!=4||i.Z()!=2)){if(i.u&&lt(i)==4)ro(i.Ea,0,i);else if(we(i,"readystatechange"),lt(i)==4){i.h=!1;try{const x=i.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var u;if(!(u=a)){var f;if(f=x===0){var A=String(i.D).match(So)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!sd.test(A?A.toLowerCase():"")}u=f}if(u)we(i,"complete"),we(i,"success");else{i.m=6;try{var C=2<lt(i)?i.g.statusText:""}catch{C=""}i.l=C+" ["+i.Z()+"]",Lo(i)}}finally{yi(i)}}}}function yi(i,a){if(i.g){Mo(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||we(i,"ready");try{u.onreadystatechange=f}catch{}}}function Mo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}e.isActive=function(){return!!this.g};function lt(i){return i.g?i.g.readyState:0}e.Z=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Mu(a)}};function Vo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ad(i){const a={};i=(i.g&&2<=lt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(M(i[f]))continue;var u=_(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const C=a[A]||[];a[A]=C,C.push(u)}y(a,function(f){return f.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mn(i,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||a}function Uo(i){this.Aa=0,this.i=[],this.j=new Pn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mn("baseRetryDelayMs",5e3,i),this.cb=Mn("retryDelaySeedMs",1e4,i),this.Wa=Mn("forwardChannelMaxRetries",2,i),this.wa=Mn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new _o(i&&i.concurrentRequestLimit),this.Da=new id,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Uo.prototype,e.la=8,e.G=1,e.connect=function(i,a,u,f){be(0),this.W=i,this.H=a||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Go(this,null,this.W),wi(this)};function Dr(i){if(Fo(i),i.G==3){var a=i.U++,u=at(i.I);if(le(u,"SID",i.K),le(u,"RID",a),le(u,"TYPE","terminate"),Vn(i,u),a=new It(i,i.j,a),a.L=2,a.v=vi(at(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=Ko(a.j,null),a.g.ea(a.v)),a.F=Date.now(),hi(a)}qo(i)}function _i(i){i.g&&(xr(i),i.g.cancel(),i.g=null)}function Fo(i){_i(i),i.u&&(c.clearTimeout(i.u),i.u=null),bi(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function wi(i){if(!wo(i.h)&&!i.s){i.s=!0;var a=i.Ga;G||he(),W||(G(),W=!0),ae.add(a,i),i.B=0}}function ld(i,a){return bo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Cn(k(i.Ga,i,a),Wo(i,i.B)),i.B++,!0)}e.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new It(this,this.j,i);let C=this.o;if(this.S&&(C?(C=h(C),I(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)e:{for(var a=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=u;break e}if(a===4096||u===this.i.length-1){a=u+1;break e}}a=1e3}else a=1e3;a=$o(this,A,a),u=at(this.I),le(u,"RID",i),le(u,"CVER",22),this.D&&le(u,"X-HTTP-Session-Id",this.D),Vn(this,u),C&&(this.O?a="headers="+encodeURIComponent(String(No(C)))+"&"+a:this.m&&Nr(u,this.m,C)),Or(this.h,A),this.Ua&&le(u,"TYPE","init"),this.P?(le(u,"$req",a),le(u,"SID","null"),A.T=!0,kr(A,u,null)):kr(A,u,a),this.G=2}}else this.G==3&&(i?Bo(this,i):this.i.length==0||wo(this.h)||Bo(this))};function Bo(i,a){var u;a?u=a.l:u=i.U++;const f=at(i.I);le(f,"SID",i.K),le(f,"RID",u),le(f,"AID",i.T),Vn(i,f),i.m&&i.o&&Nr(f,i.m,i.o),u=new It(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),a&&(i.i=a.D.concat(i.i)),a=$o(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Or(i.h,u),kr(u,f,a)}function Vn(i,a){i.H&&R(i.H,function(u,f){le(a,f,u)}),i.l&&To({},function(u,f){le(a,f,u)})}function $o(i,a,u){u=Math.min(i.i.length,u);var f=i.l?k(i.l.Na,i.l,i):null;e:{var A=i.i;let C=-1;for(;;){const x=["count="+u];C==-1?0<u?(C=A[0].g,x.push("ofs="+C)):C=0:x.push("ofs="+C);let se=!0;for(let me=0;me<u;me++){let J=A[me].g;const ye=A[me].map;if(J-=C,0>J)C=Math.max(0,A[me].g-100),se=!1;else try{rd(ye,x,"req"+J+"_")}catch{f&&f(ye)}}if(se){f=x.join("&");break e}}}return i=i.i.splice(0,u),a.D=i,f}function jo(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;G||he(),W||(G(),W=!0),ae.add(a,i),i.v=0}}function Lr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Cn(k(i.Fa,i),Wo(i,i.v)),i.v++,!0)}e.Fa=function(){if(this.u=null,Ho(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Cn(k(this.ab,this),i)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,be(10),_i(this),Ho(this))};function xr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Ho(i){i.g=new It(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=at(i.qa);le(a,"RID","rpc"),le(a,"SID",i.K),le(a,"AID",i.T),le(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&le(a,"TO",i.ja),le(a,"TYPE","xmlhttp"),Vn(i,a),i.m&&i.o&&Nr(a,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=vi(at(a)),u.m=null,u.P=!0,mo(u,i)}e.Za=function(){this.C!=null&&(this.C=null,_i(this),Lr(this),be(19))};function bi(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function zo(i,a){var u=null;if(i.g==a){bi(i),xr(i),i.g=null;var f=2}else if(Rr(i.h,a))u=a.D,Io(i.h,a),f=1;else return;if(i.G!=0){if(a.o)if(f==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var A=i.B;f=Er(),we(f,new fo(f,u)),wi(i)}else jo(i);else if(A=a.s,A==3||A==0&&0<a.X||!(f==1&&ld(i,a)||f==2&&Lr(i)))switch(u&&0<u.length&&(a=i.h,a.i=a.i.concat(u)),A){case 1:jt(i,5);break;case 4:jt(i,10);break;case 3:jt(i,6);break;default:jt(i,2)}}}function Wo(i,a){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*a}function jt(i,a){if(i.j.info("Error code "+a),a==2){var u=k(i.fb,i),f=i.Xa;const A=!f;f=new $t(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||fi(f,"https"),vi(f),A?td(f.toString(),u):nd(f.toString(),u)}else be(2);i.G=0,i.l&&i.l.sa(a),qo(i),Fo(i)}e.fb=function(i){i?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function qo(i){if(i.G=0,i.ka=[],i.l){const a=Eo(i.h);(a.length!=0||i.i.length!=0)&&(O(i.ka,a),O(i.ka,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.ra()}}function Go(i,a,u){var f=u instanceof $t?at(u):new $t(u);if(f.g!="")a&&(f.g=a+"."+f.g),gi(f,f.s);else{var A=c.location;f=A.protocol,a=a?a+"."+A.hostname:A.hostname,A=+A.port;var C=new $t(null);f&&fi(C,f),a&&(C.g=a),A&&gi(C,A),u&&(C.l=u),f=C}return u=i.D,a=i.ya,u&&a&&le(f,u,a),le(f,"VER",i.la),Vn(i,f),f}function Ko(i,a,u){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new fe(new mi({eb:u})):new fe(i.pa),a.Ha(i.J),a}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yo(){}e=Yo.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Le(i,a){pe.call(this),this.g=new Uo(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!M(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!M(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new on(this)}S(Le,pe),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){Dr(this.g)},Le.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=_r(i),i=u);a.i.push(new Wu(a.Ya++,i)),a.G==3&&wi(a)},Le.prototype.N=function(){this.g.l=null,delete this.j,Dr(this.g),delete this.g,Le.aa.N.call(this)};function Xo(i){br.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){e:{for(const u in a){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}S(Xo,br);function Jo(){Ir.call(this),this.status=1}S(Jo,Ir);function on(i){this.g=i}S(on,Yo),on.prototype.ua=function(){we(this.g,"a")},on.prototype.ta=function(i){we(this.g,new Xo(i))},on.prototype.sa=function(i){we(this.g,new Jo)},on.prototype.ra=function(){we(this.g,"b")},Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,Tr.NO_ERROR=0,Tr.TIMEOUT=8,Tr.HTTP_ERROR=6,Hu.COMPLETE="complete",Uu.EventType=An,An.OPEN="a",An.CLOSE="b",An.ERROR="c",An.MESSAGE="d",pe.prototype.listen=pe.prototype.K,fe.prototype.listenOnce=fe.prototype.L,fe.prototype.getLastError=fe.prototype.Ka,fe.prototype.getLastErrorCode=fe.prototype.Ba,fe.prototype.getStatus=fe.prototype.Z,fe.prototype.getResponseJson=fe.prototype.Oa,fe.prototype.getResponseText=fe.prototype.oa,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Ha}).apply(typeof Si<"u"?Si:typeof self<"u"?self:typeof window<"u"?window:{});const Ba="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new rr("@firebase/firestore");function We(e,...t){if(vn.logLevel<=te.DEBUG){const n=t.map(Ws);vn.debug(`Firestore (${li}): ${e}`,...n)}}function qc(e,...t){if(vn.logLevel<=te.ERROR){const n=t.map(Ws);vn.error(`Firestore (${li}): ${e}`,...n)}}function um(e,...t){if(vn.logLevel<=te.WARN){const n=t.map(Ws);vn.warn(`Firestore (${li}): ${e}`,...n)}}function Ws(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(e="Unexpected state"){const t=`FIRESTORE (${li}) INTERNAL ASSERTION FAILED: `+e;throw qc(t),new Error(t)}function Hn(e,t){e||qs()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ke extends Fe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ie.UNAUTHENTICATED))}shutdown(){}}class hm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fm{constructor(t){this.t=t,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Hn(this.o===void 0);let r=this.i;const s=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let o=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zn,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},c=d=>{We("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(We("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zn)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(We("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Hn(typeof r.accessToken=="string"),new Gc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Hn(t===null||typeof t=="string"),new Ie(t)}}class gm{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vm{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new gm(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mm{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pm{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Hn(this.o===void 0);const r=o=>{o.error!=null&&We("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,We("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{We("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):We("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Hn(typeof n.token=="string"),this.R=n.token,new mm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function ym(e){return e.name==="IndexedDbTransactionError"}class Wi{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Wi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Wi&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $a,K;(K=$a||($a={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Wc([4294967295,4294967295],0);function Kr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t,n,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&We("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n,r,s,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,o){const l=Date.now()+r,c=new Gs(t,n,l,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ke(Ae.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ja,Ha;(Ha=ja||(ja={})).ea="default",Ha.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map;function bm(e,t,n,r){if(t===!0&&r===!0)throw new ke(Ae.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Im(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":qs()}function Em(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ke(Ae.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Im(e);throw new ke(Ae.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new ke(Ae.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new ke(Ae.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wm((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ke(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ke(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ke(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Kc{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ke(Ae.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ke(Ae.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dm;switch(r.type){case"firstParty":return new vm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ke(Ae.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=za.get(n);r&&(We("ComponentProvider","Removing Datastore"),za.delete(n),r.terminate())}(this),Promise.resolve()}}function Tm(e,t,n,r={}){var s;const o=(e=Em(e,Kc))._getSettings(),l=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&um("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=Ie.MOCK_USER;else{c=ec(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ke(Ae.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ie(g)}e._authCredentials=new hm(new Gc(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _m(this,"async_queue_retry"),this.Vu=()=>{const r=Kr();r&&We("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Kr();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Kr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new zn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!ym(t))throw t;We("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw qc("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const s=Gs.createAndSchedule(this,t,n,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&qs()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Sm extends Kc{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new qa,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new qa(t),this._firestoreClient=void 0,await t}}}function Am(e,t){const n=typeof e=="object"?e:sr(),r=typeof e=="string"?e:"(default)",s=Vt(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Jl("firestore");o&&Tm(s,...o)}return s}(function(t,n=!0){(function(s){li=s})(tn),Ke(new Ve("firestore",(r,{instanceIdentifier:s,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new Sm(new fm(r.getProvider("auth-internal")),new pm(r.getProvider("app-check-internal")),function(g,p){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ke(Ae.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(g.options.projectId,p)}(l,s),l);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ce(Ba,"4.7.4",t),Ce(Ba,"4.7.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="firebasestorage.googleapis.com",km="storageBucket",Cm=2*60*1e3,Pm=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Fe{constructor(t,n,r=0){super(Yr(t),`Firebase Storage: ${n} (${Yr(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Yr(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var st;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(st||(st={}));function Yr(e){return"storage/"+e}function Rm(){const e="An unknown error occurred, please check the error payload for server response.";return new ot(st.UNKNOWN,e)}function Om(){return new ot(st.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Nm(){return new ot(st.CANCELED,"User canceled the upload/download.")}function Dm(e){return new ot(st.INVALID_URL,"Invalid URL '"+e+"'.")}function Lm(e){return new ot(st.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ga(e){return new ot(st.INVALID_ARGUMENT,e)}function Xc(){return new ot(st.APP_DELETED,"The Firebase app was deleted.")}function xm(e){return new ot(st.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=qe.makeFromUrl(t,n)}catch{return new qe(t,"")}if(r.path==="")return r;throw Lm(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+s+l,"i"),d={bucket:1,path:3};function g(V){V.path_=decodeURIComponent(V.path)}const p="v[A-Za-z0-9_]+",T=n.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",E=new RegExp(`^https?://${T}/${p}/b/${s}/o${k}`,"i"),S={bucket:1,path:3},P=n===Yc?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",L=new RegExp(`^https?://${P}/${s}/${O}`,"i"),D=[{regex:c,indices:d,postModify:o},{regex:E,indices:S,postModify:g},{regex:L,indices:{bucket:1,path:2},postModify:g}];for(let V=0;V<D.length;V++){const U=D[V],R=U.regex.exec(t);if(R){const y=R[U.indices.bucket];let h=R[U.indices.path];h||(h=""),r=new qe(y,h),U.postModify(r);break}}if(r==null)throw Dm(t);return r}}class Mm{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(e,t,n){let r=1,s=null,o=null,l=!1,c=0;function d(){return c===2}let g=!1;function p(...O){g||(g=!0,t.apply(null,O))}function T(O){s=setTimeout(()=>{s=null,e(E,d())},O)}function k(){o&&clearTimeout(o)}function E(O,...L){if(g){k();return}if(O){k(),p.call(null,O,...L);return}if(d()||l){k(),p.call(null,O,...L);return}r<64&&(r*=2);let D;c===1?(c=2,D=0):D=(r+Math.random())*1e3,T(D)}let S=!1;function P(O){S||(S=!0,k(),!g&&(s!==null?(O||(c=2),clearTimeout(s),T(0)):O||(c=1)))}return T(0),o=setTimeout(()=>{l=!0,P(!0)},n),P}function Um(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(e){return e!==void 0}function Ka(e,t,n,r){if(r<t)throw Ga(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Ga(`Invalid value for '${e}'. Expected ${n} or less.`)}function Bm(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var qi;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(qi||(qi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t,n,r,s,o,l,c,d,g,p,T,k=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=d,this.timeout_=g,this.progressCallback_=p,this.connectionFactory_=T,this.retry=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,S)=>{this.resolve_=E,this.reject_=S,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new Ai(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=c=>{const d=c.loaded,g=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,g)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const c=o.getErrorCode()===qi.NO_ERROR,d=o.getStatus();if(!c||$m(d,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===qi.ABORT;r(!1,new Ai(!1,null,p));return}const g=this.successCodes_.indexOf(d)!==-1;r(!0,new Ai(g,o))})},n=(r,s)=>{const o=this.resolve_,l=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());Fm(d)?o(d):o()}catch(d){l(d)}else if(c!==null){const d=Rm();d.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,d)):l(d)}else if(s.canceled){const d=this.appDelete_?Xc():Nm();l(d)}else{const d=Om();l(d)}};this.canceled_?n(!1,new Ai(!1,null,!0)):this.backoffId_=Vm(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Um(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ai{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Hm(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function zm(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Wm(e,t){t&&(e["X-Firebase-GMPID"]=t)}function qm(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Gm(e,t,n,r,s,o,l=!0){const c=Bm(e.urlParams),d=e.url+c,g=Object.assign({},e.headers);return Wm(g,t),Hm(g,n),zm(g,o),qm(g,r),new jm(d,e.method,g,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Ym(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n){this._service=t,n instanceof qe?this._location=n:this._location=qe.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Gi(t,n)}get root(){const t=new qe(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ym(this._location.path)}get storage(){return this._service}get parent(){const t=Km(this._location.path);if(t===null)return null;const n=new qe(this._location.bucket,t);return new Gi(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw xm(t)}}function Ya(e,t){const n=t==null?void 0:t[km];return n==null?null:qe.makeFromBucketSpec(n,e)}function Xm(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:ec(s,e.app.options.projectId))}class Jm{constructor(t,n,r,s,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Yc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cm,this._maxUploadRetryTime=Pm,this._requests=new Set,s!=null?this._bucket=qe.makeFromBucketSpec(s,this._host):this._bucket=Ya(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=qe.makeFromBucketSpec(this._url,t):this._bucket=Ya(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Ka("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Ka("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Gi(this,t)}_makeRequest(t,n,r,s,o=!0){if(this._deleted)return new Mm(Xc());{const l=Gm(t,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const Xa="@firebase/storage",Ja="0.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="storage";function Qm(e=sr(),t){e=Qe(e);const r=Vt(e,Jc).getImmediate({identifier:t}),s=Jl("storage");return s&&Zm(r,...s),r}function Zm(e,t,n,r={}){Xm(e,t,n,r)}function ep(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Jm(n,r,s,t,tn)}function tp(){Ke(new Ve(Jc,ep,"PUBLIC").setMultipleInstances(!0)),Ce(Xa,Ja,""),Ce(Xa,Ja,"esm2017")}tp();const Qc="@firebase/installations",Ks="0.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=1e4,eu=`w:${Ks}`,tu="FIS_v2",np="https://firebaseinstallations.googleapis.com/v1",ip=60*60*1e3,rp="installations",sp="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Jt=new en(rp,sp,op);function nu(e){return e instanceof Fe&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu({projectId:e}){return`${np}/projects/${e}/installations`}function ru(e){return{token:e.token,requestStatus:2,expiresIn:lp(e.expiresIn),creationTime:Date.now()}}async function su(e,t){const r=(await t.json()).error;return Jt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ou({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ap(e,{refreshToken:t}){const n=ou(e);return n.append("Authorization",cp(t)),n}async function au(e){const t=await e();return t.status>=500&&t.status<600?e():t}function lp(e){return Number(e.replace("s","000"))}function cp(e){return`${tu} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=iu(e),s=ou(e),o=t.getImmediate({optional:!0});if(o){const g=await o.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const l={fid:n,authVersion:tu,appId:e.appId,sdkVersion:eu},c={method:"POST",headers:s,body:JSON.stringify(l)},d=await au(()=>fetch(r,c));if(d.ok){const g=await d.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:ru(g.authToken)}}else throw await su("Create Installation",d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=/^[cdef][\w-]{21}$/,fs="";function fp(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=gp(e);return hp.test(n)?n:fs}catch{return fs}}function gp(e){return dp(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Map;function uu(e,t){const n=cr(e);du(n,t),vp(n,t)}function du(e,t){const n=cu.get(e);if(n)for(const r of n)r(t)}function vp(e,t){const n=mp();n&&n.postMessage({key:e,fid:t}),pp()}let Wt=null;function mp(){return!Wt&&"BroadcastChannel"in self&&(Wt=new BroadcastChannel("[Firebase] FID Change"),Wt.onmessage=e=>{du(e.data.key,e.data.fid)}),Wt}function pp(){cu.size===0&&Wt&&(Wt.close(),Wt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="firebase-installations-database",_p=1,Qt="firebase-installations-store";let Xr=null;function Ys(){return Xr||(Xr=oc(yp,_p,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qt)}}})),Xr}async function Ki(e,t){const n=cr(e),s=(await Ys()).transaction(Qt,"readwrite"),o=s.objectStore(Qt),l=await o.get(n);return await o.put(t,n),await s.done,(!l||l.fid!==t.fid)&&uu(e,t.fid),t}async function hu(e){const t=cr(e),r=(await Ys()).transaction(Qt,"readwrite");await r.objectStore(Qt).delete(t),await r.done}async function ur(e,t){const n=cr(e),s=(await Ys()).transaction(Qt,"readwrite"),o=s.objectStore(Qt),l=await o.get(n),c=t(l);return c===void 0?await o.delete(n):await o.put(c,n),await s.done,c&&(!l||l.fid!==c.fid)&&uu(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(e){let t;const n=await ur(e.appConfig,r=>{const s=wp(r),o=bp(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===fs?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function wp(e){const t=e||{fid:fp(),registrationStatus:0};return fu(t)}function bp(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Jt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ip(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ep(e)}:{installationEntry:t}}async function Ip(e,t){try{const n=await up(e,t);return Ki(e.appConfig,n)}catch(n){throw nu(n)&&n.customData.serverCode===409?await hu(e.appConfig):await Ki(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ep(e){let t=await Qa(e.appConfig);for(;t.registrationStatus===1;)await lu(100),t=await Qa(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Xs(e);return r||n}return t}function Qa(e){return ur(e,t=>{if(!t)throw Jt.create("installation-not-found");return fu(t)})}function fu(e){return Tp(e)?{fid:e.fid,registrationStatus:0}:e}function Tp(e){return e.registrationStatus===1&&e.registrationTime+Zc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp({appConfig:e,heartbeatServiceProvider:t},n){const r=Ap(e,n),s=ap(e,n),o=t.getImmediate({optional:!0});if(o){const g=await o.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const l={installation:{sdkVersion:eu,appId:e.appId}},c={method:"POST",headers:s,body:JSON.stringify(l)},d=await au(()=>fetch(r,c));if(d.ok){const g=await d.json();return ru(g)}else throw await su("Generate Auth Token",d)}function Ap(e,{fid:t}){return`${iu(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(e,t=!1){let n;const r=await ur(e.appConfig,o=>{if(!gu(o))throw Jt.create("not-registered");const l=o.authToken;if(!t&&Pp(l))return o;if(l.requestStatus===1)return n=kp(e,t),o;{if(!navigator.onLine)throw Jt.create("app-offline");const c=Op(o);return n=Cp(e,c),c}});return n?await n:r.authToken}async function kp(e,t){let n=await Za(e.appConfig);for(;n.authToken.requestStatus===1;)await lu(100),n=await Za(e.appConfig);const r=n.authToken;return r.requestStatus===0?Js(e,t):r}function Za(e){return ur(e,t=>{if(!gu(t))throw Jt.create("not-registered");const n=t.authToken;return Np(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Cp(e,t){try{const n=await Sp(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ki(e.appConfig,r),n}catch(n){if(nu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hu(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ki(e.appConfig,r)}throw n}}function gu(e){return e!==void 0&&e.registrationStatus===2}function Pp(e){return e.requestStatus===2&&!Rp(e)}function Rp(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ip}function Op(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Np(e){return e.requestStatus===1&&e.requestTime+Zc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(e){const t=e,{installationEntry:n,registrationPromise:r}=await Xs(t);return r?r.catch(console.error):Js(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lp(e,t=!1){const n=e;return await xp(n),(await Js(n,t)).token}async function xp(e){const{registrationPromise:t}=await Xs(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(e){if(!e||!e.options)throw Jr("App Configuration");if(!e.name)throw Jr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Jr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Jr(e){return Jt.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="installations",Vp="installations-internal",Up=e=>{const t=e.getProvider("app").getImmediate(),n=Mp(t),r=Vt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Fp=e=>{const t=e.getProvider("app").getImmediate(),n=Vt(t,vu).getImmediate();return{getId:()=>Dp(n),getToken:s=>Lp(n,s)}};function Bp(){Ke(new Ve(vu,Up,"PUBLIC")),Ke(new Ve(Vp,Fp,"PRIVATE"))}Bp();Ce(Qc,Ks);Ce(Qc,Ks,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="analytics",$p="firebase_id",jp="origin",Hp=60*1e3,zp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qs="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new rr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Oe=new en("analytics","Analytics",Wp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(e){if(!e.startsWith(Qs)){const t=Oe.create("invalid-gtag-resource",{gtagURL:e});return Pe.warn(t.message),""}return e}function mu(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Gp(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Kp(e,t){const n=Gp("firebase-js-sdk-policy",{createScriptURL:qp}),r=document.createElement("script"),s=`${Qs}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Yp(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Xp(e,t,n,r,s,o){const l=r[s];try{if(l)await t[l];else{const d=(await mu(n)).find(g=>g.measurementId===s);d&&await t[d.appId]}}catch(c){Pe.error(c)}e("config",s,o)}async function Jp(e,t,n,r,s){try{let o=[];if(s&&s.send_to){let l=s.send_to;Array.isArray(l)||(l=[l]);const c=await mu(n);for(const d of l){const g=c.find(T=>T.measurementId===d),p=g&&t[g.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,s||{})}catch(o){Pe.error(o)}}function Qp(e,t,n,r){async function s(o,...l){try{if(o==="event"){const[c,d]=l;await Jp(e,t,n,c,d)}else if(o==="config"){const[c,d]=l;await Xp(e,t,n,r,c,d)}else if(o==="consent"){const[c,d]=l;e("consent",c,d)}else if(o==="get"){const[c,d,g]=l;e("get",c,d,g)}else if(o==="set"){const[c]=l;e("set",c)}else e(o,...l)}catch(c){Pe.error(c)}}return s}function Zp(e,t,n,r,s){let o=function(...l){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Qp(o,e,t,n),{gtagCore:o,wrappedGtag:window[s]}}function ey(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Qs)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=30,ny=1e3;class iy{constructor(t={},n=ny){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const pu=new iy;function ry(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function sy(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:ry(r)},o=zp.replace("{app-id}",n),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let c="";try{const d=await l.json();!((t=d.error)===null||t===void 0)&&t.message&&(c=d.error.message)}catch{}throw Oe.create("config-fetch-failed",{httpStatus:l.status,responseMessage:c})}return l.json()}async function oy(e,t=pu,n){const{appId:r,apiKey:s,measurementId:o}=e.options;if(!r)throw Oe.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Oe.create("no-api-key")}const l=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new cy;return setTimeout(async()=>{c.abort()},Hp),yu({appId:r,apiKey:s,measurementId:o},l,c,t)}async function yu(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=pu){var o;const{appId:l,measurementId:c}=e;try{await ay(r,t)}catch(d){if(c)return Pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:l,measurementId:c};throw d}try{const d=await sy(e);return s.deleteThrottleMetadata(l),d}catch(d){const g=d;if(!ly(g)){if(s.deleteThrottleMetadata(l),c)return Pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:l,measurementId:c};throw d}const p=Number((o=g==null?void 0:g.customData)===null||o===void 0?void 0:o.httpStatus)===503?da(n,s.intervalMillis,ty):da(n,s.intervalMillis),T={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return s.setThrottleMetadata(l,T),Pe.debug(`Calling attemptFetch again in ${p} millis`),yu(e,T,r,s)}}function ay(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(o),r(Oe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ly(e){if(!(e instanceof Fe)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class cy{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function uy(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const o=await t,l=Object.assign(Object.assign({},r),{send_to:o});e("event",n,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(){if(nc())try{await ic()}catch(e){return Pe.warn(Oe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Pe.warn(Oe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hy(e,t,n,r,s,o,l){var c;const d=oy(e);d.then(E=>{n[E.measurementId]=E.appId,e.options.measurementId&&E.measurementId!==e.options.measurementId&&Pe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Pe.error(E)),t.push(d);const g=dy().then(E=>{if(E)return r.getId()}),[p,T]=await Promise.all([d,g]);ey(o)||Kp(o,p.measurementId),s("js",new Date);const k=(c=l==null?void 0:l.config)!==null&&c!==void 0?c:{};return k[jp]="firebase",k.update=!0,T!=null&&(k[$p]=T),s("config",p.measurementId,k),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(t){this.app=t}_delete(){return delete Wn[this.app.options.appId],Promise.resolve()}}let Wn={},el=[];const tl={};let Qr="dataLayer",gy="gtag",nl,_u,il=!1;function vy(){const e=[];if(tc()&&e.push("This is a browser extension environment."),kh()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Oe.create("invalid-analytics-context",{errorInfo:t});Pe.warn(n.message)}}function my(e,t,n){vy();const r=e.options.appId;if(!r)throw Oe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Oe.create("no-api-key");if(Wn[r]!=null)throw Oe.create("already-exists",{id:r});if(!il){Yp(Qr);const{wrappedGtag:o,gtagCore:l}=Zp(Wn,el,tl,Qr,gy);_u=o,nl=l,il=!0}return Wn[r]=hy(e,el,tl,t,nl,Qr,n),new fy(e)}function py(e=sr()){e=Qe(e);const t=Vt(e,Yi);return t.isInitialized()?t.getImmediate():yy(e)}function yy(e,t={}){const n=Vt(e,Yi);if(n.isInitialized()){const s=n.getImmediate();if(qn(t,n.getOptions()))return s;throw Oe.create("already-initialized")}return n.initialize({options:t})}function _y(e,t,n,r){e=Qe(e),uy(_u,Wn[e.app.options.appId],t,n,r).catch(s=>Pe.error(s))}const rl="@firebase/analytics",sl="0.10.9";function wy(){Ke(new Ve(Yi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return my(r,s,n)},"PUBLIC")),Ke(new Ve("analytics-internal",e,"PRIVATE")),Ce(rl,sl),Ce(rl,sl,"esm2017");function e(t){try{const n=t.getProvider(Yi).getImmediate();return{logEvent:(r,s,o)=>_y(n,r,s,o)}}catch(n){throw Oe.create("interop-component-reg-failed",{reason:n})}}}wy();const by={apiKey:"AIzaSyBjVxkle7n_GXzGEYNOhPz2oDEJiCMdSdk",authDomain:"ecommerce-demo-52eca.firebaseapp.com",projectId:"ecommerce-demo-52eca",storageBucket:"ecommerce-demo-52eca.firebasestorage.app",messagingSenderId:"2141589402",appId:"1:2141589402:web:4384177c72fac8962c7423",measurementId:"G-X0YMYSEL9Q"},dr=ac(by),Ze=lm(dr);Am(dr);Qm(dr);py(dr);const Iy=vd("auth",()=>{const e=H(null),t=H(""),n=H("");localStorage.getItem("app_user")&&(e.value=localStorage.getItem("app_user"),console.log(e.value));const r=()=>e.value,s=g=>{e.value=g};async function o(g,p){try{t.value=g,n.value=p,await Gg(Ze,g,p)&&(console.log(Ze.currentUser),s(Ze.currentUser),localStorage.setItem("app_user",Ze.currentUser),console.log("User signed in successfully"))}catch(T){console.log(T)}}async function l(g,p){try{t.value=g,n.value=p,await Kg(Ze,g,p)&&(console.log(Ze.currentUser),s(Ze.currentUser),localStorage.setItem("app_user",Ze.currentUser),console.log("User signed in successfully"))}catch(T){console.log(T)}}async function c(){await Jg(Ze),console.log("User signed out successfully"),t.value="",n.value=""}async function d(g){try{await qg(Ze,g)&&console.log("Reset email sent")}catch(p){const T=p.code,k=p.message;console.log(T," : ",k)}}return{user:e,setUser:s,getUser:r,signInUser:l,signUpUser:o,logOutUser:c,resetUserPassword:d}}),gs=Y()({name:"VCardActions",props:oe(),setup(e,t){let{slots:n}=t;return Jn({VBtn:{slim:!0,variant:"text"}}),ne(()=>{var r;return b("div",{class:["v-card-actions",e.class],style:e.style},[(r=n.default)==null?void 0:r.call(n)])}),{}}}),Ey=z({opacity:[Number,String],...oe(),...Xe()},"VCardSubtitle"),Ty=Y()({name:"VCardSubtitle",props:Ey(),setup(e,t){let{slots:n}=t;return ne(()=>b(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},n)),{}}}),Sy=Rs("v-card-title"),Ay=z({start:Boolean,end:Boolean,icon:Ee,image:String,text:String,...ei(),...oe(),...En(),...xt(),...Pd(),...Xe(),...Ue(),...tr({variant:"flat"})},"VAvatar"),Xi=Y()({name:"VAvatar",props:Ay(),setup(e,t){let{slots:n}=t;const{themeClasses:r}=_t(e),{borderClasses:s}=ti(e),{colorClasses:o,colorStyles:l,variantClasses:c}=As(e),{densityClasses:d}=Zn(e),{roundedClasses:g}=Mt(e),{sizeClasses:p,sizeStyles:T}=Rd(e);return ne(()=>b(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},r.value,s.value,o.value,d.value,g.value,p.value,c.value,e.class],style:[l.value,T.value,e.style]},{default:()=>[n.default?b(Re,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?b(gn,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?b(Me,{key:"icon",icon:e.icon},null):e.text,ks(!1,"v-avatar")]})),{}}}),ky=z({appendAvatar:String,appendIcon:Ee,prependAvatar:String,prependIcon:Ee,subtitle:[String,Number],title:[String,Number],...oe(),...En()},"VCardItem"),Cy=Y()({name:"VCardItem",props:ky(),setup(e,t){let{slots:n}=t;return ne(()=>{var g;const r=!!(e.prependAvatar||e.prependIcon),s=!!(r||n.prepend),o=!!(e.appendAvatar||e.appendIcon),l=!!(o||n.append),c=!!(e.title!=null||n.title),d=!!(e.subtitle!=null||n.subtitle);return b("div",{class:["v-card-item",e.class],style:e.style},[s&&b("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?b(Re,{key:"prepend-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):b(Te,null,[e.prependAvatar&&b(Xi,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&b(Me,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),b("div",{class:"v-card-item__content"},[c&&b(Sy,{key:"title"},{default:()=>{var p;return[((p=n.title)==null?void 0:p.call(n))??e.title]}}),d&&b(Ty,{key:"subtitle"},{default:()=>{var p;return[((p=n.subtitle)==null?void 0:p.call(n))??e.subtitle]}}),(g=n.default)==null?void 0:g.call(n)]),l&&b("div",{key:"append",class:"v-card-item__append"},[n.append?b(Re,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):b(Te,null,[e.appendIcon&&b(Me,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&b(Xi,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Py=z({opacity:[Number,String],...oe(),...Xe()},"VCardText"),vs=Y()({name:"VCardText",props:Py(),setup(e,t){let{slots:n}=t;return ne(()=>b(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},n)),{}}}),Ry=z({appendAvatar:String,appendIcon:Ee,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:Ee,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ei(),...oe(),...En(),...mn(),...nr(),...Al(),...kl(),...Od(),...xt(),...Cl(),...Xe(),...Ue(),...tr({variant:"elevated"})},"VCard"),Zr=Y()({name:"VCard",directives:{Ripple:Cs},props:Ry(),setup(e,t){let{attrs:n,slots:r}=t;const{themeClasses:s}=_t(e),{borderClasses:o}=ti(e),{colorClasses:l,colorStyles:c,variantClasses:d}=As(e),{densityClasses:g}=Zn(e),{dimensionStyles:p}=yn(e),{elevationClasses:T}=ir(e),{loaderClasses:k}=Ts(e),{locationStyles:E}=Pl(e),{positionClasses:S}=Nd(e),{roundedClasses:P}=Mt(e),O=Rl(e,n),L=N(()=>e.link!==!1&&O.isLink.value),M=N(()=>!e.disabled&&e.link!==!1&&(e.link||O.isClickable.value));return ne(()=>{const D=L.value?"a":e.tag,V=!!(r.title||e.title!=null),U=!!(r.subtitle||e.subtitle!=null),R=V||U,y=!!(r.append||e.appendAvatar||e.appendIcon),h=!!(r.prepend||e.prependAvatar||e.prependIcon),m=!!(r.image||e.image),I=R||h||y,_=!!(r.text||e.text!=null);return it(b(D,ie({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":M.value},s.value,o.value,l.value,g.value,T.value,k.value,S.value,P.value,d.value,e.class],style:[c.value,p.value,E.value,e.style],onClick:M.value&&O.navigate,tabindex:e.disabled?-1:void 0},O.linkProps),{default:()=>{var w;return[m&&b("div",{key:"image",class:"v-card__image"},[r.image?b(Re,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},r.image):b(gn,{key:"image-img",cover:!0,src:e.image},null)]),b(Ss,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:r.loader}),I&&b(Cy,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:r.item,prepend:r.prepend,title:r.title,subtitle:r.subtitle,append:r.append}),_&&b(vs,{key:"text"},{default:()=>{var v;return[((v=r.text)==null?void 0:v.call(r))??e.text]}}),(w=r.default)==null?void 0:w.call(r),r.actions&&b(gs,null,{default:r.actions}),ks(M.value,"v-card")]}}),[[In("ripple"),M.value&&e.ripple]])}),{}}});function es(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Oy(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ol(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:r}=e,s=r==="left"?0:r==="center"?t.width/2:r==="right"?t.width:r,o=n==="top"?0:n==="bottom"?t.height:n;return es({x:s,y:o},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:r}=e,s=n==="left"?0:n==="right"?t.width:n,o=r==="top"?0:r==="center"?t.height/2:r==="bottom"?t.height:r;return es({x:s,y:o},t)}return es({x:t.width/2,y:t.height/2},t)}const wu={static:Ly,connected:My},Ny=z({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in wu},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Dy(e,t){const n=H({}),r=H();mt&&gt(()=>!!(t.isActive.value&&e.locationStrategy),o=>{var l,c;re(()=>e.locationStrategy,o),Je(()=>{window.removeEventListener("resize",s),r.value=void 0}),window.addEventListener("resize",s,{passive:!0}),typeof e.locationStrategy=="function"?r.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation:r.value=(c=wu[e.locationStrategy](t,e,n))==null?void 0:c.updateLocation});function s(o){var l;(l=r.value)==null||l.call(r,o)}return{contentStyles:n,updateLocation:r}}function Ly(){}function xy(e,t){const n=Ps(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function My(e,t,n){(Array.isArray(e.target.value)||zd(e.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:s,preferredOrigin:o}=md(()=>{const S=na(t.location,e.isRtl.value),P=t.origin==="overlap"?S:t.origin==="auto"?Vr(S):na(t.origin,e.isRtl.value);return S.side===P.side&&S.align===Ur(P).align?{preferredAnchor:ia(S),preferredOrigin:ia(P)}:{preferredAnchor:S,preferredOrigin:P}}),[l,c,d,g]=["minWidth","minHeight","maxWidth","maxHeight"].map(S=>N(()=>{const P=parseFloat(t[S]);return isNaN(P)?1/0:P})),p=N(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const S=t.offset.split(" ").map(parseFloat);return S.length<2&&S.push(0),S}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let T=!1;const k=new ResizeObserver(()=>{T&&E()});re([e.target,e.contentEl],(S,P)=>{let[O,L]=S,[M,D]=P;M&&!Array.isArray(M)&&k.unobserve(M),O&&!Array.isArray(O)&&k.observe(O),D&&k.unobserve(D),L&&k.observe(L)},{immediate:!0}),Je(()=>{k.disconnect()});function E(){if(T=!1,requestAnimationFrame(()=>T=!0),!e.target.value||!e.contentEl.value)return;const S=Nl(e.target.value),P=xy(e.contentEl.value,e.isRtl.value),O=xi(e.contentEl.value),L=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(P.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),P.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const M=O.reduce((_,w)=>{const v=w.getBoundingClientRect(),F=new Gt({x:w===document.documentElement?0:v.x,y:w===document.documentElement?0:v.y,width:w.clientWidth,height:w.clientHeight});return _?new Gt({x:Math.max(_.left,F.left),y:Math.max(_.top,F.top),width:Math.min(_.right,F.right)-Math.max(_.left,F.left),height:Math.min(_.bottom,F.bottom)-Math.max(_.top,F.top)}):F},void 0);M.x+=L,M.y+=L,M.width-=L*2,M.height-=L*2;let D={anchor:s.value,origin:o.value};function V(_){const w=new Gt(P),v=ol(_.anchor,S),F=ol(_.origin,w);let{x:j,y:q}=Oy(v,F);switch(_.anchor.side){case"top":q-=p.value[0];break;case"bottom":q+=p.value[0];break;case"left":j-=p.value[0];break;case"right":j+=p.value[0];break}switch(_.anchor.align){case"top":q-=p.value[1];break;case"bottom":q+=p.value[1];break;case"left":j-=p.value[1];break;case"right":j+=p.value[1];break}return w.x+=j,w.y+=q,w.width=Math.min(w.width,d.value),w.height=Math.min(w.height,g.value),{overflows:sa(w,M),x:j,y:q}}let U=0,R=0;const y={x:0,y:0},h={x:!1,y:!1};let m=-1;for(;!(m++>10);){const{x:_,y:w,overflows:v}=V(D);U+=_,R+=w,P.x+=_,P.y+=w;{const F=ra(D.anchor),j=v.x.before||v.x.after,q=v.y.before||v.y.after;let G=!1;if(["x","y"].forEach(W=>{if(W==="x"&&j&&!h.x||W==="y"&&q&&!h.y){const ae={anchor:{...D.anchor},origin:{...D.origin}},he=W==="x"?F==="y"?Ur:Vr:F==="y"?Vr:Ur;ae.anchor=he(ae.anchor),ae.origin=he(ae.origin);const{overflows:X}=V(ae);(X[W].before<=v[W].before&&X[W].after<=v[W].after||X[W].before+X[W].after<(v[W].before+v[W].after)/2)&&(D=ae,G=h[W]=!0)}}),G)continue}v.x.before&&(U+=v.x.before,P.x+=v.x.before),v.x.after&&(U-=v.x.after,P.x-=v.x.after),v.y.before&&(R+=v.y.before,P.y+=v.y.before),v.y.after&&(R-=v.y.after,P.y-=v.y.after);{const F=sa(P,M);y.x=M.width-F.x.before-F.x.after,y.y=M.height-F.y.before-F.y.after,U+=F.x.before,P.x+=F.x.before,R+=F.y.before,P.y+=F.y.before}break}const I=ra(D.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${D.anchor.side} ${D.anchor.align}`,transformOrigin:`${D.origin.side} ${D.origin.align}`,top:ve(ts(R)),left:e.isRtl.value?void 0:ve(ts(U)),right:e.isRtl.value?ve(ts(-U)):void 0,minWidth:ve(I==="y"?Math.min(l.value,S.width):l.value),maxWidth:ve(al(Qo(y.x,l.value===1/0?0:l.value,d.value))),maxHeight:ve(al(Qo(y.y,c.value===1/0?0:c.value,g.value)))}),{available:y,contentBox:P}}return re(()=>[s.value,o.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>E()),rt(()=>{const S=E();if(!S)return;const{available:P,contentBox:O}=S;O.height>P.y&&requestAnimationFrame(()=>{E(),requestAnimationFrame(()=>{E()})})}),{updateLocation:E}}function ts(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function al(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ms=!0;const Ji=[];function Vy(e){!ms||Ji.length?(Ji.push(e),ps()):(ms=!1,e(),ps())}let ll=-1;function ps(){cancelAnimationFrame(ll),ll=requestAnimationFrame(()=>{const e=Ji.shift();e&&e(),Ji.length?ps():ms=!0})}const Di={none:null,close:By,block:$y,reposition:jy},Uy=z({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Di}},"VOverlay-scroll-strategies");function Fy(e,t){if(!mt)return;let n;er(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Il(),await new Promise(r=>setTimeout(r)),n.active&&n.run(()=>{var r;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(r=Di[e.scrollStrategy])==null||r.call(Di,t,e,n)}))}),Je(()=>{n==null||n.stop()})}function By(e){function t(n){e.isActive.value=!1}bu(e.targetEl.value??e.contentEl.value,t)}function $y(e,t){var l;const n=(l=e.root.value)==null?void 0:l.offsetParent,r=[...new Set([...xi(e.targetEl.value,t.contained?n:void 0),...xi(e.contentEl.value,t.contained?n:void 0)])].filter(c=>!c.classList.contains("v-overlay-scroll-blocked")),s=window.innerWidth-document.documentElement.offsetWidth,o=(c=>Os(c)&&c)(n||document.documentElement);o&&e.root.value.classList.add("v-overlay--scroll-blocked"),r.forEach((c,d)=>{c.style.setProperty("--v-body-scroll-x",ve(-c.scrollLeft)),c.style.setProperty("--v-body-scroll-y",ve(-c.scrollTop)),c!==document.documentElement&&c.style.setProperty("--v-scrollbar-offset",ve(s)),c.classList.add("v-overlay-scroll-blocked")}),Je(()=>{r.forEach((c,d)=>{const g=parseFloat(c.style.getPropertyValue("--v-body-scroll-x")),p=parseFloat(c.style.getPropertyValue("--v-body-scroll-y")),T=c.style.scrollBehavior;c.style.scrollBehavior="auto",c.style.removeProperty("--v-body-scroll-x"),c.style.removeProperty("--v-body-scroll-y"),c.style.removeProperty("--v-scrollbar-offset"),c.classList.remove("v-overlay-scroll-blocked"),c.scrollLeft=-g,c.scrollTop=-p,c.style.scrollBehavior=T}),o&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function jy(e,t,n){let r=!1,s=-1,o=-1;function l(c){Vy(()=>{var p,T;const d=performance.now();(T=(p=e.updateLocation).value)==null||T.call(p,c),r=(performance.now()-d)/(1e3/60)>2})}o=(typeof requestIdleCallback>"u"?c=>c():requestIdleCallback)(()=>{n.run(()=>{bu(e.targetEl.value??e.contentEl.value,c=>{r?(cancelAnimationFrame(s),s=requestAnimationFrame(()=>{s=requestAnimationFrame(()=>{l(c)})})):l(c)})})}),Je(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(o),cancelAnimationFrame(s)})}function bu(e,t){const n=[document,...xi(e)];n.forEach(r=>{r.addEventListener("scroll",t,{passive:!0})}),Je(()=>{n.forEach(r=>{r.removeEventListener("scroll",t)})})}const Hy=Symbol.for("vuetify:v-menu"),Iu=z({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Eu(e,t){let n=()=>{};function r(l){n==null||n();const c=Number(l?e.openDelay:e.closeDelay);return new Promise(d=>{n=pd(c,()=>{t==null||t(l),d(l)})})}function s(){return r(!0)}function o(){return r(!1)}return{clearDelay:n,runOpenDelay:s,runCloseDelay:o}}const zy=z({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Iu()},"VOverlay-activator");function Wy(e,t){let{isActive:n,isTop:r,contentEl:s}=t;const o=wn("useActivator"),l=H();let c=!1,d=!1,g=!0;const p=N(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),T=N(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!p.value),{runOpenDelay:k,runCloseDelay:E}=Eu(e,h=>{h===(e.openOnHover&&c||p.value&&d)&&!(e.openOnHover&&n.value&&!r.value)&&(n.value!==h&&(g=!0),n.value=h)}),S=H(),P={onClick:h=>{h.stopPropagation(),l.value=h.currentTarget||h.target,n.value||(S.value=[h.clientX,h.clientY]),n.value=!n.value},onMouseenter:h=>{var m;(m=h.sourceCapabilities)!=null&&m.firesTouchEvents||(c=!0,l.value=h.currentTarget||h.target,k())},onMouseleave:h=>{c=!1,E()},onFocus:h=>{El(h.target,":focus-visible")!==!1&&(d=!0,h.stopPropagation(),l.value=h.currentTarget||h.target,k())},onBlur:h=>{d=!1,h.stopPropagation(),E()}},O=N(()=>{const h={};return T.value&&(h.onClick=P.onClick),e.openOnHover&&(h.onMouseenter=P.onMouseenter,h.onMouseleave=P.onMouseleave),p.value&&(h.onFocus=P.onFocus,h.onBlur=P.onBlur),h}),L=N(()=>{const h={};if(e.openOnHover&&(h.onMouseenter=()=>{c=!0,k()},h.onMouseleave=()=>{c=!1,E()}),p.value&&(h.onFocusin=()=>{d=!0,k()},h.onFocusout=()=>{d=!1,E()}),e.closeOnContentClick){const m=_n(Hy,null);h.onClick=()=>{n.value=!1,m==null||m.closeParents()}}return h}),M=N(()=>{const h={};return e.openOnHover&&(h.onMouseenter=()=>{g&&(c=!0,g=!1,k())},h.onMouseleave=()=>{c=!1,E()}),h});re(r,h=>{var m;h&&(e.openOnHover&&!c&&(!p.value||!d)||p.value&&!d&&(!e.openOnHover||!c))&&!((m=s.value)!=null&&m.contains(document.activeElement))&&(n.value=!1)}),re(n,h=>{h||setTimeout(()=>{S.value=void 0})},{flush:"post"});const D=Zo();er(()=>{D.value&&rt(()=>{l.value=D.el})});const V=Zo(),U=N(()=>e.target==="cursor"&&S.value?S.value:V.value?V.el:Tu(e.target,o)||l.value),R=N(()=>Array.isArray(U.value)?void 0:U.value);let y;return re(()=>!!e.activator,h=>{h&&mt?(y=Il(),y.run(()=>{qy(e,o,{activatorEl:l,activatorEvents:O})})):y&&y.stop()},{flush:"post",immediate:!0}),Je(()=>{y==null||y.stop()}),{activatorEl:l,activatorRef:D,target:U,targetEl:R,targetRef:V,activatorEvents:O,contentEvents:L,scrimEvents:M}}function qy(e,t,n){let{activatorEl:r,activatorEvents:s}=n;re(()=>e.activator,(d,g)=>{if(g&&d!==g){const p=c(g);p&&l(p)}d&&rt(()=>o())},{immediate:!0}),re(()=>e.activatorProps,()=>{o()}),Je(()=>{l()});function o(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c(),g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&Ud(d,ie(s.value,g))}function l(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c(),g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&Fd(d,ie(s.value,g))}function c(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const g=Tu(d,t);return r.value=(g==null?void 0:g.nodeType)===Node.ELEMENT_NODE?g:void 0,r.value}}function Tu(e,t){var r,s;if(!e)return;let n;if(e==="parent"){let o=(s=(r=t==null?void 0:t.proxy)==null?void 0:r.$el)==null?void 0:s.parentNode;for(;o!=null&&o.hasAttribute("data-no-activator");)o=o.parentNode;n=o}else typeof e=="string"?n=document.querySelector(e):"$el"in e?n=e.$el:n=e;return n}function Gy(){if(!mt)return ce(!1);const{ssr:e}=Tl();if(e){const t=ce(!1);return Zi(()=>{t.value=!0}),t}else return ce(!0)}const Ky=z({eager:Boolean},"lazy");function Yy(e,t){const n=ce(!1),r=N(()=>n.value||e.eager||t.value);re(t,()=>n.value=!0);function s(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:r,onAfterLeave:s}}function Zs(){const t=wn("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const cl=Symbol.for("vuetify:stack"),Fn=Sl([]);function Xy(e,t,n){const r=wn("useStack"),s=!n,o=_n(cl,void 0),l=Sl({activeChildren:new Set});ws(cl,l);const c=ce(+t.value);gt(e,()=>{var T;const p=(T=Fn.at(-1))==null?void 0:T[1];c.value=p?p+10:+t.value,s&&Fn.push([r.uid,c.value]),o==null||o.activeChildren.add(r.uid),Je(()=>{if(s){const k=ns(Fn).findIndex(E=>E[0]===r.uid);Fn.splice(k,1)}o==null||o.activeChildren.delete(r.uid)})});const d=ce(!0);s&&er(()=>{var T;const p=((T=Fn.at(-1))==null?void 0:T[0])===r.uid;setTimeout(()=>d.value=p)});const g=N(()=>!l.activeChildren.size);return{globalTop:yd(d),localTop:g,stackStyles:N(()=>({zIndex:c.value}))}}function Jy(e){return{teleportTarget:N(()=>{const n=e();if(n===!0||!mt)return;const r=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(r==null)return;let s=[...r.children].find(o=>o.matches(".v-overlay-container"));return s||(s=document.createElement("div"),s.className="v-overlay-container",r.appendChild(s)),s})}}function Qy(){return!0}function Su(e,t,n){if(!e||Au(e,n)===!1)return!1;const r=Dl(t);if(typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&r.host===e.target)return!1;const s=(typeof n.value=="object"&&n.value.include||(()=>[]))();return s.push(t),!s.some(o=>o==null?void 0:o.contains(e.target))}function Au(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Qy)(e)}function Zy(e,t,n){const r=typeof n.value=="function"?n.value:n.value.handler;e.shadowTarget=e.target,t._clickOutside.lastMousedownWasOutside&&Su(e,t,n)&&setTimeout(()=>{Au(e,n)&&r&&r(e)},0)}function ul(e,t){const n=Dl(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const e_={mounted(e,t){const n=s=>Zy(s,e,t),r=s=>{e._clickOutside.lastMousedownWasOutside=Su(s,e,t)};ul(e,s=>{s.addEventListener("click",n,!0),s.addEventListener("mousedown",r,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:r}},beforeUnmount(e,t){e._clickOutside&&(ul(e,n=>{var o;if(!n||!((o=e._clickOutside)!=null&&o[t.instance.$.uid]))return;const{onClick:r,onMousedown:s}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",r,!0),n.removeEventListener("mousedown",s,!0)}),delete e._clickOutside[t.instance.$.uid])}};function t_(e){const{modelValue:t,color:n,...r}=e;return b(Kt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&b("div",ie({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},r),null)]})}const ku=z({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...zy(),...oe(),...mn(),...Ky(),...Ny(),...Uy(),...Ue(),...ni()},"VOverlay"),dl=Y()({name:"VOverlay",directives:{ClickOutside:e_},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...ku()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:r,emit:s}=t;const o=wn("VOverlay"),l=H(),c=H(),d=H(),g=Ge(e,"modelValue"),p=N({get:()=>g.value,set:Z=>{Z&&e.disabled||(g.value=Z)}}),{themeClasses:T}=_t(e),{rtlClasses:k,isRtl:E}=pn(),{hasContent:S,onAfterLeave:P}=Yy(e,p),O=Lt(N(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:L,localTop:M,stackStyles:D}=Xy(p,ue(e,"zIndex"),e._disableGlobalStack),{activatorEl:V,activatorRef:U,target:R,targetEl:y,targetRef:h,activatorEvents:m,contentEvents:I,scrimEvents:_}=Wy(e,{isActive:p,isTop:M,contentEl:d}),{teleportTarget:w}=Jy(()=>{var $e,Ft,ge;const Z=e.attach||e.contained;if(Z)return Z;const de=(($e=V==null?void 0:V.value)==null?void 0:$e.getRootNode())||((ge=(Ft=o.proxy)==null?void 0:Ft.$el)==null?void 0:ge.getRootNode());return de instanceof ShadowRoot?de:!1}),{dimensionStyles:v}=yn(e),F=Gy(),{scopeId:j}=Zs();re(()=>e.disabled,Z=>{Z&&(p.value=!1)});const{contentStyles:q,updateLocation:G}=Dy(e,{isRtl:E,contentEl:d,target:R,isActive:p});Fy(e,{root:l,contentEl:d,targetEl:y,isActive:p,updateLocation:G});function W(Z){s("click:outside",Z),e.persistent?Q():p.value=!1}function ae(Z){return p.value&&L.value&&(!e.scrim||Z.target===c.value||Z instanceof MouseEvent&&Z.shadowTarget===c.value)}mt&&re(p,Z=>{Z?window.addEventListener("keydown",he):window.removeEventListener("keydown",he)},{immediate:!0}),bn(()=>{mt&&window.removeEventListener("keydown",he)});function he(Z){var de,$e;Z.key==="Escape"&&L.value&&(e.persistent?Q():(p.value=!1,(de=d.value)!=null&&de.contains(document.activeElement)&&(($e=V.value)==null||$e.focus())))}const X=Ol();gt(()=>e.closeOnBack,()=>{Dd(X,Z=>{L.value&&p.value?(Z(!1),e.persistent?Q():p.value=!1):Z()})});const $=H();re(()=>p.value&&(e.absolute||e.contained)&&w.value==null,Z=>{if(Z){const de=jd(l.value);de&&de!==document.scrollingElement&&($.value=de.scrollTop)}});function Q(){e.noClickAnimation||d.value&&cn(d.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Li})}function Be(){s("afterEnter")}function De(){P(),s("afterLeave")}return ne(()=>{var Z;return b(Te,null,[(Z=n.activator)==null?void 0:Z.call(n,{isActive:p.value,targetRef:h,props:ie({ref:U},m.value,e.activatorProps)}),F.value&&S.value&&b(_d,{disabled:!w.value,to:w.value},{default:()=>[b("div",ie({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":p.value,"v-overlay--contained":e.contained},T.value,k.value,e.class],style:[D.value,{"--v-overlay-opacity":e.opacity,top:ve($.value)},e.style],ref:l},j,r),[b(t_,ie({color:O,modelValue:p.value&&!!e.scrim,ref:c},_.value),null),b(Rt,{appear:!0,persisted:!0,transition:e.transition,target:R.value,onAfterEnter:Be,onAfterLeave:De},{default:()=>{var de;return[it(b("div",ie({ref:d,class:["v-overlay__content",e.contentClass],style:[v.value,q.value]},I.value,e.contentProps),[(de=n.default)==null?void 0:de.call(n,{isActive:p})]),[[Xn,p.value],[In("click-outside"),{handler:W,closeConditional:ae,include:()=>[V.value]}]])]}})])]})])}),{activatorEl:V,scrimEl:c,target:R,animateClick:Q,contentEl:d,globalTop:L,localTop:M,updateLocation:G}}}),n_=z({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...ku({origin:"center center",scrollStrategy:"block",transition:{component:Yd},zIndex:2400})},"VDialog"),Cu=Y()({name:"VDialog",props:n_(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,t){let{emit:n,slots:r}=t;const s=Ge(e,"modelValue"),{scopeId:o}=Zs(),l=H();function c(p){var E,S;const T=p.relatedTarget,k=p.target;if(T!==k&&((E=l.value)!=null&&E.contentEl)&&((S=l.value)!=null&&S.globalTop)&&![document,l.value.contentEl].includes(k)&&!l.value.contentEl.contains(k)){const P=wd(l.value.contentEl);if(!P.length)return;const O=P[0],L=P[P.length-1];T===O?L.focus():O.focus()}}mt&&re(()=>s.value&&e.retainFocus,p=>{p?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0});function d(){var p;n("afterEnter"),(p=l.value)!=null&&p.contentEl&&!l.value.contentEl.contains(document.activeElement)&&l.value.contentEl.focus({preventScroll:!0})}function g(){n("afterLeave")}return re(s,async p=>{var T;p||(await rt(),(T=l.value.activatorEl)==null||T.focus({preventScroll:!0}))}),ne(()=>{const p=dl.filterProps(e),T=ie({"aria-haspopup":"dialog"},e.activatorProps),k=ie({tabindex:-1},e.contentProps);return b(dl,ie({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},p,{modelValue:s.value,"onUpdate:modelValue":E=>s.value=E,"aria-modal":"true",activatorProps:T,contentProps:k,role:"dialog",onAfterEnter:d,onAfterLeave:g},o),{activator:r.activator,default:function(){for(var E=arguments.length,S=new Array(E),P=0;P<E;P++)S[P]=arguments[P];return b(Re,{root:"VDialog"},{default:()=>{var O;return[(O=r.default)==null?void 0:O.call(r,...S)]}})}})}),Hl({},l)}}),i_={class:"text-center pa-4"},r_={class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"},s_={__name:"AuthModalView",setup(e){const t=Iy(),n=H(!1),r=N(()=>t.user!==null),s=H(!1),o=H(!1),l=H(""),c=H({firstName:"",lastName:"",email:"",password:""});H({name:"Joan Peters",avatar:"https://randomuser.me/api/portraits/women/51.jpg"}),N(()=>t.user);function d(){console.log("Logging out"),console.log(t.getUser.value),t.setUser(null),localStorage.removeItem("app_user"),o.value=!1}function g(){let k=c.value.email,E=c.value.password;t.signInUser(k,E),console.log(t.user),o.value=!1}function p(){let k=c.value.email,E=c.value.password;E===l.value?(t.signUpUser(k,E),o.value=!1):console.log("Password not the same")}function T(){console.log("Clicked reset password")}return(k,E)=>(ze(),is("div",i_,[b(Cu,{modelValue:o.value,"onUpdate:modelValue":E[13]||(E[13]=S=>o.value=S),"max-width":"400",persistent:""},{activator:ee(({props:S})=>[b(xe,ie(S,{density:"default",variant:"elevated",color:"primary"}),{default:ee(()=>[He(rs(bs(t).user!==null?"Logout":"Sign In"),1)]),_:2},1040)]),default:ee(()=>[!r.value&&s.value?(ze(),Ot(Zr,{key:0,"prepend-icon":"mdi-account",title:"Register Account"},{default:ee(()=>[b(gs,null,{default:ee(()=>[b(Ci),b(xe,{text:"Close",variant:"plain",onClick:E[0]||(E[0]=S=>o.value=!1)})]),_:1}),b(vs,null,{default:ee(()=>[b(Ld,{dense:""},{default:ee(()=>[b(Un,{cols:"12",md:"6"},{default:ee(()=>[b(Ht,{label:"First name(s)*",modelValue:c.value.firstName,"onUpdate:modelValue":E[1]||(E[1]=S=>c.value.firstName=S),required:""},null,8,["modelValue"])]),_:1}),b(Un,{cols:"12",md:"6"},{default:ee(()=>[b(Ht,{label:"Last name*",modelValue:c.value.lastName,"onUpdate:modelValue":E[2]||(E[2]=S=>c.value.lastName=S),"persistent-hint":"",required:""},null,8,["modelValue"])]),_:1}),b(Un,{cols:"12"},{default:ee(()=>[b(Ht,{label:"Email*",modelValue:c.value.email,"onUpdate:modelValue":E[3]||(E[3]=S=>c.value.email=S),required:""},null,8,["modelValue"])]),_:1}),b(Un,{cols:"12"},{default:ee(()=>[b(Ht,{label:"Password*",type:"password",modelValue:c.value.password,"onUpdate:modelValue":E[4]||(E[4]=S=>c.value.password=S),required:""},null,8,["modelValue"])]),_:1}),b(Un,{cols:"12"},{default:ee(()=>[b(Ht,{label:"Confirm Password*",type:"password",modelValue:l.value,"onUpdate:modelValue":E[5]||(E[5]=S=>l.value=S),required:""},null,8,["modelValue"])]),_:1}),ct("div",null,[b(xe,{variant:"text",onClick:E[6]||(E[6]=S=>s.value=!s.value)},{default:ee(()=>E[14]||(E[14]=[He(" Already have an account? ")])),_:1})])]),_:1}),E[16]||(E[16]=ct("small",{class:"text-caption text-medium-emphasis"},"*indicates required field",-1)),ct("div",null,[b(xe,{class:"mb-8",color:"blue",size:"large",variant:"tonal",onClick:p,block:""},{default:ee(()=>E[15]||(E[15]=[He(" Sign Up ")])),_:1})])]),_:1})]),_:1})):!r.value&&!s.value?(ze(),Ot(Zr,{key:1,"prepend-icon":"mdi-account",title:"Log In",class:"pa-4 pb-8",elevation:"8",rounded:"lg"},{default:ee(()=>[b(gs,null,{default:ee(()=>[b(Ci),b(xe,{text:"Close",variant:"plain",onClick:E[7]||(E[7]=S=>o.value=!1)})]),_:1}),E[20]||(E[20]=ct("div",{class:"text-subtitle-1 text-medium-emphasis"},"Account",-1)),b(Ht,{density:"compact",placeholder:"Email address","prepend-inner-icon":"mdi-email-outline",variant:"outlined",modelValue:c.value.email,"onUpdate:modelValue":E[8]||(E[8]=S=>c.value.email=S)},null,8,["modelValue"]),ct("div",r_,[E[17]||(E[17]=He(" Password ")),ct("a",{class:"text-caption text-decoration-none text-blue",href:"#",rel:"noopener noreferrer",target:"_blank",onClick:ea(T,["prevent"])}," Forgot login password?")]),b(Ht,{"append-inner-icon":n.value?"mdi-eye-off":"mdi-eye",type:n.value?"text":"password",density:"compact",placeholder:"Enter your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":E[9]||(E[9]=S=>n.value=!n.value),modelValue:c.value.password,"onUpdate:modelValue":E[10]||(E[10]=S=>c.value.password=S)},null,8,["append-inner-icon","type","modelValue"]),b(xe,{class:"mb-8",color:"blue",size:"large",variant:"tonal",block:"",onClick:g},{default:ee(()=>E[18]||(E[18]=[He(" Log In ")])),_:1}),b(vs,{class:"text-center"},{default:ee(()=>[b(xe,{variant:"plain",onClick:E[11]||(E[11]=S=>s.value=!s.value)},{default:ee(()=>[E[19]||(E[19]=He(" Sign up now ")),b(Me,{icon:"mdi-chevron-right"})]),_:1})]),_:1})]),_:1})):(ze(),Ot(Zr,{key:2,"prepend-icon":"mdi-logout",text:"Are you sure you would like to sign out?",title:"Sign Out"},{actions:ee(()=>[b(Ci),b(xe,{onClick:E[12]||(E[12]=S=>o.value=!1)},{default:ee(()=>E[21]||(E[21]=[He(" No ")])),_:1}),b(xe,{onClick:ea(d,["prevent"])},{default:ee(()=>E[22]||(E[22]=[He(" Yes ")])),_:1})]),_:1}))]),_:1},8,["modelValue"])]))}},o_="/deploy-vuetify/assets/logo-bw-BXlWahOf.png",a_="/deploy-vuetify/assets/logo-oZi6akDM.png",l_={__name:"LogoImage",setup(e){const t=Es();return(n,r)=>bs(t).global.current.value.dark?(ze(),Ot(gn,{key:0,src:o_,alt:"Brand Logo","max-width":"150",class:"mr-4"})):(ze(),Ot(gn,{key:1,src:a_,alt:"Brand Logo","max-width":"150",class:"mr-4"}))}},c_=z({text:String,...oe(),...Xe()},"VToolbarTitle"),u_=Y()({name:"VToolbarTitle",props:c_(),setup(e,t){let{slots:n}=t;return ne(()=>{const r=!!(n.default||n.text||e.text);return b(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[r&&b("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,(s=n.default)==null?void 0:s.call(n)])]}})}),{}}}),d_=[null,"prominent","default","comfortable","compact"],h_=z({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>d_.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ei(),...oe(),...nr(),...xt(),...Xe({tag:"header"}),...Ue()},"VToolbar"),f_=Y()({name:"VToolbar",props:h_(),setup(e,t){var E;let{slots:n}=t;const{backgroundColorClasses:r,backgroundColorStyles:s}=Lt(ue(e,"color")),{borderClasses:o}=ti(e),{elevationClasses:l}=ir(e),{roundedClasses:c}=Mt(e),{themeClasses:d}=_t(e),{rtlClasses:g}=pn(),p=ce(!!(e.extended||(E=n.extension)!=null&&E.call(n))),T=N(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),k=N(()=>p.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Jn({VBtn:{variant:"text"}}),ne(()=>{var L;const S=!!(e.title||n.title),P=!!(n.image||e.image),O=(L=n.extension)==null?void 0:L.call(n);return p.value=!!(e.extended||O),b(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},r.value,o.value,l.value,c.value,d.value,g.value,e.class],style:[s.value,e.style]},{default:()=>[P&&b("div",{key:"image",class:"v-toolbar__image"},[n.image?b(Re,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):b(gn,{key:"image-img",cover:!0,src:e.image},null)]),b(Re,{defaults:{VTabs:{height:ve(T.value)}}},{default:()=>{var M,D,V;return[b("div",{class:"v-toolbar__content",style:{height:ve(T.value)}},[n.prepend&&b("div",{class:"v-toolbar__prepend"},[(M=n.prepend)==null?void 0:M.call(n)]),S&&b(u_,{key:"title",text:e.title},{text:n.title}),(D=n.default)==null?void 0:D.call(n),n.append&&b("div",{class:"v-toolbar__append"},[(V=n.append)==null?void 0:V.call(n)])])]}}),b(Re,{defaults:{VTabs:{height:ve(k.value)}}},{default:()=>[b(Jd,null,{default:()=>[p.value&&b("div",{class:"v-toolbar__extension",style:{height:ve(k.value)}},[O])]})]})]})}),{contentHeight:T,extensionHeight:k}}}),g_=z({...xd({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),v_=Y()({name:"VAppBarNavIcon",props:g_(),setup(e,t){let{slots:n}=t;return ne(()=>b(xe,ie(e,{class:["v-app-bar-nav-icon"]}),n)),{}}}),m_=z({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Ee,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...oe(),...kl({location:"top end"}),...xt(),...Xe(),...Ue(),...ni({transition:"scale-rotate-transition"})},"VBadge"),p_=Y()({name:"VBadge",inheritAttrs:!1,props:m_(),setup(e,t){const{backgroundColorClasses:n,backgroundColorStyles:r}=Lt(ue(e,"color")),{roundedClasses:s}=Mt(e),{t:o}=yl(),{textColorClasses:l,textColorStyles:c}=Qn(ue(e,"textColor")),{themeClasses:d}=Es(),{locationStyles:g}=Pl(e,!0,p=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(p)?+(e.offsetY??0):["left","right"].includes(p)?+(e.offsetX??0):0));return ne(()=>{const p=Number(e.content),T=!e.max||isNaN(p)?e.content:p<=+e.max?p:`${e.max}+`,[k,E]=bd(t.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return b(e.tag,ie({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},E,{style:e.style}),{default:()=>{var S,P;return[b("div",{class:"v-badge__wrapper"},[(P=(S=t.slots).default)==null?void 0:P.call(S),b(Rt,{transition:e.transition},{default:()=>{var O,L;return[it(b("span",ie({class:["v-badge__badge",d.value,n.value,s.value,l.value],style:[r.value,c.value,e.inline?{}:g.value],"aria-atomic":"true","aria-label":o(e.label,p),"aria-live":"polite",role:"status"},k),[e.dot?void 0:t.slots.badge?(L=(O=t.slots).badge)==null?void 0:L.call(O):e.icon?b(Me,{icon:e.icon},null):T]),[[Xn,e.modelValue]])]}})])]}})}),{}}}),y_=z({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...oe(),...Ue()},"VDivider"),hl=Y()({name:"VDivider",props:y_(),setup(e,t){let{attrs:n,slots:r}=t;const{themeClasses:s}=_t(e),{textColorClasses:o,textColorStyles:l}=Qn(ue(e,"color")),c=N(()=>{const d={};return e.length&&(d[e.vertical?"height":"width"]=ve(e.length)),e.thickness&&(d[e.vertical?"borderRightWidth":"borderTopWidth"]=ve(e.thickness)),d});return ne(()=>{const d=b("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[c.value,l.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null);return r.default?b("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[d,b("div",{class:"v-divider__content"},[r.default()]),d]):d}),{}}}),__=Symbol.for("vuetify:list");function w_(){return _n(__,null)}const b_=Symbol.for("vuetify:nested"),I_={id:ce(),root:{register:()=>null,unregister:()=>null,parents:H(new Map),children:H(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:H(!1),selectable:H(!1),opened:H(new Set),activated:H(new Set),selected:H(new Map),selectedValues:H([]),getPath:()=>[]}},E_=(e,t)=>{const n=_n(b_,I_),r=Symbol(Zt()),s=N(()=>e.value!==void 0?e.value:r),o={...n,id:s,open:(l,c)=>n.root.open(s.value,l,c),openOnSelect:(l,c)=>n.root.openOnSelect(s.value,l,c),isOpen:N(()=>n.root.opened.value.has(s.value)),parent:N(()=>n.root.parents.value.get(s.value)),activate:(l,c)=>n.root.activate(s.value,l,c),isActivated:N(()=>n.root.activated.value.has(ns(s.value))),select:(l,c)=>n.root.select(s.value,l,c),isSelected:N(()=>n.root.selected.value.get(ns(s.value))==="on"),isIndeterminate:N(()=>n.root.selected.value.get(s.value)==="indeterminate"),isLeaf:N(()=>!n.root.children.value.get(s.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(s.value,n.id.value,t),bn(()=>{!n.isGroupActivator&&n.root.unregister(s.value)}),o},T_=z({opacity:[Number,String],...oe(),...Xe()},"VListItemSubtitle"),S_=Y()({name:"VListItemSubtitle",props:T_(),setup(e,t){let{slots:n}=t;return ne(()=>b(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},n)),{}}}),A_=Rs("v-list-item-title"),k_=z({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Ee,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Ee,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ft(),onClickOnce:ft(),...ei(),...oe(),...En(),...mn(),...nr(),...xt(),...Cl(),...Xe(),...Ue(),...tr({variant:"text"})},"VListItem"),C_=Y()({name:"VListItem",directives:{Ripple:Cs},props:k_(),emits:{click:e=>!0},setup(e,t){let{attrs:n,slots:r,emit:s}=t;const o=Rl(e,n),l=N(()=>e.value===void 0?o.href.value:e.value),{activate:c,isActivated:d,select:g,isOpen:p,isSelected:T,isIndeterminate:k,isGroupActivator:E,root:S,parent:P,openOnSelect:O,id:L}=E_(l,!1),M=w_(),D=N(()=>{var $;return e.active!==!1&&(e.active||(($=o.isActive)==null?void 0:$.value)||(S.activatable.value?d.value:T.value))}),V=N(()=>e.link!==!1&&o.isLink.value),U=N(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value||!!M&&(S.selectable.value||S.activatable.value||e.value!=null))),R=N(()=>e.rounded||e.nav),y=N(()=>e.color??e.activeColor),h=N(()=>({color:D.value?y.value??e.baseColor:e.baseColor,variant:e.variant}));re(()=>{var $;return($=o.isActive)==null?void 0:$.value},$=>{$&&P.value!=null&&S.open(P.value,!0),$&&O($)},{immediate:!0});const{themeClasses:m}=_t(e),{borderClasses:I}=ti(e),{colorClasses:_,colorStyles:w,variantClasses:v}=As(h),{densityClasses:F}=Zn(e),{dimensionStyles:j}=yn(e),{elevationClasses:q}=ir(e),{roundedClasses:G}=Mt(R),W=N(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ae=N(()=>({isActive:D.value,select:g,isOpen:p.value,isSelected:T.value,isIndeterminate:k.value}));function he($){var Q;s("click",$),U.value&&((Q=o.navigate)==null||Q.call(o,$),!E&&(S.activatable.value?c(!d.value,$):(S.selectable.value||e.value!=null)&&g(!T.value,$)))}function X($){($.key==="Enter"||$.key===" ")&&($.preventDefault(),$.target.dispatchEvent(new MouseEvent("click",$)))}return ne(()=>{const $=V.value?"a":e.tag,Q=r.title||e.title!=null,Be=r.subtitle||e.subtitle!=null,De=!!(e.appendAvatar||e.appendIcon),Z=!!(De||r.append),de=!!(e.prependAvatar||e.prependIcon),$e=!!(de||r.prepend);return M==null||M.updateHasPrepend($e),e.activeColor&&Id("active-color",["color","base-color"]),it(b($,ie({class:["v-list-item",{"v-list-item--active":D.value,"v-list-item--disabled":e.disabled,"v-list-item--link":U.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!$e&&(M==null?void 0:M.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&D.value},m.value,I.value,_.value,F.value,q.value,W.value,G.value,v.value,e.class],style:[w.value,j.value,e.style],tabindex:U.value?M?-2:0:void 0,"aria-selected":S.activatable.value?d.value:T.value,onClick:he,onKeydown:U.value&&!V.value&&X},o.linkProps),{default:()=>{var Ft;return[ks(U.value||D.value,"v-list-item"),$e&&b("div",{key:"prepend",class:"v-list-item__prepend"},[r.prepend?b(Re,{key:"prepend-defaults",disabled:!de,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var ge;return[(ge=r.prepend)==null?void 0:ge.call(r,ae.value)]}}):b(Te,null,[e.prependAvatar&&b(Xi,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&b(Me,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),b("div",{class:"v-list-item__spacer"},null)]),b("div",{class:"v-list-item__content","data-no-activator":""},[Q&&b(A_,{key:"title"},{default:()=>{var ge;return[((ge=r.title)==null?void 0:ge.call(r,{title:e.title}))??e.title]}}),Be&&b(S_,{key:"subtitle"},{default:()=>{var ge;return[((ge=r.subtitle)==null?void 0:ge.call(r,{subtitle:e.subtitle}))??e.subtitle]}}),(Ft=r.default)==null?void 0:Ft.call(r,ae.value)]),Z&&b("div",{key:"append",class:"v-list-item__append"},[r.append?b(Re,{key:"append-defaults",disabled:!De,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var ge;return[(ge=r.append)==null?void 0:ge.call(r,ae.value)]}}):b(Te,null,[e.appendIcon&&b(Me,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&b(Xi,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),b("div",{class:"v-list-item__spacer"},null)])]}}),[[In("ripple"),U.value&&e.ripple]])}),{activate:c,isActivated:d,isGroupActivator:E,isSelected:T,list:M,select:g,root:S,id:L}}});function P_(e){let{rootEl:t,isSticky:n,layoutItemStyles:r}=e;const s=ce(!1),o=ce(0),l=N(()=>{const g=typeof s.value=="boolean"?"top":s.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,s.value?{[g]:ve(o.value)}:{top:r.value.top}]});Zi(()=>{re(n,g=>{g?window.addEventListener("scroll",d,{passive:!0}):window.removeEventListener("scroll",d)},{immediate:!0})}),bn(()=>{window.removeEventListener("scroll",d)});let c=0;function d(){const g=c>window.scrollY?"up":"down",p=t.value.getBoundingClientRect(),T=parseFloat(r.value.top??0),k=window.scrollY-Math.max(0,o.value-T),E=p.height+Math.max(o.value,T)-window.scrollY-window.innerHeight,S=parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y"))||0;p.height<window.innerHeight-T?(s.value="top",o.value=T):g==="up"&&s.value==="bottom"||g==="down"&&s.value==="top"?(o.value=window.scrollY+p.top-S,s.value=!0):g==="down"&&E<=0?(o.value=0,s.value="bottom"):g==="up"&&k<=0&&(S?s.value!=="top"&&(o.value=-k+S+T,s.value="top"):(o.value=p.top+k,s.value="top")),c=window.scrollY}return{isStuck:s,stickyStyles:l}}const R_=100,O_=20;function fl(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function gl(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let t=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const r=fl(t),s=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);t+=(s-r)*Math.abs(s),n===e.length-1&&(t*=.5)}return fl(t)*1e3}function N_(){const e={};function t(s){Array.from(s.changedTouches).forEach(o=>{(e[o.identifier]??(e[o.identifier]=new Ed(O_))).push([s.timeStamp,o])})}function n(s){Array.from(s.changedTouches).forEach(o=>{delete e[o.identifier]})}function r(s){var g;const o=(g=e[s])==null?void 0:g.values().reverse();if(!o)throw new Error(`No samples for touch id ${s}`);const l=o[0],c=[],d=[];for(const p of o){if(l[0]-p[0]>R_)break;c.push({t:p[0],d:p[1].clientX}),d.push({t:p[0],d:p[1].clientY})}return{x:gl(c),y:gl(d),get direction(){const{x:p,y:T}=this,[k,E]=[Math.abs(p),Math.abs(T)];return k>E&&p>=0?"right":k>E&&p<=0?"left":E>k&&T>=0?"down":E>k&&T<=0?"up":D_()}}}return{addMovement:t,endTouch:n,getVelocity:r}}function D_(){throw new Error}function L_(e){let{el:t,isActive:n,isTemporary:r,width:s,touchless:o,position:l}=e;Zi(()=>{window.addEventListener("touchstart",M,{passive:!0}),window.addEventListener("touchmove",D,{passive:!1}),window.addEventListener("touchend",V,{passive:!0})}),bn(()=>{window.removeEventListener("touchstart",M),window.removeEventListener("touchmove",D),window.removeEventListener("touchend",V)});const c=N(()=>["left","right"].includes(l.value)),{addMovement:d,endTouch:g,getVelocity:p}=N_();let T=!1;const k=ce(!1),E=ce(0),S=ce(0);let P;function O(R,y){return(l.value==="left"?R:l.value==="right"?document.documentElement.clientWidth-R:l.value==="top"?R:l.value==="bottom"?document.documentElement.clientHeight-R:ln())-(y?s.value:0)}function L(R){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const h=l.value==="left"?(R-S.value)/s.value:l.value==="right"?(document.documentElement.clientWidth-R-S.value)/s.value:l.value==="top"?(R-S.value)/s.value:l.value==="bottom"?(document.documentElement.clientHeight-R-S.value)/s.value:ln();return y?Math.max(0,Math.min(1,h)):h}function M(R){if(o.value)return;const y=R.changedTouches[0].clientX,h=R.changedTouches[0].clientY,m=25,I=l.value==="left"?y<m:l.value==="right"?y>document.documentElement.clientWidth-m:l.value==="top"?h<m:l.value==="bottom"?h>document.documentElement.clientHeight-m:ln(),_=n.value&&(l.value==="left"?y<s.value:l.value==="right"?y>document.documentElement.clientWidth-s.value:l.value==="top"?h<s.value:l.value==="bottom"?h>document.documentElement.clientHeight-s.value:ln());(I||_||n.value&&r.value)&&(P=[y,h],S.value=O(c.value?y:h,n.value),E.value=L(c.value?y:h),T=S.value>-20&&S.value<80,g(R),d(R))}function D(R){const y=R.changedTouches[0].clientX,h=R.changedTouches[0].clientY;if(T){if(!R.cancelable){T=!1;return}const I=Math.abs(y-P[0]),_=Math.abs(h-P[1]);(c.value?I>_&&I>3:_>I&&_>3)?(k.value=!0,T=!1):(c.value?_:I)>3&&(T=!1)}if(!k.value)return;R.preventDefault(),d(R);const m=L(c.value?y:h,!1);E.value=Math.max(0,Math.min(1,m)),m>1?S.value=O(c.value?y:h,!0):m<0&&(S.value=O(c.value?y:h,!1))}function V(R){if(T=!1,!k.value)return;d(R),k.value=!1;const y=p(R.changedTouches[0].identifier),h=Math.abs(y.x),m=Math.abs(y.y);(c.value?h>m&&h>400:m>h&&m>3)?n.value=y.direction===({left:"right",right:"left",top:"down",bottom:"up"}[l.value]||ln()):n.value=E.value>.5}const U=N(()=>k.value?{transform:l.value==="left"?`translateX(calc(-100% + ${E.value*s.value}px))`:l.value==="right"?`translateX(calc(100% - ${E.value*s.value}px))`:l.value==="top"?`translateY(calc(-100% + ${E.value*s.value}px))`:l.value==="bottom"?`translateY(calc(100% - ${E.value*s.value}px))`:ln(),transition:"none"}:void 0);return gt(k,()=>{var h,m;const R=((h=t.value)==null?void 0:h.style.transform)??null,y=((m=t.value)==null?void 0:m.style.transition)??null;er(()=>{var I,_,w,v;(_=t.value)==null||_.style.setProperty("transform",((I=U.value)==null?void 0:I.transform)||"none"),(v=t.value)==null||v.style.setProperty("transition",((w=U.value)==null?void 0:w.transition)||null)}),Je(()=>{var I,_;(I=t.value)==null||I.style.setProperty("transform",R),(_=t.value)==null||_.style.setProperty("transition",y)})}),{isDragging:k,dragProgress:E,dragStyles:U}}function ln(){throw new Error}const x_=["start","end","left","right","top","bottom"],M_=z({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>x_.includes(e)},sticky:Boolean,...ei(),...oe(),...Iu(),...Td({mobile:null}),...nr(),...Sd(),...xt(),...Xe({tag:"nav"}),...Ue()},"VNavigationDrawer"),V_=Y()({name:"VNavigationDrawer",props:M_(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,t){let{attrs:n,emit:r,slots:s}=t;const{isRtl:o}=pn(),{themeClasses:l}=_t(e),{borderClasses:c}=ti(e),{backgroundColorClasses:d,backgroundColorStyles:g}=Lt(ue(e,"color")),{elevationClasses:p}=ir(e),{displayClasses:T,mobile:k}=Tl(e),{roundedClasses:E}=Mt(e),S=Ol(),P=Ge(e,"modelValue",null,X=>!!X),{ssrBootStyles:O}=Ad(),{scopeId:L}=Zs(),M=H(),D=ce(!1),{runOpenDelay:V,runCloseDelay:U}=Eu(e,X=>{D.value=X}),R=N(()=>e.rail&&e.expandOnHover&&D.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),y=N(()=>Md(e.location,o.value)),h=N(()=>e.persistent),m=N(()=>!e.permanent&&(k.value||e.temporary)),I=N(()=>e.sticky&&!m.value&&y.value!=="bottom");gt(()=>e.expandOnHover&&e.rail!=null,()=>{re(D,X=>r("update:rail",!X))}),gt(()=>!e.disableResizeWatcher,()=>{re(m,X=>!e.permanent&&rt(()=>P.value=!X))}),gt(()=>!e.disableRouteWatcher&&!!S,()=>{re(S.currentRoute,()=>m.value&&(P.value=!1))}),re(()=>e.permanent,X=>{X&&(P.value=!0)}),e.modelValue==null&&!m.value&&(P.value=e.permanent||!k.value);const{isDragging:_,dragProgress:w}=L_({el:M,isActive:P,isTemporary:m,width:R,touchless:ue(e,"touchless"),position:y}),v=N(()=>{const X=m.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):R.value;return _.value?X*w.value:X}),F=N(()=>["top","bottom"].includes(e.location)?0:R.value),{layoutItemStyles:j,layoutItemScrimStyles:q}=kd({id:e.name,order:N(()=>parseInt(e.order,10)),position:y,layoutSize:v,elementSize:F,active:N(()=>P.value||_.value),disableTransitions:N(()=>_.value),absolute:N(()=>e.absolute||I.value&&typeof G.value!="string")}),{isStuck:G,stickyStyles:W}=P_({rootEl:M,isSticky:I,layoutItemStyles:j}),ae=Lt(N(()=>typeof e.scrim=="string"?e.scrim:null)),he=N(()=>({..._.value?{opacity:w.value*.2,transition:"none"}:void 0,...q.value}));return Jn({VList:{bgColor:"transparent"}}),ne(()=>{const X=s.image||e.image;return b(Te,null,[b(e.tag,ie({ref:M,onMouseenter:V,onMouseleave:U,class:["v-navigation-drawer",`v-navigation-drawer--${y.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":D.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":m.value,"v-navigation-drawer--persistent":h.value,"v-navigation-drawer--active":P.value,"v-navigation-drawer--sticky":I.value},l.value,d.value,c.value,T.value,p.value,E.value,e.class],style:[g.value,j.value,O.value,W.value,e.style,["top","bottom"].includes(y.value)?{height:"auto"}:{}]},L,n),{default:()=>{var $,Q,Be;return[X&&b("div",{key:"image",class:"v-navigation-drawer__img"},[s.image?b(Re,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},s.image):b(gn,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),s.prepend&&b("div",{class:"v-navigation-drawer__prepend"},[($=s.prepend)==null?void 0:$.call(s)]),b("div",{class:"v-navigation-drawer__content"},[(Q=s.default)==null?void 0:Q.call(s)]),s.append&&b("div",{class:"v-navigation-drawer__append"},[(Be=s.append)==null?void 0:Be.call(s)])]}}),b(Kt,{name:"fade-transition"},{default:()=>[m.value&&(_.value||P.value)&&!!e.scrim&&b("div",ie({class:["v-navigation-drawer__scrim",ae.backgroundColorClasses.value],style:[he.value,ae.backgroundColorStyles.value],onClick:()=>{h.value||(P.value=!1)}},L),null)]})])}),{isStuck:G}}}),Pu=Symbol.for("vuetify:selection-control-group"),Ru=z({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:Ee,trueIcon:Ee,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Cd},...oe(),...En(),...Ue()},"SelectionControlGroup"),U_=z({...Ru({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");Y()({name:"VSelectionControlGroup",props:U_(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const r=Ge(e,"modelValue"),s=Zt(),o=N(()=>e.id||`v-selection-control-group-${s}`),l=N(()=>e.name||o.value),c=new Set;return ws(Pu,{modelValue:r,forceUpdate:()=>{c.forEach(d=>d())},onForceUpdate:d=>{c.add(d),Je(()=>{c.delete(d)})}}),Jn({[e.defaultsTarget]:{color:ue(e,"color"),disabled:ue(e,"disabled"),density:ue(e,"density"),error:ue(e,"error"),inline:ue(e,"inline"),modelValue:r,multiple:N(()=>!!e.multiple||e.multiple==null&&Array.isArray(r.value)),name:l,falseIcon:ue(e,"falseIcon"),trueIcon:ue(e,"trueIcon"),readonly:ue(e,"readonly"),ripple:ue(e,"ripple"),type:ue(e,"type"),valueComparator:ue(e,"valueComparator")}}),ne(()=>{var d;return b("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(d=n.default)==null?void 0:d.call(n)])}),{}}});const Ou=z({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...oe(),...Ru()},"VSelectionControl");function F_(e){const t=_n(Pu,void 0),{densityClasses:n}=Zn(e),r=Ge(e,"modelValue"),s=N(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),o=N(()=>e.falseValue!==void 0?e.falseValue:!1),l=N(()=>!!e.multiple||e.multiple==null&&Array.isArray(r.value)),c=N({get(){const E=t?t.modelValue.value:r.value;return l.value?qt(E).some(S=>e.valueComparator(S,s.value)):e.valueComparator(E,s.value)},set(E){if(e.readonly)return;const S=E?s.value:o.value;let P=S;l.value&&(P=E?[...qt(r.value),S]:qt(r.value).filter(O=>!e.valueComparator(O,s.value))),t?t.modelValue.value=P:r.value=P}}),{textColorClasses:d,textColorStyles:g}=Qn(N(()=>{if(!(e.error||e.disabled))return c.value?e.color:e.baseColor})),{backgroundColorClasses:p,backgroundColorStyles:T}=Lt(N(()=>c.value&&!e.error&&!e.disabled?e.color:e.baseColor)),k=N(()=>c.value?e.trueIcon:e.falseIcon);return{group:t,densityClasses:n,trueValue:s,falseValue:o,model:c,textColorClasses:d,textColorStyles:g,backgroundColorClasses:p,backgroundColorStyles:T,icon:k}}const vl=Y()({name:"VSelectionControl",directives:{Ripple:Cs},inheritAttrs:!1,props:Ou(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:r}=t;const{group:s,densityClasses:o,icon:l,model:c,textColorClasses:d,textColorStyles:g,backgroundColorClasses:p,backgroundColorStyles:T,trueValue:k}=F_(e),E=Zt(),S=ce(!1),P=ce(!1),O=H(),L=N(()=>e.id||`input-${E}`),M=N(()=>!e.disabled&&!e.readonly);s==null||s.onForceUpdate(()=>{O.value&&(O.value.checked=c.value)});function D(y){M.value&&(S.value=!0,El(y.target,":focus-visible")!==!1&&(P.value=!0))}function V(){S.value=!1,P.value=!1}function U(y){y.stopPropagation()}function R(y){if(!M.value){O.value&&(O.value.checked=c.value);return}e.readonly&&s&&rt(()=>s.forceUpdate()),c.value=y.target.checked}return ne(()=>{var _,w;const y=r.label?r.label({label:e.label,props:{for:L.value}}):e.label,[h,m]=Is(n),I=b("input",ie({ref:O,checked:c.value,disabled:!!e.disabled,id:L.value,onBlur:V,onFocus:D,onInput:R,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?c.value:void 0},m),null);return b("div",ie({class:["v-selection-control",{"v-selection-control--dirty":c.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":S.value,"v-selection-control--focus-visible":P.value,"v-selection-control--inline":e.inline},o.value,e.class]},h,{style:e.style}),[b("div",{class:["v-selection-control__wrapper",d.value],style:g.value},[(_=r.default)==null?void 0:_.call(r,{backgroundColorClasses:p,backgroundColorStyles:T}),it(b("div",{class:["v-selection-control__input"]},[((w=r.input)==null?void 0:w.call(r,{model:c,textColorClasses:d,textColorStyles:g,backgroundColorClasses:p,backgroundColorStyles:T,inputNode:I,icon:l.value,props:{onFocus:D,onBlur:V,id:L.value}}))??b(Te,null,[l.value&&b(Me,{key:"icon",icon:l.value},null),I])]),[[In("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&b(Vl,{for:L.value,onClick:U},{default:()=>[y]})])}),{isFocused:S,input:O}}}),B_=z({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Ds(),...Ou()},"VSwitch"),$_=Y()({name:"VSwitch",inheritAttrs:!1,props:B_(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,t){let{attrs:n,slots:r}=t;const s=Ge(e,"indeterminate"),o=Ge(e,"modelValue"),{loaderClasses:l}=Ts(e),{isFocused:c,focus:d,blur:g}=Ns(e),p=H(),T=mt&&window.matchMedia("(forced-colors: active)").matches,k=N(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),E=Zt(),S=N(()=>e.id||`switch-${E}`);function P(){s.value&&(s.value=!1)}function O(L){var M,D;L.stopPropagation(),L.preventDefault(),(D=(M=p.value)==null?void 0:M.input)==null||D.click()}return ne(()=>{const[L,M]=Is(n),D=Mi.filterProps(e),V=vl.filterProps(e);return b(Mi,ie({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":s.value},l.value,e.class]},L,D,{modelValue:o.value,"onUpdate:modelValue":U=>o.value=U,id:S.value,focused:c.value,style:e.style}),{...r,default:U=>{let{id:R,messagesId:y,isDisabled:h,isReadonly:m,isValid:I}=U;const _={model:o,isValid:I};return b(vl,ie({ref:p},V,{modelValue:o.value,"onUpdate:modelValue":[w=>o.value=w,P],id:R.value,"aria-describedby":y.value,type:"checkbox","aria-checked":s.value?"mixed":void 0,disabled:h.value,readonly:m.value,onFocus:d,onBlur:g},M),{...r,default:w=>{let{backgroundColorClasses:v,backgroundColorStyles:F}=w;return b("div",{class:["v-switch__track",T?void 0:v.value],style:F.value,onClick:O},[r["track-true"]&&b("div",{key:"prepend",class:"v-switch__track-true"},[r["track-true"](_)]),r["track-false"]&&b("div",{key:"append",class:"v-switch__track-false"},[r["track-false"](_)])])},input:w=>{let{inputNode:v,icon:F,backgroundColorClasses:j,backgroundColorStyles:q}=w;return b(Te,null,[v,b("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":F||e.loading},e.inset||T?void 0:j.value],style:e.inset?void 0:q.value},[r.thumb?b(Re,{defaults:{VIcon:{icon:F,size:"x-small"}}},{default:()=>[r.thumb({..._,icon:F})]}):b(Xd,null,{default:()=>[e.loading?b(Ss,{name:"v-switch",active:!0,color:I.value===!1?void 0:k.value},{default:G=>r.loader?r.loader(G):b(Vd,{active:G.isActive,color:G.color,indeterminate:!0,size:"16",width:"2"},null)}):F&&b(Me,{key:String(F),icon:F,size:"x-small"},null)]})])])}})}})}),{}}}),j_=z({...oe(),...tr({variant:"text"})},"VToolbarItems"),H_=Y()({name:"VToolbarItems",props:j_(),setup(e,t){let{slots:n}=t;return Jn({VBtn:{color:ue(e,"color"),height:"inherit",variant:ue(e,"variant")}}),ne(()=>{var r;return b("div",{class:["v-toolbar-items",e.class],style:e.style},[(r=n.default)==null?void 0:r.call(n)])}),{}}}),z_={class:"hidden-md-and-up"},J_={__name:"AppNav",setup(e){const t=Es();H("E'S Fashion"),H("Mode & Anderungen");const n=H(!1),r=H([{title:"Home",path:"/"},{title:"Boutique",path:"/boutique"},{title:"Alterier",path:"/alterier"},{title:"Über Uns",path:"/about-us"}]),s=H({title:"Cart",path:"/shopping-cart"});function o(){t.global.name.value=t.global.current.value.dark?"light":"dark"}return(l,c)=>{const d=l_,g=s_;return ze(),Ot(qd,{app:"",class:"ma-auto"},{default:ee(()=>[b(f_,{prominent:"",class:"bg-transparent"},{default:ee(()=>[b(d),b(Ci),b(H_,{class:"hidden-sm-and-down"},{default:ee(()=>[(ze(!0),is(Te,null,ta(r.value,p=>(ze(),Ot(xe,{flat:"",key:p.title,to:p.path},{default:ee(()=>[b(Me,{left:"",dark:""},{default:ee(()=>[He(rs(p.icon),1)]),_:2},1024),He(" "+rs(p.title),1)]),_:2},1032,["to"]))),128)),b(g)]),_:1}),ct("span",null,[b(xe,{class:"text-none",stacked:"",to:s.value.path},{default:ee(()=>[b(p_,{color:"error",content:"2"},{default:ee(()=>[b(Me,null,{default:ee(()=>c[2]||(c[2]=[He("mdi-cart")])),_:1})]),_:1})]),_:1},8,["to"])]),ct("span",null,[b($_,{"onUpdate:modelValue":o,"false-icon":"mdi-weather-sunny","true-icon":"mdi-weather-night","hide-details":"",inset:""})]),ct("span",z_,[b(v_,{onClick:c[0]||(c[0]=p=>n.value=!n.value)})])]),_:1}),b(V_,{modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=p=>n.value=p),temporary:""},{default:ee(()=>[b(d),b(hl),(ze(!0),is(Te,null,ta(r.value,p=>(ze(),Ot(C_,{link:"",title:p.title,to:p.path},null,8,["title","to"]))),256)),b(hl),b(g)]),_:1},8,["modelValue"]),b(Cu)]),_:1})}}};export{Rt as M,Ht as V,X_ as _,qd as a,gn as b,Y_ as c,J_ as d,Zr as e,Hl as f,Sy as g,Ty as h,gs as i,Ky as j,gh as k,G_ as l,K_ as m,Qd as n,Xi as o,Cu as p,C_ as q,hl as r,Cy as s,vs as t,Yy as u,V_ as v};
