import React, { FC } from "react";
import styles from "./TelematicHeader.module.css";

type TelematicHeaderProps = {
  // name: string;
  // value: string;
  // standartValue: string;
  // unit: string;
  // solution: string;
};

const TelematicHeader: FC<TelematicHeaderProps> = (
  {
    // name,
    // value,
    // standartValue,
    // unit,
    // solution,
  }
) => {
  // value={"Value"}
  // standartValue={"Standart value"}
  // unit="Unit"
  // name="Name"
  // solution="Solution"
  return (
    <>
      <header className={styles.wrapper}>
        <p className={styles.text}>Name</p>
        <p className={styles.text}>Value</p>
        <p className={styles.text}>Standart value</p>
        <p>Solution</p>
      </header>
    </>
  );
};

export { TelematicHeader };
