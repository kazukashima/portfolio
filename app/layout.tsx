import Link from "next/link";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

// ==========================
// Qiita Icon (SVG)
// ==========================
const QiitaIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="#55C500"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.25 5.75c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25S10.5 15.69 10.5 15v-6c0-.69.56-1.25 1.25-1.25zm0 10c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
  </svg>
);

// ==========================
// Google Fonts
// ==========================
export const metadata = {
  title: "Kazutora Hattori Portfolio",
  description: "Developer & Designer in Vancouver",
};

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// ==========================
// Root Layout
// ==========================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={noto.className}>
      <body className="flex flex-col min-h-screen">

        {/* ===== Header ===== */}
        <header className="flex justify-between items-center px-10 py-6">
          <Link href="/" className="text-2xl font-bold">
            KAZUTORA HATTORI
          </Link>
          <nav>
            <Link href="/about" className="text-lg hover:opacity-70">
              Learn More About Me
            </Link>
          </nav>
        </header>

        {/* ===== Main ===== */}
        <main className="px-10 flex-grow">{children}</main>

        {/* ===== Footer ===== */}
        <footer className="mt-20 py-10 text-center text-gray-600 space-y-4 bg-blue-100">
          <div className="flex justify-center gap-6 text-3xl">

            {/* GitHub */}
            <a
              href="https://github.com/kazukashima"
              target="_blank"
              className="hover:opacity-70"
            >
              <FaGithub />
            </a>

            {/* X */}
            <a
              href="https://x.com/KazzTora1"
              target="_blank"
              className="hover:opacity-70"
            >
              <FaXTwitter />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kazutora-hattori-765177350/"
              target="_blank"
              className="hover:opacity-70"
            >
              <FaLinkedin />
            </a>

            {/* Qiita */}
            <a
              href="https://qiita.com/kazutorahattori"
              target="_blank"
              className="hover:opacity-70 text-xl flex items-center"
            >
              Qiita
            </a>
          </div>

          <p className="text-sm">© 2025 Kazutora Hattori</p>
        </footer>

      </body>
    </html>
  );
}
