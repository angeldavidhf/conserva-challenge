// @ts-ignore
import request from "supertest";
import app from "../src";
import sequelize from "../src/config/database";
import ItemModel from "../src/models/itemModel";

describe("Item Controller", () => {
    beforeAll(async () => {
        await sequelize.authenticate();
    });

    beforeEach(async () => {
        await ItemModel.create({
            name: "Item 1",
            price: 1111,
            stock: 1
        });
        await ItemModel.create({
            name: "Item 2",
            price: 2222,
            stock: 2
        });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it("should get all items", async () => {
        const response = await request(app).get("/items");

        expect(response.status).toBe(200);
    });
});