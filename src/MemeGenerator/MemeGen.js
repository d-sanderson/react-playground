import React, { Component } from 'react';
import Header from './Header'
import styles from './MemeGen.css'

class MemeGen extends Component {
	constructor() {
		super()
		this.state = {
			allMemeImgs: [],
			topText : "",
			bottomText : "",
			randomImg : "http://i.imgflip.com/1bij.jpg"
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)


	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const {memes} = response.data
				this.setState({ allMemeImgs: memes})
				console.log(this.state.allMemeImgs)
			})

	}

	handleChange(event) {
		const {name, type, value, checked } = event.target
		type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({[name]: value})
	}

	handleSubmit(event) {
		event.preventDefault()
		const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randMeme = this.state.allMemeImgs[randNum]
		this.setState({randomImg : randMeme.url})
		console.log(this.state.randomImg)


	}


	render() {
		return (
			<div>
				<Header />
				<form className={styles["meme-form"]} onSubmit={this.handleSubmit}>

					<label>TOP TEXT</label>
					<input
						name="topText"
						value={this.state.topText}
						type="text"
						onChange={this.handleChange}/>

					<br />

					<label>BOTTOM TEXT</label>
					<input
						name="bottomText"
						value={this.state.bottomText}
						type="text"
						onChange={this.handleChange}/>
					<button>Gen</button>

				</form>

				<div className={styles["meme"]}>
				<img src={this.state.randomImg} alt="random-meme" />
					<h2 className={styles["top"]}>{this.state.topText}</h2>
					<h2 className={styles["bottom"]}>{this.state.bottomText}</h2>
				</div>
			</div>
		);
	}
}

export default MemeGen;
