'use strict';

import { OptionsInterface } from "../../typings/seeders";




let options:OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

 


module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Fundraisers';
    return queryInterface.bulkInsert(options, [
  {

    ownerId: 1,
    fundName: "Euro Voyage",
    description: "Fund my paradise!",
    goal: 5000.00,
    goalProgress: 10.00
  },
  {
    ownerId: 2,
    fundName: "Cure For Cancer",
    description: "I'm smart",
    goal: 9000000.00,
    goalProgress: 50.00
  },
  {
    ownerId: 3,
    fundName: "A Dip In The Sea",
    description: "Quick swim",
    goal: 40.00,
    goalProgress: 2.00
  },
  {
  ownerId: 4,
    fundName: "Ceareal Store",
    description: "We all need this",
    goal: 800.00,
    goalProgress: 300.00
  },
  {
  ownerId: 5,
    fundName: "Cat Accumulation",
    description: "I need them more than they need me",
    goal: 112000.00,
    goalProgress: 20.00
  }


], {});
  },

  down: async (queryInterface:any, Sequelize:any) => {
    options.tableName = 'Fundraisers';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: [''] }
    }, {});
  }
};
