import"./VRow-CrTvuNu0.js";import{p as y,a as b,Y as X,e as z,g as S,ah as fe,$ as Y,q as k,v as n,aU as ye,T as Z,aS as be,aT as Se,bv as ae,n as A,d as G,u as ke,t as Ce,k as Q,b0 as _e,s as B,r as he,a8 as W,b1 as Ve,ac as Ie,b2 as Pe,Q as $,ak as ne,F as q,w as Ae,R as Te,a0 as xe,aR as Be,N as R,m as se,X as J,aw as Re,f as le,Z as ie,h as re,i as ce,ay as ue,_ as oe,az as ze,L as H,P as L,aB as de,b as Ne,aX as we,bo as je,bw as Oe,av as Le,ax as De,j as Ue,aY as Ee,bp as Fe,bx as Me,aA as We,aZ as $e}from"./index-Cy_sUniH.js";const qe=y({fluid:{type:Boolean,default:!1},...b(),...X(),...z()},"VContainer"),ct=S()({name:"VContainer",props:qe(),setup(e,s){let{slots:a}=s;const{rtlClasses:t}=fe(),{dimensionStyles:c}=Y(e);return k(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:[c.value,e.style]},a)),{}}}),He=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),O=(e,s)=>{let{slots:a}=s;const{transition:t,disabled:c,group:o,...g}=e,{component:d=o?be:Se,...f}=typeof t=="object"?t:{};return ye(d,Z(typeof t=="string"?{name:c?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:c,group:o}).filter(r=>{let[l,v]=r;return v!==void 0})),g),a)};function Xe(e,s){if(!ae)return;const a=s.modifiers||{},t=s.value,{handler:c,options:o}=typeof t=="object"?t:{handler:t,options:{}},g=new IntersectionObserver(function(){var v;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const r=(v=e._observe)==null?void 0:v[s.instance.$.uid];if(!r)return;const l=d.some(C=>C.isIntersecting);c&&(!a.quiet||r.init)&&(!a.once||l||r.init)&&c(l,d,f),l&&a.once?ve(e,s):r.init=!0},o);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:g},g.observe(e)}function ve(e,s){var t;const a=(t=e._observe)==null?void 0:t[s.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const Ye={mounted:Xe,unmounted:ve},ut=(e,s)=>{const a=e.__vccOpts||e;for(const[t,c]of s)a[t]=c;return a};function Ze(e){return{aspectStyles:A(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const me=y({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...b(),...X()},"VResponsive"),ee=S()({name:"VResponsive",props:me(),setup(e,s){let{slots:a}=s;const{aspectStyles:t}=Ze(e),{dimensionStyles:c}=Y(e);return k(()=>{var o;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[n("div",{class:"v-responsive__sizer",style:t.value},null),(o=a.additional)==null?void 0:o.call(a),a.default&&n("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),Ge=y({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...me(),...b(),...G(),...He()},"VImg"),ge=S()({name:"VImg",directives:{intersect:Ye},props:Ge(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:a,slots:t}=s;const{backgroundColorClasses:c,backgroundColorStyles:o}=ke(Ce(e,"color")),{roundedClasses:g}=Q(e),d=_e("VImg"),f=B(""),r=he(),l=B(e.eager?"loading":"idle"),v=B(),C=B(),m=A(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=A(()=>m.value.aspect||v.value/C.value||0);W(()=>e.src,()=>{T(l.value!=="idle")}),W(h,(i,u)=>{!i&&u&&r.value&&P(r.value)}),Ve(()=>T());function T(i){if(!(e.eager&&i)&&!(ae&&!i&&!e.eager)){if(l.value="loading",m.value.lazySrc){const u=new Image;u.src=m.value.lazySrc,P(u,null)}m.value.src&&Ie(()=>{var u;a("loadstart",((u=r.value)==null?void 0:u.currentSrc)||m.value.src),setTimeout(()=>{var _;if(!d.isUnmounted)if((_=r.value)!=null&&_.complete){if(r.value.naturalWidth||N(),l.value==="error")return;h.value||P(r.value,null),l.value==="loading"&&V()}else h.value||P(r.value),I()})})}}function V(){var i;d.isUnmounted||(I(),P(r.value),l.value="loaded",a("load",((i=r.value)==null?void 0:i.currentSrc)||m.value.src))}function N(){var i;d.isUnmounted||(l.value="error",a("error",((i=r.value)==null?void 0:i.currentSrc)||m.value.src))}function I(){const i=r.value;i&&(f.value=i.currentSrc||i.src)}let x=-1;Pe(()=>{clearTimeout(x)});function P(i){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const _=()=>{if(clearTimeout(x),d.isUnmounted)return;const{naturalHeight:K,naturalWidth:p}=i;K||p?(v.value=p,C.value=K):!i.complete&&l.value==="loading"&&u!=null?x=window.setTimeout(_,u):(i.currentSrc.endsWith(".svg")||i.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,C.value=1)};_()}const w=A(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),D=()=>{var _;if(!m.value.src||l.value==="idle")return null;const i=n("img",{class:["v-img__img",w.value],style:{objectPosition:e.position},src:m.value.src,srcset:m.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:V,onError:N},null),u=(_=t.sources)==null?void 0:_.call(t);return n(O,{transition:e.transition,appear:!0},{default:()=>[$(u?n("picture",{class:"v-img__picture"},[u,i]):i,[[Te,l.value==="loaded"]])]})},U=()=>n(O,{transition:e.transition},{default:()=>[m.value.lazySrc&&l.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",w.value],style:{objectPosition:e.position},src:m.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),E=()=>t.placeholder?n(O,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!t.error)&&n("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,F=()=>t.error?n(O,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&n("div",{class:"v-img__error"},[t.error()])]}):null,M=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=B(!1);{const i=W(h,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),i())})}return k(()=>{const i=ee.filterProps(e);return $(n(ee,Z({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!j.value},c.value,g.value,e.class],style:[{width:Ae(e.width==="auto"?v.value:e.width)},o.value,e.style]},i,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(q,null,[n(D,null,null),n(U,null,null),n(M,null,null),n(E,null,null),n(F,null,null)]),default:t.default}),[[ne("intersect"),{handler:T,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:r,state:l,naturalWidth:v,naturalHeight:C}}}),Qe=S()({name:"VCardActions",props:b(),setup(e,s){let{slots:a}=s;return xe({VBtn:{slim:!0,variant:"text"}}),k(()=>{var t;return n("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),Je=y({opacity:[Number,String],...b(),...z()},"VCardSubtitle"),Ke=S()({name:"VCardSubtitle",props:Je(),setup(e,s){let{slots:a}=s;return k(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a)),{}}}),pe=Be("v-card-title"),et=y({start:Boolean,end:Boolean,icon:R,image:String,text:String,...se(),...b(),...J(),...G(),...Re(),...z(),...le(),...ie({variant:"flat"})},"VAvatar"),te=S()({name:"VAvatar",props:et(),setup(e,s){let{slots:a}=s;const{themeClasses:t}=re(e),{borderClasses:c}=ce(e),{colorClasses:o,colorStyles:g,variantClasses:d}=ue(e),{densityClasses:f}=oe(e),{roundedClasses:r}=Q(e),{sizeClasses:l,sizeStyles:v}=ze(e);return k(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,c.value,o.value,f.value,r.value,l.value,d.value,e.class],style:[g.value,v.value,e.style]},{default:()=>[a.default?n(L,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[a.default()]}):e.image?n(ge,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(H,{key:"icon",icon:e.icon},null):e.text,de(!1,"v-avatar")]})),{}}}),tt=y({appendAvatar:String,appendIcon:R,prependAvatar:String,prependIcon:R,subtitle:[String,Number],title:[String,Number],...b(),...J()},"VCardItem"),at=S()({name:"VCardItem",props:tt(),setup(e,s){let{slots:a}=s;return k(()=>{var r;const t=!!(e.prependAvatar||e.prependIcon),c=!!(t||a.prepend),o=!!(e.appendAvatar||e.appendIcon),g=!!(o||a.append),d=!!(e.title!=null||a.title),f=!!(e.subtitle!=null||a.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?n(L,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):n(q,null,[e.prependAvatar&&n(te,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(H,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[d&&n(pe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),f&&n(Ke,{key:"subtitle"},{default:()=>{var l;return[((l=a.subtitle)==null?void 0:l.call(a))??e.subtitle]}}),(r=a.default)==null?void 0:r.call(a)]),g&&n("div",{key:"append",class:"v-card-item__append"},[a.append?n(L,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):n(q,null,[e.appendIcon&&n(H,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(te,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),nt=y({opacity:[Number,String],...b(),...z()},"VCardText"),st=S()({name:"VCardText",props:nt(),setup(e,s){let{slots:a}=s;return k(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a)),{}}}),lt=y({appendAvatar:String,appendIcon:R,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:R,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...se(),...b(),...J(),...X(),...Ne(),...we(),...je(),...Oe(),...G(),...Le(),...z(),...le(),...ie({variant:"elevated"})},"VCard"),ot=S()({name:"VCard",directives:{Ripple:De},props:lt(),setup(e,s){let{attrs:a,slots:t}=s;const{themeClasses:c}=re(e),{borderClasses:o}=ce(e),{colorClasses:g,colorStyles:d,variantClasses:f}=ue(e),{densityClasses:r}=oe(e),{dimensionStyles:l}=Y(e),{elevationClasses:v}=Ue(e),{loaderClasses:C}=Ee(e),{locationStyles:m}=Fe(e),{positionClasses:h}=Me(e),{roundedClasses:T}=Q(e),V=We(e,a),N=A(()=>e.link!==!1&&V.isLink.value),I=A(()=>!e.disabled&&e.link!==!1&&(e.link||V.isClickable.value));return k(()=>{const x=N.value?"a":e.tag,P=!!(t.title||e.title!=null),w=!!(t.subtitle||e.subtitle!=null),D=P||w,U=!!(t.append||e.appendAvatar||e.appendIcon),E=!!(t.prepend||e.prependAvatar||e.prependIcon),F=!!(t.image||e.image),M=D||E||U,j=!!(t.text||e.text!=null);return $(n(x,Z({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":I.value},c.value,o.value,g.value,r.value,v.value,C.value,h.value,T.value,f.value,e.class],style:[d.value,l.value,m.value,e.style],onClick:I.value&&V.navigate,tabindex:e.disabled?-1:void 0},V.linkProps),{default:()=>{var i;return[F&&n("div",{key:"image",class:"v-card__image"},[t.image?n(L,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n($e,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),M&&n(at,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),j&&n(st,{key:"text"},{default:()=>{var u;return[((u=t.text)==null?void 0:u.call(t))??e.text]}}),(i=t.default)==null?void 0:i.call(t),t.actions&&n(Qe,null,{default:t.actions}),de(I.value,"v-card")]}}),[[ne("ripple"),I.value&&e.ripple]])}),{}}});export{Ye as I,O as M,ct as V,ut as _,ge as a,ot as b,pe as c,st as d,te as e,Ke as f,Qe as g,at as h,He as i,Ge as m};
