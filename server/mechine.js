var express = require('express');
var app = express();
app.use(express.static('public'));
var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s',host,port);
})
 
app.get('/api/world', function(req,res){
    // let data = {}
    // data["name"] = "lucy";
    // data["age"] = "23";

    // res.writeHead(404, {'content-type': 'text/plain'});
    console.log('-',res)
    res.send({message:'请求失败'})
    // res.send(data);
});