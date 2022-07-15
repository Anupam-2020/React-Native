import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import  Button  from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/Styles";
import { ExpenseContext } from "../store/expenses-context";
import { storeExpense } from "../utils/https";


function ManagedExpenses({ route, navigation }) {
    const expenseCtx = useContext(ExpenseContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedItem = expenseCtx.expenses.find(
        (expense) => expense.id === editedExpenseId
    )

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);



    function deleteExpenseHandler() {
        navigation.goBack();
        expenseCtx.deleteExpense(editedExpenseId);
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expenseData) {
        navigation.goBack();
        if(isEditing) {
            expenseCtx.updateExpense(editedExpenseId,expenseData);
        }
        else {
            expenseCtx.addExpense(expenseData);
            storeExpense(expenseData);
        }
    }

    return (
        <View style={styles.container}>
            <ExpenseForm onCancel={cancelHandler} submitButtonLabel={isEditing ? 'Update' : 'Add'} onSubmit={confirmHandler} defaultValues={selectedItem}/>
            
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
                </View>
            )}
        </View>
    )
}

export default ManagedExpenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
    
})

