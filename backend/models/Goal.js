// models/Goal.js
const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  day: { type: Number, required: true },   
  distance: { type: Number, required: true }, 
  totalgoals: { type: Number, required: false }, 
  progress: { type: Number, required: false },  
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Goal', goalSchema);
