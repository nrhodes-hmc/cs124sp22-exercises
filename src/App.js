import './App.css';

import People from './People';
import {useState} from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const data = [
    {
        id: "1276",
        name: "Neil Campbell Rhodes",
        email: "rhodes+junkmail@hmc.edu",
        phone: "+1 (909) 555-1212"
    },
    {
        id: "787",
        name: "Barack Hussein Obama II",
        email: "ex-prez@whitehouse.gov",
        phone: "+1 (312) 555-1212"
    },
    {
        id: "889",
        name: "Jo Smith",
        email: "festival21@hotmail.com",
        phone: "+1 (123) 555-1212"
    }
];

function App() {
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
        <People people={people} selectedPeopleIds={selectedPeopleIds}
                onPersonSelected={handlePersonSelected}
                onPersonChangeField={handleChangeField}
                onPersonToggleSelected={handlePersonToggleSelected}/>
    </>;
}

export default App;
