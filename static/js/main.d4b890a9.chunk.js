(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=a(1),l=a(2),u=a(4),i=a(3),m=a(5),d=(a(6),[{top:"-8px",left:"-8px",width:"42px"},{top:"10px",left:"-70px",width:"92px"},{top:"-10px",left:"-60px",width:"65px"},{top:"0px",left:"-17px",width:"31px"},{top:"-48px",left:"-80px",width:"166px"},{top:"34px",left:"54px",width:"81px"},{},{top:"-40px",left:"-50px",width:"85px"}]),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){return a.props.setEndGame()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.number,a=e.isTarget;return r.a.createElement(n.Fragment,null,7!==t?r.a.createElement("img",{src:"./images/img_".concat(t,".png"),style:d[t-1],alt:"icon"}):null,r.a.createElement("div",{className:"hole"},a===t&&r.a.createElement("div",{onClick:this.handleClick,className:"target"})))}}]),t}(n.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.cells,n=t.isTarget,c=t.setEndGame;return r.a.createElement("div",{className:"row"},Object.values(a).map(function(t,a){return t?r.a.createElement("div",{key:a,className:"cell",onMouseEnter:e.props.handleFocusEnter(t),onMouseLeave:e.props.handleFocusLeave},r.a.createElement(p,{key:a,number:t,isTarget:n,setEndGame:c})):r.a.createElement("div",{className:"cell",key:a})}))}}]),t}(n.Component),f=["\u042f \u043d\u0435 \u0441\u0435\u0447\u0438\u043d, \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u0445\u043e\u0436","\u042f \u0437\u0430\u043d\u044f\u0442","\u041d\u0438\u043a\u043e\u0433\u043e \u043d\u0435\u0442 \u0434\u043e\u043c\u0430","\u0421\u0435\u0447\u0438\u043d\u0430 \u043d\u0435\u0442!","\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u044f \u0434\u0430\u043c \u043f\u0438\u0441\u044c\u043c\u0435\u043d\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435!","\u041d\u0435 \u043c\u043e\u0433\u0443 \u043f\u0440\u0438\u0439\u0442\u0438, \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c \u0433\u0440\u0430\u0444\u0438\u043a\u0438","\u042f \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0441\u044c \u0441 \u041c\u0435\u0434\u0432\u0435\u0434\u0435\u0432\u044b\u043c"],g=8,v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={endGame:!1,cellOnFocus:null,numberOfTargets:g,currentTarget:Math.floor(Math.random()*g+1),message:f[Math.floor(Math.random()*f.length)],scheme:[{0:1,1:!1,2:!1,3:!1,4:2},{0:!1,1:!1,2:3,3:!1,4:!1},{0:!1,1:!1,2:!1,3:!1,4:4},{0:!1,1:!1,2:5,3:!1,4:!1},{0:6,1:!1,2:!1,3:!1,4:!1},{0:!1,1:!1,2:7,3:!1,4:8}]},a.handleFocusEnter=function(e){return function(t){a.setState({cellOnFocus:e})}},a.handleFocusLeave=function(){a.setState({cellOnFocus:null})},a.getRowOnFocus=function(e){switch(e){case 1:return[1,6];case 2:return[2,4,8];case 3:return[3,5,7];default:return[]}},a.getRandomNumber=function(){for(var e=a.state,t=e.cellOnFocus,n=e.currentTarget,r=function(){return Math.floor(Math.random()*a.state.numberOfTargets+1)},c=r(),s=a.getRowOnFocus(t);c===n||s.indexOf(c)>=0;)c=r();return c},a.getRandomMessage=function(){for(var e=function(){return f[Math.floor(Math.random()*f.length)]},t=e();t===a.state.message;)t=e();return t},a.setEndGame=function(){a.setState({endGame:!0})},a.restartGame=function(){a.setState({endGame:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.gameEnd||setInterval(function(){e.setState({message:e.getRandomMessage(),currentTarget:e.getRandomNumber()})},2e3)}},{key:"render",value:function(){var e=this,t=this.state,a=t.message,n=t.scheme,c=t.currentTarget,s=t.endGame;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__container"},s?r.a.createElement("div",{className:"end-game"},r.a.createElement("div",{className:"end-game__content"},r.a.createElement("h3",{className:"end-game__text"},"Congratulations, you won!"),r.a.createElement("button",{className:"end-game__btn",onClick:this.restartGame},"Start again"))):r.a.createElement("div",{className:"grid"},n.map(function(t,a){return r.a.createElement(h,{key:a,cells:t,isTarget:c,setEndGame:e.setEndGame,handleFocusEnter:e.handleFocusEnter,handleFocusLeave:e.handleFocusLeave})}),r.a.createElement("div",{className:"message"},a),r.a.createElement("div",{className:"footer"},r.a.createElement("button",{className:"button",style:{backgroundColor:"#B78B5C"}},"\u0414\u0430 \u043e\u043d \u043d\u0435 \u0443\u043b\u043e\u0432\u0438\u043c!")))))}}]),t}(n.Component);s.a.render(r.a.createElement(v,null),document.getElementById("root"))},6:function(e,t,a){},9:function(e,t,a){e.exports=a(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.d4b890a9.chunk.js.map