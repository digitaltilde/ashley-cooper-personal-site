import React from "react";
import Image from "next/image";
import Head from "next/head";
import Header from 'pages/component/header.jsx';
import Footer from 'pages/component/footer.jsx';

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
            <Image 
                src="https://res.cloudinary.com/dlo7ailaj/image/upload/v1682210486/AshleyCooper/ashleyheadshot1.jpg" 
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dlo7ailaj/image/upload/f_auto,e_blur:1000,w_115/v1682210486/AshleyCooper/ashleyheadshot1.jpg"
                className="bioHeroImage" 
                width="400"
                height="711"
            />
            <div className="bioWriting">
                <p>As Narrative Lead at Saber Interactive, Ashley Cooper is focused on creating complex, compelling
                    characters, as well as the interplay between story and gameplay. With experience across various genres,
                    including games like Warhammer 40K: Space Marine 2, Later Daters, Gotham Knights, and RuPaul’s Drag
                    Race Superstar, Ashley is a narrative chameleon, shaping her voice and narrative delivery dependent on
                    the task at-hand.
                </p>
                <p>For the past three years, Ashley has served on the jury of the&nbsp;
                    <a href="https://www.academy.ca/WMAccess_Writers/" target="_blank">
                        Warner Bros. Discovery X Canadian Academy Writers Program
                    </a>, which selects marginalized film &amp; television writers for career support &amp;
                    mentorship and sits on the Board of Directors for&nbsp;
                    <a href="https://dmg.to" target="_blank">
                        Dames Making Games
                    </a>
                    , an organization that provides
                    resources for marginalized developers. She is an advocate for representation in games and believes
                    games are for everyone.
                </p>
                <div className="industryCardContainer" >
                    <a href="https://www.academy.ca/WMAccess_Writers/" target="_blank" className="industryCard">
                        <div className="industryLogo" >
                            <img src="https://res.cloudinary.com/dlo7ailaj/image/upload/v1680836319/AshleyCooper/Other/Writers-Program-Logo-FINAL-1-1024x325_qtby2k.png"/>
                        </div>
                        <h4>Selection Committee Member<br/>2021, 2022, & 2023</h4>
                    </a>
                    <a href="https://dmg.to" target="_blank" className="industryCard">
                        <div className="industryLogo" >
                            <img src="https://res.cloudinary.com/dlo7ailaj/image/upload/v1680836505/AshleyCooper/Other/fecc1d5a-fb41-4217-9e3f-830d2c5a1e3a_f0e3uo.png"/>
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