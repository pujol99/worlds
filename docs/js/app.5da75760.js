(function(e){function n(n){for(var r,o,u=n[0],i=n[1],s=n[2],d=0,g=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(g.length)g.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var i=t[u];0!==a[i]&&(r=!1)}r&&(c.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},a={app:0},c=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=i;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function a(e,n,t,a,c,o){var u=Object(r["m"])("Welcome");return Object(r["j"])(),Object(r["b"])(u)}var c={key:0},o={class:"card-container"},u={class:"card-title"},i={class:"card-body"},s=Object(r["e"])("div",{class:"card-action"},null,-1);function l(e,n,t,a,l,d){return e.currentScene("Welcome")?(Object(r["j"])(),Object(r["d"])("div",c,[Object(r["e"])("div",o,[Object(r["e"])("div",u,[Object(r["e"])("h1",null,Object(r["n"])(e.getLabel("welcome_title")),1)]),Object(r["e"])("div",i,[Object(r["e"])("p",null,Object(r["n"])(e.getLabel("welcome_body")),1)]),s])])):Object(r["c"])("",!0)}var d=t("5530"),g=t("5502"),f={computed:Object(d["a"])({},Object(g["b"])({currentScene:"stages/isCurrentStage",getLabel:"data/getLabel"}))},p=t("d959"),b=t.n(p);const m=b()(f,[["render",l]]);var S=m,v={name:"App",components:{Welcome:S},mounted:function(){this.$store.dispatch("stages/onAppLoad")}};const j=b()(v,[["render",a]]);var O=j,L=(t("7db0"),t("d3b7"),t("b64b"),{welcome_title:["Worlds","Mons"],welcome_body:["Exploration of planets with different airplanes","Exploration of planets with different airplanes"]}),h=function(){return{languages:{ENG:0,CAT:1},language:0}},y={getLabel:function(e){return function(n){return L[n]?L[n][e.language]:"No label"}},getLanguage:function(e){return Object.keys(e.languages).find((function(n){return e.languages[n]===e.language}))}},w={setLanguage:function(e,n){var t=e.commit;t("setLanguage",n)}},x={setLanguage:function(e,n){e.language=e.languages[n]}},_={namespaced:!0,state:h,getters:y,actions:w,mutations:x},T=(t("caad"),t("2532"),function(){return{stages:["Welcome"],currentStageIndex:0,sceneLoading:!1,scene:null,renderer:null,gltfScene:null}}),I={isCurrentStage:function(e){return function(n){return e.stages[e.currentStageIndex]==n}},currentStageIsScene:function(e){return e.stages[e.currentStageIndex].includes("Scene")},isSceneLoading:function(e){return e.sceneLoading},getGLTF:function(e){return e.gltfScene},getRenderer:function(e){return e.renderer},isLastStage:function(e){return e.currentStageIndex==e.stages.length-1}},P={onAppLoad:function(e){var n=e.commit,t=e.getters;t.currentStageIsScene&&n("loadingStart")},nextStage:function(e){var n=e.commit,t=e.getters;t.isLastStage||n("nextStage"),t.currentStageIsScene&&n("loadingStart")},addGLTFScene:function(e,n){var t=e.commit;t("addToScene",n),t("setGLTFScene",n)},loadingFinish:function(e){var n=e.commit;n("removeLoading"),n("loadingEnd")}},k={nextStage:function(e){e.currentStageIndex++},setScene:function(e,n){e.scene=n},setRenderer:function(e,n){e.renderer=n},setGLTFScene:function(e,n){e.gltfScene=n},removeLoading:function(e){e.scene.remove(e.scene.scene.getObjectByName("loadingPlane"))},addToScene:function(e,n){e.scene.add(n)},loadingStart:function(e){e.sceneLoading=!0,e.sceneReporting=!1},loadingEnd:function(e){e.sceneLoading=!1}},E={namespaced:!0,state:T,getters:I,actions:P,mutations:k},F=Object(g["a"])({modules:{data:_,stages:E}}),G=t("af1e");Object(r["a"])(O).use(F).use(G["a"]).mount("#app")}});
//# sourceMappingURL=app.5da75760.js.map