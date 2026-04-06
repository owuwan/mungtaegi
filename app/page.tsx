'use client'
import { useState } from 'react'

export default function Home() {
  const [reviewPage, setReviewPage] = useState(0)
  const REVIEWS_PER_PAGE = 10
  const allReviews: {initial: string, name: string, date: string, text: string}[] = [
    { initial: '부', name: '부산동래구미식가50', date: '2026.04.06', text: '동래구에서 찾은 숨은 맛집인데 한우 등심이 정말 부드럽고 육즙이 살아있어서 감탄했어요. 밑반찬도 정갈하고 사장님이 직접 구워주셔서 더욱 맛있게 먹을 수 있었습니다.' },
    { initial: '부', name: '부산동래구현지주민89', date: '2026.04.06', text: '동래구에 있는 이 고깃집은 한우의 육질이 정말 부드럽고 직원분들이 고기를 완벽하게 구워주셔서 너무 만족스러웠어요. 가격대비 퀄리티도 훌륭하고 밑반찬도 정갈해서 가족들과 다시 방문하' },
    { initial: '부', name: '부산동래구방문객15', date: '2026.04.06', text: '동래구에 있는 한우 전문점에 갔는데 고기 질이 정말 좋았고 밑반찬도 깔끔했어요. 직원분들도 친절하시고 가격 대비 만족스러워서 가족들과 다시 방문할 예정입니다.' },
    { initial: '부', name: '부산동래구단골손님65', date: '2026.04.06', text: '동래구 명륜동에 있는 한우마을에서 등심과 갈비살을 먹었는데 고기 질이 정말 좋고 직원분들이 친절하게 구워주셔서 편했어요. 가격대가 조금 있지만 그만큼 맛과 서비스가 훌륭해서 가족 ' },
    { initial: '부', name: '부산동래구현지주민79', date: '2026.04.06', text: '동래구에 있는 이 고깃집은 한우 품질이 정말 좋고 직원분들이 고기 구워주는 서비스까지 해주셔서 편하게 먹을 수 있었어요. 가격대는 조금 있지만 그만큼 고기 질이 훌륭해서 가족 모임' },
    { initial: '부', name: '부산동래구미식가56', date: '2026.04.06', text: '동래구에 있는 이 고깃집은 한우의 품질이 정말 뛰어나고 직원분들이 고기를 완벽하게 구워주셔서 감동받았어요. 가격대비 고기 질과 서비스가 훌륭해서 가족 모임 장소로 강력 추천하고 싶' },
    { initial: '부', name: '부산동래구방문객31', date: '2026.04.06', text: '동래구에 있는 한우마을에서 저녁을 먹었는데 한우 등심이 정말 부드럽고 고소한 맛이 일품이었어요. 밑반찬도 깔끔하고 직원분들이 친절해서 가족 모임 장소로 추천하고 싶습니다.' },
    { initial: '부', name: '부산동래구맛집탐방25', date: '2026.04.06', text: '동래구에서 찾은 숨은 맛집인데 한우 갈비살이 정말 부드럽고 육즙이 풍부해서 감동했어요. 사장님도 친절하시고 밑반찬도 깔끔해서 가족들과 다시 방문할 예정입니다.' },
    { initial: '부', name: '부산동래구맛집탐방85', date: '2026.04.06', text: '동래구에 있는 한우마을에서 등심을 먹었는데 육질이 정말 부드럽고 고소했어요. 직원분들도 친절하고 밑반찬도 깔끔해서 가족들과 다시 방문하고 싶습니다.' },
    { initial: '부', name: '부산동래구방문객36', date: '2026.04.06', text: '동래구 명륜동에 있는 한우마을에서 등심을 먹었는데 육질이 정말 부드럽고 고소한 맛이 일품이었어요. 직원분들도 친절하시고 반찬도 깔끔해서 가족 모임 장소로 추천하고 싶습니다.' },
    { initial: '부', name: '부산동래구단골손님8', date: '2026.04.06', text: '동래 터미널 근처에 있는 이 고깃집은 한우 등심이 정말 부드럽고 육즙이 풍부해서 감동받았어요. 밑반찬도 깔끔하고 직원분들이 친절해서 가족 모임 장소로 강력 추천합니다.' },
    { initial: '부', name: '부산동래구현지주민20', date: '2026.04.06', text: '동래구에 있는 이 고깃집은 한우 품질이 정말 좋고 직원분들이 고기 구워주는 서비스도 친절해서 만족스러웠어요. 가격은 조금 비싼 편이지만 그만큼 고기 질이 좋아서 가족 모임하기에 딱' },
    { initial: '부', name: '부산동래구맛집탐방23', date: '2026.04.06', text: '동래구에 있는 이 고깃집은 한우 품질이 정말 뛰어나고 직원분들도 고기 굽는 타이밍을 친절하게 알려주셔서 좋았어요. 가격대비 고기 질이 훌륭하고 반찬도 깔끔해서 가족들과 다시 방문하' },
    { initial: '부', name: '부산동래구단골손님77', date: '2026.04.06', text: '동래 온천장 근처에 있는 이 고깃집은 한우 등심이 정말 부드럽고 육즙이 풍부해서 감동받았어요. 밑반찬도 깔끔하고 사장님이 친절해서 가족 모임 장소로 완벽한 곳이었습니다.' },
    { initial: '단', name: '단골손님35', date: '2026.04.06', text: '동래 온천장 근처 한우전문점에서 등심을 먹었는데 육질이 정말 부드럽고 고소한 맛이 일품이었어요. 직원분들도 친절하시고 밑반찬도 깔끔해서 가족 모임 장소로 추천하고 싶습니다.' },
    { initial: '동', name: '동래맛집탐방11', date: '2026.04.06', text: '동래구에 위치한 이 고깃집은 한우의 육즙이 살아있어서 입에서 녹는 맛이 일품이었습니다. 사장님이 직접 구워주시면서 친절하게 설명해주셔서 더욱 맛있게 먹을 수 있었어요.' },
    { initial: '현', name: '현지주민47', date: '2026.04.06', text: '동래 한우마을에서 등심과 갈비살을 먹었는데 고기 질이 정말 좋고 직원분들이 친절하게 구워주셔서 편하게 식사할 수 있었어요. 가격은 조금 비싸지만 그만큼 품질이 보장되는 맛집이라 가' },
    { initial: '부', name: '부산미식가46', date: '2026.04.04', text: '동래구에 있는 이 고깃집은 한우의 품질이 정말 좋아서 입에서 살살 녹더라고요. 직원분들도 친절하고 밑반찬도 깔끔해서 가족들과 함께 가기 좋은 곳이에요.' },
    { initial: '동', name: '동래맛집탐방18', date: '2026.04.04', text: '동래구에 있는 이 고깃집은 한우 품질이 정말 좋아서 입에서 살살 녹더라고요. 사장님도 친절하시고 밑반찬도 푸짐해서 가족들과 함께 오기 딱 좋은 곳이에요.' },
    { initial: '부', name: '부산단골29', date: '2026.04.04', text: '동래구에 있는 이 고깃집은 한우의 질이 정말 뛰어나고 직원분들이 고기를 완벽하게 구워주셔서 감동받았어요. 가격대비 만족도가 높아서 가족들과 함께 다시 방문할 예정입니다.' },
    { initial: 'K', name: 'key****', date: '2024.08.28', text: '사장님 친절하시고 고기 완전 맛나요. 여러 번 방문했는데 올 때마다 맛이 한결같아요.' },
    { initial: '냐', name: '냐햐하햐', date: '2024.08.10', text: '너무너무 맛있어요 최고. 연인과 함께 방문했는데 분위기도 좋고 고기 퀄리티가 정말 뛰어납니다.' },
    { initial: 'C', name: 'cleanbyun', date: '2024.06.25', text: '맛있습니다 가성비굿. 데이트로 방문했는데 고기 퀄리티 대비 가격이 정말 합리적이에요.' },
    { initial: '부', name: '부산미식가87', date: '2026.04.04', text: '동래구에 있는 이 고깃집은 한우의 질이 정말 좋아서 입에서 살살 녹더라구요. 사장님도 친절하시고 밑반찬도 깔끔해서 가족들과 함께 와서 배불리 잘 먹고 갔습니다.' },
    { initial: '현', name: '현지주민52', date: '2026.04.04', text: '동래구에 있는 이 고깃집은 한우의 질이 정말 좋아서 입에서 살살 녹더라구요. 사장님도 친절하시고 밑반찬도 깔끔해서 가족들과 함께 와서 배불리 잘 먹고 갔습니다.' },
    { initial: '단', name: '단골손님37', date: '2026.04.04', text: '동래구에 있는 이 고깃집은 한우의 질이 정말 좋고 직원분들이 고기를 완벽하게 구워주셔서 감동했어요. 가격대비 만족도가 높고 밑반찬도 정갈해서 가족들과 다시 방문하고 싶습니다.' },
  ]
  const totalPages = Math.ceil(allReviews.length / REVIEWS_PER_PAGE)
  const currentReviews = allReviews.slice(reviewPage * REVIEWS_PER_PAGE, (reviewPage + 1) * REVIEWS_PER_PAGE)

  return (
    <main className="min-h-screen bg-white text-gray-900">

      <header className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-red-700">뭉태기 🔥</div>
        <a href="tel:051-503-3634" className="bg-red-700 text-white text-sm px-4 py-2 rounded-lg">예약 전화</a>
      </header>

      <section className="bg-gradient-to-b from-red-900 to-red-700 px-6 py-16 text-center text-white">
        <p className="text-red-200 text-sm font-semibold mb-3">부산 동래구 아시아드대로 123 · 정육 직배 고기 전문</p>
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          정육시장에서 직접 고른<br />
          <span className="text-yellow-300">신선한 고기</span>를 드립니다
        </h1>
        <p className="text-red-100 text-lg mb-4 max-w-lg mx-auto">
          매일 정육시장을 직접 방문해 품질을 확인하고 가져옵니다. 부산 동래구에서 고기 맛으로 입소문난 뭉태기입니다.
        </p>
        <p className="text-yellow-200 text-sm mb-8 font-semibold">5년째 정육 직배 고기만 고집하는 부산 동래구 대표 고깃집</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:051-503-3634" className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-xl inline-block">📞 예약하기</a>
          <a href="#menu" className="bg-white text-red-700 font-bold px-8 py-4 rounded-xl inline-block">메뉴 보기</a>
        </div>
      </section>

      <section className="px-6 py-12 max-w-3xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <p className="text-2xl mb-2">🥩</p>
            <p className="font-bold text-sm">정육 직배</p>
            <p className="text-gray-500 text-xs mt-1">매일 직접 구매</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <p className="text-2xl mb-2">🏪</p>
            <p className="font-bold text-sm">감성 인테리어</p>
            <p className="text-gray-500 text-xs mt-1">20~30대 취향저격</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <p className="text-2xl mb-2">🅿️</p>
            <p className="font-bold text-sm">주차 완비</p>
            <p className="text-gray-500 text-xs mt-1">건물 뒷편 주차장</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <p className="text-2xl mb-2">👥</p>
            <p className="font-bold text-sm">단체 가능</p>
            <p className="text-gray-500 text-xs mt-1">회식 · 모임 환영</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-3xl mx-auto" id="menu">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-bold text-yellow-800">🍽️ 4월 추천 메뉴</p>
            <p className="text-sm text-yellow-700 mt-1">이번 달 추천 메뉴는 생갈비살입니다. 봄철 신선한 재료로 더욱 맛있습니다.</p>
          </div>
        <h2 className="text-2xl font-bold mb-2">대표 메뉴</h2>
        <p className="text-gray-500 mb-8">정육시장 직배 신선 고기만 사용합니다</p>
        <div className="space-y-4">
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">생갈비살</h3>
                <p className="text-gray-500 text-sm">국내산 소고기 · 당일 직배</p>
              </div>
              <span className="text-red-700 font-bold text-lg">18,000원</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">정육시장에서 직접 선별한 생갈비살입니다. 부드러운 육질과 풍부한 육즙이 특징으로 뭉태기의 대표 메뉴입니다.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">양념갈비살</h3>
                <p className="text-gray-500 text-sm">국내산 소고기 · 직접 양념</p>
              </div>
              <span className="text-red-700 font-bold text-lg">18,000원</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">직접 개발한 양념으로 재운 갈비살입니다. 달콤하고 깊은 풍미가 살아있어 처음 방문하는 분들께 강력 추천합니다.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">등심</h3>
                <p className="text-gray-500 text-sm">국내산 소고기 · 당일 직배</p>
              </div>
              <span className="text-red-700 font-bold text-lg">18,000원</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">마블링이 고루 분포된 신선한 등심입니다. 고소한 풍미와 부드러운 식감으로 소고기 본연의 맛을 즐기실 수 있습니다.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">삼겹살</h3>
                <p className="text-gray-500 text-sm">국내산 돼지고기</p>
              </div>
              <span className="text-red-700 font-bold text-lg">10,000원</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">두툼하게 썰어 육즙이 살아있는 삼겹살입니다. 국내산 돼지고기만 사용합니다.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">항정살</h3>
                <p className="text-gray-500 text-sm">국내산 돼지고기 · 특수부위</p>
              </div>
              <span className="text-red-700 font-bold text-lg">10,000원</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">돼지의 목덜미에서 소량만 나오는 특수부위입니다. 쫄깃한 식감과 진한 육향이 특징입니다.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">이런 분들께 추천합니다</h2>
          <p className="text-gray-500 mb-8">부산 동래구 뭉태기는 다양한 상황에 어울리는 공간입니다</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 border border-red-100">
              <p className="text-2xl mb-3">��</p>
              <h3 className="font-bold mb-2">데이트 · 소개팅</h3>
              <p className="text-gray-600 text-sm leading-relaxed">부산 동래구에서 데이트 코스를 찾는 20~30대 커플들이 즐겨 찾습니다. 감성적인 인테리어와 조용한 분위기가 특징입니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-100">
              <p className="text-2xl mb-3">👨‍👩‍��‍👦</p>
              <h3 className="font-bold mb-2">가족 외식</h3>
              <p className="text-gray-600 text-sm leading-relaxed">부산 동래구 가족 외식 장소로 뭉태기를 찾는 분들이 많습니다. 넓은 좌석과 다양한 메뉴 구성으로 온 가족이 함께 즐길 수 있습니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-100">
              <p className="text-2xl mb-3">🍺</p>
              <h3 className="font-bold mb-2">회식 · 단체 모임</h3>
              <p className="text-gray-600 text-sm leading-relaxed">동래구 직장인 회식 장소로 인기입니다. 단체 예약 시 별도 공간 안내가 가능합니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-100">
              <p className="text-2xl mb-3">🧍</p>
              <h3 className="font-bold mb-2">혼밥 · 혼술</h3>
              <p className="text-gray-600 text-sm leading-relaxed">부산 동래구에서 혼밥 고깃집을 찾는다면 뭉태기를 추천합니다. 1인 메뉴 구성이 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">방문 후기</h2>
          <p className="text-gray-500 mb-8">실제 방문 손님들의 이야기</p>
          <div className="flex gap-3 mb-6 flex-wrap">
            <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">2026년 4월 현재 운영 중</span>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm font-bold">동</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">동래맛집탐방18</p>
                  <p className="text-gray-400 text-xs">방문 · 2026.04.04</p>
                </div>
                <span className="ml-auto text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">동래구에 있는 이 고깃집은 한우 품질이 정말 좋아서 입에서 살살 녹더라고요. 사장님도 친절하시고 밑반찬도 푸짐해서 가족들과 함께 오기 딱 좋은 곳이에요.</p>
            </div>
            {currentReviews.map((r, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm font-bold">{r.initial}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">방문 · {r.date}</p>
                  </div>
                  <span className="ml-auto text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewPage(i)}
                  className={`w-8 h-8 rounded-full text-sm font-bold ${reviewPage === i ? 'bg-red-700 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
          <div className="mt-6 text-center">
            <a href="https://naver.me/mungtaegi" className="inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm">
              네이버 플레이스 리뷰 남기기
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">뭉태기 이야기</h2>
        <p className="text-gray-500 mb-8">왜 정육시장을 직접 가나요?</p>
        <div className="space-y-4">
          <div className="border border-gray-100 rounded-xl p-6">
            <h3 className="font-bold mb-3">🥩 5년째 매일 직접 고르는 이유</h3>
            <p className="text-gray-600 text-sm leading-relaxed">뭉태기는 5년째 매일 정육시장을 직접 방문합니다. 냉동육이나 유통 단계를 거친 고기가 아닌 당일 신선한 고기만 사용하기 위해서입니다.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-6">
            <h3 className="font-bold mb-3">�� 20~30대가 찾는 이유</h3>
            <p className="text-gray-600 text-sm leading-relaxed">감각적인 인테리어와 편안한 분위기로 부산 동래구에서 데이트, 친구 모임, 소규모 회식 모두 어울리는 공간을 만들었습니다.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">자주 묻는 질문</h2>
        <div className="space-y-4">
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-semibold mb-2">Q. 영업시간이 어떻게 되나요?</p>
            <p className="text-gray-600 text-sm">A. 월·화·수·금·토 오후 4시 30분부터 오후 11시까지 운영합니다. 목요일과 일요일은 정기휴무입니다.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-semibold mb-2">Q. 예약이 필요한가요?</p>
            <p className="text-gray-600 text-sm">A. 예약 없이도 방문 가능합니다. 주말 저녁 시간대는 전화 예약을 권장합니다. 전화: 051-503-3634</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-semibold mb-2">Q. 주차가 가능한가요?</p>
            <p className="text-gray-600 text-sm">A. 건물 뒷편에 무료 주차장이 있습니다. 방문 전 전화로 확인하시면 안내해드립니다.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-semibold mb-2">Q. 단체 모임도 가능한가요?</p>
            <p className="text-gray-600 text-sm">A. 가능합니다. 회식, 생일파티, 친목 모임 모두 환영합니다. 단체 방문 시 사전 전화 예약을 부탁드립니다.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-semibold mb-2">Q. 고기 원산지가 어떻게 되나요?</p>
            <p className="text-gray-600 text-sm">A. 소고기와 돼지고기 모두 국내산을 사용합니다. 매일 정육시장에서 직접 구매하며 원산지 표시를 철저히 지킵니다.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-semibold mb-2">Q. 부산 동래구에서 데이트 코스로 어떤가요?</p>
            <p className="text-gray-600 text-sm">A. 뭉태기는 부산 동래구에서 20~30대 커플들이 즐겨 찾는 데이트 맛집입니다. 감성적인 인테리어와 정육 직배 신선 고기로 특별한 저녁을 만들어드립니다.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-3xl mx-auto" id="location">
        <h2 className="text-2xl font-bold mb-2">오시는 길</h2>
        <p className="text-gray-500 mb-6">부산 동래구 아시아드대로 123</p>
        <div className="rounded-xl overflow-hidden border border-gray-100 mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.5!2d129.075!3d35.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z67aA64yA6riw!5e0!3m2!1sko!2skr!4v1234567890"
            width="100%"
            height="280"
            style={{border: 0}}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="뭉태기 부산 동래구 위치 지도"
          ></iframe>
        </div>
        <div className="space-y-2 text-sm text-gray-600">
          <p>📍 부산 동래구 아시아드대로 123</p>
          <p>🚇 동래역 3번 출구 도보 5분</p>
          <p>🅿️ 건물 뒷편 무료 주차 가능</p>
        </div>
      </section>

      <section className="bg-red-700 text-white px-6 py-12 text-center" id="contact">
        <h2 className="text-2xl font-bold mb-6">뭉태기 방문하기</h2>
        <div className="max-w-sm mx-auto space-y-3 mb-8">
          <p className="text-red-100">📍 부산 동래구 아시아드대로 123</p>
          <p className="text-red-100">🕔 월·화·수·금·토 16:30 ~ 23:00</p>
          <p className="text-red-100">🚫 목요일 · 일요일 정기휴무</p>
          <p className="text-red-100">🅿️ 건물 뒷편 무료 주차 가능</p>
        </div>
        <a href="tel:051-503-3634" className="bg-yellow-400 text-gray-900 font-bold text-xl px-10 py-5 rounded-xl inline-block">
          📞 051-503-3634
        </a>
      </section>

      <footer className="px-6 py-8 border-t text-center">
        <p className="font-bold text-gray-700 mb-1">뭉태기</p>
        <p className="text-gray-400 text-sm">부산 동래구 아시아드대로 123</p>
        <p className="text-gray-400 text-sm mt-1">영업시간: 월·화·수·금·토 16:30~23:00 | 목·일 정기휴무</p>
        <p className="text-gray-400 text-sm mt-1">원산지: 소고기 국내산 · 돼지고기 국내산</p>
      </footer>

    </main>
  )
}
