import Image from 'next/image';
import TabCard from '@/components/TabCard';

export default function Page() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex w-full overflow-x-auto">
        <TabCard styles="flex-none w-[1083px] h-[627px] px-[27px] py-14 mr-12">
          <div className="text-primary text-[40px] leading-[60px] ">
            2021年3月12日，《中华人民共和国经济和社会发展
            第十四个五年规划和2035年远景目标纲要》
          </div>
          <div className="flex mt-20">
            <Image
              className="h-[251px]"
              src="/business/intelligent_manufacturing_1.png"
              width={416}
              height={251}
              alt={''}
            />
            <div className="text-primary text-[24px] leading-10 ml-12">
              “加快数字化发展，建设数字中国”中明确提出打造数字经济新优势：充分发挥海量数据和丰富应用场景优势，促进数字技术与实体经济深度融合，赋能传统产业转型升级，催生新产业新业态新模式，壮大经济发展新引擎。实施“上云用数赋智”行动，推动数据赋能全产业链协同转型。
            </div>
          </div>
        </TabCard>
        <TabCard styles="flex-none w-[1083px] h-[627px] px-[27px] py-14 mr-12">
          <Image
            src="/business/intelligent_manufacturing_2.png"
            width={1029}
            height={515}
            alt={''}
          />
        </TabCard>
        <TabCard styles="flex-none w-[1083px] h-[627px] px-[27px] py-14 mr-12">
          <Image
            src="/business/intelligent_manufacturing_3.png"
            width={1029}
            height={515}
            alt={''}
          />
        </TabCard>
        <TabCard styles="flex-none w-[1083px] h-[627px] px-[27px] py-14 mr-12">
          <Image
            src="/business/intelligent_manufacturing_4.png"
            width={1029}
            height={515}
            alt={''}
          />
        </TabCard>
        <TabCard styles="flex-none w-[1083px] h-[627px] px-[27px] py-14 mr-12">
          <Image
            src="/business/intelligent_manufacturing_5.png"
            width={1029}
            height={515}
            alt={''}
          />
        </TabCard>
        <TabCard styles="flex-none w-[1083px] h-[627px] px-[27px] py-14 mr-12">
          <Image
            src="/business/intelligent_manufacturing_6.png"
            width={1029}
            height={515}
            alt={''}
          />
        </TabCard>
      </div>
    </div>
  );
}
