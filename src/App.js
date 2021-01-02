import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export default function App() {
    let users = useSelector(({users}) => users);
    let choicesForDelete = useSelector(({choicesForDelete}) => choicesForDelete);
    const dispatch = useDispatch();

    const addUser = (e)=> {
        e.preventDefault();
        const userName = e.target[0].value;
        const userAge = +e.target[1].value;
        const userId = Math.floor(Date.now()/1000);
        users = [...users, {userName, userAge, userId}]
        return dispatch({type: 'ADD', payload: users})
    }

    const selectUser = (e)=>{
        e.preventDefault();
        const id = +e.target.value.split('-')[2];
        return dispatch({type: 'SELECT', payload: id})
    }

    const removeUser = (e)=>{
        e.preventDefault();
        return dispatch({type: 'REMOVE', payload: choicesForDelete})
    }

    return (
        <div>
            <form onSubmit={addUser}>
                <input placeholder='enter your name'/>
                <input placeholder='enter your age'/>
                <button>save</button>
            </form>
            <form>
                <select onClick={(e)=>selectUser(e)}>
                {users.map(user =>
                <option key={user.userId}>
                    {user.userName}-{user.userAge}-{user.userId}
                </option>
                )}
                </select>
                <button onClick={(e)=>removeUser(e)}>remove</button>
            </form>
        </div>
    )
}