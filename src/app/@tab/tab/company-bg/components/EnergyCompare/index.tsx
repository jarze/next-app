'use client';
import * as echarts from 'echarts';
import { useState, useEffect, useRef } from 'react';
import TabCard from '@/components/TabCard';
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
              value: value === null ? null : value.total > value.use ? 1 : 0,
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
    <TabCard styles="!w-[1083px] h-[633px] p-[33px] ml-[68px]">
      <div className="text-primary text-[40px]">
        全国31个省份发电用电供需对比
      </div>
      <div className="flex">
        <div className="mt-20">
          <div className="flex">
            <div
              onClick={() => {
                setVisible('big');
              }}
              className="w-[176px] h-[65px] leading-[65px] text-center bg-[#89FF00]"
            >
              供大于求
            </div>
            <div
              onClick={() => {
                setVisible('small');
              }}
              className="ml-10 w-[176px] h-[65px] leading-[65px] text-center shadow-inner-primary"
            >
              供小于求
            </div>
          </div>
          <div className="relative">
            {visible === 'big' && (
              <div
                onClick={() => {
                  setVisible(null);
                }}
                className="overflow-y-auto absolute top-0 left-0 w-[499px] h-[331px] border-[#89FF00] border z-10 bg-[#141A25] text-xs leading-3 py-2"
              >
                <div className="flex w-full px-4 py-1">
                  <div className="flex flex-1">省市</div>
                  <div className="flex flex-[2] justify-end">
                    总发电量(亿千瓦时)
                  </div>
                  <div className="flex flex-[2] justify-end">
                    全社会用电量(亿千瓦时)
                  </div>
                </div>
                {resData
                  .filter(
                    (m) => m.value !== null && m.value.total > m.value.use,
                  )
                  .map((m) => {
                    return (
                      <div className="flex w-full px-4 py-1">
                        <div className="flex flex-1">{m.label || m.name}</div>
                        <div className="flex flex-[2] justify-end">
                          {m.value?.total}
                        </div>
                        <div className="flex flex-[2] justify-end">
                          {m.value?.use}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
            {visible === 'small' && (
              <div
                onClick={() => {
                  setVisible(null);
                }}
                className="overflow-y-auto absolute top-0 left-0 w-[499px] h-[331px] border-[#89FF00] border z-10 bg-[#141A25] text-xs leading-3 py-2"
              >
                <div className="flex w-full px-4 py-1">
                  <div className="flex flex-1">省市</div>
                  <div className="flex flex-[2] justify-end">
                    总发电量(亿千瓦时)
                  </div>
                  <div className="flex flex-[2] justify-end">
                    全社会用电量(亿千瓦时)
                  </div>
                </div>
                {resData
                  .filter(
                    (m) => m.value !== null && m.value.total <= m.value.use,
                  )
                  .map((m) => {
                    return (
                      <div className="flex w-full px-4 py-1">
                        <div className="flex flex-1">{m.label || m.name}</div>
                        <div className="flex flex-[2] justify-end">
                          {m.value?.total}
                        </div>
                        <div className="flex flex-[2] justify-end">
                          {m.value?.use}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
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
