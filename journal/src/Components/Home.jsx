import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//import background from "./test.png";

function Home() {
	return (
		<div className="home">
			<div class="container">
				<div class="row align-items-center my-0">
					<div class="col-lg-11">
						<h1 class="font-weight-normal-bold" style={{ color: "black" }}>
							{" "}
							Home
						</h1>
						<p style={{ color: "black" }}>Welcome to Journal</p>

						<StyleButton>
							{/* //<NavLink to="/DogListings">
								<button>Start Here</button>
							//</NavLink> */}
						</StyleButton>
					</div>
				</div>
			</div>
		</div>
	);
}
const Front = styled.a`
	overflow: hidden;
	background-size: cover;
	width: 100%;
	min-height: 100vh;
	background-image: url("./test.png");
`;

const StyleButton = styled.a`
	display: block;
	padding-left: 0%;
	button {
		position: relative;
		//display:block;
		height: 45px;
		width: 150px;
		margin: 10px 7px;
		padding: 5px 5px;
		font-weight: 700;
		font-size: 20px;
		letter-spacing: 2px;
		color: #383736;
		border: 2px #383736 solid;
		border-radius: 4px;
		text-transform: uppercase;
		outline: 0;
		overflow: hidden;
		background: white;
		color: black;
		z-index: 1;
		cursor: pointer;
		transition: 0.08s ease-in;
		-o-transition: 0.08s ease-in;
		-ms-transition: 0.08s ease-in;
		-moz-transition: 0.08s ease-in;
		-webkit-transition: 0.08s ease-in;
	}
`;

export default Home;
