"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const mime_types_1 = __importDefault(require("mime-types"));
let lookup = mime_types_1.default.lookup;
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use('/', function (req, res) {
    let path = req.url;
    console.log(path);
    if (path == "/" || path == "/home") {
        path = "/index.html";
    }
    fs_1.default.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end("ERROR: 404 - File not found!");
            return;
        }
        res.setHeader("X-Content-Type-Options", "nosniff");
        let mimeType = lookup(path.substring(1));
        res.writeHead(200, { "Content-Type": mimeType });
        res.end(data);
    });
});
app.listen(port, function () {
    console.log(`Server listening on port: ${port}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map