import React from 'react';
import { Post } from '../../interfaces'; // Import the Post interface

// Define props for PostCard, which is the Post interface itself
interface PostCardProps {
  post: Post; // Accepts a single Post object
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 max-w-sm w-full transition-transform transform hover:scale-105">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
      <p className="text-gray-700 text-sm mb-3 line-clamp-3">{post.body}</p> {/* Use post.body */}
      <div className="text-right text-xs text-gray-500">User ID: {post.userId}</div>
    </div>
  );
};

export default PostCard;
