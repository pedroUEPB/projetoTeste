const { Model, Sequelize } = require('sequelize');

class  Professor extends Model{
    static Init(sequelize){
        super.init({
            matricula: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
	        curso: {
                type: Sequelize.STRING,
                defaultValue:'', 
            },
            usuario: {
                type: Sequelize.STRING,
                defaultValue:'', 
            },
            senha: {
                type: Sequelize.STRING,
                defaultValue:'', 
            },
            fk_pessoa:{
                type: Sequelize.INTEGER,
                
            }
            
        }, {
            sequelize
        })
        return this;
    }
   static associate(models){
       this.belongsTo(models, {foreignKey:'fk_pessoa'})
       //this.hasMany(models, {foreignKey:'fk_professor'})
   }
    
}

module.exports = Professor;