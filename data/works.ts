export const works = [

  // ============================
  // ① My Portfolio
  // ============================
  {
    id: "portfolio",
    title: "My Portfolio",
    category: "Webサイト / プロダクト紹介",
    roles: ["Frontend Development", "UI Design"],
    period: "2025/06 - 2025/07",
    client: "個人制作",
    team: "個人",

    image: "/portfolio.jpg",

    description: `
自分のプロダクトや経歴を「わかりやすく・美しく」伝えるために
ゼロから設計したポートフォリオサイト。
App Router ベースの Next.js を中心に、UI 設計と CMS 連携の両面を
高いレベルでまとめあげた。
    `,

    overview: `
前回のポートフォリオは HTML / CSS / jQuery による静的構成で、
案件を追加するたびにコード修正が必要だった。

そこで今回のポートフォリオでは、
Next.js（App Router）× microCMS を採用し、

・案件データ  
・自己紹介コンテンツ  
・スキルセット  

をすべて CMS 側で管理できるようにした。
完全にノーコードで更新できるため、運用コストを大幅に削減した。
    `,

    objectives: `
本プロジェクトの目的は３つ。

① コンテンツ更新の自動化  
② UI / UX を最大限に改善  
③ 「プロダクト志向のエンジニア」としてのスキル証明  
    `,

    richTextNote: `
html-react-parser を用いてリッチテキストを最適に描画できるようにカスタム。
    `,

    features: [
      "Next.js App Router による動的ルーティング",
      "microCMS 連携でコンテンツを自動取得",
      "リッチテキストのカスタムパーサー実装",
      "再利用可能なコンポーネント設計",
      "レスポンシブ対応 UI / UX 改善",
      "Turbopack による高速ビルド",
    ],

    techStack: {
      framework: ["Next.js (App Router)"],
      languages: ["React", "TypeScript"],
      styling: ["Tailwind CSS"],
      build: ["Turbopack"],
      testing: ["Jest", "React Testing Library"],
      deploy: ["Vercel"],
      cms: ["microCMS"],
    },

    architecture: ``,

    ux: `
白基調 × シンプル × 見やすいUI
    `,

    nextStep: `
・アニメーション導入（Framer Motion）
・英語 / 日本語の多言語対応
・SEO の最適化
    `,
  },


  // ============================
  // ② Qiita Downloader App
  // ============================
  {
    id: "qiita-downloader",
    title: "Qiita Downloader App",
    category: "Webアプリ / 自動化 / 生産性向上",
    roles: ["Frontend Development", "UI Design", "API Integration"],
    period: "2025/10 – 2025/11",
    client: "個人開発",
    team: "個人制作",

    // ★ 正しいパス（PNG）
    image: "/qiita-downloader/main.png",

    description: `
Qiita の全記事を “一括でローカル保存” できる高速ダウンローダー。
Markdown / PDF を自動生成し、技術資産を安全に手元に残せるようにした。
    `,

    overview: `
Qiita Downloader App は、自分の Qiita 記事を一括で取得し、
Markdown / PDF 形式でローカル保存できる自動化ツール。
    `,

    objectives: `
① Qiita の技術資産を安全にバックアップ  
② Qiita → Zenn など記事移行を高速化  
    `,

    richTextNote: `
Qiita API から取得した本文を markdown → PDF に整形するパーサーを自作。
    `,

    features: [
      "Qiita API を用いた記事の一括取得",
      "Markdown / PDF の二形式で自動保存",
      "並列処理による高速ダウンロード",
      "タグ・投稿日・更新日などの完全保存",
      "日付フォルダでの自動分類",
      "UI の一画面完結・操作性改善",
    ],

    techStack: {
      framework: ["Next.js (App Router)"],
      languages: ["TypeScript", "React"],
      styling: ["Tailwind CSS"],
      build: ["Next.js (Turbopack)"],
      testing: ["Jest", "React Testing Library"],
      deploy: ["Vercel"],
      cms: ["Qiita API"],
      pdf: ["html-to-pdf", "pdf-lib"],
    },

    ux: `
Qiita ID / API トークンを入力するだけで完結。
ストレスなく高速でダウンロードできる体験を重視。
    `,

    nextStep: `
・「いいね済み記事」のダウンロード  
・Qiita → Zenn / TechBlog の自動移行  
・キャッシュ導入  
    `,

    // ★ ギャラリー画像
    images: [
      "/qiita-downloader/main.png",
      // "/qiita-downloader/ui.png",
      // "/qiita-downloader/pdf-example.png"
    ],
  },


  // ============================
  // ③ Study Spot Vancouver
  // ============================
  {
    id: "study-spot",
    title: "Study Spot Vancouver",
    category: "位置情報サービス / 学習支援",
    roles: ["Frontend Development", "API Integration"],
    period: "2025/01 - 2025/02",
    client: "個人制作",
    team: "個人",

    // ★ 正しいパス
    image: "/studyspot/thumbnail.png",

    outline: `
課題として開発した「自習スポット検索アプリ」。
    `,

    overview: `
バンクーバー市内の自習スポットを地図上に表示し、
WiFi・電源・声出しOK の条件で絞り込みできる検索アプリ。
    `,

    objectives: `
データ収集は現地調査＋メール確認で精度を担保した。
    `,

    architecture: `
React + TypeScript + Supabase + Google Maps API + Firebase Hosting
    `,

    richTextNote: `
Google Maps API の再レンダー問題を key の設計で解決。
    `,

    features: [
      "外部API連携の理解",
      "データ構造設計力の向上",
      "状態管理と描画更新の理解",
    ],

    ux: `
MVP を段階的に実装する “プロダクト開発思考” が身についた。
    `,

    nextStep: `
データ追加と UI 改善を進めていく。
    `,

    images: [
      "/studyspot/thumbnail.png",
      "/studyspot/map.png",
      "/studyspot/architecture.png",
    ],
  },

  {
  id: "study-log",
  title: "学習記録アプリ（TypeScript + Chakra UI）",
  category: "学習管理 / CRUDアプリ / CI/CD",
  roles: ["Frontend Development", "UI Design", "Testing", "CI/CD"],
  period: "2025/09",
  client: "個人開発",
  team: "個人",

  image: "/studylog/thumbnail.png",

  description: `
React で作成した学習記録アプリを、
TypeScript + Chakra UI によってフルリメイク。
Supabase・Firebase Hosting・GitHub Actions も導入し、
開発〜テスト〜自動デプロイまで一連の流れを構築した。
  `,

  overview: `
GitHubリポジトリ：
https://github.com/kazukashima/kadai3.git

このアプリは、学習内容と学習時間を記録し、
合計時間を自動計算して表示する学習管理ツール。

機能一覧：

- Supabase連携：学習記録をクラウド保存
- 初期表示：Supabaseから一覧取得
- 登録機能：学習内容＋時間を追加
- 削除機能：記録を削除（Supabaseと同期）
- ローディング表示：Chakra UI の Spinner 表示
- Firebaseデプロイ：本番環境で公開
- CI/CD：GitHub Actionsで自動デプロイ
- Makefile：\`make deploy\` で自動化
  `,

  objectives: `
前回バージョンとの差分：

- 使用言語を TypeScript に変更  
- React Hook Form を導入  
- Chakra UI で UI を統一  
- Firebase Hosting + GitHub Actions による CI/CD 構築  
  `,

  richTextNote: `
### 開発で苦労したポイントと解決策

**1. テストコードと UI 文言の不一致**  
getByText が UI の文言と一致せずテストが落ちた。  
→ 正規表現（/学習記録/i）で柔軟に対応。

**2. 状態管理の整理が難しい**  
records / loading / error / editingRecord などを  
「UIが変化するかどうか」で整理することで解決。

**3. モーダルが表示されない問題**  
Modal を条件分岐の内側に入れていたためレンダーされなかった。  
→ Modal は常にレンダー、isOpen / onOpen / onClose で制御する設計に変更。
  `,

  features: [
    "TypeScript + Vite + Chakra UI の環境構築経験",
    "Supabase によるクラウド連携",
    "React Hook Form でのフォーム最適化",
    "GitHub Actions による CI/CD 自動化",
    "Jest + React Testing Library の自動テスト実装",
  ],

  techStack: {
    framework: ["React", "Vite"],
    languages: ["TypeScript"],
    styling: ["Chakra UI"],
    build: ["Vite"],
    testing: ["Jest", "React Testing Library"],
    deploy: ["Firebase Hosting"],
    cms: ["Supabase"],
  },

  ux: `
Vite + React + TypeScript + Chakra UI を一から構築し、
柔軟な UI デザインと型安全な開発サイクルを体験できた。

さらに、

- \\\`make test\\\`
- \\\`make deploy\\\`
- GitHub Actions

などを通じて、実際に “CI/CD を回す開発者の視点” を身につけられた。
  `,

  nextStep: `
- 編集機能の追加  
- Supabase の RLS（行レベルセキュリティ）導入  
- グラフ表示（Chart.js / Recharts）  
- 学習時間の統計画面追加  
  `,

  images: [
    "/studylog/thumbnail.png",
    // "/studylog/screen.png",
  ],
},

{
  id: "business-card",
  title: "オンライン名刺アプリ（TypeScript + Supabase + Chakra UI）",
  category: "名刺管理 / CRUDアプリ / CI/CD / 自動化",
  roles: ["Frontend Development", "UI Design", "Testing", "CI/CD", "Batch Processing"],
  period: "2025/10",
  client: "個人開発",
  team: "個人",

  // ★ ここは public/businesscard/thumbnail.png を置く
  image: "/businesscard/thumbnail.png",

  description: `
翌日には自動で消えるオンライン名刺アプリを開発。
React・TypeScript・Supabase・Firebase・Chakra UI を使用し、
CI/CD、自動削除バッチ（GitHub Actions Cron）まで実装。
  `,

  overview: `
GitHubリポジトリ：
https://github.com/kazukashima/kadai4.git

このアプリは、登録した名刺データが翌日の朝6時に自動削除される
「期限付きオンライン名刺アプリ」。

表示内容：

- 名前
- 自己紹介
- スキル
- SNSリンク
- カード URL（/cards/:id）

技術構成：

- React Hook Form
- Chakra UI
- Supabase（データ保存）
- Firebase Hosting（本番環境）
- GitHub Actions（CI/CD）
- Cron バッチで毎朝削除
  `,

  objectives: `
- 誰でも登録できるオンライン名刺を作る
- 翌日に自動で消える仕組みを実装する
- CI/CD + バッチ + テストを備えた本格運用を体験する
  `,

  richTextNote: `
### 開発で苦労したポイントと解決策

**1. React Hook Form × Chakra UI の連携問題**  
register では値が拾われず、Controller を使うことで解決。

**2. GitHub Actions の環境変数**  
ローカルでは OK なのに CI で動かない原因 → Secrets を env に明示的に渡して解決。

**3. バッチ処理（Cron × ts-node）**  
UTC と JST のズレで削除ロジックが動かず。  
UTC 基準に統一し、日付計算を修正して解決。
  `,

  features: [
    "React Hook Form と Chakra UI の連携",
    "Supabase による名刺データ保存",
    "Firebase Hosting で自動デプロイ",
    "GitHub Actions の CI/CD 構築",
    "Cron バッチでデータ自動削除",
    "Jest + React Testing Library によるページ単体テスト",
  ],

  techStack: {
    framework: ["React", "Vite"],
    languages: ["TypeScript"],
    styling: ["Chakra UI"],
    build: ["Vite"],
    testing: ["Jest", "React Testing Library"],
    deploy: ["Firebase Hosting"],
    cms: ["Supabase"],
  },

  ux: `
「期限付き名刺」というユニークな体験を目指し、
誰でも簡単に登録・共有できるシンプルな UI を追求。
毎朝自動削除されることで、プライバシーとクリーンな運用を両立。
  `,

  nextStep: `
- 名刺デザインのテンプレートを追加
- QR コード生成機能
- Supabase の RLS（認証基盤）導入
- SNS の自動プレビュー
  `,

  images: [
    "/businesscard/thumbnail.png",
    "/businesscard/main.png",
    // "/businesscard/screen2.png"
  ],
},

{
  id: "kadai6",
  title: "Qiita ＋ microCMS 技術ブログ収集アプリ",
  category: "API連携 / Webアプリ / 学習支援",
  roles: ["Frontend Development", "API Integration", "UI Design"],
  period: "2025/11",
  client: "学習課題",
  team: "個人",

  image: "/kadai6/thumbnail.png",

  description: `
Qiita API で記事を取得し、microCMS の技術ブログと連携する
「学習記事収集アプリ」を開発。
Next.js（App Router）× TypeScript × Tailwind を用いて、
API連携〜記事カード一覧〜詳細ページまでの一連の実装を担当。
  `,

  overview: `
本アプリは、Qiita API と microCMS API の両方から記事を取得し、
トップページに一覧表示する Web アプリケーション。

目的は「外部 API と CMS を組み合わせ、実務に近い構成を学ぶこと」。

実装内容：

- Qiita API から記事一覧を取得  
- microCMS API からブログ一覧を取得  
- カード形式で表示（タイトル / 日付 / サムネイル）  
- App Router による動的ルート（/blogs/[id]）  
- Qiita の記事詳細ページも SSR で表示  
- html-react-parser でリッチテキストを安全に描画  
  `,

  objectives: `
学びのテーマは３つ：

① API のレスポンスを UI にマッピングする  
② App Router で動的ページを構築  
③ フロントの状態管理・UI構造を整理して実装  

Next.js の基礎〜応用まで幅広く実践できた。
  `,

  richTextNote: `
### 実装で苦労したポイント

**1. map の構造理解**  
Qiita と microCMS でレスポンス構造が異なり、  
一覧マッピング処理（items.contents.map など）に苦戦。  
→ 取得結果を整形する関数を分離し、責務を明確化して解決。

**2. SSR / CSR の使い分け**  
App Router では Fetch のタイミングによって挙動が変わるため、  
「サーバー側で取得すべきか」「クライアントで取得すべきか」を  
目的に応じて選択する必要があった。

**3. リッチテキスト描画**  
microCMS の HTML をそのまま描画すると崩れるため、  
html-react-parser を利用し安全にパースする処理を追加。
  `,

  features: [
    "Qiita API の記事収集",
    "microCMS API のブログ取得",
    "記事カード UI の設計",
    "動的ルーティング（App Router）",
    "リッチテキスト描画（html-react-parser）",
    "API レスポンス → UI へのマッピング処理",
  ],

  techStack: {
    framework: ["Next.js (App Router)"],
    languages: ["TypeScript", "React"],
    styling: ["Tailwind CSS"],
    build: ["Turbopack"],
    testing: ["Jest"],
    deploy: ["Vercel"],
    cms: ["microCMS", "Qiita API"],
  },

  ux: `
Qiita記事とブログ記事を横断して閲覧できる UI を設計。
一覧→詳細の動線、公開日表示、レスポンシブ対応など、
初めて触れるユーザーが迷わない導線を重視して開発。
  `,

  nextStep: `
- カテゴリフィルター機能追加  
- microCMS 側でタグを付与しタグ検索に対応  
- Qiita 記事のストック数・LGTM 数表示  
- 詳細ページのデザイン改善  
  `,

  images: [
    "/kadai6/thumbnail.png",
    "/kadai6/list.png",
    "/kadai6/detail.png"
  ],
},

];
