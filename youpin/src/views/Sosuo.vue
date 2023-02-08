<template>
	<div class="sosuo">
		<div class="top">
			<img src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_left_darkblack.png" @click="$router.back()">
			<van-search
			 
			  show-action
			  label="搜索"
			  placeholder="请输入搜索关键词"
			
			>
			  <template #action>
			    <div >搜索</div>
			  </template>
			</van-search>
		</div>
		<div style="width: 100%;padding: 0.3rem;">
			<h3>猜你想搜</h3>
			<van-row>
			  <van-col span="10">红外理疗贴39元起</van-col>
			  <van-col span="7">童年回忆口罩</van-col>
			  <van-col span="7">5折电视限量秒</van-col>
			</van-row>
			
			<van-row>
			  <van-col span="9">空气净化器滤芯</van-col>
			  <van-col span="10" offset="1">手机</van-col>
			</van-row>
			
			<van-row>
			  <van-col offset="1" span="11">电脑</van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
</script>
<style scoped="scoped">
	.van-search{
		width: 85%;
		height: 0.6rem;
	}
	.van-col{
		background-color: #F4F4F4;
		border-radius: 0.3rem;
		text-align: center;
		padding: 0.1rem;
		margin-top: 0.2rem;
		font-size: 0.25rem;
		color: #FD6600;
		}
</style>
<style scoped="scoped">
	.top{
		width: 100%;
		height: 0.54rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.2rem;
		padding: 0.2rem;
	}
	.top img{
		width: 0.58rem;
		height: 0.58rem;
		
	}
</style>
