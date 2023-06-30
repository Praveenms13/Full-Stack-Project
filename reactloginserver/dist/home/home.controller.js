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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
let HomeController = exports.HomeController = class HomeController {
    async getHello() {
        return `
      <html>
        <head>
          <style>
            /* Add your custom CSS styles here */
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }

            .login-button {
              background-color: #007bff;
              color: #fff;
              border: none;
              padding: 10px 20px;
              font-size: 16px;
              cursor: pointer;
            }
          </style>
        </head>
        <body>
          <button class="login-button" onclick="redirectToLogin()">Login</button>

          <script>
            function redirectToLogin() {
              window.location.href = '/login';
            }
          </script>
        </body>
      </html>
    `;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getHello", null);
exports.HomeController = HomeController = __decorate([
    (0, common_1.Controller)()
], HomeController);
//# sourceMappingURL=home.controller.js.map