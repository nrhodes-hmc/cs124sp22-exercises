import './App.css';

import People from './People';
import {useDispatch, useSelector} from 'react-redux';

function App() {
    const [people, selectedPersonId] =
        useSelector(state => [state.people, state.selectedId]);
    const dispatch = useDispatch()

    function handleAddPerson() {
        dispatch({type: 'ADD_PERSON'});
    }

    function handleDeleteSelected() {
        dispatch({type: 'DELETE_SELECTED_PERSON'});
    }

    return <>
        <h1>People ({selectedPersonId ? 1 : 0}/{people.length} selected)</h1>
        <button type={"button"} onClick={handleAddPerson}>Add</button>
        {selectedPersonId &&
        <button type={"button"} onClick={handleDeleteSelected}>Delete Selected</button>}
        <People people={people} selectedPersonId={selectedPersonId}/>
    </>;
}

export default App;
