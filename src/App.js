import './App.css';
import React from 'react'


const api = {
  key: "c644efb3e9b2c561b64f41ab9e617328",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const datebuilder = (d) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[d.getDay()];
  let month = months[d.getMonth()];
  let date = d.getDate();
  let year = d.getFullYear();

 return `${day} ${date} ${month} ${year}`
}

return (
  <div className="app">
  <main>
   <div className="search-box">
   <input type="text"
   className="search-bar"
   placeholder='iveskite valstybe...'
   />
  </div>
  <div className="location-box">
    <div className="location"> Lithuania </div>
    <div className='date'>{datebuilder(new Date())}</div>
  
  </div>
 </main>
 </div>
 );
}
  export default App;