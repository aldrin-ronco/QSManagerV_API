/**
 * Created by QUALITYPC3 on 17/06/2016.
 */
module.exports = function(sequelize, DataTypes) {

    return sequelize.define('nom_cargo',{
            CodCargo : {
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }    
            },
            NomCargo : {
                type:DataTypes.STRING,
                allowNull:false,
                defaultValue:'',
                validate:{
                    notEmpty:true
                }
            }
        },
        {
            tableName : 'nom_cargos'
        });
};
