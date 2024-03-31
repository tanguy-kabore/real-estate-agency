import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sale from "./pages/Sale";
import SaleProperty from "./pages/SaleProperty";
import Rent from "./pages/Rent";
import RentProperty from "./pages/RentProperty";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./components/ChatBot/config";
import MessageParser from "./components/ChatBot/MessageParser";
import ActionProvider from "./components/ChatBot/ActionProvider";
import { useState } from "react";
import chatboat_icon1 from "./chatboat_icon1.png";
import './App.css';


const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

function App() {
  const [showBot, setBot] = useState(false);
  function handleBot() {
    const botState = !showBot;
    setBot(botState);
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/saleproperty/:id" element={<SaleProperty />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/rentproperty/:id" element={<RentProperty />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {showBot && (
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          disableScrollToBottom
          headerText="Talk to Mice"
          placeholderText="Write your message here."
        />
      )}
      <button className="app-chatbot-button" onClick={handleBot}>
        <img src={chatboat_icon1} className="botIcon" alt="" />
      </button>
    </ThemeProvider>
  );
}

export default App;
