import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:5000/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    const [isLoggedIn, setIsLoggedInState] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true'
    });

    const setIsLoggedIn = (value) => {
        setIsLoggedInState(value);
        if (value) {
            localStorage.setItem('isLoggedIn', 'true');
        } else {
            localStorage.removeItem('isLoggedIn');
        }
    };

    //calculate incomes
    const addIncome = async (income) => {
        try {
            await axios.post(`${BASE_URL}add-income`, income)
            setError(null)
            getIncomes()
            return true
        } catch (err) {
            setError(err.response?.data?.message || err.message)
            return false
        }
    }

    const getIncomes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-incomes`)
            if (Array.isArray(response.data)) {
                setIncomes(response.data)
            }
        } catch (err) {
            console.error("Error fetching incomes:", err)
        }
    }

    const deleteIncome = async (id) => {
        try {
            await axios.delete(`${BASE_URL}delete-income/${id}`)
            getIncomes()
        } catch (err) {
            console.error("Error deleting income:", err)
        }
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate expenses
    const addExpense = async (expense) => {
        try {
            await axios.post(`${BASE_URL}add-expense`, expense)
            setError(null)
            getExpenses()
            return true
        } catch (err) {
            setError(err.response?.data?.message || err.message)
            return false
        }
    }

    const getExpenses = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-expenses`)
            if (Array.isArray(response.data)) {
                setExpenses(response.data)
            }
        } catch (err) {
            console.error("Error fetching expenses:", err)
        }
    }

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${BASE_URL}delete-expense/${id}`)
            getExpenses()
        } catch (err) {
            console.error("Error deleting expense:", err)
        }
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }

    const transactionHistory1 = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history
    }

    const signOut = () => {
        setIsLoggedIn(false);
      };





    return (
        <GlobalContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            signOut,
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            transactionHistory1,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}