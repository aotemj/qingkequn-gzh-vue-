<template >
	<div>
		<div class="bind-phone-box">
			<div class="phone-title">绑定手机</div>
			<div class="phone-content" v-on:click.stop="fillContent">
				<input v-model="phoneNum" class="phone-num" type="text" placeholder="请输入手机号码">
				<div class="verify-box clearfix">
					<input class="verify-num" v-model="verifyNum" type="text" placeholder="请输入验证码"><input v-on:click="sendSmsCode" class="verify-btn" type="button" v-model="btnContent" v-bind="{'disabled':disabled}">
				</div>
			</div>
			<div class="phone-submit clearfix">
				<input class="submit-cancel" type="button" value="取消">
				<input class="submit-confirm" v-on:click.stop="verificationCode" type="button" value="确定">
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	// 引入弹窗组件
	import { Toast } from 'mint-ui';

	//引入https
	import {ajax} from '../../kits/http.js';

	import axios from 'axios';
	var qs = require('qs');
	// import qs from "qs";

	export default {
		data(){
			return {
				phoneNum:'', //手机号
				verifyNum:'', //验证码
				btnContent:'获取验证码', //获取验证码按钮内文字
				time:0, //发送验证码间隔时间
				disabled:false //按钮状态
				// author:''
			}
		},
		created(){

		},
		methods:{
			// 获取验证码
			sendSmsCode(){
				var reg=11&& /^((13|14|15|17|18)[0-9]{1}\d{8})$/;//手机号正则验证
				var phoneNum = ''+this.phoneNum;
				if(!phoneNum){//未输入手机号
					Toast('请输入手机号码');
					return;
				}
				if(!reg.test(phoneNum)){//手机号不合法
					Toast('您输入的手机号码不合法，请重新输入');
				}
				this.time = 6;
				this.timer();

				// 获取验证码请求
				// var url = 'http://bosstan.asuscomm.com/api/common/sendSmsCode';
				let url = '/api/common/sendSmsCode';

				//发送请求
				ajax(url,'post',{ username:'18625512982'},function(res){
					console.log(res);
					// if(res.data.code==200){
					// 	Toast('验证码已发送成功，5分钟内有效，请尽快完成操作！');
					// }
				});
			},
			timer(){
				if(this.time>0){
					this.time--;
					this.btnContent = this.time+"s后重新获取";
					this.disabled = true;
					var timer = setTimeout(this.timer,1000);
				}else if(this.time == 0){
					this.btnContent = "获取验证码";
					clearTimeout(timer);
					this.disabled = false;
				}
			},
			// 验证短信验证码
			verificationCode(){

			},
			fillContent(){
			},
			computed:{

	    }
		}
	}
</script>
<style scoped>
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
/*手机号验证*/
.bind-phone-box{
	position: relative;
	padding:20px;
	text-align: center;
	width:9rem;
	height:5.9rem;
	background-color: #fff;
	border-radius:10px;
	position: fixed;
	left:50%;
	top:50%;
	transform:translate(-50%,-50%);
	z-index: 999;
}
/*绑定手机内容*/
.phone-content{
	margin-top:15px;
	padding:0;
}
.phone-content input{
	display:block;
	float: left;
	height:35px;
	border-radius: 5px;
	font-size: 14px;
	margin:0;

}
.verify-box{
	width:100%;
	padding:0;
	overflow: hidden;
	padding-top:15px;
	background-color:#fff;
}
/*验证码输入框*/
.verify-box .verify-num{
	width:60%;
	display:inline-block;

}
/*获取验证码按钮*/
.phone-content .verify-btn{
	margin-left:0px;
	width:2.9rem;
	float: right;
	text-align: center;
	padding:0;
	color:#fff;
	border:none;
	background-color: #FF9800;
}
/*确定提交验证码*/
.phone-submit{
	position: absolute;
	left:0;
	width:100%;
	margin-top:.53rem;
	background-color: transparent;
	height:1.2rem;
	border-top:1px solid #F0F0F0;
	position: absolute;
	bottom:0;
}
.phone-submit input{
	display:block;
	float: left;
	width:50%;
	height:100%;
	background-color: transparent;
	border:none;
	font-size: 16px;
}
/*取消*/
.phone-submit .submit-cancel{
	border-right:1px solid #f0f0f0;
}
/*确定*/
.submit-confirm{}
</style>
