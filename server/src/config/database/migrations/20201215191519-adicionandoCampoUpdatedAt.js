'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.addColumn(
       'cadastroaluno', 
       'updated_at', {
        type: Sequelize.DATE,
        allowNull: false
      }
       );
     
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.removeColumn(
      'posts', 'updated_at');
     
  }
};

