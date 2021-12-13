import React from "react";

const TeamBox = ({ onCreateClick, onJoinClick }) => {
  return (
    <div className="overlay w-full -mt-10 h-full absolute z-10 bg-black bg-opacity-50">
      <div className=" w-64 h-auto rounded-xl bg-gray-800 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col items-center justify-center p-4">
          <button
            onClick={onCreateClick}
            className="text-white w-full m-4 rounded-lg bg-glow p-2 "
          >
            Create Team
          </button>
          <button
            onClick={onJoinClick}
            className="text-white w-full m-4 rounded-lg bg-glow p-2 "
          >
            Join Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamBox;
