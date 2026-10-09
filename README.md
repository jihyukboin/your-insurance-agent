# Your Insurance Agent

AI 보험 가입 도우미를 위한 Next.js 웹앱입니다. 현재는 크기 조절 가능한 반응형 상담 워크스페이스를 제공합니다.

## 기술 스택

Next.js · React · TypeScript · Tailwind CSS · react-resizable-panels

## 시작하기

```bash
git clone https://github.com/jihyukboin/your-insurance-agent.git
cd your-insurance-agent
npm ci
npm run dev
```

브라우저에서 [localhost:3000](http://localhost:3000)을 엽니다.

## 환경 변수

필요한 설정은 `.env.local`에 작성합니다.

| 변수 | 설명 | 기본값 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 공유 이미지 URL에 사용할 서비스 주소 | `http://localhost:3000` |

## 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 검사 |

## 기여

버그 제보와 기능 제안은 [Issues](https://github.com/jihyukboin/your-insurance-agent/issues), 코드 개선은 Pull Request로 보내 주세요.

## 폰트

[Pretendard GOV](https://github.com/orioncactus/pretendard/tree/main/packages/pretendard-gov)를 사용합니다. 폰트 라이선스는 [SIL Open Font License 1.1](public/fonts/pretendard-gov/LICENSE.txt)입니다.
