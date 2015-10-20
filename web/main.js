(function(){
    require.config({
        baseUrl: "/assets/dist",
        paths: {
        	"jquery": 		"/assets/vendor/jquery/jquery",
        	"react": 		"/assets/vendor/react-0.14.0/build/react",
        	"react-dom": 	"/assets/vendor/react-0.14.0/build/react-dom"
        }
    });
}());

define(['jquery' , 'data'], function ($, data) {
	console.log('Hellow');
	$.ajax('//localhost:3000/api/Users/login', {
		method: 'POST',
		data: {
			email: "fred@gmail.com",
			password: "xxx"
		},
		success: function (res) {
			console.log(res);
		},
		error: function (err) {
			console.error('Something went wrong', err);
		}
	})
});	