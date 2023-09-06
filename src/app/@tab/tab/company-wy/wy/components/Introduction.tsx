import Image from 'next/image';

import TabCard from '@/components/TabCard';

export default function Policy() {
  return (
    <div className="flex flex-row">
      <TabCard styles="flex flex-row w-[2907px] h-[578px]">
        <div className="flex h-full w-[810px] p-[47px] flex-wrap justify-between">
          <div className="flex flex-col h-full justify-between">
            <Image
              src="/company/introduction_1.png"
              className="h-[229px]"
              width={344}
              height={229}
              priority
              alt={''}
            />
            <Image
              className="h-[229px]"
              src="/company/introduction_2.png"
              width={344}
              height={229}
              priority
              alt={''}
            />
          </div>
          <div className="flex flex-col h-full justify-between">
            <Image
              src="/company/introduction_3.png"
              className="h-[229px]"
              width={344}
              height={229}
              priority
              alt={''}
            />
            <Image
              src="/company/introduction_4.png"
              className="h-[229px]"
              width={344}
              height={229}
              priority
              alt={''}
            />
          </div>
        </div>
        <div className="flex-1 leading-10 tracking-wider indent-12 mt-12 pr-20">
          <p>
            四川万益能源科技有限公司成立于2016年5月，注册资本10000万元，是一家能源互联网创新型科技公司。万益能源积极响应国家电力体制改革及能源绿色、低碳发展战略，致力于打造能源交互、生态、共享平台，充分发挥平台的技术优势，利用互联网、大数据、人工智能等高科技手段，整合平台各方资源，优化匹配电力市场交易中供需双方需求，让能源得到最有效利用，积极推动能源领域的数字化、智慧化进程及能源使用的绿色、低碳可持续发展！
          </p>
          <p className="mt-6">
            万益能源自主研发的全国统一电碳交易综合服务平台“益能购”，为各方交易主体提供电力交易、碳交易综合业务等服务，帮助各方电力交易主体实现交易一键直达，提高交易效率，规避交易履约风险，让能源得到最有效利用！同时，为践行绿色钢铁智能制造“绿色、低碳发展”的战略目标，万益能源以数智化创新能力为抓手，全面“数据赋能”钢铁行业数字化转型和智能制造业务，积极探索新形势下传统钢铁企业绿色智慧发展新航道，助力企业完成碳达峰、碳中和目标，实现合作共赢！
          </p>
          <p className="mt-6">
            未来，万益能源将继续紧密围绕各方主体的真实需求和使用场景，不断拓展电碳交易、碳减排开发、智能制造、需求侧响应、虚拟电厂、电力金融等产品及服务，为各方交易主体创造非凡价值!
          </p>
        </div>
      </TabCard>
    </div>
  );
}
