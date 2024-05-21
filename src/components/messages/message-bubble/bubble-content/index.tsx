"use server";
import Loader from "@components/loader";
import { MessageBubbleEntity } from "../message-bubble.entity";
import styles from "./bubble-content.module.scss";

async function BubbleContent({
  getText,
  isLoading,
}: Partial<MessageBubbleEntity>) {
  const text = await getText?.();

  return <span className={styles.text}>{isLoading ? <Loader /> : text}</span>;
}

export default BubbleContent;
