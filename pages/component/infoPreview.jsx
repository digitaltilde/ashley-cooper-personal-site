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
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
            <div className="descriptionFrame">
                {/* <h4 className="roleDescription">{props.game.roledescription}</h4> */}
                <p className="gameSummary">{`"${props.game.summary}"`}</p>
                {props.more ? <GameLinks game={props.game} /> : "" }
            </div>
        </div>
        {props.more ? 
        <Link href={`/${props.game.slug}`}>
            <button class="moreInfoButton" >
                More Info
            </button>
        </Link>
        :
        ""}
        
    </div>)
}