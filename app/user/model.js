const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  email: {
    type: String,
    require: [true, 'email harus diisi']
  },
  name: {
    type: String,
    require: [true, 'nama harus diisi']
  },
  password: {
    type: String,
    require: [true, 'kata sandi harus diisi']
  },
  status: {
    type: String,
    enum: ['Y', 'N'],
    default: 'Y'
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'admin'
  },
  phoneNumber: {
    type: String,
    require: [true, 'nomor telepon harus diisi']
  },
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);
