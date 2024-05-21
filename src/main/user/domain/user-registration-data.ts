import { UserCredentials } from "./user-credentials";

export type UserRegistrationDataProps = UserRegistrationData;

export class UserRegistrationData extends UserCredentials {
  name: string;
  lastName: string;
  passwordConfirmation: string;

  constructor(props: UserRegistrationDataProps) {
    super({
      email: props.email,
      password: props.password,
    });
    this.name = props.name;
    this.lastName = props.lastName;
    this.passwordConfirmation = props.passwordConfirmation;
  }

  static get attributeNames(): Record<keyof UserRegistrationData, string> {
    return this.getAttributeNames<UserRegistrationData>({
      instance: new this({} as UserRegistrationDataProps),
    });
  }
}
