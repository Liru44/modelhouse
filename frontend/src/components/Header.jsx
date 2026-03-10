import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useState } from "react";

// 헤더
function Header() {
  const [openIndex, setOpenIndex] = useState(null);

  const menuData = [
    {
      title: "메뉴1",
      subMenus: ["서브메뉴 1", "서브메뉴 2"],
    },
    {
      title: "메뉴2",
      subMenus: ["서브메뉴 1", "서브메뉴 2", "서브메뉴 3"],
    },
    {
      title: "메뉴3",
      subMenus: ["서브메뉴 1", "서브메뉴 2"],
    },
    {
      title: "메뉴4",
      subMenus: ["서브메뉴 1", "서브메뉴 2", "서브메뉴 3"],
    },
    {
      title: "메뉴5",
      subMenus: ["서브메뉴 1"],
    },
  ];

  return (
    <header>
      <h1>로고</h1>
      <ul id="header-menu">
        {menuData.map((menu, index) => (
          <li
            key={index}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            {menu.title} {/* 메뉴의 제목 (메뉴1, 메뉴2...) */}
            {/* 현재 마우스가 올라간 메뉴의 index일 때만 서브메뉴 렌더링 */}
            {openIndex === index && (
              <ul className="dropdown">
                {/* 각 메뉴가 가진 subMenus 배열을 다시 map으로 돌립니다 */}
                {menu.subMenus.map((sub, subIndex) => (
                  <li key={subIndex}>{sub}</li>
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
