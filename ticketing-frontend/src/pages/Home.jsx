import EventCard from "../components/EventCard";

const events = [
  {
    _id: "1",
    name: "Global Hack Week",
    date: "June 7-13",
    price: 500,
    totalSeats: 100,
    bookedSeats: [1, 2],
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
  },
  {
    _id: "2",
    name: "Tech Fest 2026",
    date: "July 10",
    price: 300,
    totalSeats: 80,
    bookedSeats: [3, 4],
    image: "https://tse2.mm.bing.net/th/id/OIP.8f81qAbZxXmbtdi6Uve0bwHaEK?pid=Api&P=0&h=180"
  },
  {
    _id: "3",
    name: "Startup Meetup",
    date: "Aug 2",
    price: 200,
    totalSeats: 50,
    bookedSeats: [],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
  },
  {
    _id: "4",
    name: "AI Conference",
    date: "Sep 15",
    price: 800,
    totalSeats: 120,
    bookedSeats: [5],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    _id: "5",
    name: "Music Fest",
    date: "Oct 5",
    price: 600,
    totalSeats: 150,
    bookedSeats: [6, 7],
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
  }
];

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>2026 Events</h1>
        <p>Find and book amazing experiences</p>
      </div>

      <div className="container">
        <h2>Past Events</h2>
        <div className="grid">
          {events.map((e) => (
            <EventCard key={e._id} event={e} />
          ))}
        </div>
      </div>
    </div>
  );
}