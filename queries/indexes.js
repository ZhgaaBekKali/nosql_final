// Index on user_id in orders collection
// Improves performance when retrieving orders by user
db.orders.createIndex({ user_id: 1 })

// Index on product_id in reviews collection
// Improves performance when retrieving reviews for a product
db.reviews.createIndex({ product_id: 1 })

// Index on category field in products collection
// Improves performance when filtering products by category
db.products.createIndex({ category: 1 })

