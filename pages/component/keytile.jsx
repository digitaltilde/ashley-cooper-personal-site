import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import KeyGameInfo from "./keygameinfo";

const imageSizer = function (url, width) {
    const [urlStart, urlEnd] = url.split("/upload/");
    const newAddress = new URL(urlStart + `/upload/w_${width}/` + urlEnd);
    return newAddress;
}

export default function KeyTile(props) {
    const game = props.game;
    const openState = props.openState;
    const setOpenState = props.setOpenState;
    const gamePage = openState === "gamePage";
    const expanded = openState === game.slug;
    
    const fillLayerList = function() {
        const layerList = [];
        if (!expanded && !gamePage) {
            layerList.push({image:imageSizer(game.duolax[1],1240), speed:-4});
            layerList.push({image:imageSizer(game.duolax[0],1240), speed:0});
        } else {
            for (let i = game.fulllax.length - 1; i >= 0; i--) {
                layerList.push({image:game.fulllax[i], speed:game.fulllaxdepth[i]})
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
            layers={fillLayerList()}
        />
        { gamePage ? "" :
            expanded 
            ? <KeyGameInfo game={game} title={true}/> : 
            <img src={imageSizer(game.logo,1240)} className="outerGameLogo logoStyling"/>
        }
    </div>);
}

// const imageSizer = function (url, width) {
//     const [urlStart, urlEnd] = url.split("/upload/");
//     const newAddress = new URL(urlStart + `/upload/w_${width}/` + urlEnd);
//     return newAddress;
// }

// export default function KeyTile(props) {
//     const game = props.game;
//     const openState = props.openState;
//     const setOpenState = props.setOpenState;
//     const gamePage = openState === "gamePage";
//     const expanded = openState === game.slug;

//     const layerMaker = function (source, speed, alt) {
//         return (<ParallaxBannerLayer speed={speed}>
//             <img 
//                 src={imageSizer(source,1240)}
//                 alt={alt}
//                 loading="lazy"
//                 translateY={game.yTranslation}
//             />
//         </ParallaxBannerLayer>)
//     }
    
//     const fillLayerList = function() {
//         const layerList = [];
//         if (!expanded && !gamePage) {
//             layerList.push(layerMaker(game.duolax[1], -4, "background"));
//             layerList.push(layerMaker(game.duolax[0], 0, "foreground"));
//         } else {
//             for (let i = game.fulllax.length - 1; i >= 0; i--) {
//                 layerList.push(layerMaker(game.fulllax[i], game.fulllaxdepth[i], "parallaxLayer"))
//             }
//         }
//         return layerList;
//     }

//     return (
//     <div
//         className={gamePage || expanded ? "keyTile large" : "keyTile small"}
//         onClick={gamePage ? "" : (e) => setOpenState((f) => f===game.slug ? "none" : `${game.slug}`)}
//     >
//         <ParallaxBanner
//             className={expanded || gamePage ? "fullTile aspect-[9/4]" : "compressedTile"}
//             id={`${game.slug}Parallax`}
//         >
//             {fillLayerList()}
//         </ParallaxBanner>
//         { gamePage ? "" :
//             expanded 
//             ? <KeyGameInfo game={game} title={true}/> : 
//             <img src={imageSizer(game.logo,1240)} className="outerGameLogo logoStyling"/>
//         }
//     </div>);
// }