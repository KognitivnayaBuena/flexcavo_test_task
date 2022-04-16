import React, { FC } from "react";
import { formatDate } from "../../service/DateService";
import styles from "./CarInfoRow.module.css";

type CarInfoRowProps = {};

const EquipmentHeader = {
  OEMName: "CAT",
  Model: "M315F",
  SerialNumber: "ABC123456",
  SnapshotTime: "2021-06-26T10:00:00Z",
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

const CarInfoRow: FC<CarInfoRowProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Content title={"OEM Name: "} content={EquipmentHeader.OEMName} />
        <Content title={"Model: "} content={EquipmentHeader.Model} />
        <Content
          title={"Serial number: "}
          content={EquipmentHeader.SerialNumber}
        />
      </div>
      <p>{formatDate(new Date(EquipmentHeader.SnapshotTime))}</p>
    </div>
  );
};

export { CarInfoRow };
