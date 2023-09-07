import TabCard from '@/components/TabCard';
import Image from 'next/image';

const list = [
  {
    src: '/honor/certificate_1.png',
    key: '绿色用能标杆企业',
    width: 369,
    height: 490,
  },
  {
    src: '/honor/certificate_2.png',
    key: '名称',
    width: 369,
    height: 490,
  },
  {
    src: '/honor/certificate_3.png',
    key: '名称1',
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
    src: '/honor/certificate_5.png',
    key: '全国节能环保技术创新示范企业',
    width: 369,
    height: 276,
  },
  {
    src: '/honor/certificate_6.png',
    key: '高新技术企业',
    width: 369,
    height: 276,
  },
];

const institutions = [
  '中国节能协会冶金工业节能专业委员会副主任委员',
  '全国节能环保产品技术创新示范企业',
  '清华大学ICCSD协议合作单位',
  '四川省节能协会协议合作单位',
  '重庆低碳协会协议合作单位',
  '四川省高新技术企业',
  '信息系统安全等级保护三级认证',
  'CMMI评估成熟度等级 3 级',
  '欧盟CE认证 1 项',
  ' 实用新型专利 17 项',
  '软件著作权 30 项',
];

export default function Page() {
  return (
    <div className="flex h-full items-center justify-center">
      <TabCard styles="w-[471px] h-[646px] pt-16">
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
      </TabCard>
      {list.map((m) => {
        return (
          <div
            key={m.key}
            className="flex flex-col w-[396px] h-[652px] border border-primary ml-6"
          >
            <div className="flex flex-1 justify-center items-center">
              <Image src={m.src} width={m.width} height={m.height} alt={''} />
            </div>
            <div className="flex h-[110px] justify-center items-center">
              <span className="text-primary inline-block w-3/4 text-center">
                {m.key}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
