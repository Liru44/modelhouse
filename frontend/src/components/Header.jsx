import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import { useState, useEffect } from "react";

// 헤더 - 데스크탑: hover 드롭다운 / 모바일: 햄버거 메뉴 + 탭 토글
function Header() {
  const [openIndex, setOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setMenuOpen(false);
    setOpenIndex(null);
  }, [location]);

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
        { name: "청약방법", path: "/subscription" },
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

  // 모바일에서 메인 메뉴 탭 시 해당 서브메뉴 토글
  const handleMainClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <header>
      <Link to="/" className="logo">
        <img src="logo.jpg" alt="로고" />
      </Link>

      {/* 모바일 전용 햄버거 버튼 */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="메뉴 열기/닫기"
      >
        <span />
        <span />
        <span />
      </button>

      <ul id="header-menu" className={menuOpen ? "mobile-open" : ""}>
        {menuData.map((menu, index) => (
          <li
            key={index}
            className="main-menu"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
            onClick={() => handleMainClick(index)}
          >
            {menu.title}
            {openIndex === index && (
              <ul className="dropdown">
                {menu.subMenus.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={sub.path}
                      className="submenu-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {sub.name}
                    </Link>
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
