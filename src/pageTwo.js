import moment from 'moment';
import React from "react";
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import {Header , ExpenseDashboardPage , AddExpensePage , EditExpensePage , HelpPage , NotFoundPage  } from "./pageOne";
import { createStore, combineReducers } from 'redux';

// 3- Reducers
// i- Expenses Reducer
const expensesReducerDefaultState = [];

export const expensesReducerDefaultStateFunc = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
}
// ii- Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export const filtersReducerDefaultStateFunc = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};
// iii- AapRouter
export const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
// iv- Expenses-Total
  export const selectExpensesTotal = (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
  };
  // v -  Get visible expenses

export const selectExpenses =  (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
  
// vi- Configure

export const configureStore =  () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducerDefaultStateFunc,
      filters: filtersReducerDefaultStateFunc
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};