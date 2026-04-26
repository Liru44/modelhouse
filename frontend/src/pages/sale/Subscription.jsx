import "../Page.css";
import "./Subscription.css";

function Subscription() {
  return (
    <div className="page">
      <h1 className="page-title">청약방법</h1>

      <div className="section">
        <h2 className="section-title">청약 자격</h2>
        <table className="info-table">
          <tbody>
            <tr>
              <th>공급 유형</th>
              <td>특별공급 / 1순위 / 2순위</td>
            </tr>
            <tr>
              <th>청약통장</th>
              <td>주택청약종합저축 (청약저축 포함)</td>
            </tr>
            <tr>
              <th>거주 요건</th>
              <td>울산광역시 거주자 (공고일 기준)</td>
            </tr>
            <tr>
              <th>세대주 요건</th>
              <td>세대주 및 세대원 (공급 유형별 상이)</td>
            </tr>
          </tbody>
        </table>
        <p style={{ color: "#888", fontSize: "13px" }}>
          ※ 세부 자격 요건은 입주자모집공고를 반드시 확인하시기 바랍니다.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">청약 방법</h2>
        <div className="subscription-steps">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>청약 신청</h3>
            <p>
              인터넷: 아파트투유<br />
              (apt2you.com)<br />
              현장: 모델하우스 방문
            </p>
          </div>
          <div className="step-arrow">›</div>
          <div className="step-card">
            <div className="step-number">02</div>
            <h3>서류 제출</h3>
            <p>
              청약 신청 후<br />
              3영업일 이내<br />
              방문 제출
            </p>
          </div>
          <div className="step-arrow">›</div>
          <div className="step-card">
            <div className="step-number">03</div>
            <h3>당첨자 발표</h3>
            <p>
              아파트투유 및<br />
              모델하우스 공지<br />
              2026년 5월 10일
            </p>
          </div>
          <div className="step-arrow">›</div>
          <div className="step-card">
            <div className="step-number">04</div>
            <h3>계약 체결</h3>
            <p>
              당첨자 발표 후<br />
              지정 일정에<br />
              계약 진행
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">제출 서류</h2>
        <table className="info-table">
          <tbody>
            <tr>
              <th>공통 서류</th>
              <td>주민등록등본, 청약통장 확인서, 신분증 사본</td>
            </tr>
            <tr>
              <th>특별공급</th>
              <td>해당 자격 증빙 서류 (다자녀, 신혼부부, 생애최초 등)</td>
            </tr>
            <tr>
              <th>무주택 증명</th>
              <td>건물등기사항전부증명서 (필요 시)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="section-title">유의사항</h2>
        <ul className="notice-list">
          <li>청약 신청 후 서류 미제출 시 당첨이 취소될 수 있습니다.</li>
          <li>허위 서류 제출 시 법적 제재를 받을 수 있습니다.</li>
          <li>청약 관련 세부 내용은 입주자모집공고문을 참고하십시오.</li>
          <li>본 내용은 예정 사항으로 변경될 수 있습니다.</li>
        </ul>
      </div>
    </div>
  );
}

export default Subscription;
