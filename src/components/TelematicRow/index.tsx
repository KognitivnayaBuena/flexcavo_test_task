import React, { FC } from "react";
import cx from "classnames";
import styles from "./TelematicRow.module.css";

type TelematicRowProps = {
  name: string;
  value: number;
  standartValue: number;
  unit: string;
  solution: string;
};

const TelematicRow: FC<TelematicRowProps> = ({
  name,
  value,
  standartValue,
  unit,
  solution,
}) => {
  const isOutOfResurse = value < standartValue;

  return (
    <li
      className={cx(styles.wrapper, {
        [styles.isOutOfResurse]: isOutOfResurse,
      })}>
      <p className={styles.text}>{name}</p>
      <p className={styles.text}>{`${value} ${unit}`}</p>
      <p className={styles.text}>{`${standartValue} ${unit}`}</p>
      <p>{solution}</p>
    </li>
  );
};

export { TelematicRow };
