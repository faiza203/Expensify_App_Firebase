import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter, configureStore } from "./pageTwo"
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

function App (){
  return <Provider store={store}>
  <AppRouter />
</Provider>

}
export default App();