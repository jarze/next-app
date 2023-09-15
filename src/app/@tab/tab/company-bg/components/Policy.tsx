import Image from 'next/image';
import TabCard from '@/components/TabCard';

export default function Policy() {
  return (
    <div className="flex flex-row items-center justify-center">
      <TabCard styles="!w-[1083px]  h-[633px]">
        <div className="flex flex-row items-center justify-around mt-10">
          <Image
            src="/company/policy_inform_1.png"
            width={386}
            height={546}
            priority
            alt={''}
          />
          <Image
            src="/company/policy_inform_2.png"
            width={386}
            height={546}
            priority
            alt={''}
          />
        </div>
      </TabCard>
      <TabCard styles="flex-none w-[1083px] h-[633px] px-[27px] py-14 ml-12">
        <div className="text-primary text-[40px] leading-[60px] ">
          “30 60” 双碳目标
        </div>
        <div className="flex mt-[100px]">
          <Image
            className="h-[251px]"
            src="/company/policy_target.png"
            width={457}
            height={291}
            alt={''}
          />
          <div className="text-primary text-[24px] leading-10 ml-12">
            2020年9月22日，国家主席习近平在第七十五届联合国大会一般性辩论上表示，中国将提高国家自主贡献力度，采取更加有力的政策和措施，二氧化碳的碳排放力争于2030年前达到峰值，努力争取到2060年前实现“碳中和”。
          </div>
        </div>
      </TabCard>
    </div>
  );
}
