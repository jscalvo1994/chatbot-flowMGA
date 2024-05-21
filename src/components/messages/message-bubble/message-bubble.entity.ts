import { ComponentEntity } from "../../component.entity";

export const enum MessageBubbleType {
  received = "received",
  sent = "sent",
}

export class MessageBubbleEntity extends ComponentEntity {
  type: MessageBubbleType = MessageBubbleType.received;
  text: string = "";
  promiseText?: Promise<string>;
  isLoading: boolean = false;

  constructor({
    type,
    text,
    isLoading,
    promiseText,
  }: Partial<Omit<MessageBubbleEntity, "getText">> = {}) {
    super();
    this.type = type || this.type;
    this.text = text || this.text;
    this.isLoading = isLoading || this.isLoading;
    this.promiseText = promiseText || this.promiseText;
  }

  static get attributeNames(): Record<keyof MessageBubbleEntity, string> {
    return this.getAttributeNames.bind(this)<MessageBubbleEntity>();
  }

  /* Gets the text of the bubble, if it is a promise, it will resolve it */
  getText = async (): Promise<string> => {
    return this.promiseText ? await this.promiseText : this.text;
  };
}
