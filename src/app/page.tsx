"use client";

import { useTimer } from "./hooks/use-timer";

export default function Home() {
  const { minutesLeft, secondsLeft, startTimer, clearTimer, isRunning } =
    useTimer();
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-b">
        <div className="mx-auto mb-10 max-w-md px-2.5 text-center sm:max-w-xl sm:px-0">
          <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.15] text-black sm:text-5xl sm:leading-[1.15]">
            Hardcore Focus Like{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Never Before.
            </span>
          </h1>
          <h2 className="mt-5 text-gray-600 sm:text-xl">
            Pomfocus is the open-source pomodoro timer for modern working
            individuals.
          </h2>
        </div>
        <div className="mx-auto mb-10 w-full max-w-xs rounded-md border border-gray-200 px-2.5 py-4 text-center shadow-sm sm:max-w-xl sm:px-0">
          <h2 className="font-display mb-2 mt-5 text-7xl font-extrabold leading-[1.15] text-black sm:text-8xl sm:leading-[1.15]">
            {minutesLeft}:{secondsLeft}
          </h2>
          {isRunning ? (
            <button
              type="button"
              className="cursor-pointer rounded-full bg-black px-10 py-2 font-semibold text-white shadow-sm"
              onClick={() => clearTimer()}
            >
              Stop
            </button>
          ) : (
            <button
              type="button"
              className="cursor-pointer rounded-full bg-black px-10 py-2 font-semibold text-white shadow-sm"
              onClick={() => startTimer()}
            >
              Start
            </button>
          )}
        </div>
      </div>
    </>
  );
}
