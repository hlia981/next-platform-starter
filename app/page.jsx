'use client';

import Script from 'next/script';

export default function Page() {
    return (
        <div className="flex flex-col gap-16">
            {/* Hero Section */}
            <section className="text-center py-16">
                <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl text-gray-800">
                    FIOS HEALTH Chatbot Demo
                </h1>
                <p className="mb-8 text-xl text-gray-600 max-w-2xl mx-auto">
                   FIOS Health chatbot is ready to help you with questions, 
                    provide information, and engage in meaningful conversations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <button 
                        onClick={() => document.querySelector('.chatbot-button')?.click()}
                        className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors shadow-lg"
                    >
                        Start Chatting
                    </button>
                    <button 
                        onClick={() => document.querySelector('.chatbot-button')?.click()}
                        className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Try Demo
                    </button>
                </div>
            </section>

            {/* Features Section */}
            {/* <section className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Smart Conversations</h3>
                    <p className="text-gray-600">Engage in natural, intelligent conversations with our AI-powered chatbot.</p>
                </div>
                
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Instant Responses</h3>
                    <p className="text-gray-600">Get quick, accurate answers to your questions in real-time.</p>
                </div>
                
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Always Learning</h3>
                    <p className="text-gray-600">Our AI continuously improves to provide better and more relevant responses.</p>
                </div>
            </section> */}

            {/* How to Use Section */}
            {/* <section className="text-center py-16 bg-gray-50 rounded-lg">
                <h2 className="text-3xl font-bold mb-8">How to Use</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-black text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">1</div>
                        <h3 className="font-semibold mb-2">Click the Chat Button</h3>
                        <p className="text-gray-600">Look for the chat icon in the bottom right corner</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-black text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">2</div>
                        <h3 className="font-semibold mb-2">Start Typing</h3>
                        <p className="text-gray-600">Type your question or message in the chat input</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-black text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">3</div>
                        <h3 className="font-semibold mb-2">Get Responses</h3>
                        <p className="text-gray-600">Receive intelligent, helpful responses from our AI</p>
                    </div>
                </div>
            </section> */}

            {/* Chatbot Scripts */}
            <Script id="chatbot-config" strategy="beforeInteractive">
                {`
                    window.chatbotConfig = {
                        title: 'Simon Young\'s AI Assistant',
                        primaryColor: '#374151',
                        backgroundColor: '#FFFFFF',
                        textColor: '#374151',
                        buttonColor: '#374151',
                        buttonIconColor: '#FFFFFF',
                        tooltipTheme: 'white-gray',
                        buttonSize: 'small',
                        position: 'bottom-right',
                        startingQuestions: [
                            'Do I need a referral to see Simon?',
                            'Can I eat/drink on the morning of surgery?',
                        ],
                    };
                `}
            </Script>
            <Script
                src="https://storagefiosdev.blob.core.windows.net/public/fios-chatbot.prod.js"
                strategy="afterInteractive"
            />
        </div>
    );
}
