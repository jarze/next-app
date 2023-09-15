'use client';
import * as echarts from 'echarts';
import { useCallback, useEffect, useRef, useState } from 'react';
import { chinaMapConfig } from './config';
import { geoJson } from './geo';
import { resData } from './data';
import TabCard from '@/components/TabCard';

const echartColors = [
  { color: '#E0022B', text: '85-100%' },
  { color: '#E04919', text: '72-86%' },
  { color: '#E09107', text: '58-72%' },
  { color: '#C1B809', text: '43-58%' },
  { color: '#A3E00B', text: '29-43%' },
  { color: '#9CDB6B', text: '15-29%' },
  { color: '#96D7CC', text: '0-15%' },
];

export default function GeogMap() {
  const currentIndex = useRef<number>(0);
  const echartsRef = useRef<HTMLDivElement>(null);

  let timer = useRef<NodeJS.Timeout | null>();
  let mapInstance = useRef<echarts.ECharts>();

  const [current, setCurrent] = useState(resData.data[0]);

  const startLoop = () => {
    currentIndex.current = 0;
    timer.current = setInterval(() => {
      currentIndex.current++;
      if (currentIndex.current > 3) {
        currentIndex.current = 0;
      }
      loop();
    }, 3000);
  };

  const renderMap = () => {
    if (echartsRef.current !== null) {
      const renderedMapInstance = echarts.getInstanceByDom(echartsRef.current);
      if (renderedMapInstance) {
        mapInstance.current = renderedMapInstance;
      } else {
        mapInstance.current = echarts.init(echartsRef.current);
      }
      mapInstance.current.setOption(
        chinaMapConfig({
          data: resData.data[0].data,
          max: resData.max,
          min: 0,
        }),
      );
      setCurrent(resData.data[0]);

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
  };

  const loop = useCallback(() => {
    if (!mapInstance.current) return;
    setCurrent(resData.data[currentIndex.current]);

    mapInstance.current.setOption(
      chinaMapConfig({
        data: resData.data[currentIndex.current].data,
        max: resData.max,
        min: 0,
      }),
    );
  }, []);
  useEffect(() => {
    echarts.registerMap('china', { geoJSON: geoJson } as any);
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
    <TabCard styles="w-[1110px] h-[633px] p-[33px] ml-[68px]">
      <div className="text-primary text-[40px]">全国火力发电占比（{current.year}）</div>
      <div className="flex">
        <div className="mt-20">
          <div className="text-xl border border-primary shadow-inner-primary text-center py-2 px-6">
          {current.year}年火电占比：{current.year_percent}%
          </div>
          <div className="mt-6 border border-primary p-6 w-[300px]">
            <div className="text-primary text-xl">{current.year}年火电占比排名前10</div>
            <div className="flex flex-wrap justify-between leading-10 text-xl">
              {new Array(10).fill(1).map((_, index) => {
                const item = current.rank[index];
                return (
                  <div className='mr-4' key={item[0]}>
                    {item[0]}:{item[1]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-[170px] ml-[10px] w-[100px]">
          {echartColors.map((m) => {
            return (
              <div key={m.text}>
                <i
                  style={{ background: m.color }}
                  className="inline-block w-4 h-4"
                />
                <span className="inline-block ml-4 text-sm">{m.text}</span>
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: 600,
            height: 670,
          }}
          ref={echartsRef}
        ></div>
      </div>
    </TabCard>
  );
}
