import "./App.css";
import CashDepositTable from "./components/InputTable";
import PaymentSpecification from "./components/PaymentSpecification";
import Canvas from "./components/TransferForm";
import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//	value: "",
			amountFives: 0,
			amountTwos: 0,
			amountOnes: 0,
			amountFifty: 0,
			amountTwenty: 0,
			amountTens: 0,
		};
		this.handleChange = this.handleChange.bind(this);
		//	this.handleInput = this.handleInput.bind(this);
	}
	handleChange(event) {
		let value = 0;

		if (Number.isNaN(parseFloat(event.target.value))) {
			function setTimeSelect() {
				event.target.select();
			}
			setTimeout(setTimeSelect, 1);
			value = 0;
		} else if (/\D$/.test(event.target.value)) {
			value = this.state[event.target.name];
		} else {
			value = event.target.value;
		}
		const name = event.target.name;
		this.setState({ [name]: value });
	}
	render() {
		const sumFives = (parseFloat(this.state.amountFives) * 5).toFixed(2);
		console.log(sumFives);
		const sumTwos = (parseFloat(this.state.amountTwos) * 2).toFixed(2);
		const sumOnes = (parseFloat(this.state.amountOnes) * 1).toFixed(2);
		const sumFifty = (
			Math.round(parseFloat(this.state.amountFifty) * 0.5 * 10) / 10
		).toFixed(2);
		const sumTwenty = (
			Math.round(parseFloat(this.state.amountTwenty) * 0.2 * 10) / 10
		).toFixed(2);
		const sumTens = (
			Math.round(parseFloat(this.state.amountTens) * 0.1 * 10) / 10
		).toFixed(2);
		const totalAmount =
			parseFloat(this.state.amountFives) +
			parseFloat(this.state.amountTwos) +
			parseFloat(this.state.amountOnes) +
			parseFloat(this.state.amountFifty) +
			parseFloat(this.state.amountTwenty) +
			parseFloat(this.state.amountTens);
		const totalValue = (
			Math.round(
				(parseFloat(sumFives) +
					parseFloat(sumTwos) +
					parseFloat(sumOnes) +
					parseFloat(sumFifty) +
					parseFloat(sumTwenty) +
					parseFloat(sumTens)) *
					10
			) / 10
		).toFixed(2);
		const sumWeight = (
			Math.round(
				(parseFloat(this.state.amountFives) * 0.00654 +
					parseFloat(this.state.amountTwos) * 0.00521 +
					parseFloat(this.state.amountOnes) * 0.005 +
					parseFloat(this.state.amountFifty) * 0.00394 +
					parseFloat(this.state.amountTwenty) * 0.00322 +
					parseFloat(this.state.amountTens) * 0.00251) *
					100
			) / 100
		).toFixed(2);
		const overloaded =
			sumWeight >= 16 ? "Worek za ciężki" : "Worek ma odpowiednią wagę";

		return (
			<div>
				<CashDepositTable
					amountFives={this.state.amountFives}
					sumFives={sumFives}
					amountTwos={this.state.amountTwos}
					sumTwos={sumTwos}
					amountOnes={this.state.amountOnes}
					sumOnes={sumOnes}
					amountFifty={this.state.amountFifty}
					sumFifty={sumFifty}
					amountTwenty={this.state.amountTwenty}
					sumTwenty={sumTwenty}
					amountTens={this.state.amountTens}
					sumTens={sumTens}
					totalAmount={totalAmount}
					totalValue={totalValue}
					overloaded={overloaded}
					sumWeight={sumWeight}
					onChange={this.handleChange}
				/>
				<PaymentSpecification
					amountFives={this.state.amountFives}
					sumFives={sumFives}
					amountTwos={this.state.amountTwos}
					sumTwos={sumTwos}
					amountOnes={this.state.amountOnes}
					sumOnes={sumOnes}
					amountFifty={this.state.amountFifty}
					sumFifty={sumFifty}
					amountTwenty={this.state.amountTwenty}
					sumTwenty={sumTwenty}
					amountTens={this.state.amountTens}
					sumTens={sumTens}
					totalAmount={totalAmount}
					totalValue={totalValue}
				/>
				<Canvas />
			</div>
		);
	}
}
export default App;
