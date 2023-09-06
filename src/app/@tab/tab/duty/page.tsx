import TabCard from '@/components/TabCard';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative flex justify-center items-center h-full w-full">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex justify-center items-center px-[69px] w-[1021px] h-[346px] bg-gradient-to-r from-[#F07026] to-[#1BD7CB] leading-10">
              <span>
                公司在发展壮大的同时，成立“华宇万益志愿者服务队”定期开展各项志愿者活动，积极投入社会公益事业。用自己的实际行动，担当起社会责任，传承中华文明品德，不断回报社会。
              </span>
            </div>
            <Image
              className="ml-6"
              src={'/duty/photo_1.png'}
              width={495}
              height={346}
              alt={''}
            />
          </div>
          <div className="flex flex-row mt-6">
            <Image
              src={'/duty/photo_2.png'}
              width={495}
              height={346}
              alt={''}
            />
            <Image
              className="ml-6"
              src={'/duty/photo_3.png'}
              width={495}
              height={346}
              alt={''}
            />
            <Image
              className="ml-6"
              src={'/duty/photo_4.png'}
              width={495}
              height={346}
              alt={''}
            />
          </div>
        </div>
        <Image
          className="ml-6"
          src={'/duty/photo_5.png'}
          width={1154}
          height={707}
          alt={''}
        />
      </div>
    </div>
  );
}
