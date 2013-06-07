// Very simple examples on how to query for data
// The basic syntax is:
//
//    db.<collection>.find(<query>, <projection>)
//
// Projection represents what fields you want to 
// fetch.


// All documents, all fields
// SQL Equivalent: SELECT * FROM blog 
db.blog.find();
db.blog.find().pretty();


// Filter documents, all fields
// SQL Equivalent: SELECT * FROM blog WHERE title = "Blog 1"
db.blog.find({title: "Blog 1b"}).pretty();


// Filter documents, specific fields
// SQL Equivalent: SELECT title, addedOn FROM blog WHERE title = "Blog 1"
db.blog.find(
  {title: "Blog 1b"}, 
  {title: 1, addedOn: 1}
).pretty();


// All documents, specific fields
// SQL Equivalent: SELECT title1 FROM blog
db.blog.find({}, {title: 1, _id: 0}).pretty();






