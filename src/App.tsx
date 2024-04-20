import { useEffect, useState } from "react";
import "./styles.css";

const getMessage = () => {
  const dayHeScrewedUp = new Date("04/12/2024");
  const today = new Date();

  // get total seconds between the times
  let delta = Math.abs(today.getTime() - dayHeScrewedUp.getTime()) / 1000;

  // calculate (and subtract) whole days
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  const seconds = Math.floor(delta % 60);

  return `${days} Days ${hours} hours ${minutes} minutes and ${seconds} seconds`;
};

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(getMessage());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <div className="message">
        <div className="header">{message}</div>
        <div className="subHeader"> since Joe screwed up.</div>
        <div className="warning">
          Let this be a lesson to not click on suspicious links that asks for
          your discord login.
        </div>
      </div>
    </div>
  );
}
