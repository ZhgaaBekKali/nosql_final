db.orders.aggregate([
  {
    $group: {
      _id: "$user_id",
      totalOrders: { $sum: 1 }
    }
  },
  {
    $sort: { totalOrders: -1 }
  }
])

db.orders.aggregate([
  {
    $group: {
      _id: "$user_id",
      totalSpent: { $sum: "$total_price" }
    }
  },
  {
    $sort: { totalSpent: -1 }
  }
])

db.reviews.aggregate([
  {
    $group: {
      _id: "$product_id",
      averageRating: { $avg: "$rating" },
      reviewCount: { $sum: 1 }
    }
  }
])

db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "user_info"
    }
  }
])
