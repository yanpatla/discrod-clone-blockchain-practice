import Image from "next/image";
import React from "react";
import styles from "../styles/dmCard.module.css";

const DmCard = ({ dm, status }) => {
  const changeUrl = () => {};
  return (
    <div className={styles.dmCard} onClick={changeUrl}>
      <div className={styles.dmAvatarContainer}>
        <Image
          src={dm.avatar}
          className={styles.dmAvatar}
          height={48}
          width={48}
          alt={
            dm.name ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU"
          }
        />
        <div className={styles.dmCardStatus} id={status} />
      </div>
      <p className={styles.dmCardName}>{dm.name}</p>
    </div>
  );
};

export default DmCard;
