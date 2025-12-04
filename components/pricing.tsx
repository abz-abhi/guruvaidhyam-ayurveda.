export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-pink-500">
            Our Best Offers
          </h2>
          <div className="mt-3 h-1 w-40 bg-pink-100 mx-auto rounded"></div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Trial Pack */}
          <div className="bg-white border border-gray-100 rounded-md shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-700 text-center">
              Trial Pack
            </h3>

            <div className="mt-4 border-t border-gray-100">
              <ul className="divide-y divide-gray-100">
                <li className="py-4 text-center text-gray-500">
                  ✔ 1 small-size product
                </li>
                <li className="py-4 text-center text-gray-500">
                  ✔ Suitable for first-time users
                </li>
                <li className="py-4 text-center text-gray-500">
                  ✔ 100% Ayurvedic formula
                </li>
                <li className="py-4 text-center text-gray-500">
                  ✔ Free skin-type guidance
                </li>
              </ul>
            </div>

            <div className="pt-6 text-center">
              <p className="text-2xl font-bold text-gray-800">
                ₹0{" "}
                <span className="font-normal text-gray-600">Trial Sample</span>
              </p>
            </div>
          </div>

          {/* Best Seller - highlighted */}
          <div className="relative -mt-6 md:mt-0 md:scale-105 z-10 md:shadow-lg">
            <div className="bg-white border border-pink-100 rounded-md p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-center text-pink-500">
                Glow Combo Pack
              </h3>

              <div className="mt-4 border-t border-pink-100">
                <ul className="divide-y divide-pink-50">
                  <li className="py-4 text-center text-pink-500">
                    ✔ 2 full-size products
                  </li>
                  <li className="py-4 text-center text-pink-500">
                    ✔ Best for daily skincare routine
                  </li>
                  <li className="py-4 text-center text-pink-500">
                    ✔ Based on ancient Ayurvedic formulas
                  </li>
                  <li className="py-4 text-center text-pink-500">
                    ✔ Personalized usage instructions
                  </li>
                </ul>
              </div>

              <div className="pt-6 text-center">
                <p className="text-3xl font-extrabold text-pink-500">
                  ₹899{" "}
                  <span className="text-base font-medium text-gray-500">
                    Combo Price
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Family Pack */}
          <div className="bg-white border border-gray-100 rounded-md shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-gray-700 text-center">
              Family Pack
            </h3>

            <div className="mt-4 border-t border-gray-100">
              <ul className="divide-y divide-gray-100">
                <li className="py-4 text-center text-gray-500">
                  ✔ 5 full-size products
                </li>
                <li className="py-4 text-center text-gray-500">
                  ✔ Ideal for long-term use
                </li>
                <li className="py-4 text-center text-gray-500">
                  ✔ Special family skincare guide
                </li>
                <li className="py-4 text-center text-gray-500">
                  ✔ Priority WhatsApp support
                </li>
              </ul>
            </div>

            <div className="pt-6 text-center">
              <p className="text-2xl font-bold text-gray-800">
                ₹1999{" "}
                <span className="font-normal text-gray-600">Full Pack</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
