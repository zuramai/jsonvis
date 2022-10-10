var m=Object.defineProperty;var S=(e,t,i)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var n=(e,t,i)=>(S(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();var g=(e,t,i,s)=>{let o=document.createElementNS("http://www.w3.org/2000/svg",e);for(const l in t)o.setAttribute(l,t[l].toString());for(const l in i)o.setAttribute(l,i[l].toString());return s&&s(o),o},d=(e,t,i,s)=>{let o=document.createElement(e);for(const l in t)o.setAttribute(l,t[l].toString());for(const l in i)o.setAttribute(l,i[l].toString());return s&&s(o),o},x=()=>{let e=document.querySelector("#visualizer");e==null||e.setAttribute("width",e.clientWidth.toString()),e==null||e.setAttribute("height",e.clientHeight.toString()),console.log("resizing",e==null?void 0:e.clientWidth)},b=(e,t)=>{let i=e.getBoundingClientRect();return{x:t.clientX-i.x,y:t.clientY-i.y}},z=e=>e!==Object(e),u=class{constructor(e,t,i){n(this,"type");n(this,"location");n(this,"value");n(this,"children",[]);n(this,"el");n(this,"totalHeight",0);n(this,"gapBetweenChildren",50);n(this,"size",{width:300,height:100});this.type=e,this.location=t,this.value=i,this.el=this.getCard()}setSize(){var t;let e=300;this.type=="extension"&&(e=200),this.size={width:e,height:(t=this.el.querySelector(".object-text-wrapper").clientHeight)!=null?t:100},console.log(this.size)}updateY(e){var t;this.location.y=e,(t=this.el.querySelector("rect"))==null||t.setAttribute("y",e.toString()),this.el.querySelectorAll("foreignObject").forEach(i=>i.setAttribute("y",e.toString()))}updateSize(){var e,t,i,s;this.setSize(),(e=this.el.querySelector("rect"))==null||e.setAttribute("width",this.size.width.toString()),(t=this.el.querySelector("rect"))==null||t.setAttribute("height",this.size.height.toString()),(i=this.el.querySelector("foreignObject"))==null||i.setAttribute("width",this.size.width.toString()),(s=this.el.querySelector("foreignObject"))==null||s.setAttribute("height",this.size.height.toString())}getCard(){return g("g",{class:`card card-${this.type}`},{},t=>{let i=this.size;t.append(g("rect",{x:this.location.x,y:this.location.y,width:i.width,height:i.height,fill:"rgba(50,50,50)",rx:10,"fill-opacity":.8}),g("foreignObject",{x:this.location.x,y:this.location.y,width:i.width,height:i.height},{},s=>{s.append(this.highlight(this.value))})),this.type=="extension"&&t.append(g("foreignObject",{x:this.location.x+200-30,y:this.location.y,width:30,height:50},{},s=>{s.append(d("button",{class:"btn btn-transparent btn-toggle-view"},{},o=>{o.innerHTML="X"}))}))})}highlight(e){let t=d("ul",{class:"object-text-wrapper"});switch(typeof e){case"object":for(const s in e){let o=e[s];if(typeof o!="object"){let l=d("li",{class:"object-kv"},{},r=>{let h=d("span",{class:"object-key"});h.innerText=s+": ";let a=d("span",{class:"object-value"});a.innerText=o,r.append(h,a)});t.append(l)}}break;case"string":let i=d("li",{class:"string"},{},s=>{s.innerHTML=e});t.append(i);break}return t}addChildren(e){this.children.push(e)}},E=class{constructor(e,t){n(this,"svg");n(this,"cards");n(this,"data");n(this,"rootNode",null);n(this,"viewbox",{x:0,y:0,w:0,h:0});this.svg=e,this.cards=e.querySelector("#cards"),this.data=t,this.watchSize(),this.init(),this.draw(),this.events()}init(){if(Array.isArray(this.data)){this.rootNode=new u("empty",{x:200,y:200},"");return}this.rootNode=new u("object",{x:200,y:200},this.data);let e=100;const t=(i,s)=>{if(typeof i.value=="object")for(const o in i.value){if(z(i.value[o]))continue;let l=new u("extension",{x:i.location.x+i.size.width+e,y:i.location.y},o);i.addChildren(l),t(l,i.value[o])}if(Array.isArray(s))s==null||s.forEach(o=>{let l=new u("object",{x:i.location.x+i.size.width+e,y:i.location.y},o);i.addChildren(l),this.cards.append(l.el),t(l)});else if(s){let o=new u("object",{x:i.location.x+i.size.width+e,y:i.location.y},s);i.addChildren(o),this.cards.append(o.el),t(o)}};t(this.rootNode),this.draw()}recalculatePosition(){const e=t=>{let i=t.children.length,o=t.children.reduce((a,c)=>a+c.size.height,0)+t.gapBetweenChildren*(i-1),l=t.location.y+t.size.height/2-o/2;t.totalHeight=o;let r=0,h=0;t.children.forEach((a,c)=>{let w=l+o*(c/i);a.updateY(w),e(a);let v=a.totalHeight||a.size.height;r+=v,h=v>h?v:h,t.gapBetweenChildren=h+50}),r>t.totalHeight&&(t.totalHeight=r)};e(this.rootNode),e(this.rootNode),this.drawLine(),console.log(this.rootNode)}draw(){const e=document.getElementById("cards");e.innerHTML="";const t=(i=null)=>{i==null&&(i=this.rootNode),this.cards.append(i.el),i.updateSize(),i.children.forEach(s=>{t(s)}),console.log("draw")};t(this.rootNode),this.recalculatePosition()}drawLine(){const e=document.getElementById("lines");e.innerHTML="";const t=i=>{i.children.forEach(s=>{let o=i.location.x+i.size.width,l=i.location.y+i.size.height/2,r=s.location.y+s.size.height/2,h=s.location.x-o,a=l-r,c;i.children.length===1?c=`M${o},${l} L${s.location.x},${r}`:c=`
                        M${o},${l}
                        Q${o+h/2},${l} ${o+h/2},${l+a*1/3*-1}
                        Q${s.location.x-h/2},${r} ${s.location.x},${r}
                    `;let w=g("path",{d:c,stroke:"#ccc","stroke-opacity":".3","stroke-width":3,fill:"none"});e.append(w),t(s)})};t(this.rootNode)}watchSize(){window.addEventListener("resize",x),x(),this.viewbox.w=~~this.svg.getAttribute("width"),this.viewbox.h=~~this.svg.getAttribute("height"),this.updateViewbox()}updateData(e){this.data=e,this.init(),this.draw(),this.recalculatePosition()}updateViewbox(){this.svg.setAttribute("viewBox",`${this.viewbox.x} ${this.viewbox.y} ${this.viewbox.w} ${this.viewbox.h}`)}events(){this.draggingEvent(),this.zoomEvent()}zoomEvent(){window.addEventListener("wheel",e=>{let t=300;e.preventDefault(),this.viewbox.w=this.viewbox.w+e.deltaY<t?t:this.viewbox.w+e.deltaY,this.viewbox.h=this.viewbox.h+e.deltaY<t?t:this.viewbox.h+e.deltaY,this.updateViewbox(),console.log("scrolling",e.deltaY)})}draggingEvent(){let e=!1,t={x:this.viewbox.x,y:this.viewbox.y},i={x:0,y:0};this.svg.addEventListener("mousedown",s=>{i=b(this.svg,s),e=!0,t={x:this.viewbox.x,y:this.viewbox.y}}),this.svg.addEventListener("mouseup",()=>{e=!1}),this.svg.addEventListener("mousemove",s=>{if(!e)return;let o=b(this.svg,s);this.viewbox.x=t.x-(o.x-i.x),this.viewbox.y=t.y-(o.y-i.y),this.updateViewbox()})}},A=(e,t)=>new E(e,t);let f={};const p=()=>{const e=document.querySelector("#the-editor");return f=JSON.parse(e.value),f};p();const N=document.querySelector("#visualizer"),L=A(N,f),y=document.querySelector("#render");y==null||y.addEventListener("click",()=>{L.updateData(p())});