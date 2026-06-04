import{_ as a,o as n,c as i,b6 as l}from"./chunks/framework.BUXTSoD9.js";const d=JSON.parse('{"title":"AI支援開発ワークフロー","description":"","frontmatter":{},"headers":[],"relativePath":"ja-jp/stage-3/core-skills/workflow/index.md","filePath":"ja-jp/stage-3/core-skills/workflow/index.md"}'),p={name:"ja-jp/stage-3/core-skills/workflow/index.md"};function e(t,s,h,r,g,c){return n(),i("div",null,[...s[0]||(s[0]=[l(`<h1 id="ai支援開発ワークフロー" tabindex="-1">AI支援開発ワークフロー <a class="header-anchor" href="#ai支援開発ワークフロー" aria-label="Permalink to “AI支援開発ワークフロー”">​</a></h1><p>これまでの章で、AI IDEを使ってコードを書く方法、Gitでコードのバージョンを管理する方法、APIインターフェースを設計・実装する方法を学んできました。しかし、実際の開発タスクに直面すると、次のような疑問にぶつかるかもしれません：</p><ul><li>「このプロジェクトには何千ものファイルがある。どこから始めればいいの？」</li><li>「上司から新機能の追加を頼まれたけど、この部分のコードベースに詳しくない」</li><li>「このバグがどこにあるのか全く分からない。コードが多すぎる」</li><li>「このコードの山をリファクタリングしたいけど、何かを壊すのが怖い」</li></ul><p>これらの疑問の本質は、<strong>実際の開発シナリオでAIツールをどう効率的に活用して仕事を進めるか</strong>ということです。</p><p>このレッスンでは、体系的なAI支援開発ワークフローを構築する方法を学び、さまざまな開発シナリオでAIを効率的に活用できるようにします。具体的な例を通じて、新機能開発、バグ修正、コードリファクタリングなどでAIを使う方法を示します。</p><blockquote><p>💡 <strong>前提条件</strong></p><p>このセクションを学ぶ前に、まず以下を理解しておくことをお勧めします：</p><ul><li><a href="./../../stage-1/ai-ide/">AI IDEの基礎</a> - AI IDEの基本的な使い方をマスターする</li><li><a href="./../../stage-2/backend/git-workflow/">GitとGitHubのワークフロー</a> - コードのバージョン管理を理解する</li><li><a href="./../../stage-2/backend/ai-interface-code/">大規模モデルを使ったAPIコードの作成</a> - AI支援開発の基本概念を理解する</li></ul></blockquote><div class="info custom-block"><p class="custom-block-title">📚 この章で学ぶこと</p><ol><li>開発プロセスにおけるAIの役割とその能力の境界を理解する</li><li>異なるプロジェクトタイプに応じたAI支援開発戦略をマスターする</li><li>新機能開発、バグ修正、コードリファクタリングなどのシナリオでClaude Codeを使う方法を学ぶ</li><li>プロジェクトのナレッジベースを構築し、Claude Codeとの協業効率を向上させる</li><li>AIとの協業効率を高める実践的なテクニックをマスターする</li></ol></div><h1 id="_1-aiの能力の境界を理解する" tabindex="-1">1. AIの能力の境界を理解する <a class="header-anchor" href="#_1-aiの能力の境界を理解する" aria-label="Permalink to “1. AIの能力の境界を理解する”">​</a></h1><p>AIを使って開発を支援し始める前に、まずAIにできることとできないことを理解する必要があります。そうして初めて、適切な協業モデルを構築できます。</p><h2 id="_1-1-aiが得意なこと" tabindex="-1">1.1 AIが得意なこと <a class="header-anchor" href="#_1-1-aiが得意なこと" aria-label="Permalink to “1.1 AIが得意なこと”">​</a></h2><p>AIを、明確な指示を必要とする非常に賢いアシスタントと考えてください。記述に基づいてコードの骨組みを素早く生成でき、数千行のコードを数秒で読んで必要な部分を見つけることもできます。明らかな構文エラーや一般的なセキュリティ脆弱性があれば、それらを発見するのにも役立ちます。変数の一括リネーム、コードのフォーマット、ドキュメントコメントの生成といった反復的なタスクは、特にAIに任せるのに適しています。</p><p>簡単に言えば、AIは明確なルールがあり自動化できる作業が得意です。</p><h2 id="_1-2-aiが苦手なこと" tabindex="-1">1.2 AIが苦手なこと <a class="header-anchor" href="#_1-2-aiが苦手なこと" aria-label="Permalink to “1.2 AIが苦手なこと”">​</a></h2><p>しかし、AIにも限界があります。ビジネスロジックを理解していません。詳しく伝えない限り、あなたの会社の注文フローがどうなっているかは分かりません。また、技術選定やアーキテクチャ設計のような、トレードオフを考慮する必要がある意思決定もできません。それらはあなたの経験とプロジェクトへの理解に依存するからです。さらに、「すべてのAPIにロギングが必要」「エラーコードはenumを使う必要がある」といったチームの特別なルールも知りません。それらのルールを設定するか、明示的に伝える必要があります。</p><p>最も重要なのは、AIが生成したコードをそのまま使ってはいけないということです。必ずレビューしてテストする必要があります。正しく見えるが実際には問題があるコードを生成する可能性があり、特定のエッジケースを見落とすこともあります。</p><h2 id="_1-3-aiとの協業方法" tabindex="-1">1.3 AIとの協業方法 <a class="header-anchor" href="#_1-3-aiとの協業方法" aria-label="Permalink to “1.3 AIとの協業方法”">​</a></h2><p>AIの能力の境界を理解すると、協業モデルが明確になります：何を作るかを決め、意思決定を行い、品質を確保するのはあなたの責任；具体的なコーディング作業の実行、情報の検索、明白な問題の発見はAIの責任です。</p><p>これはジュニア開発者と仕事をするのに似ています。何をすべきかを伝え、彼らが実装し、その後コードをレビューします。違いは、AIの実行速度ははるかに速いですが、判断力は人間より劣るということです。</p><h1 id="_2-異なるプロジェクトタイプの開発戦略" tabindex="-1">2. 異なるプロジェクトタイプの開発戦略 <a class="header-anchor" href="#_2-異なるプロジェクトタイプの開発戦略" aria-label="Permalink to “2. 異なるプロジェクトタイプの開発戦略”">​</a></h1><p>プロジェクトのタイプによって、開発スタイルとAIの活用戦略は異なります。適切な戦略を選ぶことで、開発効率を大幅に向上できます。</p><h2 id="_2-1-新規プロジェクト-ゼロから始める場合" tabindex="-1">2.1 新規プロジェクト（ゼロから始める場合） <a class="header-anchor" href="#_2-1-新規プロジェクト-ゼロから始める場合" aria-label="Permalink to “2.1 新規プロジェクト（ゼロから始める場合）”">​</a></h2><p><strong>プロジェクトの特徴：</strong></p><ul><li>過去の負債がなく、自由に設計できる</li><li>プロジェクト構造とコード規約を確立する必要がある</li><li>高速なイテレーションと試行錯誤に適している</li></ul><p><strong>推奨されるワークフロー：</strong></p><p><strong>ステップ1：プロジェクト構造を計画する</strong></p><p>コーディングを始める前に、まずAIにプロジェクト構造と技術選定の計画を手伝ってもらいます：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>タスク管理アプリを構築したい。機能は以下の通り：</span></span>
<span class="line"><span>- ユーザー登録とログイン</span></span>
<span class="line"><span>- タスクの作成、編集、削除</span></span>
<span class="line"><span>- タスクのカテゴリとタグ</span></span>
<span class="line"><span>- タスクリマインダー</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以下を手伝ってほしい：</span></span>
<span class="line"><span>1. 適切な技術スタックの推奨</span></span>
<span class="line"><span>2. プロジェクトのディレクトリ構造の設計</span></span>
<span class="line"><span>3. データベーススキーマの計画</span></span></code></pre></div><p><strong>ステップ2：基本フレームワークを構築する</strong></p><p>計画に基づいて、AIに基本的なプロジェクト構造を作成してもらいます：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>先ほどの計画に基づいて、以下を手伝ってほしい：</span></span>
<span class="line"><span>1. プロジェクトのディレクトリ構造を作成</span></span>
<span class="line"><span>2. 設定ファイル（package.json、.envなど）を初期化</span></span>
<span class="line"><span>3. 基本的なサーバーコードを作成</span></span></code></pre></div><p><strong>ステップ3：機能を一つずつ実装する</strong></p><p>優先順位に従って機能モジュールを一つずつ実装します：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>次はユーザー登録機能を実装する。要件は以下の通り：</span></span>
<span class="line"><span>- メールアドレスとパスワードで登録</span></span>
<span class="line"><span>- パスワードを暗号化して保存</span></span>
<span class="line"><span>- メール認証</span></span></code></pre></div><p><strong>ポイント：</strong></p><ul><li>早い段階でコード規約を確立し、AIがそれに従ったコードを生成するようにする</li><li>各機能モジュールが完成したらすぐにテストして検証する</li><li>プロジェクトのドキュメントを適時に更新する</li></ul><h2 id="_2-2-成熟したプロジェクト-大規模な既存コードベース" tabindex="-1">2.2 成熟したプロジェクト（大規模な既存コードベース） <a class="header-anchor" href="#_2-2-成熟したプロジェクト-大規模な既存コードベース" aria-label="Permalink to “2.2 成熟したプロジェクト（大規模な既存コードベース）”">​</a></h2><p><strong>プロジェクトの特徴：</strong></p><ul><li>大規模なコードベースで歴史的な規約がある</li><li>コーディングスタイルの一貫性を保つ必要がある</li><li>変更は影響範囲を考慮する必要がある</li></ul><p><strong>推奨されるワークフロー：</strong></p><p><strong>ステップ1：プロジェクト構造を理解する</strong></p><p>コードを変更する前に、まずAIにプロジェクトの理解を手伝ってもらいます：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>これはECプロジェクトで、クーポン機能を追加する必要がある。</span></span>
<span class="line"><span>以下を手伝ってほしい：</span></span>
<span class="line"><span>1. プロジェクト全体の構造を分析</span></span>
<span class="line"><span>2. 注文関連のコードを見つける</span></span>
<span class="line"><span>3. 他の類似機能がどのように実装されているか確認する</span></span></code></pre></div><p><strong>ステップ2：参考コードを見つける</strong></p><p>プロジェクト内の類似実装をAIに見つけて参考にしてもらいます：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>プロジェクト内の他のプロモーション機能（満額割引や割引など）がどのように実装されているか見つけてほしい</span></span></code></pre></div><p><strong>ステップ3：既存のスタイルに従う</strong></p><p>既存のコードのスタイルで新機能を実装するようにAIに依頼します：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>満額割引プロモーションの実装方法を参考にして、クーポン機能を実装してほしい。</span></span>
<span class="line"><span>同じコードスタイルとディレクトリ構造を維持してほしい。</span></span></code></pre></div><p><strong>ポイント：</strong></p><ul><li>まず理解してから変更し、既存のアーキテクチャを損なわないようにする</li><li>コーディングスタイルの一貫性を保つ</li><li>変更後に関連機能をテストする</li></ul><h2 id="_2-3-ラピッドプロトタイプ-アイデアの検証" tabindex="-1">2.3 ラピッドプロトタイプ（アイデアの検証） <a class="header-anchor" href="#_2-3-ラピッドプロトタイプ-アイデアの検証" aria-label="Permalink to “2.3 ラピッドプロトタイプ（アイデアの検証）”">​</a></h2><p><strong>プロジェクトの特徴：</strong></p><ul><li>スピードが最も重要で、コード品質はそれほど重要ではない</li><li>製品アイデアや技術アプローチの検証に使用する</li><li>後で破棄または書き直す可能性がある</li></ul><p><strong>推奨されるワークフロー：</strong></p><p><strong>要件を直接記述して素早く実装する：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>シンプルなTodoアプリを構築する。要件は以下の通り：</span></span>
<span class="line"><span>- タスクの追加、削除、完了マーク</span></span>
<span class="line"><span>- データをローカルに保存</span></span>
<span class="line"><span>- UIはシンプルに、動けばよい</span></span></code></pre></div><p><strong>素早くイテレーションする：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>検索機能を追加</span></span>
<span class="line"><span>ダークテーマに切り替え</span></span>
<span class="line"><span>タスクカテゴリを追加</span></span></code></pre></div><p><strong>ポイント：</strong></p><ul><li>コード品質や規約をあまり気にしない</li><li>アイデアを素早く検証し、適時に方向を調整する</li><li>プロトタイプが成功した場合、後でリファクタリングが必要になる</li></ul><h2 id="_2-4-メンテナンスプロジェクト-主にバグ修正" tabindex="-1">2.4 メンテナンスプロジェクト（主にバグ修正） <a class="header-anchor" href="#_2-4-メンテナンスプロジェクト-主にバグ修正" aria-label="Permalink to “2.4 メンテナンスプロジェクト（主にバグ修正）”">​</a></h2><p><strong>プロジェクトの特徴：</strong></p><ul><li>コードはすでに安定しており、主なタスクは問題の修正</li><li>問題を素早く特定する必要がある</li><li>新しい問題を引き起こさないよう慎重に変更する必要がある</li></ul><p><strong>推奨されるワークフロー：</strong></p><p><strong>ステップ1：問題を特定する</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ユーザーからのフィードバック：「注文を送信」ボタンをクリックした後、ページがフリーズする</span></span>
<span class="line"><span>コンソールエラー：TypeError: Cannot read property &#39;id&#39; of undefined</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以下を手伝ってほしい：</span></span>
<span class="line"><span>1. 考えられる原因を分析</span></span>
<span class="line"><span>2. 関連するコードを見つける</span></span></code></pre></div><p><strong>ステップ2：根本原因を分析する</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>このエラーがどのような状況で発生するか確認してほしい</span></span>
<span class="line"><span>データフローを調査してほしい</span></span></code></pre></div><p><strong>ステップ3：修正を適用する</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>この問題を修正してほしい。また以下も行ってほしい：</span></span>
<span class="line"><span>1. 類似の問題を回避するための防御的コードを追加</span></span>
<span class="line"><span>2. ユーザー体験を向上させるエラーメッセージを追加</span></span></code></pre></div><p><strong>ポイント：</strong></p><ul><li>修正後、他の機能に影響がないことを徹底的にテストする</li><li>システムの堅牢性を向上させる防御的コードを追加する</li><li>将来の参考のために問題と解決策を記録する</li></ul><h1 id="_3-一般的な開発タスクのワークフロー" tabindex="-1">3. 一般的な開発タスクのワークフロー <a class="header-anchor" href="#_3-一般的な開発タスクのワークフロー" aria-label="Permalink to “3. 一般的な開発タスクのワークフロー”">​</a></h1><p>日常の開発では、さまざまなタイプのタスクに遭遇します。以下に、最も一般的なAI支援ワークフローをいくつか紹介します。</p><h2 id="_3-1-新機能の開発" tabindex="-1">3.1 新機能の開発 <a class="header-anchor" href="#_3-1-新機能の開発" aria-label="Permalink to “3.1 新機能の開発”">​</a></h2><p><strong>シナリオ：</strong> プロダクトマネージャーから新しい要件が渡され、新機能を実装する必要がある。</p><p><strong>完全なワークフロー：</strong></p><p><strong>ステップ1：要件を理解する</strong>（自分で行う）</p><p>コーディングを始める前に、まず以下を明確にする：</p><ul><li>どのような機能を実装する必要があるか？</li><li>入力と出力は何か？</li><li>エッジケースと例外ケースは何か？</li><li>パフォーマンスとセキュリティの要件は何か？</li></ul><p><strong>ステップ2：既存のコードを理解する</strong>（AIに手伝ってもらう）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ユーザーコメント機能を実装する必要がある。以下を手伝ってほしい：</span></span>
<span class="line"><span>1. プロジェクト内に類似するものがあるか確認</span></span>
<span class="line"><span>2. ユーザーデータと記事データがどのように保存されているか確認</span></span>
<span class="line"><span>3. このプロジェクトのデータベース操作の規約を理解</span></span></code></pre></div><p><strong>ステップ3：実装計画を作成する</strong>（AIと一緒に）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>先ほどの分析に基づいて、コメント機能の実装には以下が必要：</span></span>
<span class="line"><span>1. コメントデータモデルの作成</span></span>
<span class="line"><span>2. コメントのCRUD APIの実装</span></span>
<span class="line"><span>3. フロントエンドにコメントの表示と投稿機能を追加</span></span>
<span class="line"><span></span></span>
<span class="line"><span>この計画が合理的か、何か抜けているか確認してほしい</span></span></code></pre></div><p><strong>ステップ4：機能を実装する</strong>（AIが生成、自分がレビュー）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>計画に従って、まずコメントデータモデルを実装してほしい。</span></span>
<span class="line"><span>要件：</span></span>
<span class="line"><span>- コメント内容、著者、記事ID、作成時間を含める</span></span>
<span class="line"><span>- ネストされたコメント返信をサポート</span></span>
<span class="line"><span>- 必要なインデックスを追加</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>次にコメントのAPIエンドポイントを実装してほしい。</span></span>
<span class="line"><span>要件：</span></span>
<span class="line"><span>- コメントを投稿</span></span>
<span class="line"><span>- コメントを削除（自分のコメントのみ削除可能）</span></span>
<span class="line"><span>- 記事の全コメントを取得</span></span>
<span class="line"><span>- ページネーションをサポート</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>最後にフロントエンドのコメントコンポーネントを実装してほしい。</span></span>
<span class="line"><span>要件：</span></span>
<span class="line"><span>- コメントリストの表示</span></span>
<span class="line"><span>- コメント投稿フォーム</span></span>
<span class="line"><span>- コメントへの返信をサポート</span></span></code></pre></div><p><strong>ステップ5：テストと検証</strong>（自分で行う）</p><ul><li>メインフローを手動テスト</li><li>空の内容や長すぎる内容などのエッジケースをテスト</li><li>他人のコメントを削除できないなどの権限制御をテスト</li><li>AIに自動テストの作成を手伝ってもらう</li></ul><p><strong>実際の対話例：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>あなた：ユーザーが記事にコメントできる機能を追加したい</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：承知しました。まずプロジェクトの構造を理解させてください。</span></span>
<span class="line"><span>    [AIがプロジェクトのコードを分析]</span></span>
<span class="line"><span>    プロジェクトにはすでにユーザーシステム（models/user.js）</span></span>
<span class="line"><span>    と記事システム（models/article.js）があることが分かりました。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    コメント機能の実装には以下が必要です：</span></span>
<span class="line"><span>    1. コメントデータモデルの作成（models/comment.js）</span></span>
<span class="line"><span>    2. コメント関連APIの追加（routes/comment.js）</span></span>
<span class="line"><span>    3. 記事詳細ページにコメントの表示と投稿機能を追加</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    実装を始めてもよろしいですか？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>あなた：はい、始めましょう。まずデータモデルを作成して</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[models/comment.jsを生成]</span></span>
<span class="line"><span>    コメントデータモデルを作成しました。フィールドは以下の通り：</span></span>
<span class="line"><span>    - id：コメントID</span></span>
<span class="line"><span>    - content：コメント内容</span></span>
<span class="line"><span>    - userId：著者ID</span></span>
<span class="line"><span>    - articleId：記事ID</span></span>
<span class="line"><span>    - parentId：親コメントID（ネストされた返信用）</span></span>
<span class="line"><span>    - createdAt：作成時間</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    次にAPIを実装しましょうか？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>あなた：はい、APIを実装して</span></span></code></pre></div><h2 id="_3-2-バグの修正" tabindex="-1">3.2 バグの修正 <a class="header-anchor" href="#_3-2-バグの修正" aria-label="Permalink to “3.2 バグの修正”">​</a></h2><p><strong>シナリオ：</strong> ユーザーから問題が報告され、素早く特定して修正する必要がある。</p><p><strong>完全なワークフロー：</strong></p><p><strong>ステップ1：情報を収集する</strong>（自分で行う）</p><p>以下の情報を記録する：</p><ul><li>エラーメッセージは何か？</li><li>この問題をどのように再現できるか？</li><li>いつから発生し始めたか？</li><li>影響範囲はどの程度か？</li></ul><p><strong>ステップ2：問題を特定する</strong>（AIに手伝ってもらう）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ユーザーからのフィードバック：「注文を送信」ボタンをクリックした後、ページがフリーズする</span></span>
<span class="line"><span>ブラウザコンソールエラー：TypeError: Cannot read property &#39;id&#39; of undefined</span></span>
<span class="line"><span>エラーはcheckout.jsの45行目で発生</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以下を手伝ってほしい：</span></span>
<span class="line"><span>1. 考えられる原因を分析</span></span>
<span class="line"><span>2. 関連するコードを見つける</span></span>
<span class="line"><span>3. データフローを確認</span></span></code></pre></div><p><strong>ステップ3：根本原因を分析する</strong>（AIと一緒に）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>このuserオブジェクトがどこから来ているか確認してほしい</span></span>
<span class="line"><span>userがundefinedになるのはどのような状況か調査してほしい</span></span></code></pre></div><p><strong>ステップ4：修正を実装する</strong>（AIが生成、自分がレビュー）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>以下の要件でこの問題を修正してほしい：</span></span>
<span class="line"><span>1. userが存在するか確認する防御的コードを追加</span></span>
<span class="line"><span>2. userが存在しない場合、ログインページにリダイレクト</span></span>
<span class="line"><span>3. わかりやすいエラーメッセージを追加</span></span></code></pre></div><p><strong>ステップ5：修正を検証する</strong>（自分で行う）</p><ul><li>元の手順で問題を再現し、問題が解決されたことを確認</li><li>関連機能をテストし、新しい問題が発生していないことを確認</li><li>他の場所に同様の問題がないか考える</li></ul><p><strong>実際の対話例：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>あなた：ログイン後にページを更新するとログアウトされるというユーザー報告がありました</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：これは通常、トークンの保存または検証の問題です。確認させてください：</span></span>
<span class="line"><span>    1. トークンはlocalStorageとcookiesのどちらに保存されていますか？</span></span>
<span class="line"><span>    2. ページ更新時にトークンは再読み込みされますか？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    トークン関連のコードがどのファイルにあるか教えてください</span></span>
<span class="line"><span></span></span>
<span class="line"><span>あなた：utils/auth.jsです</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[utils/auth.jsを分析]</span></span>
<span class="line"><span>    問題を発見しました：トークンはsessionStorageに保存されており、</span></span>
<span class="line"><span>    sessionStorageはページが更新されるとクリアされます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    解決策：localStorageを使用するように変更する</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    変更しましょうか？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>あなた：はい、変更して</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[コードを修正]</span></span>
<span class="line"><span>    変更が完了しました。トークンはlocalStorageに保存されるようになり、</span></span>
<span class="line"><span>    ページ更新後も失われなくなりました。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    以下のテストをお勧めします：</span></span>
<span class="line"><span>    1. ログインしてページを更新し、ログイン状態が維持されることを確認</span></span>
<span class="line"><span>    2. ブラウザを閉じて再度開き、ログイン状態が維持されることを確認</span></span></code></pre></div><h2 id="_3-3-コードのリファクタリング" tabindex="-1">3.3 コードのリファクタリング <a class="header-anchor" href="#_3-3-コードのリファクタリング" aria-label="Permalink to “3.3 コードのリファクタリング”">​</a></h2><p><strong>シナリオ：</strong> コードの保守が難しくなり、コード品質を向上させるためにリファクタリングが必要。</p><p><strong>完全なワークフロー：</strong></p><p><strong>ステップ1：リファクタリングの目標を定義する</strong>（自分で行う）</p><p>以下を明確にする：</p><ul><li>どのような問題を解決したいか？（重複コード？構造の混乱？パフォーマンスの問題？）</li><li>リファクタリングの範囲はどの程度か？</li><li>許容できるリスクレベルはどの程度か？</li></ul><p><strong>ステップ2：リファクタリング計画を作成する</strong>（AIと一緒に）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>これら3つの関数（getUserList、getArticleList、getCommentList）には</span></span>
<span class="line"><span>ページネーション、ソート、フィルタリングの重複コードがたくさんある。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以下を手伝ってほしい：</span></span>
<span class="line"><span>1. 重複している部分を分析</span></span>
<span class="line"><span>2. リファクタリングの計画を提案</span></span>
<span class="line"><span>3. リファクタリングのリスクを評価</span></span></code></pre></div><p><strong>ステップ3：セーフティネットを準備する</strong>（AIに手伝ってもらう）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>リファクタリングの前に、まずテストケースを作ってほしい</span></span>
<span class="line"><span>リファクタリング後も動作が変わらないようにするため</span></span></code></pre></div><p><strong>ステップ4：段階的にリファクタリングする</strong>（AIが実行、自分が検証）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>先ほどの計画に従って、まず共有関数を抽出してほしい</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>次にデータ構造を最適化してほしい</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>最後に呼び出し箇所を更新してほしい</span></span></code></pre></div><p><strong>ステップ5：結果を検証する</strong>（自分で行う）</p><ul><li>すべてのテストを実行し、合格することを確認</li><li>主要な機能を手動テスト</li><li>コード品質が向上したか確認</li></ul><p><strong>実際の対話例：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>あなた：これら3つの関数には重複コードがたくさんある。リファクタリングを手伝ってくれる？</span></span>
<span class="line"><span>    [3つの関数のコードを貼り付け]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：分析しました。主な違いは：</span></span>
<span class="line"><span>    - getUserList：ユーザーリストを取得</span></span>
<span class="line"><span>    - getArticleList：記事リストを取得</span></span>
<span class="line"><span>    - getCommentList：コメントリストを取得</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    共通のロジックはページネーション、ソート、フィルタリングです。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    リファクタリング計画：</span></span>
<span class="line"><span>    1. 汎用的なgetList関数を抽出</span></span>
<span class="line"><span>    2. 異なる部分をパラメータとして渡す</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    これで重複コードの80%を削減できます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    実装しましょうか？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>あなた：はい、でもまずテストケースを作ってほしい</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[テストを生成]</span></span>
<span class="line"><span>    3つの関数すべてのテストを作成しました。</span></span>
<span class="line"><span>    主要なユースケースをカバーしています。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    リファクタリングを始めてもよろしいですか？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>あなた：はい、リファクタリングを始めて</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[コードをリファクタリング]</span></span>
<span class="line"><span>    リファクタリングが完了しました。汎用的なgetList関数を作成し、</span></span>
<span class="line"><span>    元の3つの関数はすべてその共有関数を呼び出すようになりました。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    テストを実行してすべてが動作することを確認してください：npm test</span></span></code></pre></div><h2 id="_3-4-コードレビュー" tabindex="-1">3.4 コードレビュー <a class="header-anchor" href="#_3-4-コードレビュー" aria-label="Permalink to “3.4 コードレビュー”">​</a></h2><p><strong>シナリオ：</strong> チームメイトがコードを提出し、レビューする必要がある。</p><p><strong>完全なワークフロー：</strong></p><p><strong>ステップ1：変更内容を素早く理解する</strong>（AIに手伝ってもらう）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>このPRで何が変更されたか要約してほしい</span></span>
<span class="line"><span>主にどのファイルが修正されたか</span></span></code></pre></div><p><strong>ステップ2：一般的な問題を確認する</strong>（AIに手伝ってもらう）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>この変更について以下を確認してほしい：</span></span>
<span class="line"><span>1. セキュリティの問題（SQLインジェクション、XSSなど）</span></span>
<span class="line"><span>2. パフォーマンスの問題（N+1クエリ、メモリリークなど）</span></span>
<span class="line"><span>3. 明らかなバグ</span></span>
<span class="line"><span>4. コーディングスタイルがプロジェクトの規約に従っているか</span></span></code></pre></div><p><strong>ステップ3：詳細なレビュー</strong>（自分で行う）</p><ul><li>ビジネスロジックが正しいか</li><li>エッジケースが考慮されているか</li><li>より良い実装方法がないか</li><li>テストを追加すべきか</li></ul><p><strong>ステップ4：フィードバックを提供する</strong>（自分で行う）</p><ul><li>変更が必要な箇所を指摘</li><li>なぜ変更すべきか説明</li><li>改善の提案を提供</li></ul><p><strong>実際の対話例：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>あなた：このPRのレビューを手伝って</span></span>
<span class="line"><span>    [PRのリンクまたはコードを提供]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：変更をレビューした結果、以下の問題を見つけました：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    1. セキュリティの問題：</span></span>
<span class="line"><span>       - 23行目：ユーザー入力がエスケープされておらず、XSSのリスクがある可能性</span></span>
<span class="line"><span>       - 45行目：SQLクエリが文字列連結で構築されており、インジェクションのリスクがある</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    2. パフォーマンスの問題：</span></span>
<span class="line"><span>       - 67行目：ループ内でデータベースクエリがあり、N+1問題が発生している</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    3. コード品質：</span></span>
<span class="line"><span>       - handleSubmit関数が長すぎる（200行）；分割を検討してほしい</span></span>
<span class="line"><span>       - エラーハンドリングが欠けている</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    これらについて詳しく説明しましょうか？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>あなた：SQLインジェクションの問題について詳しく説明して</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：45行目について：</span></span>
<span class="line"><span>    \`\`\`javascript</span></span>
<span class="line"><span>    const query = \`SELECT * FROM users WHERE name = &#39;\${userName}&#39;\`;</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    これはユーザー入力をSQL文に直接連結している。</span></span>
<span class="line"><span>    ユーザーが \`&#39; OR &#39;1&#39;=&#39;1\` と入力した場合、次のようになる：</span></span>
<span class="line"><span>    \`\`\`sql</span></span>
<span class="line"><span>    SELECT * FROM users WHERE name = &#39;&#39; OR &#39;1&#39;=&#39;1&#39;</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span>    これですべてのユーザーデータが返されてしまう。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    正しいアプローチはパラメータ化クエリを使用すること：</span></span>
<span class="line"><span>    \`\`\`javascript</span></span>
<span class="line"><span>    const query = &#39;SELECT * FROM users WHERE name = ?&#39;;</span></span>
<span class="line"><span>    db.query(query, [userName]);</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    修正しましょうか？</span></span></code></pre></div><h1 id="_4-プロジェクトのナレッジベースを構築する" tabindex="-1">4. プロジェクトのナレッジベースを構築する <a class="header-anchor" href="#_4-プロジェクトのナレッジベースを構築する" aria-label="Permalink to “4. プロジェクトのナレッジベースを構築する”">​</a></h1><p>AIがプロジェクトをよりよく理解できるように、プロジェクト内にナレッジベースを構築することをお勧めします。そうすることで、AIはあなたの規約や習慣に従って作業できるようになります。</p><h2 id="_4-1-プロジェクト記述ファイルを作成する" tabindex="-1">4.1 プロジェクト記述ファイルを作成する <a class="header-anchor" href="#_4-1-プロジェクト記述ファイルを作成する" aria-label="Permalink to “4.1 プロジェクト記述ファイルを作成する”">​</a></h2><p>プロジェクトのルートに<code>CLAUDE.md</code>または<code>AGENTS.md</code>ファイルを作成し、プロジェクトの重要な情報を記録します：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># プロジェクト概要</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## プロジェクトサマリー</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">これはオンライン学習プラットフォームで、コース管理、ユーザー学習、課題提出などの機能を提供する。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 技術スタック</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> フロントエンド：React 18 + TypeScript + Vite</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> バックエンド：Node.js + Express + PostgreSQL</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> デプロイ：Vercel（フロントエンド） + Railway（バックエンド）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## プロジェクト構造</span></span></code></pre></div><p>src/ ├── components/ # Reactコンポーネント ├── pages/ # ページコンポーネント ├── api/ # API呼び出し ├── utils/ # ユーティリティ関数 └── types/ # TypeScript型定義</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>## コード規約</span></span>
<span class="line"><span>- ESLintとPrettierを使用してコードをフォーマット</span></span>
<span class="line"><span>- コンポーネントファイルはPascalCase（例：UserProfile.tsx）</span></span>
<span class="line"><span>- ユーティリティ関数はcamelCase（例：formatDate.ts）</span></span>
<span class="line"><span>- 定数はUPPER_SNAKE_CASE（例：API_BASE_URL）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 開発フロー</span></span>
<span class="line"><span>1. mainブランチから機能ブランチを作成</span></span>
<span class="line"><span>2. 開発完了後、PRを提出</span></span>
<span class="line"><span>3. コードレビュー通過後にマージ</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 一般的なタスク</span></span>
<span class="line"><span>- 開発サーバーの起動：\`npm run dev\`</span></span>
<span class="line"><span>- テストの実行：\`npm test\`</span></span>
<span class="line"><span>- プロダクションビルド：\`npm run build\`</span></span>
<span class="line"><span>- コードのフォーマット：\`npm run format\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 注意事項</span></span>
<span class="line"><span>- すべてのAPI呼び出しにはエラーハンドリングを含める必要がある</span></span>
<span class="line"><span>- ユーザー入力は検証およびエスケープする必要がある</span></span>
<span class="line"><span>- データベース操作にはパラメータ化クエリを使用し、SQLインジェクションを回避する</span></span>
<span class="line"><span>- 機密情報（パスワード、トークン）をログに書き込まない</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## データベーススキーマ</span></span>
<span class="line"><span>- users：ユーザーテーブル（id、email、password_hash、created_at）</span></span>
<span class="line"><span>- courses：コーステーブル（id、title、description、teacher_id）</span></span>
<span class="line"><span>- enrollments：登録テーブル（id、user_id、course_id、enrolled_at）</span></span></code></pre></div><h2 id="_4-2-一般的な問題と解決策を記録する" tabindex="-1">4.2 一般的な問題と解決策を記録する <a class="header-anchor" href="#_4-2-一般的な問題と解決策を記録する" aria-label="Permalink to “4.2 一般的な問題と解決策を記録する”">​</a></h2><p>プロジェクト内に<code>docs/troubleshooting.md</code>を作成し、一般的な問題を記録します：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 一般的な問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 開発環境の問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 問題：npm installが失敗する</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**原因：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Nodeのバージョンが互換性がない</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**解決策：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Node.js 18以上を使用する</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 問題：データベース接続が失敗する</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**原因：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 環境変数が設定されていない</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**解決策：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .env.exampleを.envにコピーし、データベース接続情報を記入する</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 機能の問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 問題：ログイン後にページを更新するとログアウトされる</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**原因：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> トークンがsessionStorageに保存されている</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**解決策：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localStorageに切り替える</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 問題：画像のアップロードが失敗する</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**原因：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ファイルサイズが制限を超えている</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**解決策：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> フロントエンドにファイルサイズチェックを追加し、5MBに制限する</span></span></code></pre></div><h2 id="_4-3-技術的決定の記録を維持する" tabindex="-1">4.3 技術的決定の記録を維持する <a class="header-anchor" href="#_4-3-技術的決定の記録を維持する" aria-label="Permalink to “4.3 技術的決定の記録を維持する”">​</a></h2><p><code>docs/decisions/</code>ディレクトリを作成し、重要な技術的決定を記録します：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># ADR-001：PostgreSQLをデータベースとして選択</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## ステータス</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">承認済み</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 背景</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">プロジェクトではリレーショナルデータベースを選択する必要がある。候補はMySQLとPostgreSQL。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 決定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PostgreSQLを選択する</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 理由</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JSONサポートが優れており、コースコンテンツの保存に適している</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 全文検索が強力</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> チームがPostgreSQLに慣れている</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 影響</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PostgreSQL固有の機能を学ぶ必要がある</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> デプロイにPostgreSQL環境が必要</span></span></code></pre></div><h1 id="_5-aiとの協業効率を向上させるテクニック" tabindex="-1">5. AIとの協業効率を向上させるテクニック <a class="header-anchor" href="#_5-aiとの協業効率を向上させるテクニック" aria-label="Permalink to “5. AIとの協業効率を向上させるテクニック”">​</a></h1><p>いくつかの実践的なテクニックをマスターすることで、AIとの協業をより効率的にできます。</p><h2 id="_5-1-問題の記述は明確かつ具体的に" tabindex="-1">5.1 問題の記述は明確かつ具体的に <a class="header-anchor" href="#_5-1-問題の記述は明確かつ具体的に" aria-label="Permalink to “5.1 問題の記述は明確かつ具体的に”">​</a></h2><p><strong>悪い記述：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>この機能に問題がある</span></span>
<span class="line"><span>最適化してほしい</span></span></code></pre></div><p><strong>良い記述：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ユーザーが「送信」ボタンをクリックした後、フォームが送信されない</span></span>
<span class="line"><span>ブラウザコンソールのエラー：Uncaught TypeError: Cannot read property &#39;value&#39; of null</span></span>
<span class="line"><span>エラーはform.jsの23行目で発生</span></span>
<span class="line"><span></span></span>
<span class="line"><span>このリストの読み込みが遅く、1000件のアイテムがある</span></span>
<span class="line"><span>ページネーションを追加してほしい、1ページあたり20件</span></span></code></pre></div><p><strong>ポイント：</strong></p><ul><li>具体的なエラー情報を提供する</li><li>期待される結果を説明する</li><li>関連するコンテキストを提供する</li></ul><h2 id="_5-2-一度に一つのことだけ行う" tabindex="-1">5.2 一度に一つのことだけ行う <a class="header-anchor" href="#_5-2-一度に一つのことだけ行う" aria-label="Permalink to “5.2 一度に一つのことだけ行う”">​</a></h2><p><strong>悪いアプローチ：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ログイン、登録、パスワードリカバリー、プロフィールセンター、</span></span>
<span class="line"><span>パスワード変更、メール認証を実装してほしい</span></span></code></pre></div><p><strong>良いアプローチ：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>まずログイン機能を実装してほしい。要件は以下の通り：</span></span>
<span class="line"><span>- メールアドレスとパスワードでログイン</span></span>
<span class="line"><span>- ログイン状態を保持</span></span>
<span class="line"><span>- エラーメッセージの表示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（完了後）次に登録機能を実装してほしい</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（完了後）次にパスワードリカバリー機能を実装してほしい</span></span></code></pre></div><p><strong>ポイント：</strong></p><ul><li>大きなタスクを小さなタスクに分割する</li><li>各タスクの完了後にテストして検証する</li><li>問題がないことを確認してから次に進む</li></ul><h2 id="_5-3-結果を適時に検証する" tabindex="-1">5.3 結果を適時に検証する <a class="header-anchor" href="#_5-3-結果を適時に検証する" aria-label="Permalink to “5.3 結果を適時に検証する”">​</a></h2><p><strong>悪いアプローチ：</strong></p><ul><li>AIに10個のファイルを連続して修正させる</li><li>最後に最初の変更がすでに間違っていたことに気づく</li><li>多くの時間を無駄にする</li></ul><p><strong>良いアプローチ：</strong></p><ul><li>1つのファイルを修正し、すぐにテストする</li><li>問題がないことを確認してから続ける</li><li>問題が見つかったらすぐに修正する</li></ul><p><strong>ポイント：</strong></p><ul><li>小さなステップで進み、素早いフィードバックを得る</li><li>AIを盲信しない</li><li>コードのコントロールを維持する</li></ul><h2 id="_5-4-コンテキストを上手に活用する" tabindex="-1">5.4 コンテキストを上手に活用する <a class="header-anchor" href="#_5-4-コンテキストを上手に活用する" aria-label="Permalink to “5.4 コンテキストを上手に活用する”">​</a></h2><p><strong>テクニック1：前の会話を参照する</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>先ほど話し合った計画に従って実装してほしい</span></span>
<span class="line"><span>前のgetUserList関数を参考にしてほしい</span></span></code></pre></div><p><strong>テクニック2：関連するコードを提供する</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>これが既存のユーザーモデルのコード：</span></span>
<span class="line"><span>[コードを貼り付け]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>同じスタイルで記事モデルを実装してほしい</span></span></code></pre></div><p><strong>テクニック3：プロジェクトの背景を説明する</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>これはReact + Node.jsを使ったECプロジェクト</span></span>
<span class="line"><span>すでにユーザーシステムと商品システムがある</span></span>
<span class="line"><span>ここにショッピングカート機能を追加したい</span></span></code></pre></div><h2 id="_5-5-有用な会話を保存する" tabindex="-1">5.5 有用な会話を保存する <a class="header-anchor" href="#_5-5-有用な会話を保存する" aria-label="Permalink to “5.5 有用な会話を保存する”">​</a></h2><p><strong>シナリオ：</strong> 複雑な問題を解決した</p><p><strong>方法：</strong></p><ol><li>プロジェクトのドキュメントに解決策を記録する</li><li>次に同様の問題が発生したときに参照する</li><li>他のチームメンバーと共有する</li></ol><p><strong>例：</strong></p><p><code>docs/solutions/</code>にドキュメントを作成する：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># N+1クエリ問題の解決</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 問題の説明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">記事リストを取得する際、記事ごとに著者情報をクエリしており、</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">パフォーマンスの問題が発生している。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 解決策</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">JOINクエリを使用してすべてのデータを一度に取得する：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`sql</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> articles.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> author_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> articles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LEFT JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> articles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">author_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span></span></code></pre></div><p><strong>結果：</strong> クエリ時間が2000msから50msに短縮</p><h2 id="_5-6-質問の技術を学ぶ" tabindex="-1">5.6 質問の技術を学ぶ <a class="header-anchor" href="#_5-6-質問の技術を学ぶ" aria-label="Permalink to “5.6 質問の技術を学ぶ”">​</a></h2><p><strong>テクニック1：まず「なぜ」と聞く</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>このコードはなぜメモリリークを引き起こすのか？</span></span>
<span class="line"><span>普通の関数の代わりにuseCallbackを使うべきなのはなぜ？</span></span></code></pre></div><p><strong>テクニック2：複数の選択肢を求める</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ユーザー認証を実装するにはどのような方法がある？</span></span>
<span class="line"><span>それぞれの長所と短所は何？</span></span></code></pre></div><p><strong>テクニック3：説明を求める</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>このコードはどのように動作するのか？</span></span>
<span class="line"><span>このアルゴリズムについて詳しく説明してくれる？</span></span></code></pre></div><h1 id="_6-よくある質問" tabindex="-1">6. よくある質問 <a class="header-anchor" href="#_6-よくある質問" aria-label="Permalink to “6. よくある質問”">​</a></h1><h2 id="q1-aiが生成したコードをそのまま使ってよいか" tabindex="-1">Q1：AIが生成したコードをそのまま使ってよいか？ <a class="header-anchor" href="#q1-aiが生成したコードをそのまま使ってよいか" aria-label="Permalink to “Q1：AIが生成したコードをそのまま使ってよいか？”">​</a></h2><p><strong>A：</strong> いいえ、そのままでは使えません。レビューとテストが必要です。</p><p>AIが生成したコードには以下の問題がある可能性があります：</p><ul><li>論理エラーやエッジケースの処理が不十分</li><li>プロジェクトのコーディング規約に合致していない</li><li>セキュリティリスク</li><li>パフォーマンスの最適化が不十分</li></ul><p>必要な対応：</p><ul><li>生成されたコードを注意深く読む</li><li>そのロジックを理解する</li><li>さまざまなシナリオでテストする</li><li>プロジェクトの規約に従っていることを確認する</li></ul><h2 id="q2-aiが意図を誤解した場合はどうすればよいか" tabindex="-1">Q2：AIが意図を誤解した場合はどうすればよいか？ <a class="header-anchor" href="#q2-aiが意図を誤解した場合はどうすればよいか" aria-label="Permalink to “Q2：AIが意図を誤解した場合はどうすればよいか？”">​</a></h2><p><strong>A：</strong> 適時に修正し、要件を再度記述する。</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>そういう意味ではありません。私が言いたいのは...</span></span>
<span class="line"><span>この理解は正しくありません。正しくは...</span></span>
<span class="line"><span>要件をもう一度説明させてください...</span></span></code></pre></div><p>数回修正してもまだ間違っている場合は：</p><ul><li>より多くのコンテキストを提供する</li><li>具体的なコード例を示す</li><li>タスクをより小さく分割する</li></ul><h2 id="q3-aiが解決できない問題に直面したらどうすればよいか" tabindex="-1">Q3：AIが解決できない問題に直面したらどうすればよいか？ <a class="header-anchor" href="#q3-aiが解決できない問題に直面したらどうすればよいか" aria-label="Permalink to “Q3：AIが解決できない問題に直面したらどうすればよいか？”">​</a></h2><p><strong>A：</strong> AIは万能ではありません。一部の問題は自分で解決する必要があります。</p><p>AIが解決できない可能性のある問題：</p><ul><li>非常に新しい技術（AIの知識には期限がある）</li><li>あなたのチーム固有のビジネスロジック</li><li>外部システムへのアクセスが必要な問題</li><li>複雑なパフォーマンス最適化の問題</li></ul><p>その場合は：</p><ul><li>公式ドキュメントを読む</li><li>関連する解決策を検索する</li><li>経験豊富なチームメイトに聞く</li><li>コミュニティで質問する</li></ul><h2 id="q4-aiの提案が合理的かどうかをどう判断すればよいか" tabindex="-1">Q4：AIの提案が合理的かどうかをどう判断すればよいか？ <a class="header-anchor" href="#q4-aiの提案が合理的かどうかをどう判断すればよいか" aria-label="Permalink to “Q4：AIの提案が合理的かどうかをどう判断すればよいか？”">​</a></h2><p><strong>A：</strong> 自分の経験と知識で判断する。</p><p>評価基準：</p><ul><li>ベストプラクティスに従っているか</li><li>エッジケースが考慮されているか</li><li>潜在的なセキュリティリスクがないか</li><li>プロジェクトの技術スタックに合っているか</li><li>パフォーマンスが許容範囲内か</li></ul><p>確信がない場合は：</p><ul><li>AIにそのアプローチを勧める理由を説明してもらう</li><li>代替案を求める</li><li>チームメンバーに相談する</li></ul><h2 id="q5-チームでaiをどのように協業して使うべきか" tabindex="-1">Q5：チームでAIをどのように協業して使うべきか？ <a class="header-anchor" href="#q5-チームでaiをどのように協業して使うべきか" aria-label="Permalink to “Q5：チームでAIをどのように協業して使うべきか？”">​</a></h2><p><strong>A：</strong> 共有の規約と共有のナレッジベースを確立する。</p><p>チーム協業の推奨事項：</p><ul><li>プロジェクトの<code>CLAUDE.md</code>設定を共有する</li><li>コード規約とスタイルを統一する</li><li>一般的な問題の解決策を記録する</li><li>有用なプロンプトを定期的に共有する</li><li>コードレビューでAI生成コードをチェックする</li></ul><h2 id="q6-aiへの過度な依存を避けるにはどうすればよいか" tabindex="-1">Q6：AIへの過度な依存を避けるにはどうすればよいか？ <a class="header-anchor" href="#q6-aiへの過度な依存を避けるにはどうすればよいか" aria-label="Permalink to “Q6：AIへの過度な依存を避けるにはどうすればよいか？”">​</a></h2><p><strong>A：</strong> 学習と思考を続ける。AIはアシスタントであり、代わりではない。</p><p>推奨事項：</p><ul><li>AIが生成したコードを盲信せず、理解する</li><li>分からない概念を積極的に学ぶ</li><li>定期的に基礎知識を見直す</li><li>まず自分で問題を解決しようとし、その後AIで検証する</li><li>コードレビューに参加して他者の経験から学ぶ</li></ul><h1 id="_7-まとめ" tabindex="-1">7. まとめ <a class="header-anchor" href="#_7-まとめ" aria-label="Permalink to “7. まとめ”">​</a></h1><p>この章を通じて、以下をマスターしました：</p><ol><li><strong>AIの能力の境界</strong>：AIが得意なことと苦手なことを理解し、適切な協業モデルを構築する</li><li><strong>プロジェクトタイプ別の戦略</strong>：新規プロジェクト、成熟したプロジェクト、ラピッドプロトタイプ、メンテナンスプロジェクトに対する異なる開発戦略</li><li><strong>一般的なタスクのワークフロー</strong>：新機能開発、バグ修正、コードリファクタリング、コードレビューの完全なワークフロー</li><li><strong>プロジェクトのナレッジベース</strong>：AIがプロジェクトをよりよく理解できるようにプロジェクトドキュメントを構築する方法</li><li><strong>協業テクニック</strong>：AIとの協業効率を向上させる実践的な方法</li></ol><p><strong>重要なポイント：</strong></p><ul><li><strong>役割の明確な分担</strong>：自分が意思決定と品質確保を行い、AIが実行と支援を担当する</li><li><strong>明確なコミュニケーション</strong>：具体的に記述し、一度に一つのことを行う</li><li><strong>適時の検証</strong>：盲信せず、テストして検証する</li><li><strong>学び続ける</strong>：AIの能力の境界を理解し、協業モデルを継続的に改善する</li></ul><p>覚えておいてください：AIはツールであり、代替ではありません。AIはあなたをより効率的にできますが、最終的なコード品質はあなたの判断にかかっています。簡単なタスクから始め、徐々に信頼を築いてください。AIが多くの時間を節約し、より価値のある仕事に集中できるようになることがわかるでしょう。</p><div class="tip custom-block"><p class="custom-block-title">💡 次のステップ</p><p>次の章では、AIを使ったコードレビューと品質保証について学び、コードの保守性とセキュリティを確保する方法を学びます。</p></div>`,236)])])}const k=a(p,[["render",e]]);export{d as __pageData,k as default};
