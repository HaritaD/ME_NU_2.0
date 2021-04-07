import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {protein:0,carb:0,fat:0,calories:0}
	}

	handleProteinChange = event => {
		this.setState({
			protein: event.target.value
		})
	}

	handleCarbChange = event => {
		this.setState({
			carb: event.target.value
		})
	}

	handleFatChange = event => {
		this.setState({
			fat: event.target.value
		})
	}
	handleCalorieChange = event => {
		this.setState({
			calories: event.target.value
		})
	}

	handleSubmit = event => {
		/*alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)*/
		event.preventDefault()
		
		
		
	}
	

	render() 
  {
		const { protein, carb, fat,calories } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label> Protein         </label>
					<input
						value={protein}
						onChange={this.handleProteinChange}
					/>
				</div>
				<div>
					<label> Carb             </label>
					<textarea
						value={carb}
						onChange={this.handleCarbChange}
					/>
				</div>
        		<div>
					<label> Fat               </label>
					<textarea
						value={fat}
						onChange={this.handleFatChange}
					/>
				</div>
				<div>
					<label> Calories          </label>
					<textarea
						value={calories}
						onChange={this.handleCalorieChange}
					/>
				</div>
				<button type="submit">Submit</button>
		
			</form>
			
		)
	}
}


export default Form;