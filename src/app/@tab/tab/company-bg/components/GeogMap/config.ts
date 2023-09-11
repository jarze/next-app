export const chinaMapConfig = (configData: any) => {
  const { data, max, min } = configData;

  return {
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
          '#9CDB6B',
          '#A3E00B',
          '#C1B809',
          '#E09107',
          '#E04919',
          '#E0022B',
        ],
      },
      text: [`最大值：${max}`, 0],
      textStyle: {
        color: '#000',
      },
    },
    tooltip: {
      // 提示框
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params: any) {
        let { data = {} } = params;
        let { value = 0, name = '' } = data;
        if (!name) return;
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
      map: 'china',
      zoom: 1.2, // 当前视角的缩放比例

      top: '10%', // 距离顶部距离
    },
  };
};
