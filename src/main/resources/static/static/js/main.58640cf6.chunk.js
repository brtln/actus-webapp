(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(58)},28:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),i=n(59);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(5),l=n(6),s=n(8),p=n(7),m=n(9),h=n(61),O=n(60),f=(n(28),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-wrapper"},"HEADER HERE")}}]),t}(a.PureComponent)),b=(n(30),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).displayName=t.name,n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement(f,null),this.props.children)}}]),t}(a.Component)),d=n(20),j=n.n(d),v=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={fields:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){j.a.get("http://localhost:8080/terms").then(function(e){console.log(e.data)})}},{key:"render",value:function(){var e=this.props.match.params.id.toUpperCase();return r.a.createElement("div",null,"FORM ",e)}}]),t}(a.PureComponent),E=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"WELCOME")}}]),t}(a.PureComponent),y=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"NOT FOUND")}}]),t}(a.PureComponent),w=(n(51),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(h.a,null,r.a.createElement(O.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(E,e)}}),r.a.createElement(O.a,{exact:!0,path:"/form/:id",render:function(e){return r.a.createElement(v,e)}}),r.a.createElement(O.a,{component:y})))}}]),t}(a.Component)),k=(n(56),document.getElementById("root"));o.a.render(r.a.createElement(i.a,null,r.a.createElement(w,null)),k),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.58640cf6.chunk.js.map