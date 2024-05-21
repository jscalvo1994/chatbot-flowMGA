import React from "react";
import { MessagesHistory } from "@components";
import styles from "./chatbot.module.scss";
import MessageForm from "./components/message-form";
import { messages, sendMessage } from "./chatbot.actions";

async function Chatbot() {
  return (
    <div className={styles.container}>
      <MessagesHistory listOfMessages={messages} />
      <MessageForm onSubmit={sendMessage} />
    </div>
  );
}

export default Chatbot;
