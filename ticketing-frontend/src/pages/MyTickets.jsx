import { useEffect, useState } from "react";
import API from "../services/api";
import { QRCodeCanvas } from "qrcode.react";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    API.get("/tickets/U1").then((res) => setTickets(res.data));
  }, []);

  return (
    <div>
      <h2>My Tickets</h2>
      {tickets.map((t) => (
        <div key={t._id}>
          <p>Seat: {t.seatNumber}</p>
          <QRCodeCanvas value={JSON.stringify({ ticketId: t._id })} />
        </div>
      ))}
    </div>
  );
}