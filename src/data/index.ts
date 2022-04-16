import { TelematicData } from "../core";

const TELEMATIC_DATA: TelematicData = {
  EquipmentHeader: {
    OEMName: "CAT",
    Model: "M315F",
    SerialNumber: "ABC123456",
    SnapshotTime: "2021-06-26T10:00:00Z",
  },
  Location: {
    Latitude: 52.52,
    Longitude: 13.405,
    Altitude: 70,
    AltitudeUnits: "metre",
  },
  CumulativeIdleHours: {
    Hour: 1060,
  },
  CumulativeOperatingHours: {
    Hour: 3469.4,
  },
  Distance: {
    OdometerUnits: "kilometre",
    Odometer: 2702.4,
  },
  EngineStatus: {
    Running: false,
  },
  FuelUsed: {
    FuelUnits: "litre",
    FuelConsumed: 24096,
  },
  FuelRemaining: {
    Percent: 39,
  },
};

export { TELEMATIC_DATA };
