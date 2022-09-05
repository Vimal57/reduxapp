import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
	const dispatch = useDispatch();
  const balance = useSelector(state => state.amount);
	const { withdrawMoney, depositeMoney } = bindActionCreators(actionCreators, dispatch);

	return (
		<div className="container my-3">
			<h2>Deposite/Withdraw Money</h2>


			{/* without using bindActionCreators */}
			{/* <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.depositeMoney(100))}}>+</button> */}


			{/* with use of bindActionCreators */}
			<button
				className="btn btn-primary mx-2"
				onClick={() => {
					withdrawMoney(100);
				}}
			>
				-
			</button>
			Update Balance : ({balance})
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
};

export default Shop;
