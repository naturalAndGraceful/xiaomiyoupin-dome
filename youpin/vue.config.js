module.exports = {
	// 在开发环境的配置
	devServer: {
		// port:"8080",
		// open:true,
		proxy: {
			// 匹配规则,以这个开头的请求,都需要遵循这个配置项
			// (主页数据)、、、、、、、、
			'/homepage': {
				// 接口地址
				target: "https://m.xiaomiyoupin.com/",
				// 打开跨域请求 允许
				changeOrigin: true,
				onProxyReq(proxyReq, req, res) {
					// 设置请求头
					proxyReq.setHeader("referer", "https://m.xiaomiyoupin.com/main")
				}
			},
			// (分类页面请求端口)
			'/mtop': {
				// 接口地址
				target: "https://m.xiaomiyoupin.com/",
				// 打开跨域请求 允许
				changeOrigin: true,
				onProxyReq(proxyReq, req, res) {
					// 设置请求头
					proxyReq.setHeader("referer",
						"https://m.xiaomiyoupin.com/goodscategory/?spmref=M_H5.2112.list.0.2494187&scmv2_num=1")
				}
			},
			// (详情页面商品图片数据端口)
			'/api': {
				target: "https://m.xiaomiyoupin.com/",
				changeOrigin: true,
				onProxyReq(proxyReq, req, res) {

					proxyReq.setHeader("referer",
						"https://m.xiaomiyoupin.com/detail?gid=152957&pid=371909&spmref=M_H5.9127.204105.1.70074156&last_scmv2=1005.181.0:0.0.0&scmv2_num=0&noDL=1"
					)
				}
			},
			//页面商品详情
			// '/gateway': {
			// 	target: "https://m.xiaomiyoupin.com/",
			// 	changeOrigin: true,
			// 	headers:{
			// 		'Referer':'https://m.xiaomiyoupin.com/detail?gid=152296&spmref=M_H5.2112.12580.1.11903594&scmv2_num=1&noDL=1'
			// 	}
			// },
			// (购物车请求)
			'/arch': {
				target: "https://trade.m.xiaomiyoupin.com/",
				changeOrigin: true,
				onProxyReq(proxyReq, req, res) {

					proxyReq.setHeader("referer",
						"https://trade.m.xiaomiyoupin.com/tr/cart/?spmref=M_H5.2112.list.0.39964902&scmv2_num=1"
					)
				}
			},
			// (详情页面推荐商品端口)
			'/detail': {
				target: "https://m.xiaomiyoupin.com/",

				changeOrigin: true,
				onProxyReq(proxyReq, req, res) {

					proxyReq.setHeader("referer",
						"https://m.xiaomiyoupin.com/detail?gid=140314&pid=0&spmref=YouPinM.$SearchFilter$1.search_list.1.76240213&last_scmv2=3001.22.1:unfolda-3:zero-4:zero-5:zero-6:zero-7:zero.0.0&scmv2_num=0&noDL=1"
					)
				}
			},
			"php": {
				target: "https://www.520mg.com/",
				changeOrigin: true,
				// onProxyReq(proxyReq,req,res){
				// 	proxyReq.setHeader('referer','https://www.520mg.com/')
				// }
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}

		}
	}
}
