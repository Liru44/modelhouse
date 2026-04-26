import "../Page.css";

export default function Company() {
    return (
        <div className="page">
            <h1 className="page-title">시공사 소개</h1>

            <div className="section">
                <h2 className="section-title">○○건설</h2>
                <div className="img-box">
                    <img src="/images/company.jpg" alt="시공사 이미지" />
                </div>
                <p>
                    ○○건설은 국내 대표 건설사로 다양한 주거 단지를 성공적으로 시공해왔습니다.
                    풍부한 시공 경험과 기술력을 바탕으로 고품질 주거 환경을 제공합니다.
                </p>
            </div>

            <div className="section">
                <h2 className="section-title">회사 개요</h2>
                <table className="info-table">
                    <tbody>
                        <tr>
                            <th>설립연도</th>
                            <td>○○○○년</td>
                        </tr>
                        <tr>
                            <th>대표이사</th>
                            <td>○○○</td>
                        </tr>
                        <tr>
                            <th>주요 사업</th>
                            <td>공동주택 건설, 도시개발사업</td>
                        </tr>
                        <tr>
                            <th>시공능력</th>
                            <td>○위 (○○○○년 기준)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}