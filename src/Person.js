import './Person.css'
import PersonField from './PersonField'
import {useDispatch, useSelector} from 'react-redux'

function Person(props) {
    const dispatch = useDispatch();
    const person = props.person;
    const isSelected =
        useSelector(state => state.selectedIds.includes(person.id));
    const classNames = [];
    if (isSelected) {
        classNames.push("selected");
    }

    return <tr className={classNames.join(" ")}
               onClick={
                   /* e.shiftKey is set if the shift key is on */
                   (e) => dispatch(
                       {type: e.shiftKey ? 'TOGGLE_SELECT_PERSON' : 'SELECT_PERSON',
                       person: person})}>
        <PersonField field={"name"}
                     person={props.person}/>
        <PersonField field={"email"}
                     person={props.person}/>
        <PersonField field={"phone"}
                     person={props.person}/>
    </tr>;
}

export default Person;
