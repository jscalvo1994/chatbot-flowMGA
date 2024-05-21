"use server";

import styles from "./bubble.module.scss";
import Loader from "@components/loader";
import { MessageBubbleEntity } from "./message-bubble.entity";
import { Suspense } from "react";
import BubbleContent from "./bubble-content";

async function MessageBubble(props: Partial<MessageBubbleEntity> = {}) {
  const { type, isLoading, getText } = new MessageBubbleEntity(props);
  return (
    <span className={styles.container}>
      <span className={`${styles.window} ${styles[type]}`} />
      <span className={styles.text}>
        <Suspense fallback={<Loader />}>
          <BubbleContent getText={getText} isLoading={isLoading} />
        </Suspense>
      </span>
    </span>
  );
}

export default MessageBubble;
