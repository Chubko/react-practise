export default function Button(props){
    const {value, removeUser, id} = props;

    return(
        <button onClick={()=>removeUser(id)}>{value}</button>
    )
}