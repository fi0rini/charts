requirejs.config({
	baseUrl: "./",
    paths: {
    	"vendor": 		"../vendor",
    	"jquery": 		"../vendor/jquery/jquery",
    	"react": 		"../vendor/react-0.14.0/react",
    	"react-dom": 	"../vendor/react-0.14.0/react-dom"
    }
});

define([], function () { 
	console.log('This is my main page');
	return {};
});	