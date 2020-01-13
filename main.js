import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//生产环境
//Vue.prototype.serverURL = "https://www.fastmock.site/mock/4f1424515a291bb34874c2b49a32f141/superhero"
//开发环境
Vue.prototype.serverURL = "https://www.fastmock.site/mock/4f1424515a291bb34874c2b49a32f141/superhero"

App.mpType = 'app'

Vue.prototype.getGlobalUser = function(key){
	var userInfo = uni.getStorageSync("globalUser")
	if(userInfo !== null && userInfo !== undefined && userInfo !== ''){
		return userInfo;
	}else{
		return null;
	}
}

const app = new Vue({
    ...App
})
app.$mount()
