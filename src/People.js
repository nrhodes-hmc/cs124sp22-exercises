import Person from './Person';

function People(props) {
    return <table>
        <tbody>
        {props.people.map(p =>
            <Person person={p}
                    key={p.name}
                    isSelected={props.selectedPeopleIds.includes(p.id)}
                    onPersonToggleSelected={props.onPersonToggleSelected}
                    onPersonSelected={props.onPersonSelected}/>
        )}
        </tbody>
    </table>
}

export default People;