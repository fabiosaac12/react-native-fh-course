import {User} from "./User";

export interface LoginResponse {
  usuario: User;
  token: string;
}
