import './App.css';

import {useState} from 'react';

const data = [
    {
        id: 512,
        name: "Neil Rhodes",
        email: "rhodes@hmc.edu",
        phone: "(909) 555-1212"
    },
    {
        id: 787,
        name: "Barack Obama",
        email: "ex-prez@whitehouse.gov",
        phone: "(312) 555-1212"
    }
];

function Person(props) {
    const person = props.person;
    const className = props.isSelected ? "selected" : "";
    return <tr className={className} onClick={e => props.onPersonSelected(person)}>
        <td className={"name"}>{person.name}</td>
        <td className={"email"}>{person.email}</td>
        <td className={"phone"}>{person.phone}</td>
    </tr>;
}

function People(props) {
    return <table>
        <tbody>
        {props.people.map(p =>
            <Person person={p}
                    key={p.name}
                    isSelected={p === props.selectedPerson}
                    onPersonSelected={props.onPersonSelected}/>
        )}
        </tbody>
    </table>
}

function App() {
    /*
    <Person {...p}/>
     is equivalent to:
     <Person name={p.name} email={p.email} phone={p.phone}/>

     <>
     is equivalent to:
     <React.Fragment>
     */
    const [selectedPerson, setSelectedPerson] = useState(null);


    return <>
        <h1>People ({selectedPerson === null ? 0 : 1}/{data.length} selected)</h1>
        <People people={data} selectedPerson={selectedPerson}
                onPersonSelected={setSelectedPerson}/>
    </>;
}

export default App;
