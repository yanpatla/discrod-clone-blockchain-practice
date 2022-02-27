import React from "react";
import styles from "../styles/chatView.module.css";
import ChatHeader from "./ChatHeader";
const ChatView = () => {
  return (
    <div className={styles.chatView}>
      <ChatHeader />
      <div className={styles.messageContainer}>
           
      </div>
    </div>
  );
};

export default ChatView;