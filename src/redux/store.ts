import { combineReducers, configureStore } from '@reduxjs/toolkit'
import couterReducer from './count/counter.slice'
import authReducer from './auth/auth.slice'
import cartReducer from './cart/cart.slice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore } from 'redux';
const persistConfig = {
	key: 'root',
	storage,
  };
  const rootReducer = combineReducers({
	couter:couterReducer,
	auth:authReducer,
	cart:cartReducer
  });

const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

