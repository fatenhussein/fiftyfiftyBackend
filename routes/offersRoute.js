const express = require('express');

const {
  getAllOffers,
  createOffer,
  getOffer,
  updateOffer,
  deleteOffer,
} = require('./../controllers/offerController');
const router = express.Router();

router.route('/').post(createOffer).get(getAllOffers);
router.route('/:id').get(getOffer).patch(updateOffer).delete(deleteOffer);

module.exports = router;
