import { useLocation, useNavigate } from "react-router-dom";

export default function EventDetails() {
  const { state: event } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="details-page">
      <img src={event.image} alt={event.name} />

      <div className="details-content">
        <h1>{event.name}</h1>
        <p className="date">{event.date}</p>

        <p className="desc">
          This is an exciting event where you can learn, network, and explore new ideas.
        </p>

        <h3>₹{event.price}</h3>

        <button onClick={() => navigate(`/register/${event._id}`)}>
  Register
</button>
      </div>
    </div>
  );
}