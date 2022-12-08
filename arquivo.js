var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url, true).query;
    res.write("Arquivo criado com sucesso!");
    fs.appendFile(q.nome+'.txt', q.conteudo, function(err){
        if (err) throw err;
    });
    res.end();
}).listen(80);