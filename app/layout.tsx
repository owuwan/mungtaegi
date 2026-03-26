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

const schemaJson = `{
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
  "openingHours": ["Mo 16:30-23:00", "Tu 16:30-23:00", "We 16:30-23:00", "Fr 16:30-23:00", "Sa 16:30-23:00"],
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
    { "@type": "Review", "reviewBody": "사장님 친절하시고 고기 완전 맛나요", "datePublished": "2024-08-28" },
    { "@type": "Review", "reviewBody": "맛있습니다 가성비굿", "datePublished": "2024-06-25" },
    { "@type": "Review", "reviewBody": "너무너무 맛있어요 최고", "datePublished": "2024-08-10" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "뭉태기 메뉴",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "생갈비살", "description": "국내산 소고기 당일 직배", "offers": { "@type": "Offer", "price": "18000", "priceCurrency": "KRW" } } },
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "양념갈비살", "description": "국내산 소고기 직접 양념", "offers": { "@type": "Offer", "price": "18000", "priceCurrency": "KRW" } } },
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "등심", "description": "국내산 소고기 당일 직배", "offers": { "@type": "Offer", "price": "18000", "priceCurrency": "KRW" } } },
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "삼겹살", "description": "국내산 돼지고기", "offers": { "@type": "Offer", "price": "10000", "priceCurrency": "KRW" } } },
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "항정살", "description": "국내산 돼지고기 특수부위", "offers": { "@type": "Offer", "price": "10000", "priceCurrency": "KRW" } } }
    ]
  },
  "keywords": "부산 동래구 고깃집, 아시아드대로 맛집, 생갈비살, 등심, 특수부위, 20대 맛집"
}`

const faqJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "뭉태기 영업시간이 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "월·화·수·금·토 오후 4시 30분부터 오후 11시까지 운영합니다. 목요일과 일요일은 정기휴무입니다."
      }
    },
    {
      "@type": "Question",
      "name": "뭉태기 주차가 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "건물 뒷편에 주차 가능합니다. 방문 전 전화로 확인하시면 안내해드립니다."
      }
    },
    {
      "@type": "Question",
      "name": "뭉태기 고기 원산지가 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "소고기와 돼지고기 모두 국내산을 사용합니다. 매일 정육시장에서 직접 구매하며 원산지 표시를 철저히 지킵니다."
      }
    },
    {
      "@type": "Question",
      "name": "뭉태기 단체 모임이 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "가능합니다. 회식, 생일파티, 친목 모임 모두 환영합니다. 단체 방문 시 사전 전화 예약을 부탁드립니다."
      }
    },
    {
      "@type": "Question",
      "name": "뭉태기 예약이 필요한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "예약 없이도 방문 가능합니다. 주말 저녁 시간대는 전화 예약을 권장합니다. 전화번호: 051-503-3634"
      }
    }
  ]
}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaJson }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJson }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
