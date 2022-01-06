
//import './App.css';
//import Main from './reducer/Main';

//import cartReducer from './reducer/cartReducer';
//import DisplayGame from './reducer/DisplayGame';
//import EnterGameName from './reducer/EnterGameName';
//import gameReducer from './reducer/gameReducer';
//import rootReducer from './reducer/rootReducer';
//import persistStore from 'redux-persist/es/persistStore';

import { createStore } from 'redux';
//import { Provider } from 'react-redux';
import { Provider ,useDispatch} from 'react-redux';
//import Main from './pages/Main';

// import {Provider} from 'react'

//import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import MyRoutes from './MyRoutes';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import rootReducers from './newReducer/rootReducers';
//import rootReducers from './newReducers/rootReducers';
const AppWrapper=()=> {
  //const store = createStore(gameReducer)
  // const store = createStore(rootReducer)

  const persistConfig = {
    key: 'root',
    storage
  }
  const persistedReducer = persistReducer(persistConfig, rootReducers)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MyRoutes />
        </PersistGate>
      </Provider>
    </>

  );
}
const App=()=>{
   const dispatch = useDispatch();
}

export default App;
