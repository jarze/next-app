export default function Vision() {
  return (
    <div className="flex">
      <Item className="ml-[300px] mt-[250px]">
        <div className="text-center text-primary text-[40px]">2016年</div>
        <div className="text-center text-primary mt-3">万益能源正式成立</div>
      </Item>
      <Item className="ml-[100px] mt-[130px]">
        <div className="text-center text-primary text-[40px]">2017年1月</div>
        <div className="text-center text-primary mt-3">
          万益能源入驻成都来福士广场
        </div>
        <div className="text-center text-primary mt-3">启动星空计划</div>
      </Item>
      <Item className="ml-[100px] mt-[250px]">
        <div className="text-center text-primary text-[40px]">愿景</div>
        <div className="text-center text-primary mt-3">
          以打造中国最有价值的能源交互、生态、共享平台
        </div>
      </Item>
      <Item className="ml-[100px] mt-[150px]">
        <div className="text-center text-primary text-[40px]">使命</div>
        <div className="text-center text-primary mt-3">数据改变未来</div>
      </Item>
      <Item className="ml-[180px] mt-[140px]">
        <div className="text-center text-primary text-[40px]">价值观</div>
        <div className="text-center text-primary mt-3">客户至上 合作共赢</div>
        <div className="text-center text-primary mt-3">简单纯粹 共享共担</div>
        <div className="text-center text-primary mt-3">务实高效 拼搏创新</div>
      </Item>
    </div>
  );
}
function Item({ children, className }: any) {
  return (
    <div className={'flex flex-col items-center animate-drop ' + className}>
      {children}

      <div
        className="w-[37px] h-[37px] rounded-full mt-8"
        style={{
          background: 'radial-gradient(circle at center,#fff,#00FFEE,#00CCBE)',
        }}
      />
      <div
        className="w-[3px] h-[329px] -mt-1"
        style={{
          background:
            'linear-gradient(4deg, rgba(0,0,0,0) 0%, rgba(0,255,238,0.41) 62%, #00FFEE 83%, #FFFFFF 99%, rgba(0,18,60,0) 100%, #FFFFFF 100%)',
        }}
      />
    </div>
  );
}
