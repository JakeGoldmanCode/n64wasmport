const express = require('express');
const app = express();
const router = express.Router();
const path = require('path')

app.use('/', express.static(__dirname + '/wwwroot', { index: 'index.html' }));
app.use('/404', router);
app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/404.html');
});
let server = app.listen(6969, function(){
  console.log("Site should be running... I think :/");
});