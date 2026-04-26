import "../Page.css";
import KakaoMap from "../../components/KakaoMap";

function Location() {
    return (
        <div className="page">
            <h1 className="page-title">위치 안내</h1>

            <div className="section">
                <h2 className="section-title">단지 위치</h2>
                <KakaoMap
                    address="울산광역시 중구 다운동 산30-2"
                    level={3}
                    style={{ width: "100%", height: "450px" }}
                    showNavigation={true}
                />
            </div>

            <div className="section">
                <h2 className="section-title">주소 및 교통</h2>
                <table className="info-table">
                    <tbody>
                        <tr>
                            <th>주소</th>
                            <td>울산광역시 중구 다운동 산30-2</td>
                        </tr>
                        <tr>
                            <th>버스</th>
                            <td>다운동 정류장 하차 후 도보 5분</td>
                        </tr>
                        <tr>
                            <th>자가용</th>
                            <td>울산 IC → 중구 방면 → 다운동 진입 (약 15분)</td>
                        </tr>
                        <tr>
                            <th>주차</th>
                            <td>모델하우스 전용 주차장 운영 (무료)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2 className="section-title">주변 인프라</h2>
                <table className="info-table">
                    <tbody>
                        <tr>
                            <th>교육</th>
                            <td>다운초등학교 도보 5분 / 다운중학교 도보 10분</td>
                        </tr>
                        <tr>
                            <th>쇼핑</th>
                            <td>이마트 울산점 차량 10분</td>
                        </tr>
                        <tr>
                            <th>공원</th>
                            <td>태화강 국가정원 차량 10분</td>
                        </tr>
                        <tr>
                            <th>의료</th>
                            <td>울산대학교병원 차량 15분</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Location;
