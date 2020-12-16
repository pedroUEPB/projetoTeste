'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.addColumn(
       'cadastroaluno', 
       'created_at', {
         type: Sequelize.DATE,
         allowNull: false
       },
       'updated_at', {
        type: Sequelize.DATE,
        allowNull: false
      }
       );
     
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.removeColumn(
      'posts', 'created_at','updated_at');
     
  }
};

