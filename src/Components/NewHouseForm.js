import React, {useState} from 'react';
import {housesApi} from '../rest/HousesApi.js';

export const NewHouseForm = (props) => {
	const[name, setName] = useState('');

	const onSubmit = (e) => {
		console.log('inside NewHouseForm, onsubmit()');
		e.preventDefault();
		if (name){
		console.log('New House Name: ' + name);
		console.log('props: ', props);
		
		housesApi.create(name);
		
		//want to investigate why name is wrapped in curly braces later
		//props.addNewHouse({name});
		setName('');

		} 
		else{
			console.log('invalid input');
		}
	};

	return(
		<div>
			<h4>Add a new house </h4>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Name of New House'
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<button type='submit'>Add House</button>
				</form>
			</div>
			)
};


