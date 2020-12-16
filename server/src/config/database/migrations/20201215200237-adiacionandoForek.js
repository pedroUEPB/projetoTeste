'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.addColumn(
       'professors',
        'pessoa_id',
        
        {

          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'pessoas',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',

         
       });
     
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.removeColumn(
      'professors', 'pessoa_id');
     
  }
}