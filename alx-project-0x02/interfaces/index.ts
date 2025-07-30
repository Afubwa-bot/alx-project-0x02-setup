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
