<template>
	<!-- 个人信息(立即支付) -->
	<div class="container">
		<!-- 完善个人信息提示 -->
		<div class="tips" v-show="tipsShow">
			<p>请完善个人信息，以便向您提供更加优质的服务！</p>
		</div>
		<!-- 个人信息 -->
		<div class="person-info">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right"><span>头像</span><span class="photo" v-bind:style="{background:'url('+personInfo.img+') center center',backgroundSize:'cover'}"></span></a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right"><span>昵称</span> <span class="nickname" v-text="personInfo.nickname"></span></a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right"><span>手机号 <span class="necessary">*</span></span></a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right"><span>性别</span></a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right"><span>生日</span></a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right"><span>地址</span></a>
				</li>
			</ul>
		</div>
		<div class="buy-btn">
			<mt-button class="submit" type="default">提交并付款</mt-button>
		</div>
	</div>
</template>
<script>
// 引入公共事件中心
import {vm} from "../../kits/vm.js";

	export default{
		data(){
			return {
				tipsShow:true, //控制提示信息的显示
				personInfo:{   //个人信息
					"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512047285742&di=f03172637fe163a4e8a4301297eeecfb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4e4a20a4462309f78cc48d2f790e0cf3d7cad667.jpg",//头像
					"nickname":"晴天小猪",//昵称
					"learnTime":20160000,//秒
					"coin":1000,//金币个数
					"phoneNum":13333333333,//手机号
					"sex":"male",//性别
					"birthday":"19990909",//生日
					"address":""//地址
				}
			}
		}
	}
</script>
<style scoped>
	/*完善个人信息提示*/
	.tips{
		height:1.12rem;
		line-height: 1.12rem;
		background-color: #FFFEDB;
		padding-left:.54rem;
	}
	.tips p {
		color:#CC972F;
	}
	.mui-navigate-right{
		display: inline-block;
		position: relative;
	}
	.mui-navigate-right span:first-of-type{
		color:#B0B0B0;
	}
	/*头像*/
	.photo{
		position: absolute;
		right:15px;
		top:50%;
		transform: translateY(-50%);
		display: inline-block;
		width:34px;
		height:34px;
		z-index:999;
		background-size:cover;
		background-repeat:round;
	}
	/*隐藏第一行小箭头*/
	.mui-table-view-cell:first-of-type .mui-navigate-right:after{
		display:none;
	}
	/*昵称*/
	.nickname{
		float: right;
		margin-right:.4rem;
	}
	/*必填项*/
	.necessary{
		color:red !important;
	}
	/*提交并付款*/
	.buy-btn{
		text-align: center;
	}
	.submit{
		width:6.94rem;
		height: .854rem;
		background-color: #5AC449;
		color:#fff;
		font-size: 14px;
		margin-top: 2.67rem;
	}
</style>
