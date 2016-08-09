var express=require("express");
var app=express();
var fs=require("fs");

var routePath="./routers/"; 

fs.readdirSync(routePath).forEach(function(file) {
    var route=routePath+file;
    require(route)(app);
});
app.listen(9123);