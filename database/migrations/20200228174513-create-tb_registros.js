'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_registros', { 

      id: {  //Coluna ID
        allowNull: false, //não nula
        autoIncrement: true, //autoincremental
        primaryKey: true, // É uma PK
        type: Sequelize.INTEGER //é uma string
      },

      idoso: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      estudantes: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      internet: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      normal: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      horarios: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      total: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });   
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('tb_registros');

  }
};