import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-8 drop-shadow-lg">
            Direto do Campo
          </h1>
          <p className="text-2xl mb-8 drop-shadow-md">
            Seu site está funcionando!
          </p>
          <div className="space-x-4">
            <a 
              href="#sobre" 
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-green-100 transition-all duration-300"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App