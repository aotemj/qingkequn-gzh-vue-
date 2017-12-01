<template>
	<div class="container">
			<!-- 顶部banner -->
			<div class="banner">
					<!-- 头像 -->
					<div class="photo">
						<img :src="personInfo.img" alt="">
					</div>
					<!-- 昵称 -->
					<div class="nickname">
						<span v-text="personInfo.nickname"></span>
					</div>
					<div class="learn-time">
						<span class="iconfont icon-time">&nbsp;</span>
						<span>学习时间</span>
						<span class="fr" v-text="personInfo.learnTime"></span>
					</div>
			</div>

			<!-- 详细列表 -->
			<div class="detailList">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right"><span class="iconfont icon-jinbi">&nbsp;&nbsp;</span>我的黄金屋 <span class="coin">{{personInfo.coin}}个金币</span></a>
					</li>
					<li class="mui-table-view-cell">
						<router-link to="/personal/myClass" class="mui-navigate-right"><span class="iconfont icon-banji">&nbsp;&nbsp;</span>我的班级</router-link>
					</li>
					<li class="mui-table-view-cell">
						<router-link to="/personal/learningRecord" class="mui-navigate-right"><span class="iconfont icon-jilu">&nbsp;&nbsp;</span>学习记录 </router-link>
					</li>
				</ul>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right"><span class="iconfont icon-fenxiang">&nbsp;&nbsp;</span>推荐[轻课]给好友 <span class="coin share">好友关注送金币哦!</span></a>
					</li>
				</ul>
			</div>
	</div>
</template>
<script>
	/*引入子组件*/

	export default{
		data(){
			return {
				personInfo:{//个人信息 假数据
					"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",//头像
					"nickname":"晴天小猪",//昵称
					"learnTime":20160000,//秒
					"coin":1000//金币个数
				}
			}
		},
		created(){},
		methods:{}
	}
</script>
<style scoped>
	.container{
		background-color: #f4f4f4;
		font-size: 14px;
	}
	/*顶部banner*/
	.banner{
		height:5.013334rem;
		background:url("../../../statics/imgs/bg.jpg") no-repeat;
		background-size:cover;
		overflow: hidden;
		position: relative;
	}
	/*头像*/
	.photo{
		height:1.6rem;
		width:1.6rem;
		margin:0 auto;
		margin-top:.8rem;

	}
	.photo img{
		width:100%;
		height:100%;
		border-radius:50%;
	}
	/*昵称*/
	.nickname{
		margin:10px auto;
		text-align:center;
		color:#fff;
		font-size:14px;
	}
	/*学习时间*/
	.learn-time{
		width:100%;
		height:1.2rem;
		line-height: 1.2rem;
		background-color:rgba(0,0,0,.5);
		position:absolute;
		bottom:0;
		color:#fff;
		padding:0 15px;
	}
	/*详细列表*/
	.mui-table-view{
		margin-top:10px;
	}

	.mui-navigate-right{
		position: relative;
	}
	.coin{
		position: absolute;
		right:.9rem;
		color:#FFB343;
	}
	.share.coin{
		color:#B0B0B0;
	}
	.mui-navigate-right .iconfont{
		color:#FF9800;
	}
</style>
