"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_data_js_1 = require("./users.data.js");
const hello_js_1 = require("./hello.js");
(0, users_data_js_1.getData)()
    .then((data) => {
    (0, hello_js_1.sayHello)();
    console.log(data);
    (0, hello_js_1.sayGoodbye)();
})
    .catch((err) => {
    console.error("ERROR: User data not returned!: " + err.message);
});
//# sourceMappingURL=server.js.map