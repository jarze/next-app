'use client';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
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
  const echartsRef = useRef<HTMLDivElement>(null);

  let mapInstance = useRef<echarts.ECharts>();

  const renderMap = () => {
    if (echartsRef.current !== null) {
      const renderedMapInstance = echarts.getInstanceByDom(echartsRef.current);
      if (renderedMapInstance) {
        mapInstance.current = renderedMapInstance;
      } else {
        mapInstance.current = echarts.init(echartsRef.current);
      }
      mapInstance.current.setOption(
        chinaMapConfig({ data: resData.data, max: resData.max, min: 0 }),
      );
    }
  };

  useEffect(() => {
    echarts.registerMap('china', { geoJSON: geoJson } as any);
    renderMap();
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
      <div className="text-primary text-[40px]">全国火力发电占比（2009）</div>
      <div className="flex">
        <div className="mt-20">
          <div className="text-xl border border-primary shadow-inner-primary text-center py-2 px-6">
            2009年火电占比：80%
          </div>
          <div className="mt-6 border border-primary p-6 w-[300px]">
            <div className="text-primary text-xl">2009年火电占比排名前10</div>
            <div className="flex flex-wrap justify-between leading-10 text-xl">
              <div>北京:99%</div>
              <div>山东:98%</div>
              <div>山西:98%</div>
              <div>上海:98%</div>
              <div>安徽:98%</div>
              <div>河北:97%</div>
              <div>辽宁:96%</div>
              <div>河南:94%</div>
              <div>黑龙江:94%</div>
              <div>宁夏:94%</div>
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
