import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* ====== 上部：プロフィール画像グリッド ====== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <Image src="/about1.jpg" alt="photo1" width={400} height={400} className="rounded-xl" />
        <Image src="/about2.jpg" alt="photo2" width={400} height={400} className="rounded-xl" />
        <Image src="/about3.jpg" alt="photo3" width={400} height={400} className="rounded-xl" />
        <Image src="/about4.jpg" alt="photo4" width={400} height={400} className="rounded-xl" />
      </div>

      {/* ====== About Me セクション ====== */}
      <h1 className="text-4xl font-bold mb-6">about Me</h1>

      <h2 className="text-2xl font-semibold">Kazutora Hattori</h2>
      <p className="text-gray-600 mb-10">Fullstack Webdeveloper</p>

      <p className="leading-7 text-gray-700 max-w-3xl">
        東京生まれ。好奇心が強く、興味を持つととことん追求するタイプ。
        現在はカナダ・バンクーバーにてフルスタック開発・UI/UX改善・
        QAテスト・コンポーネント設計など幅広く活動。
        <br /><br />
        学生・留学生向けアプリ開発、API連携、地図アプリ、
        microCMSを用いた運用性の高いWebサイト開発、アクセシビリティ改善などを中心に取り組んでいる。
      </p>
    </div>
  );
}
