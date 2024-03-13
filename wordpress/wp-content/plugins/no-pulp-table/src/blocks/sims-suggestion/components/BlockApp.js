import React from "react";
import AddPackForm from "./AddPackForm";
import PackList from "./PackList";

// Assuming these are the correct imports for the WordPress API


export default class BlockApp extends React.Component {
	state = {
		sim: [],
		loggedIn: null,
	};

	addReview(newReview) {
		const sim = new wp.api.models.Sim(newReview);
		sim.save().done((data) => {
			console.log("saved!", data);
			this.getReviews();
		}).fail((jqXHR) => {
			console.error("failed!", jqXHR);
		});
	}

	getReviews() {
		const reviewCollection = new wp.api.collections.Sim();
		reviewCollection.fetch()
			.done((data) => {
				console.log("packs!!", data, reviewCollection);
				this.setState({ sim: reviewCollection.models });
			})
			.fail((jqXHR) => {
				this.getReviews();
			});
	}

	getLoggedInUser() {
		const user = new wp.api.models.UsersMe();
		user.fetch()
			.done((user) => {
				this.setState({ loggedIn: true });
			})
			.fail((jqXHR) => {
				this.setState({ loggedIn: false });
			});
	}

	componentDidMount() {
		this.getReviews();
		this.getLoggedInUser();
	}

	render() {
		const { sim, loggedIn } = this.state;

		return (
			<div>
				<h3>Latest Sims Suggestions</h3>
				{sim.length > 0 && <PackList sim={sim} />}
				<hr />
				{loggedIn === true && <AddPackForm addReview={(reviewObj) => this.addReview(reviewObj)} />}
				{loggedIn === false && <AddPackForm addReview={(reviewObj) => this.addReview(reviewObj)} />}
			</div>
		);
	}
}

