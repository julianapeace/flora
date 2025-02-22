export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      {/* Navigation */}
      <nav className="bg-transparent absolute w-full z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-green-600 text-2xl font-bold">🌱 askFlora</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600">Features</a>
              <a href="#about" className="text-gray-600 hover:text-green-600">About</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Splash Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-1">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            askFlora
          </h1>
          <p className="text-2xl md:text-4xl text-gray-600 mb-4 font-light">
            Your AI Plant Care Companion
          </p>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Get expert advice for your plants, track their growth, and join a community of plant enthusiasts
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition duration-300 shadow-lg">
            Start Growing Together
          </button>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <a href="#features" className="text-gray-400 hover:text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose askFlora?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:bg-green-50 rounded-xl transition duration-300">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">Expert Plant Care</h3>
              <p className="text-gray-600">Get personalized advice for your specific plant needs</p>
            </div>
            <div className="text-center p-6 hover:bg-green-50 rounded-xl transition duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant Answers</h3>
              <p className="text-gray-600">No more waiting - get solutions in seconds</p>
            </div>
            <div className="text-center p-6 hover:bg-green-50 rounded-xl transition duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Always Available</h3>
              <p className="text-gray-600">Access plant care guidance anytime, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to become a better plant parent?</h2>
          <p className="text-xl text-white/90 mb-8">Join thousands of plant enthusiasts who trust askFlora for their plant care needs.</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
            Join Now
          </button>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-green-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-green-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V8.192C10 6.18 10.858 5 13.415 5H15v3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-green-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-400">&copy; 2025 askFlora. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}