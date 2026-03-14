import "../Page.css";

function Faq() {
    return (
        <div className="page">

            <h1 className="page-title">많이 묻는 질문</h1>

            <div className="faq">

                <details>
                    <summary>청약 자격은 어떻게 되나요?</summary>
                    <p>청약통장 가입 기간과 지역 요건을 확인해야 합니다.</p>
                </details>

                <details>
                    <summary>모델하우스 방문은 예약이 필요한가요?</summary>
                    <p>방문 예약 후 관람 가능합니다.</p>
                </details>

            </div>

        </div>
    );
}

export default Faq;