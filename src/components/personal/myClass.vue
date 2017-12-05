<template>
	<div class="container">
		<ul class="mui-table-view">
		 <li class="mui-table-view-cell classList" v-for="(item,index) in myClassList" v-on:click="showClass(index)">
		 		<!-- 班级列表 -->
		 		<span v-text="item.className" class="class-name"></span> <span v-bind:class="{'hide-btn':flag[index],'show-btn':!flag[index]}"></span>
		 		<!-- 每个班级的学生列表 -->
		 		<ul v-show="subItemShow[index]" class="stuList">
		 			<li v-for="subItem in myClassList[index].member" class="students">
		 				<router-link class="student" v-bind="{to:'/personal/personalCenter/'+subItem.id}">
		 				<span class="photo" v-bind:style="{background:'url('+subItem.img+') center center',backgroundSize:'cover'}"></span>
						<span v-text="subItem.nickname"></span><span class="job" v-text="subItem.job"></span>
						</router-link>
		 			</li>
		 		</ul>
		 </li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				myClassList:[//我所在的班级
					{
						classId:1,
						className:"营销1班",
						member:[ //成员
							{
								"id":1,
								'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg',
								"job":"新能源开发与市场推广",//从事行业
								"nickname":"夏添",//昵称
								"myClass":[],
							}
							,
							{
								"id":2,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"广告/媒体",//从事行业
								"nickname":"七色梦",//昵称
							},
							{
								"id":3,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"司法 律师",//从事行业
								"nickname":"小九老师",//昵称
							},
							{
								"id":4,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"金融业",//从事行业
								"nickname":"营销那点事儿",//昵称
							},
							{
								"id":5,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"学术研究",//从事行业
								"nickname":"阔叶林的冬季",//昵称
							},
							{
								"id":6,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"演艺娱乐",//从事行业
								"nickname":"小牧噹噹",//昵称
							},
							{
								"id":7,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"采矿 新能源",//从事行业
								"nickname":"烨翔君",//昵称
							},
							{
								"id":8,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"制造业",//从事行业
								"nickname":"Sting  zhu",//昵称
							},
							{
								"id":9,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"旅游业",//从事行业
								"nickname":"懒懒 (≧∇≦)ﾉ",//昵称
							},
							{
								"id":10,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"教育 培训",//从事行业
								"nickname":"老先生",//昵称
							},
							{
								"id":11,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"移动互联网",//从事行业
								"nickname":"菜心专访",//昵称
							},
							{
								"id":12,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"美容美发",//从事行业
								"nickname":"Miu miu",//昵称
							},
							{
								"id":13,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"服装设计",//从事行业
								"nickname":"北方女王-苗苗",//昵称
							},
							{
								"id":14,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"音乐舞蹈",//从事行业
								"nickname":"小小麻花",//昵称
							},
							{
								"id":15,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"市场经济",//从事行业
								"nickname":"腾讯ISUX",//昵称
							}
						]
					},
					{
						className:"管理3班",
						member:[ //成员
							{
								"id":1,
								'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg',
								"job":"新能源开发与市场推广",//从事行业
								"nickname":"夏添",//昵称
							}
							,
							{
								"id":2,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"广告/媒体",//从事行业
								"nickname":"七色梦",//昵称
							},
							{
								"id":3,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"司法 律师",//从事行业
								"nickname":"小九老师",//昵称
							},
							{
								"id":4,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"金融业",//从事行业
								"nickname":"营销那点事儿",//昵称
							},
							{
								"id":5,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"学术研究",//从事行业
								"nickname":"阔叶林的冬季",//昵称
							},
							{
								"id":6,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"演艺娱乐",//从事行业
								"nickname":"小牧噹噹",//昵称
							},
							{
								"id":7,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"采矿 新能源",//从事行业
								"nickname":"烨翔君",//昵称
							},
							{
								"id":8,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"制造业",//从事行业
								"nickname":"Sting  zhu",//昵称
							},
							{
								"id":9,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"旅游业",//从事行业
								"nickname":"懒懒 (≧∇≦)ﾉ",//昵称
							},
							{
								"id":10,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"教育 培训",//从事行业
								"nickname":"老先生",//昵称
							},
							{
								"id":11,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"移动互联网",//从事行业
								"nickname":"菜心专访",//昵称
							},
							{
								"id":12,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"美容美发",//从事行业
								"nickname":"Miu miu",//昵称
							},
							{
								"id":13,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"服装设计",//从事行业
								"nickname":"北方女王-苗苗",//昵称
							},
							{
								"id":14,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"音乐舞蹈",//从事行业
								"nickname":"小小麻花",//昵称
							},
							{
								"id":15,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"市场经济",//从事行业
								"nickname":"腾讯ISUX",//昵称
							}
						]
					},
					{
						className:"战略7班",
						member:[ //成员
							{
								"id":1,
								'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg',
								"job":"新能源开发与市场推广",//从事行业
								"nickname":"夏添",//昵称
							}
							,
							{
								"id":2,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"广告/媒体",//从事行业
								"nickname":"七色梦",//昵称
							},
							{
								"id":3,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"司法 律师",//从事行业
								"nickname":"小九老师",//昵称
							},
							{
								"id":4,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"金融业",//从事行业
								"nickname":"营销那点事儿",//昵称
							},
							{
								"id":5,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"学术研究",//从事行业
								"nickname":"阔叶林的冬季",//昵称
							},
							{
								"id":6,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"演艺娱乐",//从事行业
								"nickname":"小牧噹噹",//昵称
							},
							{
								"id":7,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"采矿 新能源",//从事行业
								"nickname":"烨翔君",//昵称
							},
							{
								"id":8,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"制造业",//从事行业
								"nickname":"Sting  zhu",//昵称
							},
							{
								"id":9,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"旅游业",//从事行业
								"nickname":"懒懒 (≧∇≦)ﾉ",//昵称
							},
							{
								"id":10,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"教育 培训",//从事行业
								"nickname":"老先生",//昵称
							},
							{
								"id":11,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"移动互联网",//从事行业
								"nickname":"菜心专访",//昵称
							},
							{
								"id":12,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"美容美发",//从事行业
								"nickname":"Miu miu",//昵称
							},
							{
								"id":13,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"服装设计",//从事行业
								"nickname":"北方女王-苗苗",//昵称
							},
							{
								"id":14,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"音乐舞蹈",//从事行业
								"nickname":"小小麻花",//昵称
							},
							{
								"id":15,
								"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",
								"job":"市场经济",//从事行业
								"nickname":"腾讯ISUX",//昵称
							}
						]
					}

				],
				flag:[],
				subItemShow:[]
			}
		},
		created(){
		},
		methods:{
			getStatus(){//生成当前小图标状态
				for(var i =0 ;i<this.myClassList.length;i++){
					this.flag.push(false);
					this.subItemShow.push(false);
				}

			},
			showClass(id){
				this.getStatus();
				if(this.flag[id]){
					this.flag[id]=false;
					this.subItemShow[id]=false;
				}else{
					this.flag[id]=true;
					this.subItemShow[id]=true;
				}
			},
		}
	}
