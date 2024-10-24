import{p as i,_ as v,e as u,ap as l,ad as k,aq as h,ar as S,as as B,at as I,C as P,j as r,a0 as $,m as N,b as V,c as T,g as R,r as w,d as F,au as E,t as j,h as q,av as D,aw as O,i as U}from"./index-CFfufrtq.js";const L=i({border:[Boolean,Number,String]},"border");function M(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return{borderClasses:u(()=>{const t=l(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))s.push(`border-${o}`);return s})}}function x(e){return k(()=>{const a=[],n={};if(e.value.background)if(h(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&S(e.value.background)){const t=B(e.value.background);if(t.a==null||t.a===1){const s=I(t);n.color=s,n.caretColor=s}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(h(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function _(e,a){const n=u(()=>({text:l(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=x(n);return{textColorClasses:t,textColorStyles:s}}function Q(e,a){const n=u(()=>({background:l(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=x(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const W=i({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function X(e){return{elevationClasses:u(()=>{const n=l(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Y=i({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Z(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return{roundedClasses:u(()=>{const t=l(e)?e.value:e.rounded,s=l(e)?e.value:e.tile,o=[];if(t===!0||t==="")o.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const c of String(t).split(" "))o.push(`rounded-${c}`);else(s||t===!1)&&o.push("rounded-0");return o})}}const A=["x-small","small","default","large","x-large"],G=i({size:{type:[String,Number],default:"default"}},"size");function H(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v();return k(()=>{let n,t;return P(A,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:r(e.size),height:r(e.size)}),{sizeClasses:n,sizeStyles:t}})}const J=i({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:$,...N(),...G(),...V({tag:"i"}),...T()},"VIcon"),p=R()({name:"VIcon",props:J(),setup(e,a){let{attrs:n,slots:t}=a;const s=w(),{themeClasses:o}=F(e),{iconData:c}=E(u(()=>s.value||e.icon)),{sizeClasses:C}=H(e),{textColorClasses:y,textColorStyles:z}=_(j(e,"color"));return q(()=>{var m,b;const f=(m=t.default)==null?void 0:m.call(t);f&&(s.value=(b=D(f).filter(g=>g.type===O&&g.children&&typeof g.children=="string")[0])==null?void 0:b.children);const d=!!(n.onClick||n.onClickOnce);return U(c.value.component,{tag:e.tag,icon:c.value.icon,class:["v-icon","notranslate",o.value,C.value,y.value,{"v-icon--clickable":d,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[C.value?void 0:{fontSize:r(e.size),height:r(e.size),width:r(e.size)},z.value,e.style],role:d?"button":void 0,"aria-hidden":!d,tabindex:d?e.disabled?-1:0:void 0},{default:()=>[f]})}),{}}});export{p as V,W as a,Y as b,M as c,X as d,Z as e,x as f,G as g,H as h,_ as i,L as m,Q as u};
