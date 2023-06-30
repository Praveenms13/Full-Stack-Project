import LoginModel from './login.model';
export declare class LoginService {
    private loginModel;
    constructor(loginModel: LoginModel);
    loginSevice(data: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
