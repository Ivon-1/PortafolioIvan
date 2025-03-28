import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">

						<div className="work">
							<img
								src="https://play-lh.googleusercontent.com/n2Zaz5vDIDmlTHAm9rUw9Anodn_4F4LBud1BmMT3kSddfS5e8lhsN5z15QX97sBZtHI"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Corte Inglés</div>
							<div className="work-subtitle">
								Vendedor mobiliario
							</div>
							<div className="work-duration">Septiembre 2023 - actualidad</div>
						</div>


						<div className="work">
							<img
								src="https://s3-eu-west-1.amazonaws.com/cbre.compraactiva.me/562bdbf4c4dd6df43dc3deea55601a965ce27df3.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Time Road</div>
							<div className="work-subtitle">
								Vendedor en joyería
							</div>
							<div className="work-duration">Junio 2023 - Septiembre 2023</div>
						</div>


						<div className="work">
							<img
								src="https://i.pinimg.com/736x/d4/8d/08/d48d087c06a41beebaf7535862d0dd74.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Tommy Hilfiger</div>
							<div className="work-subtitle">
								Vendedor en moda
							</div>
							<div className="work-duration">Abril 2023 - Mayo 2023</div>
						</div>

						<div className="work">
							<img
								src="https://play-lh.googleusercontent.com/n2Zaz5vDIDmlTHAm9rUw9Anodn_4F4LBud1BmMT3kSddfS5e8lhsN5z15QX97sBZtHI"
								alt="corte ingles"
								className="work-image"
							/>
							<div className="work-title">Corte Inglés</div>
							<div className="work-subtitle">
								Vendedor en moda
							</div>
							<div className="work-duration">Diciembre 2021 - Noviembre 2022</div>
						</div>


					</div>
				}
			/>
		</div>
	);
};

export default Works;
