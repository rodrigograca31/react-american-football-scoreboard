import React from 'react';


const Buttons = (props) => {

	const incrementTeam = (team, value = 0) => {
		console.log("incrementing");

		if(team === "lions") {
			props.setLionsScore({ home: props.lionsScore.home + value })
		} else {
			props.setTigersScore({ away: props.tigersScore.away + value })
		}
	}

	// number = 4;
	return (
		<section className="buttons">
			<div className="homeButtons">
				<button className="homeButtons__touchdown" onClick={() => incrementTeam("lions", 7)}>Home Touchdown</button>
				<button className="homeButtons__fieldGoal" onClick={() => incrementTeam("lions", 3)}>Home Field Goal</button>
			</div>
			<div className="awayButtons">
				<button className="awayButtons__touchdown" onClick={() => incrementTeam("tigers", 7)}>Away Touchdown</button>
				<button className="awayButtons__fieldGoal" onClick={() => incrementTeam("tigers", 3)}>Away Field Goal</button>
			</div>
		</section>
	);
}

Buttons.defaultProps = {
	number: 31
}

export default Buttons