// 封装ajax请求方法(添加请求头)
 export function getAjax(){
 	var username = 'QINGKE_WX_CLIENT';//用户名
 	var pwd ='xSdVeRvo5k6u69NqLQY5GqBzDht8Xjv3';//密码
 	var url = 'http://bosstan.asuscomm.com/auth/token';
 	this.$http.post(url,{
 		username:username,
 		password:pwd
	},{
 		emulateJSON:true
 	}).then(function(response){
 		console.log(response.body.token);
 	});

 	// Vue.http.headers.common['token'] = 'YXBpOnBhc3N3b3Jk';

 		console.log("httpGet");
}

