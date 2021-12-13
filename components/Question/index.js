import React from "react";

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
      <div className="flex flex-col w-full h-auto p-6 md:p-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70">
        <h2 className="text-lg md:text-2xl my-4  font-bold text-white">
          {id}. {question}
        </h2>

        <input
          type="text"
          className="w-100 md:w-1/2 md:ml-6 bg-black border-b my-4 border-white text-white text-md md:text-2xl font-medium"
          placeholder="Enter Answer Here"
          value={value}
          onChange={onAnswerChange}
        />

        <a
          href={href}
          className="w-36 md:ml-6 text-center mt-10 font-archivo font-bold text-white rounded-lg bg-glow hover:text-white hover:shadow-glow p-2"
          onClick={onSubmit}
        >
          Submit
        </a>
      </div>
    </div>
  );
};
