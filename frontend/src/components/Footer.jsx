import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  const menuData = [
    {
      title: "사업개요",
      items: [
        { name: "소개", path: "/intro" },
        { name: "위치 안내", path: "/location" },
        { name: "업체 소개", path: "/company" },
      ],
    },
    {
      title: "세대 / 단지 안내",
      items: [
        { name: "평면도", path: "/floor-plan" },
        { name: "단지 배치도", path: "/site-plan" },
        { name: "편의 시설", path: "/facilities" },
        { name: "주변 시설", path: "/nearby" },
      ],
    },
    {
      title: "분양 안내",
      items: [
        { name: "분양일정", path: "/schedule" },
        { name: "청약방법", path: "/subscription" },
      ],
    },
    {
      title: "고객센터",
      items: [
        { name: "공지사항", path: "/notice" },
        { name: "많이 묻는 질문", path: "/faq" },
      ],
    },
  ];

  return (
    <footer className="footer-bar">
      <div className="footer-inner">
        <div className="footer-menus">
          {menuData.map((menu, index) => (
            <div key={index} className="footer-column">
              <h4 className="footer-heading">{menu.title}</h4>
              <ul className="footer-list">
                {menu.items.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-company">THE HILLS PREMIUM 모델하우스</p>
          <p className="footer-info">
            울산광역시 중구 다운동 산30-2 &nbsp;|&nbsp; 대표전화: 000-0000-0000
          </p>
          <p className="footer-copy">
            © 2026 THE HILLS PREMIUM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
