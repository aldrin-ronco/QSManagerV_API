/**
 * Created by QUALITYPC3 on 17/06/2016.
 */
var express = require('express');
var router = express.Router();
var db = require('../../models/index');

router.route('/databases')
// FindAll
.get(function (req, res) {
    let filter = req.query.filter;
    db.sequelize.models['database'].findAll({
       where:filter,
       order:['description']
    }).then(function (data) {
        res.json({databases: data});
    }, function (error) {
        res.status(500).json({status: 'error', error: error});
    })
})
// Create
.post(function (req, res) {
  console.log(req.body.database);
  db.sequelize.models['database'].create(req.body.database).then(function (itemSaved) {
    res.status(200).json({database: itemSaved});
  }, function (error) {
    res.status(500).json({status: 'error', error: error});
  })
})

// router.route('/databases')
//     // Search by data provided
//     .get(function(req, res){
//         let query = req.query.q;
//         db.sequelize.models['host'].findAll({
//             where:{
//                 $or:{
//                     domain:{$like:`%${query}%`},
//                     description:{$like:`%${query}%`},
//                     host:{$like:`%${query}%`},
//                     username:{$like:`%${query}%`}
//                 }
//             }
//         }).then(function(itemList){
//             res.json({status:'success', hosts:itemList});
//         }, function(error){
//            res.json({status:'error', error:error});
//         })
//     })

router.route('/databases/:id')
// FindByID
    .get(function (req, res) {
        db.sequelize.models['database'].findAll({where: {id: req.params.id}}).then(function (item) {
            res.json({database: item});
        }, function (error) {
            res.status(500).json({status: 'error', error: error})
        })
    })
    // Update
    .put(function (req, res) {
        //console.log(req.body);
        db.sequelize.models['database'].find({where: {id: req.params.id}}).then(function (itemFound) {
            itemFound.updateAttributes(req.body.database).then(function (itemUpdated) {
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
        db.sequelize.models['database'].destroy({where: {id: req.params.id}}).then(function (wasDeleted) {
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
