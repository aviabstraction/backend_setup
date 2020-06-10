"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
exports.default = (app) => {
    app.use("/auth", route);
    route.get("/signup", (req, res) => {
        res.send("signed up");
    });
    route.get("/login", (req, res) => {
        res.send("logged in");
    });
    route.get("/logout", (req, res) => {
        res.send("logged out");
    });
};
//# sourceMappingURL=auth.js.map