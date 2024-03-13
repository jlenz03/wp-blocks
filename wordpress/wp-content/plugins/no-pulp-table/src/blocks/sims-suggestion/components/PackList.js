import React from "react";
import PackCard from "./PackCard";

export default class PackList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			votes: {},
		};
	}

	handleVote = (id, voteType) => {
		// Update the vote count for the specific suggestion
		// If the vote count is not defined (first vote), default it to 0
		console.log("Voting for suggestion with ID:", id);
		console.log("Vote type:", voteType);

		this.setState(prevState => ({
			votes: {
				...prevState.votes,
				[id]: voteType === 'up' ? (prevState.votes[id] || 0) + 1 : (prevState.votes[id] || 0) - 1,
			},
		}), () => {
			console.log("Votes after update:", this.state.votes);
		});
	};

	render(){
		return (
			<div className="pack-list">
				{this.props.sim.map(sim => (
					<PackCard
						key={sim.id} // Assuming sim.id is the unique identifier
						title={sim.attributes.title.rendered}
						description={sim.attributes.content.rendered}
						type_of_pack={sim.attributes.acf.type_of_pack}
						concept_art={sim.attributes.acf.concept_art}
						vote_4_pack={sim.attributes.acf.vote_4_pack} // Default to 0 if vote is undefined
						handleVote={this.handleVote}

					/>
				))}
			</div>
		)
	}

}
