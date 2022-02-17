import React, {useState} from 'react';

export const NewRoomForm = (props) => {
	const[name, setName] = useState('');
	const[area, setArea] = useState(undefined);

	const handleAreaInput = (e) => {
		const int = parseInt(e.target.value, 10);
		setArea( int >= 0  ? int : '');
	}

	const onSubmit = (e) => {
		console.log('***inside NewRoomForm, onsubmit()');
		console.log('props', props);
		e.preventDefault();
		if (name && area){
		console.log('   name: ' + name);
		console.log('   area: ' + area);
			console.log('props: ',props);
			props.addNewRoom({name,area});
			setName('');
			setArea('');
		} else{
			console.log('invalid input');
		}
};
	return(
		<div>
			<h4>Add a new room</h4>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='name'
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<input type='text'
					placeholder='area'
					onChange={handleAreaInput}
					value={area}
				/>
				<button type='submit'>Add Room</button>
				</form>
			</div>
			)
};


