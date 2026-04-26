import "../Page.css";

const notices = [
    { id: 2, title: "청약 일정 안내", date: "2026-10-01" },
    { id: 1, title: "모델하우스 오픈 안내", date: "2026-09-01" },
];

export default function Notice() {
    return (
        <div className="page">
            <h1 className="page-title">공지사항</h1>

            <div className="section">
                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th style={{ width: "60px" }}>번호</th>
                            <th>제목</th>
                            <th style={{ width: "130px" }}>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notices.map((n) => (
                            <tr key={n.id}>
                                <td>{n.id}</td>
                                <td style={{ textAlign: "left" }}>{n.title}</td>
                                <td>{n.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}