import { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="flex items-center justify-between mx-4">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="absolute top-0 right-0 px-8 py-8" onClick={closeMenu}>
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/trainers" onClick={closeMenu}>
                  Тренера
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/time" onClick={closeMenu}>
                  Расписание
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/news" onClick={closeMenu}>
                  Новости
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden text-white space-x-8 lg:flex">
          <li>
            <Link to="/trainers">Тренера</Link>
          </li>
          <li>
            <Link to="/time">Расписание</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Header;
