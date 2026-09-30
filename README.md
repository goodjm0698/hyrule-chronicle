# 시간을 건너, 너에게

《젤다의 전설 브레스 오브 더 와일드》(BOTW)와 《젤다의 전설 티어스 오브 더 킹덤》(TOTK)에 등장하는 젤다와 링크의 관계를 소개하는 한국어 팬 아카이브입니다.

## 구성

- 공식 하이랄 키 비주얼과 두 캐릭터 소개
- BOTW / TOTK 각각 4개, 총 8개의 기억
- 개별 스포일러 열기·다시 가리기, 전체 허용 스위치
- 게임 속 사건과 서사 해석을 구분한 관계 해설
- 원문 자료와 이미지 출처
- 모바일 화면, 키보드 조작, 움직임 줄이기 환경 지원

HTML, CSS, JavaScript로 만들었으며 npm 의존성, 데이터베이스, API 키가 없습니다. 화면에 사용할 이미지도 프로젝트에 포함되어 있습니다. 글꼴은 Google Fonts를 사용하며, 접속할 수 없으면 시스템 기본 글꼴로 표시됩니다.

## 내 컴퓨터에서 보기

Node.js가 설치된 상태에서 이 폴더를 터미널로 열고 실행합니다.

```sh
npm run dev
```

브라우저에서 http://127.0.0.1:3000 을 엽니다. 별도의 `npm install`은 필요하지 않습니다. 서버를 끄려면 터미널에서 Ctrl+C를 누릅니다.

## 파일 안내

```text
public/
  index.html       페이지 구조와 고정 본문
  styles.css       색상·레이아웃·모바일 디자인
  app.js           8개 기억의 내용과 버튼 동작
  assets/          Nintendo 공식 이미지 3개
server.mjs         로컬 미리보기 전용 서버
vercel.json        Vercel 정적 배포 설정
DESIGN.md          디자인과 상호작용 요약
```

## GitHub와 Vercel 배포

Vercel에 배포할 수 있는 정적 웹사이트입니다. 현재 Vercel 배포와 과제 공유 페이지 등록은 아직 진행하지 않았습니다.

1. 이 폴더의 내용을 GitHub의 **퍼블릭 저장소**에 올립니다. `public`, `package.json`, `vercel.json` 등이 저장소의 최상위에 있어야 합니다.
2. Vercel에서 해당 저장소를 Import 합니다.
3. Framework Preset은 **Other**, Output Directory는 **public**로 설정합니다. 빌드 명령은 필요하지 않습니다. 출력 폴더는 `vercel.json`에도 지정돼 있습니다.
4. 배포 후 프로젝트의 프로덕션 주소를 확인합니다.
5. 로그인하지 않은 브라우저에서도 페이지가 열리는지 확인합니다.

문서: [Vercel 정적 사이트 빌드](https://vercel.com/docs/builds), [설정 파일](https://vercel.com/docs/project-configuration/vercel-json).

## 대체과제 제출

[공식 과제 안내](https://gdg-vibecoding.vercel.app/assignment/)의 2026-09-30 확인 내용: 다른 주제 허용, GitHub 퍼블릭 저장소, 누구나 로그인 없이 열리는 Vercel 배포 주소, 결과물 공유 페이지 등록이 필요합니다.

공유 페이지 설명 예시:

> [대체과제] BOTW·TOTK 속 젤다와 링크의 관계를 기억의 조각으로 읽는 팬 아카이브

공유 페이지에는 본인 실명과 배포 주소를 입력합니다. 과제 안내에 따르면 등록 후 직접 수정·삭제할 수 없으므로 이름과 최종 주소를 확인한 뒤 제출합니다.

## 출처

- BOTW 키 비주얼: https://www.nintendo.com/jp/zelda/botw/assets/img/top/top_visual.jpg
- 링크 일러스트: https://www.nintendo.com/jp/zelda/totk/assets/img/character/chara_link.webp
- 젤다 일러스트: https://www.nintendo.com/jp/zelda/totk/assets/img/character/chara_zelda.webp
- 공식 이미지 페이지: https://www.nintendo.com/jp/zelda/totk/character/index.html
- 이야기 대조 자료: Zelda Wiki의 Zelda's Diary, Memory, Light Dragon 문서. 실제 링크는 페이지 내 출처에 있습니다.

게임 이미지 및 캐릭터 © Nintendo. 비공식 팬 프로젝트이며 Nintendo의 공식 페이지가 아닙니다. 해설은 게임 대사의 직접 인용이 아닌 요약과 해석입니다. 제3자 이미지의 권리는 각 권리자에게 있습니다.
