import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/roomAvatar.module.css";

const RoomAvatar = ({ channelprop }) => {
  const router = useRouter();
  const changeUrl = () => {
    router.push(`?channel=${channelprop.id}&name=${channelprop.name}`);
  };
  return (
    <div className={styles.wrapper} onClick={changeUrl}>
      <div className={styles.roomAvatar}>
        <Image
          src={channelprop.avatar}
          className={styles.roomAvatarImage}
          height={48}
          width={48}
          alt={channelprop.name}
        />
      </div>
    </div>
  );
};

export default RoomAvatar;
