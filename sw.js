if(!self.define){let e,i={};const r=(r,t)=>(r=new URL(r+".js",t).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(t,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const c=e=>r(e,n),f={module:{uri:n},exports:o,require:c};i[n]=Promise.all(t.map((e=>f[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-f1c8abb3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"img.html",revision:"883011aea9980466e36265e739fa4e1f"},{url:"index.html",revision:"57f5140c23181b50760af2389f618f7c"},{url:"manifest.json",revision:"42e46e178ab909824eb0251c5ce134e0"},{url:"PWA.js",revision:"676e4df6aaf0098e6da1e8774450ec48"},{url:"web-semantica.html",revision:"dc5e17ea2f4662aa7e5f13120c77a94e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
