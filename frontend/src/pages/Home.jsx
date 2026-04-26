import React from "react";
import "../styles/Home.css";
import KakaoMap from "../components/KakaoMap";

const Home = () => {
  return (
    <div className="home">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">THE HILLS PREMIUM</h1>
          <p className="hero-sub">자연과 도시를 모두 누리는 프리미엄 라이프</p>
          <div className="hero-movein">
            입주 예정 <strong>2027년 3월</strong>
          </div>
        </div>
      </section>

      {/* 2. Gallery Section */}
      <section className="section gallery">
        <h2>갤러리</h2>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="gallery-item">
              이미지 {item}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Location Section */}
      <section className="section location">
        <h2>위치 안내</h2>
        <div className="location-content">
          <div className="map-area">
            <KakaoMap
              address="울산광역시 중구 다운동 산30-2"
              level={3}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="location-info">
            <h3>울산광역시 중구 다운동</h3>
            <ul>
              <li>✔ 지하철 ○○역 도보 10분</li>
              <li>✔ 초등학교 도보 5분</li>
              <li>✔ 대형마트 차량 10분</li>
              <li>✔ 대형 공원 인접</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Move-in Info Section */}
      <section className="section movein">
        <h2>입주 및 분양 일정</h2>
        <div className="movein-card">
          <div>
            <h3>모델하우스 오픈</h3>
            <p>2026년 9월 예정</p>
          </div>
          <div>
            <h3>청약 접수</h3>
            <p>2026년 10월 예정</p>
          </div>
          <div>
            <h3>입주 예정</h3>
            <p>2027년 3월</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
