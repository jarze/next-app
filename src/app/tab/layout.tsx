export default function Layout(props: any) {
	return (
		<div>
			<nav
				id='sidenav-1'
				className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
				data-te-sidenav-init
				data-te-sidenav-hidden='false'
				data-te-sidenav-position='absolute'
			>
				<ul
					className='relative m-0 list-none px-[0.2rem]'
					data-te-sidenav-menu-ref
				>
					<li className='relative'>
						<a
							className='flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10'
							data-te-sidenav-link-ref
						>
							<span className='mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='h-4 w-4'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
									/>
								</svg>
							</span>
							<span>Link 1</span>
						</a>
					</li>
				</ul>
			</nav>
			<div className='p-5 !pl-[260px]' id='content'>
				{props.children}
			</div>
		</div>
	);
}
