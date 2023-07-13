"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = exports.getItemById = exports.getAllItem = exports.deleteItem = exports.createItem = void 0;
const itemModel_1 = __importDefault(require("../models/itemModel"));
const createItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let items = yield itemModel_1.default.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "Items created successfully", data: items });
});
exports.createItem = createItem;
const deleteItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedItem = yield itemModel_1.default.findByPk(id);
    yield itemModel_1.default.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Item deleted successfully", data: deletedItem });
});
exports.deleteItem = deleteItem;
const getAllItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allItems = yield itemModel_1.default.findAll();
    return res
        .status(200)
        .json({ message: "Item fetched successfully", data: allItems });
});
exports.getAllItem = getAllItem;
const getItemById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const items = yield itemModel_1.default.findByPk(id);
    return res
        .status(200)
        .json({ message: "Item fetched successfully", data: items });
});
exports.getItemById = getItemById;
const updateItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield itemModel_1.default.update(Object.assign({}, req.body), { where: { id } });
    const updatedItems = yield itemModel_1.default.findByPk(id);
    return res
        .status(200)
        .json({ message: "Item updated successfully", data: updatedItems });
});
exports.updateItem = updateItem;
