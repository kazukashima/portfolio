import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <div className="pb-20">

      {/* ====== 上部：プロフィール画像グリッド ====== */}
  {/* ====== 上部：プロフィール画像グリッド ====== */}
<div className="max-w-3xl mx-auto mb-20">
  <div className="flex items-center justify-center gap-6">

   
      {/* 1枚目（基準の高さ） */}
      <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-lg translate-y-0">
        <Image src="/about/image.png" alt="photo1" fill className="object-cover" />
      </div>

      {/* 2枚目（少しだけ下げる） */}
      <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-lg translate-y-6">
        <Image src="/about/IMG_0129.jpeg" alt="photo2" fill className="object-cover" />
      </div>

      {/* 3枚目（さらに下げる） */}
      <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-lg translate-y-12">
        <Image src="/about/IMG_0483.jpeg" alt="photo3" fill className="object-cover" />
      </div>

      {/* 4枚目（一番下） */}
      <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-lg translate-y-20">
        <Image src="/about/IMG_0690.jpeg" alt="photo4" fill className="object-cover" />
      </div>

  </div>
</div>





      {/* ====== About Me ====== */}
     {/* ====== About Me ====== */}
<div className="max-w-3xl mx-auto space-y-16 leading-relaxed text-gray-800">

  <header className="text-center">

    {/* タイトル */}
    <h1 className="text-5xl font-extrabold tracking-tight mb-6">
      About Me
    </h1>

    {/* 名前 */}
    <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-2">
      服部 和虎<br />
      <span className="text-xl font-medium text-gray-700">Kazutora Hattori</span>
    </h2>

    {/* 肩書き */}
    <p className="text-lg text-indigo-600 font-medium">
      Full-Stack Developer
    </p>

  </header>


        {/* ===== Introduction ===== */}
        <section className="space-y-6">
          <p>
            東京生まれ。システム開発によって業務が大幅に効率化される場面を目の当たりにし、「技術で物事をより良く変えていく仕事がしたい」と感じたことをきっかけにエンジニアを目指す。大学卒業後は、バックエンドエンジニアとしてIT企業で開発業務に従事。
          </p>

          <p>
          一方で、バックエンドエンジニアとして、日本で働く中で、“エンジニアがプロダクト全体の価値や意思決定に踏み込める機会が少ない”という構造的な課題も感じるようになりました。
          </p>

          <p>
            海外のエンジニアとの交流を通して、北米では、エンジニア自身がプロダクト価値の最大化を主体的に考え、自由に意見を交わしながら開発を進める文化が根付いていることを知り、こうした環境を実際に経験し、得た知見を日本のIT業界に還元したいと考え、現在はカナダ・バンクーバーの大学 CCTB でフルスタック Web 開発を学んでいます。
          </p>

          <p>趣味は海外旅行。左から2番目の写真は香港、3、4枚目はカナダ・バンクーバーで撮影したものです。</p>
        
<div className="max-w-3xl mx-auto my-8">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Links</h3>

  <div className="flex items-center gap-6 text-3xl">

    {/* GitHub */}
    <a
      href="https://github.com/kazukashima"
      target="_blank"
      className="hover:opacity-70 transition"
    >
      <FaGithub />
    </a>

    {/* X */}
    <a
      href="https://x.com/KazzTora1"
      target="_blank"
      className="hover:opacity-70 transition"
    >
      <FaXTwitter />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/kazutora-hattori-765177350/"
      target="_blank"
      className="hover:opacity-70 transition text-blue-700"
    >
      <FaLinkedin />
    </a>

    {/* Qiita */}
    <a
      href="https://qiita.com/kazutorahattori"
      target="_blank"
      className="hover:opacity-70 transition text-xl font-bold text-green-600"
    >
      Qiita
    </a>

  </div>
</div>

        </section>
        {/* ===== What kind of engineer I am ===== */}
