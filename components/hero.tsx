export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Use me as your
            <span className="block text-pink-500">landing page.</span>
          </h1>

          <p className="mt-6 text-gray-500 max-w-xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              id="cta"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow"
              href="#"
            >
              Get started
            </a>
            <a
              className="text-pink-500 font-medium"
              href="mailto:hello@example.com"
            >
              Email us
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end ">
          <div className="w-full max-w-md lg:max-w-lg rotate-card overflow-hidden">
            <img
              src="/globe.svg"
              alt="hero"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
