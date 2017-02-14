/**
 * Created by QUALITYPC3 on 17/06/2016.
 */
module.exports = function(sequelize, DataTypes) {

    return sequelize.define('host',{
            id : {
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            host : {
                type:DataTypes.STRING,
                allowNull:false,
                defaultValue:'',
                validate : {
                  notEmpty : false
                }
            },
            userName : {
                type : DataTypes.STRING,
                allowNull:false,
                defaultValue:'',
                validate : {
                  notEmpty : false
                }
            },
            pwd : {
                type : DataTypes.STRING,
                allowNull : false,
                defaultValue : '',
                validate : {
                  notEmpty : false
                }
            },
            description : {
                type: DataTypes.STRING,
                allowNull : false,
                defaultValue : '',
                validate : {
                  notEmpty : false
                }
            },
            domain : {
                type: DataTypes.STRING,
                allowNull : false,
                defaultValue : '',
                validate : {
                  notEmpty : false
                }
            }
        },
        {
            tableName : 'host'
        })
};
