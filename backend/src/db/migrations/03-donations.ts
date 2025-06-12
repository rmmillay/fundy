"use strict";

import { OptionsInterface } from "../../typings/seeders";

let options: OptionsInterface = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;
}


module.exports = {
    up: async (queryInterface: any, Sequelize: any) => {
        return queryInterface.createTable("Donations", {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Users"
                },
            },
            fundraiserId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Fundraisers"
                },
                onDelete: "CASCADE"
            },
            amount: {
                type: Sequelize.DECIMAL(100, 2),
                allowNull: false
            },
            message: {
                type: Sequelize.STRING(500),
                allowNull: true
            }


        }, options);
    },

    down: async (queryInterface: any, Sequelize: any) => {
        options.tableName = "Donations";
        return queryInterface.dropTable(options);
    }
};
