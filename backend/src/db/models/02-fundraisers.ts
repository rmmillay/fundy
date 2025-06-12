import { Association, CreationOptional, DataTypes, Model, Optional } from 'sequelize';

const { Validator } = require('sequelize');

type FundraiserAttributes = {
    id: number,
    ownerId: number,
    fundName: string,
    description: string,
    goal: number,
    goalProgress: number,
};

type FundraiserCreationAttributes = Optional<
    FundraiserAttributes, 'id'>;

module.exports = (sequelize: any, DataTypes: any) => {

    class Fundraiser extends Model<FundraiserAttributes, FundraiserCreationAttributes> {
        declare id: CreationOptional<number>;
        declare ownerId: number;
        declare fundName: string;
        declare descripion: string;
        declare goal: number;
        declare goalProgress: number;


        async getSafeFundraiser() {
            const safeFundraiser = {
                id: this.id,
                ownerId: this.ownerId,
                fundName: this.fundName,
                descripion: this.descripion,
                goal: this.goal,
                goalProgress: this.goalProgress,
            };
            return safeFundraiser
        }

        static associate(models: any) {
            // Associations go here
        }
        // declare public static associations: { [key: string]: Association<Model<any, any>, Model<any, any>>; };

    }
    Fundraiser.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            ownerId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            fundName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 1 || value.length > 30) {
                            throw new Error('Name must be between 1 - 30 characters');
                        }
                    },
                }
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isGoodLength(value: string) {
                        if (value.length < 10) {
                            throw new Error('Description must be at least 10 characters');
                        };
                    },  
                },
            },
            goal: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            goalProgress: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            }


        },
        
        {
            sequelize,
            modelName: "Fundraiser"
        }
    )
    return Fundraiser;
}
