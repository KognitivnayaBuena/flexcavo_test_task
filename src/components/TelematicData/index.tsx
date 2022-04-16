import React, { FC } from "react";
import { CarInfoRow } from "../CarInfoRow";
import { TelematicHeader } from "../TelematicHeader";
import { TelematicRow } from "../TelematicRow";

import { getDayOfWeek } from "../../service/DateService";
import { TELEMATIC_DATA } from "../../data";

import styles from "./TelematicData.module.css";

type TelematicDataProps = {};

const STANDART_FUEL_VALUE = 5;
const STANDART_UNIT = "%";
const STANDART_IDLE_TO_OPERATIONS = 3;
const STANDART_WORKING_DAYS = "Monday to Friday";

const TelematicData: FC<TelematicDataProps> = () => {
  const operationToIdleHours = Number(
    (
      TELEMATIC_DATA.CumulativeOperatingHours.Hour /
      TELEMATIC_DATA.CumulativeIdleHours.Hour
    ).toFixed(1)
  );

  const dayOfWeek = getDayOfWeek(
    new Date(TELEMATIC_DATA.EquipmentHeader.SnapshotTime)
  );

  return (
    <div className={styles.wrapper}>
      <CarInfoRow equipmentHeader={TELEMATIC_DATA.EquipmentHeader} />
      <TelematicHeader />
      <ul>
        <TelematicRow
          value={TELEMATIC_DATA.FuelRemaining.Percent}
          standartValue={STANDART_FUEL_VALUE}
          unit={STANDART_UNIT}
          name="Fuel Remaining:"
          solution="Add fuel"
        />
        <TelematicRow
          value={operationToIdleHours}
          standartValue={STANDART_IDLE_TO_OPERATIONS}
          unit="- fold"
          name="Operating to idle:"
          solution="Sould operating more: the machines is idling too much"
        />
        <TelematicRow
          isWarning
          value={dayOfWeek}
          standartValue={STANDART_WORKING_DAYS}
          unit=""
          name="Working days:"
          solution="Check if the vehicle is available on that day"
        />
      </ul>
    </div>
  );
};

export { TelematicData };
