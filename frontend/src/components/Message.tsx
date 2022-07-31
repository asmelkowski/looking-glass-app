import {useState, useEffect } from "react";
import styled from 'styled-components';


type Message = {
    username: string
}

const StyledMessage = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function Message() {
  const [message, setMessage] = useState<Array<Message>>([]);

  useEffect(() => {
    fetch("http://localhost:8000/test/")
      .then((response) => response.json())
      .then((data) => setMessage(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <StyledMessage className="messages">
      {Array.isArray(message)
        ? message.map((item) => {
            return <p>{item.username}</p>;
          })
        : "null"}
    </StyledMessage>
  );
}
