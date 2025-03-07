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

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            askFlora
          </h1>
          <p className="text-2xl md:text-4xl text-white mb-4 font-light">
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.05.01-.22-.08-.32-.09-.09-.23-.06-.33-.03-.14.03-2.24 1.42-3.3 2.11-.62.42-1.18.63-1.69.63-.56 0-1.62-.33-2.42-.6-.97-.3-1.75-.47-1.67-1.01.04-.27.36-.54.98-.83 3.93-1.7 6.55-2.83 7.87-3.39 3.77-1.6 4.56-.36 4.28.75z"></path>
              </svg>
            </a>
            <a href="http://discord.com/" className="text-white hover:text-green-400 transition duration-300">
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