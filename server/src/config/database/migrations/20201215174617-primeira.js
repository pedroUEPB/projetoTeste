'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('users',
      { id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

      } ,
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    }
      );
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('users');
     
  }
};
