import React, { useEffect, useRef } from "react";
import logo from "../druk.png";
//"/logo192.png";
//import logo from "druk.png";
/*function TransferForm(props) {
	const canvasRef = useRef(null);

	const draw = (ctx) => {
		ctx.fillStyle = "#000000";
		ctx.beginPath();
		ctx.arc(50, 100, 20, 0, 2 * Math.PI);
		ctx.fill();
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		draw(context);
	}, [draw]);

	return <canvas ref={canvasRef} width="400" height="200"></canvas>;
}*/
const Canvas = (props) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		canvas.height = 1253;
		canvas.width = 1772;
		const image = new Image();
		//context.drawImage(image, 0, 0);

		image.onload = function () {
			context.drawImage(image, 0, 0);
		};
		//	image.src = { logo };
		image.src = { logo };
		//image.src = " https://hdmax.pl/obrazy/1/59/jablka.jpg";
		//Our first draw
		//	context.fillStyle = "red";
		//	context.fillRect(0, 0, context.canvas.width, context.canvas.height);
	}, []);

	return (
		<div>
			<canvas ref={canvasRef} {...props} />
		</div>
	);
};

export default Canvas;
//export default TransferForm;
