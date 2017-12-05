<template>
	<div >
		<!-- 轻友福利 (mui)-->
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media articleList" v-for="item in articleList">
				<a href="javascript:;">
					<div>
						<img class="mui-media-object mui-pull-right img" v-bind:src="item.img">
					</div>
					<div class="mui-media-body content">
						<p class="title" v-text="item.title"></p>
						<span class="date" v-text="item.date"></span>
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
				articleList:[//文章列表假数据
					{
						"id":1,
						"img":"https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1205428686,2606217693&fm=85&s=B53A76971A017ECE5C3ED4E00300F039",
						"title":"这碗鸡汤有毒！年度30句最毒语录，看完让你怀疑人生！",
						"date":"2017年11月18日"
					},
					{
						"id":2,
						"img":"https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1205428686,2606217693&fm=85&s=B53A76971A017ECE5C3ED4E00300F039",
						"title":"这碗鸡汤有毒！年度30句最毒语录，看完让你怀疑人生！",
						"date":"2017年11月18日"
					},
					{
						"id":3,
						"img":"https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1205428686,2606217693&fm=85&s=B53A76971A017ECE5C3ED4E00300F039",
						"title":"这碗鸡汤有毒！年度30句最毒语录，看完让你怀疑人生！",
						"date":"2017年11月18日"
					},
					{
						"id":4,
						"img":"https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1205428686,2606217693&fm=85&s=B53A76971A017ECE5C3ED4E00300F039",
						"title":"这碗鸡汤有毒！年度30句最毒语录，看完让你怀疑人生！",
						"date":"2017年11月18日"
					},
					{
						"id":5,
						"img":"https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1205428686,2606217693&fm=85&s=B53A76971A017ECE5C3ED4E00300F039",
						"title":"这碗鸡汤有毒！年度30句最毒语录，看完让你怀疑人生！",
						"date":"2017年11月18日"
					}
				]
			}
		}
	}
</script>
<style scoped>
	.articleList{
		border-bottom:1px solid #F2F2F2;
	}
	.mui-table-view-cell > a:not(.mui-btn){
		white-space:normal;
	}
	.content{
		line-height: 25px;
	}
	/*文章配图*/
	.img{
		height:2.14rem;
		width:3.2rem;
		max-width:5rem;
		float: right;
	}

	/*文章标题*/
	.title{
		font-size: 18px;
	}
	/*发表时间*/
	.date{
		font-size: 12px;
		color:#969696;
	}
</style>
