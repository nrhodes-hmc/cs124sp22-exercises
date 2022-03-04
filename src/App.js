import './App.css';

const data = [
    {
        id: 512,
        name: "Neil Rhodes",
        email: "rhodes@hmc.edu",
        phone: "(909) 555-1212"
    },
    {
        id: 787,
        name: "Barack Obama",
        email: "ex-prez@whitehouse.gov",
        phone: "(312) 555-1212"
    }
];

function Person(props) {
    return <tr>
        <td className={"name"}>{props.name}</td>
        <td className={"email"}>{props.email}</td>
        <td className={"phone"}>{props.phone}</td>
    </tr>;
}

function People(props) {
    return <table>
        <tbody>
        {props.people.map(p => <Person {...p}/>)}
        </tbody>
    </table>
}

function App() {
    /*
    <Person {...p}/>
     is equivalent to:
     <Person name={p.name} email={p.email} phone={p.phone}/>

     <>
     is equivalent to:
     <React.Fragment>
     */
    return <>
        <h1>People</h1>
        <People people={data}/>
    </>;
}

export default App;
