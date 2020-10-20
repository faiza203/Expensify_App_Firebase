import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseDashboardPage from 'components/ExpenseDashboardPage';
import AddExpensePage from 'components/addExpense';
import EditExpensePage from 'components/editExpense';
import HelpPage from 'components/HelpPage';
import NotFoundPage from 'components/NotFoundPage';
import Header from 'components/Header';


const AppRouter = () => (
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

export default AppRouter;
