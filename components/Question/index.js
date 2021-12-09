import React from "react";
import Link from "next/link";

export const QuestionBox = ({
  id,
  question,
  value,
  onAnswerChange,
  onSubmit,
  href,
}) => {
  return (
    <div className="w-screen h-screen bg-skeleton">
      <div className="flex flex-col w-full h-auto p-4 md:p-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70">
        <h2 className="text-2xl my-4  font-bold text-white">
          {id}. {question}
        </h2>

        <input
          type="text"
          className="w-1/2 bg-black border-b mb-4 border-white text-white text-2xl font-medium"
          placeholder="Enter Answer Here"
          value={value}
          onChange={onAnswerChange}
        />

        <a
          href={href}
          className="bg-blue-500 hover:bg-blue-700 text-white w-32 text-center font-bold py-2 px-4 rounded"
          onClick={onSubmit}
        >
          Submit
        </a>
      </div>
    </div>
  );
};
