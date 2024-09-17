
import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./chat.css";
import ChatHistory from "./chathistory";
import Loading from "./loading";

const Chatbot = () => {
    const [userInput, setUserInput] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const chatContainerRef = useRef(null); // Kaydırma referansı

    // Google Generative AI API'yi başlatma
    const genAI = new GoogleGenerativeAI("AIzaSyDdcG_wvBp57CF5YzZxwAuykJFVHsBWxdM");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Kullanıcı girişini işleme fonksiyonu
    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    // Mesaj gönderme fonksiyonu
    const sendMessage = async () => {
        if (userInput.trim() === "") return;

        setIsLoading(true);
        try {
            // Google Gemini API'den yanıt al
            const result = await model.generateContent(userInput);
            const response = await result.response;
            setChatHistory([
                ...chatHistory,
                { type: "user", message: userInput },
                { type: "bot", message: response.text() },
            ]);
        } catch (error) {
            console.error("Mesaj gönderilirken hata oluştu");
        } finally {
            setUserInput("");
            setIsLoading(false);
        }
    };

    // Yeni mesaj geldiğinde sohbet penceresini kaydır
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (


        <div className="flex flex-col h-full ">


            <div
                className="flex-grow chat-container max-h-[75vh] sm:max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200"
                ref={chatContainerRef}
            >
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">Mergen Hojaberdiyew Chatbot</h1>
                <ChatHistory chatHistory={chatHistory} />
                <Loading isLoading={isLoading} />
            </div>



            <div className="mt-0 flex items-center justify-between  pb-10 sm:pb-4 lg:pb-4 md:pb-4 ">
                <input
                    type="text"
                    className="flex-grow text-black px-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                    placeholder="Soraglaryňyzy ýazyň..."
                    value={userInput}
                    onChange={handleUserInput}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            sendMessage();
                        }
                    }}
                />
                <button
                    className="px-4 py-2 ml-2 rounded-lg bg-gray-950 text-white hover:bg-blue-800 focus:outline-none"
                    onClick={sendMessage}
                    disabled={isLoading}
                >
                    Ugrat
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
