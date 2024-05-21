import { CreateUser } from "../application/create-user";
import { ValidateUserRegistrationForm } from "../application/validate-user-registration-form";
import { UserRepository } from "../domain/user.repository";

export class UserController implements UserRepository {
  private createUser: CreateUser;
  private validateUserRegistrationData: ValidateUserRegistrationForm;

  constructor(props: {
    createUser: CreateUser;
    validateRegistrationData: ValidateUserRegistrationForm;
  }) {
    this.createUser = props.createUser;
    this.validateUserRegistrationData = props.validateRegistrationData;
  }

  async validateRegistrationData(
    ...[props]: Parameters<UserRepository["validateRegistrationData"]>
  ): ReturnType<UserRepository["validateRegistrationData"]> {
    return await this.validateUserRegistrationData.run(props);
  }

  create = async (...args: Parameters<CreateUser["run"]>) => {
    return await this.createUser.run(...args);
  };
}
