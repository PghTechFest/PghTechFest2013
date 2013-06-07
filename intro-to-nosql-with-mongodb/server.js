// define a server/global value
db.system.js.insert({_id:"pi", value: 3.14159});

db.system.js.find();

db.eval("pi");


// define a server function
// notice that it can reference the value
// that we defined in the previous call (pi)
db.system.js.insert({
  _id:"area", 
  value: function(r) { return pi*(r*r);}
});

db.system.js.find();

// evalue the function
db.eval("area(3)");


// You can also use this server function in a $where predicate
for(i=1; i<=5;  i++) {
  db.circles.insert({_id: i, radius: i})
}

db.circles.find({
  "$where" : function() { return area(this.radius) > 48; } 
});
