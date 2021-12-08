import React, { useState } from "react";

const Form = ({ name, mobile, onNameChange, onNumberChange, handleClick }) => {
  return (
    <div className="overlay w-full h-full absolute z-10 bg-black bg-opacity-50">
      <div className=" w-64 h-auto rounded-xl bg-gray-800 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col items-start justify-center p-4">
          <form className="flex flex-col m-4">
            <label className="text-white mb-2">Name : </label>
            <input
              type="text"
              className={`bg-gray-800 text-white text-sm "
               p-1 mb-4 w-full rounded-lg`}
              placeholder="Enter Name Here"
              autoComplete="off"
              value={name}
              onChange={onNameChange}
            />
            <label className="text-white  mb-2">Phone : </label>
            <input
              type="number"
              className="bg-gray-800 text-white text-sm p-1 w-full rounded-lg"
              placeholder="Enter Mobile Number"
              autoComplete="off"
              value={mobile}
              onChange={onNumberChange}
            />
          </form>
          <button
            className="text-white m-4 rounded-lg bg-blue-600 p-2"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
  return;
};

export default Form;
