export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-pink-500 font-semibold uppercase text-sm tracking-wider">
            Why Choose Guruvaidhyam
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            Pure. Handcrafted. Ayurvedic.
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Every product at Guruvaidhyam is made using traditional Ayurvedic
            formulations combined with pure, natural ingredients. Our goal is
            simple—deliver skincare that is gentle, effective, and truly
            chemical-free.
          </p>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-12 w-12 rounded-md border-2 border-pink-200 flex items-center justify-center text-pink-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-7.5 4 2-7L1 9h7l2-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Handcrafted With Care
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Every batch is prepared manually in small quantities to maintain
                purity, freshness, and authentic Ayurvedic quality.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-12 w-12 rounded-md border-2 border-pink-200 flex items-center justify-center text-pink-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a7 7 0 0 0 0-6" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                100% Natural Ingredients
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                We use pure herbs, cold-pressed oils, and natural extracts—no
                parabens, no sulfates, no artificial fragrances.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-12 w-12 rounded-md border-2 border-pink-200 flex items-center justify-center text-pink-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Ayurvedic Formulations
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Our recipes follow traditional Ayurvedic principles to promote
                natural healing, nourishment, and skin wellness.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 h-12 w-12 rounded-md border-2 border-pink-200 flex items-center justify-center text-pink-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M5 12h14" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Safe for All Skin Types
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Gentle, chemical-free, and crafted to nourish even sensitive
                skin. Perfect for daily skin and lip care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
