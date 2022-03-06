import './App.css';

import People from './People';
import {useState} from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

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
    const [selectedPersonId, setSelectedPersonId] = useState(null);
    const [people, setPeople] = useState(data);

    function handlePersonSelected(personId) {
        setSelectedPersonId(personId);
    }

    function handleChangeField(personId, field, value) {
        setPeople(people.map(
            p => p.id === personId ? {...p, [field]: value} : p))
    }

    function handleDeleteSelected() {
        setPeople(people.filter(p => selectedPersonId !== p.id));
        setSelectedPersonId(null);
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
        <h1>People ({selectedPersonId ? 1 : 0}/{people.length} selected)</h1>
        <button type={"button"} onClick={handleAddPerson}>Add</button>
        {selectedPersonId &&
        <button type={"button"} onClick={handleDeleteSelected}>Delete Selected</button>}
        <People people={people} selectedPersonId={selectedPersonId}
                onPersonSelected={handlePersonSelected}
                onPersonChangeField={handleChangeField}/>
    </>;
}

export default App;
