import React from "react";
import Head from "next/head";
import Header from "../components/layout/Header";

const HomePage: React.FC = () => {
    return(
        <>
        <Head>
            <title> Home </title>
            <meta name = "description" content = " This is the home page for Airbnb clone project." />
        </Head>
        <Header /> {/* Include the Header component */}
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">Welcome </h1>
            <p className="text-lg text-gray-700 text-center max-w2xl">
                Exploring basic routing in Next.js with TypeScript.
            </p>
        </main>
        </>
    );
};

export default HomePage;