import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles.jsx';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdownContainer from '../../components/cart-dropdown/cart-dropdown.container';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { signOutStart } from '../../redux/user/user.actions';

const Header = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const hidden = useSelector(selectCartHidden);
	const signOutUser = dispatch(signOutStart());
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/contact'>CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as='div' onClick={signOutUser}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to='/signin'>SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdownContainer />}
		</HeaderContainer>
	);
};

export default Header;
