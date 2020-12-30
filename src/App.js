import React, {Component} from 'react';
import {useSelector, useDispatch} from "react-redux";


export default function App() {
    let users = useSelector(({users}) => users);
    const dispatch = useDispatch();

    const addUser = (e)=>{
       e.preventDefault();
       const userName = e.target[0].value;
       const userAge= +e.target[1].value;
       const userId = new Date().getTime();
       users = [...users, {userName, userAge, userId}]
       return dispatch({type: 'ADD', payload: users})
    }
    console.log(users)

    // let selectedId;
    // //
    // const selectUser = (e) => {
    //     selectedId = e.target.value.id;
    // console.log(selectedId)
    // }
    // console.log(selectedId)
    let id;

    const selectUser = (event)=>{
        users.map(user => {
            // if(user.options[0].selected == true){
                console.log(user.options)
            // }
        })

    }
    const removeUser = (e, id)=>{
        e.preventDefault();
        let usersUpdate = users.filter((user)=>user.userId !==id)
        // console.log(e.target)
        // const deletedUser = users.find(value => value.id === +e.target[2].value);
        console.log(e.target)
        return dispatch({type: 'REMOVE', payload: usersUpdate})
    }



    return (
        <div>
            <form onSubmit={addUser}>
                <input placeholder='enter your name'/>
                <input placeholder='enter your age'/>
                <button>save</button>
            </form>
            <form>
                <select status ={false} onChange={(status) =>{{
                    users.map(user => {
                        if(status === true){
                        console.log(status)
                        }
                    })

                }}}>
                {users.map(user =>
                <option key={user.userId}>
                    {user.userName}-{user.userAge}
                </option>
                )}
                </select>
                <button onClick={removeUser}>remove</button>
            </form>

        </div>

    )
}