import { Sequelize } from "sequelize";

const connection = new Sequelize({
    dialect: "postgres",
    host: 'localhost',
    port: 5432,
    database: 'store_challenge',
    username: 'admin',
    password: 'admin'
});

export default connection;
