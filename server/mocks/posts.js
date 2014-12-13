module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      "posts": [{
        id: 1,
        ownerName: 'Pallavi',
        to: 'Indiranagar',
        from:'Malleshwaram',
        contactNo: '1234567890'
      },
      {
        id: 2,
        ownerName: 'Pallavi',
        to: 'Indiranagar',
        from:'Malleshwaram',
        contactNo: '1234567890'
      }]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      "posts": {
        "id": req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      "posts": {
        "id": req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};