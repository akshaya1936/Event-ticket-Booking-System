import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const total = state.selected.length * state.event.price;

  return (
    <div>
      <h2>Checkout</h2>
      <p>Seats: {state.selected.join(", ")}</p>
      <p>Total: ₹{total}</p>

      <button onClick={() => navigate("/payment", { state })}>
        Pay Now
      </button>
    </div>
  );
}