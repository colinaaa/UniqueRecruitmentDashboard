(window["webpackJsonpunique-recruitment-dashboard"]=window["webpackJsonpunique-recruitment-dashboard"]||[]).push([[8],{407:function(e,t,n){"use strict";var a=n(5),r=n(33),i=n(26),c=n(2),o=n(12),l=n(0),s=n.n(l),u=n(37),d=n.n(u),b=n(356),m=n(353),p=n(156),f=n(321),O=Object(p.a)(function(e){var t,n,r=e.breakpoints,i=e.spacing;return Object(f.a)({content:{minHeight:i(3),maxWidth:700,display:"flex",alignItems:"baseline"},item:(t={},Object(a.a)(t,r.down("xs"),{margin:i(.5)}),Object(a.a)(t,"margin",i(1)),t),input:(n={},Object(a.a)(n,r.down("xs"),{width:100}),Object(a.a)(n,"width",150),n)})}),g=Object(l.memo)(function(e){var t=e.onChange,n=e.code,a=e.getVerifyCode,r=O(),i=Object(l.useState)(0),c=Object(o.a)(i,2),u=c[0],p=c[1],f=Object(l.useState)(NaN),g=Object(o.a)(f,2),h=g[0],j=g[1];Object(l.useEffect)(function(){return function(){window.clearInterval(h)}},[h]);var v=function(){p(function(e){return 0===e?(window.clearInterval(h),j(NaN),0):e-1})};return s.a.createElement("div",{className:d()(r.content,r.item)},s.a.createElement(b.a,{color:"primary",onClick:function(){a(),p(60),j(window.setInterval(v,1e3))},disabled:u>0},u>0?"".concat(u,"\u79d2\u540e\u91cd\u65b0\u83b7\u53d6"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"),s.a.createElement(m.a,{label:"\u8f93\u5165\u9a8c\u8bc1\u7801",className:d()(r.item,r.input),onChange:t,value:n}))});function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}t.a=Object(r.b)(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t)},function(e){return Object(i.bindActionCreators)({getVerifyCode:c.sb},e)})(g)},413:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(441),c=n(468),o=n(414),l=Object(a.memo)(function(e){var t=e.className,n=e.onChange,a=e.value,l=e.label,s=e.disabled,u=e.disablePast,d=void 0===u||u;return r.a.createElement(o.MuiPickersUtilsProvider,{utils:i.a},r.a.createElement(c.DatePicker,{label:l,className:t,disablePast:d,value:a,onChange:n,format:"yyyy/MM/dd",disabled:s}))});t.a=l},428:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(413),c=Object(a.memo)(function(e){var t=e.onChange,n=e.disablePast,a=e.disabled,c=e.begin,o=e.end,l=e.stop,s=e.className,u=[{label:"\u5f00\u59cb\u65f6\u95f4",name:"begin",value:c},{label:"\u62a5\u540d\u622a\u6b62",name:"stop",value:l},{label:"\u7ed3\u675f\u65f6\u95f4",name:"end",value:o}];return r.a.createElement(r.a.Fragment,null,u.map(function(e,c){var o=e.label,l=e.name,u=e.value;return r.a.createElement(i.a,{label:o,value:u,onChange:t(l),disablePast:n,disabled:a,className:s,key:c})}))});t.a=c},439:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){var t=new Date(e);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),+t}},682:function(e,t,n){"use strict";n.r(t);var a=n(33),r=n(26),i=n(2),c=n(12),o=n(0),l=n.n(o),s=n(22),u=n(390),d=n(90),b=n(89),m=n(5),p=n(37),f=n.n(p),O=n(356),g=n(74),h=n(48),j=n(170),v=n(171),w=n(173),y=n(571);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var P=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).chartInstance=void 0,n.element=void 0,n.handleClick=function(e){n.props.handleClick(n.chartInstance.getElementsAtEvent(e))},n.ref=function(e){n.element=e},n}return Object(w.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.renderChart()}},{key:"componentDidUpdate",value:function(){this.updateChart()}},{key:"componentWillUnmount",value:function(){this.destroyChart()}},{key:"getCurrentDatasets",value:function(){return this.chartInstance.config.data.datasets}},{key:"updateChart",value:function(){var e=this.props,t=e.options,n=e.data;this.chartInstance.options=y.helpers.configMerge(this.chartInstance.options,t);var a=this.getCurrentDatasets(),r=n.datasets,i=n.labels;this.chartInstance.config.data={datasets:r.map(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},a[t],{},e)}),labels:i},this.chartInstance.update()}},{key:"renderChart",value:function(){var e=this.props,t=e.options,n=e.data;this.chartInstance=new y.Chart(this.element,{type:"pie",data:n,options:t})}},{key:"destroyChart",value:function(){this.chartInstance.destroy()}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.width;return l.a.createElement("canvas",{ref:this.ref,height:t,width:n,onClick:this.handleClick})}}]),t}(o.PureComponent),C=n(13),k=n(29),x=n(156),D=n(321),N=Object(x.a)(function(e){var t=e.spacing,n=e.palette,a=e.typography.button;return Object(D.a)({chart:{display:"flex",margin:t(1),width:300,height:300,verticalAlign:"top",position:"relative"},expired:{background:Object(k.a)(n.secondary.light,.1)},tooltip:{fontSize:a.fontSize},doughnut:{position:"absolute"},centerText:{marginLeft:"auto",marginRight:"auto",marginTop:128,userSelect:"none"}})}),S=n(162),I=Object(o.memo)(function(e){var t=e.data,n=t.groups,a=t.total,r=t.title,i=t.end,s=e.setViewing,u=N(),p=Object(o.useState)(""),g=Object(c.a)(p,2),h=g[0],j=g[1],v=Object(o.useState)(!1),w=Object(c.a)(v,2),y=w[0],E=w[1],x=n.find(function(e){return e.name===h}),D=x?x.steps:n.map(function(e){return e.total}),I=x?C.h:C.d,A=x?"".concat(x.name,"\u7ec4\u5404\u8f6e\u60c5\u51b5"):Object(S.a)(r),M={labels:I,datasets:[{data:D,backgroundColor:Object(k.e)(500),hoverBackgroundColor:Object(k.e)(300)}]},R={cutoutPercentage:y?50:75,maintainAspectRatio:!1,title:{display:!0,text:A},legend:{position:"bottom",labels:{boxWidth:12}}},W=Date.now()>i;return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{onClick:s,variant:"contained",color:"primary"},"\u6d4f\u89c8\u672c\u6b21\u62db\u65b0"),l.a.createElement(d.a,{className:f()(u.chart,Object(m.a)({},u.expired,W))},l.a.createElement("div",{className:u.doughnut},l.a.createElement(P,{data:M,handleClick:function(e){var t=e[0];t&&(t._chart.data.datasets[0]._meta[t._chart.id].data.forEach(function(e){return e.hidden=!1}),E(function(e){return!e}),j(function(e){return e?"":C.e[t._index]}))},options:R,width:300,height:300})),l.a.createElement(b.a,{variant:"body1",className:u.centerText},"\u603b\u8ba1\uff1a".concat(x?x.total:a,"\u4eba"))))}),A=n(352),M=n(353),R=n(669),W=n(611),F=n.n(W),T=n(94),V=n(428),z=n(407),B=Object(x.a)(function(e){var t,n,a=e.spacing,r=e.typography.button,i=e.breakpoints;return Object(D.a)({paper:{display:"flex",margin:a(1),width:300,height:300,verticalAlign:"top",position:"relative"},newButton:{alignSelf:"center",marginLeft:"auto",marginRight:"auto"},newButtonRoot:{height:"auto",width:"auto"},newIcon:{fontSize:144},tooltip:{fontSize:r.fontSize},newContainer:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0 ".concat(a(2),"px ").concat(a(2),"px")},textField:(t={width:200},Object(m.a)(t,i.down("xs"),{width:150}),Object(m.a)(t,"margin",a(1)),t),datePicker:(n={width:200},Object(m.a)(n,i.down("xs"),{width:150}),Object(m.a)(n,"margin",a(1)),n)})}),_=n(439);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var L=function(e){var t=e.getFullYear(),n=e.getMonth()+1;return t+(n<=5?"S":n>=9?"A":"C")},U=function(){var e=new Date;return{modal:!1,title:L(e),begin:e,end:e,stop:e,code:""}},J=Object(o.memo)(function(e){var t=e.disabled,n=e.enqueueSnackbar,a=e.launchRecruitment,r=e.shouldClear,i=B(),s=Object(o.useState)(U()),u=Object(c.a)(s,2),b=u[0],p=b.modal,f=b.title,g=b.begin,h=b.end,j=b.stop,v=b.code,w=u[1];Object(o.useEffect)(function(){r&&w(U())},[r]);var y,E=function(){w(function(e){return H({},e,{modal:!e.modal})})};return l.a.createElement(l.a.Fragment,null,l.a.createElement(R.a,{title:t?"\u53ea\u6709\u7ec4\u957f\u6216\u7ba1\u7406\u5458\u80fd\u53d1\u8d77\u62db\u65b0":"\u53d1\u8d77\u62db\u65b0",classes:{tooltip:i.tooltip},placement:"top"},l.a.createElement(d.a,{className:i.paper},l.a.createElement(A.a,{className:i.newButton,classes:{root:i.newButtonRoot},onClick:E,disabled:t},l.a.createElement(F.a,{color:"primary",className:i.newIcon})))),l.a.createElement(T.a,{title:"\u53d1\u8d77\u62db\u65b0",open:p,onClose:E},l.a.createElement("div",{className:i.newContainer},l.a.createElement(M.a,{label:"\u62db\u65b0\u540d\u79f0",className:i.textField,value:Object(S.a)(f),margin:"normal",disabled:!0}),l.a.createElement(V.a,{onChange:function(e){return function(t){t&&w(function(n){var a;return H({},n,(a={},Object(m.a)(a,e,t),Object(m.a)(a,"title","begin"===e?L(t):n.title),a))})}},begin:g,end:h,stop:j,className:i.datePicker}),l.a.createElement(z.a,{onChange:(y="code",function(e){var t=e.target.value;w(function(e){return H({},e,Object(m.a)({},y,t))})}),code:v}),l.a.createElement(O.a,{color:"primary",variant:"contained",onClick:function(){v&&g&&h&&j&&f?g>=j?n("\u622a\u6b62\u65f6\u95f4\u5fc5\u987b\u5927\u4e8e\u5f00\u59cb\u65f6\u95f4\uff01",{variant:"warning"}):j>=h?n("\u7ed3\u675f\u65f6\u95f4\u5fc5\u987b\u5927\u4e8e\u622a\u6b62\u65f6\u95f4\uff01",{variant:"warning"}):a({title:f,begin:Object(_.a)(g),end:Object(_.a)(h),stop:Object(_.a)(j),code:v}):n("\u8bf7\u5b8c\u6574\u586b\u5199\u4fe1\u606f\uff01",{variant:"warning"})}},"\u786e\u5b9a"))))});function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var Y=Object(a.b)(function(e,t){var n=e.user.info,a=n.isAdmin;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({disabled:!(n.isCaptain||a)},t)},function(e){return Object(r.bindActionCreators)({enqueueSnackbar:i.hb,launchRecruitment:i.tb},e)})(J),K=n(168),Q=Object(x.a)(function(e){var t,n=e.spacing,a=e.breakpoints;return Object(D.a)({left:Object(m.a)({width:"70%",margin:n(1)},a.down("xs"),{paddingTop:n(2),width:"100%",margin:0}),right:Object(m.a)({flexGrow:1,margin:n(1)},a.down("xs"),{paddingTop:n(2),margin:0}),root:(t={display:"flex",flexDirection:"row"},Object(m.a)(t,a.down("xs"),{flexDirection:"column",margin:n(1)}),Object(m.a)(t,"margin","".concat(n(3),"px ").concat(n(2),"px 0")),Object(m.a)(t,"minWidth",300),t),blocksContainer:Object(m.a)({marginTop:n(1)},a.down("xs"),{display:"flex",flexDirection:"column",alignItems:"center"}),block:{display:"inline-flex",flexDirection:"column",alignItems:"center",verticalAlign:"bottom"},paper:Object(m.a)({margin:n(2),padding:n(2),minHeight:300,minWidth:300},a.down("xs"),{width:"90%",margin:"".concat(n(1),"px auto"),padding:n(1)}),title:{userSelect:"none",marginLeft:n(1)}})}),X=Object(o.memo)(function(e){var t=e.data,n=e.setViewing,a=e.viewing,r=Q(),i=Object(o.useState)(!1),m=Object(c.a)(i,2),p=m[0],f=m[1],O=Object(o.useState)(!1),g=Object(c.a)(O,2),h=g[0],j=g[1],v=Object(K.a)(t),w=Object(K.a)(a);Object(o.useEffect)(function(){void 0!==v&&void 0!==w&&(f(v.length!==t.length),j(w!==a&&!!w))},[t,a,v,w]);return h?l.a.createElement(s.a,{to:"/data"}):l.a.createElement("div",{className:r.root},l.a.createElement("div",{className:r.left},l.a.createElement(b.a,{variant:"h4",className:r.title},"Recruitments"),l.a.createElement(u.a,{variant:"fullWidth"}),l.a.createElement("div",{className:r.blocksContainer},l.a.createElement("div",{className:r.block},l.a.createElement(Y,{shouldClear:p})),!!t.length&&t.map(function(e){return l.a.createElement("div",{key:e._id,className:r.block},l.a.createElement(I,{data:e,setViewing:(t=e.title,function(){n(t)})}));var t}))),l.a.createElement("div",{className:r.right},l.a.createElement(b.a,{variant:"h4",className:r.title},"Notifications"),l.a.createElement(u.a,{variant:"fullWidth"}),l.a.createElement(d.a,{className:r.paper},l.a.createElement("ul",null,l.a.createElement("li",null,"\u9876\u90e8\u5de5\u5177\u680f\u6709\u804a\u5929\u5ba4\u3001\u9762\u8bd5\u95ee\u9898\u3001\u5237\u65b0\u53ca\u9000\u51fa"),l.a.createElement("li",null,"shift + \u6eda\u8f6e \u53ef\u4ee5\u6a2a\u5411\u6eda\u52a8"),l.a.createElement("li",null,"\u680f\u4e0e\u680f\u5185\u9879\u76ee\u5747\u53ef\u62d6\u52a8\uff08\u727a\u7272\u4e86\u5404\u680f\u9ad8\u5ea6\u7684\u7edf\u4e00\uff09"),l.a.createElement("li",null,"\u4e0d\u80fd\u67e5\u770b\u81ea\u5df1\u8fd9\u5c4a\u7684\u5019\u9009\u4eba"),l.a.createElement("li",null,"\u5de6\u4fa7\u751c\u751c\u5708\u56fe\u5212\u6389\u7ec4\u522b\uff0c\u4e2d\u95f4\u7684\u4eba\u6570\u5e76\u4e0d\u4f1a\u51cf\u5c11"),l.a.createElement("li",null,"\u7b80\u5386\u4e0d\u5b58\u5728\u65f6\u6309\u94ae\u662f\u7981\u7528\u7684\uff0c\u4f46\u662f\u901f\u5ea6\u4ecd\u7136\u5f88\u6162"),l.a.createElement("li",null,l.a.createElement("del",null,"\u901a\u77e5\u662f\u5199\u6b7b\u7684\uff0c\u9762\u8bd5\u95ee\u9898\u4e5f\u662f"))))))});t.default=Object(a.b)(function(e){var t=e.recruitment;return{data:t.recruitments,viewing:t.viewing}},function(e){return Object(r.bindActionCreators)({setViewing:i.Pb},e)})(X)}}]);