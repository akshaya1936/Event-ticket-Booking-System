// import { useState } from "react";
// import API from "../services/api";

// export default function Dashboard() {
//   const [event, setEvent] = useState({
//     name: "",
//     date: "",
//     totalSeats: "",
//     price: "",
//   });

//   const handleCreate = async () => {
//     await API.post("/events", event);
//     alert("Event Created");
//   };

//   return (
//     <div>
//       <h2>Create Event</h2>

//       <input placeholder="Name" onChange={(e) => setEvent({ ...event, name: e.target.value })} />
//       <input placeholder="Date" onChange={(e) => setEvent({ ...event, date: e.target.value })} />
//       <input placeholder="Seats" onChange={(e) => setEvent({ ...event, totalSeats: e.target.value })} />
//       <input placeholder="Price" onChange={(e) => setEvent({ ...event, price: e.target.value })} />

//       <button onClick={handleCreate}>Create</button>
//     </div>
//   );
// }