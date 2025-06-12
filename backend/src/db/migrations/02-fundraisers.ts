"use strict";

import { OptionsInterface } from "../../typings/seeders";

let options: OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;
}


module.exports = {
    up: async (queryInterface: any, Sequelize: any) => {
        return queryInterface.createTable("Fundraisers", {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ownerId: {  //or can just use username??
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Users"
                },
                onDelete: "CASCADE"
            },    
            fundName: {
                allowNull: false,
                type: Sequelize.STRING(30)
            },
            description: {
                type: Sequelize.STRING(500),
                allowNull: false
            },
            goal: {
                type: Sequelize.DECIMAL(100, 2),
                allowNull: false
            },
            goalProgress: {
                type: Sequelize.DECIMAL(100, 2),
                allowNull: false
            },
            

        }, options);
    },

    down: async (queryInterface: any, Sequelize: any) => {
        options.tableName = "Fundraisers";
        return queryInterface.dropTable(options);
    }
};
