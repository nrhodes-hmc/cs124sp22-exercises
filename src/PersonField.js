import './PersonField.css'

function PersonField(props) {
    return <td>
        {props.person[props.field]}
    </td>
}

export default PersonField;
