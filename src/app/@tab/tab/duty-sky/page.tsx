'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import TabCard from '@/components/TabCard';
import BubbleSlide from './components/BubbleSlide';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './index.scss';

SwiperCore.use([Pagination]);

export default function Page() {
  return (
    <div
      data-no-wrapper
      className="bg-[url('/duty/bg_duty.png')] h-[898px] w-[3107px] bg-[length:100%_100%] overflow-hidden "
    >
      <Swiper
        className="w-[1261px] h-[464px] !absolute right-[200px] top-1/2 -translate-y-1/2 pr-[60]"
        mousewheel={{ releaseOnEdges: true }}
        pagination={{
          clickable: true,
        }}
        direction={'vertical'}
        spaceBetween={0}
      >
        <SwiperSlide>
          <BubbleSlide />
        </SwiperSlide>
        <SwiperSlide>
          <TabCard styles="w-[1201px] h-[464px] px-[30px] py-[40px] flex justify-center items-center">
            <div className=" font-bold ">
              以打造中国<span className=" text-[40px]">最有价值</span>
              的能源交互、生态、共享平台
            </div>
          </TabCard>
        </SwiperSlide>
        <SwiperSlide>
          <TabCard styles="w-[1201px] h-[464px] px-[30px] py-[40px] ">
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
