const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }
});

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  bannerImg: {
    type: String,
    default: ''
  },
  products: [productSchema]
});

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true
  },
  categoryImg: {
    type: String,
    default: ''
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  homeCategory: {
    type: [categorySchema],
    default: []
  },
  following: {
    type: [String],
    default: []
  }
});

const Customer = mongoose.model('Customer', userSchema);

const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = {Farmer,Customer};
