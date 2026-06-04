import{_ as c,I as l,o as h,c as o,b6 as p,j as a,J as i,w as e,a as n}from"./chunks/framework.BUXTSoD9.js";const S=JSON.parse('{"title":"AI マーケティングコピー SaaS 開発実践","description":"","frontmatter":{},"headers":[],"relativePath":"ja-jp/stage-2/assignments/copywriting-platform-supabase/index.md","filePath":"ja-jp/stage-2/assignments/copywriting-platform-supabase/index.md"}'),b={name:"ja-jp/stage-2/assignments/copywriting-platform-supabase/index.md"},k={style:{margin:"32px 0"}};function u(g,s,f,m,_,x){const t=l("StepBar"),r=l("ClientOnly"),d=l("el-card");return h(),o("div",null,[s[2]||(s[2]=p('<h1 id="ai-マーケティングコピー-saas-開発実践" tabindex="-1">AI マーケティングコピー SaaS 開発実践 <a class="header-anchor" href="#ai-マーケティングコピー-saas-開発実践" aria-label="Permalink to “AI マーケティングコピー SaaS 開発実践”">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to “概要”">​</a></h2><p>本実践プロジェクトでは、実際の PRD（要件定義書）に基づき、独立開発者やコンテンツチーム向けの AI マーケティングコピー SaaS 製品をゼロから構築します。Supabase をバックエンドサービスとして、Stripe を決済システムとして使用し、要件分析からデプロイまでの全プロセスを完了します。</p><p>これは Stage 2 の総合実践セクションです。これまでの章で、フロントエンドページの構築、バックエンドインターフェースの開発、データベース操作、決済統合などの個別スキルを学びました。このプロジェクトでは、それらすべてを統合し、実行可能な製品プロトタイプを納品します。</p><h2 id="前提知識" tabindex="-1">前提知識 <a class="header-anchor" href="#前提知識" aria-label="Permalink to “前提知識”">​</a></h2><p>本プロジェクトを開始する前に、以下の内容を習得している必要があります：</p><ul><li>フロントエンドページ設計とコンポーネントライブラリの使用（<a href="./../../frontend/ui-design/">UI 設計</a>、<a href="./../../frontend/modern-component-library/">モダンコンポーネントライブラリ</a>）</li><li>バックエンドインターフェースの設計と開発（<a href="./../../backend/ai-interface-code/">インターフェースコードの記述</a>）</li><li>データベースの基礎と Supabase（<a href="./../../backend/database-supabase/">データベースから Supabase へ</a>）</li><li>決済統合（<a href="./../../backend/stripe-payment/">Stripe 決済システム</a>）</li><li>Git ワークフローとデプロイ（<a href="./../../backend/git-workflow/">Git と GitHub</a>、<a href="./../../backend/zeabur-deployment/">Web アプリケーションのデプロイ</a>）</li></ul><h2 id="学習目標" tabindex="-1">学習目標 <a class="header-anchor" href="#学習目標" aria-label="Permalink to “学習目標”">​</a></h2><p>本実践を完了すると、以下のことができるようになります：</p><ol><li>実際の PRD を読み解き、開発タスクリストを抽出する</li><li>AI を活用して段階的にフロントエンドページとバックエンドインターフェースを生成する</li><li>Supabase を使用してユーザー認証、データベース操作を実装する</li><li>Stripe を統合して有料サブスクリプション機能を実装する</li><li>管理画面を構築し、エンドツーエンドの結合テストを完了する</li></ol><h2 id="プロジェクト概要" tabindex="-1">プロジェクト概要 <a class="header-anchor" href="#プロジェクト概要" aria-label="Permalink to “プロジェクト概要”">​</a></h2><p>構築する製品は AI マーケティングコピー SaaS であり、3つのサブシステムで構成されます：</p><table tabindex="0"><thead><tr><th>サブシステム</th><th>責務</th></tr></thead><tbody><tr><td><strong>公式サイト</strong></td><td>製品紹介、料金プラン、FAQ、登録コンバージョン</td></tr><tr><td><strong>ユーザーワークスペース</strong></td><td>製品情報の入力、コピー生成、履歴確認、プランのアップグレード</td></tr><tr><td><strong>管理画面</strong></td><td>ユーザー管理、生成記録、決済データ、運用概要</td></tr></tbody></table><p>バックエンドは Supabase でデータベースと認証機能を提供し、Stripe で決済を処理し、AI モデルでマーケティングコピーを生成します。</p><div class="tip custom-block"><p class="custom-block-title">PRD 入口</p><p>本プロジェクトの要件定義書は GitHub にあります： <a href="https://github.com/datawhalechina/easy-vibe/blob/main/docs/zh-cn/stage-2/assignments/copywriting-platform-supabase/PRD.md" target="_blank" rel="noreferrer">PRD を確認</a></p></div>',15)),a("div",k,[i(r,null,{default:e(()=>[i(t,{active:0,items:[{title:"要件分析",description:"PRD を読み、ページ、機能、認証、決済の範囲を明確にする"},{title:"スケルトン構築",description:"AI で3つのフロントエンドスケルトン（www / app / admin）を生成"},{title:"バックエンド統合",description:"Supabase 認証、生成インターフェース、Stripe 決済"},{title:"結合・デプロイ",description:"エンドツーエンドで動作確認し、デプロイしてデモを準備"}]})]),_:1})]),s[3]||(s[3]=p(`<h2 id="第1部-要件分析" tabindex="-1">第1部：要件分析 <a class="header-anchor" href="#第1部-要件分析" aria-label="Permalink to “第1部：要件分析”">​</a></h2><h3 id="_1-1-prd-の読解" tabindex="-1">1.1 PRD の読解 <a class="header-anchor" href="#_1-1-prd-の読解" aria-label="Permalink to “1.1 PRD の読解”">​</a></h3><p>PRD 文書を開き、以下の質問に重点的に答えてください：</p><ul><li>システムにはいくつの入口がありますか？それぞれどのページをカバーしていますか？</li><li>各ページのコア機能は何ですか？</li><li>バックエンドにはどのモジュールとデータテーブルが含まれていますか？</li><li>料金プラン、決済フロー、無料枠はどのように設計されていますか？</li><li>MVP の範囲は何ですか？初版で何を作り、何を作らないか？</li></ul><div class="warning custom-block"><p class="custom-block-title custom-block-title-default">WARNING</p><p>上記の質問に明確な答えがない場合は、コードを書き始めないでください。要件の理解が不明確であることは、手戻りの最も一般的な原因です。</p></div><h3 id="_1-2-システムアーキテクチャの確認" tabindex="-1">1.2 システムアーキテクチャの確認 <a class="header-anchor" href="#_1-2-システムアーキテクチャの確認" aria-label="Permalink to “1.2 システムアーキテクチャの確認”">​</a></h3><p>PRD に基づいてシステムの全体アーキテクチャを整理します：</p><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd[&quot;PRD&quot;] --&gt; web[&quot;公式サイト&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd --&gt; app[&quot;ユーザーワークスペース&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd --&gt; admin[&quot;管理画面&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app --&gt; auth[&quot;認証&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app --&gt; gen[&quot;コピー生成タスク&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  gen --&gt; db[&quot;データベース&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  billing[&quot;決済とプラン&quot;] --&gt; db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  admin --&gt; analytics[&quot;ユーザー / 生成 / 決済ダッシュボード&quot;]</span></span></code></pre></div><h2 id="第2部-プロジェクトスケルトンの構築" tabindex="-1">第2部：プロジェクトスケルトンの構築 <a class="header-anchor" href="#第2部-プロジェクトスケルトンの構築" aria-label="Permalink to “第2部：プロジェクトスケルトンの構築”">​</a></h2><h3 id="_2-1-フロントエンドページの生成" tabindex="-1">2.1 フロントエンドページの生成 <a class="header-anchor" href="#_2-1-フロントエンドページの生成" aria-label="Permalink to “2.1 フロントエンドページの生成”">​</a></h3><p>AI を使用して、まずすべてのページの基本構造とモックデータを生成します。</p><p>プロンプトの参考例：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>現在の PRD に基づいて、AI マーケティングコピー SaaS のフロントエンドスケルトンを生成してください。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要件：</span></span>
<span class="line"><span>1. 3つの入口に分ける：www、app、admin</span></span>
<span class="line"><span>2. 公式サイトには：ホーム、料金プラン、FAQ</span></span>
<span class="line"><span>3. app には：ログイン、登録、生成ワークスペース、履歴、プランページ</span></span>
<span class="line"><span>4. admin には：管理画面ホーム、ユーザー管理、生成記録、決済オーダー</span></span>
<span class="line"><span>5. まずページ構造とモックデータのみを生成し、実際のインターフェースには接続しない</span></span>
<span class="line"><span>6. モダンな SaaS のようなスタイルにし、授業のデモのような見た目にしない</span></span></code></pre></div><h3 id="_2-2-コアページの充実" tabindex="-1">2.2 コアページの充実 <a class="header-anchor" href="#_2-2-コアページの充実" aria-label="Permalink to “2.2 コアページの充実”">​</a></h3><p>スケルトンができたら、コピー生成ワークスペース（Dashboard）ページを重点的に充実させます：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/dashboard ページをさらに充実させてください。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>これは AI マーケティングコピーのワークスペースです。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>左側のフォームフィールド：</span></span>
<span class="line"><span>- 製品名</span></span>
<span class="line"><span>- 一言での紹介</span></span>
<span class="line"><span>- ターゲットユーザー</span></span>
<span class="line"><span>- 3つのセールスポイント</span></span>
<span class="line"><span>- 配信チャネル（公式サイト、WeChat モーメンツ、小紅書、Douyin、メール）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>右側の結果エリアの予約：</span></span>
<span class="line"><span>- メインタイトル</span></span>
<span class="line"><span>- サブタイトル</span></span>
<span class="line"><span>- CTA</span></span>
<span class="line"><span>- 3パターンの短いコピー</span></span>
<span class="line"><span>- 長いコピー</span></span>
<span class="line"><span></span></span>
<span class="line"><span>まずモックデータでインタラクションを動作させる。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要件：</span></span>
<span class="line"><span>- 「コピー生成」クリック後にローディング状態を表示</span></span>
<span class="line"><span>- 結果エリアに空の状態をデザイン</span></span>
<span class="line"><span>- レスポンシブレイアウトで、ワイド画面でもナロー画面でも正常に表示</span></span></code></pre></div><h3 id="_2-3-ページ構造の検証" tabindex="-1">2.3 ページ構造の検証 <a class="header-anchor" href="#_2-3-ページ構造の検証" aria-label="Permalink to “2.3 ページ構造の検証”">​</a></h3><p>各項目をチェック：</p><ul><li>[ ] 3つの入口のルーティングが独立しているか</li><li>[ ] ページ数が PRD と一致しているか</li><li>[ ] Dashboard のフォームと結果エリアのレイアウトが適切か</li><li>[ ] モックデータが基本的な UI の状態を表現しているか</li></ul><h3 id="行き詰まったら" tabindex="-1">行き詰まったら <a class="header-anchor" href="#行き詰まったら" aria-label="Permalink to “行き詰まったら”">​</a></h3><p>フロントエンド構築の段階で行き詰まった場合は、以下の章を振り返ってください：</p><ul><li><a href="./../../frontend/ui-design/">UI 設計</a></li><li><a href="./../../frontend/multi-product-ui/">UI 設計仕様を参考にページとボタンを設計</a></li><li><a href="./../../frontend/llm-skills-beautiful/">LLM と Skills でインターフェースを見栄えよくする</a></li><li><a href="./../../frontend/design-to-code/">デザインプロトタイプからプロジェクトコードへ</a></li><li><a href="./../../frontend/modern-component-library/">モダンコンポーネントライブラリでインターフェースをアップデート</a></li></ul><h2 id="第3部-バックエンド統合" tabindex="-1">第3部：バックエンド統合 <a class="header-anchor" href="#第3部-バックエンド統合" aria-label="Permalink to “第3部：バックエンド統合”">​</a></h2><h3 id="_3-1-supabase-ログインの統合" tabindex="-1">3.1 Supabase ログインの統合 <a class="header-anchor" href="#_3-1-supabase-ログインの統合" aria-label="Permalink to “3.1 Supabase ログインの統合”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>私はプログラミング初心者です。ステップバイステップで Supabase のログイン統合を案内してください。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>私のために以下を完了してください：</span></span>
<span class="line"><span>1. プロジェクトに Supabase を統合</span></span>
<span class="line"><span>2. 登録、ログイン、ログアウト機能を実装</span></span>
<span class="line"><span>3. ログイン成功後に /dashboard にリダイレクト</span></span>
<span class="line"><span>4. 未ログインユーザーが /dashboard、/billing、/admin にアクセスした場合、自動的に /login にリダイレクト</span></span>
<span class="line"><span>5. profiles テーブルを作成</span></span>
<span class="line"><span>6. ユーザー登録成功後、自動的に profiles テーブルにレコードを作成</span></span>
<span class="line"><span>7. profiles テーブルには email、role、plan フィールドを含める</span></span>
<span class="line"><span></span></span>
<span class="line"><span>実装要件：</span></span>
<span class="line"><span>- 各ステップでどのファイルを変更しているかを説明</span></span>
<span class="line"><span>- 秘密鍵をハードコーディングしない</span></span>
<span class="line"><span>- Supabase 管理画面で手動操作が必要な箇所は明確に記載</span></span>
<span class="line"><span>- 完了後、登録とログインの確認方法を説明</span></span></code></pre></div><h3 id="_3-2-生成インターフェースとデータベースの統合" tabindex="-1">3.2 生成インターフェースとデータベースの統合 <a class="header-anchor" href="#_3-2-生成インターフェースとデータベースの統合" aria-label="Permalink to “3.2 生成インターフェースとデータベースの統合”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>私はプログラミング初心者です。サイトのコア機能である「マーケティングコピーの生成と保存」を実装するのを手伝ってください。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>目標とする効果：</span></span>
<span class="line"><span>1. ユーザーが /dashboard でフォームに入力し、「コピー生成」をクリック</span></span>
<span class="line"><span>2. バックエンドが受け取る：製品名、紹介、ターゲットユーザー、セールスポイント、配信チャネル</span></span>
<span class="line"><span>3. バックエンドがモデルを呼び出して結果を生成</span></span>
<span class="line"><span>4. ページに生成結果を表示</span></span>
<span class="line"><span>5. 入力と出力の両方をデータベースに保存</span></span>
<span class="line"><span>6. ユーザーが次回アクセス時に履歴を確認可能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>私のために以下を完了してください：</span></span>
<span class="line"><span>- 生成インターフェース /api/generate を作成</span></span>
<span class="line"><span>- generations テーブルを作成</span></span>
<span class="line"><span>- 入力と出力のフィールドを設計</span></span>
<span class="line"><span>- Dashboard ページで現在のユーザーの履歴を読み込む</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ユーザーエクスペリエンス：</span></span>
<span class="line"><span>- ボタンのローディング状態</span></span>
<span class="line"><span>- 生成失敗時のエラーメッセージ</span></span>
<span class="line"><span>- 履歴がない場合の空の状態</span></span>
<span class="line"><span></span></span>
<span class="line"><span>完了後、以下を説明してください：</span></span>
<span class="line"><span>- フロントエンドページファイルの場所</span></span>
<span class="line"><span>- バックエンドインターフェースファイルの場所</span></span>
<span class="line"><span>- データベースへの書き込みロジックの場所</span></span>
<span class="line"><span>- 完全な生成チェーンのテスト方法</span></span></code></pre></div><h3 id="_3-3-stripe-決済の統合" tabindex="-1">3.3 Stripe 決済の統合 <a class="header-anchor" href="#_3-3-stripe-決済の統合" aria-label="Permalink to “3.3 Stripe 決済の統合”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>私はプログラミング初心者です。LaunchKit に最小限の Stripe 決済を追加するのを手伝ってください。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>複雑なシステムは不要で、まず最基本的な決済フローを動作させます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>私のために以下を完了してください：</span></span>
<span class="line"><span>1. /billing ページに free と pro の2つのプランを表示</span></span>
<span class="line"><span>2. ユーザーがアップグレードをクリックした後、Stripe Checkout にリダイレクト</span></span>
<span class="line"><span>3. 決済成功後にサイトに戻る</span></span>
<span class="line"><span>4. 決済結果を subscriptions テーブルに保存</span></span>
<span class="line"><span>5. profile.plan フィールドを同期的に更新</span></span>
<span class="line"><span>6. free ユーザーは1日3回まで生成可能、pro ユーザーは無制限</span></span>
<span class="line"><span></span></span>
<span class="line"><span>実装原則：</span></span>
<span class="line"><span>- まずメインフローを動作させ、複雑なエッジケースは後回し</span></span>
<span class="line"><span>- Stripe 管理画面での設定が必要な箇所は明確に記載</span></span>
<span class="line"><span>- 完了後、完全な決済フローのテスト方法を説明</span></span></code></pre></div><h3 id="_3-4-管理画面の構築" tabindex="-1">3.4 管理画面の構築 <a class="header-anchor" href="#_3-4-管理画面の構築" aria-label="Permalink to “3.4 管理画面の構築”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>私はプログラミング初心者です。シンプルで使いやすい管理画面を作成してください。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>管理者のみアクセス可能。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>私のために以下を完了してください：</span></span>
<span class="line"><span>1. role = admin のユーザーのみ /admin にアクセス可能</span></span>
<span class="line"><span>2. 管理画面には3つのタブを含める：ユーザーリスト、生成記録、サブスクリプション状況</span></span>
<span class="line"><span>3. ユーザーリストの表示：email、plan、作成日時</span></span>
<span class="line"><span>4. 生成記録の表示：ユーザー、製品名、チャネル、作成日時</span></span>
<span class="line"><span>5. サブスクリプション状況の表示：ユーザー、プラン、決済ステータス</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要件：</span></span>
<span class="line"><span>- インターフェースはシンプルで見やすく</span></span>
<span class="line"><span>- 既存のコンポーネントライブラリのテーブル、タブ、バッジを使用</span></span>
<span class="line"><span>- 完了後、アカウントを管理者に設定する方法を説明</span></span></code></pre></div><h3 id="行き詰まったら-1" tabindex="-1">行き詰まったら <a class="header-anchor" href="#行き詰まったら-1" aria-label="Permalink to “行き詰まったら”">​</a></h3><p>バックエンド開発の段階で行き詰まった場合は、以下の章を振り返ってください：</p><ul><li><a href="./../../backend/database-supabase/">データベースから Supabase へ</a></li><li><a href="./../../backend/ai-interface-code/">大規模言語モデルによるインターフェースコードとインターフェース文書の作成支援</a></li><li><a href="./../../backend/stripe-payment/">Stripe などの決済システムの統合方法</a></li></ul><h2 id="第4部-結合テストとデプロイ" tabindex="-1">第4部：結合テストとデプロイ <a class="header-anchor" href="#第4部-結合テストとデプロイ" aria-label="Permalink to “第4部：結合テストとデプロイ”">​</a></h2><h3 id="_4-1-エンドツーエンドテスト" tabindex="-1">4.1 エンドツーエンドテスト <a class="header-anchor" href="#_4-1-エンドツーエンドテスト" aria-label="Permalink to “4.1 エンドツーエンドテスト”">​</a></h3><p>少なくとも以下のシナリオを検証してください：</p><ul><li>登録 → ログイン → コピー生成 → 履歴確認 → プランのアップグレード</li><li>管理者のログイン → ユーザーデータの確認 → 生成記録の確認 → 決済ステータスの確認</li></ul><p>デプロイ前チェック：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>私はプログラミング初心者です。プロジェクトがデプロイ可能かどうかを確認するのを手伝ってください。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>チェックのポイント：</span></span>
<span class="line"><span>- 環境変数は完全か</span></span>
<span class="line"><span>- ログインのコールバックアドレスは正しいか</span></span>
<span class="line"><span>- Stripe 決済のコールバックアドレスは正しいか</span></span>
<span class="line"><span>- ページにローディング、空の状態、エラーメッセージが欠落していないか</span></span>
<span class="line"><span>- README に起動説明とデプロイ説明が含まれているか</span></span>
<span class="line"><span></span></span>
<span class="line"><span>私のために以下をしてください：</span></span>
<span class="line"><span>1. 優先度順に修正項目をリストアップ</span></span>
<span class="line"><span>2. どれを先に修正すべきかをマーク</span></span>
<span class="line"><span>3. 修正後のデプロイ手順を説明</span></span></code></pre></div><h3 id="_4-2-デプロイ" tabindex="-1">4.2 デプロイ <a class="header-anchor" href="#_4-2-デプロイ" aria-label="Permalink to “4.2 デプロイ”">​</a></h3><p>プロジェクトをパブリックネットワーク環境にデプロイします。デプロイのチュートリアルはこちらを参照してください：<a href="./../../backend/git-workflow/">Git と GitHub ワークフロー</a>、<a href="./../../backend/zeabur-deployment/">Web アプリケーションのデプロイ方法</a>。</p><h2 id="提出物" tabindex="-1">提出物 <a class="header-anchor" href="#提出物" aria-label="Permalink to “提出物”">​</a></h2><p>本プロジェクト完了後、以下の内容を提出してください：</p><ul><li>[ ] アクセス可能なオンラインデモリンク</li><li>[ ] ソースコードリポジトリのリンク（README を含む）</li><li>[ ] PRD 文書</li><li>[ ] コアページのスクリーンショット（ホーム、Dashboard、Billing、Admin）</li><li>[ ] 60秒のデモ動画（登録 → 生成 → 決済 → 管理画面を網羅）</li></ul><p>README には少なくとも以下を含めてください：プロジェクト概要、コアページの説明、技術スタック、ローカル起動手順、環境変数リスト。</p><h2 id="評価基準" tabindex="-1">評価基準 <a class="header-anchor" href="#評価基準" aria-label="Permalink to “評価基準”">​</a></h2><table tabindex="0"><thead><tr><th>項目</th><th>基本要件</th><th>応用要件</th></tr></thead><tbody><tr><td>製品の完成度</td><td>ホーム、ログイン、Dashboard、Billing、Admin にすべてアクセス可能</td><td>ホームのコピーとビジュアルスタイルが本物の SaaS のように見える</td></tr><tr><td>ビジネス完了</td><td>登録 → ログイン → 生成 → 履歴確認が動作する</td><td>無料 / Pro の権限差が明確に確認できる</td></tr><tr><td>データの正確性</td><td>生成結果と決済ステータスがデータベースに書き込まれる</td><td>明確なエラーメッセージ、空の状態、ローディングがある</td></tr><tr><td>権限とセキュリティ</td><td>未ログインで保護されたページにアクセスできず、一般ユーザーは Admin に入れない</td><td>基本的な入力バリデーションとサーバーサイド認証がある</td></tr><tr><td>エンジニアリング品質</td><td>プロジェクトがローカルで起動可能で、パブリックネットワークにもデプロイ可能</td><td>README が明確で、デモ動画の構造が完全</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>タスクが大きすぎると感じた場合は、この原則を覚えておいてください：<strong>まず「動くこと」を確保してから、「美しくすること」を追求してください。</strong></p></div><h2 id="提出前チェック" tabindex="-1">提出前チェック <a class="header-anchor" href="#提出前チェック" aria-label="Permalink to “提出前チェック”">​</a></h2>`,50)),i(d,{shadow:"hover",style:{margin:"20px 0","border-radius":"12px"}},{header:e(()=>[...s[0]||(s[0]=[a("div",{style:{"font-weight":"bold","font-size":"16px"}},"提出前の最終確認",-1)])]),default:e(()=>[s[1]||(s[1]=a("ul",{style:{"list-style-type":"none","padding-left":"0"}},[a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" ホーム、ログイン、Dashboard、Billing、Admin がすべて完了している")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" ユーザーが登録、ログイン、ログアウトできる")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 生成結果が実際にデータベースに書き込まれる")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 決済のメインフローが動作する")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 管理者がユーザー、生成記録、決済ステータスを確認できる")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" プロジェクトがパブリックネットワークにデプロイされている")])])],-1))]),_:1}),s[4]||(s[4]=p('<h2 id="参考資料" tabindex="-1">参考資料 <a class="header-anchor" href="#参考資料" aria-label="Permalink to “参考資料”">​</a></h2><ul><li><a href="./../../frontend/ui-design/">UI 設計</a></li><li><a href="./../../frontend/multi-product-ui/">UI 設計仕様を参考にページとボタンを設計</a></li><li><a href="./../../frontend/llm-skills-beautiful/">LLM と Skills でインターフェースを見栄えよくする</a></li><li><a href="./../../frontend/design-to-code/">デザインプロトタイプからプロジェクトコードへ</a></li><li><a href="./../../frontend/modern-component-library/">モダンコンポーネントライブラリでインターフェースをアップデート</a></li><li><a href="./../../backend/database-supabase/">データベースから Supabase へ</a></li><li><a href="./../../backend/ai-interface-code/">大規模言語モデルによるインターフェースコードとインターフェース文書の作成支援</a></li><li><a href="./../../backend/git-workflow/">Git と GitHub ワークフロー</a></li><li><a href="./../../backend/zeabur-deployment/">Web アプリケーションのデプロイ方法</a></li><li><a href="./../../backend/stripe-payment/">Stripe などの決済システムの統合方法</a></li></ul>',2))])}const P=c(b,[["render",u]]);export{S as __pageData,P as default};
