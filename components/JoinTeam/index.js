import React from "react";

export default function JoinTeam({ teamCode, handleJoinTeam, handleTeamCode }) {
  return (
    <div className="overlay w-full -mt-10 h-full absolute z-10 bg-black bg-opacity-50">
      <div className=" w-full h-auto rounded-xl bg-gray-800 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col items-center justify-center p-4">
          <p className="text-white my-4 ">
            Please Enter Valid Team Code to Join
          </p>
          <input
            className="w-1/4 p-2 rounded-lg bg-gray-800 text-white border-2 border-gray-600"
            type="text"
            placeholder="Team Code"
            value={teamCode}
            onChange={handleTeamCode}
          />
          <button
            onClick={handleJoinTeam}
            className="text-white w-1/4 m-4 rounded-lg bg-glow p-2 "
          >
            Join Team
          </button>
        </div>
      </div>
    </div>
  );
}
