import Image from 'next/image';
import IconItem from './IconItem';
import Card from './Card';

export default function Policy() {
  return (
    <div className="flex flex-row">
      <Card title={'电力改革前'}>
        <div className="flex flex-row items-center justify-around px-10 mt-[80px]">
          <IconItem src={'/company/logo_generate.png'} text="发电企业" />
          <Image
            className="h-4"
            src="/company/route_arrow.png"
            width={128}
            height={33}
            priority
            alt={'arrow'}
          />
          <IconItem src={'/company/logo_ele_net.png'} text="电网" />
          <Image
            className="h-4"
            src="/company/route_arrow.png"
            width={128}
            height={33}
            priority
            alt={'arrow'}
          />
          <IconItem src={'/company/logo_ele_customer.png'} text="电力用户" />
        </div>
        <div className="relative w-[1001px] h-[82px] bg-primary/20 m-auto mt-[30px] text-center leading-[82px] text-[30px]">
          <i className="w-0 h-0 absolute right-1/2 -top-2 translate-x-1/2 border-b-8 border-r-8 border-l-8 border-transparent border-b-primary/20 " />
          提供输配售电服务和电网接入服务
        </div>
        <div className="w-[1001px] h-[82px] bg-[#FDAC32] m-auto mt-[40px] text-center leading-[82px] text-[30px]">
          电力用户没有选择权与议价权
        </div>
      </Card>
      <Card title={'电力改革后'} styles="w-[1690px] ml-[80px]">
        <div className="flex flex-row items-center ml-[200px]">
          <div className="w-[701px] h-[502px] flex flex-col items-center border-dashed border-primary border">
            <div className="w-full relative flex flex-row items-center mt-10 pl-[192px]">
              <IconItem
                src={'/company/logo_trade_center.png'}
                text="电力交易"
              />
              <Image
                className="h-4 rotate-180"
                src="/company/route_arrow.png"
                width={128}
                height={33}
                priority
                alt={'arrow'}
              />
              <IconItem src={'/company/logo_generate.png'} text="发电企业" />
              <Image
                className="h-4 absolute -right-24"
                src="/company/route_arrow.png"
                width={128}
                height={33}
                priority
                alt={'arrow'}
              />
            </div>
            <div className="w-full flex flex-row justify-between pl-[44px] mt-[71px] items-center">
              <div className="relative">
                <Image
                  className="h-4 absolute -right-2 -top-[53px] rotate-[120deg]"
                  src="/company/route_arrow.png"
                  width={76}
                  height={11}
                  priority
                  alt={'arrow'}
                />
                <IconItem
                  src={'/company/logo_trade_center.png'}
                  text="市场化大用户"
                />
              </div>

              <div className="relative w-[427px] h-[229px] flex flex-row justify-between border-dashed border-[#FFDD00] border pl-[37px] pt-[37px] pr-3">
                <Image
                  className="h-4 absolute -left-2 -top-4 rotate-[60deg]"
                  src="/company/route_arrow.png"
                  width={76}
                  height={11}
                  priority
                  alt={'arrow'}
                />
                <Image
                  className="h-4 absolute -left-12 top-24 rotate-180"
                  src="/company/route_arrow.png"
                  width={76}
                  height={11}
                  priority
                  alt={'arrow'}
                />
                <IconItem src={'/company/logo_sale.png'} text="售电企业" />
                <IconItem
                  src={'/company/logo_retail.png'}
                  text="市场化零售用户"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ml-16">
            <IconItem src={'/company/logo_ele_net.png'} text="电网" />
            <Image
              className="h-4 rotate-90 my-10"
              src="/company/route_arrow.png"
              width={67}
              height={17}
              priority
              alt={'arrow'}
            />
            <IconItem
              src={'/company/logo_no_ele_customer.png'}
              text="非市场化电力用户"
            />
          </div>
          <div className="relative w-[350px] bg-primary bg-opacity-[0.16] h-[350px] p-7 leading-10 mb-12 -ml-10">
            <i className="w-0 h-0 absolute -left-3 top-10 translate-x-1/2 border-b-8 border-r-8 border-t-8 border-transparent border-r-primary/20 " />
            对于市场化用户： 提供输配电服务和电网接入服务。
            <br />
            <br />
            对于非市场化用户：提供输配售电服务和电网接入服务。
          </div>
        </div>
      </Card>
    </div>
  );
}
