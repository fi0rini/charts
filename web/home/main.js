(function(){
    require.config({
        baseUrl: "/assets/js",
        paths: {
        	"react": 		"/assets/vendor/react-0.14.0/build/react",
        	"react-dom": 	"/assets/vendor/react-0.14.0/build/react-dom"
        }
    });
}());

// main entry point
define(['home/index'], function(index) { return {}; });
