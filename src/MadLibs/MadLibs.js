import React from 'react'


class MadLibs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headline: 'How to date the Coolest Person in School.',
			pluralNoun1: '',
			adverb1: '',
			verb1: '',
			articleOfClothing: '',
			bodyPart1: '',
			adjective1: '',
			noun1: '',
			pluralNoun2: '',
			bodyPart2: '',
			pluralNoun3: '',
			bodyPart3: '',
			noun2: '',
			noun3: '',
			verbwing: '',
			adjective2: '',
			adjective3: '',
			verb2: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {

		this.setState({
		[event.target.name] : event.target.value
		})


	}

	render() {
		return (
			<div>
				{this.state.verb2 !== ''? <div> <h1>{this.state.headline} </h1>
				<p> It is simple turn the {this.state.pluralNoun1}. Make him/her want {this.state.adverb1} to date you. Make sure you are always dressed to {this.state.verb1}. Each and
				everyday wear a an {this.state.articleOfClothing} that you know shows of your {this.state.bodyPart1} to {this.state.adjective1} advantage and make
				your {this.state.noun1} look like a million {this.state.pluralNoun2} even if the two of you make
				meaningful {this.state.bodyPart2} contact do not admit it. No hugs or {this.state.pluralNoun3}. Just shake
				his or her {this.state.bodyPart3} firmly. And remember, when he or she asks you out, even though a chill may run
				down your {this.state.noun2} and you can not stop your {this.state.noun3} from {this.state.verbwing} just
					play it {this.state.adjective2}. Take a long pause before answering in a very {this.state.adjective3} voice. I will have to {this.state.verb2} </p> </div> : <div><img src={require('./madlibsface.jpeg')} alt='madlibsface' /></div>}

				<br />


				<form>
					<label>
						Plural Noun:
						<input type="text" name="pluralNoun1" value={this.state.pluralNoun1} onChange={this.handleChange}/>
					</label>

					<label>
						Adverb:
						<input type="text" name="adverb1" value={this.state.adverb1} onChange={this.handleChange}/>
					</label>

					<label>
						Verb:
						<input type="text" name="verb1" value={this.state.verb1} onChange={this.handleChange}/>
					</label>

					<label>
						Article of Clothing:
						<input type="text" name="articleOfClothing" value={this.state.articleOfClothing} onChange={this.handleChange}/>
					</label>

					<label>
						Body Part:
						<input type="text" name="bodyPart1" value={this.state.bodyPart1} onChange={this.handleChange}/>
					</label>

					<label>
						Adjective:
						<input type="text" name="adjective1" value={this.state.adjective1} onChange={this.handleChange}/>
					</label>

					<label>
						Noun:
						<input type="text" name="noun1" value={this.state.noun1} onChange={this.handleChange}/>
					</label>

					<label>
						Plural Noun:
						<input type="text" name="pluralNoun2" value={this.state.pluralNoun2} onChange={this.handleChange}/>
					</label>

					<label>
						Body Part:
						<input type="text" name="bodyPart2" value={this.state.bodyPart2} onChange={this.handleChange}/>
					</label>

					<label>
						Plural Noun:
						<input type="text" name="pluralNoun3" value={this.state.pluralNoun3} onChange={this.handleChange}/>
					</label>

					<label>
						Body Part:
						<input type="text" name="bodyPart3" value={this.state.bodyPart3} onChange={this.handleChange}/>
					</label>

					<label>
						Noun:
						<input type="text" name="noun2" value={this.state.noun2} onChange={this.handleChange}/>
					</label>

					<label>
						Noun:
						<input type="text" name="noun3" value={this.state.noun3} onChange={this.handleChange}/>
					</label>

					<label>
						Verb ending in -ing:
						<input type="text" name="verbwing" value={this.state.verbwing} onChange={this.handleChange}/>
					</label>

					<label>
						Adjective:
						<input type="text" name="adjective3" value={this.state.adjective3} onChange={this.handleChange}/>
					</label>

					<label>
						Verb:
						<input type="text" name="verb2" value={this.state.verb2} onChange={this.handleChange}/>
					</label>
				</form>


			</div>


		)
	}


}

export default MadLibs




