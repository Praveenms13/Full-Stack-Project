import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Patch,
  Post,
} from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(@Inject(LoginService) private loginModel: LoginService) {}
  @Get()
  public async getRoot() {
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

  @Post()
  public async getLogin(
    @Body() data: { name: string; email: string; password: string },
  ) {
    return await this.loginModel.loginSevice(data);
  }
}
