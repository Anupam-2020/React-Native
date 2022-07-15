import { createContext, useReducer } from "react";


const DUMMY_EXPENSES = [
    {
        id:'e1',
        description:'A pair of shoes',
        amount: 56.67,
        date: new Date('2022-07-02')
    },
    {
        id:'e2',
        description:'Jeans',
        amount: 78.90,
        date: new Date('2022-07-04')
    },
    {
        id:'e3',
        description:'Fruits',
        amount: 4.45,
        date: new Date('2022-07-04')
    },
    {
        id:'e4',
            description:'Fruits',
            amount: 4.45,
            date: new Date('2022-07-04')
    },
    {
        id:'e5',
        description:'Jeans',
        amount: 78.90,
        date: new Date('2022-05-04')
    },
    {
        id:'e6',
        description:'A pair of shoes',
        amount: 56.67,
        date: new Date('2022-07-02')
    },
    {
        id:'e7',
        description:'A pair of shoes',
        amount: 56.67,
        date: new Date('2022-07-02')
    },
];


export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {}
});


function expensesReducer(state, action) {
    switch(action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString
            return [{...action.payload, id: id}, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updateItem = { ...updatableExpense, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updateItem
            return updatedExpenses;

        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
            default: 
            return state;
    }
}


function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({type: 'ADD', payload: expenseData});
    }

    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id})
    }

    function updateExpense(id, expenseData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }

    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}


export default ExpensesContextProvider;