const express = require('express');
const { adminSignIn } = require('../controllers/authController');
const {
  createAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin,
} = require('./../controllers/adminController');
const router = express.Router();

// Create new admin and get all admins
router.route('/').post(createAdmin);
router.route('/adminSignIn').post(adminSignIn);
// Get specific admin and update, delete the admin
router.route('/:id').get(getAdmin).patch(updateAdmin).delete(deleteAdmin);

module.exports = router;
