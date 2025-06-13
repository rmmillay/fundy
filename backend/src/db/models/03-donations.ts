import { Association, CreationOptional, DataTypes, Model, Optional } from 'sequelize';

const { Validator } = require('sequelize');

type DonationAttributes = {
    id: number,
    userId: number,
    fundraiserId: number,
    amount: number,
    message: string,
};

type DonationCreationAttributes = Optional<
    DonationAttributes, 'id'>;

module.exports = (sequelize: any, DataTypes: any) => {

    class Donation extends Model<DonationAttributes, DonationCreationAttributes> {
        declare id: CreationOptional<number>;
        declare userId: number;
        declare fundraiserId: number;
        declare amount: number;
        declare message: string;


        async getSafeDonation() {
            const safeDonation = {
                id: this.id,
                userId: this.userId,
                fundraiserId: this.fundraiserId,
                amount: this.amount,
                message: this.message,
            };
            return safeDonation
        }




        static associate(models: any) {
            // Associations go here
        }
        // declare public static associations: { [key: string]: Association<Model<any, any>, Model<any, any>>; };

    }


    Donation.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            fundraiserId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            amount: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            message: {
                type: DataTypes.STRING,
                allowNull: true,
            }
            
        },
        
        {
            sequelize,
            modelName: "Donation"
        }
    )
    return Donation;
}
