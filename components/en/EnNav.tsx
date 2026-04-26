const LINE_URL = 'https://line.me/R/ti/p/@952nqpbr'
const MESSENGER_URL = 'https://m.me/smplasticsurgery'

export default function EnNav() {
  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-[100]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/en/" className="flex items-center gap-3">
          <img
            src="/logo_smps.png"
            alt="SM Plastic Surgery"
            className="h-7 w-auto"
            style={{ filter: 'brightness(0.45) hue-rotate(208deg) saturate(2.2) contrast(1.1)' }}
          />
          <span className="text-sm font-semibold text-gray-800 hidden sm:block">SM Plastic Surgery</span>
        </a>
        <div className="flex items-center gap-3">
          <a href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors px-2 py-1 rounded border border-gray-200">
            日本語
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#06C755] text-white text-xs font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942z" />
            </svg>
            LINE
          </a>
          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0084FF] text-white text-xs font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
            </svg>
            Messenger
          </a>
        </div>
      </div>
    </header>
  )
}
