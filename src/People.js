import './People.css';
import Person from './Person';
import { useMediaQuery } from 'react-responsive';

function People(props) {
    const narrow = useMediaQuery({maxWidth: 600})

    return <table>
        <thead>
        {!narrow && <tr className={"people-header"}>
            <th className={"name header"}>Name</th>
            <th className={"email header"}>Email</th>
            <th className={"phone header"}>Phone</th>
        </tr>}
        </thead>
        <tbody>
        {props.people.map(p =>
            <Person person={p}
                    key={p.id}
                    onPersonChangeField={props.onPersonChangeField}
                    isSelected={props.selectedPeopleIds.includes(p.id)}
                    onPersonToggleSelected={props.onPersonToggleSelected}
                    onPersonSelected={props.onPersonSelected}/>
        )}
        </tbody>
    </table>
}

export default People;