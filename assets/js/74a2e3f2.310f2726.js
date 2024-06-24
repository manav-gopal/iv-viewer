"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6839],{202:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=n(4848),s=n(8453);const t={sidebar_position:1,title:"Introduction"},o="Getting Started",a={id:"iv-viewer/intro-iv",title:"Introduction",description:"_",source:"@site/docs/iv-viewer/intro-iv.md",sourceDirName:"iv-viewer",slug:"/iv-viewer/intro-iv",permalink:"/iv-viewer/docs/iv-viewer/intro-iv",draft:!1,unlisted:!1,editUrl:"https://github.com/s-yadav/iv-viewer/edit/master/documentation/docs/iv-viewer/intro-iv.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"iv-viewer",permalink:"/iv-viewer/docs/category/iv-viewer"},next:{title:"props",permalink:"/iv-viewer/docs/iv-viewer/props"}},l={},c=[{value:"Features",id:"features",level:3},{value:"Install",id:"install",level:3},{value:"Usage",id:"usage",level:2},{value:"ES6",id:"es6",level:3}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"iv-viewer"})," is a zooming and panning plugin inspired by Google Photos for your web images. It provides a smooth and intuitive way to view images with features like full-screen mode, touch device support, and high-resolution image loading."]}),"\n",(0,r.jsx)(i.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Smooth dragging and panning of images"}),"\n",(0,r.jsx)(i.li,{children:"Support for touch devices"}),"\n",(0,r.jsx)(i.li,{children:"Double tap to zoom in/zoom out"}),"\n",(0,r.jsx)(i.li,{children:"Pinch in/out to control zoom"}),"\n",(0,r.jsx)(i.li,{children:"Snap view for better panning and zooming experience"}),"\n",(0,r.jsx)(i.li,{children:"Quick display of loaded images with progressive loading of high-quality images"}),"\n",(0,r.jsx)(i.li,{children:"Exposed API to control zoom programmatically"}),"\n",(0,r.jsx)(i.li,{children:"Custom events to listen for state changes"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(i.p,{children:["Using ",(0,r.jsx)(i.code,{children:"npm"})]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"npm install iv-viewer --save\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Using ",(0,r.jsx)(i.code,{children:"yarn"})]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"yarn add iv-viewer\n"})}),"\n",(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(i.h3,{id:"es6",children:"ES6"}),"\n",(0,r.jsx)(i.p,{children:"Image Viewer"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-jsx",children:"import ImageViewer from 'iv-viewer';\nimport 'iv-viewer/dist/iv-viewer.css';\n\nconst container = document.querySelector('#image-container');\nconst viewer = new ImageViewer(container, options);\n\nviewer.load('images/low-res-img', 'images/hi-res-img');\n"})}),"\n",(0,r.jsx)(i.p,{children:"Fullscreen Viewer"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-jsx",children:"import { FullScreenViewer } from 'iv-viewer';\nimport 'iv-viewer/dist/iv-viewer.css';\n\nconst viewer = new FullScreenViewer(options);\n\nviewer.show('images/low-res-img', 'images/hi-res-img');\n"})}),"\n",(0,r.jsxs)(i.p,{children:["This Markdown provides a clear and concise introduction to ",(0,r.jsx)(i.code,{children:"iv-viewer"}),", its features, installation instructions, and usage examples for both normal and fullscreen viewers in an ES6 environment."]}),"\n",(0,r.jsxs)(i.p,{children:["Click ",(0,r.jsx)(i.a,{href:"/iv-viewer/docs/iv-viewer/props",children:"Options"})," to get the list of options."]})]})}function v(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var r=n(6540);const s={},t=r.createContext(s);function o(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);