if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const l=e=>n(e,r),o={module:{uri:r},exports:c,require:l};i[r]=Promise.all(s.map((e=>o[e]||l(e)))).then((e=>(t(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"ff7a0cd910c8ec3cff7f43de0c680c7a"},{url:"install.bundle.js",revision:"c6b5a35c0b2370d76e8c215845b642e7"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"178cc52e591257e6461b701aac5af2cb"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{})}));
