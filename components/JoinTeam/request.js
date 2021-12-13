import React from "react";

const Request = () => {
  return (
    <div className="overlay w-full -mt-10 h-full absolute z-10 bg-black bg-opacity-50">
      <div className=" w-64 h-auto rounded-xl bg-gray-800 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col items-center justify-center p-4">
          <p>Team Join Request Sent Sucessfully</p>
        </div>
      </div>
    </div>
  );
};

export default Request;
