import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type IconItemProps = {
  text: string;
  src: string | StaticImport;
};
export default function IconItem(props: IconItemProps) {
  const { text, src } = props;
  return (
    <div className="flex flex-col items-center">
      <Image src={src} width={120} height={120} priority alt={text} />
      <span className="inline-block text-[30px]">{text}</span>
    </div>
  );
}
