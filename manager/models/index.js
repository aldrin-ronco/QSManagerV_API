/**
 * Created by QUALITYPC3 on 17/06/2016.
 * PostGre user : sa
 * PostGre Pwd  : Ingenier0
 */

"use strict";

var fs        = require("fs");
var path      = require("path");
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || "development";
var db        = {};
var Sequelize = require('sequelize');
var sequelize = new Sequelize('BD_MANAGER','sa','Ingenier0',{
    host: 'qsmanager.c343eskxssfo.us-west-2.rds.amazonaws.com',
    port: 5432,
    dialect:'postgres',
    pool:{
        max:30,
        min:0,
        idle:10000
    },
    define:{
        timestamps:false,
        schema:'public'
    }
});

fs
    .readdirSync(path.join(__dirname,'model'))
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== basename);
    })
    .forEach(function(file) {
        var model = sequelize["import"](path.join(__dirname,'model', file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;