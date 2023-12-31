const mongoose = require('mongoose');

let bankSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Nama pemilik harus diiisi']
  },
  bankName: {
    type: String,
    require: [true, 'Nama bank harus diisi']
  },
  accountNumber: {
    type: String,
    require: [true, 'Nomor rekening harus diisi']
  }
}, { timestamps: true })

module.exports = mongoose.model('Bank', bankSchema);
