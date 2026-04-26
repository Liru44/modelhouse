import "../Page.css";

function SitePlan() {
  return (
    <div className="page">
      <h1 className="page-title">단지 배치도</h1>

      <div className="section">
        <h2 className="section-title">전체 배치도</h2>
        <div className="img-box">
          <img src="/images/siteplan.jpg" alt="단지 배치도" />
        </div>
        <p>
          총 ○개 동, ○○○세대로 구성된 단지 배치도입니다.
          지하주차장과 연결되는 편리한 동선을 갖추었습니다.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">단지 개요</h2>
        <table className="info-table">
          <tbody>
            <tr>
              <th>총 세대수</th>
              <td>○○○세대</td>
            </tr>
            <tr>
              <th>동 수</th>
              <td>○개 동</td>
            </tr>
            <tr>
              <th>층 수</th>
              <td>지하 2층 ~ 지상 20층</td>
            </tr>
            <tr>
              <th>주차</th>
              <td>세대당 ○대 (지하 주차장)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SitePlan;
