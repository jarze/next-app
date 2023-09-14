import Image from 'next/image';

const list = [
  {
    src: '/business/introduce_1.png',
    width: 437,
    height: 619,
  },
  {
    src: '/business/introduce_2.png',
    width: 482,
    height: 619,
    className: '-ml-10',
  },
  {
    src: '/business/introduce_3.png',
    width: 321,
    height: 619,
    className: '-ml-20',
  },

  {
    src: '/business/introduce_4.png',
    width: 321,
    height: 619,
    className: 'ml-[300px]',
  },
  {
    src: '/business/introduce_5.png',
    width: 463,
    height: 619,
    className: '-ml-20',
  },
];

export default function Page() {
  return (
    <div className="flex h-full items-center justify-center">
      {list.map((m) => {
        return (
          <Image className={m.className} key={m.src} {...m} alt={'arrow'} />
        );
      })}

      <div className="flex flex-col items-center justify-center w-[559px] h-[559px] left-[1400px] absolute border border-primary shadow-[inset_0_0_32px_1px] shadow-primary rounded-full">
        <Image
          src="/business/introduce_logo.png"
          width={321}
          height={129}
          alt={'arrow'}
        />
         <Image
         className='mt-8'
          src="/business/introduce_title.png"
          width={224}
          height={68}
          alt={'arrow'}
        />
      </div>
    </div>
  );
}
