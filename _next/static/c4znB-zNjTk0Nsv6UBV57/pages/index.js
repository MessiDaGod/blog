(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("23aj");return{page:e.default||e}}])},"23aj":function(e,t,a){"use strict";a.r(t);var r=a("0iUn"),n=a("sLSF"),i=a("MI3g"),l=a("a7VT"),o=a("Tit0"),c=a("q1tI"),s=a.n(c),u=a("NqE+"),f=a("YFqc"),m=a.n(f);function d(e){return s.a.createElement(m.a,{href:"post?fullUrl=".concat(e.href),as:e.href},s.a.createElement("a",{className:"b black o-80 glow no-underline lh-solid ".concat(e.className||"")},e.children))}var p=function(e){return s.a.createElement("div",{className:"mb4 pb2 bb b--light-gray"},s.a.createElement(d,{href:e.href,className:"f3"},e.title),e.preview&&s.a.createElement("p",{className:"mv1 o-60"},e.preview,s.a.createElement(d,{href:e.href},s.a.createElement("span",null," »"))),e.date&&s.a.createElement("small",{className:"db ttu o-40"},s.a.createElement("time",{key:new Date(e.date).toISOString()},e.date)))};var h=a("hSqM"),b=a("QtMz"),w=a.n(b);a.d(t,"default",function(){return v});var v=function(e){function t(){return Object(r.default)(this,t),Object(i.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(o.default)(t,e),Object(n.default)(t,[{key:"render",value:function(){var e=Object(h.a)(w.a);return s.a.createElement(u.a,null,s.a.createElement("div",{className:"center mw7 pa3 pa4-ns"},e.map(function(e,t){var a,r=Object(h.b)(e.filename),n=(a=e.frontmatter.date,new Date(a).toUTCString().split(" ").slice(1,4).join(" "));return s.a.createElement(p,{title:e.frontmatter.title,preview:e.preview,date:n,href:r,key:t})})))}}]),t}(s.a.Component)},QtMz:function(e,t){e.exports={posts:[{filename:"2019/rga.md",frontmatter:{title:"((draft)) rga - ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc",date:"2019-06-13T00:00:00.000Z"},preview:"rga  is  a  line-oriented  search  tool  that  allows  you  to  look  for  a  regex  in  a  multitude  of  file  types.  It  is  a  wrapper  around  the  awesome  ripgrep  that  enables  it  to  search  in  pdf,  docx,  pptx,  movie  subtitles  (mkv,  mp4),  sqlite,  etc.  Linux  build  status  Crates.io  Examples  Say  you  have  a  large  folder  of  papers  or  lecture  slides,  and  you  can't  remember  which  one  of  them  mentioned  LSTMs.  With  rga,  you  can  just  run  this:  and..."}]}}},[["/EDR","5d41","9da1"]]]);