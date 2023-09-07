'use client';
import * as echarts from 'echarts';
import { LegacyRef, useEffect, useRef } from 'react';
import { chinaMapConfig } from './config';
import { geoJson } from './geo';
import { resData } from './data';

// echarts.use([MapChart]);

export default function GeogMap() {
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
      mapInstance.setOption(
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
      mapInstance && mapInstance.resize();
    };
    return () => {
      mapInstance && mapInstance.dispose();
    };
  }, []);
  return (
    <div
      style={{
        width: 600,
        height: 670,
      }}
      ref={echartsRef}
    ></div>
  );
}