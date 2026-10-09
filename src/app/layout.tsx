import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendardGov = localFont({
  src: "../../public/fonts/pretendard-gov/PretendardGOVVariable.woff2",
  weight: "45 920",
  style: "normal",
  variable: "--font-pretendard-gov",
  display: "swap",
  fallback: ["Malgun Gothic", "Dotum", "gulim", "Helvetica", "sans-serif"],
  adjustFontFallback: false,
});

const applicationName = "AI 보험 가입 도우미";
const applicationDescription =
  "보험 가입을 준비하는 사용자를 위한 AI 보험 상담 공간입니다.";
const shareImage = {
  url: "/images/social/insurance-assistant.png",
  width: 1200,
  height: 630,
  alt: "AI 보험 가입 도우미 — 상담원과 체크 표시를 감싸는 방패 로고",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  applicationName,
  title: applicationName,
  description: applicationDescription,
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: applicationName,
    title: applicationName,
    description: applicationDescription,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: applicationName,
    description: applicationDescription,
    images: [shareImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={pretendardGov.variable}>
      <body>{children}</body>
    </html>
  );
}
