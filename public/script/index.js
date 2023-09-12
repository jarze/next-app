document.addEventListener('contextmenu', function (event) {
	event.preventDefault();
});

window.oncontextmenu = function (e) {
	e.preventDefault();
};

document.addEventListener(
	'dblclick',
	function (e) {
		console.log('尝试禁止双击事件');
		e.preventDefault();
	},
	{ passive: false }
);
