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
exports.getAllTask = exports.deleteTask = exports.updateTask = exports.addTask = void 0;
const task_dao_1 = __importDefault(require("../dao/task.dao"));
const user_dao_1 = __importDefault(require("../dao/user.dao"));
const tryCatchErr_1 = __importDefault(require("../middleware/tryCatchErr"));
const userDao = new user_dao_1.default();
const taskDao = new task_dao_1.default();
exports.addTask = (0, tryCatchErr_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body)
        return res.status(404).json({ message: "Not found body" });
    const findUserId = yield userDao.findUserById(body.userId);
    if (!findUserId)
        return res.status(404).json({ message: "Not found UserId" });
    const findAssignTo = yield userDao.findUserById(body.assignTo);
    if (!findAssignTo)
        return res.status(404).json({ message: "Not found AssignTo" });
    body.deadline = new Date(body.deadline);
    const newTask = yield taskDao.addTask(req.body);
    res.status(201).json({ message: "Task Created", data: newTask });
}));
exports.updateTask = (0, tryCatchErr_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id)
        return res.status(404).json({ message: "No id found" });
    const taskToUpdate = req.body;
    if (!(taskToUpdate.title || taskToUpdate.status || taskToUpdate.description))
        return res.status(404).json({ message: "No title||status||description found" });
    const taskUpdated = yield taskDao.updateTask(id, taskToUpdate);
    if (!taskUpdated)
        return res.status(404).json({ message: `No found task in id:${id}` });
    res.json({ message: "Updated task", data: taskUpdated });
}));
exports.deleteTask = (0, tryCatchErr_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id)
        return res.status(404).json({ message: "No id found" });
    const taskDeleted = yield taskDao.deleteTask(id);
    if (!taskDeleted)
        return res.status(404).json({ message: `No found task in id:${id}` });
    res.json({ message: "Deleted task", data: taskDeleted });
}));
exports.getAllTask = (0, tryCatchErr_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.query.userData;
    const afDed = req.query.afDed;
    if (afDed == "true") {
        const data = yield taskDao.getAllTaskNotDoneAfterDeadline();
        return res.json({ message: "All Task Not Done After Deadline", data });
    }
    else if (userData == "true") {
        const data = yield taskDao.getAllTaskWithUserData();
        return res.json({ message: "All Task With User Data", data });
    }
    else {
        const data = yield taskDao.getAllTask();
        return res.json({ message: "All Task With User Data", data });
    }
}));
