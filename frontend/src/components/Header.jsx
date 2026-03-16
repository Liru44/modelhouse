import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useState } from "react";

// 헤더
function Header() {
  const [openIndex, setOpenIndex] = useState(null);

  const menuData = [
    {
      title: "사업개요",
      subMenus: [
        { name: "소개", path: "/intro" },
        { name: "위치 안내", path: "/location" },
        { name: "업체 소개", path: "/company" },
      ],
    },
    {
      title: "세대안내",
      subMenus: [
        { name: "평면도", path: "/floor-plan" },
      ],
    },
    {
      title: "단지안내",
      subMenus: [
        { name: "단지 배치도", path: "/site-plan" },
        { name: "편의 시설", path: "/facilities" },
        { name: "주변 시설", path: "/nearby" },
      ],
    },
    {
      title: "분양안내",
      subMenus: [
        { name: "분양일정", path: "/schedule" },
      ],
    },
    {
      title: "고객센터",
      subMenus: [
        { name: "공지사항", path: "/notice" },
        { name: "많이 묻는 질문", path: "/faq" },
      ],
    },
  ];

  return (
    <header>
      <Link to="/" className="logo">
        <img src="logo.jpg"/>
      </Link>
      <ul id="header-menu">
        {menuData.map((menu, index) => (
          <li
            key={index}
            className="main-menu"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            {menu.title} {/* 메뉴의 제목 (메뉴1, 메뉴2...) */}
            {/* 현재 마우스가 올라간 메뉴의 index일 때만 서브메뉴 렌더링 */}
            {openIndex === index && (
              <ul className="dropdown">
                {/* 각 메뉴가 가진 subMenus 배열을 다시 map으로 돌립니다 */}
                {menu.subMenus.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link to={sub.path} className="submenu-link">{sub.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
