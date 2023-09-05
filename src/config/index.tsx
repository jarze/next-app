export const routes = [
	{
		title: '公司介绍',
		url: '/tab/company',
		children: [
			{ title: '成立背景', url: '/tab/company-bg' },
			{ title: '关于万益', url: '/tab/company-wy' },
		],
	},
	{
		title: '合作生态',
		url: '/tab/collaboration',
		children: [
			{ title: '协会/交易机构', url: '/tab/collaboration-society' },
			{ title: '合作伙伴', url: '/tab/collaboration-team' },
		],
	},
	{
		title: '业务布局',
		url: '/tab/business',
		children: [
			{ title: '业务介绍', url: '/tab/business-introduce' },
			{ title: '全国布局', url: '/tab/business-layout' },
		],
	},
	{ title: '荣誉资质', url: '/tab/honour' },
	{ title: '人才团队', url: '/tab/wy-team' },
	{
		title: '社会责任',
		url: '/tab/duty',
		children: [{ title: '星空计划', url: '/tab/duty-sky' }],
	},
];
