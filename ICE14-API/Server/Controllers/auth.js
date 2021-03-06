"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.ProcessLoginPage = void 0;
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../Models/user"));
const index_1 = require("../Util/index");
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (!user) {
            return res.json({ success: false, msg: 'ERROR: Authentication Error' });
        }
        req.login(user, function (err) {
            if (err) {
                console.error(err);
                return next(err);
            }
            const authToken = (0, index_1.GenerateToken)(user);
            return res.json({
                success: true, msg: 'User Logged in Successfully!', user: {
                    id: user._id,
                    DisplayName: user.DisplayName,
                    EmailAddress: user.EmailAddress,
                    username: user.username
                }, token: authToken
            });
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function ProcessRegisterPage(req, res, next) {
    let newUser = new user_1.default({
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            if (err.name == "UserExistsError") {
                console.error('Error: Inserting New User');
                console.error('Error: User Already Exists');
            }
            console.error(err.name);
            return res.json({ success: false, msg: "ERROR: Registration Failed" });
        }
        return res.json({ success: true, msg: "User Registered Successfully!", user: newUser });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
    req.logOut();
    res.json({ success: true, msg: "User Logged Out Successfully!" });
}
exports.ProcessLogoutPage = ProcessLogoutPage;
//# sourceMappingURL=auth.js.map