const { Model, Sequelize } = require('sequelize');

class  Projeto extends Model{
    static Init(sequelize){
        super.init({
            titulo_do_projeto: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
	        resumo: {
                type: Sequelize.STRING,
                defaultValue:'', 
            },
            area_do_projeto: {
                type: Sequelize.STRING,
                defaultValue:'', 
            },
            palavra_chave1: {
                type: Sequelize.STRING,
                defaultValue:'', 
            },
            palavra_chave2:{
                type: Sequelize.STRING,
                defaultValue:'',
            },
            palavra_chave3:{
                type: Sequelize.STRING,
                defaultValue:'',
            },
            url_documento:{
                type: Sequelize.STRING,
                defaultValue:'',
            },
            fk_professor:{
                type: Sequelize.INTEGER,
                allowNull: false,
            }
            
        }, {
            sequelize
        })
        return this;
    }
   static associate(models){
       this.belongsTo(models, {foreignKey:'fk_professor'})
       //this.hasMany(models, {foreignKey:'fk_professor', sourceKey: 'id'})
   }
    
}

module.exports = Projeto;