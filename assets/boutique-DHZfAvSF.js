import{j as yt,u as bt,M as kt,k as _t,b as ge,l as $e,n as pt,o as Fe,e as je,g as Pe,h as De,i as We,p as St,q as me,r as ne,s as xt,t as Vt,a as we,v as Pt,V as Ce,_ as Ct,d as wt}from"./AppNav-CrA9v5JZ.js";import{i as ze,f as T,j as ie,k as It,l as Ke,n as Je,o as Qe,h as q,p as Re,m as Ze,q as Me,a as et,b as tt,r as Lt,s as Te,R as Bt,c as At,t as zt,v as Rt,d as Mt,e as Tt,w as Et,x as $t,y as Ft,V as oe,g as Q}from"./VRow-TQQCvd-q.js";import{C as at,p as H,m as J,b as le,c as ce,g as G,d as de,D as Ee,E as ve,r as O,e as p,s as W,G as ue,H as jt,i as t,h as U,I as he,J as lt,K as $,L as ke,M as Dt,F as N,N as E,j as Ie,O as Wt,P as Ht,Q as nt,R as Le,S as Gt,T as it,u as Be,U as Xt,W as He,X as Ot,Y as Nt,Z as Ae,t as j,_ as Ge,$ as Ut,a0 as se,a1 as Yt,x as F,o as K,l as ye,n as y,y as ae,a2 as qt,a3 as Kt,q as be,v as ot,z as Z,a4 as Jt,a5 as Qt,a6 as Zt,a7 as ea,a8 as ta,a9 as Xe,aa,B as la,ab as na}from"./index-D3VY7uAv.js";const ia=e=>{const{touchstartX:n,touchendX:a,touchstartY:l,touchendY:o}=e,u=.5,i=16;e.offsetX=a-n,e.offsetY=o-l,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&a<n-i&&e.left(e),e.right&&a>n+i&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&o<l-i&&e.up(e),e.down&&o>l+i&&e.down(e))};function oa(e,n){var l;const a=e.changedTouches[0];n.touchstartX=a.clientX,n.touchstartY=a.clientY,(l=n.start)==null||l.call(n,{originalEvent:e,...n})}function sa(e,n){var l;const a=e.changedTouches[0];n.touchendX=a.clientX,n.touchendY=a.clientY,(l=n.end)==null||l.call(n,{originalEvent:e,...n}),ia(n)}function ua(e,n){var l;const a=e.changedTouches[0];n.touchmoveX=a.clientX,n.touchmoveY=a.clientY,(l=n.move)==null||l.call(n,{originalEvent:e,...n})}function ra(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:a=>oa(a,n),touchend:a=>sa(a,n),touchmove:a=>ua(a,n)}}function ca(e,n){var c;const a=n.value,l=a!=null&&a.parent?e.parentElement:e,o=(a==null?void 0:a.options)??{passive:!0},u=(c=n.instance)==null?void 0:c.$.uid;if(!l||!u)return;const i=ra(n.value);l._touchHandlers=l._touchHandlers??Object.create(null),l._touchHandlers[u]=i,at(i).forEach(d=>{l.addEventListener(d,i[d],o)})}function da(e,n){var u,i;const a=(u=n.value)!=null&&u.parent?e.parentElement:e,l=(i=n.instance)==null?void 0:i.$.uid;if(!(a!=null&&a._touchHandlers)||!l)return;const o=a._touchHandlers[l];at(o).forEach(c=>{a.removeEventListener(c,o[c])}),delete a._touchHandlers[l]}const st={mounted:ca,unmounted:da},ut=Symbol.for("vuetify:v-window"),rt=Symbol.for("vuetify:v-window-group"),ct=H({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...J(),...le(),...ce()},"VWindow"),Oe=G()({name:"VWindow",directives:{Touch:st},props:ct(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:l}=de(e),{isRtl:o}=Ee(),{t:u}=ve(),i=ze(e,rt),c=O(),d=p(()=>o.value?!e.reverse:e.reverse),g=W(!1),h=p(()=>{const x=e.direction==="vertical"?"y":"x",B=(d.value?!g.value:g.value)?"-reverse":"";return`v-window-${x}${B}-transition`}),_=W(0),s=O(void 0),P=p(()=>i.items.value.findIndex(x=>i.selected.value.includes(x.id)));ue(P,(x,V)=>{const B=i.items.value.length,L=B-1;B<=2?g.value=x<V:x===L&&V===0?g.value=!0:x===0&&V===L?g.value=!1:g.value=x<V}),jt(ut,{transition:h,isReversed:g,transitionCount:_,transitionHeight:s,rootRef:c});const v=p(()=>e.continuous||P.value!==0),S=p(()=>e.continuous||P.value!==i.items.value.length-1);function r(){v.value&&i.prev()}function k(){S.value&&i.next()}const I=p(()=>{const x=[],V={icon:o.value?e.nextIcon:e.prevIcon,class:`v-window__${d.value?"right":"left"}`,onClick:i.prev,"aria-label":u("$vuetify.carousel.prev")};x.push(v.value?a.prev?a.prev({props:V}):t(T,V,null):t("div",null,null));const B={icon:o.value?e.prevIcon:e.nextIcon,class:`v-window__${d.value?"left":"right"}`,onClick:i.next,"aria-label":u("$vuetify.carousel.next")};return x.push(S.value?a.next?a.next({props:B}):t(T,B,null):t("div",null,null)),x}),z=p(()=>e.touch===!1?e.touch:{...{left:()=>{d.value?r():k()},right:()=>{d.value?k():r()},start:V=>{let{originalEvent:B}=V;B.stopPropagation()}},...e.touch===!0?{}:e.touch});return U(()=>he(t(e.tag,{ref:c,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},l.value,e.class],style:e.style},{default:()=>{var x,V;return[t("div",{class:"v-window__container",style:{height:s.value}},[(x=a.default)==null?void 0:x.call(a,{group:i}),e.showArrows!==!1&&t("div",{class:"v-window__controls"},[I.value])]),(V=a.additional)==null?void 0:V.call(a,{group:i})]}}),[[lt("touch"),z.value]])),{group:i}}}),va=H({color:String,cycle:Boolean,delimiterIcon:{type:$,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...ct({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),fa=G()({name:"VCarousel",props:va(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const l=ke(e,"modelValue"),{t:o}=ve(),u=O();let i=-1;ue(l,d),ue(()=>e.interval,d),ue(()=>e.cycle,g=>{g?d():window.clearTimeout(i)}),Dt(c);function c(){!e.cycle||!u.value||(i=window.setTimeout(u.value.group.next,+e.interval>0?+e.interval:6e3))}function d(){window.clearTimeout(i),window.requestAnimationFrame(c)}return U(()=>{const g=Oe.filterProps(e);return t(Oe,E({ref:u},g,{modelValue:l.value,"onUpdate:modelValue":h=>l.value=h,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:Ie(e.height)},e.style]}),{default:a.default,additional:h=>{let{group:_}=h;return t(N,null,[!e.hideDelimiters&&t("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[_.items.value.length>0&&t(ie,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[_.items.value.map((s,P)=>{const v={id:`carousel-item-${s.id}`,"aria-label":o("$vuetify.carousel.ariaLabel.delimiter",P+1,_.items.value.length),class:["v-carousel__controls__item",_.isSelected(s.id)&&"v-btn--active"],onClick:()=>_.select(s.id,!0)};return a.item?a.item({props:v,item:s}):t(T,E(s,v),null)})]})]),e.progress&&t(It,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(_.getItemIndex(l.value)+1)/_.items.value.length*100},null)])},prev:a.prev,next:a.next})}),{}}}),dt=H({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...J(),...Ke(),...yt()},"VWindowItem"),Ne=G()({name:"VWindowItem",directives:{Touch:st},props:dt(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:a}=n;const l=Wt(ut),o=Je(e,rt),{isBooted:u}=Ht();if(!l||!o)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const i=W(!1),c=p(()=>u.value&&(l.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function d(){!i.value||!l||(i.value=!1,l.transitionCount.value>0&&(l.transitionCount.value-=1,l.transitionCount.value===0&&(l.transitionHeight.value=void 0)))}function g(){var v;i.value||!l||(i.value=!0,l.transitionCount.value===0&&(l.transitionHeight.value=Ie((v=l.rootRef.value)==null?void 0:v.clientHeight)),l.transitionCount.value+=1)}function h(){d()}function _(v){i.value&&Le(()=>{!c.value||!i.value||!l||(l.transitionHeight.value=Ie(v.clientHeight))})}const s=p(()=>{const v=l.isReversed.value?e.reverseTransition:e.transition;return c.value?{name:typeof v!="string"?l.transition.value:v,onBeforeEnter:g,onAfterEnter:d,onEnterCancelled:h,onBeforeLeave:g,onAfterLeave:d,onLeaveCancelled:h,onEnter:_}:!1}),{hasContent:P}=bt(e,o.isSelected);return U(()=>t(kt,{transition:s.value,disabled:!u.value},{default:()=>{var v;return[he(t("div",{class:["v-window-item",o.selectedClass.value,e.class],style:e.style},[P.value&&((v=a.default)==null?void 0:v.call(a))]),[[nt,o.isSelected.value]])]}})),{groupItem:o}}}),ma=H({..._t(),...dt()},"VCarouselItem"),ga=G()({name:"VCarouselItem",inheritAttrs:!1,props:ma(),setup(e,n){let{slots:a,attrs:l}=n;U(()=>{const o=ge.filterProps(e),u=Ne.filterProps(e);return t(Ne,E({class:["v-carousel-item",e.class]},u),{default:()=>[t(ge,E(l,o),a)]})})}});function ha(e){let{selectedElement:n,containerElement:a,isRtl:l,isHorizontal:o}=e;const u=re(o,a),i=vt(o,l,a),c=re(o,n),d=ft(o,n),g=c*.4;return i>d?d-g:i+u<d+c?d-u+c+g:i}function ya(e){let{selectedElement:n,containerElement:a,isHorizontal:l}=e;const o=re(l,a),u=ft(l,n),i=re(l,n);return u-o/2+i/2}function Ue(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function ba(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function vt(e,n,a){if(!a)return 0;const{scrollLeft:l,offsetWidth:o,scrollWidth:u}=a;return e?n?u-o+l:l:a.scrollTop}function re(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function ft(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const ka=Symbol.for("vuetify:v-slide-group"),mt=H({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ka},nextIcon:{type:$,default:"$next"},prevIcon:{type:$,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...J(),...Gt({mobile:null}),...le(),...Qe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Ye=G()({name:"VSlideGroup",props:mt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:l}=Ee(),{displayClasses:o,mobile:u}=it(e),i=ze(e,e.symbol),c=W(!1),d=W(0),g=W(0),h=W(0),_=p(()=>e.direction==="horizontal"),{resizeRef:s,contentRect:P}=Be(),{resizeRef:v,contentRect:S}=Be(),r=Xt(),k=p(()=>({container:s.el,duration:200,easing:"easeOutQuart"})),I=p(()=>i.selected.value.length?i.items.value.findIndex(m=>m.id===i.selected.value[0]):-1),z=p(()=>i.selected.value.length?i.items.value.findIndex(m=>m.id===i.selected.value[i.selected.value.length-1]):-1);if(He){let m=-1;ue(()=>[i.selected.value,P.value,S.value,_.value],()=>{cancelAnimationFrame(m),m=requestAnimationFrame(()=>{if(P.value&&S.value){const b=_.value?"width":"height";g.value=P.value[b],h.value=S.value[b],c.value=g.value+1<h.value}if(I.value>=0&&v.el){const b=v.el.children[z.value];V(b,e.centerActive)}})})}const x=W(!1);function V(m,b){let A=0;b?A=ya({containerElement:s.el,isHorizontal:_.value,selectedElement:m}):A=ha({containerElement:s.el,isHorizontal:_.value,isRtl:l.value,selectedElement:m}),B(A)}function B(m){if(!He||!s.el)return;const b=re(_.value,s.el),A=vt(_.value,l.value,s.el);if(!(Ue(_.value,s.el)<=b||Math.abs(m-A)<16)){if(_.value&&l.value&&s.el){const{scrollWidth:fe,offsetWidth:Ve}=s.el;m=fe-Ve-m}_.value?r.horizontal(m,k.value):r(m,k.value)}}function L(m){const{scrollTop:b,scrollLeft:A}=m.target;d.value=_.value?A:b}function f(m){if(x.value=!0,!(!c.value||!v.el)){for(const b of m.composedPath())for(const A of v.el.children)if(A===b){V(A);return}}}function C(m){x.value=!1}let w=!1;function R(m){var b;!w&&!x.value&&!(m.relatedTarget&&((b=v.el)!=null&&b.contains(m.relatedTarget)))&&Y(),w=!1}function M(){w=!0}function X(m){if(!v.el)return;function b(A){m.preventDefault(),Y(A)}_.value?m.key==="ArrowRight"?b(l.value?"prev":"next"):m.key==="ArrowLeft"&&b(l.value?"next":"prev"):m.key==="ArrowDown"?b("next"):m.key==="ArrowUp"&&b("prev"),m.key==="Home"?b("first"):m.key==="End"&&b("last")}function Y(m){var A,te;if(!v.el)return;let b;if(!m)b=Ot(v.el)[0];else if(m==="next"){if(b=(A=v.el.querySelector(":focus"))==null?void 0:A.nextElementSibling,!b)return Y("first")}else if(m==="prev"){if(b=(te=v.el.querySelector(":focus"))==null?void 0:te.previousElementSibling,!b)return Y("last")}else m==="first"?b=v.el.firstElementChild:m==="last"&&(b=v.el.lastElementChild);b&&b.focus({preventScroll:!0})}function ee(m){const b=_.value&&l.value?-1:1,A=(m==="prev"?-b:b)*g.value;let te=d.value+A;if(_.value&&l.value&&s.el){const{scrollWidth:fe,offsetWidth:Ve}=s.el;te+=fe-Ve}B(te)}const _e=p(()=>({next:i.next,prev:i.prev,select:i.select,isSelected:i.isSelected})),pe=p(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!u.value;case!0:return c.value||Math.abs(d.value)>0;case"mobile":return u.value||c.value||Math.abs(d.value)>0;default:return!u.value&&(c.value||Math.abs(d.value)>0)}}),Se=p(()=>Math.abs(d.value)>1),xe=p(()=>{if(!s.value)return!1;const m=Ue(_.value,s.el),b=ba(_.value,s.el);return m-b-Math.abs(d.value)>1});return U(()=>t(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!_.value,"v-slide-group--has-affixes":pe.value,"v-slide-group--is-overflowing":c.value},o.value,e.class],style:e.style,tabindex:x.value||i.selected.value.length?-1:0,onFocus:R},{default:()=>{var m,b,A;return[pe.value&&t("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Se.value}],onMousedown:M,onClick:()=>Se.value&&ee("prev")},[((m=a.prev)==null?void 0:m.call(a,_e.value))??t($e,null,{default:()=>[t(q,{icon:l.value?e.nextIcon:e.prevIcon},null)]})]),t("div",{key:"container",ref:s,class:"v-slide-group__container",onScroll:L},[t("div",{ref:v,class:"v-slide-group__content",onFocusin:f,onFocusout:C,onKeydown:X},[(b=a.default)==null?void 0:b.call(a,_e.value)])]),pe.value&&t("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!xe.value}],onMousedown:M,onClick:()=>xe.value&&ee("next")},[((A=a.next)==null?void 0:A.call(a,_e.value))??t($e,null,{default:()=>[t(q,{icon:l.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:i.selected,scrollTo:ee,scrollOffset:d,focus:Y,hasPrev:Se,hasNext:xe}}}),gt=Symbol.for("vuetify:v-chip-group"),_a=H({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Nt},...mt(),...J(),...Qe({selectedClass:"v-chip--selected"}),...le(),...ce(),...Re({variant:"tonal"})},"VChipGroup"),ht=G()({name:"VChipGroup",props:_a(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:l}=de(e),{isSelected:o,select:u,next:i,prev:c,selected:d}=ze(e,gt);return Ae({VChip:{color:j(e,"color"),disabled:j(e,"disabled"),filter:j(e,"filter"),variant:j(e,"variant")}}),U(()=>{const g=Ye.filterProps(e);return t(Ye,E(g,{class:["v-chip-group",{"v-chip-group--column":e.column},l.value,e.class],style:e.style}),{default:()=>{var h;return[(h=a.default)==null?void 0:h.call(a,{isSelected:o,select:u,next:i,prev:c,selected:d.value})]}})}),{}}}),pa=H({activeClass:String,appendAvatar:String,appendIcon:$,closable:Boolean,closeIcon:{type:$,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:$,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Ge(),onClickOnce:Ge(),...Ze(),...J(),...Me(),...et(),...Ke(),...tt(),...Lt(),...Te(),...le({tag:"span"}),...ce(),...Re({variant:"tonal"})},"VChip"),D=G()({name:"VChip",directives:{Ripple:Bt},props:pa(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:l,slots:o}=n;const{t:u}=ve(),{borderClasses:i}=At(e),{colorClasses:c,colorStyles:d,variantClasses:g}=zt(e),{densityClasses:h}=Rt(e),{elevationClasses:_}=Mt(e),{roundedClasses:s}=Tt(e),{sizeClasses:P}=Et(e),{themeClasses:v}=de(e),S=ke(e,"modelValue"),r=Je(e,gt,!1),k=$t(e,a),I=p(()=>e.link!==!1&&k.isLink.value),z=p(()=>!e.disabled&&e.link!==!1&&(!!r||e.link||k.isClickable.value)),x=p(()=>({"aria-label":u(e.closeLabel),onClick(L){L.preventDefault(),L.stopPropagation(),S.value=!1,l("click:close",L)}}));function V(L){var f;l("click",L),z.value&&((f=k.navigate)==null||f.call(k,L),r==null||r.toggle())}function B(L){(L.key==="Enter"||L.key===" ")&&(L.preventDefault(),V(L))}return()=>{const L=k.isLink.value?"a":e.tag,f=!!(e.appendIcon||e.appendAvatar),C=!!(f||o.append),w=!!(o.close||e.closable),R=!!(o.filter||e.filter)&&r,M=!!(e.prependIcon||e.prependAvatar),X=!!(M||o.prepend),Y=!r||r.isSelected.value;return S.value&&he(t(L,E({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":z.value,"v-chip--filter":R,"v-chip--pill":e.pill},v.value,i.value,Y?c.value:void 0,h.value,_.value,s.value,P.value,g.value,r==null?void 0:r.selectedClass.value,e.class],style:[Y?d.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:z.value?0:void 0,onClick:V,onKeydown:z.value&&!I.value&&B},k.linkProps),{default:()=>{var ee;return[Ft(z.value,"v-chip"),R&&t(pt,{key:"filter"},{default:()=>[he(t("div",{class:"v-chip__filter"},[o.filter?t(ie,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):t(q,{key:"filter-icon",icon:e.filterIcon},null)]),[[nt,r.isSelected.value]])]}),X&&t("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?t(ie,{key:"prepend-defaults",disabled:!M,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):t(N,null,[e.prependIcon&&t(q,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t(Fe,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t("div",{class:"v-chip__content","data-no-activator":""},[((ee=o.default)==null?void 0:ee.call(o,{isSelected:r==null?void 0:r.isSelected.value,selectedClass:r==null?void 0:r.selectedClass.value,select:r==null?void 0:r.select,toggle:r==null?void 0:r.toggle,value:r==null?void 0:r.value.value,disabled:e.disabled}))??e.text]),C&&t("div",{key:"append",class:"v-chip__append"},[o.append?t(ie,{key:"append-defaults",disabled:!f,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):t(N,null,[e.appendIcon&&t(q,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t(Fe,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),w&&t("button",E({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},x.value),[o.close?t(ie,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):t(q,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[lt("ripple"),z.value&&e.ripple,null]])}}}),Sa=H({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:$,default:"$ratingEmpty"},fullIcon:{type:$,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...J(),...Me(),...Te(),...le(),...ce()},"VRating"),xa=G()({name:"VRating",props:Sa(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{t:l}=ve(),{themeClasses:o}=de(e),u=ke(e,"modelValue"),i=p(()=>Ut(parseFloat(u.value),0,+e.length)),c=p(()=>se(Number(e.length),1)),d=p(()=>c.value.flatMap(S=>e.halfIncrements?[S-.5,S]:[S])),g=W(-1),h=p(()=>d.value.map(S=>{const r=e.hover&&g.value>-1,k=i.value>=S,I=g.value>=S,x=(r?I:k)?e.fullIcon:e.emptyIcon,V=e.activeColor??e.color,B=k||I?V:e.color;return{isFilled:k,isHovered:I,icon:x,color:B}})),_=p(()=>[0,...d.value].map(S=>{function r(){g.value=S}function k(){g.value=-1}function I(){e.disabled||e.readonly||(u.value=i.value===S&&e.clearable?0:S)}return{onMouseenter:e.hover?r:void 0,onMouseleave:e.hover?k:void 0,onClick:I}})),s=p(()=>e.name??`v-rating-${Yt()}`);function P(S){var f,C;let{value:r,index:k,showStar:I=!0}=S;const{onMouseenter:z,onMouseleave:x,onClick:V}=_.value[k+1],B=`${s.value}-${String(r).replace(".","-")}`,L={color:(f=h.value[k])==null?void 0:f.color,density:e.density,disabled:e.disabled,icon:(C=h.value[k])==null?void 0:C.icon,ripple:e.ripple,size:e.size,variant:"plain"};return t(N,null,[t("label",{for:B,class:{"v-rating__item--half":e.halfIncrements&&r%1>0,"v-rating__item--full":e.halfIncrements&&r%1===0},onMouseenter:z,onMouseleave:x,onClick:V},[t("span",{class:"v-rating__hidden"},[l(e.itemAriaLabel,r,e.length)]),I?a.item?a.item({...h.value[k],props:L,value:r,index:k,rating:i.value}):t(T,E({"aria-label":l(e.itemAriaLabel,r,e.length)},L),null):void 0]),t("input",{class:"v-rating__hidden",name:s.value,id:B,type:"radio",value:r,checked:i.value===r,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function v(S){return a["item-label"]?a["item-label"](S):S.label?t("span",null,[S.label]):t("span",null,[F(" ")])}return U(()=>{var r;const S=!!((r=e.itemLabels)!=null&&r.length)||a["item-label"];return t(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},o.value,e.class],style:e.style},{default:()=>[t(P,{value:0,index:-1,showStar:!1},null),c.value.map((k,I)=>{var z,x;return t("div",{class:"v-rating__wrapper"},[S&&e.itemLabelPosition==="top"?v({value:k,index:I,label:(z=e.itemLabels)==null?void 0:z[I]}):void 0,t("div",{class:"v-rating__item"},[e.halfIncrements?t(N,null,[t(P,{value:k-.5,index:I*2},null),t(P,{value:k,index:I*2+1},null)]):t(P,{value:k,index:I},null)]),S&&e.itemLabelPosition==="bottom"?v({value:k,index:I,label:(x=e.itemLabels)==null?void 0:x[I]}):void 0])})]})}),{}}}),Va={class:"me-1"},Pa={class:"my-4 text-subtitle-1"},Ca={class:"px-4 mb-2"},wa={__name:"ProductItemCard",props:["productItem"],setup(e){const n=e,a=O(!1);function l(){n.productItem.inStock&&(a.value=!0)}function o(){a.value=!1}return(u,i)=>(K(),ye(we,null,{default:y(()=>[t(je,{color:"surface-variant","min-width":"240","max-width":"340",hover:"",ripple:"",onClick:l},{default:y(()=>[t(ge,{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",cover:""}),t(Pe,null,{default:y(()=>[F(ae(e.productItem.name),1)]),_:1}),t(De,null,{default:y(()=>[F(" €"+ae(e.productItem.price),1)]),_:1}),t(We,null,{default:y(()=>[t(T,{text:e.productItem.inStock?"Add To Cart":"Out of Stock",variant:"outlined",disabled:!e.productItem.inStock},null,8,["text","disabled"])]),_:1})]),_:1}),t(St,{width:"auto",modelValue:qt(a),"onUpdate:modelValue":i[1]||(i[1]=c=>Kt(a)?a.value=c:null)},{default:y(()=>[t(je,{class:"mx-auto"},{default:y(()=>[t(me,{height:"88",class:"pa-4"},{title:y(()=>i[2]||(i[2]=[F("Product Details")])),append:y(()=>[t(T,{class:"text-none",color:"primary",text:"Close",variant:"text",onClick:o,slim:""})]),_:1}),t(ne),t(fa,{color:"orange"},{default:y(()=>[(K(!0),be(N,null,ot(e.productItem.images,(c,d)=>(K(),ye(ga,{key:d,src:c.url,alt:c.alt,cover:""},null,8,["src","alt"]))),128))]),_:1}),t(ne),t(xt,null,{default:y(()=>[t(Pe,null,{default:y(()=>[F(ae(e.productItem.name),1)]),_:1}),t(De,null,{default:y(()=>[Z("span",Va,ae(e.productItem.category),1),t(q,{color:"error",icon:"mdi-fire-circle",size:"small"})]),_:1})]),_:1}),t(Vt,null,{default:y(()=>[t(oe,{align:"center",class:"mx-0"},{default:y(()=>[t(xa,{"model-value":4.5,color:"amber",density:"compact",size:"small","half-increments":"",readonly:""}),i[3]||(i[3]=Z("div",{class:"text-grey ms-4"}," 4.5 (413) ",-1))]),_:1}),Z("div",Pa," € • "+ae(e.productItem.price),1),Z("div",null,ae(e.productItem.description),1)]),_:1}),t(ne,{class:"mx-4 mb-1"}),t(Pe,null,{default:y(()=>i[4]||(i[4]=[F("Sizes")])),_:1}),Z("div",Ca,[t(ht,{modelValue:u.selection,"onUpdate:modelValue":i[0]||(i[0]=c=>u.selection=c),"selected-class":"bg-deep-purple-lighten-2"},{default:y(()=>[t(D,null,{default:y(()=>i[5]||(i[5]=[F("XS")])),_:1}),t(D,null,{default:y(()=>i[6]||(i[6]=[F("S")])),_:1}),t(D,null,{default:y(()=>i[7]||(i[7]=[F("M")])),_:1}),t(D,null,{default:y(()=>i[8]||(i[8]=[F("L")])),_:1}),t(D,null,{default:y(()=>i[9]||(i[9]=[F("XL")])),_:1})]),_:1},8,["modelValue"])]),t(ne),t(We,null,{default:y(()=>[t(T,{color:"blue",text:"Add To Cart"}),t(T,{color:"orange",text:"Buy Now"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},Ia="/deploy-vuetify/assets/boutique-banner-b-CXHvq9Qi.png",La=H({...J(),...Jt(),...Qt()},"VLayout"),Ba=G()({name:"VLayout",props:La(),setup(e,n){let{slots:a}=n;const{layoutClasses:l,layoutStyles:o,getLayoutItem:u,items:i,layoutRef:c}=Zt(e),{dimensionStyles:d}=ea(e);return U(()=>{var g;return t("div",{ref:c,class:[l.value,e.class],style:[d.value,o.value,e.style]},[(g=a.default)==null?void 0:g.call(a)])}),{getLayoutItem:u,items:i}}});function Aa(){const e=O([]);ta(()=>e.value=[]);function n(a,l){e.value[l]=a}return{refs:e,updateRef:n}}const za=H({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:$,default:"$first"},prevIcon:{type:$,default:"$prev"},nextIcon:{type:$,default:"$next"},lastIcon:{type:$,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Ze(),...J(),...Me(),...et(),...tt(),...Te(),...le({tag:"nav"}),...ce(),...Re({variant:"text"})},"VPagination"),qe=G()({name:"VPagination",props:za(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,n){let{slots:a,emit:l}=n;const o=ke(e,"modelValue"),{t:u,n:i}=ve(),{isRtl:c}=Ee(),{themeClasses:d}=de(e),{width:g}=it(),h=W(-1);Ae(void 0,{scoped:!0});const{resizeRef:_}=Be(f=>{if(!f.length)return;const{target:C,contentRect:w}=f[0],R=C.querySelector(".v-pagination__list > *");if(!R)return;const M=w.width,X=R.offsetWidth+parseFloat(getComputedStyle(R).marginRight)*2;h.value=S(M,X)}),s=p(()=>parseInt(e.length,10)),P=p(()=>parseInt(e.start,10)),v=p(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):h.value>=0?h.value:S(g.value,58));function S(f,C){const w=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((f-C*w)/C).toFixed(2)))}const r=p(()=>{if(s.value<=0||isNaN(s.value)||s.value>Number.MAX_SAFE_INTEGER)return[];if(v.value<=0)return[];if(v.value===1)return[o.value];if(s.value<=v.value)return se(s.value,P.value);const f=v.value%2===0,C=f?v.value/2:Math.floor(v.value/2),w=f?C:C+1,R=s.value-C;if(w-o.value>=0)return[...se(Math.max(1,v.value-1),P.value),e.ellipsis,s.value];if(o.value-R>=(f?1:0)){const M=v.value-1,X=s.value-M+P.value;return[P.value,e.ellipsis,...se(M,X)]}else{const M=Math.max(1,v.value-3),X=M===1?o.value:o.value-Math.ceil(M/2)+P.value;return[P.value,e.ellipsis,...se(M,X),e.ellipsis,s.value]}});function k(f,C,w){f.preventDefault(),o.value=C,w&&l(w,C)}const{refs:I,updateRef:z}=Aa();Ae({VPaginationBtn:{color:j(e,"color"),border:j(e,"border"),density:j(e,"density"),size:j(e,"size"),variant:j(e,"variant"),rounded:j(e,"rounded"),elevation:j(e,"elevation")}});const x=p(()=>r.value.map((f,C)=>{const w=R=>z(R,C);if(typeof f=="string")return{isActive:!1,key:`ellipsis-${C}`,page:f,props:{ref:w,ellipsis:!0,icon:!0,disabled:!0}};{const R=f===o.value;return{isActive:R,key:f,page:i(f),props:{ref:w,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:R?e.activeColor:e.color,"aria-current":R,"aria-label":u(R?e.currentPageAriaLabel:e.pageAriaLabel,f),onClick:M=>k(M,f)}}}})),V=p(()=>{const f=!!e.disabled||o.value<=P.value,C=!!e.disabled||o.value>=P.value+s.value-1;return{first:e.showFirstLastPage?{icon:c.value?e.lastIcon:e.firstIcon,onClick:w=>k(w,P.value,"first"),disabled:f,"aria-label":u(e.firstAriaLabel),"aria-disabled":f}:void 0,prev:{icon:c.value?e.nextIcon:e.prevIcon,onClick:w=>k(w,o.value-1,"prev"),disabled:f,"aria-label":u(e.previousAriaLabel),"aria-disabled":f},next:{icon:c.value?e.prevIcon:e.nextIcon,onClick:w=>k(w,o.value+1,"next"),disabled:C,"aria-label":u(e.nextAriaLabel),"aria-disabled":C},last:e.showFirstLastPage?{icon:c.value?e.firstIcon:e.lastIcon,onClick:w=>k(w,P.value+s.value-1,"last"),disabled:C,"aria-label":u(e.lastAriaLabel),"aria-disabled":C}:void 0}});function B(){var C;const f=o.value-P.value;(C=I.value[f])==null||C.$el.focus()}function L(f){f.key===Xe.left&&!e.disabled&&o.value>+e.start?(o.value=o.value-1,Le(B)):f.key===Xe.right&&!e.disabled&&o.value<P.value+s.value-1&&(o.value=o.value+1,Le(B))}return U(()=>t(e.tag,{ref:_,class:["v-pagination",d.value,e.class],style:e.style,role:"navigation","aria-label":u(e.ariaLabel),onKeydown:L,"data-test":"v-pagination-root"},{default:()=>[t("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&t("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(V.value.first):t(T,E({_as:"VPaginationBtn"},V.value.first),null)]),t("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(V.value.prev):t(T,E({_as:"VPaginationBtn"},V.value.prev),null)]),x.value.map((f,C)=>t("li",{key:f.key,class:["v-pagination__item",{"v-pagination__item--is-active":f.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(f):t(T,E({_as:"VPaginationBtn"},f.props),{default:()=>[f.page]})])),t("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(V.value.next):t(T,E({_as:"VPaginationBtn"},V.value.next),null)]),e.showFirstLastPage&&t("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(V.value.last):t(T,E({_as:"VPaginationBtn"},V.value.last),null)])])]})),{}}}),Ra={class:"d-flex flex-row ma-2 align-center"},Ma={__name:"ProductGridSection",setup(e){const n=O(!1),a=O(""),l=O([]),o=aa({itemsPerPage:10,page:1}),u=p(()=>l.value.length),i=p(()=>{const g=(o.page-1)*o.itemsPerPage,h=g+o.itemsPerPage;return l.value.slice(g,h)}),c=p(()=>{a.value!=""&&a.value!=null?(l.value=d.value.filter(g=>g.name.toLowerCase().includes(a.value.toLowerCase())),console.log(l.value.length)):l.value=d.value}),d=O([{id:"P001",name:"Classic White T-Shirt",category:"Tops",price:19.99,size:["S","M","L","XL"],color:["White"],inStock:!0,images:[{url:"https://example.com/images/white_tshirt_front.jpg",alt:"Classic white t-shirt front view"},{url:"https://example.com/images/white_tshirt_back.jpg",alt:"Classic white t-shirt back view"}],description:"A classic white cotton t-shirt for everyday wear."},{id:"P002",name:"Blue Denim Jeans",category:"Bottoms",price:49.99,size:["28","30","32","34","36"],color:["Blue"],inStock:!0,images:[{url:"https://example.com/images/blue_denim_jeans_front.jpg",alt:"Blue denim jeans front view"},{url:"https://example.com/images/blue_denim_jeans_back.jpg",alt:"Blue denim jeans back view"}],description:"Comfortable blue denim jeans with a slim fit design."},{id:"P003",name:"Red Cotton Hoodie",category:"Outerwear",price:34.99,size:["S","M","L","XL"],color:["Red","Black"],inStock:!1,images:[{url:"https://example.com/images/red_cotton_hoodie_front.jpg",alt:"Red cotton hoodie front view"},{url:"https://example.com/images/red_cotton_hoodie_back.jpg",alt:"Red cotton hoodie back view"}],description:"A cozy red hoodie made from soft cotton."},{id:"P004",name:"Leather Jacket",category:"Outerwear",price:120,size:["M","L","XL"],color:["Black"],inStock:!0,images:[{url:"https://example.com/images/leather_jacket_front.jpg",alt:"Black leather jacket front view"},{url:"https://example.com/images/leather_jacket_back.jpg",alt:"Black leather jacket back view"}],description:"A stylish black leather jacket for a modern look."},{id:"P005",name:"Floral Summer Dress",category:"Dresses",price:29.99,size:["S","M","L"],color:["Floral"],inStock:!0,images:[{url:"https://example.com/images/floral_summer_dress_front.jpg",alt:"Floral summer dress front view"},{url:"https://example.com/images/floral_summer_dress_back.jpg",alt:"Floral summer dress back view"}],description:"A lightweight summer dress with a floral print."},{id:"P006",name:"Black Running Shoes",category:"Shoes",price:79.99,size:["8","9","10","11","12"],color:["Black"],inStock:!0,images:[{url:"https://example.com/images/black_running_shoes.jpg",alt:"Black running shoes"}],description:"Durable black running shoes with excellent grip."},{id:"P007",name:"Blue Cotton Polo Shirt",category:"Tops",price:25,size:["M","L","XL"],color:["Blue"],inStock:!0,images:[{url:"https://example.com/images/blue_polo_front.jpg",alt:"Blue cotton polo shirt front view"}],description:"A casual blue polo shirt, perfect for everyday wear."},{id:"P008",name:"Green Chinos",category:"Bottoms",price:44.99,size:["30","32","34","36"],color:["Green"],inStock:!1,images:[{url:"https://example.com/images/green_chinos_front.jpg",alt:"Green chinos front view"},{url:"https://example.com/images/green_chinos_back.jpg",alt:"Green chinos back view"}],description:"Comfortable slim-fit chinos in olive green."},{id:"P009",name:"Black Leather Belt",category:"Accessories",price:29.99,size:["S","M","L","XL"],color:["Black"],inStock:!0,images:[{url:"https://example.com/images/black_leather_belt.jpg",alt:"Black leather belt"}],description:"A durable black leather belt with a classic buckle."},{id:"P010",name:"Woolen Scarf",category:"Accessories",price:19.99,size:["One Size"],color:["Gray","Red"],inStock:!0,images:[{url:"https://example.com/images/woolen_scarf.jpg",alt:"Gray woolen scarf"}],description:"A warm and soft woolen scarf for cold weather."},{id:"P011",name:"White Sneakers",category:"Shoes",price:65,size:["7","8","9","10"],color:["White"],inStock:!0,images:[{url:"https://example.com/images/white_sneakers.jpg",alt:"White sneakers"}],description:"Classic white sneakers with a minimalist design."},{id:"P012",name:"Striped Linen Shirt",category:"Tops",price:39.99,size:["S","M","L","XL"],color:["Blue and White"],inStock:!0,images:[{url:"https://example.com/images/striped_linen_shirt.jpg",alt:"Striped blue and white linen shirt"}],description:"A lightweight, breathable striped linen shirt."},{id:"P013",name:"Red Midi Skirt",category:"Skirts",price:45.99,size:["S","M","L"],color:["Red"],inStock:!1,images:[{url:"https://example.com/images/red_midi_skirt.jpg",alt:"Red midi skirt"}],description:"A stylish red midi skirt perfect for casual outings."},{id:"P014",name:"Navy Blazer",category:"Outerwear",price:89.99,size:["M","L","XL"],color:["Navy"],inStock:!0,images:[{url:"https://example.com/images/navy_blazer.jpg",alt:"Navy blazer front view"}],description:"A tailored navy blazer for formal occasions."},{id:"P015",name:"Leather Ankle Boots",category:"Shoes",price:99.99,size:["8","9","10","11"],color:["Brown"],inStock:!0,images:[{url:"https://example.com/images/leather_ankle_boots.jpg",alt:"Brown leather ankle boots"}],description:"Stylish leather ankle boots for casual wear."}]);return(g,h)=>{const _=wa;return K(),be(N,null,[Z("div",null,[t(ge,{src:Ia,height:"100",cover:""})]),t(Ba,null,{default:y(()=>[t(Pt,{floating:"",modelValue:n.value,"onUpdate:modelValue":h[0]||(h[0]=s=>n.value=s),"mobile-breakpoint":"md"},{default:y(()=>[t(me,{link:"",title:"List Item 1"}),t(me,{link:"",title:"List Item 2"}),t(me,{link:"",title:"List Item 3"})]),_:1},8,["modelValue"]),t(la,null,{default:y(()=>[t(we,null,{default:y(()=>[t(oe,null,{default:y(()=>[t(Q,{cols:"12",md:"6"},{default:y(()=>[Z("div",Ra,[t(T,{class:"mr-2 hidden-md-and-up",onClick:h[1]||(h[1]=na(s=>n.value=!n.value,["stop"]))},{default:y(()=>[t(q,{icon:"mdi-filter-menu"})]),_:1}),t(Ce,{density:"compact",label:"Search","prepend-inner-icon":"mdi-magnify",variant:"solo-filled",flat:"","hide-details":"","single-line":"",modelValue:a.value,"onUpdate:modelValue":[h[2]||(h[2]=s=>a.value=s),c.value]},null,8,["modelValue","onUpdate:modelValue"])])]),_:1}),t(Q,{cols:"12",md:"6"},{default:y(()=>[t(ht,{class:"ma-2",column:"",multiple:""},{default:y(()=>[t(D,{text:"New",variant:"outlined",filter:""}),t(D,{text:"Hosen",variant:"outlined",filter:""}),t(D,{text:"Hemden",variant:"outlined",filter:""}),t(D,{text:"Blusen",variant:"outlined",filter:""}),t(D,{text:"Socken",variant:"outlined",filter:""}),t(D,{text:"Zübehor",variant:"outlined",filter:""})]),_:1})]),_:1})]),_:1}),t(ne)]),_:1}),t(we,null,{default:y(()=>[t(oe,null,{default:y(()=>[t(Q,{cols:"12",sm:"3"},{default:y(()=>[t(Ce,{"model-value":o.itemsPerPage,class:"pa-2",label:"Items per page",max:"15",min:"1",type:"number","hide-details":"","onUpdate:modelValue":h[3]||(h[3]=s=>o.itemsPerPage=parseInt(s,10))},null,8,["model-value"])]),_:1}),t(Q,{cols:"12",sm:"9"},{default:y(()=>[t(qe,{cols:"7",modelValue:o.page,"onUpdate:modelValue":h[4]||(h[4]=s=>o.page=s),length:Math.ceil(u.value/o.itemsPerPage)},null,8,["modelValue","length"])]),_:1})]),_:1}),t(oe,null,{default:y(()=>[(K(!0),be(N,null,ot(i.value,s=>(K(),ye(Q,null,{default:y(()=>[t(_,{productItem:s},null,8,["productItem"])]),_:2},1024))),256))]),_:1}),t(oe,null,{default:y(()=>[t(Q,{cols:"12",sm:"3"},{default:y(()=>[t(Ce,{"model-value":o.itemsPerPage,class:"pa-2",label:"Items per page",max:"15",min:"1",type:"number","hide-details":"","onUpdate:modelValue":h[5]||(h[5]=s=>o.itemsPerPage=parseInt(s,10))},null,8,["model-value"])]),_:1}),t(Q,{cols:"12",sm:"9"},{default:y(()=>[t(qe,{cols:"7",modelValue:o.page,"onUpdate:modelValue":h[6]||(h[6]=s=>o.page=s),length:Math.ceil(u.value/o.itemsPerPage)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}},Ta={};function Ea(e,n){const a=wt,l=Ma;return K(),be(N,null,[t(a),t(l)],64)}const $a=Ct(Ta,[["render",Ea]]),Wa={__name:"boutique",setup(e){return(n,a)=>{const l=$a;return K(),ye(l)}}};export{Wa as default};
