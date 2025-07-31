// pages/about.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header'; 
import Button from '../components/common/Button'; 

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about ALX Project 2" />
      </Head>
      <Header /> {/* Include the Header component */}
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">About Our Project</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          ALX Project 2 is a foundational Next.js application designed to demonstrate
          core concepts like project scaffolding, TypeScript, Tailwind CSS, and basic routing.
        </p>
        <p className="text-md text-gray-600 mt-4">
          We are committed to building robust and scalable web applications.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Exploring Buttons</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <Button size="small" shape="rounded-sm"
          onClick={() => alert('Small button clicked!')}>
            Small Button
            </Button>
          
          <Button size="medium" shape="rounded-md"
            onClick={() => alert('Medium button clicked!')}>
            Medium Button
            </Button>
          
          <Button size="large" shape="rounded-lg"
          onClick={() => alert('Large button clicked!')}>
          Large Button
          </Button>


          <Button size="medium" shape="rounded-lg" className="bg-purple-600 hover:bg-purple-700">
            Custom Purple
          </Button>

          {/* Example of a disabled button */}
          <Button size="medium" disabled>
            Disabled Button
            </Button>
          </div>
      </main>
    </>
  );
};

export default AboutPage;
