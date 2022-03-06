import './People.css';
import Person from './Person';

function People(props) {
    return <table>
        <tbody>
        {props.people.map(p =>
            <Person person={p}
                    key={p.id}
                    onPersonChangeField={props.onPersonChangeField}
                    isSelected={props.selectedPersonId === p.id}
                    onPersonSelected={props.onPersonSelected}/>
        )}
        </tbody>
    </table>
}

export default People;