const express = require('express');

const {
  getAllOrders,
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
} = require('./../controllers/orderController');

const router = express.Router();

router.route('/').post(createOrder).get(getAllOrders);
router.route('/:id').get(getOrder).patch(updateOrder).delete(deleteOrder);

module.exports = router;
