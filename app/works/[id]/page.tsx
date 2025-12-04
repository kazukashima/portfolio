// import { works } from "@/data/works";
// import parse from "html-react-parser";

// export default async function WorkDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;

//   const work = works.find((w) => w.id === id);

//   if (!work) {
//     return <div>Not Found</div>;
//   }

//   return (
//     <div className="p-10 max-w-4xl mx-auto space-y-16">
//       {/* タイトル */}
//       <header>
//         <h1 className="text-4xl font-bold">{work.title}</h1>
//         <p className="mt-3 text-gray-600">{work.category}</p>
//       </header>

//       {/* メイン画像 */}
//       <img
//         src={work.image}
//         alt={work.title}
//         className="w-full max-w-3xl mx-auto rounded-lg shadow"
//       />

//       {/* Overview */}
//       <section>
//         <h2 className="text-2xl font-semibold">Overview</h2>

//         {/* 画像一覧 */}
//         {work.images && work.images.length > 0 && (
//           <div className="mt-4 space-y-4">
//             {work.images.map((src) => (
//               <img
//                 key={src}
//                 src={src}
//                 alt={work.title}
//                 className="rounded-lg shadow"
//               />
//             ))}
//           </div>
//         )}

//         {/* Overview の本文 */}
//         <div className="mt-6 leading-relaxed">
//           {parse(work.overview)}
//         </div>
//       </section>

//       {/* Objectives */}
//       <section>
//         <h2 className="text-2xl font-semibold">Objectives</h2>
//         <p className="mt-3 whitespace-pre-line leading-relaxed">
//           {work.objectives}
//         </p>
//       </section>

//       {/* Key Features */}
//       <section>
//         <h2 className="text-2xl font-semibold">Key Features</h2>
//         <ul className="list-disc ml-6 mt-3 space-y-1">
//           {work.features?.map((f) => (
//             <li key={f}>{f}</li>
//           ))}
//         </ul>
//       </section>

//       {/* Gallery */}
//       {work.images && work.images.length > 0 && (
//         <section>
//           <h2 className="text-2xl font-semibold">Gallery</h2>
//           <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {work.images.map((img) => (
//               <img
//                 key={img}
//                 src={img}
//                 alt={`${work.title} image`}
//                 className="rounded-lg shadow"
//               />
//             ))}
//           </div>
//         </section>
//       )}

//       {/* 技術スタック */}
//       <section>
//         <h2 className="text-2xl font-semibold">技術スタック</h2>

//         <div className="mt-4 space-y-3">
//           <p>
//             <strong>Framework:</strong>{" "}
//             {work.techStack?.framework?.join(", ") || "N/A"}
//           </p>
//           <p>
//             <strong>Languages:</strong>{" "}
//             {work.techStack?.languages?.join(", ") || "N/A"}
//           </p>
//           <p>
//             <strong>Styling:</strong>{" "}
//             {work.techStack?.styling?.join(", ") || "N/A"}
//           </p>
//           <p>
//             <strong>Build Tool:</strong>{" "}
//             {work.techStack?.build?.join(", ") || "N/A"}
//           </p>
//           <p>
//             <strong>Testing:</strong>{" "}
//             {work.techStack?.testing?.join(", ") || "N/A"}
//           </p>
//           <p>
//             <strong>Deploy:</strong>{" "}
//             {work.techStack?.deploy?.join(", ") || "N/A"}
//           </p>
//           <p>
//             <strong>CMS:</strong>{" "}
//             {work.techStack?.cms?.join(", ") || "N/A"}
//           </p>

//           {work.techStack?.pdf && (
//             <p>
//               <strong>PDF:</strong> {work.techStack.pdf.join(", ")}
//             </p>
//           )}
//         </div>
//       </section>

//       {/* Parser Notes */}
//       <section>
//         <h2 className="text-2xl font-semibold">
//           microCMS リッチテキスト対応 / Parser Notes
//         </h2>
//         <p className="mt-3 whitespace-pre-line leading-relaxed">
//           {work.richTextNote}
//         </p>
//       </section>

//       {/* UX */}
//       <section>
//         <h2 className="text-2xl font-semibold">UX 改善ポイント</h2>
//         <p className="mt-3 whitespace-pre-line leading-relaxed">
//           {work.ux}
//         </p>
//       </section>

//       {/* Next Step */}
//       <section>
//         <h2 className="text-2xl font-semibold">Next Step</h2>
//         <p className="mt-3 whitespace-pre-line leading-relaxed">
//           {work.nextStep}
//         </p>
//       </section>

