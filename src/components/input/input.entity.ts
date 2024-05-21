import { ComponentEntity } from "../component.entity";

export const enum InputType {
  number = "number",
  text = "text",
  tel = "tel",
  email = "email",
  search = "search",
  password = "password",
}

export class InputEntity extends ComponentEntity {
  static readonly role: string = "input";
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  name?: string;
  ariaLabel?: string;
  label?: string;
  type?: InputType;
  error?: string;
  onInput?: (props: { value: string }) => void;

  constructor(props: Partial<InputEntity> = {}) {
    super();
    this.placeholder = props.placeholder ?? this.placeholder;
    this.defaultValue = props.defaultValue ?? this.defaultValue;
    this.name = props.name ?? this.name;
    this.value = this.value ?? this.defaultValue;
    this.ariaLabel = props.ariaLabel ?? this.ariaLabel;
    this.onInput = props.onInput ?? this.onInput;
    this.label = props.label ?? this.label;
    this.type = props.type ?? this.type;
    this.error = props.error ?? this.error;
  }

  //@override
  static get attributeNames(): Record<keyof InputEntity, string> {
    return {
      ...this.getAttributeNames.bind(this)<InputEntity>(),
      ariaLabel: "aria-label",
    };
  }
}
