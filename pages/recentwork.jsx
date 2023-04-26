import Head from 'next/head'
import Header from 'pages/component/header.jsx';
import Footer from "pages/component/footer";
import KeyTile from 'pages/component/keytile.jsx';
import InfoPreview from "pages/component/infoPreview";
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
    {currentOpenState === e.slug ? <InfoPreview game={e} more={true}/> : ""}
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
