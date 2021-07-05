import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer(){
    var time = new Date();
    var year = time.getYear() + 1900;
    return (
        <footer className="btmfooter">
            <h5 className="v1">created by Nathaniel {year} |</h5>
            <a className="gitty" href="https://github.com/natisaver">
                <FaGithub />
            </a>
        </footer>
    );
};

export default Footer;