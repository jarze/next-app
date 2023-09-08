'use client';
import * as echarts from 'echarts';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { chinaMapConfig } from './config';
import { geoJson } from './geo';
import { resData } from './data';

export default function GeogMap() {
  const echartsRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<null | 'small' | 'big'>(null);
  let mapInstance: any = null;

  const renderMap = () => {
    if (echartsRef.current !== null) {
      const renderedMapInstance = echarts.getInstanceByDom(echartsRef.current);
      if (renderedMapInstance) {
        mapInstance = renderedMapInstance;
      } else {
        mapInstance = echarts.init(echartsRef.current);
      }
      mapInstance.setOption(
        chinaMapConfig({
          data: resData.map((m) => {
            const { name, value } = m;
            return {
              name,
              value: value === null ? 0 : 1,
            };
          }),
          max: 1,
          min: 0,
        }),
      );
    }
  };

  useEffect(() => {
    echarts.registerMap('china', { geoJSON: geoJson } as any);
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
    <>
      <div
        className="absolute -top-[70px] left-[250px]"
        style={{
          width: 1000,
          height: 800,
        }}
        ref={echartsRef}
      />
      <div className="ml-[1500px] pt-[130px]">
        <div className="flex">
          <Image
            className="ml-6 h-[44px]"
            src={'/business/flag_yellow.png'}
            width={34}
            height={44}
            alt={''}
          />
          <div className="ml-10">
            <div className="text-5xl">送端</div>
            <div className="mt-4">新疆、青海、宁夏、山西、陕西</div>
          </div>
        </div>
        <div className="flex mt-[150px]">
          <Image
            className="ml-6 h-[44px]"
            src={'/business/flag_red.png'}
            width={34}
            height={44}
            alt={''}
          />
          <div className="ml-10">
            <div className="text-5xl">受端</div>
            <div className="mt-4">四川(点对点、点对网)、重庆、江苏、浙江、上海、河南、湖北  </div>
          </div>
        </div>
      </div>
    </>
  );
}
