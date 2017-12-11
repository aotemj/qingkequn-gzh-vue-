<template>
	<div>
		<!-- 课程详情 -->
		<div class="course">
			<div class="course-title">
				<!-- 表头 -->
				<ul>
					<li v-for="(item,index) in courseTitleList" v-bind:class="{'is-selected':item.status}" v-on:click="checked(index)"><span>{{item.title}}</span></li>
				</ul>
			</div>
			<!-- 课程列表 -->
			<div class="course-list">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media" v-for="item in courseList">
							<router-link v-bind="{to:'/course/courseInfo/'+item.id}" >
								<img class="mui-media-object mui-pull-left" src="../../../statics/imgs/course01.jpg">
								<div class="mui-media-body">
									<p class="course-name">{{item.courseName}}</p>
									<span class="author">{{item.author}}</span>
									<div class="buy">
										<span class="price">&yen;{{item.price}}</span>
										<button class="buy-btn">立即购买</button>
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

	//引入mapState 、mapMutations:
	import { mapState , mapMutations } from 'vuex';

	export default{
		data(){
			return {
				courseTitleList:[
					{
						"title":"全部",
						"status":true
					},
					{
						"title":"精读",
						"status":false
					},
					{
						"title":"实践",
						"status":false
					}
				],
				//假数据
				courseList:[
					{
						id:1,
						courseName:'卓有成效的管理者-第六章第理者-第六章-第六章效的管效的管效的管',
						author:'包政',
						price:365.00
					},
					{
						id:2,
						courseName:'卓有成效的管理者-第六章第-第六章-第六章-第六章效的管效的管效的管',
						author:'包政',
						price:365.00
					},
					{
						id:3,
						courseName:'卓有成效的管理者-第六章第-第六章-第六章-第六章效的管效的管效的管',
						author:'包政',
						price:365.00
					}
				]
			}
		},
		methods:{
			//表头
			checked(id){
				this.courseTitleList.forEach((item)=>{
					item.status=false;
				});
				this.courseTitleList[id].status=true;
			}
		},
		created(){

		},
		computed:{},
		components:{
		}
	}
</script>
<style scoped>
	/*课程nav-bar*/
	.course-title{
		height:45px;
		background-color: #fff;
		width:100%;
	}
	.course-title ul li{
		float: left;
		width:33.3%;
		border-bottom:1px solid #E3E3E3;
		text-align: center;
		height:45px;
		line-height: 45px;
		font-size:14px;
	}
	.course-title ul li span{
		display:inline-block;
		height:45px;
		padding:0 12px;
	}
	.course-title ul li.is-selected span{
		border-bottom:2px solid #FF9800;
		color:#FF9800;
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
	height:2.134rem;/*80px*/
}
.mui-media-body{
	position: relative;
}
/*作者*/
.author{
	position: absolute;
	top:.6667rem;
	color:#969696;
}
/*购买 div*/
.buy{
	margin-top:24px;
	padding:0;
	box-sizing: border-box;
}
/*课程价格*/
.price{
	display:inline-block;
	margin-top:12px;
	color:#FF9800;
	font-size: 18px;
}
/*购买按钮*/
.buy-btn{
	width:2.21334rem;
	height:.7467rem;
	line-height:25px;
	border-radius:30px;
	background-color: #FF9800;
	color:#fff;
	border:none;
	float: right;
	margin-top:7px;
	padding:0;
}
</style>
