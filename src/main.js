/*引入vue*/
import Vue from "vue";

/*引入根组件*/
import App from "./App.vue";

/*引入vue-router*/
import VueRouter from "vue-router";
Vue.use(VueRouter);

/*引入vue-resource*/
import VueResource from "vue-resource";
Vue.use(VueResource);

/*引入momentjs时间格式化*/
import moment from "moment";

/*定义全局时间格式化过滤器*/
Vue.filter("dateformat",function(input,dateformatStr){
	return moment(input).format(dateformatStr);
});

/*引入vue-preview(图片预览)*/
import VuePreview from "vue-preview";
Vue.use(VuePreview);

/*引入flexible.js(rem适配)*/
import "../statics/js/flexible.js";

/*导入路由*/
import courseList from "./components/course/courseList.vue";//课程列表
import courseInfo from "./components/course/courseInfo.vue";//课程详情
import myCourse from "./components/course/myCourse.vue";//我的课桌
import personalCenter from "./components/personal/personalCenter.vue";//个人中心
import personalInfo from "./components/personal/personalInfo.vue";//个人信息
import learningRecord from "./components/personal/learningRecord.vue";//学习记录
import myClass from "./components/personal/myClass.vue";//我的班级
import articleList from "./components/fuli/article.vue";//轻友福利文章列表

/*实例化vue-router*/
var router = new VueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{
			path:'/',redirect:"/course/courseList",
		},
		{
			path:'/course/courseList',
			component:courseList,
			name:"全部课程",
			meta:{
				title:"全部课程"
			}
		},
		{
			path:'/course/courseInfo/:courseId',
			component:courseInfo
		},
		{
			path:'/course/myCourse',
			component:myCourse,
			name:"我的课桌",
			meta:{
				title:"我的课桌"
			}
		},
		{
			path:'/personal/personalCenter/:studentId',
			component:personalCenter,
			name:"个人中心",
			meta:{
				title:"个人中心"
			}
		},
		{
			path:'/personal/personalInfo/:personId',
			component:personalInfo,
			name:"个人信息",
			meta:{
				title:"个人信息"
			}
		},
		{
			path:'/personal/learningRecord',
			component:learningRecord,
			name:"学习记录",
			meta:{
				title:"学习记录"
			}
		},
		{
			path:'/personal/myClass',
			component:myClass,
			name:"我的班级",
			meta:{
				title:"我的班级"
			}
		},
		{
			path:'/fuli/articleList',
			component:articleList,
			name:"轻友福利",
			meta:{
				title:"轻友福利"
			}
		}
	]
});
// vue中不同组件生成不同的title
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
	document.title = to.meta.title
	}
	next()
})

/*引入mint-ui*/
import MintUi from "mint-ui";
/*引入mint-ui样式*/
import "../node_modules/mint-ui/lib/style.min.css";
Vue.use(MintUi);

/*引入mui样式*/
import "../statics/mui/css/mui.css";

/*引入全局css样式*/
import "../statics/css/site.css";

/*创建vue实例对象*/
var vm = new Vue({
	el:"#app",
	data:{},
	methods:{},
	router:router,
	render:c=>c(App)
});

