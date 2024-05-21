import { UserRepository } from "../domain/user.repository";
import { getXataClient } from "@xata";
import { z } from "zod";
import { UserRegistrationData } from "../domain/user-registration-data";
const xata = getXataClient();

const fieldIsRequired = "Este campo es requerido";

export class XataUserRepository implements UserRepository {
  async validateRegistrationData(
    ...[props]: Parameters<UserRepository["validateRegistrationData"]>
  ): ReturnType<UserRepository["validateRegistrationData"]> {
    z.object({
      name: z
        .string({
          required_error: fieldIsRequired,
        })
        .trim()
        .min(1, {
          message: fieldIsRequired,
        }),
      lastName: z
        .string({
          required_error: fieldIsRequired,
        })
        .trim()
        .min(1, {
          message: fieldIsRequired,
        }),
      email: z
        .string({
          required_error: fieldIsRequired,
          invalid_type_error: "Este correo no es válido",
        })
        .trim()
        .min(1, {
          message: fieldIsRequired,
        })
        .email({
          message: "Este correo no es válido",
        }),
      password: z
        .string({
          required_error: fieldIsRequired,
        })
        .trim()
        .min(1, {
          message: fieldIsRequired,
        })
        .refine(
          (data) => {
            const isLarge = data.length >= 8;
            const hasNumber = /\d/.test(data);
            const hasUpperCase = /[A-Z]/.test(data);
            const hasLowerCase = /[a-z]/.test(data);
            return isLarge && hasNumber && hasUpperCase && hasLowerCase;
          },
          {
            message:
              "La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula y un número.",
          }
        ),
      passwordConfirmation: z
        .string({
          required_error: fieldIsRequired,
        })
        .trim()
        .min(1, {
          message: fieldIsRequired,
        })
        .refine((data) => data === props.password, {
          message: "Las contraseñas no coinciden",
        }),
    } satisfies Record<keyof UserRegistrationData, any>).parse(props);

    return true;
  }

  create = async (
    ...[props]: Parameters<UserRepository["create"]>
  ): ReturnType<UserRepository["create"]> => {
    const { user } = props;
    const { passwordConfirmation, ...userData } = user;
    await xata.db.user.create(userData);
  };
}
