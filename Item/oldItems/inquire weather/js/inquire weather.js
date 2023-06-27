$(function() {
	$("#cxbtn").click(function() {
		$(".tqyb>div").empty();
		var address = $("#address").val();
		var adcode;
		//获取地址
		$.ajax({
			url: 'https://restapi.amap.com/v3/geocode/geo?parameters',
			async: false,
			type: "get",
			data: {
				key: "e99b2a434e86d3dabd69d06282b5e394",
				address: address,
				output: "JSON",
			},
			success: function(res) {
				console.log(res.geocodes[0].adcode)
				adcode = res.geocodes[0].adcode;
			},
			error: function() {

			}
		})
		//获取实时天气
		$.ajax({
			url: "https://restapi.amap.com/v3/weather/weatherInfo?parameters",
			async: false,
			type: "get",
			data: {
				key: "e99b2a434e86d3dabd69d06282b5e394",
				city: adcode,
				extensions: "base",
				output: "JSON"
			},
			success: function(res) {
				//天气现象（汉字描述）
				$("#wtr").text(res.lives[0].weather)
				//实时气温，单位：摄氏度
				$("#sswd").text(res.lives[0].temperature)
				//风向描述
				$("#fx").text(res.lives[0].winddirection)
				//风力级别，单位：级
				$("#fl").text(res.lives[0].windpower)
				//空气湿度
				$("#kqsd").text(res.lives[0].humidity)
				//数据发布的时间
				$("#sjtime").text(res.lives[0].reporttime)
			},
			error: function() {

			}
		})
		//获取天气预报
		var forecasts = [];
		var daytemp = [];
		var nighttemp = [];
		$.ajax({
			url: "https://restapi.amap.com/v3/weather/weatherInfo?parameters",
			async: false,
			type: "get",
			data: {
				key: "e99b2a434e86d3dabd69d06282b5e394",
				city: adcode,
				extensions: "all",
				output: "JSON"
			},
			success: function(res) {
				forecasts = res.forecasts[0].casts;
				forecasts.forEach(function(val, i) {
					daytemp.push(Number(val.daytemp));
					nighttemp.push(Number(val.nighttemp));
					var $div=$('<div class="a'+i+
				'"><p>白天天气:<span id="wtr'+i+
				'">'+res.forecasts[0].casts[i].dayweather+'</span></p><p>夜间天气:<span id="wtr'+i+
				'">'+res.forecasts[0].casts[i].nightweather+'</span></p><p>白天气温:<span id="sswd'+i+
				'">'+res.forecasts[0].casts[i].daytemp+'</span>℃</p><p>夜间气温:<span id="sswd'+i+
				'">'+res.forecasts[0].casts[i].nighttemp+'</span>℃</p><p>白天风向：<span id="fx'+i+
				'">'+res.forecasts[0].casts[i].daywind+'</span></p><p>夜间风向：<span id="fx'+i+
				'">'+res.forecasts[0].casts[i].nightwind+'</span></p><p>白天风力:<span id="fl'+i+
				'">'+res.forecasts[0].casts[i].daypower+'</span>级</p><p>夜间风力:<span id="fl'+i+
				'">'+res.forecasts[0].casts[i].nightpower+'</span>级</p></div>')
				$(".tqyb>div").append($div);
				})
				var myChart = echarts.init(document.getElementById('main'));
				option = {
					title: {
						text: '天气预报'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['白天天气', '夜间天气']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['今天', '明天', '后天', '大后天']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '白天温度',
							type: 'line',
							stack: '',
							data: daytemp
						},
						{
							name: '夜间温度',
							type: 'line',
							stack: '',
							data: nighttemp
						}
					]
				};

				myChart.setOption(option);
			},
			error: function() {

			}
		})
	})
})
