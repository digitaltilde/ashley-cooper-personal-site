import React from "react";
import Image from "next/image";
import cloudinaryUrl from "./cloudinaryUrl";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import KeyGameInfo from "./keygameinfo";

export default function KeyTile(props) {
    const game = props.game;
    const openState = props.openState;
    const setOpenState = props.setOpenState;
    const gamePage = openState === "gamePage";
    const expanded = openState === game.slug;
    let browserAspect = 0;

    if (typeof window !== "undefined") {
        browserAspect = window.innerWidth / window.innerHeight;
    }

    const aspectModifier = (browserAspect + 1)/2;


    const layerMaker = function (source, speed, layerNumber, placeholder) {
        return (<ParallaxBannerLayer speed={speed} key={`layer${layerNumber}`}>
            <Image 
                src={cloudinaryUrl(source)}
                alt={`Layer ${layerNumber} of an image where ${game.primaryalt}`}
                loading={(props.gameIndex < 3) && (expanded === false) ? "eager" : "lazy"}
                width={game.laxwidth}
                height={game.laxheight}
                sizes="(max-width: 1081px) 100vw,
                    (max-width: 2161px) 80vw,
                    60vw"
                blurDataURL={placeholder}
            />
        </ParallaxBannerLayer>)
    }
    
    const fillLayerList = function() {
        const layerList = [];
        if (!expanded && !gamePage) {
            layerList.push(layerMaker(
                game.duolax.length === 1 ? game.duolax[0][0] : game.duolax[1][0], 
                -4 * aspectModifier, 
                2,
                game.duolax.length === 1 ? game.duolax[0][1] : game.duolax[1][1],
            ));
            layerList.push(layerMaker(
                game.duolax.length === 1 ? game.fulllax[0][0] : game.duolax[0][0], 
                0, 
                1,
                game.duolax.length === 1 ? game.fulllax[0][1] : game.duolax[0][1],
            ));
        } else {
            for (let i = game.fulllax.length - 1; i >= 0; i--) {
                layerList.push(layerMaker(
                    game.fulllax[i][0], 
                    (game.fulllaxdepth[i] * aspectModifier), 
                    (i + 1),
                    game.fulllax[i][1]
                ))
            }
        }
        return layerList;
    }

    return (
    <div
        className={gamePage || expanded ? "keyTile large" : "keyTile small"}
        onClick={gamePage ? (e) => {} : (e) => setOpenState((f) => f===game.slug ? "none" : `${game.slug}`)}
    >
        <ParallaxBanner
            className={expanded || gamePage ? "fullTile" : "compressedTile"}
            id={`${game.slug}Parallax`}
        >
            {fillLayerList()}
        </ParallaxBanner>
        { gamePage ? "" :
            expanded 
            ? <KeyGameInfo game={game} title={true}/> : 
            // <img src={game.logo} className="outerGameLogo logoStyling"/>
            <img 
                src={cloudinaryUrl(game.logo)} 
                className="outerGameLogo logoStyling"
                alt={`The ${game.name} logo`}
            />
        }
    </div>);
}