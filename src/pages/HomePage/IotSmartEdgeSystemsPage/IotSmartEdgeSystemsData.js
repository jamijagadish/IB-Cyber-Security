export const IotSmartEdgeSystemsData = {
  title: "IoT, Smart Systems & Edge Computing",
  eyebrow: "IoT, Smart Systems & Edge Computing",
  slug: "iot-smart-edge-systems",
  description: "Engineering intelligent edge computing platforms and connected IoT software products for real-time device telemetry.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `iot-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `IoT & Edge System ${i + 1}`,
    description: "Sensor data ingestion, edge AI analytics, industrial automation drivers, firmware security, and device management.",
    color: "#E8F4F8",
    summary: "Real-time edge processing and connected smart systems."
  }))
};
