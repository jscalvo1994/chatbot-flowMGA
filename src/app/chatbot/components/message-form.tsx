"use client";

import { Button, Input } from "@components";
import styles from "./message-form.module.scss";
import { useRef, useState } from "react";
import { MessageFormEntity } from "./message-form.entity";

export const strings = {
  messageAria: "message",
  messageName: "message",
  formRole: "form",
  send: "Enviar",
};

const { messageAria, send, messageName, formRole } = strings;

function MessageForm(props: Partial<MessageFormEntity>) {
  const { onSubmit } = new MessageFormEntity(props);
  const formRef = useRef<HTMLFormElement>(null);

  const [buttonIsAble, setButtonIsAble] = useState(false);

  function changeButtonState({ value }: { value: string | boolean }) {
    setButtonIsAble(!!value);
  }

  async function handleSubmit({ formData }: { formData: FormData }) {
    formRef.current?.reset();
    changeButtonState({ value: false });
    await onSubmit?.(formData);
  }

  return (
    <form
      className={styles.messageForm}
      role={formRole}
      action={(formData) => handleSubmit({ formData })}
      ref={formRef}
    >
      <Input
        ariaLabel={messageAria}
        name={messageName}
        onInput={changeButtonState}
      />
      <Button text={send} disabled={!buttonIsAble} />
    </form>
  );
}

export default MessageForm;
