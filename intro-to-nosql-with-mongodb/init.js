// Removes data from a previous run 
// from the pghtechfest database.
// 
// Usage: 
//    mongo < init.js
//

use pghtechfest;

// Drop our collections.
db.blog.drop();
db.invoice.drop();
db.invoices.drop();
db.circles.drop();
db.sessions.drop();

// Drop collection created by mapreduce jon
db.keyUsage.drop();

// Remove custom server-side function
db.system.js.remove();

