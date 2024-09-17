


import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import Chatbot from '../chatbot/chat';



const ChatBox = () => {
    const [isChatExpanded, setIsChatExpanded] = useState(false);

    const toggleChatSize = () => {
        setIsChatExpanded(!isChatExpanded);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">

            <div
                className={`bg-[#1B202D] opacity-100 text-white rounded-lg shadow-lg transition-all duration-300 
                ${isChatExpanded
                        ? 'h-[600px] w-[90vw] sm:w-[90vw] md:w-[400px] lg:w-[500px]'
                        : 'h-[70px] w-[90vw] sm:w-[90vw] md:w-[400px] lg:w-[500px]'}
                `}
            >
                <div className={`${isChatExpanded ? 'p-4 flex bg-black justify-between items-center' : 'p-4 flex justify-between items-center'}`}>
                    <p className={'block text-lg'}>
                        {isChatExpanded ? 'Google Emeli intellekt arkaly jogaplanar' : ' Salam, soraglaryňyzy sorap bilersiňiz!'}
                    </p>
                    <button
                        onClick={toggleChatSize}
                        className="text-green-800 font-bold bg-white hover:bg-blue-800 hover:text-white p-2 rounded-full"
                    >
                        {isChatExpanded ? <FaChevronDown /> : <FaChevronUp />}
                    </button>
                </div>

                {isChatExpanded && (
                    <div className="p-2 text-white h-[550px] overflow-y-auto mb-1">
                        <Chatbot />
                    </div>
                )}
            </div>
        </div>
    );
};


export default ChatBox;