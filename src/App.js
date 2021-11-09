import "./App.css";
import CashDepositTable from "./components/InputTable";
import PaymentSpecification from "./components/PaymentSpecification";
import Canvas from "./components/TransferForm";

import React from "react";

function App() {
	return (
		<div>
			<CashDepositTable />
			<PaymentSpecification />
			<Canvas />
			<img src={process.env.PUBLIC_URL + "/druk.png"} alt={"logo"} />
		</div>
	);
}
export default App;