//       {/* フッター */}
//       <footer className="text-gray-500 space-y-1">
//         <p>期間：{work.period}</p>
//         <p>クライアント：{work.client}</p>
//         <p>役割：{work.roles.join(", ")}</p>
//         <p>チーム：{work.team}</p>
//       </footer>
//     </div>
//   );
// }


import { works } from "@/data/works";
import Image from "next/image";

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);

  if (!work) return <div>Not Found</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーロー画像 */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] bg-gray-100">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        
        {/* タイトルセクション */}
        <header className="mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {work.title}
          </h1>
          <p className="text-xl text-gray-600">{work.category}</p>
        </header>

        {/* 概要 */}
        <section>
          <p className="text-xl leading-relaxed whitespace-pre-line">
            {work.description}
          </p>
        </section>

        {/* メタ情報（使用言語、期間など） */}
        <section className="grid sm:grid-cols-2 gap-x-16 gap-y-8">
          <div>
            <h3 className="text-base font-semibold text-gray-500 mb-3">
              使用言語
            </h3>
            <p className="text-xl">
              {work.techStack?.languages?.join("、 ") || "N/A"}
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-500 mb-3">
              役割
            </h3>
            <p className="text-xl">{work.roles.join("、 ")}</p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-500 mb-3">
              期間
            </h3>
            <p className="text-xl">{work.period}</p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-500 mb-3">
              チーム構成
            </h3>
            <p className="text-xl">{work.team}</p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-500 mb-3">
              クライアント
            </h3>
            <p className="text-xl">{work.client}</p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-500 mb-3">
              使用技術
            </h3>
            <p className="text-xl">
              {work.techStack?.framework?.join("、 ") || "N/A"}
            </p>
          </div>
        </section>

        {/* Outline */}
        {work.outline && (
          <section>
            <h2 className="text-3xl font-bold mb-6">概要</h2>
            <p className="text-xl leading-relaxed whitespace-pre-line">
              {work.outline}
            </p>
          </section>
        )}

        {/* Objectives */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Objectives</h2>
          <p className="text-xl leading-relaxed whitespace-pre-line">
            {work.overview}
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <ul className="space-y-4">
            {work.features?.map((f) => (
              <li key={f} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-900 mt-3 mr-4 flex-shrink-0" />
                <span className="text-xl leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* microCMS リッチエディタ */}
        {work.richTextNote && (
          <section>
            <h2 className="text-3xl font-bold mb-6">
              microCMSのリッチエディタ内をCSSでどう装飾するか
            </h2>
            <p className="text-xl leading-relaxed whitespace-pre-line">
              {work.richTextNote}
            </p>
          </section>
        )}

        {/* 技術スタック */}
        <section>
          <h2 className="text-3xl font-bold mb-8">技術スタック</h2>
          <div className="space-y-6">
            {[
              { label: "フレームワーク", value: work.techStack?.framework },
              { label: "言語", value: work.techStack?.languages },
              { label: "スタイリング", value: work.techStack?.styling },
              { label: "ビルドツール / 開発環境", value: work.techStack?.build },
              { label: "テスト", value: work.techStack?.testing },
              { label: "デプロイ", value: work.techStack?.deploy },
              { label: "CMS", value: work.techStack?.cms },
            ].map(
              (item) =>
                item.value && (
                  <div key={item.label} className="flex items-baseline gap-8">
                    <p className="text-base font-medium text-gray-600 w-48 flex-shrink-0">
                      {item.label}
                    </p>
                    <p className="text-xl">{item.value.join("、 ")}</p>
                  </div>
                )
            )}
          </div>
        </section>

        {/* Architecture */}
        {work.architecture && (
          <section>
            <h2 className="text-3xl font-bold mb-6">アーキテクチャ図</h2>
            <div className="bg-gray-900 rounded-lg p-6 overflow-auto">
              <pre className="text-green-400 text-base leading-relaxed whitespace-pre">
                {work.architecture}
              </pre>
            </div>
          </section>
        )}

        {/* UX改善ポイント */}
        <section>
          <h2 className="text-3xl font-bold mb-6">UX 改善ポイント</h2>
          <p className="text-xl leading-relaxed whitespace-pre-line">
            {work.ux}
          </p>
        </section>

        {/* Next Step */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Next Step</h2>
          <p className="text-xl leading-relaxed whitespace-pre-line">
            {work.nextStep}
          </p>
        </section>
      </div>
    </div>
  );
}
