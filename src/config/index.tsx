export const routes = [
	{
		title: '成立背景',
		url: '/tab/bg',
		children: [
			/** 交互图片 */
			{ title: '电改政策', url: '/tab/bg-dg' },
			/** 图表 */
			{ title: '发电侧结构', url: '/tab/bg-fd' },
		],
	},
	/** 新闻列表 + 详情展示 */
	{ title: '万益能源', url: '/tab/ny' },
	/**  */
	{ title: '创业初心', url: '/tab/cy' },
	/** 单页面显示 */
	{ title: '使命愿景', url: '/tab/sm' },
	/** 单页面 -> 图片交互跳转 */
	{ title: '业务介绍', url: '/tab/yw' },
	{
		title: '万益实力',
		url: '/tab/wy',
		children: [
			/** 单页面 /图片 */
			{ title: '人才团队', url: '/tab/wy-rc' },
			/** 单页面 */
			{ title: '荣誉资质', url: '/tab/wy-ry' },
		],
	},
	/** 页面list+可能详情展示 */
	{ title: '合作生态', url: '/tab/hz' },

	/** 单页面新闻展示 */
	{ title: '社会责任', url: '/tab/sh' },

	/** 单页面+地图交互 */
	{ title: '全国布局', url: '/tab/bj' },
	/** 单页面+视频播播放 */
	{ title: '星空计划', url: '/tab/xk' },
];
