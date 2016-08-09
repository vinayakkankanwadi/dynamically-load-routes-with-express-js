module.exports=function(app){
app.get('/page1',function(req,res){
  res.send('/Page 1 called successfully...');
});
}