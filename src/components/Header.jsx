import React, { useEffect, useState } from "react";
import "../App.css";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem("mode"));
    if (savedMode !== false) {
      document.querySelector("html").setAttribute("data-theme", "light");
      setIsDarkMode(false);
    } else {
      document.querySelector("html").setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("mode", JSON.stringify(!newMode));

    document
      .querySelector("html")
      .setAttribute("data-theme", newMode ? "dark" : "light");
  };

  return (
    <div className="header-nav px-def navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a className="text-[1.25rem] font-bold">Where in the world?</a>
      </div>
      <div className="flex-none">
        <button
          onClick={toggleMode}
          className="btn btn-square btn-ghost w-[6.25rem] text-[1rem]"
        >
          <p className="text-nowrap">
            <i className={`fa-regular fa-moon pr-[0.0625rem]`}></i>
            {isDarkMode ? "Dark" : "Light"} Mode
          </p>
        </button>
      </div>
    </div>
  );
}

export default Header;
