import './App.css';
import React, { Component, useState } from 'react';
import Person from './Person/Person';

// Class based component:
// class App extends Component {

//   state = {
//     persons: [
//       { name: 'Leo', age: 29, hobby: 'reading' },
//       { name: 'María', age: 49 },
//       { name: 'Edgar', age: 49 },
//       { name: 'Brenda', age: 25 },
//       { name: 'Edgar', age: 32 },
//     ],
//   };

//   switchNameHandler = () => {
//     console.log('Was clicked');
//   };

//   render() {
//     return (
//     <div className="App">
//       <button onClick={this.switchNameHandler}>Switch Name</button>
//       {
//         this.state.persons.map(p => (
//           <Person name={p.name} age={p.age} />
//          ))
//       }

//     </div>
//   );
//   }
// }

// export default App;

// import React from 'react'

// function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App

function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const App = props => {

  const [persons, setPersons] = useState([
      { name: 'leonardito', age: 29, hobby: 'reading' },
      { name: 'María', age: 49 },
      { name: 'Edgar', age: 49 },
      { name: 'Brenda', age: 25 },
      { name: 'Edgar', age: 32 }
  ]);

  // const switchNameHandler = () => {
  const switchNameHandler = (newName) => {
    console.log('Was clicked ... ');
    setPersons(
      [
        // { name: capitalizeName(persons[0].name), age: 29, hobby: 'reading' },
        { name: newName, age: 29, hobby: 'reading' },
        { name: 'María', age: 49 },
        { name: 'Edgar', age: 49 },
        { name: 'Brenda', age: 25 },
        { name: 'Edgar', age: 32 }
      ]
    );
  };

  return (
    <div className="App">
      {/* <button onClick={switchNameHandler.bind(this, 'Maxi')}>Switch Name</button> */}
      <button onClick={() => switchNameHandler('Leito')}>Switch Name</button>
      {
        persons.map(p => (
          <Person name={p.name} age={p.age} click={switchNameHandler}/>
         ))
      }
    </div>
  );
};

// Leo

export default App