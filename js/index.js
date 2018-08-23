var $$ = Dom7;


var app = new Framework7({
	//App root element 
	root: '#app',
	name: 'Framework7 Demo',
	id: 'agaghd.github.io',
	// Enable swipe panel 让侧边栏可以滑动
	panel: {
		swipe: 'left',
	},
	routes: routes
});


//点击事件样例
$$('#clickExample').on('click', function(event) {
	Framework7.request.get(
		'page/other.html', {},
		function(data) {
			console.log(data);
			app.dialog.alert(data);
			$$('.articles').html(data);
		},
		function(error) {
			console.log(error);
			$$('.articles').html(error);
		}
	);
//	$$('.articles').html('/about/');
});

$$('#first-btn').on(
	'click',
	function(event) {

	}
);