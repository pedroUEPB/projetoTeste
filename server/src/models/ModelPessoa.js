const { Model, Sequelize } = require('sequelize');

class  Pessoa extends Model{
    static Init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING
            },
	        idade: {
                type: Sequelize.INTEGER
            },
            cpf: {
                type: Sequelize.STRING
            },
            cep: {
                type: Sequelize.STRING
            },
            endereco: {
                type: Sequelize.STRING
            },
            bairro: {
                type: Sequelize.STRING
            },
            cidade: {
                type: Sequelize.STRING
            },
            numero: {
                type: Sequelize.INTEGER,
                defaultValue:'', 
            },
            complemento: {
                type: Sequelize.STRING,
                defaultValue:'', 
            },
            uf: {
                type: Sequelize.STRING
            },
        }, {
            sequelize
        })
        
    }
    static associate(models){
        this.hasOne(models, {foreignKey:'fk_pessoa'})
        //this.hasOne(models, {foreignKey:'fk_pessoa'})
    }
    
}

module.exports = Pessoa;