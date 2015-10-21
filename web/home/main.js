(function(){
    require.config({
        baseUrl: "/assets/dist",
        paths: {
        	"react": 		"/assets/vendor/react-0.14.0/react",
        	"react-dom": 	"/assets/vendor/react-0.14.0/react-dom"
        }
    });
}());

// main entry point
define(['home/index'], function(index) { return {}; });
