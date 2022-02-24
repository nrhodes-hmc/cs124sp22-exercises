import './People.css';
import Person from './Person';
import { useMediaQuery } from 'react-responsive';

function People(props) {
    const isMobile = useMediaQuery({maxWidth: 600})

    return <table>
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