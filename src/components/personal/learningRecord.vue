<template>
	<div>
		<!-- 学习记录 (mui) -->
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in learningList">
				<a href="javascript:;">
					<div class="mui-media-body">
						<!-- 所学内容 -->
						<p class="learning" v-text="item.title"></p>
						<!-- 时间 -->
						<p class="date" v-text="item.date"></p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				learningList:[
					{
						title:"卓有成效的管理者-第六章 第二节",
						date:"2017-10-31"
					},
					{
						title:"社区活动是如何兴起的？",
						date:"2017-10-31"
					}
				]
			}
		}
	}
</script>
<style scoped>
	.mui-table-view-cell{
		height:2.347rem;
	}
	.mui-table-view-cell > a:not(.mui-btn){
		padding:15px;
	}
	/*学习内容*/
	.learning{
		font-size: 16px;
	}
	/*学习时间*/
	.date{
		margin-top:15px;
		color:#969696;
	}
</style>
