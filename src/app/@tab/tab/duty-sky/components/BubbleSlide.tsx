import TabCard from '@/components/TabCard';
import Bubble from './Bubble';

export default function BubbleSlide() {
  return (
    <TabCard styles="w-[1546px] h-[606px]  px-[30px] py-[40px] ">
      <Bubble className="w-[97px] h-[97px] top-[70px] left-[233px]">
        <div className=" text-xl">电力</div>
        <div className=" text-xl">大数据</div>
      </Bubble>
      <Bubble className="w-[109px] h-[109px] top-[39px] left-[430px]">
        <div className=" text-xl">综合能</div>
        <div className=" text-xl">源服务</div>
      </Bubble>
      <Bubble className="w-[81px] h-[81px] top-[100px] right-[502px]">
        <div className=" text-xl">零碳</div>
        <div className=" text-xl">园区</div>
      </Bubble>
      <Bubble className="w-[81px] h-[81px] top-[94px] right-[381px]">
        <div className=" text-xl">储能</div>
      </Bubble>
      <Bubble className="w-[81px] h-[81px] top-[109px] right-[170px]">
        <div className=" text-xl">分布式</div>
        <div className=" text-xl">发电</div>
      </Bubble>
      <Bubble className="w-[81px] h-[81px] left-[231px] bottom-[180px]">
        <div className=" text-xl">辅助</div>
        <div className=" text-xl">服务</div>
      </Bubble>
      <Bubble className="w-[109px] h-[109px] left-[345px] bottom-[211px]">
        <div className=" text-xl">虚拟</div>
        <div className=" text-xl">电厂</div>
      </Bubble>
      <Bubble className="w-[151px] h-[151px] left-[300px] bottom-[45px]">
        <div className=" text-xl">电力需求</div>
        <div className=" text-xl">侧响应</div>
      </Bubble>
      <Bubble className="w-[198px] h-[198px] left-[454px] bottom-[97px]">
        <div className=" text-xl">电力交易</div>
        <div className=" text-xl">碳交易</div>
        <div className=" text-[10px] leading-4 mt-1">
          省内交易，跨省跨区交易，
        </div>
        <div className=" text-[10px] leading-4">
          现货交易，可再生能源配额制，
        </div>
        <div className=" text-[10px] leading-4">碳排放交易……</div>
      </Bubble>
      <Bubble className="w-[140px] h-[140px] right-[395px] bottom-[107px]">
        <div className=" text-xl">智能</div>
        <div className=" text-xl">制造</div>
      </Bubble>
      <Bubble className="w-[109px] h-[109px] right-[264px] bottom-[185px]">
        <div className=" text-xl">零碳</div>
        <div className=" text-xl">电厂</div>
      </Bubble>
      <Bubble className="w-[81px] h-[81px] right-[294px] bottom-[27px]">
        <div className=" text-xl">电力</div>
        <div className=" text-xl">金融</div>
      </Bubble>
      <Bubble className="w-[52px] h-[52px] left-[173px] top-[149px]" />
      <Bubble className="w-[36px] h-[36px] left-[189px] bottom-[147px]" />
      <Bubble className="w-[52px] h-[52px] right-[193px] bottom-[150px]" />
      <Bubble className="w-[36px] h-[36px] right-[96px] bottom-[213px]" />
    </TabCard>
  );
}