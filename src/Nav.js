import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfX26nz+UsT3UKSjmp9NjJE41M1xC0lgvtu...Ps6KhgWpA9SwlFaf8c7iyd5VYQUihpzrmHSZ8IeBDs9wys="
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://avatars.dicebear.com/api/gridy/satisfieduse.svg"
        alt="user avatar"
      />
    </div>
  );
}

export default Nav;
