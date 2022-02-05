import './App.css';

import {useEffect, useState} from 'react';

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
    const [dim, setDim] = useState(false);
    const classNames = [];
    if (props.isSelected) {
        classNames.push("selected");
    }
    if (dim) {
        classNames.push("dim");
    }
    if (!props.isSelected && dim) {
        setDim(false)
    }

    useEffect(() => {
        if (props.isSelected) {
            const timeout = setTimeout(() => setDim(!dim), 1000);
            return () => clearTimeout(timeout);
        } else {
            return null;
        }
    });
    return <tr className={classNames.join(" ")}
               onClick={(e) => (e.shiftKey ? props.onPersonToggleSelected : props.onPersonSelected)(person)}>
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
                    isSelected={props.selectedPeopleIds.includes(p.id)}
                    onPersonToggleSelected={props.onPersonToggleSelected}
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
    const [selectedPeopleIds, setSelectedPeopleIds] = useState([]);

    function handlePersonSelected(person) {
        setSelectedPeopleIds([person.id]);
    }

    function handlePersonToggleSelected(person) {
        if (selectedPeopleIds.includes(person.id)) {
            setSelectedPeopleIds(selectedPeopleIds.filter(p => p !== person.id));
        } else {
            setSelectedPeopleIds([...selectedPeopleIds, person.id]);
        }
    }

    return <>
        <h1>People ({selectedPeopleIds.length}/{data.length} selected)</h1>
        <People people={data} selectedPeopleIds={selectedPeopleIds}
                onPersonSelected={handlePersonSelected}
                onPersonToggleSelected={handlePersonToggleSelected}/>
    </>;
}

export default App;
