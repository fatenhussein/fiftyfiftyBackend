const Offer = require('../models/offersModel');

// get all customer
exports.getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find();

    res.status(200).json({
      status: 'success',
      result: offers.length,
      data: {
        offers,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

//Create Customer:
exports.createOffer = async (req, res) => {
  try {
    const newOffer = await Offer.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        offer: newOffer,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

//Get customer:
exports.getOffer = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      offer,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

//UpdateCustomer:
exports.updateOffer = async (req, res) => {
  try {
    //By default, findOneAndUpdate() returns the document as it was before update was applied.
    //If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
    const offer = await Offer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      offer,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

//Delete Customer:
exports.deleteOffer = async (req, res) => {
  try {
    const offer = await Offer.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
