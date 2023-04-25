import React from "react";

export default function KeyGameInfo({game, title}) {
    return(
        <div className="keyGameInfo">
            {title ? <h1>{game.name}</h1> : ""}
            <h2>{game.role} | {game.developer}</h2>
        </div>
    )
}