import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./component/header";
import Footer from "./component/footer";
import KeyTile from "./component/keytile";
import games from "../lib/games.json";
import KeyGameInfo from "./component/keygameinfo";
import GameLinks from "./component/gameLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function GamePage({index}) {
    const game = games[index];
    const reelUrl = new URL(game.reel);

    const awardsSection = function() {
        if (game.hasOwnProperty("awards") === false) {
            return "";
        }
        return (<div className="awardsContainter">
            {game.awards.map(e => (
                <a href={e.link} target="_blank" className="awardTile" key={e.title}>
                    <div className="logoContainer" >
                        <img src={e.logo} />
                    </div>
                    <h4>{e.status}<br/>{e.title}<br/>{e.year}</h4>
                </a>
            ))}
        </div>);
    }

    return(<>
        <Head>
            <title>Ashley Cooper | {game.name}</title>
            <meta name="description" content={game.summary} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Header active="Recent Work"/>
        <main className='gameSection'>

            <div className="logoHeader" style={{backgroundImage:`url(${game.secondary}`}}>
                <img src={game.logo} className="logoHeaderLogo logoStyling" />
                {/* <img src={game.secondary} className="logoHeaderBackground" /> */}
            </div>

            <div className="fullPageGameInfo">
                <KeyGameInfo game={game} title={false} />

                <GameLinks game={game} />

                <div className="reelFrame fullpage">
                    <iframe 
                        width="100%"
                        height="100%"
                        src={reelUrl}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>

                <p className="gameSummary fullpage">{`"${game.summary}"`}</p>

            </div>

            <KeyTile
                game={game}
                openState={"gamePage"}
            />

            {awardsSection()}

            <div className="reviewSection" >
                {game.press.map((e) => (
                    <div className="pressQuoteDiv">
                        <h1 className="quoteMark front">"</h1>
                        <h4 className="pressQuote">{e.quote}</h4>
                        <h1 className="quoteMark back">"</h1>
                        <a href={e.link} target="_blank" className="pressCrediting">
                            {`- ${e.author} for `}<u>{e.outlet}</u>
                        </a>
                    </div>
                ))}
            </div>

            <Link href="/recentwork"><button>
                <FontAwesomeIcon icon={faArrowLeft} className="fa"/>
                &nbsp;&nbsp;Back to Recent Work
            </button></Link>

        </main>
        <Footer />
    </>)

}
export const getStaticPaths = async () => {
    const paths = games.map(e => ({params: { "gameslug" : e.slug }}));
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (props) => {
    const currentSlug = props.params.gameslug;
    const gameIndex = games.findIndex((e) => e.slug === currentSlug);
    return {
        props: {
            index: gameIndex
        }
    }
}