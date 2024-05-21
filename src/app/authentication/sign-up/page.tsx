import { UserRegistrationData } from "@/main/user/domain/user-registration-data";
import { Button, Input } from "@components";
import style from "./sign-up.module.scss";
import { InputType } from "@components/input/input.entity";
import { errors, saveUser } from "./sign-up.actions";

function SignUp() {
  return (
    <div className={style.container}>
      <form action={saveUser}>
        <h2>Registrate</h2>
        <div className={style.fullName}>
          <Input
            label="Nombre"
            placeholder="Ej: Juan"
            name={UserRegistrationData.attributeNames.name}
            error={errors.name}
          />
          <Input
            label="Apellido"
            placeholder="Ej: Rodriguez"
            name={UserRegistrationData.attributeNames.lastName}
            error={errors.lastName}
          />
        </div>
        <Input
          type={InputType.email}
          label="Correo"
          placeholder="juan-r@my-mail.com"
          name={UserRegistrationData.attributeNames.email}
          error={errors.email}
        />
        <Input
          type={InputType.password}
          label="Contraseña"
          placeholder="********"
          name={UserRegistrationData.attributeNames.password}
          error={errors.password}
        />
        <Input
          type={InputType.password}
          label="Confirmar contraseña"
          placeholder="********"
          name={UserRegistrationData.attributeNames.passwordConfirmation}
          error={errors.passwordConfirmation}
        />
        <Button text="Guardar" />
      </form>
    </div>
  );
}

export default SignUp;
