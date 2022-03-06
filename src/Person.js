import './Person.css'
import PersonField from './PersonField'
import {useDispatch} from 'react-redux'

function Person(props) {
    const dispatch = useDispatch();
    const person = props.person;
    const classNames = [];
    if (props.isSelected) {
        classNames.push("selected");
    }

    return <tr className={classNames.join(" ")}
               onClick={
                   /* e.shiftKey is set if the shift key is on */
                   (e) => dispatch(
                       {type: 'SELECT_PERSON',
                       person: person})}>
        <PersonField field={"name"}
                     person={props.person}
                     onPersonChangeField={props.onPersonChangeField}/>
        <PersonField field={"email"}
                     person={props.person}
                     onPersonChangeField={props.onPersonChangeField}/>
        <PersonField field={"phone"}
                     person={props.person}
                     onPersonChangeField={props.onPersonChangeField}/>
    </tr>;
}

export default Person;
