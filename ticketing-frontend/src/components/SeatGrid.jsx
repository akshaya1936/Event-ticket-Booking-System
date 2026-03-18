export default function SeatGrid({ totalSeats, bookedSeats, selected, setSelected }) {
  const seats = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    if (selected.includes(seat)) {
      setSelected(selected.filter((s) => s !== seat));
    } else {
      setSelected([...selected, seat]);
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: 5 }}>
      {seats.map((seat) => (
        <div
          key={seat}
          onClick={() => toggleSeat(seat)}
          style={{
            padding: 10,
            background: bookedSeats.includes(seat)
              ? "gray"
              : selected.includes(seat)
              ? "green"
              : "#eee",
            cursor: "pointer",
          }}
        >
          {seat}
        </div>
      ))}
    </div>
  );
}