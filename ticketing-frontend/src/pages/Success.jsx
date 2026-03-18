import { useLocation } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

export default function Success() {
  const { state } = useLocation();

  const qrData = JSON.stringify({
    name: state.form.name,
    event: state.event.name,
    time: new Date().toISOString()
  });

  return (
    <div className="success-page">
      <h2>🎉 Registration Successful</h2>

      <p>{state.form.name}</p>
      <p>{state.event.name}</p>

      <QRCodeCanvas value={qrData} size={200} />

      <p>Show this QR at entry</p>
    </div>
  );
}