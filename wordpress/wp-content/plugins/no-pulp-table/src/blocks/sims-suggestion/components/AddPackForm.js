import React from "react";

export default class AddPackForm extends React.Component {
	state = {
		title: '',
		description: '',
		type_of_pack: '',
		concept_art: '',

	};

	addReview(e) {
		e.preventDefault();

		const newReview = {
			title: this.state.title,
			content: this.state.description,
			acf: {
				type_of_pack: this.state.type_of_pack ?? 'Expansion',
				concept_art: this.state.concept_art ?? '/',
			},

			// maybe you should validate better before doing this?
			status: 'publish',
		}

		// we can't assume any props are provided
		// ?. only calls the method if it exists
		this.props.addReview?.(newReview);
	}

	render() {
		return (
			<form

				className="new-pack-form"
				onSubmit={e => this.addReview(e)}
			>
				<div>

						<div className="title-with-image">
							<h2>Suggest the Next Sims Pack</h2>
						</div>
					<div className="form-description">
						<p>We appreciate our user's suggestions and always want to develop with YOU guys in mind!
							Write suggestions below of what you want to see next!
						</p>
					</div>

					<label>
						Title:
						<input type="text"
							   value={this.state.title}
							   onInput={e => this.setState({title: e.target.value})}
						/>
					</label>
				</div>

				<div>
					<label>
						Type of Sims Pack:
						<input type="text"
							   value={this.state.type_of_pack}
							   onInput={e => this.setState({type_of_pack: e.target.value})}
						/>
					</label>
				</div>

				<div>
					<label>
						Concept Art URL
						<input type="text"
							   value={this.state.concept_art}
							   onInput={e => this.setState({concept_art: e.target.value})}
						/>
					</label>
				</div>

				<div>
					<label>
						Description of Pack
						<textarea
							value={this.state.description}
							onInput={e => this.setState({description: e.target.value})}
						/>
					</label>
				</div>



				<button type="submit">Add Sims Pack Suggestion</button>
			</form>
		);
	}

};
