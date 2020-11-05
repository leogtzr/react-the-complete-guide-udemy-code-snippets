import './App.css';
import React, { useState } from 'react';
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

  const [showPersons, setShowPersons] = useState(true);

  const nameChangeHandler = (event, index) => {

    const personsToChange = [...persons];

    const person = personsToChange[index];
    person.name = event.target.value;

    setPersons(personsToChange);


    // setPersons(
    //   [
    //     // { name: capitalizeName(persons[0].name), age: 29, hobby: 'reading' },
    //     { name: event.target.value, age: 29, hobby: 'reading' },
    //     { name: event.target.value, age: 49 },
    //     { name: event.target.value, age: 49 },
    //     { name: event.target.value, age: 25 },
    //     { name: event.target.value, age: 32 }
    //   ]
    // );
  };

  // const switchNameHandler = () => {
  const switchNameHandler = (newName) => {
    console.log('I am changing something.');
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

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  const deletePersonHandler = (index) => {
    console.log('Trying to delete a person: ', index);
    // const personsFromState = persons.slice();
    const personsFromState = [...persons];
    personsFromState.splice(index, 1);
    setPersons(personsFromState);
  };

  return (

    <div className="App">
      {/* <button onClick={switchNameHandler.bind(this, 'Maxi')}>Switch Name</button> */}
      <button onClick={togglePersonsHandler} style={style}>Switch Name</button>
      {showPersons && (
        <div>
        {
          persons.map((p, index) => (
            <Person 
              name={p.name} 
              age={p.age} 
              changed={(event) => nameChangeHandler(event, index)}
              click={() => deletePersonHandler(index)}
              key={index}
              />
          ))
        }
        </div>
      )
      }
    </div>
  );
};

// Leo

export default App