import React from "react";
import { SiPlaystation, SiAppstore } from "react-icons/si";
import { FaXbox, FaSteamSymbol, FaItchIo, FaGooglePlay } from "react-icons/fa";
import { platform } from "process";

const possiblePlatforms = [
    {
        name:"steam", 
        icon:<FaSteamSymbol className="fa"/>
    },
    {
        name: "xbox",
        icon:<FaXbox className="fa" />
    },
    {
        name: "ps",
        icon: <SiPlaystation className="fa" />
    },
    {
        name:"itch",
        icon: <FaItchIo className="fa"/>
    },
    {
        name:"googleplay",
        icon:<FaGooglePlay className="fa"/>
    }, 
    {
        name:"appstore",
        icon:<SiAppstore className="fa"/>
    }
];

export default function GameLinks(props) {
    const game = props.game;
    const links = Object.entries(game.links);
    const buttonGen = ([platform, link]) => {

        const platformObject = possiblePlatforms.find(e => e.name === platform);
        const platformIcon = platformObject.icon;

        if (link === "soon") {
            return (<div className="platformButton"  key={platform}>
                <div>
                    {platformIcon}
                </div>
                <div className="comingSoonMessage">
                    <h4>Coming Soon</h4>
                </div>
            </div>)
        }

        return (<a 
            className="platformButton" 
            key={platform} 
            href={link} 
            target="_blank" 
            rel="noreferrer"
        >
            {platformIcon}
        </a>)

    }

    // const checkPlatform = function(property, icon, array) {
    //     if (props.game.links.hasOwnProperty(property)) {
    //         array.push(
    //             <a className="platformButton" key={property} href={props.game.links[property]} target="_blank" rel="noreferrer">
    //                 {icon}
    //             </a>
    //         )
    //     }
    //     return array
    // }

    // const platformButtons = function () {
    
    //     let buttonArray = [];
    //     buttonArray = checkPlatform("steam", <FaSteamSymbol className="fa"/>, buttonArray);
    //     buttonArray = checkPlatform("xbox", <FaXbox className="fa" />, buttonArray);
    //     buttonArray = checkPlatform("ps", <SiPlaystation className="fa" />, buttonArray);
    //     buttonArray = checkPlatform("itch", <FaItchIo className="fa"/>, buttonArray);
    //     buttonArray = checkPlatform("googleplay", <FaGooglePlay className="fa"/>, buttonArray);
    //     buttonArray = checkPlatform("appstore", <SiAppstore className="fa"/>, buttonArray);
    //     return buttonArray
    // }

    return (
        <div className="platformButtons">
            {links.map(e => buttonGen(e))}
        </div>
    )
}