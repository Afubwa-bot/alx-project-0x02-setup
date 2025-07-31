import react from "react";
import {ButtonProps, ButtonSize, ButtonShape} from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
    children, // content inside the buttom ( eg text or icon)
    size = "medium", // default size is medium
    shape = "rounded-md", // default shape is rounded-md
    className = "", // allows additional classes to be passed 
    ...rest // collects any other standard button props(onClick, disabled, etc.)
}) => {
    // define tailwind css classes based on size prop
    const sizeClasses: Record<ButtonSize, string> = {
        small: "px-3 py-1 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg",
    };

    // define tailwind css classes based on shape prop
    const shapeClasses: Record<ButtonShape, string> = {
        "rounded-sm": "rounded-sm",
        "rounded-md": "rounded-md",
        "rounded-lg": "rounded-lg",
    };

    //combine all classes: base style , size- specific, shape-specific, and any custom classes
    const combinedClasses = 
    `bg-blue-600 text-white font-semibold ease-in-out 
    transition-colors duration-200 hover:bg-blue-600 
    focus:outline-none focus:ring-2 focus:ring-blue-400 
    ${sizeClasses[size]} 
    ${shapeClasses[shape]} 
    ${className}
    `.replace(/\s+/g, ' ').trim(); // clean uo extra spaces

    return (
        <button className={combinedClasses} {...rest}>
            {children} {/* render children inside the button */}
        </button>
    );
};

export default Button;
