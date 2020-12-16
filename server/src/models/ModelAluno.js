const { Model, Sequelize } = require('sequelize');

class  Aluno extends Model{
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
   }
    
}

module.exports = Aluno;