import './App.css';

import People from './People';
import {useState} from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {initializeApp} from "firebase/app";
import { collection, deleteDoc, doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYhMdciPP9F9Gs38fUEHnOP_C63RwkDFo",
    authDomain: "cs124-firestore-impl-exercise.firebaseapp.com",
    projectId: "cs124-firestore-impl-exercise",
    storageBucket: "cs124-firestore-impl-exercise.appspot.com",
    messagingSenderId: "492659596453",
    appId: "1:492659596453:web:fa8ea46ba19f37c0fa414c"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const collectionName = "People-0-A"

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
