import React from 'react';
import {House} from './House';
import {housesApi} from '../rest/HousesApi.js';
import {NewHouseForm} from './NewHouseForm';

export class HousesList extends React.Component{
	state = {
		houses: []
	};
	componentDidMount(){
		this.fetchHouses();
		console.log("got inside componentDidMount()");
	}

	fetchHouses = async () => {
		const houses = await housesApi.get();
		this.setState({houses});
	};
	updateHouse = async(updatedHouse) => {
		await housesApi.put(updatedHouse);
		this.fetchHouses();
	};
	

	render(){
		console.log("this.state.houses is: ");
		console.log(this.state.houses);
		return (
			<div className="house-list">
				
				{this.state.houses.map((house) => (
					<House 
						house={house}
						key={house._id}
						updateHouse={this.updateHouse}
					/>
					
				))}
				<NewHouseForm />
			</div>
		)
	}
}


