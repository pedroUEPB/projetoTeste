const { Model, Sequelize } = require('sequelize');

class  Cadastroaluno extends Model{
    static Init(sequelize){
        super.init({
            fk_aluno: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
	        fk_projeto: {
                type: Sequelize.STRING,
                defaultValue:'', 
            }
        }, {
            sequelize
        })
        
    }
    
}

module.exports = Cadastroaluno;