"use strict";(self.webpackChunkgenerative_art_archive=self.webpackChunkgenerative_art_archive||[]).push([[279],{3910:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=a(6540),n=a(8749),c=a(1847),i=a(4810),l=a(151);var s=e=>{let{node:t}=e;const{slug:n,frontmatter:c}=t,{title:s,description:d,tags:m,thumbnail:o}=c,{0:v,1:f}=(0,r.useState)([]);return(0,r.useEffect)((()=>{if(m){const e=new Set;m.split(",").forEach((t=>{if(t.length>0){const a=t.replace(/-/g," ").trim();e.add(a)}}));const t=Array.from(e);f(t)}}),[m]),r.createElement("div",{className:"entry-preview-module--previewContainer--f3afa"},r.createElement("div",{className:"entry-preview-module--previewLeft--80b8c"},r.createElement("div",{className:"entry-preview-module--icon--ac6e8"},r.createElement("div",null,r.createElement(l.S,{src:"../images/entry-preview-icon.svg",alt:"Entry preview icon",width:15,height:15,__imageData:a(6131)}))),r.createElement("div",{className:"entry-preview-module--textContainer--a3d2c"},r.createElement("div",null,r.createElement(i.N_,{to:n,className:"entry-preview-module--titleLink--03535"},r.createElement("h1",{className:"entry-preview-module--titleText--b9b92"},s.toUpperCase()))),r.createElement("div",{className:"entry-preview-module--descriptionContainer--6d689"},d)),r.createElement("div",{className:"entry-preview-module--tagsContainer--7d794"},r.createElement("div",{className:"entry-preview-module--tagsInner--8f6fe"},v&&v.length>0&&v.map(((e,t)=>r.createElement("i",{key:t,className:"entry-preview-module--tag--ff248"},e,t<v.length-1&&", ")))))),r.createElement("div",{className:"entry-preview-module--previewRight--73263"},r.createElement("div",{className:"entry-preview-module--imageContainer--ef940"},o&&r.createElement(i.N_,{to:n,className:"entry-preview-module--imageLink--0428b"},r.createElement("img",{className:"entry-preview-module--image--8e5be",src:o.publicURL,alt:s})))))},d=a(356),m=a(9274),o=a(6786);const v=()=>{const{currentCategory:e}=(0,m.N)(),{0:t,1:a}=(0,r.useState)(null),{tagObject:i,allTags:l,setAllTags:v,currentTag:f,handleTagChange:u}=(0,o.O)(),p=(0,n.S)(),b=p[d.tH[e]],{0:w,1:g}=(0,r.useState)([]);function h(e){return e[Math.floor(Math.random()*e.length)]}return(0,r.useEffect)((()=>{const e=h(Object.keys(d.R6)),t=d.tH[e],r=h(p[t].nodes.filter((e=>null!==e.frontmatter.description)));a(r)}),[p]),(0,r.useEffect)((()=>{if(i){const t=i[e];v(t),u(t[0])}}),[e,i]),(0,r.useEffect)((()=>{if("all"===f)g(b.nodes);else{const e=b.nodes.filter((e=>{if(e.frontmatter.tags){return e.frontmatter.tags.split(",").map((e=>e.trim())).includes(f)}return!1}));g(e)}}),[f,b]),r.createElement("main",{className:"homepage"},r.createElement("title",null,"Home Page"),r.createElement("section",{className:"full"},r.createElement(c.A,{featuredArticle:t,entries:b.nodes,tags:l,currentTag:f,tagCallback:e=>{u(e)}},r.createElement("div",{id:"entry-list-container"},w.map((e=>r.createElement(s,{key:e.frontmatter.title,node:e})))))))};var f=()=>r.createElement(v,null)},6131:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/GenerativeArtArchive/static/6991bbbda4d83dabc83e9f7f3cc00d9c/a038e/entry-preview-icon.svg","srcSet":"/GenerativeArtArchive/static/6991bbbda4d83dabc83e9f7f3cc00d9c/bc6c5/entry-preview-icon.svg 4w,\\n/GenerativeArtArchive/static/6991bbbda4d83dabc83e9f7f3cc00d9c/e3c0b/entry-preview-icon.svg 8w,\\n/GenerativeArtArchive/static/6991bbbda4d83dabc83e9f7f3cc00d9c/a038e/entry-preview-icon.svg 15w","sizes":"(min-width: 15px) 15px, 100vw"},"sources":[{"srcSet":"/GenerativeArtArchive/static/6991bbbda4d83dabc83e9f7f3cc00d9c/c3fea/entry-preview-icon.webp 4w,\\n/GenerativeArtArchive/static/6991bbbda4d83dabc83e9f7f3cc00d9c/5d252/entry-preview-icon.webp 8w,\\n/GenerativeArtArchive/static/6991bbbda4d83dabc83e9f7f3cc00d9c/f57b3/entry-preview-icon.webp 15w","type":"image/webp","sizes":"(min-width: 15px) 15px, 100vw"}]},"width":15,"height":15}')}}]);
//# sourceMappingURL=component---src-pages-index-jsx-7cbce3a0ad1b7793acaf.js.map