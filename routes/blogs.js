var express = require('express');
var router = express.Router();
var blogController = require('../controller/blogController');


router.post('/saveBlogs', function(req, res, next) {
  var response = blogController.saveBlogs(req.body);
    res.send(response);
});

router.post('/savePosts', function(req, res, next) {
  var response = blogController.savePosts(req.body);
    res.send(response);
});

router.get('/getBlogs', function(req, res, next) {
  blogController.getBlogs(req.body).then(function(response){
      res.send(response);
  });
    
    
});

router.get('/getPosts', function(req, res, next) {
  blogController.getPosts(req.body).then(function(response){
      res.send(response);
  });
    
});

router.post('/getBlogsById', function(req, res, next) {
  blogController.getBlogsById(req.body).then(function(response){
      res.send(response);
  });
    
});

module.exports = router;
