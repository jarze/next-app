import Image from 'next/image';
import TabCard from '@/components/TabCard';
import LightenItem from '@/components/lightenItem';

const list = [
  {
    src: '/honor/certificate_6.png',
    key: '高新技术企业',
    width: 369,
    height: 276,
  },
  {
    src: '/honor/certificate_3.png',
    key: '实用新型专利',
    width: 369,
    height: 490,
  },
  {
    src: '/honor/certificate_4.png',
    key: '信息系统安全等级保护备案证明',
    width: 369,
    height: 276,
  },
  {
    src: '/honor/certificate_2.png',
    key: '欧盟CE认证',
    width: 369,
    height: 490,
  },
  {
    src: '/honor/certificate_7.jpg',
    key: 'CMMI3级成熟度认证',
    width: 369,
    height: 276,
  },
  {
    src: '/honor/certificate_8.png',
    key: '电力需求侧服务机构',
    width: 369,
    height: 490,
  },
  {
    src: '/honor/certificate_9.jpg',
    key: '四川专精特新中小企业',
    width: 369,
    height: 490,
  },
  {
    src: '/honor/certificate_1.png',
    key: '绿色用能标杆企业',
    width: 369,
    height: 490,
  },
  {
    src: '/honor/certificate_5.png',
    key: '全国节能环保技术创新示范企业',
    width: 369,
    height: 276,
  },
];

const institutions = [
  '四川省高新技术企业',
  '实用新型专利 17 项',
  '软件著作权 32 项',
  '信息系统安全等级保护三级认证',
  'CMMI评估成熟度等级 3 级',
  '欧盟CE认证',
  '电力需求侧管理服务机构能力评定（二级）',
  '四川省专精特新企业认定',
  '中国节能协会冶金工业节能专业委员会副主任委员',
  '全国节能环保产品技术创新示范企业',
  '清华大学ICCSD协议合作单位',
  '四川省节能协会协议合作单位',
  '重庆低碳协会协议合作单位',
];

const patent = [
  '一种基于非阻塞输入输出的审计日志系统通信方法查看其他1条相关数据',
  '一种适用于无功补偿配电房的仪表自检接线系统及方法',
  '一种基于sax算法的商业体异常用电检测方法',
  '一种基于边缘算法的商业体异常用电检测方法',
  '电能数据采集箱及采集系统',
  '能效采集器及系统',
  '编程器和升级装置',
  'RS485电路和通信',
  '红外收发电路、电力数据采集装置及电力数据采集系统',
  '城市能源全景交互式大数据平台管理系统',
  '一种能源数据网关',
  '一种配电手持智能巡检终端',
  '实用新型专利 17 项',
  '软件著作权 32 项',
  '信息系统安全等级保护三级认证',
  'CMMI评估成熟度等级 3 级',
  '欧盟CE认证',
  '电力需求侧管理服务机构能力评定（二级）',
  '四川省专精特新企业认定',
  '中国节能协会冶金工业节能专业委员会副主任委员',
  '全国节能环保产品技术创新示范企业',
  '清华大学ICCSD协议合作单位',
  '四川省节能协会协议合作单位',
  '重庆低碳协会协议合作单位',
];

export default function Page() {
  return (
    <div className="!absolute -left-[50px] flex h-full items-center">
      <div className="flex w-[2500px] overflow-x-auto">
        {list.map((m) => {
          return (
            <LightenItem
              key={m.key}
              className="flex flex-none flex-col w-[396px] h-[652px] border border-primary mr-6"
            >
              <div className="flex flex-1 justify-center items-center">
                <Image
                  style={{ height: `${m.height}px` }}
                  src={m.src}
                  width={m.width}
                  height={m.height}
                  alt={''}
                />
              </div>
              <div className="flex h-[110px] justify-center items-center">
                <span className="text-primary inline-block w-3/4 text-center">
                  {m.key}
                </span>
              </div>
            </LightenItem>
          );
        })}
      </div>

      <TabCard styles="w-[471px] h-[646px] flex justify-center items-center justy ml-5 ">
        <div className="overflow-y-auto h-[566px]">
          {institutions.map((m) => {
            return (
              <div key={m} className="flex px-5 text-lg mt-4">
                <Image
                  className="mr-2"
                  src={'/honor/icon.png'}
                  width={24}
                  height={24}
                  alt={''}
                />
                <span>{m}</span>
              </div>
            );
          })}
        </div>
      </TabCard>
    </div>
  );
}
