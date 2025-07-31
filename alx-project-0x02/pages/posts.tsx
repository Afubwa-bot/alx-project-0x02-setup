import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard'; // Import PostCard
import { Post } from '../interfaces'; // Import Post interface

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <Head>
        <title>Posts Page</title>
        <meta name="description" content="Displaying a list of posts" />
      </Head>
      <Header />
      <main className="min-h-screen flex flex-col items-center bg-gray-50 p-4 pt-20">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-8">Our Latest Posts</h1>
        {loading && <p className="text-lg text-gray-600">Loading posts...</p>}
        {error && <p className="text-lg text-red-500">Error: {error}</p>}
        {!loading && !error && posts.length === 0 && (
          <p className="text-lg text-gray-600">No posts found.</p>
        )}
        <div className="flex flex-wrap justify-center gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
};

export default PostsPage;
