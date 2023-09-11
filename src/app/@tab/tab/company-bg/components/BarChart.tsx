'use client';
import TabCard from '@/components/TabCard';
import * as echarts from 'echarts';
import { useCallback, useEffect, useRef, useState } from 'react';
const option = {
  title: {
    text: '中美日发电结构',
    textStyle: {
      color: '#00FFEE',
      fontSize: 40,
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'none' },
  },
  legend: {
    data: ['中国', '美国', '日本'],
    selectedMode: false,
    right: 40,
    itemWidth: 35,
    itemHeight: 35,
    itemGap: 60,
    textStyle: {
      color: '#fff',
      fontSize: 26,
    },
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff',
          fontSize: 26,
        },
      },
      // prettier-ignore
      data: ['火电', '天然气', '风/核/可再生', '其他'],
    },
  ],
  yAxis: [
    {
      type: 'value',
      show: false,
    },
  ],
  series: [
    {
      name: '中国',
      type: 'bar',
      itemStyle: {
        color: '#FD3232',
      },
      data: [62.79, 4.3, 32.21, 0.7],
    },
    {
      name: '美国',
      type: 'bar',
      itemStyle: {
        color: '#2490FD',
      },
      data: [20.13, 40.55, 39.0, 0.31],
    },
    {
      name: '日本',
      type: 'bar',
      itemStyle: {
        color: '#fff',
      },
      data: [33.88, 35.18, 24.49, 6.45],
    },
  ],
};
export default function BarChart() {
  const currentIndex = useRef<number>(0);
  const echartsRef = useRef<HTMLDivElement>(null);
  let mapInstance = useRef<echarts.ECharts>();
  let timer = useRef<NodeJS.Timeout | null>();

  const startLoop = () => {
    currentIndex.current = 0;
    timer.current = setInterval(() => {
      loop();
      currentIndex.current++;
      if (currentIndex.current > 3) {
        currentIndex.current = 0;
      }
    }, 2000);
  };
  const renderMap = useCallback(() => {
    if (echartsRef.current !== null) {
      const renderedMapInstance = echarts.getInstanceByDom(echartsRef.current);
      if (renderedMapInstance) {
        mapInstance.current = renderedMapInstance;
      } else {
        mapInstance.current = echarts.init(echartsRef.current);
      }
      mapInstance.current.setOption(option);

      const stopAutoShow = function () {
        if (timer.current) {
          clearInterval(timer.current);
          timer.current = null;
        }
      };
      const zRenderMouseMove = function (param: any) {
        if (param.event) {
          // 阻止canvas上的鼠标移动事件冒泡
          // param.event.cancelBubble = true;
        }
        stopAutoShow();
      };

      const zRenderGlobalOut = function () {
        if (!timer.current) {
          startLoop();
        }
      };
      mapInstance.current.on('mousemove', stopAutoShow);
      mapInstance.current.getZr().on('mousemove', zRenderMouseMove);
      mapInstance.current.getZr().on('globalout', zRenderGlobalOut);
      return () => {
        if (timer.current) {
          clearInterval(timer.current);
          timer.current = null;
        }
        if (mapInstance.current) {
          mapInstance.current.off('mousemove', stopAutoShow);
          mapInstance.current.getZr().off('mousemove', zRenderMouseMove);
          mapInstance.current.getZr().off('globalout', zRenderGlobalOut);
        }
      };
    }
  }, []);

  const loop = useCallback(() => {
    if (!mapInstance.current) return;
    mapInstance.current.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
    });
    mapInstance.current.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: currentIndex.current,
    });
    mapInstance.current.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: currentIndex.current,
    });
  }, []);

  useEffect(() => {
    const remove = renderMap();
    startLoop();

    return () => {
      if (remove) {
        remove();
      }
    };
  }, []);
  useEffect(() => {
    window.onresize = function () {
      mapInstance.current && mapInstance.current.resize();
    };
    return () => {
      mapInstance.current && mapInstance.current.dispose();
    };
  }, []);
  return (
    <TabCard styles="w-[1083px] h-[633px] p-[33px]">
      <div
        style={{
          width: 1017,
          height: 567,
        }}
        ref={echartsRef}
      ></div>
    </TabCard>
  );
}
