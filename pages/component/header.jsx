import React from "react";
import Link from "next/link";
import { useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
    const [ navState, setNavState ] = useState(false);

    const links = ["Recent Work", "About", "Press", "Contact"];

    const linkGen = function (title, mobile) {
        let thisClass = mobile ? "navLink mobile" : "navLink desktop" ;
        if (props.active == title) {
            thisClass = thisClass + " active";
        }
        return <Link href={`/${title.toLowerCase().replace(" ","")}`} key={title} className={thisClass}>{title}</Link>
    }

    return (<header>
        <div className="headWrapper" >
            <a href="/">
                <h1 className="titleName">Ashley Cooper</h1>
            </a>
            
            <nav>
                <p className="navExpand" onClick={e => (setNavState(e => (!e)))}><FontAwesomeIcon className="faIcon" icon={navState ? faCaretUp : faCaretDown}/></p>
                {navState ? links.map((e) => linkGen(e, true)) : ""}
                {links.map((e) => linkGen(e, false))}
            </nav>
        </div>
    </header>)
}