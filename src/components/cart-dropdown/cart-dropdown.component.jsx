import React from 'react';

import CustomBtn from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
);

export default CartDropdown;