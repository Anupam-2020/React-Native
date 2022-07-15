import { useContext } from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";

function AllExpenses() {
    const expensesCtx = useContext(ExpenseContext);
    return (
        <View>
            <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallbackText="No regestered expenses found."/>
        </View>
    )
}

export default AllExpenses;