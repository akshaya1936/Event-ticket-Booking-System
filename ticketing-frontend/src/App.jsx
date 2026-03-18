import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import MyTickets from "./pages/MyTickets";
import Scanner from "./pages/Scanner";
// import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";   // ✅ FIXED IMPORT
import Success from "./pages/Success";  
import Login from "./pages/Login";
import Signup from "./pages/Signup";   // ✅ FIXED IMPORT

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Event Flow */}
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/register/:id" element={<Register />} />
        <Route path="/success" element={<Success />} />       {/* ✅ lowercase */}

        {/* Existing Pages */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/tickets" element={<MyTickets />} />
        <Route path="/scanner" element={<Scanner />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;