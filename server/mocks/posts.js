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
        contactNo: '5384725173'
      },
      {
        id: 2,
        ownerName: 'Varun',
        to: 'KR Puram',
        from:'Jayanagar',
        contactNo: '8123455734'
      },
      {
        id: 3,
        ownerName: 'Ember',
        to: 'NR colony',
        from:'Yeshwanthpur',
        contactNo: '8123455734'
      },
      {
        id: 4,
        ownerName: 'Manish',
        to: 'BTM Layout',
        from:'Whitefield',
        contactNo: '7123455734'
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
