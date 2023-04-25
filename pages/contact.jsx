import React from "react";
import Head from "next/head";
import Header from "pages/component/header";
import Footer from "pages/component/footer";
import ContactForm from "./component/contactForm";

export default function Contact() {
    return (<>
        <Head>
            <title>Ashley Cooper | Contact</title>
            <meta name="description" content="Contact video game writer Ashley Cooper by leaving your name, email, and a brief message." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
      </Head>

    <Header active="Contact"/>

    <ContactForm />

    <Footer />
    </>)
}