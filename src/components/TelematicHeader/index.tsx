import React, { FC } from "react";
import styles from "./TelematicHeader.module.css";

type TelematicHeaderProps = {};

const TelematicHeader: FC<TelematicHeaderProps> = () => {
  return (
    <>
      <header className={styles.wrapper}>
        <p className={styles.text}>Name</p>
        <p className={styles.text}>Value</p>
        <p className={styles.text}>Standart value</p>
        <p>What to do?</p>
      </header>
    </>
  );
};

export { TelematicHeader };
