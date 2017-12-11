import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

//定义要在组件间交互的数据
const state = {
	//用户在网页上进行操作的凭证信息
	tokenInfo:'',
	num:1
}

const mutations= {
	add(state,step){
		return state.num +=step;
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
});
