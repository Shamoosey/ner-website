import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import { LinkTree } from "./pages/LinkTree";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="links" element={<LinkTree />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
