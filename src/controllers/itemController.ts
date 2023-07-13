import { RequestHandler } from "express";

import ItemModel from "../models/itemModel";

export const createItem: RequestHandler = async (req, res, next) => {
    let items = await ItemModel.create({ ...req.body });
    return res
        .status(200)
        .json({ message: "Items created successfully", data: items });
};

export const deleteItem: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const deletedItem: ItemModel | null = await ItemModel.findByPk(id);
    await ItemModel.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Item deleted successfully", data: deletedItem });
};

export const getAllItem: RequestHandler = async (req, res, next) => {
    const allItems: ItemModel[] = await ItemModel.findAll();
    return res
        .status(200)
        .json({ message: "Item fetched successfully", data: allItems });
};

export const getItemById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const items: ItemModel | null = await ItemModel.findByPk(id);
    return res
        .status(200)
        .json({ message: "Item fetched successfully", data: items });
};

export const updateItem: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    await ItemModel.update({ ...req.body }, { where: { id } });
    const updatedItems: ItemModel | null = await ItemModel.findByPk(id);
    return res
        .status(200)
        .json({ message: "Item updated successfully", data: updatedItems });
};