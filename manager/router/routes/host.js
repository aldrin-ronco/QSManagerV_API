/**
 * Created by QUALITYPC3 on 17/06/2016.
 */
var express = require('express');
var router = express.Router();
var db = require('../../models/index');

router.route('/')
// FindAll
.get(function (req, res) {
    db.sequelize.models['host'].findAll({order:['description']}).then(function (itemList) {
        res.json({hosts: itemList});
        //res.redirect(301,"http://localhost:4200/login");
        //console.log("http://localhost:4200/index?user=sa");
        //res.redirect(301,"http://localhost:4200/?user=sa");
        //res.redirect(301,"https://qsmanager.herokuapp.com/index?user=sa");

    }, function (error) {
        res.status(500).json({status: 'error', error: error});
    })
})

router.route('/hosts')
// FindAll
.get(function (req, res) {
    db.sequelize.models['host'].findAll({order:['description']}).then(function (itemList) {
        res.json({hosts: itemList});
    }, function (error) {
        res.status(500).json({status: 'error', error: error});
    })
})
// Create
.post(function (req, res) {
  //console.log('post node',req.body.host);
  db.sequelize.models['host'].create(req.body.host).then(function (itemSaved) {
    res.status(200).json({host: itemSaved});
  }, function (error) {
    res.status(500).json({"status": 'error', "error": error});
  })
})

router.route('/hosts/domain')
.get(function (req, res){
  let domain = req.query.q;
  db.sequelize.models['host'].findAll({where: {domain:domain}}).then(function (item) {
      res.json({host: item});
  }, function (error) {
      res.status(500).json({status: 'error', error: error})
  })
})

router.route('/host/search')
    // Search by data provided
    .get(function(req, res){
        let query = req.query.q;
        db.sequelize.models['host'].findAll({
            where:{
                $or:{
                    domain:{$like:`%${query}%`},
                    description:{$like:`%${query}%`},
                    host:{$like:`%${query}%`},
                    username:{$like:`%${query}%`}
                }
            }
        }).then(function(itemList){
            res.json({status:'success', hosts:itemList});
        }, function(error){
           res.json({status:'error', error:error});
        })
    })

router.route('/hosts/:id')
// FindByID
    .get(function (req, res) {
        db.sequelize.models['host'].findAll({where: {id: req.params.id}}).then(function (item) {
            res.json({host: item});
        }, function (error) {
            res.status(500).json({status: 'error', error: error})
        })
    })
    // Update
    .put(function (req, res) {
       console.log(req.body.host);
        db.sequelize.models['host'].find({where: {id: req.params.id}}).then(function (itemFound) {
            itemFound.updateAttributes(req.body.host).then(function (itemUpdated) {
                res.status(200).json({host: itemUpdated});
            }, function (error) {
                res.status(500).json({error: error});
            })
        }, function (error) {
            res.status(500).json({error: 'error'});
        })
    })
    // Delete
    .delete(function (req, res) {
        db.sequelize.models['host'].destroy({where: {id: req.params.id}}).then(function (wasDeleted) {
            if (wasDeleted) {
                res.status(200).json({});
            }
            else {
                res.status(404).json({status: 'not found', host: {id: req.params.id}});
            }
        }, function (error) {
            res.status(500).json({error: error});
        })
    })

module.exports = router;
