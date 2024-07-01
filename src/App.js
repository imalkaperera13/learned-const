import React from 'react';
import './App.css';

const Fname = "Imalka";
const Lname = "Perera";
const number = "07";
const creat = "Imalka Perera";


const CurrentDate = new Date();                   {/*the current date will show in the cosole area(the website inspect area)*/}
const year = CurrentDate.getFullYear;           {/*this shows the current year in the cosole area*/}
console.log (year);




function App() {
  return (
    <div className="App">
       <h1>Hello {`${Fname} ${Lname}`}!</h1>               {/* u can use {Fname} {Lname}as well.*/}            
       <p>My lucky number is {number}.</p>                  {/*u can use {3 + 4 }as well. */} 
       <p>Created By {creat}</p>
       <p>Copyright {year}</p>
              
            

    </div>        
  );
}

export default App;
