import "../Page.css";

function Schedule() {
    return (
        <div className="page">

            <h1 className="page-title">분양 일정</h1>

            <table className="schedule-table">

                <thead>
                <tr>
                    <th>구분</th>
                    <th>일정</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>특별공급</td>
                    <td>2026-05-01</td>
                </tr>
                <tr>
                    <td>1순위 청약</td>
                    <td>2026-05-02</td>
                </tr>
                <tr>
                    <td>당첨자 발표</td>
                    <td>2026-05-10</td>
                </tr>
                </tbody>

            </table>

        </div>
    );
}

export default Schedule;