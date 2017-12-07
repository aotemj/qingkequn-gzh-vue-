<template>
	<button id='demo1' data-options='{}' class="btn mui-btn mui-btn-block">选择日期时间 ...</button>
</template>

<script>

	export default{
		data(){
			return {
				pickerValue:null,
				startDate:new Date("1970-01-01"),
				endDate:new Date()
			}
		},
		methods:{

		}
	}
</script>
<style scoped>

</style>
