"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const guard_1 = __importDefault(require("../middleware/guard"));
const task_controller_1 = require("../controller/task.controller");
const route = (0, express_1.Router)();
route.route("/task").all(guard_1.default).get(task_controller_1.getAllTask).post(task_controller_1.addTask);
route.route("/task/:id").all(guard_1.default).patch(task_controller_1.updateTask).delete(task_controller_1.deleteTask);
exports.default = route;
