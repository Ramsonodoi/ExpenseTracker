import {createSlice} from '@reduxjs/toolkit'
export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    //Set editBudget equal to a case Reducer that receives two arguments-state and action
    editBudget:(state, action) => {

      //action.payload will have a category and amount property
      const category = action.payload.category;
      const amount = action.payload.amount;
    
    // update the state by finding the budget object

    state.find(budget => budget.category === category).amount = amount
    }
   
  },
});


export const selectBudgets = (state) => state.budgets;
export const {editBudget} = budgetSlice.actions;
export default budgetsSlice.reducer;


