// Very simple examples on how to insert and
// update data.

// simple insert
db.blog.insert({
  title:"Blog 1",
  author: "john doe", 
  tags: ["software", "databases"],
  addedOn: "2013-04-01"
});


// update (entire document)
db.blog.update(
  {
    title : "Blog 1"
  },
  {
    title:"Blog 1",
    author: "john doe", 
    tags: ["software", "databases"],
    addedOn: "2013-04-01",
    postedOn: "2013-04-03"
  }
);


// update (specific fields)
db.blog.update(
  {
    title:"Blog 1"
  },
  {$set: 
    {
      title:"Blog 1b",
      updatedOn: "2013-04-05"
    }
  }
);


// upsert (update/insert)
db.blog.update(
  {
    title:"Blog 2"
  },
  {$set: 
    {
      title:"Blog 2",
      author: "john doe", 
      tags: ["software", "databases"],
      addedOn: "2013-04-01"      
    }
  },
  {upsert: true}
);

