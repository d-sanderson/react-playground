import React from "react";

class MadLib3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headline: 'Horror Movies',
			adjective1: '',
			adjective2: '',
			bodyparts1: '',
			bodyparts2: '',
			noun1: '',
			noun2: '',
			noun3: '',
			noun4: '',
			noun5: '',
			noun6: '',
			adjective3: '',
			noun7: '',
			noun8: ''
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
				{this.state.noun8 !== '' ?
					<div> <h1>{this.state.headline} </h1>
						Here is a list of the most {this.state.adjective1} horror
						{this.state.pluralNoun1} ever made in Hollywood! Each of these
						{this.state.adjective2} films received a rating of two {this.state.bodyparts1} -up
						from Siskel and Ebert.
						<ul>
							<li>1. The Hunch {this.state.bodypart2} of Notre {this.state.noun1} </li>
							<li>2. The {this.state.noun2} of the Living {this.state.noun3} </li>
							<li>3. {this.state.noun4} of Frankenstein</li>
							<li>4. Invasion of {this.state.noun5} Snatchers</li>
							<li>5. {this.state.noun6} from the {this.state.adjective2}</li>
							<li>6. {this.state.noun7} on the Left</li>
							<li>7. The {this.state.noun8} of the Opera</li></ul> </div>
					: <div><img src={require('./madlibsface.jpeg')} alt='madlibsface' /></div>}

				<br />
				<form>
					<label>
						Adjective:
						<input type="text" name="adjective1" value={this.state.adjective1} onChange={this.handleChange}/>
					</label>
					<br />
					<label>
						Adjective:
						<input type="text" name="adjective2" value={this.state.adjective2} onChange={this.handleChange}/>
					</label>
					<br />
					<label>
						Body Part:
						<input type="text" name="bodyparts1" value={this.state.bodyparts1} onChange={this.handleChange}/>
					</label>
					<br />
					<label>
						Body Part:
						<input type="text" name="bodyparts2" value={this.state.bodyparts2} onChange={this.handleChange}/>
					</label>
					<br />
					<label>
						Noun:
						<input type="text" name="noun1" value={this.state.noun1} onChange={this.handleChange}/>
					</label>
					<br />
					<label>
						Noun:
						<input type="text" name="noun2" value={this.state.noun2} onChange={this.handleChange}/>
					</label>
					<br />
					<label>
						Noun:
						<input type="text" name="noun3" value={this.state.noun3} onChange={this.handleChange}/>
					</label>
					<br />
					<label>
						Noun:
						<input type="text" name="noun4" value={this.state.noun4} onChange={this.handleChange}/>
					</label>
					<br />
					<label>
						Noun:
						<input type="text" name="noun5" value={this.state.noun5} onChange={this.handleChange}/>
					</label>
					<br />
					<label>
						Noun:
						<input type="text" name="noun6" value={this.state.noun6} onChange={this.handleChange}/>
					</label>
					<br />

					<label>
						Adjective:
						<input type="text" name="adjective3" value={this.state.adjective3} onChange={this.handleChange}/>
					</label>
					<br />
					<label>
						Noun:
						<input type="text" name="noun7" value={this.state.noun7} onChange={this.handleChange}/>
					</label>
					<br />
					<label>
						Noun:
						<input type="text" name="noun8" value={this.state.noun8} onChange={this.handleChange}/>
					</label>

				</form>


			</div>


		)
	}


}

export default MadLib3
