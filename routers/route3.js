module.exports=function(app){
app.get('/page3',function(req,res){
  res.send('/Page 3 called successfully...');
});
}