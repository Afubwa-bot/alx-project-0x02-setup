import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header'; // Import the Header component
import Card from '@/components/common/Card'; // Import the new Card component
import PostModal from '@/components/common/PostModal';

// defines a type for a post , to be consistent with the data it will store
interface Post {
  title:string;
  content:string ;
}

const HomePage: React.FC = () => {
  // state to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // state to store the list of posts ,initialized with with some defaults cards 
  const [posts , setPosts] = useState<Post[]>([
  {
  title: "Next.js Fundamentals",
  content: "Next.js provides a powerful framework for building React applications with features like server-side rendering and static site generation.",
  },
  {
  title:"TypeScript Advantage",
  content: "TypeScript adds type safety to JavaScript, helping to catch errors early and improve code maintainability and readability.",
  },
  {
  title:" Tailwind CSS Styling ",
  content: "Tailwind CSS is a utility-first CSS framework that enables rapid UI development by composing classes directly in your markup.",

  },
  {
  title: "Reusable Components",
  content: "Building modular and reusable components like this Card helps in creating scalable and maintainable user interfaces.",
  },
  ]);
// function to handle opening the modal
const handleOpenModal =() =>{
  setIsModalOpen(true);
};

// function to handle closing the moda; 
const handleCloseModal = ()=> {
  setIsModalOpen(false); 
}

//function to handle new post submission from the modal
const handleAddPost = (newTitle: string , newContent: string)=> {
  const newPost: Post = {title: newTitle , content: newContent};
  setPosts((prevPosts)=> [newPost, ...prevPosts]); // Adds new post at the beginning of a new arra
  setIsModalOpen(false); //closing the modal after post submission 
};

return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page of ALX Project 2" />
      </Head>
      <Header />
      <main className="min-h-screen flex flex-col items-center bg-gray-50 p-4 pt-20"> {/* Added pt-20 for header spacing */}
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8">Welcome Home!</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-12">
          This page demonstrates basic routing, reusable components, and a dynamic modal for adding content.
        </p>

        {/* Button to open the modal */}
        <button
          onClick={handleOpenModal}
          className="mb-12 px-8 py-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors text-xl font-semibold transform hover:scale-105"
        >
          Add New Post
        </button>

        {/* Container for dynamically rendered cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      {/* PostModal component, conditionally rendered based on isModalOpen state */}
      <PostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddPost}
      />
    </>
  );
};

export default 'Homepage';
