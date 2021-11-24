import React, { useEffect, useState } from 'react';
import Messages from '../components/Messages';
import { getMessage } from '../api/data/bioPromises';

export default function MessagesView() {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    getMessage().then(setMessage);
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {messages.map((message) => (
        <Messages
          key={message.firebaseKey}
          message={message}
          setMessage={setMessage}
        />
      ))}
    </div>
  );
}
