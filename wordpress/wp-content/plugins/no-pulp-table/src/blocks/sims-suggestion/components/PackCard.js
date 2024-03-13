import React from "react";

export default class PackCard extends React.Component {
	handleVote = (voteType) => {
		// Call the handleVote function passed from PackList
		this.props.handleVote(this.props.id, voteType);
	};


	render() {
		const { title, description, type_of_pack, concept_art, vote_4_pack } = this.props;
		return (
			<div className="pack-card">
				<div className="pack-content">
					<div className="pack-text">
						<div className="pack-title" dangerouslySetInnerHTML={{ __html: title }}></div>
						<div className="type-pack" dangerouslySetInnerHTML={{ __html: type_of_pack }}></div>
						<div className="pack-description" dangerouslySetInnerHTML={{ __html: description }}></div>
						<div className="vote">
							<button onClick={() => this.handleVote('up')}>
								<span role="img" aria-label="Vote Up">➕</span>
							</button>
							<h3>{vote_4_pack}</h3>
							<button onClick={() => this.handleVote('down')}>
								<span role="img" aria-label="Vote Down">➖</span>
							</button>
						</div>
					</div>
					<div className="concept-art">
						<img src={concept_art} alt="Concept Art" />
					</div>
				</div>

			</div>
		);
	}
}


