import { z } from "zod";
import { UserRegistrationData } from "./user-registration-data";

export interface UserRepository {
  create(props: { user: UserRegistrationData }): Promise<void>;
  validateRegistrationData(
    props: UserRegistrationData
  ): Promise<true | z.ZodIssue[]>;
}
