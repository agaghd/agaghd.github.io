var app = new Framework7({
	//App root element 
	root: '#app',
	name: 'Framework7 Demo',
	id: 'agaghd.github.io',
	// Enable swipe panel 让侧边栏可以滑动
	panel: {
		swipe: 'left',
	},
});
var $$ = Dom7;
//点击事件样例
$$('#clickExample').on('click', function(event) {
	Framework7.request.get(
			'http://www.framework7.cn/docs/app.html', {
				key: '501e56b24a64ab9aef0b3f7249e08b6a',
				q: '黄金',
				cid: "",
				full: 0
			},
			function(data) {
				console.log(data);
				alert(data);
				app.dialog.alert(data);
			},
			function(error) {
				console.log(error);
				$$('.articles').html(error);
			}
	);
});