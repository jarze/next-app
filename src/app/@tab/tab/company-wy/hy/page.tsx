import Tabs from '@/components/Tabs';
import Introduction from '../wy/components/Introduction';
import Image from 'next/image';
import Vision from '../wy/components/Vision';

export default function Page() {
  return (
    <div>
      <span className="inline-block text-[#FF7700] font-bold mb-20">
        华宇电力
      </span>
      <div
        className={`w-[2907px] h-[578px] border-[#FF7700] border relative flex items-center px-12`}
      >
        <div className="w-[196px] h-1 bg-[#FF7700] absolute left-0 -top-1" />
        <div className=" w-0 h-0 absolute right-0 top-1 border-b-[16px] border-r-[16px] border-l-[16px] border-transparent border-b-[#FF7700] rotate-45" />
        <Image
          src="/company/photo_hydl.png"
          className="h-[321px]"
          width={713}
          height={321}
          priority
          alt={''}
        />
        <div className="ml-20 leading-10">
          <p>
            四川华宇电力有限公司成立于 2004 年 3 月，注册资金 5000
            万，是一家具有独立法人资格的民营企业。公司具备国家输变电工程专业承包二级资质、国家能源局颁发的二级承装、二级承修、二级承试电力设施许可证电力专业资质。
          </p>
          <p className="mt-10">
            "建业承德"是华宇电力成立以来坚持并贯彻的企业经营理念，诚信正直、勇于担当是华宇人恪守的品质，秉承团结拼搏、专业专注的匠心精神，专注于客户的真实需求和购买价值，坚持客户价值第一，超越客户需求，最大程度为客户创造附加价值。
          </p>
          <p className="mt-10">
            华宇电力立足四川，面向全国，愿与企业各界朋友携手共筑美好未来。
          </p>
        </div>
      </div>
    </div>
  );
}
