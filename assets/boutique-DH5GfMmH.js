import{p as Q,I as M,m as Z,D as Je,b as ie,g as Y,E as Me,G as je,s as H,e as x,u as fe,H as Qe,J as be,K as Ze,h as ne,i as t,L as Ye,M as et,c as pe,d as he,N as me,t as A,O as T,P as ke,Q as Fe,R as Te,S as _e,T as tt,U as at,F as K,W as lt,X as it,Y as nt,Z as st,r as X,_ as ot,$ as te,a0 as Se,a1 as xe,a2 as rt,o as q,v as ge,q as Pe,n as k,C as ut,a3 as ct,x as dt,l as De,z as Ve,A as we}from"./index-BZtvXCqv.js";import{b as Ce,d as vt,e as Le,a as Ie,f as ft,g as de,V as Ae,h as mt,_ as gt}from"./AppNav-CvgZ3v67.js";import{V as ae,a as E}from"./VRow-CnjpWfb2.js";import{g as Ee,h as Ge,i as $,j as ye,m as $e,k as We,a as Ne,l as pt,b as Oe,n as ht,o as He,R as yt,c as bt,p as kt,q as _t,d as St,e as xt,r as Pt,s as Vt,t as wt,v as Ct,w as le,f as G,_ as Lt}from"./VSpacer-DE17QM8F.js";import{V as ve}from"./VTextField-BOt26gO1.js";import{V as It,a as At,b as zt,c as Bt}from"./VCard-BPHeZu--.js";function Rt(e){let{selectedElement:n,containerElement:l,isRtl:r,isHorizontal:a}=e;const g=J(a,l),d=Ue(a,r,l),b=J(a,n),y=Xe(a,n),_=b*.4;return d>y?y-_:d+g<y+b?y-g+b+_:d}function Mt(e){let{selectedElement:n,containerElement:l,isHorizontal:r}=e;const a=J(r,l),g=Xe(r,n),d=J(r,n);return g-a/2+d/2}function ze(e,n){const l=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[l])||0}function jt(e,n){const l=e?"clientWidth":"clientHeight";return(n==null?void 0:n[l])||0}function Ue(e,n,l){if(!l)return 0;const{scrollLeft:r,offsetWidth:a,scrollWidth:g}=l;return e?n?g-a+r:r:l.scrollTop}function J(e,n){const l=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[l])||0}function Xe(e,n){const l=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[l])||0}const Ft=Symbol.for("vuetify:v-slide-group"),qe=Q({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ft},nextIcon:{type:M,default:"$next"},prevIcon:{type:M,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...Z(),...Je({mobile:null}),...ie(),...Ee({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Be=Y()({name:"VSlideGroup",props:qe(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const{isRtl:r}=Me(),{displayClasses:a,mobile:g}=je(e),d=Ge(e,e.symbol),b=H(!1),y=H(0),_=H(0),f=H(0),u=x(()=>e.direction==="horizontal"),{resizeRef:v,contentRect:P}=fe(),{resizeRef:p,contentRect:B}=fe(),c=Qe(),C=x(()=>({container:v.el,duration:200,easing:"easeOutQuart"})),U=x(()=>d.selected.value.length?d.items.value.findIndex(i=>i.id===d.selected.value[0]):-1),z=x(()=>d.selected.value.length?d.items.value.findIndex(i=>i.id===d.selected.value[d.selected.value.length-1]):-1);if(be){let i=-1;Ze(()=>[d.selected.value,P.value,B.value,u.value],()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(P.value&&B.value){const o=u.value?"width":"height";_.value=P.value[o],f.value=B.value[o],b.value=_.value+1<f.value}if(U.value>=0&&p.el){const o=p.el.children[z.value];I(o,e.centerActive)}})})}const j=H(!1);function I(i,o){let S=0;o?S=Mt({containerElement:v.el,isHorizontal:u.value,selectedElement:i}):S=Rt({containerElement:v.el,isHorizontal:u.value,isRtl:r.value,selectedElement:i}),D(S)}function D(i){if(!be||!v.el)return;const o=J(u.value,v.el),S=Ue(u.value,r.value,v.el);if(!(ze(u.value,v.el)<=o||Math.abs(i-S)<16)){if(u.value&&r.value&&v.el){const{scrollWidth:ee,offsetWidth:ce}=v.el;i=ee-ce-i}u.value?c.horizontal(i,C.value):c(i,C.value)}}function V(i){const{scrollTop:o,scrollLeft:S}=i.target;y.value=u.value?S:o}function s(i){if(j.value=!0,!(!b.value||!p.el)){for(const o of i.composedPath())for(const S of p.el.children)if(S===o){I(S);return}}}function m(i){j.value=!1}let h=!1;function w(i){var o;!h&&!j.value&&!(i.relatedTarget&&((o=p.el)!=null&&o.contains(i.relatedTarget)))&&F(),h=!1}function L(){h=!0}function R(i){if(!p.el)return;function o(S){i.preventDefault(),F(S)}u.value?i.key==="ArrowRight"?o(r.value?"prev":"next"):i.key==="ArrowLeft"&&o(r.value?"next":"prev"):i.key==="ArrowDown"?o("next"):i.key==="ArrowUp"&&o("prev"),i.key==="Home"?o("first"):i.key==="End"&&o("last")}function F(i){var S,N;if(!p.el)return;let o;if(!i)o=Ye(p.el)[0];else if(i==="next"){if(o=(S=p.el.querySelector(":focus"))==null?void 0:S.nextElementSibling,!o)return F("first")}else if(i==="prev"){if(o=(N=p.el.querySelector(":focus"))==null?void 0:N.previousElementSibling,!o)return F("last")}else i==="first"?o=p.el.firstElementChild:i==="last"&&(o=p.el.lastElementChild);o&&o.focus({preventScroll:!0})}function W(i){const o=u.value&&r.value?-1:1,S=(i==="prev"?-o:o)*_.value;let N=y.value+S;if(u.value&&r.value&&v.el){const{scrollWidth:ee,offsetWidth:ce}=v.el;N+=ee-ce}D(N)}const se=x(()=>({next:d.next,prev:d.prev,select:d.select,isSelected:d.isSelected})),oe=x(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!g.value;case!0:return b.value||Math.abs(y.value)>0;case"mobile":return g.value||b.value||Math.abs(y.value)>0;default:return!g.value&&(b.value||Math.abs(y.value)>0)}}),re=x(()=>Math.abs(y.value)>1),ue=x(()=>{if(!v.value)return!1;const i=ze(u.value,v.el),o=jt(u.value,v.el);return i-o-Math.abs(y.value)>1});return ne(()=>t(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!u.value,"v-slide-group--has-affixes":oe.value,"v-slide-group--is-overflowing":b.value},a.value,e.class],style:e.style,tabindex:j.value||d.selected.value.length?-1:0,onFocus:w},{default:()=>{var i,o,S;return[oe.value&&t("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!re.value}],onMousedown:L,onClick:()=>re.value&&W("prev")},[((i=l.prev)==null?void 0:i.call(l,se.value))??t(Ce,null,{default:()=>[t($,{icon:r.value?e.nextIcon:e.prevIcon},null)]})]),t("div",{key:"container",ref:v,class:"v-slide-group__container",onScroll:V},[t("div",{ref:p,class:"v-slide-group__content",onFocusin:s,onFocusout:m,onKeydown:R},[(o=l.default)==null?void 0:o.call(l,se.value)])]),oe.value&&t("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ue.value}],onMousedown:L,onClick:()=>ue.value&&W("next")},[((S=l.next)==null?void 0:S.call(l,se.value))??t(Ce,null,{default:()=>[t($,{icon:r.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:d.selected,scrollTo:W,scrollOffset:y,focus:F,hasPrev:re,hasNext:ue}}}),Ke=Symbol.for("vuetify:v-chip-group"),Tt=Q({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:et},...qe(),...Z(),...Ee({selectedClass:"v-chip--selected"}),...ie(),...pe(),...ye({variant:"tonal"})},"VChipGroup"),Dt=Y()({name:"VChipGroup",props:Tt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const{themeClasses:r}=he(e),{isSelected:a,select:g,next:d,prev:b,selected:y}=Ge(e,Ke);return me({VChip:{color:A(e,"color"),disabled:A(e,"disabled"),filter:A(e,"filter"),variant:A(e,"variant")}}),ne(()=>{const _=Be.filterProps(e);return t(Be,T(_,{class:["v-chip-group",{"v-chip-group--column":e.column},r.value,e.class],style:e.style}),{default:()=>{var f;return[(f=l.default)==null?void 0:f.call(l,{isSelected:a,select:g,next:d,prev:b,selected:y.value})]}})}),{}}}),Et=Q({activeClass:String,appendAvatar:String,appendIcon:M,closable:Boolean,closeIcon:{type:M,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ke(),onClickOnce:ke(),...$e(),...Z(),...We(),...Ne(),...pt(),...Oe(),...ht(),...He(),...ie({tag:"span"}),...pe(),...ye({variant:"tonal"})},"VChip"),O=Y()({name:"VChip",directives:{Ripple:yt},props:Et(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:l,emit:r,slots:a}=n;const{t:g}=Fe(),{borderClasses:d}=bt(e),{colorClasses:b,colorStyles:y,variantClasses:_}=kt(e),{densityClasses:f}=_t(e),{elevationClasses:u}=St(e),{roundedClasses:v}=xt(e),{sizeClasses:P}=Pt(e),{themeClasses:p}=he(e),B=Te(e,"modelValue"),c=Vt(e,Ke,!1),C=wt(e,l),U=x(()=>e.link!==!1&&C.isLink.value),z=x(()=>!e.disabled&&e.link!==!1&&(!!c||e.link||C.isClickable.value)),j=x(()=>({"aria-label":g(e.closeLabel),onClick(V){V.preventDefault(),V.stopPropagation(),B.value=!1,r("click:close",V)}}));function I(V){var s;r("click",V),z.value&&((s=C.navigate)==null||s.call(C,V),c==null||c.toggle())}function D(V){(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),I(V))}return()=>{const V=C.isLink.value?"a":e.tag,s=!!(e.appendIcon||e.appendAvatar),m=!!(s||a.append),h=!!(a.close||e.closable),w=!!(a.filter||e.filter)&&c,L=!!(e.prependIcon||e.prependAvatar),R=!!(L||a.prepend),F=!c||c.isSelected.value;return B.value&&_e(t(V,T({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":z.value,"v-chip--filter":w,"v-chip--pill":e.pill},p.value,d.value,F?b.value:void 0,f.value,u.value,v.value,P.value,_.value,c==null?void 0:c.selectedClass.value,e.class],style:[F?y.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:z.value?0:void 0,onClick:I,onKeydown:z.value&&!U.value&&D},C.linkProps),{default:()=>{var W;return[Ct(z.value,"v-chip"),w&&t(vt,{key:"filter"},{default:()=>[_e(t("div",{class:"v-chip__filter"},[a.filter?t(le,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},a.filter):t($,{key:"filter-icon",icon:e.filterIcon},null)]),[[at,c.isSelected.value]])]}),R&&t("div",{key:"prepend",class:"v-chip__prepend"},[a.prepend?t(le,{key:"prepend-defaults",disabled:!L,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},a.prepend):t(K,null,[e.prependIcon&&t($,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t(Le,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t("div",{class:"v-chip__content","data-no-activator":""},[((W=a.default)==null?void 0:W.call(a,{isSelected:c==null?void 0:c.isSelected.value,selectedClass:c==null?void 0:c.selectedClass.value,select:c==null?void 0:c.select,toggle:c==null?void 0:c.toggle,value:c==null?void 0:c.value.value,disabled:e.disabled}))??e.text]),m&&t("div",{key:"append",class:"v-chip__append"},[a.append?t(le,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},a.append):t(K,null,[e.appendIcon&&t($,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t(Le,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),h&&t("button",T({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},j.value),[a.close?t(le,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},a.close):t($,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[tt("ripple"),z.value&&e.ripple,null]])}}}),Gt=Q({...Z(),...lt(),...it()},"VLayout"),$t=Y()({name:"VLayout",props:Gt(),setup(e,n){let{slots:l}=n;const{layoutClasses:r,layoutStyles:a,getLayoutItem:g,items:d,layoutRef:b}=nt(e),{dimensionStyles:y}=st(e);return ne(()=>{var _;return t("div",{ref:b,class:[r.value,e.class],style:[y.value,a.value,e.style]},[(_=l.default)==null?void 0:_.call(l)])}),{getLayoutItem:g,items:d}}});function Wt(){const e=X([]);ot(()=>e.value=[]);function n(l,r){e.value[r]=l}return{refs:e,updateRef:n}}const Nt=Q({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:M,default:"$first"},prevIcon:{type:M,default:"$prev"},nextIcon:{type:M,default:"$next"},lastIcon:{type:M,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...$e(),...Z(),...We(),...Ne(),...Oe(),...He(),...ie({tag:"nav"}),...pe(),...ye({variant:"text"})},"VPagination"),Re=Y()({name:"VPagination",props:Nt(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,n){let{slots:l,emit:r}=n;const a=Te(e,"modelValue"),{t:g,n:d}=Fe(),{isRtl:b}=Me(),{themeClasses:y}=he(e),{width:_}=je(),f=H(-1);me(void 0,{scoped:!0});const{resizeRef:u}=fe(s=>{if(!s.length)return;const{target:m,contentRect:h}=s[0],w=m.querySelector(".v-pagination__list > *");if(!w)return;const L=h.width,R=w.offsetWidth+parseFloat(getComputedStyle(w).marginRight)*2;f.value=B(L,R)}),v=x(()=>parseInt(e.length,10)),P=x(()=>parseInt(e.start,10)),p=x(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):f.value>=0?f.value:B(_.value,58));function B(s,m){const h=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((s-m*h)/m).toFixed(2)))}const c=x(()=>{if(v.value<=0||isNaN(v.value)||v.value>Number.MAX_SAFE_INTEGER)return[];if(p.value<=0)return[];if(p.value===1)return[a.value];if(v.value<=p.value)return te(v.value,P.value);const s=p.value%2===0,m=s?p.value/2:Math.floor(p.value/2),h=s?m:m+1,w=v.value-m;if(h-a.value>=0)return[...te(Math.max(1,p.value-1),P.value),e.ellipsis,v.value];if(a.value-w>=(s?1:0)){const L=p.value-1,R=v.value-L+P.value;return[P.value,e.ellipsis,...te(L,R)]}else{const L=Math.max(1,p.value-3),R=L===1?a.value:a.value-Math.ceil(L/2)+P.value;return[P.value,e.ellipsis,...te(L,R),e.ellipsis,v.value]}});function C(s,m,h){s.preventDefault(),a.value=m,h&&r(h,m)}const{refs:U,updateRef:z}=Wt();me({VPaginationBtn:{color:A(e,"color"),border:A(e,"border"),density:A(e,"density"),size:A(e,"size"),variant:A(e,"variant"),rounded:A(e,"rounded"),elevation:A(e,"elevation")}});const j=x(()=>c.value.map((s,m)=>{const h=w=>z(w,m);if(typeof s=="string")return{isActive:!1,key:`ellipsis-${m}`,page:s,props:{ref:h,ellipsis:!0,icon:!0,disabled:!0}};{const w=s===a.value;return{isActive:w,key:s,page:d(s),props:{ref:h,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:w?e.activeColor:e.color,"aria-current":w,"aria-label":g(w?e.currentPageAriaLabel:e.pageAriaLabel,s),onClick:L=>C(L,s)}}}})),I=x(()=>{const s=!!e.disabled||a.value<=P.value,m=!!e.disabled||a.value>=P.value+v.value-1;return{first:e.showFirstLastPage?{icon:b.value?e.lastIcon:e.firstIcon,onClick:h=>C(h,P.value,"first"),disabled:s,"aria-label":g(e.firstAriaLabel),"aria-disabled":s}:void 0,prev:{icon:b.value?e.nextIcon:e.prevIcon,onClick:h=>C(h,a.value-1,"prev"),disabled:s,"aria-label":g(e.previousAriaLabel),"aria-disabled":s},next:{icon:b.value?e.prevIcon:e.nextIcon,onClick:h=>C(h,a.value+1,"next"),disabled:m,"aria-label":g(e.nextAriaLabel),"aria-disabled":m},last:e.showFirstLastPage?{icon:b.value?e.firstIcon:e.lastIcon,onClick:h=>C(h,P.value+v.value-1,"last"),disabled:m,"aria-label":g(e.lastAriaLabel),"aria-disabled":m}:void 0}});function D(){var m;const s=a.value-P.value;(m=U.value[s])==null||m.$el.focus()}function V(s){s.key===Se.left&&!e.disabled&&a.value>+e.start?(a.value=a.value-1,xe(D)):s.key===Se.right&&!e.disabled&&a.value<P.value+v.value-1&&(a.value=a.value+1,xe(D))}return ne(()=>t(e.tag,{ref:u,class:["v-pagination",y.value,e.class],style:e.style,role:"navigation","aria-label":g(e.ariaLabel),onKeydown:V,"data-test":"v-pagination-root"},{default:()=>[t("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&t("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[l.first?l.first(I.value.first):t(G,T({_as:"VPaginationBtn"},I.value.first),null)]),t("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[l.prev?l.prev(I.value.prev):t(G,T({_as:"VPaginationBtn"},I.value.prev),null)]),j.value.map((s,m)=>t("li",{key:s.key,class:["v-pagination__item",{"v-pagination__item--is-active":s.isActive}],"data-test":"v-pagination-item"},[l.item?l.item(s):t(G,T({_as:"VPaginationBtn"},s.props),{default:()=>[s.page]})])),t("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[l.next?l.next(I.value.next):t(G,T({_as:"VPaginationBtn"},I.value.next),null)]),e.showFirstLastPage&&t("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[l.last?l.last(I.value.last):t(G,T({_as:"VPaginationBtn"},I.value.last),null)])])]})),{}}}),Ot={class:"d-flex flex-row ma-2 align-center"},Ht={__name:"ProductGridSection",setup(e){const n=X(!1),l=X(""),r=X([]),a=rt({itemsPerPage:10,page:1}),g=x(()=>r.value.length),d=x(()=>{const _=(a.page-1)*a.itemsPerPage,f=_+a.itemsPerPage;return r.value.slice(_,f)}),b=x(()=>{l.value!=""&&l.value!=null?(r.value=y.value.filter(_=>_.name.toLowerCase().includes(l.value.toLowerCase())),console.log(r.value.length)):r.value=y.value}),y=X([{id:"P001",name:"Classic White T-Shirt",category:"Tops",price:19.99,size:["S","M","L","XL"],color:["White"],inStock:!0,images:[{url:"https://example.com/images/white_tshirt_front.jpg",alt:"Classic white t-shirt front view"},{url:"https://example.com/images/white_tshirt_back.jpg",alt:"Classic white t-shirt back view"}],description:"A classic white cotton t-shirt for everyday wear."},{id:"P002",name:"Blue Denim Jeans",category:"Bottoms",price:49.99,size:["28","30","32","34","36"],color:["Blue"],inStock:!0,images:[{url:"https://example.com/images/blue_denim_jeans_front.jpg",alt:"Blue denim jeans front view"},{url:"https://example.com/images/blue_denim_jeans_back.jpg",alt:"Blue denim jeans back view"}],description:"Comfortable blue denim jeans with a slim fit design."},{id:"P003",name:"Red Cotton Hoodie",category:"Outerwear",price:34.99,size:["S","M","L","XL"],color:["Red","Black"],inStock:!1,images:[{url:"https://example.com/images/red_cotton_hoodie_front.jpg",alt:"Red cotton hoodie front view"},{url:"https://example.com/images/red_cotton_hoodie_back.jpg",alt:"Red cotton hoodie back view"}],description:"A cozy red hoodie made from soft cotton."},{id:"P004",name:"Leather Jacket",category:"Outerwear",price:120,size:["M","L","XL"],color:["Black"],inStock:!0,images:[{url:"https://example.com/images/leather_jacket_front.jpg",alt:"Black leather jacket front view"},{url:"https://example.com/images/leather_jacket_back.jpg",alt:"Black leather jacket back view"}],description:"A stylish black leather jacket for a modern look."},{id:"P005",name:"Floral Summer Dress",category:"Dresses",price:29.99,size:["S","M","L"],color:["Floral"],inStock:!0,images:[{url:"https://example.com/images/floral_summer_dress_front.jpg",alt:"Floral summer dress front view"},{url:"https://example.com/images/floral_summer_dress_back.jpg",alt:"Floral summer dress back view"}],description:"A lightweight summer dress with a floral print."},{id:"P006",name:"Black Running Shoes",category:"Shoes",price:79.99,size:["8","9","10","11","12"],color:["Black"],inStock:!0,images:[{url:"https://example.com/images/black_running_shoes.jpg",alt:"Black running shoes"}],description:"Durable black running shoes with excellent grip."},{id:"P007",name:"Blue Cotton Polo Shirt",category:"Tops",price:25,size:["M","L","XL"],color:["Blue"],inStock:!0,images:[{url:"https://example.com/images/blue_polo_front.jpg",alt:"Blue cotton polo shirt front view"}],description:"A casual blue polo shirt, perfect for everyday wear."},{id:"P008",name:"Green Chinos",category:"Bottoms",price:44.99,size:["30","32","34","36"],color:["Green"],inStock:!1,images:[{url:"https://example.com/images/green_chinos_front.jpg",alt:"Green chinos front view"},{url:"https://example.com/images/green_chinos_back.jpg",alt:"Green chinos back view"}],description:"Comfortable slim-fit chinos in olive green."},{id:"P009",name:"Black Leather Belt",category:"Accessories",price:29.99,size:["S","M","L","XL"],color:["Black"],inStock:!0,images:[{url:"https://example.com/images/black_leather_belt.jpg",alt:"Black leather belt"}],description:"A durable black leather belt with a classic buckle."},{id:"P010",name:"Woolen Scarf",category:"Accessories",price:19.99,size:["One Size"],color:["Gray","Red"],inStock:!0,images:[{url:"https://example.com/images/woolen_scarf.jpg",alt:"Gray woolen scarf"}],description:"A warm and soft woolen scarf for cold weather."},{id:"P011",name:"White Sneakers",category:"Shoes",price:65,size:["7","8","9","10"],color:["White"],inStock:!0,images:[{url:"https://example.com/images/white_sneakers.jpg",alt:"White sneakers"}],description:"Classic white sneakers with a minimalist design."},{id:"P012",name:"Striped Linen Shirt",category:"Tops",price:39.99,size:["S","M","L","XL"],color:["Blue and White"],inStock:!0,images:[{url:"https://example.com/images/striped_linen_shirt.jpg",alt:"Striped blue and white linen shirt"}],description:"A lightweight, breathable striped linen shirt."},{id:"P013",name:"Red Midi Skirt",category:"Skirts",price:45.99,size:["S","M","L"],color:["Red"],inStock:!1,images:[{url:"https://example.com/images/red_midi_skirt.jpg",alt:"Red midi skirt"}],description:"A stylish red midi skirt perfect for casual outings."},{id:"P014",name:"Navy Blazer",category:"Outerwear",price:89.99,size:["M","L","XL"],color:["Navy"],inStock:!0,images:[{url:"https://example.com/images/navy_blazer.jpg",alt:"Navy blazer front view"}],description:"A tailored navy blazer for formal occasions."},{id:"P015",name:"Leather Ankle Boots",category:"Shoes",price:99.99,size:["8","9","10","11"],color:["Brown"],inStock:!0,images:[{url:"https://example.com/images/leather_ankle_boots.jpg",alt:"Brown leather ankle boots"}],description:"Stylish leather ankle boots for casual wear."}]);return(_,f)=>(q(),ge(K,null,[Pe("div",null,[t(Ie,{height:"200px",src:"https://picsum.photos/id/78/1200/1800",cover:""})]),t($t,null,{default:k(()=>[t(ft,{floating:"",modelValue:n.value,"onUpdate:modelValue":f[0]||(f[0]=u=>n.value=u),"mobile-breakpoint":"md"},{default:k(()=>[t(de,{link:"",title:"List Item 1"}),t(de,{link:"",title:"List Item 2"}),t(de,{link:"",title:"List Item 3"})]),_:1},8,["modelValue"]),t(ut,null,{default:k(()=>[t(Ae,null,{default:k(()=>[t(ae,null,{default:k(()=>[t(E,{cols:"12",md:"6"},{default:k(()=>[Pe("div",Ot,[t(G,{class:"mr-2 hidden-md-and-up",onClick:f[1]||(f[1]=ct(u=>n.value=!n.value,["stop"]))},{default:k(()=>[t($,{icon:"mdi-filter-menu"})]),_:1}),t(ve,{density:"compact",label:"Search","prepend-inner-icon":"mdi-magnify",variant:"solo-filled",flat:"","hide-details":"","single-line":"",modelValue:l.value,"onUpdate:modelValue":[f[2]||(f[2]=u=>l.value=u),b.value]},null,8,["modelValue","onUpdate:modelValue"])])]),_:1}),t(E,{cols:"12",md:"6"},{default:k(()=>[t(Dt,{class:"ma-2",column:"",multiple:""},{default:k(()=>[t(O,{text:"New",variant:"outlined",filter:""}),t(O,{text:"Hosen",variant:"outlined",filter:""}),t(O,{text:"Hemden",variant:"outlined",filter:""}),t(O,{text:"Blusen",variant:"outlined",filter:""}),t(O,{text:"Socken",variant:"outlined",filter:""}),t(O,{text:"Zübehor",variant:"outlined",filter:""})]),_:1})]),_:1})]),_:1}),t(mt)]),_:1}),t(Ae,null,{default:k(()=>[t(ae,null,{default:k(()=>[t(E,{cols:"12",sm:"3"},{default:k(()=>[t(ve,{"model-value":a.itemsPerPage,class:"pa-2",label:"Items per page",max:"15",min:"1",type:"number","hide-details":"","onUpdate:modelValue":f[3]||(f[3]=u=>a.itemsPerPage=parseInt(u,10))},null,8,["model-value"])]),_:1}),t(E,{cols:"12",sm:"9"},{default:k(()=>[t(Re,{cols:"7",modelValue:a.page,"onUpdate:modelValue":f[4]||(f[4]=u=>a.page=u),length:Math.ceil(g.value/a.itemsPerPage)},null,8,["modelValue","length"])]),_:1})]),_:1}),t(ae,null,{default:k(()=>[(q(!0),ge(K,null,dt(d.value,u=>(q(),De(E,null,{default:k(()=>[t(It,{color:"surface-variant","min-width":"240","max-width":"340"},{default:k(()=>[t(Ie,{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",cover:""}),t(At,null,{default:k(()=>[Ve(we(u.name),1)]),_:2},1024),t(zt,null,{default:k(()=>[Ve(" €"+we(u.price),1)]),_:2},1024),t(Bt,null,{default:k(()=>[t(G,{text:"Add To Cart"})]),_:1})]),_:2},1024)]),_:2},1024))),256))]),_:1}),t(ae,null,{default:k(()=>[t(E,{cols:"12",sm:"3"},{default:k(()=>[t(ve,{"model-value":a.itemsPerPage,class:"pa-2",label:"Items per page",max:"15",min:"1",type:"number","hide-details":"","onUpdate:modelValue":f[5]||(f[5]=u=>a.itemsPerPage=parseInt(u,10))},null,8,["model-value"])]),_:1}),t(E,{cols:"12",sm:"9"},{default:k(()=>[t(Re,{cols:"7",modelValue:a.page,"onUpdate:modelValue":f[6]||(f[6]=u=>a.page=u),length:Math.ceil(g.value/a.itemsPerPage)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}},Ut={};function Xt(e,n){const l=gt,r=Ht;return q(),ge(K,null,[t(l),t(r)],64)}const qt=Lt(Ut,[["render",Xt]]),ta={__name:"boutique",setup(e){return(n,l)=>{const r=qt;return q(),De(r)}}};export{ta as default};
