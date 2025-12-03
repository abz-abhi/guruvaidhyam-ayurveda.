export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-pink-500 font-semibold uppercase text-sm tracking-wider">
            Latest & greatest
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            All the best technologies out there!
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable English.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-12 w-12 rounded-md border-2 border-pink-200 flex items-center justify-center text-pink-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-7.5 4 2-7L1 9h7l2-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">React.js</h3>
              <p className="text-gray-500 text-sm mt-1">React is a free and open-source front-end JavaScript library for building user interfaces or UI components.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0 h-12 w-12 rounded-md border-2 border-pink-200 flex items-center justify-center text-pink-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a7 7 0 0 0 0-6" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Tailwind</h3>
              <p className="text-gray-500 text-sm mt-1">Tailwind CSS is a highly customizable, low-level CSS framework for quickly creating beautiful designs without any opinionated stylesheet nonsense.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0 h-12 w-12 rounded-md border-2 border-pink-200 flex items-center justify-center text-pink-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Next.js</h3>
              <p className="text-gray-500 text-sm mt-1">Next.js is a framework for server-rendered React applications using Next.js.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0 h-12 w-12 rounded-md border-2 border-pink-200 flex items-center justify-center text-pink-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" />
                <path d="M5 12h14" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Typescript</h3>
              <p className="text-gray-500 text-sm mt-1">TypeScript is a programming language developed and maintained by Microsoft.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
