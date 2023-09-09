"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const guard_1 = __importDefault(require("../middleware/guard"));
const route = (0, express_1.Router)();
route.route("/post").all(guard_1.default).get().post().patch().delete();
