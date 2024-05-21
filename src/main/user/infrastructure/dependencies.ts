import { CreateUser } from "../application/create-user";
import { ValidateUserRegistrationForm } from "../application/validate-user-registration-form";
import { UserController } from "./user-controller";
import { XataUserRepository } from "./xata-user.repository";

const xataRepository = new XataUserRepository();
const currentRepository = xataRepository;
const createUser = new CreateUser({
  repository: currentRepository,
});
const validateRegistrationData = new ValidateUserRegistrationForm({
  repository: currentRepository,
});

const userController = new UserController({
  createUser,
  validateRegistrationData,
});

export { userController };
