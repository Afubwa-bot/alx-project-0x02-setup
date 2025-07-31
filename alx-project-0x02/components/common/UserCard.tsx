import React from 'react';
import { User } from '../../interfaces'; // Import the User interface

// Define props for UserCard, which is the User interface itself
interface UserCardProps {
  user: User; // Accepts a single User object
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 max-w-sm w-full transition-transform transform hover:scale-105">
      <h2 className="text-xl font-bold text-blue-800 mb-2">{user.name}</h2>
      <p className="text-gray-700 text-sm mb-1">
        <span className="font-semibold">Username:</span> {user.username}
      </p>
      <p className="text-gray-700 text-sm mb-1">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-700 text-sm mb-1">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
      <p className="text-gray-700 text-sm mb-1">
        <span className="font-semibold">Website:</span> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{user.website}</a>
      </p>
      <p className="text-gray-700 text-sm mt-2">
        <span className="font-semibold">Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
      </p>
      <p className="text-gray-600 text-xs mt-2 italic">Company: {user.company.name}</p>
    </div>
  );
};

export default UserCard;
