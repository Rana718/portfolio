import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

function ChatButton({ openFromHeaderRef }) {
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [chatMessages, setChatMessages] = useState([])
    const [isVisible, setIsVisible] = useState(true)
    const messagesEndRef = useRef(null)
    const scrollTimerRef = useRef(null)

    React.useEffect(() => {
        if (openFromHeaderRef) {
            openFromHeaderRef.current = () => {
                setIsOpen(true)
            }
        }
    }, [openFromHeaderRef])

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [chatMessages])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (message.trim()) {
            const newMessage = {
                text: message,
                isUser: true,
                timestamp: new Date()
            }
            setChatMessages(prev => [...prev, newMessage])
            console.log('Message sent:', message)
            setMessage('')
        }
    }


    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(false)
            if (scrollTimerRef.current) {
                clearTimeout(scrollTimerRef.current)
            }
        
            scrollTimerRef.current = setTimeout(() => {
                setIsVisible(true)
            }, 500) 
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (scrollTimerRef.current) {
                clearTimeout(scrollTimerRef.current)
            }
        }
    }, [])

    return (
        <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${isVisible || isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {isOpen ? (
                <div className="bg-card rounded-lg shadow-lg mb-4 w-80 h-[450px] flex flex-col animate-fade-in transition-colors duration-300">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-theme-primary">Chat with me</h3>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-element p-1 rounded-full transition-colors duration-300 text-theme-primary">
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="flex-grow overflow-y-auto scrollbar-hide p-4 scroll-smooth">
                        {chatMessages.length > 0 ? (
                            <div className="space-y-3 w-full">
                                {chatMessages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`p-2 rounded-lg inline-block max-w-[80%] ${msg.isUser
                                            ? 'bg-blue-600 text-white ml-auto float-right clear-both'
                                            : 'bg-gray-100 dark:bg-gray-700 mr-auto float-left clear-both'}`}
                                    >
                                        {msg.text}
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>
                        ) : (
                            <div className="text-center text-theme-secondary my-auto h-full flex flex-col justify-center">
                                <p>Send me a message!</p>
                                <p className="text-sm mt-2">I'll get back to you soon.</p>
                            </div>
                        )}
                    </div>

                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-theme-primary"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
                                aria-label="Send message"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
                    aria-label="Chat"
                >
                    <MessageCircle size={24} />
                </button>
            )}
        </div>
    )
}

export default ChatButton
