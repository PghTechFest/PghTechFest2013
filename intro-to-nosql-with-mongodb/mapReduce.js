// A basic example of how to use MongoDB's MapReduce
// built-in capability.
//
// This example calculate all the fields/keys used in 
// all the documents of the "blog" collection and 
// how many times each field/key is used.
//
// Source: 
//  MongoDB The Definitive Guide 
//  Kristina Chodorow & Michael Dirolf
//  O'Reilly
//  p. 86-89

var map = function() {
  for(var key in this) {
    emit(key, {count: 1});
  }
};


var reduce = function(key, emits) {
  total = 0;
  for(var i in emits) {
    total += emits[i].count;
  }
  return {"count": total};
};


mr = db.runCommand({
  "mapreduce" : "blog",
  "map" : map,
  "reduce" : reduce,
  "out" : "keyUsage"
});


db.keyUsage.find()
