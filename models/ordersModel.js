const mongoose = require('mongoose');
const ordersSchema = new mongoose.Schema({
  orderTime: {
    type: Date,
    default: Date.now(),
  },
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customers'
},
  orderStatus: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: 'pending'
  },
  totalPrice: {
    type: Number,
  },
  orderLocation:{
    type:String
  },
  
});

const ordersModel = mongoose.model('orders', ordersSchema);
module.exports = ordersModel;
