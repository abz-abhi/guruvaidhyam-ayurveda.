import Image from "next/image";
import React from "react";

const ProductPage: React.FC = () => {
  return (
    <div id="product" className="min-h-screen bg-white text-gray-800 mt-20">
      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-20">
        {/* Centered Headline */}
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Pure <span className="text-pink-500">Ayurvedic</span> Skincare{" "}
            <span className="text-pink-500">Handcrafted for You</span>
          </h1>
          <div className="w-36 h-1 bg-pink-200 rounded mt-4 mx-auto"></div>
        </header>

        {/* Feature Row 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Made With Ancient Ayurvedic Wisdom
            </h2>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              Each Guruvaidhyam product is carefully handcrafted using
              traditional Ayurvedic formulations. From lip balms to detan masks,
              every blend is prepared with natural herbs, cold-pressed oils, and
              zero chemicals — offering pure nourishment your skin deserves.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Image
              src="/images/feature1.jpg"
              alt="Ayurvedic handcrafted skincare"
              width={400}
              height={400}
              className="rounded-lg object-contain"
            />
          </div>
        </section>

        {/* Feature Row 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/feature2.jpg"
              alt="Natural skincare ingredients"
              width={400}
              height={400}
              className="rounded-lg object-contain"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Honest Ingredients. Visible Results.
            </h2>
            <p className="text-gray-500 max-w-xl leading-relaxed mb-6">
              We believe skincare should be simple, pure, and effective. That’s
              why our formulations use handpicked herbs trusted for generations.
              No artificial fragrances. No parabens. No harmful chemicals.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-pink-500 mt-1">●</div>
                <div className="text-gray-700">
                  Natural herbs & cold-pressed oils
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-pink-500 mt-1">●</div>
                <div className="text-gray-700">
                  Handcrafted in small batches
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-pink-500 mt-1">●</div>
                <div className="text-gray-700">
                  Gentle, chemical-free, and suitable for all skin types
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
