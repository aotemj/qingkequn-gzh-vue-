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
	// 引入弹窗组件
	import { Toast } from 'mint-ui';

	// 引入http.js(ajax请求)
	import  {getAjax} from "../../kits/http.js";

	export default {
		data(){
			return {
				phoneNum:"", //手机号
				verifyNum:"", //验证码
				btnContent:"获取验证码", //获取验证码按钮内文字
				time:0, //发送验证码间隔时间
				disabled:false //按钮状态
			}
		},
		created(){

		},
		methods:{
			// 获取验证码
			sendSmsCode(){
				var reg=11&& /^((13|14|15|17|18)[0-9]{1}\d{8})$/;//手机号正则验证
				var phoneNum = this.phoneNum;
				if(!phoneNum){//未输入手机号
					Toast("请输入手机号码");
					return;
				}
				if(!reg.test(phoneNum)){//手机号不合法
					Toast("您输入的手机号码不合法，请重新输入");
				}
				this.time = 60;
				this.timer();

				// 获取验证码请求
				var url = 'http://bosstan.asuscomm.com/api/common/sendSmsCode';
				this.getToken();


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
			// 验证验证码
			verificationCode(){
				var phoneNum = this.phoneNum;//手机号
				var verifyNum = this.verifyNum;//验证码

				var  url = 'http://bosstan.asuscomm.com/api/common/verificationCode';
				this.$http.post(url,{
					username:phoneNum,
					code:verifyNum
				},{
					emulateJSON:true
				}).then((response)=>{
					console.log(response.body);
				});
			},
			// 封装获取token方法：
			getToken(){
			 	var username = 'QINGKE_WX_CLIENT';//用户名
			 	var pwd ='xSdVeRvo5k6u69NqLQY5GqBzDht8Xjv3';//密码
			 	var url = 'http://bosstan.asuscomm.com/auth/token';
			 	this.$http.jsonp(url,{
			 		username:username,
			 		password:pwd
				},{
			 		emulateJSON:true
			 	}).then(function(response){
			 		console.log(response.body.token);
			 	});
			},
			fillContent(){

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
