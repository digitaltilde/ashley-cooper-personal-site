import React from "react";
import { SiPlaystation, SiAppstore } from "react-icons/si";
import { FaXbox, FaSteamSymbol, FaItchIo, FaGooglePlay } from "react-icons/fa";


export default function GameLinks(props) {
    const checkPlatform = function(property, icon, array) {
        if (props.game.links.hasOwnProperty(property)) {
            array.push(
                <a className="platformButton" key={property} href={props.game.links[property]} target="_blank">
                    {icon}
                </a>
            )
        }
        return array
    }

    const platformButtons = function () {
        let buttonArray = [];
        buttonArray = checkPlatform("steam", <FaSteamSymbol className="fa"/>, buttonArray);
        buttonArray = checkPlatform("xbox", <FaXbox className="fa" />, buttonArray);
        buttonArray = checkPlatform("ps", <SiPlaystation className="fa" />, buttonArray);
        buttonArray = checkPlatform("itch", <FaItchIo className="fa"/>, buttonArray);
        buttonArray = checkPlatform("googleplay", <FaGooglePlay className="fa"/>, buttonArray);
        buttonArray = checkPlatform("appstore", <SiAppstore className="fa"/>, buttonArray);
        return buttonArray
    }

    return (
        <div className="platformButtons">
            {platformButtons()}
        </div>
    )
}