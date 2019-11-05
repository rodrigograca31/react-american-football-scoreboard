import React from 'react'

const IncrementingButtons = (props) => {

	const increment = (btn) => {

		switch (btn) {
			case "down":
				props.setGameState((prevState) => { return { ...prevState, down: prevState.down + 1 } })
				break;
			case "toGo":
				props.setGameState((prevState) => { return { ...prevState, toGo: prevState.toGo + 1 } })
				break;
			case "ballOn":
				props.setGameState((prevState) => { return { ...prevState, ballOn: prevState.ballOn + 1 } })
				break;
			case "quarter":
				props.setGameState((prevState) => { return { ...prevState, quarter: prevState.quarter + 1 } })
				break;
			default:
				console.log("default???");
				break;
		}
		// props.setGameState(props)
	};

	return (
		<section className="buttons">
			<button className="homeButtons__touchdown" onClick={() => increment("down")}>Down</button>
			<button className="homeButtons__fieldGoal" onClick={() => increment("toGo")}>TO GO</button>
			<button className="awayButtons__touchdown" onClick={() => increment("ballOn")}>BALL ON</button>
			<button className="awayButtons__fieldGoal" onClick={() => increment("quarter")}>QUARTER</button>
		</section>
	);
}

export default IncrementingButtons