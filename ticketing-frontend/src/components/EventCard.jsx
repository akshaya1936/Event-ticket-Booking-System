import { useNavigate } from "react-router-dom";
import "./EventCard.css";

export default function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div className="event-card"onClick={() => navigate(`/event/${event._id}`, { state: event })}>
      
      <img src={event.image} alt={event.name} />

      <div className="event-info">
        <h3>{event.name}</h3>
        <p>{event.date}</p>
        <span>₹{event.price}</span>
      </div>

    </div>
  );
}