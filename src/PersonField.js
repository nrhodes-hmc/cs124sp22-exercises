import './PersonField.css'
import {useDispatch} from 'react-redux'

function PersonField(props) {
    const dispatch = useDispatch();
    return <td><input
        className={"person " + props.field}
        onClick={(e) => e.stopPropagation()}
        onChange={
            (e) => dispatch(
                {
                    type: 'CHANGE_FIELD',
                    id: props.person.id,
                    field: props.field,
                    value: e.target.value
                }
            )}
        value={props.person[props.field]}/>
    </td>
}

export default PersonField;
