import "../Page.css";

function Intro() {
    return (
        <div className="page">

            <h1 className="page-title">사업개요</h1>

            <div className="section">
                <h2 className="section-title">프로젝트 소개</h2>

                <div className="img-box">
                    <img src="/images/project.jpg" alt="프로젝트 이미지" />
                </div>

                <p>
                    본 단지는 도심과 자연을 동시에 누릴 수 있는 프리미엄 주거 단지입니다.
                    쾌적한 환경과 편리한 교통을 갖춘 새로운 라이프 스타일을 제공합니다.
                </p>
            </div>

            <div className="section">
                <h2 className="section-title">사업 개요</h2>

                <table className="info-table">
                    <tbody>
                    <tr>
                        <th>위치</th>
                        <td>서울시 ○○구 ○○동</td>
                    </tr>
                    <tr>
                        <th>세대수</th>
                        <td>500세대</td>
                    </tr>
                    <tr>
                        <th>규모</th>
                        <td>지하2층 ~ 지상20층</td>
                    </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default Intro;