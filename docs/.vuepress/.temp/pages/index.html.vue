<template><div><h1 id="개발-블로그" tabindex="-1"><a class="header-anchor" href="#개발-블로그"><span>개발 블로그</span></a></h1>
<h2 id="블로그-주소" tabindex="-1"><a class="header-anchor" href="#블로그-주소"><span>블로그 주소</span></a></h2>
<p>https://janghj1111.github.io/TJL-BLOG/</p>
<h2 id="목적" tabindex="-1"><a class="header-anchor" href="#목적"><span>목적</span></a></h2>
<ul>
<li>오류와 해결한 과정을 기록합니다.</li>
<li>회사 개발하면서 얻은 인사이트를 기록합니다.</li>
<li>그 외, 공부한 것들을 기록합니다.</li>
</ul>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>install</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> @vuepress/theme-default@next @vuepress/bundler-vite@next</span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> sass sass-loader</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="run" tabindex="-1"><a class="header-anchor" href="#run"><span>run</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="github-pages-배포" tabindex="-1"><a class="header-anchor" href="#github-pages-배포"><span>github pages 배포</span></a></h1>
<p>build 후 만들어진 정적파일 dist 폴더로 갑니다.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run docs:build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>기존 레포지토리를 사용하면서 gh-pages 브랜치를 새로 만듭니다.</p>
<ol>
<li>먼저 gh-pages 브랜치 생성 및 dist 폴더 내용 푸시:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># dist 폴더로 이동</span></span>
<span class="line"><span class="token builtin class-name">cd</span> docs/.vuepress/dist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># git 초기화</span></span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 모든 파일 추가</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 커밋</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"deploy"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># gh-pages 브랜치로 푸시</span></span>
<span class="line"><span class="token comment"># 아래 USERNAME과 REPO는 본인의 깃허브 사용자명과 레포지토리명으로 변경해주세요</span></span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:USERNAME/REPO.git main:gh-pages</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>GitHub 레포지토리 설정:</p>
<ul>
<li>GitHub 레포지토리 페이지 접속</li>
<li>Settings &gt; Pages 메뉴로 이동</li>
<li>Source에서 'Deploy from a branch' 선택</li>
<li>Branch를 'gh-pages'로 선택하고 Save</li>
</ul>
</li>
<li>
<p>배포 자동화를 원하신다면 이전에 보여드린 GitHub Actions workflow를 사용하시면 됩니다.</p>
</li>
</ol>
<h1 id="git-ssh-키-생성" tabindex="-1"><a class="header-anchor" href="#git-ssh-키-생성"><span>Git SSH 키 생성</span></a></h1>
<p>만약 SSH키 발급을 못받았다면 GitHub에 SSH 키가 설정되어 있지 않아서 발생하는 문제가 생길 수도 있습니다.
다음 순서대로 GitHub에 SSH 키를 등록해야 합니다.</p>
<ol>
<li>SSH 키 생성 (키가 없는 경우):</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-C</span> <span class="token string">"your_email@example.com"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>(이메일은 GitHub 계정에 등록된 이메일을 사용하세요)</p>
<ol start="2">
<li>SSH 키 확인:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># Mac/Linux의 경우</span></span>
<span class="line"><span class="token function">cat</span> ~/.ssh/id_ed25519.pub</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Windows의 경우</span></span>
<span class="line"><span class="token builtin class-name">type</span> %userprofile%<span class="token punctuation">\</span>.ssh<span class="token punctuation">\</span>id_ed25519.pub</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>GitHub에 SSH 키 등록:</p>
<ul>
<li>GitHub.com 접속</li>
<li>우측 상단 프로필 아이콘 클릭</li>
<li>Settings 선택</li>
<li>왼쪽 메뉴에서 &quot;SSH and GPG keys&quot; 선택</li>
<li>&quot;New SSH key&quot; 버튼 클릭</li>
<li>Title에 원하는 이름 입력 (예: &quot;My Laptop&quot;)</li>
<li>Key 필드에 위에서 확인한 공개키 내용 붙여넣기</li>
<li>&quot;Add SSH key&quot; 버튼 클릭</li>
</ul>
</li>
<li>
<p>SSH 연결 테스트:</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>이 과정을 완료한 후 다시 push를 시도해보세요:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:janghj1111/TJL-BLOG.git master:gh-pages</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>이렇게 하면 정상적으로 푸시가 될 것입니다.</p>
<p>깃허브 새 ssh 생성 가이드 참고 : https://docs.github.com/ko/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent</p>
<h1 id="자동화를-위한-github-actions-workflow" tabindex="-1"><a class="header-anchor" href="#자동화를-위한-github-actions-workflow"><span>자동화를 위한 GitHub Actions workflow</span></a></h1>
</div></template>


