// import { works } from "@/data/works";

// export default async function WorkDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   const work = works.find((w) => w.id === id);

//   if (!work) return <div>Not Found</div>;

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

//       {/* Description */}
//       <section>
//         <h2 className="text-2xl font-semibold">概要</h2>
//         <p className="mt-3 whitespace-pre-line leading-relaxed">
//           {work.description}
//         </p>
//       </section>

//       {/* Outline */}
//       {work.outline && (
//         <section>
//           <h2 className="text-2xl font-semibold">Outline（アプリ概要）</h2>
//           <p className="mt-3 whitespace-pre-line leading-relaxed">
//             {work.outline}
//           </p>
//         </section>
//       )}

//       {/* Overview / Objectives */}
//       <section>
//         <h2 className="text-2xl font-semibold">Objectives</h2>
//         <p className="mt-3 whitespace-pre-line leading-relaxed">
//           {work.overview}
//         </p>
//       </section>

//       {/* Architecture */}
//       {work.architecture && (
//         <section>
//           <h2 className="text-2xl font-semibold">アーキテクチャ図</h2>
//           <pre className="mt-3 p-4 bg-gray-900 text-green-300 rounded-lg overflow-auto text-sm leading-relaxed whitespace-pre">
//             {work.architecture}
//           </pre>
//         </section>
//       )}

//       {/* Key Features */}
//       <section>
//         <h2 className="text-2xl font-semibold">Key Features</h2>
//         <ul className="list-disc ml-6 mt-3 space-y-1">
//           {work.features?.map((f) => (
//             <li key={f}>{f}</li>
//           ))}
//         </ul>
//       </section>

//       {/* Tech Stack */}
//       <section>
//         <h2 className="text-2xl font-semibold">技術スタック</h2>
//         <div className="mt-4 space-y-3">
//         <p><strong>Framework:</strong> {work.techStack?.framework?.join(", ") || "N/A"}</p>
// <p><strong>Languages:</strong> {work.techStack?.languages?.join(", ") || "N/A"}</p>
// <p><strong>Styling:</strong> {work.techStack?.styling?.join(", ") || "N/A"}</p>
// <p><strong>Build Tool:</strong> {work.techStack?.build?.join(", ") || "N/A"}</p>
// <p><strong>Testing:</strong> {work.techStack?.testing?.join(", ") || "N/A"}</p>
// <p><strong>Deploy:</strong> {work.techStack?.deploy?.join(", ") || "N/A"}</p>
// <p><strong>CMS:</strong> {work.techStack?.cms?.join(", ") || "N/A"}</p>

//         </div>
//       </section>

//       {/* microCMS リッチテキスト */}
//       {work.richTextNote && (
//         <section>
//           <h2 className="text-2xl font-semibold">リッチテキスト対応</h2>
//           <p className="mt-3 whitespace-pre-line leading-relaxed">
//             {work.richTextNote}
//           </p>
//         </section>
//       )}

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

//       {/* Footer */}
//       <footer className="text-gray-500">
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
      {/* ヒーローセクション */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px]">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      {/* コンテンツ */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 -mt-20 relative z-10">
        {/* タイトルカード */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-16">
          <p className="text-sm text-gray-500 mb-3">{work.category}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {work.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
            {work.description}
          </p>
        </div>

        {/* Outline */}
        {work.outline && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Outline
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {work.outline}
            </p>
          </section>
        )}

        {/* Objectives */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Objectives
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {work.overview}
          </p>
        </section>

        {/* Architecture */}
        {work.architecture && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              アーキテクチャ図
            </h2>
            <div className="bg-gray-900 rounded-xl p-6 overflow-auto">
              <pre className="text-green-400 text-sm leading-relaxed whitespace-pre">
                {work.architecture}
              </pre>
            </div>
          </section>
        )}

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <ul className="space-y-3">
            {work.features?.map((f) => (
              <li key={f} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            技術スタック
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Framework", value: work.techStack?.framework },
              { label: "Languages", value: work.techStack?.languages },
              { label: "Styling", value: work.techStack?.styling },
              { label: "Build Tool", value: work.techStack?.build },
              { label: "Testing", value: work.techStack?.testing },
              { label: "Deploy", value: work.techStack?.deploy },
              { label: "CMS", value: work.techStack?.cms },
            ].map(
              (item) =>
                item.value && (
                  <div key={item.label} className="border-l-4 border-gray-900 pl-4">
                    <p className="text-sm font-semibold text-gray-500 mb-1">
                      {item.label}
                    </p>
                    <p className="text-gray-900">{item.value.join(", ")}</p>
                  </div>
                )
            )}
          </div>
        </section>

        {/* Rich Text Note */}
        {work.richTextNote && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              リッチテキスト対応
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {work.richTextNote}
            </p>
          </section>
        )}

        {/* UX */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            UX 改善ポイント
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {work.ux}
          </p>
        </section>

        {/* Next Step */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Next Step
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {work.nextStep}
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8 pb-16 text-sm text-gray-600">
          <div className="grid sm:grid-cols-2 gap-3">
            <p><span className="font-semibold">期間：</span>{work.period}</p>
            <p><span className="font-semibold">クライアント：</span>{work.client}</p>
            <p><span className="font-semibold">役割：</span>{work.roles.join(", ")}</p>
            <p><span className="font-semibold">チーム：</span>{work.team}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}