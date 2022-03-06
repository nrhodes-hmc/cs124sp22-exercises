import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const INITIAL_STATE = {
    people: [
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
    ],
    selectedId: null
}

function rootReducer(state = INITIAL_STATE,
                     action) {
    switch (action.type) {
        case 'ADD_PERSON':
            return {
                ...state,
                people: [...state.people,
                    {
                        id: generateUniqueID(),
                        name: "",
                        email: "",
                        phone: "",
                    }]
            };

        case 'DELETE_SELECTED_PERSON':
            console.log('DELETE_SELECTED_PERSON',)
            return {
                ...state,
                people: state.people.filter(p => state.selectedId !== p.id),
                selectedId: null
            };
        case 'SELECT_PERSON':
            return {
                ...state,
                selectedId: action.person.id
            }
        case 'CHANGE_FIELD':
            return {
                people: state.people.map(p => p.id !== action.id
                    ? p
                    : {...p, [action.field]: action.value})
            }
        default:
            return state;
    }
}

const store = createStore(rootReducer, INITIAL_STATE);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
