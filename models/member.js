var odoose = require('odoose')

var memberSchema = new odoose.Schema({
  id: {
    type: Number,
    path: 'id'
  },
  name: {
    type: String,
    required: true,
    path: 'name'
  },
  email: {
    type: String,
    path: 'email'
  },
  phone: {
    type: String,
    path: 'phone'
  },
  address: {
    type: String,
    path: 'street'
  },
  is_customer: {
    type: String,
    path: 'customer'
  },
  image: {
    data: Buffer,
    contentType: String,
    path: 'image'}
})

module.exports = memberSchema
