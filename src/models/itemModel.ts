import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Item extends Model {
    public id!: number;
    public name!: string;
    public price!: number;
    public stock!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Item",
        tableName: "items",
    }
)

export default Item;