const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const ProductSchema = new Schema({
  productID: [
    {
      type: String,
    },
  ],
  ProductName: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  ProductImage: {
    type: String,
  },
  ProductCost: {
    type: String,
  },
  ProductDetails: {
    type: String,
    required: true,
  },
});

module.exports = ProductSchema;
