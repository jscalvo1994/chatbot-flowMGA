"use client";

import React from "react";
import { InputEntity } from "./input.entity";
import styles from "./input.module.scss";

function Input(props: Partial<InputEntity>) {
  const { ariaLabel, onInput, label, error, ...attributes } = new InputEntity(
    props
  );

  function onInputHandler(event: React.FormEvent<HTMLInputElement>) {
    onInput?.({ value: event.currentTarget.value });
  }

  return (
    <div className={styles.container}>
      {label && <label htmlFor={attributes.name}>{label}</label>}
      <input
        role={InputEntity.role}
        className={styles.input}
        aria-label={ariaLabel}
        onInput={onInputHandler}
        {...attributes}
      />
      {error && <small>{error}</small>}
    </div>
  );
}

export default Input;
