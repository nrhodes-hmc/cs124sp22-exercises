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
    const [people, setPeople] = useState(data);

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

    function handleChangeField(personId, field, value) {
        setPeople(people.map(
            p => p.id === personId ? {...p, [field]: value} : p))
    }

    function handleDeleteSelected() {
        setPeople(people.filter(p => !selectedPeopleIds.includes(p.id)));
        setSelectedPeopleIds([]);
    }

    function handleAddPerson() {
        setPeople([...people,
            {
                id: generateUniqueID(),
                name: "",
                email: "",
                phone: "",
            }]);
    }

    return <>
        <h1>People ({selectedPeopleIds.length}/{people.length} selected)</h1>
        <button type={"button"} onClick={handleAddPerson}>Add</button>
        {selectedPeopleIds.length > 0 &&
        <button type={"button"} onClick={handleDeleteSelected}>Delete Selected</button>}
        <People people={people} selectedPeopleIds={selectedPeopleIds}
                onPersonSelected={handlePersonSelected}
                onPersonChangeField={handleChangeField}
                onPersonToggleSelected={handlePersonToggleSelected}/>
    </>;
}

export default App;
