import {
  UserRegistrationData,
  UserRegistrationDataProps,
} from "@/main/user/domain/user-registration-data";
import { userController } from "@/main/user/infrastructure/dependencies";
import { revalidatePath } from "next/cache";

export let errors: Partial<Record<keyof UserRegistrationData, string>> = {};

export async function validateData(props: { data: UserRegistrationDataProps }) {
  "use server";
  const isAValidUser = await userController.validateRegistrationData(
    props.data
  );

  if (isAValidUser === true) {
    await userController.create({ user: props.data });
    return;
  }

  errors = isAValidUser.reduce(
    (acc, error) => {
      acc[error.path[0] as keyof UserRegistrationData] = error.message;
      return acc;
    },
    {} as typeof errors
  );

  revalidatePath("/authentication/sign-up");
}

export async function saveUser(formData: FormData) {
  "use server";

  const data: Partial<UserRegistrationDataProps> = {};

  formData.forEach((value, key) => {
    data[key as keyof UserRegistrationData] = value as string;
  });

  const user = new UserRegistrationData(data as UserRegistrationDataProps);

  await validateData({
    data: user,
  });
}
