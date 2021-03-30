// Globals
import "./styles.scss";
import React, { useState } from "react";

// Components
import { Button } from "components/Button";

// Sub-component
function Expired() {
  return (
    <div className="qd-expired">
      <div className="qd-expired-emoji">⚠️</div>
      <div className="qd-expired-text">Timer expired!</div>
    </div>
  );
}

// Component
function Timer() {
  // Hooks - state
  const [counter, setCounter] = useState(0);

  // TODO: implement counter...

  // Render
  return (
    <div className="qd-page qd-timer">
      <h1>Timer</h1>

      <div className="qd-page-content">
        <div className="qd-timer-clock">0:00</div>
        {counter <= 0 ? <Expired /> : null}

        <div className="qd-timer-buttons">
          <Button>Start</Button>
          <Button>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
