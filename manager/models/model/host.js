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
            ip : {
                type:DataTypes.STRING,
                allowNull:false,
                defaultValue:'',
                validate : {
                  notEmpty : true
                }
            },
            sql_user_name : {
                type : DataTypes.STRING,
                allowNull:false,
                defaultValue:'',
                validate : {
                  notEmpty : true
                }
            },
            sql_pwd : {
                type : DataTypes.STRING,
                allowNull : false,
                defaultValue : '',
                validate : {
                  notEmpty : true
                }
            },
            description : {
                type: DataTypes.STRING,
                allowNull : false,
                defaultValue : '',
                validate : {
                  notEmpty : true
                }
            },
            domain : {
                type: DataTypes.STRING,
                allowNull : false,
                defaultValue : '',
                validate : {
                  notEmpty : true
                }
            },
            company_logo : {
              type: DataTypes.STRING,
              allowNull: false,
              defaultValue: ''
            },
            port : {
              type : DataTypes.INTEGER,
              allowNull: false,
              defaultValue: 1433,
              validate : {
                notEmpty : true
              }
            }
        },
        {
            tableName : 'host'
        })
};
