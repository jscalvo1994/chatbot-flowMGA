import { ComponentEntity } from "../component.entity";

export class ButtonEntity extends ComponentEntity {
  static readonly role: string = "button";
  disabled: boolean = false;
  text: string = "";

  constructor({ text, disabled }: Partial<ButtonEntity> = {}) {
    super();
    this.text = text || this.text;
    this.disabled = disabled || this.disabled;
  }

  static get attributeNames(): Record<keyof ButtonEntity, string> {
    return this.getAttributeNames.bind(this)<ButtonEntity>();
  }
}
