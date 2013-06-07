// Fancy updates

//db.blog.remove({title: "Fancy updates"});

// Create our test record
db.blog.update( 
  {title: "Fancy updates"},
  {
    title: "Fancy updates",
    author: "john doe", 
    tags: ["software", "databases"],
    addedOn: "2013-04-01"
  },
  {upsert: true}
);


// Set a specific field
db.blog.update( 
  {title: "Fancy updates"},
  {$set: 
    {
      addedOn: "2013-04-02"
    }
  }
);


// Increment the viewCount field
db.blog.update(
  {title: "Fancy updates"},
  {$inc: {viewCount: 1}}
);

db.blog.find(
  {title: "Fancy updates"}
).pretty()


// Rename a field
db.blog.update(
  {title: "Fancy updates"},
  {$rename: {viewCount: "views"}}
);


// Remove a field
db.blog.update(
  {title: "Fancy updates"},
  {$unset: {views: 0}}
);

