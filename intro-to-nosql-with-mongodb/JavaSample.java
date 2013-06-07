// Basic example in Java to connect to a MongoDB
// database and read document from the collection.
//
// Sources: 
//    http://docs.mongodb.org/ecosystem/tutorial/getting-started-with-java-driver/#getting-started-with-java-driver
//    http://www.mkyong.com/mongodb/java-mongodb-hello-world-example/
//    http://muruga.yoksha.com/mongodb-java-hello-world-example.html
//
// Compile with 
//    javac -classpath .:mongo.jar JavaSample.java 
//
// Run with:
//    java -classpath .:mongo.jar JavaSample 

import com.mongodb.*;
import java.net.UnknownHostException;

public class JavaSample {

  public static void main(String[] args) throws UnknownHostException {

    // Connect to Mongo
    System.out.println("Connecting...");
    MongoClient mongoClient = new MongoClient();
    DB db = mongoClient.getDB("pghtechfest");
    DBCollection collection = db.getCollection("blog");
 
    // List all documents in the blog collection
    System.out.println("\r\nList of titles");
    System.out.println("==============");
    DBCursor cursor = collection.find();
    while (cursor.hasNext()) {
      DBObject object = cursor.next();
      System.out.println(object.get("title"));
    }

    // Show the details of one document
    System.out.println("\r\nDetails of one document");
    System.out.println("=======================");
    BasicDBObject query = new BasicDBObject("title", "Fancy updates");
    cursor = collection.find(query);
    while(cursor.hasNext()) {
       System.out.println(cursor.next());
    }

  }

}



