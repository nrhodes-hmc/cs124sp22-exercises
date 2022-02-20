import './AlertApp.css';
import {useState} from 'react'
import Alert from './Alert';

function AlertApp() {
    const [showAlert, setShowAlert] = useState(false);

    function handleAlertOK() {
        console.log('the frob should be blitzened here');
    }

    function toggleModal() {
        setShowAlert(!showAlert);
    }

    return (
        <div className={"app-container"}>
            <div className="alertapp">
                This is my app
                <br/>
                <button type={"button"} onClick={() => console.log('clicked')}>
                    A button
                </button>
                <button type={"button"} onClick={toggleModal}>
                    Frob
                </button>
            </div>
            {showAlert && <Alert onClose={toggleModal} onOK={handleAlertOK}>
                <div>
                    Are you sure you want to Frob the blitzen?
                </div>
            </Alert>}
        </div>
    );
}

export default AlertApp;
