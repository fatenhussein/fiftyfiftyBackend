const express = require('express');
const { signIn, signUp } = require('../controllers/authController');
const {
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  getAllCustomers 
} = require('./../controllers/customerController');
const router = express.Router();

//create new vendor
// router.route('/').get(getAllCustomers);
router.route('/').post(createCustomer).get(getAllCustomers);
router.route('/signup').post(signUp);
router.route('/signIn').post(signIn);

//get specific  vendor and update , delete the vendor
router
  .route('/:id')
  .get(getCustomer)
  .patch(updateCustomer)
  .delete(deleteCustomer);

module.exports = router;