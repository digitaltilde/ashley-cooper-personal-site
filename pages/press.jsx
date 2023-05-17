import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from 'pages/component/header.jsx';
import Footer from 'pages/component/footer.jsx';
import cloudinaryUrl from "pages/component/cloudinaryUrl";
import press from 'lib/press.json';
import { useState } from "react";
import { FaPodcast, FaSpotify } from "react-icons/fa";
import { SiGooglepodcasts } from "react-icons/si";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";

export default function Press() {
    const [ expandState, setExpandState] = useState("");
    const multiPodcasts = press.filter(e => e.type === "podcast" && e.episodes.length > 1);
    const singlePodcasts = press.filter(e => e.type === "podcast" && e.episodes.length === 1);

    const handleClick = function(gameTitle) {
        if (expandState !== gameTitle) {
            setExpandState(gameTitle);
        } else {
            setExpandState("");
        }
    }

    return(<>
        <Head>
            <title>Ashley Cooper | Press</title>
            <meta name="description" content="Press acknowledgements for Ashley Cooper's recent work as a video game writer, including recent podcast appearances." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        
        <Header active="Press" />

        <main className="pressMain">
            {multiPodcasts.map(e => (
                <div className={expandState === e.podtitle ? "multipodContainer" : "multipodContainer disabled"}>
                    <div className="podHeader multi">
                        <a href={e.web} target="_blank">
                            <Image 
                                alt={`Podcast artwork for ${e.podtitle}`}
                                src={cloudinaryUrl(e.image, {
                                    transformation: {
                                        resize: {
                                            width:500,
                                            height:500
                                        }
                                    }
                                })} 
                                placeholder="blur"
                                blurDataURL={e.artworkBlur}
                                className="podArt"
                                width="500"
                                height="500"
                            />
                        </a>
                        <div className="podText">
                            <div>
                                <a href={e.web} target="_blank">
                                    <h4 className="podTitle">{e.podtitle}</h4>
                                </a>
                                <p className="podDescription">{e.podDescription}</p>
                            </div>
                            <div className="buttonContainer">
                                <button onClick={(g) => handleClick(e.podtitle)}>
                                    {
                                        expandState === e.podtitle 
                                        ?
                                        <IoIosArrowDropupCircle className="multipodDropdown"/>
                                        :
                                        <IoIosArrowDropdownCircle className="multipodDropdown"/>
                                    }
                                    &nbsp;&nbsp;Appearances
                                </button>
                            </div>
                        </div>
                    </div>
                    {e.episodes.map((f,i) => (
                        <div 
                            className={expandState === e.podtitle ? "podHeader drop" : "podHeader drop disabled"}
                            style={{transitionDelay:`${0.25*i}s`}}
                        >
                            <div className="podText">
                                <a href={f.web ? f.web : f.spotify} target="_blank">
                                    <h4 className="epTitle">"{f.eptitle}"</h4>
                                    <p className="epDescription">{f.description}</p>
                                </a>
                            </div>
                            <div className="podButtons">
                                <a className="platformButton" href={e.episodes[0].spotify} target="_blank">
                                    <FaSpotify className="fa" />
                                </a>
                                <a className="platformButton" href={e.episodes[0].applepod} target="_blank">
                                    <FaPodcast className="fa" />
                                </a>
                                <a className="platformButton" href={e.episodes[0].google} target="_blank">
                                    <SiGooglepodcasts className="fa" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            {singlePodcasts.map(e => (
                <div className="podHeader single">
                    <a href={e.episodes[0].web ? e.episodes[0].web : e.episodes[0].spotify} target="_blank">
                        {<img 
                            src={e.image} 
                            className="podArt"
                        />}
                    </a>
                    <div className="podText">
                        <a href={e.episodes[0].web ? e.episodes[0].web : e.episodes[0].spotify} target="_blank">
                            <h4 className="podTitle">{e.podtitle}</h4>
                            <h4 className="epTitle">"{e.episodes[0].eptitle}"</h4>
                        </a>
                        <p className="epDescription">{e.episodes[0].description}</p>
                    </div>
                    <div className="podButtons">
                        <a className="platformButton" href={e.episodes[0].spotify} target="_blank">
                            <FaSpotify className="fa" />
                        </a>
                        <a className="platformButton" href={e.episodes[0].applepod} target="_blank">
                            <FaPodcast className="fa" />
                        </a>
                        <a className="platformButton" href={e.episodes[0].google} target="_blank">
                            <SiGooglepodcasts className="fa" />
                        </a>
                    </div>
                </div>
            ))}
        </main>

        <Footer />
    </>)
}