import{_ as a,o as n,c as i,b6 as l}from"./chunks/framework.BUXTSoD9.js";const d=JSON.parse('{"title":"AI 輔助開發工作流程","description":"","frontmatter":{},"headers":[],"relativePath":"zh-tw/stage-3/core-skills/workflow/index.md","filePath":"zh-tw/stage-3/core-skills/workflow/index.md"}'),p={name:"zh-tw/stage-3/core-skills/workflow/index.md"};function e(t,s,h,r,g,c){return n(),i("div",null,[...s[0]||(s[0]=[l(`<h1 id="ai-輔助開發工作流程" tabindex="-1">AI 輔助開發工作流程 <a class="header-anchor" href="#ai-輔助開發工作流程" aria-label="Permalink to “AI 輔助開發工作流程”">​</a></h1><p>在前面的章節中，我們學習了如何使用 AI IDE 寫程式碼、如何用 Git 管理程式碼版本，以及如何設計和實現 API 介面。但當你面對一個真實的開發任務時，可能會遇到這些問題：</p><ul><li>「這個專案有上千個檔案，我該從哪裡開始？」</li><li>「老闆讓我加一個新功能，但我不熟悉這部分的程式碼庫。」</li><li>「我不知道這個 bug 在哪裡，程式碼太多了。」</li><li>「我需要重構這堆程式碼，但我怕改壞東西。」</li></ul><p>這些問題的本質是：<strong>如何在真實的開發場景中高效地使用 AI 工具來完成工作？</strong></p><p>在本課中，我們將學習如何建立一套系統化的 AI 輔助開發工作流程，讓你能夠在不同的開發場景中高效地使用 AI。我們將透過具體的範例，展示如何在開發新功能、修復 bug、重構程式碼等場景中使用 AI。</p><blockquote><p>💡 <strong>前置條件</strong></p><p>在學習本節之前，建議你先了解：</p><ul><li><a href="./../../stage-1/ai-ide/">AI IDE 基礎</a> - 掌握 AI IDE 的基本使用</li><li><a href="./../../stage-2/backend/git-workflow/">Git 和 GitHub 工作流程</a> - 了解程式碼版本管理</li><li><a href="./../../stage-2/backend/ai-interface-code/">使用大模型幫助撰寫 API 程式碼</a> - 了解 AI 輔助開發的基本概念</li></ul></blockquote><div class="info custom-block"><p class="custom-block-title">📚 你將學到什麼</p><ol><li>了解 AI 在開發過程中的角色和能力邊界</li><li>掌握不同專案類型的 AI 輔助開發策略</li><li>學習如何在開發新功能、修復 bug、重構程式碼等場景中使用 Claude Code</li><li>建立專案知識庫，提高與 Claude Code 的協作效率</li><li>掌握提升 AI 協作效率的實用技巧</li></ol></div><h1 id="_1-了解-ai-的能力邊界" tabindex="-1">1. 了解 AI 的能力邊界 <a class="header-anchor" href="#_1-了解-ai-的能力邊界" aria-label="Permalink to “1. 了解 AI 的能力邊界”">​</a></h1><p>在我們開始使用 AI 輔助開發之前，首先需要了解 AI 能做什麼、不能做什麼。只有這樣才能建立正確的協作模式。</p><h2 id="_1-1-ai-擅長什麼" tabindex="-1">1.1 AI 擅長什麼 <a class="header-anchor" href="#_1-1-ai-擅長什麼" aria-label="Permalink to “1.1 AI 擅長什麼”">​</a></h2><p>可以把 AI 想像成一個非常聰明但仍需要明確指令的助手。它可以根據你的描述快速生成程式碼骨架，也能在幾秒鐘內閱讀上千行程式碼，找到你需要的那部分。如果有明顯的語法錯誤或常見的安全漏洞，它也能幫你發現。重複性的工作，比如批次重新命名變數、格式化程式碼、生成文件註釋等，特別適合交給 AI 來做。</p><p>簡單來說，AI 擅長有明確規則、可以自動化的工作。</p><h2 id="_1-2-ai-不擅長什麼" tabindex="-1">1.2 AI 不擅長什麼 <a class="header-anchor" href="#_1-2-ai-不擅長什麼" aria-label="Permalink to “1.2 AI 不擅長什麼”">​</a></h2><p>但 AI 也有它的局限性。它不理解你的業務邏輯，除非你詳細告訴它，否則它不會知道你們公司的訂單流程是怎麼運作的。它也無法做出需要權衡取捨的技術選型或架構設計決策，因為這些取決於你的經驗和對專案的理解。AI 也不知道你們團隊的特殊約定，比如「所有 API 都必須有日誌記錄」或「錯誤碼必須使用列舉型別」。你需要設定這些規則或明確告訴它。</p><p>最重要的是，AI 生成的程式碼不能直接使用。你必須審查和測試它。它可能生成看起來正確但實際有問題的程式碼，也可能忽略某些邊界情況。</p><h2 id="_1-3-如何與-ai-協作" tabindex="-1">1.3 如何與 AI 協作 <a class="header-anchor" href="#_1-3-如何與-ai-協作" aria-label="Permalink to “1.3 如何與 AI 協作”">​</a></h2><p>了解了 AI 的能力邊界之後，協作模式就清晰了：你負責決定做什麼、做出決策、確保品質；AI 負責執行具體的程式碼編寫工作、尋找資訊、發現明顯的問題。</p><p>這就像和一個初級開發者合作一樣。你告訴他們需要做什麼，他們實作，然後你審查程式碼。不同的是，AI 執行速度快得多，但判斷力比人類弱。</p><h1 id="_2-不同專案類型的開發策略" tabindex="-1">2. 不同專案類型的開發策略 <a class="header-anchor" href="#_2-不同專案類型的開發策略" aria-label="Permalink to “2. 不同專案類型的開發策略”">​</a></h1><p>不同類型的專案需要不同的開發方式和 AI 使用策略。選擇正確的策略可以大幅提高開發效率。</p><h2 id="_2-1-全新專案-從零開始" tabindex="-1">2.1 全新專案（從零開始） <a class="header-anchor" href="#_2-1-全新專案-從零開始" aria-label="Permalink to “2.1 全新專案（從零開始）”">​</a></h2><p><strong>專案特點：</strong></p><ul><li>沒有歷史包袱，可以自由設計</li><li>需要建立專案結構和程式碼規範</li><li>適合快速迭代和試錯</li></ul><p><strong>推薦工作流程：</strong></p><p><strong>第一步：規劃專案結構</strong></p><p>在開始寫程式碼之前，先讓 AI 幫你規劃專案結構和技術選型：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>我想建立一個任務管理應用，功能如下：</span></span>
<span class="line"><span>- 使用者註冊和登入</span></span>
<span class="line"><span>- 建立、編輯和刪除任務</span></span>
<span class="line"><span>- 任務分類和標籤</span></span>
<span class="line"><span>- 任務提醒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>請幫我：</span></span>
<span class="line"><span>1. 推薦適合的技術堆疊</span></span>
<span class="line"><span>2. 設計專案目錄結構</span></span>
<span class="line"><span>3. 規劃資料庫 schema</span></span></code></pre></div><p><strong>第二步：建立基本框架</strong></p><p>根據規劃，讓 AI 建立基本的專案結構：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>根據我們剛才討論的規劃，幫我：</span></span>
<span class="line"><span>1. 建立專案目錄結構</span></span>
<span class="line"><span>2. 初始化設定檔（package.json、.env 等）</span></span>
<span class="line"><span>3. 建立基本的伺服器程式碼</span></span></code></pre></div><p><strong>第三步：逐個實現功能</strong></p><p>按優先順序逐個實現功能模組：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>現在實現使用者註冊功能，需求如下：</span></span>
<span class="line"><span>- 使用電子郵件和密碼註冊</span></span>
<span class="line"><span>- 密碼加密儲存</span></span>
<span class="line"><span>- 電子郵件驗證</span></span></code></pre></div><p><strong>要點：</strong></p><ul><li>盡早建立程式碼規範，讓 AI 生成的程式碼遵循這些規範</li><li>每完成一個功能模組就測試和驗證</li><li>及時更新專案文件</li></ul><h2 id="_2-2-成熟專案-大型既有程式碼庫" tabindex="-1">2.2 成熟專案（大型既有程式碼庫） <a class="header-anchor" href="#_2-2-成熟專案-大型既有程式碼庫" aria-label="Permalink to “2.2 成熟專案（大型既有程式碼庫）”">​</a></h2><p><strong>專案特點：</strong></p><ul><li>程式碼庫龐大，有歷史約定</li><li>需要保持程式碼風格一致</li><li>修改必須考慮影響範圍</li></ul><p><strong>推薦工作流程：</strong></p><p><strong>第一步：了解專案結構</strong></p><p>在修改程式碼之前，先讓 AI 幫你了解專案：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>這是一個電商專案，我需要新增優惠券功能。</span></span>
<span class="line"><span>請幫我：</span></span>
<span class="line"><span>1. 分析整體專案結構</span></span>
<span class="line"><span>2. 找到訂單相關的程式碼</span></span>
<span class="line"><span>3. 看看其他類似功能是如何實現的</span></span></code></pre></div><p><strong>第二步：找到參考程式碼</strong></p><p>讓 AI 在專案中找到類似的實現作為參考：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>找出專案中其他促銷功能（如滿減、折扣）是如何實現的</span></span></code></pre></div><p><strong>第三步：遵循既有風格</strong></p><p>讓 AI 按照既有程式碼的風格實現新功能：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>請參考滿減促銷的實現方式來實現優惠券功能。</span></span>
<span class="line"><span>保持相同的程式碼風格和目錄結構。</span></span></code></pre></div><p><strong>要點：</strong></p><ul><li>先了解再修改，不要破壞既有架構</li><li>保持程式碼風格一致</li><li>修改後測試相關功能</li></ul><h2 id="_2-3-快速原型-驗證想法" tabindex="-1">2.3 快速原型（驗證想法） <a class="header-anchor" href="#_2-3-快速原型-驗證想法" aria-label="Permalink to “2.3 快速原型（驗證想法）”">​</a></h2><p><strong>專案特點：</strong></p><ul><li>速度最重要，程式碼品質次要</li><li>用於驗證產品想法或技術方案</li><li>可能之後會丟棄或重寫</li></ul><p><strong>推薦工作流程：</strong></p><p><strong>直接描述需求並快速實現：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>建立一個簡單的待辦事項應用，需求如下：</span></span>
<span class="line"><span>- 新增、刪除和標記任務為已完成</span></span>
<span class="line"><span>- 本地儲存資料</span></span>
<span class="line"><span>- 介面簡單，能用就行</span></span></code></pre></div><p><strong>快速迭代：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>新增搜尋功能</span></span>
<span class="line"><span>切換為深色主題</span></span>
<span class="line"><span>新增任務分類</span></span></code></pre></div><p><strong>要點：</strong></p><ul><li>不用太擔心程式碼品質或規範</li><li>快速驗證想法，及時調整方向</li><li>如果原型成功，之後需要重構</li></ul><h2 id="_2-4-維護專案-主要是修-bug" tabindex="-1">2.4 維護專案（主要是修 bug） <a class="header-anchor" href="#_2-4-維護專案-主要是修-bug" aria-label="Permalink to “2.4 維護專案（主要是修 bug）”">​</a></h2><p><strong>專案特點：</strong></p><ul><li>程式碼已穩定，主要任務是修復問題</li><li>需要快速定位問題</li><li>修改必須小心，避免引入新問題</li></ul><p><strong>推薦工作流程：</strong></p><p><strong>第一步：定位問題</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>使用者回饋：點擊「提交訂單」按鈕後，頁面卡住</span></span>
<span class="line"><span>主控台錯誤：TypeError: Cannot read property &#39;id&#39; of undefined</span></span>
<span class="line"><span></span></span>
<span class="line"><span>請幫我：</span></span>
<span class="line"><span>1. 分析可能的原因</span></span>
<span class="line"><span>2. 找到相關的程式碼</span></span></code></pre></div><p><strong>第二步：分析根本原因</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>檢查在什麼情況下會出現這個錯誤</span></span>
<span class="line"><span>檢查資料流向</span></span></code></pre></div><p><strong>第三步：應用修復</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>修復這個問題，並且：</span></span>
<span class="line"><span>1. 新增防禦性程式碼避免類似問題</span></span>
<span class="line"><span>2. 新增錯誤提示改善使用者體驗</span></span></code></pre></div><p><strong>要點：</strong></p><ul><li>修復後全面測試，確保不影響其他功能</li><li>新增防禦性程式碼提高系統穩健性</li><li>記錄問題和解決方案以供未來參考</li></ul><h1 id="_3-常見開發任務的工作流程" tabindex="-1">3. 常見開發任務的工作流程 <a class="header-anchor" href="#_3-常見開發任務的工作流程" aria-label="Permalink to “3. 常見開發任務的工作流程”">​</a></h1><p>在日常開發中，我們會遇到許多不同類型的任務。以下是幾個最常見的 AI 輔助工作流程。</p><h2 id="_3-1-開發新功能" tabindex="-1">3.1 開發新功能 <a class="header-anchor" href="#_3-1-開發新功能" aria-label="Permalink to “3.1 開發新功能”">​</a></h2><p><strong>場景：</strong> 產品經理給你一個新需求，你需要實現一個新功能。</p><p><strong>完整工作流程：</strong></p><p><strong>第一步：理解需求</strong>（由你完成）</p><p>在開始寫程式碼之前，先釐清：</p><ul><li>需要實現什麼功能？</li><li>輸入和輸出是什麼？</li><li>邊界條件和異常情況有哪些？</li><li>性能和安全要求是什麼？</li></ul><p><strong>第二步：了解既有程式碼</strong>（讓 AI 幫忙）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>我需要實現使用者評論功能。請幫我：</span></span>
<span class="line"><span>1. 檢查專案中是否有類似的東西</span></span>
<span class="line"><span>2. 找到使用者資料和文章資料是如何儲存的</span></span>
<span class="line"><span>3. 了解這個專案中的資料庫操作慣例</span></span></code></pre></div><p><strong>第三步：制定實作計畫</strong>（與 AI 一起）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>根據我們剛才的分析，實現評論功能需要：</span></span>
<span class="line"><span>1. 建立評論資料模型</span></span>
<span class="line"><span>2. 實現評論的 CRUD API</span></span>
<span class="line"><span>3. 在前端新增評論顯示和發佈功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>請幫我確認這個計畫是否合理，是否有遺漏</span></span></code></pre></div><p><strong>第四步：實現功能</strong>（AI 生成，你審查）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>根據計畫，先實現評論資料模型。</span></span>
<span class="line"><span>需求：</span></span>
<span class="line"><span>- 包含評論內容、作者、文章 ID 和建立時間</span></span>
<span class="line"><span>- 支援巢狀評論回覆</span></span>
<span class="line"><span>- 新增必要的索引</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>現在實現評論 API 端點。</span></span>
<span class="line"><span>需求：</span></span>
<span class="line"><span>- 發佈評論</span></span>
<span class="line"><span>- 刪除評論（只能刪除自己的評論）</span></span>
<span class="line"><span>- 取得文章的所有評論</span></span>
<span class="line"><span>- 支援分頁</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>最後實現前端評論元件。</span></span>
<span class="line"><span>需求：</span></span>
<span class="line"><span>- 顯示評論列表</span></span>
<span class="line"><span>- 評論發佈表單</span></span>
<span class="line"><span>- 支援回覆評論</span></span></code></pre></div><p><strong>第五步：測試和驗證</strong>（由你完成）</p><ul><li>手動測試主流程</li><li>測試邊界情況，如空內容和過長內容</li><li>測試許可權控制，如無法刪除他人的評論</li><li>請 AI 幫你撰寫自動化測試</li></ul><p><strong>真實對話範例：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>你：我想新增一個使用者評論功能，讓使用者可以在文章上發佈評論</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：好的，讓我先了解一下專案結構。</span></span>
<span class="line"><span>    [AI 分析專案程式碼]</span></span>
<span class="line"><span>    我看到專案已經有了使用者系統（models/user.js）</span></span>
<span class="line"><span>    和文章系統（models/article.js）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    實現評論功能需要：</span></span>
<span class="line"><span>    1. 建立評論資料模型（models/comment.js）</span></span>
<span class="line"><span>    2. 新增評論相關的 API（routes/comment.js）</span></span>
<span class="line"><span>    3. 在文章詳情頁新增評論顯示和發佈功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    我可以開始實現嗎？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你：好的，開始吧。先建立資料模型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[生成 models/comment.js]</span></span>
<span class="line"><span>    我已經建立了評論資料模型，包含這些欄位：</span></span>
<span class="line"><span>    - id: 評論 ID</span></span>
<span class="line"><span>    - content: 評論內容</span></span>
<span class="line"><span>    - userId: 作者 ID</span></span>
<span class="line"><span>    - articleId: 文章 ID</span></span>
<span class="line"><span>    - parentId: 父評論 ID（用於巢狀回覆）</span></span>
<span class="line"><span>    - createdAt: 建立時間</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    接下來要實現 API 嗎？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你：好的，實現 API</span></span></code></pre></div><h2 id="_3-2-修復-bug" tabindex="-1">3.2 修復 Bug <a class="header-anchor" href="#_3-2-修復-bug" aria-label="Permalink to “3.2 修復 Bug”">​</a></h2><p><strong>場景：</strong> 使用者回報了一個問題，你需要快速定位並修復它。</p><p><strong>完整工作流程：</strong></p><p><strong>第一步：收集資訊</strong>（由你完成）</p><p>記錄以下資訊：</p><ul><li>錯誤訊息是什麼？</li><li>這個問題如何重現？</li><li>什麼時候開始出現的？</li><li>影響範圍有多大？</li></ul><p><strong>第二步：定位問題</strong>（讓 AI 幫忙）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>使用者回饋：點擊「提交訂單」按鈕後，頁面卡住</span></span>
<span class="line"><span>瀏覽器主控台錯誤：TypeError: Cannot read property &#39;id&#39; of undefined</span></span>
<span class="line"><span>錯誤出現在 checkout.js 的第 45 行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>請幫我：</span></span>
<span class="line"><span>1. 分析可能的原因</span></span>
<span class="line"><span>2. 找到相關的程式碼</span></span>
<span class="line"><span>3. 檢查資料流向</span></span></code></pre></div><p><strong>第三步：分析根本原因</strong>（與 AI 一起）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>檢查這個 user 物件從哪裡來的</span></span>
<span class="line"><span>檢查在什麼情況下 user 可能是 undefined</span></span></code></pre></div><p><strong>第四步：實施修復</strong>（AI 生成，你審查）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>修復這個問題，需求如下：</span></span>
<span class="line"><span>1. 新增防禦性程式碼檢查 user 是否存在</span></span>
<span class="line"><span>2. 如果 user 不存在，重新導向到登入頁面</span></span>
<span class="line"><span>3. 新增友善的錯誤提示</span></span></code></pre></div><p><strong>第五步：驗證修復</strong>（由你完成）</p><ul><li>用原來的步驟重現問題，確認問題已解決</li><li>測試相關功能，確保沒有引入新問題</li><li>想想其他地方是否存在類似問題</li></ul><p><strong>真實對話範例：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>你：有使用者回報登入後重新整理頁面會被登出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：這通常是 token 儲存或驗證的問題。讓我檢查一下：</span></span>
<span class="line"><span>    1. token 儲存在哪裡，localStorage 還是 cookies？</span></span>
<span class="line"><span>    2. 頁面重新整理時 token 是否會重新載入？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    請告訴我哪個檔案包含 token 相關的程式碼</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你：utils/auth.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[分析 utils/auth.js]</span></span>
<span class="line"><span>    我找到問題了：token 儲存在 sessionStorage 中，</span></span>
<span class="line"><span>    而 sessionStorage 在頁面重新整理時會被清除。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    解決方案：改用 localStorage</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    你要我修改嗎？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你：好的，修改吧</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[修改程式碼]</span></span>
<span class="line"><span>    修改完成。token 現在儲存在 localStorage 中，</span></span>
<span class="line"><span>    所以頁面重新整理後不會丟失。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    我建議你測試以下項目：</span></span>
<span class="line"><span>    1. 登入後重新整理頁面，確認使用者保持登入狀態</span></span>
<span class="line"><span>    2. 關閉並重新開啟瀏覽器，確認使用者保持登入狀態</span></span></code></pre></div><h2 id="_3-3-重構程式碼" tabindex="-1">3.3 重構程式碼 <a class="header-anchor" href="#_3-3-重構程式碼" aria-label="Permalink to “3.3 重構程式碼”">​</a></h2><p><strong>場景：</strong> 程式碼變得難以維護，需要重構以提高程式碼品質。</p><p><strong>完整工作流程：</strong></p><p><strong>第一步：定義重構目標</strong>（由你完成）</p><p>釐清以下問題：</p><ul><li>你想解決什麼問題？（重複程式碼？結構混亂？性能問題？）</li><li>重構的範圍有多大？</li><li>可接受的風險等級是什麼？</li></ul><p><strong>第二步：制定重構計畫</strong>（與 AI 一起）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>這三個函式（getUserList、getArticleList、getCommentList）</span></span>
<span class="line"><span>包含大量重複的分頁、排序和篩選程式碼。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>請幫我：</span></span>
<span class="line"><span>1. 分析重複的部分</span></span>
<span class="line"><span>2. 提出重構方案</span></span>
<span class="line"><span>3. 評估重構的風險</span></span></code></pre></div><p><strong>第三步：準備安全網</strong>（讓 AI 幫忙）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>在重構之前，請先幫我寫測試案例</span></span>
<span class="line"><span>確保重構後行為保持一致</span></span></code></pre></div><p><strong>第四步：逐步重構</strong>（AI 執行，你驗證）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>根據我們剛才討論的計畫，先提取共用的函式</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>現在最佳化資料結構</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>最後更新呼叫處</span></span></code></pre></div><p><strong>第五步：驗證結果</strong>（由你完成）</p><ul><li>執行所有測試，確保通過</li><li>手動測試關鍵功能</li><li>檢查程式碼品質是否有所提升</li></ul><p><strong>真實對話範例：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>你：這三個函式有很多重複程式碼。你能幫我重構嗎？</span></span>
<span class="line"><span>    [貼上三個函式的程式碼]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：我分析了一下，主要差異是：</span></span>
<span class="line"><span>    - getUserList: 取得使用者列表</span></span>
<span class="line"><span>    - getArticleList: 取得文章列表</span></span>
<span class="line"><span>    - getCommentList: 取得評論列表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    它們的共同邏輯是分頁、排序和篩選。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    重構方案：</span></span>
<span class="line"><span>    1. 提取一個通用的 getList 函式</span></span>
<span class="line"><span>    2. 將不同的部分作為參數傳入</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    這樣可以減少 80% 的重複程式碼。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    我可以開始實現嗎？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你：好的，但先幫我寫測試案例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[生成測試]</span></span>
<span class="line"><span>    我已經為三個函式都寫了測試，</span></span>
<span class="line"><span>    涵蓋了主要的使用場景。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    我可以開始重構了嗎？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你：好的，開始重構</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：[重構程式碼]</span></span>
<span class="line"><span>    重構完成。我建立了一個通用的 getList 函式，</span></span>
<span class="line"><span>    原來的三個函式現在都呼叫這個共用函式。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    請執行測試確認一切正常：npm test</span></span></code></pre></div><h2 id="_3-4-程式碼審查" tabindex="-1">3.4 程式碼審查 <a class="header-anchor" href="#_3-4-程式碼審查" aria-label="Permalink to “3.4 程式碼審查”">​</a></h2><p><strong>場景：</strong> 團隊成員提交了程式碼，你需要進行審查。</p><p><strong>完整工作流程：</strong></p><p><strong>第一步：快速了解變更</strong>（讓 AI 幫忙）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>總結這個 PR 改了什麼</span></span>
<span class="line"><span>主要修改了哪些檔案</span></span></code></pre></div><p><strong>第二步：檢查常見問題</strong>（讓 AI 幫忙）</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>檢查這個變更是否有：</span></span>
<span class="line"><span>1. 安全問題（SQL 注入、XSS 等）</span></span>
<span class="line"><span>2. 性能問題（N+1 查詢、記憶體洩漏等）</span></span>
<span class="line"><span>3. 明顯的 bug</span></span>
<span class="line"><span>4. 程式碼風格是否符合專案規範</span></span></code></pre></div><p><strong>第三步：深入審查</strong>（由你完成）</p><ul><li>業務邏輯是否正確</li><li>是否考慮了邊界情況</li><li>是否有更好的實現方式</li><li>是否需要新增測試</li></ul><p><strong>第四步：給出回饋</strong>（由你完成）</p><ul><li>指出需要修改的地方</li><li>解釋為什麼需要修改</li><li>提供改善建議</li></ul><p><strong>真實對話範例：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>你：幫我審查這個 PR</span></span>
<span class="line"><span>    [提供 PR 連結或程式碼]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：我審查了這個變更，發現了以下問題：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    1. 安全問題：</span></span>
<span class="line"><span>       - 第 23 行：使用者輸入未轉義，可能有 XSS 風險</span></span>
<span class="line"><span>       - 第 45 行：SQL 查詢使用字串拼接，有注入風險</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    2. 性能問題：</span></span>
<span class="line"><span>       - 第 67 行：在迴圈中查詢資料庫，造成 N+1 問題</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    3. 程式碼品質：</span></span>
<span class="line"><span>       - handleSubmit 函式太長（200 行），建議拆分</span></span>
<span class="line"><span>       - 缺少錯誤處理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    你需要我詳細解釋其中任何一個嗎？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你：詳細解釋一下 SQL 注入問題</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：在第 45 行：</span></span>
<span class="line"><span>    \`\`\`javascript</span></span>
<span class="line"><span>    const query = \`SELECT * FROM users WHERE name = &#39;\${userName}&#39;\`;</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    這裡直接將使用者輸入拼接到 SQL 語句中。</span></span>
<span class="line"><span>    如果使用者輸入 \`&#39; OR &#39;1&#39;=&#39;1\`，就會變成：</span></span>
<span class="line"><span>    \`\`\`sql</span></span>
<span class="line"><span>    SELECT * FROM users WHERE name = &#39;&#39; OR &#39;1&#39;=&#39;1&#39;</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span>    這會返回所有使用者資料。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    正確的做法是使用參數化查詢：</span></span>
<span class="line"><span>    \`\`\`javascript</span></span>
<span class="line"><span>    const query = &#39;SELECT * FROM users WHERE name = ?&#39;;</span></span>
<span class="line"><span>    db.query(query, [userName]);</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    你需要我修復嗎？</span></span></code></pre></div><h1 id="_4-建立專案知識庫" tabindex="-1">4. 建立專案知識庫 <a class="header-anchor" href="#_4-建立專案知識庫" aria-label="Permalink to “4. 建立專案知識庫”">​</a></h1><p>為了幫助 AI 更好地理解你的專案，建議在專案中建立一個知識庫。這樣 AI 就能按照你的慣例和習慣來工作。</p><h2 id="_4-1-建立專案描述檔案" tabindex="-1">4.1 建立專案描述檔案 <a class="header-anchor" href="#_4-1-建立專案描述檔案" aria-label="Permalink to “4.1 建立專案描述檔案”">​</a></h2><p>在專案根目錄建立一個 <code>CLAUDE.md</code> 或 <code>AGENTS.md</code> 檔案，記錄關鍵的專案資訊：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 專案概覽</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 專案摘要</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">這是一個線上學習平台，提供課程管理、使用者學習、作業提交等功能。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 技術堆疊</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端：React 18 + TypeScript + Vite</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 後端：Node.js + Express + PostgreSQL</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 部署：Vercel（前端）+ Railway（後端）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 專案結構</span></span></code></pre></div><p>src/ ├── components/ # React 元件 ├── pages/ # 頁面元件 ├── api/ # API 呼叫 ├── utils/ # 工具函式 └── types/ # TypeScript 型別定義</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>## 程式碼規範</span></span>
<span class="line"><span>- 使用 ESLint 和 Prettier 格式化程式碼</span></span>
<span class="line"><span>- 元件檔案使用 PascalCase（如 UserProfile.tsx）</span></span>
<span class="line"><span>- 工具函式使用 camelCase（如 formatDate.ts）</span></span>
<span class="line"><span>- 常數使用 UPPER_SNAKE_CASE（如 API_BASE_URL）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 開發流程</span></span>
<span class="line"><span>1. 從 main 建立功能分支</span></span>
<span class="line"><span>2. 開發完成後提交 PR</span></span>
<span class="line"><span>3. 程式碼審查通過後合併</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常用指令</span></span>
<span class="line"><span>- 啟動開發伺服器：\`npm run dev\`</span></span>
<span class="line"><span>- 執行測試：\`npm test\`</span></span>
<span class="line"><span>- 生產建置：\`npm run build\`</span></span>
<span class="line"><span>- 格式化程式碼：\`npm run format\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 注意事項</span></span>
<span class="line"><span>- 所有 API 呼叫都必須包含錯誤處理</span></span>
<span class="line"><span>- 使用者輸入必須驗證和轉義</span></span>
<span class="line"><span>- 資料庫操作使用參數化查詢，避免 SQL 注入</span></span>
<span class="line"><span>- 敏感資訊（密碼、token）不得寫入日誌</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 資料庫 Schema</span></span>
<span class="line"><span>- users: 使用者表（id, email, password_hash, created_at）</span></span>
<span class="line"><span>- courses: 課程表（id, title, description, teacher_id）</span></span>
<span class="line"><span>- enrollments: 選課表（id, user_id, course_id, enrolled_at）</span></span></code></pre></div><h2 id="_4-2-記錄常見問題和解決方案" tabindex="-1">4.2 記錄常見問題和解決方案 <a class="header-anchor" href="#_4-2-記錄常見問題和解決方案" aria-label="Permalink to “4.2 記錄常見問題和解決方案”">​</a></h2><p>在專案中建立 <code>docs/troubleshooting.md</code> 記錄常見問題：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 常見問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 開發環境問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 問題：npm install 失敗</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**原因：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Node 版本不相容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**解決方案：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用 Node.js 18 或更高版本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 問題：資料庫連線失敗</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**原因：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 環境變數未設定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**解決方案：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 將 .env.example 複製為 .env 並填入資料庫連線資訊</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 功能問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 問題：使用者登入後重新整理頁面會被登出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**原因：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> token 儲存在 sessionStorage 中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**解決方案：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 改用 localStorage</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 問題：圖片上傳失敗</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**原因：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 檔案大小超過限制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**解決方案：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 在前端新增檔案大小檢查，限制為 5MB</span></span></code></pre></div><h2 id="_4-3-維護技術決策記錄" tabindex="-1">4.3 維護技術決策記錄 <a class="header-anchor" href="#_4-3-維護技術決策記錄" aria-label="Permalink to “4.3 維護技術決策記錄”">​</a></h2><p>建立 <code>docs/decisions/</code> 目錄記錄重要的技術決策：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># ADR-001：選擇 PostgreSQL 作為資料庫</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 狀態</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">已接受</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 背景</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">專案需要選擇一個關聯式資料庫。候選方案有 MySQL 和 PostgreSQL。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 決策</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">選擇 PostgreSQL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 理由</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 更好的 JSON 支援，適合儲存課程內容</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 更強大的全文搜尋能力</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 團隊對 PostgreSQL 更熟悉</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 影響</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 我們需要學習 PostgreSQL 的特定功能</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 部署需要 PostgreSQL 環境</span></span></code></pre></div><h1 id="_5-提升-ai-協作效率的技巧" tabindex="-1">5. 提升 AI 協作效率的技巧 <a class="header-anchor" href="#_5-提升-ai-協作效率的技巧" aria-label="Permalink to “5. 提升 AI 協作效率的技巧”">​</a></h1><p>掌握一些實用技巧可以讓你與 AI 的協作更加高效。</p><h2 id="_5-1-描述問題時要清晰具體" tabindex="-1">5.1 描述問題時要清晰具體 <a class="header-anchor" href="#_5-1-描述問題時要清晰具體" aria-label="Permalink to “5.1 描述問題時要清晰具體”">​</a></h2><p><strong>不好的描述：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>這個功能有問題</span></span>
<span class="line"><span>幫我最佳化一下</span></span></code></pre></div><p><strong>好的描述：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>使用者點擊「提交」按鈕後，表單沒有提交</span></span>
<span class="line"><span>瀏覽器主控台報錯：Uncaught TypeError: Cannot read property &#39;value&#39; of null</span></span>
<span class="line"><span>錯誤出現在 form.js 的第 23 行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>這個列表載入很慢，有 1000 個項目</span></span>
<span class="line"><span>請幫我加分頁功能，每頁 20 個項目</span></span></code></pre></div><p><strong>要點：</strong></p><ul><li>提供具體的錯誤資訊</li><li>說明預期結果</li><li>給出相關的上下文</li></ul><h2 id="_5-2-每次只做一件事" tabindex="-1">5.2 每次只做一件事 <a class="header-anchor" href="#_5-2-每次只做一件事" aria-label="Permalink to “5.2 每次只做一件事”">​</a></h2><p><strong>不好的做法：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>幫我實現登入、註冊、密碼找回、個人中心、</span></span>
<span class="line"><span>修改密碼和郵箱驗證</span></span></code></pre></div><p><strong>好的做法：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>先實現登入功能，需求如下：</span></span>
<span class="line"><span>- 電子郵件和密碼登入</span></span>
<span class="line"><span>- 記住登入狀態</span></span>
<span class="line"><span>- 錯誤提示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（完成後）現在實現註冊功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（完成後）現在實現密碼找回功能</span></span></code></pre></div><p><strong>要點：</strong></p><ul><li>將大任務拆分為小任務</li><li>每完成一個任務就測試和驗證</li><li>確認沒有問題後再進行下一個</li></ul><h2 id="_5-3-及時驗證結果" tabindex="-1">5.3 及時驗證結果 <a class="header-anchor" href="#_5-3-及時驗證結果" aria-label="Permalink to “5.3 及時驗證結果”">​</a></h2><p><strong>不好的做法：</strong></p><ul><li>讓 AI 連續修改 10 個檔案</li><li>最後才發現第一個修改就已經錯了</li><li>浪費大量時間</li></ul><p><strong>好的做法：</strong></p><ul><li>修改一個檔案後立即測試</li><li>確認沒有問題再繼續</li><li>發現問題就及時修正</li></ul><p><strong>要點：</strong></p><ul><li>小步前進，快速回饋</li><li>不要盲目信任 AI</li><li>保持對程式碼的掌控</li></ul><h2 id="_5-4-善用上下文" tabindex="-1">5.4 善用上下文 <a class="header-anchor" href="#_5-4-善用上下文" aria-label="Permalink to “5.4 善用上下文”">​</a></h2><p><strong>技巧一：引用之前的對話</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>根據我們剛才討論的計畫來實現</span></span>
<span class="line"><span>參考之前的 getUserList 函式</span></span></code></pre></div><p><strong>技巧二：提供相關程式碼</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>這是既有的使用者模型程式碼：</span></span>
<span class="line"><span>[貼上程式碼]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>請用相同的風格實現文章模型</span></span></code></pre></div><p><strong>技巧三：說明專案背景</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>這是一個電商專案，使用 React + Node.js</span></span>
<span class="line"><span>已經有了使用者系統和商品系統</span></span>
<span class="line"><span>現在我們需要新增購物車功能</span></span></code></pre></div><h2 id="_5-5-儲存有用的對話" tabindex="-1">5.5 儲存有用的對話 <a class="header-anchor" href="#_5-5-儲存有用的對話" aria-label="Permalink to “5.5 儲存有用的對話”">​</a></h2><p><strong>場景：</strong> 你解決了一個複雜的問題</p><p><strong>做法：</strong></p><ol><li>將解決方案記錄到專案文件中</li><li>下次遇到類似問題時參考</li><li>分享給其他團隊成員</li></ol><p><strong>範例：</strong></p><p>在 <code>docs/solutions/</code> 下建立文件：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 解決 N+1 查詢問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 問題描述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">在取得文章列表時，系統會為每篇文章查詢一次作者資訊，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">導致性能問題。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 解決方案</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用 JOIN 查詢一次性取得所有資料：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`sql</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> articles.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> author_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> articles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LEFT JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> articles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">author_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span></span></code></pre></div><p><strong>結果：</strong> 查詢時間從 2000ms 降至 50ms</p><h2 id="_5-6-學習提問的藝術" tabindex="-1">5.6 學習提問的藝術 <a class="header-anchor" href="#_5-6-學習提問的藝術" aria-label="Permalink to “5.6 學習提問的藝術”">​</a></h2><p><strong>技巧一：先問「為什麼」</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>為什麼這段程式碼會造成記憶體洩漏？</span></span>
<span class="line"><span>為什麼應該使用 useCallback 而不是普通函式？</span></span></code></pre></div><p><strong>技巧二：要求多個選項</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>實現使用者認證有哪些不同的方式？</span></span>
<span class="line"><span>各自的優缺點是什麼？</span></span></code></pre></div><p><strong>技巧三：要求解釋</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>這段程式碼是如何運作的？</span></span>
<span class="line"><span>你能詳細解釋這個演算法嗎？</span></span></code></pre></div><h1 id="_6-常見問題" tabindex="-1">6. 常見問題 <a class="header-anchor" href="#_6-常見問題" aria-label="Permalink to “6. 常見問題”">​</a></h1><h2 id="q1-我可以直接使用-ai-生成的程式碼嗎" tabindex="-1">Q1：我可以直接使用 AI 生成的程式碼嗎？ <a class="header-anchor" href="#q1-我可以直接使用-ai-生成的程式碼嗎" aria-label="Permalink to “Q1：我可以直接使用 AI 生成的程式碼嗎？”">​</a></h2><p><strong>A：</strong> 不可以，不能直接使用。它需要審查和測試。</p><p>AI 生成的程式碼可能有以下問題：</p><ul><li>邏輯錯誤或邊界情況處理不當</li><li>不符合專案的程式碼規範</li><li>安全風險</li><li>性能最佳化不足</li></ul><p>你需要：</p><ul><li>仔細閱讀生成的程式碼</li><li>理解其邏輯</li><li>測試不同場景</li><li>確認它遵循專案規範</li></ul><h2 id="q2-如果-ai-誤解了我的意思怎麼辦" tabindex="-1">Q2：如果 AI 誤解了我的意思怎麼辦？ <a class="header-anchor" href="#q2-如果-ai-誤解了我的意思怎麼辦" aria-label="Permalink to “Q2：如果 AI 誤解了我的意思怎麼辦？”">​</a></h2><p><strong>A：</strong> 及時糾正，重新描述需求。</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>不是這個意思。我的意思是...</span></span>
<span class="line"><span>這個理解是不正確的。應該是...</span></span>
<span class="line"><span>讓我重新描述一下需求...</span></span></code></pre></div><p>如果糾正幾次後仍然不正確，你可以：</p><ul><li>提供更多上下文</li><li>給出具體的程式碼範例</li><li>將任務拆分為更小的部分</li></ul><h2 id="q3-遇到-ai-無法解決的問題怎麼辦" tabindex="-1">Q3：遇到 AI 無法解決的問題怎麼辦？ <a class="header-anchor" href="#q3-遇到-ai-無法解決的問題怎麼辦" aria-label="Permalink to “Q3：遇到 AI 無法解決的問題怎麼辦？”">​</a></h2><p><strong>A：</strong> AI 不是萬能的。有些問題仍然需要你自己解決。</p><p>AI 可能無法解決的問題：</p><ul><li>非常新的技術（AI 的知識有截止日期）</li><li>你們團隊獨有的業務邏輯</li><li>需要存取外部系統的問題</li><li>複雜的性能最佳化問題</li></ul><p>這時候，你需要：</p><ul><li>閱讀官方文件</li><li>搜尋相關的解決方案</li><li>請教有經驗的同事</li><li>在社群中提問</li></ul><h2 id="q4-如何判斷-ai-的建議是否合理" tabindex="-1">Q4：如何判斷 AI 的建議是否合理？ <a class="header-anchor" href="#q4-如何判斷-ai-的建議是否合理" aria-label="Permalink to “Q4：如何判斷 AI 的建議是否合理？”">​</a></h2><p><strong>A：</strong> 用你自己的經驗和知識來判斷。</p><p>評估標準：</p><ul><li>是否遵循最佳實踐</li><li>是否考慮了邊界情況</li><li>是否有潛在的安全風險</li><li>是否適合專案的技術堆疊</li><li>性能是否可接受</li></ul><p>如果不確定，你可以：</p><ul><li>請 AI 解釋為什麼建議這種做法</li><li>要求提供替代方案</li><li>諮詢團隊成員</li></ul><h2 id="q5-團隊應該如何使用-ai-協作" tabindex="-1">Q5：團隊應該如何使用 AI 協作？ <a class="header-anchor" href="#q5-團隊應該如何使用-ai-協作" aria-label="Permalink to “Q5：團隊應該如何使用 AI 協作？”">​</a></h2><p><strong>A：</strong> 建立共享的規範和共享的知識庫。</p><p>團隊協作建議：</p><ul><li>共用專案的 <code>CLAUDE.md</code> 設定</li><li>統一程式碼規範和風格</li><li>記錄常見問題的解決方案</li><li>定期分享有用的提示詞</li><li>在程式碼審查時檢查 AI 生成的程式碼</li></ul><h2 id="q6-如何避免過度依賴-ai" tabindex="-1">Q6：如何避免過度依賴 AI？ <a class="header-anchor" href="#q6-如何避免過度依賴-ai" aria-label="Permalink to “Q6：如何避免過度依賴 AI？”">​</a></h2><p><strong>A：</strong> 保持學習和思考。AI 是助手，不是替代品。</p><p>建議：</p><ul><li>理解 AI 生成的程式碼，而不是盲目複製</li><li>主動學習你不了解的概念</li><li>定期複習基礎知識</li><li>先嘗試自己解決問題，再用 AI 驗證</li><li>參與程式碼審查，從他人的經驗中學習</li></ul><h1 id="_7-總結" tabindex="-1">7. 總結 <a class="header-anchor" href="#_7-總結" aria-label="Permalink to “7. 總結”">​</a></h1><p>透過本章的學習，你現在已經掌握了：</p><ol><li><strong>AI 的能力邊界</strong>：了解 AI 擅長什麼和不擅長什麼，建立正確的協作模式</li><li><strong>專案類型策略</strong>：針對全新專案、成熟專案、快速原型和維護專案的不同開發策略</li><li><strong>常見任務工作流程</strong>：開發新功能、修復 bug、重構程式碼和程式碼審查的完整工作流程</li><li><strong>專案知識庫</strong>：學習如何建立專案文件讓 AI 更好地理解你的專案</li><li><strong>協作技巧</strong>：提升 AI 協作效率的實用方法</li></ol><p><strong>核心要點：</strong></p><ul><li><strong>角色分工明確</strong>：你做決策和確保品質，AI 負責執行和輔助</li><li><strong>溝通清晰</strong>：具體明確，一次只做一件事</li><li><strong>及時驗證</strong>：不盲目信任，測試和驗證</li><li><strong>持續學習</strong>：了解 AI 的能力邊界，持續改進協作模式</li></ul><p>記住：AI 是工具，不是替代品。它可以讓你更高效，但最終的程式碼品質仍然取決於你的判斷。從簡單的任務開始，逐步建立信任。你會發現 AI 可以幫你節省大量時間，讓你專注於更有價值的工作。</p><div class="tip custom-block"><p class="custom-block-title">💡 下一步</p><p>在下一章中，我們將學習如何使用 AI 進行程式碼審查和品質保證，確保程式碼的可維護性和安全性。</p></div>`,236)])])}const k=a(p,[["render",e]]);export{d as __pageData,k as default};
