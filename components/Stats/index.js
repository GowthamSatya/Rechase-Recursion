import React from "react";

const Stats = ({ code, score, continueClick }) => {
  return (
    <div className="overlay bg-black bg-opacity-50">
      <div className="w-full h-auto  bg-black  ">
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-white text-lg md:text-2xl">Rechase</h1>
          <p className="text-gray-500">Team Created Successfully !!</p>
          {score == 3 ? (
            <p className="text-gray-500">You Completed</p>
          ) : (
            <button
              onClick={continueClick}
              className="mt-2 font-archivo font-bold text-white rounded-lg bg-glow hover:text-white hover:shadow-glow p-2"
            >
              Continue Quiz...
            </button>
          )}
          <div className="flex w-1/2 mt-10 flex-col items-start justify-between text-white md:flex-row">
            <div>
              <p className="my-4">Team Code : {code}</p>
              <p className="my-4">Score : {score}</p>
              <p className="my-4">
                Current Level : {score === 3 ? score : score + 1}
              </p>
            </div>
            <div>
              <p className="my-4">Team Name</p>
              <ul>
                <li className="mt-2">gowtham</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
