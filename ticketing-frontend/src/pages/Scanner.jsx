import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import API from "../services/api";

export default function ScannerPage() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(""); // success / error

  const handleScan = async (data) => {
    if (!data || data.length === 0) return;

    try {
      // QR gives array → take first value
      const qrValue = data[0].rawValue;

      // parse JSON from QR
      const parsed = JSON.parse(qrValue);

      const ticketId = parsed.ticketId;

      // call backend
      const res = await API.post("/verify-ticket", {
        ticketId,
      });

      setResult(res.data.message);
      setStatus("success");

    } catch (err) {
      console.error(err);
      setResult("Invalid Ticket ❌");
      setStatus("error");
    }
  };

  return (
    <div className="scanner-page">
      <h2>🎟 Event Entry Scanner</h2>

      <div className="scanner-box">
        <Scanner
          onScan={handleScan}
          onError={(err) => console.error(err)}
        />
      </div>

      {result && (
        <div className={`result-box ${status}`}>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
}