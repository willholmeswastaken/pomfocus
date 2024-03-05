"use client";

import { useEffect, useState } from "react";

export function useTimer(durationMinutes = 20) {
  const [time, setTime] = useState(durationMinutes * 60 * 1000);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearTimer();
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);
    setTimeoutId(interval);
  };

  const clearTimer = () => {
    clearInterval(timeoutId!);
    setTimeoutId(null);
    setTime(durationMinutes * 60 * 1000);
  };

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return {
    clearTimer,
    startTimer,
    minutesLeft: Math.floor(time / (60 * 1000)),
    secondsLeft: Math.floor((time % (60 * 1000)) / 1000)
      .toString()
      .padStart(2, "0"),
    isRunning: !!timeoutId,
  };
}
