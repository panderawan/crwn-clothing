import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
	@media screen and (max-width: 800px) {
		align-items: center;
	}
`;

export const CartDropdownButton = styled(CustomButton)`
	  margin-top: auto;
	  align-items: center;
	  
	  @media screen and (max-width: 800px) {
		  line-height:25px
	  }
	`;

export const EmptyMessageContainer = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;
