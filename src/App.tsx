import React from 'react';
import {Provider} from 'react-redux';
import BookContainer from './component/BookContainer';
import HookBookContainer from './component/HookBookContainer';
import store from './redux/store';
import './App.css'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <BookContainer />
    <HookBookContainer />
    </div>
    </Provider>
  );
}

export default App;
