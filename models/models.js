var odoose = require('odoose')
var db = require('../db')

odoose.connect(db, {})

var Member = odoose.model('Member', require('./member'), 'res.partner')

var models = {
  Member: Member
}

module.exports = exports = models
