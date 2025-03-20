import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

function ChatButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="bg-card rounded-lg shadow-lg mb-4 w-72 h-96 p-4 animate-fade-in transition-colors duration-300">
                    <div className="flex justify-between items-center border-b pb-2 mb-4 border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-theme-primary">Chat with me</h3>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-element p-1 rounded-full transition-colors duration-300 text-theme-primary">
                            <X size={18} />
                        </button>
                    </div>
                    <div className="h-72 overflow-y-auto">
                        <div className="text-center text-theme-secondary mt-20">
                            <p>Send me a message!</p>
                            <p className="text-sm mt-2">I'll get back to you soon.</p>
                        </div>
                    </div>
                </div>
            )}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
                aria-label="Chat"
            >
                <MessageCircle size={24} />
            </button>
        </div>
    )
}

export default ChatButton
