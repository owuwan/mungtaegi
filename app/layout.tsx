import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "뭉태기 | 부산 동래구 고깃집 — 아시아드대로 정육 직배 고기 전문",
  description: "부산 동래구 아시아드대로에 위치한 뭉태기는 정육시장에서 직접 품질을 확인하고 가져오는 신선한 고기를 제공합니다. 생갈비살, 등심, 특수부위 전문 고깃집으로 20~30대 젊은층이 즐겨 찾는 감성 인테리어 맛집입니다.",
  keywords: "부산 동래구 고깃집, 아시아드대로 맛집, 뭉태기, 동래 고기 맛집, 부산 생갈비, 동래 특수부위, 부산 20대 맛집",
  openGraph: {
    title: "뭉태기 | 부산 동래구 고깃집",
    description: "정육 직배 신선 고기 전문 — 부산 동래구 아시아드대로",
    url: "https://mungtaegi.kr",
    siteName: "뭉태기",
    locale: "ko_KR",
    type: "website",
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "뭉태기",
  "description": "부산 동래구 아시아드대로에 위치한 정육 직배 고기 전문 고깃집. 생갈비살, 등심, 특수부위 등 신선한 고기를 제공하며 20~30대 젊은층이 즐겨 찾는 감성 인테리어 맛집입니다.",
  "url": "https://mungtaegi.kr",
  "telephone": "051-503-3634",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "아시아드대로 123",
    "addressLocality": "부산",
    "addressRegion": "동래구",
    "addressCountry": "KR"
  },
  "servesCuisine": "한국식 고기구이",
  "priceRange": "$$",
  "openingHours": [
    "Mo 16:30-23:00",
    "Tu 16:30-23:00",
    "We 16:30-23:00",
    "Fr 16:30-23:00",
    "Sa 16:30-23:00"
  ],
  "menu": "https://mungtaegi.kr/#menu",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "주차 가능", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "단체 이용 가능", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "예약 가능", "value": true }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100"
  },
  "review": [
    {
      "@type": "Review",
      "reviewBody": "사장님 친절하시고 고기 완전 맛나요",
      "datePublished": "2024-08-28"
    },
    {
      "@type": "Review",
      "reviewBody": "맛있습니다 가성비굿",
      "datePublished": "2024-06-25"
    },
    {
      "@type": "Review",
      "reviewBody": "너무너무 맛있어요 최고",
      "datePublished": "2024-08-10"
    }
  ],
  "keywords": "부산 동래구 고깃집, 아시아드대로 맛집, 생갈비살, 등심, 특수부위, 20대 맛집"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
