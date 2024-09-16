/* import React from "react";
import ReactMarkdown from "react-markdown";
const ChatHistory = ({ chatHistory }) => {
    return (
        <>
            {chatHistory.map((message, index) => (
                <div
                    key={index}
                    className={`flex items-start py-2 mb-1 px-2 rounded-lg ${message.type === "user"
                        ? "bg-gray-100 text-gray-800 ml-10"
                        : "bg-blue-100 text-blue-800 mr-6"
                        }`}
                >
                    {message.type === "user" && (
                        <span className="mr-2 font-bold text-gray-600">You:</span>
                    )}

                    <div>
                        <ReactMarkdown>{message.message}</ReactMarkdown>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ChatHistory; */


import React from "react";
import ReactMarkdown from "react-markdown";

const ChatHistory = ({ chatHistory }) => {
    return (
        <>
            {chatHistory.map((message, index) => (
                <div
                    key={index}
                    className={`flex items-start py-2 mb-1 px-2 rounded-lg ${message.type === "user"
                        ? "bg-[#373E4E] text-[#FFFFFF]  ml-10"
                        : "bg-[#7A8194] text-[#FFFFFF] mr-6"
                        }`}
                >
                    {message.type === "user" && (
                        <span className="mr-2 font-bold text-white">Sen:</span>
                    )}
                    <div>
                        <ReactMarkdown>{message.message}</ReactMarkdown>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ChatHistory;
