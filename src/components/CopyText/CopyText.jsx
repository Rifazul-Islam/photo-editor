import React, { useState } from "react";

const CopyList = () => {
  // ধরো এই ডেটা dynamic API থেকে এসেছে
  const paragraphs = [
    "First dynamic paragraph text.",
    "Second paragraph from API.",
    "Third example paragraph.",
  ];

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Copy failed: ", err);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-md space-y-6">
        {paragraphs.map((para, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-4 flex justify-between items-center"
          >
            <p className="text-gray-700 text-base">{para}</p>
            <button
              onClick={() => handleCopy(para, index)}
              className={`ml-4 px-4 py-2 rounded-md text-sm font-medium text-white transition-all duration-300 ${
                copiedIndex === index
                  ? "bg-green-500"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {copiedIndex === index ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CopyList;
