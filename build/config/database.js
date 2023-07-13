"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: 'localhost',
    port: 5432,
    database: 'conserva_challenge',
    username: 'admin',
    password: 'admin'
});
exports.default = connection;
