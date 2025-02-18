export const categories=[
  {
    "id": "c001",
    "name": "Mobiles",
    "thumbnail_image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fElwaG9uZXxlbnwwfDF8MHx8fDA%3D",
    "discount_range": {
      "min_discount": 7.14,
      "max_discount": 12.5
    }
  },
  {
    "id": "c002",
    "name": "Electronics",
    "thumbnail_image": "https://images.unsplash.com/photo-1593344484962-796055d4a3a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3Ryb25pY3N8ZW58MHwxfDB8fHww",
    "discount_range": {
      "min_discount": 6.67,
      "max_discount": 9.2
    }
  },
  {
    "id": "c003",
    "name": "Sportswear",
    "thumbnail_image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHwxfDB8fHww",
    "discount_range": {
      "min_discount": 10.0,
      "max_discount": 20.0
    }
  },
  {
    "id": "c004",
    "name": "Home Appliances",
    "thumbnail_image": "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG9tZSUyMEFwcGxpYW5jZXxlbnwwfDF8MHx8fDA%3D",
    "discount_range": {
      "min_discount": 6.67,
      "max_discount": 7.67
    }
  },
  {
    "id": "c005",
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
    "category_id": "c002",
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
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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"
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
    "https://images.unsplash.com/photo-1615064779799-df1bfcc66ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWRpZGFzfGVufDB8MXwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1599839614778-a0ee8a16f2a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWRpZGFzfGVufDB8MXwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1598403031688-e7cfd2c222c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFkaWRhc3xlbnwwfDF8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1599839352521-8f25bc02b3b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFkaWRhc3xlbnwwfDF8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1605169936406-d068825d1e5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fEFkaWRhc3xlbnwwfDF8MHx8fDA%3D"
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
  "category_id": "c003",
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
    "https://images.unsplash.com/photo-1600774237019-70db10d342e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fE5pa2V8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fE5pa2V8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1513188732907-5f732b831ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fE5pa2V8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1620138546344-7b2c38516edf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fE5pa2V8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1595909236612-9fd30b476365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fE5pa2V8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1610870372593-a8647b04451f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fE5pa2V8ZW58MHwxfDB8fHww"
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
  "category_id": "c004",
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
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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"
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
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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"
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
  "category_id": "c002",
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
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wMTEGF0EZDOQyCShZOO9lT22El83KMAe7g&s"
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
  "name": "Puma Hoodie for Men",
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
    "https://images.unsplash.com/photo-1633991201346-3dd19fd6afe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fFB1bWF8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1633991201433-dd95ea9ea80e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fFB1bWF8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1633991201540-a39e4c5390f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fFB1bWF8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1633991201308-b7737942b550?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fFB1bWF8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1633991201447-7eb790b5be2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fFB1bWF8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1633991201073-2a8d6c43508a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFB1bWF8ZW58MHwxfDB8fHww"
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
  "category_id": "c002",
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
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEhIQDw8QDw4PDg8PDxAPDxAPDw0PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0OGA0NFSsZHxkrKzcrKys3LS0rKys3Ky0rNystKzctLSstMjcrKy03NzI3KzcrNysrNysrKys3Kys3K//AABEIAOcA2gMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAABAMIAgUGBwH/xABDEAEAAgEBAgcLCgUDBQAAAAAAAQMCBAURMXFzdJGy0QYhIjI0QWGBsbPwEhUjM0JRUlNywQcTFCShdcLhYmNkkpP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADz+l1OdmepjLPKYr1WVeERM4xjhFVc7t0cPfynh+9zsrxnhiJ44hR3OWowjhzxjjyiGOddTHDdXHHZj2uksR3SQeknaen/AD6f/rh2v2NpaeeC+meK3DteJvlBeg+lYamvLxbMMuLLGWV8hvj0JYtyw8TLLD9GU4+wH2gfFtV3S62jDLOvVW/KxiJj5ec2xwx5s98bn2anKZxxmY3TOMTMcG6d3fgHMAAAAAAAAAAAAAAAAAHmtmfWavn1nuqnOdRM/JmcJjHKd0Tv++J3fHpYtnT4esn/AM6z3VbJ3R5fyq9NH49bpq+nf2KPyxJcssRXKjrb4nfw977t2PYivldeguZENyK1ZcitB1e2vqbP0fu2Aa/bbn6Gz9EtgRQAAAAAAAAAAAAAAAAAHl9B42s57b7utj/iHnux0H+saKOmco/dk2f42s57d7utL/EvxNn/AOtaD3kqLrEdyyxHcqOuvQXLr0FzIguRWrbkVoOp23P0Nv6JbBte9ufUW8nk2EFAAAAAAAAAAAAAAAAAAeW0Hjaznt3u8GP+IuG/DQejbOgnoyyn9mXZ0eFq+fXdTBk7q8f5tWlnh+Tr9JZ0Zf8AKj8sR3LLEVyo6+9BeuvQXsiC5FatuQ2g6nbv1F3J5NhWvO3vqLuSy9jYYUAAAAAAAAAAAAAAAAAB5bZOW/LVzumP7++O/wCiMY/Yzrtn5GOW6a8Moy8eJ8Xxd2P8uPR9rpfuzfH1XPrurgqzVE9iO5ZaivUdfegvX3uvvZEFyG1dehtB1G3/ACe7ks/Y2Ha7d0M/29/I2dWWxIoAAAAAAAAAAAAAAAAADy+zfH1XPrurgpzS7N8bVc+v9mCrNUT2I7lliK+VHX3oL116C9kQXIbV16G0HTd0Pk1/IWdWWxTXXuh8nv5Czqy2KgUAAAAAAAAAAAAAAAAAB5XZvjarn1/sxVZpNm+NqufX/wC1VmqMFiK5ZYjuUdfcguXXIL2RBehtW3obQdP3QeT38hZ1ZbFQ117oPJ7+Qs6stiseD1Cv0AAAAAAAAAAAAAAAAAHk9mT4Wq5/qPbCrNJsyfC1XP8AU+2FOaow2I75VWSjulRBcguXXSgvZEF6G1bdKG6QdRt/ye/kLerLYvHgjihrnt/ye/kLerLYvDgjigVyAAAAAAAAAAAAAAAAH5L8B5LZs+Fqef6nrQpzR7OnwtTz/VddTlkqMVko75U2ZI78lEV0ob1d0obpZEVyG1ZehtkHU7e8nv5C3qy2Mw4I4oa5be8nv5C3qS2LwnvRxR7BWTeOOMuQAAAAAAAAAAAAAAOObhvc7OBikHkdBPhann+q+78bPlkl0U+Fqef6rzf9xmyz9MqjjZPx8QjulltySXZ/G5RLdKG7JTbl6UV2XpZEl0orZVXSjtkHV7dn+3v5C3qS2Iry70cUexrrtyf7e/kLepLYOvPvRxR7BVeE99kT0Zd/1KAAAAAAAAAAAAAAAcc2KXO7LdCK3UbgeS02Xh6nn2q94yZWcfx60Wlt8LUT9+t1PvHKy3iVHOyz47yK6z0ltscfFuR3XqPyyxHdn6ZLLeL/AClst+N7I4W5JbJZLM/jfvT55A67bc/QX8jb1JbA1cEcUexr5tqfoLuQt6svv+mt3xH6Y9gq3T8PqlUm009/1KQAAAAAAAAAAAAAAYdV4vrdZfi7LV+L60GUg+Y7S29hpNbnosq7rLbrM9RjlXjh/LjCyZy7/wArKJ726Ymd3mZLtrR5q7ejD9snu9ZVGXDETHpddnoq/wAvHoB4qzakT9izojtYMtd/05/+sdr3P9DV+Xj0Pz5vq/Lx6AeBz1Uz9nPohhzsyn7OXRD6J831fl49BGz6vy8egHzeYzn7OT8/prJ4MJfTMdn1/l49DNhs7D8GPQD4xtbLH5X9HnlFd2owxwr345zH0uc1xwR3t0x59z77pK53R6I3OqnuX0dtld1umqsupmJrzyx8LCYnfHHunvxE+d6XEHLTY7p9Slhq4WYAAAAAAAAAAAAAAHC2uMo3Tv8AUwzosfvy/wAdikBHls7CfPl0x2MeWyK5+1n049jsAHW/Mtf4s+nHsfnzLX+Kzpx7HZgOt+Zq/wAWfTj2P2Nj1/iz6cex2ICGNlYffn049jlGzsI8+XTHYsAT46TGPPP+OxziiPvn/DKA4Y1xDmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_IIjjjTYSGeRpaT6hhMf80pXOQpmZNvd-w&s"
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
    "https://images.unsplash.com/photo-1678761442615-5af77170f925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U29ueSUyMFBsYXklMjBTdGF0aW9uJTIwNXxlbnwwfDF8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1641943303469-412584d2c4ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U29ueSUyMFBsYXklMjBTdGF0aW9uJTIwNXxlbnwwfDF8MHx8fDA%3D",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqAF3KSn0d9XNjHiB0_IJS_0VH04QM9EGZg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdX2X8Ei8ffPxdzBR1xxKABw3uOAHeakxMg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsOUEcAgkBBKIxfLfAyvBzf9RCfUKo81I7A&s",
    
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
      "https://images.unsplash.com/photo-1677563277026-17a254ea02f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SXBob25lJTIwMTR8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1697898706719-bce6e007c817?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SXBob25lJTIwMTR8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1671899563931-1fa2e0169ecb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SXBob25lJTIwMTR8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1663314326676-5e71b13ee62f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SXBob25lJTIwMTR8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1697898734230-705d8fc551e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fElwaG9uZSUyMDE0fGVufDB8MXwwfHx8MA%3D%3D"
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
    "category_id": "c002",  // Electronics
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
      "https://images.unsplash.com/photo-1574597146034-2f166efd78a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMFRWfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Ftc3VuZyUyMFRWfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1574597146034-2f166efd78a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMFRWfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2Ftc3VuZyUyMFRWfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1664908791396-06604db3b36c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNhbXN1bmclMjBUVnxlbnwwfDF8MHx8fDA%3D"
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
    "category_id": "c003",  // Clothing/Sportswear
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
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmlrZXxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmlrZXxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmlrZXxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pa2V8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1600774236989-a383d15c2e8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5pa2V8ZW58MHwxfDB8fHww"
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
    "category_id": "c004",  // Home Appliances
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
      "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFqYWolMjBJcm9ufGVufDB8MXwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1678218568883-1c2482ccdac3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1678218591263-e9f4126efe9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1677418211580-ce92c11af36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1540544093-b0880061e1a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyNnx8fGVufDB8fHx8fA%3D%3D"

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
    "category_id": "c002",  
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
      "https://images.unsplash.com/photo-1641130331708-dd0cc94ae8e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGhpbGlwcyUyMEJydXNofGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1612181819081-950d35f4d826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664544673336-62801425aab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1593010997571-7ebe6c593d8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664544673658-538da91c8293?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8"
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
      "https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29ueSUyMEhlYWRwaG9uZXxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1700221927863-f328c44b2d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U29ueSUyMEhlYWRwaG9uZXxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1548378329-437e1ef34263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29ueSUyMEhlYWRwaG9uZXxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1641048930621-ab5d225ae5b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNvbnklMjBIZWFkcGhvbmV8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1617714313606-283484c136be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNvbnklMjBIZWFkcGhvbmV8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1693841115069-049662159bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNvbnklMjBIZWFkcGhvbmV8ZW58MHwxfDB8fHww"
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
    "id": "p018",
    "name": "H&M Women's Casual Dress",
    "brand": "H&M",
    "category_id": "c005",  
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
      "https://plus.unsplash.com/premium_photo-1715876234327-0f6d2aca2c19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1715876234610-50a7efd89fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1715876268432-444f64fb26f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1715876234619-f788993b78d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1664879492779-e4ef05d168a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyNXx8fGVufDB8fHx8fA%3D%3D"
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
    "category_id": "c004", 
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
      "https://images.unsplash.com/photo-1547091267-6b2be403a763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1peGVyfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1595644258096-69155da290fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1693875161648-913e8680886c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1718186096304-e8a0be862bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWl4ZXJ8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1587560555774-4063ddc3fe25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWl4ZXJ8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1631545086981-30550f1ab63a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWl4ZXJ8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1576602355403-bd9c3c93583e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWl4ZXJ8ZW58MHwxfDB8fHww"
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
    "category_id": "c005", 
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
      "https://images.unsplash.com/photo-1598403031688-e7cfd2c222c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWRpZGFzJTIwVHNoaXJ0fGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1572965841528-54da2f2461d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWRpZGFzJTIwVHNoaXJ0fGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1629796988460-89ad9072fbf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QWRpZGFzJTIwVHNoaXJ0fGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1511746210499-d38fef0f131f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFkaWRhcyUyMFRzaGlydHxlbnwwfDF8MHx8fDA%3D"
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
      "https://images.unsplash.com/photo-1701680848891-89a6a4e9e31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SXBob25lJTIwMTQlMjBwcm8lMjBtYXh8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1664363535302-6f71e41a176a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fElwaG9uZSUyMDE0JTIwcHJvJTIwbWF4fGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1701680842563-64402cf27368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fElwaG9uZSUyMDE0JTIwcHJvJTIwbWF4fGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1687170468710-bc75e9d8a9cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SXBob25lJTIwMTQlMjBwcm8lMjBtYXh8ZW58MHwxfDB8fHww"
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
    "category_id": "c002",  // Electronics
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
      "https://images.unsplash.com/photo-1574597146034-2f166efd78a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMFRWfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Ftc3VuZyUyMFRWfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1574597146034-2f166efd78a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMFRWfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2Ftc3VuZyUyMFRWfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1664908791396-06604db3b36c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNhbXN1bmclMjBUVnxlbnwwfDF8MHx8fDA%3D"
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
    "category_id": "c003",
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
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE5pa2V8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE5pa2V8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE5pa2V8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1600181516264-3ea807ff44b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE5pa2V8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1612821745127-53855be9cbd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fE5pa2V8ZW58MHwxfDB8fHww"
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
    "category_id": "c002",
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
      "https://plus.unsplash.com/premium_photo-1677527434670-c78fba9d197f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1664372899228-75948af31a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1677683510603-2a27a5345583?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1678659480278-5dddc6785600?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"
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
    "category_id": "c005",
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
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCCmyuC4K68QqE50pVzVs699HohqSWCzLjg&s"
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
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tEorIz-iFFPkZELurlA0gnSgWI4ZorTiZA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2CsRw5mEYIkERgCEfClID5GjvyM4CSfYyQ&s"
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
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEBUPEA8NEBAQDw8QDxEPDw8PDw0QFREWFhURFRUYHSggGBolGxMVITEhJTUtLi4vFx8zODMtNyg5MjABCgoKDg0OGxAQGi0dHSUrLS0tLSsrKzcrNS0tNS0tLSsrLisvLS0tLS4tLS0tNS0tLSstLSstLS0tKy0tLSstLf/AABEIAOQA3QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABAUGBwECAwj/xABOEAABAwICAwkKCggEBwAAAAAAAQIDBBEFIRIxdAYHEyI0QVFhtBQjJHGBlKGys9EWMjNSU1VzkaTTQlSDhLHB0vEVQ3KTY2RlgsLh8P/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAArEQEAAgEDAgUDBAMAAAAAAAAAAQIDBBEhBRIxMjNRcRMjQSJSsfAUJDT/2gAMAwEAAhEDEQA/AN4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqscxdKZERG6cr76Db2aiJZFe5eZLqidKqqJ1pStxSpfmsrmr82JsSInkc1y+lTnH3d8lcutJIIk6mpGr/AOL1MS3VVz4+BYx72I9j3v0HuYsnHRqNVyZ6OWpOktVpWtO6Y3ZGXLmy6j6VLdsQy3u6o+mn/D/lHDsQnTXPN+H/ACjUWITyt/zJUul26Mr1RU1JayrfWW+4t1e2sjilirnU87J0ckzJlZE5sT3skTSTiO0mI3mvpc+Qi1N9pq6vptRFZmMsy2IuJzfTzfh/ygmJz/Tzfh/yiM+F6ZuY9PG1UQ9I2WS6+TrLH06ezKjVajfm0pCV8/0834f8o83YpOn+fN+H/KI0sxHc4fSp7Op1mX90p3+MTfTTfh/yjj/GZvppvw/5RXr15Hmrzr6NPZz/AJmb90rqk3TyMciTN4SPnciIkjE53ZZPsmapZFte11yMva5FRFRUVFS6KmaKnSa5ond9Z9oxPvUzTc6vg7W8zHSxN6mxyuY1PuahU1GOK8w1unam+XetuVmACs1AAAAAAAAAAAAAAAAAAAYVunfZZl/5qHsyGCbtJuTr0wydd++qZruuX5fqqoOzNNf7sJlRKZUWy8DNZeheFUuW9GGRhj/dt8T/ACh7nZ17qajk+K2V6XRdLSaxdHNei906zP8AAam9TCnS2Xy8SRTWmFTtSoRzbtRY5OK5yOcjtBbrlzda9JmW5asvWwX+bOvjRIZvcqFb8tS3llsF0SvdfKzUsl1sirz/AMiBLQSuXJY+rjL7ifSSqrbqutXKdXzK1qqnRl4+YtRa0TtDGthpeN7KKaBWfGVtr2ui3RV6ETWpHdJbV966/wD0S6tOLn0oV73IhZrvPizclIidocPceSvOksyEV85LEIZhY0MnfY/tWeshnW5xbwft6vtMhrfDprzxfbR+shsfczyf9vV9qkKesjiGt0if1T/fZagAoN4AAAAAAAAAAAAAAAAAAGD7ppWtdPpt0mrVQNVL2VPBmrdOvI1ru/c1HUyNfxOAlXSVLWThVvdOlDPd3L7JPttP2VprLdsrn9xxsY+R8kNQ1kbGue968OvFRrc18hdvH2Ilk4f+y3xP8qWicrJ7Kj2qjZLo9qsel2ra6LqMs3I1t8QpW9EdUjtXNBUu9xh7qSrhka6qpa2JHo9jZapkzdKzFVI2q9PGtvcZDuLdfEabPVHVoud7L3LUfdrQqxMTPDTvxSd/ZuWlqE0fKpDqqzJEunSQ6VHI3Jb5r/ArnSu1r0IX4xz3MKc1ZpG0pGI1PF1/pJ/Mp5anrU4xSos1P9X8lKWWpLFK8KWa3KxkqfEeK1BXLUHXhiaIVZldYVN4RD9vF66G1dy/J/29Z2qU01gsnhUG0Q+uhuTctyb94rO1SlDXeENno/mn++y4ABnN4AAAAAAAAAAAAAAAAOFOTgDWO76RdGoVbZV8CJbLLuRpg1Ukr+5p6eeOmqqN0/AySoqxSMfmrVTRdZ2bkzSyo7msZtu9zbUJ/wBRg7I0wOpfno8zUt5ec1seKuTF22fN5898Wpm1fF1xSpxbENBtVVUczGOV7WMVsXH0XNRyq1iXsjnZdZJwOgfQypVTcE57WStjjikc5WOkZoK97laifEe+yJfNUzSxHp5bOQv504SNHf8Aav8AFP5ntNBjr4GXqmaf07RzwyPC65HszXWuTuniprTpPLSVES+aWTxLl0mHvxSWJNBqsRP9N1XJE6eol4Ljb9LQfZWKi82qxNWsx4qeSsWiOxZ4u1qtTm4//ipQz0/OZFiCNka3RVLq5Vt1I1c0+9CnlhVCxSnCje8xbZVOYqHS5MmTpQivQ8miett0rBHeFQbTD7RDdm5RfBv3is7XKaRwXlUG0we0Q3buT5N+8Vva5TN18bRDb6V5pXIAM1uAAAAAAAAAAAAAAAAAAA1bu4dZKpV/Rr4F/BtNcOfdbmwN8ezUqUTLSr6ZV8a0bbr6DXWkbmm9OHzWrp96ZezXGQ4PLpNVi86WTx83psYxctMJns4t0Uc1P0veuiv4yqR6sW6KqLquhkWINz0k1OTS8XT6Sjq4j21DHZxDXvaulpOd41VbeLoL2lxFsiZ6/SYsq2OzJFTNP7HNLTTgzaeMvP5ZTPTouaZoVs9OcUOJ8ylirmvTK1yzEVvCltfFO0q/CG2qoNpg9ohuvcgvgv7zXdslNQ0MFqmHaIfXQ27uMXwRNpru2TGP1Ovbs+j6PaLTMrwAGQ3QAAAAAAAAAAAAAAAAAAal30suG66umVete5bX9CGt1cbF31XZzbVS9lU1sim7pfShg6uPuy76RIpJLKRLnaN9lLVfFUtXeGYI7Ti628ZPEuSlXO0kYROls9WpfEuR1qWaKqnQtiztwq1opahljx0rf/ayyqGXKyRLKQWpsnpP4l2vzp/YlUtaqc5BR4XpT+xzEzHg6tji0bSyvB61HTRIv00Xrobb3ELejTaa/tsxobBJ1SphT/jw+uhvfcIvgSbTX9tmKPU7d1YlodKw/Tm2zIQAYzaAAAAAAAAAAAAAAAAAABpvfUku+oT5tZSp4/BL39Jri5sHfTXvtTttJ2Jpr25v6b04+GJqo+5LtcIp1uLljdW2XOFy8xbVXGRHdKWXxoY3RSWUyCF+k1W9KXTxoW8fMI605Q3EGpjJ02sjSZi1XU41Y86op7TsI6qVbRs6hNwhfCYdoh9ohv3cByFNpr+2zHz/AISvhMP28Prob/3vuQJtOIdumM3qHkj5aWgjmWSAAyWkAAAAAAAAAAAAAAAAAADSm+mvfanbaTsTTXZsLfU+WqdtpOxNNeG/p/Tr8Qx9RH3JdrHCnJwpNuh7XpA6yl9RzZIvQY61S1o5C1il5WvKwqkz8eaEJykxzrt60IUussTHCfseEqEKRCY4jSIVr1Rzj2dsJXwmHaIfXQ+gt7zkDdpxDt0x8+YWnhEO0Q+0Q+g97vkDdqxDt0xkdQjakfK5oo5lkoAMhoAAAAAAAAAAAAAAAAAAA0jvqfLVO20nYkNe3Nh76ny1TttJ2Jprw3sHp1+IZ2Wu95cnCjynCqSou0uTKN+ZBU96ZxNityRRdwP5ulDymQ843857S55l6s7wsVqhOPB57yoR5CK0FqO+Gcoh2iH2iH0Bvd8gbtOIdumPn/DOUQ7RD7RD6A3uuQN2nEO3TGN1LyR8u9PXaZZMADGWwAAAAAAAAAAAAAAAAAAaS31PlqnbaTsSGB0CMWeJJEvEtRAkqWVbxcI3TSyZ/FvqzM930/lanbaTsTTAaeB73tbGj9JXIqKxHqrLKnfOIiuRG/GumaWNzF6UfCrau8rTdRrj00peG06vT7mSmRvc/CM7m0uA4urhLc9rX5ijUuN0iqsjNKObhEa5JqiamdSOr36Sd8SJUT4qZaS8Z17usVCnuLikObxy6qdoVzOqnDVspPSdpcdq0idkSGrdCHA4kMdmXq2S1h0lIshLkIsqHlpSbO+F8oh2iH10N/73fIG7ViHbpjQGF8ph2iH10PoDe75A3asQ7dMZHU/JHyY42lkoAMVMAAAAAAAAAAAAAAAAAADSu+j8rVbbSdiaYBBpaTdBLu0mo1tldpuVyWYqJ8ZF1W5725zYO+f8rVbbSdiaa9VDcxenX4R7JmOMakiW0WyKjuHiZMtRFTSX+IyRb9d23dorlpLzVqndUOiodVjaNnk1dHHQ7uOiqdxLmapkDsiTcg0ziWilqluHsQ9XrdCPKeiKeb1JJl27YXymHaIfaIfQG95yBu1Yh26Y0BhfKYdoh9ohv/e85Am1Yh26YyepeSPl7HiyUAGM6AAAAAAAAAAAAAAAAAABpjfPTvtTtlIvk7jRL+hfuNf2Ns77eASuvWQsdIx0ccdS1iK50axOV0U+imats97XW1XaupFVNVxU0j00mRSvav6UbHSN+9t0U2dPaLY42/BEI7kPJSa6gm/V6n/Yl9x5Ow+f9Xqv9iX3ExshOPNVJb8Pn/Vqrzeb+k8v8Pn/AFWr82n/AKRs52dIHZkxriMygnReTVfm039JbMwOotfg3ZpeytkR2q9raOvqJq228TZDRxxIpZfB+b5rvLG9L+g6PwKo+jcurU2TnVE+b1+hTuLx7vUXCs6mDaIPaIfQG97yBvXU16p1otbNZTRuC4LUvqo2QMZJO1yORiKvelsujJLlxGIuauXosl1VEX6HwLDW0lNFTNVXJDE1mkuuRyJxnr1qt18pl9RyVmIrAngAy3oAAAAAAAAAAAAAAAAAABU1m5iimcr5aKjkeuaufBErlXrW11LYHsTMeAovgbh31dQ+bxe4fA3Dvq6h83i9xeg977e4ovgbh31fQ+bxe4fA3Dvq6h83i9xegd9vcUXwNw76uofN4vcPgZh31dQ+bxe4vQO+3uKL4G4d9XUPm8XuOPgXhv1dQebRe4vgO+3vIj0VDFA3QhiiiZ82JjY2/c1CQAcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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"
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
      "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjQwIh-Mfm7UcvcWnRDoi9HZED8NBzgT7fA&s",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7sPYPHQHSx8Gl-uDwKukQ2QzSluwNTinxQ&s"
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
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyybp5BbN0w6wLEY5wUDzj07HncDygoZvKg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKf-q0Hu8LrlaBrU4w0Y9P-sGxnwAGEHu6g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZbmqCiRajYRV-JqkycEwJ9zjZFt4X237wg&s"
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfmh0mUjwYw47tubB_VMOKuH3eFTRSM-lvg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUPdeOxUbNBRUeojROOrIAHX-_i3G__612g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPSD5hx3SFs4zhLnb9r9HTlLuBf9_m1h5hXw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdvqACKjQyXZ_48JdzENLbjmv4R_oCXL99A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0jElxOuUtKgQhXaSs2q0jBolpeueIPS0kg&s"
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
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoOKzOkbRYv0w_pZYKlx_vlkBcHf8tMwU4Q&s",
        "data:image/jpeg;base64,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"
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
          "https://images.unsplash.com/photo-1709123895403-9034c5676d39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbG1lJTIwTmFyem98ZW58MHwxfDB8fHww",
          "https://images.unsplash.com/photo-1662211268181-b858b715dec9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbG1lJTIwTmFyem98ZW58MHwxfDB8fHww",
          "https://images.unsplash.com/photo-1648520756289-36a67271f6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbG1lJTIwTmFyem98ZW58MHwxfDB8fHww",
          "https://images.unsplash.com/photo-1605003295623-ea4fd7ac6351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWxtZSUyME5hcnpvfGVufDB8MXwwfHx8MA%3D%3D"
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
          "https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Vml2byUyMG1vYmlsZXxlbnwwfDF8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1584839401450-accbe1a8ef7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFZpdm98ZW58MHwxfDB8fHww",
          "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Vml2b3xlbnwwfDF8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1533228100845-08145b01de14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Vml2b3xlbnwwfDF8MHx8fDA%3D"
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
          "https://images.unsplash.com/photo-1659436868784-5781d7c2ba7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Tm9raWElMjA1LjR8ZW58MHwxfDB8fHww",
          "https://images.unsplash.com/photo-1587017234728-932c80f3e56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Tm9raWElMjA1LjR8ZW58MHwxfDB8fHww",
          "https://images.unsplash.com/photo-1706670227100-7fd759f27807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE5va2lhJTIwNS40fGVufDB8MXwwfHx8MA%3D%3D",
          "https://images.unsplash.com/photo-1707939592066-4f5b2fccc5d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Tm9raWElMjA1LjR8ZW58MHwxfDB8fHww"
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
    