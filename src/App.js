import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decCounter, fetchTodos, incCounter, resetCounter} from "./redux";

export default function App(){
    const dispatch = useDispatch();
    const {todos, counter} = useSelector(({counter:{counter},todos:{todos}}) => ({
        todos,
        counter
    }));

    useEffect(()=>{
        fetchTodos(dispatch);//може використовуватись на різних сторінках, виноситься в окремий
        //action creator, щоб там відбувся асинх запит і дані задіспатчились в стор. В action creator
        //дається доступ до dispatch, бо хуки доступні лише компоненту
    },[dispatch]);

    // const fetchTodos = async ()=>{
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    //     const data = await response.json();
    //     dispatch(setTodos(data));
    // }

    const handleInc = ()=> dispatch(incCounter());
    const handleDec = ()=> dispatch(decCounter());
    const handleReset = ()=> dispatch(resetCounter());
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleInc}>++</button>
            <button onClick={handleDec}>--</button>
            <button onClick={handleReset}>reset</button>
            {todos.map((todo)=>(
                <h2>{todo.id}-{todo.title}</h2>
                )) }
        </div>
    )
}

