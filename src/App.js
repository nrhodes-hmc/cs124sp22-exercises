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
    const [people, setPeople] = useState(data);


    function handleChangeField(personId, field, value) {
        setPeople(people.map(
            p => p.id === personId
                ? {...p, [field]: value}
                : p))
    }

    function handleDeletePeople(personIds) {
        setPeople(people.filter(p => !personIds.includes(p.id)));
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

    return <div className={"app"}>
        <People people={people}
                onDeletePeople={handleDeletePeople}
                onAddPerson={handleAddPerson}
                onPersonChangeField={handleChangeField}/>
    </div>;
}

export default App;
