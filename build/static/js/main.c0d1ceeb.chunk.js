(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,n){t.exports=n(52)},28:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),u=(n(28),n(19)),i=n(3),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=n(5),f=n.n(m),s="https://radiant-island-42047.herokuapp.com/api/notes",p=function(){var t=f.a.get(s),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then(function(t){return t.data.concat(e)})},d=function(t){return f.a.post(s,t).then(function(t){return t.data})},v=function(t,e){return f.a.put("".concat(s,"/").concat(t),e).then(function(t){return t.data})},E=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},b=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app"))},h=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(),m=Object(i.a)(c,2),f=m[0],s=m[1],h=Object(a.useState)(!0),g=Object(i.a)(h,2),O=g[0],j=g[1],w=Object(a.useState)("some error happened..."),S=Object(i.a)(w,2),k=S[0],y=S[1];Object(a.useEffect)(function(){console.log(p),p().then(function(t){o(t)})},[]);var N=O?n:n.filter(function(t){return!0===t.important});return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(E,{message:k}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return j(!O)}},"show ",O?"important":"all")),r.a.createElement("ul",null,N.map(function(t){return r.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=n.find(function(e){return e.id===t}),a=Object(u.a)({},e,{important:!e.important});v(t,a).then(function(e){o(n.map(function(n){return n.id!==t?n:e}))}).catch(function(a){y("Note '".concat(e.content," was already removed from server")),setTimeout(function(){y(null)},5e3),o(n.filter(function(e){return e.id!==t}))})}(t.id)}})})),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:f,date:(new Date).toISOString(),important:Math.random()>.5,id:n.length+1};d(e).then(function(t){o(n.concat(t)),s("")})}},r.a.createElement("input",{value:f,onChange:function(t){s(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(b,null))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(h,null))}},[[20,2,1]]]);
//# sourceMappingURL=main.c0d1ceeb.chunk.js.map