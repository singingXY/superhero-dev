(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meFace-meFace"],{"7c4e":function(e,t,i){"use strict";i.r(t);var a=i("edfb"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},a150:function(e,t,i){var a=i("f64c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("39317a77",a,!0,{sourceMap:!1,shadowMode:!1})},b5e1:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page page-fill"},[i("v-uni-view",{staticClass:"pending-wapper"},[i("v-uni-image",{staticClass:"pending-face",attrs:{id:"face",src:e.tempFace,mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"notice"},[i("v-uni-view",{staticClass:"notice-words"},[e._v("* 请选择等比宽高的图片上传")])],1),i("v-uni-view",{staticClass:"footer-operator"},[i("v-uni-view",{staticClass:"operator-words",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changePendingFace.apply(void 0,arguments)}}},[e._v("重新选择")]),i("v-uni-view",{staticClass:"operator-words",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.upload.apply(void 0,arguments)}}},[e._v("确认上传")])],1)],1)},o=[];i.d(t,"b",function(){return n}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return a})},bfec:function(e,t,i){"use strict";i.r(t);var a=i("b5e1"),n=i("7c4e");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("f275");var r,c=i("f0c5"),d=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"29bd0a41",null,!1,a["a"],r);t["default"]=d.exports},edfb:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{tempFace:""}},onLoad:function(e){var t=e.tempFilePath;this.tempFace=t},methods:{changePendingFace:function(){var e=this;uni.chooseImage({count:1,success:function(t){var i=t.tempFilePaths[0];e.tempFace=i}})},upload:function(){var e=this,t=e.getGlobalUser("globalUser");uni.showLoading({mask:!0,title:"上传中……"}),t.faceImages=e.tempFace;var i=t;uni.setStorageSync("globalUser",i),uni.navigateBack({delta:1}),uni.hideLoading()}}};t.default=a},f275:function(e,t,i){"use strict";var a=i("a150"),n=i.n(a);n.a},f64c:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".page-fill[data-v-29bd0a41]{width:100%;height:100%;position:absolute;background:#000}.pending-wapper[data-v-29bd0a41]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?40?%}.pending-face[data-v-29bd0a41]{width:%?600?%;height:%?600?%}.notice[data-v-29bd0a41]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.notice-words[data-v-29bd0a41]{width:%?600?%;color:grey;font-size:13px;margin-top:%?30?%}\n\n/* 底部 */.footer-operator[data-v-29bd0a41]{position:fixed;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;justify-content:space-around;width:100%;padding:%?30?%;border-top:solid 1p #515050x}.operator-words[data-v-29bd0a41]{color:#e8e5e5;font-size:16px;width:%?200?%}",""])}}]);