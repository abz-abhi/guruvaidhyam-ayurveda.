import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-800 py-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Brand Logo */}
        <div className="mb-6">
          <Image
            src="/logo/552272882_17844576087575966_6653134190890368995_n (1).jpg"
            alt="GuruvAidhyam Ayurveda"
            width={40}
            height={40}
            className="w-16 h-16 mx-auto rounded-full"
            priority
          />
        </div>

        {/* About Text */}
        <p className="max-w-2xl mx-auto text-gray-600 text-sm leading-relaxed mb-8">
          GuruvAidhyam Ayurveda creates{" "}
          <span className="text-pink-600 font-semibold">
            handcrafted natural skincare
          </span>
          rooted in ancient Ayurvedic wisdom. Experts in{" "}
          <span className="font-medium">
            Lifestyle Disorders, Spine–Joint Care & Gynaecology
          </span>
          , we bring you pure, herbal beauty with a divine touch.
        </p>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="flex justify-center gap-10 text-sm text-gray-700">
            <li className="hover:text-pink-500 cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Products</li>
            <li className="hover:text-pink-500 cursor-pointer">About Us</li>
            <li className="hover:text-pink-500 cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:opacity-80 transition"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm13 5.5v9c0 1.9-1.6 3.5-3.5 3.5h-9C5.6 20 4 18.4 4 16.5v-9C4 5.6 5.6 4 7.5 4h9C18.4 4 20 5.6 20 7.5zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm4.3-8.9a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:opacity-80 transition"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.3-1.5a10 10 0 1 0 4.7-18.5zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm4.2-5.8c-.2-.1-1.3-.6-1.5-.6s-.3-.1-.5.2c-.2.3-.6.6-.7.8-.1.1-.3.1-.5 0s-1-.4-1.8-1.2c-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.2-.5.2-.2.3-.4.4-.6.1-.1 0-.3 0-.4l-.6-1.4c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.8.3s-.8.8-.8 2c0 1.2.9 2.4 1 2.5.1.1 1.7 2.6 4.2 3.7.6.3 1.1.5 1.4.6.6.2 1.2.2 1.6.1.5-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.2-.1-.4-.2z" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:opacity-80 transition"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.6 3.2H4.4A4.4 4.4 0 0 0 0 7.6v8.8a4.4 4.4 0 0 0 4.4 4.4h15.2a4.4 4.4 0 0 0 4.4-4.4V7.6a4.4 4.4 0 0 0-4.4-4.4zM9.8 15.6V8.4L15.8 12l-6 3.6z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} GuruvAidhyam Ayurveda — Handcrafted
          Natural Skincare
        </p>
      </div>
    </footer>
  );
}
