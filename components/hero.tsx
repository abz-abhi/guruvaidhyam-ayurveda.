import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Use me as your
            <span className="block text-pink-500">landing page.</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl text-lg">
            A clean, focused landing page helps visitors understand your value
            quickly. Use clear headings, a short descriptive paragraph, and a
            prominent call to action to guide people toward the next step.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              id="cta"
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-0.5 transition"
              href="#"
            >
              Get started
            </a>
            <a
              className="text-pink-500 font-medium hover:underline"
              href="mailto:hello@example.com"
            >
              Email us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-lg overflow-hidden shadow-md rounded-xl">
            <Image
              src="/images/3d-delicious-food-tet-vietnamese-new-year.jpg"
              alt="hero"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
