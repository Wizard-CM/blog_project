if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>i(s,l),a={module:{uri:l},exports:t,require:o};e[l]=Promise.all(n.map((s=>a[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-1ea6f077"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddPost-xZBNAsEr.js",revision:null},{url:"assets/Authlayout-DrfFwX62.js",revision:null},{url:"assets/EditPost-BfVoFfZw.js",revision:null},{url:"assets/index-6YRy3T_1.css",revision:null},{url:"assets/index-DDIWK_Zb.js",revision:null},{url:"assets/Login-CVAgL97P.js",revision:null},{url:"assets/MyPosts-j8XoUs4c.js",revision:null},{url:"assets/Post_Form-KfA9Wf00.js",revision:null},{url:"assets/Post-Dv63OYW3.js",revision:null},{url:"assets/Signup-lw7i3rpv.js",revision:null},{url:"assets/Sub_Loader-CVCoM0at.js",revision:null},{url:"index.html",revision:"c6d375679bdf5d4e0a0151fa1084af1f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"blog.svg",revision:"1735459e21594a3c2a24273f5438376e"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"ba5f7ba32b55bcf79a9265f554b8f9cd"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/cloud\.appwrite\.io\/v1\/databases/,new s.NetworkFirst({cacheName:"blog-api-cache",plugins:[new s.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/^https:\/\/cloud\.appwrite\.io\/v1\/storage\/buckets\/[a-zA-Z0-9]+\/files\/[a-zA-Z0-9]+\/preview(\?.*)?$/,new s.NetworkFirst({cacheName:"blog-images-cache",plugins:[new s.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET")}));
