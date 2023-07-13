import { Router } from "express";
import { validateItem } from "../validators/itemValidator";

import {
    createItem,
    deleteItem,
    getAllItem,
    updateItem,
    getItemById,
} from "../controllers/itemController";

const router = Router();

router.post("/", validateItem, createItem);

router.get("/", getAllItem);

router.get("/:id", getItemById);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export default router;