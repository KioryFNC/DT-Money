import { createContext} from "react";

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction []
}

export const TransactionsContext = createContext({} as TransactionContextType)