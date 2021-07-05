import React from "react";
import { FaLeaf } from "react-icons/fa";
import menuitems from "../menuitems";

function Header() {
  const colors = ["#da8fd6", "#9ae6b4", "#a7c5ec", "#f3a4a4"];

  window.addEventListener("mousedown", (e) => {
    const color = colors.shift();
    document.documentElement.style.setProperty("--highlight-color", color);
    colors.push(color); //need to push back cos shift removes the first element
  });

  return (
    <header>
        <nav className="navbar">
            <FaLeaf className="lily" />
            <h1 className=" animate">lilypad.</h1>

            <div className="menuicon"></div>
            <ul className="navitems">
                {menuitems.map((menuObj)=>(
                    <li>
                        <a className={menuObj.clasname} href={menuObj.url}>
                            {menuObj.title}
                        </a>
                    </li>
                ))}
                
            </ul>
        </nav>

    </header>
  );
}

export default Header;
