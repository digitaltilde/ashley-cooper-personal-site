import React from "react";
import Image from "next/image";
import Head from "next/head";
import Header from 'component/header.jsx';
import Footer from 'component/footer.jsx';

export default function About() {

    return(<>
        <Head>
            <title>Ashley Cooper | About</title>
            <meta name="description" content="A summary of Ashley Cooper's career in writing and development for video games." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
      </Head>
      
      <Header active="About" />

      <main>
        <section className="bioSection" >
            {/* <div className="bioHeroImage" > */}
                <Image 
                    src="https://res.cloudinary.com/dlo7ailaj/image/upload/v1682210486/AshleyCooper/ashleyheadshot1.jpg" 
                    alt="A mid-30s woman with winged eyeliner, red lipstick, and a Mjölnir necklace in front of a room bathed in purple light."
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,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"
                    width="500"
                    height="889"
                    className="bioHeroImage"
                />
            {/* </div> */}
            <div className="bioWriting">
                <p>Ashley Cooper is a game writer focused on creating complex, compelling characters, as well as the
                    interplay between story and gameplay. With experience across various genres, including games like
                    Warhammer 40K: Space Marine 2, Later Daters, Gotham Knights, and RuPaul’s Drag Race Superstar,
                    Ashley is a narrative chameleon, shaping her voice and narrative delivery dependent on the task at-
                    hand. She is currently a Senior Writer at EA Motive.
                </p>
                <p>For the past three years, Ashley has served on the jury of the&nbsp;
                    <a href="https://www.academy.ca/WMAccess_Writers/" rel="noreferrer" target="_blank">
                        Warner Bros. Discovery X Canadian Academy Writers Program
                    </a>, which selects marginalized film &amp; television writers for career support &amp;
                    mentorship and sits on the Board of Directors for&nbsp;
                    <a href="https://dmg.to" rel="noreferrer" target="_blank">
                        Dames Making Games
                    </a>
                    , an organization that provides
                    resources for marginalized developers. She is an advocate for representation in games and believes
                    games are for everyone.
                </p>
                <div className="industryCardContainer" >
                    <a href="https://www.academy.ca/WMAccess_Writers/" target="_blank" rel="noreferrer" className="industryCard">
                        <div className="industryLogo" >
                            <img 
                                src="https://res.cloudinary.com/dlo7ailaj/image/upload/v1680836319/AshleyCooper/Other/Writers-Program-Logo-FINAL-1-1024x325_qtby2k.png"
                                alt="WarnerMedia x Canadian Academy Global Access Writers Program"
                            />
                        </div>
                        <h4>Selection Committee Member<br/>2021, 2022, & 2023</h4>
                    </a>
                    <a href="https://dmg.to" target="_blank" rel="noreferrer" className="industryCard">
                        <div className="industryLogo" >
                            <img 
                                src="https://res.cloudinary.com/dlo7ailaj/image/upload/v1680836505/AshleyCooper/Other/fecc1d5a-fb41-4217-9e3f-830d2c5a1e3a_f0e3uo.png"
                                alt="DMG+: Dames Making Games"
                            />
                        </div>
                        <h4>Member of the Board of Directors<br/>2023</h4>
                    </a>
                </div>
            </div>
        </section>
      </main>

        <Footer />
    </>)
}