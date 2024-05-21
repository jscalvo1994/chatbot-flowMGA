import { ButtonEntity } from "./button.entity";
import styles from "./button.module.scss";

function Button(props: Partial<ButtonEntity>) {
  const { text, ...attributes } = new ButtonEntity(props);

  return (
    <button
      role={ButtonEntity.role}
      className={styles.container}
      {...attributes}
    >
      {text}
    </button>
  );
}

export default Button;
