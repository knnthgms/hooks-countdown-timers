import React, { useEffect, useState } from "react";
import "./TimerCard.css";
function TimerCard(props) {
  const dateString = new Date(`${props.countdownDate}`).toLocaleDateString(
    "en-GB",
    {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    // const date = props.countdownDate.split("-");
    const difference = +new Date(`${props.countdownDate}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="timer card">
      <div className="timer-title-date">
        <span className="timer-title">{props.countdownTitle}</span>
        <span className="timer-date">{`${dateString}`}</span>
      </div>
      <span className="timer-text">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </span>
    </div>
  );
}

export default TimerCard;
