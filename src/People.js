import './People.css';
import Person from './Person';
import React, {useEffect, useRef, useState} from 'react';
import trashicon from './trash_icon.png'

function People(props) {
    const [selectedIds, setSelectedIds] = useState([]);
    const allSelected = selectedIds.length > 0 && selectedIds.length === props.people.length;
    const someSelected = selectedIds.length > 0 && selectedIds.length !== props.people.length;
    const checkboxRef = useRef(null); // so we can refer to select all checkbox in DOM

    useEffect(() => {
        // Set the indeterminate property. Can't be done in HTML or in CSS.
        checkboxRef.current.indeterminate = someSelected;
        return null;
    }, [someSelected])

    function handleDelete() {
        props.onDeletePeople(selectedIds);
        setSelectedIds([]);
    }

    function handleToggleSelected(personId) {
        if (selectedIds.includes(personId)) {
            const filtered = selectedIds.filter(p => p !== personId);
            setSelectedIds(filtered);
        } else {
            setSelectedIds([...selectedIds, personId]);
        }
    }

    function handleSetAll(isOn) {
        if (isOn) {
            setSelectedIds(props.people.map(p => p.id))
        } else {
            setSelectedIds([]);
        }
    }

    const numSelectedString = `${selectedIds.length} of ${props.people.length} selected`;

    return <>
        {/* NOTE: feel free to re-order items in the below JSX. */}
        {/* Following div will open the link in a new page */}
        <div id="webpage-link"
             onClick={() => window.open("https://www.cs.hmc.edu/~rhodes/courses/cs124/fa21/schedule.html", '_blank').focus()}>
            CS 124 Webpage
        </div>

        <div className="buttons">
            {selectedIds.length > 0 &&
            <button className="delete-button"
                    type="button"
                    onClick={
                        () => {
                            handleDelete();
                        }}>
                <img width="12" src={trashicon}/>
            </button>}
            <button className="add-button" type="button" onClick={props.onAddPerson}>
                Add
            </button>
        </div>
        <table>
            <thead>
            <tr>
                <th><input type="checkbox"
                           checked={allSelected}
                           ref={checkboxRef}
                           disabled={props.people.length === 0 && "disabled"}
                           onChange={e=>handleSetAll(e.target.checked)}/></th>
                <th className={"name header"}
                    id="nameheader"
                    scope="col">
                    Name
                </th>
                <th className={"email header"}
                    id="emailheader"
                    scope="col">
                    Email
                </th>
                <th className={"phone header"}
                    id="phoneheader"
                    scope="col">
                    Phone
                </th>
            </tr>
            </thead>
            <tbody className={"people"}>
            {props.people.map(p =>
                <Person onToggleSelected={id => handleToggleSelected(id)}
                        onPersonChangeField={props.onPersonChangeField}
                        isSelected={selectedIds.includes(p.id)}
                        key={p.id}
                        person={p}/>)}
            </tbody>
        </table>
        <h1 id="h1">People ({numSelectedString})</h1>
    </>
}

export default People;