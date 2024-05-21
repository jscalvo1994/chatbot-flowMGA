export interface UserRegistrationDataErrorProps {
  message?: string;
  fieldsErrors: Record<string, string>[];
}

export class UserRegistrationFormDataError extends Error {
  readonly fieldsErrors: UserRegistrationDataErrorProps["fieldsErrors"] = [];

  constructor(props: UserRegistrationDataErrorProps) {
    super(props.message);
    this.fieldsErrors = props.fieldsErrors;
  }
}
