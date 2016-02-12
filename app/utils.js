import React from 'react';
import request from 'superagent';

function loadData(path, cb) {
  request
    .get(path)
    .end((err, res) => {
      if (err) { console.log(err); }

      var data = JSON.parse(res.text);
      cb(data);
    });
}

export { loadData }
