const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

const url = 'mongodb://localhost:27017';
const dbName = 'MindCue';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async (err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  // Read the file content
  const fileContent = fs.readFileSync('path/to/your/browsing_data.txt', 'utf-8');

  // Specify the collection where you want to store text data
  const collection = client.db(dbName).collection('textData');

  // Insert the text content into MongoDB
  try {
    const result = await collection.insertOne({ content: fileContent });
    console.log('File content saved to MongoDB:', result.insertedId);
  } catch (insertError) {
    console.error('Error inserting file content into MongoDB:', insertError);
  } finally {
    // Close the MongoDB connection
    client.close();
  }
});
