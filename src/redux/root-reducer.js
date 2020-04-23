import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducre from './cart/cart.reducer'
import cartReducer from './cart/cart.reducer';
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});