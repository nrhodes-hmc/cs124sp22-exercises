import './App.css';

import People from './People';
import {useDispatch, useSelector} from 'react-redux';

function App() {
    const [people, numSelectedPersons] =
        useSelector(state => [state.people, state.selectedIds.length]);
    const dispatch = useDispatch()

    function handleAddPerson() {
        dispatch({type: 'ADD_PERSON'});
    }

    function handleDeleteSelected() {
        dispatch({type: 'DELETE_SELECTED_PERSON'});
    }

    return <>
        <h1>People ({numSelectedPersons}/{people.length} selected)</h1>
        <button type={"button"} onClick={handleAddPerson}>Add</button>
        {numSelectedPersons > 0 &&
        <button type={"button"} onClick={handleDeleteSelected}>Delete Selected</button>}
        <People people={people}/>
    </>;
}

export default App;
