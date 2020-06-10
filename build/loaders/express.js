"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("../api"));
const config_1 = __importDefault(require("../config/config"));
exports.default = ({ app }) => {
    const { api: { prefix }, } = config_1.default;
    app.get("/", (req, res) => {
        res.send("Welcome to backend");
    });
    app.get("/status", (req, res) => {
        res.sendStatus(200);
    });
    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.enable("trust proxy");
    // The magic package that prevents frontend developers going nuts
    // Alternate description:
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors_1.default());
    // Middleware that transforms the raw string of req.body into json
    app.use(express_1.default.json());
    app.use(prefix, api_1.default());
};
//# sourceMappingURL=express.js.map