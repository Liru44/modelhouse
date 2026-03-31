// src/pages/Home.jsx
import React from "react";
import "../styles/Home.css";
import { Map, useKakaoLoader } from "react-kakao-maps-sdk";

const Home = () => {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.REACT_APP_KAKAOMAP_KEY,
  });

  console.log(process.env.REACT_APP_KAKAOMAP_KEY);

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
            <Map
              center={{ lat: 37.527, lng: 127.027 }}
              style={{ width: "100%", height: "350px" }}
              level={3}
            />
          </div>
          <div className="location-info">
            <h3>서울 강남구 ○○동</h3>
            <ul>
              <li>지하철 2호선 도보 5분</li>
              <li>초등학교 도보 3분</li>
              <li>대형마트 차량 10분</li>
              <li>대형 공원 인접</li>
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
