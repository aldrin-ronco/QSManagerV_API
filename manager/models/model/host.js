/**
 * Created by QUALITYPC3 on 17/06/2016.
 */
module.exports = function(sequelize, DataTypes) {

    return sequelize.define('host',{
            id : {
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true,
                validate:{
                    notEmpty:true
                }    
            },
            host : {
                type:DataTypes.STRING,
                allowNull:false,
                defaultValue:'',
                validate:{
                    notEmpty:true
                } 
            },         
            username : {
                type : DataTypes.STRING,
                allowNull:false,
                defaultValue:'',
                validate:{
                    notEmpty:true
                }
            },
            pwd : {
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
            }                                          
        },        
        {
            tableName : 'host'
        })
};