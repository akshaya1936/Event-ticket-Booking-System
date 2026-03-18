import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { QRCodeCanvas } from "qrcode.react";

export default function Register() {
  const { id } = useParams(); // eventId from URL

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qr, setQr] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email) {
      alert("Please enter name and email");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/book-ticket", {
        name,
        email,
        eventId: id
      });

      setQr(res.data.qrData);
    } catch (err) {
      console.error(err);
      alert("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <h2>🎟 Register for Event</h2>

      {/* FORM */}
      {!qr && (
        <div className="form-box">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleRegister}>
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </div>
      )}

      {/* QR DISPLAY */}
      {qr && (
        <div className="qr-box">
          <h3>✅ Booking Successful</h3>
          <p>Show this QR at entry</p>

          <QRCodeCanvas value={qr} size={220} />

          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            Event ID: {id}
          </p>
        </div>
      )}
    </div>
  );
}