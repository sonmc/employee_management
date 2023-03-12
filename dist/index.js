"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./infrastructure/config/ormconfig"));
const main = async () => {
    const app = (0, express_1.default)();
    const conn = await (0, typeorm_1.createConnection)(ormconfig_1.default);
    console.log(conn.isConnected ? `Database connected...` : `Database is not connected...`);
    app.get("/", (_req, res, _next) => {
        return res.json({
            success: true,
            message: "You should also checkout /your-name route on this website. e.g - http://localhost:4000/Jayant Malik"
        });
    });
    app.get("/:name", (req, res, _next) => {
        return res.json({ success: true, message: `We love you Mr./Ms. ${req.params.name}..` });
    });
    const port = Number(process.env.PORT) || 4000;
    app.listen(port, () => {
        console.log(`Server started at: https://localhost:${port}`);
    });
};
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map