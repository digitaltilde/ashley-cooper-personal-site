import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../component/header";
import Footer from "../component/footer";
import KeyTile from "../component/keytile";
import games from "../lib/games.json";
import KeyGameInfo from "../component/keygameinfo";
import GameLinks from "../component/gameLinks";
import Image from "next/image";
import cloudinaryUrl from "../component/cloudinaryUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function GamePage({index}) {
    const game = games[index];

    const awardsSection = function() {
        if (game.hasOwnProperty("awards") === false) {
            return "";
        }
        return (<div className="awardsContainter" key={`${game.name} awards`}>
            {game.awards.map(e => (
                <a href={e.link} target="_blank" rel="noreferrer" className="awardTile" key={e.title}>
                    <div className="logoContainer" >
                        <img 
                            src={cloudinaryUrl(e.logo)}
                            alt={`The ${e.org} logo`}
                        />
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

            <div className="logoHeader">
                <Image 
                    src={cloudinaryUrl(game.secondary)}
                    alt={game.secondaryalt}
                    className="logoHeaderBackground"
                    width={game.secondaryWidth}
                    height={game.secondaryHeight}
                    sizes="(max-width: 1081px) 100vw,
                    (max-width: 2161px) 80vw,
                    60vw"
                />
                <img 
                    src={cloudinaryUrl(game.logo)} 
                    className="logoHeaderLogo logoStyling" 
                    alt={`The ${game.name} logo`}
                />
            </div>

            <div className="fullPageGameInfo">
                <KeyGameInfo game={game} title={false} />

                <GameLinks game={game} />

                { game.reel ? <div className="reelFrame fullpage">
                    <iframe 
                        width="100%"
                        height="100%"
                        src={game.reel}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div> : ""}

                <p className="gameSummary fullpage">{`"${game.summary}"`}</p>

            </div>

            <KeyTile
                game={game}
                openState={"gamePage"}
            />

            {awardsSection()}

            <div className="reviewSection" >
                {game.press.map((e,i) => (
                    <div className="pressQuoteDiv" key={`Quote ${i}`}>
                        <h1 className="quoteMark front">&quot;</h1>
                        <h4 className="pressQuote">{e.quote}</h4>
                        <h1 className="quoteMark back">&quot;</h1>
                        <a href={e.link} target="_blank" rel="noreferrer" className="pressCrediting">
                            {`- ${e.author} for `}<u>{e.outlet}</u>
                        </a>
                    </div>
                ))}
            </div>

            <Link href="/recentwork"><button style={{width:292}}>
                <FontAwesomeIcon icon={faArrowLeft} className="fa"/>
                &nbsp;&nbsp;Back to Recent Work
            </button></Link>

        </main>
        <Footer />
    </>)

}
export const getStaticPaths = async () => {
    const paths = games
        .filter(e => e.message ? false : true)
        .map(e => ({params: { "gameslug" : e.slug }}));
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