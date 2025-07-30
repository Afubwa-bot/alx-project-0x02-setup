import React from "react";
 import { CardProps } from "../../interfaces";
 // import the cardprops interface

 const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm w-full transition-transform transform hover:scale-105">
            {/* Card component */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
            <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
    );
};
export default Card;