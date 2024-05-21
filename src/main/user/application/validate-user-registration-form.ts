import { z } from "zod";
import { UserRepository } from "../domain/user.repository";

export class ValidateUserRegistrationForm {
  private readonly repository: UserRepository;

  constructor(props: { repository: UserRepository }) {
    this.repository = props.repository;
  }

  async run(
    ...args: Parameters<UserRepository["validateRegistrationData"]>
  ): ReturnType<UserRepository["validateRegistrationData"]> {
    try {
      return await this.repository.validateRegistrationData(...args);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.errors;
      } else throw error;
    }
  }
}
