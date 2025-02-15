export const categories=[
  {
    "id": "c001",
    "name": "Mobiles",
    "thumbnail_image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "discount_range": {
      "min_discount": 7.14,
      "max_discount": 12.5
    }
  },
  {
    "id": "c004",
    "name": "Electronics",
    "thumbnail_image": "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "discount_range": {
      "min_discount": 6.67,
      "max_discount": 9.2
    }
  },
  {
    "id": "c007",
    "name": "Sportswear",
    "thumbnail_image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "discount_range": {
      "min_discount": 10.0,
      "max_discount": 20.0
    }
  },
  {
    "id": "c003",
    "name": "Home Appliances",
    "thumbnail_image": "https://images.unsplash.com/photo-1581093458799-10a0b53d2af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "discount_range": {
      "min_discount": 6.67,
      "max_discount": 7.67
    }
  },
  {
    "id": "c006",
    "name": "Clothing",
    "thumbnail_image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "discount_range": {
      "min_discount": 20.0,
      "max_discount": 30.0
    }
  }
]

export const products=[
  {
    "id": "p001",
    "name": "Redmi 9A",
    "brand": "Redmi",
    "category_id": "c001",
    "price": {
      "original": 7999,
      "discounted": 6999,
      "currency": "INR",
      "discount_percentage": 12.5
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 3
    },
    "sizes": [
      { "size": "32GB", "available": true },
      { "size": "64GB", "available": true },
      { "size": "128GB", "available": true },
      { "size": "256GB", "available": true },
      { "size": "512GB", "available": false }
    ],
    "colors": [
      { "name": "Green", "hex": "#008000", "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { "name": "Midnight Black", "hex": "#000000", "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { "name": "Sky Blue", "hex": "#87CEEB", "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { "name": "Ocean Blue", "hex": "#0077BE", "image": "https://images.unsplash.com/photo-1603015269169-225cb700e29a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { "name": "Sunset Gold", "hex": "#FFD700", "image": "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
    ],
    "description": "The Redmi 9A is an entry-level smartphone with a 13MP AI camera, 5000mAh battery, and smooth performance for everyday tasks.",
    "images": [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1603015269169-225cb700e29a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    "rating_breakdown": {
      "1": 2,
      "2": 5,
      "3": 10,
      "4": 20,
      "5": 50
    },
    "average_rating": 4.2,
    "total_reviews": 87,
    "top_reviews": [
      {
        "reviewer": "Shubham",
        "title": "Great phone for the price",
        "content": "Camera quality is good. Lasts 7-10 hours with heavy usage.",
        "rating": 5,
        "date": "2023-09-15"
      },
      {
        "reviewer": "Amit",
        "title": "Decent phone for daily use",
        "content": "Battery life is amazing but lags slightly with heavy apps.",
        "rating": 4,
        "date": "2023-08-25"
      },
      {
        "reviewer": "Neha",
        "title": "Good budget smartphone",
        "content": "Value for money. The screen is bright, and the battery lasts all day.",
        "rating": 5,
        "date": "2023-09-01"
      }
    ],
    "return_policy": {
      "policy": "7-day return policy",
      "condition": "Product must be in original packaging and unused."
    }
  },
  {
    "id": "p002",
    "name": "Philips 3000 Series Electric Kettle",
    "brand": "Philips",
    "category_id": "c003",
    "price": {
      "original": 2499,
      "discounted": 1999,
      "currency": "INR",
      "discount_percentage": 20
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 100
    },
    "sizes": [
      { "size": "0.8L", "available": true },
      { "size": "1.2L", "available": true },
      { "size": "1.5L", "available": true },
      { "size": "1.8L", "available": true },
      { "size": "2.0L", "available": false }
    ],
    "colors": [
      { "name": "White", "hex": "#FFFFFF", "image": "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { "name": "Black", "hex": "#000000", "image": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { "name": "Silver", "hex": "#C0C0C0", "image": "https://images.unsplash.com/photo-1600857062240-0b5ba02a8e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { "name": "Red", "hex": "#FF0000", "image": "https://images.unsplash.com/photo-1600857062240-0b5ba02a8e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
      { "name": "Blue", "hex": "#0000FF", "image": "https://images.unsplash.com/photo-1600857062240-0b5ba02a8e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
    ],
    "description": "The Philips 3000 Series Electric Kettle is fast, efficient, and has an auto shut-off feature for safety.",
    "images": [
      "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600857062240-0b5ba02a8e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600857062240-0b5ba02a8e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600857062240-0b5ba02a8e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 1,
      "3": 4,
      "4": 19,
      "5": 76
    },
    "average_rating": 4.7,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Priya",
        "title": "Very convenient",
        "content": "It heats water quickly and shuts off automatically. Very easy to use.",
        "rating": 5,
        "date": "2023-09-10"
      },
      {
        "reviewer": "Ravi",
        "title": "Works as expected",
        "content": "Good quality and fast heating. The design is sleek and modern.",
        "rating": 4,
        "date": "2023-08-20"
      },
      {
        "reviewer": "Anjali",
        "title": "Worth the price",
        "content": "Durable and efficient. Best kettle at this price range.",
        "rating": 5,
        "date": "2023-09-05"
      }
    ],
    "return_policy": {
      "policy": "15-day return policy",
      "condition": "Product must be unused with the original packaging."
    }
  },
  {
    "id": "p003",
    "name": "Nike Air Zoom Pegasus 38",
    "brand": "Nike",
    "category_id": "c002",
    "price": {
      "original": 10999,
      "discounted": 8999,
      "currency": "INR",
      "discount_percentage": 18.18
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 5
    },
    "sizes": [
      { "size": "6", "available": true },
      { "size": "7", "available": true },
      { "size": "8", "available": true },
      { "size": "9", "available": true },
      { "size": "10", "available": true },
      { "size": "11", "available": true },
      { "size": "12", "available": false }
    ],
    "colors": [
      { "name": "Black", "hex": "#000000", "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7d7e61c4-1f8c-4c3b-9b92-1f3ff6b9f7a1/air-zoom-pegasus-38-running-shoes.png" },
      { "name": "White", "hex": "#FFFFFF", "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d80f3b2b-6cd0-42b3-bf53-ccae69e55a60/air-zoom-pegasus-38-running-shoes.png" },
      { "name": "Grey", "hex": "#808080", "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/62fd2c6a-0421-4cc9-a5e7-8e5d46b6c13a/air-zoom-pegasus-38-running-shoes.png" },
      { "name": "Blue", "hex": "#0000FF", "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5153f3b9-1df0-4b50-9a24-cba1cfd8bf20/air-zoom-pegasus-38-running-shoes.png" },
      { "name": "Red", "hex": "#FF0000", "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3d5a6ffb-9122-4a72-9d85-848df94f8b4e/air-zoom-pegasus-38-running-shoes.png" }
    ],
    "description": "The Nike Air Zoom Pegasus 38 features responsive cushioning and is ideal for long-distance running.",
    "images": [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7d7e61c4-1f8c-4c3b-9b92-1f3ff6b9f7a1/air-zoom-pegasus-38-running-shoes.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d80f3b2b-6cd0-42b3-bf53-ccae69e55a60/air-zoom-pegasus-38-running-shoes.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/62fd2c6a-0421-4cc9-a5e7-8e5d46b6c13a/air-zoom-pegasus-38-running-shoes.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5153f3b9-1df0-4b50-9a24-cba1cfd8bf20/air-zoom-pegasus-38-running-shoes.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3d5a6ffb-9122-4a72-9d85-848df94f8b4e/air-zoom-pegasus-38-running-shoes.png"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 2,
      "3": 5,
      "4": 20,
      "5": 73
    },
    "average_rating": 4.7,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Ravi",
        "title": "Comfortable for long runs",
        "content": "Great cushioning and fit for running long distances.",
        "rating": 5,
        "date": "2023-10-05"
      },
      {
        "reviewer": "Amit",
        "title": "Good but expensive",
        "content": "Shoes are comfortable and durable, but I feel they are slightly overpriced.",
        "rating": 4,
        "date": "2023-09-20"
      }
    ],
    "return_policy": {
      "policy": "30-day return policy",
      "condition": "Product must be unused with original packaging."
    }
},
{
  "id": "p004",
  "name": "Adidas Originals Hoodie",
  "brand": "Adidas",
  "category_id": "c005",
  "price": {
    "original": 4999,
    "discounted": 3999,
    "currency": "INR",
    "discount_percentage": 20.0
  },
  "availability": {
    "in_stock": true,
    "stock_quantity": 150
  },
  "sizes": [
    { "size": "S", "available": true },
    { "size": "M", "available": true },
    { "size": "L", "available": true },
    { "size": "XL", "available": true },
    { "size": "XXL", "available": true },
    { "size": "3XL", "available": false }
  ],
  "colors": [
    { "name": "Grey", "hex": "#808080", "image": "https://m.media-amazon.com/images/I/81RmtK6SmlL._SL1500_.jpg" },
    { "name": "Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/81P1v9yTm9L._SL1500_.jpg" },
    { "name": "Navy Blue", "hex": "#000080", "image": "https://m.media-amazon.com/images/I/91RmFWpaQKL._SL1500_.jpg" },
    { "name": "Red", "hex": "#FF0000", "image": "https://m.media-amazon.com/images/I/81HXMv0i0wL._SL1500_.jpg" },
    { "name": "Yellow", "hex": "#FFFF00", "image": "https://m.media-amazon.com/images/I/71gBBKsz1zL._SL1500_.jpg" }
  ],
  "description": "The Adidas Originals Hoodie is perfect for daily wear with a soft cotton feel and the iconic logo.",
  "images": [
    "https://m.media-amazon.com/images/I/81RmtK6SmlL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81P1v9yTm9L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91RmFWpaQKL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81HXMv0i0wL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71gBBKsz1zL._SL1500_.jpg"
  ],
  "rating_breakdown": {
    "1": 1,
    "2": 3,
    "3": 15,
    "4": 45,
    "5": 36
  },
  "average_rating": 4.2,
  "total_reviews": 100,
  "top_reviews": [
    {
      "reviewer": "Manish",
      "title": "Soft and comfortable",
      "content": "Perfect for daily wear. Very soft and comfortable.",
      "rating": 5,
      "date": "2023-09-10"
    },
    {
      "reviewer": "Ravi",
      "title": "Good fit but pricey",
      "content": "Fits well and is warm, but the price is a bit high.",
      "rating": 4,
      "date": "2023-08-28"
    }
  ],
  "return_policy": {
    "policy": "30-day return policy",
    "condition": "Product must be in unused condition with original packaging."
  }
},
{
  "id": "p003",
  "name": "Nike Air Zoom Pegasus 38",
  "brand": "Nike",
  "category_id": "c002",
  "price": {
    "original": 10999,
    "discounted": 8999,
    "currency": "INR",
    "discount_percentage": 18.18
  },
  "availability": {
    "in_stock": true,
    "stock_quantity": 5
  },
  "sizes": [
    { "size": "6", "available": true },
    { "size": "7", "available": true },
    { "size": "8", "available": true },
    { "size": "9", "available": true },
    { "size": "10", "available": true },
    { "size": "11", "available": true },
    { "size": "12", "available": false }
  ],
  "colors": [
    { "name": "Black", "hex": "#000000", "image": "https://www.nike.com/t/air-zoom-pegasus-38-mens-road-running-shoes-KLvDcj/black" },
    { "name": "White", "hex": "#FFFFFF", "image": "https://www.nike.com/t/air-zoom-pegasus-38-mens-road-running-shoes-KLvDcj/white" },
    { "name": "Grey", "hex": "#808080", "image": "https://www.nike.com/t/air-zoom-pegasus-38-mens-road-running-shoes-KLvDcj/grey" },
    { "name": "Blue", "hex": "#0000FF", "image": "https://www.nike.com/t/air-zoom-pegasus-38-mens-road-running-shoes-KLvDcj/blue" },
    { "name": "Red", "hex": "#FF0000", "image": "https://www.nike.com/t/air-zoom-pegasus-38-mens-road-running-shoes-KLvDcj/red" }
  ],
  "description": "The Nike Air Zoom Pegasus 38 features responsive cushioning and is ideal for long-distance running.",
  "images": [
    "https://www.nike.com/t/air-zoom-pegasus-38-mens-road-running-shoes-KLvDcj/black",
    "https://www.nike.com/t/air-zoom-pegasus-38-mens-road-running-shoes-KLvDcj/white",
    "https://www.nike.com/t/air-zoom-pegasus-38-mens-road-running-shoes-KLvDcj/grey",
    "https://www.nike.com/t/air-zoom-pegasus-38-mens-road-running-shoes-KLvDcj/blue",
    "https://www.nike.com/t/air-zoom-pegasus-38-mens-road-running-shoes-KLvDcj/red"
  ],
  "rating_breakdown": {
    "1": 0,
    "2": 2,
    "3": 5,
    "4": 20,
    "5": 73
  },
  "average_rating": 4.7,
  "total_reviews": 100,
  "top_reviews": [
    {
      "reviewer": "Ravi",
      "title": "Comfortable for long runs",
      "content": "Great cushioning and fit for running long distances.",
      "rating": 5,
      "date": "2023-10-05"
    },
    {
      "reviewer": "Amit",
      "title": "Good but expensive",
      "content": "Shoes are comfortable and durable, but I feel they are slightly overpriced.",
      "rating": 4,
      "date": "2023-09-20"
    }
  ],
  "return_policy": {
    "policy": "30-day return policy",
    "condition": "Product must be unused with original packaging."
  }
},
{
  "id": "p005",
  "name": "Godrej 190 L 2 Star Direct Cool Refrigerator",
  "brand": "Godrej",
  "category_id": "c003",
  "price": {
    "original": 17990,
    "discounted": 15990,
    "currency": "INR",
    "discount_percentage": 11.11
  },
  "availability": {
    "in_stock": true,
    "stock_quantity": 30
  },
  "sizes": [
    { "size": "190 L", "available": true },
    { "size": "250 L", "available": true },
    { "size": "300 L", "available": false },
    { "size": "350 L", "available": true },
    { "size": "400 L", "available": false }
  ],
  "colors": [
    { "name": "White", "hex": "#FFFFFF", "image": "https://www.flipkart.com/godrej-190-l-direct-cool-single-door-2-star-refrigerator/p/itm31e7055572440" },
    { "name": "Silver", "hex": "#C0C0C0", "image": "https://www.gadgets360.com/godrej-190-l-direct-cool-single-door-2-star-refrigerator-rd-edge-205b-23-taf-price-in-india-102063" },
    { "name": "Black", "hex": "#000000", "image": "https://www.amazon.in/Godrej-EDGE-205-WRF-2-2/dp/B07L8XDCPL" },
    { "name": "Red", "hex": "#FF0000", "image": "https://www.flipkart.com/godrej-190-l-direct-cool-single-door-2-star-refrigerator/p/itm31e7055572440" },
    { "name": "Blue", "hex": "#0000FF", "image": "https://www.gadgets360.com/godrej-190-l-direct-cool-single-door-2-star-refrigerator-rd-edge-205b-23-taf-price-in-india-102063" }
  ],
  "description": "The Godrej 190L refrigerator is perfect for small families with uniform cooling and energy efficiency.",
  "images": [
    "https://www.flipkart.com/godrej-190-l-direct-cool-single-door-2-star-refrigerator/p/itm31e7055572440",
    "https://www.gadgets360.com/godrej-190-l-direct-cool-single-door-2-star-refrigerator-rd-edge-205b-23-taf-price-in-india-102063",
    "https://www.amazon.in/Godrej-EDGE-205-WRF-2-2/dp/B07L8XDCPL",
    "https://www.flipkart.com/godrej-190-l-direct-cool-single-door-2-star-refrigerator/p/itm31e7055572440",
    "https://www.gadgets360.com/godrej-190-l-direct-cool-single-door-2-star-refrigerator-rd-edge-205b-23-taf-price-in-india-102063"
  ],
  "rating_breakdown": {
    "1": 2,
    "2": 0,
    "3": 4,
    "4": 15,
    "5": 79
  },
  "average_rating": 4.8,
  "total_reviews": 100,
  "top_reviews": [
    {
      "reviewer": "Anjali",
      "title": "Great for small families",
      "content": "The fridge is spacious, keeps items cool, and saves power. Perfect for a small family.",
      "rating": 5,
      "date": "2023-10-10"
    }
  ],
  "return_policy": {
    "policy": "15-day return policy",
    "condition": "Product must be unused with original packaging."
  }
},
{
  "id": "p006",
  "name": "Samsung Galaxy M32",
  "brand": "Samsung",
  "category_id": "c001",
  "price": {
    "original": 15999,
    "discounted": 13999,
    "currency": "INR",
    "discount_percentage": 12.5
  },
  "availability": {
    "in_stock": true,
    "stock_quantity": 60
  },
  "sizes": [
    { "size": "64GB", "available": true },
    { "size": "128GB", "available": true },
    { "size": "256GB", "available": true },
    { "size": "512GB", "available": false }
  ],
  "colors": [
    { "name": "Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/81Efi6FEJ-L._SL1500_.jpg" },
    { "name": "White", "hex": "#FFFFFF", "image": "https://m.media-amazon.com/images/I/91wmhH4DrqL._SL1500_.jpg" },
    { "name": "Blue", "hex": "#0000FF", "image": "https://m.media-amazon.com/images/I/81bISrC8eLL._SL1500_.jpg" },
    { "name": "Light Blue", "hex": "#ADD8E6", "image": "https://m.media-amazon.com/images/I/81j0pMyL-iL._SL1500_.jpg" },
    { "name": "Green", "hex": "#008000", "image": "https://m.media-amazon.com/images/I/81erBa6Zz7L._SL1500_.jpg" }
  ],
  "description": "The Samsung Galaxy M32 is equipped with a 64MP quad-camera setup, a 90Hz Super AMOLED display, and a massive 6000mAh battery.",
  "images": [
    "https://m.media-amazon.com/images/I/81Efi6FEJ-L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91wmhH4DrqL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81bISrC8eLL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81j0pMyL-iL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81erBa6Zz7L._SL1500_.jpg"
  ],
  "rating_breakdown": {
    "1": 3,
    "2": 7,
    "3": 12,
    "4": 24,
    "5": 54
  },
  "average_rating": 4.4,
  "total_reviews": 100,
  "top_reviews": [
    {
      "reviewer": "Amit",
      "title": "Great camera and display",
      "content": "The camera quality is fantastic, and the display is amazing. The phone's battery life is also a huge plus.",
      "rating": 5,
      "date": "2023-10-05"
    },
    {
      "reviewer": "Priya",
      "title": "Good phone for the price",
      "content": "For the price, the Samsung Galaxy M32 offers excellent performance and a nice screen.",
      "rating": 4,
      "date": "2023-09-20"
    },
    {
      "reviewer": "Sandeep",
      "title": "Battery lasts long",
      "content": "The battery life is exceptional, lasting a full day of heavy use. The camera quality is also decent for the price.",
      "rating": 4,
      "date": "2023-11-03"
    }
  ],
  "return_policy": {
    "policy": "7-day return policy",
    "condition": "Product must be unused with original packaging."
  }
},
{
  "id": "p007",
  "name": "LG 32-inch HD Ready LED TV",
  "brand": "LG",
  "category_id": "c004",
  "price": {
    "original": 18999,
    "discounted": 15999,
    "currency": "INR",
    "discount_percentage": 15.8
  },
  "availability": {
    "in_stock": true,
    "stock_quantity": 20
  },
  "sizes": [
    { "size": "32-inch", "available": true },
    { "size": "43-inch", "available": true },
    { "size": "50-inch", "available": false },
    { "size": "55-inch", "available": true },
    { "size": "65-inch", "available": false }
  ],
  "colors": [
    { "name": "Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/81bTq9gS5JL._SL1500_.jpg" },
    { "name": "Grey", "hex": "#808080", "image": "https://m.media-amazon.com/images/I/81bP5sugSbL._SL1500_.jpg" },
    { "name": "White", "hex": "#FFFFFF", "image": "https://m.media-amazon.com/images/I/91IovZvNrQL._SL1500_.jpg" },
    { "name": "Silver", "hex": "#C0C0C0", "image": "https://m.media-amazon.com/images/I/91b8ryIzKqL._SL1500_.jpg" }
  ],
  "description": "The LG 32-inch LED TV offers stunning HD clarity with IPS technology for wide viewing angles and great sound quality.",
  "images": [
    "https://m.media-amazon.com/images/I/81bTq9gS5JL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81bP5sugSbL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91IovZvNrQL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91b8ryIzKqL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91JtL3zPxzL._SL1500_.jpg"
  ],
  "rating_breakdown": {
    "1": 1,
    "2": 2,
    "3": 9,
    "4": 35,
    "5": 53
  },
  "average_rating": 4.6,
  "total_reviews": 100,
  "top_reviews": [
    {
      "reviewer": "Karan",
      "title": "Amazing TV with great picture quality",
      "content": "The TV is sleek, and the picture quality is amazing. The sound is crisp and clear too.",
      "rating": 5,
      "date": "2023-10-05"
    },
    {
      "reviewer": "Neha",
      "title": "Great value for money",
      "content": "The TV has excellent picture quality for the price. I am very satisfied with my purchase.",
      "rating": 4,
      "date": "2023-09-20"
    },
    {
      "reviewer": "Ravi",
      "title": "Perfect for small rooms",
      "content": "It fits perfectly in my small living room, and the picture quality is very good.",
      "rating": 4,
      "date": "2023-08-15"
    }
  ],
  "return_policy": {
    "policy": "15-day return policy",
    "condition": "Product must be unused with original packaging."
  }
},
{
  "id": "p008",
  "name": "Puma T-Shirt for Men",
  "brand": "Puma",
  "category_id": "c005",
  "price": {
    "original": 1299,
    "discounted": 899,
    "currency": "INR",
    "discount_percentage": 30.8
  },
  "availability": {
    "in_stock": true,
    "stock_quantity": 120
  },
  "sizes": [
    { "size": "S", "available": true },
    { "size": "M", "available": true },
    { "size": "L", "available": true },
    { "size": "XL", "available": true },
    { "size": "XXL", "available": true }
  ],
  "colors": [
    { "name": "Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/91wjb5JpUwL._SL1500_.jpg" },
    { "name": "White", "hex": "#FFFFFF", "image": "https://m.media-amazon.com/images/I/81R4xA6P6lL._SL1500_.jpg" },
    { "name": "Red", "hex": "#FF0000", "image": "https://m.media-amazon.com/images/I/91-pP2LRIzL._SL1500_.jpg" },
    { "name": "Blue", "hex": "#0000FF", "image": "https://m.media-amazon.com/images/I/91Zd-MsKt5L._SL1500_.jpg" },
    { "name": "Green", "hex": "#008000", "image": "https://m.media-amazon.com/images/I/91-k-pHEj6L._SL1500_.jpg" }
  ],
  "description": "The Puma T-shirt is made from soft cotton and features the iconic Puma logo. Perfect for casual wear or sports.",
  "images": [
    "https://m.media-amazon.com/images/I/91wjb5JpUwL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81R4xA6P6lL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91-pP2LRIzL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91Zd-MsKt5L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91-k-pHEj6L._SL1500_.jpg"
  ],
  "rating_breakdown": {
    "1": 1,
    "2": 5,
    "3": 15,
    "4": 50,
    "5": 29
  },
  "average_rating": 4.1,
  "total_reviews": 100,
  "top_reviews": [
    {
      "reviewer": "Ravi",
      "title": "Great for daily wear",
      "content": "The T-shirt is comfortable, and the fit is perfect. It’s great for casual outings.",
      "rating": 5,
      "date": "2023-11-01"
    },
    {
      "reviewer": "Sanjay",
      "title": "Good quality for the price",
      "content": "The fabric is soft, and the fit is just right. Very good quality for this price.",
      "rating": 4,
      "date": "2023-10-15"
    },
    {
      "reviewer": "Aditi",
      "title": "Comfortable and stylish",
      "content": "I love how comfortable and stylish this T-shirt is. It fits well and looks great with jeans.",
      "rating": 4,
      "date": "2023-09-20"
    }
  ],
  "return_policy": {
    "policy": "30-day return policy",
    "condition": "Product must be in unused condition with original packaging."
  }
},
{
  "id": "p009",
  "name": "Whirlpool 265 L 3 Star Frost-Free Refrigerator",
  "brand": "Whirlpool",
  "category_id": "c003",
  "price": {
    "original": 29990,
    "discounted": 25990,
    "currency": "INR",
    "discount_percentage": 13.3
  },
  "availability": {
    "in_stock": true,
    "stock_quantity": 40
  },
  "sizes": [
    { "size": "265 L", "available": true },
    { "size": "300 L", "available": true },
    { "size": "350 L", "available": false },
    { "size": "400 L", "available": true },
    { "size": "450 L", "available": false }
  ],
  "colors": [
    { "name": "Silver", "hex": "#C0C0C0", "image": "https://m.media-amazon.com/images/I/81L1AkRzL5L._SL1500_.jpg" },
    { "name": "Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/91R64h1ZKzL._SL1500_.jpg" },
    { "name": "White", "hex": "#FFFFFF", "image": "https://m.media-amazon.com/images/I/91VeSgZjysL._SL1500_.jpg" },
    { "name": "Blue", "hex": "#0000FF", "image": "https://m.media-amazon.com/images/I/91I7bc-Fq2L._SL1500_.jpg" },
    { "name": "Red", "hex": "#FF0000", "image": "https://m.media-amazon.com/images/I/91L4BzXMhPL._SL1500_.jpg" }
  ],
  "description": "The Whirlpool 265L Refrigerator features adaptive cooling technology and a fresh food compartment with unique shelf design.",
  "images": [
    "https://m.media-amazon.com/images/I/81L1AkRzL5L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91R64h1ZKzL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91VeSgZjysL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91I7bc-Fq2L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91L4BzXMhPL._SL1500_.jpg"
  ],
  "rating_breakdown": {
    "1": 2,
    "2": 3,
    "3": 7,
    "4": 15,
    "5": 73
  },
  "average_rating": 4.7,
  "total_reviews": 100,
  "top_reviews": [
    {
      "reviewer": "Anjali",
      "title": "Spacious and Energy Efficient",
      "content": "Great fridge for a medium-sized family. Very energy efficient and spacious enough for all our needs.",
      "rating": 5,
      "date": "2023-10-10"
    },
    {
      "reviewer": "Ravi",
      "title": "Perfect for our kitchen",
      "content": "This fridge fits perfectly in our kitchen and has excellent cooling. Highly recommend.",
      "rating": 4,
      "date": "2023-09-12"
    },
    {
      "reviewer": "Maya",
      "title": "Great value for money",
      "content": "This fridge offers great features at a reasonable price. It cools quickly and looks sleek in the kitchen.",
      "rating": 5,
      "date": "2023-11-01"
    }
  ],
  "return_policy": {
    "policy": "15-day return policy",
    "condition": "Product must be unused with original packaging."
  }
},
{
  "id": "p010",
  "name": "Sony PlayStation 5",
  "brand": "Sony",
  "category_id": "c006",
  "price": {
    "original": 49999,
    "discounted": 45999,
    "currency": "INR",
    "discount_percentage": 8.0
  },
  "availability": {
    "in_stock": true,
    "stock_quantity": 15
  },
  "sizes": [
    { "size": "Standard Edition", "available": true },
    { "size": "Digital Edition", "available": true }
  ],
  "colors": [
    { "name": "White", "hex": "#FFFFFF", "image": "https://m.media-amazon.com/images/I/91f4LQLUG9L._SL1500_.jpg" },
    { "name": "Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/91tr+si3ZDL._SL1500_.jpg" }
  ],
  "description": "The Sony PlayStation 5 offers an immersive gaming experience with lightning-fast load times, stunning graphics, and exclusive games.",
  "images": [
    "https://m.media-amazon.com/images/I/91f4LQLUG9L._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91tr+si3ZDL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91yBDEJz0wL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81kjhksq3wL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/91Dk5iAG0gL._SL1500_.jpg"
  ],
  "rating_breakdown": {
    "1": 1,
    "2": 0,
    "3": 3,
    "4": 5,
    "5": 91
  },
  "average_rating": 4.8,
  "total_reviews": 100,
  "top_reviews": [
    {
      "reviewer": "Nitin",
      "title": "Amazing gaming console",
      "content": "The PS5 is an excellent console. The graphics and performance are unmatched. Highly recommended!",
      "rating": 5,
      "date": "2023-11-10"
    },
    {
      "reviewer": "Sanya",
      "title": "Worth every penny!",
      "content": "The PS5 is lightning fast and the gaming experience is on another level. Worth every penny!",
      "rating": 5,
      "date": "2023-10-01"
    },
    {
      "reviewer": "Vikram",
      "title": "Next-level performance",
      "content": "Excellent performance, seamless gameplay, and fast load times. The graphics are mind-blowing.",
      "rating": 4,
      "date": "2023-09-15"
    }
  ],
  "return_policy": {
    "policy": "15-day return policy",
    "condition": "Product must be unused with original packaging."
  }
},
  {
    "id": "p011",
    "name": "Apple iPhone 14 Pro Max",
    "brand": "Apple",
    "category_id": "c001",  // Smartphones
    "price": {
      "original": 149999,
      "discounted": 134999,
      "currency": "INR",
      "discount_percentage": 10.0
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 25
    },
    "sizes": [
      { "size": "128GB", "available": true },
      { "size": "256GB", "available": true },
      { "size": "512GB", "available": true },
      { "size": "1TB", "available": true }
    ],
    "colors": [
      { "name": "Space Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/91v+fq2lV5L._SL1500_.jpg" },
      { "name": "Silver", "hex": "#C0C0C0", "image": "https://m.media-amazon.com/images/I/91T7fwR10pL._SL1500_.jpg" },
      { "name": "Gold", "hex": "#FFD700", "image": "https://m.media-amazon.com/images/I/91zmU-iWTgL._SL1500_.jpg" },
      { "name": "Deep Purple", "hex": "#6A0DAD", "image": "https://m.media-amazon.com/images/I/91dVCE6Tq4L._SL1500_.jpg" }
    ],
    "description": "The Apple iPhone 14 Pro Max is a top-tier smartphone with a 48MP camera system, a stunning OLED display, and the powerful A16 Bionic chip.",
    "images": [
      "https://m.media-amazon.com/images/I/91v+fq2lV5L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91T7fwR10pL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91zmU-iWTgL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91dVCE6Tq4L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91pL1nvsRhL._SL1500_.jpg"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 1,
      "3": 3,
      "4": 10,
      "5": 86
    },
    "average_rating": 4.8,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Priya",
        "title": "Best iPhone yet!",
        "content": "The camera quality is superb, and the display is fantastic. A big upgrade over my previous iPhone.",
        "rating": 5
      },
      {
        "reviewer": "Ravi",
        "title": "Excellent performance",
        "content": "The A16 chip makes everything fast and smooth. The display is vibrant, and the camera takes stunning pictures.",
        "rating": 5
      }
    ],
    "return_policy": {
      "policy": "14-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  }
  ,
  {
    "id": "p012",
    "name": "Samsung 65-inch 4K UHD Smart TV",
    "brand": "Samsung",
    "category_id": "c004",  // Electronics
    "price": {
      "original": 89990,
      "discounted": 74990,
      "currency": "INR",
      "discount_percentage": 16.7
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 30
    },
    "sizes": [
      { "size": "43-inch", "available": true },
      { "size": "55-inch", "available": true },
      { "size": "65-inch", "available": true },
      { "size": "75-inch", "available": true },
      { "size": "85-inch", "available": true }
    ],
    "colors": [
      { "name": "Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/91Y0y3Nhy6L._SL1500_.jpg" },
      { "name": "Dark Grey", "hex": "#A9A9A9", "image": "https://m.media-amazon.com/images/I/91Y2BShFHbL._SL1500_.jpg" },
      { "name": "Silver", "hex": "#C0C0C0", "image": "https://m.media-amazon.com/images/I/91r5Wdd38xL._SL1500_.jpg" }
    ],
    "description": "The Samsung 65-inch UHD Smart TV delivers incredible 4K resolution, superior sound, and access to your favorite apps with the Smart TV features.",
    "images": [
      "https://m.media-amazon.com/images/I/91Y0y3Nhy6L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91Y2BShFHbL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91r5Wdd38xL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91c7O-T5LKL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91puOhHLiQL._SL1500_.jpg"
    ],
    "rating_breakdown": {
      "1": 2,
      "2": 1,
      "3": 4,
      "4": 25,
      "5": 68
    },
    "average_rating": 4.6,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Rahul",
        "title": "Best TV for the price",
        "content": "Picture quality is amazing, and the sound is great for the price. It’s a perfect TV for my living room.",
        "rating": 5
      },
      {
        "reviewer": "Anita",
        "title": "Great value for money",
        "content": "A wonderful TV with superb picture quality. Smart features are easy to use and the setup was simple.",
        "rating": 4
      },
      {
        "reviewer": "Raj",
        "title": "Good, but sound could be better",
        "content": "The picture quality is excellent, but the sound could use some improvement. Still a great TV overall.",
        "rating": 4
      }
    ],
    "return_policy": {
      "policy": "15-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  },
  {
    "id": "p013",
    "name": "Nike Running Shoes",
    "brand": "Nike",
    "category_id": "c005",  // Clothing/Sportswear
    "price": {
      "original": 4999,
      "discounted": 3999,
      "currency": "INR",
      "discount_percentage": 20.0
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 150
    },
    "sizes": [
      { "size": "6", "available": true },
      { "size": "7", "available": true },
      { "size": "8", "available": true },
      { "size": "9", "available": true },
      { "size": "10", "available": true }
    ],
    "colors": [
      { "name": "Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/91ot+aD0VQL._SL1500_.jpg" },
      { "name": "Red", "hex": "#FF0000", "image": "https://m.media-amazon.com/images/I/91cGdI2ySLL._SL1500_.jpg" },
      { "name": "Blue", "hex": "#0000FF", "image": "https://m.media-amazon.com/images/I/91eq5A5VhrL._SL1500_.jpg" },
      { "name": "White", "hex": "#FFFFFF", "image": "https://m.media-amazon.com/images/I/91q+Qkdt2WL._SL1500_.jpg" },
      { "name": "Grey", "hex": "#808080", "image": "https://m.media-amazon.com/images/I/91vUah5F8aL._SL1500_.jpg" }
    ],
    "description": "The Nike Running Shoes are designed for comfort and performance, featuring lightweight cushioning and a durable rubber outsole for traction.",
    "images": [
      "https://m.media-amazon.com/images/I/91ot+aD0VQL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91cGdI2ySLL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91eq5A5VhrL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91q+Qkdt2WL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91vUah5F8aL._SL1500_.jpg"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 1,
      "3": 6,
      "4": 28,
      "5": 65
    },
    "average_rating": 4.7,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Arjun",
        "title": "Comfortable and stylish",
        "content": "These shoes are very comfortable for long runs and look great as well. Perfect for daily exercise.",
        "rating": 5
      },
      {
        "reviewer": "Ravi",
        "title": "Best running shoes I’ve owned",
        "content": "These shoes provide excellent support and are really comfortable. I’ve noticed less foot fatigue after long runs.",
        "rating": 5
      },
      {
        "reviewer": "Vikram",
        "title": "Good, but a little narrow",
        "content": "The shoes are great for running but they are a bit narrow. I would recommend ordering a half size up if you have wide feet.",
        "rating": 4
      }
    ],
    "return_policy": {
      "policy": "30-day return policy",
      "condition": "Product must be in unused condition with original packaging."
    }
  }
  ,
  {
    "id": "p014",
    "name": "Bajaj Majesty 1200W Steam Iron",
    "brand": "Bajaj",
    "category_id": "c003",  // Home Appliances
    "price": {
      "original": 1899,
      "discounted": 1599,
      "currency": "INR",
      "discount_percentage": 15.8
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 80
    },
    "sizes": [
      { "size": "1200W", "available": true },
      { "size": "1500W", "available": true },
      { "size": "2000W", "available": true }
    ],
    "colors": [
      {
        "name": "Purple",
        "hex": "#800080",
        "image": "https://m.media-amazon.com/images/I/91mtzoX27hL._SL1500_.jpg"
      },
      {
        "name": "Blue",
        "hex": "#0000FF",
        "image": "https://m.media-amazon.com/images/I/91MTw3EOHGL._SL1500_.jpg"
      },
      {
        "name": "Pink",
        "hex": "#FFC0CB",
        "image": "https://m.media-amazon.com/images/I/91RZnZn5O4L._SL1500_.jpg"
      },
      {
        "name": "Red",
        "hex": "#FF0000",
        "image": "https://m.media-amazon.com/images/I/91C8frHtdQL._SL1500_.jpg"
      },
      {
        "name": "Green",
        "hex": "#008000",
        "image": "https://m.media-amazon.com/images/I/91wTybS4gjL._SL1500_.jpg"
      }
    ],
    "description": "The Bajaj Majesty Steam Iron provides powerful steam output and a non-stick soleplate for a smooth ironing experience.",
    "images": [
      "https://m.media-amazon.com/images/I/91mtzoX27hL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91MTw3EOHGL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91RZnZn5O4L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91C8frHtdQL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91wTybS4gjL._SL1500_.jpg"
    ],
    "rating_breakdown": {
      "1": 1,
      "2": 2,
      "3": 10,
      "4": 33,
      "5": 54
    },
    "average_rating": 4.6,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Suman",
        "title": "Great iron for the price",
        "content": "Heats up quickly and works efficiently. The steam function is great for tough creases.",
        "rating": 5
      },
      {
        "reviewer": "Priya",
        "title": "Decent steam iron",
        "content": "Does the job, but the steam could be stronger. Overall good for daily use.",
        "rating": 4
      },
      {
        "reviewer": "Amit",
        "title": "Value for money",
        "content": "For the price, it's a good deal. Ironing is quicker and smoother.",
        "rating": 5
      }
    ],
    "return_policy": {
      "policy": "10-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  },
  {
    "id": "p015",
    "name": "Philips Sonicare Electric Toothbrush",
    "brand": "Philips",
    "category_id": "c002",  // Personal Care
    "price": {
      "original": 5999,
      "discounted": 4999,
      "currency": "INR",
      "discount_percentage": 16.7
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 45
    },
    "sizes": [
      { "size": "Standard", "available": true },
      { "size": "Compact", "available": true },
      { "size": "Deluxe", "available": true }
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF",
        "image": "https://m.media-amazon.com/images/I/91ZYJczmdhL._SL1500_.jpg"
      },
      {
        "name": "Black",
        "hex": "#000000",
        "image": "https://m.media-amazon.com/images/I/91eSTlrI5AL._SL1500_.jpg"
      },
      {
        "name": "Blue",
        "hex": "#0000FF",
        "image": "https://m.media-amazon.com/images/I/91ghQAt9y5L._SL1500_.jpg"
      },
      {
        "name": "Pink",
        "hex": "#FFC0CB",
        "image": "https://m.media-amazon.com/images/I/91F2nJv8f0L._SL1500_.jpg"
      }
    ],
    "description": "The Philips Sonicare Electric Toothbrush features advanced sonic technology for effective plaque removal and improved gum health.",
    "images": [
      "https://m.media-amazon.com/images/I/91ZYJczmdhL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91eSTlrI5AL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91ghQAt9y5L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91F2nJv8f0L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91zRrYhZd4L._SL1500_.jpg"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 2,
      "3": 6,
      "4": 17,
      "5": 75
    },
    "average_rating": 4.8,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Tina",
        "title": "Excellent toothbrush",
        "content": "My teeth have never felt so clean. The brush is gentle on gums but effective in cleaning.",
        "rating": 5
      },
      {
        "reviewer": "Vikram",
        "title": "Amazing cleaning power",
        "content": "The toothbrush works wonders. I feel like my mouth is really fresh after using it.",
        "rating": 5
      },
      {
        "reviewer": "Nisha",
        "title": "A good upgrade",
        "content": "The toothbrush is very effective, but the price is a bit high compared to other options.",
        "rating": 4
      }
    ],
    "return_policy": {
      "policy": "15-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  },  
  {
    "id": "p016",
    "name": "Sony WH-1000XM5 Noise Cancelling Headphones",
    "brand": "Sony",
    "category_id": "c002",  // Audio
    "price": {
      "original": 29990,
      "discounted": 24990,
      "currency": "INR",
      "discount_percentage": 16.7
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 50
    },
    "sizes": [
      { "size": "Standard", "available": true }
    ],
    "colors": [
      { "name": "Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/91M5oz5zzML._SL1500_.jpg" },
      { "name": "Silver", "hex": "#C0C0C0", "image": "https://m.media-amazon.com/images/I/91zRmrIHZgL._SL1500_.jpg" },
      { "name": "Blue", "hex": "#0000FF", "image": "https://m.media-amazon.com/images/I/91M2VHDogDL._SL1500_.jpg" }
    ],
    "description": "The Sony WH-1000XM5 Noise Cancelling Headphones are engineered for superior sound quality and exceptional comfort. Featuring industry-leading noise cancellation, long battery life, and seamless connectivity.",
    "images": [
      "https://m.media-amazon.com/images/I/91M5oz5zzML._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91zRmrIHZgL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91M2VHDogDL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91YsR3tSxkL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91T03A2m0UL._SL1500_.jpg"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 1,
      "3": 5,
      "4": 15,
      "5": 79
    },
    "average_rating": 4.8,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Sita",
        "title": "Best noise-cancelling headphones!",
        "content": "The noise cancellation is amazing, and the sound quality is superb. Very comfortable to wear for long hours.",
        "rating": 5
      }
    ],
    "return_policy": {
      "policy": "15-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  },
  {
    "id": "p017",
    "name": "LG 32-inch LED TV",
    "brand": "LG",
    "category_id": "c004",  // Electronics
    "price": {
      "original": 17990,
      "discounted": 14990,
      "currency": "INR",
      "discount_percentage": 16.7
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 60
    },
    "sizes": [
      { "size": "32-inch", "available": true },
      { "size": "43-inch", "available": true },
      { "size": "50-inch", "available": true }
    ],
    "colors": [
      { "name": "Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/91n1OoBrz6L._SL1500_.jpg" },
      { "name": "Silver", "hex": "#C0C0C0", "image": "https://m.media-amazon.com/images/I/91H+XyTz5ML._SL1500_.jpg" }
    ],
    "description": "The LG 32-inch LED TV offers stunning HD quality with great viewing angles and enhanced audio. Ideal for small to medium-sized rooms.",
    "images": [
      "https://m.media-amazon.com/images/I/91n1OoBrz6L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91H+XyTz5ML._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91jZYu+TFlL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91n6AOjwBXL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91vkvGELJ1L._SL1500_.jpg"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 3,
      "3": 10,
      "4": 25,
      "5": 62
    },
    "average_rating": 4.6,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Nilesh",
        "title": "Perfect TV for my room",
        "content": "The TV provides a great picture quality. Very easy to set up and use.",
        "rating": 5
      }
    ],
    "return_policy": {
      "policy": "15-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  },
  {
    "id": "p018",
    "name": "H&M Women's Casual Dress",
    "brand": "H&M",
    "category_id": "c006",  // Fashion/Clothing
    "price": {
      "original": 1999,
      "discounted": 1599,
      "currency": "INR",
      "discount_percentage": 20.0
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 100
    },
    "sizes": [
      { "size": "S", "available": true },
      { "size": "M", "available": true },
      { "size": "L", "available": true },
      { "size": "XL", "available": true }
    ],
    "colors": [
      { "name": "Red", "hex": "#FF0000", "image": "https://m.media-amazon.com/images/I/91ho0xGbndL._SL1500_.jpg" },
      { "name": "Blue", "hex": "#0000FF", "image": "https://m.media-amazon.com/images/I/91UOdRiQmEL._SL1500_.jpg" },
      { "name": "Black", "hex": "#000000", "image": "https://m.media-amazon.com/images/I/91j4MiGzS8L._SL1500_.jpg" },
      { "name": "Pink", "hex": "#FFC0CB", "image": "https://m.media-amazon.com/images/I/91X6NG8x4mL._SL1500_.jpg" },
      { "name": "White", "hex": "#FFFFFF", "image": "https://m.media-amazon.com/images/I/91vtdcf+KjL._SL1500_.jpg" }
    ],
    "description": "The H&M Women's Casual Dress offers a comfortable, stylish look with a flattering cut that is perfect for casual outings or work.",
    "images": [
      "https://m.media-amazon.com/images/I/91ho0xGbndL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91UOdRiQmEL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91j4MiGzS8L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91X6NG8x4mL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91vtdcf+KjL._SL1500_.jpg"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 0,
      "3": 5,
      "4": 25,
      "5": 70
    },
    "average_rating": 4.8,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Ayesha",
        "title": "Lovely dress!",
        "content": "The dress fits perfectly and looks amazing. Love the comfort and style. Great for a casual day out.",
        "rating": 5
      }
    ],
    "return_policy": {
      "policy": "30-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  },
  
  {
    "id": "p019",
    "name": "KitchenAid Stand Mixer",
    "brand": "KitchenAid",
    "category_id": "c003",  // Home Appliances
    "price": {
      "original": 29990,
      "discounted": 26990,
      "currency": "INR",
      "discount_percentage": 10.0
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 20
    },
    "sizes": [
      { "size": "Standard", "available": true },
      { "size": "Deluxe", "available": true }
    ],
    "colors": [
      {
        "name": "Silver",
        "hex": "#C0C0C0",
        "image": "https://images.kitchenaid.com/products/stand-mixer-silver.jpg"
      },
      {
        "name": "Red",
        "hex": "#FF0000",
        "image": "https://images.kitchenaid.com/products/stand-mixer-red.jpg"
      },
      {
        "name": "Black",
        "hex": "#000000",
        "image": "https://images.kitchenaid.com/products/stand-mixer-black.jpg"
      },
      {
        "name": "White",
        "hex": "#FFFFFF",
        "image": "https://images.kitchenaid.com/products/stand-mixer-white.jpg"
      },
      {
        "name": "Pink",
        "hex": "#FFC0CB",
        "image": "https://images.kitchenaid.com/products/stand-mixer-pink.jpg"
      }
    ],
    "description": "The KitchenAid Stand Mixer is designed to make mixing, kneading, and whisking effortless, perfect for all your baking needs.",
    "images": [
      "https://images.kitchenaid.com/products/stand-mixer-silver.jpg",
      "https://images.kitchenaid.com/products/stand-mixer-red.jpg",
      "https://images.kitchenaid.com/products/stand-mixer-black.jpg",
      "https://images.kitchenaid.com/products/stand-mixer-white.jpg",
      "https://images.kitchenaid.com/products/stand-mixer-pink.jpg"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 0,
      "3": 3,
      "4": 10,
      "5": 87
    },
    "average_rating": 4.9,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Priyanka",
        "title": "Excellent mixer!",
        "content": "This mixer has made my baking so much easier. It’s powerful and easy to use. Worth every penny!",
        "rating": 5
      },
      {
        "reviewer": "Nina",
        "title": "Perfect for baking",
        "content": "I love this mixer! It's great for all my baking needs. The motor is powerful and it mixes everything perfectly.",
        "rating": 5
      },
      {
        "reviewer": "Rita",
        "title": "Easy to use, but bulky",
        "content": "The mixer works great, but it’s a bit heavy. I would recommend it for heavy-duty use, not so much for small kitchens.",
        "rating": 4
      }
    ],
    "return_policy": {
      "policy": "15-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  }
  ,
  {
    "id": "p020",
    "name": "Adidas Men’s Sports T-Shirt",
    "brand": "Adidas",
    "category_id": "c005",  // Sportswear
    "price": {
      "original": 1799,
      "discounted": 1499,
      "currency": "INR",
      "discount_percentage": 16.7
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 120
    },
    "sizes": [
      { "size": "S", "available": true },
      { "size": "M", "available": true },
      { "size": "L", "available": true },
      { "size": "XL", "available": true },
      { "size": "XXL", "available": true }
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#000000",
        "image": "https://www.adidas.co.in/media/1559/black-t-shirt.jpg"
      },
      {
        "name": "White",
        "hex": "#FFFFFF",
        "image": "https://www.adidas.co.in/media/1559/white-t-shirt.jpg"
      },
      {
        "name": "Red",
        "hex": "#FF0000",
        "image": "https://www.adidas.co.in/media/1559/red-t-shirt.jpg"
      },
      {
        "name": "Blue",
        "hex": "#0000FF",
        "image": "https://www.adidas.co.in/media/1559/blue-t-shirt.jpg"
      }
    ],
    "description": "The Adidas Men’s Sports T-Shirt is made from lightweight, breathable fabric, designed for ultimate comfort and flexibility during workouts or casual wear.",
    "images": [
      "https://www.adidas.co.in/media/1559/black-t-shirt.jpg",
      "https://www.adidas.co.in/media/1559/white-t-shirt.jpg",
      "https://www.adidas.co.in/media/1559/red-t-shirt.jpg",
      "https://www.adidas.co.in/media/1559/blue-t-shirt.jpg",
      "https://www.adidas.co.in/media/1559/model-t-shirt.jpg"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 1,
      "3": 6,
      "4": 25,
      "5": 68
    },
    "average_rating": 4.7,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Vishal",
        "title": "Great t-shirt for workouts",
        "content": "The fabric is comfortable and breathable, making it perfect for high-intensity workouts. Highly recommend!",
        "rating": 5
      },
      {
        "reviewer": "Anil",
        "title": "Comfortable and durable",
        "content": "This t-shirt is soft, durable, and looks great. It's my go-to for workouts and casual outings.",
        "rating": 5
      },
      {
        "reviewer": "Ravi",
        "title": "Good quality, but a bit tight",
        "content": "The quality is great, but it runs a little tight around the chest area. Consider sizing up.",
        "rating": 4
      }
    ],
    "return_policy": {
      "policy": "30-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  }
  ,
  {
    "id": "p021",
    "name": "Apple iPhone 14 Pro Max",
    "brand": "Apple",
    "category_id": "c001",  // Mobile Phones
    "price": {
      "original": 139900,
      "discounted": 129900,
      "currency": "INR",
      "discount_percentage": 7.14
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 80
    },
    "sizes": [
      { "size": "128GB", "available": true },
      { "size": "256GB", "available": true },
      { "size": "512GB", "available": true },
      { "size": "1TB", "available": true }
    ],
    "colors": [
      {
        "name": "Space Black",
        "hex": "#1D1D1F",
        "image": "https://m.media-amazon.com/images/I/71cFqgTkBaL._SL1500_.jpg"
      },
      {
        "name": "Silver",
        "hex": "#C0C0C0",
        "image": "https://m.media-amazon.com/images/I/61l5kD4miTL._SL1500_.jpg"
      },
      {
        "name": "Gold",
        "hex": "#FFD700",
        "image": "https://m.media-amazon.com/images/I/61YltwWWu1L._SL1500_.jpg"
      },
      {
        "name": "Deep Purple",
        "hex": "#6A4E9F",
        "image": "https://m.media-amazon.com/images/I/71o7wEFjzWL._SL1500_.jpg"
      }
    ],
    "description": "The Apple iPhone 14 Pro Max features a powerful A16 Bionic chip, an exceptional 48MP camera system, and a stunning 6.7-inch OLED display with ProMotion technology, making it perfect for both work and play.",
    "images": [
      "https://m.media-amazon.com/images/I/71cFqgTkBaL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61l5kD4miTL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61YltwWWu1L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71o7wEFjzWL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71e7HDM7chL._SL1500_.jpg"
    ],
    "rating_breakdown": {
      "1": 2,
      "2": 5,
      "3": 10,
      "4": 30,
      "5": 53
    },
    "average_rating": 4.6,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Arun",
        "title": "Worth the price",
        "content": "Amazing camera quality, fast performance, and stunning display. However, the price is quite high.",
        "rating": 4
      },
      {
        "reviewer": "Rajeev",
        "title": "Top-tier smartphone",
        "content": "It’s the best phone I’ve ever had. The camera system is incredible, and the performance is seamless.",
        "rating": 5
      },
      {
        "reviewer": "Sushant",
        "title": "A bit pricey but worth it",
        "content": "While it’s on the expensive side, the iPhone 14 Pro Max is a solid device with unmatched performance and camera features.",
        "rating": 5
      }
    ],
    "return_policy": {
      "policy": "14-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  }
  ,
  {
    "id": "p022",
    "name": "Samsung 55-inch 4K UHD Smart LED TV",
    "brand": "Samsung",
    "category_id": "c004",  // Electronics
    "price": {
      "original": 64990,
      "discounted": 58990,
      "currency": "INR",
      "discount_percentage": 9.2
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 40
    },
    "sizes": [
      { "size": "55-inch", "available": true },
      { "size": "65-inch", "available": true },
      { "size": "75-inch", "available": true }
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#000000",
        "image": "https://m.media-amazon.com/images/I/91MjtKxRweL._SL1500_.jpg"
      },
      {
        "name": "Silver",
        "hex": "#C0C0C0",
        "image": "https://m.media-amazon.com/images/I/81VrmRVmj-L._SL1500_.jpg"
      }
    ],
    "description": "The Samsung 55-inch 4K UHD Smart LED TV delivers vibrant picture quality, seamless smart features, and an immersive audio experience.",
    "images": [
      "https://m.media-amazon.com/images/I/91MjtKxRweL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81VrmRVmj-L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91aTZgTR7OL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91xoTxkD24L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91tKhtJr9DL._SL1500_.jpg"
    ],
    "rating_breakdown": {
      "1": 1,
      "2": 3,
      "3": 6,
      "4": 25,
      "5": 65
    },
    "average_rating": 4.6,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Vikram",
        "title": "Great TV at a reasonable price",
        "content": "The picture and sound quality are amazing. Smart features work seamlessly. A great buy for the price.",
        "rating": 5
      },
      {
        "reviewer": "Sonal",
        "title": "Worth every penny",
        "content": "I’m really happy with my purchase. The display is sharp, and the smart features are very convenient.",
        "rating": 4
      },
      {
        "reviewer": "Rajesh",
        "title": "Good but needs improvement in sound",
        "content": "While the picture quality is great, the sound could be better for the price. Still, it's a solid TV overall.",
        "rating": 4
      }
    ],
    "return_policy": {
      "policy": "15-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  }
  ,
  {
    "id": "p023",
    "name": "Nike Air Zoom Pegasus 39 Running Shoes",
    "brand": "Nike",
    "category_id": "c007",
    "price": {
      "original": 9999,
      "discounted": 8999,
      "currency": "INR",
      "discount_percentage": 10.0
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 150
    },
    "sizes": [
      { "size": "UK 6", "available": true },
      { "size": "UK 7", "available": true },
      { "size": "UK 8", "available": true },
      { "size": "UK 9", "available": true },
      { "size": "UK 10", "available": true },
      { "size": "UK 11", "available": false }
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#000000",
        "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0e8b46d0-b402-4379-bcf4-818c5d6258a2/air-zoom-pegasus-39-mens-road-running-shoes-RM3P1T.png"
      },
      {
        "name": "White",
        "hex": "#FFFFFF",
        "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a045c64c-f5fc-4fc5-b764-287059ccbb29/air-zoom-pegasus-39-mens-road-running-shoes-MCV0Xm.png"
      },
      {
        "name": "Blue",
        "hex": "#0000FF",
        "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a59d9270-78b1-487a-b0ec-44c1bece95ef/air-zoom-pegasus-39-mens-road-running-shoes-VcS0Tj.png"
      },
      {
        "name": "Red",
        "hex": "#FF0000",
        "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3ad7b36b-d8b5-4e5d-b235-ffbb1c5b1b2d/air-zoom-pegasus-39-mens-road-running-shoes-lKfNVb.png"
      }
    ],
    "description": "The Nike Air Zoom Pegasus 39 Running Shoes are designed for maximum comfort and performance with responsive cushioning and a durable outsole.",
    "images": [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/473618fa-8d65-41a0-89f0-77c7e2b9bc16/air-zoom-pegasus-39-mens-road-running-shoes-TdVfBz.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/50570c53-2de7-490b-bcb3-b61c11dba450/air-zoom-pegasus-39-mens-road-running-shoes-IFyYkI.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/58d9b271-0283-4508-9376-8e101b0a6a0e/air-zoom-pegasus-39-mens-road-running-shoes-NKZmV5.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1184c7ed-4a2b-4e6f-ae30-94fe2fd100cf/air-zoom-pegasus-39-mens-road-running-shoes-MpJWcT.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7992879f-fd9b-4c7b-9975-1cf87e44b019/air-zoom-pegasus-39-mens-road-running-shoes-PWc5Yl.png"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 1,
      "3": 4,
      "4": 20,
      "5": 75
    },
    "average_rating": 4.8,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Sandeep",
        "title": "Great shoes for runners",
        "content": "These shoes are incredibly comfortable, providing great support for running. Definitely recommend!",
        "rating": 5
      },
      {
        "reviewer": "Amit",
        "title": "Very comfortable",
        "content": "Love the fit and the cushioning. Great for daily runs and casual wear.",
        "rating": 4
      },
      {
        "reviewer": "Priya",
        "title": "Good but expensive",
        "content": "Shoes are good, but I feel they are a bit overpriced for the features provided.",
        "rating": 4
      }
    ],
    "return_policy": {
      "policy": "30-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  }
  ,
  {
    "id": "p024",
    "name": "Dyson V8 Absolute Cordless Vacuum Cleaner",
    "brand": "Dyson",
    "category_id": "c003",
    "price": {
      "original": 29990,
      "discounted": 27990,
      "currency": "INR",
      "discount_percentage": 6.67
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 30
    },
    "sizes": [
      { "size": "Standard", "available": true }
    ],
    "colors": [
      {
        "name": "Nickel & Yellow",
        "hex": "#AFAFAF",
        "image": "https://www.dyson.com/medialibrary/Group/ShopContent/Products/Vacuums/V8/Absolute/Nickel-Yellow/Images/Dyson-V8-Absolute-Nickel-Yellow.ashx"
      }
    ],
    "description": "The Dyson V8 Absolute Cordless Vacuum Cleaner provides powerful suction, advanced filtration, and a long battery life, making it perfect for cleaning all areas of your home.",
    "images": [
      "https://www.dyson.com/medialibrary/Group/ShopContent/Products/Vacuums/V8/Absolute/Nickel-Yellow/Images/Dyson-V8-Absolute-Nickel-Yellow.ashx",
      "https://www.dyson.com/medialibrary/Group/ShopContent/Products/Vacuums/V8/Absolute/Nickel-Yellow/Images/Dyson-V8-Absolute-Nickel-Yellow-2.ashx",
      "https://www.dyson.com/medialibrary/Group/ShopContent/Products/Vacuums/V8/Absolute/Nickel-Yellow/Images/Dyson-V8-Absolute-Nickel-Yellow-3.ashx"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 0,
      "3": 2,
      "4": 10,
      "5": 88
    },
    "average_rating": 4.9,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Sanjay",
        "title": "Excellent vacuum cleaner",
        "content": "This vacuum is powerful, lightweight, and easy to use. It cleans my entire house on a single charge.",
        "rating": 5
      },
      {
        "reviewer": "Anita",
        "title": "Great for pet hair",
        "content": "I have two dogs, and this vacuum picks up hair effortlessly. Battery life is decent as well.",
        "rating": 4
      },
      {
        "reviewer": "Rahul",
        "title": "A bit pricey but worth it",
        "content": "The suction power is amazing, and it's very convenient to use. Just wish it was slightly more affordable.",
        "rating": 4
      }
    ],
    "return_policy": {
      "policy": "15-day return policy",
      "condition": "Product must be unused with original packaging."
    }
  }   
