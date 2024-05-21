import { ComponentEntity } from "../../component.entity";
import { MessageBubbleEntity } from "../message-bubble/message-bubble.entity";

export class MessagesHistoryEntity extends ComponentEntity {
  static readonly role: string = "messages-history";
  listOfMessages: MessageBubbleEntity[];

  constructor({ listOfMessages = [] }: Partial<MessagesHistoryEntity> = {}) {
    super();
    this.listOfMessages = listOfMessages;
  }

  static get attributeNames(): Record<keyof MessagesHistoryEntity, string> {
    return this.getAttributeNames.bind(this)<MessagesHistoryEntity>();
  }
}
