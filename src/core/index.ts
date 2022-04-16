type EquipmentHeader = {
  OEMName: string;
  Model: string;
  SerialNumber: string;
  SnapshotTime: string;
};

type Location = {
  Latitude: number;
  Longitude: number;
  Altitude: number;
  AltitudeUnits: string;
};

type Hours = {
  Hour: number;
};

type Distance = {
  OdometerUnits: string;
  Odometer: number;
};

type EngineStatus = { Running: boolean };

type FuelUsed = {
  FuelUnits: string;
  FuelConsumed: number;
};

type FuelRemaining = {
  Percent: number;
};

type TelematicData = {
  EquipmentHeader: EquipmentHeader;
  Location: Location;
  CumulativeIdleHours: Hours;
  CumulativeOperatingHours: Hours;
  Distance: Distance;
  EngineStatus: EngineStatus;
  FuelUsed: FuelUsed;
  FuelRemaining: FuelRemaining;
};

export type {
  EquipmentHeader,
  Location,
  Hours,
  Distance,
  EngineStatus,
  FuelUsed,
  FuelRemaining,
  TelematicData,
};
