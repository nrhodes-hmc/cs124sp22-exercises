function Person(props) {
    const person = props.person;
    const classNames = [];
    if (props.isSelected) {
        classNames.push("selected");
    }

    return <tr className={classNames.join(" ")}
               onClick={(e) => (e.shiftKey ? props.onPersonToggleSelected : props.onPersonSelected)(person)}>
        <td className={"name"}><input
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => props.onPersonChangeField(person.id, 'name', e.target.value)} value={person.name}/></td>
        <td className={"email"}>{person.email}</td>
        <td className={"phone"}>{person.phone}</td>
    </tr>;
}

export default Person;
