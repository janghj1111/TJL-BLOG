# 개발 블로그

## 블로그 주소

https://janghj1111.github.io/TJL-BLOG/

## 목적

- 오류와 해결한 과정을 기록합니다.
- 회사 개발하면서 얻은 인사이트를 기록합니다.
- 그 외, 공부한 것들을 기록합니다.

## install 

```bash
npm install
npm install @vuepress/theme-default@next @vuepress/bundler-vite@next
npm install -D sass sass-loader
```

## run

```bash
npm run docs:dev
```




# github pages 배포

build 후 만들어진 정적파일 dist 폴더로 갑니다. 

```bash
npm run docs:build
```

기존 레포지토리를 사용하면서 gh-pages 브랜치를 새로 만듭니다.


1. 먼저 gh-pages 브랜치 생성 및 dist 폴더 내용 푸시:
```bash
# dist 폴더로 이동
cd docs/.vuepress/dist

# git 초기화
git init

# 모든 파일 추가
git add -A

# 커밋
git commit -m "deploy"

# gh-pages 브랜치로 푸시
# 아래 USERNAME과 REPO는 본인의 깃허브 사용자명과 레포지토리명으로 변경해주세요
git push -f git@github.com:USERNAME/REPO.git main:gh-pages
```

2. GitHub 레포지토리 설정:
   - GitHub 레포지토리 페이지 접속
   - Settings > Pages 메뉴로 이동
   - Source에서 'Deploy from a branch' 선택
   - Branch를 'gh-pages'로 선택하고 Save

3. 배포 자동화를 원하신다면 이전에 보여드린 GitHub Actions workflow를 사용하시면 됩니다.


# Git SSH 키 생성 

만약 SSH키 발급을 못받았다면 GitHub에 SSH 키가 설정되어 있지 않아서 발생하는 문제가 생길 수도 있습니다.
다음 순서대로 GitHub에 SSH 키를 등록해야 합니다. 

1. SSH 키 생성 (키가 없는 경우):
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
(이메일은 GitHub 계정에 등록된 이메일을 사용하세요)

2. SSH 키 확인:
```bash
# Mac/Linux의 경우
cat ~/.ssh/id_ed25519.pub

# Windows의 경우
type %userprofile%\.ssh\id_ed25519.pub
```

3. GitHub에 SSH 키 등록:
   - GitHub.com 접속
   - 우측 상단 프로필 아이콘 클릭
   - Settings 선택
   - 왼쪽 메뉴에서 "SSH and GPG keys" 선택
   - "New SSH key" 버튼 클릭
   - Title에 원하는 이름 입력 (예: "My Laptop")
   - Key 필드에 위에서 확인한 공개키 내용 붙여넣기
   - "Add SSH key" 버튼 클릭

4. SSH 연결 테스트:
```bash
ssh -T git@github.com
```

이 과정을 완료한 후 다시 push를 시도해보세요:
```bash
git push -f git@github.com:janghj1111/TJL-BLOG.git master:gh-pages
```

이렇게 하면 정상적으로 푸시가 될 것입니다.

깃허브 새 ssh 생성 가이드 참고 : https://docs.github.com/ko/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent


# 자동화를 위한 GitHub Actions workflow


