import React from 'react';
import {NewRoomForm} from './NewRoomForm';

{/* Here we will create House, which will be a stateless or functional component */}
export const House = (props) => {
	console.log('*******House.js, props is: ', props);
	const { house, updateHouse} = props;

	const deleteRoom = (roomId) => {
		console.log('inside deleteRoom function in House.js');
		const updatedHouse = {
			...house,
			rooms: house.rooms.filter((x) => x._id !== roomId)
		};
		updateHouse(updatedHouse);
	}

	const addNewRoom = (room) => {
		console.log('inside addNewRoom in House.js');
		console.log('room.name is: ' + room.name);
		console.log('room.area is ' + room.area);
		updateHouse({ ...house, rooms: [...house.rooms, room]});
	}


	const rooms = () => (
		<ul>
			{house.rooms.map((room,index) => (
				<li key={index}>
					<label> {`${room.name} Area: ${room.area}`}</label>
					<button onClick={(e) => deleteRoom(room._id)}>Delete</button>
				</li>
			))}
		</ul>
	);
	return (
		<div>
			<h1>{house.name}</h1>
			{
				rooms({rooms,houseId: house._id, deleteRoom})
			}
			<NewRoomForm addNewRoom={addNewRoom} />
		</div>
	);
};
