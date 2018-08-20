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
$$('#clickExample').on('click', function(e) {
	//alert 警告性质的对话框
	app.dialog.alert("Hi!");
});