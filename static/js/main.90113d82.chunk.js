(this.webpackJsonpcashier=this.webpackJsonpcashier||[]).push([[0],{22:function(t,e,a){},26:function(t,e,a){t.exports=a.p+"static/media/bars-solid.b3f49afd.svg"},27:function(t,e,a){t.exports=a.p+"static/media/times-solid.2c5552a1.svg"},28:function(t,e,a){t.exports=a.p+"static/media/shopping-cart-solid.8bf1af37.svg"},30:function(t,e,a){t.exports=a(54)},35:function(t,e,a){},36:function(t,e,a){},42:function(t,e,a){},52:function(t,e,a){},53:function(t,e,a){},54:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(16),r=a.n(c),l=(a(35),a(3)),s=a(4),i=a(6),u=a(5),m=a(7),d=a(26),p=a.n(d),f=a(27),h=a.n(f),b=a(28),g=a.n(b),E=(a(36),a(19)),v=o.a.createContext(),_=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={products:[{_id:"1",title:"Adidas Shoes 01",src:"https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/891d1a2070a148aaab14abc6011d77af_9366/zx-2k-boost-shoes.jpg",description:"Lorem, ipsum dolor.",content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!",price:23,colors:["red","black","crimson","teal"],count:1},{_id:"2",title:"Adidas Shoes 02",src:"https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/5163039e2e914f70aa25ab41014a99ab_9366/zx-2k-boost-shoes.jpg",description:"Lorem, ipsum dolor.",content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!",price:19,colors:["red","crimson","teal"],count:1},{_id:"3",title:"Adidas Shoes 03",src:"https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/fede3f7f39fc4f059870ab5e00fd00f6_9366/stan-smith-human-made-shoes.jpg",description:"Lorem, ipsum dolor.",content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!",price:50,colors:["lightblue","white","crimson","teal"],count:1},{_id:"4",title:"Adidas Shoes 04",src:"https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/20154f4373fd459c9ffeab4a00b763f9_9366/response-super-shoes.jpg ",description:"Lorem, ipsum dolor.",content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!",price:15,colors:["orange","black","crimson","teal"],count:1},{_id:"5",title:"Adidas Shoes 05",src:"https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/2271f5de8b014eb88032a6b00157c2fc_9366/adilette-comfort-slides.jpg",description:"Lorem, ipsum dolor.",content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!",price:10,colors:["orange","black","crimson","teal"],count:1},{_id:"6",title:"Adidas Shoes 06",src:"https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/f54d673afd4944f1af8eabc6011d465b_9366/predator-mutator-20.3-firm-ground-boots.jpg",description:"Lorem, ipsum dolor.",content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!",price:17,colors:["orange","black","crimson","teal"],count:1}],cart:[],subtotal:0,tax:0,total:0,modelIsOpen:!1},t.addCart=function(e){var a=t.state,n=a.products,o=a.cart;if(o.every((function(t){return t._id!==e}))){var c=n.filter((function(t){return t._id===e}));t.setState({cart:[].concat(Object(E.a)(o),Object(E.a)(c))})}else alert("The product has been added to cart.")},t.reduction=function(e){var a=t.state.cart;a.forEach((function(a){a._id===e&&(1===a.count?t.removeProduct(e):a.count-=1)})),t.setState({cart:a}),t.getTotals()},t.increase=function(e){var a=t.state.cart;a.forEach((function(t){t._id===e&&(t.count+=1)})),t.setState({cart:a}),t.getTotals()},t.removeProduct=function(e){if(window.confirm("Do you want to delete this product?")){var a=t.state.cart;a.forEach((function(t,n){t._id===e&&a.splice(n,1)})),t.setState({cart:a}),t.getTotals()}},t.getTotals=function(){var e=t.state.cart.reduce((function(t,e){return t+e.price*e.count}),0),a=parseFloat((.1*e).toFixed(2)),n=e+a;t.setState({subtotal:e,tax:a,total:n})},t.openModal=function(){t.setState({modalIsOpen:!0})},t.closeModal=function(){t.setState({modalIsOpen:!1})},t}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){localStorage.setItem("dataCart",JSON.stringify(this.state.cart)),localStorage.setItem("dataSubTotal",JSON.stringify(this.state.subtotal)),localStorage.setItem("dataTax",JSON.stringify(this.state.tax)),localStorage.setItem("dataTotal",JSON.stringify(this.state.total))}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("dataCart"));null!==t&&this.setState({cart:t});var e=JSON.parse(localStorage.getItem("dataSubTotal"));null!==e&&this.setState({subtotal:e});var a=JSON.parse(localStorage.getItem("dataTax"));null!==a&&this.setState({tax:a});var n=JSON.parse(localStorage.getItem("dataTotal"));null!==n&&this.setState({total:n})}},{key:"render",value:function(){var t=this.state,e=t.products,a=t.cart,n=t.subtotal,c=t.tax,r=t.total,l=t.modalIsOpen,s=this.addCart,i=this.reduction,u=this.increase,m=this.removeProduct,d=this.getTotals,p=this.openModal,f=this.closeModal;return o.a.createElement(v.Provider,{value:{products:e,addCart:s,cart:a,reduction:i,increase:u,removeProduct:m,subtotal:n,getTotals:d,tax:c,total:r,modalIsOpen:l,openModal:p,closeModal:f}},this.props.children)}}]),a}(n.Component),y=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={toggle:!1},t.menuToggle=function(){t.setState({toggle:!t.state.toggle})},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state.toggle,e=this.context.cart;return o.a.createElement("header",null,o.a.createElement("div",{className:"menu",onClick:this.menuToggle},o.a.createElement("img",{src:p.a,alt:"",width:"20"})),o.a.createElement("div",{className:"logo"},o.a.createElement("h1",null,o.a.createElement(m.b,{to:"/"},"Adidas"))),o.a.createElement("nav",null,o.a.createElement("ul",{className:t?"toggle":""},o.a.createElement("li",null,o.a.createElement(m.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/"},"About")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/"},"Seasonal")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/"},"Contact")),o.a.createElement("li",null,o.a.createElement(m.b,{to:"/"},"Login / Register")),o.a.createElement("li",{className:"close",onClick:this.menuToggle},o.a.createElement("img",{src:h.a,alt:"",width:"20"}))),o.a.createElement("div",{className:"nav-cart"},o.a.createElement("span",null,e.length),o.a.createElement(m.b,{to:"/cart"},o.a.createElement("img",{src:g.a,alt:"",width:"20"})))))}}]),a}(n.Component);y.contextType=v;var O=y,S=(a(42),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var t=this.context,e=t.products,a=t.addCart;return o.a.createElement("div",{id:"product"},e.map((function(t){return o.a.createElement("div",{className:"card",key:t._id},o.a.createElement(m.b,{to:"/product/".concat(t._id)},o.a.createElement("img",{src:t.src,alt:""})),o.a.createElement("div",{className:"content"},o.a.createElement("h3",null,o.a.createElement(m.b,{to:"/product/".concat(t._id)},t.title)),o.a.createElement("span",null,"$",t.price),o.a.createElement("p",null,t.description),o.a.createElement("button",{onClick:function(){return a(t._id)}},"Add to cart")))})))}}]),a}(n.Component));S.contextType=v;var j=S,k=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props.colors;return o.a.createElement("div",{className:"colors"},t.map((function(t,e){return o.a.createElement("button",{key:e,style:{background:t}})})))}}]),a}(n.Component),N=(a(22),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={product:[]},t.getProduct=function(){if(t.props.match.params.id){var e=t.context.products.filter((function(e){return e._id===t.props.match.params.id}));t.setState({product:e})}},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getProduct()}},{key:"render",value:function(){var t=this.state.product,e=this.context.addCart;return o.a.createElement(o.a.Fragment,null,t.map((function(t){return o.a.createElement("div",{className:"details",key:t._id},o.a.createElement("img",{src:t.src,alt:""}),o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"row"},o.a.createElement("h2",null,t.title),o.a.createElement("span",null,"$",t.price)),o.a.createElement(k,{colors:t.colors}),o.a.createElement("p",null,t.description),o.a.createElement("p",null,t.content),o.a.createElement(m.b,{to:"/cart",className:"cart",onClick:function(){return e(t._id)}},"Add to cart")))})))}}]),a}(n.Component));N.contextType=v;var x=N,C=a(1),w=a(13),T=a.n(w),q=(a(52),a(53),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).state={input:""},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.context.getTotals()}},{key:"render",value:function(){var t=this,e=this.context,a=e.cart,n=e.increase,c=e.reduction,r=e.removeProduct,l=e.subtotal,s=e.tax,i=e.total,u=e.modalIsOpen,m=e.openModal,d=e.closeModal;return 0===a.length?o.a.createElement("h2",{style:{textAlign:"center"}},"Nothings Product"):o.a.createElement(o.a.Fragment,null,a.map((function(t){return o.a.createElement("div",{className:"details cart",key:t._id},o.a.createElement("img",{src:t.src,alt:""}),o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"row"},o.a.createElement("h2",null,t.title),o.a.createElement("span",null,"$",t.price*t.count)),o.a.createElement(k,{colors:t.colors}),o.a.createElement("p",null,t.description),o.a.createElement("p",null,t.content),o.a.createElement("div",{className:"amount"},o.a.createElement("button",{className:"count",onClick:function(){return c(t._id)}}," ","-"," "),o.a.createElement("span",null,t.count),o.a.createElement("button",{className:"count",onClick:function(){return n(t._id)}}," ","+"," "))),o.a.createElement("div",{className:"delete",onClick:function(){return r(t._id)}},"X"))})),o.a.createElement("div",{className:"total"},o.a.createElement(T.a,{isOpen:u,onRequestClose:function(){return d()},style:{content:{backgroundColor:"#fff"}}},o.a.createElement("div",{className:"modal"},o.a.createElement("h2",null,"Payment"),o.a.createElement("p",null,"Total Paid: $",o.a.createElement("input",{type:"number",placeholder:"Enter paid amount",value:this.state.input,onChange:function(e){return t.setState({input:e.target.value})}})),o.a.createElement("p",null,"Total: $",i),o.a.createElement("p",null,"Change: $",parseFloat(this.state.input-i).toFixed(2)),o.a.createElement("div",{className:"modal__buttons"},o.a.createElement("button",{className:"modal__closeButton",onClick:function(){return d()}},"Close"),o.a.createElement("button",{className:"modal__submitButton",onClick:function(){return d()}},"Submit")))),o.a.createElement("button",{onClick:function(){return m()}},"Payment"),o.a.createElement("h3",null,"Sub-Total: $",l),o.a.createElement("h3",null,"Tax: $",s),o.a.createElement("h3",null,"Total: $",i)))}}]),a}(n.Component));q.contextType=v;var A=q,I=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement(C.a,{path:"/",component:j,exact:!0}),o.a.createElement(C.a,{path:"/product/:id",component:x}),o.a.createElement(C.a,{path:"/cart",component:A}))}}]),a}(n.Component);T.a.setAppElement("#root");var L=function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(_,null,o.a.createElement("div",{className:"app"},o.a.createElement(m.a,null,o.a.createElement(O,null),o.a.createElement(I,null))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.90113d82.chunk.js.map