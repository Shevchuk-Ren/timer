(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),i=c.n(a),l=(c(9),c(2)),r=c(0),j=function(e){var t=e.time;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsxs)("span",{className:"value","data-hours":!0,children:[("0"+Math.floor(t/36e5%24)).slice(-2),":"]}),Object(r.jsx)("span",{className:"label",children:"Hours"})]}),Object(r.jsxs)("div",{className:"field",children:[Object(r.jsxs)("span",{className:"value","data-minutes":!0,children:[("0"+Math.floor(t/6e4%60)).slice(-2),":"]}),Object(r.jsx)("span",{className:"label",children:"Minutes"})]}),Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("span",{className:"value","data-seconds":!0,children:("0"+Math.floor(t/1e3%60)).slice(-2)}),Object(r.jsx)("span",{className:"label",children:"Seconds"})]})]})},o=c(14),u=function(e){var t=e.status,c=e.onStart,s=e.onStop,a=e.onReset,i=e.onWait;Object(n.useRef)(Object(o.a)()),Object(n.useRef)(Object(o.a)()),Object(n.useRef)(Object(o.a)()),Object(n.useRef)(Object(o.a)());return Object(r.jsxs)("ul",{children:[t?Object(r.jsx)("li",{children:Object(r.jsx)("button",{type:"button",onClick:s,children:"Stop"})},"1"):Object(r.jsx)("li",{children:Object(r.jsx)("button",{type:"button",onClick:c,children:"Start"})},"0"),Object(r.jsx)("li",{children:Object(r.jsx)("button",{type:"button",onClick:a,children:"Reset"})},"3"),Object(r.jsx)("li",{children:Object(r.jsx)("button",{type:"button",onClick:i,children:"Wait"})},"4")]})};c(11);var b=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(0),c=Object(l.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),b=o[0],O=o[1],d=Object(n.useState)(0),f=Object(l.a)(d,2),h=f[0],x=f[1];Object(n.useEffect)((function(){return b?e.current=setInterval((function(){a((function(e){return e+10}))}),10):clearInterval(e.current),function(){return clearInterval(e)}}),[b]);var m=function(){O(!0)};return Object(r.jsxs)("div",{className:"timer",children:[Object(r.jsx)(j,{time:s}),Object(r.jsx)(u,{onStart:m,onStop:function(){O(!1),a(0)},onReset:function(){a(0),m()},onWait:function(){x(h+1),setTimeout((function(){x(0)}),300),1===h&&O(!1)},status:b})]})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.16d63b19.chunk.js.map