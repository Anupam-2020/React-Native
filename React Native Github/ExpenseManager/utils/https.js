import  axios  from "axios";

const BACKENED_URL = 'https://react-native-10b8c-default-rtdb.firebaseio.com'

export function storeExpense(expenseData) {
    axios.post(`${BACKENED_URL}/expenses.json`, expenseData)
}

// export async function fetchExpenses() {
//     const response = await axios.get(`${BACKENED_URL}/expenses.json`);
//     const expenses = [];

//     console.log(response.data);
//     for(const key in response.data) {
//         const expensesObj = {
//             id: key,
//             amount: response.data[key].amount,
//             date: new Date(response.data[key].data),
//             description: response.data[key].description
//         };
//         expenses.push(expensesObj);
//     }
//     return expenses;
// }
