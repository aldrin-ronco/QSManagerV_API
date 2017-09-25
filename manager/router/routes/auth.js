/**
 * Created by QUALITYPC3 on 17/06/2016.
 */
var express = require('express');
var router = express.Router();
var db = require('../../models/index');

router.route('/auth')
.get(function (req, res){
  let domain = req.query.domain;
  let secret = req.query.secret;
  db.sequelize.models['host'].findOne({where: {domain:domain}}).then(function (item) {
      if (item) {
        res.json({host: item});
      } else {
        res.json({host: {}});
      }
  }, function (error) {
      res.status(500).json({status: 'error', error: error})
  })
})

module.exports = router;
