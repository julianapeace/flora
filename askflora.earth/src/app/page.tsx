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

          {/* Social Media Links */}
          <div className="flex space-x-8 mt-8">
            <a href="http://x.com/askfloraearth" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="https://t.me/askFloraBot" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a href="https://github.com/julianapeace/flora" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-green-400 transition duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.385-.403.8-.552 1.163a16.73 16.73 0 0 0-4.962 0 10.63 10.63 0 0 0-.56-1.163.077.077 0 0 0-.079-.036 19.793 19.793 0 0 0-4.885 1.491.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 19.997 19.997 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.372.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.028 19.92 19.92 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.42 0-1.338.956-2.42 2.157-2.42 1.21 0 2.176 1.09 2.157 2.42 0 1.334-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.338.955-2.42 2.157-2.42 1.21 0 2.176 1.09 2.157 2.42 0 1.334-.946 2.42-2.157 2.42z"></path>
              </svg>
              <span className="ml-1 text-xs">Coming Soon</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}