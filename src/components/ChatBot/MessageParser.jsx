import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // Saving all messages
    let messages = JSON.parse(localStorage.getItem("chat_messages")) || [];
    let chatObj = { message: message };
    messages.push(chatObj);
    localStorage.setItem("chat_messages", JSON.stringify(messages));
    // Find keyword froom users
    if (message.includes("looking")) {
      actions.handlefirstkeyword();
    }

    if (message.includes("What")) {
      actions.handlesecondkeyword();
    }

    if (message.includes("budget")) {
      actions.handlethirdkeyword();
    }
    if (message.includes("Great")) {
      actions.handlefourthkeyword();
    }
    if (message.includes("perfect")) {
      actions.handlefifthkeyword();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
