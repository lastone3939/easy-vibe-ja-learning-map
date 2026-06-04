import{_ as c,I as l,o as h,c as o,b6 as p,j as a,J as i,w as e,a as n}from"./chunks/framework.BUXTSoD9.js";const S=JSON.parse('{"title":"AI 마케팅 카피 SaaS 개발 실전","description":"","frontmatter":{},"headers":[],"relativePath":"ko-kr/stage-2/assignments/copywriting-platform-supabase/index.md","filePath":"ko-kr/stage-2/assignments/copywriting-platform-supabase/index.md"}'),b={name:"ko-kr/stage-2/assignments/copywriting-platform-supabase/index.md"},k={style:{margin:"32px 0"}};function u(g,s,f,m,_,x){const t=l("StepBar"),r=l("ClientOnly"),d=l("el-card");return h(),o("div",null,[s[2]||(s[2]=p('<h1 id="ai-마케팅-카피-saas-개발-실전" tabindex="-1">AI 마케팅 카피 SaaS 개발 실전 <a class="header-anchor" href="#ai-마케팅-카피-saas-개발-실전" aria-label="Permalink to “AI 마케팅 카피 SaaS 개발 실전”">​</a></h1><h2 id="개요" tabindex="-1">개요 <a class="header-anchor" href="#개요" aria-label="Permalink to “개요”">​</a></h2><p>본 실전 프로젝트는 실제 PRD를 바탕으로, 인디 개발자와 콘텐츠 팀을 위한 AI 마케팅 카피 SaaS 제품을 처음부터 완성하는 것을 요구합니다. Supabase를 백엔드 서비스로, Stripe를 결제 시스템으로 사용하여, 요구사항 분석부터 배포까지의 전 과정을 완료합니다.</p><p>이것은 Stage 2의 종합 실전环节입니다. 앞선 여러 장에서 프론트엔드 페이지 구축, 백엔드 인터페이스 개발, 데이터베이스 조작, 결제 연동 등 개별 기술을 각각 배웠습니다 — 이 프로젝트는 이를 모두 연결하여 실행 가능한 제품 프로토타입을 납품하는 것을 요구합니다.</p><h2 id="사전-지식" tabindex="-1">사전 지식 <a class="header-anchor" href="#사전-지식" aria-label="Permalink to “사전 지식”">​</a></h2><p>본 프로젝트를 시작하기 전에 다음 내용을 이미 숙지해야 합니다:</p><ul><li>프론트엔드 페이지 디자인 및 컴포넌트 라이브러리 사용 (<a href="./../../frontend/ui-design/">UI 디자인</a>, <a href="./../../frontend/modern-component-library/">현대적 컴포넌트 라이브러리</a>)</li><li>백엔드 인터페이스 설계 및 개발 (<a href="./../../backend/ai-interface-code/">인터페이스 코드 작성</a>)</li><li>데이터베이스 기초와 Supabase (<a href="./../../backend/database-supabase/">데이터베이스에서 Supabase까지</a>)</li><li>결제 연동 (<a href="./../../backend/stripe-payment/">Stripe 결제 시스템</a>)</li><li>Git 워크플로우와 배포 (<a href="./../../backend/git-workflow/">Git과 GitHub</a>, <a href="./../../backend/zeabur-deployment/">웹 애플리케이션 배포</a>)</li></ul><h2 id="학습-목표" tabindex="-1">학습 목표 <a class="header-anchor" href="#학습-목표" aria-label="Permalink to “학습 목표”">​</a></h2><p>본 실전을 완료하면 다음이 가능합니다:</p><ol><li>실제 PRD를 읽고 이해하여, 개발 과제 목록을 추출</li><li>AI를 활용하여 단계별로 프론트엔드 페이지와 백엔드 인터페이스 생성</li><li>Supabase를 사용하여 사용자 인증, 데이터베이스 조작 구현</li><li>Stripe를 연동하여 유료 구독 기능 구현</li><li>관리 백엔드를 구축하고 엔드투엔드 통합 디버깅 완료</li></ol><h2 id="프로젝트-소개" tabindex="-1">프로젝트 소개 <a class="header-anchor" href="#프로젝트-소개" aria-label="Permalink to “프로젝트 소개”">​</a></h2><p>구축할 제품은 AI 마케팅 카피 SaaS로, 세 가지 하위 시스템을 포함합니다:</p><table tabindex="0"><thead><tr><th>하위 시스템</th><th>담당</th></tr></thead><tbody><tr><td><strong>공식 웹사이트 프론트엔드</strong></td><td>제품 소개, 가격, FAQ, 가입 전환</td></tr><tr><td><strong>사용자 워크벤치</strong></td><td>제품 정보 입력, 카피 생성, 기록 조회, 플랜 업그레이드</td></tr><tr><td><strong>백엔드 관리 콘솔</strong></td><td>사용자 관리, 생성 기록, 결제 데이터, 운영 개요</td></tr></tbody></table><p>백엔드는 Supabase를 사용하여 데이터베이스와 인증 기능을 제공하고, Stripe로 결제를 처리하며, AI 모델로 마케팅 카피를 생성합니다.</p><div class="tip custom-block"><p class="custom-block-title">PRD 입구</p><p>본 프로젝트의 요구사항 문서는 GitHub에 있습니다: <a href="https://github.com/datawhalechina/easy-vibe/blob/main/docs/zh-cn/stage-2/assignments/copywriting-platform-supabase/PRD.md" target="_blank" rel="noreferrer">PRD 보기</a></p></div>',15)),a("div",k,[i(r,null,{default:e(()=>[i(t,{active:0,items:[{title:"요구사항 분석",description:"PRD를 읽고 페이지, 기능, 인증, 결제 범위를 명확히 합니다"},{title:"골격 구축",description:"AI로 세 세트의 프론트엔드 골격을 생성합니다 (www / app / admin)"},{title:"백엔드 연동",description:"Supabase 인증, 생성 인터페이스, Stripe 결제"},{title:"통합 디버깅 및 출시",description:"엔드투엔드로 실행하고, 배포하여 데모를 준비합니다"}]})]),_:1})]),s[3]||(s[3]=p(`<h2 id="제1부-요구사항-분석" tabindex="-1">제1부: 요구사항 분석 <a class="header-anchor" href="#제1부-요구사항-분석" aria-label="Permalink to “제1부: 요구사항 분석”">​</a></h2><h3 id="_1-1-prd-읽기" tabindex="-1">1.1 PRD 읽기 <a class="header-anchor" href="#_1-1-prd-읽기" aria-label="Permalink to “1.1 PRD 읽기”">​</a></h3><p>PRD 문서를 열고 다음 질문에 중점적으로 답하세요:</p><ul><li>시스템에 몇 개의 진입점이 있나요? 각각 어떤 페이지를 포함하나요?</li><li>각 페이지의 핵심 기능은 무엇인가요?</li><li>백엔드에는 어떤 모듈과 데이터 테이블이 포함되나요?</li><li>플랜 가격, 결제 프로세스, 무료 한도는 어떻게 설계되었나요?</li><li>MVP 범위는 무엇인가요? 첫 번째 버전에서 무엇을 하고, 무엇을 하지 않나요?</li></ul><div class="warning custom-block"><p class="custom-block-title custom-block-title-default">WARNING</p><p>위 질문에 명확한 답이 없다면, 코드 작성을 시작하지 마세요. 요구사항 이해가 불명확한 것은 재작업의 가장 흔한 원인입니다.</p></div><h3 id="_1-2-시스템-아키텍처-확인" tabindex="-1">1.2 시스템 아키텍처 확인 <a class="header-anchor" href="#_1-2-시스템-아키텍처-확인" aria-label="Permalink to “1.2 시스템 아키텍처 확인”">​</a></h3><p>PRD를 바탕으로 시스템의 전체 아키텍처를 정리합니다:</p><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd[&quot;PRD&quot;] --&gt; web[&quot;공식 웹사이트 프론트엔드&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd --&gt; app[&quot;사용자 워크벤치&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd --&gt; admin[&quot;백엔드 관리 콘솔&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app --&gt; auth[&quot;인증&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app --&gt; gen[&quot;카피 생성 작업&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  gen --&gt; db[&quot;데이터베이스&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  billing[&quot;결제 및 플랜&quot;] --&gt; db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  admin --&gt; analytics[&quot;사용자 / 생성 / 결제 대시보드&quot;]</span></span></code></pre></div><h2 id="제2부-프로젝트-골격-구축" tabindex="-1">제2부: 프로젝트 골격 구축 <a class="header-anchor" href="#제2부-프로젝트-골격-구축" aria-label="Permalink to “제2부: 프로젝트 골격 구축”">​</a></h2><h3 id="_2-1-프론트엔드-페이지-생성" tabindex="-1">2.1 프론트엔드 페이지 생성 <a class="header-anchor" href="#_2-1-프론트엔드-페이지-생성" aria-label="Permalink to “2.1 프론트엔드 페이지 생성”">​</a></h3><p>AI를 사용하여 먼저 모든 페이지의 기본 구조와 가짜 데이터를 생성합니다.</p><p>프롬프트 참고:</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>현재 PRD를 기반으로 AI 마케팅 카피 SaaS의 프론트엔드 골격을 생성해 줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>요구사항:</span></span>
<span class="line"><span>1. 세 개의 진입점으로 분리: www, app, admin</span></span>
<span class="line"><span>2. 공식 웹사이트에는: 홈페이지, 가격, FAQ</span></span>
<span class="line"><span>3. app에는: 로그인, 회원가입, 생성 워크벤치, 기록, 플랜 페이지</span></span>
<span class="line"><span>4. admin에는: 백엔드 홈페이지, 사용자 관리, 생성 기록, 결제 주문</span></span>
<span class="line"><span>5. 먼저 페이지 구조와 가짜 데이터만 생성하고, 실제 인터페이스는 연결하지 마</span></span>
<span class="line"><span>6. 수업 데모가 아닌 현대적인 SaaS 스타일로 만들어 줘</span></span></code></pre></div><h3 id="_2-2-핵심-페이지-완성" tabindex="-1">2.2 핵심 페이지 완성 <a class="header-anchor" href="#_2-2-핵심-페이지-완성" aria-label="Permalink to “2.2 핵심 페이지 완성”">​</a></h3><p>골격이 완성되면, 카피 생성 워크벤치(Dashboard) 페이지를 중점적으로 완성합니다:</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/dashboard 페이지를 계속 완성해 줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>이것은 AI 마케팅 카피 워크벤치입니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>왼쪽 폼 필드:</span></span>
<span class="line"><span>- 제품명</span></span>
<span class="line"><span>- 한 줄 소개</span></span>
<span class="line"><span>- 타겟 사용자</span></span>
<span class="line"><span>- 3개의 판매 포인트</span></span>
<span class="line"><span>- 배포 채널 (공식 웹사이트, WeChat 모멘트, 샤오홍슈, Douyin, 이메일)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>오른쪽 결과 영역 예비:</span></span>
<span class="line"><span>- 메인 제목</span></span>
<span class="line"><span>- 부제목</span></span>
<span class="line"><span>- CTA</span></span>
<span class="line"><span>- 3버전의 짧은 카피</span></span>
<span class="line"><span>- 긴 카피</span></span>
<span class="line"><span></span></span>
<span class="line"><span>먼저 mock 데이터로 상호작용을 완성해 줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>요구사항:</span></span>
<span class="line"><span>- &quot;카피 생성&quot; 클릭 후 loading 상태 표시</span></span>
<span class="line"><span>- 결과 영역에 빈 상태 디자인</span></span>
<span class="line"><span>- 반응형 레이아웃, 넓은 화면과 좁은 화면 모두 정상 표시</span></span></code></pre></div><h3 id="_2-3-페이지-구조-검증" tabindex="-1">2.3 페이지 구조 검증 <a class="header-anchor" href="#_2-3-페이지-구조-검증" aria-label="Permalink to “2.3 페이지 구조 검증”">​</a></h3><p>항목별로 확인:</p><ul><li>[ ] 세 진입점의 라우팅이 독립적인지</li><li>[ ] 페이지 수가 PRD와 일치하는지</li><li>[ ] Dashboard의 폼과 결과 영역 레이아웃이 합리적인지</li><li>[ ] 가짜 데이터가 기본 UI 상태를 보여주는지</li></ul><h3 id="막혔나요" tabindex="-1">막혔나요? <a class="header-anchor" href="#막혔나요" aria-label="Permalink to “막혔나요?”">​</a></h3><p>프론트엔드 구축 단계에서 막혔다면, 다음 장을 복습하세요:</p><ul><li><a href="./../../frontend/ui-design/">UI 디자인</a></li><li><a href="./../../frontend/multi-product-ui/">UI 디자인 가이드라인을 참고하여 페이지와 버튼 디자인하기</a></li><li><a href="./../../frontend/llm-skills-beautiful/">LLM과 Skills로 인터페이스를 아름답게 만들기</a></li><li><a href="./../../frontend/design-to-code/">디자인 프로토타입에서 프로젝트 코드까지</a></li><li><a href="./../../frontend/modern-component-library/">현대적 컴포넌트 라이브러리로 인터페이스 업데이트하기</a></li></ul><h2 id="제3부-백엔드-연동" tabindex="-1">제3부: 백엔드 연동 <a class="header-anchor" href="#제3부-백엔드-연동" aria-label="Permalink to “제3부: 백엔드 연동”">​</a></h2><h3 id="_3-1-supabase-로그인-연동" tabindex="-1">3.1 Supabase 로그인 연동 <a class="header-anchor" href="#_3-1-supabase-로그인-연동" aria-label="Permalink to “3.1 Supabase 로그인 연동”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>나를 완전 초보자로 생각하고, 단계별로 Supabase 로그인 연동을 안내해 줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>다음을 완료해 줘:</span></span>
<span class="line"><span>1. 프로젝트에 Supabase 연동</span></span>
<span class="line"><span>2. 회원가입, 로그인, 로그아웃 기능 구현</span></span>
<span class="line"><span>3. 로그인 성공 후 /dashboard로 이동</span></span>
<span class="line"><span>4. 미로그인 사용자가 /dashboard, /billing, /admin에 접근하면 자동으로 /login으로 이동</span></span>
<span class="line"><span>5. profiles 테이블 생성</span></span>
<span class="line"><span>6. 사용자 회원가입 성공 후 profiles 테이블에 자동으로 레코드 생성</span></span>
<span class="line"><span>7. profiles 테이블은 email, role, plan 필드 포함</span></span>
<span class="line"><span></span></span>
<span class="line"><span>구현 요구사항:</span></span>
<span class="line"><span>- 각 단계에서 어떤 파일을 수정하는지 설명</span></span>
<span class="line"><span>- 비밀 키를 하드코딩하지 마</span></span>
<span class="line"><span>- Supabase 백엔드에서 수동으로 조작해야 하는 부분은 명확히 표시</span></span>
<span class="line"><span>- 완료 후 회원가입과 로그인을 확인하는 방법 설명</span></span></code></pre></div><h3 id="_3-2-생성-인터페이스-및-데이터베이스-연동" tabindex="-1">3.2 생성 인터페이스 및 데이터베이스 연동 <a class="header-anchor" href="#_3-2-생성-인터페이스-및-데이터베이스-연동" aria-label="Permalink to “3.2 생성 인터페이스 및 데이터베이스 연동”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>나를 완전 초보자로 생각하고, 웹사이트의 핵심 기능인 마케팅 카피 생성 및 저장을 완료해 줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>목표 효과:</span></span>
<span class="line"><span>1. 사용자가 /dashboard에서 폼을 작성하고 &quot;카피 생성&quot;을 클릭</span></span>
<span class="line"><span>2. 백엔드에서 수신: 제품명, 소개, 타겟 사용자, 판매 포인트, 배포 채널</span></span>
<span class="line"><span>3. 백엔드에서 모델을 호출하여 결과 생성</span></span>
<span class="line"><span>4. 페이지에 생성 결과 표시</span></span>
<span class="line"><span>5. 입력과 출력 모두 데이터베이스에 저장</span></span>
<span class="line"><span>6. 사용자가 다음에 접속하면 기록을 볼 수 있음</span></span>
<span class="line"><span></span></span>
<span class="line"><span>완료해야 할 사항:</span></span>
<span class="line"><span>- 생성 인터페이스 /api/generate 생성</span></span>
<span class="line"><span>- generations 테이블 생성</span></span>
<span class="line"><span>- 입력 및 출력 필드 설계</span></span>
<span class="line"><span>- Dashboard 페이지에서 현재 사용자의 기록 읽기</span></span>
<span class="line"><span></span></span>
<span class="line"><span>사용자 경험:</span></span>
<span class="line"><span>- 버튼 loading 상태</span></span>
<span class="line"><span>- 생성 실패 시 오류 메시지</span></span>
<span class="line"><span>- 기록이 없을 때 빈 상태</span></span>
<span class="line"><span></span></span>
<span class="line"><span>완료 후 설명:</span></span>
<span class="line"><span>- 프론트엔드 페이지 파일 위치</span></span>
<span class="line"><span>- 백엔드 인터페이스 파일 위치</span></span>
<span class="line"><span>- 데이터가 데이터베이스에 기록되는 로직 위치</span></span>
<span class="line"><span>- 전체 생성 프로세스를 테스트하는 방법</span></span></code></pre></div><h3 id="_3-3-stripe-유료-결제-연동" tabindex="-1">3.3 Stripe 유료 결제 연동 <a class="header-anchor" href="#_3-3-stripe-유료-결제-연동" aria-label="Permalink to “3.3 Stripe 유료 결제 연동”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>나를 완전 초보자로 생각하고, LaunchKit에 가장 기본적으로 사용 가능한 Stripe 결제를 추가해 줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>복잡한 시스템은 필요 없고, 가장 기본적인 결제 프로세스만 먼저 실행해.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>완료해야 할 사항:</span></span>
<span class="line"><span>1. /billing 페이지에 free와 pro 두 가지 플랜 표시</span></span>
<span class="line"><span>2. 사용자가 업그레이드를 클릭하면 Stripe Checkout으로 이동</span></span>
<span class="line"><span>3. 결제 성공 후 웹사이트로 돌아옴</span></span>
<span class="line"><span>4. 결제 결과를 subscriptions 테이블에 저장</span></span>
<span class="line"><span>5. profile.plan 필드 동기화 업데이트</span></span>
<span class="line"><span>6. free 사용자는 매일 3회 생성 제한, pro 사용자는 무제한</span></span>
<span class="line"><span></span></span>
<span class="line"><span>구현 원칙:</span></span>
<span class="line"><span>- 먼저 메인 프로세스를 실행하고, 복잡한 경계 조건은 나중에 고려</span></span>
<span class="line"><span>- Stripe 백엔드에서 구성해야 하는 부분은 명확히 작성</span></span>
<span class="line"><span>- 완료 후 전체 결제 프로세스를 테스트하는 방법 설명</span></span></code></pre></div><h3 id="_3-4-관리-백엔드-구축" tabindex="-1">3.4 관리 백엔드 구축 <a class="header-anchor" href="#_3-4-관리-백엔드-구축" aria-label="Permalink to “3.4 관리 백엔드 구축”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>나를 완전 초보자로 생각하고, 간결하고 사용 가능한 관리 백엔드를 만들어 줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>관리자만 접근 가능.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>완료해야 할 사항:</span></span>
<span class="line"><span>1. role = admin인 사용자만 /admin에 접근 가능</span></span>
<span class="line"><span>2. 백엔드에 3개의 Tab 포함: 사용자 목록, 생성 기록, 구독 상태</span></span>
<span class="line"><span>3. 사용자 목록 표시: email, plan, 생성 시간</span></span>
<span class="line"><span>4. 생성 기록 표시: 사용자, 제품명, 채널, 생성 시간</span></span>
<span class="line"><span>5. 구독 상태 표시: 사용자, 플랜, 결제 상태</span></span>
<span class="line"><span></span></span>
<span class="line"><span>요구사항:</span></span>
<span class="line"><span>- 인터페이스는 간결하고 명확하게</span></span>
<span class="line"><span>- 기존 컴포넌트 라이브러리의 테이블, Tab, Badge 사용</span></span>
<span class="line"><span>- 완료 후 계정을 admin으로 설정하는 방법 설명</span></span></code></pre></div><h3 id="막혔나요-1" tabindex="-1">막혔나요? <a class="header-anchor" href="#막혔나요-1" aria-label="Permalink to “막혔나요?”">​</a></h3><p>백엔드 개발 단계에서 막혔다면, 다음 장을 복습하세요:</p><ul><li><a href="./../../backend/database-supabase/">데이터베이스에서 Supabase까지</a></li><li><a href="./../../backend/ai-interface-code/">대형 언어 모델 활용 인터페이스 코드 및 문서 작성</a></li><li><a href="./../../backend/stripe-payment/">Stripe 등 결제 시스템 통합 방법</a></li></ul><h2 id="제4부-통합-디버깅-및-출시" tabindex="-1">제4부: 통합 디버깅 및 출시 <a class="header-anchor" href="#제4부-통합-디버깅-및-출시" aria-label="Permalink to “제4부: 통합 디버깅 및 출시”">​</a></h2><h3 id="_4-1-엔드투엔드-테스트" tabindex="-1">4.1 엔드투엔드 테스트 <a class="header-anchor" href="#_4-1-엔드투엔드-테스트" aria-label="Permalink to “4.1 엔드투엔드 테스트”">​</a></h3><p>최소한 다음 시나리오를 확인하세요:</p><ul><li>회원가입 -&gt; 로그인 -&gt; 카피 생성 -&gt; 기록 조회 -&gt; 플랜 업그레이드</li><li>관리자 로그인 -&gt; 사용자 데이터 조회 -&gt; 생성 기록 조회 -&gt; 결제 상태 조회</li></ul><p>배포 전 확인:</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>나를 완전 초보자로 생각하고, 프로젝트가 배포 가능한지 확인해 줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>확인 포인트:</span></span>
<span class="line"><span>- 환경 변수가 완전한지</span></span>
<span class="line"><span>- 로그인 콜백 주소가 올바른지</span></span>
<span class="line"><span>- Stripe 결제 콜백 주소가 올바른지</span></span>
<span class="line"><span>- 페이지에 loading, 빈 상태, 오류 메시지가 누락되지 않았는지</span></span>
<span class="line"><span>- README에 시작 설명과 배포 설명이 포함되어 있는지</span></span>
<span class="line"><span></span></span>
<span class="line"><span>다음을 수행해 줘:</span></span>
<span class="line"><span>1. 우선순위별로 수정 필요 사항 나열</span></span>
<span class="line"><span>2. 먼저 수정해야 할 항목 표시</span></span>
<span class="line"><span>3. 수정 후 배포 단계 설명</span></span></code></pre></div><h3 id="_4-2-배포" tabindex="-1">4.2 배포 <a class="header-anchor" href="#_4-2-배포" aria-label="Permalink to “4.2 배포”">​</a></h3><p>프로젝트를 공개 네트워크 환경에 배포합니다. 배포 튜토리얼 참고: <a href="./../../backend/git-workflow/">Git과 GitHub 워크플로우</a>, <a href="./../../backend/zeabur-deployment/">웹 애플리케이션 배포 방법</a>.</p><h2 id="산출물" tabindex="-1">산출물 <a class="header-anchor" href="#산출물" aria-label="Permalink to “산출물”">​</a></h2><p>본 프로젝트를 완료한 후, 다음 내용을 제출해야 합니다:</p><ul><li>[ ] 접근 가능한 온라인 데모 링크</li><li>[ ] 소스 코드 저장소 링크 (README 포함)</li><li>[ ] PRD 문서</li><li>[ ] 핵심 페이지 스크린샷 (홈페이지, Dashboard, Billing, Admin)</li><li>[ ] 60초 데모 영상 (회원가입 -&gt; 생성 -&gt; 결제 -&gt; 백엔드 포함)</li></ul><p>README에는 최소한 다음이 포함되어야 합니다: 프로젝트 소개, 핵심 페이지 설명, 기술 스택, 로컬 시작 단계, 환경 변수 목록.</p><h2 id="평가-기준" tabindex="-1">평가 기준 <a class="header-anchor" href="#평가-기준" aria-label="Permalink to “평가 기준”">​</a></h2><table tabindex="0"><thead><tr><th>차원</th><th>기본 요구사항</th><th>심화 요구사항</th></tr></thead><tbody><tr><td>제품 완성도</td><td>홈페이지, 로그인, Dashboard, Billing, Admin 모두 접근 가능</td><td>홈페이지 카피와 비주얼 스타일이 실제 SaaS처럼 느껴짐</td></tr><tr><td>비즈니스 폐루프</td><td>회원가입 -&gt; 로그인 -&gt; 생성 -&gt; 기록 조회가 실행 가능</td><td>무료/Pro 권한 차이가 명확하게 보임</td></tr><tr><td>데이터 정확성</td><td>생성 결과와 결제 상태가 데이터베이스에 기록됨</td><td>명확한 오류 메시지, 빈 상태, loading이 있음</td></tr><tr><td>권한 및 보안</td><td>미로그인 시 보호된 페이지에 접근 불가, 일반 사용자는 Admin에 접근 불가</td><td>기본적인 입력 검증과 서버 측 인증이 있음</td></tr><tr><td>엔지니어링 납품</td><td>프로젝트를 로컬에서 시작할 수 있고, 공개 네트워크에 배포도 가능</td><td>README가 명확하고, 데모 영상 구조가 완전함</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>과제가 너무 크게 느껴진다면, 한 가지 원칙을 기억하세요: <strong>먼저 &quot;실행 가능하게&quot; 만들고, 그 다음 &quot;아름답게&quot; 만드세요.</strong></p></div><h2 id="제출-전-확인" tabindex="-1">제출 전 확인 <a class="header-anchor" href="#제출-전-확인" aria-label="Permalink to “제출 전 확인”">​</a></h2>`,50)),i(d,{shadow:"hover",style:{margin:"20px 0","border-radius":"12px"}},{header:e(()=>[...s[0]||(s[0]=[a("div",{style:{"font-weight":"bold","font-size":"16px"}},"제출 전 마지막으로 확인",-1)])]),default:e(()=>[s[1]||(s[1]=a("ul",{style:{"list-style-type":"none","padding-left":"0"}},[a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 홈페이지, 로그인 페이지, Dashboard, Billing, Admin 모두 완성")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 사용자가 회원가입, 로그인, 로그아웃 가능")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 생성 결과가 데이터베이스에 실제로 기록됨")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 결제 메인 프로세스가 실행됨")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 관리자가 사용자, 생성 기록 및 결제 상태를 볼 수 있음")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 프로젝트가 공개 네트워크에 배포됨")])])],-1))]),_:1}),s[4]||(s[4]=p('<h2 id="참고-자료" tabindex="-1">참고 자료 <a class="header-anchor" href="#참고-자료" aria-label="Permalink to “참고 자료”">​</a></h2><ul><li><a href="./../../frontend/ui-design/">UI 디자인</a></li><li><a href="./../../frontend/multi-product-ui/">UI 디자인 가이드라인을 참고하여 페이지와 버튼 디자인하기</a></li><li><a href="./../../frontend/llm-skills-beautiful/">LLM과 Skills로 인터페이스를 아름답게 만들기</a></li><li><a href="./../../frontend/design-to-code/">디자인 프로토타입에서 프로젝트 코드까지</a></li><li><a href="./../../frontend/modern-component-library/">현대적 컴포넌트 라이브러리로 인터페이스 업데이트하기</a></li><li><a href="./../../backend/database-supabase/">데이터베이스에서 Supabase까지</a></li><li><a href="./../../backend/ai-interface-code/">대형 언어 모델 활용 인터페이스 코드 및 문서 작성</a></li><li><a href="./../../backend/git-workflow/">Git과 GitHub 워크플로우</a></li><li><a href="./../../backend/zeabur-deployment/">웹 애플리케이션 배포 방법</a></li><li><a href="./../../backend/stripe-payment/">Stripe 등 결제 시스템 통합 방법</a></li></ul>',2))])}const P=c(b,[["render",u]]);export{S as __pageData,P as default};
