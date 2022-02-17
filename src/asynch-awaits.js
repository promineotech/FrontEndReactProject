{/* Asynch awaits are a feature in javascript similar to callbacks
but easier to read. First we will give an example of a promise, 
then show the asynch and await style of the same thing.
*/}

const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";
  
   const getHouses = () => {
   
       fetch(HOUSES_ENDPOINT)
           .then(resp => resp.json())
           .then(resp => console.log(resp));
           
   }
  
  
  getHouses();


{/* This is the async await method of doing the same thing as above.
None of this code will run in node.js, for some reason. The import of 
fetch method isn't working, need to run it in jsfiddle. */}
	
const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

      const getHouses = async () => {
  			const resp = await fetch(HOUSES_ENDPOINT);
        const json = await resp.json();
        console.log(json);
      }


   getHouses();