<section className="space-y-4 mt-8">
  <h3 className="text-2xl font-semibold">What kind of engineer I am</h3>

  <p>
    私は “動くものを作ること” と “人の課題を理解すること” の両方が好きな、
    プロダクト思考の強いエンジニアです。
  </p>

  <ul className="list-disc ml-6 space-y-1">
    <li>新しい技術を試し、まず動くプロトタイプを作る</li>
    <li>チームメンバーとの会話から課題を深く理解する</li>
    <li>ユーザーの視点で UI/UX を改善する</li>
    <li>問題が起きたときは自分ごととして原因から探る</li>
  </ul>

  <p>
    こうしたプロセスを大切にしながら、技術と体験の両面からプロダクトを育てていくことに喜びを感じるエンジニアです。
  </p>
</section>


{/* ===== Future Goals ===== */}
<section className="space-y-4 mt-12">
  <h3 className="text-2xl font-semibold">Future Goals — My Personal Vision as an Engineer</h3>

  <p>
    私は、北米で学んだ開発文化と実践的な技術力を土台に、価値がユーザーに確かに届くプロダクトを自ら設計し、実装し、育てていけるエンジニア を目指しています。React / Next.jsを中心としたフロントエンドから、SupabaseやAWSを用いたAPI・インフラ構築、CI/CD による自動化までを一貫して扱える力を伸ばしつつ、UX に対する理解も深めています。
</p>


  <p>
    将来的には、カナダで得た「エンジニアが主体的に価値を生む」という文化や実務経験を日本のIT業界に還元し、「世界で戦うことのできる」日本のITプロダクトの開発に貢献したいと考えています。
  </p>

  <h3 className="text-2xl font-semibold">Future Goals — Team / Leadership</h3>

  <p>
    現在行っているカナダの企業でのボランティアでは、4人チームをまとめるリーダーを経験し、「技術だけでなく、チームの進み方そのものを整えること」の重要性を実感しました。
  </p>

  <p>
    タスク分解、Issue 管理、UI/UX 改善、オンボーディング支援、Slack での調整など、プロジェクトを前へ進める役割を幅広く担ってきました。今後は、コードだけでなく「チームが迷わず動ける環境づくり」でも価値を出したいと考えています。
  </p>
</section>


{/* ===== How others describe me ===== */}
<section className="space-y-4 mt-12">
  <h3 className="text-2xl font-semibold">How others describe me</h3>

  <p>
    "Your diligence, curiosity, and strong sense of ownership, combined with how you support the entire team, will undoubtedly be key to your future success."
  </p>

  <p className="text-gray-700">
    以上の言葉は、現在の大学の先生からいただいた言葉です。私は、自分のタスクだけに留まらず、周囲が迷わず前に進めるように情報整理・調査・課題共有など、チーム全体の生産性が上がる行動を意識しています。同時に、プロダクトに対して強い責任感と誇りを持ち、「届けたい価値」がぶれないよう大切にしながら、ユーザーにとって本当に役立つものを作ることを心がけています。
  </p>
</section>


{/* ===== History ===== */}
<section className="space-y-4 mt-12">
  <h3 className="text-2xl font-semibold">History</h3>

  <div>
    <p className="font-semibold">Engineer / Full-Stack Developer（2025 – ）</p>
    <p className="mt-1 leading-7">
      現在はカナダの大学でフルスタックWeb開発を学びながら、React / TypeScript / Supabase / AWS を中心に実践的なスキルを習得。また、現在行っているカナダの企業のボランティアでは学習支援アプリの UI/UX 改善とアクセシビリティ向上を担当し、4名チームのリーダーとしてタスク整備やスプリント計画も行なっている。
    </p>
  </div>

  <div>
    <p className="font-semibold">Backend Engineer（2024 – ）</p>
    <p className="mt-1 leading-7">
      バックエンドエンジニアとして社内向け人事管理システムの改修・保守を担当。コード修正・ドキュメント整備・不具合調査を中心に取り組む。
    </p>
  </div>
</section>


{/* ===== Articles ===== */}
<section className="mt-12">
  <h3 className="text-2xl font-semibold mb-2">Selected Articles</h3>

  <ul className="list-disc ml-6 space-y-2">
    <li>
      <a
        href="https://qiita.com/kazutorahattori/items/b79304ceafae157ba86c"
        className="text-blue-600 underline hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        【個人開発】勉強に集中できる場所が見つからない問題を解決する地図アプリを個人開発した【React/Supabase】
      </a>
    </li>
  </ul>
</section>

      </div>
    </div>
  );
}
