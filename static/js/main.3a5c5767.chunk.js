(this["webpackJsonpimages-browser"]=this["webpackJsonpimages-browser"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),s=(a(14),a(1)),o=a(2),l=a(4),u=a(3),m=(a(15),a(16),a(5)),g=a.n(m),h=a(6);function p(e){var t=d(e,"entry");return t?t.map((function(e){return function(e){var t=d(e,"title")[0],a=d(e,"id")[0],n=d(e,"published")[0],r=function(e){var t=d(e,"name")[0],a=d(e,"uri")[0],n=d(e,"flickr:nsid")[0],r=d(e,"flickr:buddyicon")[0];return{name:t,uri:a,id:n,avatar:r}}(d(e,"author")[0]),i=(s=e,s.match(/(?<=<link rel="enclosure")(.|\n)*?(?=\/>)/g)[0].match(/(?<=href=")(.|\n)*?(?=")/g)[0]),c=function(e){return e.match(/(?<=<category term=")(.|\n)*?(?=")/g)}(e);var s;return{title:t,id:a,published:n,author:r,url:i,tags:c}}(e)})):[]}function d(e,t){return e.match(new RegExp("(?<=<".concat(t,">)(.|\n)*?(?=</").concat(t,">)"),"g"))}var f="https://thingproxy.freeboard.io/fetch/",v="https://flickr.com/services/feeds/photos_public.gne?";function b(e){return E.apply(this,arguments)}function E(){return(E=Object(h.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.tag,e.next=3,fetch("".concat(f).concat(v,"tags=").concat(a)).then((function(e){return e.text()}));case 3:return n=e.sent,e.abrupt("return",p(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("input",{type:"range",style:{width:"30px",cursor:"pointer"},min:"0",max:"1",value:this.props.checked?1:0,onChange:function(){},onClick:this.props.toggle})}}]),a}(r.a.Component),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-criteria"},r.a.createElement("div",{className:"search-criterium"},"Search Images by Tag:",r.a.createElement("input",{type:"text",value:this.props.tag,onChange:function(t){return e.props.tagChange(t.target.value)},className:"textblock"}),this.props.isLoading&&r.a.createElement("img",{src:"https://cdn.lowgif.com/medium/d35d94c490e598e3-loading-gif-transparent-loading-gif.gif",width:30})),r.a.createElement("div",{className:"search-criterium"},"Image Size:",r.a.createElement("input",{type:"range",id:"imageSize",name:"imageSize",min:"100",max:"500",value:this.props.imageSize,onChange:function(t){return e.props.imageSizeChange(t.target.value)}})),r.a.createElement("div",{className:"search-criterium"},"Details Mode:",r.a.createElement(k,{checked:this.props.detailsMode,toggle:function(){return e.props.detailsModeChange(!e.props.detailsMode)}})))}}]),a}(r.a.Component),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.image,n=t.size,i=a.tags.map((function(t){return r.a.createElement("span",{className:"tag",key:t,onClick:function(t){return e.props.onTagChange(t.target.innerText)}},t," ")}));return r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("a",{href:a.url,target:"_blank"},r.a.createElement("img",{src:a.url,width:n})),this.props.detailsMode&&r.a.createElement("div",{className:"details-section"},r.a.createElement("div",{className:"image-title"},a.title),r.a.createElement("div",null,r.a.createElement("span",{className:"image-field-name"},"Author:")," ",r.a.createElement("a",{href:a.author.uri,target:"_blank"},a.author.name)),r.a.createElement("div",null,r.a.createElement("span",{className:"image-field-name"},"Tags:")," ",i),r.a.createElement("div",null,r.a.createElement("span",{className:"image-field-name"},"Published:")," ",a.published.slice(0,10))))}}]),a}(r.a.Component),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.images.map((function(t){return r.a.createElement(j,{image:t,key:t.id,size:e.props.imageSize,detailsMode:e.props.detailsMode,onTagChange:e.props.onTagChange})})),a=this.props.detailsMode?"details-mode":"tile-mode";return r.a.createElement("div",null,r.a.createElement("div",{className:a},t))}}]),a}(r.a.Component),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={tag:"",isLoading:!1,images:[],detailsMode:!1,imageSize:100},e.tagChange=function(t){e.setState({tag:t,isLoading:!0}),e.onSearchTask&&clearTimeout(e.onSearchTask),e.onSearchTask=setTimeout(e.onSearch,1e3)},e.onSearch=Object(h.a)(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e.state);case 2:a=t.sent,e.setState({images:a,isLoading:!1});case 4:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,{tag:this.state.tag,isLoading:this.state.isLoading,tagChange:this.tagChange,imageSize:this.state.imageSize,imageSizeChange:function(t){return e.setState({imageSize:t})},detailsMode:this.state.detailsMode,detailsModeChange:function(t){return e.setState({detailsMode:t})}}),r.a.createElement(O,{images:this.state.images,imageSize:this.state.imageSize,detailsMode:this.state.detailsMode,onTagChange:this.tagChange}))}}]),a}(r.a.Component),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.3a5c5767.chunk.js.map