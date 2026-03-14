import "../Page.css";
import "../../styles/FloorPlan.css";

function FloorPlan() {
    return (
        <div className="page">

            <h1 className="page-title">세대 안내</h1>

            <div className="unit-grid">

                <div className="unit-card">
                    <img src="/images/84a.png" />
                    <h3>84A 타입</h3>
                    <p>전용 84㎡ / 방3 욕실2</p>
                </div>

                <div className="unit-card">
                    <img src="/images/84b.png" />
                    <h3>84B 타입</h3>
                    <p>전용 84㎡ / 방3 욕실2</p>
                </div>

            </div>

        </div>
    );
}

export default FloorPlan;