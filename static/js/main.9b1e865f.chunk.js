(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),o=a(8),n=a.n(o),l=(a(13),a(4)),i=(a(14),a(0));function r(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("p",{className:"h5 text-center",children:["Copyright - ",e.author," - ","2021-2022"]})})}var d=a.p+"static/media/logo.6ce24c58.svg",h=a(5);function b(e){return Object(i.jsx)("div",{className:"navbar navbar-".concat(e.mode," bg-").concat(e.mode," navbar-expand-sm sticky-top"),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)(h.b,{className:"navbar-brand",to:"/",children:Object(i.jsx)("img",{src:d,className:"App-logo",alt:"logo"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(h.b,{className:"nav-link active",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(h.b,{className:"nav-link",to:"/about",children:"About Us"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)("a",{className:"nav-link disabled",href:"/",tabIndex:"-1",children:["Hello ",e.title]})})]}),Object(i.jsxs)("div",{className:"form-check form-switch",children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",id:"darkModeSwitch",onClick:e.toggleMode}),Object(i.jsx)("label",{className:"form-check-label text-success",htmlFor:"darkModeSwitch",children:"Dark Mode"})]})]})]})})}function j(e){var t=Object(s.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1],n="dark"===e.mode?"#d8e6db":"#5a635c",r="dark"===e.mode?"#5a635c":"#d8e6db";return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{style:{color:n,backgroundColor:r},children:[Object(i.jsxs)("div",{className:"my-3",children:[Object(i.jsx)("label",{htmlFor:"myBox",className:"form-label display-6",children:e.heading}),Object(i.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",value:c,onChange:function(e){o(e.target.value)}})]}),Object(i.jsx)("button",{className:"btn btn-success",onClick:function(){var t=c.toUpperCase();o(t),e.showAlert("Converted to uppercase","success")},children:"Convert to uppercase"}),Object(i.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){o(""),e.showAlert("All text Cleared","success")},children:"Clear text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.split(/[ ]+/);console.log(t),o(t.join(" ")),e.showAlert("Extra spaces removed","success")},children:"Remove extra spaces"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){navigator.clipboard.writeText(c),e.showAlert("All text Copied","success")},children:"Copy whole textarea"})]}),Object(i.jsxs)("div",{className:"container border p-2 my-3",children:[Object(i.jsx)("p",{className:"display-5",children:"Result"}),Object(i.jsxs)("p",{children:["Words: ",c.split(/\n| /).filter((function(e){return""!==e})).length,Object(i.jsx)("br",{}),"Characters: : ",c.trim().length,Object(i.jsx)("br",{}),"Time to read: ",.008*(c.split(" ").length-1)," minutes"]}),Object(i.jsx)("p",{className:"display-5",children:"Preview"}),Object(i.jsx)("p",{children:c})]})]})}function m(e){return e.alert&&Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",style:{position:"fixed",zIndex:"9999",right:"10px",top:"10px"},children:e.alert.msg})})}function u(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"display-4",children:"About Us"}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})]})})}b.defaultProps={title:"Guest",hi:101};var p=a(2),x="/f-react-11";var g=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(e,t){c({msg:e,type:t}),setTimeout((function(){c(null)}),2e3)},n=Object(s.useState)("light"),d=Object(l.a)(n,2),g=d[0],O=d[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"container-fluid display-5 bg-secondary text-light ",children:"My First react app! EXICTED!!"}),Object(i.jsx)(m,{alert:a}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(h.a,{children:[Object(i.jsx)(b,{mode:g,toggleMode:function(){O("light"===g?"dark":"light"),o("light"===g?"Dark Mode Set":"Light mode set","success")}}),Object(i.jsxs)(p.c,{children:[Object(i.jsx)(p.a,{exact:!0,path:"".concat(x,"/about"),element:Object(i.jsx)(u,{})}),Object(i.jsx)(p.a,{exact:!0,path:"".concat(x),element:Object(i.jsx)(j,{heading:"Enter some text: ",mode:g,showAlert:o})})]})]})}),Object(i.jsx)(r,{author:"Shivam Kumar"})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),o(e),n(e)}))};n.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.9b1e865f.chunk.js.map