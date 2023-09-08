"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/signUp");
router.post("/login");
router.route("/user").patch().delete();
router.get("/logout");
exports.default = router;
