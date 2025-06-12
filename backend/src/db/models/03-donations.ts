// import { Association, CreationOptional, DataTypes, Model, Optional } from 'sequelize';

// const { Validator } = require('sequelize');

// type FundraiserAttributes = {
//     userId: number,
//     fundraiserId: string,
//     description: string,
//     goal: number,
//     goalProgress: number,
// };

// type FundraiserCreationAttributes = Optional<
//     FundraiserAttributes, 'ownerId'>;

// module.exports = (sequelize: any, DataTypes: any) => {

//     class Fundraiser extends Model<FundraiserAttributes, FundraiserCreationAttributes> {
//         declare ownerId: CreationOptional<number>;
//         declare fundName: string;
//         declare descripion: string;
//         declare goal: number;
//         declare goalProgress: number;


//         async getSafeFundraiser() {
//             const safeFundraiser = {
//                 ownerId: this.ownerId,
//                 fundName: this.fundName,
//                 descripion: this.descripion,
//                 goal: this.goal,
//                 goalProgress: this.goalProgress,
//             };
//             return safeFundraiser
//         }

//         static associate(models: any) {
//             // Associations go here
//         }
//         // declare public static associations: { [key: string]: Association<Model<any, any>, Model<any, any>>; };

//     }
//     Fundraiser.init(
//         {
//             ownerId: {
//                 type: DataTypes.INTEGER,
//                 autoIncrement: true,
//                 primaryKey: true
//             },
//             fundName: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     isGoodLength(value: string) {
//                         if (value.length < 1 || value.length > 30) {
//                             throw new Error('Name must be between 1 - 30 characters');
//                         }
//                     },
//                 }
//             },
//             description: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     isGoodLength(value: string) {
//                         if (value.length < 10) {
//                             throw new Error('Description must be at least 10 characters');
//                         };
//                     },  
//                 },
//             },
//             goal: {
//                 type: DataTypes.DECIMAL,
//                 allowNull: false,
//             },
//             goalProgress: {
//                 type: DataTypes.DECIMAL,
//                 allowNull: false,
//             }


//         },
        
//         {
//             sequelize,
//             modelName: "Fundraiser"
//         }
//     )
//     return Fundraiser;
// }
