<template>
	<div>
		<!-- 我的课桌 -->
		<div class="course">
			<!-- 表头 -->
			<div class="myCourseTitle">
				<ul>
					<li v-bind:class="{'is-selected':item.status}" v-for="(item,index) in courseTitleList" v-on:click="checked(index)">
						<span>{{item.title}}</span>
					</li>
				</ul>
			</div>
			<!-- 我的课程列表 -->
			<div class="course-list">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media" v-for="item in courseList">
						<router-link class="learning-link" to="/course/courseInfo">
							<img class="mui-media-object mui-pull-left" src="../../../statics/imgs/course01.jpg">
							<div class="mui-media-body">
								<div class="course-name">{{item.courseName}}</div>
								<span class="author">{{item.author}}</span>
								<div class="learn">
									<span class="date">2017-11-29</span>
									<button class="learn-btn">去听课</button>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				courseTitleList:[//顶部列表表头
					{
						title:"精读",
						status:true
					},
					{
						title:"实践",
						status:false
					}
				],
				courseList:[
					{
						courseName:'卓有成效的管理者-第六章第第六章第第六章第第六章第第六章第...',
						author:'包政'
					},
					{
						courseName:'卓有成效的管理者-第六章第六章六章六章六章',
						author:'包政'
					},
					{
						courseName:'卓有成效的管理者-第六章第六章六章六章',
						author:'包政'
					}
				]
			}
		},
		methods:{
			/*切换已买课程列表*/
			checked(id){
				this.courseTitleList.forEach((item)=>{
					item.status=false;
				})
				this.courseTitleList[id].status=true;
			}
		},
		created(){
		},
		components:{
		}
	}
</script>
<style scoped>
/*顶部表头样式*/
.myCourseTitle{
	height:45px;
	line-height: 45px;
	font-size: 14px;
	/*background-color: green;*/
}
.myCourseTitle ul li {
	float: left;
	width:50%;
	text-align: center;
	border-bottom:1px solid #E3E3E3;
	height:45px;
}
.myCourseTitle ul li span {
	padding:0 12px;
	display:inline-block;
	height:45px;
}
.myCourseTitle ul li.is-selected span {
	border-bottom:2px solid #ff9800;
	color:#ff9800;
}


/*课程列表 div*/
.mui-table-view-cell:after{
	left:0px;
}
/*课程列表ul*/
.mui-table-view{
	background-color: #FFFFFF;
}
.mui-table-view .mui-media-object{
	max-width: 200px;
	height:2.133333333333333rem;/*80px*/
}
.mui-media-body{
	position: relative;
}
/*作者*/
.author{
	position: absolute;
	display:inline-block;
	margin-top:10px;
	color:#969696;
}
/*去听课 div*/
.learn{
	padding:0;
	box-sizing: border-box;
	margin-top:16px;
}
/*购买日期*/
.date{
	display:inline-block;
	margin-top:17px;
	color:#969696;
}
/*听课按钮*/
.learn-btn{
	width:2.21334rem;
	height:.7467rem;
	line-height: 12px;
	border-radius:30px;
	background-color: #8BC34A;
	color:#fff;
	border:none;
	float: right;
	margin-top:10px;
}
</style>
