export const chinaMapConfig = (configData: any) => {
  const { data, max, min } = configData;

  return {
    visualMap: {
      // 视觉映射组件
      type: 'continuous',
      left: 'right',
      min: 0,
      max: 1,
      show: false,
      inRange: {
        color: ['#00FFFF', '#89FF00'],
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
        let { value = 0, name = '', total, use } = data;
        if (value === null) return;
        return `${name}<br/>
                  总发电量: ${total}千瓦时<br/>
                社会用电量: ${use}千瓦时`;
      },
    },
    dataset: {
      dimensions: ['name', 'value'],
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
