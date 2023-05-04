import User from "./User";
interface Response {
    code: number;
    description: string;
    profile?: User;
}