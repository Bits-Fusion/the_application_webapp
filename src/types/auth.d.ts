import type { User } from "./user";

export interface AuthResponse {
  token: string;
  user: User;
}

export interface signUpProps {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
