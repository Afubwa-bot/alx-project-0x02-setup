import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header'; // Import the Header component
import Card from '../components/common/Card'; // Import the new Card component

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page of ALX Project 2" />
      </Head>
      <Header /> {/* Include the Header component */}
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8">Welcome Home!</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-12">
          This is a demonstration of basic routing and reusable components in Next.js.
          Below are some dynamic cards.
        </p>

        <div className="flex flex-wrap justify-center gap-6"> {/* Container for cards */}
          <Card
            title="Next.js Fundamentals"
            content="Next.js provides a powerful framework for building React applications with features like server-side rendering and static site generation."
          />
          <Card
            title="TypeScript Advantage"
            content="TypeScript adds type safety to JavaScript, helping to catch errors early and improve code maintainability and readability."
          />
          <Card
            title="Tailwind CSS Styling"
            content="Tailwind CSS is a utility-first CSS framework that enables rapid UI development by composing classes directly in your markup."
          />
          <Card
            title="Reusable Components"
            content="Building modular and reusable components like this Card helps in creating scalable and maintainable user interfaces."
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
