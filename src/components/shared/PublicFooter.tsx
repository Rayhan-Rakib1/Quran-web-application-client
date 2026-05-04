import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-white text-lg font-semibold">
              Quran App
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              A modern Quran reading experience with Arabic text, translation,
              and audio recitation. Built for learning and accessibility.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-medium mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Surahs</Link></li>
              <li><Link href="/search" className="hover:text-white">Search</Link></li>
              <li><Link href="/audio" className="hover:text-white">Audio</Link></li>
              <li><Link href="/settings" className="hover:text-white">Settings</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  className="hover:text-white"
                >
                  GitHub Repo
                </a>
              </li>
              <li>
                <a
                  href="https://api.quran.com"
                  target="_blank"
                  className="hover:text-white"
                >
                  Quran API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-medium mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Use</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">

          <p>
            © {year} Quran App. All rights reserved.
          </p>

          <p className="mt-2 sm:mt-0">
            Built with Next.js • TypeScript • Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;