import { Suspense } from "react";
import MessageBubble from "../message-bubble";
import { MessagesHistoryEntity } from "./message-history.entity";
import styles from "./message-history.module.scss";

function MessagesHistory(props: Partial<MessagesHistoryEntity>) {
  const { listOfMessages } = new MessagesHistoryEntity(props);

  return (
    <div role={MessagesHistoryEntity.role} className={styles.container}>
      {listOfMessages.map((message, index) => (
        <span key={index} className={styles[message.type]}>
          <MessageBubble {...message} />
        </span>
      ))}
    </div>
  );
}

export default MessagesHistory;
