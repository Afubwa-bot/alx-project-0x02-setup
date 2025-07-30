import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
     return (
    <header className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">ALX App</h1>
        <nav>
          <ul className="flex space-x-4">
            {/* Use links components from client-side nav*/}
            <li><Link href="/" className="hover:underline"> Home (Root)</Link></li>
            <li><Link href="/home" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;