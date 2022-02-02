import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';

import {
	CartIconContainer,
	ShoppingIcon,
	ItemCountContainer
} from './cart-icon.styles.jsx';

const CartIcon = () => {
	const dispatch = useDispatch();
	const itemCount = useSelector(selectCartItemsCount);
	const toggleCartHiddenClickHandler = () => dispatch(toggleCartHidden());

	return (
		<CartIconContainer onClick={toggleCartHiddenClickHandler}>
			<ShoppingIcon />
			<ItemCountContainer>{itemCount}</ItemCountContainer>
		</CartIconContainer>
	);
};
export default CartIcon;
