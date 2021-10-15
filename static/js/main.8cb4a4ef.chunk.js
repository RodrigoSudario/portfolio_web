(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,s){},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(6),i=s.n(a),r=s(3),o=(s(17),s(43)),l=s(44),j=s(0);function d(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(j.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("a",{href:"#intro",className:"logo",children:"Portf\xf3lio"}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(o.a,{className:"icon"}),Object(j.jsx)("span",{children:"+55 85 992868082"})]}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(l.a,{className:"icon"}),Object(j.jsx)("span",{children:"monteiro.sudario@gmail.com"})]})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})})]})})}s(23);var m=s(8);function b(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(m.a)(e.current,{backDelay:1500,backSpeed:60,showCursor:!0,strings:["Frontend","Backend","Fullstack"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:"assets/fotoRodrigoCana.jpg",alt:"foto do desenvolvedor"})})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Ol\xe1 pessoal, me chamo"}),Object(j.jsx)("h1",{children:"Rodrigo"}),Object(j.jsxs)("h3",{children:["Desenvolvedor ",Object(j.jsx)("span",{ref:e})]})]}),Object(j.jsx)("a",{href:"#portfolio",children:Object(j.jsx)("img",{src:"assets/down.png",alt:"seta para baixo"})})]})]})}s(24);function u(e){var t=e.title,s=e.active,c=e.setSeleted,n=e.id;return Object(j.jsx)("li",{className:s?"portfolioList active":"portfolioList",onClick:function(){return c(n)},children:t})}s(25);var O=[{id:1,title:"Delivery App",img:"./assets/deliveryApp.png"},{id:2,title:"Stranger Things",img:"./assets/strangerThings.png"}],p=[{id:1,title:"Movie Cards Library",img:"./assets/movieCardsLibrary.png"},{id:2,title:"Pixel's Art",img:"./assets/pixelsArt.png"},{id:3,title:"Facebook",img:"./assets/facebook.png"}],x=[{id:1,title:"Crush Manager",img:"./assets/crushManager.png"},{id:2,title:"Store Manager",img:"./assets/storeManager.png"},{id:3,title:"MongoDb Aggregations",img:"./assets/mongoDbAggregations.png"}];function g(){var e=Object(c.useState)("fullstack"),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)([]),i=Object(r.a)(a,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){switch(s){case"fullstack":l(O);break;case"frontend":l(p);break;case"backend":l(x)}}),[s]),Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("h1",{children:"Portf\xf3lio"}),Object(j.jsx)("ul",{children:[{id:"fullstack",title:"Fullstack"},{id:"frontend",title:"Frontend"},{id:"backend",title:"Backend"}].map((function(e){return Object(j.jsx)(u,{title:e.title,active:s===e.id,setSeleted:n,id:e.id})}))}),Object(j.jsx)("div",{className:"container",children:o.map((function(e){return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:e.img,alt:"foto de p\xe1gina"}),Object(j.jsx)("h3",{children:e.title})]})}))})]})}s(26);var h=[{id:"1",icon:"assets/fullstackMark.png",img:"assets/fullstackImage.png",title:"Fullstack",desc:"Na minha forma\xe7\xe3o pela Trybe, o curr\xedculo foi desenhado em parceria com as maiores empresas de tecnologia do Brasil. Estudei JavaScript, HTML, CSS, React, Node, Express.js, SQL, Git, entre outras linguagens e frameworks."},{id:"2",icon:"assets/frontIcon.jpg",img:"assets/frontImage.jpg",title:"Frontend",desc:"React, incluindo componentes, estado e eventos, componentes controlados, ciclo de vida, Router, Testes com RTL, Redux com React, Context API e React Hooks."},{id:"3",icon:"assets/backIcon.png",img:"assets/backImage.jpg",title:"Backend",desc:"Bando de dados SQL e NoSQL, Node e express.js, arquitetura MVC, API, REST, JWT e FILE Upload, SOLID, ORM, Sockets e Heroku."}];function f(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),s=t[0],n=t[1],a=function(e){n("left"===e?s>0?s-1:2:s<h.length-1?s+1:0)};return Object(j.jsxs)("div",{className:"works",id:"works",children:[Object(j.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:h.map((function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"leftContainer",children:[Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:e.icon,alt:"Marca fullstack"})}),Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("p",{children:e.desc}),Object(j.jsx)("span",{children:"Projects"})]})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)("img",{src:e.img,alt:"Imagem de um fullstack"})})]})})}))}),Object(j.jsx)("img",{src:"assets/arrow.png",alt:"",className:"arrow left",onClick:function(){return a("left")}}),Object(j.jsx)("img",{src:"assets/arrow.png",alt:"",className:"arrow right",onClick:function(){return a()}})]})}s(27);var v=s(9);function N(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useRef)();return Object(j.jsxs)("div",{className:"contact",id:"contact",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("img",{src:"assets/contact.jpeg",alt:""})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("h2",{children:"Contato"}),Object(j.jsxs)("form",{ref:a,onSubmit:function(e){e.preventDefault(),v.a.sendForm("gmailMessage","template_46fuucl",a.current,"user_vJdh5LwlnpZVsIYspQ3SN").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),n(!0),e.target.reset()},children:[Object(j.jsx)("input",{type:"text",name:"email",placeholder:"Email"}),Object(j.jsx)("textarea",{name:"message",placeholder:"Mensagem"}),Object(j.jsx)("button",{type:"submit",children:"Enviar"}),s&&Object(j.jsx)("span",{children:"Obrigado pelo contato!"})]})]})]})}s(28);function k(e){var t=e.setMenuOpen,s=e.item,c=e.nameItem;return Object(j.jsx)("div",{children:Object(j.jsx)("li",{onClick:function(){return t(!1)},children:Object(j.jsx)("a",{href:"#".concat(s),children:c})})})}function M(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(j.jsx)("div",{className:"menu "+(t&&"active"),children:Object(j.jsxs)("ul",{children:[Object(j.jsx)(k,{setMenuOpen:s,item:"intro",nameItem:"Home"}),Object(j.jsx)(k,{setMenuOpen:s,item:"portfolio",nameItem:"Portfolio"}),Object(j.jsx)(k,{setMenuOpen:s,item:"works",nameItem:"Projetos"}),Object(j.jsx)(k,{setMenuOpen:s,item:"contact",nameItem:"Contato"})]})})}s(29);var S=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{menuOpen:s,setMenuOpen:n}),Object(j.jsx)(M,{menuOpen:s,setMenuOpen:n}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(b,{}),Object(j.jsx)(g,{}),Object(j.jsx)(f,{}),Object(j.jsx)(N,{})]})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.8cb4a4ef.chunk.js.map