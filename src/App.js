//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons"

function App() {
	//TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

	const [lionsScore, setLionsScore] = useState({
		home: 20
	});
	const [tigersScore, setTigersScore] = useState({
		away: 30
	});

	

	return (
		<div className="container">
			<section className="scoreboard">
				<div className="topRow">
					<div className="home">
						<h2 className="home__name">Lions</h2>

						{/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

						<div className="home__score">{lionsScore.home}</div>
					</div>
					<div className="timer">00:03</div>
					<div className="away">
						<h2 className="away__name">Tigers</h2>
						<div className="away__score">{tigersScore.away}</div>
					</div>
				</div>
				<BottomRow />
			</section>

			<Buttons lionsScore={lionsScore} setLionsScore={setLionsScore} 
				tigersScore={tigersScore} setTigersScore={setTigersScore} />
			
		</div>
	);
}

export default App;
