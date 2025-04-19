import { ICounterSchema } from "../../../../entities/couter";
import { IUserSchema } from "../../../../entities/user";
import { ILoginSchema } from "features/auth-by-username";

export interface StateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    loginForm?: ILoginSchema;
}