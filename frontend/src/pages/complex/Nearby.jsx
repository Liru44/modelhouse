import "../Page.css";
import "./Nearby.css";

function Nearby() {
  const facilities = [
    {
      category: "교육",
      items: ["○○초등학교 (도보 5분)", "○○중학교 (도보 10분)", "○○고등학교 (차량 5분)"],
    },
    {
      category: "교통",
      items: ["버스 정류장 (도보 3분)", "지하철 ○○역 (도보 15분)", "주요 간선도로 진입 5분"],
    },
    {
      category: "쇼핑 / 편의",
      items: ["대형마트 (차량 10분)", "○○쇼핑몰 (차량 15분)", "편의점 (도보 1분)"],
    },
    {
      category: "공원 / 자연",
      items: ["○○근린공원 (도보 5분)", "○○생태공원 (차량 10분)"],
    },
    {
      category: "의료",
      items: ["○○병원 (차량 5분)", "약국 (도보 3분)"],
    },
  ];

  return (
    <div className="page">
      <h1 className="page-title">주변 시설</h1>

      <div className="section">
        <h2 className="section-title">생활 인프라</h2>
        <div className="nearby-grid">
          {facilities.map((group, i) => (
            <div key={i} className="nearby-card">
              <h3 className="nearby-category">{group.category}</h3>
              <ul className="nearby-list">
                {group.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nearby;
