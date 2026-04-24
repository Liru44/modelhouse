// import "../Page.css";
// import "../../styles/FloorPlan.css";

// function FloorPlan() {
//     return (
//         <div className="page">

//             <h1 className="page-title">세대 안내</h1>

//             <div className="unit-grid">

//                 <div className="unit-card">
//                     <img src="/images/84a.png" />
//                     <h3>84A 타입</h3>
//                     <p>전용 84㎡ / 방3 욕실2</p>
//                 </div>

//                 <div className="unit-card">
//                     <img src="/images/84b.png" />
//                     <h3>84B 타입</h3>
//                     <p>전용 84㎡ / 방3 욕실2</p>
//                 </div>

//             </div>

//         </div>
//     );
// }

// export default FloorPlan;

import { useState } from "react";

export default function FloorPlan() {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "84A", content: "108세대 [확장형]", img: "/images/84a.png" },
    { name: "84B", content: "121세대 [확장형]", img: "/images/84b.png" },
    { name: "59A", content: "12세대 [확장형]", img: "/images/59a.png" },
    { name: "59B", content: "20세대 [확장형]", img: "/images/59b.png" },
  ];

  return (
    <div
      style={{
        padding: "60px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "'Noto Sans KR', sans-serif",
      }}
    >
      {/* 제목 섹션 */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "700",
          marginBottom: "40px",
          color: "#333",
        }}
      >
        세대 안내
      </h1>

      {/* 탭 메뉴: 중앙 정렬 및 얇은 구분선 */}
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
          padding: 0,
          marginBottom: "50px",
          borderBottom: "1px solid #ddd",
        }}
      >
        {menuArr.map((el, index) => (
          <li
            key={index}
            onClick={() => setCurrentTab(index)}
            style={{
              padding: "15px 30px",
              cursor: "pointer",
              fontSize: "18px",
              transition: "all 0.3s ease",
              color: currentTab === index ? "#852828" : "#999", // 브랜드 로고와 유사한 와인색 포인트
              fontWeight: currentTab === index ? "700" : "400",
              borderBottom:
                currentTab === index
                  ? "3px solid #852828"
                  : "3px solid transparent",
              marginBottom: "-2px",
            }}
          >
            {el.name}
          </li>
        ))}
      </ul>

      {/* 평면도 상세 정보 영역 */}
      <div style={{ marginTop: "20px", animation: "fadeIn 0.5s ease-in-out" }}>
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "28px", color: "#222", marginBottom: "10px" }}>
            {menuArr[currentTab].name}
          </h2>
          <p
            style={{ fontSize: "16px", color: "#666", letterSpacing: "-0.5px" }}
          >
            {menuArr[currentTab].content}
          </p>
        </div>

        {/* 이미지 컨테이너: 그림자 효과로 입체감 부여 */}
        <div
          style={{
            display: "inline-block",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src={menuArr[currentTab].img}
            alt={menuArr[currentTab].name}
            style={{
              maxWidth: "100%",
              height: "auto",
              maxHeight: "500px",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
}
