import './AlertApp.css';
import {useState} from 'react'

function AlertApp() {
    const [showAlert, setShowAlert] = useState(false);

    function handleAlertOK() {
        console.log('the frob should be blitzened here');
    }

    return (
        <div className={"app-container"}>
            <div className="alertapp">
                This is my app
                <br/>
                <button type={"button"} onClick={() => console.log('clicked')}>
                    Log to Console
                </button>
                <button type={"button"} onClick={() => setShowAlert(true)}>
                    Frob
                </button>
            </div>
            {showAlert && <div className={"backdrop"}>
                <div className="modal">
                    Are you sure you want to Frob the blitzen?
                    <div className="alert-buttons">
                        <button className={"alert-button alert-cancel"} type={"button"}
                                onClick={() => setShowAlert(false)}>
                            Cancel
                        </button>
                        <button className={"alert-button alert-ok"} type={"button"}
                                onClick={() => {
                                    handleAlertOK();
                                    setShowAlert(false)
                                }}>
                            OK
                        </button>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default AlertApp;
