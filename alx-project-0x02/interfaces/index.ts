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
