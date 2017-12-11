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
					<span class="mui-navigate-right"><span>头像</span><span class="photo" v-bind:style="{background:'url('+personInfo.img+') center center',backgroundSize:'cover'}"></span></span>
				</li>
				<li class="mui-table-view-cell">
					<span class="mui-navigate-right"><span>昵称</span> <span class="nickname" v-text="personInfo.nickname"></span></span>

				</li>
				<li class="mui-table-view-cell phone-li">
					<span v-on:click="verifyPhone" class="mui-navigate-right"><span>手机号<span class="necessary">*</span></span></span>
					<!-- 手机验证码 -->
					<div class="shade" v-show="verifyShow" v-on:click="verifyPhone">
						<!-- 手机验证码子组件 -->
						<phoneVerify></phoneVerify>
					</div>
				</li>
				<li class="mui-table-view-cell">
					<span class="mui-navigate-right"><span>性别</span></span>
				</li>
				<li class="mui-table-view-cell">
					<span class="mui-navigate-right"><span>生日</span></span>
					<!-- 时间选择 -->
					<div>
						<!-- <datePicker></datePicker> -->
						<button id='demo1' data-options='{}' class="btn mui-btn mui-btn-block">选择日期时间 ...</button>
					</div>
				</li>
				<li class="mui-table-view-cell">
					<span class="mui-navigate-right"><span>地址</span></span>
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

//引入手机号验证子组件
import phoneVerify from "../subcom/phoneVerify.vue";

	export default{
		data(){
			return {
				verifyShow:false,
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
		},
		created(){

		},
		methods:{
			// 手机号验证
			verifyPhone(){
				this.verifyShow=!this.verifyShow;
			},
		},
		components:{
			phoneVerify, //手机号验证子组件
		}
	}
</script>
<style scoped>
	/*完善个人信息提示*/
	.tips{
		height:1.12rem;
		line-height: 1.12rem;
		background-color: #FFFEDB;
		padding-left:12px;
	}
	.tips p {
		color:#CC972F;
	}
	.mui-navigate-right{
		display: inline-block;
		position: relative;
		width:100%;
	}
	.mui-table-view-cell{
		overflow: visible;
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
	.mui-table-view-cell .mui-navigate-right:after{
		margin-right:0px;
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
 	/*手机号验证码*/
.shade{
	position: fixed;
	left:0;
	top:0;
	width:100rem;
	height:100rem;
	background-color: rgba(0,0,0,.4);
	z-index: 999;
}
	/*提交并付款*/
	.buy-btn{
		text-align: center;
	}
	.submit{
		width:6.94rem;
		height:.854rem;
		background-color: #5AC449;
		color:#fff;
		font-size: 14px;
		margin-top: 2.67rem;
	}
</style>
