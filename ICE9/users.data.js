"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const fs_readfile_promise_1 = __importDefault(require("fs-readfile-promise"));
async function getData() {
    return await (0, fs_readfile_promise_1.default)("./Data/users.json", "utf8");
}
exports.getData = getData;
//# sourceMappingURL=users.data.js.map