import { flagData } from './data';

function addImage(params: any, realData: any) {
  console.log('params');
  const item = realData[params.dataIndex];
  return {
    type: 'image',
    style: {
      image: item.url,
      x: item.x,
      y: item.y,
      width: 34,
      height: 44,
    },
  };
}

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
        color: ['#244559', '#00FFFF'],
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
        return `全国火力发电占比<br/>
                ${name}: ${value}`;
      },
    },
    dataset: {
      source: data,
    },
    series: [
      {
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
      {
        name: 'red',
        type: 'custom',
        coordinateSystem: 'geo',
        renderItem: function (params: any) {
          return addImage(params, flagData);
        },
        data: flagData,
      },
    ],
  };
};
