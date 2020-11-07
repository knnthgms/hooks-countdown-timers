import React, { useState } from "react";
import Header from "./Header";
import TimerCard from "./TimerCard";
import "./App.css";

function App() {
  const events = [
    {
      title: "Student Visa Expires",
      date: "2021-01-31",
    },
    {
      title: "Pixel 4a Release",
      date: "2020-11-19",
    },
    {
      title: "Christmas",
      date: "2020-12-25",
    },
    { title: "28th", date: "2021-10-04" },
  ];
  const [descSortOrder, setSortOrder] = useState(true);
  const [dayCounter, setDayCounter] = useState(false);
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <div className="date-countdowns">
          <span className="date-countdown-options">
            <div>
              <label>Reverse order</label>
              <input
                type="checkbox"
                checked={!descSortOrder}
                onChange={(e) => {
                  setSortOrder(!descSortOrder);
                }}
              />
            </div>
            {/* <div>
              <label>Day count only</label>
              <input
                type="checkbox"
                checked={dayCounter}
                onChange={(e) => {
                  setDayCounter(!dayCounter);
                }}
              />
            </div> */}
          </span>
          <div>
            {events
              .sort(function (a, b) {
                return descSortOrder
                  ? new Date(a.date) - new Date(b.date)
                  : new Date(b.date) - new Date(a.date);
              })
              .map((e) => (
                <TimerCard
                  countdownDate={e.date}
                  countdownTitle={e.title}
                  shortDate={dayCounter}
                  key={e.date}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
