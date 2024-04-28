const express = require('express');
const app = express();
const router = require('./router');
const port = process.env.port || 3000;
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

app.listen(port, () => {
  console.log('App listening to: ' + port);
});




