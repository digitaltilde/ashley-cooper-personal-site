import Head from 'next/head'
import Header from 'component/header.jsx';
import Footer from "component/footer";
import KeyTile from 'component/keytile.jsx';
import InfoPreview from "component/infoPreview";
import games from "lib/games.json";
import { useState } from 'react';

const createWorkTile = function(e, i, currentOpenState, setTheOpenState) {

  return (<div className={`workTile`} key={e.slug}>
    <KeyTile
      game={e}
      gameIndex={i}
      openState={currentOpenState}
      setOpenState={setTheOpenState}
    />
    {currentOpenState !== e.slug ? "" : 
      e.message ? <h4 className="minimalMessage">{e.message}</h4>: <InfoPreview game={e} more={true}/> }
  </div>)
}

export default function Home() {
  const [ openState, setOpenState ] = useState("none");

  let mainContent = games.map((e, i) => createWorkTile(e, i, openState, setOpenState));

  return (
    <>
      <Head>
        <title>Ashley Cooper | Recent Work</title>
        <meta name="description" content="A portfolio of Ashley Cooper's recent credits in video game writing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header active="Recent Work" />

      <main 
      // onLoad={handleLoad()} 
      className='gamesSection'>

        {mainContent}

      </main>
      
      <Footer />
    </>
  )
}
