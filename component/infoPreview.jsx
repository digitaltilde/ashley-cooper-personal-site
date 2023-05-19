import React from "react";
import GameLinks from "./gameLinks";
import Link from "next/link";

export default function InfoPreview(props) {
    const reelUrl = new URL(props.game.reel);

    return (<div className="infoSection">

        <div className="topInfoSection">
            <div className="reelFrame">
                <iframe 
                    width="100%"
                    src={reelUrl}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>
            <div className="descriptionFrame">
                <p className="gameSummary">{`"${props.game.summary}"`}</p>
                {props.more ? <GameLinks game={props.game} /> : "" }
            </div>
        </div>
        {props.more ? 
        <Link href={`/${props.game.slug}`}>
            <button className="moreInfoButton" style={{width:151}}>
                More Info
            </button>
        </Link>
        :
        ""}
        
    </div>)
}