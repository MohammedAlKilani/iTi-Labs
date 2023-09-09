"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskJoiSchemaSignUp = void 0;
const joi_1 = __importDefault(require("joi"));
exports.taskJoiSchemaSignUp = joi_1.default.object({
    title: joi_1.default.string().min(5).max(50).required(),
    description: joi_1.default.string().min(5).max(50).required(),
    status: joi_1.default.string().valid("toDo", "doing", "done"),
    userId: joi_1.default.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    assignTo: joi_1.default.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    deadline: joi_1.default.date().required()
});
