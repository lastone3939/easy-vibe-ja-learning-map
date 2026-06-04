import{_ as a,o as i,c as n,b6 as p}from"./chunks/framework.BUXTSoD9.js";const c=JSON.parse('{"title":"Claude Code 快速上手核心指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh-tw/stage-3/core-skills/basics/index.md","filePath":"zh-tw/stage-3/core-skills/basics/index.md"}'),l={name:"zh-tw/stage-3/core-skills/basics/index.md"};function t(e,s,h,k,d,r){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="claude-code-快速上手核心指南" tabindex="-1">Claude Code 快速上手核心指南 <a class="header-anchor" href="#claude-code-快速上手核心指南" aria-label="Permalink to “Claude Code 快速上手核心指南”">​</a></h1><p>Claude Code 是 Anthropic 官方的 AI 原生程式設計工具。它將大型語言模型能力直接整合到終端機中，讓你可以透過自然語言與 AI 協作來完成程式設計任務。與傳統的程式碼補全工具不同，Claude Code 能夠理解整個專案的上下文，並執行複雜的開發任務。從程式碼生成到重構，從除錯到文件撰寫，它都能勝任。</p><p>本章幫助你快速掌握 Claude Code 的核心用法，包括安裝設定、基本操作、實用技巧和常用命令。無論你是第一次使用 AI 程式設計工具，還是想更有效率地使用 Claude Code，都能在這裡找到所需內容。</p><hr><h2 id="快速安裝" tabindex="-1">快速安裝 <a class="header-anchor" href="#快速安裝" aria-label="Permalink to “快速安裝”">​</a></h2><p>Claude Code 基於 Node.js 建構，因此安裝前請確保系統已安裝 Node.js 18 或以上版本。整個過程非常簡單，通常只需要幾分鐘。</p><h3 id="為什麼你需要-claude-code" tabindex="-1">為什麼你需要 Claude Code <a class="header-anchor" href="#為什麼你需要-claude-code" aria-label="Permalink to “為什麼你需要 Claude Code”">​</a></h3><p>在傳統的開發工作流程中，開發者頻繁在編輯器、終端機、瀏覽器和文件之間切換。Claude Code 將這些工作流程統一到一個介面中：在同一個終端機視窗裡，你可以撰寫程式碼、執行測試、閱讀文件，甚至與團隊成員協作。更重要的是，它能理解你的專案結構並記住你的程式設計習慣，成為真正的程式設計助手。</p><h3 id="方法一-手動安裝" tabindex="-1">方法一：手動安裝 <a class="header-anchor" href="#方法一-手動安裝" aria-label="Permalink to “方法一：手動安裝”">​</a></h3><p>手動安裝適合喜歡完全掌控每個步驟的開發者，也有助於你清楚了解工具的各個元件。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全域安裝 Claude Code CLI</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 -g 全域安裝命令，可在任何目錄下使用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @anthropic-ai/claude-code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 驗證安裝</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果顯示版本號（例如 0.1.25），表示安裝成功</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div><p>安裝過程中，npm 會自動下載依賴項並設定環境變數。如果遇到權限問題，請嘗試使用 <code>sudo</code>（macOS/Linux）或以管理員身份執行終端機（Windows）。</p><h3 id="方法二-讓-ai-agent-為你安裝" tabindex="-1">方法二：讓 AI Agent 為你安裝 <a class="header-anchor" href="#方法二-讓-ai-agent-為你安裝" aria-label="Permalink to “方法二：讓 AI Agent 為你安裝”">​</a></h3><p>如果你已經在使用其他 AI 程式設計助手（例如 Cursor、Windsurf 或本專案中的 AI Agent），可以讓它們幫你完成安裝。好處是 AI 能自動偵測你的環境、處理依賴衝突，並為你的系統選擇最佳安裝路徑。</p><p><strong>你只需要說：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>幫我安裝 Anthropic 的 Claude Code。</span></span></code></pre></div><p>或更具體地說：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>安裝 Claude Code CLI 並檢查我的 Node.js 版本是否相容。</span></span></code></pre></div><p>AI Agent 會執行以下步驟：</p><ol><li>檢查目前的 Node.js 版本</li><li>如果不符合要求，提示你升級</li><li>執行安裝命令</li><li>驗證安裝結果</li><li>如果有問題，嘗試自動修復</li></ol><h3 id="首次啟動與初始化" tabindex="-1">首次啟動與初始化 <a class="header-anchor" href="#首次啟動與初始化" aria-label="Permalink to “首次啟動與初始化”">​</a></h3><p>安裝完成後，進入你的專案目錄並啟動 Claude Code：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 進入專案目錄（Claude Code 在當前目錄下運作）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/your/project</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 啟動 Claude Code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span></span></code></pre></div><p>首次啟動時，Claude Code 會引導你完成幾個重要的設定步驟：</p><ol><li><strong>登入 Anthropic 帳號</strong>：你需要一個 Anthropic 帳號才能使用 Claude Code。如果還沒有帳號，系統會提示你註冊。</li><li><strong>選擇方案</strong>： <ul><li><strong>免費方案</strong>：適合個人學習和輕度使用，有呼叫次數限制</li><li><strong>Pro 方案</strong>：適合專業開發者，提供更高的額度和優先回應</li></ul></li><li><strong>接受條款</strong>：閱讀並接受 Anthropic 的使用條款和隱私政策</li><li><strong>選填：設定 API 金鑰</strong>：如果你有自訂金鑰（例如來自第三方供應商），可在此設定</li></ol><div class="info custom-block"><p class="custom-block-title">中國大陸使用者特別說明</p><p>由於網路原因，中國大陸使用者可能無法直接存取 Anthropic 官方服務。Claude Code 支援與 Anthropic API 格式相容的第三方服務，這在技術上是可行的。</p><p><strong>你有兩個選擇：</strong></p><ol><li><strong>直接使用 API Token</strong>：從與 Anthropic API 相容的供應商購買 Token，並透過環境變數進行設定</li><li><strong>使用程式設計方案</strong>：一些供應商提供針對程式設計場景優化的方案，通常更具成本效益</li></ol><p><strong>建議做法</strong>：讓 AI Agent 幫你設定。你只需要提供供應商的設定資訊（API 端點、金鑰等），AI 就能正確設定環境變數。</p><p><strong>詳細設定指南請參閱：</strong> <a href="/easy-vibe-ja-learning-map/zh-tw/stage-2/backend/modern-cli/">如何安裝 Claude Code 並設定環境變數</a></p></div><hr><h2 id="快速上手-執行幾個小實驗" tabindex="-1">快速上手：執行幾個小實驗 <a class="header-anchor" href="#快速上手-執行幾個小實驗" aria-label="Permalink to “快速上手：執行幾個小實驗”">​</a></h2><p>安裝完成後，不要急著投入正式專案。先執行幾個小實驗來了解 Claude Code 的運作方式。以下三個實驗由淺入深設計，分別對應三項核心能力：自然語言理解、內容生成和程式碼執行。</p><h3 id="實驗一-對話——感受-ai-的理解力" tabindex="-1">實驗一：對話——感受 AI 的理解力 <a class="header-anchor" href="#實驗一-對話——感受-ai-的理解力" aria-label="Permalink to “實驗一：對話——感受 AI 的理解力”">​</a></h3><p>目的是體驗 Claude Code 的自然語言理解能力。與普通搜尋引擎不同，Claude Code 能夠理解上下文、進行多輪對話，並根據你的反饋調整回答。</p><p><strong>試試這些提示：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>你好，你是誰？</span></span></code></pre></div><p>Claude 會自我介紹為 Claude Code，Anthropic 的 AI 程式設計助手。</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>什麼是閉包？給我太長沒看版（TL;DR）的解釋。</span></span></code></pre></div><p>觀察 Claude 如何以「太長沒看」為提示，給出簡潔但準確的解釋。</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>JavaScript 和 TypeScript 有什麼區別？</span></span></code></pre></div><p>這是一個技術比較問題。看看 Claude 是否提供結構化且有深度的回答。</p><p><strong>實驗重點</strong>：注意 Claude 的回應風格。它通常先給出核心結論，然後再補充細節。這種「倒金字塔」風格非常適合快速獲取資訊。</p><h3 id="實驗二-生成-markdown-文件——體驗內容創作" tabindex="-1">實驗二：生成 Markdown 文件——體驗內容創作 <a class="header-anchor" href="#實驗二-生成-markdown-文件——體驗內容創作" aria-label="Permalink to “實驗二：生成 Markdown 文件——體驗內容創作”">​</a></h3><p>這個實驗展示 Claude Code 的內容生成能力。對開發者來說，撰寫文件往往令人頭痛。Claude 能根據需求快速生成清晰且完整的文件。</p><p><strong>輸入以下指令：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>撰寫一份常用 Git 命令的 Markdown 文件。</span></span>
<span class="line"><span>要求：包含命令、說明和範例。</span></span></code></pre></div><p><strong>Claude 會執行以下步驟：</strong></p><ol><li>分析你的需求：常用 Git 命令、Markdown 格式和三個要素（命令/說明/範例）</li><li>規劃文件結構：通常按使用場景分組（初始化、日常開發、分支工作流程、遠端協作等）</li><li>生成內容：為每個命令提供簡潔的說明和實用範例</li><li>格式化輸出：使用 Markdown 語法和適當的結構</li></ol><p><strong>預期輸出範例：</strong></p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 常用 Git 命令速查表</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 初始化儲存庫</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 命令 | 說明 | 範例 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`git init\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | 初始化新儲存庫 | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`git init my-project\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`git clone\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | 複製遠端儲存庫 | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`git clone https://github.com/user/repo.git\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><p><strong>進階嘗試</strong>：你可以加入額外要求，例如「加入中文註解」、「按使用頻率排序」、「包含常見錯誤處理」等，觀察 Claude 如何調整輸出。</p><h3 id="實驗三-撰寫並執行遊戲——端到端程式設計工作流程" tabindex="-1">實驗三：撰寫並執行遊戲——端到端程式設計工作流程 <a class="header-anchor" href="#實驗三-撰寫並執行遊戲——端到端程式設計工作流程" aria-label="Permalink to “實驗三：撰寫並執行遊戲——端到端程式設計工作流程”">​</a></h3><p>這是最具挑戰性的實驗。它展示了 Claude Code 的完整工作流程：理解需求、撰寫程式碼、建立檔案、執行程式和處理錯誤。透過這個實驗，你能真正感受到 AI 程式設計助手的強大之處。</p><p><strong>輸入以下指令：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>用 Python 寫一個貪食蛇遊戲。</span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 使用 pygame</span></span>
<span class="line"><span>2. 顯示分數</span></span>
<span class="line"><span>3. 按 ESC 退出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>寫完後幫我執行。</span></span></code></pre></div><p><strong>Claude 會執行以下步驟：</strong></p><p><strong>步驟一：檢查環境</strong></p><ul><li>檢查是否已安裝 Python</li><li>檢查 pygame 是否可用</li><li>如果缺少則提示安裝</li></ul><p><strong>步驟二：撰寫程式碼</strong></p><ul><li>建立遊戲入口檔案（例如 <code>snake_game.py</code>）</li><li>實作移動、食物生成、碰撞偵測</li><li>加入分數顯示</li><li>實作 ESC 退出功能</li></ul><p><strong>步驟三：執行遊戲</strong></p><ul><li>執行 Python 腳本並啟動遊戲</li><li>遊戲視窗彈出，使用方向鍵控制蛇的移動</li></ul><p><strong>步驟四：後續支援</strong></p><ul><li>如果有 Bug，你可以直接說「蛇可以穿牆，修復這個問題」</li><li>如果你想要更多功能，例如「分數越高難度越大」，Claude 可以繼續修改</li></ul><p><strong>這個實驗的價值：</strong></p><ol><li><strong>驗證安裝</strong>：確認 Claude Code 能正確執行程式碼</li><li><strong>體驗互動</strong>：感受與 AI 協作開發的過程</li><li><strong>建立信心</strong>：看到 AI 完成一個端到端可執行的程式</li></ol><p><strong>常見問題：</strong></p><ul><li><p><strong>問：如果沒有安裝 pygame 怎麼辦？</strong></p><ul><li>答：Claude 會偵測到並建議 <code>pip install pygame</code>，或者你可以要求 Claude 安裝</li></ul></li><li><p><strong>問：遊戲啟動後終端機被佔用了，怎麼辦？</strong></p><ul><li>答：按 ESC 退出遊戲，或在另一個終端機視窗中繼續使用 Claude Code</li></ul></li><li><p><strong>問：可以換程式語言嗎？</strong></p><ul><li>答：當然可以。試試「用 JavaScript 寫」、「用 HTML5 Canvas 寫」等</li></ul></li></ul><hr><h2 id="核心技巧" tabindex="-1">核心技巧 <a class="header-anchor" href="#核心技巧" aria-label="Permalink to “核心技巧”">​</a></h2><p>掌握這些技巧，你的 Claude Code 使用效率可以提升數倍。它們來自真實的開發實踐，涵蓋高頻使用場景。</p><h3 id="技巧一-連按兩次-esc-回溯對話——撤銷誤操作" tabindex="-1">技巧一：連按兩次 Esc 回溯對話——撤銷誤操作 <a class="header-anchor" href="#技巧一-連按兩次-esc-回溯對話——撤銷誤操作" aria-label="Permalink to “技巧一：連按兩次 Esc 回溯對話——撤銷誤操作”">​</a></h3><p>這是 Claude Code 中最常用也最重要的快捷鍵。在協作過程中，你可能會打錯字、給出錯誤指令或對回答不滿意。連按兩次 Esc 可以讓你快速「時光倒流」。</p><p><strong>快捷鍵說明：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>按一次 Esc     -&gt; 清除目前輸入（類似 Ctrl+C）</span></span>
<span class="line"><span>按兩次 Esc     -&gt; 回溯到前一個對話狀態（撤銷上一輪對話）</span></span>
<span class="line"><span>按三次 Esc     -&gt; 清除所有對話歷史（重新開始）</span></span></code></pre></div><p><strong>使用場景：</strong></p><ul><li><strong>場景 A</strong>：你不小心發送了錯誤指令，Claude 已經開始執行。快速按兩次 Esc 回到執行前的狀態。</li><li><strong>場景 B</strong>：Claude 的回答不是你想要的，你想重新表述。連按兩次 Esc 撤銷並重新提問。</li><li><strong>場景 C</strong>：對話經過多輪，上下文變得混亂。連按三次 Esc 清除並重新開始。</li></ul><p><strong>重要提醒</strong>：連按兩次 Esc 回溯的是<strong>對話狀態</strong>，而不是程式碼變更。如果 Claude 已經編輯了檔案，這些編輯不會自動還原。你需要透過 Git 手動恢復。</p><p><strong>建議</strong>：在可能進行大量程式碼編輯之前，先儲存當前狀態（<code>git commit</code> 或 <code>git stash</code>），以便輕鬆恢復。</p><h3 id="技巧二-使用-引用檔案——精確控制上下文" tabindex="-1">技巧二：使用 @ 引用檔案——精確控制上下文 <a class="header-anchor" href="#技巧二-使用-引用檔案——精確控制上下文" aria-label="Permalink to “技巧二：使用 @ 引用檔案——精確控制上下文”">​</a></h3><p>雖然 Claude Code 能自動讀取專案檔案，但明確引用檔案能讓意圖更清晰，避免在不相關的檔案上浪費 Token。</p><p><strong>基本用法：</strong></p><p>與其使用模糊的指令：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>解釋 src/utils.ts</span></span></code></pre></div><p>不如使用明確的引用：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@src/utils.ts 解釋這個檔案</span></span></code></pre></div><p><strong>進階用法：</strong></p><p><strong>比較多個檔案：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@src/app.tsx @src/components/Header.tsx 這兩個檔案之間有什麼關係？</span></span></code></pre></div><p><strong>引用目錄：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@src/components/ 總結這個目錄下的所有元件</span></span></code></pre></div><p><strong>引用特定行（配合編輯器）：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@src/utils.ts:45-60 解釋這段程式碼的作用</span></span></code></pre></div><p><strong>使用提示：</strong></p><ol><li><strong>Tab 補全</strong>：輸入 <code>@</code> 後按 Tab，Claude 會顯示當前目錄下的檔案列表，你可以用方向鍵選擇</li><li><strong>相對路徑</strong>：支援 <code>@./config.json</code> 或 <code>@../shared/types.ts</code> 等引用方式</li><li><strong>模糊匹配</strong>：允許部分檔案名稱，例如 <code>@utils</code> 可以匹配 <code>src/utils.ts</code> 或 <code>src/utils/index.ts</code></li></ol><h3 id="技巧三-使用-執行命令——終端機整合" tabindex="-1">技巧三：使用 ! 執行命令——終端機整合 <a class="header-anchor" href="#技巧三-使用-執行命令——終端機整合" aria-label="Permalink to “技巧三：使用 ! 執行命令——終端機整合”">​</a></h3><p>Claude Code 內建命令執行功能。你不需要切換到其他終端機就能執行命令。</p><p><strong>基本用法：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>!npm test           # 執行測試</span></span>
<span class="line"><span>!git status         # 檢查 Git 狀態</span></span>
<span class="line"><span>!ls -la             # 列出檔案</span></span></code></pre></div><p><strong>實用場景：</strong></p><p><strong>場景：執行測試並分析失敗原因</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>!npm test</span></span>
<span class="line"><span># 失敗後</span></span>
<span class="line"><span>分析測試失敗原因並修復程式碼</span></span></code></pre></div><p><strong>場景：檢查 Git diff</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>!git diff</span></span>
<span class="line"><span># 請 Claude 解釋變更</span></span>
<span class="line"><span>總結這次 diff 中的關鍵變更</span></span></code></pre></div><p><strong>場景：建構專案</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>!npm run build</span></span>
<span class="line"><span># 如果建構失敗</span></span>
<span class="line"><span>建構失敗了，幫我修復</span></span></code></pre></div><p><strong>安全提醒：</strong></p><p>對於敏感命令（例如 <code>rm -rf</code>、<code>sudo</code>），Claude Code 會要求確認。這是一種保護機制，請仔細確認。</p><h3 id="技巧四-先-plan-再寫程式——處理複雜任務的正確方式" tabindex="-1">技巧四：先 /plan 再寫程式——處理複雜任務的正確方式 <a class="header-anchor" href="#技巧四-先-plan-再寫程式——處理複雜任務的正確方式" aria-label="Permalink to “技巧四：先 /plan 再寫程式——處理複雜任務的正確方式”">​</a></h3><p>對於複雜任務，直接寫程式往往效率低下。<code>/plan</code> 進入規劃模式：先定義實作計畫，再逐步執行。</p><p><strong>用法：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/plan</span></span>
<span class="line"><span>我想加入使用者認證功能。請建立實作計畫。</span></span></code></pre></div><p><strong>Claude 會執行以下步驟：</strong></p><ol><li><strong>分析需求</strong></li><li><strong>評估目前專案和技術棧</strong></li><li><strong>建立逐步計畫</strong></li><li><strong>與你討論並根據反饋調整</strong></li></ol><p><strong>輸出範例：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>📋 使用者認證實作計畫</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第一階段：資料庫設計</span></span>
<span class="line"><span>- [ ] 建立 users 表（id, email, password_hash, created_at）</span></span>
<span class="line"><span>- [ ] 建立 sessions 表（id, user_id, expires_at）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第二階段：後端 API</span></span>
<span class="line"><span>- [ ] POST /api/auth/register - 註冊</span></span>
<span class="line"><span>- [ ] POST /api/auth/login - 登入</span></span>
<span class="line"><span>- [ ] POST /api/auth/logout - 登出</span></span>
<span class="line"><span>- [ ] GET /api/auth/me - 取得當前使用者</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第三階段：前端整合</span></span>
<span class="line"><span>- [ ] 建立登入頁面</span></span>
<span class="line"><span>- [ ] 建立註冊頁面</span></span>
<span class="line"><span>- [ ] 加入路由守衛</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第四階段：測試</span></span>
<span class="line"><span>- [ ] 撰寫單元測試</span></span>
<span class="line"><span>- [ ] 撰寫整合測試</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你想從哪個階段開始？還是需要調整計畫？</span></span></code></pre></div><p><strong>最佳實踐：</strong></p><ul><li>預計超過 30 分鐘的任務，先使用 <code>/plan</code></li><li>逐階段執行並驗證每個階段</li><li>如果需求變更，重新執行 <code>/plan</code> 進行調整</li></ul><h3 id="技巧五-init-自動生成設定——快速初始化專案" tabindex="-1">技巧五：/init 自動生成設定——快速初始化專案 <a class="header-anchor" href="#技巧五-init-自動生成設定——快速初始化專案" aria-label="Permalink to “技巧五：/init 自動生成設定——快速初始化專案”">​</a></h3><p><code>/init</code> 是 Claude Code 最強大的命令之一。它會自動掃描你的專案，識別技術棧和結構，並生成完整的 <code>CLAUDE.md</code>。</p><p><strong>用法：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/init</span></span></code></pre></div><p><strong>Claude 會執行：</strong></p><ol><li><strong>掃描專案結構</strong>：識別框架/語言/建構工具</li><li><strong>分析設定檔案</strong>：讀取 package.json、tsconfig.json 等</li><li><strong>推斷風格</strong>：命名規範和檔案組織方式</li><li><strong>生成 CLAUDE.md</strong></li></ol><p><strong>生成的 CLAUDE.md 範例：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 我的專案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 技術棧</span></span>
<span class="line"><span>- 框架：Next.js 14（App Router）</span></span>
<span class="line"><span>- 語言：TypeScript</span></span>
<span class="line"><span>- 樣式：Tailwind CSS</span></span>
<span class="line"><span>- 狀態管理：Zustand</span></span>
<span class="line"><span>- 資料庫：Prisma + PostgreSQL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常用命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`bash</span></span>
<span class="line"><span>npm run dev      # 啟動開發伺服器</span></span>
<span class="line"><span>npm run build    # 正式建構</span></span>
<span class="line"><span>npm run test     # 執行測試</span></span>
<span class="line"><span>npx prisma migrate dev  # 資料庫遷移</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 程式碼規範</span></span>
<span class="line"><span>- 使用函式元件 + Hooks</span></span>
<span class="line"><span>- 檔案命名：PascalCase（元件）、camelCase（工具函式）</span></span>
<span class="line"><span>- 提交風格：Conventional Commits</span></span></code></pre></div><p><strong>為什麼這很重要：</strong></p><p><code>CLAUDE.md</code> 是 Claude Code 的「專案記憶」。每次啟動時，Claude 都會讀取這個檔案，了解專案背景。這意味著：</p><ul><li>你不需要重複解釋框架和技術棧</li><li>Claude 會遵循你的規範和最佳實踐</li><li>新團隊成員可以更快上手</li></ul><p><strong>建議</strong>：專案初始化後，立即執行 <code>/init</code>，然後根據實際情況微調生成的設定。</p><h3 id="技巧六-compact-壓縮上下文——節省-token" tabindex="-1">技巧六：/compact 壓縮上下文——節省 Token <a class="header-anchor" href="#技巧六-compact-壓縮上下文——節省-token" aria-label="Permalink to “技巧六：/compact 壓縮上下文——節省 Token”">​</a></h3><p>Claude Code 的上下文視窗是有限的（通常約 200K Token）。長時間對話會消耗大量 Token、增加成本，並可能將重要的早期資訊擠出上下文。</p><p><strong>用法：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/compact</span></span></code></pre></div><p><strong>運作原理：</strong></p><p><code>/compact</code> 分析對話歷史，提取關鍵資訊（已做出的決策、已生成的程式碼、已確認的需求），並建立簡潔的摘要。後續對話將基於此摘要而非完整歷史。</p><p><strong>何時使用：</strong></p><ul><li>5-6 輪對話之後</li><li>當 Claude 似乎「忘記」之前的上下文時</li><li>當切換到新的子任務但需要保留關鍵背景時</li></ul><p><strong>建議用法：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 長對話後壓縮</span></span>
<span class="line"><span>/compact</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 繼續工作</span></span>
<span class="line"><span>使用者模組已完成，接下來建構訂單模組。</span></span></code></pre></div><h3 id="技巧七-使用-claude-code-輔助-git-提交" tabindex="-1">技巧七：使用 Claude Code 輔助 Git 提交 <a class="header-anchor" href="#技巧七-使用-claude-code-輔助-git-提交" aria-label="Permalink to “技巧七：使用 Claude Code 輔助 Git 提交”">​</a></h3><p>在 Claude Code 中，建議的提交工作流程是：讓 Claude 檢查 diff 並起草提交訊息，然後你執行標準 Git 命令。這樣清晰明瞭，而且在提交前多了一次審查的機會。</p><p>官方參考資料：</p><ul><li><a href="https://code.claude.com/docs/en/commands" target="_blank" rel="noreferrer">內建命令</a></li><li><a href="https://code.claude.com/docs/en/discover-plugins" target="_blank" rel="noreferrer">探索外掛</a></li></ul><p><strong>建議的工作流程：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 檢查當前變更</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 請 Claude 總結並生成提交訊息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">根據目前的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff，生成一條</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Conventional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Commits</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 格式的提交訊息，</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">並用中文解釋為什麼選擇這個類型。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 確認後，執行標準 Git 提交</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;feat(docs): 更新 Claude Code 工作流程指南&quot;</span></span></code></pre></div><p><strong>這種方式的好處：</strong></p><ol><li><strong>與目前官方功能一致</strong>：不依賴已移除的內建命令</li><li><strong>透明可控</strong>：提交前可審查 diff 和提交訊息</li><li><strong>可攜帶</strong>：同樣的工作流程適用於其他 AI IDE 或純 Git</li></ol><p><strong>如果你想要「一鍵提交」的體驗：</strong></p><p>Claude Code 現在建議透過外掛擴展功能。例如，<code>commit-commands</code> 提供了 <code>/commit-commands:commit</code> 等命令。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 加入外掛市集範例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> marketplace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> anthropics/claude-code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 安裝提交工作流程外掛</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit-commands@anthropics-claude-code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 重新載入外掛</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/reload-plugins</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 使用外掛命令提交</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/commit-commands:commit</span></span></code></pre></div><p><strong>額外說明：</strong></p><ul><li><code>/commit-commands:commit</code> 由外掛提供，不是目前的預設內建命令</li><li>如果你只需要在提交前檢查變更，建議使用 <code>/diff</code> 或讓 Claude 解釋 <code>git diff</code></li><li>官方 <code>/review</code> 也已被標記為廢棄；如需類似功能，請使用外掛或自然語言審查流程</li></ul><h3 id="技巧八-shift-tab-自動接受——提升流暢度" tabindex="-1">技巧八：Shift+Tab 自動接受——提升流暢度 <a class="header-anchor" href="#技巧八-shift-tab-自動接受——提升流暢度" aria-label="Permalink to “技巧八：Shift+Tab 自動接受——提升流暢度”">​</a></h3><p>預設情況下，Claude 在編輯程式碼前會要求確認。這在學習階段很有用，但之後可能會覺得慢。<code>Shift+Tab</code> 啟用自動接受模式，加快迭代速度。</p><p><strong>用法：</strong></p><ul><li>按 <code>Shift+Tab</code> -&gt; 進入自動接受模式</li><li>再按 <code>Shift+Tab</code> -&gt; 退出自動接受模式</li></ul><p><strong>模式比較：</strong></p><table tabindex="0"><thead><tr><th>模式</th><th>行為</th><th>使用場景</th></tr></thead><tbody><tr><td>預設模式</td><td>每次編輯都要求確認</td><td>學習階段、重要程式碼</td></tr><tr><td>自動接受</td><td>直接套用編輯</td><td>熟悉後、快速迭代</td></tr></tbody></table><p><strong>注意事項：</strong></p><ul><li>在自動接受模式下，Claude 會直接編輯檔案，不會二次確認</li><li>建議搭配 Git 使用，以便輕鬆回滾</li><li>對於敏感操作（刪除檔案、修改關鍵設定），Claude 仍然會詢問</li></ul><h3 id="技巧九-ctrl-c-取消操作——緊急煞車" tabindex="-1">技巧九：Ctrl+C 取消操作——緊急煞車 <a class="header-anchor" href="#技巧九-ctrl-c-取消操作——緊急煞車" aria-label="Permalink to “技巧九：Ctrl+C 取消操作——緊急煞車”">​</a></h3><p>當 Claude 正在執行長時間任務，或者你意識到給出了錯誤指令時，<code>Ctrl+C</code> 就是緊急煞車。</p><p><strong>用法：</strong></p><ul><li>按一次 <code>Ctrl+C</code> -&gt; 取消目前正在執行的操作</li><li>連按兩次 <code>Ctrl+C</code> -&gt; 完全退出 Claude Code</li></ul><p><strong>使用場景：</strong></p><ul><li>長時間執行的命令需要中斷</li><li>Claude 正在生成大量不相關的程式碼</li><li>發現給出了錯誤指令，想要立即停止</li></ul><p><strong>與連按兩次 Esc 的區別：</strong></p><ul><li><code>Ctrl+C</code>：停止正在進行的<strong>操作</strong>（執行命令/生成程式碼）</li><li>連按兩次 <code>Esc</code>：回溯<strong>對話狀態</strong>（撤銷上一輪對話）</li></ul><h3 id="技巧十-context-檢查上下文使用量——最佳化-token-成本" tabindex="-1">技巧十：/context 檢查上下文使用量——最佳化 Token 成本 <a class="header-anchor" href="#技巧十-context-檢查上下文使用量——最佳化-token-成本" aria-label="Permalink to “技巧十：/context 檢查上下文使用量——最佳化 Token 成本”">​</a></h3><p><code>/context</code> 顯示目前工作階段的上下文使用量，幫助你了解 Token 消耗情況並最佳化成本。</p><p><strong>用法：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/context</span></span></code></pre></div><p><strong>輸出範例：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>📊 上下文使用量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Token 使用量：45,230 / 200,000（22.6%）</span></span>
<span class="line"><span>引用檔案數：12 個</span></span>
<span class="line"><span>對話輪數：8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Token 消耗最多的檔案：</span></span>
<span class="line"><span>1. src/api/users.ts（3,420 Token）</span></span>
<span class="line"><span>2. node_modules/@types/react/index.d.ts（2,890 Token）</span></span>
<span class="line"><span>3. src/components/Dashboard.tsx（1,560 Token）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>建議：</span></span>
<span class="line"><span>- 目前使用量健康，無需壓縮</span></span>
<span class="line"><span>- 如需減少使用量，可將 node_modules 加入 .claudeignore</span></span></code></pre></div><p><strong>如何利用這些資訊：</strong></p><ol><li><strong>識別大檔案</strong>：如果某個檔案消耗大量 Token，檢查是否真的需要</li><li><strong>最佳化 .claudeignore</strong>：忽略不相關的檔案（node_modules、建構輸出等）</li><li><strong>決定何時壓縮</strong>：當使用量超過 70% 時，考慮使用 <code>/compact</code></li></ol><h3 id="技巧十一-resume-恢復工作階段——多任務對話切換" tabindex="-1">技巧十一：/resume 恢復工作階段——多任務對話切換 <a class="header-anchor" href="#技巧十一-resume-恢復工作階段——多任務對話切換" aria-label="Permalink to “技巧十一：/resume 恢復工作階段——多任務對話切換”">​</a></h3><p>處理多個任務時，你可能會執行多個對話執行緒。<code>/resume</code> 讓你在目前聊天中切換回之前的工作階段上下文，無需重新開始。</p><p><strong>用法：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/resume</span></span></code></pre></div><p><strong>運作原理：</strong></p><p>Claude Code 會自動記錄之前的工作階段。當你執行 <code>/resume</code> 時，它會切換到之前的工作階段上下文，保留所有先前的討論內容和狀態。</p><p><strong>使用場景：</strong></p><p><strong>場景 A：平行多任務處理</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 任務 1：修復 Bug</span></span>
<span class="line"><span>claude&gt; 修復登入頁面的驗證問題</span></span>
<span class="line"><span># ... 一段對話 ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 任務 2：新增功能（新執行緒）</span></span>
<span class="line"><span>claude&gt; 新增使用者註冊功能</span></span>
<span class="line"><span># ... 另一段對話 ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 切回任務 1</span></span>
<span class="line"><span>claude&gt; /resume</span></span>
<span class="line"><span># 繼續之前的 Bug 修復工作</span></span></code></pre></div><p><strong>場景 B：臨時查詢後返回</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>claude&gt; 解釋這個演算法</span></span>
<span class="line"><span># ... 討論演算法 ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>claude&gt; /resume</span></span>
<span class="line"><span># 返回之前的程式設計工作</span></span></code></pre></div><p><strong>場景 C：中斷後恢復</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>claude&gt; 繼續之前的工作</span></span>
<span class="line"><span># 如果你之前中斷了，/resume 會帶你回到之前的狀態</span></span></code></pre></div><p><strong>與相關命令的比較：</strong></p><table tabindex="0"><thead><tr><th>命令</th><th>功能</th><th>場景</th></tr></thead><tbody><tr><td><code>/resume</code></td><td>在目前聊天中切回之前的工作階段</td><td>多任務切換</td></tr><tr><td><code>claude -c</code></td><td>繼續最近的工作階段</td><td>退出後重新連接</td></tr><tr><td><code>claude -r</code></td><td>恢復之前的工作階段</td><td>退出後恢復先前狀態</td></tr><tr><td>連按兩次 <code>Esc</code></td><td>回溯一輪對話</td><td>撤銷最近一輪對話</td></tr></tbody></table><p><strong>建議：</strong></p><ol><li><strong>多任務管理</strong>：<code>/resume</code> 比重新解釋上下文更高效</li><li><strong>工作階段記憶</strong>：每個工作階段有獨立的上下文；<code>/resume</code> 會保留它</li><li><strong>搭配 /compact 使用</strong>：在長時間工作階段中，先壓縮再恢復切換，保持上下文清爽</li></ol><hr><h2 id="核心設定" tabindex="-1">核心設定 <a class="header-anchor" href="#核心設定" aria-label="Permalink to “核心設定”">​</a></h2><p>合理的設定能幫助 Claude Code 更好地適應你的專案和團隊。本節說明設定的作用、優先級以及針對不同使用場景的最佳化。</p><h3 id="設定檔案位置與優先級" tabindex="-1">設定檔案位置與優先級 <a class="header-anchor" href="#設定檔案位置與優先級" aria-label="Permalink to “設定檔案位置與優先級”">​</a></h3><p>Claude Code 採用分層設定策略。不同層級有不同的作用範圍和優先級。了解這一點可以讓你靈活管理設定。</p><p><strong>設定優先級（從高到低）：</strong></p><table tabindex="0"><thead><tr><th>位置</th><th>作用範圍</th><th>用途</th><th>提交到 Git</th></tr></thead><tbody><tr><td><code>.claude/settings.local.json</code></td><td>本地專案</td><td>個人偏好</td><td>否</td></tr><tr><td><code>.claude/settings.json</code></td><td>專案共享</td><td>團隊統一設定</td><td>是</td></tr><tr><td><code>~/.claude/settings.json</code></td><td>全域</td><td>個人預設值</td><td>否</td></tr></tbody></table><p><strong>合併規則：</strong></p><ul><li>高優先級的設定會覆蓋低優先級中相同的鍵</li><li>不衝突的鍵會合併</li><li>專案設定覆蓋全域設定</li><li>本地個人設定覆蓋專案共享設定</li></ul><p><strong>實際場景：</strong></p><p><strong>場景一：團隊專案</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>~/.claude/settings.json          # 你的個人預設編輯器設定</span></span>
<span class="line"><span>.claude/settings.json            # 團隊程式碼規範和權限設定</span></span>
<span class="line"><span>.claude/settings.local.json      # 你的除錯偏好和主題設定</span></span></code></pre></div><p><strong>場景二：個人專案</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>~/.claude/settings.json          # 全域預設設定</span></span>
<span class="line"><span>.claude/settings.json            # 專案特定設定（例如特殊權限規則）</span></span></code></pre></div><h3 id="claude-md——專案記憶" tabindex="-1">CLAUDE.md——專案記憶 <a class="header-anchor" href="#claude-md——專案記憶" aria-label="Permalink to “CLAUDE.md——專案記憶”">​</a></h3><p><code>CLAUDE.md</code> 是 Claude Code 最重要的設定檔案。它就像專案的「說明書」。每次 Claude Code 啟動時，它都會讀取當前目錄下的 <code>CLAUDE.md</code>，了解專案背景、技術棧和規範。</p><p><strong>為什麼 CLAUDE.md 如此重要：</strong></p><p>想像你加入了一個新專案：你需要了解技術棧、程式碼規範和常用命令。通常這需要幾個小時的文件/程式碼審查和詢問團隊成員。有了 <code>CLAUDE.md</code>，Claude 在啟動時就知道了這些資訊，你可以立即進行高效協作。</p><p><strong>最小可行模板：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># [專案名稱]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 技術棧</span></span>
<span class="line"><span>- 框架：React 18 + TypeScript</span></span>
<span class="line"><span>- 狀態管理：Zustand</span></span>
<span class="line"><span>- 樣式：Tailwind CSS</span></span>
<span class="line"><span>- 建構工具：Vite</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常用命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`bash</span></span>
<span class="line"><span>npm run dev      # 啟動開發伺服器（連接埠 5173）</span></span>
<span class="line"><span>npm run test     # 執行單元測試</span></span>
<span class="line"><span>npm run build    # 正式建構</span></span>
<span class="line"><span>npm run lint     # 程式碼檢查</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 程式碼規範</span></span>
<span class="line"><span>- 元件使用函式元件 + Hooks</span></span>
<span class="line"><span>- 命名：PascalCase（元件）、camelCase（工具函式）</span></span>
<span class="line"><span>- Git 提交使用 Conventional Commits</span></span>
<span class="line"><span>- 所有 API 呼叫必須透過統一的請求封裝</span></span></code></pre></div><p><strong>完整模板（建議）：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># [專案名稱]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 專案概述</span></span>
<span class="line"><span>一句話描述主要功能和目標使用者。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 技術棧</span></span>
<span class="line"><span>### 前端</span></span>
<span class="line"><span>- 框架：React 18 + TypeScript</span></span>
<span class="line"><span>- 路由：React Router v6</span></span>
<span class="line"><span>- 狀態管理：Zustand + React Query</span></span>
<span class="line"><span>- 樣式：Tailwind CSS + Headless UI</span></span>
<span class="line"><span>- 建構：Vite</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 後端（如適用）</span></span>
<span class="line"><span>- 執行環境：Node.js + Express</span></span>
<span class="line"><span>- 資料庫：PostgreSQL + Prisma</span></span>
<span class="line"><span>- 認證：JWT + bcrypt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 專案結構</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span>src/</span></span>
<span class="line"><span>├── components/      # 可重用元件</span></span>
<span class="line"><span>├── pages/           # 頁面元件</span></span>
<span class="line"><span>├── hooks/           # 自訂 Hooks</span></span>
<span class="line"><span>├── lib/             # 工具函式</span></span>
<span class="line"><span>├── types/           # TypeScript 型別定義</span></span>
<span class="line"><span>└── api/             # API 呼叫</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常用命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`bash</span></span>
<span class="line"><span># 開發</span></span>
<span class="line"><span>npm run dev              # 啟動開發伺服器</span></span>
<span class="line"><span>npm run dev:mock         # 開發時使用模擬資料</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 測試</span></span>
<span class="line"><span>npm run test             # 執行所有測試</span></span>
<span class="line"><span>npm run test:watch       # 監控模式</span></span>
<span class="line"><span>npm run test:coverage    # 生成覆蓋率報告</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 程式碼品質</span></span>
<span class="line"><span>npm run lint             # ESLint 檢查</span></span>
<span class="line"><span>npm run lint:fix         # 自動修復 ESLint 問題</span></span>
<span class="line"><span>npm run format           # Prettier 格式化</span></span>
<span class="line"><span>npm run typecheck        # TypeScript 型別檢查</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 建構</span></span>
<span class="line"><span>npm run build            # 正式建構</span></span>
<span class="line"><span>npm run preview          # 預覽正式建構</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 開發規則</span></span>
<span class="line"><span>### 程式碼風格</span></span>
<span class="line"><span>- 使用函式元件，避免類別元件</span></span>
<span class="line"><span>- 優先使用自訂 Hooks 進行邏輯抽象</span></span>
<span class="line"><span>- 元件 props 必須定義 TypeScript 介面</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Git 工作流程</span></span>
<span class="line"><span>- 分支前綴：\`feature/\`、\`fix/\`、\`refactor/\`</span></span>
<span class="line"><span>- 提交訊息遵循 Conventional Commits</span></span>
<span class="line"><span>- PR 必須通過 CI 和程式碼審查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 效能要求</span></span>
<span class="line"><span>- 元件延遲載入以減少首屏載入時間</span></span>
<span class="line"><span>- 使用 WebP 圖片並啟用延遲載入</span></span>
<span class="line"><span>- API 回應時間保持在 200ms 以下</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 環境變數</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`bash</span></span>
<span class="line"><span># .env.local</span></span>
<span class="line"><span>VITE_API_BASE_URL=http://localhost:3000</span></span>
<span class="line"><span>VITE_APP_NAME=MyApp</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常見問題</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 開發伺服器啟動失敗？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>檢查連接埠 5173 是否被佔用，或嘗試 \`npm run dev -- --port 3000\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 型別錯誤？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>執行 \`npm run typecheck\` 查看詳細錯誤</span></span></code></pre></div><p><strong>快速生成 CLAUDE.md：</strong></p><p>如果你的專案已經存在但沒有 <code>CLAUDE.md</code>，執行 <code>/init</code>：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 Claude Code 中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/init</span></span></code></pre></div><p>Claude 會分析專案結構、package.json 和現有程式碼，然後生成實用的 <code>CLAUDE.md</code>。生成後，請手動審查並調整。</p><h3 id="claudeignore——節省-token" tabindex="-1">.claudeignore——節省 Token <a class="header-anchor" href="#claudeignore——節省-token" aria-label="Permalink to “.claudeignore——節省 Token”">​</a></h3><p><code>.claudeignore</code> 告訴 Claude Code 哪些檔案不應該被讀入上下文。正確的設定可以顯著減少 Token 使用量（通常 40-60%），並提高回應速度。</p><p><strong>為什麼需要 .claudeignore：</strong></p><p>當 Claude Code 嘗試理解專案時，它會讀取相關檔案。有些檔案對理解沒有幫助，而且可能：</p><ul><li>消耗大量 Token（例如 node_modules 中的型別定義檔案）</li><li>引入雜訊（日誌、建構輸出）</li><li>包含敏感資訊（.env 檔案）</li></ul><p><strong>建議設定：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ===== 依賴項 =====</span></span>
<span class="line"><span># 大量第三方程式碼，通常不需要進入 Claude 上下文</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>.pnp/</span></span>
<span class="line"><span>.pnp.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 建構輸出 =====</span></span>
<span class="line"><span># 生成的產物，不是原始邏輯</span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span>.next/</span></span>
<span class="line"><span>out/</span></span>
<span class="line"><span>*.tsbuildinfo</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 日誌 =====</span></span>
<span class="line"><span># 執行時日誌，對理解架構沒有價值</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>npm-debug.log*</span></span>
<span class="line"><span>yarn-debug.log*</span></span>
<span class="line"><span>yarn-error.log*</span></span>
<span class="line"><span>pnpm-debug.log*</span></span>
<span class="line"><span>lerna-debug.log*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 測試輸出 =====</span></span>
<span class="line"><span>coverage/</span></span>
<span class="line"><span>.nyc_output/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 編輯器 / IDE =====</span></span>
<span class="line"><span>.vscode/*</span></span>
<span class="line"><span>!.vscode/extensions.json</span></span>
<span class="line"><span>.idea/</span></span>
<span class="line"><span>*.suo</span></span>
<span class="line"><span>*.ntvs*</span></span>
<span class="line"><span>*.njsproj</span></span>
<span class="line"><span>*.sln</span></span>
<span class="line"><span>*.sw?</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 系統檔案 =====</span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>Thumbs.db</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 環境檔案 =====</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span>.env.local</span></span>
<span class="line"><span>.env.*.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 大型二進位資源 =====</span></span>
<span class="line"><span>*.png</span></span>
<span class="line"><span>*.jpg</span></span>
<span class="line"><span>*.jpeg</span></span>
<span class="line"><span>*.gif</span></span>
<span class="line"><span>*.svg</span></span>
<span class="line"><span>*.ico</span></span>
<span class="line"><span>*.mp4</span></span>
<span class="line"><span>*.webm</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 鎖定檔案（選填）=====</span></span>
<span class="line"><span># 如果你不需要 Claude 分析依賴版本，可以忽略這些</span></span>
<span class="line"><span># package-lock.json</span></span>
<span class="line"><span># yarn.lock</span></span>
<span class="line"><span># pnpm-lock.yaml</span></span></code></pre></div><p><strong>設定技巧：</strong></p><ol><li><strong>從最小開始</strong>：先忽略 node_modules 和建構輸出，然後觀察 Token 使用量</li><li><strong>根據專案調整</strong>：圖片多的專案 -&gt; 忽略圖片格式；文件專案 -&gt; 保留 Markdown</li><li><strong>定期最佳化</strong>：使用 <code>/context</code> 查看 Token 消耗最多的檔案，決定是否需要忽略</li></ol><h3 id="權限設定" tabindex="-1">權限設定 <a class="header-anchor" href="#權限設定" aria-label="Permalink to “權限設定”">​</a></h3><p>預設情況下，Claude Code 在執行敏感操作前會要求確認。透過 <code>settings.json</code> 中的 <code>permissions</code>，你可以控制哪些動作自動允許、需要確認或完全拒絕。</p><p><strong>權限設定結構：</strong></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;permissions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;allow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 自動允許，不詢問</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ask&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 執行前詢問</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deny&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 完全拒絕</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>規則語法：</strong></p><p>權限規則使用 <code>ActionType(pattern)</code> 格式：</p><table tabindex="0"><thead><tr><th>動作類型</th><th>說明</th><th>範例</th></tr></thead><tbody><tr><td><code>Bash</code></td><td>執行終端機命令</td><td><code>Bash(git status)</code></td></tr><tr><td><code>Edit</code></td><td>編輯檔案</td><td><code>Edit(src/**/*.ts)</code></td></tr><tr><td><code>Read</code></td><td>讀取檔案</td><td><code>Read(README.md)</code></td></tr><tr><td><code>Write</code></td><td>建立檔案</td><td><code>Write(src/components/*.tsx)</code></td></tr></tbody></table><p><strong>萬用字元支援：</strong></p><ul><li><code>*</code> 匹配任意字元（不包括 <code>/</code>）</li><li><code>**</code> 匹配任意路徑</li><li><code>?</code> 匹配一個字元</li></ul><p><strong>實際設定範例：</strong></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;permissions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;allow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git status)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git log:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git diff:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm test:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run lint:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(src/**/*.{ts,tsx})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(tests/**/*.test.ts)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(src/**/*.ts)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Write(src/components/*.tsx)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ask&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git commit:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git push:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git pull:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm install:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run build)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(package.json)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(tsconfig.json)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(.env)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(config/secrets.*)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deny&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(rm -rf:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(sudo:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(curl * | sh)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(wget * | sh)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(.git/*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Write(/etc/*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(/etc/passwd)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>設定建議：</strong></p><ol><li><strong>開發階段</strong>：相對寬鬆的權限以加快迭代速度</li><li><strong>正式階段</strong>：更嚴格的權限，特別是部署和敏感資料操作</li><li><strong>團隊協作</strong>：將基線規則放在共享的 <code>settings.json</code> 中，個人調整放在 <code>settings.local.json</code> 中</li></ol><h3 id="規則目錄" tabindex="-1">規則目錄 <a class="header-anchor" href="#規則目錄" aria-label="Permalink to “規則目錄”">​</a></h3><p>對於大型專案，單一 <code>CLAUDE.md</code> 可能變得臃腫且難以維護。Claude Code 支援透過<strong>規則目錄</strong>進行模組化管理，按主題將規範拆分為獨立檔案。</p><p><strong>目錄結構：</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.claude/</span></span>
<span class="line"><span>├── settings.json          # 主要設定檔案</span></span>
<span class="line"><span>├── CLAUDE.md              # 專案概述（仍然需要）</span></span>
<span class="line"><span>└── rules/                 # 規則目錄</span></span>
<span class="line"><span>    ├── 00-security.md     # 安全規則（全域）</span></span>
<span class="line"><span>    ├── 01-coding-style.md # 程式碼風格規則（全域）</span></span>
<span class="line"><span>    ├── 10-api.md          # API 開發規則</span></span>
<span class="line"><span>    ├── 11-frontend.md     # 前端開發規則</span></span>
<span class="line"><span>    ├── 12-backend.md      # 後端開發規則</span></span>
<span class="line"><span>    └── 20-testing.md      # 測試規則</span></span></code></pre></div><p><strong>檔案命名建議：</strong></p><p>使用數字前綴（<code>00-</code>、<code>01-</code>）控制載入順序：基礎規則在前，特定規則在後。</p><p><strong>規則檔案格式：</strong></p><p>規則檔案支援 YAML frontmatter 來定義適用範圍：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 選填：此規則適用的路徑</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">globs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/api/**/*.ts&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/services/**/*.ts&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 選填：此規則適用的命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;generate api&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;create endpoint&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 選填：規則優先級（數字越小 = 優先級越高）</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">priority</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># API 開發規則</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 路由設計</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RESTful 風格，使用複數名詞</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 版本控制：/api/v1/users</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 巢狀資源：/api/v1/users/123/orders</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 請求/回應格式</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 統一使用 JSON</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 錯誤回應必須包含 code 和 message</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 分頁回應使用 { data, pagination } 結構</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 安全要求</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 所有端點必須驗證認證（公開端點除外）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 敏感操作需要二次確認</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 實施速率限制以防止濫用</span></span></code></pre></div><p><strong>規則繼承與覆蓋：</strong></p><ul><li>全域規則（沒有 frontmatter 或 <code>globs: *</code>）適用於所有檔案</li><li>特定路徑規則僅適用於匹配的檔案</li><li>如果規則衝突，優先級更高的規則生效</li><li>特定規則可以覆蓋全域規則</li></ul><p><strong>使用場景範例：</strong></p><p><strong>場景一：前後端分離專案</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.claude/rules/</span></span>
<span class="line"><span>├── 00-general.md          # 通用標準（提交訊息、命名）</span></span>
<span class="line"><span>├── 10-backend.md          # 後端標準（NestJS 特定）</span></span>
<span class="line"><span>├── 11-frontend.md         # 前端標準（React 特定）</span></span>
<span class="line"><span>└── 20-database.md         # 資料庫標準（Prisma 特定）</span></span></code></pre></div><p><strong>場景二：微服務架構</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.claude/rules/</span></span>
<span class="line"><span>├── 00-global/             # 全域規則</span></span>
<span class="line"><span>│   ├── security.md</span></span>
<span class="line"><span>│   └── logging.md</span></span>
<span class="line"><span>├── 10-services/           # 服務特定規則</span></span>
<span class="line"><span>│   ├── user-service.md</span></span>
<span class="line"><span>│   ├── order-service.md</span></span>
<span class="line"><span>│   └── payment-service.md</span></span>
<span class="line"><span>└── 20-shared/             # 共用元件規則</span></span>
<span class="line"><span>    ├── shared-lib.md</span></span>
<span class="line"><span>    └── common-utils.md</span></span></code></pre></div><p><strong>遷移建議：</strong></p><p>如果你已經有一個非常大的 <code>CLAUDE.md</code>，可以這樣遷移到規則目錄：</p><ol><li>建立 <code>.claude/rules/</code></li><li>按主題拆分 <code>CLAUDE.md</code></li><li>為每個規則檔案加入適當的 frontmatter</li><li>將 <code>CLAUDE.md</code> 保留為專案概述，將詳細標準移出</li><li>測試並確保規則載入正常</li></ol><hr><h2 id="核心操作命令" tabindex="-1">核心操作命令 <a class="header-anchor" href="#核心操作命令" aria-label="Permalink to “核心操作命令”">​</a></h2><p>Claude Code 提供了豐富的操作命令用於高效的 AI 協作。這些命令分為幾類：斜線命令（內建功能）、符號系統（快速操作）和自然語言指令（日常開發）。</p><h3 id="斜線命令速查" tabindex="-1">斜線命令速查 <a class="header-anchor" href="#斜線命令速查" aria-label="Permalink to “斜線命令速查”">​</a></h3><p>斜線命令是以 <code>/</code> 開頭的內建操作。它們提供標準化的動作，如專案初始化、設定管理和狀態檢查。</p><table tabindex="0"><thead><tr><th>命令</th><th>功能</th><th>使用場景</th></tr></thead><tbody><tr><td><code>/help</code></td><td>顯示所有命令</td><td>忘記命令時快速查閱</td></tr><tr><td><code>/init</code></td><td>初始化專案並生成 CLAUDE.md</td><td>新專案或新增設定</td></tr><tr><td><code>/plan</code></td><td>進入規劃模式</td><td>複雜任務前建立計畫</td></tr><tr><td><code>/clear</code></td><td>清除對話歷史</td><td>上下文混亂時重新開始</td></tr><tr><td><code>/compact</code></td><td>壓縮上下文</td><td>長對話後節省 Token</td></tr><tr><td><code>/diff</code></td><td>開啟互動式 diff 檢視</td><td>檢查目前未提交的變更</td></tr><tr><td><code>/plugin</code></td><td>管理外掛</td><td>安裝提交/審查擴展</td></tr><tr><td><code>/context</code></td><td>顯示上下文使用量</td><td>最佳化 Token 成本</td></tr><tr><td><code>/cost</code></td><td>顯示工作階段成本</td><td>監控使用成本</td></tr><tr><td><code>/config</code></td><td>開啟設定面板</td><td>更新設定</td></tr><tr><td><code>/permissions</code></td><td>權限管理</td><td>調整操作權限</td></tr><tr><td><code>/model</code></td><td>切換模型</td><td>選擇不同的模型</td></tr></tbody></table><p><strong>命令組合範例：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 完整的開發工作流程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/plan</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 1. 建立計畫</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ... 執行開發 ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 2. 檢查變更</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">根據目前的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成提交訊息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # 3. 暫存變更</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 4. 提交</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/cost</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 5. 檢查成本</span></span></code></pre></div><h3 id="符號系統" tabindex="-1">符號系統 <a class="header-anchor" href="#符號系統" aria-label="Permalink to “符號系統”">​</a></h3><p>符號系統是 Claude Code 的快速操作機制。特殊符號可以快速觸發特定功能。</p><table tabindex="0"><thead><tr><th>符號</th><th>名稱</th><th>用途</th><th>範例</th></tr></thead><tbody><tr><td><code>/</code></td><td>斜線命令</td><td>執行內建操作</td><td><code>/help</code>、<code>/plan</code></td></tr><tr><td><code>@</code></td><td>At 引用</td><td>引用檔案/目錄</td><td><code>@src/app.tsx</code></td></tr><tr><td><code>!</code></td><td>驚嘆號模式</td><td>執行終端機命令</td><td><code>!npm test</code></td></tr><tr><td><code>&amp;</code></td><td>背景執行</td><td>在背景執行任務</td><td><code>&amp;npm run dev</code></td></tr></tbody></table><p><strong>符號組合技巧：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 組合符號</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/utils.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 含義：讀取 utils.ts，然後執行測試</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/components/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @src/pages/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 比較這兩個目錄的結構</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 含義：同時引用兩個目錄進行比較</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @src/app.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 解釋這些變更</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 含義：檢查 Git diff 並請 Claude 解釋特定檔案的變更</span></span></code></pre></div><h3 id="檔案操作" tabindex="-1">檔案操作 <a class="header-anchor" href="#檔案操作" aria-label="Permalink to “檔案操作”">​</a></h3><p>檔案操作是最常見的日常動作：讀取、編輯、建立和刪除檔案。</p><p><strong>讀取檔案：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 基本讀取</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/app.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 解釋這個檔案</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 讀取 + 分析</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/utils/helpers.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 找出潛在的效能問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 比較讀取</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/components/OldButton.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @src/components/NewButton.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 比較差異</span></span></code></pre></div><p><strong>編輯檔案：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 簡單編輯</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">修改</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/utils/date.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 中的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> formatDate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 以支援中文在地化格式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 複雜編輯</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/api/users.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 重構這個檔案：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 將重複的錯誤處理提取為共用的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> handleError</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 將</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Promise</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 鏈替換為</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> async/await</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 加入</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JSDoc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 註解</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 批次編輯</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">將</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 下的所有類別元件轉換為函式元件</span></span></code></pre></div><p><strong>建立檔案：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 建立一個檔案</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">建立</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/UserCard.tsx，一個用於顯示使用者資訊的卡片元件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 建立相關檔案</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">建立使用者模組：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/types/user.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 定義</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> User</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 介面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/api/users.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使用者</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> API</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 呼叫</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/UserCard.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使用者卡片元件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/hooks/useUser.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 取得使用者資料的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Hook</span></span></code></pre></div><p><strong>刪除檔案：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 帶確認的刪除</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">刪除</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/old-component.tsx（這個元件已不再使用）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Claude 會要求確認，並可能建議先檢查引用</span></span></code></pre></div><h3 id="git-操作" tabindex="-1">Git 操作 <a class="header-anchor" href="#git-操作" aria-label="Permalink to “Git 操作”">​</a></h3><p>Claude Code 與 Git 深度整合，讓你可以在不離開終端機的情況下完成完整的版本控制工作流程。</p><p><strong>檢查狀態：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 顯示 Git 狀態</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">顯示</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 和未提交的變更</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 詳細 diff</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">解釋</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/api/users.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 中的變更</span></span></code></pre></div><p><strong>建立提交：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 檢查變更</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成提交訊息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">根據目前的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成一條</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Conventional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 格式的提交訊息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 手動提交</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span></span></code></pre></div><p><strong>分支操作：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 建立功能分支</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/user-authentication</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 實作完成後</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">根據目前的變更生成提交訊息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/user-authentication</span></span></code></pre></div><p><strong>完整的 Git 工作流程範例：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 開始新功能</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/payment-integration</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 開發功能（由 Claude 協助）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">建立支付模組，支援支付寶和微信支付</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 執行測試</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 檢查變更</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 生成並確認提交訊息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">根據目前的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成一條</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Conventional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 格式的提交訊息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 6. 推送到遠端</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/payment-integration</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 7. 建立 PR（選填，使用 GitHub CLI）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --title</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;feat: 新增支付整合&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --body</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;支援支付寶和微信支付&quot;</span></span></code></pre></div><h3 id="程式碼操作" tabindex="-1">程式碼操作 <a class="header-anchor" href="#程式碼操作" aria-label="Permalink to “程式碼操作”">​</a></h3><p>程式碼操作是 Claude Code 的核心優勢：生成、解釋、重構和最佳化。</p><p><strong>生成程式碼：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成元件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">建立一個</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> React</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Hook</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 來管理認證狀態，包括登入/登出/權限檢查</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成工具函式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">建立一個日期格式化工具，支援相對時間（例如「2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 小時前」）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成完整模組</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">建立訂單模組，包含：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 訂單列表頁</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 訂單詳情頁</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 建立訂單</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> API</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 訂單狀態管理</span></span></code></pre></div><p><strong>解釋程式碼：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 逐行解釋</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">逐行解釋</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/algorithms/quicksort.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 高層級解釋</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/services/payment.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 解釋這個模組的架構設計</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解釋複雜邏輯</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">解釋</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/utils/dataTransformer.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 中的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reduce</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 在做什麼</span></span></code></pre></div><p><strong>重構程式碼：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 架構重構</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">將</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 中的類別元件轉換為函式元件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 效能重構</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">最佳化</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/App.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的渲染效能，減少不必要的重新渲染</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 清理重構</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/utils/helpers.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 重構這個檔案：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 刪除未使用的函式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 將重複的邏輯提取為共用工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 加入型別定義</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 改善函式命名</span></span></code></pre></div><p><strong>除錯程式碼：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 錯誤分析</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 失敗了，分析根本原因並修復</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 效能分析</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/components/DataTable.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 這個元件渲染很慢，找出瓶頸</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 日誌分析</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs/error.log</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">分析這些錯誤日誌並識別根本原因</span></span></code></pre></div><h3 id="測試操作" tabindex="-1">測試操作 <a class="header-anchor" href="#測試操作" aria-label="Permalink to “測試操作”">​</a></h3><p>測試是品質保證的關鍵。Claude Code 可以幫助生成測試、執行測試和分析結果。</p><p><strong>生成測試：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 單元測試</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">為</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/utils/math.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成單元測試，包括邊界情況</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 元件測試</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">為</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/UserForm.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> React</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Testing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Library</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 測試</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 整合測試</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">為使用者註冊流程建立整合測試，從表單提交到資料庫寫入</span></span></code></pre></div><p><strong>執行和除錯測試：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 執行測試</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 除錯失敗的測試</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">分析失敗原因並修復</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@tests/auth.test.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 覆蓋率檢查</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test:coverage</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">哪些程式碼路徑沒有被覆蓋？</span></span></code></pre></div><p><strong>測試策略建議：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">我加入了使用者認證功能。請：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 為</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auth.service.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成單元測試</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 為</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LoginForm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成元件測試</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 執行所有測試並確保通過</span></span></code></pre></div><h3 id="命令鏈與工作流程組合" tabindex="-1">命令鏈與工作流程組合 <a class="header-anchor" href="#命令鏈與工作流程組合" aria-label="Permalink to “命令鏈與工作流程組合”">​</a></h3><p>使用 Claude Code 最高效的方式是將命令串聯成完整的工作流程。</p><p><strong>場景一：Bug 修復工作流程</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 檢查問題</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">測試失敗了，分析原因</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 定位問題</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/utils/validation.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 問題在這個檔案中嗎？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 修復問題</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">修復</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validation.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 中的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> isEmail，使其正確處理包含</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的信箱地址</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 驗證修復</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 提交修復</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">根據目前的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成一條</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 類型的提交訊息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fix: ...&quot;</span></span></code></pre></div><p><strong>場景二：程式碼審查工作流程</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 檢查變更</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --stat</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">哪些檔案變更了？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 詳細審查</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/components/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 審查這些元件的變更</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 建議改進</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">根據這次審查，應該做哪些改進？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 實施改進</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">最佳化</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> UserList</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 元件的效能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 最終審查</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">審查目前的變更並指出潛在風險和改進空間</span></span></code></pre></div><p><strong>場景三：新功能工作流程</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 先規劃</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/plan</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">我想加入購物車功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 建立分支</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/shopping-cart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 實作功能</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">按計畫逐步實作</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 加入測試</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">為購物車模組生成測試</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 執行測試</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 6. 程式碼審查</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">請對目前的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 進行程式碼審查</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 7. 提交</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">為這次功能開發生成提交訊息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;feat: ...&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div><hr><h2 id="常見問題" tabindex="-1">常見問題 <a class="header-anchor" href="#常見問題" aria-label="Permalink to “常見問題”">​</a></h2><p>使用 Claude Code 時，你可能會遇到各種問題。本節總結了常見的問題和解決方案。</p><h3 id="token-使用量太快" tabindex="-1">Token 使用量太快？ <a class="header-anchor" href="#token-使用量太快" aria-label="Permalink to “Token 使用量太快？”">​</a></h3><p>Token 消耗過快是最常見的問題之一。以下是一套完整的最佳化策略。</p><p><strong>診斷：</strong></p><p>首先執行 <code>/context</code> 檢查目前的 Token 使用量：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/context</span></span></code></pre></div><p>關注以下指標：</p><ul><li><strong>Token 使用率</strong>：如果超過 70%，考慮壓縮上下文</li><li><strong>引用檔案數量</strong>：更多檔案意味著更高的 Token 消耗</li><li><strong>大檔案</strong>：檢查哪些檔案消耗了最多的 Token</li></ul><p><strong>最佳化策略：</strong></p><p><strong>1. 改善 .claudeignore</strong></p><p>確保 <code>.claudeignore</code> 包含不需要的檔案：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 必須忽略</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 專案特定</span></span>
<span class="line"><span># React</span></span>
<span class="line"><span>.next/</span></span>
<span class="line"><span>out/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Vue</span></span>
<span class="line"><span>.nuxt/</span></span>
<span class="line"><span>.output/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通用</span></span>
<span class="line"><span>.vscode/</span></span>
<span class="line"><span>.idea/</span></span>
<span class="line"><span>coverage/</span></span>
<span class="line"><span>*.min.js</span></span>
<span class="line"><span>*.bundle.js</span></span></code></pre></div><p><strong>2. 定期壓縮上下文</strong></p><p>長對話會累積大量 Token。建議每 5-6 輪執行一次 <code>/compact</code>：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 長對話後</span></span>
<span class="line"><span>/compact</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 繼續</span></span>
<span class="line"><span>現在來實作訂單模組...</span></span></code></pre></div><p><strong>3. 精確引用檔案</strong></p><p>除非必要，避免引用整個目錄：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不建議</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 解釋這段程式碼</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 建議</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/utils/auth.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @src/components/Login.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 解釋登入流程</span></span></code></pre></div><p><strong>4. 避免讀取超大檔案</strong></p><p>如果 <code>/context</code> 顯示某個檔案消耗大量 Token，考慮：</p><ul><li>你真的需要它嗎？</li><li>能否只引用其中一部分？</li><li>這個檔案能否拆分為更小的模組？</li></ul><h3 id="claude-不理解專案" tabindex="-1">Claude 不理解專案？ <a class="header-anchor" href="#claude-不理解專案" aria-label="Permalink to “Claude 不理解專案？”">​</a></h3><p>如果 Claude 回答不準確或反覆詢問基本的專案資訊，說明它缺乏專案上下文。</p><p><strong>解決方案：</strong></p><p><strong>1. 生成 CLAUDE.md</strong></p><p>執行 <code>/init</code> 生成專案設定：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/init</span></span></code></pre></div><p>生成後，驗證：</p><ul><li>專案摘要是否準確？</li><li>技術棧是否完整？</li><li>常用命令是否正確？</li><li>程式碼規範是否清晰？</li></ul><p><strong>2. 手動編輯 CLAUDE.md</strong></p><p>如果自動生成的設定不夠詳細，可以加入：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 專案特定資訊</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 架構決策</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 為什麼選擇 X 而不是 Y？</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 核心設計模式是什麼？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 常見陷阱</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用 useEffect 時要注意...</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 資料庫查詢必須...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 第三方整合</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 透過 Stripe 處理支付</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 透過 SendGrid 發送郵件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 透過 AWS S3 儲存檔案</span></span></code></pre></div><p><strong>3. 使用規則目錄</strong></p><p>對於大型專案，將規範整理到規則目錄中：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.claude/rules/</span></span>
<span class="line"><span>├── 00-architecture.md    # 架構概述</span></span>
<span class="line"><span>├── 01-coding-style.md    # 程式碼風格</span></span>
<span class="line"><span>├── 10-frontend.md        # 前端規則</span></span>
<span class="line"><span>├── 11-backend.md         # 後端規則</span></span>
<span class="line"><span>└── 20-testing.md         # 測試規則</span></span></code></pre></div><p><strong>4. 需要時在提示中加入上下文</strong></p><p>對於特定任務，附加相關背景資訊：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>我們使用自訂的 useAuth Hook 進行認證。</span></span>
<span class="line"><span>它回傳 { user, login, logout, isLoading }。</span></span>
<span class="line"><span>請基於這個 Hook 建立一個使用者選單元件。</span></span></code></pre></div><h3 id="如何回滾操作" tabindex="-1">如何回滾操作？ <a class="header-anchor" href="#如何回滾操作" aria-label="Permalink to “如何回滾操作？”">​</a></h3><p>Claude Code 提供多種回滾機制以應對不同場景。</p><p><strong>場景一：回溯對話狀態</strong></p><p>如果你只是打錯字或對回應不滿意：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>連按兩次 Esc  -&gt; 回溯上一輪對話</span></span>
<span class="line"><span>連按三次 Esc  -&gt; 清除所有對話歷史</span></span></code></pre></div><p><strong>注意</strong>：這只回溯對話狀態，不會還原檔案編輯。</p><p><strong>場景二：撤銷檔案編輯</strong></p><p>如果 Claude 已經修改了檔案，需要手動撤銷：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 檢查變更</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 還原單個檔案</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/utils/helpers.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 還原所有工作區變更</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果已經提交</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 軟回滾（保留變更）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --soft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 硬回滾（丟棄變更）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~1</span></span></code></pre></div><p><strong>場景三：預防性使用 Git 工作流程</strong></p><p>最佳實踐：在 Claude 工作階段之前儲存當前工作：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 開始前儲存當前狀態</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;WIP: Claude Code 工作階段前&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或使用 stash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;before claude&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 Claude Code 開發...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果結果不滿意，完全回滾</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pop</span></span></code></pre></div><h3 id="權限提示太多" tabindex="-1">權限提示太多？ <a class="header-anchor" href="#權限提示太多" aria-label="Permalink to “權限提示太多？”">​</a></h3><p>頻繁的權限確認會影響效率。適當的權限設定可以讓工作流程更順暢。</p><p><strong>權限模型：</strong></p><p>Claude Code 的權限分為三個層級：</p><ul><li><strong>allow</strong>：自動允許</li><li><strong>ask</strong>：執行前詢問</li><li><strong>deny</strong>：完全拒絕</li></ul><p><strong>最佳化設定：</strong></p><p>編輯 <code>.claude/settings.json</code>：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;permissions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;allow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Git 讀取操作</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git status)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git log:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git diff:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git branch)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 測試和檢查</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm test:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run lint:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run typecheck)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 開發伺服器</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run dev:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 原始碼編輯</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(src/**/*.{ts,tsx})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(tests/**/*.test.ts)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Write(src/**/*.ts)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ask&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Git 寫入操作</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git commit:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git push:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git pull:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 套件管理</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm install:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm uninstall:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 建構和部署</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run build)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run deploy:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 設定檔編輯</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(package.json)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(tsconfig.json)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 敏感檔案讀取</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(.env)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(config/secrets.*)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deny&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 危險命令</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(rm -rf:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(sudo:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(curl * | sh)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(wget * | sh)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 系統檔案</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(/etc/*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Write(/usr/*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Git 內部</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(.git/*)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>漸進式權限策略：</strong></p><ul><li><strong>學習階段</strong>：保持預設設定，了解 Claude 嘗試執行什麼</li><li><strong>熟悉階段</strong>：將常見的安全操作（如 git status、npm test）加入 allow</li><li><strong>高效階段</strong>：根據專案特點建立細粒度規則</li></ul><h3 id="如何在中國大陸使用" tabindex="-1">如何在中國大陸使用？ <a class="header-anchor" href="#如何在中國大陸使用" aria-label="Permalink to “如何在中國大陸使用？”">​</a></h3><p>由於網路限制，中國大陸使用者可能無法直接存取 Anthropic 官方服務。以下提供幾種方案。</p><p><strong>方案一：使用 API 代理服務</strong></p><p>許多雲端供應商提供與 Anthropic 相容的 API 代理服務：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 設定環境變數</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ANTHROPIC_BASE_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://your-api-proxy.com/v1&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ANTHROPIC_API_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your-api-key&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 啟動 Claude Code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span></span></code></pre></div><p><strong>方案二：使用第三方 Claude Code 相容工具</strong></p><p>一些國內供應商提供相容工具：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安裝相容版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @some-provider/claude-code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 設定 API 金鑰</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> api.key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your-api-key</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> api.baseUrl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://api.some-provider.com</span></span></code></pre></div><p><strong>方案三：使用其他 AI 程式設計工具</strong></p><p>如果 Claude Code 無法使用，可以考慮替代方案：</p><table tabindex="0"><thead><tr><th>工具</th><th>特點</th><th>使用場景</th></tr></thead><tbody><tr><td>Cursor</td><td>基於 VS Code，功能齊全</td><td>完整的 IDE 體驗</td></tr><tr><td>GitHub Copilot</td><td>強大的自動補全</td><td>主要用於程式碼補全</td></tr><tr><td>通義靈碼</td><td>國內產品，國內穩定</td><td>國內開發環境</td></tr><tr><td>Codeium</td><td>免費額度豐厚</td><td>預算有限</td></tr></tbody></table><p><strong>方案四：讓 AI Agent 幫忙設定</strong></p><p>如果你不確定如何設定，可以詢問 AI Agent：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>我想使用 Claude Code，但在中國大陸無法直接存取。</span></span>
<span class="line"><span>我從供應商 XXX 購買了 API。</span></span>
<span class="line"><span>API 端點是 https://api.xxx.com，</span></span>
<span class="line"><span>金鑰是 sk-xxx。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>請設定環境變數，讓 Claude Code 能夠正常運作。</span></span></code></pre></div><p><strong>常見問題：</strong></p><ul><li><p><strong>問：設定後仍然無法連接？</strong></p><ul><li>答：檢查 API 端點是否正確，包括 <code>/v1</code> 路徑</li><li>答：檢查 API 金鑰的有效性和餘額</li><li>答：檢查本地網路是否需要代理</li></ul></li><li><p><strong>問：回應速度慢？</strong></p><ul><li>答：選擇地理區域更近的供應商</li><li>答：使用針對程式設計場景優化的方案而非通用 API 方案</li><li>答：使用 <code>/compact</code> 減少 Token 使用量</li></ul></li><li><p><strong>問：部分功能不可用？</strong></p><ul><li>答：部分第三方供應商可能不完全支援所有 Claude Code 功能</li><li>答：查看供應商文件了解支援的功能範圍</li></ul></li></ul><hr><h2 id="參考資源" tabindex="-1">參考資源 <a class="header-anchor" href="#參考資源" aria-label="Permalink to “參考資源”">​</a></h2><ul><li><a href="https://code.claude.com/docs" target="_blank" rel="noreferrer">Claude Code 官方文件</a></li><li><a href="https://github.com/anthropics/claude-code" target="_blank" rel="noreferrer">Claude Code GitHub</a></li><li><a href="https://github.com/affaan-m/everything-claude-code" target="_blank" rel="noreferrer">Everything Claude Code</a></li></ul>`,398)])])}const o=a(l,[["render",t]]);export{c as __pageData,o as default};
