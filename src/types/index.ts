export interface Transaction {
  id: number;
  amount: number;
  category: string;
  description: string;
  date: string;
}

export interface SavingsGoal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
}

export interface Reminder {
  id: number;
  description: string;
  date: string;
}

export interface Reminder {
  id: number;
  description: string;
  date: string; // Puedes usar un formato de fecha como 'YYYY-MM-DD'
}
