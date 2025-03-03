import React, { useEffect, useState } from 'react';
import './Countdown.css'; // Assuming you create a separate CSS file for styles

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    headline: "Countdown",
  });

  useEffect(() => {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    const startDate = new Date(new Date().getFullYear(), 9, 26).getTime(); // October 26

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      let distance = now < startDate ? startDate - now : now - startDate;

      const newTime = {
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second),
        headline: now < startDate 
          ? "Countdown" 
          : "Time's Up", // Only "Countdown" or "Time's Up"
      };

      setTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1 className="headline">{time.headline}</h1>
      <div className="calendar-box">
        <div className="countdown-box">
          <div className="flip-container">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span>{time.days}</span>
                  <div className="label">Days</div>
                </div>
                <div className="flip-card-back">
                  <span>{time.days}</span>
                  <div className="label">Days</div>
                </div>
              </div>
            </div>
            <span className="colon">:</span>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span>{time.hours}</span>
                  <div className="label">Hours</div>
                </div>
                <div className="flip-card-back">
                  <span>{time.hours}</span>
                  <div className="label">Hours</div>
                </div>
              </div>
            </div>
            <span className="colon">:</span>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span>{time.minutes}</span>
                  <div className="label">Minutes</div>
                </div>
                <div className="flip-card-back">
                  <span>{time.minutes}</span>
                  <div className="label">Minutes</div>
                </div>
              </div>
            </div>
            <span className="colon">:</span>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span>{time.seconds}</span>
                  <div className="label">Seconds</div>
                </div>
                <div className="flip-card-back">
                  <span>{time.seconds}</span>
                  <div className="label">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
