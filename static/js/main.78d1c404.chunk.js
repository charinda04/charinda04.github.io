(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(7),l=t.n(r),s=(t(15),t(1)),c=t(2),i=t(4),u=t(3),m=t(5),d=t(8),p=t.n(d),h=(t(16),t(17),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={days:0,hours:0,min:0,sec:0},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){var a=e.calculateCountdown(e.props.date);a?e.setState(a):e.stop()},1e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"calculateCountdown",value:function(e){var a=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(a<=0)return!1;var t={years:0,days:0,hours:0,min:0,sec:0,millisec:0};return a>=31557600&&(t.years=Math.floor(a/31557600),a-=365.25*t.years*86400),a>=86400&&(t.days=Math.floor(a/86400),a-=86400*t.days),a>=3600&&(t.hours=Math.floor(a/3600),a-=3600*t.hours),a>=60&&(t.min=Math.floor(a/60),a-=60*t.min),t.sec=a,t}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"addLeadingZeros",value:function(e){for(e=String(e);e.length<2;)e="0"+e;return e}},{key:"render",value:function(){var e=this.state;return o.a.createElement("div",{className:"Countdown"},o.a.createElement("h1",null,"days until the 1st stage of my site"),o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",null,this.addLeadingZeros(e.days)),o.a.createElement("span",null,1===e.days?"Day":"Days"))),o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",null,this.addLeadingZeros(e.hours)),o.a.createElement("span",null,"Hours"))),o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",null,this.addLeadingZeros(e.min)),o.a.createElement("span",null,"Min"))),o.a.createElement("span",{className:"Countdown-col"},o.a.createElement("span",{className:"Countdown-col-element"},o.a.createElement("strong",null,this.addLeadingZeros(e.sec)),o.a.createElement("span",null,"Sec"))))}}]),a}(n.Component));h.defaultProps={date:new Date};var w=h,f=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=new Date,a=11===e.getMonth()&&e.getDate()>23?e.getFullYear()+1:e.getFullYear();return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"This page is under construction"),o.a.createElement("a",{className:"App-link",href:"https://www.linkedin.com/in/charinda-dissanayake/",target:"_blank",rel:"noopener noreferrer"},"Contact Me"),o.a.createElement(w,{date:"".concat(a,"-05-08T00:00:00")})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},9:function(e,a,t){e.exports=t(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.78d1c404.chunk.js.map