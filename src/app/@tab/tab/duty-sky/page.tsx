'use client';
import TabCard from '@/components/TabCard';
import request from '@/utils/request';

export default function Page() {
  return (
    <div
      onClick={() => {
        request.get('/front/light-on', { baseURL: '/api' });
      }}
      className=" absolute z-50 -top-[95px] -left-[129px] bg-[url('/duty/bg_duty.png')] h-[904px] w-[3171px] bg-[length:3171px_833px] overflow-hidden "
    >
      <TabCard styles="!absolute w-[1201px] h-[464px] px-[30px] py-[40px] right-24 top-1/2 -translate-y-1/2">
        <span className="font-bold text-[32px]">万益能源星空计划</span>
        <p className=" leading-[48px] mt-5 text-2xl">
          曾记否，仰望星空繁星点点；
          曾记否，无数次月影下蹦跳玩耍，身体的倒影亦可勾勒出各种图形….
          而今，抬头仰望，璀璨的星空已为奢望。为了找寻儿时的追忆，万益能源科技希望通过每一个万益人的努力，让能源使用更清洁、更环保、更有效！
        </p>
        <p className=" leading-[48px] mt-14 text-2xl">
          希望有一天，我们再次仰望夜空，还是那曾经的繁星点点。
        </p>
      </TabCard>
    </div>
  );
}
