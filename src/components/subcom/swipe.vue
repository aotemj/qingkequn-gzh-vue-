<template>
	<div>
		<!-- <div>轮播图子组件</div> -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in imgs">
		  	<img v-bind:src="item.img" v-if="item.img">
		  	<img v-bind:src="item.src" v-else>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
	export default{
		props:["imgs"],
		data(){
			return {}
		},
		created(){},
		methods:{}
	}
</script>
<style scoped>
	.mint-swipe, .mint-swipe-items-wrap{
		height:8.8rem;
		padding:10px;
		background-color: #fff;
	}
	/* 轮播图图片样式 */
.mint-swipe, .mint-swipe-items-wrap img{
	width:100%;
	height:8.8rem;
}
</style>
