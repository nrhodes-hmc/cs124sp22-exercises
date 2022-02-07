import './PersonField.css'

function PersonField(props) {
    return <td><input
        className={"person " + props.field}
        onClick={(e) => e.stopPropagation()}
        onChange={
            (e) => props.onPersonChangeField(props.person.id, props.field, e.target.value)
        }
        value={props.person[props.field]}/>
    </td>
}

export default PersonField;
