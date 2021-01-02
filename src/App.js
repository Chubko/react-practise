import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import UsersList from "./components/UsersList";
import Button from "./components/Button";

export default function App(){
    const users = useSelector(({users}) => users);
    const dispatch = useDispatch();

    const addUser = (e)=>{
        e.preventDefault();
        const userName = e.target[0].value;
        const userAge= +e.target[1].value;
        const userId = new Date().getTime();
        return dispatch({type: 'ADD_USER', payload: {userName, userAge, userId}})
    }

    const removeUser = (id)=>{
        return dispatch({type: 'REMOVE_USER', payload: id});
    }

        return(
            <div>
                <form onSubmit={addUser}>
                    <input placeholder='enter your name'/>
                    <input placeholder='enter your age'/>
                    <button>save</button>
                </form>
                <hr/>
                {users.map(user =>
                    <>
                        <UsersList
                            user={user}
                            key={user.userId}
                        />
                        <Button removeUser={removeUser} id={user.userId} value={'delete'}/>
                        <Button value={'edit'}/>
                    </>
                    )}
            </div>
    )
    }


