import React, {useState} from 'react'
import MessageList from "../components/MessageList.jsx";
import ChatForm from "../components/ChatForm.jsx";
import {ai} from "../utils/genai.js";



export default function CreateContent() {
    const [prompt, setPrompt] = useState("")
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        if (isLoading && !prompt.trim()) {
            return
        }
        setMessages((prev) => [...prev, {role: "user", content: prompt}])
        setIsLoading(true)
        await generateAiContent()
        setIsLoading(false)
    }

    async function generateAiContent() {
        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash", contents: prompt,
            })
            console.log(response.data)
            setPrompt("")
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
