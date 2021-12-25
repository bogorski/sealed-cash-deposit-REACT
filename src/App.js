import "./App.css";
import CashDepositTable from "./components/InputTable";
import PaymentSpecification from "./components/PaymentSpecification";
//import Canvas from "./components/TransferForm";
import { TransferForm } from "./components/TransferForm";
import React from "react";
import druk from "./images/druk.png";

class NameForm extends React.Component {
	render() {
		return (
			<label>
				{this.props.label}
				<input
					type="text"
					value={this.props.value}
					onChange={(event) => this.props.onChange(event)}
				/>
			</label>
		);
	}
}
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			sealNumber: "",
			amountFives: 0,
			amountTwos: 0,
			amountOnes: 0,
			amountFifty: 0,
			amountTwenty: 0,
			amountTens: 0,
			sumFives: 0,
			imgCanvas: "",
			pushBtn: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleInputSealNumber = this.handleInputSealNumber.bind(this);
		this.handleButtonPrint = this.handleButtonPrint.bind(this);
		this.handleInputName = this.handleInputName.bind(this);
	}

	componentDidMount() {
		if (this.state.pushBtn === true) {
			console.log("ok");
		}
	}
	componentDidUpdate() {
		if (this.state.pushBtn === true) {
			console.log("ok");
		}
	}

	handleInputSealNumber(event) {
		this.setState({ sealNumber: event.target.value });
	}
	handleInputName(event) {
		this.setState({ name: event.target.value });
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
	handleButtonPrint(event) {
		this.setState({ pushBtn: true });

		console.log(this.state.pushBtn);
		/*	const canvas = document.querySelector("canvas");
		if (canvas) {
			canvas.remove();
		}*/
		const sumFives = (parseFloat(this.state.amountFives) * 5).toFixed(2);
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
		const wordValue = convertValue(totalValue);
		const name = this.state.name.toUpperCase();
		const sealNumber = this.state.sealNumber;
		this.setState({
			imgCanvas: print(totalValue, wordValue, name, sealNumber),
		});
		//	window.print();
	}
	handleButtonSend(event) {
		/*const mongoClient = require("mongodb").MongoClient;
		const url =
			"mongodb+srv://mateusz:MsL20180@cluster0.n0fem.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
		const dbname = "test";
		mongoClient.connect(url, {}, (error, client) => {
			if (error) console.log(error);

			const db = client.db(dbname);
			db.collection("test").insertOne(
				{
					name: "Jaaa",
					age: 225,
				},
				(error, results) => {
					if (error) console.log("add error", error);
					console.log(results);
				}
			);
			console.log("ok");
		});
		//const mongoose = require("mongoose");
		/*	console.log(mongoose);
		const url =
			"mongodb+srv://mateusz:MsL20180@cluster0.n0fem.mongodb.net/test?retryWrites=true&w=majority";

		mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
		var db = mongoose.connection;
		db.on("error", console.error.bind(console, "MongoDB connection error:"));
		const Cat = mongoose.model("Cat2", { name: String });

		const kitty = new Cat({ name: "Maja2" });
		kitty.save().then(() => console.log("dodane"));*/
	}

	render() {
		const sumFives = (parseFloat(this.state.amountFives) * 5).toFixed(2);
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
		console.log(totalAmount);
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
				<div className="onlyScreen">
					<div className="screenView">
						<header className="App-header">Wpłaty zamknięte</header>
						<div className="Input-component ">
							<NameForm
								label="Imię i nazwisko"
								value={this.state.name}
								onChange={this.handleInputName}
							/>
							<NameForm
								label="Numer plomby"
								value={this.state.sealNumber}
								onChange={this.handleInputSealNumber}
							/>
						</div>
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
						<div className="divButton">
							<TransferForm onClick={this.handleButtonPrint} />
							<TransferForm onClick={this.handleButtonSend} />
						</div>
					</div>
				</div>

				<div className="containerA4 A4 sheet">
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
						AmountInWords={convertValue(totalValue)}
						sealNumber={this.state.sealNumber}
					/>
				</div>

				<div className="containerA4 nextPage A4 sheet">
					<div className="myContainer">
						<div className="blankietCanvas">
							<img className="imgimg"></img>
						</div>
						<div className="blankietCanvas">
							<img className="imgimg"></img>
						</div>
					</div>
					<div className="myContainer">
						<div className="blankietCanvas">
							<img className="imgimg"></img>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;

function convertThreeNumbers(number) {
	number = number.toString();
	let setki = null;
	let dziesiatki = null;
	let jednosci = null;
	let numberWords = "";
	if (number.length === 3) {
		setki = number[0];
		dziesiatki = number[1];
		jednosci = number[2];
	} else if (number.length === 2) {
		dziesiatki = number[0];
		jednosci = number[1];
	} else if (number.length === 1) {
		jednosci = number[0];
	}
	setki = Number(setki);
	dziesiatki = Number(dziesiatki);
	jednosci = Number(jednosci);
	if (setki === 1) {
		numberWords = "sto ";
	} else if (setki === 2) {
		numberWords = "dwieście ";
	} else if (setki === 3) {
		numberWords = "trzysta ";
	} else if (setki === 4) {
		numberWords = "czterysta ";
	} else if (setki === 5) {
		numberWords = "pięćset ";
	} else if (setki === 6) {
		numberWords = "sześćset ";
	} else if (setki === 7) {
		numberWords = "siedemset ";
	} else if (setki === 8) {
		numberWords = "osiemset ";
	} else if (setki === 9) {
		numberWords = "dziewięćset ";
	}

	if (dziesiatki === 2) {
		numberWords += "dwadzieścia ";
	} else if (dziesiatki === 3) {
		numberWords = numberWords + "trzydzieści ";
	} else if (dziesiatki === 4) {
		numberWords = numberWords + "czterdzieści ";
	} else if (dziesiatki === 5) {
		numberWords = numberWords + "pięćdziesiąt ";
	} else if (dziesiatki === 6) {
		numberWords = numberWords + "sześćdziesiąt ";
	} else if (dziesiatki === 7) {
		numberWords = numberWords + "siedemdziesiąt ";
	} else if (dziesiatki === 8) {
		numberWords = numberWords + "osiemdziesiąt ";
	} else if (dziesiatki === 9) {
		numberWords = numberWords + "dziewięćdziesiąt ";
	} else if (dziesiatki === 1) {
		if (jednosci === 0) {
			numberWords = numberWords + "dziesięć ";
		} else if (jednosci === 1) {
			numberWords = numberWords + "jedenaście ";
		} else if (jednosci === 2) {
			numberWords = numberWords + "dwanaście ";
		} else if (jednosci === 3) {
			numberWords = numberWords + "trzynaście ";
		} else if (jednosci === 4) {
			numberWords = numberWords + "czternaście ";
		} else if (jednosci === 5) {
			numberWords = numberWords + "piętnaście ";
		} else if (jednosci === 6) {
			numberWords = numberWords + "szesnaście ";
		} else if (jednosci === 7) {
			numberWords = numberWords + "siedemnaście ";
		} else if (jednosci === 8) {
			numberWords = numberWords + "osiemnaście ";
		} else if (jednosci === 9) {
			numberWords = numberWords + "dziewiętnaście ";
		}
	}

	if (dziesiatki === 1) {
	} else if (jednosci === 1) {
		numberWords = numberWords + "jeden ";
	} else if (jednosci === 2) {
		numberWords = numberWords + "dwa ";
	} else if (jednosci === 3) {
		numberWords = numberWords + "trzy ";
	} else if (jednosci === 4) {
		numberWords = numberWords + "cztery ";
	} else if (jednosci === 5) {
		numberWords = numberWords + "pięć ";
	} else if (jednosci === 6) {
		numberWords = numberWords + "sześć ";
	} else if (jednosci === 7) {
		numberWords = numberWords + "siedem ";
	} else if (jednosci === 8) {
		numberWords = numberWords + "osiem ";
	} else if (jednosci === 9) {
		numberWords = numberWords + "dziewięć ";
	}
	return numberWords;
}

function convertNumbersToWords(number) {
	number = number.toString();

	let word = "";
	let tab = [];

	if (number.length % 3 === 1) {
		tab.push(number[0]);
		for (let i = 0; i < Math.floor(number.length / 3); i++) {
			let numberTemp = number.substr(1);
			tab.push(numberTemp.substr(-(numberTemp.length - 3 * i), 3));
		}
	} else if (number.length % 3 === 2) {
		tab.push(number.substr(0, 2));
		for (let i = 0; i < Math.floor(number.length / 3); i++) {
			let numberTemp = number.substr(2);
			tab.push(numberTemp.substr(-(numberTemp.length - 3 * i), 3));
		}
	} else if (number.length % 3 === 0) {
		for (let i = 0; i < Math.floor(number.length / 3); i++) {
			tab.push(number.substr(-(number.length - 3 * i), 3));
		}
	}

	for (let i = 0; i < tab.length; i++) {
		word = word + convertThreeNumbers(tab[i]);
		if (tab.length === 2 && i === 0) {
			word = word + "tyś ";
		}
	}

	return word;
}

function convertValue(number) {
	let valueZlotych = number.substr(0, number.length - 3);
	let valueGroszy = number.substr(-2);

	valueZlotych = Number(valueZlotych);
	valueGroszy = Number(valueGroszy);

	let wordGroszy = "";
	let wordZlotych = "";
	if (valueGroszy === 0) {
		wordGroszy = "zero ";
	} else {
		wordGroszy = convertNumbersToWords(valueGroszy);
	}
	if (valueZlotych === 0) {
		wordZlotych = "zero ";
	} else {
		wordZlotych = convertNumbersToWords(valueZlotych);
	}

	return wordZlotych + "zł i " + wordGroszy + "gr";
}

function print(totalValue, wordValue, name, sealNumber) {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	canvas.height = 1253;
	canvas.width = 1772;
	//	const ttt = document.querySelector(".divCanvas");
	//ttt.appendChild(canvas);
	const image = new Image();
	console.log(totalValue);
	image.onload = canvasLoadAsync;
	function canvasLoad() {
		ctx.drawImage(image, 0, 0);
		let aaa = "Automat-Spec Sp. z o.o. Sp. k.";
		aaa = aaa.toUpperCase();
		if (aaa.length > 27) {
			aaa = [...aaa];
			for (let i = 0; i < aaa.length; i++) {
				if (aaa[i] === ".") {
					aaa[i - 1] = aaa[i - 1] + aaa[i];
					aaa.splice(i, 1);
				}
			}
		}
		for (let i = 0; i < aaa.length; i++) {
			//ctx.moveTo(20, i*20);
			ctx.font = "bold 50px Courier";
			if (i === 0) {
				ctx.fillText(aaa[i], 110, 100);
			} else {
				ctx.fillText(aaa[i], 110 + 59 * i, 100);
			}
		}
		console.log(aaa);
		const bbb = "KASZÓW	382	32-060	LISZKI";
		const nr = "94175010480000000022772538";

		let kwota = totalValue;
		const nazwaZleceniodwacy = name;
		const now = new Date();
		const nazwaZlecenia =
			"UTARG WARSZAWA " +
			(now.getDate() < 10 ? "0" + now.getDate() : now.getDate()) +
			"." +
			(now.getMonth() + 1) +
			"." +
			now.getFullYear();
		for (let i = 0; i < bbb.length; i++) {
			//ctx.moveTo(20, i*20);
			ctx.font = "bold 50px Courier";
			if (i === 0) {
				ctx.fillText(bbb[i], 110, 200);
			} else {
				ctx.fillText(bbb[i], 110 + 59 * i, 200);
			}
		}

		for (let i = 0; i < nr.length; i++) {
			//ctx.moveTo(20, i*20);
			ctx.font = "bold 50px Courier";
			if (i === 0) {
				ctx.fillText(nr[i], 110, 300);
			} else {
				ctx.fillText(nr[i], 110 + 59 * i, 300);
			}
		}
		console.log(kwota.toString());
		kwota = kwota.toString();
		//console.log(kwota.number().length);
		for (let i = 0; i < kwota.length; i++) {
			console.log(kwota);
			ctx.font = "bold 50px Courier";
			if (i === 0) {
				ctx.fillText(kwota[i], 1003, 400);
			} else {
				ctx.fillText(kwota[i], 1003 + 59 * i, 400);
			}
		}
		/////
		let vbb = wordValue;
		//console.log(vbb)
		for (let i = 0; i < vbb.length; i++) {
			ctx.font = "bold 30px Courier";
			if (i === 0) {
				ctx.fillText(vbb[i], 110, 500);
			} else {
				ctx.fillText(vbb[i], 110 + 20 * i, 500);
			}
		}

		for (let i = 0; i < nazwaZleceniodwacy.length; i++) {
			ctx.font = "bold 50px Courier";
			if (i === 0) {
				ctx.fillText(nazwaZleceniodwacy[i], 110, 600);
			} else {
				ctx.fillText(nazwaZleceniodwacy[i], 110 + 59 * i, 600);
			}
		}

		for (let i = 0; i < nazwaZlecenia.length; i++) {
			ctx.font = "bold 50px Courier";
			if (i === 0) {
				ctx.fillText(nazwaZlecenia[i], 110, 800);
			} else {
				ctx.fillText(nazwaZlecenia[i], 110 + 59 * i, 800);
			}
		}

		for (let i = 0; i < nazwaZleceniodwacy.length; i++) {
			ctx.font = "bold 50px Courier";
			if (i === 0) {
				ctx.fillText(nazwaZleceniodwacy[i], 110, 900);
			} else {
				ctx.fillText(nazwaZleceniodwacy[i], 110 + 59 * i, 900);
			}
		}
		/////////
		const koperta = "BEZPIECZNA KOPERTA O NR. " + sealNumber;
		ctx.font = "bold 30px Courier";
		ctx.fillText(koperta, 110, 1000);
		const url = canvas.toDataURL("image/jpeg", 0.5);
		/*console.log(url);
		const divImg = document.querySelector(".divImg");
		const img = document.createElement("img");
		//	const url = this.state.imgCanvas;
		img.src = url;
		console.log(url);
		img.classList.add("imgimg");
		divImg.appendChild(img);*/
		const img = document.querySelectorAll(".imgimg");
		console.log(img);
		img.forEach(function (img) {
			img.src = url;
		});
		console.log("imge wczytany 1111");

		//printCanvas();
		//	window.setTimeout(printCanvas, 1000);
		console.log("imge wczytany 222");
	}
	image.src = druk;
	/*	canvas.onload = function () {
		console.log("wczytany");
	};
	printCanvas();*/
	//window.setTimeout(printCanvas, 1000);

	async function canvasLoadAsync() {
		await canvasLoad();
		await printCanvas();
	}
}

function printCanvas() {
	console.log("print 111");
	window.print();
	console.log("print 222");
}
