// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('loader');

// Create a new document in the collection.
db.getCollection('users').insertOne({
    username: "Cindy",
    email: "cindy@icloud.com",
    password: "password123",
    img: "https://example.com/image.jpg",
    isAdmin: false,
    isActive: true,
});
