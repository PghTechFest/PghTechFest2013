// Sample using the Aggregation Framework

// This is code is equivalent to:
//    SELECT city, state, sum(pop) as city_pop
//    FROM zips
//    WHERE state = 'CA' or state = 'NY'
//    GROUP BY city, state
//    HAVING sum(pop) > 500000

use zips;

db.zips.aggregate([
  /* filter by state */
  {
    "$match": {$or:[{state:'CA'}, {state:'NY'}]}
  },
  /* total zip codes into cities */
  {
    "$group": {
      "_id": {"state":"$state","city":"$city" }, 
      "city_pop": {"$sum":"$pop"}
    }
  },
  /* filter cities larger than 1/2 million */
  {
    "$match": {"city_pop":{$gt:500000}}
  },
  /* display our result */
  {
    "$project":{
      "_id": 1,
      "city_pop": 1
    }
  }
]);


