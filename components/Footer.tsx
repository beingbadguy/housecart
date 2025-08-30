export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold text-white">HouseKart</h1>
          <p className="mt-2 text-sm text-gray-300">
            Find your dream home with ease. Buy • Rent • Sell — all in one
            place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Buy</li>
            <li className="hover:text-white cursor-pointer">Rent</li>
            <li className="hover:text-white cursor-pointer">Sell</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-white">Get in Touch</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: support@housekart.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: New Delhi, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} HouseKart. All rights reserved.
      </div>
    </footer>
  );
}
