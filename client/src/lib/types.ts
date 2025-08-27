export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Expense {
  id: number;
  amount: number;
  category: string;
  date: string;
  location: string;
  description: string;
  userId: number;
}

export interface CreateExpenseDto {
  amount: number;
  category: string;
  date: string;
  location: string;
  description: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}
