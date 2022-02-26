import ConversationList from "../components/ConversationList";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <ConversationList /> 
         <p>List chat view</p>
      </div>
    </div>
  );
}
