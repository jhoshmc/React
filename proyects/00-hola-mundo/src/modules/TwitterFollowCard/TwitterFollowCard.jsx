import { useState } from "react";
import style from "./TwitterFollowCard.module.css";

const TwitterFollowCard = ({ children, userName, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "siguiendo" : "seguir";
  const buttonClassName = isFollowing
    ? style.button_is_following
    : style.button;
  const hundelClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className={style.followCard}>
      <header className={style.header}>
        <img
          className={style.avatar}
          src={`https://unavatar.io/${userName}`}
          alt="midudev"
        />
        <div>
          <strong className={style.info}>{children}</strong>
          <span className={style.infoUserName}>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={hundelClick}>
          <span className={style.text}>{text}</span>
          <span className={style.stopFollow}>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
