<template>
  <div class="vote">
    <!-- <img src="../assets/BG.png"> -->
    <div class="vote-content">
      <div id="myChart"
           :style="{width: '100vw', height: '100vh'}"
      />
    </div>
  </div>
</template>

<script>
// import api from '../../api/ApiList';
import echarts from 'echarts/lib/echarts'

export default{
  name: "Vote",
  components: {

  },
   data (){
      return {
          votes: []
      }
    },
    mounted () {
        this.vote();

		},
		methods: {
            // 获取投票信息
            async vote () {
                // const res = await api.getvotes();
                // if (res.success) {
                // this.votes = res.data;
                // }
                const res = {
                    data: [
                        {name: '节目1', vote_count: 100},
                        {name: '节目2', vote_count: 110},
                        {name: '节目3', vote_count: 180},
                        {name: '节目4', vote_count: 101},
                        {name: '节目5', vote_count: 101},
                        {name: '节目6', vote_count: 23},
                        {name: '节目7', vote_count: 106},
                        {name: '节目8', vote_count: 111},
                        {name: '节目9', vote_count: 56},
                        {name: '节目10', vote_count: 111},
                        {name: '节目11 ', vote_count: 50},
                        {name: '节目12', vote_count: 137},
                    ]
                }

                let newNumber = [3220, 3682, 2791, 3000, 4090, 3230, 2910, 4682, 2791, 3000, 4090, 2220]
                const newNums = newNumber.map((item) =>{
                    return item * 1.5;
                })

                const program = res.data.map(item => item.name)
                // const Numbers = res.data.map(item => item.vote_count)
                this.drawLine(program, newNumber,newNums);
                console.log(this.votes)
            },

			drawLine (program,newNumber,newNums) {
				// 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))


    let option = {
    backgroundColor: new echarts.graphic.RadialGradient(0, 0, 1, [{
        offset: 0,
        color: '#7A72D6'
    }, {
        offset: 1,
        color: '#689bd0'
    }]),
    tooltip: {
        trigger: 'axis',
        textStyle: {
            color: '#fff',
        },
    },
    grid: {
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%',
    },
    xAxis: [{
        type: 'category',
        splitArea: {
            show: false,
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,

        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        data: program
    }],
    yAxis: [{
        show: false,
    }],
    series: [{
            name: 'TIT',
            type: 'line',
            symbol: 'circle',
            symbolSize: 30,
            lineStyle: {
                normal: {
                    width: 3,
                    shadowColor: 'rgba(0, 166, 0, 1)',
                    shadowBlur: 2,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                    type: 'dashed',
                    color: new echarts.graphic.LinearGradient(
                        0, 0.25, 0.75, 1,
                        [{
                                offset: 0,
                                color: '#0f0'
                            },
                            {
                                offset: 0.25,
                                color: '#0f0'
                            },
                            {
                                offset: 0.75,
                                color: '#0f0'
                            },
                            {
                                offset: 1,
                                color: '#0f0'
                            },
                        ]
                    )
                }
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#2D258B',
                }
            },
            itemStyle: {
                color: function(params) {
                    let colorList = [
                        new echarts.graphic.LinearGradient(
                            0, 0, 1, 1, [{
                                offset: 0,
                                color: '#C9C7ED'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }]),

                    ];
                    return colorList[params.dataIndex];
                },
                borderColor: "#fff",
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .5)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0.25, 0.75, 1,
                        [{
                                offset: 0,
                                color: 'rgba(0,254,157,0.1)'
                            },
                            {
                                offset: 0.25,
                                color: 'rgba(2,191,241,0.1)'
                            },
                            {
                                offset: 0.75,
                                color: 'rgba(51,156,255,0.1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(145,127,255,0.1)'
                            },
                        ]
                    )
                }
            },
            data: newNumber,

        },
        {
            z: 1,
            type: 'bar',
            name: 'TIT',
            tooltip: {
                show: false
            },
            animation: false,
            barWidth: '50%',
            hoverAnimation: false,
            data: newNums,

            itemStyle: {
                normal: {
                    barBorderRadius: 50,
                    color: '#fff',
                    opacity:.7,
                    label: {
                        show: false
                    },
                    shadowColor: 'rgba(0, 0, 0, .2)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                }
            },
        },
    ]
				};
				// 窗口大小自适应方案
				myChart.setOption(option);
				setTimeout(function () {
					window.onresize = function () {
						myChart.resize();
					}
				}, 200)
			}
		}
}
</script>
<style scoped>
/* .vote img{
  width: 100vw;
  height: 100vh;
  position: relative;
}
.vote-content{
  position: absolute;
  top: 0;
  left: 0;
} */
</style>