import { UserRepository } from "../domain/user.repository";

export class CreateUser {
  private userRepository: UserRepository;

  constructor(props: { repository: UserRepository }) {
    this.userRepository = props.repository;
  }

  run = async (
    ...args: Parameters<UserRepository["create"]>
  ): ReturnType<UserRepository["create"]> => {
    return await this.userRepository.create(...args);
  };
}
