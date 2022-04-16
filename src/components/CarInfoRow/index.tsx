import React, { FC } from "react";
import { formatDate } from "../../service/DateService";
import { EquipmentHeader } from "../../core";
import styles from "./CarInfoRow.module.css";

type CarInfoRowProps = {
  equipmentHeader: EquipmentHeader;
};

type ContentProps = {
  title: string;
  content: string;
};

const Content: FC<ContentProps> = ({ title, content }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  );
};

const CarInfoRow: FC<CarInfoRowProps> = ({ equipmentHeader }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Content title={"OEM Name: "} content={equipmentHeader.OEMName} />
        <Content title={"Model: "} content={equipmentHeader.Model} />
        <Content
          title={"Serial number: "}
          content={equipmentHeader.SerialNumber}
        />
      </div>
      <p>{formatDate(new Date(equipmentHeader.SnapshotTime))}</p>
    </div>
  );
};

export { CarInfoRow };
