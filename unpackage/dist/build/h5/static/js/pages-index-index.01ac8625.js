(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{2082:function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-swiper",{staticClass:"carousel",attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},t._l(t.carouselList,function(t){return i("v-uni-swiper-item",{key:t.id},[i("v-uni-image",{staticClass:"carousel",attrs:{src:t.image,"lazy-load":"true"}})],1)}),1),i("v-uni-view",{staticClass:"page-block super-hot"},[i("v-uni-view",{staticClass:"hot-title-wapper"},[i("v-uni-image",{staticClass:"hot-ico",attrs:{src:"../../static/icons/hot.png"}}),i("v-uni-view",{staticClass:"hot-title"},[t._v("热门影片")])],1)],1),i("v-uni-scroll-view",{staticClass:"page-block hot",attrs:{"scroll-x":"true"}},t._l(t.hotSuperheroList,function(e){return i("v-uni-view",{key:e.id,staticClass:"single-poster"},[i("v-uni-view",{staticClass:"poster-wapper"},[i("v-uni-navigator",{attrs:{url:"../movie/movie?trailerId="+e.id}},[i("v-uni-image",{staticClass:"poster",attrs:{src:e.cover,"lazy-load":"true"}}),i("v-uni-view",{staticClass:"movie-name"},[t._v(t._s(e.name))]),i("trailerStars",{attrs:{innerScore:e.score,showNum:"1"}})],1)],1)],1)}),1),i("v-uni-view",{staticClass:"page-block super-hot"},[i("v-uni-view",{staticClass:"hot-title-wapper"},[i("v-uni-image",{staticClass:"hot-ico",attrs:{src:"../../static/icons/yugao.png"}}),i("v-uni-view",{staticClass:"hot-title"},[t._v("热门预告")])],1)],1),i("v-uni-view",{staticClass:"hot-movie page-block"},t._l(t.hottrailerList,function(e){return i("v-uni-video",{key:e.id,staticClass:"hot-movie-single",attrs:{id:e.id,"data-playingIndex":e.id,src:e.trailer,poster:e.poster,controls:!0},on:{play:function(e){arguments[0]=e=t.$handleEvent(e),t.meIsPlaying.apply(void 0,arguments)}}})}),1),i("v-uni-view",{staticClass:"page-block super-hot"},[i("v-uni-view",{staticClass:"hot-title-wapper"},[i("v-uni-image",{staticClass:"hot-ico",attrs:{src:"../../static/icons/guess-u-like.png"}}),i("v-uni-view",{staticClass:"hot-title"},[t._v("猜你喜欢")])],1)],1),t._l(t.guessULike,function(e,a){return i("v-uni-view",{key:e.id,staticClass:"page-block guess-u-like"},[i("v-uni-view",{staticClass:"single-like-movie"},[i("v-uni-navigator",{attrs:{url:"../movie/movie?trailerId="+e.id}},[i("v-uni-image",{staticClass:"like-movie",attrs:{src:e.cover,"lazy-load":"true"}})],1),i("v-uni-navigator",{attrs:{url:"../movie/movie?trailerId="+e.id}},[i("v-uni-view",{staticClass:"movie-desc"},[i("v-uni-view",{staticClass:"movie-title"},[t._v(t._s(e.name))]),i("trailerStars",{attrs:{innerScore:e.score,showNum:"0"}}),i("v-uni-view",{staticClass:"movie-info"},[t._v(t._s(e.basicInfo))]),i("v-uni-view",{staticClass:"movie-info"},[t._v(t._s(e.releaseDate))])],1)],1),i("v-uni-view",{staticClass:"movie-oper",attrs:{"data-index":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.praiseMe.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"praise-ico",attrs:{src:"../../static/icons/praise.png"}}),i("v-uni-view",{staticClass:"praise-me"},[t._v("赞一下")]),i("v-uni-view",{staticClass:"praise-me animation-opacity",attrs:{animation:t.animationDataArr[a]}},[t._v("+1")])],1)],1)],1)})],2)},n=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return n}),i.d(e,"a",function(){return a})},"3eb5":function(t,e,i){"use strict";i.r(e);var a=i("2082"),o=i("e746");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("a303");var s,r=i("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"4c906c5e",null,!1,a["a"],s);e["default"]=c.exports},"3ee7":function(t,e,i){"use strict";var a=i("9260"),o=i.n(a);o.a},5982:function(t,e,i){var a=i("c38b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("e76f23ec",a,!0,{sourceMap:!1,shadowMode:!1})},"8c74":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".movie-score-wapper[data-v-04a35d0e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.star-ico[data-v-04a35d0e]{width:%?20?%;height:%?20?%;margin-top:%?6?%}.movie-score[data-v-04a35d0e]{font-size:12px;color:grey;margin-left:%?8?%}",""])},9260:function(t,e,i){var a=i("8c74");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("26a10430",a,!0,{sourceMap:!1,shadowMode:!1})},a21b:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("eb2f")),n={data:function(){return{carouselList:[],hotSuperheroList:[],hottrailerList:[],guessULike:[],animationData:{},animationDataArr:[{},{},{},{},{}]}},onUnload:function(){this.animation={},this.animationDataArr=[{},{},{},{},{}]},onPullDownRefresh:function(){this.refresh()},onHide:function(){this.videoContext&&this.videoContext.pause()},onLoad:function(){var t=this;this.animation=uni.createAnimation(),uni.request({url:t.serverURL+"/index/carousel/list",method:"POST",success:function(e){200==e.data.status&&(t.carouselList=e.data.data)}}),uni.request({url:t.serverURL+"/index/movie/hot?type=superhero",method:"POST",success:function(e){200==e.data.status&&(t.hotSuperheroList=e.data.data)}}),uni.request({url:t.serverURL+"/index/movie/hot?type=trailer",method:"POST",success:function(e){200==e.data.status&&(t.hottrailerList=e.data.data.slice(0,4))}}),this.refresh()},methods:{refresh:function(){var t=this;uni.showLoading({mask:!0}),uni.showNavigationBarLoading(),uni.request({url:t.serverURL+"/index/guessULike",method:"POST",success:function(e){200==e.data.status&&(t.guessULike=e.data.data)},complete:function(){uni.hideLoading(),uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}})},praiseMe:function(t){var e=t.currentTarget.dataset.index;this.animation.translateY(-60).opacity(1).step({duration:400}),this.animationData=this.animation,this.animationDataArr[e]=this.animationData.export(),setTimeout(function(){this.animation.translateY(0).opacity(0).step({duration:0}),this.animationData=this.animation,this.animationDataArr[e]=this.animationData.export()}.bind(this),500)},meIsPlaying:function(t){var e=this,i="";t&&(i=t.currentTarget.dataset.playingindex,e.videoContext=uni.createVideoContext(i));for(var a=e.hottrailerList,o=0;o<a.length;o++){var n=a[o].id;n!=i&&uni.createVideoContext(n).pause()}}},components:{trailerStars:o.default}};e.default=n},a303:function(t,e,i){"use strict";var a=i("5982"),o=i.n(a);o.a},aaa6:function(t,e,i){"use strict";i.r(e);var a=i("c4f2"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},c38b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".carousel[data-v-4c906c5e]{width:100%;height:%?440?%;background-color:#eee}\r\n/* 热门超英 */.super-hot[data-v-4c906c5e]{margin-top:%?12?%;padding:%?20?%}.hot-title-wapper[data-v-4c906c5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.hot-ico[data-v-4c906c5e]{width:%?30?%;height:%?30?%;margin-top:%?15?%}.hot-title[data-v-4c906c5e]{font-size:20px;margin-left:%?20?%;font-weight:700}.hot[data-v-4c906c5e]{width:100%;white-space:nowrap}.single-poster[data-v-4c906c5e]{display:inline-block;margin-left:%?20?%}.poster-wapper[data-v-4c906c5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.poster[data-v-4c906c5e]{width:%?200?%;height:%?270?%;background-color:#eee}.movie-name[data-v-4c906c5e]{width:%?200?%;margin-top:10uox;font-size:14px;font-weight:700;\r\n\t/* 省略 */white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r\n/* 热门预告 */.hot-movie[data-v-4c906c5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?20?% %?20?%}.hot-movie-single[data-v-4c906c5e]{width:%?350?%;height:%?220?%;margin-top:%?10?%;background-color:#000}\r\n/* 猜你喜欢 */.guess-u-like[data-v-4c906c5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.single-like-movie[data-v-4c906c5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?30?% %?20?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.like-movie[data-v-4c906c5e]{width:%?180?%;height:%?240?%;border-radius:3%;background-color:#eee}.movie-desc[data-v-4c906c5e]{width:%?340?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.movie-title[data-v-4c906c5e]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.movie-info[data-v-4c906c5e]{color:grey;font-size:14px}\r\n/* 点赞 */.movie-oper[data-v-4c906c5e]{width:%?140?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-left:dashed 2px #dbdbdb}.praise-ico[data-v-4c906c5e]{width:%?40?%;height:%?40?%;-webkit-align-self:center;align-self:center}.praise-me[data-v-4c906c5e]{font-size:14px;color:#feae2a;-webkit-align-self:center;align-self:center}.animation-opacity[data-v-4c906c5e]{font-weight:700;opacity:0}",""])},c4f2:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("e814")),n={name:"trailerStars",data:function(){return{yellowScore:0,greyScore:5}},props:{innerScore:0,showNum:0},created:function(){var t=0;this.innerScore&&(t=this.innerScore);var e=(0,o.default)(t/2);this.greyScore=5-e,this.yellowScore=e}};e.default=n},d48d:function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"movie-score-wapper"},[t._l(t.yellowScore,function(t){return i("v-uni-image",{key:"yellow"+t,staticClass:"star-ico",attrs:{src:"/static/icons/star-yellow.png"}})}),t._l(t.greyScore,function(t){return i("v-uni-image",{key:"grey"+t,staticClass:"star-ico",attrs:{src:"/static/icons/star-gray.png"}})}),1==t.showNum?i("v-uni-view",{staticClass:"movie-score"},[t._v(t._s(t.innerScore))]):t._e()],2)},n=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return n}),i.d(e,"a",function(){return a})},e746:function(t,e,i){"use strict";i.r(e);var a=i("a21b"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},eb2f:function(t,e,i){"use strict";i.r(e);var a=i("d48d"),o=i("aaa6");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("3ee7");var s,r=i("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"04a35d0e",null,!1,a["a"],s);e["default"]=c.exports}}]);