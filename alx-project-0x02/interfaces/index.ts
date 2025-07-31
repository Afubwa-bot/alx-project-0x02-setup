export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface CardProps {
  title: string;
  content: string;
}

// defines types for button size and shapes
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-lg';

/**
 * props for the reusable button component.
 * extennds react.ButtonHTMLAttributes<HTMLButtonElement> to include all standard button attributes.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  shape?: ButtonShape;
}
/**
 * Interface for a Post object, matching JSONPlaceholder structure.
 * content is mapped from 'body' for consistency with Card component.
 */
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string; // Original field name from API
  content?: string; // Optional field for display, mapped from body
}

/**
 * Interface for a User object, extended to match JSONPlaceholder structure for UserCard.
 */
export interface User {
  id: number;
  name: string;
  username: string; // Added username
  email: string;
  phone: string; // Added phone
  website: string; // Added website
  address: { // Nested address object
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: { // Nested company object
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
