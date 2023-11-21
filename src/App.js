import { useRef } from "react";

import "./App.css";
import AboutUs from "./components/About/AboutUs";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Problems from "./components/About/Problems";
import CoreValues from "./components/About/CoreValues";
import OurWorks from "./components/Work/OurWorks";
import Hiring from "./components/Hiring/Hiring";
import Footer from "./components/Footer/Footer";
import Message from "./components/Message/Message";

function App() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <Header onClick={handleClick}/>
      <AboutUs />
      <Problems />
      <CoreValues />
      <OurWorks ref={ref}/>
      <Hiring />
      <Message />
      <Footer />
    </>
  );
}

export default App;
