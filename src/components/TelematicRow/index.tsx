import React, { FC } from "react";
import cx from "classnames";
import styles from "./TelematicRow.module.css";

type TelematicRowProps = {
  isWarning?: boolean;
  name: string;
  value: number | string;
  standartValue: number | string;
  unit: string;
  solution: string;
};

const TelematicRow: FC<TelematicRowProps> = ({
  isWarning,
  name,
  value,
  standartValue,
  unit,
  solution,
}) => {
  const isOutOfResurse =
    typeof value === "number" &&
    typeof standartValue === "number" &&
    value < standartValue;

  const customSolutionMessage =
    isOutOfResurse || isWarning ? solution : "Everything all right!";

  return (
    <li
      className={cx(styles.wrapper, {
        [styles.isOutOfResurse]: isOutOfResurse,
        [styles.isWarning]: isWarning,
      })}>
      <p className={styles.text}>{name}</p>
      <p className={styles.text}>{`${value} ${unit}`}</p>
      <p className={styles.text}>{`${standartValue} ${unit}`}</p>
      <p>{customSolutionMessage}</p>
    </li>
  );
};

export { TelematicRow };
