import React, { useState, useEffect } from 'react';
import MyButton from "../../app/components/myButton/MyButton";
import style from './lesson10.module.css'


	interface ICatData {
		fact: string;
	 }
	 
	 const Lesson10 = () => {
		const [count, setCount] = useState(0);
		const [catFacts, setCatFacts] = useState<ICatData[]>([]);
	 
		const fetchCat = () => {
			 fetch('https://catfact.ninja/fact')
				.then(response => response.json())
				.then(data => {
				  setCatFacts(prevFacts => [...prevFacts, data]);
				})
		  
		  };
	 
		useEffect(() => {
		  fetchCat();
		}, []);
	 
		const handlePlus = () => {
		  setCount(prev => prev + 1);
		  fetchCat();
		};
	 
		const handleDeleteAll = () => {
		  setCatFacts([]);
		  setCount(0);
		};
	 
		return (
		  <div className="lesson10-container">
			 <h3>Cat Facts</h3>
			 <p>{count}</p>
			 <div className="facts-container">
				{catFacts.map((fact, index) => (
				  <p key={index} className="fact">{fact.fact}</p>
				))}
			 </div>
			 <div className="buttons-container">
        <MyButton name="GET MORE INFO" type="button" onClick={handlePlus} />
        {catFacts.length > 0 && <MyButton name="DELETE ALL DATA" type="button" onClick={handleDeleteAll} />}
      </div>
    </div>
		);
	 };
	
	 export default Lesson10;
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  