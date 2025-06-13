'use strict';

import { OptionsInterface } from "../../typings/seeders";


let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Donations';
    return queryInterface.bulkInsert(options, [


  {
    userId: 1,
    fundraiserId: 3,
    amount: 3.00,
    message: 'Enjoy the sharks',
  },
 {
    userId: 2,
    fundraiserId: 5,
    amount: 11000.00,
    message: 'Hello fellow cat cultist',
  },
 {
    userId: 3,
    fundraiserId: 2,
    amount: 30.00,
    message: 'Totally',
  },
 {
    userId: 4,
    fundraiserId: 1,
    amount: 15.00,
    message: 'Have fun!',
  },
 {
    userId: 5,
    fundraiserId: 4,
    amount: 700.00,
    message: 'You are so inspiring!!',
  },


], {});
  },

  down: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Donations';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: [''] }
    }, {});
  }
};
