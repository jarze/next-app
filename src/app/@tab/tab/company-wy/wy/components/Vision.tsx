import TabCard from '@/components/TabCard';
import Image from 'next/image';

export default function Vision() {
  return (
    <div className="flex flex-row">
      <TabCard styles="mr-[59px] h-[631px]">
        <Image
          src="/company/vision_1.png"
          className="h-[631px]"
          width={1081}
          height={631}
          priority
          alt={''}
        />
      </TabCard>
      <TabCard styles="mr-[59px] h-[631px]">
        <Image
          src="/company/vision_2.png"
          className="h-[631px]"
          width={1081}
          height={631}
          priority
          alt={''}
        />
      </TabCard>
      <TabCard styles='h-[631px]'>
        <Image
          src="/company/vision_3.png"
          className="h-[631px]"
          width={1081}
          height={631}
          priority
          alt={''}
        />
      </TabCard>
    </div>
  );
}
