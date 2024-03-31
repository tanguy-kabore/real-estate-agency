import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handlefirstkeyword = () => {
    const botMessage = createChatBotMessage(
      "Absolutely! How about a modern apartment in the heart of downtown? It boasts spacious rooms and is near top-rated schools."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlesecondkeyword = () => {
    const botMessage = createChatBotMessage(
      "This gem offers a gym, swimming pool, and a rooftop terrace with stunning city views."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlethirdkeyword = () => {
    const botMessage = createChatBotMessage(
      "Certainly! It falls within your budget range, providing excellent value for money."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlefourthkeyword = () => {
    const botMessage = createChatBotMessage(
      "Of course! I'll arrange it at your convenience. Let's find your dream home!"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlefifthkeyword = () => {
    const botMessage = createChatBotMessage(
      "Absolutely, I'll confirm that for you. Your pet's comfort is just as important as yours in finding the ideal home."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handlefirstkeyword,
            handlesecondkeyword,
            handlethirdkeyword,
            handlefourthkeyword,
            handlefifthkeyword,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
