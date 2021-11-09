import React, { useEffect, useRef } from "react";
import druk from "../images/druk.png";

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

		image.onload = function () {
			context.drawImage(image, 0, 0);
			context.fillText("Mateusz", 110, 200);
		};

		image.src = druk;
	}, []);

	return (
		<div>
			<canvas ref={canvasRef} {...props} />
		</div>
	);
};

export default Canvas;
