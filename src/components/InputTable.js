import React from "react";

function TableRow(props) {
	return (
		<tr>
			<td>{props.firstColumn}</td>
			<td>{props.secondColumn}</td>
			<td>{props.thirdColumn}</td>
		</tr>
	);
}

class TableRowInput extends React.Component {
	handleSelect(event) {
		event.target.select();
	}

	render() {
		const input = (
			<input
				ref={this.props.inputRef}
				onClick={this.handleSelect}
				name={this.props.name}
				type="text"
				value={this.props.inputValue}
				onChange={(event) => this.props.onChange(event)}
			/>
		);
		return (
			<TableRow
				firstColumn={this.props.firstColumn}
				secondColumn={input}
				thirdColumn={this.props.thirdColumn}
			/>
		);
	}
}

class Table extends React.Component {
	componentDidMount() {
		this.firstInput.focus();
		this.firstInput.select();
	}

	render() {
		const sumFives = (parseFloat(this.props.amountFives) * 5).toFixed(2);
		const sumTwos = (parseFloat(this.props.amountTwos) * 2).toFixed(2);
		const sumOnes = (parseFloat(this.props.amountOnes) * 1).toFixed(2);
		const sumFifty = (
			Math.round(parseFloat(this.props.amountFifty) * 0.5 * 10) / 10
		).toFixed(2);
		const sumTwenty = (
			Math.round(parseFloat(this.props.amountTwenty) * 0.2 * 10) / 10
		).toFixed(2);
		const sumTens = (
			Math.round(parseFloat(this.props.amountTens) * 0.1 * 10) / 10
		).toFixed(2);
		const sumQuantity =
			parseFloat(this.props.amountFives) +
			parseFloat(this.props.amountTwos) +
			parseFloat(this.props.amountOnes) +
			parseFloat(this.props.amountFifty) +
			parseFloat(this.props.amountTwenty) +
			parseFloat(this.props.amountTens);
		const sumValue = (
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
				(parseFloat(this.props.amountFives) * 0.00654 +
					parseFloat(this.props.amountTwos) * 0.00521 +
					parseFloat(this.props.amountOnes) * 0.005 +
					parseFloat(this.props.amountFifty) * 0.00394 +
					parseFloat(this.props.amountTwenty) * 0.00322 +
					parseFloat(this.props.amountTens) * 0.00251) *
					100
			) / 100
		).toFixed(2);
		const overloaded =
			sumWeight >= 16 ? "Worek za ciężki" : "Worek ma odpowiednią wagę";

		return (
			<table>
				<thead>
					<TableRow
						firstColumn="Nominał"
						secondColumn="Ilość"
						thirdColumn="Razem"
					/>
				</thead>
				<tbody>
					<TableRowInput
						name="amountFives"
						firstColumn="5 zł"
						thirdColumn={sumFives}
						inputValue={this.props.amountFives}
						onChange={(event) => this.props.onChange(event)}
						inputRef={(input) => {
							this.firstInput = input;
						}}
					/>

					<TableRowInput
						name="amountTwos"
						firstColumn="2 zł"
						thirdColumn={sumTwos}
						inputValue={this.props.amountTwos}
						onChange={(event) => this.props.onChange(event)}
					/>
					<TableRowInput
						name="amountOnes"
						firstColumn="1 zł"
						thirdColumn={sumOnes}
						inputValue={this.props.amountOnes}
						onChange={(event) => this.props.onChange(event)}
					/>
					<TableRowInput
						name="amountFifty"
						firstColumn="50 gr"
						thirdColumn={sumFifty}
						inputValue={this.props.amountFifty}
						onChange={(event) => this.props.onChange(event)}
					/>
					<TableRowInput
						name="amountTwenty"
						firstColumn="20 gr"
						thirdColumn={sumTwenty}
						inputValue={this.props.amountTwenty}
						onChange={(event) => this.props.onChange(event)}
					/>
					<TableRowInput
						name="amountTens"
						firstColumn="10 gr"
						thirdColumn={sumTens}
						inputValue={this.props.amountTens}
						onChange={(event) => this.props.onChange(event)}
					/>
				</tbody>
				<tfoot>
					<TableRow
						firstColumn="Razem"
						secondColumn={sumQuantity}
						thirdColumn={sumValue}
					/>
					<TableRow
						firstColumn="Waga"
						secondColumn={overloaded}
						thirdColumn={sumWeight}
					/>
				</tfoot>
			</table>
		);
	}
}

class DepositTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			amountFives: 0,
			amountTwos: 0,
			amountOnes: 0,
			amountFifty: 0,
			amountTwenty: 0,
			amountTens: 0,
		};
		this.handleChange = this.handleChange.bind(this);
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
		return (
			<div className="tableStyle">
				<Table
					amountFives={this.state.amountFives}
					amountTwos={this.state.amountTwos}
					amountOnes={this.state.amountOnes}
					amountFifty={this.state.amountFifty}
					amountTwenty={this.state.amountTwenty}
					amountTens={this.state.amountTens}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<label>
				{this.props.label}
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</label>
		);
	}
}

function CashDepositTable() {
	return (
		<div className="onlyScreen">
			<header className="App-header">Wpłaty zamknięte</header>
			<div className="Input-component">
				<NameForm label="Imię i nazwisko" />
				<NameForm label="Numer plomby" />
			</div>
			<div className="DepositTable">
				<DepositTable />
				<DepositTable />
			</div>
		</div>
	);
}
export default CashDepositTable;
