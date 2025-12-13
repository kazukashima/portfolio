// data/works.ts
export type Work = {
  id: string;
  title: string;
  category: string;
  roles: string[];
  period: string;
  client: string;
  team: string;

  image: string;
  listImage?: string;
  heroImage?: string;

  description?: string;
  fullDescription?: string;
  overview?: string;
  outline?: string;
  objectives?: string;
  features?: string[];
  richTextNote?: string;
  ux?: string;
  growth?: string;
  nextStep?: string;

  techStack?: {
    languages?: string[];
    framework?: string[];
    styling?: string[];
    build?: string[];
    testing?: string[];
    deploy?: string[];
    cms?: string[];
    database?: string[];
    mapAPI?: string[];
    extra?: string[];
  };

  architecture?: string;
  architectureImage?: string;

  images?: string[];
  imagesDetail?: {
    label: string;
    src: string;
    description?: string;
    isGif?: boolean;
  }[];
};




export const works: Work[] = [

  // ============================
  // ① My Portfolio
  // ============================
//   {
//     id: "portfolio",
//     title: "My Portfolio",
//     category: "Webサイト / プロダクト紹介",
//     roles: ["Frontend Development", "UI Design"],
//     period: "2025/06 - 2025/07",
//     client: "個人制作",
//     team: "個人",

//     image: "/portfolio.jpg",

//     description: `
// 自分のプロダクトや経歴を「わかりやすく・美しく」伝えるために
// ゼロから設計したポートフォリオサイト。
// App Router ベースの Next.js を中心に、UI 設計と CMS 連携の両面を
// 高いレベルでまとめあげた。
//     `,

//     overview: `
// 前回のポートフォリオは HTML / CSS / jQuery による静的構成で、
// 案件を追加するたびにコード修正が必要だった。

// そこで今回のポートフォリオでは、
// Next.js（App Router）× microCMS を採用し、

// ・案件データ  
// ・自己紹介コンテンツ  
// ・スキルセット  

// をすべて CMS 側で管理できるようにした。
// 完全にノーコードで更新できるため、運用コストを大幅に削減した。
//     `,

//     objectives: `
// 本プロジェクトの目的は３つ。

// ① コンテンツ更新の自動化  
// ② UI / UX を最大限に改善  
// ③ 「プロダクト志向のエンジニア」としてのスキル証明  
//     `,

//     richTextNote: `
// html-react-parser を用いてリッチテキストを最適に描画できるようにカスタム。
//     `,

//     features: [
//       "Next.js App Router による動的ルーティング",
//       "microCMS 連携でコンテンツを自動取得",
//       "リッチテキストのカスタムパーサー実装",
//       "再利用可能なコンポーネント設計",
//       "レスポンシブ対応 UI / UX 改善",
//       "Turbopack による高速ビルド",
//     ],

//     techStack: {
//       framework: ["Next.js (App Router)"],
//       languages: ["React", "TypeScript"],
//       styling: ["Tailwind CSS"],
//       build: ["Turbopack"],
//       testing: ["Jest", "React Testing Library"],
//       deploy: ["Vercel"],
//       cms: ["microCMS"],
//     },

//     architecture: ``,

//     ux: `
// 白基調 × シンプル × 見やすいUI
//     `,

//     nextStep: `
// ・アニメーション導入（Framer Motion）
// ・英語 / 日本語の多言語対応
// ・SEO の最適化
//     `,
//   },


  // ============================
  // ② Qiita Downloader App
  // ============================
//  

// {
//   id: "qiita-downloader",
//   title: "Qiita Downloader App",
//   category: "Webアプリ / 自動化 / 生産性向上",
//   roles: ["Frontend Development", "UI Design", "API Integration"],
//   period: "2025/10 – 2025/11",
//   client: "個人開発",
//   team: "個人制作",

//   // ★ 一覧ページ用サムネイル（CaseCardで使用）
//   image: "/qiita-downloader/hero.png",


//   description: `
// Qiita の全記事を “一括でローカル保存” できる高速ダウンローダー。
// Markdown / PDF を自動生成し、技術資産を安全に手元に残せるようにした。
//   `,

//   overview: `
// Qiita Downloader App は、自分の Qiita 記事を一括で取得し、
// Markdown / PDF 形式でローカル保存できる自動化ツール。
//   `,

//   objectives: `
// ① Qiita の技術資産を安全にバックアップ  
// ② Qiita → Zenn など記事移行を高速化  
//   `,

//   richTextNote: `
// Qiita API から取得した本文を markdown → PDF に整形するパーサーを自作。
//   `,

//   features: [
//     "Qiita API を用いた記事の一括取得",
//     "Markdown / PDF の二形式で自動保存",
//     "並列処理による高速ダウンロード",
//     "タグ・投稿日・更新日などの完全保存",
//     "日付フォルダでの自動分類",
//     "UI の一画面完結・操作性改善",
//   ],

//   techStack: {
//     framework: ["Next.js (App Router)"],
//     languages: ["TypeScript", "React"],
//     styling: ["Tailwind CSS"],
//     build: ["Next.js (Turbopack)"],
//     testing: ["Jest", "React Testing Library"],
//     deploy: ["Vercel"],
//     cms: ["Qiita API"],
//     pdf: ["html-to-pdf", "pdf-lib"],
//   },

//   ux: `
// Qiita ID / API トークンを入力するだけで完結。
// ストレスなく高速でダウンロードできる体験を重視。
//   `,

//   nextStep: `
// ・「いいね済み記事」のダウンロード  
// ・Qiita → Zenn / TechBlog の自動移行  
// ・キャッシュ導入  
//   `,

//   // ★ 詳細ページで表示する画像一覧（順番自由）
//   images: [
//     "/qiita-downloader/hero.png",       // ← ① ヒーロー画像
//     "/qiita-downloader/thumbnail.png",       // ← ② メイン UI
//     "/qiita-downloader/main.png"        // ← ③ オプション
//     // "/qiita-downloader/pdf-example.png" // ← ④ PDFサンプル
//   ],
// }




{
  id: "qiita-downloader",
  title: "Qiita Downloader App",
  category: `Qiita の全記事を “一括でローカル保存” できる高速ダウンローダー。
Markdown 形式で記事をダウンロードでき、技術資産を安全に手元に残せるようにした。`,

  roles: ["Frontend Development", "UI Design", "API Integration"],
  period: "2025/11 – 2025/12",
  client: "依頼案件(個人)",
  team: "個人制作",

  // 一覧ページで使うサムネイル
  image: "/qiita-downloader/hero.png",

    listImage: "/qiita-downloader/hero.png", // 一覧用
  heroImage: "/qiita-downloader/hero.png",      // 詳細Hero用

  // ======================
  // 説明（短文）
  // ======================
//   description: `
// Qiita の全記事を “一括でローカル保存” できる高速ダウンローダー。
// Markdown / PDF を自動生成し、技術資産を安全に手元に残せるようにした。
//   `,

  // ======================
  // 開発背景
  // ======================
  overview: `
あるエンジニアの方から「Qiita 記事をまとめてローカルに保存できる仕組みが欲しい」という相談を受けたことが、このアプリの開発のきっかけでした。

そこで、記事の取得・整形・保存をすべて自動化し、Markdown / PDF として一括保存できるツールを提案・実装しました。

依頼者が日常的に使えるよう、操作は一画面で完結し、API トークン入力後すぐに使い始められるシンプルな UI を追求しています。
  `,

  // ======================
  // アプリケーション概要
  // ======================
  outline: `
Qiita Downloader App は、Qiita API を用いて記事一覧・本文・タグ・日付情報を取得し、Markdown 形式で一括保存できるバックアップツールです。Qiita に標準の一括ダウンロード機能がない課題を解決するために開発しました。

ユーザー名と API トークンを入力すると、Qiita API から記事が即時に取得され、一覧から必要な記事を選んでまとめてダウンロードできます。

技術記事の保管や移行を、シンプルかつ高速に行えるよう設計されたアプリケーションです。
  `,

  // ======================
  // 達成した目的
  // ======================
  objectives: `
Qiita の技術資産を安全にバックアップ    
  `,

  // ======================
  // Note（任意）
  // ======================
  richTextNote: `
Qiita API から取得した本文を markdown → PDF に整形する処理を実装。
実際の Qiita レイアウトに近いスタイルを再現した。
  `,

  // ======================
  // 主要機能
  // ======================
  features: [
"Qiita API から記事を一括取得し、本文・タグ・日付情報まで完全に収集",

"記事を Markdown 形式で自動保存",

"タグ・投稿日・更新日などの メタデータを完全保持",

"保存時に 日付フォルダへ自動分類し、整理された状態で管理可能",

"操作はすべて 一画面で完結するシンプルな UI を採用"
  ],

  // ======================
  // 技術スタック
  // ======================
 techStack: {
  languages: ["TypeScript", "React"],
  framework: ["Next.js (App Router)"],
  styling: ["Tailwind CSS", "DaisyUI"],
  build: ["Next.js (Turbopack)"],
  testing: ["Jest", "React Testing Library"],
  deploy: ["Vercel"],
  cms: ["Qiita API"],
  // extra: [
  //   "Qiita APIのrate-limitを考慮した堅牢なエラーハンドリング","Markdown-it / highlight.jsを用いたQiita風のMarkdownレンダリング","html2canvas + jsPDF による記事の PDF 自動生成ワークフロー","Blob / FileSaver を利用したローカル保存処理の実装","API トークンを localStorage に保存し、利便性と UX を向上","Promise.all を活用した高速な並列ダウンロード処理"
  // ]
}
,
// アーキテクチャ図　qiita-downloader
architectureImage: "/qiita-downloader/image.png",



  // ======================
  // 苦労と解決策（Markdown対応）
  // ======================
  ux: `
1.toggle / filter を用いた状態更新の難しさ

チェックボックスによる複数選択を実装する際、選択状態を配列で管理し、すでに存在する場合は削除、存在しない場合は追加という処理を実装する必要がありました。

そのため、選択解除時には対象を除外した配列を作り、追加時には既存の配列を元に要素を追加した配列を作成する、という実装に慣れるまで時間がかかりました。
  `,

  // ======================
  // 成長したポイント
  // ======================
  growth: `
1.クライアントワークとしての要件定義経験

「依頼者が本当に求めていること」を定義するため、MVP設計、機能優先度、UI の使いやすさなどを自分で整理し、クライアント視点で開発できた。
  `,

  // ======================
  // まとめ（Next Step）
  // ======================
  nextStep: `Markdown 形式だけでなく、記事を PDF としてもダウンロードできるよう機能を拡張し、Qiita の見た目に近いスタイルでそのまま保存できる仕組みを実現したいと考えています。
  `,

  // ======================
  // 画像（WorkDetail 用）
  // ======================
  imagesDetail: [
    {
      label: "ホーム画面",
      src: "/qiita-downloader/thumbnail.png"
    },
    {
      label: "アプリデモ画像",
      description: `Qiita のユーザー名と API トークンを入力すると、そのアカウントの記事が一覧で自動取得されます。記事左側のチェックボックスを選択すれば、複数の記事を Markdown / PDF で一括ダウンロード可能。

      `,
      src: "/qiita-downloader/demo.gif"
    },
//     {
//       label: "PDF 生成と Qiita 風スタイル（MVP3）",
//       description: `
// Markdown-it + highlight.js で Qiita らしい HTML を生成し、
// そこから PDF を自動生成できるようにした。
//       `,
//       src: "/qiita-downloader/pdf.png"
//     }
  ]
}





,



  // ============================
// ③ Study Spot Vancouver
// ============================
{
  id: "study-spot",
  title: "Study Spot Vancouver",
  category: "このアプリは、React/Supabase/Google Maps APIを用いて、バンクーバー市内の自習スポットをWiFi・電源・声出しOKなどの条件で絞り込み検索できる地図アプリです。",
  //位置情報サービス / 学習支援
  roles: ["Frontend Development", "API Integration"],
  period: "2025/09 - 2025/10",
  client: "個人制作",
  team: "個人",

  image: "/studyspot/thumbnail.png",

  listImage: "/studyspot/thumbnail.png", // 一覧用
  heroImage: "/studyspot/thumbnail.png",      // 詳細Hero用


  techStack: {
    languages: ["TypeScript"],
    framework: ["React"],
    styling: ["Chakra UI"],
    build: ["Vite", "Makefile"],
    database: ["Supabase"],
    mapAPI: ["Google Maps API (@vis.gl/react-google-maps)"],
    testing: ["Jest", "React Testing Library"],
    deploy: ["Firebase Hosting", "GitHub Actions (CI/CD)"],
    // cms: ["なし"],
    // extra: [
    //   "Google Maps の再レンダー問題を key 再生成で解決",
    //   "boolean フィルターをオブジェクトで一括管理し再利用性を向上",
    //   "緯度経度から Google Maps URL を動的生成",
    // ]
  },

  outline: `
今回は、「Study Spot Vancouver」という自習スポット検索アプリを開発しました。このアプリは、バンクーバー市内の自習スポットを地図上に表示し、WiFi・電源・声出しOKの有無で簡単に絞り込めるように設計されています。

React・TypeScript・Supabase・Google Maps API・Chakra UIを使用し、「地図上にピン表示 → 条件で絞り込み → 詳細ページへ遷移」という一連の仕組みを実装しました。また、この開発を通じて、API連携、状態管理、UI設計の流れを一通り経験し、「地図アプリが動くまでの仕組み」を深く理解する良い機会となりました。

今回は5つのMVP（Minimum Viable Product）を自ら設定し、段階的に実装を進めました。

MVP1：React + TypeScript + Vite で開発環境を構築。  
MVP2：GitHub Actions で CI/CD を構築し、push 時に自動テストと自動デプロイを実行。  
MVP3：Google Maps API を導入し、Supabaseから取得した自習スポットのデータをピンとして地図上に表示。  
MVP4：Wi-Fi / 電源 / 声出しOK で絞り込む3フィルター機能を実装。  
MVP5：ピンをクリックすると詳細ページに遷移し、写真・住所・営業時間を表示。Google Mapsで開くリンクを設置。
  `,

  overview: `
個人的な課題の解決を目指しました。バンクーバーで自習場所を探すとき、Google Mapsでは大まかなカテゴリしか分かりませんが、実際に自習する上で重要なのは、静かさ、電源の有無、Wi-Fiの有無などといった現地でしかわからない情報です。特に、英語の音読やプレゼン練習など「声を出して勉強できる場所」は情報がほとんどなく、その都度現地で確認する必要がありました。この不便を解消するために、「自習条件で検索できる地図アプリ」を作ろうと考えました。
  `,

  objectives: `
地図表示と絞り込み: 左上の Wi-Fi・Power・Talking の各ボタンを切り替えることで、それぞれのスポットが Wi-Fiを利用できるか、電源があるか、私語（声出し）が可能か を条件に絞り込みできます。

詳細情報表示: 地図上のピンをクリックすると、施設名と「Wi-Fi・電源・声出しOK」などの基本情報がポップアップ表示されます。「詳細を見る」ボタンを押すと、そのスポットの詳細ページへ遷移し、住所や写真などの情報を確認できます。

Google Maps連携: 詳細ページの「開く」リンクから、実際のGoogleマップを開いてルート検索や周辺確認も可能です。

データ収集: 自習スポットの情報は、実際に訪れてスタッフに聞いたり、自分で勉強して雰囲気を確かめたりして確認しました。行けなかった施設については、メールで問い合わせを行い、正確な情報を得るように心がけました。
  `,

  // architecture: `

  // `,

features: [
  "地図上に自習スポットをピン表示",
  "Wi-Fi・電源・声出しOK条件でリアルタイム絞り込み",
  "現地調査に基づいた正確なスポット情報を掲載",
  "各スポットから Google Maps をワンクリックで起動可能",
  "Firebase Hosting + GitHub Actions による CI/CD 自動デプロイ",
],



  // architectureImage: "/studyspot/image.png",
  ux: `
1.Google Maps API と React の再レンダー問題

Reactの再レンダーが発生しても、Google Maps側の表示が更新されず、
フィルターを切り替えてもピンが変わらない問題がありました。

原因は、ReactのVirtual DOMとGoogle Mapsの描画が別システムで動いていることにありました。
解決策として、\`\`\`jsx<Map key={JSON.stringify(filters)}>\`\`\`のように
keyを変更して再描画する方法を採用しました。

\`\`\`tsx
<Map key={JSON.stringify(filters)} ... >
\`\`\`

2.フィルターの状態管理（boolean型の扱い）
3つの条件（WiFi・電源・声出しOK）を切り替える際、
useStateでまとめて管理し、動的に更新できるようにしました。

\`\`\`tsx
const [filters, setFilters] = useState({
  wifi: false,
  power: false,
  talking: false,
});
\`\`\`

ボタンを押すたびにtoggleFiltersで特定のキーだけ反転させることで、
複数条件を簡潔に切り替えられるようにしました。

3.詳細ページ遷移とGoogleマップリンク生成  
地図上のピンをクリックしたときに詳細ページへ遷移し、そのページで「Googleマップで開く」リンクを動的に生成しました。

\`\`\`tsx
<a
  href={\`https://www.google.com/maps?q=\${spot.latitude},\${spot.longitude}\`}
  target="_blank"
  rel="noopener noreferrer"
>
  Google Mapsで開く
</a>
\`\`\`
テンプレートリテラル（\`...\`）を使うことで  緯度・経度から動的に URL を組み立てられることを学びました。

`,


architectureImage: "/studyspot/image.png",
nextStep: `
1. 外部APIとの連携力がついた
Google Maps APIやSupabaseなど、外部サービスを自分のアプリに統合する流れを実体験できました。APIキーの管理・非同期処理・環境変数の扱いなどを理解できたのが大きな収穫です。

2. データ構造を意識して設計できるようになった
Supabaseのテーブル設計（id, name, latitude, longitude, wifi, power, talking）をUIの動きと合わせて考えたことで、データとUIの関係性を意識する力が身につきました。

3. 状態と描画の関係を理解した
フィルター切り替え時にピンが更新されない問題を通して、Reactの再レンダーと外部ライブラリ（Google Maps）の描画が別で動いていることを学びました。

総括: 自分でMVPを設計し、段階的にアプリを完成させた経験を通じて、“目的を持って開発を進める力” が身についたと感じています。
  `,

  images: [
    "/studyspot/thumbnail.png",
    "/studyspot/map.png",
    "/studyspot/architecture.png",
  ],

  imagesDetail: [
  {
    label: "ホーム画面",
  
    src: "/studyspot/thumbnail.png"
  },
  {
    label: "地図での絞り込み表示",
    description: `左上の WiFi・Power・Talking の各ボタンを切り替えることで、それぞれのスポットが WiFiを利用できるか、電源があるか、私語（声出し）が可能か を条件に絞り込みできます。`,
    src: "/studyspot/map.png"
  },
  {
    label: "マップ動作デモ",
    description:`地図上のピンをクリックすると、施設名と「WiFi・電源・声出しOK」などの基本情報がポップアップ表示されます。「詳細を見る」ボタンを押すと、そのスポットの詳細ページへ遷移し、住所や写真などの情報を確認できます。詳細ページの「開く」リンク から、実際のGoogleマップを開いてルート検索や周辺確認も可能です。

`,
    src: "/studyspot/map.gif"
  },
  // {
  //   label: "アーキテクチャ図",
  //   src: "/studyspot/architecture1.png",
  // }
],

  fullDescription: `
// 【使用技術】
// React / TypeScript / Vite  
// Chakra UI  
// Supabase  
// Google Maps API  
// Firebase Hosting  
// GitHub Actions  
// Makefile  

// 【技術的な工夫】
// 1. Google Maps の再レンダー問題を key 設計で解決  
// 2. boolean フィルターをオブジェクトで一括管理し、状態管理を簡潔化  
// 3. テンプレートリテラルで Google Maps URL を動的生成  
  `
}

,
// /////////////////////////////////////////////////////////////////////////////////////////
// 学習記録アプリ
/////////////////////////////////////////////////////////////////////////////////////////////
{
  id: "study-log",
  title: "【React×Supabase】TypeScriptとChakra UIを使用した学習記録アプリ",
  category: "Supabase でデータを永続化し、React + Chakra UI でシンプルに学習記録を管理できるアプリ",
  roles: ["Frontend Development", "UI Design", "Testing", "CI/CD"],
  period: "2025/09",
  client: "個人開発",
  team: "個人",

  image: "/study-record/thumbnail.png",

  listImage: "/study-record/thumbnail.png",
 heroImage: "/study-record/aa.png", 

  techStack: {
  languages: ["TypeScript"],
  framework: ["React", "Vite"],
  styling: ["Chakra UI"],
  build: ["Vite", "Makefile"],
  database: ["Supabase"],
  testing: ["Jest", "React Testing Library"],
  deploy: ["Firebase Hosting", "GitHub Actions (CI/CD)"],
  // cms: ["なし"],
  // extra: [
  //   "Supabase と連携して学習記録をクラウド保存",
  //   "初期表示時に Supabase からデータを取得して一覧に反映",
  //   "フォーム送信で学習内容・学習時間を登録",
  //   "削除操作で Supabase のデータも同時に削除",
  //   "データ取得中はローディングスピナーを表示し UX を向上",
  //   "Firebase Hosting にデプロイして本番環境を構築",
  //   "Makefile で開発・ビルド・デプロイ作業を自動化",
  //   "GitHub Actions で push 時に自動テスト & 自動デプロイ"
  // ]
}
,


  outline: `
React で作成していた既存の学習記録アプリを、TypeScript と Chakra UI を用いてリニューアルしました。

Supabase を使ったデータ永続化に加え、Firebase Hosting でのホスティング、GitHub Actions による CI/CD、Jest + React Testing Library による自動テストまで導入し、「作る → テスト → 自動デプロイ」まで一通りのフローを構築しています。

このアプリは、日々の学習内容と学習時間を記録し、Supabase 上に保存されたデータを一覧表示・合計時間の自動集計まで行います。
  `,

  overview: `
学習を続ける中で、「何をどれくらい勉強したか」を手軽に管理できる仕組みが必要だと感じたことが、このアプリを開発した背景です。既存の学習管理ツールは機能が多く、逆に使いづらいと感じる場面もありました。そこで、必要な機能だけに絞った、シンプルで使いやすい記録アプリ を自分で作ろうと考えました。

また、React・TypeScript・Supabase・Chakra UI・react-hook-form など、学習中の技術を実践的に組み合わせる必要も感じていたため、アプリ作成を行いました。
  `,

  objectives: `
- 学習記録をクラウドで一元管理できるアプリを作る
- React 版を TypeScript + Chakra UI ベースにリニューアルする
- Supabase・Firebase・GitHub Actions を組み合わせた実務に近いフローを体験する
- テストコードを前提にした実装スタイルを身につける
  `,

features: [
  "学習記録をクラウド保存（Supabase連携）",
  "アプリ起動時に学習記録を自動読み込み・一覧表示",
  "フォームから学習内容・学習時間を簡単に追加",
  "不要な記録をワンクリックで削除（クラウド同期）",
  "合計学習時間を自動計算",
  "データ取得中のローディング表示",
  "Firebase Hosting による本番公開",
  "Makefile による開発コマンド整理",
  "GitHub Actions による自動テスト & 自動デプロイ",
],

  // architectureImage: "/study-record/architecture.png",

//   architecture: `
// User → React（Vite）
// React → Supabase（学習記録の Insert / Select / Delete）
// React → Firebase Hosting（ビルド済みアプリをホスティング）

// GitHub Actions（push）→
//   - npm test（Jest + React Testing Library）
//   - npm run build
//   - Firebase Hosting に自動デプロイ
//   `,

// アーキテクチャ図　学習記録アプリ
architectureImage: "/study-record/image.png",

  ux: `
1.状態管理
問題：どの状態を useState で持つか整理するのが難しかった

records（一覧データ）

loading（読み込み中フラグ）

error（エラーメッセージ）

editingRecord（編集対象のレコード）など

解決策：UIに「変化するもの」は全部状態として管理する必要がある

2.UI/モーダル表示
問題：Modal を条件分岐 (loading / error) の内側に書いてしまい、ボタンを押してもモーダルが出なかった。

解決策：Modal は条件分岐の外に置き、isOpen / onOpen / onClose で制御する必要があった。
  `,

  growth: `
1.環境構築と設定に自信がついた

Vite + React + TypeScript + Chakra UI の環境を一から構築し、ChakraProvider の適用やテーマ設定を含めて自分で整えられるようになりました。

2.実装とテストをセットで考えられるようになった

UI を作るだけでなく、「どうテストを書くか」を考えながらコンポーネントを設計。Jest + React Testing Library で自動テストを書いたことで、修正時も安心してリファクタリングできる感覚を得ました。

3.クラウドサービスへの心理的ハードルが下がった

Supabase や Firebase は GUI が充実しており、テーブル編集・デプロイ・ログ確認までを一通り経験したことで、「クラウド＝難しい」という印象がかなり薄れました。

4.CI/CD フローを自分の手で構築できた

GitHub Actions を使ってテスト・ビルド・デプロイを自動化し、開発から本番反映までの一連の流れを実際に回せるようになりました。
  `,

  nextStep: `
今後は、個人開発したアプリの記事やドキュメントとしてのアウトプットも増やしていきたいと考えています。
  `,

  images: [
    "/study-record/thumbnail.png",
    "/study-record/study.gif",
    "/study-record/thumbnail1.png",
    "/study-record/image.png",
  ],

  imagesDetail: [
    {
      label: "アプリトップ画面",
      src: "/study-record/thumbnail1.png"
    },
    {
      label: "アプリデモ画像",
      description:`トップ画面では、登録した学習内容と学習時間の一覧を確認でき、編集・削除もワンクリックで行えます。「新規登録」ボタンを押すとモーダルフォームが開き、学習内容と時間を入力して保存できます。登録後は Supabase にデータが反映され、そのまま一覧に即時表示されます。`,
      src: "/study-record/study.gif"
    },
    // {
    //   label: "アプリ全体構成図",
    //   src: "/study-record/thumbnail.png"
    // }
  ]
}


,
// 名刺アプリ
{
  id: "business-card",
  title: "オンライン名刺アプリ（TypeScript + Supabase + Chakra UI）",
  category: "フォーム入力だけで名刺を自動生成し、URL共有・クラウド保存・自動削除バッチまで備えたオンライン名刺プラットフォームです。",
  roles: ["Frontend Development", "UI Design", "Testing", "CI/CD", "Batch Processing"],
  period: "2025/10",
  client: "個人開発",
  team: "個人",

  image: "/businesscard/hero.png",

listImage: "/businesscard/thumbnail.png",
 heroImage: "/businesscard/hero.png", 
  techStack: {
  languages: ["TypeScript"],
  framework: ["React", "Vite"],
  styling: ["Chakra UI"],
  build: ["Vite"],
  database: ["Supabase（名刺データ・スキルデータ保存）"],
  testing: ["Jest（UI・動作テスト）"],
  deploy: ["Firebase Hosting（本番自動反映）", "GitHub Actions（CI/CD）"],
  // cms: ["なし"],
  extra: [
    "名刺表示機能（名前・自己紹介・スキル・SNSリンク）",
    "/cards/:id で個別カード表示",
    "React Hook Form によるバリデーション（必須チェック・英字ID判定）",
    "GitHub Actions で毎朝6時に不要データ削除（Cron バッチ処理）"
  ]
}
,

  outline: `
今回のアプリ開発では、誰でもその場で登録でき、翌日には自動で消えるオンライン名刺アプリを開発しました。React・TypeScript・Supabase・Firebase・Chakra UI を使用し、CI/CD・テスト・自動削除バッチまで実装しています。

このアプリは、ユーザーが入力した名刺（名前・自己紹介・スキル・SNSリンク）を Supabase に保存し、誰でも名刺が閲覧できます。

翌日の朝 6 時に前日のデータを自動で削除する仕組みを備えており、イベント・勉強会・交流会での “一時的な名刺共有” に最適な設計としました。
  `,

  overview: `
  開発の背景として、名刺情報の管理や共有が属人的かつ煩雑になりやすい点に課題を感じていました。紙の名刺や個人ごとの管理方法では、情報の更新や共有が難しく、必要なときにすぐ参照できない場面を何度も経験しました。

そこで、名刺情報をデータとして一元管理し、URLで簡単に共有できる仕組みがあれば便利なのではないかと考え、本アプリの開発に取り組みました。
  `,

  objectives: `
- 誰でも使えるワンタイム名刺を作る
- 翌日に自動削除される仕組みを実装する
- CI/CD + テスト + バッチを備えた運用フローを体験する
  `,

 features: [
  "名刺ページの自動生成（/cards/:id によるURL共有）",
  "登録フォーム（名前・紹介文・スキル・SNS）",
  "React Hook Form による入力バリデーション（必須・英字ID判定）",
  "Supabase を用いた名刺データの保存・取得・削除",
  "Firebase Hosting への自動デプロイ",
  "Jest + React Testing Library によるUI・動作テスト",
  "GitHub Actions Cron を用いた毎朝6:00の自動削除バッチ",
],


  // 名刺アプリ　アーキテクチャ図

architectureImage: "/businesscard/image.png",

//   architecture: `
// User → React（Vite）
// React → Supabase（Insert / Fetch）
// React → Firebase Hosting（Deploy）
// GitHub Actions（main push）→ CI（Test & Build）→ Deploy
// GitHub Actions（Daily 6:00）→ ts-node Script（Old Data Delete）
//   `,

  ux: `
1.React Hook Form × Chakra UI の連携

Chakra UI や React Hook Form の register を使ったところ、なぜかバリデーションが反応せず、空欄でも送信できてしまいました。調べると、Chakra UI のフォーム部品は少し特殊な作りをしていて、register だけでは値の管理がうまくいかないことが分かりました。
そこで、Controller を使って値のやり取りを明示的に設定したところ、バリデーションが正常に動くようになりました。
この経験から、UIライブラリによってフォームの仕組みが違うことを理解して使うことが大切だと学びました。

2.GitHub Actions の環境変数設定

GitHub Actionsで自動デプロイを設定した際、ローカルでは動くのにCIでは.envが読み込まれず失敗しました。Actionsでは.envが自動で反映されないと知り、Secretsに登録して env: で明示的に指定することで解決しました。
ローカルとCIでは環境変数の扱いが違うことを実感し、最初に「Secretsをどう渡すか」を設計しておく重要性を学びました。

3.バッチ処理（ts-node + GitHub Actions Cron）の実行確認

毎朝6時に前日のデータを削除するバッチをGitHub Actionsで動かしたところ、ローカルでは動くのに本番では削除されない問題がありました。
原因はパスの違いと時差（UTCと日本時間）でした。npx ts-node --esm で実行方法を統一し、UTC基準で日付を計算することで解決しました。
この経験から、CI環境はローカルと同じではないと実感しました。
`,
growth:`
成長したポイント

1.テストを通じて安心してリリースできる感覚を得た

Jest と React Testing Library を導入し、ページ単位でのテストを実装しました。これにより、修正を加えた際に「何か壊れていないか」を確認できるようになり、自信を持ってデプロイできる環境を整えることができました。特に、useNavigate のモック化や Supabase 関数のモックなど、「外部要素を切り離してテストする」という考え方を実践できたのが大きな収穫でした。テストを書くことで、自然とコンポーネントの責務やデータの流れを整理できるようになり、結果としてコードの理解力と安定性が大幅に向上しました。

2.時間に依存する処理を扱えるようになった

毎朝6時に前日のデータを削除するバッチ処理を実装したことで、「時間に依存するプログラム」の難しさと面白さを体験しました。初めはUTCと日本時間のズレで削除がうまく動かず、「ローカルでは動くのに本番では動かない」状況に悩まされました。その過程で、Supabaseのタイムスタンプの扱い、UTC基準での日付計算、そしてGitHub Actionsの実行時間の仕組みを深く理解できました。この経験を通して、単なるタスク実行ではなく、「いつ・どの環境で動くか」を設計できる力が身についたと感じています。
  `,

  nextStep: `
自動化の実装によって、開発から運用までの流れを自分で設計できるようになりました。毎朝6時の削除バッチでは、時間・環境・ロジックのつながりを理解しながら、“動くだけではなく、運用され続けるプロダクト” を意識した設計ができるようになったと考えています。
  `,
// 画像は載せたい順番に
  images: [
    "/businesscard/hero.png",
    "/businesscard/main.png",
    "/businesscard/thumbnail.png",
  ],
// ここに画像を入れる
  imagesDetail: [
    {
      label: "名刺登録画面",
      src: "/businesscard/hero.png"
    },
      {
    label: "アプリ動作デモ",
    src: "/businesscard/business.gif",
    isGif: true
  },
  ]
}
,
// 技術ブログ
{
  id: "tech-blog",
  title: "Qiita記事と社内ブログを統合できるテックブログ【Next.js / TailwindCSS / MicroCMS / Qiita API】",
  category: "このアプリは、外部の技術記事サイト（Qiita）とブログ（MicroCMS）から記事を自動で集めてデータの形を統一し、一つのウェブサイトにまとめて表示することで、読者が分散した記事を一箇所で読めるようにするシステムです。",
  roles: ["Frontend Development", "UI Design", "API Integration", "CI/CD"],
  period: "2025/12",
  client: "個人開発",
  team: "個人",

  image: "/techblog/thumbnail.png",
  
    listImage: "/techblog/thumbnail.png", // 一覧用
  heroImage: "/techblog/thumbnail.png",      // 詳細Hero用

 techStack: {
  languages: ["TypeScript"],
  framework: ["Next.js (Turbopack)", "React"],
  styling: ["TailwindCSS", "DaisyUI"],
  build: ["Next.js (Turbopack)"],
  // database: [], // 使っていないなら空配列でOK
  testing: ["Jest", "React Testing Library"],
  deploy: ["Firebase Hosting", "Vercel"],
  cms: ["MicroCMS", "Qiita API"],
  extra: ["Makefile (dev/test/deploy)", "API Route 整形処理", "カードUI統一設計"]
},


  // ===========================
  // outline（導入部分）
  // ===========================
  outline: `
今回は、Qiita APIとMicroCMS を連携し、Qiitaと社内の技術記事を自動収集・一覧表示できるテックブログを構築しました。

トップページでは、Qiita と MicroCMS の記事をカードUIで一覧表示しています。
「もっと見る」ボタンを押すと、個人記事・ブログ記事それぞれの一覧ページへ遷移できます。
記事カードをクリックすると、Qiita の記事ページまたはブログ詳細ページへ移動し、そのまま記事を読むことができます。

また今回作成したアプリでは、Next.js（Turbopack + TypeScript）・TailwindCSS ・DaisyUI・MicroCMS・Qiita API を使用し、Qiita記事の自動取得、MicroCMS記事の取得、カードUIによる一覧表示、ブログ詳細ページ、CI/CD（GitHub Actions）、Firebase / Vercel への自動デプロイまで実装しています。
  `,

  // ===========================
  // overview（アプリ概要）
  // ===========================
//   overview: `
// アプリ概要


//   `,

features: [
  "Qiita API を利用した個人記事の自動取得・一覧表示",
  "MicroCMS に登録したブログ記事の取得・表示",
  "Qiita / MicroCMS の記事を共通カードUIで表示",
  "記事カードクリックによる外部リンク・詳細ページ遷移",
  "「もっと見る」ボタンによる記事一覧ページ遷移",
  "Route Handler を用いたサーバーサイド API 実装",
  "Jest / React Testing Library によるコンポーネントテスト",
  "CI/CD による自動テスト・自動デプロイ",
],

  // ===========================
  // objectives（使用技術）
  // ===========================
  overview: `
  Qiitaの記事と個人ブログの記事を別々に管理していることに不便さを感じたことが、開発のきっかけです。記事を一つのアプリ上で一覧・閲覧できるようにすることで、学習や情報整理を効率化したいと考え、本アプリを開発しました。

  `
// 使用技術

// 分類 / 内容
// フロントエンド：Next.js (Turbopack) + TypeScript
// UI：TailwindCSS + DaisyUI
// データ取得：Qiita API / MicroCMS API
// サーバー処理：React Handler / API Routes
// デプロイ：Firebase Hosting
// CI/CD：Jest + React Testing Library
// 自動化：Makefile (dev / test / deploy)
//   `,

  // ===========================
  // richTextNote（技術的な詳細）
  // ===========================
//   richTextNote: `
// 開発で苦労したポイントと解決策


  ,


  architectureImage: "/techblog/image2.png",

  // ===========================
  // ux（デザイン/UIでの苦労）
  // ===========================
  ux: `
1.Qiita と MicroCMS のデータ構造を統一するのが大変だった
Qiita と MicroCMS では取得できるデータの形式や項目名が大きく異なり、
そのままでは共通のUIコンポーネントで扱えませんでした。

\`\`\`tsx
例 Qiita のデータ
{
  "title": "React入門",
  "created_at": "2024-01-02",
  "url": "https://qiita.com/xxx/items/abc123"
}

例 MicroCMS のデータ
{
  "id": "blog01",
  "title": "Next.jsでブログ構築",
  "publishedAt": "2024-02-10",
  "thumbnail": { "url": "https://..." }
}
\`\`\`
日付の形式、URL、サムネイルなどがバラバラなので、
フロント側で統一して扱うのが非常に難しい構造になっていました。

そこで以下のように、記事をフロントへ返す前に、API Route 側で同じ形に整形しました。
\`\`\`tsx
return {
  title: item.title,
  thumbnail: item.thumbnail?.url || DEFAULT_IMAGE,
  date: item.publishedAt || item.created_at,
  url: item.url || \`/blogs/\${item.id}\`,
};
\`\`\`

2.DaisyUI と TailwindCSS でカードUIを統一するのが難しかった
Qiita と MicroCMS はサムネイルの有無や画像サイズが異なるため、カードの高さやレイアウトが簡単に崩れてしまいました。

また、レスポンシブ対応やgridの調整も必要で、見た目を揃えつつ、どの記事でも破綻しないカードデザインを作る のが意外と大変でした。



  `,

  // ===========================
  // nextStep（学び・まとめ）
  // ===========================
  nextStep: `
学び・成長したポイント

1. API 設計・データ整形の理解が深まった
API Route でデータ取得 → 整形 → 返却の流れを理解できた。

2. Next.js のサーバーサイド処理を実践レベルで理解できた
Route Handler・環境変数・非同期処理など、Next.js の「サーバー機能」を使いこなす経験を得ました。
特に、外部APIの呼び出しや、JSONレスポンスの設計など、本番開発でも必須になる知識を実践的に習得できたと考えています。

Qiita・MicroCMS・Next.js・CI/CD と、非常に多くの技術が絡む開発でしたが、
MVPを細かく分けて進めたことで迷わず実装できました。
  `,

  images: [
    "/techblog/thumbnail.png",
    "/techblog/screen.png",
    "/techblog/image1.png"
  ],

  imagesDetail: [
    {
      label: "ホーム画面",
      src: "/techblog/thumbnail.png"
    },
      {
    label: "ブログアプリ動作デモ画面",
    description:`トップページでは、Qiita と MicroCMS の記事をカードUIで一覧表示しています。
「もっと見る」ボタンを押すと、個人記事・ブログ記事それぞれの一覧ページへ遷移できます。
記事カードをクリックすると、Qiita の記事ページまたはブログ詳細ページへ移動し、そのまま記事を読むことができます。`,
    src: "/techblog/kadai6.gif",
    isGif: true
  },
  ]

}



];
