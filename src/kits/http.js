import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import axios from 'axios';
import store from '../store/index.js';
import qs from 'qs';

//设置请求超时时间
// axios.defaults.timeout = 5000;
// 设置公共url头
axios.defaults.baseURL = 'http://192.168.10.15:8080';

//axios请求拦截器
axios.interceptors.request.use((config) => {
	// post请求添加自定义请求头
  if(config.method  === 'post'){
  	config.headers['Content-Type']='application/x-www-form-urlencoded',
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
   alert("错误的传参");
  return Promise.reject(error);
 });



//获取token：
export function getToken (){
  // 查看本地是否存有用户token
  var tokenInfo = JSON.parse(window.localStorage.getItem('tokenInfo'))||'[]';;
  var token = tokenInfo.token;
  var nowTime = new Date().getTime(); //当前时间
  var expirationDate = tokenInfo.expirationDate;

  // token 有效
  if(token && Math.abs(expirationDate-nowTime)<=604800000){
    // vuex中存储tokenInfo
    store.state.tokenInfo = tokenInfo;
    console.log(tokenInfo);
    // 返回当前tokeninfo
    return tokenInfo;
  }else {
    // 未获取到token
    if(!token){
      // 匿名token
      let username = 'QINGKE_WX_CLIENT';
      let pwd ='xSdVeRvo5k6u69NqLQY5GqBzDht8Xjv3';
      let url = 'http://192.168.10.15:8080/auth/token';
      // let url = 'http://bosstan.asuscomm.com/auth/token';
      axios.post(
        url,
        // data
        {
          username:username,
          password:pwd
        },
        // config
        {
          headers:{
            'Content-Type':'application/json',
            'charset':'utf-8'
          }
        }
        ).then((res)=>{
          console.log(res);
        // 保存获取到的token
        tokenInfo = {
          token:res.data.data.token,
          expirationDate:res.data.data.expirationDate
        }
        window.localStorage.setItem('tokenInfo',JSON.stringify(tokenInfo));
        // vuex中存储tokenInfo
        store.state.tokenInfo = tokenInfo;
        return tokenInfo;
      });

      // token过期
    }else if(Math.abs(expirationDate - nowTime)>604800000){
      let url = 'http://192.168.10.15:8080/auth/refresh';
      axios.get(
        url,
        {
          headers:{
            'Content-Type':'application/json',
            'charset':'utf-8'
          }
         }
        ).then((res)=>{
          console.log(res);
        // 保存获取到的token
         tokenInfo = {
          token:res.data.data.token,
          expirationDate:res.data.data.expirationDate
        }
        window.localStorage.setItem('tokenInfo',tokenInfo);
        // vuex中存储tokenInfo
        store.state.tokenInfo = tokenInfo;
        return tokenInfo;
      });
    }
  }
};

// 封装通用请求方法:
 export function ajax (url,ajaxType,params,success){
  // 获取token
  let tokenInfo = getToken();
  // post 请求
  if(ajaxType == 'post'){
      axios.post(
        url,
        params,
        // config
          {
            headers:{
              'Authorization':'Bearer '+ tokenInfo.token,
            }
          }
        ).then((res)=>{
          success(res);
      });
    // get请求
  }else if(ajaxType=='get'){
      axios.get(
        url,
        {
          headers:{
            'Content-Type':'application/json',
            'charset':'utf-8'
          }
         }
        ).then((res)=>{
          success(res);
      });
  }
 }
  export default axios;

