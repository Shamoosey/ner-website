import { useState } from "react";
import type { ShowData } from "./interfaces/ShowData";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  const [showData, setShowData] = useState<ShowData[]>([
    {
      tite: "TV Dinner EP Release Show",
      featuring: "Naked Elevator Ride, Say Bon, Sophie Stevens",
      location: "HANDSOME DAUGHTER",
      date: new Date("2026-05-28"),
      ticketLink: "https://www.showpass.com/naked26/",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={showData} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
