import React, {useState} from 'react'
import MessageList from "../components/MessageList.jsx";
import ChatForm from "../components/ChatForm.jsx";
import {ai, chat, config} from "../utils/genai.js";

export default function Chat() {
    const [prompt, setPrompt] = useState("")
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        if (isLoading && !prompt.trim()) {
            return
        }
        setMessages((prev) => [...prev, {role: "user", content: prompt}])
        const currentPrompt = prompt
        setPrompt("")
        setIsLoading(true)
        await generateAiContent(currentPrompt)
        setIsLoading(false)
    }

    async function generateAiContent(currentPrompt) {
        try {
            const response = await chat.sendMessage({
                message: currentPrompt,
                config : config,
            })
            setMessages((prev) => [...prev, {role: "ai", content: response.text}])
        } catch (error) {
            console.log(error)
        }
    }


    return (<>
        <MessageList messages={messages}/>
        <ChatForm
            prompt={prompt}
            setPrompt={setPrompt}
            isLoading={isLoading}
            onSubmit={handleSubmit}
        />
    </>)
}
