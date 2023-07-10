import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/Landing";
import { Users } from "./pages/Users";
import Navbar from "./components/Navbar";
import { Container } from "@chakra-ui/react";
import "./index.css";
// import { Footer } from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Container maxW={"6xl"}>
        <Navbar />
      </Container>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
