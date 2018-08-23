var app = new Framework7({
	//App root element 
	root: '#app',
	name: 'Framework7 Demo',
	id: 'agaghd.github.io',
	// Enable swipe panel 让侧边栏可以滑动
	panel: {
		swipe: 'left',
	},
	routes: [{
			name: 'index',
			path: '/',
			url: 'index.html'
		},
		{
			name: 'about',
			path: '/about/',
			url: 'https://agaghd.github.io/page/about.html',
		},
		{
			name: 'other',
			path: '/other/',
			url: './page/other.html',
		}
	]
});
var $$ = Dom7;
//var mainView = app.views.create('.view-main',{
//	routes: [{
//			name: 'about',
//			path: '/about/',
//			url: 'agaghd.github.io/page/about.html',
//		},
//		{
//			name: 'other',
//			path: '/other/',
//			url: './page/other.html',
//		}
//	]
//});

//点击事件样例
$$('#clickExample').on('click', function(event) {
	Framework7.request.get(
		'https://agaghd.github.io/page/about.html', {},
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
	$$('.articles').html('/about/');
});

$$('#first-btn').on(
	'click',
	function(event) {
		Framework7.request.post(
			
		);
	}
);