</script>
<style scoped>
.classList{
	text-indent: 1em;
}
.mui-table-view-cell{
	padding:10px  0;
}
	/*点击显示班级明细*/
	.show-btn,.hide-btn{
		float: right;
		position: relative;
		display:inline-block;
		border:1px solid #fff;
		box-sizing: border-box;
		width:14px;
		height:8px;
		top:5px;
		overflow: hidden;
		right:10px;
	}
	.show-btn:before,.hide-btn:before{
		box-sizing: border-box;
		content:"";
		width:10px;
		height:10px;
		display:inline-block;
		transform:rotate(45deg);
		border:1px solid #8F8F8F;
		position: absolute;
		left: 1px;
		bottom:2px;
	}
	.hide-btn:before{
		bottom:-6px;
	}
	.class-name{
	}
	/*学员列表*/
	.stuList{
		/*padding:0;*/
	}
	.students{
		border-top:1px solid #F2F2F2;
		padding:5px 0;
	}
	.students:nth-of-type(1){
		margin-top:10px;
	}
	.student{
		color:#333333;
	}
	/*同学头像*/
	.photo{
		display:inline-block;
		vertical-align: middle;
		width:.854rem;
		height:.854rem;
		border-radius:50%;
	}
	.job{
		margin-left:10px;
		color:gray;
		font-size: 12px;
	}
</style>
