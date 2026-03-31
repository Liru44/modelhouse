import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

// 푸터
function Footer() {
  const menuData = [
    {
      title: "메뉴1",
      items: [
        { name: "항목1", path: "/intro" },
        { name: "항목2", path: "/intro" },
      ],
    },
    {
      title: "메뉴2",
      items: [
        { name: "항목3", path: "/intro" },
        { name: "항목4", path: "/intro" },
      ],
    },
    {
      title: "메뉴3",
      items: [
        { name: "항목5", path: "/intro" },
        { name: "항목6", path: "/intro" },
      ],
    },
  ];

  return (
    <footer className="footer-bar">
      <div className="footer-container">
        {/* 메뉴 영역 */}
        {menuData.map((menu, index) => (
          <div key={index} className="footer-column">
            <h4>{menu.title}</h4>
            <ul>
              {menu.items.map((item, i) => (
                <li key={i}>
                  <Link to={item.path}>- {item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* SNS 영역 */}
        <div className="footer-column">
          <h4>About</h4>
          <div className="sns-icons">
            <span>📷</span> {/* 인스타 */}
            <span>📘</span> {/* 페북 */}
            <span>🏢</span> {/* 회사 홈페이지 */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
