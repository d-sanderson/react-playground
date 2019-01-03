import React from 'react'

class MadLibs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pluralNoun1: '',
			adverb1: '',
			bodyPart: '',
			adjective1: '',
			noun1: '',
			bodyPart2: '',
			pluralNoun3: '',
			bodyPart3: '',
			noun2: '',
			verbwing: '',
			adjective2: '',
			adjective3: '',
			verb2: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({

		})


	}

	handleSubmit() {
		this.setState({
			pluralNoun1: ,
			adverb1: ,
			bodyPart: ,
			adjective1: ,
			noun1: ,
			bodyPart2: ,
			pluralNoun3: ,
			bodyPart3: ,
			noun2: ,
			verbwing: ,
			adjective2: ,
			adjective3: ,
			verb2:

		})
	}

	render() {
		return (
			<div>
				<h1>How to date the Coolest Person in School. </h1>
				<p> It is simple turn the {this.state.pluralNoun1}. Make him
				her want {this.state.adverb1} to date you. Make sure you are always dressed to {this.state.verb1}. Each and
				everyday wear a an {this.state.articleOfClothing}
				that you know shows of your {this.state.bodyPart1} to {this.state.adjective1} advantage and make
				your {this.state.noun1} look like a million {this.state.pluralNoun2} even if the two of you make
				meaningful {this.state.bodyPart2} contact do not admit it. No hugs or {this.state.pluralNoun3}. Just shake
				his her {this.state.bodyPart3} firmly. And remember, when he she asks you out, even though a chill may run
				down your {this.state.noun2} and you can not stop your {this.state.noun3} from {this.state.verbwing} just
				play it {this.state.adjective2}. Take a long pause before answering in a very {this.state.adjective3} voice.
					I will have to {this.state.verb2} </p>

				<br />


				<form onSubmit={this.handleSubmit}>
					<label>
						Plural Noun:
						<input type="text" value={this.state.pluralNoun1} onChange={this.handleChange}/>
					</label>

					<label>
						Adverb:
						<input type="text" value={this.state.adverb1} onChange={this.handleChange}/>
					</label>

					<label>
						Verb:
						<input type="text" value={this.state.verb1} onChange={this.handleChange}/>
					</label>

					<label>
						Article of Clothing:
						<input type="text" value={this.state.articleOfClothing} onChange={this.handleChange}/>
					</label>

					<label>
						Body Part:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>

					<label>
						Adjective:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>

					<label>
						Noun:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>

					<label>
						Plural Noun:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>

					<label>
						Body Part:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>

					<label>
						Plural Noun:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>

					<label>
						Body Part:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>

					<label>
						Noun:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>

					<label>
						Noun:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>

					<label>
						Verb ending in -ing:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>

					<label>
						Adjective:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>
					<input type="submit" value="Submit"/>
				</form>


			</div>


		)
	}


}

export default MadLibs




