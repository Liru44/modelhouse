import "../Page.css";

function Location() {
    return (
        <div className="page">

            <h1 className="page-title">위치 안내</h1>

            <div className="section">

                <h2 className="section-title">단지 위치</h2>

                <div className="img-box">
                    <img src="/images/map.jpg" alt="지도" />
                </div>

            </div>

            <div className="section">

                <h2 className="section-title">교통 환경</h2>

                <ul className="list">
                    <li>지하철 2호선 ○○역 도보 5분</li>
                    <li>강남 접근 20분</li>
                    <li>○○대로 인접</li>
                </ul>

            </div>

        </div>
    );
}

export default Location;