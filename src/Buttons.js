import React from 'react';


const Buttons = (props) => {
	// number = 4;
	return (
		<section className="buttons">
			<div className="homeButtons">
				{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
				<button className="homeButtons__touchdown" onClick={() => props.setLionsScore({ home: props.lionsScore.home + 7 })}>Home Touchdown</button>
				<button className="homeButtons__fieldGoal" onClick={() => props.setLionsScore({ home: props.lionsScore.home + 3 })}>Home Field Goal</button>
			</div>
			<div className="awayButtons">
				<button className="awayButtons__touchdown" onClick={() => props.setTigersScore({ away: props.tigersScore.away + 7 })}>Away Touchdown</button>
				<button className="awayButtons__fieldGoal" onClick={() => props.setTigersScore({ away: props.tigersScore.away + 3 })}>Away Field Goal</button>
			</div>
		</section>
	);
}

Buttons.defaultProps = {
	number: 31
}

export default Buttons