,
  {
    "id": "p025",
    "name": "Levi's Men's Denim Jeans",
    "brand": "Levi's",
    "category_id": "c006",
    "price": {
      "original": 2499,
      "discounted": 1999,
      "currency": "INR",
      "discount_percentage": 20.0
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 200
    },
    "sizes": [
      { "size": "UK 28", "available": true },
      { "size": "UK 30", "available": true },
      { "size": "UK 32", "available": true },
      { "size": "UK 34", "available": true },
      { "size": "UK 36", "available": false }
    ],
    "colors": [
      { "name": "Black", "hex": "#000000", "image": "https://lsco.scene7.com/is/image/lsco/005011484-black?$qv_desktop_full$" },
      { "name": "Blue", "hex": "#0000FF", "image": "https://lsco.scene7.com/is/image/lsco/005011484-blue?$qv_desktop_full$" },
      { "name": "Grey", "hex": "#808080", "image": "https://lsco.scene7.com/is/image/lsco/005011484-grey?$qv_desktop_full$" },
      { "name": "White", "hex": "#FFFFFF", "image": "https://lsco.scene7.com/is/image/lsco/005011484-white?$qv_desktop_full$" }
    ],
    "description": "Levi's Men's Denim Jeans are made with premium denim, offering comfort and durability. A classic wardrobe essential.",
    "images": [
      "https://lsco.scene7.com/is/image/lsco/005011484-front-pdp?$qv_desktop_full$",
      "https://lsco.scene7.com/is/image/lsco/005011484-back-pdp?$qv_desktop_full$",
      "https://lsco.scene7.com/is/image/lsco/005011484-side-pdp?$qv_desktop_full$",
      "https://lsco.scene7.com/is/image/lsco/005052906-front-pdp?$qv_desktop_full$",
      "https://lsco.scene7.com/is/image/lsco/005052906-back-pdp?$qv_desktop_full$"
    ],
    "rating_breakdown": {
      "1": 0,
      "2": 2,
      "3": 5,
      "4": 20,
      "5": 73
    },
    "average_rating": 4.8,
    "total_reviews": 100,
    "top_reviews": [
      {
        "reviewer": "Manish",
        "title": "Comfortable jeans",
        "content": "These jeans are very comfortable and stylish. The fit is perfect and the quality is great.",
        "rating": 5,
        "date": "2023-09-15"
      },
      {
        "reviewer": "Rahul",
        "title": "Great fit and quality",
        "content": "The jeans fit perfectly and the material feels durable. Highly recommended for daily wear.",
        "rating": 5,
        "date": "2023-08-25"
      },
      {
        "reviewer": "Ankit",
        "title": "Value for money",
        "content": "At this price, these jeans are a steal. They look premium and are very comfortable.",
        "rating": 4,
        "date": "2023-09-01"
      }
    ],
    "return_policy": {
      "policy": "30-day return policy",
      "condition": "Product must be unused with original packaging."
    }
},
  {
    "id": "p026",
    "name": "Samsung Galaxy M12",
    "brand": "Samsung",
    "category_id": "c001",
    "price": {
      "original": 13999,
      "discounted": 11999,
      "currency": "INR",
      "discount_percentage": 14.3
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 30
    },
    "sizes": [
      { "size": "64GB", "available": true },
      { "size": "128GB", "available": true },
      { "size": "256GB", "available": false }
    ],
    "colors": [
      { "name": "White", "hex": "#FFFFFF", "image": "https://images.unsplash.com/photo-1581329686633-12643bc3ac1b?ixid=MnwzNjYwNXwwfDF8c2VhcmNofDI5fHxob21lfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwMzM0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDI5fHxob21lfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwMzM0" },
      { "name": "Black", "hex": "#000000", "image": "https://images.unsplash.com/photo-1597619058453-01c9d0807e35?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDI1fHxob21lfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwMzM0" }
    ],
    "description": "Samsung Galaxy M12 offers a 48MP quad-camera setup, 6000mAh battery, and a smooth 90Hz display.",
    "images": [
      "https://images.unsplash.com/photo-1597619058453-01c9d0807e35?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDI1fHxob21lfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwMzM0",
      "https://images.unsplash.com/photo-1581329686633-12643bc3ac1b?ixid=MnwzNjYwNXwwfDF8c2VhcmNofDI5fHxob21lfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwMzM0"
    ],
    "rating_breakdown": {
      "1": 1,
      "2": 2,
      "3": 8,
      "4": 15,
      "5": 30
    },
    "average_rating": 4.2,
    "total_reviews": 56,
    "top_reviews": [
      {
        "reviewer": "Karan",
        "title": "Great performance for the price",
        "content": "Good camera, smooth operation, and long-lasting battery.",
        "rating": 5,
        "date": "2023-08-15"
      },
      {
        "reviewer": "Priya",
        "title": "Nice phone but could be better",
        "content": "Camera quality is average, but the battery life is great.",
        "rating": 4,
        "date": "2023-07-20"
      }
    ],
    "return_policy": {
      "policy": "15-day return policy",
      "condition": "Product must be in original packaging and unused."
    }
  },
  {
    "id": "p027",
    "name": "Realme Narzo 30 Pro",
    "brand": "Realme",
    "category_id": "c001",
    "price": {
      "original": 16999,
      "discounted": 14999,
      "currency": "INR",
      "discount_percentage": 11.8
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 25
    },
    "sizes": [
      { "size": "64GB", "available": true },
      { "size": "128GB", "available": true }
    ],
    "colors": [
      { "name": "Black", "hex": "#000000", "image": "https://images.unsplash.com/photo-1617954427837-ff7c0c2adce6?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDIwfHxpdmVfcGFuZWx8ZW58MHx8fHwxNjYzMzMwNzEw?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDIwfHxpdmVfcGFuZWx8ZW58MHx8fHwxNjYzMzMwNzEw" },
      { "name": "White", "hex": "#FFFFFF", "image": "https://images.unsplash.com/photo-1617954427837-ff7c0c2adce6?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDIwfHxpdmVfcGFuZWx8ZW58MHx8fHwxNjYzMzMwNzEw?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDIwfHxpdmVfcGFuZWx8ZW58MHx8fHwxNjYzMzMwNzEw" }
    ],
    "description": "Realme Narzo 30 Pro offers a 48MP triple-camera, 5000mAh battery, and a 120Hz refresh rate display.",
    "images": [
      "https://images.unsplash.com/photo-1617954427837-ff7c0c2adce6?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDIwfHxpdmVfcGFuZWx8ZW58MHx8fHwxNjYzMzMwNzEw",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    "rating_breakdown": {
      "1": 3,
      "2": 4,
      "3": 6,
      "4": 15,
      "5": 22
    },
    "average_rating": 4.1,
    "total_reviews": 50,
    "top_reviews": [
      {
        "reviewer": "Amit",
        "title": "Nice phone with good specs",
        "content": "Battery life is excellent, and the screen is smooth.",
        "rating": 5,
        "date": "2023-07-11"
      },
      {
        "reviewer": "Vikram",
        "title": "Satisfactory",
        "content": "Performance is good, but the camera could be better.",
        "rating": 4,
        "date": "2023-06-25"
      }
    ],
    "return_policy": {
      "policy": "10-day return policy",
      "condition": "Product must be in original packaging and unused."
    }
  },
  {
    "id": "p028",
    "name": "Vivo Y20",
    "brand": "Vivo",
    "category_id": "c001",
    "price": {
      "original": 12999,
      "discounted": 10999,
      "currency": "INR",
      "discount_percentage": 15.4
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 50
    },
    "sizes": [
      { "size": "64GB", "available": true },
      { "size": "128GB", "available": false }
    ],
    "colors": [
      { "name": "Nebula Blue", "hex": "#4B6A93", "image": "https://images.unsplash.com/photo-1605228139372-2e7a4c7074da?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDJ8fG5ldnVsYSBibHVlfGltYWdlL2pwZWZ8MHx8fHwxNjY2OTQ5MzE0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDJ8fG5ldnVsYSBibHVlfGltYWdlL2pwZWZ8MHx8fHwxNjY2OTQ5MzE0" },
      { "name": "Dawn White", "hex": "#F3F3F3", "image": "https://images.unsplash.com/photo-1605228139372-2e7a4c7074da?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDJ8fG5ldnVsYSBibHVlfGltYWdlL2pwZWZ8MHx8fHwxNjY2OTQ5MzE0" }
    ],
    "description": "Vivo Y20 features a 13MP AI camera, 5000mAh battery, and 6.51-inch Halo FullView display.",
    "images": [
      "https://images.unsplash.com/photo-1605228139372-2e7a4c7074da?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDJ8fG5ldnVsYSBibHVlfGltYWdlL2pwZWZ8MHx8fHwxNjY2OTQ5MzE0",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    "rating_breakdown": {
      "1": 4,
      "2": 6,
      "3": 8,
      "4": 18,
      "5": 22
    },
    "average_rating": 4.0,
    "total_reviews": 58,
    "top_reviews": [
      {
        "reviewer": "Alok",
        "title": "Great phone at a good price",
        "content": "Satisfactory performance, good battery backup.",
        "rating": 4,
        "date": "2023-07-05"
      },
      {
        "reviewer": "Simran",
        "title": "Decent camera quality",
        "content": "Battery lasts all day, but camera quality can be better.",
        "rating": 4,
        "date": "2023-08-13"
      }
    ],
    "return_policy": {
      "policy": "14-day return policy",
      "condition": "Product must be in original packaging and unused."
    }
  },
  {
    "id": "p029",
    "name": "Motorola Moto G60",
    "brand": "Motorola",
    "category_id": "c001",
    "price": {
      "original": 18999,
      "discounted": 16999,
      "currency": "INR",
      "discount_percentage": 10.5
    },
    "availability": {
      "in_stock": true,
      "stock_quantity": 20
    },
    "sizes": [
      { "size": "64GB", "available": true },
      { "size": "128GB", "available": true }
    ],
    "colors": [
      { "name": "Dynamic Gray", "hex": "#2F4F4F", "image": "https://images.unsplash.com/photo-1602665102904-0e9035e776ed?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDMyfHxleWVsYXBzaWQgdGFnfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzI2" },
      { "name": "Frosted Champagne", "hex": "#F8F8F8", "image": "https://images.unsplash.com/photo-1602665102904-0e9035e776ed?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDMyfHxleWVsYXBzaWQgdGFnfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzI2" }
    ],
    "description": "Motorola Moto G60 comes with a 108MP camera, 6000mAh battery, and 120Hz display.",
    "images": [
      "https://images.unsplash.com/photo-1602665102904-0e9035e776ed?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDMyfHxleWVsYXBzaWQgdGFnfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzI2",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
    "rating_breakdown": {
      "1": 1,
      "2": 3,
      "3": 7,
      "4": 20,
      "5": 50
    },
    "average_rating": 4.4,
    "total_reviews": 81,
    "top_reviews": [
      {
        "reviewer": "Pradeep",
        "title": "Impressive camera quality",
        "content": "The 108MP camera is fantastic and captures stunning photos.",
        "rating": 5,
        "date": "2023-09-01"
      },
      {
        "reviewer": "Ravi",
        "title": "Great performance overall",
        "content": "Great performance and battery life, but a bit bulky.",
        "rating": 4,
        "date": "2023-08-05"
      }
    ],
    "return_policy": {
      "policy": "7-day return policy",
      "condition": "Product must be in original packaging and unused."
    }
  },
    {
      "id": "p030",
      "name": "Oppo A54",
      "brand": "Oppo",
      "category_id": "c001",
      "price": {
        "original": 13990,
        "discounted": 11990,
        "currency": "INR",
        "discount_percentage": 14.3
      },
      "availability": {
        "in_stock": true,
        "stock_quantity": 35
      },
      "sizes": [
        { "size": "64GB", "available": true },
        { "size": "128GB", "available": true }
      ],
      "colors": [
        { "name": "Crystal Black", "hex": "#000000", "image": "https://images.unsplash.com/photo-1601641101486-2685fcac183b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDJ8fG9wcG8gYWF4fGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzMw" },
        { "name": "Starry Blue", "hex": "#0000FF", "image": "https://images.unsplash.com/photo-1601641101486-2685fcac183b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDJ8fG9wcG8gYWF4fGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzMw" }
      ],
      "description": "Oppo A54 features a 13MP AI camera, 5000mAh battery, and 6.51-inch HD+ display.",
      "images": [
        "https://images.unsplash.com/photo-1601641101486-2685fcac183b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDJ8fG9wcG8gYWF4fGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzMw",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      "rating_breakdown": {
        "1": 2,
        "2": 3,
        "3": 9,
        "4": 15,
        "5": 30
      },
      "average_rating": 4.1,
      "total_reviews": 59,
      "top_reviews": [
        {
          "reviewer": "Nisha",
          "title": "Good phone for the price",
          "content": "The camera is decent, and the battery lasts long.",
          "rating": 4,
          "date": "2023-07-22"
        },
        {
          "reviewer": "Rajesh",
          "title": "Nice design and smooth performance",
          "content": "Satisfactory performance for daily use.",
          "rating": 4,
          "date": "2023-08-05"
        }
      ],
      "return_policy": {
        "policy": "10-day return policy",
        "condition": "Product must be in original packaging and unused."
      }
    },
    {
      "id": "p031",
      "name": "Xiaomi Redmi Note 10",
      "brand": "Xiaomi",
      "category_id": "c001",
      "price": {
        "original": 14999,
        "discounted": 12999,
        "currency": "INR",
        "discount_percentage": 13.3
      },
      "availability": {
        "in_stock": true,
        "stock_quantity": 45
      },
      "sizes": [
        { "size": "64GB", "available": true },
        { "size": "128GB", "available": true }
      ],
      "colors": [
        { "name": "Onyx Gray", "hex": "#2C3539", "image": "https://images.unsplash.com/photo-1602475369814-cfbd9f81ed5a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDExfHxob21lfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzk4" },
        { "name": "Pebble White", "hex": "#BEBEBE", "image": "https://images.unsplash.com/photo-1602475369814-cfbd9f81ed5a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDExfHxob21lfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzk4" }
      ],
      "description": "Redmi Note 10 brings a 48MP camera, AMOLED display, and 48-hour battery life.",
      "images": [
        "https://images.unsplash.com/photo-1602475369814-cfbd9f81ed5a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDExfHxob21lfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzk4",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      "rating_breakdown": {
        "1": 3,
        "2": 4,
        "3": 10,
        "4": 16,
        "5": 22
      },
      "average_rating": 4.2,
      "total_reviews": 55,
      "top_reviews": [
        {
          "reviewer": "Sonali",
          "title": "Best in this price range",
          "content": "Superb camera quality and display.",
          "rating": 5,
          "date": "2023-07-12"
        },
        {
          "reviewer": "Kunal",
          "title": "Good phone for normal usage",
          "content": "Battery and camera are good but could be better.",
          "rating": 4,
          "date": "2023-08-07"
        }
      ],
      "return_policy": {
        "policy": "14-day return policy",
        "condition": "Product must be in original packaging and unused."
      }
    },
    {
      "id": "p032",
      "name": "Samsung Galaxy A32",
      "brand": "Samsung",
      "category_id": "c001",
      "price": {
        "original": 21999,
        "discounted": 18999,
        "currency": "INR",
        "discount_percentage": 13.6
      },
      "availability": {
        "in_stock": true,
        "stock_quantity": 40
      },
      "sizes": [
        { "size": "64GB", "available": true },
        { "size": "128GB", "available": true }
      ],
      "colors": [
        { "name": "Black", "hex": "#000000", "image": "https://images.unsplash.com/photo-1611980292517-2d698c233f2c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDk0fHxhbWVsaW8gY2VsbW0gZ2Vvc3BpZGVxZnB8Z3BjfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzgz" },
        { "name": "White", "hex": "#FFFFFF", "image": "https://images.unsplash.com/photo-1611980292517-2d698c233f2c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDk0fHxhbWVsaW8gY2VsbW0gZ2Vvc3BpZGVxZnB8Z3BjfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzgz" }
      ],
      "description": "Galaxy A32 comes with a 64MP quad-camera, 5000mAh battery, and Super AMOLED display.",
      "images": [
        "https://images.unsplash.com/photo-1611980292517-2d698c233f2c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDk0fHxhbWVsaW8gY2VsbW0gZ2Vvc3BpZGVxZnB8Z3BjfGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzgz",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ],
      "rating_breakdown": {
        "1": 2,
        "2": 4,
        "3": 9,
        "4": 22,
        "5": 30
      },
      "average_rating": 4.2,
      "total_reviews": 67,
      "top_reviews": [
        {
          "reviewer": "Rajeev",
          "title": "Amazing display and camera",
          "content": "The camera and display are fantastic in this price range.",
          "rating": 5,
          "date": "2023-08-15"
        },
        {
          "reviewer": "Tanya",
          "title": "Good phone for daily use",
          "content": "Battery lasts for a whole day, and camera quality is good.",
          "rating": 4,
          "date": "2023-08-30"
        }
      ],
      "return_policy": {
        "policy": "15-day return policy",
        "condition": "Product must be in original packaging and unused."
      }
    },
      {
        "id": "p033",
        "name": "Realme Narzo 30 Pro",
        "brand": "Realme",
        "category_id": "c001",
        "price": {
          "original": 16999,
          "discounted": 14999,
          "currency": "INR",
          "discount_percentage": 11.8
        },
        "availability": {
          "in_stock": true,
          "stock_quantity": 50
        },
        "sizes": [
          { "size": "64GB", "available": true },
          { "size": "128GB", "available": true }
        ],
        "colors": [
          { "name": "Black", "hex": "#2C2C2C", "image": "https://images.unsplash.com/photo-1606339709741-903616bf64fb?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDgxfHxyZWFsbWUgY2VsZ3JheXxlbnwwfDB8fHwxNjYzMzMwNzkw" },
          { "name": "Blazing Blue", "hex": "#004C8C", "image": "https://images.unsplash.com/photo-1606339709741-903616bf64fb?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDgxfHxyZWFsbWUgY2VsZ3JheXxlbnwwfDB8fHwxNjYzMzMwNzkw" }
        ],
        "description": "Realme Narzo 30 Pro offers a 48MP camera, 5000mAh battery, and 120Hz display.",
        "images": [
          "https://images.unsplash.com/photo-1606339709741-903616bf64fb?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDgxfHxyZWFsbWUgY2VsZ3JheXxlbnwwfDB8fHwxNjYzMzMwNzkw",
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        "rating_breakdown": {
          "1": 1,
          "2": 3,
          "3": 8,
          "4": 22,
          "5": 36
        },
        "average_rating": 4.3,
        "total_reviews": 70,
        "top_reviews": [
          {
            "reviewer": "Vikram",
            "title": "Value for money",
            "content": "Performance is smooth, and the battery lasts all day.",
            "rating": 5,
            "date": "2023-07-05"
          },
          {
            "reviewer": "Manoj",
            "title": "Good for gaming",
            "content": "Perfect phone for casual gaming, but a bit heavy.",
            "rating": 4,
            "date": "2023-08-10"
          }
        ],
        "return_policy": {
          "policy": "14-day return policy",
          "condition": "Product must be in original packaging and unused."
        }
      },
      {
        "id": "p034",
        "name": "Vivo V20",
        "brand": "Vivo",
        "category_id": "c001",
        "price": {
          "original": 24999,
          "discounted": 21999,
          "currency": "INR",
          "discount_percentage": 12.0
        },
        "availability": {
          "in_stock": true,
          "stock_quantity": 30
        },
        "sizes": [
          { "size": "128GB", "available": true },
          { "size": "256GB", "available": false }
        ],
        "colors": [
          { "name": "Sunset Melody", "hex": "#FF6F61", "image": "https://images.unsplash.com/photo-1611980251810-6f9826b2992f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDk4fHxiaXZvIHZlbG9nfGVufDB8fHwxNjYzMzMwNzkw" },
          { "name": "Midnight Jazz", "hex": "#212121", "image": "https://images.unsplash.com/photo-1611980251810-6f9826b2992f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDk4fHxiaXZvIHZlbG9nfGVufDB8fHwxNjYzMzMwNzkw" }
        ],
        "description": "Vivo V20 boasts a 44MP selfie camera, 33W fast charging, and AMOLED display.",
        "images": [
          "https://images.unsplash.com/photo-1611980251810-6f9826b2992f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDk4fHxiaXZvIHZlbG9nfGVufDB8fHwxNjYzMzMwNzkw",
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        "rating_breakdown": {
          "1": 2,
          "2": 4,
          "3": 9,
          "4": 18,
          "5": 31
        },
        "average_rating": 4.3,
        "total_reviews": 64,
        "top_reviews": [
          {
            "reviewer": "Ravi",
            "title": "Great camera",
            "content": "Selfie camera is fantastic, and overall performance is smooth.",
            "rating": 5,
            "date": "2023-06-15"
          },
          {
            "reviewer": "Neelam",
            "title": "Good display and design",
            "content": "Display is bright, and the design is premium.",
            "rating": 4,
            "date": "2023-07-20"
          }
        ],
        "return_policy": {
          "policy": "15-day return policy",
          "condition": "Product must be in original packaging and unused."
        }
      },
      {
        "id": "p035",
        "name": "Nokia 5.4",
        "brand": "Nokia",
        "category_id": "c001",
        "price": {
          "original": 14999,
          "discounted": 12999,
          "currency": "INR",
          "discount_percentage": 13.3
        },
        "availability": {
          "in_stock": true,
          "stock_quantity": 40
        },
        "sizes": [
          { "size": "64GB", "available": true },
          { "size": "128GB", "available": true }
        ],
        "colors": [
          { "name": "Polar Night", "hex": "#1C1C1C", "image": "https://images.unsplash.com/photo-1606225790897-5203e47d09a1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDE4fHxmY29sb3JlbmF0fGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzkw" },
          { "name": "Blush Gold", "hex": "#D4B89D", "image": "https://images.unsplash.com/photo-1606225790897-5203e47d09a1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDE4fHxmY29sb3JlbmF0fGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzkw" }
        ],
        "description": "Nokia 5.4 features a 48MP quad-camera, Snapdragon processor, and 4000mAh battery.",
        "images": [
          "https://images.unsplash.com/photo-1606225790897-5203e47d09a1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjYwNXwwfDF8c2VhcmNofDE4fHxmY29sb3JlbmF0fGltYWdlL2pwZWZ8MHx8fHwxNjYzMzMwNzkw",
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ],
        "rating_breakdown": {
          "1": 1,
          "2": 2,
          "3": 6,
          "4": 14,
          "5": 27
        },
        "average_rating": 4.2,
        "total_reviews": 50,
        "top_reviews": [
          {
            "reviewer": "Sandeep",
            "title": "Good phone",
            "content": "The camera quality is great, but the battery life could be better.",
            "rating": 4,
            "date": "2023-06-30"
          },
          {
            "reviewer": "Priya",
            "title": "Affordable yet feature-rich",
            "content": "The phone offers decent performance for the price range.",
            "rating": 4,
            "date": "2023-07-10"
          }
        ],
        "return_policy": {
          "policy": "15-day return policy",
          "condition": "Product must be in original packaging and unused."
        }
      }
    ]
    