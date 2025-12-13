import { works } from "@/data/works";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ReactNode } from "react";

// =========================
//  Markdown コンポーネント定義
// =========================
const markdownComponents: {
  [key: string]: React.FC<{ children: ReactNode }>;
} = {
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
  ),

  li: ({ children }) => (
    <li className="ml-6 list-disc text-lg leading-relaxed">{children}</li>
  ),

  code: ({ children }) => (
    <code className="bg-gray-900 text-green-400 px-2 py-1 rounded text-sm">
      {children}
    </code>
  ),

  pre: ({ children }) => (
    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg whitespace-pre overflow-x-auto mb-4 text-sm">
      {children}
    </pre>
  ),
};

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);

  if (!work) return <div>Not Found</div>;

  return (
    <div className="min-h-screen bg-white text-[17px] leading-snug tracking-wide">


{/* HERO IMAGE */}
{work.heroImage && (
  <div className="relative w-full h-[45vh] sm:h-[55vh] bg-gray-100">
    <Image
      src={work.heroImage}
      alt={work.title}
      fill
      className="object-cover"
      priority
    />
  </div>
)}



      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-12">

        {/* TITLE */}
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">{work.title}</h1>
          <p className="text-lg text-gray-600">{work.category}</p>
        </header>

        {/* DESCRIPTION */}
        {work.description && (
          <section className="mb-10">
            <p className="text-lg whitespace-pre-line leading-snug">
              {work.description}
            </p>
          </section>
        )}

        {/* META INFO */}
<section className="grid sm:grid-cols-2 gap-y-0.5 gap-x-3 mb-2 leading-[1.15]">
  {[
    { label: "使用言語", value: work.techStack?.languages },
    { label: "役割", value: work.roles },
    { label: "期間", value: work.period },
    { label: "チーム構成", value: work.team },
    { label: "クライアント", value: work.client },
    { label: "使用技術", value: work.techStack?.framework },
  ].map(
    (item) =>
      item.value && (
        <div key={item.label} className="space-y-0">
          <h3 className="text-xs font-semibold text-gray-500 leading-tight mb-0.5">
            {item.label}
          </h3>
          <p className="text-base leading-tight">
            {Array.isArray(item.value)
              ? item.value.join("、 ")
              : item.value}
          </p>
        </div>
      )
  )}
</section>


        {/* OUTLINE */}
        {work.outline && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-3">アプリケーション概要</h2>
            <p className="text-lg whitespace-pre-line leading-snug">{work.outline}</p>
          </section>
        )}

        {/* DETAIL IMAGES */}
        {/* {work.imagesDetail && (
          <section className="space-y-10 mb-12">
            {work.imagesDetail.map((img) => (
              <div key={img.src}>
                <h3 className="text-xl font-semibold mb-2">{img.label}</h3>
                <Image
                  src={img.src}
                  alt={img.label}
                  width={1200}
                  height={800}
                  className="rounded-md shadow"
                />
              </div>
            ))}
          </section>
        )} */}


        {work.imagesDetail && (
  <section className="space-y-10 mb-12">
    {work.imagesDetail.map((img) => (
      <div key={img.src} className="space-y-3">

        {/* タイトル（短文） */}
        {img.label && (
          <h3 className="text-xl font-semibold">{img.label}</h3>
        )}

        {/* 説明文（長文 OK） */}
        {img.description && (
          <p className="text-lg whitespace-pre-line leading-snug">
            {img.description}
          </p>
        )}

        {/* 画像 */}
        <Image
          src={img.src}
          alt={img.label}
          width={1200}
          height={800}
          className="rounded-md shadow"
        />
      </div>
    ))}
  </section>
)}



        {/* OBJECTIVES */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">開発の背景</h2>
          <p className="text-lg whitespace-pre-line leading-snug">{work.overview}</p>
        </section>

        {/* FEATURES */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">主要機能</h2>
          <p className="text-lg whitespace-pre-line leading-snug">{work.features}</p>
        </section>

        {/* TECH STACK */}
        {/* TECH STACK */}
{/* TECH STACK */} 
<section className="mb-12">
  <h2 className="text-2xl font-bold mb-4">技術スタック</h2>

  <div className="space-y-2">
    {[
      { label: "言語", value: work.techStack?.languages },
      { label: "フレームワーク", value: work.techStack?.framework },
      { label: "スタイリング", value: work.techStack?.styling },
      { label: "ビルド", value: work.techStack?.build },
      { label: "データベース", value: work.techStack?.database },
      { label: "テスト", value: work.techStack?.testing },
      { label: "デプロイ", value: work.techStack?.deploy },
      { label: "CMS", value: work.techStack?.cms },
      { label: "特記事項", value: work.techStack?.extra },
    ].map(
      (item) =>
        item.value && (
          <div key={item.label} className="flex items-start gap-4 py-1">
            <p className="w-32 text-sm text-gray-600">{item.label}</p>
            <p className="text-base leading-snug">
              {Array.isArray(item.value) ? item.value.join("、 ") : item.value}
            </p>
          </div>
        )
    )}
  </div>
</section>



        

        {/* ARCHITECTURE */}
        {/* {work.architecture && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-3">アーキテクチャ図</h2>

            {work.architectureImage && (
              <Image
                src={work.architectureImage}
                alt="Architecture"
                width={1200}
                height={800}
                className="rounded-md shadow mb-4"
              />
            )}

            <pre className="bg-gray-900 text-green-400 rounded-md p-4 whitespace-pre text-sm">
              {work.architecture}
            </pre>
          </section>
        )} */}


{/* new architecture */}
{(work.architectureImage || work.architecture) && (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-3">アーキテクチャ図</h2>

    {work.architectureImage && (
      <Image
        src={work.architectureImage}
        alt="Architecture"
        width={1200}
        height={800}
        className="rounded-md shadow mb-4"
      />
    )}

    {work.architecture && (
      <pre className="bg-gray-900 text-green-400 rounded-md p-4 whitespace-pre text-sm">
        {work.architecture}
      </pre>
    )}
  </section>
)}




        {/* UX — Markdown */}
        {work.ux && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-3">苦労と解決策</h2>

            <div className="prose max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {work.ux}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {/* GROWTH — Markdown */}
        {work.growth && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-3">成長したポイント (Growth)</h2>

            <div className="prose max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {work.growth}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {/* SUMMARY */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-3">まとめ</h2>
          <p className="text-lg whitespace-pre-line leading-snug">{work.nextStep}</p>
        </section>
      </div>
    </div>
  );
}
