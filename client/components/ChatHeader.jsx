import Image from "next/image";
import personPlus from "../assets/icons/person-plus.svg";
import video from "../assets/icons/video.svg";
import inbox from "../assets/icons/inbox.svg";
import phone from "../assets/icons/phone.svg";
import help from "../assets/icons/help.svg";
import pin from "../assets/icons/pin.svg";
import at from "../assets/icons/at.svg";
import styles from "../styles/chatHeader.module.css";
import ethLogo from "../assets/eth.png";
import { useContext } from "react";
const currentAccount = "0x8Csad13154dsa1d3asd4as]1ad532asd";
const ChatHeader = () => {
  return (
    <div className={styles.chatHeader}>
      <div className={styles.roomNameContainer}>
        <Image height={20} width={20} src={at} className={styles.svg} />
        <h3 className={styles.title}>Room Name</h3>
        <div className={styles.chatHeaderStatus} id="online" />
      </div>

      {currentAccount ? (
        <div className={styles.connectedWallet}>
          <Image src={ethLogo} height={20} width={15} />
          <span className={styles.separator}>|</span>
          {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
        </div>
      ) : (
        <div className={styles.connectWallet} onClick={() => connectWallet()}>
          Connect Walllet
        </div>
      )}
      <div className={styles.headerIconsContainer}>
        <div className={styles.headerItem}>
          <Image
            height={25}
            width={25}
            src={phone}
            className={styles.svg}
            alt=""
          />
        </div>
        <div className={styles.headerItem}>
          <Image
            height={25}
            width={25}
            src={video}
            className={styles.svg}
            alt=""
          />
        </div>
      </div>
      <div className={styles.headerItem}>
        <Image height={25} width={25} src={pin} className={styles.svg} alt="" />
      </div>
      <div className={styles.headerItem}>
        <Image
          height={25}
          width={25}
          src={personPlus}
          className={styles.svg}
          alt=""
        />
      </div>
      <div className={styles.headerItem}>
        <input type="search" placeholder="Search" />
      </div>
      <div className={styles.headerItem}>
        <Image
          height={25}
          width={25}
          src={inbox}
          className={styles.svg}
          alt=""
        />
      </div>
      <div className={styles.headerItem}>
        <Image
          height={25}
          width={25}
          src={help}
          className={styles.svg}
          alt=""
        />
      </div>
    </div>
  );
};

export default ChatHeader;
