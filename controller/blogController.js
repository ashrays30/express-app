var db = require('../db');

exports.saveBlogs = function(data) {
    console.log(data);
   db.get().collection('blogs').save(data, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    console.log(result);
  })
    return "true";
}

exports.savePosts = function(data) {
    console.log(data);
   db.get().collection('posts').save(data, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    console.log(result);
  })
    return "true";
}

exports.getBlogs = function(data) {
    var collection = db.get().collection('blogs');
    return new Promise(function(resolve, rejects){
        collection.find({}).toArray(function(err, docs){
            if(err){
                rejects(err);
                console.log(err);
            }else{
                resolve(docs);
            }
        });
    });
    
    
}

exports.getPosts = function(data) {
    var collection = db.get().collection('posts');
    return new Promise(function(resolve, rejects){
        collection.find({}).toArray(function(err, docs){
            if(err){
                rejects(err);
                console.log(err);
            }else{
                resolve(docs)
            }
        });
    });
}