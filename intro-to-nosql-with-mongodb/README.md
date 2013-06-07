Slides and code samples for my Introduction to NoSQL with MongoDB session.

Slides
======
Intro to NoSQL with MongoDB.key: slides in Keynote

Slides.pdf: slides in PDF format

Code Samples
===========

* 01_insert.js: Basic insert examples.
* 02_find.js: Basic find examples.
* 03_update.js: Basic update examples (including $inc, $set, $unset, $rename, and upsert)
* 04_arrays.js: Using arrays ($addToSet, $push, $pull)
* 05_find.js: Find examples with ranges, OR, and RegEx.
* 06_insert.js: Inserting a full invoice object.

* server.js: Shows how to define a function on the server and execute it either standalone or through a find() query

* init.js: Removes previous data from my "pghtechfest" database.

* mapReduce.js: Using MongoDB's MapReduce built-in feature to calculate all fields on all documents in a collection.

* aggregation1.js: Sample using the Aggregation Framework.

* indexes.js: Shows how to create an index and see the excution plain when executing a query that uses the index.

* JavaSample.java: A small Java program to query data from a MongoDB database. This example requires the MongoDB driver for Java which you can download from the MongoDB web site.
