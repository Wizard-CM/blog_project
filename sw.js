if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-1ea6f077"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AddPost-DmWDvwbB.js",revision:null},{url:"assets/Authlayout-BfiWR0EH.js",revision:null},{url:"assets/EditPost-DMBDKvrq.js",revision:null},{url:"assets/index-6YRy3T_1.css",revision:null},{url:"assets/index-CoApRtb5.js",revision:null},{url:"assets/Login-COzoiK8I.js",revision:null},{url:"assets/MyPosts-CrRftjTq.js",revision:null},{url:"assets/Post_Form-BzixDptT.js",revision:null},{url:"assets/Post-CZvEXQ6e.js",revision:null},{url:"assets/Signup-D-o440vV.js",revision:null},{url:"assets/Sub_Loader-B9AjCsNp.js",revision:null},{url:"index.html",revision:"d5400fd19894a1c6745673e74fe18c2c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"blog.svg",revision:"1735459e21594a3c2a24273f5438376e"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"ba5f7ba32b55bcf79a9265f554b8f9cd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/cloud\.appwrite\.io\/v1\/databases/,new e.NetworkFirst({cacheName:"blog-api-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/^https:\/\/cloud\.appwrite\.io\/v1\/storage\/buckets\/[a-zA-Z0-9]+\/files\/[a-zA-Z0-9]+\/preview(\?.*)?$/,new e.NetworkFirst({cacheName:"blog-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET")}));