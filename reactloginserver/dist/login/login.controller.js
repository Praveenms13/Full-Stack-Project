"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const login_service_1 = require("./login.service");
let LoginController = exports.LoginController = class LoginController {
    constructor(loginModel) {
        this.loginModel = loginModel;
    }
    async getRoot() {
        return `
    <style>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

    body {
        font-family: Arial, sans-serif;
        background-color: #f1f1f1;
    }

    .container {
        max-width: 400px;
        margin: 50px auto;
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    .form-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .form-group input:focus {
        border-color: #2196F3;
        outline: none;
    }

    .btn {
        display: block;
        width: 100%;
        padding: 10px;
        border: none;
        background-color: #4CAF50;
        color: #fff;
        text-align: center;
        text-decoration: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .btn:hover {
        background-color: #45a049;
    }

    /* Animation */
    @keyframes slideIn {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .container {
        animation: slideIn 0.5s ease;
    }
    </style>
    <div class="container">
        <h2>Signup Form</h2>
        <form method='POST' action='/login'>
          <div class="form-group">
            <label>Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name">
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email">
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password">
          </div>
          <button class="btn" type="submit">Submit</button>
        </form>
      </div>
    `;
    }
    async getLogin(data) {
        return await this.loginModel.loginSevice(data);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "getRoot", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "getLogin", null);
exports.LoginController = LoginController = __decorate([
    (0, common_1.Controller)('login'),
    __param(0, (0, common_1.Inject)(login_service_1.LoginService)),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginController);
//# sourceMappingURL=login.controller.js.map