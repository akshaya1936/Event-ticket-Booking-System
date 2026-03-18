import { useEffect, useState } from "react";
import API from "../services/api";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await API.post("/my-tickets", {
        email: user.email,
      });

      setTickets(res.data.tickets);
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h2>My Tickets</h2>

      {tickets.length === 0 && <p>No tickets found</p>}

      {tickets.map((t) => (
        <div key={t.ticketId}>
          <p>Event: {t.eventId}</p>
          <p>Status: {t.status}</p>
          <p>Ticket ID: {t.ticketId}</p>

          {/* if using S3 */}
          {t.qrUrl && <img src={t.qrUrl} width={150} />}

          <hr />
        </div>
      ))}
    </div>
  );
}