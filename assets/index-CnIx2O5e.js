import{p as z,m as V,K as p,b as ne,e as T,L as re,M as A,j,k as a,c as R,N as ae,O as L,P as se,Q as le,S as M,t as ie,R as oe,s as C,r as ue,U as x,W as ce,X as de,Y as ve,Z as D,_ as me,F as q,l as ge,$ as fe,y as O,z as K,A as k,D as S,B as _e}from"./index-6hbaPzyZ.js";import{m as ye,u as Se,a as be,_ as he}from"./rounded-BLjliGqK.js";const Ce="/deploy-vuetify/assets/logo-DtuIbWiQ.png",Pe=z({fluid:{type:Boolean,default:!1},...V(),...p(),...ne()},"VContainer"),Q=T()({name:"VContainer",props:Pe(),setup(e,s){let{slots:t}=s;const{rtlClasses:n}=re(),{dimensionStyles:u}=A(e);return j(()=>a(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:[u.value,e.style]},t)),{}}});function Re(e){return{aspectStyles:R(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const G=z({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...V(),...p()},"VResponsive"),I=T()({name:"VResponsive",props:G(),setup(e,s){let{slots:t}=s;const{aspectStyles:n}=Re(e),{dimensionStyles:u}=A(e);return j(()=>{var v;return a("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[u.value,e.style]},[a("div",{class:"v-responsive__sizer",style:n.value},null),(v=t.additional)==null?void 0:v.call(t),t.default&&a("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),ke=z({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),P=(e,s)=>{let{slots:t}=s;const{transition:n,disabled:u,group:v,...f}=e,{component:m=v?se:le,..._}=typeof n=="object"?n:{};return ae(m,L(typeof n=="string"?{name:u?"":n}:_,typeof n=="string"?{}:Object.fromEntries(Object.entries({disabled:u,group:v}).filter(l=>{let[i,d]=l;return d!==void 0})),f),t)};function Ie(e,s){if(!M)return;const t=s.modifiers||{},n=s.value,{handler:u,options:v}=typeof n=="object"?n:{handler:n,options:{}},f=new IntersectionObserver(function(){var d;let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],_=arguments.length>1?arguments[1]:void 0;const l=(d=e._observe)==null?void 0:d[s.instance.$.uid];if(!l)return;const i=m.some(y=>y.isIntersecting);u&&(!t.quiet||l.init)&&(!t.once||i||l.init)&&u(i,m,_),i&&t.once?X(e,s):l.init=!0},v);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:f},f.observe(e)}function X(e,s){var n;const t=(n=e._observe)==null?void 0:n[s.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const ze={mounted:Ie,unmounted:X},Be=z({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...G(),...V(),...ye(),...ke()},"VImg"),we=T()({name:"VImg",directives:{intersect:ze},props:Be(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:t,slots:n}=s;const{backgroundColorClasses:u,backgroundColorStyles:v}=Se(ie(e,"color")),{roundedClasses:f}=be(e),m=oe("VImg"),_=C(""),l=ue(),i=C(e.eager?"loading":"idle"),d=C(),y=C(),c=R(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=R(()=>c.value.aspect||d.value/y.value||0);x(()=>e.src,()=>{B(i.value!=="idle")}),x(b,(r,o)=>{!r&&o&&l.value&&h(l.value)}),ce(()=>B());function B(r){if(!(e.eager&&r)&&!(M&&!r&&!e.eager)){if(i.value="loading",c.value.lazySrc){const o=new Image;o.src=c.value.lazySrc,h(o,null)}c.value.src&&de(()=>{var o;t("loadstart",((o=l.value)==null?void 0:o.currentSrc)||c.value.src),setTimeout(()=>{var g;if(!m.isUnmounted)if((g=l.value)!=null&&g.complete){if(l.value.naturalWidth||N(),i.value==="error")return;b.value||h(l.value,null),i.value==="loading"&&W()}else b.value||h(l.value),E()})})}}function W(){var r;m.isUnmounted||(E(),h(l.value),i.value="loaded",t("load",((r=l.value)==null?void 0:r.currentSrc)||c.value.src))}function N(){var r;m.isUnmounted||(i.value="error",t("error",((r=l.value)==null?void 0:r.currentSrc)||c.value.src))}function E(){const r=l.value;r&&(_.value=r.currentSrc||r.src)}let w=-1;ve(()=>{clearTimeout(w)});function h(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const g=()=>{if(clearTimeout(w),m.isUnmounted)return;const{naturalHeight:$,naturalWidth:H}=r;$||H?(d.value=H,y.value=$):!r.complete&&i.value==="loading"&&o!=null?w=window.setTimeout(g,o):(r.currentSrc.endsWith(".svg")||r.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,y.value=1)};g()}const F=R(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Y=()=>{var g;if(!c.value.src||i.value==="idle")return null;const r=a("img",{class:["v-img__img",F.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:W,onError:N},null),o=(g=n.sources)==null?void 0:g.call(n);return a(P,{transition:e.transition,appear:!0},{default:()=>[D(o?a("picture",{class:"v-img__picture"},[o,r]):r,[[fe,i.value==="loaded"]])]})},Z=()=>a(P,{transition:e.transition},{default:()=>[c.value.lazySrc&&i.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",F.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),J=()=>n.placeholder?a(P,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&a("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,ee=()=>n.error?a(P,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&a("div",{class:"v-img__error"},[n.error()])]}):null,te=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,U=C(!1);{const r=x(b,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{U.value=!0})}),r())})}return j(()=>{const r=I.filterProps(e);return D(a(I,L({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!U.value},u.value,f.value,e.class],style:[{width:ge(e.width==="auto"?d.value:e.width)},v.value,e.style]},r,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>a(q,null,[a(Y,null,null),a(Z,null,null),a(te,null,null),a(J,null,null),a(ee,null,null)]),default:n.default}),[[me("intersect"),{handler:B,options:e.options},null,{once:!0}]])}),{currentSrc:_,image:l,state:i,naturalWidth:d,naturalHeight:y}}}),xe={__name:"HelloWorld",setup(e){return(s,t)=>(O(),K(Q,{class:"fill-height"},{default:k(()=>[a(I,{class:"align-centerfill-height mx-auto","max-width":"900"},{default:k(()=>[a(we,{class:"mb-4",height:"150",src:Ce}),t[0]||(t[0]=S("div",{class:"text-center"},[S("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to"),S("h1",{class:"text-h2 font-weight-bold"},"Vuetify")],-1)),t[1]||(t[1]=S("div",{class:"py-4"},null,-1))]),_:1})]),_:1}))}},Ve={};function Te(e,s){return O(),K(Q,{class:"fill-height"},{default:k(()=>[a(I,{class:"align-centerfill-height mx-auto","max-width":"900"},{default:k(()=>s[0]||(s[0]=[S("div",null,"HOPE IS FICKLE",-1)])),_:1})]),_:1})}const je=he(Ve,[["render",Te]]),Ne={__name:"index",setup(e){return(s,t)=>{const n=je,u=xe;return O(),_e(q,null,[t[0]||(t[0]=S("div",null,"Faith is fickle",-1)),a(n),a(u)],64)}}};export{Ne as default};
