(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),l=(a(19),a(30),a(32),a(6)),s=a(7),u=a(9),i=a(8),m=a(12),p=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark navbar-style"},c.a.createElement("a",{className:"navbar-brand",href:"/#"},"eCommerce"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(m.b,{to:"/cart",className:"nav-link"},"Shopping Cart"))))))}}]),a}(n.Component),d=a(13),b=a(17),v=a.n(b),f=a(24),h=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={product:n.props.product},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"card m-2"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"text-muted"},"# ",this.state.product.id,c.a.createElement("span",{className:"pull-right hand-icon",onClick:function(){e.props.onDelete(e.state.product)}},c.a.createElement("i",{className:"fa fa-times"}))),c.a.createElement("h5",{className:"pt-2 border-top"},this.state.product.productName),c.a.createElement("div",null,"$ ",this.state.product.price)),c.a.createElement("div",{className:"card-footer"},c.a.createElement("div",{className:"float-left"},c.a.createElement("span",{className:"badge"},this.state.product.quantity),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){e.props.onIncrement(e.state.product,10)}},"+"),c.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){e.props.onDecrement(e.state.product,0)}},"-"))),c.a.createElement("div",{className:"float-right"},this.props.children))))}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(f.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://192.168.0.129:5000/products",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),n.setState({products:a});case 8:case"end":return e.stop()}}),e)}))),n.handleIncrement=function(e,t){var a=Object(d.a)(n.state.products),c=a.indexOf(e);a[c].quantity<t&&(a[c].quantity++,n.setState({products:a}))},n.handleDecrement=function(e,t){var a=Object(d.a)(n.state.products),c=a.indexOf(e);a[c].quantity>t&&(a[c].quantity--,n.setState({products:a}))},n.handleDelete=function(e){var t=Object(d.a)(n.state.products),a=t.indexOf(e);window.confirm("Are you sure to delete?")&&(t.splice(a,1),n.setState({products:t}))},n.state={products:[]},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h4",null,"Shopping Cart"),c.a.createElement("div",{className:"row"},this.state.products.map((function(t){return c.a.createElement(h,{key:t.id,product:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete},c.a.createElement("button",{className:"btn btn-primary"},"Buy Now"))}))))}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidCatch",value:function(e,t){localStorage.lastError="".concat(e,"\n").concat(JSON.stringify(t))}}]),a}(n.Component),y=a(1),N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h4",null,"Page not found"))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement(p,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement(y.c,null,c.a.createElement(y.a,{path:"/",exact:!0,component:E}),c.a.createElement(y.a,{path:"*",component:N}))))}}]),a}(n.Component);a(38),a(39);o.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.7bfb2704.chunk.js.map