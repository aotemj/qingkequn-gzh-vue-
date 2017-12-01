//导出定义常量
export const key ="data";
// 导出数据格式:
export var valueObj = {goodsId:0,count:0};
// 导出设置数据方法:
export function setItem(value){
	var jsonStr = localStorage.getItem(key)||"[]";//获取localStorage中的数据
	var arr = JSON.parse(jsonStr);//转换为数组
	arr.push(value);
	jsonStr = JSON.stringify(arr);
	localStorage.setItem(key,jsonStr);
}
// 导出获取数据方法:
export function getItem(){
	var jsonStr = localStorage.getItem(key)|"[]";
	return JSON.parse(jsonStr);
};

