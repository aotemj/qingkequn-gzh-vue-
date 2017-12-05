<template>
	<div class="container">
		<!-- 课程图片 -->
		<div class="img" v-bind:style="{background:'#fff url('+bookInfo.img+') no-repeat center center ',backgroundSize:'320px 320px'}">

		</div>
		<!-- 课程概要 -->
		<div class="brief-desc">
			<h5>{{bookInfo.title}}</h5>
			<p class="desc">{{bookInfo.desc}}</p>
			<div class="priceBox">
				<span class="price">&yen;{{bookInfo.price}}</span><span class="quantity">{{bookInfo.quantity}}已买</span>
			</div>
		</div>
		<!-- 图文介绍 -->
		<div class="introduce">
			<h5 class="header">图文介绍</h5>
			<!-- 图书简介 -->
			<div class="book-desc">
				<div>
					<p>简介</p>
					<p class="desc" v-text="bookIntro.bookDesc"></p>
				</div>
				<div>
					<p>作者简介</p>
					<p class="desc text-idt" v-text="bookIntro.authorDesc"></p>
				</div>
			</div>
		</div>

		<!--查看文稿,立即购买 -->
		<div class="buy-btn">
			<button class="view">查看文稿</button>
			<button class="view">立即购买</button>
		</div>
	</div>
</template>
<script>
/*引入修改组件标题js*/
import { setWechatTitle, setTitleHack } from '../../kits/utils.js';

	export default{
		data(){
			return {
				id:-1,
				// 假数据
				bookInfo:{//图书简介
					img:"http://img12.360buyimg.com/n1/jfs/t1630/140/1242458373/126802/d3e978dc/55c2b196Nbde8322d.jpg",
					title:"营销的本质",
					desc:"营销的本质是产品用户的挖掘和留存。体现在两方面：第一，一个好产品一定解决了一部分人的问题，这种问题也许是生理的、也许是心理的。",
					price:365,
					quantity:3690
				},
				bookIntro:{//图文介绍
					bookDesc:"《营销的本质》是由机械工业出版社出版。包政教授十年磨一剑，颠覆科特勒营销思想，首次提出“社区商务方式”概念。从大量销售方式，到深度分销方式，未来属于社区商务方式。",
					authorDesc:"包政,中国人民大学商学院教授，博士生导师，兼任清华大学经管学院EMBA教授，北京和君创业企业管理顾问有限公司总裁，管理智慧、包子堂社区创始合伙人、首席导师。一直致力于战略管理、市场营销、组织变革，指出中国企业营销的未来在于构建社区商务，以及人力资源管理等领域的研究与咨询。在中国企业管理咨询界，成就了许多著名的案例，如《华为基本法》，《TCL以速度抗击规模》等，是我国著名的企业管理咨询专家，出版专著：《营销的本质》等。"
				}
			}
		},
		beforeCreate(){
		},
		created(){
			this.id = this.$route.params.courseId;//获取路由参数
			setWechatTitle(this.bookInfo.title);
		},
		methods:{},
		components:{
		}
	}
</script>
<style scoped>
	.container{
		background-color: #f4f4f4;
	}
	/*课程图片*/
	.img{
		height:360px;
	}
	/*课程概要*/
	.brief-desc{
		border:1px solid #F8F8F8;
		padding:12px;
		background-color: #fff;
		position: relative;

	}
	/*标题*/
	.brief-desc h5{
		color:#101010;
		font-size: 16px;
		line-height: 25px;
	}
	/*简介*/
	 .desc{
	 	text-indent:2em;
		margin-top:15px;
		color:#808080;
		font-size: 12px;
	}
	.priceBox{
		bottom:10px;
	}
	/*图书价格*/
	.price{
		display:inline-block;
		color:#FF9800;
		font-size: 18px;
	}
	/*购买数量*/
	.quantity{
		float: right;
		color:#808080;
	}
	/*图文介绍*/
	.introduce{
		margin:10px 0 45px;
	}
	.header{
		height:1.0937rem;
		border-bottom:1px solid #EBEBEB;
		line-height: 1.0937rem;
		text-align: center;
		color:#000;
		background-color: #fff;
		margin:0;
	}
	.book-desc{
		padding:10px;
		background-color: #fff;
	}
	/*查看文稿,立即购买*/
	.buy-btn{
		position: fixed;
		bottom:0;
		height:45px;
		background-color:pink;
		width:100%;
	}
	.buy-btn button{
		border:none;
		height:100%;
		display:block;
		float: left;
		width:50%;
		color:#fff;
		background-color:#FF9800;
	}
	.buy-btn button:first-of-type{
		background-color: #F8F8F8;
		color:#FF9800;
	}
</style>
