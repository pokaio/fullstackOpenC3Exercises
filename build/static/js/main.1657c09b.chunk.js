(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(52)},28:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(18),u=t.n(o),c=(t(28),t(19)),l=t(5),i=t(3),m=t.n(i),d=function(){return m.a.get("api/persons/").then(function(e){return e.data})},s=function(e){return m.a.post("api/persons/",e).then(function(e){return e.data})},f=function(e){return m.a.delete("".concat("api/persons/","/").concat(e)).then(function(e){return e})},p=function(e){var n=e.value,t=e.onChange;return r.a.createElement("form",null,"Find person: ",r.a.createElement("input",{value:n,onChange:t}))},b=function(e){var n=e.filterName,t=e.persons.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return 0===n.length?r.a.createElement("div",null):r.a.createElement("div",null,t.map(function(e){return r.a.createElement("p",{key:e.id},e.name,": ",e.number)}))},v=function(e){var n=e.person;return""===n?r.a.createElement("div",null):r.a.createElement("p",{style:{color:"green",border:"solid",borderRadius:8,backgroundColor:"lightgrey",padding:12}},n)},g=function(e){var n=e.value,t=e.onChange,a=e.onSubmit,o=e.numberChange,u=e.typeNumber;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{type:"number",value:u,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add")))},h=function(e){var n=e.persons,t=e.deleteButton;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numbers"),n.map(function(e){return r.a.createElement("p",{key:e.id},e.name,": ",e.number," ",r.a.createElement("button",{name:e.name,id:e.id,onClick:t},"Delete"))}))},E=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),E=i[0],w=i[1],C=Object(a.useState)(""),y=Object(l.a)(C,2),O=y[0],j=y[1];Object(a.useEffect)(function(){d().then(function(e){console.log("server data loaded"),o(e)})},[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{person:O}),r.a.createElement(p,{value:E,onChange:function(e){w(e.target.value)}}),r.a.createElement(b,{filterName:E,persons:t}),r.a.createElement("h2",null,"Add a new number"),r.a.createElement(g,{onSubmit:function(e){var n=e.target[0].value,a=e.target[1].value;e.preventDefault();var r={name:n,number:a,id:t.length+1};if(t.map(function(e){return e.name.toLowerCase()}).includes(n.toLowerCase())){if(window.confirm("'".concat(n,"' aldready added to phonebook, replace the old number with a new one?"))){var u=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())}),l=Object(c.a)({},u[0],{number:"".concat(a)});m.a.put("http://localhost:3001/persons/".concat(u[0].id),l).then(function(e){var n=t.map(function(n){return n.id!==e.data.id?n:e.data});o(n.map(function(e){return e}))}).catch(function(e){j(n+" has already been deleted."),o(t.filter(function(e){return e.id!==u[0].id})),setTimeout(function(){j("")},3e3)}),e.target[0].value="",e.target[1].value=""}}else""===n||""===a?alert("Name or number is missing."):s(r).then(function(a){console.log("posted"),o(t.concat(a)),e.target[0].value="",e.target[1].value="",j(n+" has been added."),setTimeout(function(){j("")},3e3)})}}),r.a.createElement(h,{persons:t,deleteButton:function(e){window.confirm("Delete '".concat(e.target.name,"'?"))&&f(e.target.id).then(function(){console.log("deleted");var n=parseInt(e.target.id),a=t.map(function(e){return e.id}).indexOf(n);t.splice(a,1),o(t.map(function(e){return e}))})}}))};u.a.createRoot(document.getElementById("root")).render(r.a.createElement(E,null))}},[[20,2,1]]]);
//# sourceMappingURL=main.1657c09b.chunk.js.map