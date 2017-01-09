/**
 * Created by QUALITYPC3 on 17/06/2016.
 */
var express = require('express');
var router = express.Router();
var db = require('../../models/index');

/**
 * CARGOS DE NOMINA
 * 1. Create
 * 2. FindAll
 * 3. FindByID
 * 4. Update
 * 5. Delete
 */

router.route('/cargos')
// Create
    .post(function (req, res) {
        db.sequelize.models['nom_cargo'].create(req.body).then(function (itemSaved) {
            res.status(200).json({status: 'success', data: itemSaved});
        }, function (error) {
            res.status(500).json({status: 'error', error: error});
        })
    })
    // FindAll
    .get(function (req, res) {
        db.sequelize.models['nom_cargo'].findAll({}).then(function (itemList) {
            res.json({status: 'success', data: itemList});
        }, function (error) {
            res.status(500).json({status: 'error', error: error});
        })
    })

router.route('/cargos/:id')
// FindByID
    .get(function (req, res) {
        db.sequelize.models['nom_cargo'].findAll({where: {codcargo: req.params.id}}).then(function (item) {
            res.json({status: 'success', data: item});
        }, function (error) {
            res.status(500).json({status: 'error', error: error})
        })
    })
    // Update
    .put(function (req, res) {
        db.sequelize.models['nom_cargo'].find({where: {codcargo: req.params.id}}).then(function (itemFound) {
            itemFound.updateAttributes(req.body).then(function (itemUpdated) {
                res.status(200).json({status: 'success', data: itemUpdated});
            }, function (error) {
                res.status(500).json({status: 'error', error: error});
            })
        }, function (error) {
            res.status(500).json({status: 'error', error: 'error'});
        })
    })
    // Delete
    .delete(function (req, res) {
        db.sequelize.models['nom_cargo'].destroy({where: {codcargo: req.params.id}}).then(function (wasDeleted) {
            if (wasDeleted) {
                res.status(200).json({status: 'success'});
            }
            else {
                res.status(404).json({status: 'not found', data: {codcargo: req.params.id}});
            }
        }, function (error) {
            res.status(500).json({status: 'error', error: error});
        })
    })

module.exports = router;