import{_ as a,o as n,c as i,b6 as l}from"./chunks/framework.BUXTSoD9.js";const d=JSON.parse('{"title":"AI 보조 개발 워크플로우","description":"","frontmatter":{},"headers":[],"relativePath":"ko-kr/stage-3/core-skills/workflow/index.md","filePath":"ko-kr/stage-3/core-skills/workflow/index.md"}'),p={name:"ko-kr/stage-3/core-skills/workflow/index.md"};function e(t,s,h,r,o,g){return n(),i("div",null,[...s[0]||(s[0]=[l(`<h1 id="ai-보조-개발-워크플로우" tabindex="-1">AI 보조 개발 워크플로우 <a class="header-anchor" href="#ai-보조-개발-워크플로우" aria-label="Permalink to “AI 보조 개발 워크플로우”">​</a></h1><p>이전 장에서는 AI IDE를 사용하여 코드를 작성하는 방법, Git으로 코드 버전을 관리하는 방법, API 인터페이스를 설계하고 구현하는 방법을 배웠습니다. 하지만 실제 개발 업무를 맞닥뜨리면 다음과 같은 질문들이 떠오를 수 있습니다:</p><ul><li>&quot;이 프로젝트에는 수천 개의 파일이 있는데 어디서 시작해야 하죠?&quot;</li><li>&quot;상사가 새로운 기능을 추가하라고 했는데, 이 코드베이스의 해당 부분이 익숙하지 않아요.&quot;</li><li>&quot;이 버그가 어디 있는지 전혀 모르겠어요. 코드가 너무 많아요.&quot;</li><li>&quot;이 코드들을 리팩토링해야 하는데, 뭔가 망가뜨릴까 봐 걱정돼요.&quot;</li></ul><p>이 질문들의 본질은 <strong>실제 개발 시나리오에서 AI 도구를 어떻게 효율적으로 사용하여 업무를 완수할 것인가</strong>입니다.</p><p>이 장에서는 체계적인 AI 보조 개발 워크플로우를 구축하는 방법을 배우고, 다양한 개발 시나리오에서 AI를 효율적으로 활용할 수 있도록 합니다. 구체적인 예시를 통해 새로운 기능 개발, 버그 수정, 코드 리팩토링 등에서 AI를 사용하는 방법을 보여드리겠습니다.</p><blockquote><p>💡 <strong>사전 요구 사항</strong></p><p>이 섹션을 학습하기 전에 먼저 다음 내용을 숙지하는 것이 좋습니다:</p><ul><li><a href="./../../stage-1/ai-ide/">AI IDE 기초</a> - AI IDE의 기본 사용법 익히기</li><li><a href="./../../stage-2/backend/git-workflow/">Git 및 GitHub 워크플로우</a> - 코드 버전 관리 이해</li><li><a href="./../../stage-2/backend/ai-interface-code/">대형 모델을 활용한 API 코드 작성</a> - AI 보조 개발의 기본 개념 이해</li></ul></blockquote><div class="info custom-block"><p class="custom-block-title">📚 학습 내용</p><ol><li>개발 과정에서 AI의 역할과 능력 경계 이해하기</li><li>다양한 프로젝트 유형에 맞는 AI 보조 개발 전략 습득하기</li><li>새로운 기능 개발, 버그 수정, 코드 리팩토링 등의 시나리오에서 Claude Code 사용법 배우기</li><li>프로젝트 지식 베이스를 구축하여 Claude Code와의 협업 효율 향상하기</li><li>AI 협업 효율을 높이는 실용적인 기법 마스터하기</li></ol></div><h1 id="_1-ai의-능력-경계-이해하기" tabindex="-1">1. AI의 능력 경계 이해하기 <a class="header-anchor" href="#_1-ai의-능력-경계-이해하기" aria-label="Permalink to “1. AI의 능력 경계 이해하기”">​</a></h1><p>AI를 활용하여 개발을 보조하기 전에, 먼저 AI가 할 수 있는 것과 할 수 없는 것을 이해해야 합니다. 그래야 올바른 협업 모델을 구축할 수 있습니다.</p><h2 id="_1-1-ai가-잘하는-것" tabindex="-1">1.1 AI가 잘하는 것 <a class="header-anchor" href="#_1-1-ai가-잘하는-것" aria-label="Permalink to “1.1 AI가 잘하는 것”">​</a></h2><p>AI를 명확한 지시가 필요한 매우 똑똑한 조수라고 생각해 보세요. AI는 여러분의 설명을 바탕으로 코드 골격을 빠르게 생성할 수 있으며, 수천 줄의 코드를 몇 초 만에 읽고 필요한 부분을 찾아낼 수도 있습니다. 명백한 구문 오류나 일반적인 보안 취약점이 있다면 발견하는 데 도움을 줄 수 있습니다. 변수 일괄 이름 변경, 코드 포맷팅, 문서 주석 생성과 같은 반복적인 작업은 특히 AI에 맡기기에 적합합니다.</p><p>간단히 말해, AI는 명확한 규칙이 있고 자동화할 수 있는 작업에 능합니다.</p><h2 id="_1-2-ai가-잘하지-못하는-것" tabindex="-1">1.2 AI가 잘하지 못하는 것 <a class="header-anchor" href="#_1-2-ai가-잘하지-못하는-것" aria-label="Permalink to “1.2 AI가 잘하지 못하는 것”">​</a></h2><p>하지만 AI에게도 한계가 있습니다. AI는 여러분의 비즈니스 로직을 이해하지 못합니다. 자세히 알려주지 않으면 회사의 주문 처리 흐름이 어떻게 돌아가는지 모릅니다. 또한 기술 선택이나 아키텍처 설계와 같이 트레이드오프를 따져야 하는 결정도 내리지 못합니다. 이는 여러분의 경험과 프로젝트에 대한 이해에 달려 있기 때문입니다. AI는 팀의 특별한 규칙, 예를 들어 &quot;모든 API에는 로깅이 있어야 한다&quot;나 &quot;에러 코드는 반드시 열거형을 사용해야 한다&quot; 같은 것도 모릅니다. 이러한 규칙은 직접 설정하거나 명시적으로 알려주어야 합니다.</p><p>가장 중요한 것은, AI가 생성한 코드를 그대로 사용할 수 없다는 점입니다. 반드시 검토하고 테스트해야 합니다. AI는 올바르게 보이지만 실제로는 문제가 있는 코드를 생성할 수 있으며, 특정 엣지 케이스를 무시할 수도 있습니다.</p><h2 id="_1-3-ai와-어떻게-협업할-것인가" tabindex="-1">1.3 AI와 어떻게 협업할 것인가 <a class="header-anchor" href="#_1-3-ai와-어떻게-협업할-것인가" aria-label="Permalink to “1.3 AI와 어떻게 협업할 것인가”">​</a></h2><p>AI의 능력 경계를 이해하면 협업 모델이 명확해집니다: 여러분은 무엇을 만들지 결정하고, 결정을 내리며, 품질을 보장하는 역할을 담당합니다; AI는 구체적인 코딩 작업을 실행하고, 정보를 찾으며, 명백한 문제를 표면화하는 역할을 담당합니다.</p><p>이는 주니어 개발자와 일하는 것과 같습니다. 무엇을 해야 하는지 알려주면, 그들이 구현하고, 여러분이 코드를 검토합니다. 차이점은 AI가 훨씬 빠르게 실행하지만, 판단력은 인간보다 약하다는 것입니다.</p><h1 id="_2-다양한-프로젝트-유형에-따른-개발-전략" tabindex="-1">2. 다양한 프로젝트 유형에 따른 개발 전략 <a class="header-anchor" href="#_2-다양한-프로젝트-유형에-따른-개발-전략" aria-label="Permalink to “2. 다양한 프로젝트 유형에 따른 개발 전략”">​</a></h1><p>프로젝트 유형에 따라 개발 방식과 AI 사용 전략이 다릅니다. 올바른 전략을 선택하면 개발 효율을 크게 높일 수 있습니다.</p><h2 id="_2-1-완전히-새로운-프로젝트-처음부터-시작" tabindex="-1">2.1 완전히 새로운 프로젝트 (처음부터 시작) <a class="header-anchor" href="#_2-1-완전히-새로운-프로젝트-처음부터-시작" aria-label="Permalink to “2.1 완전히 새로운 프로젝트 (처음부터 시작)”">​</a></h2><p><strong>프로젝트 특성:</strong></p><ul><li>과거의 부담이 없어 자유롭게 설계 가능</li><li>프로젝트 구조와 코드 규칙을 확립해야 함</li><li>빠른 반복과 시행착오에 적합</li></ul><p><strong>권장 워크플로우:</strong></p><p><strong>1단계: 프로젝트 구조 기획</strong></p><p>코딩을 시작하기 전에 먼저 AI에게 프로젝트 구조와 기술 선택을 기획하도록 요청합니다:</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>다음 기능을 갖춘 작업 관리 앱을 만들고 싶습니다:</span></span>
<span class="line"><span>- 사용자 등록 및 로그인</span></span>
<span class="line"><span>- 작업 생성, 편집 및 삭제</span></span>
<span class="line"><span>- 작업 카테고리 및 태그</span></span>
<span class="line"><span>- 작업 알림</span></span>
<span class="line"><span></span></span>
<span class="line"><span>다음을 도와주세요:</span></span>
<span class="line"><span>1. 적합한 기술 스택 추천</span></span>
<span class="line"><span>2. 프로젝트 디렉토리 구조 설계</span></span>
<span class="line"><span>3. 데이터베이스 스키마 기획</span></span></code></pre></div><p><strong>2단계: 기본 프레임워크 구축</strong></p><p>기획을 바탕으로 AI에게 기본 프로젝트 구조를 생성하도록 요청합니다:</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>방금 논의한 기획을 바탕으로 다음을 도와주세요:</span></span>
<span class="line"><span>1. 프로젝트 디렉토리 구조 생성</span></span>
<span class="line"><span>2. 설정 파일 초기화 (package.json, .env 등)</span></span>
<span class="line"><span>3. 기본 서버 코드 생성</span></span></code></pre></div><p><strong>3단계: 기능을 하나씩 구현</strong></p><p>우선순위에 따라 기능 모듈을 하나씩 구현합니다:</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이제 사용자 등록 기능을 구현하세요. 요구 사항:</span></span>
<span class="line"><span>- 이메일과 비밀번호로 등록</span></span>
<span class="line"><span>- 비밀번호를 암호화하여 저장</span></span>
<span class="line"><span>- 이메일 인증</span></span></code></pre></div><p><strong>핵심 포인트:</strong></p><ul><li>코드 규칙을 일찍 확립하여 AI가 그 규칙을 따르도록 함</li><li>각 기능 모듈이 완료되는 즉시 테스트 및 검증</li><li>프로젝트 문서를 제때 업데이트</li></ul><h2 id="_2-2-성숙한-프로젝트-대규모-기존-코드베이스" tabindex="-1">2.2 성숙한 프로젝트 (대규모 기존 코드베이스) <a class="header-anchor" href="#_2-2-성숙한-프로젝트-대규모-기존-코드베이스" aria-label="Permalink to “2.2 성숙한 프로젝트 (대규모 기존 코드베이스)”">​</a></h2><p><strong>프로젝트 특성:</strong></p><ul><li>대규모 코드베이스와 기존 규칙</li><li>코딩 스타일의 일관성을 유지해야 함</li><li>변경 시 영향 범위를 고려해야 함</li></ul><p><strong>권장 워크플로우:</strong></p><p><strong>1단계: 프로젝트 구조 이해</strong></p><p>코드를 변경하기 전에 먼저 AI에게 프로젝트를 이해하도록 도와달라고 요청합니다:</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이것은 전자상거래 프로젝트이며, 쿠폰 기능을 추가해야 합니다.</span></span>
<span class="line"><span>다음을 도와주세요:</span></span>
<span class="line"><span>1. 전체 프로젝트 구조 분석</span></span>
<span class="line"><span>2. 주문 관련 코드 찾기</span></span>
<span class="line"><span>3. 다른 유사한 기능이 어떻게 구현되어 있는지 확인</span></span></code></pre></div><p><strong>2단계: 참조 코드 찾기</strong></p><p>AI에게 프로젝트 내의 유사한 구현을 참조용으로 찾아달라고 요청합니다:</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>프로젝트 내의 다른 프로모션 기능(예: 할인, 프로모션)이 어떻게 구현되어 있는지 찾아주세요</span></span></code></pre></div><p><strong>3단계: 기존 스타일 따르기</strong></p><p>AI에게 기존 코드의 스타일로 새로운 기능을 구현하도록 요청합니다:</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>기존 할인 프로모션이 구현된 방식을 참고하여 쿠폰 기능을 구현해주세요.</span></span>
<span class="line"><span>동일한 코드 스타일과 디렉토리 구조를 유지하세요.</span></span></code></pre></div><p><strong>핵심 포인트:</strong></p><ul><li>먼저 이해하고 나서 변경하여 기존 아키텍처를 훼손하지 않기</li><li>코딩 스타일의 일관성 유지</li><li>변경 후 관련 기능 테스트</li></ul><h2 id="_2-3-빠른-프로토타입-아이디어-검증" tabindex="-1">2.3 빠른 프로토타입 (아이디어 검증) <a class="header-anchor" href="#_2-3-빠른-프로토타입-아이디어-검증" aria-label="Permalink to “2.3 빠른 프로토타입 (아이디어 검증)”">​</a></h2><p><strong>프로젝트 특성:</strong></p><ul><li>속도가 가장 중요하고, 코드 품질은 덜 중요</li><li>제품 아이디어나 기술적 접근 방식을 검증하는 데 사용</li><li>나중에 폐기되거나 재작성될 수 있음</li></ul><p><strong>권장 워크플로우:</strong></p><p><strong>요구 사항을 직접 설명하고 빠르게 구현:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>다음 요구 사항을 갖춘 간단한 할 일 앱을 만들어주세요:</span></span>
<span class="line"><span>- 작업 추가, 삭제, 완료 표시</span></span>
<span class="line"><span>- 데이터를 로컬에 저장</span></span>
<span class="line"><span>- UI는 간단하게, 작동하기만 하면 됨</span></span></code></pre></div><p><strong>빠르게 반복:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>검색 기능 추가</span></span>
<span class="line"><span>다크 테마로 변경</span></span>
<span class="line"><span>작업 카테고리 추가</span></span></code></pre></div><p><strong>핵심 포인트:</strong></p><ul><li>코드 품질이나 규칙에 너무 신경 쓰지 않기</li><li>아이디어를 빠르게 검증하고 방향을 제때 조정</li><li>프로토타입이 성공하면 나중에 리팩토링 필요</li></ul><h2 id="_2-4-유지보수-프로젝트-주로-버그-수정" tabindex="-1">2.4 유지보수 프로젝트 (주로 버그 수정) <a class="header-anchor" href="#_2-4-유지보수-프로젝트-주로-버그-수정" aria-label="Permalink to “2.4 유지보수 프로젝트 (주로 버그 수정)”">​</a></h2><p><strong>프로젝트 특성:</strong></p><ul><li>코드가 이미 안정적이며, 주요 업무는 이슈 수정</li><li>문제를 빠르게 파악해야 함</li><li>새로운 문제가 발생하지 않도록 주의하여 변경해야 함</li></ul><p><strong>권장 워크플로우:</strong></p><p><strong>1단계: 문제 파악</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>사용자 피드백: &quot;주문 제출&quot; 버튼을 클릭한 후 페이지가 멈춤</span></span>
<span class="line"><span>콘솔 오류: TypeError: Cannot read property &#39;id&#39; of undefined</span></span>
<span class="line"><span></span></span>
<span class="line"><span>다음을 도와주세요:</span></span>
<span class="line"><span>1. 가능한 원인 분석</span></span>
<span class="line"><span>2. 관련 코드 찾기</span></span></code></pre></div><p><strong>2단계: 근본 원인 분석</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이 오류가 어떤 상황에서 발생하는지 확인해주세요</span></span>
<span class="line"><span>데이터 흐름을 검사해주세요</span></span></code></pre></div><p><strong>3단계: 수정 적용</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이 문제를 수정해주세요. 그리고:</span></span>
<span class="line"><span>1. 유사한 문제를 방지하기 위한 방어 코드 추가</span></span>
<span class="line"><span>2. 사용자 경험을 개선하기 위한 오류 메시지 추가</span></span></code></pre></div><p><strong>핵심 포인트:</strong></p><ul><li>수정 후 철저히 테스트하여 다른 기능에 영향이 없는지 확인</li><li>시스템 견고성을 높이기 위한 방어 코드 추가</li><li>문제와 해결 방법을 나중을 위해 기록</li></ul><h1 id="_3-일반적인-개발-업무를-위한-워크플로우" tabindex="-1">3. 일반적인 개발 업무를 위한 워크플로우 <a class="header-anchor" href="#_3-일반적인-개발-업무를-위한-워크플로우" aria-label="Permalink to “3. 일반적인 개발 업무를 위한 워크플로우”">​</a></h1><p>일상적인 개발에서는 다양한 유형의 업무를 만나게 됩니다. 다음은 가장 일반적인 AI 보조 워크플로우 몇 가지입니다.</p><h2 id="_3-1-새로운-기능-개발" tabindex="-1">3.1 새로운 기능 개발 <a class="header-anchor" href="#_3-1-새로운-기능-개발" aria-label="Permalink to “3.1 새로운 기능 개발”">​</a></h2><p><strong>시나리오:</strong> 제품 매니저가 새로운 요구 사항을 전달하고, 새로운 기능을 구현해야 합니다.</p><p><strong>전체 워크플로우:</strong></p><p><strong>1단계: 요구 사항 이해</strong> (직접 수행)</p><p>코딩을 시작하기 전에 먼저 명확히 하세요:</p><ul><li>어떤 기능을 구현해야 하는가?</li><li>입력과 출력은 무엇인가?</li><li>엣지 케이스와 예외 상황은 무엇인가?</li><li>성능 및 보안 요구 사항은 무엇인가?</li></ul><p><strong>2단계: 기존 코드 이해</strong> (AI에게 도움 요청)</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>사용자 댓글 기능을 구현해야 합니다. 다음을 도와주세요:</span></span>
<span class="line"><span>1. 프로젝트에 유사한 것이 있는지 확인</span></span>
<span class="line"><span>2. 사용자 데이터와 기사 데이터가 어떻게 저장되어 있는지 찾기</span></span>
<span class="line"><span>3. 이 프로젝트의 데이터베이스 조작 규칙 이해</span></span></code></pre></div><p><strong>3단계: 구현 계획 수립</strong> (AI와 함께)</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>방금 분석한 내용을 바탕으로, 댓글 기능 구현에 필요한 사항:</span></span>
<span class="line"><span>1. 댓글 데이터 모델 생성</span></span>
<span class="line"><span>2. 댓글 CRUD API 구현</span></span>
<span class="line"><span>3. 프론트엔드에 댓글 표시 및 작성 기능 추가</span></span>
<span class="line"><span></span></span>
<span class="line"><span>이 계획이 합리적인지, 빠진 부분이 없는지 확인해주세요</span></span></code></pre></div><p><strong>4단계: 기능 구현</strong> (AI가 생성, 여러분이 검토)</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>계획에 따라 먼저 댓글 데이터 모델을 구현해주세요.</span></span>
<span class="line"><span>요구 사항:</span></span>
<span class="line"><span>- 댓글 내용, 작성자, 기사 ID, 생성 시간 포함</span></span>
<span class="line"><span>- 중첩 댓글 답글 지원</span></span>
<span class="line"><span>- 필요한 인덱스 추가</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이제 댓글 API 엔드포인트를 구현해주세요.</span></span>
<span class="line"><span>요구 사항:</span></span>
<span class="line"><span>- 댓글 작성</span></span>
<span class="line"><span>- 댓글 삭제 (본인 댓글만 삭제 가능)</span></span>
<span class="line"><span>- 특정 기사의 모든 댓글 조회</span></span>
<span class="line"><span>- 페이지네이션 지원</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>마지막으로 프론트엔드 댓글 컴포넌트를 구현해주세요.</span></span>
<span class="line"><span>요구 사항:</span></span>
<span class="line"><span>- 댓글 목록 표시</span></span>
<span class="line"><span>- 댓글 작성 폼</span></span>
<span class="line"><span>- 댓글에 답글 작성 지원</span></span></code></pre></div><p><strong>5단계: 테스트 및 검증</strong> (직접 수행)</p><ul><li>주요 흐름을 수동으로 테스트</li><li>빈 내용, 과도하게 긴 내용 등 엣지 케이스 테스트</li><li>다른 사람의 댓글을 삭제할 수 없는지 등 권한 제어 테스트</li><li>AI에게 자동화 테스트 작성을 도와달라고 요청</li></ul><p><strong>실제 대화 예시:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>여러분: 사용자가 기사에 댓글을 달 수 있는 사용자 댓글 기능을 추가하고 싶어요</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI: 네, 먼저 프로젝트 구조를 파악하겠습니다.</span></span>
<span class="line"><span>    [AI가 프로젝트 코드를 분석]</span></span>
<span class="line"><span>    프로젝트에 이미 사용자 시스템(models/user.js)과</span></span>
<span class="line"><span>    기사 시스템(models/article.js)이 있는 것을 확인했습니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    댓글 기능을 구현하려면:</span></span>
<span class="line"><span>    1. 댓글 데이터 모델 생성 (models/comment.js)</span></span>
<span class="line"><span>    2. 댓글 관련 API 추가 (routes/comment.js)</span></span>
<span class="line"><span>    3. 기사 상세 페이지에 댓글 표시 및 작성 기능 추가</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    구현을 시작할까요?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>여러분: 네, 시작하죠. 먼저 데이터 모델을 생성해주세요</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI: [models/comment.js를 생성]</span></span>
<span class="line"><span>    다음 필드가 포함된 댓글 데이터 모델을 생성했습니다:</span></span>
<span class="line"><span>    - id: 댓글 ID</span></span>
<span class="line"><span>    - content: 댓글 내용</span></span>
<span class="line"><span>    - userId: 작성자 ID</span></span>
<span class="line"><span>    - articleId: 기사 ID</span></span>
<span class="line"><span>    - parentId: 부모 댓글 ID (중첩 답글용)</span></span>
<span class="line"><span>    - createdAt: 생성 시간</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    다음으로 API를 구현할까요?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>여러분: 네, API를 구현해주세요</span></span></code></pre></div><h2 id="_3-2-버그-수정" tabindex="-1">3.2 버그 수정 <a class="header-anchor" href="#_3-2-버그-수정" aria-label="Permalink to “3.2 버그 수정”">​</a></h2><p><strong>시나리오:</strong> 사용자가 문제를 보고하고, 빠르게 파악하고 수정해야 합니다.</p><p><strong>전체 워크플로우:</strong></p><p><strong>1단계: 정보 수집</strong> (직접 수행)</p><p>다음 정보를 기록합니다:</p><ul><li>오류 메시지는 무엇인가?</li><li>이 문제를 어떻게 재현할 수 있는가?</li><li>언제부터 발생했는가?</li><li>영향 범위는 어느 정도인가?</li></ul><p><strong>2단계: 문제 파악</strong> (AI에게 도움 요청)</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>사용자 피드백: &quot;주문 제출&quot; 버튼을 클릭한 후 페이지가 멈춤</span></span>
<span class="line"><span>브라우저 콘솔 오류: TypeError: Cannot read property &#39;id&#39; of undefined</span></span>
<span class="line"><span>오류는 checkout.js의 45번째 줄에서 발생</span></span>
<span class="line"><span></span></span>
<span class="line"><span>다음을 도와주세요:</span></span>
<span class="line"><span>1. 가능한 원인 분석</span></span>
<span class="line"><span>2. 관련 코드 찾기</span></span>
<span class="line"><span>3. 데이터 흐름 확인</span></span></code></pre></div><p><strong>3단계: 근본 원인 분석</strong> (AI와 함께)</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이 user 객체가 어디서 오는지 확인해주세요</span></span>
<span class="line"><span>user가 undefined가 될 수 있는 상황을 검사해주세요</span></span></code></pre></div><p><strong>4단계: 수정 구현</strong> (AI가 생성, 여러분이 검토)</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>다음 요구 사항으로 이 문제를 수정해주세요:</span></span>
<span class="line"><span>1. user가 존재하는지 확인하는 방어 코드 추가</span></span>
<span class="line"><span>2. user가 없으면 로그인 페이지로 리다이렉트</span></span>
<span class="line"><span>3. 친절한 오류 메시지 추가</span></span></code></pre></div><p><strong>5단계: 수정 검증</strong> (직접 수행)</p><ul><li>원래 단계로 이슈를 재현하여 문제가 해결되었는지 확인</li><li>관련 기능을 테스트하여 새로운 문제가 발생하지 않았는지 확인</li><li>다른 곳에도 유사한 문제가 있는지 생각</li></ul><p><strong>실제 대화 예시:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>여러분: 사용자가 로그인한 후 페이지를 새로고침하면 로그아웃된다고 보고했어요</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI: 이것은 보통 토큰 저장이나 검증 문제입니다. 다음을 확인하겠습니다:</span></span>
<span class="line"><span>    1. 토큰이 어디에 저장되어 있는지, localStorage인지 cookies인지?</span></span>
<span class="line"><span>    2. 페이지 새로고침 시 토큰이 다시 로드되는지?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    토큰 관련 코드가 어떤 파일에 있는지 알려주세요</span></span>
<span class="line"><span></span></span>
<span class="line"><span>여러분: utils/auth.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI: [utils/auth.js 분석]</span></span>
<span class="line"><span>    문제를 찾았습니다: 토큰이 sessionStorage에 저장되어 있는데,</span></span>
<span class="line"><span>    sessionStorage는 페이지가 새로고침되면 초기화됩니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    해결 방법: localStorage로 변경</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    변경할까요?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>여러분: 네, 변경해주세요</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI: [코드 수정]</span></span>
<span class="line"><span>    변경이 완료되었습니다. 이제 토큰이 localStorage에 저장되므로</span></span>
<span class="line"><span>    페이지 새로고침 후에도 유지됩니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    다음을 테스트하는 것이 좋습니다:</span></span>
<span class="line"><span>    1. 로그인 후 페이지를 새로고침하여 로그인 상태가 유지되는지 확인</span></span>
<span class="line"><span>    2. 브라우저를 닫았다가 다시 열어 로그인 상태가 유지되는지 확인</span></span></code></pre></div><h2 id="_3-3-코드-리팩토링" tabindex="-1">3.3 코드 리팩토링 <a class="header-anchor" href="#_3-3-코드-리팩토링" aria-label="Permalink to “3.3 코드 리팩토링”">​</a></h2><p><strong>시나리오:</strong> 코드가 유지보수하기 어려워져서, 코드 품질을 향상시키기 위해 리팩토링이 필요합니다.</p><p><strong>전체 워크플로우:</strong></p><p><strong>1단계: 리팩토링 목표 정의</strong> (직접 수행)</p><p>다음을 명확히 합니다:</p><ul><li>해결하려는 문제는 무엇인가? (중복 코드? 복잡한 구조? 성능 문제?)</li><li>리팩토링 범위는 어느 정도인가?</li><li>허용 가능한 위험 수준은 무엇인가?</li></ul><p><strong>2단계: 리팩토링 계획 수립</strong> (AI와 함께)</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이 세 가지 함수(getUserList, getArticleList, getCommentList)에는</span></span>
<span class="line"><span>페이지네이션, 정렬, 필터링에 관한 중복 코드가 많이 있습니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>다음을 도와주세요:</span></span>
<span class="line"><span>1. 중복 부분 분석</span></span>
<span class="line"><span>2. 리팩토링 계획 제안</span></span>
<span class="line"><span>3. 리팩토링의 위험 평가</span></span></code></pre></div><p><strong>3단계: 안전망 준비</strong> (AI에게 도움 요청)</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>리팩토링하기 전에 먼저 테스트 케이스를 작성해주세요</span></span>
<span class="line"><span>리팩토링 후에도 동작이 동일하게 유지되도록</span></span></code></pre></div><p><strong>4단계: 단계별 리팩토링</strong> (AI가 실행, 여러분이 검증)</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>방금 논의한 계획에 따라 먼저 공유 함수를 추출해주세요</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이제 데이터 구조를 최적화해주세요</span></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>마지막으로 호출 부분을 업데이트해주세요</span></span></code></pre></div><p><strong>5단계: 결과 검증</strong> (직접 수행)</p><ul><li>모든 테스트를 실행하고 통과하는지 확인</li><li>주요 기능을 수동으로 테스트</li><li>코드 품질이 향상되었는지 확인</li></ul><p><strong>실제 대화 예시:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>여러분: 이 세 가지 함수에 중복 코드가 많아요. 리팩토링을 도와주시겠어요?</span></span>
<span class="line"><span>    [세 함수의 코드를 붙여넣기]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI: 분석 결과, 주요 차이점은:</span></span>
<span class="line"><span>    - getUserList: 사용자 목록 조회</span></span>
<span class="line"><span>    - getArticleList: 기사 목록 조회</span></span>
<span class="line"><span>    - getCommentList: 댓글 목록 조회</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    공통 로직은 페이지네이션, 정렬, 필터링입니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    리팩토링 계획:</span></span>
<span class="line"><span>    1. 범용 getList 함수 추출</span></span>
<span class="line"><span>    2. 다른 부분은 매개변수로 전달</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    이렇게 하면 80%의 중복 코드를 줄일 수 있습니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    구현할까요?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>여러분: 네, 그런데 먼저 테스트 케이스를 작성해주세요</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI: [테스트 생성]</span></span>
<span class="line"><span>    세 함수 모두에 대한 테스트를 작성했습니다,</span></span>
<span class="line"><span>    주요 사용 사례를 모두 다루고 있습니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    이제 리팩토링을 시작해도 될까요?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>여러분: 네, 리팩토링을 시작해주세요</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI: [코드 리팩토링]</span></span>
<span class="line"><span>    리팩토링이 완료되었습니다. 범용 getList 함수를 생성했고,</span></span>
<span class="line"><span>    기존 세 함수는 모두 이 공유 함수를 호출합니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    모든 것이 정상 작동하는지 테스트를 실행해주세요: npm test</span></span></code></pre></div><h2 id="_3-4-코드-리뷰" tabindex="-1">3.4 코드 리뷰 <a class="header-anchor" href="#_3-4-코드-리뷰" aria-label="Permalink to “3.4 코드 리뷰”">​</a></h2><p><strong>시나리오:</strong> 팀원이 코드를 제출했고, 리뷰해야 합니다.</p><p><strong>전체 워크플로우:</strong></p><p><strong>1단계: 변경 사항 빠르게 이해</strong> (AI에게 도움 요청)</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이 PR이 변경한 내용을 요약해주세요</span></span>
<span class="line"><span>주로 수정된 파일은 무엇인가요</span></span></code></pre></div><p><strong>2단계: 일반적인 문제 확인</strong> (AI에게 도움 요청)</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이 변경 사항에서 다음을 확인해주세요:</span></span>
<span class="line"><span>1. 보안 문제 (SQL 인젝션, XSS 등)</span></span>
<span class="line"><span>2. 성능 문제 (N+1 쿼리, 메모리 누수 등)</span></span>
<span class="line"><span>3. 명백한 버그</span></span>
<span class="line"><span>4. 코딩 스타일이 프로젝트 규칙을 따르는지</span></span></code></pre></div><p><strong>3단계: 심층 리뷰</strong> (직접 수행)</p><ul><li>비즈니스 로직이 올바른지</li><li>엣지 케이스가 고려되었는지</li><li>더 나은 구현 방법이 있는지</li><li>테스트를 추가해야 하는지</li></ul><p><strong>4단계: 피드백 제공</strong> (직접 수행)</p><ul><li>변경이 필요한 부분 지적</li><li>왜 변경해야 하는지 설명</li><li>개선 제안 제공</li></ul><p><strong>실제 대화 예시:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>여러분: 이 PR을 리뷰해주세요</span></span>
<span class="line"><span>    [PR 링크 또는 코드 제공]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI: 변경 사항을 리뷰한 결과 다음 문제를 발견했습니다:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    1. 보안 문제:</span></span>
<span class="line"><span>       - 23번째 줄: 사용자 입력이 이스케이프되지 않아 XSS 위험이 있을 수 있음</span></span>
<span class="line"><span>       - 45번째 줄: SQL 쿼리가 문자열 연결로 구성되어 인젝션 위험이 있음</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    2. 성능 문제:</span></span>
<span class="line"><span>       - 67번째 줄: 루프 내에서 데이터베이스를 조회하여 N+1 문제 발생</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    3. 코드 품질:</span></span>
<span class="line"><span>       - handleSubmit 함수가 너무 김 (200줄); 분할 고려</span></span>
<span class="line"><span>       - 오류 처리가 누락됨</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    이 중 어떤 것을 자세히 설명해 드릴까요?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>여러분: SQL 인젝션 문제를 자세히 설명해주세요</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI: 45번째 줄에서:</span></span>
<span class="line"><span>    \`\`\`javascript</span></span>
<span class="line"><span>    const query = \`SELECT * FROM users WHERE name = &#39;\${userName}&#39;\`;</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    이 코드는 사용자 입력을 SQL 문에 직접 연결합니다.</span></span>
<span class="line"><span>    사용자가 \`&#39; OR &#39;1&#39;=&#39;1\`을 입력하면 다음과 같이 됩니다:</span></span>
<span class="line"><span>    \`\`\`sql</span></span>
<span class="line"><span>    SELECT * FROM users WHERE name = &#39;&#39; OR &#39;1&#39;=&#39;1&#39;</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span>    이렇게 되면 모든 사용자 데이터가 반환됩니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    올바른 방법은 매개변수화된 쿼리를 사용하는 것입니다:</span></span>
<span class="line"><span>    \`\`\`javascript</span></span>
<span class="line"><span>    const query = &#39;SELECT * FROM users WHERE name = ?&#39;;</span></span>
<span class="line"><span>    db.query(query, [userName]);</span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    수정할까요?</span></span></code></pre></div><h1 id="_4-프로젝트-지식-베이스-구축" tabindex="-1">4. 프로젝트 지식 베이스 구축 <a class="header-anchor" href="#_4-프로젝트-지식-베이스-구축" aria-label="Permalink to “4. 프로젝트 지식 베이스 구축”">​</a></h1><p>AI가 프로젝트를 더 잘 이해할 수 있도록 프로젝트 내에 지식 베이스를 구축하는 것이 좋습니다. 그러면 AI가 여러분의 규칙과 습관에 따라 작업할 수 있습니다.</p><h2 id="_4-1-프로젝트-설명-파일-만들기" tabindex="-1">4.1 프로젝트 설명 파일 만들기 <a class="header-anchor" href="#_4-1-프로젝트-설명-파일-만들기" aria-label="Permalink to “4.1 프로젝트 설명 파일 만들기”">​</a></h2><p>프로젝트 루트에 <code>CLAUDE.md</code> 또는 <code>AGENTS.md</code> 파일을 생성하여 핵심 프로젝트 정보를 기록합니다:</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 프로젝트 개요</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 프로젝트 요약</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">이것은 온라인 학습 플랫폼으로, 강의 관리, 사용자 학습, 과제 제출 등의 기능을 제공합니다.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 기술 스택</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 프론트엔드: React 18 + TypeScript + Vite</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 백엔드: Node.js + Express + PostgreSQL</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 배포: Vercel (프론트엔드) + Railway (백엔드)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 프로젝트 구조</span></span></code></pre></div><p>src/ ├── components/ # React 컴포넌트 ├── pages/ # 페이지 컴포넌트 ├── api/ # API 호출 ├── utils/ # 유틸리티 함수 └── types/ # TypeScript 타입 정의</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>## 코드 규칙</span></span>
<span class="line"><span>- ESLint와 Prettier를 사용하여 코드 포맷팅</span></span>
<span class="line"><span>- 컴포넌트 파일은 PascalCase 사용 (예: UserProfile.tsx)</span></span>
<span class="line"><span>- 유틸리티 함수는 camelCase 사용 (예: formatDate.ts)</span></span>
<span class="line"><span>- 상수는 UPPER_SNAKE_CASE 사용 (예: API_BASE_URL)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 개발 흐름</span></span>
<span class="line"><span>1. main 브랜치에서 기능 브랜치 생성</span></span>
<span class="line"><span>2. 개발 완료 후 PR 제출</span></span>
<span class="line"><span>3. 코드 리뷰 통과 후 병합</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 일반적인 작업</span></span>
<span class="line"><span>- 개발 서버 시작: \`npm run dev\`</span></span>
<span class="line"><span>- 테스트 실행: \`npm test\`</span></span>
<span class="line"><span>- 프로덕션 빌드: \`npm run build\`</span></span>
<span class="line"><span>- 코드 포맷팅: \`npm run format\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 주의 사항</span></span>
<span class="line"><span>- 모든 API 호출에는 오류 처리가 포함되어야 함</span></span>
<span class="line"><span>- 사용자 입력은 반드시 검증 및 이스케이프되어야 함</span></span>
<span class="line"><span>- 데이터베이스 작업에는 매개변수화된 쿼리를 사용하여 SQL 인젝션 방지</span></span>
<span class="line"><span>- 민감한 정보(비밀번호, 토큰)는 로그에 기록하지 않음</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 데이터베이스 스키마</span></span>
<span class="line"><span>- users: 사용자 테이블 (id, email, password_hash, created_at)</span></span>
<span class="line"><span>- courses: 강의 테이블 (id, title, description, teacher_id)</span></span>
<span class="line"><span>- enrollments: 수강 테이블 (id, user_id, course_id, enrolled_at)</span></span></code></pre></div><h2 id="_4-2-일반적인-문제와-해결-방법-기록" tabindex="-1">4.2 일반적인 문제와 해결 방법 기록 <a class="header-anchor" href="#_4-2-일반적인-문제와-해결-방법-기록" aria-label="Permalink to “4.2 일반적인 문제와 해결 방법 기록”">​</a></h2><p>프로젝트에 <code>docs/troubleshooting.md</code>를 생성하여 일반적인 문제를 기록합니다:</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 일반적인 문제</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 개발 환경 문제</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 문제: npm install 실패</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**원인:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Node 버전이 호환되지 않음</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**해결 방법:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Node.js 18 이상 사용</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 문제: 데이터베이스 연결 실패</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**원인:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 환경 변수가 구성되지 않음</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**해결 방법:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .env.example을 .env로 복사하고 데이터베이스 연결 정보 입력</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 기능 문제</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 문제: 사용자가 로그인한 후 페이지를 새로고침하면 로그아웃됨</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**원인:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 토큰이 sessionStorage에 저장됨</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**해결 방법:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localStorage로 변경</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 문제: 이미지 업로드 실패</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**원인:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 파일 크기가 제한을 초과함</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**해결 방법:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 프론트엔드에서 파일 크기 확인을 추가하고 5MB로 제한</span></span></code></pre></div><h2 id="_4-3-기술-결정-기록-유지" tabindex="-1">4.3 기술 결정 기록 유지 <a class="header-anchor" href="#_4-3-기술-결정-기록-유지" aria-label="Permalink to “4.3 기술 결정 기록 유지”">​</a></h2><p><code>docs/decisions/</code> 디렉토리를 생성하여 중요한 기술 결정을 기록합니다:</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># ADR-001: PostgreSQL을 데이터베이스로 선택</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 상태</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">수락됨</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 배경</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">프로젝트에 관계형 데이터베이스를 선택해야 함. 후보는 MySQL과 PostgreSQL.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 결정</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PostgreSQL 선택</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 이유</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 더 나은 JSON 지원, 강의 콘텐츠 저장에 적합</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 더 강력한 전문 검색</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 팀이 PostgreSQL에 더 익숙함</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 결과</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PostgreSQL 고유의 기능을 학습해야 함</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 배포에 PostgreSQL 환경 필요</span></span></code></pre></div><h1 id="_5-ai-협업-효율-향상-기법" tabindex="-1">5. AI 협업 효율 향상 기법 <a class="header-anchor" href="#_5-ai-협업-효율-향상-기법" aria-label="Permalink to “5. AI 협업 효율 향상 기법”">​</a></h1><p>몇 가지 실용적인 기법을 마스터하면 AI와의 협업을 더욱 효율적으로 만들 수 있습니다.</p><h2 id="_5-1-문제를-명확하고-구체적으로-설명하기" tabindex="-1">5.1 문제를 명확하고 구체적으로 설명하기 <a class="header-anchor" href="#_5-1-문제를-명확하고-구체적으로-설명하기" aria-label="Permalink to “5.1 문제를 명확하고 구체적으로 설명하기”">​</a></h2><p><strong>나쁜 설명:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이 기능에 문제가 있어요</span></span>
<span class="line"><span>최적화해주세요</span></span></code></pre></div><p><strong>좋은 설명:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>사용자가 &quot;제출&quot; 버튼을 클릭한 후 폼이 제출되지 않음</span></span>
<span class="line"><span>브라우저 콘솔 오류: Uncaught TypeError: Cannot read property &#39;value&#39; of null</span></span>
<span class="line"><span>오류는 form.js의 23번째 줄에서 발생</span></span>
<span class="line"><span></span></span>
<span class="line"><span>이 목록이 매우 느리게 로드되고 1000개의 항목이 있음</span></span>
<span class="line"><span>페이지당 20개 항목으로 페이지네이션을 추가해주세요</span></span></code></pre></div><p><strong>핵심 포인트:</strong></p><ul><li>구체적인 오류 정보 제공</li><li>예상 결과 설명</li><li>관련 컨텍스트 제공</li></ul><h2 id="_5-2-한-번에-한-가지씩만-하기" tabindex="-1">5.2 한 번에 한 가지씩만 하기 <a class="header-anchor" href="#_5-2-한-번에-한-가지씩만-하기" aria-label="Permalink to “5.2 한 번에 한 가지씩만 하기”">​</a></h2><p><strong>나쁜 접근:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>로그인, 회원가입, 비밀번호 찾기, 프로필 센터,</span></span>
<span class="line"><span>비밀번호 변경, 이메일 인증을 모두 구현해주세요</span></span></code></pre></div><p><strong>좋은 접근:</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>먼저 로그인 기능을 구현해주세요. 요구 사항:</span></span>
<span class="line"><span>- 이메일과 비밀번호로 로그인</span></span>
<span class="line"><span>- 로그인 상태 유지</span></span>
<span class="line"><span>- 오류 메시지</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(완료 후) 이제 회원가입 기능을 구현해주세요</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(완료 후) 이제 비밀번호 찾기 기능을 구현해주세요</span></span></code></pre></div><p><strong>핵심 포인트:</strong></p><ul><li>큰 작업을 작은 작업으로 분할</li><li>각 작업이 완료될 때마다 테스트 및 검증</li><li>문제가 없는지 확인한 후 다음으로 이동</li></ul><h2 id="_5-3-결과를-즉시-검증하기" tabindex="-1">5.3 결과를 즉시 검증하기 <a class="header-anchor" href="#_5-3-결과를-즉시-검증하기" aria-label="Permalink to “5.3 결과를 즉시 검증하기”">​</a></h2><p><strong>나쁜 접근:</strong></p><ul><li>AI가 10개의 파일을 연속으로 수정하게 함</li><li>마지막에 첫 번째 변경이 이미 잘못되었다는 것을 발견</li><li>많은 시간 낭비</li></ul><p><strong>좋은 접근:</strong></p><ul><li>하나의 파일을 수정하고 즉시 테스트</li><li>문제가 없는지 확인한 후 계속 진행</li><li>문제가 발견되면 즉시 수정</li></ul><p><strong>핵심 포인트:</strong></p><ul><li>작은 단계로 이동하고 빠른 피드백 받기</li><li>AI를 맹목적으로 신뢰하지 않기</li><li>코드에 대한 통제력 유지</li></ul><h2 id="_5-4-컨텍스트-잘-활용하기" tabindex="-1">5.4 컨텍스트 잘 활용하기 <a class="header-anchor" href="#_5-4-컨텍스트-잘-활용하기" aria-label="Permalink to “5.4 컨텍스트 잘 활용하기”">​</a></h2><p><strong>기법 1: 이전 대화 참조</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>방금 논의한 계획에 따라 구현해주세요</span></span>
<span class="line"><span>이전의 getUserList 함수를 참고해주세요</span></span></code></pre></div><p><strong>기법 2: 관련 코드 제공</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>기존 사용자 모델 코드입니다:</span></span>
<span class="line"><span>[코드 붙여넣기]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>동일한 스타일로 기사 모델을 구현해주세요</span></span></code></pre></div><p><strong>기법 3: 프로젝트 배경 설명</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이것은 React + Node.js를 사용하는 전자상거래 프로젝트입니다</span></span>
<span class="line"><span>이미 사용자 시스템과 제품 시스템이 있습니다</span></span>
<span class="line"><span>이제 장바구니 기능을 추가해야 합니다</span></span></code></pre></div><h2 id="_5-5-유용한-대화-저장하기" tabindex="-1">5.5 유용한 대화 저장하기 <a class="header-anchor" href="#_5-5-유용한-대화-저장하기" aria-label="Permalink to “5.5 유용한 대화 저장하기”">​</a></h2><p><strong>시나리오:</strong> 복잡한 문제를 해결했을 때</p><p><strong>방법:</strong></p><ol><li>프로젝트 문서에 해결 방법 기록</li><li>다음에 유사한 문제가 나타나면 참조</li><li>다른 팀원과 공유</li></ol><p><strong>예시:</strong></p><p><code>docs/solutions/</code> 아래에 문서를 생성합니다:</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># N+1 쿼리 문제 해결</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 문제 설명</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">기사 목록을 조회할 때, 각 기사마다 작성자 정보를 한 번씩 조회하여</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">성능 문제가 발생함.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 해결 방법</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">JOIN 쿼리를 사용하여 모든 데이터를 한 번에 조회:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`sql</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> articles.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> author_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> articles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LEFT JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> articles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">author_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span></span></code></pre></div><p><strong>결과:</strong> 쿼리 시간이 2000ms에서 50ms로 감소</p><h2 id="_5-6-질문하는-기술-배우기" tabindex="-1">5.6 질문하는 기술 배우기 <a class="header-anchor" href="#_5-6-질문하는-기술-배우기" aria-label="Permalink to “5.6 질문하는 기술 배우기”">​</a></h2><p><strong>기법 1: 먼저 &quot;왜&quot;라고 묻기</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이 코드가 왜 메모리 누수를 일으키나요?</span></span>
<span class="line"><span>일반 함수 대신 useCallback을 사용해야 하는 이유는 무엇인가요?</span></span></code></pre></div><p><strong>기법 2: 여러 옵션 요청하기</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>사용자 인증을 구현하는 다른 방법은 무엇인가요?</span></span>
<span class="line"><span>각각의 장단점은 무엇인가요?</span></span></code></pre></div><p><strong>기법 3: 설명 요청하기</strong></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>이 코드는 어떻게 작동하나요?</span></span>
<span class="line"><span>이 알고리즘을 자세히 설명해 주시겠어요?</span></span></code></pre></div><h1 id="_6-자주-묻는-질문" tabindex="-1">6. 자주 묻는 질문 <a class="header-anchor" href="#_6-자주-묻는-질문" aria-label="Permalink to “6. 자주 묻는 질문”">​</a></h1><h2 id="q1-ai가-생성한-코드를-바로-사용할-수-있나요" tabindex="-1">Q1: AI가 생성한 코드를 바로 사용할 수 있나요? <a class="header-anchor" href="#q1-ai가-생성한-코드를-바로-사용할-수-있나요" aria-label="Permalink to “Q1: AI가 생성한 코드를 바로 사용할 수 있나요?”">​</a></h2><p><strong>A:</strong> 아니요, 바로 사용할 수 없습니다. 검토와 테스트가 필요합니다.</p><p>AI가 생성한 코드에는 다음과 같은 문제가 있을 수 있습니다:</p><ul><li>논리적 오류나 엣지 케이스 처리 부족</li><li>프로젝트의 코딩 규칙과 일치하지 않음</li><li>보안 위험</li><li>충분한 성능 최적화가 되지 않음</li></ul><p>여러분이 해야 할 일:</p><ul><li>생성된 코드를 주의 깊게 읽기</li><li>그 논리를 이해하기</li><li>다양한 시나리오를 테스트</li><li>프로젝트 규칙을 따르는지 확인</li></ul><h2 id="q2-ai가-내-의도를-오해하면-어떻게-하죠" tabindex="-1">Q2: AI가 내 의도를 오해하면 어떻게 하죠? <a class="header-anchor" href="#q2-ai가-내-의도를-오해하면-어떻게-하죠" aria-label="Permalink to “Q2: AI가 내 의도를 오해하면 어떻게 하죠?”">​</a></h2><p><strong>A:</strong> 즉시 수정하고 요구 사항을 다시 설명하세요.</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>그게 아니라 제가 의미한 것은...</span></span>
<span class="line"><span>이 이해는 잘못되었습니다. 올바른 것은...</span></span>
<span class="line"><span>요구 사항을 다시 설명하겠습니다...</span></span></code></pre></div><p>여러 번 수정한 후에도 여전히 틀리다면:</p><ul><li>더 많은 컨텍스트 제공</li><li>구체적인 코드 예시 제공</li><li>작업을 더 작은 단위로 분할</li></ul><h2 id="q3-ai가-해결할-수-없는-문제를-만나면-어떻게-하죠" tabindex="-1">Q3: AI가 해결할 수 없는 문제를 만나면 어떻게 하죠? <a class="header-anchor" href="#q3-ai가-해결할-수-없는-문제를-만나면-어떻게-하죠" aria-label="Permalink to “Q3: AI가 해결할 수 없는 문제를 만나면 어떻게 하죠?”">​</a></h2><p><strong>A:</strong> AI가 모든 것을 할 수 있는 것은 아닙니다. 일부 문제는 여전히 직접 해결해야 합니다.</p><p>AI가 해결하지 못할 수 있는 문제:</p><ul><li>매우 새로운 기술 (AI의 지식에는 기준일이 있음)</li><li>팀에 고유한 비즈니스 로직</li><li>외부 시스템에 접근해야 하는 문제</li><li>복잡한 성능 최적화 문제</li></ul><p>그럴 때는:</p><ul><li>공식 문서 읽기</li><li>관련 해결 방법 검색</li><li>경험 많은 팀원에게 묻기</li><li>커뮤니티에 질문하기</li></ul><h2 id="q4-ai의-제안이-합리적인지-어떻게-판단하나요" tabindex="-1">Q4: AI의 제안이 합리적인지 어떻게 판단하나요? <a class="header-anchor" href="#q4-ai의-제안이-합리적인지-어떻게-판단하나요" aria-label="Permalink to “Q4: AI의 제안이 합리적인지 어떻게 판단하나요?”">​</a></h2><p><strong>A:</strong> 자신의 경험과 지식을 사용하여 판단하세요.</p><p>평가 기준:</p><ul><li>모범 사례를 따르는지</li><li>엣지 케이스를 고려했는지</li><li>잠재적인 보안 위험이 있는지</li><li>프로젝트의 기술 스택에 적합한지</li><li>성능이 수용 가능한지</li></ul><p>확실하지 않다면:</p><ul><li>AI에게 왜 그 접근 방식을 제안하는지 설명해달라고 요청</li><li>대안적인 해결 방법 요청</li><li>팀원과 상의</li></ul><h2 id="q5-팀에서-ai를-어떻게-협업하여-사용해야-하나요" tabindex="-1">Q5: 팀에서 AI를 어떻게 협업하여 사용해야 하나요? <a class="header-anchor" href="#q5-팀에서-ai를-어떻게-협업하여-사용해야-하나요" aria-label="Permalink to “Q5: 팀에서 AI를 어떻게 협업하여 사용해야 하나요?”">​</a></h2><p><strong>A:</strong> 공유 규칙과 공유 지식 베이스를 구축하세요.</p><p>팀 협업 권장 사항:</p><ul><li>프로젝트의 <code>CLAUDE.md</code> 구성 공유</li><li>코드 규칙과 스타일 통일</li><li>일반적인 문제의 해결 방법 기록</li><li>유용한 프롬프트를 정기적으로 공유</li><li>코드 리뷰 시 AI가 생성한 코드 확인</li></ul><h2 id="q6-ai에-과도하게-의존하지-않으려면-어떻게-해야-하나요" tabindex="-1">Q6: AI에 과도하게 의존하지 않으려면 어떻게 해야 하나요? <a class="header-anchor" href="#q6-ai에-과도하게-의존하지-않으려면-어떻게-해야-하나요" aria-label="Permalink to “Q6: AI에 과도하게 의존하지 않으려면 어떻게 해야 하나요?”">​</a></h2><p><strong>A:</strong> 계속 학습하고 사고하세요. AI는 조수이지 대체재가 아닙니다.</p><p>권장 사항:</p><ul><li>AI가 생성한 코드를 맹목적으로 복사하지 말고 이해하기</li><li>모르는 개념을 적극적으로 학습</li><li>정기적으로 기초 지식 복습</li><li>먼저 직접 문제를 해결하려고 시도한 다음 AI를 사용하여 검증</li><li>코드 리뷰에 참여하여 다른 사람의 경험 학습</li></ul><h1 id="_7-요약" tabindex="-1">7. 요약 <a class="header-anchor" href="#_7-요약" aria-label="Permalink to “7. 요약”">​</a></h1><p>이 장을 통해 다음을 마스터했습니다:</p><ol><li><strong>AI의 능력 경계</strong>: AI가 잘하는 것과 못하는 것을 이해하고, 올바른 협업 모델을 구축</li><li><strong>프로젝트 유형별 전략</strong>: 완전히 새로운 프로젝트, 성숙한 프로젝트, 빠른 프로토타입, 유지보수 프로젝트에 따른 다양한 개발 전략</li><li><strong>일반적인 업무 워크플로우</strong>: 새로운 기능 개발, 버그 수정, 코드 리팩토링, 코드 리뷰를 위한 전체 워크플로우</li><li><strong>프로젝트 지식 베이스</strong>: 프로젝트 문서를 구축하여 AI가 프로젝트를 더 잘 이해하도록 하는 방법</li><li><strong>협업 기법</strong>: AI 협업 효율을 높이는 실용적인 방법</li></ol><p><strong>핵심 교훈:</strong></p><ul><li><strong>명확한 역할 분담</strong>: 여러분이 결정하고 품질을 보장하고, AI가 실행과 보조를 담당</li><li><strong>명확한 의사소통</strong>: 구체적으로 말하고 한 번에 한 가지씩 하기</li><li><strong>즉시 검증</strong>: 맹목적으로 신뢰하지 말고 테스트하고 검증하기</li><li><strong>계속 학습</strong>: AI의 능력 경계를 이해하고 협업 모델을 지속적으로 개선</li></ul><p>기억하세요: AI는 도구이지 대체재가 아닙니다. AI는 여러분을 더 효율적으로 만들 수 있지만, 최종 코드 품질은 여전히 여러분의 판단에 달려 있습니다. 간단한 작업부터 시작하여 점진적으로 신뢰를 구축하세요. AI가 많은 시간을 절약해 주고, 더 가치 있는 작업에 집중할 수 있게 해준다는 것을 발견하게 될 것입니다.</p><div class="tip custom-block"><p class="custom-block-title">💡 다음 단계</p><p>다음 장에서는 AI를 사용한 코드 리뷰와 품질 보장을 통해 코드의 유지보수성과 보안을 보장하는 방법을 배우겠습니다.</p></div>`,236)])])}const k=a(p,[["render",e]]);export{d as __pageData,k as default};
