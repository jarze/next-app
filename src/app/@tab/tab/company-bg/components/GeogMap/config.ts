export const chinaMapConfig = (configData: any) => {
  const { data, max, min } = configData;

  return {
    title: {
      text: '数据地图',
      left: 'right',
      textStyle: {
        color: '#fff',
      },
    },
    visualMap: {
      // 视觉映射组件
      type: 'continuous',
      left: 'right',
      min: 0,
      max: max,
      show: false,
      inRange: {
        color: [
          '#96D7CC',
          '#9DDC6B',
          '#A7E60A',
          '#C1B809',
          '#E69506',
          '#E04919',
          '#E0022B',

          // "#fedeb5",
          // "#f96a35",
          // "#c3380e",
          // "#942005"
          // '#5b1305'
        ],
      },
      text: [`最大值：${max}`, 0],
      textStyle: {
        color: '#000',
      },
      // calculable: true
    },
    tooltip: {
      // 提示框
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params: any) {
        let { data = {} } = params;
        let { value = 0, name = '' } = data;
        return `全国火力发电占比<br/>
                ${name}: ${value}`;
      },
    },
    dataset: {
      source: data,
    },
    series: {
      // 地图,可以是数组，多个
      label: {
        show: true, //显示省市名称
        position: [1, 100], // 相对的百分比
        fontSize: 12,
        offset: [2, 0],
        align: 'left',
      },
      itemStyle: {
        areaColor: '#fff', // 地图图形颜色
      },
      type: 'map',
      roam: true,
      map: 'china',
      zoom: 1.2, // 当前视角的缩放比例
      scaleLimit: {
        max: 2,
        min: 1, // 设置默认缩放效果
      },
      top: '10%', // 距离顶部距离

      // data: [
      //   { name: "内蒙古", value: 1000 },
      //   { name: "北京", value: 700 },
      //   { name: "河北", value: 30 },
      //   { name: "江苏", value: 400 },
      //   { name: "西藏", value: 200 }
      // ],

      // nameMap:{
      //     '内蒙古':'NeiMengGu',
      //     '北京':'Beijing',
      // },

      // nameMap: {
      //   110000: "北京",
      //   130000: "河北",
      //   150000: "内蒙古"
      // },
      // nameProperty: "adcode",
      // data: [
      //   { name: "内蒙古", value: 1000 },
      //   { name: "北京", value: 700 },
      //   { name: "河北", value: 30 }
      // ]
    },
  };
};
