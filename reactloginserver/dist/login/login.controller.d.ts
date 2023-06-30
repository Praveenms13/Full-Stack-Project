import { LoginService } from './login.service';
export declare class LoginController {
    private loginModel;
    constructor(loginModel: LoginService);
    getRoot(): Promise<string>;
    getLogin(data: {
        name: string;
        email: string;
        password: string;
    }): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
