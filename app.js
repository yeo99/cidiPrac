// node_modules �� �ִ� express ���� ������ �����´�.
var express = require('express');

// express�� �Լ��̹Ƿ�, ��ȯ���� ������ �����Ѵ�.
var app = express();

// 3000 ��Ʈ�� ���� ����
app.listen(3000, function() {
    console.log('express server start on port 3000');
})

app.get('/', function(req, res){ 
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/main', function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})