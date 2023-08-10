import React, { useState } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  width: 350px;
  position: relative;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px; /* Adjust the width */
  background-color: white;
  padding: 20px;
  border-radius: 2px; /* Sharper corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #ccc;
`;

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSaveQuizClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <AppContainer>
      <AppHeader>
        <h1>Quiz App</h1>
        <div>
          <Button onClick={handleSaveQuizClick}>Save Quiz</Button>
          <Button>View Quizzes</Button>
        </div>
      </AppHeader>
      {showPopup && (
        <Popup>
          <p>Quiz Saved!</p>
          <Button onClick={handleClosePopup}>Close</Button>
        </Popup>
      )}
    </AppContainer>
  );
}

export default App;
