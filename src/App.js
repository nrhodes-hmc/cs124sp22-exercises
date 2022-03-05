import './App.css';

import People from './People';
import {useState} from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {initializeApp} from "firebase/app";
import { collection, deleteDoc, doc, getFirestore, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7fH6lmujJf65CW9WUr4CGBzNv5HidSIk",
    authDomain: "cs124-auth-exercise.firebaseapp.com",
    projectId: "cs124-auth-exercise",
    storageBucket: "cs124-auth-exercise.appspot.com",
    messagingSenderId: "136754614149",
    appId: "1:136754614149:web:c6ca3b76aa539a557bfeec"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const collectionName = "People-NoAuthenticationNeeded"

function App() {
    const [selectedPeopleIds, setSelectedPeopleIds] = useState([]);
    const query = collection(db, collectionName);
    const [people, loading, error] = useCollectionData(query);

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
        setDoc(doc(db, collectionName, personId),
            {[field]: value}, {merge: true})
    }

    function handleDeleteSelected() {
        selectedPeopleIds.forEach(id => deleteDoc(doc(db, collectionName, id)));
        setSelectedPeopleIds([]);
    }

    function handleAddPerson() {
        const uniqueId = generateUniqueID();
        setDoc(doc(db, collectionName, uniqueId),
            {
                id: uniqueId,
                name: "",
                email: "",
                phone: "",
            });
    }

    if (error) {
        return "error" + error;
    }
    if (loading) {
        return "loading..";
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
