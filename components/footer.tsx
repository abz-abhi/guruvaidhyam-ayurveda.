export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-800 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* logo */}
        <div className="mb-6">
          <div style={{width: 44, height: 44, margin: '0 auto'}}>
            {/* simple circular ornamental logo similar to screenshot */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <circle cx="12" cy="12" r="10" stroke="#f25666" strokeWidth="1.6" fill="transparent" />
              <g stroke="#f25666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 6v12M6 12h12M7.5 7.5l9 9M16.5 7.5l-9 9" />
              </g>
            </svg>
          </div>
        </div>

        {/* nav links */}
        <nav className="mb-6">
          <ul className="flex justify-center gap-10 text-sm text-gray-600">
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
            <li>Something</li>
          </ul>
        </nav>

        {/* social icons */}
        <div className="mb-6 flex justify-center gap-6">
          {/* Github */}
          <a aria-label="github" href="#" className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .5C5.73.5.75 5.48.75 11.74c0 4.9 3.18 9.06 7.59 10.52.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.96-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 . ."/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a aria-label="linkedin" href="#" className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.49 6S0 4.88 0 3.5 1.1 1 2.49 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.67-1.2 2.3-2.2 4.7-2.2C22.8 8 24 10.2 24 14.3V24h-5v-8.6c0-2.1-.04-4.8-3-4.8-3 0-3.5 2.4-3.5 4.6V24H8V8z"/>
            </svg>
          </a>

          {/* Twitter */}
          <a aria-label="twitter" href="#" className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 0 0 1.84-2.31 8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.74A11.6 11.6 0 0 1 3.15 4.6a4.1 4.1 0 0 0 1.27 5.47c-.66 0-1.28-.2-1.82-.5v.05a4.1 4.1 0 0 0 3.28 4 4.2 4.2 0 0 1-1.83.07 4.1 4.1 0 0 0 3.82 2.85A8.22 8.22 0 0 1 2 19.54 11.6 11.6 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.68v-.53A8.36 8.36 0 0 0 22.46 6z"/>
            </svg>
          </a>
        </div>

        {/* copyright */}
        <div className="text-sm text-gray-600">
          <span>© 2025 designed by </span>
          <span className="text-pink-500">Issaaf Kattan</span>
        </div>
      </div>
    </footer>
  );
}
