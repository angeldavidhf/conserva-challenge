"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateItem = void 0;
const joi_1 = __importDefault(require("joi"));
const validateItem = (req, res, next) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        price: joi_1.default.number().required(),
        stock: joi_1.default.number().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.validateItem = validateItem;
