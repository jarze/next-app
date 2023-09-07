import TabCard from '@/components/TabCard';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex h-full w-full items-center justify-between">
      <Image
        className="mr-2"
        src={'/team/photo_team.png'}
        width={1380}
        height={776}
        alt={''}
      />
      <TabCard styles="w-[1570px] h-[770px]">
        <div className="flex w-full justify-evenly mt-[120px]">
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-full bg-primary text-center leading-[200px] font-bold text-[55px] text-[#030322]">
              95.7%
            </div>
            <span className="inline-block mt-[20px]">本科</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-full bg-primary text-center leading-[200px] font-bold text-[55px] text-[#030322]">
              95.7%
            </div>
            <span className="inline-block mt-[20px]">硕士</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-full bg-primary text-center leading-[200px] font-bold text-[55px] text-[#030322]">
              95.7%
            </div>
            <span className="inline-block mt-[20px]">博士</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-full bg-primary text-center leading-[200px] font-bold text-[55px] text-[#030322]">
              95.7%
            </div>
            <span className="inline-block mt-[20px]">海外留学背景</span>
          </div>
        </div>
        <div className='px-20 mt-28 leading-10'>
          <p>
            万益能源顺应国家政策趋势，不断探索业务转型升级，增强自主研发和创新能力，搭建了以客户需求为核心、以业务为导向的复合式人才团队。
          </p>
          <p>
            公司拥有超过50%的产研团队，团队成员来自中国、美国、法国、德国、香港等知名企业和高校，专业背景横跨电气、信息工程、人工智能、数学、金融等领域。团队成员本科生及以上占比超过95.7%，其中，硕士博士占比分别达到30%和5%以上，此外，还有10%拥有海外留学背景。
          </p>
        </div>
      </TabCard>
    </div>
  );
}
