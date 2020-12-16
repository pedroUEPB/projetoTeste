const { Model, Sequelize } = require('sequelize');

class  User extends Model{
    static Init(sequelize){
        super.init({
            name: {
                type: Sequelize.INTEGER,
                defaultValue:'',
            },
	        cpf: {
                type: Sequelize.INTEGER,
                defaultValue:'', 
            }
        }, {
            sequelize
        })
        
    }
    
}

module.exports = User;