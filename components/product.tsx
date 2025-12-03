// ProductPage.tsx
import React from "react";

const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-20">
        {/* Centered Headline */}
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            React <span className="text-pink-500">landing</span> page <span className="text-pink-500">2021</span>
          </h1>
          <div className="w-36 h-1 bg-pink-200 rounded mt-4 mx-auto"></div>
        </header>

        {/* Feature Row 1: text left, image right */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl font-bold text-gray-900 mb-4">A plug n play template</h2>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              Just edit the config.json file with details about your company and voila your beautiful state of the art landing page is ready to go live! Remember to also update your assets, add any images you want to show to /assets/images and link them in the config.json.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img src="/product-illustration-1.svg" alt="feature" className="w-64 md:w-80 lg:w-96 object-contain" />
          </div>
        </section>

        {/* Feature Row 2: image left, text right */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img src="/product-illustration-2.svg" alt="feature" className="w-64 md:w-80 lg:w-96 object-contain" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Make it your own!</h2>
            <p className="text-gray-500 max-w-xl leading-relaxed mb-6">
              Play around with the theme file and configure the color palette to match the branding of your company! If you're feeling wild, maybe change some tailwind css as well.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-pink-500 mt-1">●</div>
                <div className="text-gray-700">Color palette configuration</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-pink-500 mt-1">●</div>
                <div className="text-gray-700">Custom banner images</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
