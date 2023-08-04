const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'admin',
  },
});

adminSchema.pre('save', function (next) {
  const admin = this;

  if (!admin.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(admin.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      admin.password = hash;
      next();
    });
  });
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
