import './Person.css'
import PersonField from './PersonField'

function Person(props) {
    const person = props.person;
    const classNames = [];
    if (props.isSelected) {
        classNames.push("selected");
    }

    return <tr className={classNames.join(" ")}>
        <td><input type={"checkbox"} checked={props.isSelected}
                   onChange={()=>props.onToggleSelected(props.person.id)}/>
        </td>
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
