'use client';
import TabCard from '@/components/TabCard';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

export default function BarChart() {
  const echartsRef = useRef<HTMLDivElement>(null);

  let mapInstance: any = null;

  const renderMap = () => {
    if (echartsRef.current !== null) {
      const renderedMapInstance = echarts.getInstanceByDom(echartsRef.current);
      if (renderedMapInstance) {
        mapInstance = renderedMapInstance;
      } else {
        mapInstance = echarts.init(echartsRef.current);
      }
      mapInstance.setOption({
        title: {
          text: '中美日发电结构',
          textStyle: {
            color: '#00FFEE',
            fontSize: 40,
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['中国', '美国', '日本'],
          selectedMode: false,
          right:40,
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
      });
    }
  };

  useEffect(() => {
    renderMap();
  }, []);
  useEffect(() => {
    window.onresize = function () {
      mapInstance && mapInstance.resize();
    };
    return () => {
      mapInstance && mapInstance.dispose();
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
