import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE } from "../constant"

export const addExpenseAction = (expenseData) => {
    console.log("action...",expenseData);
    return{
        type: ADD_EXPENSE,
        payload: expenseData
    }
}

export const deleteExpenseAction = (id) => {
    return{
        type: DELETE_EXPENSE,
        payload:id
    }
}

export const editExpenseAction = (updateExpense) => {
    return{
        type: EDIT_EXPENSE,
        payload:updateExpense
    }
}