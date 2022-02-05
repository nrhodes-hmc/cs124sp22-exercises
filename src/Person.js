function Person(props) {
    const person = props.person;
    const classNames = [];
    if (props.isSelected) {
        classNames.push("selected");
    }

    return <tr className={classNames.join(" ")}
               onClick={(e) => (e.shiftKey ? props.onPersonToggleSelected : props.onPersonSelected)(person)}>
        <td className={"name"}>{person.name}</td>
        <td className={"email"}>{person.email}</td>
        <td className={"phone"}>{person.phone}</td>
    </tr>;
}

export default Person;
