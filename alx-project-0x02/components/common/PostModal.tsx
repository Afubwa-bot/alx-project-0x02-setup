// components/common/PostModal.tsx
import React, { useState } from 'react';

// Define the props interface for the PostModal component
interface PostModalProps {
  isOpen: boolean; // Controls whether the modal is visible
  onClose: () => void; // Function to call when the modal should close
  onSubmit: (title: string, content: string) => void; // Function to call when the form is submitted
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  // State to manage the input values for title and content
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  // If the modal is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    onSubmit(title, content); // Pass the input values to the onSubmit prop
    setTitle(''); // Clear the title input field
    setContent(''); // Clear the content input field
  };

  return (
    // Modal overlay: fixed position, covers the whole screen, semi-transparent background
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Modal content container */}
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative animate-fade-in-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Create New Post</h2>

        {/* Form for title and content input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="postTitle" className="block text-lg font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              id="postTitle"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="postContent" className="block text-lg font-medium text-gray-700 mb-2">
              Content
            </label>
            <textarea
              id="postContent"
              rows={5}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            {/* Cancel button */}
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-300 text-gray-800 rounded-md font-semibold hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            {/* Submit button */}
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
