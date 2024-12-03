import React from "react";
import styles from "./NotFoundBlock.module.scss";

 const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
            <img src="img/Rectangle 85.png" alt="photo" />
            <br/>
        <p>Упс.Страница не найдена</p>
    </div>
  );
};
export default NotFoundBlock;