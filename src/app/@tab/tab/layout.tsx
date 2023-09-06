import Back from '@/components/back';
import Nav from '@/components/nav';

export default function Layout(props: any) {
  return (
    <Back>
      <div
        data-back
        className="relative w-[70%] h-5/6 flex gap-20 overflow-hidden"
      >
        <Nav />
        <div
          id="content"
          className="relative h-full px-32 py-24 min-w-0 min-h-0 max-w-[3170px] overflow-hidden flex-1 text-3xl"
        >
          <div className="relative h-full">{props.children}</div>
        </div>
      </div>
    </Back>
  );
}
