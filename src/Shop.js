import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function Shop() {
	const dispatch = useDispatch();
	const { depositeMoney, withdrawMoney } = bindActionCreators(
		actionCreators,
		dispatch
	);

	return (
		<div>
			<h2>Deposit/Withdraw Money</h2>
			{/* without using bindActionCreators */}
			{/* <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        Update Balance
      <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.depositeMoney(100))}}>+</button> */}
			{/* with the use of bindActionCreators */}
			<button
				className="btn btn-primary mx-2"
				onClick={() => {
					withdrawMoney(100);
				}}
			>
				-
			</button>
			Update Balance
			<button
				className="btn btn-primary mx-2"
				onClick={() => {
					depositeMoney(100);
				}}
			>
				+
			</button>
		</div>
	);
}

export default Shop;
