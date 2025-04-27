import React, { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const ChatBox = styled.div`
  background: white;
  border-radius: 10px;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ChatMessages = styled.div`
  padding: 15px;
  flex: 1;
  overflow-y: auto;
`;

const Message = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  max-width: 70%;
  word-wrap: break-word;

  &.support {
    background-color: #e0e0e0;
    margin-left: auto;
  }

  &.user {
    background-color: #6c9eeb;
    color: white;
    margin-right: auto;
  }
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ddd;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #6c9eeb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4c7bb1;
  }
`;

const ChatSupport = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'support' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      // User sends a message
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      // Simulate multiple responses from support
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Thank you for reaching out! How can I help you today?', sender: 'support' }
        ]);
      }, 1000);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'We offer account management, billing, and tech support. What would you like to discuss?', sender: 'support' }
        ]);
      }, 2000);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'If you need help with billing, I can assist you with your payments and invoices.', sender: 'support' }
        ]);
      }, 3000);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'For technical support, we can troubleshoot any issues you are facing with your account or services.', sender: 'support' }
        ]);
      }, 4000);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Would you like to visit our help center for FAQs and guides?', sender: 'support' }
        ]);
      }, 5000);
    }
  };

  return (
    <ChatContainer>
      <ChatBox>
        <ChatMessages>
          {messages.map((message, index) => (
            <Message key={index} className={message.sender}>
              <p>{message.text}</p>
            </Message>
          ))}
        </ChatMessages>
        <ChatInputContainer>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </ChatInputContainer>
      </ChatBox>
    </ChatContainer>
  );
};

export default ChatSupport;
