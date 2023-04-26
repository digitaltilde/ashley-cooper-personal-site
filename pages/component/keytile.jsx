import React from "react";
import Image from "next/image";
import buildUrl from "cloudinary-build-url";
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
    console.log(browserAspect);

    const aspectModifier = (browserAspect + 1)/2;

    const cloudinaryUrl = function(image) {
        return buildUrl(image, {
        cloud: {
            cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
        }
    })};


    // const imageSizer = function (url, width) {
    //     const [urlStart, urlEnd] = url.split("/upload/");
    //     const newAddress = new URL(urlStart + `/upload/w_${width}/` + urlEnd);
    //     return newAddress;
    // }

    const layerMaker = function (source, speed, alt) {
        return (<ParallaxBannerLayer speed={speed}>
            <Image 
                src={cloudinaryUrl(source)}
                alt={alt}
                loading={(props.gameIndex < 3) && (expanded === false) ? "eager" : "lazy"}
                width={game.laxwidth}
                height={game.laxheight}
                sizes="(max-width: 1081px) 100vw,
                    (max-width: 2161px) 80vw,
                    60vw"
            />
        </ParallaxBannerLayer>)
    }
    
    const fillLayerList = function() {
        const layerList = [];
        if (!expanded && !gamePage) {
            layerList.push(layerMaker(game.duolax[1], -4 * aspectModifier, "background"));
            layerList.push(layerMaker(game.duolax[0], 0, "foreground"));
        } else {
            for (let i = game.fulllax.length - 1; i >= 0; i--) {
                layerList.push(layerMaker(game.fulllax[i], (game.fulllaxdepth[i] * aspectModifier), "parallaxLayer"))
            }
        }
        return layerList;
    }

    return (
    <div
        className={gamePage || expanded ? "keyTile large" : "keyTile small"}
        onClick={gamePage ? "" : (e) => setOpenState((f) => f===game.slug ? "none" : `${game.slug}`)}
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
            <img src={cloudinaryUrl(game.logo)} className="outerGameLogo logoStyling"/>
        }
    </div>);
}