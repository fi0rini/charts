(function(){
    require.config({
        baseUrl: "/assets/js",
        paths: {
        	"pcr": 	"pcr",
        	"react": "/assets/vendor/react-0.14.0/build/react"
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
