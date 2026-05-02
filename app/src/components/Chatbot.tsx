import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const getBotResponse = (userInput: string): string => {
  // Simple keyword-based responses
  if (userInput.includes('services') || userInput.includes('what do you do')) {
    return "We specialize in enterprise IT solutions including Cloud & DevOps, Observability & AIOps, Infrastructure Support, and Managed Services. Would you like to learn more about any specific service?";
  }
  if (userInput.includes('contact') || userInput.includes('phone') || userInput.includes('email')) {
    return "You can reach us at info@perception-it.com or call +44 7456 457005. Our team is available 24/7 for enterprise clients.";
  }
  if (userInput.includes('projects') || userInput.includes('case studies')) {
    return "We have successfully delivered 50+ enterprise projects across telecom, finance, and manufacturing sectors. Check out our projects page for detailed case studies!";
  }
  if (userInput.includes('pricing') || userInput.includes('cost') || userInput.includes('quote')) {
    return "Our solutions are customized for enterprise needs. Please contact us for a detailed consultation and quote tailored to your requirements.";
  }
  if (userInput.includes('support') || userInput.includes('help')) {
    return "We provide 24/7 enterprise support with guaranteed SLAs. Our NOC operates follow-the-sun coverage for critical infrastructure.";
  }
  return "Thank you for your interest in Perception IT. Our team of experts is ready to help transform your IT infrastructure. Would you like me to connect you with a specialist?";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm the Perception IT assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const idCounterRef = useRef(1);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) return;

    idCounterRef.current += 1;
    const userMessage: Message = {
      id: idCounterRef.current.toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    const currentInput = inputValue.toLowerCase();
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(currentInput);
      idCounterRef.current += 1;
      const botMessage: Message = {
        id: idCounterRef.current.toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  }, [inputValue]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 group"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            ?
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Perception IT Assistant</h3>
              <p className="text-sm opacity-90">Typically replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
