// Working with arrays inside a document

// db.blog.find({}, {title: 1, tags: 1, _id: 0});


// Replace the tags array
db.blog.update( 
  {title: "Fancy updates"},
  {$set: 
    {
      tags: ["nosql", "mongodb"]
    }
  }
);


// Add value to array (if it isn't already there)
db.blog.update( 
  {title: "Fancy updates"},
  {$addToSet: 
    {
      tags: "databases"
    }
  }
);


// Use $each to add multiple values to an array
// (without using $each you'll get a nested array)
db.blog.update( 
  {title: "Fancy updates"},
  {$addToSet: 
    {
      tags: {$each: ["cool", "hipster"]}
    }
  }
);


// Use $push (instead of $addToSet) if you want to 
// add duplicate values to the array
db.blog.update( 
  {title: "Fancy updates"},
  {$push: 
    {
      tags: "databases"
    }
  }
);

// Remove elements from the array 
db.blog.update( 
  {title: "Fancy updates"},
  {$pull: 
    {
      tags: "databases"
    }
  }
);

