import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get()
  public async getHello() {
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
}
