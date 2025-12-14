import Link from "next/link";
import CaseCard from "@/components/CaseCard";
import { works } from "@/data/works";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      
      {/* Hero */}
      <section className="mb-28">
        <h1 className="text-6xl font-semibold leading-tight ">
    Frontend Developer Based in Vancouver.<br/>
    Hi, I'm Kazutora Hattori.
  </h1>

        {/* ==== About Me リンクは Hero 内に追加 ==== */}
        <div className="mt-8">
          <Link
            href="/about"
            className="inline-block text-lg font-medium underline underline-offset-4 hover:opacity-70"
          >
            Learn More About Me →
          </Link>
        </div>
        {/* ===================================== */}
      </section>

      {/* Case Studies */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Case Studies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {works.map((w) => (
            <CaseCard key={w.title} {...w} />
          ))}
        </div>
      </section>
    </main>
  );
}
