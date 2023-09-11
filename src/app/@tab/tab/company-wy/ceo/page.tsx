'use client';
import TabCard from '@/components/TabCard';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <div data-w-auto className="flex">
      <div className="flex flex-col font-bold text-5xl leading-[60px]">
        <span>万益能源创始人&CEO</span>
        <span>李媛霞</span>
        <Image
          className="h-[470px] mt-[70px]"
          src="/company/photo_ceo.png"
          width={471}
          height={470}
          priority
          alt={''}
        />
      </div>
      <div className="relative">
        <TabCard styles="ml-[80px] mt-[195px] w-[1201px] h-[464px] px-8 pt-12 indent-12 leading-10">
          <p>
            任何能源的产生，都是牺牲生态环境换来的，面对日益恶化的环境和全球气候变暖，我们希望通过我们不断积累的数据及技术，提高能源使用效率，让能源得到最大程度的利用，助推能源领域的数字化进程，为能源绿色、低碳、可持续发展贡献力量，改善环境、共建绿色美好生活！
          </p>
          <p className="mt-12">
            我相信，只要我们不畏惧困难，有走在前列和勇立潮头的大胆开拓精神，有豁出去的勇气和魄力，把工作干在实处，发扬艰苦奋斗的精神，全力以赴，我们终将共同成就一项具有社会意义的伟大事业！
          </p>
        </TabCard>
      </div>
    </div>
  );
}
