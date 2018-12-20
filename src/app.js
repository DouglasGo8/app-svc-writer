
const express = require('express');

const body_p = require('body-parser');

const fs = require('fs');

const app = express();

const PATH_TO_WRITE = process.env.PATH_TO_WRITE

app.use(body_p.urlencoded({
  extended: false
}));

app.use(body_p.json());


app.post('/save/memo', (req, resp) => {

  //console.log(req.body);
  let json = req.body;
  let data = JSON.stringify(json, null, 2);


  fs.writeFile(PATH_TO_WRITE + '/data.json', data, (err) => {
    if (err)
      throw err;
    console.log('Data written to file!');
  });

  resp.setHeader('Content-Type', 'application/json');
  resp.send(JSON.stringify({'msg': 'Successfully Operation'}));


});

app.listen(10250, () => console.log('Ready to write...'));
