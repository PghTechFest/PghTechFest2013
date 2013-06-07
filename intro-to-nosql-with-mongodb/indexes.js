db.blog.ensureIndex({title:1})

db.system.indexes.find().pretty();

db.blog.find({title: "Fancy updates"});

db.blog.find({title: "Fancy updates"}).explain();

