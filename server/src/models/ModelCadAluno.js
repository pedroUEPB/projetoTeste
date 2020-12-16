const { Model, Sequelize } = require('sequelize');

class  CadAlunos extends Model{
    static Init(sequelize){
        super.init({
            fk_aluno: {
                type: Sequelize.STRING,
                defaultValue:'',
            },
	        fk_projeto: {
                type: Sequelize.STRING,
                defaultValue:'', 
            },
            formacao: {
                type: Sequelize.STRING,
                defaultValue: '',
            }
        }, {
            sequelize
        })
        return this;
    }
    static associate(models){
        this.belongsTo(models, {foreignKey:'fk_projeto'})
        this.belongsTo(models, {foreignKey:'fk_aluno'})
    }
}

module.exports = CadAlunos;