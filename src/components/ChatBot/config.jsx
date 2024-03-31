import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const botName = "YourChatSupport";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi!, I'm ${botName} How Can I Help You? `),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#8e7ce0",
    },
    chatButton: {
      backgroundColor: "#110988",
    },
  },
};

export default config;
