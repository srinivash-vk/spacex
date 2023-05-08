import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as SpaceX } from "../Assets/spacex.svg";

export default function NavBarMenu() {
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const NavLinks = [
    { name: "Launches", url: "launches" },
    { name: "History", url: "history" },
    { name: "Rockets", url: "rockets" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <nav className={`flex items-center justify-between`}>
        <SpaceX
          className="h-10 w-60 m-7 cursor-pointer hover:scale-105 duration-150"
          color="white"
          onClick={() => {
            navigate("/");
            setNavbarOpen(!navbarOpen);
          }}
        />
        <div
          className="z-20 fixed right-5 top-8 cursor-pointer md:hidden"
          onClick={() => {
            setNavbarOpen(!navbarOpen);
          }}
        >
          {navbarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <ul
          className={`bg-[#ffffff15] backdrop-blur-lg md:pl-10 z-10 pr-28 md:static fixed top-0 md:h-auto h-screen duration-500 ease-linear ${
            navbarOpen ? "right-[-100%]" : "right-0"
          }`}
        >
          {NavLinks.map((links, index) => (
            <div className="md:inline-block md:ml-10 ml-5 py-3 transition group duration-300 md:my-0 my-6">
              <NavLink
                key={index}
                onClick={() => setNavbarOpen(!navbarOpen)}
                to={`/${links.url}`}
                className={"text-white text-sm "}
              >
                {" "}
                {links.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </NavLink>
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
}
