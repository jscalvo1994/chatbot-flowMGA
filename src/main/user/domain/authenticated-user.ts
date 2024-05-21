import {
  UserRegistrationData,
  UserRegistrationDataProps,
} from "./user-registration-data";

interface AuthenticatedUserProps extends UserRegistrationDataProps {
  id: string;
  password: "*****";
}

export class AuthenticatedUser
  implements Omit<UserRegistrationData, "passwordConfirmation">
{
  readonly id: AuthenticatedUserProps["id"];
  readonly email: UserRegistrationDataProps["email"];
  readonly name: UserRegistrationDataProps["name"];
  readonly lastName: UserRegistrationDataProps["lastName"];
  readonly password: AuthenticatedUserProps["password"] = "*****";

  constructor({
    password: password = "*****",
    ...restProps
  }: AuthenticatedUserProps) {
    const props = { password, ...restProps };
    this.id = props.id;
    this.email = props.email;
    this.name = props.name;
    this.lastName = props.lastName;
  }

  get fullName() {
    return `${this.name} ${this.lastName}`;
  }
}
