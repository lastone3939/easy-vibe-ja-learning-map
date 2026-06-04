import{_ as c,I as l,o as h,c as o,b6 as p,j as a,J as i,w as e,a as n}from"./chunks/framework.BUXTSoD9.js";const S=JSON.parse('{"title":"AI 營銷文案 SaaS 開發實戰","description":"","frontmatter":{},"headers":[],"relativePath":"zh-tw/stage-2/assignments/copywriting-platform-supabase/index.md","filePath":"zh-tw/stage-2/assignments/copywriting-platform-supabase/index.md"}'),b={name:"zh-tw/stage-2/assignments/copywriting-platform-supabase/index.md"},u={style:{margin:"32px 0"}};function k(g,s,f,m,_,x){const t=l("StepBar"),r=l("ClientOnly"),d=l("el-card");return h(),o("div",null,[s[2]||(s[2]=p('<h1 id="ai-營銷文案-saas-開發實戰" tabindex="-1">AI 營銷文案 SaaS 開發實戰 <a class="header-anchor" href="#ai-營銷文案-saas-開發實戰" aria-label="Permalink to “AI 營銷文案 SaaS 開發實戰”">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to “概述”">​</a></h2><p>本實戰項目要求你圍繞一份真實的 PRD，從零完成一個面向獨立開發者和內容團隊的 AI 營銷文案 SaaS 產品。你將使用 Supabase 作為後端服務、Stripe 作為支付系統，完成從需求分析到部署上線的全過程。</p><p>這是 Stage 2 的綜合實戰環節。在前面幾章中，你已經分別學習了前端頁面搭建、後端接口開發、資料庫操作、支付集成等單項技能——這個項目要求你把它們全部串起來，交付一個可運行的產品原型。</p><h2 id="前置知識" tabindex="-1">前置知識 <a class="header-anchor" href="#前置知識" aria-label="Permalink to “前置知識”">​</a></h2><p>在開始本項目之前，你應該已經掌握以下內容：</p><ul><li>前端頁面設計與組件庫使用（<a href="./../../frontend/ui-design/">UI 設計</a>、<a href="./../../frontend/modern-component-library/">現代組件庫</a>）</li><li>後端接口設計與開發（<a href="./../../backend/ai-interface-code/">接口程式碼編寫</a>）</li><li>資料庫基礎與 Supabase（<a href="./../../backend/database-supabase/">從資料庫到 Supabase</a>）</li><li>支付集成（<a href="./../../backend/stripe-payment/">Stripe 收費系統</a>）</li><li>Git 工作流與部署（<a href="./../../backend/git-workflow/">Git 和 GitHub</a>、<a href="./../../backend/zeabur-deployment/">部署 Web 應用</a>）</li></ul><h2 id="學習目標" tabindex="-1">學習目標 <a class="header-anchor" href="#學習目標" aria-label="Permalink to “學習目標”">​</a></h2><p>完成本實戰後，你將能夠：</p><ol><li>閱讀並理解一份真實的 PRD，從中提取開發任務清單</li><li>使用 AI 輔助分步生成前端頁面和後端接口</li><li>使用 Supabase 實現用戶鑑權、資料庫操作</li><li>集成 Stripe 實現付費訂閱功能</li><li>搭建管理後臺並完成端到端聯調</li></ol><h2 id="項目簡介" tabindex="-1">項目簡介 <a class="header-anchor" href="#項目簡介" aria-label="Permalink to “項目簡介”">​</a></h2><p>你要構建的產品是一個 AI 營銷文案 SaaS，包含三個子系統：</p><table tabindex="0"><thead><tr><th>子系統</th><th>職責</th></tr></thead><tbody><tr><td><strong>官網前臺</strong></td><td>產品介紹、定價、FAQ、註冊轉化</td></tr><tr><td><strong>用戶工作臺</strong></td><td>輸入產品資訊、生成文案、查看歷史、升級套餐</td></tr><tr><td><strong>後臺管理臺</strong></td><td>用戶管理、生成記錄、支付資料、運營概覽</td></tr></tbody></table><p>後端使用 Supabase 提供資料庫和鑑權能力，使用 Stripe 處理支付，使用 AI 模型生成營銷文案。</p><div class="tip custom-block"><p class="custom-block-title">PRD 入口</p><p>本項目的需求文檔在 GitHub： <a href="https://github.com/datawhalechina/easy-vibe/blob/main/docs/zh-tw/stage-2/assignments/copywriting-platform-supabase/PRD.md" target="_blank" rel="noreferrer">查看 PRD</a></p></div>',15)),a("div",u,[i(r,null,{default:e(()=>[i(t,{active:0,items:[{title:"需求分析",description:"閱讀 PRD，明確頁面、功能、鑑權、支付範圍"},{title:"搭建骨架",description:"用 AI 生成三套前端骨架（www / app / admin）"},{title:"後端集成",description:"Supabase 鑑權、生成接口、Stripe 支付"},{title:"聯調上線",description:"端到端跑通，部署並準備演示"}]})]),_:1})]),s[3]||(s[3]=p(`<h2 id="第一部分-需求分析" tabindex="-1">第一部分：需求分析 <a class="header-anchor" href="#第一部分-需求分析" aria-label="Permalink to “第一部分：需求分析”">​</a></h2><h3 id="_1-1-閱讀-prd" tabindex="-1">1.1 閱讀 PRD <a class="header-anchor" href="#_1-1-閱讀-prd" aria-label="Permalink to “1.1 閱讀 PRD”">​</a></h3><p>打開 PRD 文檔，重點回答以下問題：</p><ul><li>系統有幾個入口？各自覆蓋哪些頁面？</li><li>每個頁面的核心功能是什麼？</li><li>後端包含哪些模塊和資料表？</li><li>套餐定價、支付流程、免費額度如何設計？</li><li>MVP 範圍是什麼？第一版哪些做，哪些不做？</li></ul><div class="warning custom-block"><p class="custom-block-title custom-block-title-default">WARNING</p><p>如果以上問題沒有明確答案，不要開始寫程式碼。需求理解不清楚是導致返工的最常見原因。</p></div><h3 id="_1-2-確認系統架構" tabindex="-1">1.2 確認系統架構 <a class="header-anchor" href="#_1-2-確認系統架構" aria-label="Permalink to “1.2 確認系統架構”">​</a></h3><p>根據 PRD 梳理出系統的整體架構：</p><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd[&quot;PRD&quot;] --&gt; web[&quot;官網前臺&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd --&gt; app[&quot;用戶工作臺&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd --&gt; admin[&quot;後臺管理臺&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app --&gt; auth[&quot;鑑權&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app --&gt; gen[&quot;文案生成任務&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  gen --&gt; db[&quot;資料庫&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  billing[&quot;支付與套餐&quot;] --&gt; db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  admin --&gt; analytics[&quot;用戶 / 生成 / 支付看板&quot;]</span></span></code></pre></div><h2 id="第二部分-搭建項目骨架" tabindex="-1">第二部分：搭建項目骨架 <a class="header-anchor" href="#第二部分-搭建項目骨架" aria-label="Permalink to “第二部分：搭建項目骨架”">​</a></h2><h3 id="_2-1-生成前端頁面" tabindex="-1">2.1 生成前端頁面 <a class="header-anchor" href="#_2-1-生成前端頁面" aria-label="Permalink to “2.1 生成前端頁面”">​</a></h3><p>使用 AI 先生成所有頁面的基本結構和假資料。</p><p>提示詞參考：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>請基於當前 PRD，幫我生成一個 AI 營銷文案 SaaS 的前端骨架。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 分成三個入口：www、app、admin</span></span>
<span class="line"><span>2. 官網包括：首頁、定價、FAQ</span></span>
<span class="line"><span>3. app 包括：登錄、註冊、生成工作臺、歷史記錄、套餐頁</span></span>
<span class="line"><span>4. admin 包括：後臺首頁、用戶管理、生成記錄、支付訂單</span></span>
<span class="line"><span>5. 先只生成頁面結構和假資料，不接真實接口</span></span>
<span class="line"><span>6. 風格要像現代 SaaS，不像課堂 demo</span></span></code></pre></div><h3 id="_2-2-完善核心頁面" tabindex="-1">2.2 完善核心頁面 <a class="header-anchor" href="#_2-2-完善核心頁面" aria-label="Permalink to “2.2 完善核心頁面”">​</a></h3><p>骨架搭好後，重點完善文案生成工作臺（Dashboard）頁面：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>請繼續完善 /dashboard 頁面。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>這是一個 AI 營銷文案工作臺。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>左側表單字段：</span></span>
<span class="line"><span>- 產品名</span></span>
<span class="line"><span>- 一句話介紹</span></span>
<span class="line"><span>- 目標用戶</span></span>
<span class="line"><span>- 3 個賣點</span></span>
<span class="line"><span>- 投放渠道（官網、朋友圈、小紅書、抖音、郵件）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>右側結果區域預留：</span></span>
<span class="line"><span>- 主標題</span></span>
<span class="line"><span>- 副標題</span></span>
<span class="line"><span>- CTA</span></span>
<span class="line"><span>- 3 版短文案</span></span>
<span class="line"><span>- 長文案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>先用 mock 資料跑通交互。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 點擊&quot;生成文案&quot;後有 loading 狀態</span></span>
<span class="line"><span>- 結果區域設計空狀態</span></span>
<span class="line"><span>- 響應式佈局，寬屏窄屏都能正常顯示</span></span></code></pre></div><h3 id="_2-3-驗證頁面結構" tabindex="-1">2.3 驗證頁面結構 <a class="header-anchor" href="#_2-3-驗證頁面結構" aria-label="Permalink to “2.3 驗證頁面結構”">​</a></h3><p>逐項檢查：</p><ul><li>[ ] 三個入口的路由是否獨立</li><li>[ ] 頁面數量是否與 PRD 一致</li><li>[ ] Dashboard 的表單和結果區域佈局合理</li><li>[ ] 假資料展示了基本的 UI 狀態</li></ul><h3 id="遇到阻礙" tabindex="-1">遇到阻礙？ <a class="header-anchor" href="#遇到阻礙" aria-label="Permalink to “遇到阻礙？”">​</a></h3><p>如果你在前端搭建階段卡住，可以回顧這些章節：</p><ul><li><a href="./../../frontend/ui-design/">UI 設計</a></li><li><a href="./../../frontend/multi-product-ui/">參考 UI 設計規範設計頁面和按鈕</a></li><li><a href="./../../frontend/llm-skills-beautiful/">用 LLM 和 Skills 讓界面變好看</a></li><li><a href="./../../frontend/design-to-code/">從設計原型到項目程式碼</a></li><li><a href="./../../frontend/modern-component-library/">使用現代組件庫更新你的界面</a></li></ul><h2 id="第三部分-後端集成" tabindex="-1">第三部分：後端集成 <a class="header-anchor" href="#第三部分-後端集成" aria-label="Permalink to “第三部分：後端集成”">​</a></h2><h3 id="_3-1-接入-supabase-登錄" tabindex="-1">3.1 接入 Supabase 登錄 <a class="header-anchor" href="#_3-1-接入-supabase-登錄" aria-label="Permalink to “3.1 接入 Supabase 登錄”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>請把我當成 0 基礎，一步一步帶我完成 Supabase 登錄接入。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要你幫我完成：</span></span>
<span class="line"><span>1. 項目接入 Supabase</span></span>
<span class="line"><span>2. 實現註冊、登錄、退出功能</span></span>
<span class="line"><span>3. 登錄成功後跳轉到 /dashboard</span></span>
<span class="line"><span>4. 未登錄用戶訪問 /dashboard、/billing、/admin 時自動跳轉 /login</span></span>
<span class="line"><span>5. 創建 profiles 表</span></span>
<span class="line"><span>6. 用戶註冊成功後自動在 profiles 表創建記錄</span></span>
<span class="line"><span>7. profiles 表包含 email、role、plan 字段</span></span>
<span class="line"><span></span></span>
<span class="line"><span>實現要求：</span></span>
<span class="line"><span>- 每步都說明在修改哪些文件</span></span>
<span class="line"><span>- 密鑰不要硬編碼</span></span>
<span class="line"><span>- 需要在 Supabase 後臺手動操作的地方請明確標註</span></span>
<span class="line"><span>- 完成後說明如何驗證註冊和登錄</span></span></code></pre></div><h3 id="_3-2-接入生成接口和資料庫" tabindex="-1">3.2 接入生成接口和資料庫 <a class="header-anchor" href="#_3-2-接入生成接口和資料庫" aria-label="Permalink to “3.2 接入生成接口和資料庫”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>請把我當成 0 基礎，幫我完成網站的核心功能：生成營銷文案並保存。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>目標效果：</span></span>
<span class="line"><span>1. 用戶在 /dashboard 填寫表單，點擊&quot;生成文案&quot;</span></span>
<span class="line"><span>2. 後端接收：產品名、介紹、目標用戶、賣點、投放渠道</span></span>
<span class="line"><span>3. 後端調用模型生成結果</span></span>
<span class="line"><span>4. 頁面展示生成結果</span></span>
<span class="line"><span>5. 輸入和輸出都保存到資料庫</span></span>
<span class="line"><span>6. 用戶下次進入可查看歷史記錄</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要你完成：</span></span>
<span class="line"><span>- 創建生成接口 /api/generate</span></span>
<span class="line"><span>- 創建 generations 表</span></span>
<span class="line"><span>- 設計輸入和輸出字段</span></span>
<span class="line"><span>- Dashboard 頁面讀取當前用戶的歷史記錄</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用戶體驗：</span></span>
<span class="line"><span>- 按鈕 loading 狀態</span></span>
<span class="line"><span>- 生成失敗時的錯誤提示</span></span>
<span class="line"><span>- 無歷史記錄時的空狀態</span></span>
<span class="line"><span></span></span>
<span class="line"><span>完成後請說明：</span></span>
<span class="line"><span>- 前端頁面文件位置</span></span>
<span class="line"><span>- 後端接口文件位置</span></span>
<span class="line"><span>- 資料寫入資料庫的邏輯位置</span></span>
<span class="line"><span>- 如何測試完整生成鏈路</span></span></code></pre></div><h3 id="_3-3-接入-stripe-付費" tabindex="-1">3.3 接入 Stripe 付費 <a class="header-anchor" href="#_3-3-接入-stripe-付費" aria-label="Permalink to “3.3 接入 Stripe 付費”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>請把我當成 0 基礎，幫我給 LaunchKit 加上最簡可用的 Stripe 付費。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不需要複雜系統，先跑通最基本的付費鏈路。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要你完成：</span></span>
<span class="line"><span>1. /billing 頁面展示 free 和 pro 兩個套餐</span></span>
<span class="line"><span>2. 用戶點擊升級後跳轉 Stripe Checkout</span></span>
<span class="line"><span>3. 支付成功後返回網站</span></span>
<span class="line"><span>4. 支付結果保存到 subscriptions 表</span></span>
<span class="line"><span>5. 同步更新 profile.plan 字段</span></span>
<span class="line"><span>6. free 用戶每日限 3 次生成，pro 用戶不限</span></span>
<span class="line"><span></span></span>
<span class="line"><span>實現原則：</span></span>
<span class="line"><span>- 先跑通主流程，暫不考慮複雜邊界</span></span>
<span class="line"><span>- 需要在 Stripe 後臺配置的地方請寫清楚</span></span>
<span class="line"><span>- 完成後說明如何測試完整支付流程</span></span></code></pre></div><h3 id="_3-4-搭建管理後臺" tabindex="-1">3.4 搭建管理後臺 <a class="header-anchor" href="#_3-4-搭建管理後臺" aria-label="Permalink to “3.4 搭建管理後臺”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>請把我當成 0 基礎，幫我做一個簡潔可用的管理後臺。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>僅限管理員訪問。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要你完成：</span></span>
<span class="line"><span>1. 僅 role = admin 的用戶可訪問 /admin</span></span>
<span class="line"><span>2. 後臺包含 3 個 Tab：用戶列表、生成記錄、訂閱狀態</span></span>
<span class="line"><span>3. 用戶列表顯示：email、plan、創建時間</span></span>
<span class="line"><span>4. 生成記錄顯示：用戶、產品名、渠道、創建時間</span></span>
<span class="line"><span>5. 訂閱狀態顯示：用戶、套餐、支付狀態</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 界面簡潔清晰</span></span>
<span class="line"><span>- 使用現有組件庫的表格、Tab、Badge</span></span>
<span class="line"><span>- 完成後說明如何將賬號設為 admin</span></span></code></pre></div><h3 id="遇到阻礙-1" tabindex="-1">遇到阻礙？ <a class="header-anchor" href="#遇到阻礙-1" aria-label="Permalink to “遇到阻礙？”">​</a></h3><p>如果你在後端開發階段卡住，可以回顧這些章節：</p><ul><li><a href="./../../backend/database-supabase/">從資料庫到 Supabase</a></li><li><a href="./../../backend/ai-interface-code/">大模型輔助編寫接口程式碼與接口文檔</a></li><li><a href="./../../backend/stripe-payment/">如何集成 Stripe 等收費系統</a></li></ul><h2 id="第四部分-聯調與上線" tabindex="-1">第四部分：聯調與上線 <a class="header-anchor" href="#第四部分-聯調與上線" aria-label="Permalink to “第四部分：聯調與上線”">​</a></h2><h3 id="_4-1-端到端測試" tabindex="-1">4.1 端到端測試 <a class="header-anchor" href="#_4-1-端到端測試" aria-label="Permalink to “4.1 端到端測試”">​</a></h3><p>至少驗證以下場景：</p><ul><li>註冊 → 登錄 → 生成文案 → 查看歷史 → 升級套餐</li><li>管理員登錄 → 查看用戶資料 → 查看生成記錄 → 查看支付狀態</li></ul><p>部署前檢查：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>請把我當成 0 基礎，幫我檢查項目是否具備部署條件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>檢查重點：</span></span>
<span class="line"><span>- 環境變量是否完整</span></span>
<span class="line"><span>- 登錄回調地址是否正確</span></span>
<span class="line"><span>- Stripe 支付回調地址是否正確</span></span>
<span class="line"><span>- 頁面是否缺少 loading、空狀態、錯誤提示</span></span>
<span class="line"><span>- README 是否包含啟動說明和部署說明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要你：</span></span>
<span class="line"><span>1. 按優先級列出待修復事項</span></span>
<span class="line"><span>2. 標註哪些必須先修</span></span>
<span class="line"><span>3. 說明修復後的部署步驟</span></span></code></pre></div><h3 id="_4-2-部署" tabindex="-1">4.2 部署 <a class="header-anchor" href="#_4-2-部署" aria-label="Permalink to “4.2 部署”">​</a></h3><p>將項目部署到公網環境。部署教程參考：<a href="./../../backend/git-workflow/">Git 和 GitHub 工作流</a>、<a href="./../../backend/zeabur-deployment/">如何部署 Web 應用</a>。</p><h2 id="交付物" tabindex="-1">交付物 <a class="header-anchor" href="#交付物" aria-label="Permalink to “交付物”">​</a></h2><p>完成本項目後，你需要提交以下內容：</p><ul><li>[ ] 可訪問的線上演示鏈接</li><li>[ ] 源碼倉庫鏈接（含 README）</li><li>[ ] PRD 文檔</li><li>[ ] 核心頁面截圖（首頁、Dashboard、Billing、Admin）</li><li>[ ] 60 秒演示影片（覆蓋註冊 → 生成 → 支付 → 後臺）</li></ul><p>README 至少包含：項目簡介、核心頁面說明、技術棧、本地啟動步驟、環境變量清單。</p><h2 id="評分標準" tabindex="-1">評分標準 <a class="header-anchor" href="#評分標準" aria-label="Permalink to “評分標準”">​</a></h2><table tabindex="0"><thead><tr><th>維度</th><th>基本要求</th><th>進階要求</th></tr></thead><tbody><tr><td>產品完整度</td><td>首頁、登錄、Dashboard、Billing、Admin 都能訪問</td><td>首頁文案和視覺風格像真實 SaaS</td></tr><tr><td>業務閉環</td><td>註冊 → 登錄 → 生成 → 查看歷史可以跑通</td><td>免費/Pro 權限差異清晰可見</td></tr><tr><td>資料正確性</td><td>生成結果和支付狀態都寫入資料庫</td><td>有明確的錯誤提示、空狀態和 loading</td></tr><tr><td>權限與安全</td><td>未登錄不能訪問受保護頁面，普通用戶不能進 Admin</td><td>有基本的輸入校驗和服務端鑑權</td></tr><tr><td>工程交付</td><td>項目可本地啟動，也可部署到公網</td><td>README 清楚，演示影片結構完整</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>如果你覺得任務太大，記住一個原則：<strong>先保證&quot;能跑通&quot;，再去追求&quot;做漂亮&quot;。</strong></p></div><h2 id="提交前檢查" tabindex="-1">提交前檢查 <a class="header-anchor" href="#提交前檢查" aria-label="Permalink to “提交前檢查”">​</a></h2>`,50)),i(d,{shadow:"hover",style:{margin:"20px 0","border-radius":"12px"}},{header:e(()=>[...s[0]||(s[0]=[a("div",{style:{"font-weight":"bold","font-size":"16px"}},"提交前最後看一眼",-1)])]),default:e(()=>[s[1]||(s[1]=a("ul",{style:{"list-style-type":"none","padding-left":"0"}},[a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 首頁、登錄頁、Dashboard、Billing、Admin 均已完成")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 用戶可以註冊、登錄、退出")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 生成結果真實寫入資料庫")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 支付主流程已跑通")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 管理員可查看用戶、生成記錄和支付狀態")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 項目已部署到公網")])])],-1))]),_:1}),s[4]||(s[4]=p('<h2 id="參考資料" tabindex="-1">參考資料 <a class="header-anchor" href="#參考資料" aria-label="Permalink to “參考資料”">​</a></h2><ul><li><a href="./../../frontend/ui-design/">UI 設計</a></li><li><a href="./../../frontend/multi-product-ui/">參考 UI 設計規範設計頁面和按鈕</a></li><li><a href="./../../frontend/llm-skills-beautiful/">用 LLM 和 Skills 讓界面變好看</a></li><li><a href="./../../frontend/design-to-code/">從設計原型到項目程式碼</a></li><li><a href="./../../frontend/modern-component-library/">使用現代組件庫更新你的界面</a></li><li><a href="./../../backend/database-supabase/">從資料庫到 Supabase</a></li><li><a href="./../../backend/ai-interface-code/">大模型輔助編寫接口程式碼與接口文檔</a></li><li><a href="./../../backend/git-workflow/">Git 和 GitHub 工作流</a></li><li><a href="./../../backend/zeabur-deployment/">如何部署 Web 應用</a></li><li><a href="./../../backend/stripe-payment/">如何集成 Stripe 等收費系統</a></li></ul>',2))])}const P=c(b,[["render",k]]);export{S as __pageData,P as default};
