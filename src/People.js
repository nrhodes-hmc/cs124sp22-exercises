import './People.css';
import Person from './Person';

function People(props) {
    return <table>
        <tbody>
        {props.people.map(p =>
            <Person person={p} key={p.id}/>)}
        </tbody>
    </table>
}

export default People;