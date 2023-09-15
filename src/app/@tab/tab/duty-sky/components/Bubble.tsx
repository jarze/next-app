export default function Bubble({ className = '', children = null }: any) {
  return (
    <div
      className={
        ' flex flex-col absolute justify-center items-center rounded-full shadow-[inset_0_0_32px_1px_#00ffee] ' +
        className
      }
    >
      {children}
    </div>
  );
}