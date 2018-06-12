'use strict'
var express = require('express')
var bodyParser = require('body-parser')
var config = require('./config')
var models = require('./models/models')

var Member = models.Member

module.exports = function (wagner) {
  var api = express.Router()
  api.use(bodyParser.json())
  api.use(bodyParser.urlencoded({
    extended: true
  }))

  api.get('/member', function (req, res) {
    Member.find({'is_customer': true}, 'name email address phone').then(members => {
      return res.json({
        members: members
      })
    }).catch(e => {
      console.log(e)
      return res.status(500).json({
        error: e.toString()
      })
    })
  })

  api.get('/member/:id', function (req, res) {
    Member.findById(parseInt(req.params.id), 'name email address phone').then(member => {
      return res.json({
        member: member
      })
    }).catch(e => {
      console.log(e)
      return res.status(500).json({
        error: e.toString()
      })
    })
  })

  api.get('/member/image/:id', function (req, res) {
    Member.findById(parseInt(req.params.id), 'image').then(member => {
      res.contentType(member.image.contentType)
      return res.end(member.image.data)
    }).catch(e => {
      console.log(e)
      return res.status(500).json({
        error: e.toString()
      })
    })
  })

  return api
}
