'use client';
import * as echarts from 'echarts';
import { useState, useEffect, useRef } from 'react';
import TabCard from '@/components/TabCard';
import { chinaMapConfig } from './config';
import { geoJson } from './geo';
import { resData } from './data';

export default function GeogMap() {
  const echartsRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<null | 'small' | 'big'>('small');
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
              ...value,
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
                if (visible === 'big') {
                  setVisible(null);
                } else {
                  setVisible('big');
                }
              }}
              className={`w-[156px] h-[65px] leading-[65px] text-center ${
                visible === 'big'
                  ? 'text-[#030322] bg-[#89FF00]'
                  : 'shadow-[inset_0_0_32px_1px_#89FF00]'
              }`}
            >
              供大于求
            </div>
            <div
              onClick={() => {
                if (visible === 'small') {
                  setVisible(null);
                } else {
                  setVisible('small');
                }
              }}
              className={`ml-10 w-[156px] h-[65px] leading-[65px] text-center ${
                visible === 'small'
                  ? 'text-[#030322] bg-primary'
                  : 'shadow-[inset_0_0_32px_1px_#00FFEE]'
              }`}
            >
              供小于求
            </div>
          </div>
          <div className="relative">
            {visible === 'big' && (
              <div className="absolute top-0 left-0 w-[350px] h-[331px] border-[#89FF00] border z-10 bg-[#141A25]  text-base leading-3 py-2">
                <div className="flex w-full px-4 py-1">
                  <div className="flex flex-1">省市</div>
                  <div className="flex flex-col flex-[2] items-end leading-5 justify-center">
                    <p>总发电量</p>
                    <p>(亿千瓦时)</p>
                  </div>
                  <div className="flex flex-col flex-[2] items-end leading-5">
                    <p>全社会用电量</p>
                    <p>(亿千瓦时)</p>
                  </div>
                </div>
                <div className="overflow-y-auto h-[260px]">
                  {resData
                    .filter(
                      (m) => m.value !== null && m.value.total > m.value.use,
                    )
                    .map((m) => {
                      return (
                        <div key={m.name} className="flex w-full px-4 py-1">
                          <div className="flex flex-1">{m.name}</div>
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
              </div>
            )}
            {visible === 'small' && (
              <div
                onClick={() => {
                  setVisible(null);
                }}
                className="absolute top-0 left-0 w-[350px] h-[331px] border-primary border z-10 bg-[#141A25] text-base leading-3 py-2"
              >
                <div className="flex w-full px-4 py-1">
                  <div className="flex flex-1">省市</div>
                  <div className="flex flex-col flex-[2] items-end leading-5 justify-center">
                    <p>总发电量</p>
                    <p>(亿千瓦时)</p>
                  </div>
                  <div className="flex flex-col flex-[2] items-end leading-5">
                    <p>全社会用电量</p>
                    <p>(亿千瓦时)</p>
                  </div>
                </div>
                <div className="overflow-y-auto h-[260px]">
                  {resData
                    .filter(
                      (m) => m.value !== null && m.value.total <= m.value.use,
                    )
                    .map((m) => {
                      return (
                        <div key={m.name} className="flex w-full px-4 py-1">
                          <div className="flex flex-1">{m.label || m.name}</div>
                          <div className="flex flex-[2] justify-end ">
                            {m.value?.total}
                          </div>
                          <div className="flex flex-[2] justify-end">
                            {m.value?.use}
                          </div>
                        </div>
                      );
                    })}
                </div>
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
