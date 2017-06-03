const express = require('express');
const path = require('path');
const app = express();

<<<<<<< HEAD
const staticFiles = express.static(path.join(__dirname, '../build'));

app.use(staticFiles);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(8080);
=======
const buildFolder = path.join(__dirname, '..', 'build');

app.use(express.static(buildFolder));

app.get('/', function (req, res) {
  res.sendFile(path.join(buildFolder, 'index.html'));
});

app.listen(3000);
console.log('Listening to port 3000');
>>>>>>> e841b1a5c54d52ae1ca0233f95960b93354bca2b
