<template>
	<div>
		<!-- 课程详情(mint-ui) -->
		<div class="course">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1"><a class="navbar is-selected" href="#">全部</a></mt-tab-item>
			  <mt-tab-item id="2"><a class="navbar" href="#">精读</a></mt-tab-item>
			  <mt-tab-item id="3"><a class="navbar" href="#">实践</a></mt-tab-item>
			</mt-navbar>

			<!-- 课程列表 -->
			<div class="course-list">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media" v-for="item in courseList">
						<router-link to="/course/courseInfo">
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
	export default{
		data(){
			return {
				selected:true,
				courseList:[
					{
						courseName:'卓有成效的管理者-第六章第...',
						author:'包政',
						price:365.00
					},
					{
						courseName:'卓有成效的管理者-第六章第...',
						author:'包政',
						price:365.00
					},
					{
						courseName:'卓有成效的管理者-第六章第...',
						author:'包政',
						price:365.00
					}
				]
			}
		},
		methods:{

		},
		created(){
		},
		components:{
		}
	}
</script>
<style scoped>
/*navbar选中样式*/
.mint-navbar .mint-tab-item.is-selected{
	border-bottom:1px solid #E3E3E3;
	font-size:14px;
}
.navbar{
	font-size: 14px;
	display:inline-block;
	height:100%;
	line-height: 50px;
	padding:0 10px;
}
.mint-navbar .mint-tab-item.is-selected .navbar{
	border-bottom:2px solid #FF9800;
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
/*作者*/
.author{
	color:#969696;
}
/*购买 div*/
.buy{
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
	width:85px;
	height:30px;
	border-radius:30px;
	background-color: #FF9800;
	color:#fff;
	border:none;
	float: right;
	margin-top:7px;
}
</style>
