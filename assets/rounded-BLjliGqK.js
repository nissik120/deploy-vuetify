import{c as r,i as u,o as i,a0 as l,a1 as g,a2 as C,a3 as f,p as v,g as b}from"./index-6hbaPzyZ.js";const m=(e,s)=>{const o=e.__vccOpts||e;for(const[t,a]of s)o[t]=a;return o};function c(e){return i(()=>{const s=[],o={};if(e.value.background)if(l(e.value.background)){if(o.backgroundColor=e.value.background,!e.value.text&&g(e.value.background)){const t=C(e.value.background);if(t.a==null||t.a===1){const a=f(t);o.color=a,o.caretColor=a}}}else s.push(`bg-${e.value.background}`);return e.value.text&&(l(e.value.text)?(o.color=e.value.text,o.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:o}})}function x(e,s){const o=r(()=>({text:u(e)?e.value:null})),{colorClasses:t,colorStyles:a}=c(o);return{textColorClasses:t,textColorStyles:a}}function y(e,s){const o=r(()=>({background:u(e)?e.value:null})),{colorClasses:t,colorStyles:a}=c(o);return{backgroundColorClasses:t,backgroundColorStyles:a}}const S=v({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function h(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:b();return{roundedClasses:r(()=>{const t=u(e)?e.value:e.rounded,a=u(e)?e.value:e.tile,n=[];if(t===!0||t==="")n.push(`${s}--rounded`);else if(typeof t=="string"||t===0)for(const d of String(t).split(" "))n.push(`rounded-${d}`);else(a||t===!1)&&n.push("rounded-0");return n})}}export{m as _,h as a,x as b,S as m,y as u};
