/**
 * Created by 98882 on 2017/4/1.
 */
// 模块引入
var express = require('express')
var bodyParser = require('body-parser')
var config = require('../config/config.js')
var userTokenClass = require('../common/userTokenClass.js')
var mongoose = require('mongoose')
var Promise = require('bluebird')
mongoose.Promise = require('bluebird')
var strip = require('strip-markdown');
var remark = require('remark');
var processor = remark().use(strip);

var article = mongoose.model('article')

// 实例化模块
var app = express()
var router = express.Router()

// bodyParser设置解析http请求体
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router
    .get("/", function (req, res, next) {
        res.send({
            title:"delete"
        })
    })
      .post("/", function (req, res, next) {
          if (req.body) {
              let _id = req.body._id;
              article
                  .remove({_id: _id})
                  .then(data => {
                      res.send({
                          state: true,
                          info: "删除成功"
                      })
                  })
                  .catch(e => {
                      res.send({
                          state: false,
                          info: "出错了"
                      })
                  })
          }
      });
module.exports = router