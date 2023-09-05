import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type CardProps = {
  title: string;
  children?: React.ReactNode;
  styles?: string;
};
export default function Card(props: CardProps) {
  const { title, children, styles } = props;
  return (
    <div
      className={`w-[1083px] h-[633px] border-primary border relative ${styles}`}
    >
      <div className="w-[196px] h-1 bg-primary absolute left-0 -top-1" />
      <div className=" w-0 h-0 absolute right-0 top-1 border-b-[16px] border-r-[16px] border-l-[16px] border-transparent border-b-primary rotate-45" />
      <span className="m-8 text-primary text-[40px] inline-block">
        {title}
      </span>
      {children}
    </div>
  );
}
