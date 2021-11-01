const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  // I hope this is okay...if not I made an actual number version of createdDate below
  createdDate: {
    type: Date,
    default: Date.now,
  },

  // createdDate: {
  //     type: Number,
  //     default: Date.getTime(),
  // },
});

DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

// export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
