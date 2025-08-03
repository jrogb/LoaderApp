// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('loader');

// Create a new document in the collection.
db.getCollection('products').insertOne({
    title: "Sample Product6",
    price: 19.99,
    description: "This is a sample product.",
    category: "Computers",
    stock: 100,
    imageUrl: "",
});
