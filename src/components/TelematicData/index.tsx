import React, { FC } from "react";
import { CarInfoRow } from "../CarInfoRow";
import { TelematicHeader } from "../TelematicHeader";
import { TelematicRow } from "../TelematicRow";
import styles from "./TelematicData.module.css";

type TelematicDataProps = {};

const TelematicData: FC<TelematicDataProps> = () => {
  return (
    <div className={styles.wrapper}>
      <CarInfoRow />
      <ul>
        <TelematicHeader />
        <TelematicRow
          value={3}
          standartValue={5}
          unit="%"
          name="Fuel Remaining:"
          solution="Add fuel"
        />
        <TelematicRow
          value={6}
          standartValue={5}
          unit="%"
          name="Fuel Remaining:"
          solution="Add fuel"
        />
        <TelematicRow
          value={7}
          standartValue={5}
          unit="%"
          name="Fuel Remaining:"
          solution="Add fuel"
        />
        <TelematicRow
          value={1}
          standartValue={5}
          unit="%"
          name="Fuel Remaining:"
          solution="Add fuel"
        />
        <TelematicRow
          value={0}
          standartValue={5}
          unit="%"
          name="Fuel Remaining:"
          solution="Add fuel"
        />
      </ul>
    </div>
  );
};

export { TelematicData };
