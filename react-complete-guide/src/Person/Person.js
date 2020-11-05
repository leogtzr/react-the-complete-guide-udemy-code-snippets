import React from 'react';
import '../Person/Person.css';

// function Person() {
//     return (
//         <div>
//             <h1 className="ache1">Holis ...</h1>
//         </div>
//     )
// }

// export default Person;

// Function component flavor.
const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Hello, I am {props.name}, I am {props.age}</p>
            {props.children && (<p>My hobby is: <b>{props.children}</b></p>)}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Person;