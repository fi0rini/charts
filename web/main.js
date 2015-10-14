(function(){
    require.config({
        baseUrl: "/assets/js",
        paths: {
        	"pcr": 	"pcr",
        	"React": 	"/assets/vendor/react-0.13.3/build/react"
        }
    });
}());

// main entry point
define(['data'], function(data) {
    var prop;
    var ems = data.EMSDataSet
    for(prop in ems) {
        if(ems[prop].Codes)
            console.log(ems[prop].Codes);
    }
});
