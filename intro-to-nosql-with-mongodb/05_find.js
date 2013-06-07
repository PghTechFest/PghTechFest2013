// Fancier query examples


// All documents
db.blog.find(
  {}, 
  {title: 1, _id: 0}
);


// All documents with title "Fancy Updates"
db.blog.find(
  {title: "Fancy updates"}, 
  {title: 1, _id: 0}
);


// All documents where title is NOT "Fancy Updates"
db.blog.find(
  {title: {$ne: "Fancy updates"}}, 
  {title: 1, _id: 0}
);


// Range >=
db.blog.find(
  {addedOn: {$gte: "2013-04-01"}}, 
  {title: 1, addedOn: 1, _id: 0}
);


// Range >= and <=
db.blog.find(
  {addedOn: {$gte: "2013-04-01", $lte: "2013-04-01"}}, 
  {title: 1, addedOn: 1, _id: 0}
);


// In ("or" operation within the same field)
db.blog.find(
  {title: {$in : ["Blog 2", "Fancy updates"]}},
  {title: 1, tags: 1, _id: 0}
);


// Or
db.blog.find(
  {$or : [
    {title: "Blog 2"}, 
    {tags: "nosql"}]},
  {title: 1, tags: 1, _id: 0}
);


// Documents where a specific value exists in the tags array
db.blog.find(
  {tags: 'databases'}, 
  {title: 1, _id: 0}
);


// Value starts with (via RegEx)
db.blog.find(
  {title: /Blog/}, 
  {title: 1, _id: 0}
);


// Title starts with "Blog" (via RegEx)
db.blog.find(
  {title: /Blog*./}, 
  {title: 1, _id: 0}
);


// Value inside tags array starts with "data" (via RegEx)
db.blog.find(   
  {tags: { $regex: "data*.", $options: "i" }},
  {title: 1, tags: 1, _id: 0} 
);


