const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testapp1");

const userSchema =  mongoose.Schema({
  image:"string",
  name:"string",
  email:"string"

})

module.exports = mongoose.model('user' , userSchema);