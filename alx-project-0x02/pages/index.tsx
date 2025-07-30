import React from "react";
import  Head from "next/head";

const HomePage: React.FC = () => {
  return (
    <>
    <Head>
      <title>Welcome to ALX Project 2</title>
      <meta name="description" content="This is the home page of the ALX Project 2." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div  className ="min-h-screen flex items-center justify-center bg-graey-100 ">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to ALX Project 2
      </h1>   
    </div>
    </>
  );
};

export default HomePage;