import React, { useState, useRef, useEffect } from 'react'
import './Chatbot.scss'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '👋 Hello! I am your AI assistant. Ask me anything about React, state management, or any other topics.\n\n⚠️ To enable AI responses:\n1. Get your API key from https://console.anthropic.com/\n2. Add it to the .env file: ANTHROPIC_API_KEY=your_key\n3. Restart the server\n\nFor now, you can ask questions and see the demo interface!',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Call backend API to get response from Claude
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response from AI')
      }

      const data = await response.json()

      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: 'bot',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again later.',
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <>
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Open Chat"
      >
        💬
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Chat Assistant</h3>
            <button
              className="close-button"
              onClick={() => setIsOpen(false)}
              title="Close Chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content loading">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="chatbot-input-form">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="chatbot-input"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="send-button"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Chatbot
