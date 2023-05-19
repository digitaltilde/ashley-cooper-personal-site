import React from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer(props) {
    return (<footer>
        <div className="footerContainer">
            <div className="socialLinks">
                <a href="https://twitter.com/ashleyversus" target="_blank" rel="noreferrer" className="footerSocialLink">
                    <FaTwitter className="footerSocialIcon"/>
                </a>
                <a href="https://ca.linkedin.com/in/ashley-cooper-7ab7511a1" target="_blank" rel="noreferrer" className="footerSocialLink">
                    <FaLinkedinIn className="footerSocialIcon"/>
                </a>
            </div>
        </div>
    </footer>)
}