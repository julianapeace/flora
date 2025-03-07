export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner Section with Flora's Banner Image */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Banner background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://pbs.twimg.com/profile_banners/1875136496103272448/1741325704/1500x500')",
              filter: "brightness(0.7)"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 z-10 flex flex-col items-center">
          {/* Flora's profile image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8">
            <img
              src="https://pbs.twimg.com/profile_images/1897883653977587712/5CdHSTYu_400x400.jpg"
              alt="askFlora"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-green-50 mb-6 font-['Montserrat']">
            askFlora
          </h1>
          <p className="text-2xl md:text-4xl text-green-100 mb-4 font-light font-['Quicksand']">
            Your AI Plant Care Companion
          </p>
          <p className="text-lg md:text-xl text-green-200 mb-6 text-center max-w-2xl font-light font-['Quicksand']">
            Powered by DeSci: Aggregating research from soil scientists and university studies into an accessible AI interface
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-8 mt-8">
            <a href="http://x.com/askfloraearth" target="_blank" rel="noopener noreferrer" className="group">
              <svg className="w-8 h-8 text-white group-hover:text-green-300 transition-all duration-300 transform group-hover:scale-110 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="https://t.me/askFloraBot" target="_blank" rel="noopener noreferrer" className="group">
              <svg className="w-8 h-8 text-white group-hover:text-green-300 transition-all duration-300 transform group-hover:scale-110 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a href="https://github.com/julianapeace/flora" target="_blank" rel="noopener noreferrer" className="group">
              <svg className="w-8 h-8 text-white group-hover:text-green-300 transition-all duration-300 transform group-hover:scale-110 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="group">
              <div className="flex items-center group-hover:bg-black/20 px-3 py-1 rounded-full">
                {/* Heart in Hand (Universal Charity/Fundraising Symbol) */}
                <svg className="w-8 h-8 text-white group-hover:text-green-300 transition-all duration-300 transform group-hover:scale-110 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 1.56-.59 2.98-1.55 4.15C19.53 14.26 18 15.5 12 21.35z" />
                </svg>
                <span className="ml-2 text-xs text-white group-hover:text-green-300 transition-all duration-300">Support DeSci Research</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}