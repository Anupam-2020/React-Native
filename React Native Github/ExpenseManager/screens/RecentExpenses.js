import { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
// import { fetchExpenses } from "../utils/https";

function RecentExpenses() {
    const expensesCtx = useContext(ExpenseContext);
    // useEffect(() => {
    //     async function getExpenses(){
    //         const expenses = await fetchExpenses();
    //     }

    //     getExpenses();
    // }, []);

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date > date7DaysAgo;
    });

    return (
            <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallbackText="No expense registered for last 7 days."/>
    )
}

export default RecentExpenses;