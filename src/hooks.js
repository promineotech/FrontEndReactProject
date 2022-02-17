import React, {useEffect,useState} from 'react';

{/* Hooks allow us to use state and other features without having to write a class
		In this example we are using state inside of a functional componenet
		In our class components we would have to peform an http request within the 
		component did mount lifecycle methods. To this in a functional component, 
		need to use the effect hooks. This example is illustrating two hooks
		in our functional componenet, an effect hook and a state hook.*/}

export default function App(){
	const [isOn, setIsOn] = useState(false);
	const [clickCount, setClickCount] = useState(0);

	{/* Anytime this renders we are going to run the useEffect method */}

	useEffect(() => {
		document.title = isOn ? 'ON' : 'OFF';

	});
	return (
		<div>
			<p> {isOn ? 'Yes, it is on!' : 'OFF'}</p>
			<button onClick={() => {
				setIsOn(!isOn);   
				setClickCount(clickCount + 1);
				}
				}> Switch </button>
			<p>Times Clicked: {clickCount}</p>	
		</div>
	);
}
