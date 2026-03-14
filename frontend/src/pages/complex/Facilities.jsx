import "../Page.css";
import "../../styles/Facilities.css";

function Facilities() {
    return (
        <div className="page">

            <h1 className="page-title">편의 시설</h1>

            <div className="facility-grid">

                <div className="facility-card">
                    <img src="/images/gym.jpg" />
                    <h3>피트니스 센터</h3>
                </div>

                <div className="facility-card">
                    <img src="/images/golf.jpg" />
                    <h3>실내 골프 연습장</h3>
                </div>

                <div className="facility-card">
                    <img src="/images/lounge.jpg" />
                    <h3>커뮤니티 라운지</h3>
                </div>

            </div>

        </div>
    );
}

export default Facilities;