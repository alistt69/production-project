import { ICounterSchema } from "entities/couter";
import { IUserSchema } from "entities/user";

export interface StateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
}