import { User } from "./user";

export type UserCredentialsProps = UserCredentials;

export class UserCredentials extends User {
  password: string;

  constructor(props: UserCredentialsProps) {
    super({
      email: props.email,
    });
    this.password = props.password;
  }
}
